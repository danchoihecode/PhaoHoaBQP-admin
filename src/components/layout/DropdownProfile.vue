<template>
  <div class="bg-white content-dropdown">
    <div class="flex items-center p-3">
      <div class="avatar">
        <img :src="AvaterDefault" class="max-w-11" />
      </div>
      <div class="pl-5">
        <div>Admin</div>
        <div>admin@gmail.com</div>
      </div>
    </div>
    <hr class="text-gray_01" />
    <div class="p-3 flex justify-between">
      <span class="text-gray_02">{{ t('logout') }}</span>
      <span class="cursor-pointer" @click="logout">
        <Icon :type="LOGOUT" />
      </span>
    </div>
  </div>
</template>
<script setup>
import AvaterDefault from '@/assets/images/avatar.png';
import { useI18n } from 'vue-i18n';
import Icon from '@/components/elements/Icon.vue';
import { LOGOUT } from '@/utils/constant';
import JwtService from '@/services/jwt.service';
import { useAuthStore } from '@/stores/auth';
import { useRoute, useRouter } from 'vue-router';
import { toastStore } from '@/stores/toasted';
import Toasted from '@/components/Toasted.vue';
const toast = toastStore();

const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();
const { t } = useI18n();

const logout = () => {
  authStore.logout().then((data) => {
    router.push('/login');
    toast.setMessageSuccess(
      t(`message.${data.status}`, { field: t('logout') }),
    );
  });
};
</script>
<style scoped lang="scss">
.content-dropdown {
  border-radius: 0.75rem;
}
</style>
