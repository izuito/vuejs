import Vue from 'vue'
import VueAxios from 'vue-axios'
import VueAcl from 'vue-acl'
// import Vuex from 'vuex'
// import { sync } from 'vuex-router-sync'

import axios from 'axios'
import App from './App.vue'
import router from './router/index'
// import store from './store/index'

Vue.use(VueAxios, axios)
// Vue.use(Vuex)

//Vue.use(VueAcl, { router: router, init: 'public', save: true })

// sync(store, router)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
