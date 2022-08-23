import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import VueCarousel from 'vue-carousel';
import VueJsModal from '../node_modules/vue-js-modal';

Vue.use(VueCarousel);
Vue.config.productionTip = false;
Vue.use(VueJsModal, {
  dialog: true,
  dynamicDefaults: {
    draggable: true
  }
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
