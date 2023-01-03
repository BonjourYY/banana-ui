import './style/variable.scss';
// 引入 iconpark style
import '@icon-park/vue/styles/index.css';
import { IconPark } from '@icon-park/vue/es/all';
import Vue from 'vue';
import App from './App.vue';
import Button from './components/Button.vue';
import ButtonGroup from './components/ButtonGroup.vue';

Vue.config.productionTip = false;
Vue.component('icon-park', IconPark);
Vue.component('b-button', Button);
Vue.component('b-button-group', ButtonGroup);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
