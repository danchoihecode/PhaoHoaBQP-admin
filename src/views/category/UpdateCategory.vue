<template>
  <BreadCrumb></BreadCrumb>
  <InputText v-model="categoryName" :placeholder="'Tên danh mục'" name="Category name" />
  <InputText v-model="categorySlug" :placeholder="'Slug'" name="Category slug" />
  <div class="flex items-center justify-center mt-4">
    <BaseButton :title="'LƯU'" :customStyle="'custom-btn-style'" @onClick="updateCategory" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useCategoryStore } from '@/stores/category';
import Content from '@/components/elements/Content.vue';
import BreadCrumb from '@/components/layout/BreadCrumb.vue';
import InputText from '@/components/elements/InputText.vue';
import { useBreadCrumbStore } from '@/stores/bread-crumb';
import BaseButton from '@/components/elements/BaseButton.vue';

const title = 'Cập nhật danh mục';
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
    label: 'Cập nhật danh mục',
    path: '/category/update-category',
  },
];
const breadcrumb = useBreadCrumbStore();
breadcrumb.setBreadCrumbs(title, listBreadcrumb);

const router = useRouter();
const route = useRoute();
const store = useCategoryStore();
let categoryName = ref('');
let categorySlug = ref('')

// hien thi category
onMounted(async () => {
  const categoryId = route.params.id;
  const response = await store.getCategoryById(categoryId);
  categoryName.value = response.data.name;
  categorySlug.value = response.data.slug;
});

const updateCategory = async () => {
  const formData = { name: categoryName.value, slug: categorySlug.value };
  const categoryId = route.params.id;
  const response = await store.updateCategory(formData, categoryId);
  if (response.status === 1)
    router.push('/category');
  else
    alert(response.message);
};
</script>
