// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
// import BootstrapVue from 'bootstrap-vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import store from '@/store/store'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
//import './../node_modules/bulma/css/bulma.css';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueYouTubeEmbed from 'vue-youtube-embed'


Vue.use(VueYouTubeEmbed)

Vue.use(Buefy)
// Vue.use(BootstrapVue);
Vue.use(Vuetify);

Vue.config.productionTip = false

sync(store, router)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  showModal: false
})
