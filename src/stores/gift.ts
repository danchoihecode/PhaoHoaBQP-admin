import { defineStore } from 'pinia';
import axiosConfig from '@/services/api';
import { API } from '@/utils/api';

interface Gift {
  gifts : Array<any>;
}

export const useGiftStore = defineStore('gift', {
  state: (): Gift => {
    return {
      gifts: [],
    };
  },
  actions: {
    async getGiftList() {
      try {
        return await axiosConfig.get(API.GIFTS).then((response: any) => {
          this.gifts = response.data.data.gifts;
          return this.gifts;
        });
      } catch (error) {
        console.error('Error fetching gifts:', error);
        throw error;
      }
    },
  },
});