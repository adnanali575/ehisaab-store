import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from '../src/routes'
import store from './store/store'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router: router,
  store,
}).$mount('#app')
