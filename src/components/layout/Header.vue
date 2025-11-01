<template>
  <div class="flex justify-between items-center p-5">
    <div class="flex items-center">
      <div class="icon-hamburger cursor-pointer" @click="toggleSidebar()">
        <Icon :type="HUMBURER" />
      </div>
      <div class="pl-6">
        <img :src="Logo" width="177" height="44" />
      </div>
    </div>
    <div>
      <div v-click-outside="closeDropdown" class="test">
        <img
          :src="AvaterDefault"
          class="max-w-11 cursor-pointer"
          @click="showDropdown"
        />
        <div class="dropdown" v-if="isShow">
          <DropdownProfile />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Icon from '@/components/elements/Icon.vue';
import DropdownProfile from '@/components/layout/DropdownProfile.vue';
import { HUMBURER } from '@/utils/constant';
import Logo from '@/assets/images/banner.png';
import AvaterDefault from '@/assets/images/avatar.png';
import { vClickOutside } from '@/composables/clickOutside.js';
import { ref } from 'vue';

const isShow = ref(false);

const emit = defineEmits(['toggleSidebar']);
const toggleSidebar = () => {
  emit('toggleSidebar');
};
const showDropdown = () => {
  isShow.value = true;
};
const closeDropdown = () => {
  isShow.value = false;
};
</script>
<style lang="scss">
.dropdown {
  z-index: 107;
  margin: 0;
  position: fixed;
  inset: 0 0 auto auto;
  transform: translate(-29px, 68px);
  box-shadow: 0px 0px 50px 0px rgba(82, 63, 105, 0.15);
  border-radius: 0.75rem;
  width: 275px;
}
</style>
