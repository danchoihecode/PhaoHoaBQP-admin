import { defineStore } from 'pinia';
import axiosConfig from '@/services/api.js';
import { API } from '@/utils/api';

interface Product {
  products: Array<any>;
  pagination: Object;
}

interface SearchParams {
  name?: string;
  brand_id?: string;
  stock_status?: string;
  page: number;
  limit: number;
}

export const productStore = defineStore('product', {
  state: (): Product => {
    return {
      products: [],
      pagination: {},
    };
  },
  actions: {
    async getProductList(name = '', brandId = '', stockStatus = '', currentPage = 1, limit = 5) {
      try {
        const params: SearchParams = {
          page: currentPage,
          limit: limit
        };
        if (name) params.name = name;
        if (brandId) params.brand_id = brandId;
        if (stockStatus) params.stock_status = stockStatus;

        const response = await axiosConfig.get('/admin/search-list-products', {
          params: params
        });

        this.products = response.data.data.products;
        this.pagination = response.data.data.pagination;

        return response.data.data;
      } catch (error) {
        return error;
      }
    },



    async createProduct(formData: any) {
      try {
        return await axiosConfig
          .post(`${API.PRODUCTS}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then((response: any) => {
            return response.data;
          });
      } catch (error) {
        return error;
      }
    },

    async updateProduct(formData: any, index: any) {
      try {
        return await axiosConfig
          .post(`${API.PRODUCTS}/${index}?_method=PUT`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then((response:any) => {
            return response.data;
          });
      } catch (error) {
        return error;
      }
    },


    async deleteProduct(index: any) {
      try {
        return await axiosConfig
          .delete(`${API.PRODUCTS}/${index}`)
          .then((response: any) => {
            return response.data;
          });
      } catch (error) {
        return error;
      }
    },

    async getProductById(index: any) {
      try {
        return await axiosConfig
          .get(`${API.PRODUCTS}/${index}`)
          .then((response: any) => {
            return response.data.data;
          });
      } catch (error) {
        return error;
      }
    },
  },
});
