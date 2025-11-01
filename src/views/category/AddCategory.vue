<template>
  <BreadCrumb></BreadCrumb>
  <InputText v-model="categoryName" :placeholder="'Tên danh mục'" name="Category name" />
  <InputText v-model="categorySlug" :placeholder="'Slug'" name="Category slug"F />
  <div class="flex items-center justify-center mt-4">
    <BaseButton :title="'LƯU'" :customStyle="'custom-btn-style'" @onClick="createCategory" />
  </div>
</template>
<script setup>
import { ref } from 'vue';
import Content from '@/components/elements/Content.vue';
import BreadCrumb from '@/components/layout/BreadCrumb.vue';
import InputText from '@/components/elements/InputText.vue';
import { useBreadCrumbStore } from '@/stores/bread-crumb';
import BaseButton from '@/components/elements/BaseButton.vue';
import { useRouter } from 'vue-router';
import { useCategoryStore } from '@/stores/category';

const store = useCategoryStore();
const router = useRouter();

const title = 'Thêm danh mục';
const listBreadcrumb = [
  {
    label: 'Trang chủ',
    path: '/',
  },
  {
    label: 'Quản lý danh mục',
    path: '/category',
  },
  {
    label: 'Danh sách danh mục',
    path: '/category',
  },
  {
    label: 'Thêm danh mục',
    path: '/category/add-category',
  },
];
const breadcrumb = useBreadCrumbStore();
breadcrumb.setBreadCrumbs(title, listBreadcrumb);

let categoryName = '';
let categorySlug = '';
const createCategory = async () => {
  const formData = { name: categoryName, slug: categorySlug };
  const response = await store.createCategory(formData);
  if (response.status === 1) {
    router.push('/category');
  } else
    alert(response.message);



};
</script>