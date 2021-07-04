import AxiosInterceptorManager from './AxiosInterceptorManager';

export type Methods =
  | 'get' | 'GET'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'
  | 'purge' | 'PURGE'
  | 'link' | 'LINK'
  | 'unlink' | 'UNLINK'

export interface AxiosRequestConfig {
  url?: string;
  method?: Methods;
  params?: Record<string,any>,
  headers?: Record<string, any>;
  data?:  Record<string, any>;
  timeout?: number;
  transformRequest?: (data: any,headers: any)=> any;
  transformResponse?: (data: any) => any;
  cancelToken?: any;
  isCancel?: any;
}

// NOTE: Promise的泛型T代表此promise变成成功态之后resolve的值
export interface AxiosInstance {
  <T = any>(config:AxiosRequestConfig): Promise<AxiosResponse<T>>;
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
  },
  cancelToken?: any;
  isCancel?: any;
}

// NOTE: 泛型T代表响应体的类型
export interface AxiosResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers?: Record<string, any>;
  config?: AxiosRequestConfig;
  request?: XMLHttpRequest;
}