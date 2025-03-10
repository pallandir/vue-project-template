import axios from "axios";
import { type App } from "vue";
import { type AxiosPluginOptions } from "./types";

export default {
  install: (app: App, options: AxiosPluginOptions = {}) => {
    const axiosInstance = axios.create({
      baseURL: options.baseURL || "",
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
      timeout: options.timeout || 30000,
      ...options.axiosOptions,
    });

    axiosInstance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("authToken");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        options.onRequestError?.(error);
        return Promise.reject(error);
      }
    );

    axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response) {
          console.error("API Error:", error.response.data);
          app.config.globalProperties.$onApiError?.(error.response);
        } else {
          console.error("Network Error:", error);
        }
        return Promise.reject(error);
      }
    );

    app.provide("axios", axiosInstance);
    app.config.globalProperties.$axios = axiosInstance;
  },
};
