import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import loading from "./plugins/loading";
import fastclick from "fastclick";
import "./assets/css/base.scss";
import VueLazyload from "vue-lazyload";

fastclick.attach(document.body); //fastclick解决移动端100~300毫秒的点击事件延迟问题

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(loading);
Vue.use(VueLazyload,{
  loading: require("./assets/images/loading.png")
});

new Vue({
  router,
  store,
  render: (h) => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount("#app");
