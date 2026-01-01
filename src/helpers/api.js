import { showError } from "./utils";
import axios from "axios";

export const API = axios.create({
  baseURL: process.env.REACT_APP_SERVER ? process.env.REACT_APP_SERVER : "",
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    // 不在拦截器中显示错误，让调用方自行处理
    return Promise.reject(error);
  }
);
