import { createI18n } from 'vue-i18n';
import vi from '../locace/vi';

const locale = 'vi';
export default createI18n({
  legacy: false,
  globalInjection: true,
  locale: locale,
  messages: {
    vi,
  },
});
