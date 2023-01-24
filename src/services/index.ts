import Request from "./request";

export const request = new Request({
    baseURL: "http://localhost:3000", // todo 从本地文件导入
    timeout: 1000 * 60 * 5,
    interceptors: {
        // 请求拦截器
        requestInterceptors: (config) => {
            return config;
        },
        // 响应拦截器
        responseInterceptors: (result) => {
            if (result.code === 200) {
                return result;
            } else {
                console.error("请求出错啦");
            }
        }
    }
});
