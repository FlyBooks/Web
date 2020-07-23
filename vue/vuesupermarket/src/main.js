import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' //把store导入到main.js里面
import toast from "./components/common/toast";

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue();

//安装toast插件
Vue.use(toast);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
