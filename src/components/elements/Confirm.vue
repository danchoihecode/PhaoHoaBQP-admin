<template>
  <div class="absolute inset-0 z-10 bg-black opacity-30 h-full w-full"></div>
  <div
    class="bg-white rounded-lg shadow-md absolute z-50 xl:top-1/3 top-1/4 xl:right-[600px] lg:right-[370px] right-50"
  >
    <div class="flex flex-col items-center justify-around p-6">
      <div class="p-2 my-2 text-lg">Bạn có chắc chắn xóa ?</div>
      <div class="flex-1 flex justify-between items-center">
        <button
          class="text-white bg-red_600 hover:bg-red_700 w-[38px] h-[32px] text-base border-solid rounded-md mx-3"
          @click="$emit('cancelHandler')"
        >
          No
        </button>
        <button
          class="text-black bg-[#3be755] hover:bg-[#35cc4c] w-[38px] h-[32px] text-base border-solid rounded-md mx-3"
          @click="$emit('acceptHandler')"
        >
          Yes
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import Icon from '@/components/elements/Icon.vue';
import { DELETE } from '@/utils/constant';
</script>
