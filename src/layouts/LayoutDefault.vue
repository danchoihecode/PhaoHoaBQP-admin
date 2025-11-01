<template>
  <div>
    <div class="content">
      <div class="header">
        <Header @toggleSidebar="toggleSidebar"></Header>
      </div>
      <div class="main-content">
        <div class="main-content__sidebar" id="sidebar">
          <Sidebar ref="sidebar" />
        </div>
        <div class="main-content__content">
          <slot></slot>
        </div>
      </div>
    </div>
    <div v-if="toast.isToasted">
      <Toasted :content="toast.content" @onClose="toast.closeToast()" />
    </div>
  </div>
</template>
<script setup>
import Sidebar from '@/components/layout/Sidebar.vue';
import Header from '@/components/layout/Header.vue';
import { ref, onMounted } from 'vue';
import { toastStore } from '@/stores/toasted';
import Toasted from '@/components/Toasted.vue';
const toast = toastStore();
toast.autoCloseToast();

const sidebar = ref(null);
const toggleSidebar = () => {
  var element = document.getElementById('sidebar');
  element.classList.toggle('main-content__sidebar_sm');
  sidebar.value.openMenu();
};
</script>
<style lang="scss" scoped>
$height_header: 5rem;

.content {
  @apply bg-secondary;
}

.header {
  height: $height_header;
}

.main-content {
  height: calc(100vh - $height_header);
  @apply flex items-center mt-5;

  &__sidebar {
    transition: width 500ms;
    @apply h-full w-[20rem] p-5 pt-0;
  }

  &__sidebar_sm {
    @apply h-full w-[3rem] p-2;
  }

  &__content {
    @apply rounded-xl w-full h-full  bg-white lg:p-8 lg:mr-5 lg:mb-10 md:p-4 md:mr-3 md:mb-5 p-2 mr-1 mb-2 overflow-y-auto;
  }
}
</style>
