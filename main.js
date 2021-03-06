import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import store from 'store/index.js'

Vue.prototype.$store = store;

Vue.config.productionTip = false;
App.mpType = 'app'
const app = new Vue({
    ...App,
	store
})




require('config/request.js')(app)

app.$mount()
// #endif

import uView from 'uview-ui'
Vue.use(uView)

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif