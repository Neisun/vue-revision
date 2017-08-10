// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store/index"
import axios from "axios"
import lodash from "lodash"
import moment  from "moment"
// import lodash from "lodash"
Vue.config.productionTip = false

Vue.prototype.$http = axios
// 不生效
// window._ = require("lodash")
// Vue.prototype.$lodash = lodash
Object.defineProperty(Vue.prototype, '$lodash', { value: lodash });
// Object.defineProperty(Vue.prototype, '$moment', { value: moment });
Vue.prototype.$moment = moment


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
