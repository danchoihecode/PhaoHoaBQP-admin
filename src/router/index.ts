import { createRouter, createWebHistory } from 'vue-router';
import JwtService from '../services/jwt.service';

//import {ORDER} from "@/utils/constant.ts";

const router = createRouter({
  // @ts-ignore
  mode: 'history',
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'),
      meta: { layout: 'LayoutDefault', key: 'type_exam' },
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/auth/Login.vue'),
      meta: { layout: 'LayoutAuth', key: 'login' },
    },
    {
      path: '/brand',
      name: 'Brand',
      component: () => import('../views/brand/Brand.vue'),
      meta: { layout: 'LayoutDefault', key: 'brand' },
    },
    {
      path: '/category',
      name: 'ListCategory',
      component: () => import('../views/category/List.vue'),
      meta: { layout: 'LayoutDefault', key: 'category' },
    },
    {
      path: '/category/add-category',
      name: 'AddCategory',
      component: () => import('../views/category/AddCategory.vue'),
      meta: { layout: 'LayoutDefault', key: 'add-category' },
    },
    {
      path: '/category/update-category/:id',
      name: 'UpdateCategory',
      component: () => import('../views/category/UpdateCategory.vue'),
      meta: { layout: 'LayoutDefault', key: 'update-category' },
    },
    {
      path: '/attribute',
      name: 'ListTypeExam',
      component: () => import('../views/auth/Login.vue'),
      meta: { layout: 'LayoutDefault', key: 'attribute' },
    },
    {
      path: '/tag',
      name: 'ListExam',
      component: () => import('../views/auth/Login.vue'),
      meta: { layout: 'LayoutDefault', key: 'tag' },
    },
    {
      path: '/top-menu',
      name: 'TopMenu',
      component: () => import('../views/page/TopMenu.vue'),
      meta: { layout: 'LayoutDefault', key: 'top-menu' },
    },
    {
      path: '/footer',
      name: 'Footer',
      component: () => import('../views/page/Footer.vue'),
      meta: { layout: 'LayoutDefault', key: 'footer' },
    },
    {
      path: '/product',
      name: 'ListProduct',
      component: () => import('../views/product/Product.vue'),
      meta: { layout: 'LayoutDefault', key: 'product' },
    },
    {
      path: '/product/add-product',
      name: 'AddProduct',
      component: () => import('../views/product/AddProduct.vue'),
      meta: { layout: 'LayoutDefault', key: 'add-product' },
    },
    {
      path: '/product/update-product/:product_id',
      name: 'UpdateProduct',
      component: () => import('../views/product/UpdateProduct.vue'),
      meta: { layout: 'LayoutDefault', key: 'update-product' },
    },
    {
      path: '/order',
      name: 'listOrder',
      component: () => import('../views/order/Order.vue'),
      meta: { layout: 'LayoutDefault', key: 'order' },
    },
    {
      path: '/order/:order_id',
      name: 'orderDetail',
      component: () => import('../views/order/OrderDetail.vue'),
      meta: { layout: 'LayoutDefault', key: 'order-detail' },
    },
    {
      path: '/showroom',
      name: 'listShowroom',
      component: () => import('../views/showroom/Showroom.vue'),
      meta: { layout: 'LayoutDefault', key: 'showroom' },
    },
    {
      path: '/rating',
      name: 'Rating',
      component: () => import('../views/rating/Rating.vue'),
      meta: { layout: 'LayoutDefault', key: 'rating' },
    },
    {
      path: '/news',
      name: 'News',
      component: () => import('../views/news/News.vue'),
      meta: { layout: 'LayoutDefault', key: 'news' },
    },
    {
      
        path: '/news/news-detail/:id',
        name: 'NewsDetail',
        component: () => import('../views/news/NewsDetail.vue'),
       
      meta: { layout: 'LayoutDefault', key: 'news-detail' },
    },
    {
      path: '/news/add-news',
      name: 'AddNews',
      component: () => import('../views/news/AddNews.vue'),
      meta: { layout: 'LayoutDefault', key: 'add-news' },
    }
  ],
});

router.beforeEach(async (to, _, next) => {
  if (!JwtService.getToken()) {
    if (to.name !== 'Login') {
      next('/login');
    } else {
      next();
    }
  } else {
    if (to.name == 'Login') {
      next('/');
    } else {
      next();
    }
  }
});
export default router;
