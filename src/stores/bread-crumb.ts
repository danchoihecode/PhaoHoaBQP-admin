import { defineStore } from 'pinia';

interface BreadCrumb {
    label: string;
    path: string;
}
export const useBreadCrumbStore = defineStore('breadCrumb', {
    state: () => ({
        title: '' as string,
        breadCrumbs: [] as BreadCrumb[]
    }),
    actions: {
        setBreadCrumbs(title: string, newCrumbs: BreadCrumb[]) {
            this.title = title;
            this.breadCrumbs = newCrumbs;
        }
    },
    getters: {
        getBreadCrumbs: (state) => state.breadCrumbs,
        getTitle: (state) => state.title
    }
});
