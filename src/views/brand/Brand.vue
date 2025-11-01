<!-- <template>
  <BreadCrumb></BreadCrumb>
  <Content style="border: none;">
    <BaseTable :headers="headers" :items="paginatedItems">
      <template #[`img_url`]="{ item }">
        <div v-if="item.img_url != null" class="w-24 h-auto m-auto">
          <img :src="item.img_url" alt="Image" class="w-full h-auto max-h-[100px] object-contain">
        </div>
      </template>
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
import { useBrandStore } from '@/stores/brand';
import PaginationControls from '@/components/elements/PaginationControls.vue';

const breadcrumb = useBreadCrumbStore();
const title = 'Danh sách nhãn hàng';
const listBreadcrumb = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Nhãn hàng', path: '/brand' },
  { label: 'Danh sách nhãn hàng', path: '/brand' },
];
breadcrumb.setBreadCrumbs(title, listBreadcrumb);

const headers = [
  { key: 'id', title: 'ID' },
  { key: 'img_url', title: 'Logo nhãn hàng' },
  { key: 'name', title: 'Tên nhãn hàng' }
];

const brandStore = useBrandStore();
const items = ref([]);
const currentPage = ref(1);
const rowsPerPage = ref(5);

onMounted(async () => {
  items.value = await brandStore.getAllBrands();
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