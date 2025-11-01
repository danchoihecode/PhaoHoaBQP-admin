<template>
  <BreadCrumb></BreadCrumb>
  <div class="button-container">
    <BaseButton :title="'Thêm danh mục'" :classStyle="'font-roboto'" :customStyle="'custom-btn-style'"
      @onClick="gotoAdd" class="ml-auto" />
  </div>
  <Content style="border: none;">
    <BaseTable :headers="header" :items="paginatedItems">
      <template #[`action`]="{ item }">
        <div class="flex justify-end items-center">
          <div class="cursor-pointer p-2" @click="gotoUpdate(item.id)">
            <Icon :type="PENCIL" />
          </div>
          <div class="cursor-pointer p-2" @click="onDelete(item.id)">
            <Icon :type="DELETE" />
          </div>
        </div>
      </template>
    </BaseTable>

    <PaginationControls
      :currentPage="currentPage"
      :totalPages="totalPages"
      :rowsPerPage="rowsPerPage"
      @update:rowsPerPage="updateRowsPerPage"
      @prevPage="prevPage"
      @nextPage="nextPage"
    />
  </Content>
  <div v-if="popup.isHiddenPopUp">
    <Confirm @cancelHandler="cancelHandler" @acceptHandler="acceptHandler" />
  </div>
</template>

<script setup>
import Icon from '@/components/elements/Icon.vue';
import Content from '@/components/elements/Content.vue';
import Confirm from '@/components/elements/Confirm.vue';
import BaseTable from '@/components/elements/BaseTable.vue';
import BaseButton from '@/components/elements/BaseButton.vue';
import BreadCrumb from '@/components/layout/BreadCrumb.vue';
import PaginationControls from '@/components/elements/PaginationControls.vue'; // Import the new component
import { useRoute, useRouter } from 'vue-router';
import { useBreadCrumbStore } from '@/stores/bread-crumb';
import { PENCIL, DELETE } from '@/utils/constant';
import { useCategoryStore } from '@/stores/category';
import { popupStore } from '@/stores/popup';
import { useI18n } from 'vue-i18n';
import { ref, computed, onMounted } from 'vue';

const router = useRouter();
const popup = popupStore();
const { t } = useI18n();
const header = [
  {
    key: 'id',
    title: 'ID',
  },
  {
    key: 'name',
    title: 'Tên danh mục',
  },
  {
    key: 'action',
    title: 'Actions',
  },
];

const title = 'Danh sách danh mục (category)';
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
  }
];
const breadcrumb = useBreadCrumbStore();
breadcrumb.setBreadCrumbs(title, listBreadcrumb);

const items = ref([]);
const currentPage = ref(1);
const rowsPerPage = ref(5); 
const category = useCategoryStore();

const fetchCategories = async () => {
  try {
    items.value = await category.getList();
  } catch (error) {
    console.error('Fetch categories error:', error);
  }
};

onMounted(async () => {
  await fetchCategories();
});

const totalPages = computed(() => {
  return Math.ceil(items.value.length / rowsPerPage.value); 
});

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * rowsPerPage.value; 
  return items.value.slice(start, start + rowsPerPage.value); 
});

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const onDelete = (id) => {
  popup.setPopUp(true);
  popup.setIndex(id);
};

const cancelHandler = () => {
  popup.setPopUp(false);
};

// Xóa category khỏi danh sách hiện tại mà không cần tải lại trang
const acceptHandler = async () => {
  const id = popup.index;
  try {
    await category.deleteCategory(id);
    items.value = items.value.filter((item) => item.id !== id);
    popup.setPopUp(false);
  } catch (error) {
    console.error('Error deleting category:', error);
  }
};

const gotoAdd = () => {
  router.push('/category/add-category');
};

const gotoUpdate = (id) => {
  router.push(`/category/update-category/${id}`);
};

const updateRowsPerPage = (newRowsPerPage) => {
  rowsPerPage.value = newRowsPerPage;
  currentPage.value = 1; 
};
</script>

<style>
.button-container {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
}
</style>
