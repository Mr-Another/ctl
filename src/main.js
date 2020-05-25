'use strict'
import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
import blueUi from 'blue-ui'
import 'blue-ui/dist/styles/blue-ui.css'
// import store from './store';

Vue.config.productionTip = false
Vue.use(blueUi)

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
