<template>
  <BreadCrumb></BreadCrumb>
  <div class="flex justify-between items-center mb-4">
    <div class="flex space-x-4">
      <input type="text" v-model="name" placeholder="Tên sản phẩm"
        class="bg-[#DFDFDF] rounded-[5px] text-[#4D4E50] font-sans text-[14px] font-normal leading-[16px] text-left outline-none w-[150px] h-[34.5px] p-2" />

      <!-- <select v-model="selectedBrand" id="brand"
        class="bg-[#DFDFDF] rounded-[5px] text-[#4D4E50] font-sans text-[14px] font-normal leading-[16px] text-left outline-none w-[150px] h-[34.5px]">
        <option value="">Nhãn hàng</option>
        <option v-for="brand in brands" :key="brand.id" :value="brand.id">{{ brand.name }}</option>
      </select> -->

      <select v-model="selectedStatus" id="status"
        class="bg-[#DFDFDF] rounded-[5px] text-[#4D4E50] font-sans text-[14px] font-normal leading-[16px] text-left outline-none w-[150px] h-[34.5px]">
        <option value="">Trạng thái kho</option>
        <option v-for="item in status" :key="item" :value="item">{{ item }}</option>
      </select>
      <BaseButton :title="'Search'" :width="'w-[102px]'" :height="'h-[34.5px]'"
        :classStyle="'bg-[#4A91E2] text-white font-roboto text-[14px] font-medium leading-[18.75px] text-center rounded-lg border-none outline-none hover:bg-[#3A7FC2]'"
        @onClick="searchProducts" />
    </div>

    <BaseButton :title="'Thêm sản phẩm'" :classStyle="'font-roboto'" :customStyle="'custom-btn-style'"
      @onClick="gotoAdd" class="ml-auto" />
  </div>

  <Content style="border: none;">
    <BaseTable :headers="headers" :items="items">
      <template #[`image`]="{ item }">
        <div v-if="item.image != null" class="w-24 h-auto">
          <img :src="item.image" alt="Image" class="w-full h-auto max-h-[100px] object-contain">
        </div>


      </template>
      <template #[`brand_image`]="{ item }">
        <div v-if="item.brand_image != null" class="w-20 h-auto">
          <img :src="item.brand_image" alt="Brand image" class="w-full h-full object-cover">
        </div>
      </template>
      <template #[`price`]="{ item }">
        <span v-if="item.price != null">
          {{ item.price.toLocaleString('vi-VN') }}
        </span>
      </template>
      <template #[`discount_price`]="{ item }">
        <span v-if="item.discount_price != null">
          {{ item.discount_price.toLocaleString('vi-VN') }}
        </span>
      </template>
      <template #[`action`]="{ item }">
        <div class="flex items-center justify-end">
          <div class="cursor-pointer p-2" @click="gotoUpdate(item.id)">
            <Icon :type="PENCIL" />
          </div>
          <div class="cursor-pointer p-2" @click="onDelete(item.id)">
            <Icon :type="DELETE" />
          </div>
        </div>
      </template>
    </BaseTable>
    <PaginationControls :currentPage="currentPage" :totalPages="totalPages" :rowsPerPage="rowsPerPage"
      @update:rowsPerPage="updateRowsPerPage" @prevPage="prevPage" @nextPage="nextPage" />
  </Content>
  <div v-if="popup.isHiddenPopUp">
    <Confirm @cancelHandler="cancelHandler" @acceptHandler="acceptHandler" />
  </div>
</template>

<script setup>
import Icon from '@/components/elements/Icon.vue';
import Confirm from '@/components/elements/Confirm.vue';
import Content from '@/components/elements/Content.vue';
import BaseTable from '@/components/elements/BaseTable.vue';
import BaseButton from '@/components/elements/BaseButton.vue';
import BreadCrumb from '@/components/layout/BreadCrumb.vue';
import PaginationControls from '@/components/elements/PaginationControls.vue';
import { useRouter } from 'vue-router';
import { PENCIL, DELETE } from '@/utils/constant';
import { productStore } from '@/stores/product';
import { popupStore } from '@/stores/popup';
import { ref, computed, onMounted } from 'vue';
import { useBrandStore } from '@/stores/brand';
import { useBreadCrumbStore } from '@/stores/bread-crumb';

const router = useRouter();
const product = productStore();
const popup = popupStore();
const breadcrumb = useBreadCrumbStore();
const brandStore = useBrandStore();

const items = ref([]);
const currentPage = ref(1);
const rowsPerPage = ref(5);
const totalPages = ref(0);


const name = ref('');
const selectedBrand = ref('');
const selectedStatus = ref('');
const brands = ref([]);
const status = ref(['Còn hàng', 'Hết hàng']);


const fetchProducts = async () => {
  try {
    const data = await product.getProductList(name.value, selectedBrand.value, selectedStatus.value,
      currentPage.value, rowsPerPage.value);
    items.value = data.products;
    totalPages.value = data.pagination.last_page;
  } catch (error) {
    console.error('Fetch products error:', error);
  }
};

onMounted(async () => {
  await fetchProducts();
  // brands.value = await brandStore.getBrandList();
});

const headers = [
  { key: 'id', title: 'ID' },
  { key: 'image', title: 'Hình ảnh' },
  { key: 'name', title: 'Tên sản phẩm' },
  // { key: 'brand_image', title: 'Nhãn hàng' },
  { key: 'stock_status', title: 'Trạng thái kho' },
  { key: 'price', title: 'Giá tiền (vnđ)' },
  { key: 'discount_price', title: 'Giá discount (vnđ)' },
  { key: 'action', title: 'Actions' },
];

const title = 'Danh sách sản phẩm';
const listBreadcrumb = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Quản lý sản phẩm', path: '/product' },
  { label: 'Danh sách sản phẩm', path: '/product' },
];
breadcrumb.setBreadCrumbs(title, listBreadcrumb);

const onDelete = (id) => {
  popup.setPopUp(true);
  popup.setIndex(id);
};

const cancelHandler = () => {
  popup.setPopUp(false);
};

const acceptHandler = async () => {
  const index = popup.index;
  try {
    await product.deleteProduct(index);
    items.value = items.value.filter((item) => item.id !== index);
  } catch (error) {
    console.error('Delete product error:', error);
  }
  popup.setPopUp(false);
};

const gotoAdd = () => {
  router.push('/product/add-product');
};

const gotoUpdate = (index) => {
  router.push(`/product/update-product/${index}`);
};

const nextPage = async () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    await fetchProducts();
  }
};

const prevPage = async () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    await fetchProducts();
  }
};

const updateRowsPerPage = async (newRowsPerPage) => {
  rowsPerPage.value = newRowsPerPage;
  currentPage.value = 1;
  await fetchProducts();
};

const searchProducts = async () => {
  currentPage.value = 1;
  await fetchProducts();
};
</script>

<style scoped>
.search-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.pagination-buttons {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 1rem;
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

.pagination-button:hover {
  background-color: #3aa9c2;
}

.pagination-info {
  margin: 0 1rem;
  font-size: 14px;
  color: #333;
}
</style>
