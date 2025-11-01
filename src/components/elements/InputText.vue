<template>
  <div
    class="input-text"
    :class="disable ? 'pointer-events-none text-[#33333399]' : 'text-[#333333]'"
  >
    <Field
      :name="props.name ? props.name : 'file'"
      :type="props.type"
      as="input"
      :placeholder="props.placeholder ? props.placeholder : ''"
      class="input-value"
      autocomplete="off"
      :class="classCustom"
      v-model="value"
      :rules="props.rules ? props.rules : ''"
    />
    <br />
    <ErrorMessage :name="props.name ? props.name : 'file'" class="text-error" />
  </div>
</template>
<script setup>
import { Field, ErrorMessage } from 'vee-validate';
import { computed, ref, watch } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  rules: {
    type: String,
    default: '',
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
  disable: {
    type: Boolean,
    default: false,
  },
  classCustom: {
    type: String,
    default: 'h-[40px] w-full',
  },
});

const emit = defineEmits(['update:modelValue']);

const value = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});
</script>
<style lang="scss" scoped>
.input-text {
  @apply relative flex-1;
  .input-value {
    @apply md:text-[15px] text-[13px] border border-[#C9CACD] focus:border-[#ABADAF] py-[11px] md:px-[10px] px-[6px] focus:outline-none  rounded-[6px] mb-1  placeholder-[#33333399];
    @media screen and (min-width: 1360px) and (max-width: 1700px),
      screen and (min-width: 2000px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
      font-size: 13.6px !important;
    }
  }
}
</style>
