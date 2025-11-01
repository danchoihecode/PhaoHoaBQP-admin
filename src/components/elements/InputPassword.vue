<template>
  <div class="input-password" :class="[classCustom]">
    <div class="relative">
      <Field
        :name="props.name ? props.name : 'password'"
        v-bind:type="type"
        as="input"
        :placeholder="props.placeholder ? props.placeholder : ''"
        class="input-value"
        type="password"
        v-model="value"
        :rules="props.rules ? props.rules : ''"
      />
      <img
        :src="iconHiddenPw"
        class="image_eye"
        @click="displayPw('show')"
        v-show="!isHidden"
      />
      <img
        :src="iconDisplayPw"
        class="image_eye_show"
        @click="displayPw('hidden')"
        v-show="isHidden"
      />
    </div>
  </div>
  <div class="mt-2">
    <ErrorMessage
      :name="props.name ? props.name : 'password'"
      class="text-error"
    />
  </div>
</template>
<script setup>
import { Field, ErrorMessage } from 'vee-validate';
import { computed, ref } from 'vue';
import iconHiddenPw from '@/assets/images/hidden_pwd.svg';
import iconDisplayPw from '@/assets/images/display_pwd.svg';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },

  rules: {
    type: String,
    default: '',
  },
  fieldName: {
    type: String,
    default: 'email',
  },
  type: {
    type: String,
    default: 'text',
  },
  name: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  classCustom: {
    type: String,
    default: 'h-[40px] w-full',
  },
});

const emit = defineEmits(['update:modelValue']);
const type = ref('password');

const value = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});
const isHidden = ref(false);
const displayPw = (text) => {
  if (text === 'hidden') {
    isHidden.value = false;
    type.value = 'password';
  } else if (text === 'show') {
    isHidden.value = true;
    type.value = 'text';
  }
};
</script>
<style lang="scss" scoped>
.input-password {
  .input-value {
    @apply h-[40px] py-[10px] px-[16px] focus:outline-none w-full rounded-[8px] mt-1 border border-[#B3B3B3];
  }

  .image_eye {
    top: calc((100% - 16px) / 2);
    width: 20px;
    @apply absolute right-4 cursor-pointer;
  }

  .image_eye_show {
    top: calc((100% - 13px) / 2);
    width: 20px;
    @apply absolute right-4 cursor-pointer;
  }
}
</style>
