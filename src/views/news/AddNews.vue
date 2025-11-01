<template>
  <BreadCrumb></BreadCrumb>
  <div class="content-container">
    <Content>
      <div class="my-3">
        <div class="input-container">
          <div class="input-title">{{ t('news.author') }}</div>
          <div class="col-span-1">
            <InputText
              v-model="item.author"
              name="news_author"
              placeholder="Tên tác giả"
            />
          </div>
        </div>
        <div class="input-container">
          <div class="input-title">{{ t('news.news_title') }}</div>
          <div class="col-span-3">
            <InputText
              v-model="item.title"
              name="news_title"
              placeholder="Tên tiêu đề"
            />
          </div>
        </div>
        <div class="input-container">
          <div class="input-title">{{ t('news.news_category') }}</div>
          <div class="col-span-3">
            <InputText
              v-model="item.category"
              name="news_category"
              placeholder="Danh mục bài viết"
            />
          </div>
        </div>
        <div class="input-container">
          <div class="input-title">{{ t('news.content') }}</div>
          <div class="col-span-3 content-box">
            <Tinymce
              v-model="item.content"
              name="news_content"
              placeholder="Nội dung bài viết"
            />
          </div>
        </div>
      </div>
      <div class="input-container">
        <div class="input-title">{{ t('Ngày phát hành') }}</div>
        <div class="col-span-3">
          <InputText
            v-model="item.release_date"
            name="news_release_date"
            placeholder="Ngày phát hành"
            type="date"
          />
        </div>
      </div>
      <div class="input-container">
        <div class="input-title">{{ t('ID sản phẩm') }}</div>
        <div class="col-span-3">
          <InputText
            v-model="item.product_id"
            name="news_product_id"
            placeholder="ID sản phẩm"
          />
        </div>
      </div>
    </Content>
    <div class="flex items-center justify-center mt-4">
      <BaseButton
        @click="submitForm"
        :type="'submit'"
        :title="'ĐĂNG BÀI'"
        :width="'lg:text-base md:text-sm text-xs'"
        :classStyle="'border rounded-xl justify-center p-2'"
        :customStyle="'custom-btn-style'"
      />
    </div>
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { newsStore } from '@/stores/news';

const { t } = useI18n();
const breadcrumb = useBreadCrumbStore();
const title = 'Thêm bài viết';
const router = useRouter();
const news = newsStore();
const listBreadcrumb = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Quản lý bài viết', path: '/news' },
  { label: 'Danh sách bài viết', path: '/news' },
  { label: 'Thêm bài viết', path: '/news/add-news' },
];

breadcrumb.setBreadCrumbs(title, listBreadcrumb);

const item = ref({
  id: '',
  title: '',
  author: '',
  category: '',
  content: '',
  release_date: '',
  product_id: '',
});

const submitForm = async () => {
  try {
    await news.createNews(item.value);
    router.push('/news');
  } catch (error) {
    console.error(error);
    // Hiển thị thông báo lỗi cho người dùng
  }
};
</script>

<style lang="scss" scoped>


.input-container {
  @apply my-2 p-2 grid grid-cols-4;
  .input-title {
    @apply text-xl font-semibold;
  }
}



</style>
