<template>
  <div>
    <div
      v-for="(menu, i) in menus"
      :key="i"
      class="my-5 lg:text-base md:text-sm text-xs font-medium text-black w-full"
    >
      <div
        class="flex items-center justify-between pl-2 cursor-pointer item-menu"
        :class="getClassActive(menu)"
        @click="goToPage(menu)"
      >
        <div class="flex items-center">
          <Icon :type="menu.icon" :active="menu.active" />
          <span class="pl-2" v-if="isShowAll">{{ t(menu.title) }}</span>
        </div>
        <div v-if="menu?.child && menu?.child.length > 0 && isShowAll">
          <Icon :type="ARROW_DOWN" :active="menu.active" />
        </div>
      </div>
      <div v-show="menu.active && isShowAll">
        <div
          v-for="child in menu?.child"
          :key="child.key"
          class="pl-6 my-5 item-menu"
          :class="[child.active ? 'active-child' : '']"
        >
          <div
            class="flex items-center cursor-pointer"
            @click="goToPage(child)"
          >
            <Icon :type="child.icon" :active="child.active" />
            <span class="pl-2">{{ t(child.title) }} </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { MENU } from '../../utils/menu';
import { ARROW_DOWN, ACTIVE, INACTIVE } from '../../utils/constant';
import { useI18n } from 'vue-i18n';
import Icon from '../elements/Icon.vue';
import { useRoute, useRouter } from 'vue-router';
import { watchEffect, ref } from 'vue';
const { t } = useI18n();
const route = useRoute();
const router = useRouter();
const menus = ref(MENU);
const isShowAll = ref(true);

watchEffect(() => {
  menus.value.forEach((item) => {
    item.active = INACTIVE;
    if (item.key === route.meta.key) {
      item.active = ACTIVE;
    }
    item.child?.forEach((child) => {
      child.active = INACTIVE;
      if (child.key === route.meta.key) {
        child.active = ACTIVE;
        item.active = ACTIVE;
      }
    });
  });
});

const goToPage = (item) => {
  if (item.child) {
    item.active = !item.active;
  } else {
    router.push(item.path);
  }
};
const getClassActive = (item) => {
  if (item.active && item?.child && item?.child.length > 0) {
    return 'active';
  }
  if (item.active) {
    return 'active-child';
  }
  return '';
};

const openMenu = () => {
  isShowAll.value = !isShowAll.value;
};
defineExpose({ openMenu });
</script>
<style scoped lang="scss">
.active {
  @apply text-primary;
}

.active-child {
  @apply rounded-xl bg-white text-primary py-2;
}

.item-menu {
  transition: height 500ms;
  :hover {
    @apply text-primary;
  }
}
</style>
