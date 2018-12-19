import Vue from 'vue'
import router from './router'

Vue.config.productionTip = true

new Vue({
  el: '#app',
  router: router,
  render: h => h('router-view')
}).$mount('#app')
