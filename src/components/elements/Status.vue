<template>
  <div>
    <div
      v-if="props.status == DELIVERED"
      class="flex items-center justify-start p-1 ml-3"
    >
      <Icon :type="CIRCLE" :color="COLOR.success" />
      <div class="ml-2">{{ t('order.status.delivered') }}</div>
    </div>
    <div
      v-if="props.status == SHIPPED"
      class="flex items-center justify-start p-1 ml-3"
    >
      <Icon :type="CIRCLE" :color="COLOR.primary_2" />
      <div class="ml-2">{{ t('order.status.shipped') }}</div>
    </div>
    <div
      v-if="props.status == CANCELED"
      class="flex items-center justify-start p-1 ml-3"
    >
      <Icon :type="CIRCLE" :color="COLOR.error" />
      <div class="ml-2">{{ t('order.status.canceled') }}</div>
    </div>
    <div
      v-if="props.status == PENDING"
      class="flex items-center justify-start p-1 ml-3"
    >
      <Icon :type="CIRCLE" :color="COLOR.yellow" />
      <div class="ml-2">{{ t('order.status.pending') }}</div>
    </div>
  </div>
</template>

<script setup>
import Icon from './Icon.vue';
import { DELIVERED, SHIPPED, CANCELED, PENDING } from '@/utils/constant';
import { useI18n } from 'vue-i18n';
import { CIRCLE } from '@/utils/constant';
import { COLOR } from '../../utils/theme';
const { t } = useI18n();
const props = defineProps({
  status: {
    type: String,
    default: 1,
  },
});
</script>
