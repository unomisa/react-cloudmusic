import { request, requestNotCode } from "@/services/index";

// * 登录相关

// 查询登录状态
export function getLoginStatus() {
    return requestNotCode.get({
        url: "/login/status",
        params: {}
    });
}

// 刷新登录状态
export function refreshStatus() {
    return request.get({
        url: "/login/refresh",
        params: {}
    });
}

// 刷新登录状态
export function getUserAccount() {
    return request.get({
        url: "/user/account",
        params: {}
    });
}

// 登出
export function logOut() {
    return request.get({
        url: "/logout",
        params: {}
    });
}

// 手机登录：密码/验证码
export function phoneLogin(phone, captcha) {
    return request.get({
        url: "/login/cellphone",
        params: {
            phone,
            captcha
        }
    });
}

// 向手机发送验证码
export function sendCaptcha(phone, ctcode) {
    return request.get({
        url: "/captcha/sent",
        params: {
            phone,
            ctcode
        }
    });
}

// 校验验证码是否正确
export function captchaVerify(phone, captcha, ctcode) {
    return request.get({
        url: "/captcha/verify",
        params: {
            phone,
            captcha,
            ctcode
        }
    });
}

// 生成二维码key
export function getQRKey() {
    return request.get<{ unikey: string }>({
        url: "/login/qr/key",
        params: {}
    });
}

// 生成二维码
export function getQRImg(key: string, qrimg) {
    return request.get<{ qrimg: string }>({
        url: "/login/qr/create",
        params: {
            key,
            qrimg
        }
    });
}

// 查询二维码状态
export function getQRCodeStatus(key: string) {
    return requestNotCode.get({
        url: "/login/qr/check",
        params: {
            key
        }
    });
}

// * 注册相关
// 查看手机号是否注册
export function phoneExistence(phone) {
    return request.get({
        url: "/cellphone/existence/check",
        params: {
            phone
        }
    });
}

// 注册
export function register(phone, password, captcha, nickname) {
    return request.get({
        url: "/register/cellphone",
        params: {
            phone,
            password,
            captcha,
            nickname
        }
    });
}
