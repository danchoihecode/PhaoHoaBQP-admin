<template>
  <BreadCrumb></BreadCrumb>
    <div>Welcome back !</div>
</template>
<script setup>
import { useBreadCrumbStore } from '@/stores/bread-crumb';
import BreadCrumb from '@/components/layout/BreadCrumb.vue';
import Content from '@/components/elements/Content.vue';

const listBreadcrumb = [
  {
    label: 'Trang chủ',
    path: '/',
  },
  {
    label: 'Dashboard',
    path: '/',
  },
];
const title = 'Trang chủ';

const breadcrumb = useBreadCrumbStore();
breadcrumb.setBreadCrumbs(title, listBreadcrumb);
</script>
