import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import i18n from './services/i18n';
import { createPinia } from 'pinia';
import router from './router';
const app = createApp(App);

app.use(i18n);
app.use(createPinia());
app.use(router);

app.mount('#app');
