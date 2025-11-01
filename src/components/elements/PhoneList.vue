<template>
  <Content>
    <div class="flex items-center">
      <label class="text-[#3F4254] text-[16px] font-semibold leading-[24px] text-left">{{ props.title }}</label>
      <svg @click="addPhone" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        class="ml-2 cursor-pointer">
        <rect width="24" height="24" rx="3" fill="#4A90E2" />
        <path
          d="M12.7158 13.9541H18.7949V12.167H12.7158V5.86816H10.958V12.167H4.89355V13.9541H10.958V20.6045H12.7158V13.9541Z"
          fill="white" />
      </svg>
    </div>

    <div v-for="(info, index) in phoneList" :key="index">
      <div class="flex justify-between my-3 items-center">
        <div class="w-[30%]">
          <div class="relative">
            <input type="text" placeholder="" :id="`${props.title}-phone-${index}`"
              class="w-full peer bg-[#EDF2F7] rounded-t-[5px] rounded-b-none border-b border-[#9E9E9E] text-[#3F4254] text-[16px] font-normal leading-[24px] text-left outline-none h-[52px] pl-[16px] pr-[16px] pt-[20px] pb-[6px]"
              v-model="info.phone_number" />
            <label :for="`${props.title}-phone-${index}`"
              class="absolute left-[16px] top-[20px] text-[16px] text-[#7E8299] bg-[#EDF2F7] transition-all duration-200 transform peer-focus:-translate-y-[18px] peer-focus:text-[13px]">
              Số điện thoại
            </label>
          </div>
        </div>
        <div class="w-[30%]">
          <div class="relative">
            <input type="text" placeholder="" :id="`${props.title}-time-${index}`"
              class="w-full peer bg-[#EDF2F7] rounded-t-[5px] rounded-b-none border-b border-[#9E9E9E] text-[#3F4254] text-[16px] font-normal leading-[24px] text-left outline-none h-[52px] pl-[16px] pr-[16px] pt-[20px] pb-[6px]"
              v-model="info.operation_hours" />
            <label :for="`${props.title}-time-${index}`"
              class="absolute left-[16px] top-[20px] text-[16px] text-[#7E8299] bg-[#EDF2F7] transition-all duration-200 transform peer-focus:-translate-y-[18px] peer-focus:text-[13px]">
              Thời gian
            </label>
          </div>
        </div>
        <div class="w-[30%]">
          <div class="relative">
            <input type="text" placeholder="" :id="`${props.title}-fee-${index}`"
              class="w-full peer bg-[#EDF2F7] rounded-t-[5px] rounded-b-none border-b border-[#9E9E9E] text-[#3F4254] text-[16px] font-normal leading-[24px] text-left outline-none h-[52px] pl-[16px] pr-[16px] pt-[20px] pb-[6px]"
              v-model="info.fee" />
            <label :for="`${props.title}-fee-${index}`"
              class="absolute left-[16px] top-[20px] text-[16px] text-[#7E8299] bg-[#EDF2F7] transition-all duration-200 transform peer-focus:-translate-y-[18px] peer-focus:text-[13px]">
              Phí
            </label>
          </div>
        </div>
        <div class="cursor-pointer" @click="deletePhone(index)">
          <Icon :type="DELETE" />
        </div>

      </div>
    </div>
  </Content>
</template>
<script setup>
import Content from '@/components/elements/Content.vue';
import { ref, computed } from 'vue';
import Icon from '@/components/elements/Icon.vue';
import { DELETE } from '@/utils/constant';
import { useFooterStore } from '@/stores/footer';

const props = defineProps({
  title: String
})
const store = useFooterStore();
const phoneList = computed(() => {
  switch (props.title) {
    case 'SĐT Bán hàng':
      return store.salesPhone;
    case 'SĐT Bảo hành':
      return store.warrantyPhone;
    case 'SĐT Khiếu nại':
      return store.complaintPhone;
    default:
      return [];
  }
});
const addPhone = () => {
  if (phoneList.value.length === 0) {
    store.addPhone({ phone_number: '', operation_hours: '', fee: '' }, props.title);
  } else {
    const lastInfo = phoneList.value[phoneList.value.length - 1];
    if (lastInfo.phone_number) {
      store.addPhone({ phone_number: '', operation_hours: '', fee: '' }, props.title);
    }
  }
};


const deletePhone = (index) => {
  store.deletePhone(index, props.title);
};
</script>
<style scoped>
* {
  font-family: ui-sans-serif, system-ui, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

input:focus+label,
input:not(:placeholder-shown)+label {
  transform: translateY(-18px);
  font-size: 13px;
}
</style>