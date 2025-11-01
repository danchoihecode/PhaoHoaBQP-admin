<template>
  <BreadCrumb></BreadCrumb>
  <div class="flex justify-between">
    <div class="flex flex-col w-[70%] ">
      <Content>
        <div class="flex flex-col">
          <label class="flex items-center text-[#4D4E50] text-[16px] font-medium leading-[24px] text-left w-[20%]">
            <input type="checkbox" v-model="isHidden"
              class="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2" />
            Ẩn sản phẩm
          </label>

          <div class="flex justify-between my-3">
            <div class="w-[100%]">
              <div class="relative">
                <input type="text" placeholder="" id="name" autocomplete="off"
                  class="peer bg-[#EDF2F7] rounded-t-[5px] rounded-b-none border-b border-[#9E9E9E] text-[#3F4254]  text-[16px] font-normal leading-[24px] text-left outline-none w-full h-[52px] pl-[16px] pr-[16px] pt-[20px] pb-[6px]"
                  v-model="infoProduct.name" />
                <label for="name"
                  class="absolute left-[16px] top-[20px] text-[16px] text-[#7E8299]  bg-[#EDF2F7] transition-all duration-200 transform peer-focus:-translate-y-[18px] peer-focus:text-[13px]">
                  Tên
                </label>
              </div>
            </div>
          </div>

          <div class="flex justify-between my-3">
            <div class="w-[100%]">
              <div class="relative">
                <input type="text" placeholder="" id="description" autocomplete="off"
                  class="w-full peer bg-[#EDF2F7] rounded-t-[5px] rounded-b-none border-b border-[#9E9E9E] text-[#3F4254]  text-[16px] font-normal leading-[24px] text-left outline-none h-[52px] pl-[16px] pr-[16px] pt-[20px] pb-[6px]"
                  v-model="infoProduct.description" />
                <label for="description"
                  class="absolute left-[16px] top-[20px] text-[16px] text-[#7E8299]  bg-[#EDF2F7] transition-all duration-200 transform peer-focus:-translate-y-[18px] peer-focus:text-[13px]">
                  Mô tả ngắn
                </label>
              </div>
            </div>
          </div>

           <div class="flex justify-between my-3">
            <div class="w-[100%]">
              <div class="relative">
                <input type="text" placeholder="" id="youtube_url" autocomplete="off"
                  class="w-full peer bg-[#EDF2F7] rounded-t-[5px] rounded-b-none border-b border-[#9E9E9E] text-[#3F4254]  text-[16px] font-normal leading-[24px] text-left outline-none h-[52px] pl-[16px] pr-[16px] pt-[20px] pb-[6px]"
                  v-model="infoProduct.youtube_url" />
                <label for="youtube_url"
                  class="absolute left-[16px] top-[20px] text-[16px] text-[#7E8299]  bg-[#EDF2F7] transition-all duration-200 transform peer-focus:-translate-y-[18px] peer-focus:text-[13px]">
                  Youtube Video ID
                </label>
              </div>
            </div>
          </div>

          <div class="flex justify-between my-3">
            <div class="w-[48%]">
              <div class="relative">
                <input type="text" placeholder="" id="slug" autocomplete="off"
                  class="w-full peer bg-[#EDF2F7] rounded-t-[5px] rounded-b-none border-b border-[#9E9E9E] text-[#3F4254]  text-[16px] font-normal leading-[24px] text-left outline-none h-[52px] pl-[16px] pr-[16px] pt-[20px] pb-[6px]"
                  v-model="infoProduct.slug" />
                <label for="slug"
                  class="absolute left-[16px] top-[20px] text-[16px] text-[#7E8299]  bg-[#EDF2F7] transition-all duration-200 transform peer-focus:-translate-y-[18px] peer-focus:text-[13px]">
                  Slug
                </label>
              </div>
            </div>
          </div>




          <div class="flex justify-between my-3">
            <div class="w-[48%]">
              <div class="relative">
                <input type="text" placeholder="" id="sku" autocomplete="off"
                  class="peer bg-[#EDF2F7] rounded-t-[5px] rounded-b-none border-b border-[#9E9E9E] text-[#3F4254]  text-[16px] font-normal leading-[24px] text-left outline-none w-full h-[52px] pl-[16px] pr-[16px] pt-[20px] pb-[6px]"
                  v-model="infoProduct.sku" />
                <label for="sku"
                  class="absolute left-[16px] top-[20px] text-[16px] text-[#7E8299]  bg-[#EDF2F7] transition-all duration-200 transform peer-focus:-translate-y-[18px] peer-focus:text-[13px]">
                  SKU
                </label>
              </div>
            </div>

            <div class="w-[48%]">
              <div class="relative">
                <input type="text" placeholder="" id="serial-number" autocomplete="off"
                  class="peer bg-[#EDF2F7] rounded-t-[5px] rounded-b-none border-b border-[#9E9E9E] text-[#3F4254]  text-[16px] font-normal leading-[24px] text-left outline-none w-full h-[52px] pl-[16px] pr-[16px] pt-[20px] pb-[6px]"
                  v-model="infoProduct.serial_number" />
                <label for="serial-number"
                  class="absolute left-[16px] top-[20px] text-[16px] text-[#7E8299]  bg-[#EDF2F7] transition-all duration-200 transform peer-focus:-translate-y-[18px] peer-focus:text-[13px]">
                  Serial number
                </label>
              </div>
            </div>
          </div>





          <div class="flex justify-between my-3">
            <div class="w-[48%]">
              <div class="relative">
                <input type="text" placeholder="" id="quantity" autocomplete="off"
                  class="peer bg-[#EDF2F7] rounded-t-[5px] rounded-b-none border-b border-[#9E9E9E] text-[#3F4254]  text-[16px] font-normal leading-[24px] text-left outline-none w-full h-[52px] pl-[16px] pr-[16px] pt-[20px] pb-[6px]"
                  v-model="infoProduct.quantity" />
                <label for="quantity"
                  class="absolute left-[16px] top-[20px] text-[16px] text-[#7E8299]  bg-[#EDF2F7] transition-all duration-200 transform peer-focus:-translate-y-[18px] peer-focus:text-[13px]">
                  Số lượng
                </label>
              </div>
            </div>

            <div class="w-[48%]">
              <div class="select-wrapper">
                <select v-model="selectedStatus"
                  class="bg-[#EDF2F7] rounded-t-[5px] rounded-b-none border-b border-[#9E9E9E] text-[#7E8299]  text-[16px] w-full font-normal leading-[24px] text-left outline-none h-[52px] pl-[16px] custom-select">
                  <option value="">Trạng thái kho</option>
                  <option v-for="item in status" :key="item" :value="item">{{ item }}</option>
                </select>
                <svg class="select-arrow" width="13" height="8" viewBox="0 0 13 8" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 0L6.5 8L0 0L13 0Z" fill="#4D4E50" />
                </svg>
              </div>
            </div>
          </div>



          <div class="flex justify-between my-3">
            <div class="w-[48%]">
              <div class="relative">
                <input type="text" placeholder="" id="price" autocomplete="off"
                  class="peer bg-[#EDF2F7] rounded-t-[5px] rounded-b-none border-b border-[#9E9E9E] text-[#3F4254]  text-[16px] font-normal leading-[24px] text-left outline-none w-full h-[52px] pl-[16px] pr-[16px] pt-[20px] pb-[6px]"
                  v-model="infoProduct.price" />
                <label for="price"
                  class="absolute left-[16px] top-[20px] text-[16px] text-[#7E8299]  bg-[#EDF2F7] transition-all duration-200 transform peer-focus:-translate-y-[18px] peer-focus:text-[13px]">
                  Giá (vnđ)
                </label>
              </div>
            </div>

            <div class="w-[48%]">
              <div class="relative">
                <input type="text" placeholder="" id="discount-price" autocomplete="off"
                  class="peer bg-[#EDF2F7] rounded-t-[5px] rounded-b-none border-b border-[#9E9E9E] text-[#3F4254]  text-[16px] font-normal leading-[24px] text-left outline-none w-full h-[52px] pl-[16px] pr-[16px] pt-[20px] pb-[6px]"
                  v-model="infoProduct.discount_price" />
                <label for="discount-price"
                  class="absolute left-[16px] top-[20px] text-[16px] text-[#7E8299]  bg-[#EDF2F7] transition-all duration-200 transform peer-focus:-translate-y-[18px] peer-focus:text-[13px]">
                  Giá Discount (vnđ)
                </label>
              </div>
            </div>
          </div>

          <div class="input-container">
            <label class="text-[#7E8299] text-[13px] font-normal leading-[15.51px] text-left">Ảnh (724x404px)</label>
            <UploadImage />
          </div>

        </div>
      </Content>
      <Content>

        <div class="flex items-center">
          <label class="text-[#3F4254] text-[16px] font-semibold leading-[24px] text-left">Thông tin thêm</label>
          <svg @click="addInfo" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg" class="ml-2 cursor-pointer">
            <rect width="24" height="24" rx="3" fill="#4A90E2" />
            <path
              d="M12.7158 13.9541H18.7949V12.167H12.7158V5.86816H10.958V12.167H4.89355V13.9541H10.958V20.6045H12.7158V13.9541Z"
              fill="white" />
          </svg>
        </div>



        <div v-for="(info, index) in infoList" :key="index">
          <div class="flex justify-between my-3">
            <div class="w-[48%]">
              <div class="relative">
                <input type="text" placeholder="" :id="`key-${index}`" autocomplete="off"
                  class="w-full peer bg-[#EDF2F7] rounded-t-[5px] rounded-b-none border-b border-[#9E9E9E] text-[#3F4254] text-[16px] font-normal leading-[24px] text-left outline-none h-[52px] pl-[16px] pr-[16px] pt-[20px] pb-[6px]"
                  v-model="info.key" />
                <label :for="`description-${index}`"
                  class="absolute left-[16px] top-[20px] text-[16px] text-[#7E8299] bg-[#EDF2F7] transition-all duration-200 transform peer-focus:-translate-y-[18px] peer-focus:text-[13px]">
                  Thông số
                </label>
              </div>
            </div>
            <div class="w-[48%]">
              <div class="relative">
                <input type="text" placeholder="" :id="`description-${index}`" autocomplete="off"
                  class="w-full peer bg-[#EDF2F7] rounded-t-[5px] rounded-b-none border-b border-[#9E9E9E] text-[#3F4254] text-[16px] font-normal leading-[24px] text-left outline-none h-[52px] pl-[16px] pr-[16px] pt-[20px] pb-[6px]"
                  v-model="info.description" />
                <label :for="`description-${index}`"
                  class="absolute left-[16px] top-[20px] text-[16px] text-[#7E8299] bg-[#EDF2F7] transition-all duration-200 transform peer-focus:-translate-y-[18px] peer-focus:text-[13px]">
                  Nội dung
                </label>
              </div>
            </div>
          
          </div>
        </div>


      </Content>
      <div class="flex items-center justify-center mt-4">
        <BaseButton :title="'LƯU'" :customStyle="'custom-btn-style'" @onClick="updateProduct" />
      </div>
    </div>
    <div class="w-[28%]">
      <Content>
        <label class="text-[#3F4254] text-[16px] font-semibold leading-[24px] text-left">Category</label>
        <div class="border-b border-[#9E9E9E] mt-2"></div>
        <div class="flex flex-col mt-2">
          <label v-for="item in items" :key="item.id" class="flex items-center mt-1">
            <input type="checkbox" v-model="selectedCategories" :value="item.id"
              class="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2" />
            {{ item.name }}
          </label>
        </div>
      </Content>
    </div>
  </div>

