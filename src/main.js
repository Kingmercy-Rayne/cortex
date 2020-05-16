import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueGeoLocation from 'vue-browser-geolocation';

require('./assets/css/global.css');
require('./assets/swiper/css/swiper.min.css');

Vue.config.productionTip = false;
Vue.use(VueGeoLocation);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
