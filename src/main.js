import './style/variable.scss';
// 引入 iconpark style
import '@icon-park/vue/styles/index.css';
import { IconPark } from '@icon-park/vue/es/all';
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.component('icon-park', IconPark);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
