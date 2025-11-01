<template>
  <BreadCrumb></BreadCrumb>
  <Content>
    <div class="my-3">
      <div class="input-container">
        <div class="input-title">{{ t('news.author') }}</div>
        <div class="col-span-1">
          <InputText v-model="item.author" name="news_author" placeholder="Tên tác giả" />
        </div>
      </div>
      <div class="input-container">
        <div class="input-title">{{ t('news.news_title') }}</div>
        <div class="col-span-3">
          <InputText v-model="item.title" name="news_title" placeholder="Tên tiêu đề" />
        </div>
      </div>
      <div class="input-container">
        <div class="input-title">{{ t('news.news_category') }}</div>
        <div class="col-span-3">
          <InputText v-model="item.category" name="news_category" placeholder="Danh mục bài viết" />
        </div>
      </div>
      <div class="input-container">
        <div class="input-title">{{ t('news.content') }}</div>
        <div class="col-span-3">
          <Tinymce v-model="item.content" name="news_content" placeholder="Nội dung bài viết" />
        </div>
      </div>
      <div class="input-container">
        <div class="input-title">{{ t('Ngày phát hành') }}</div>
        <div class="col-span-3">
          <InputText v-model="item.release_date" name="news_release_date" placeholder="Ngày phát hành" type="date" />
        </div>
      </div>
      <div class="input-container">
        <div class="input-title">{{ t('ID sản phẩm') }}</div>
        <div class="col-span-3">
          <InputText v-model="item.product_id" name="news_product_id" placeholder="ID sản phẩm" />
        </div>
      </div>
    </div>
  </Content>
  <div class="flex items-center justify-center mt-4">
    <BaseButton @click="submitForm" :type="'submit'" :title="'Cập nhật'" :width="'lg:text-base md:text-sm text-xs'"
      :classStyle="'border rounded-xl justify-center p-2'" :customStyle="'custom-btn-style'" />
  </div>
</template>

<script setup>
import Content from '@/components/elements/Content.vue';
import InputText from '@/components/elements/InputText.vue';
import Tinymce from '@/components/elements/Tinymce.vue';
import BaseButton from '@/components/elements/BaseButton.vue';
import BreadCrumb from '@/components/layout/BreadCrumb.vue';
import { useBreadCrumbStore } from '@/stores/bread-crumb';
import { useI18n } from 'vue-i18n';
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { newsStore } from '@/stores/news';

const { t } = useI18n();
const breadcrumb = useBreadCrumbStore();
const title = 'Cập nhật bài viết';
const router = useRouter();
const route = useRoute();
const news = newsStore();

const listBreadcrumb = [
  {
    label: 'Trang chủ',
    path: '/',
  },
  {
    label: 'Quản lý bài viết',
    path: '/news',
  },
  {
    label: 'Danh sách bài viết',
    path: '/news',
  },
  {
    label: 'Chi tiết bài viết',
    path: '/news/news-detail/${route.params.id}',
  },
];

breadcrumb.setBreadCrumbs(title, listBreadcrumb);

let item = ref({
  id: '',
  title: '',
  author: '',
  category: '',
  content: '',
  release_date: '',
  product_id: '',
});

const fetchNews = async () => {
  try {
    const id = route.params.id; // Lấy ID từ URL
    if (!id) {
      throw new Error('Invalid ID');
    }

    const response = await news.getNewsById(id);
    if (response.status === 1) {
      item.value = response.data;
    } else {
      console.error("Error fetching news:", response.message);
      alert(response.message);
    }
  } catch (error) {
    console.error("Get article error:", error);
    alert("Failed to fetch article. Please try again later.");
  }
};

onMounted(fetchNews);

// update news 
const submitForm = async () => {
  try {
    const id = item.value.id;
    if (!id) {
      throw new Error('Invalid ID');
    }

    // Log dữ liệu gửi đi để kiểm tra
    console.log('Updating article with data:', item.value);

    const response = await news.updateNews(id, item.value);
    if (response.status === 1) {
      router.push('/news');
    } else {
      console.error("Update article error:", response.message);
      alert(response.message);
    }
  } catch (error) {
    if (error.response && error.response.data) {
      console.error("Update article error:", error.response.data);
      alert(`Failed to update article: ${JSON.stringify(error.response.data)}`);
    } else {
      console.error("Update article error:", error);
      alert("Failed to update article. Please try again later.");
    }
  }
};


</script>

<style lang="scss" scoped>
.input-container {
  @apply my-2 p-2 mx-4 grid grid-cols-4;

  .input-title {
    @apply text-xl font-semibold;
  }
}
</style>
