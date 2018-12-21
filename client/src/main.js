import Vue from 'vue'
import App from './App.vue'
import routes from './routes'
import VueRouter from 'vue-router'
import VueMarkdown from 'vue-markdown'

// Global registration components
Vue.component('vue-markdown', VueMarkdown)

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