</template>

<script setup>
import Content from '@/components/elements/Content.vue';
import BaseButton from '@/components/elements/BaseButton.vue';
import BreadCrumb from '@/components/layout/BreadCrumb.vue';
import UploadImage from '@/components/elements/UploadImage.vue';
import { useBreadCrumbStore } from '@/stores/bread-crumb';
import { productStore } from '@/stores/product';
import { useRouter, useRoute } from 'vue-router';
import { useCategoryStore } from '@/stores/category';
import { imageStore } from '@/stores/image';
import { onMounted, watch, ref } from 'vue';

const router = useRouter();
const route = useRoute();
const category = useCategoryStore();
const breadcrumb = useBreadCrumbStore();
const product = productStore();
const image = imageStore();
image.setImageList([]);

const items = ref([]);
const brands = ref([]);
const status = ref(['Còn hàng', 'Hết hàng']);

const infoProduct = ref({
  name: '',
  description: '',
  youtube_url: '',
  slug: '',
  sku: '',
  serial_number: '',
  quantity: '',
  price: '',
  discount_price: ''
});

const infoList = ref([{ id: null, description: '', key: '' }]);
// const selectedBrand = ref('');
const selectedCategories = ref([]);
const selectedStatus = ref('');
const selectedGift = ref('');
const isHidden = ref(false);
const isVisible = ref(true);

