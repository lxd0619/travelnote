import Vue from 'vue'
import App from './App.vue'
import router from './router'
//加载和使用ElementUI框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from './http'
Vue.use(ElementUI);

Vue.prototype.$axios=axios

Vue.config.productionTip = false

new Vue({
  router,
  data:{},
  render: function (h) { return h(App) }
}).$mount('#app')
