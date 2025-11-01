import { defineStore } from 'pinia';

interface PopUp {
  isAccept: boolean;
  isHiddenPopUp: boolean;
  index: any;
}

export const popupStore = defineStore('popup', {
  state: (): PopUp => {
    return {
      isAccept: true,
      isHiddenPopUp: false,
      index: 0,
    };
  },
  actions: {
    setPopUp(status: boolean) {
      this.isHiddenPopUp = status;
    },
    setStatus(status: boolean) {
      this.isAccept = status;
    },
    setIndex(index: any) {
      this.index = index;
    },
  },
});
