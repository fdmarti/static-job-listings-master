import { createApp } from 'vue';
import { createPinia } from 'pinia';

const pinia = createPinia();
import './style.css';
import App from './App.vue';

createApp(App).use(pinia).mount('#app');
