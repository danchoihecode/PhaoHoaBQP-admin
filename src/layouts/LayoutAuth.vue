<template>
  <div>
    <div class="h-screen grid place-items-center">
      <div class="w-2/5 flex items-center justify-center">
        <slot></slot>
      </div>
    </div>

    <div v-if="toast.isToasted">
      <Toasted :content="toast.content" @onClose="toast.closeToast()" />
    </div>
  </div>
</template>
<script setup>
import Logo from '@/assets/images/background.png';
import { computed } from 'vue';
import { toastStore } from '@/stores/toasted';
import Toasted from '@/components/Toasted.vue';
const toast = toastStore();
toast.autoCloseToast();
</script>
<style scoped lang="scss">
.backgound-base {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
