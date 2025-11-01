import { defineStore } from 'pinia';

interface Content {
  type: string;
  message: string;
}

interface Toasted {
  isToasted: boolean;
  content: Content;
}

export const toastStore = defineStore('toast', {
  state: (): Toasted => {
    return {
      isToasted: false,
      content: {
        type: '',
        message: '',
      },
    };
  },
  actions: {
    setMessageError(message: string) {
      this.isToasted = true;
      this.content = {
        type: 'error',
        message: message,
      };
    },
    setMessageSuccess(message: string) {
      this.isToasted = true;
      this.content = {
        type: 'success',
        message: message,
      };
    },
    closeToast() {
      this.isToasted = false;
    },
    autoCloseToast() {
      setTimeout(() => {
        this.isToasted = false;
      }, 5000);
    },
  },
});
