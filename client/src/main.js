// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import store from '@/store/store'

import VueYouTubeEmbed from 'vue-youtube-embed'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

Vue.use(VueYouTubeEmbed)

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
