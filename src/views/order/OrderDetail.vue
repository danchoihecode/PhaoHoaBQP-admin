<template>
  <BreadCrumb></BreadCrumb>
  <content>
    <div>
      <div class="flex justify-between items-center mb-3 ml-5">
        <div>
          {{ t('order.order_id') }}: <span class="font-bold">{{ items.id }}</span>
        </div>
        <div>
          <select class="border-2 border-solid border-gray_200 bg-gray_01 rounded-lg h-9 w-40 px-2 outline-none"
            v-model="items.status">
            <option :value="DELIVERED">
              {{ t('order.status.delivered') }}
            </option>
            <option :value="SHIPPED">{{ t('order.status.shipped') }}</option>
            <option :value="CANCELED">
              {{ t('order.status.canceled') }}
            </option>
            <option :value="PENDING">{{ t('order.status.pending') }}</option>
          </select>
        </div>
      </div>
      <div class="flex items-start justify-between p-3 m-2">
        <div class="flex items-start w-[50%]">
          <div>
            <div class="py-2">
              {{ t('order.customer') }}:
              <span class="ml-4">{{ items.customer_name }}</span>
            </div>
            <div class="py-2">
              {{ t('order.phone') }}:
              <span class="ml-4">{{ items.customer_phone }}</span>
            </div>
            <div class="py-2">
              {{ t('order.location') }}:
              <span class="ml-4">{{ items.location }}</span>
            </div>
            <div class="py-2">
              Cách thức nhận hàng:
              <span class="ml-4">{{ items.delivery_method }}</span>
            </div>
          </div>
        </div>
        <div class="flex items-start w-[45%]">
          <div>
            <div class="py-2">
              {{ t('order.order_time') }}:
              <span class="ml-4">{{ items.order_time }}</span>
            </div>
            <div class="py-2">
              {{ t('update_time') }}:
              <span class="ml-4">{{ items.updated_time }}</span>
            </div>
            <div class="py-2">
              {{ t('staff.title') }}:
              <span class="ml-4">{{ items.staff_name || "Admin" }} </span>
            </div>
            <div class="py-2">
              {{ t('order.total_price') }}:
              <span class="ml-4">{{ items.total_price }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <Content>
        <BaseTable :headers="header" :items="items.product_list">
          <template #[`image`]="{ item }">
            <div v-if="item.image != null" class="w-24 h-auto">
              <img :src="`${backendUrl}/${item.image}`" alt="Image" class="w-full h-auto max-h-[100px] object-contain">
            </div>
          </template>
        </BaseTable>
      </Content>
    </div>
  </content>
  <div class="flex items-center justify-center mt-4">
    <BaseButton :title="'LƯU'" :customStyle="'custom-btn-style'" @onClick="updateStatus" />
  </div>
</template>
<script setup>
import Status from '@/components/elements/Status.vue';
import Content from '@/components/elements/Content.vue';
import BaseTable from '@/components/elements/BaseTable.vue';
import BreadCrumb from '@/components/layout/BreadCrumb.vue';
import BaseButton from '@/components/elements/BaseButton.vue';
import { DELIVERED, SHIPPED, CANCELED, PENDING } from '@/utils/constant';
import { PROFILE, SHOPPING_CART } from '@/utils/constant';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';
import { ordersStore } from '@/stores/order';
import { useBreadCrumbStore } from '@/stores/bread-crumb';
import { formatDateTime } from '@/utils/dateFormatter';

const { t } = useI18n();
const router = useRouter();
const route = useRoute()
const breadcrumb = useBreadCrumbStore();
const title = 'Chi tiết đơn hàng';
const backendUrl = import.meta.env.VITE_URL_API;
const listBreadcrumb = [
  {
    label: 'Trang chủ',
    path: '/',
  },
  {
    label: 'Quản lý đơn hàng',
    path: '/order'
  },
  {
    label: 'Danh sách đơn hàng',
    path: '/order',
  },
  {
    label: 'Chi tiết đơn hàng',
    path: '/order/order-detail',
  },
];

const header = [
  {
    key: 'product_id',
    title: 'ID',
  },
  {
    key: 'image',
    title: 'Hình ảnh',
  },
  {
    key: 'product_name',
    title: t('product.product_name'),
  },
  {
    key: 'sku',
    title: 'SKU',
  },
  {
    key: 'serial_number',
    title: 'Số seri',
  },
  {
    key: 'quantity',
    title: t('product.product_quantity'),
  },
  {
    key: 'price',
    title: t('product.product_price'),
  },
];
breadcrumb.setBreadCrumbs(title, listBreadcrumb);

const param = route.params.order_id;
const order = ordersStore();
const items = ref({});


order.getOrderById(param).then((data) => {
  items.value = {
    id: data.data.id,
    customer_name: data.data.customer_name,
    customer_phone: data.data.customer_phone,
    location: data.data.address,
    delivery_method: data.data.delivery_method === 'giao_tan_noi' ? 'Giao tận nơi' : 'Nhận tại kho',
    order_time: formatDateTime(data.data.created_at),
    updated_time: formatDateTime(data.data.updated_at),
    total_price: formatPrice(data.data.total_amount),
    status: data.data.order_status.toUpperCase(),
    staff_name: "Admin",
    product_list: data.data.order_items.map((item) => {
      return {
        product_id: item.product_id,
        image: item.product.images[0].img_url,
        product_name: item.product.name,
        sku: item.product.sku,
        serial_number: item.product.serial_number,
        quantity: item.quantity,
        price: formatPrice(item.price),
      };
    }),
  }
});

function formatPrice(price) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}

const updateStatus = async () => {
  const formData = {
    order_status: items.value.status,
  };
  console.log(formData);
  const response = await order.updateStatus(param, formData);
  console.log(response);
  router.push('/order');
};
</script>

<style scoped>
.py-2 .ml-4 {
  font-weight: bold;
}
</style>