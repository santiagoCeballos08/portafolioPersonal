import { createApp } from 'vue';
import { createPinia } from 'pinia';

// estilos
import '../public/assets/fonts/fonts.css';
import './styles/cssReset.scss';
import './styles/app.css';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
