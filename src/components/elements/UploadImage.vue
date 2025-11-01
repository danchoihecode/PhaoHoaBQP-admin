<template>
  <div class="bg-[#F1F2F5] shadow-md rounded-lg border-gray-200 w-full h-auto flex flex-col items-center p-4"
    @drop="dropHandler($event)" @dragover="dragOverHandler($event)" @dragenter="dragEnterHandler($event)"
    @dragleave="dragLeaveHandler($event)">
    <label for="upload-file" class="cursor-pointer w-full h-[100px] m-2">
      <div
        class="relative border-2 border-dashed border-gray-300 rounded-lg w-full h-full flex flex-col items-center justify-center">
        <div class="p-2 mb-2">
          <Icon :type="UPLOAD" />
        </div>
        <div>Drop file here or click to upload</div>
        <input type="file" multiple class="absolute z-[-1] opacity-0" id="upload-file" @change="loadfile($event)" />
      </div>
    </label>
    <div v-if="imageList.length > 0"
      class="border-2 border-dashed border-gray-300 rounded-lg w-full min-h-32 h-auto m-2 flex flex-wrap gap-4 items-center">
      <div v-for="(image, index) in imageList" :key="index" class="relative h-[100px] w-[100px] cursor-pointer m-3">
        <img :src="image.url" class="h-full w-full object-cover rounded" />
        <div class="absolute top-0 h-full w-full rounded hover:bg-black_01">
          <div class="absolute bottom-0 right-0 hover:bg-black rounded" @click="deleteImageHandler(index)">
            <Icon :type="DELETE" />
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script setup>
import Icon from '@/components/elements/Icon.vue';
import { computed } from 'vue';
import { DELETE, UPLOAD } from '@/utils/constant';
import { imageStore } from '@/stores/image';

const image = imageStore();
const imageList = computed(() => image.images);

const createImageObject = (file) => {
  return {
    id: null,
    file,
    url: URL.createObjectURL(file),
  };
};

const loadfile = (event) => {
  const fileList = event.target.files;
  if (fileList.length > 0) {
    for (let i = 0; i < fileList.length; i++) {
      image.addImage(createImageObject(fileList[i]));
    }
  }
};

const dropHandler = (event) => {
  const fileList = event.dataTransfer.files;
  if (fileList.length > 0) {
    for (let i = 0; i < fileList.length; i++) {
      image.addImage(createImageObject(fileList[i]));
    }
  }
  event.preventDefault();
};

const dragOverHandler = (event) => {
  event.preventDefault();
};

const dragEnterHandler = (event) => {
  event.preventDefault();
};

const dragLeaveHandler = (event) => {
  event.preventDefault();
};

const deleteImageHandler = (index) => {
  image.deleteImage(index);
  document.getElementById("upload-file").value = "";
};
</script>
