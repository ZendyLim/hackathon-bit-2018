import Vue from 'vue';
import App from './App.vue';
import router from './router';
import {MdButton} from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import './assets/styles.scss';

Vue.config.productionTip = false;
Vue.use(MdButton);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
