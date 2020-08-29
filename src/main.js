import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)
axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
