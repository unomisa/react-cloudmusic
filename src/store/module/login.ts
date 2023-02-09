import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { LoginState } from "@/types/login";
import { getQRCodeStatus, getQRImg, getQRKey } from "@/api";
import login from "@/components/login";
import { StoreState } from "../index";
import { asyncGetLoginStatusAction } from "./common";

const initialState: LoginState = {
    isShowLogin: false, // 登录框是否显示
    tabActiveKey: "1", // 当前活动tab key 值
    qrCode: {
        key: "",
        base64Img: "",
        statusCode: 801
    }
};

// 二维码登录： 获取二维码
export const asyncGetQrCodeLoginAction = createAsyncThunk(
    "asyncFetch",
    async (payload, { dispatch, getState }) => {
        let timer: NodeJS.Timer;
        clearInterval(timer);

        const qrKeyRes = await getQRKey();
        const unikey = qrKeyRes.data.unikey;
        dispatch(changeQrCodeKeyAction(unikey)); // 拿到key

        const qrImgRes = await getQRImg(unikey, 1);
        dispatch(changeQrCodeBase64ImgAction(qrImgRes.data.qrimg)); // 使用key请求二维码
        dispatch(changeQrCodeKeyStatusAction(801)); // 有了二维码之后直接设置为等待扫码状态

        dispatch(asyncGetQRCodeStatusAction()); // 获取二维码状态
    }
);

// 二维码登录： 获取二维码状态
export const asyncGetQRCodeStatusAction = createAsyncThunk(
    "asyncFetch",
    async (payload, { dispatch, getState }) => {
        let timer: NodeJS.Timer;
        clearInterval(timer);

        timer = setInterval(async () => {
            const state = getState() as StoreState;
            const { qrCode, isShowLogin, tabActiveKey } = state.login;

            if (!isShowLogin || tabActiveKey !== "1") clearInterval(timer); // 若登录框关闭或者活动tab不是二维码登录时，则停止查询状态

            const qrStateRes = await getQRCodeStatus(qrCode.key); // 使用key拿到二维码状态
            const code = qrStateRes.code;
            dispatch(changeQrCodeKeyStatusAction(code));

            switch (code) {
                case 800: // 二维码过期重新请求
                    clearInterval(timer);
                    dispatch(asyncGetQrCodeLoginAction()); // 重新获取
                    break;
                case 803: // 授权成功，停止获取二维码状态
                    dispatch(asyncGetLoginStatusAction()); // 获取用户信息
                    clearInterval(timer);
                    login.hidden(); // 关闭登录窗口
                    break;
            }
        }, 1000);
    }
);

const LoginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        changeIsShowLoginAction(state, { payload }) {
            state.isShowLogin = payload;
        },
        changeTabActiveKeyAction(state, { payload }) {
            state.tabActiveKey = payload;
        },
        changeQrCodeKeyAction(state, { payload }) {
            state.qrCode.key = payload;
        },
        changeQrCodeBase64ImgAction(state, { payload }) {
            state.qrCode.base64Img = payload;
        },
        changeQrCodeKeyStatusAction(state, { payload }) {
            state.qrCode.statusCode = payload;
        }
    }
});

export const {
    changeIsShowLoginAction,
    changeTabActiveKeyAction,
    changeQrCodeKeyAction,
    changeQrCodeBase64ImgAction,
    changeQrCodeKeyStatusAction
} = LoginSlice.actions;
export default LoginSlice.reducer;
