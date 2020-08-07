import axios from "axios";

export function request(config) {
  const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:3000",
    timeout: 3000,
  });
  axiosInstance.interceptors.request.use(
    (configure) => {
      return configure;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  axiosInstance.interceptors.response.use(
    (result) => {
      return result;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return axiosInstance(config);
}
