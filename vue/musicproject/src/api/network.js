import axios from "axios";

export function request(config) {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 5000,
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
