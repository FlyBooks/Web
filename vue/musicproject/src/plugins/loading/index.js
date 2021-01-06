import Loading from "./Loading.vue";

export default {
  install: (Vue) => {
    const LoadingConstructor = Vue.extend(Loading);
    const LoadingInstance = new LoadingConstructor();

    const oDiv = document.createElement("div");
    document.body.appendChild(oDiv);

    LoadingInstance.$mount(oDiv);

    //添加全局方法
    Vue.Loading = function() {
      LoadingInstance.isShow = true;
    };

    Vue.Hiding = function() {
      LoadingInstance.isShow = false;
    };

    Vue.prototype.$loading = function() {
      LoadingInstance.isShow = true;
    };

    Vue.prototype.$hide = function() {
      LoadingInstance.isShow = false;
    };
  },
};
