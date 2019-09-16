import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAppleAlt, faCheese, faHamburger, faSnowflake, faMortarPestle } from '@fortawesome/free-solid-svg-icons'
import { faSun, faCandyCane, faShower, faToilet, faGlassMartini } from '@fortawesome/free-solid-svg-icons'
import { faCoffee, faSeedling, faHorse, faWrench } from '@fortawesome/free-solid-svg-icons'
import { faSortAmountDown, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false
library.add(faAppleAlt)
library.add(faCheese)
library.add(faHamburger)
library.add(faSnowflake)
library.add(faMortarPestle)
library.add(faSun)
library.add(faCandyCane)
library.add(faShower)
library.add(faToilet)
library.add(faGlassMartini)
library.add(faCoffee)
library.add(faSeedling)
library.add(faHorse)
library.add(faWrench)
library.add(faSortAmountDown)
library.add(faTrashAlt)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)
 
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
