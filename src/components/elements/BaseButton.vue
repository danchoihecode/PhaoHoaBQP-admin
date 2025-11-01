<template>
  <button :class="[height, width, classStyle, customStyle]" :disabled="disabled"
    :type="type" @click="$emit('onClick')">
    <div v-if="props.haveIcon" class="mr-[20px]">
      <Icon :type="props.typeIcon" :classCustom="props.classIcon" />
    </div>
    <slot>
      <div :class="haveIcon ? 'mr-[45px]' : ''">
        {{ props.title }}
      </div>
    </slot>
  </button>
</template>

<script setup>
import { PLUS } from '@/utils/constant';
import Icon from '@/components/elements/Icon.vue';
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: 'w-full text-[15px]',
  },
  height: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: '',
  },
  classStyle: {
    type: String,
    default: '',
  },
  typeIcon: {
    type: String,
    default: PLUS,
  },
  haveIcon: {
    type: Boolean,
    default: false,
  },
  classIcon: {
    type: String,
    default: '',
  },
  customStyle: {
    type: String,
    default: '',
  }
});
</script>

<style lang="scss" scoped>

.custom-btn-style {
  background: #4A91E2;
  box-shadow: 0px 4px 4px 0px #00000040;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 600;
  line-height: 18.75px;
  text-align: center;
  width: 135px;
  height: 34.5px;
  border-radius: 5px;
  outline: none;
}
.custom-btn-style:hover {
  background:#3A7FC2 ;
}
</style>
