<template>
  <BreadCrumb></BreadCrumb>
  <Content style="border: none;">
    <BaseTable :headers="headers" :items="paginatedItems">
      <template #[`status`]="{ item }">
        <Status :status="item.status" />
      </template>
      <template #[`action`]="{ item }">
        <div
          class="flex items-center justify-center cursor-pointer p-2"
          @click="gotoUpdate(item.id)"
        >
          <Icon :type="ARROW_RIGHT" />
        </div>
      </template>
    </BaseTable>
    <PaginationControls :currentPage="currentPage" :totalPages="totalPages" :rowsPerPage="rowsPerPage"
      @update:rowsPerPage="updateRowsPerPage" @prevPage="prevPage" @nextPage="nextPage" />
  </Content>
</template>

<script setup>
import Icon from '@/components/elements/Icon.vue';
import Status from '@/components/elements/Status.vue';
import Content from '@/components/elements/Content.vue';
import BaseTable from '@/components/elements/BaseTable.vue';
import BreadCrumb from '@/components/layout/BreadCrumb.vue';
import { useBreadCrumbStore } from '@/stores/bread-crumb';
import { ARROW_RIGHT } from '@/utils/constant';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { ordersStore } from '@/stores/order';
import { ref, computed, onMounted } from 'vue';
import PaginationControls from '@/components/elements/PaginationControls.vue'; 
import { formatDateTime } from '@/utils/dateFormatter';
const { t } = useI18n();
const router = useRouter();
const breadcrumb = useBreadCrumbStore();

const title = 'Danh sách đơn hàng';
const listBreadcrumb = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Quản lý đơn hàng', path: '/order' },
  { label: 'Danh sách đơn hàng', path: '/order' },
];
breadcrumb.setBreadCrumbs(title, listBreadcrumb);

const headers = [
  { key: 'id', title: 'ID' },
  { key: 'customer_name', title: t('order.customer') },
  { key: 'location', title: t('order.location') },
  { key: 'order_time', title: t('order.order_time') },
  { key: 'total_price', title: t('order.total_price') },
  { key: 'status', title: t('order.status.title') },
  { key: 'action', title: 'Actions' },
];

const order = ordersStore();
const items = ref([]);
const currentPage = ref(1);
const rowsPerPage = ref(5);

const fetchOrders = async () => {
  try {
    const data = await order.getOrderList();
    items.value = data.data.map(item => ({
      id: item.id,
      customer_name: item.customer_name,
      location: item.address,
      order_time: formatDateTime(item.created_at),
      total_price: formatPrice(item.total_amount),
      status: item.order_status.toUpperCase(),
    }));
  } catch (error) {
    console.error('Fetch orders error:', error);
  }
};

onMounted(async () => {
  await fetchOrders();
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

const updateRowsPerPage = (newRowsPerPage) => {
  rowsPerPage.value = newRowsPerPage;
  currentPage.value = 1;
};

const gotoUpdate = (id) => {
  router.push(`/order/${id}`);
};

function formatPrice(price) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}
</script>

<style scoped>
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
</style>
