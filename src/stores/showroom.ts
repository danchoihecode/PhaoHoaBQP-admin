import { defineStore } from 'pinia';
import axiosConfig from '@/services/api';
import { API } from '@/utils/api';

interface Brand {
  showrooms: Array<any>;
}

export const useShowroomStore = defineStore('showroom', {
  state: (): Brand => {
    return {
      showrooms: [],
    };
  },
  actions: {
    async getShowroomList() {
      try {
        return await axiosConfig.get(API.SHOWROOM).then((response: any) => {
          this.showrooms = response.data.data;
          return this.showrooms;
        });
      } catch (error) {
        console.error('Error fetching stores:', error);
        throw error;
      }
    },
  },
});