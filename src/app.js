import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Layout from './vue/components/Layout.vue'
import store from './vue/store/index.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './styles/bootstrap-vue.scss'

library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(BootstrapVue)

const app = new Vue({
  render: h => h(Layout),
  store
})

export { app }
