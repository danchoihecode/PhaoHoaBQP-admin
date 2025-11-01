import { defineStore } from 'pinia';
// @ts-ignore
import JwtService, { destroyToken } from '@/services/jwt.service';
// @ts-ignore
import axiosConfig from '@/services/api.js';
import { API } from '@/utils/api';

interface Category {
  categories: Array<any>;
}

export const useCategoryStore = defineStore('category', {
  state: (): Category => {
    return {
      categories: [],
    };
  },
  actions: {
    async getList() {
      try {
        return await axiosConfig.get(API.CATEGORIES).then((response: any) => {
          this.categories = response.data.data;
          return this.categories;
        });
      } catch (error) {
        return error;
      }
    },
    async getCategoryById(index: any) {
      try {
        return await axiosConfig
          .get(`${API.CATEGORIES}/${index}`)
          .then((data: any) => {
            return data.data;
          });
      } catch (error) {
        return error;
      }
    },
    async createCategory(formData: any) {
      try {
        return await axiosConfig
          .post(API.CATEGORIES, formData)
          .then((data: any) => {
            return data.data;
          });
      } catch (error) {
        return error;
      }
    },
    async updateCategory(formData: any, index: any) {
      try {
        return await axiosConfig
          .put(`${API.CATEGORIES}/${index}`, formData)
          .then((data: any) => {
            return data.data;
          });
      } catch (error) {
        return error;
      }
    },
    async deleteCategory(index: any) {
      try {
        return await axiosConfig
          .delete(`${API.CATEGORIES}/${index}`)
          .then((data: any) => {
            return data.data;
          });
      } catch (error) {
        return error;
      }
    },
  },
});