onMounted(async () => {
  items.value = await category.getList();
  const data = await product.getProductById(route.params.product_id);

  infoProduct.value = {
    name: data.name,
    description: data.description,
    youtube_url: data.youtube_url,
    slug: data.slug,
    sku: data.sku,
    serial_number: data.serial_number,
    quantity: data.quantity,
    price: data.price,
    discount_price: data.discount_price
  };
  selectedCategories.value = data.categories.map(category => category.id);;
  selectedStatus.value = data.stock_status;

  if (data.additional_info.length > 0) {
    infoList.value = data.additional_info.map((info, index) => ({
      id: info.id,
      key: info.key,
      description: info.content
    }));
  }


  isHidden.value = data.publish === 0;

  if (data.images.length > 0) {
    image.setImageList(data.images.map((image, index) => ({
      id: image.id,
      file: null,
      url: image.img_url
    })));
  }

});

const title = 'Cập nhật thông tin sản phẩm';
const listBreadcrumb = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Quản lý sản phẩm', path: '/product' },
  { label: 'Danh sách sản phẩm', path: '/product' },
  { label: 'Cập nhật thông tin sản phẩm', path: '/' },
];
breadcrumb.setBreadCrumbs(title, listBreadcrumb);

const addInfo = () => {
  const lastInfo = infoList.value[infoList.value.length - 1];
  if (lastInfo.description && (lastInfo.id || lastInfo.key)) {
    infoList.value.push({ id: null, description: '', key: '' });
  }
};

