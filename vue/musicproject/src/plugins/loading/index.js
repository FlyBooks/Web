import Loading from "./Loading.vue";

export default {
  install: (Vue) => {
    const LoadingConstructor = Vue.extend(Loading);
    const LoadingInstance = new LoadingConstructor();

    const oDiv = document.createElement("div");
    document.body.appendChild(oDiv);

    LoadingInstance.$mount(oDiv);

    Vue.prototype.$loading = function() {
      LoadingInstance.isShow = true;
    };
  },
};
