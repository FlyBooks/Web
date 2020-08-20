import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://httpbin.org/",
  timeout: 3000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // 1.发送网络请求时, 在界面的中间位置显示Loading的组件

    // 2.某一些请求要求用户必须携带token, 如果没有携带, 那么直接跳转到登录页面

    // 3.params/data序列化的操作
    console.log("请求被拦截",config);

    return config;
  },
  (err) => {}
);

axiosInstance.interceptors.response.use(
  (res) => {
    console.log(res);
    return res;
  },
  (err) => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          console.log("请求错误");
          break;
        case 401:
          console.log("未授权访问");
          break;
        default:
          console.log("其他错误信息");
      }
    }
    return err;
  }
);

export default axiosInstance;
