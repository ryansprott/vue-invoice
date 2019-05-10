import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Layout from './theme/Layout.vue'
import './styles/bootstrap-vue.scss'
import './styles/leaflink.scss'

Vue.use(BootstrapVue)

const app = new Vue({
  render: h => h(Layout)
})

export { app }
