import { createApp } from 'vue';

import './assets/css/styles.css';
import './assets/css/responsive.css';

import FontAwesomeIcon from './plugins/font-awesome';

import App from './App.vue';

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
