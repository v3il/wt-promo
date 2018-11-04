import Vue from 'vue'
import VueSilentBox from 'vue-silentbox'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

Vue.use(VueSilentBox);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
