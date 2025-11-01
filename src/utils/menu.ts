import {
  CIRCLE,
  MANAGE_ORDER,
  MANAGE_STORE,
  MANAGE_BRAND,
  MANAGE_PRODUCT,
  MANAGE_PROMOTION,
  MANAGE_NEWS,
  MANAGE_PAGE
} from './constant';
export const MENU = [
  {
    title: 'menu.brand',
    path: '/brand',
    key: 'brand',
    icon: MANAGE_BRAND,
    active: false,
  },
  {
    title: 'menu.page_management.title',
    path: '/',
    icon: MANAGE_PAGE,
    key: 'manage_page',
    active: false,
    showChild: false,
    child: [
      {
        title: 'menu.page_management.child.top_menu',
        path: '/top-menu',
        key: 'top-menu',
        active: false,
        icon: CIRCLE,
      },
      {
        title: 'menu.page_management.child.footer',
        path: '/footer',
        key: 'footer',
        active: false,
        icon: CIRCLE,
      },
    ],
  },
  {
    title: 'menu.product_management.title',
    path: '/',
    icon: MANAGE_PRODUCT,
    key: 'manage_product',
    active: false,
    showChild: false,
    child: [
      {
        title: 'menu.product_management.child.categories',
        path: '/category',
        key: 'category',
        active: false,
        icon: CIRCLE,
      },
      {
        title: 'menu.product_management.child.products',
        path: '/product',
        key: 'product',
        active: false,
        icon: CIRCLE,
      },
    ],
  },

  {
    title: 'menu.order',
    path: '/order',
    key: 'order',
    icon: MANAGE_ORDER,
    active: false,
  },
  {
    title: 'menu.news',
    path: '/news',
    key: 'news',
    icon: MANAGE_NEWS,
    active: false,
  },
  {
    title: 'menu.showroom',
    path: '/showroom',
    key: 'showroom',
    icon: MANAGE_STORE,
    active: false,
  },
  {
    title: 'menu.rating',
    path: '/rating',
    key: 'rating',
    icon: MANAGE_PROMOTION,
    active: false,
  }
];
