import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'  
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'  

const pinia = createPinia()

//FontAwesome library
library.add(faBars)

createApp(App)
  .use(router)
  .use(pinia).mount('#app').component('font-awesome-icon', FontAwesomeIcon) 
