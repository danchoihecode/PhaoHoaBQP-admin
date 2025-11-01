<template>
    <BreadCrumb></BreadCrumb>
    <div class="flex flex-col">
        <Content>
            <div class="flex items-center">
                <label class="text-[#3F4254] text-[16px] font-semibold leading-[24px] text-left">Danh mục
                    (Category)</label>
                <svg @click="addInfo" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg" class="ml-2 cursor-pointer">
                    <rect width="24" height="24" rx="3" fill="#4A90E2" />
                    <path
                        d="M12.7158 13.9541H18.7949V12.167H12.7158V5.86816H10.958V12.167H4.89355V13.9541H10.958V20.6045H12.7158V13.9541Z"
                        fill="white" />
                </svg>
            </div>

            <div v-for="(info, index) in infoList" :key="index">
                <div class="flex justify-between my-3 items-center w-[80%]">
                    <div class="w-[45%]">
                        <div class="select-wrapper">
                            <select v-model="info.id"
                                class="bg-[#EDF2F7] rounded-t-[5px] rounded-b-none border-b border-[#9E9E9E] text-[#7E8299]  text-[16px] w-full font-normal leading-[24px] text-left outline-none h-[52px] pl-[16px] custom-select">
                                <option value="">Chọn category</option>
                                <option v-for="item in items" :key="item.id" :value="item.id">{{ item.name }}</option>
                            </select>
                            <svg class="select-arrow" width="13" height="8" viewBox="0 0 13 8" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 0L6.5 8L0 0L13 0Z" fill="#4D4E50" />
                            </svg>
                        </div>
                    </div>
                    <div class="w-[45%]">
                        <div class="relative">
                            <input type="text" placeholder="" :id="`priority-${index}`"
                                class="w-full peer bg-[#EDF2F7] rounded-t-[5px] rounded-b-none border-b border-[#9E9E9E] text-[#3F4254] text-[16px] font-normal leading-[24px] text-left outline-none h-[52px] pl-[16px] pr-[16px] pt-[20px] pb-[6px]"
                                v-model="info.priority" />
                            <label :for="`priority-${index}`"
                                class="absolute left-[16px] top-[20px] text-[16px] text-[#7E8299] bg-[#EDF2F7] transition-all duration-200 transform peer-focus:-translate-y-[18px] peer-focus:text-[13px]">
                                Độ ưu tiên
                            </label>
                        </div>
                    </div>
                    <div class="cursor-pointer" @click="deleteInfo(index)">
                        <Icon :type="DELETE" />
                    </div>

                </div>
            </div>


        </Content>

        <div class="flex items-center justify-center mt-4">
            <BaseButton :title="'LƯU'" :customStyle="'custom-btn-style'" @onClick="updateTopMenu" />
        </div>
    </div>

</template>

<script setup>
import Content from '@/components/elements/Content.vue';
import BaseButton from '@/components/elements/BaseButton.vue';
import BreadCrumb from '@/components/layout/BreadCrumb.vue';
import { useBreadCrumbStore } from '@/stores/bread-crumb';
import { useRouter } from 'vue-router';
import { useCategoryStore } from '@/stores/category';
import { onMounted, ref } from 'vue';
import Icon from '@/components/elements/Icon.vue';
import { DELETE } from '@/utils/constant';
import { useTopMenuStore } from '@/stores/top-menu';

const router = useRouter();
const category = useCategoryStore();
const breadcrumb = useBreadCrumbStore();

const items = ref([]);
const topMenuStore = useTopMenuStore();
const infoList = ref([]);

onMounted(async () => {
    items.value = await category.getList();
    infoList.value = await topMenuStore.getTopMenuList();
});

const title = 'Top menu';
const listBreadcrumb = [
    { label: 'Trang chủ', path: '/' },
    { label: 'Quản lý trang', path: '/top-menu' },
    { label: 'Top menu', path: '/top-menu' },
];
breadcrumb.setBreadCrumbs(title, listBreadcrumb);

const addInfo = () => {
    if (infoList.value.length === 0) {
        infoList.value.push({ id: '', priority: '' });
    } else {
        const lastInfo = infoList.value[infoList.value.length - 1];
        if (lastInfo.id && lastInfo.priority) {
            infoList.value.push({ id: '', priority: '' });
        }
    }
};


const deleteInfo = (index) => {
    infoList.value.splice(index, 1);
};

const updateTopMenu = async () => {
    const response = await topMenuStore.updateTopMenu(infoList.value);
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
</style>