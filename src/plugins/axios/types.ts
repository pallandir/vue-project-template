import {
  type AxiosRequestConfig,
  type AxiosResponse,
  type AxiosError,
} from "axios";

export interface AxiosPluginOptions {
  baseURL?: string;
  headers?: Record<string, string>;
  timeout?: number;
  axiosOptions?: AxiosRequestConfig;
  getToken?: () => string | null;
  onRequest?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  onRequestError?: (error: any) => void;
  onResponse?: (response: AxiosResponse) => AxiosResponse;
  onResponseError?: (error: AxiosError) => void;
  onNetworkError?: (error: Error) => void;
  disableErrorLogging?: boolean;
  withHelpers?: boolean;
}
