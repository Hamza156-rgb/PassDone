import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import VueCarousel from 'vue-carousel';
import VueJsModal from '../node_modules/vue-js-modal';
import AOS from 'aos'
import 'aos/dist/aos.css'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BackToTop from 'vue-backtotop'
import Multiselect from 'vue-multiselect'
import VueScrollFixedNavbar from "vue-scroll-fixed-navbar";
import Vuelidate from 'vuelidate';



Vue.use(VueCarousel);
Vue.use(BootstrapVue);
Vue.component('multiselect', Multiselect);
Vue.use(BackToTop);
Vue.use(VueScrollFixedNavbar);
Vue.use(Vuelidate);

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
  mounted() {
    AOS.init()
  },
}).$mount('#app')
