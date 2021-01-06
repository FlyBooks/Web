import axios from "axios";
import vue from "vue";

export function request(config) {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 5000,
  });
  let count = 0;

  axiosInstance.interceptors.request.use(
    (configure) => {
      count++;
      vue.Loading();
      return configure;
    },
    (error) => {
      vue.Hiding();
      return Promise.reject(error);
    }
  );
  axiosInstance.interceptors.response.use(
    (result) => {
      count--;
      if (count === 0) {
        vue.Hiding();
      }
      return result;
    },
    (error) => {
      vue.Hiding();
      return Promise.reject(error);
    }
  );
  return axiosInstance(config);
}
