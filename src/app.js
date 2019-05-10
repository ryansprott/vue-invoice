import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Layout from './vue/components/Layout.vue'
import store from './vue/store/index.js'
import './styles/bootstrap-vue.scss'
import './styles/leaflink.scss'

Vue.use(BootstrapVue)

const app = new Vue({
  render: h => h(Layout),
  store
})

export { app }
