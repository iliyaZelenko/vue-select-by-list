import Vue from 'vue'
import VueSelect from 'vue-cool-select'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueSelect, {
  theme: 'bootstrap'
})

new Vue({
  render: h => h(App),
}).$mount('#app')
