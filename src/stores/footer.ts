import { defineStore } from 'pinia';
import axiosConfig from '@/services/api';
import { API } from '@/utils/api';

export const useFooterStore = defineStore('footer', {
    state: () => ({
        column_1: [] as any[],
        column_2: [] as any[],
        salesPhone: [] as any[],
        warrantyPhone: [] as any[],
        complaintPhone: [] as any[],
        socialMediaInfo: {}
    }),
    actions: {
        async getFooterInfo() {
            try {
                return await axiosConfig.get(API.FOOTER)
                    .then((response: any) => {
                        this.column_1 = response.data.data.column_1;
                        this.column_2 = response.data.data.column_2;
                        this.salesPhone = response.data.data.contactDetails.salesPhoneNumber;
                        this.warrantyPhone = response.data.data.contactDetails.warrantyPhoneNumber;
                        this.complaintPhone = response.data.data.contactDetails.complaintsPhoneNumber;
                        this.socialMediaInfo = response.data.data.socialMedias;
                    });
            } catch (error) {
                console.error('Error fetching footer info:', error);
            }
        },
        async updateFooter(infoList: any) {
            try {
                return await axiosConfig.post(`${API.FOOTER}`, infoList)
                    .then((response: any) => {
                        return response.data;
                    });
            } catch (error) {
                console.error('Error updating footer:', error);
            }
        },

        addNew(newsItem: any, title: string) {
            if (title === 'Cột 1') {
                this.column_1.push(newsItem);
            } else {
                this.column_2.push(newsItem);
            }
        },

        deleteNew(index: any, title: string) {
            if (title === 'Cột 1') {
                this.column_1.splice(index, 1);
            } else {
                this.column_2.splice(index, 1);
            }
        },
        addPhone(phoneItem: any, title: string) {
            switch (title) {
                case 'SĐT Bán hàng':
                    this.salesPhone.push(phoneItem);
                    break;
                case 'SĐT Bảo hành':
                    this.warrantyPhone.push(phoneItem);
                    break;
                case 'SĐT Khiếu nại':
                    this.complaintPhone.push(phoneItem);
                    break;
            }
        },

        deletePhone(index: number, title: string) {
            switch (title) {
                case 'SĐT Bán hàng':
                    this.salesPhone.splice(index, 1);
                    break;
                case 'SĐT Bảo hành':
                    this.warrantyPhone.splice(index, 1);
                    break;
                case 'SĐT Khiếu nại':
                    this.complaintPhone.splice(index, 1);
                    break;
            }
        }

    }
});