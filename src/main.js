import Vue from 'vue';
import vueSmoothScroll from 'vue2-smooth-scroll';
import App from './App.vue';
import router from './router';
import store from './store';

require('./assets/css/global.css');
require('./assets/swiper/css/swiper.min.css');

Vue.config.productionTip = false;

Vue.use(vueSmoothScroll);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
