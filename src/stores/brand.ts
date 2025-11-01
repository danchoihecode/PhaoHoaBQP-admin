import { defineStore } from 'pinia';
import axiosConfig from '@/services/api';
import { API } from '@/utils/api';

interface Brand {
  brands: Array<any>;
}

export const useBrandStore = defineStore('brand', {
  state: (): Brand => {
    return {
      brands: [],
    };
  },
  actions: {
    async getBrandList() {
      try {
        return await axiosConfig.get(API.BRANDS).then((response: any) => {
          this.brands = response.data.data.brand;
          return this.brands;
        });
      } catch (error) {
        console.error('Error fetching brands:', error);
        throw error;
      }
    },
    async getAllBrands() {
      try {
        return await axiosConfig.get(API.ALLBRAND).then((response: any) => {
          this.brands = response.data.data;
          return this.brands;
        });
      } catch (error) {
        console.error('Error fetching brands:', error);
        throw error;
      }
    },
  },
});
