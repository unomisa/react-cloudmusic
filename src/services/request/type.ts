import type { AxiosRequestConfig } from "axios";

// 自定义服务器返回类型
export interface CustomResponse<T = any> {
    code: number;
    [key: string]: any;
    data?: T;
}

export interface RequestInterceptors {
    // 请求拦截
    requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
    requestInterceptorsCatch?: (err: any) => any;
    // 响应拦截
    responseInterceptors?: (res: any) => any;
    responseInterceptorsCatch?: (err: any) => any;
}
// 自定义传入的参数
export interface RequestConfig extends AxiosRequestConfig {
    interceptors?: RequestInterceptors;
}
export interface CancelRequestSource {
    [index: string]: () => void;
}
