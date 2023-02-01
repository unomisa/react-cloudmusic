import Request from "./request";
import { CustomResponse } from "./request/type";

// 配置全局拦截
Request.globalInterceptorsObj = {
    responseInterceptors: (res) => {
        return res.data;
    }
};

export const request = new Request({
    baseURL: "http://localhost:3000", // todo 从本地文件导入
    timeout: 1000 * 60 * 5,
    interceptors: {
        // 请求拦截器
        requestInterceptors: (config) => {
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
