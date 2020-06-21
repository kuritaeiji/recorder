import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import { ValidationProvider, ValidationObserver ,localize, extend } from 'vee-validate'
import ja from 'vee-validate/dist/locale/ja'
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
import * as rules from 'vee-validate/dist/rules'
for (let rule in rules) {
  extend(rule, rules[rule])
}
localize('ja', ja)

import Toasted from 'vue-toasted'
Vue.use(Toasted)

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
