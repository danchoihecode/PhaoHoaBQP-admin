<template>
    <Content>
        <div class="flex items-center">
            <label class="text-[#3F4254] text-[16px] font-semibold leading-[24px] text-left">{{ props.title }}</label>
            <svg @click="addNews" width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg" class="ml-2 cursor-pointer">
                <rect width="24" height="24" rx="3" fill="#4A90E2" />
                <path
                    d="M12.7158 13.9541H18.7949V12.167H12.7158V5.86816H10.958V12.167H4.89355V13.9541H10.958V20.6045H12.7158V13.9541Z"
                    fill="white" />
            </svg>
        </div>

        <div v-for="(info, index) in newsList" :key="index">
            <div class="flex justify-between my-3 items-center">
                <div class="select-wrapper w-[91%]">
                    <select v-model="info.id"
                        class="bg-[#EDF2F7] rounded-t-[5px] rounded-b-none border-b border-[#9E9E9E] text-[#7E8299]  text-[16px] w-full font-normal leading-[24px] text-left outline-none h-[52px] pl-[16px] custom-select">
                        <option value="">Chọn bài viết</option>
                        <option v-for="item in props.items" :key="item.id" :value="item.id">{{ item.title }}</option>
                    </select>
                    <svg class="select-arrow" width="13" height="8" viewBox="0 0 13 8" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 0L6.5 8L0 0L13 0Z" fill="#4D4E50" />
                    </svg>
                </div>

                <div class="cursor-pointer" @click="deleteNews(index)">
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
    title: String,
    items: Array
})
const store = useFooterStore();
const newsList = computed(() => {
    return props.title === 'Cột 1' ? store.column_1 : store.column_2;
});

const addNews = () => {

    if (newsList.value.length === 0) {
        store.addNew({ id: '' }, props.title);
    } else {
        const lastInfo = newsList.value[newsList.value.length - 1];
        if (lastInfo.id) {
            store.addNew({ id: '' }, props.title);
        }
    }
};

const deleteNews = (index) => {
    store.deleteNew(index, props.title);
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
</style>