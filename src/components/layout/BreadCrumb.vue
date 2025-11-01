<template>
    <div>
        <div class="breadcrumb-title">
            {{ title }}
        </div>
        <div class="flex w-full flex-wrap lg:pt-4 lg:pb-[26px] py-4 ">
            <div v-for="(crumb, index) in breadCrumbs" :key="index"
                class="flex items-center text-[14px] font-medium truncate">
                <div class="flex items-center w-full">
                    <router-link :to="crumb.path" class="link" v-if="index < breadCrumbs.length - 1">{{ crumb.label
                        }}</router-link>
                    <span v-else class="link-active">{{ crumb.label }}</span>
                    <img v-if="index < breadCrumbs.length - 1"
                        src="data:image/svg+xml,%3csvg%20width=&#39;14&#39;%20height=&#39;14&#39;%20viewBox=&#39;0%200%2014%2014&#39;%20fill=&#39;none&#39;%20xmlns=&#39;http://www.w3.org/2000/svg&#39;%3e%3cpath%20d=&#39;M5.19751%2011.6209L9.00083%207.81754C9.44999%207.36837%209.44999%206.63337%209.00083%206.1842L5.19751%202.38086&#39;%20stroke=&#39;%23ABADAF&#39;%20stroke-width=&#39;1.5&#39;%20stroke-miterlimit=&#39;10&#39;%20stroke-linecap=&#39;round&#39;%20stroke-linejoin=&#39;round&#39;/%3e%3c/svg%3e"
                        alt="arrow right" class="mx-1 min-w-[14px] min-h-[14px]">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useBreadCrumbStore } from '@/stores/bread-crumb';
import { computed } from 'vue';

const breadCrumbStore = useBreadCrumbStore();

const breadCrumbs = computed(() => breadCrumbStore.getBreadCrumbs);
const title =  computed(() => breadCrumbStore.getTitle);
</script>

<style scoped>
.breadcrumb-title {
    font-family: 'San Francisco Display', sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 23.87px;
    text-align: left;
    color: #4A91E2;
}

.link-active {
    font-family: 'San Francisco Display', sans-serif;
    color: rgb(201 202 205/1);
}

.link {
    font-family: 'San Francisco Display', sans-serif;
    color: rgb(74 145 226/1);
}
</style>