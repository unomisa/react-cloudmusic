import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CommonState } from "@/types/common";
import { getLoginStatus } from "@/api";
import { notification } from "antd";

import { getUserDetail } from "@/api/common/user";
import { inform } from "@/config/antd";

const initialState: CommonState = {
    isLogin: false, // 是否登录
    user: undefined // 用户信息
};

// 获取登录状态
export const asyncGetLoginStatusAction = createAsyncThunk(
    "asyncFetch",
    async (payload, { dispatch, getState }) => {
        const { data: statusData } = (await getLoginStatus()) as any;

        // 获取到用户状态
        if (statusData.code === 200 && statusData.account !== null && statusData.profile !== null) {
            const userRes = await getUserDetail(statusData.account.id); // 获取用户详情
            dispatch(changeUserAction(userRes)); // 保存用户信息
            dispatch(changeIsLoginAction(true)); // 设置登录状态

            inform.success({
                message: "登录成功",
                description: "欢迎回到云村"
            });
        }
    }
);

const CommonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {
        changeUserAction(state, { payload }) {
            state.user = payload;
        },
        changeIsLoginAction(state, { payload }) {
            state.isLogin = payload;
        }
    }
});

export const { changeUserAction, changeIsLoginAction } = CommonSlice.actions;
export default CommonSlice.reducer;
