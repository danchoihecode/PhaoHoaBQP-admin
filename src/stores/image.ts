import { defineStore } from 'pinia';

interface Image {
  images: Array<any>;
}

export const imageStore = defineStore('image', {
  state: (): Image => {
    return {
      images: [],
    };
  },
  actions: {
    getImageList() {
      return this.images;
    },
    setImageList(image: any) {
      this.images = image;
    },
    addImage(image: any) {
      this.images.push(image);
    },
    deleteImage(index: any) {
      this.images.splice(index, 1);
    }
  },
});