const updateProduct = async () => {
  const imageList = image.getImageList();
  const formData = new FormData();
  // formData.append('brand_id', selectedBrand.value);
  formData.append('name', infoProduct.value.name);
  formData.append('description', infoProduct.value.description);
  formData.append('youtube_url', infoProduct.value.youtube_url);

  for (let i = 0; i < selectedCategories.value.length; i++) {
    formData.append('category_ids[]', selectedCategories.value[i]);
  }

  formData.append('slug', infoProduct.value.slug);
  formData.append('sku', infoProduct.value.sku);
  formData.append('serial_number', infoProduct.value.serial_number);
  formData.append('quantity', infoProduct.value.quantity);
  formData.append('stock_status', selectedStatus.value);
  formData.append('price', infoProduct.value.price);
  formData.append('discount_price', infoProduct.value.discount_price);

  for (let i = 0; i < infoList.value.length; i++) {
    if (infoList.value[i].id)
      formData.append(`additional_info[${i}][id]`, infoList.value[i].id);
    if (infoList.value[i].key)
      formData.append(`additional_info[${i}][key]`, infoList.value[i].key);
    formData.append(`additional_info[${i}][content]`, infoList.value[i].description);
  }

  for (let i = 0; i < imageList.length; i++) {
    if (imageList[i].id)
      formData.append(`images[${i}][id]`, imageList[i].id);
    if (imageList[i].file)
      formData.append(`images[${i}][img_url]`, imageList[i].file);
    formData.append(`images[${i}][is_main]`, i === 0 ? 1 : 0);
  }

  try {
    const response = await product.updateProduct(formData, route.params.product_id);
    if (response.status === 1) {
      router.push('/product');
    } else {
      alert(response.message);
    }
  } catch (error) {
    console.error('Error updating product:', error);
  }
};
</script>

<style scoped>
* {
  font-family: ui-sans-serif, system-ui, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.select-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.custom-select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.select-arrow {
  position: absolute;
  right: 15px;
  pointer-events: none;
}

input:focus+label,
input:not(:placeholder-shown)+label {
  transform: translateY(-18px);
  font-size: 13px;
}
</style>
