<template>
  <component :is="layout" class="min-h-[100vh]">
    <router-view :key="path" />
  </component>
</template>
<script setup>
import { computed, shallowRef } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import LayoutDefault from '@/layouts/LayoutDefault.vue';
import LayoutAuth from '@/layouts/LayoutAuth.vue';

const listLayout = {
  LayoutDefault: LayoutDefault,
  LayoutAuth: LayoutAuth,
};

const layout = shallowRef('');
const router = useRouter();
const route = useRoute();
const path = computed(() => route.fullPath);

router.beforeEach(async (to, from, next) => {
  layout.value = listLayout[to.meta?.layout];
  window.scrollTo(0, 0);
  next();
});
</script>
