import { createApp } from 'vue';
import FontAwesomeIcon from './plugins/font-awesome';

import './assets/css/styles.css';
import './assets/css/responsive.css';
import App from './App.vue';

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
