import { defineStore } from 'pinia';
import axiosConfig from '@/services/api';
import { API } from '@/utils/api';

interface TopMenuItem {
    id: number;
    priority: number;
}

export const useTopMenuStore = defineStore('top-menu', {
    state: () => ({
        items: [] as TopMenuItem[]
    }),
    actions: {
        async getTopMenuList() {
            try {
                return await axiosConfig.get(API.TOPMENU)
                    .then((response: any) => {
                        this.items = response.data.data;
                        return this.items;
                    });
            } catch (error) {
                console.error('Error fetching top menu:', error);
            }
        },
        async updateTopMenu(infoList: TopMenuItem[]) {
            try {
                return await axiosConfig.post(`${API.TOPMENU}/updatePriorities`, infoList)
                    .then((response: any) => {
                        return response.data;
                    });
            } catch (error) {
                console.error('Error updating top menu:', error);
            }
        },
    }
});