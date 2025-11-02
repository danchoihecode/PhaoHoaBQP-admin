<!-- <template>
  <BreadCrumb></BreadCrumb>
  <Content style="border: none;">
    <BaseTable :headers="headers" :items="paginatedItems">
    </BaseTable>
    <PaginationControls :currentPage="currentPage" :totalPages="totalPages" :rowsPerPage="rowsPerPage"
      @update:rowsPerPage="updateRowsPerPage" @prevPage="prevPage" @nextPage="nextPage" />
  </Content>
</template>

<script setup>
import Content from '@/components/elements/Content.vue';
import BaseTable from '@/components/elements/BaseTable.vue';
import BreadCrumb from '@/components/layout/BreadCrumb.vue';
import { useBreadCrumbStore } from '@/stores/bread-crumb';
import { onMounted, ref, computed } from 'vue';
import { useShowroomStore } from '@/stores/showroom';
import PaginationControls from '@/components/elements/PaginationControls.vue';

const breadcrumb = useBreadCrumbStore();
const title = 'Danh sách kho hàng';
const listBreadcrumb = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Quản lý kho', path: '/news' },
  { label: 'Danh sách kho', path: '/news' },
];
breadcrumb.setBreadCrumbs(title, listBreadcrumb);

const headers = [
  { key: 'id', title: 'ID', align: 'text-left' },
  { key: 'store_name', title: 'Tên kho', align: 'text-left' },
  { key: 'address', title: 'Địa chỉ', align: 'text-left' },
  { key: 'phone_number', title: 'SĐT Liên hệ', align: 'text-left' }
];

const showroomStore = useShowroomStore();
const items = ref([]);
const currentPage = ref(1);
const rowsPerPage = ref(5);

onMounted(async () => {
  items.value = await showroomStore.getShowroomList();
});

const totalPages = computed(() => {
  return Math.ceil(items.value.length / rowsPerPage.value);
});

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * rowsPerPage.value;
  const end = start + rowsPerPage.value;
  return items.value.slice(start, end);
});

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
  console.log(filteredItems.value.length);
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const updateRowsPerPage = (newRowsPerPage) => {
  rowsPerPage.value = newRowsPerPage;
  currentPage.value = 1;
};

</script>

<style scoped>
.search-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.search-input {
  width: 100%;
  max-width: 300px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.pagination-controls {
  display: flex;
  justify-content: right;
  margin-top: 1rem;
}

.pagination-button {
  background-color: #4bbdcf;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.pagination-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.pagination-info {
  margin: 0 1rem;
  font-size: 14px;
  color: #333;
}
</style> -->
<template>
  <div>Mở rộng trong tương lai</div>
</template>
<script setup></script>
