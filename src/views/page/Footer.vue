<!-- <template>
  <BreadCrumb></BreadCrumb>
  <div class="flex flex-col">
    <div class="flex justify-between">
      <NewsList :title="'Cột 1'" :items="items" class="w-[49.5%]" />
      <NewsList :title="'Cột 2'" :items="items" class="w-[49.5%]" />
    </div>

    <PhoneList :title="'SĐT Bán hàng'" />
    <PhoneList :title="'SĐT Bảo hành'" />
    <PhoneList :title="'SĐT Khiếu nại'" />
    <Content>
      <div class="flex items-center">
        <label class="text-[#3F4254] text-[16px] font-semibold leading-[24px] text-left">Social Media</label>
      </div>

      <div class="flex justify-start gap-6 my-3 items-center">
        <div v-for="(info, index) in socialMediaInfo" class="w-[30%]">
          <div class="relative">
            <input type="text" placeholder="" :id="info.platform"
              class="w-full peer bg-[#EDF2F7] rounded-t-[5px] rounded-b-none border-b border-[#9E9E9E] text-[#3F4254] text-[16px] font-normal leading-[24px] text-left outline-none h-[52px] pl-[16px] pr-[16px] pt-[20px] pb-[6px]"
              v-model="info.likes" />
            <label :for="info.platform"
              class="absolute left-[16px] top-[20px] text-[16px] text-[#7E8299] bg-[#EDF2F7] transition-all duration-200 transform peer-focus:-translate-y-[18px] peer-focus:text-[13px]">
              {{ info.platform }}
            </label>
          </div>
        </div>

      </div>
    </Content>

    <div class="flex items-center justify-center mt-4">
      <BaseButton :title="'LƯU'" :customStyle="'custom-btn-style'" @onClick="updateFooter" />
    </div>
  </div>

</template>

<script setup>
import Content from '@/components/elements/Content.vue';
import BaseButton from '@/components/elements/BaseButton.vue';
import BreadCrumb from '@/components/layout/BreadCrumb.vue';
import { useBreadCrumbStore } from '@/stores/bread-crumb';
import { newsStore } from '@/stores/news';
import { useRouter } from 'vue-router';
import PhoneList from '@/components/elements/PhoneList.vue';
import NewsList from '@/components/elements/NewsList.vue';
import { ref, onMounted, computed } from 'vue';
import { useFooterStore } from '@/stores/footer';

const router = useRouter();
const breadcrumb = useBreadCrumbStore();
const news = newsStore();
const footerStore = useFooterStore();
const items = ref([]);


onMounted(async () => {
  const data = await news.getNewsList();
  items.value = data.data;
  await footerStore.getFooterInfo();
});

const title = 'Chân trang';
const listBreadcrumb = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Quản lý trang', path: '/footer' },
  { label: 'Chân trang', path: '/footer' },
];
breadcrumb.setBreadCrumbs(title, listBreadcrumb);

const socialMediaInfo = computed(() => footerStore.socialMediaInfo);

const updateFooter = async () => {

  const articles = [];

  footerStore.column_1.forEach(item => {
    articles.push({ id: item.id, column: 1 });
  });

  footerStore.column_2.forEach(item => {
    articles.push({ id: item.id, column: 2 });
  });

  const details = [
    ...footerStore.salesPhone.map(phone => ({
      phone_number: phone.phone_number,
      operation_hours: phone.operation_hours,
      fee: phone.fee,
      type: 'salesPhoneNumber'
    })),
    ...footerStore.warrantyPhone.map(phone => ({
      phone_number: phone.phone_number,
      operation_hours: phone.operation_hours,
      fee: phone.fee,
      type: 'warrantyPhoneNumber'
    })),
    ...footerStore.complaintPhone.map(phone => ({
      phone_number: phone.phone_number,
      operation_hours: phone.operation_hours,
      fee: phone.fee,
      type: 'complaintsPhoneNumber'
    }))
  ];

  const infoList = {
    articles,
    details,
    social_media: socialMediaInfo.value
  };
  const response = await footerStore.updateFooter(infoList);
  if (response.status === 1) {
    router.push('/');
  } else {
    alert(response.message);
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
</style> -->
<template>
  <div>Mở rộng trong tương lai</div>
</template>
<script setup></script>