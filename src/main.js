import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import VueCarousel from 'vue-carousel';
import VueJsModal from '../node_modules/vue-js-modal';
import AOS from 'aos'
import 'aos/dist/aos.css'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Multiselect from 'vue-multiselect'
import VueScrollFixedNavbar from "vue-scroll-fixed-navbar";
import Vuelidate from 'vuelidate';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Toasted from 'vue-toasted';

const Options = {

  position: 'top-center',
  duration: '3000',
};
Vue.use(VueSweetalert2);
Vue.use(Toasted, Options);
Vue.use(VueCarousel);
Vue.use(BootstrapVue);
Vue.component('multiselect', Multiselect);

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
