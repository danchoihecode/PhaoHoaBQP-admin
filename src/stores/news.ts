import { defineStore } from "pinia";
import { API } from "@/utils/api";
import axiosConfig from '@/services/api.js';

interface News {
    news: Array<any>
}

export const newsStore = defineStore('news', {
    state: (): News => {
        return {
            news: []
        }
    },
    actions: {
        // CRUD article
        async getNewsList() {
            try {
                const response = await axiosConfig.get(API.NEWS);
                this.news = response.data.data;
                return response.data;
            } catch (error) {
                console.error("Error fetching news list:", error);
                throw error;
            }
        },

        async getNewsById(index: any) {
            try {
                const response = await axiosConfig.get(`${API.NEWS}/${index}`);
                return response.data;
            } catch (error) {
                console.error(`Error fetching news with ID ${index}:`, error);
                throw error;
            }
        },

        async createNews(formData: any) {
            try {
                const response = await axiosConfig.post(API.NEWS, formData);
                return response.data;
            } catch (error) {
                console.error("Error creating news:", error);
                throw error;
            }
        },

        async updateNews(index: any, formData: any) {
            try {
                return await axiosConfig.put(`${API.NEWS}/${index}`, formData).then((data: any) => {
                    return data.data;
                });
            } catch (error) {
                console.error(`Error updating news with ID ${index}:`, error);
                throw error;  // Để bắt lỗi trong component
            }
        },


        async deleteNews(index: any) {
            try {
                const response = await axiosConfig.delete(`${API.NEWS}/${index}`);
                return response.data;
            } catch (error) {
                console.error(`Error deleting news with ID ${index}:`, error);
                throw error;
            }
        },

    }
});
