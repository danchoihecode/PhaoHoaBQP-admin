<template>
  <div class="toasted-alert">
    <div
      id="toast-success"
      class="flex items-center justify-center p-2 mb-4 w-full max-w-sm rounded shadow border-[1px] dark:text-gray-400"
      :class="
        props.content.type === 'success'
          ? 'bg-[#F1FFF4] border-[#C0ECD4]'
          : 'bg-[#FFF5F5] border-[#CF0D3C]'
      "
      role="alert"
    >
      <div class="mr-3 p-2">
        <Icon :type="props.content.type === 'success' ? SUCCESS : ERROR" />
      </div>
      <div class="flex flex-col">
        <div class="text-lg font-semibold text-[#4D4E50]">
          {{ props.content.type.toUpperCase() }} NOTIFICATION
        </div>
        <div class="text-sm font-normal text-[#6D6E70]">
          {{ props.content.message }}
        </div>
      </div>
      <div class="ml-2 p-2 cursor-pointer" @click="$emit('onClose')">
        <Icon :type="CLOSE" />
      </div>
    </div>
  </div>
</template>
<script setup>
import Icon from '@/components/elements/Icon.vue';
import { ERROR, SUCCESS, CLOSE } from '@/utils/constant';
const props = defineProps({
  content: {
    type: Object,
    default: {
      type: 'success',
      message: 'Demo',
    },
  },
});
</script>
<style lang="scss">
.toasted-alert {
  position: fixed;
  right: 50px;
  top: 20px;
  z-index: 1000000;
}
</style>
