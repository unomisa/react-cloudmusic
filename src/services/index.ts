import axios from "axios";
import Request from "./request";
import { CustomResponse } from "./request/type";

axios.defaults.withCredentials = true; //设置cross跨域 并设置访问权限 允许跨域携带cookie信息

// 配置全局拦截
Request.globalInterceptorsObj = {
    responseInterceptors: (res) => {
        return res.data;
    }
};

export const request = new Request({
    baseURL: "http://localhost:3200", // todo 从本地文件导入
    timeout: 1000 * 60 * 5,
    interceptors: {
        // 请求拦截器
        requestInterceptors: (config) => {
            config.params = {
                _t: Date.now(), // 为每次请求添加时间戳
                ...config.params
            };

            return config;
        },
        // 响应拦截器
        responseInterceptors: (result: CustomResponse) => {
            if (result.code === 200) {
                return result;
            } else {
                console.error("出问题啦");
            }
        }
    }
});

export const requestNotCode = new Request({
    baseURL: "http://localhost:3200", // todo 从本地文件导入
    timeout: 1000 * 60 * 5,
    interceptors: {
        // 请求拦截器
        requestInterceptors: (config) => {
            config.params = {
                _t: Date.now(), // 为每次请求添加时间戳
                ...config.params
            };

            return config;
        },
        // 响应拦截器
        responseInterceptors: (result: CustomResponse) => {
            return result;
        }
    }
});
