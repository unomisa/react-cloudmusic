import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CommonState, Song, TrackDetail } from "@/types/common";
import { getLoginStatus, getSongUrl } from "@/api";

import { getUserDetail } from "@/api/common/user";
import { inform } from "@/config/antd";

const initialState: CommonState = {
    isLogin: false, // 是否登录
    user: undefined, // 用户信息
    playSong: undefined, // 当前播放歌曲
    showPlayBar: false // 是否显示播放栏
};

const CommonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {
        changeUserAction(state, { payload }) {
            state.user = payload;
        },
        changeIsLoginAction(state, { payload }) {
            state.isLogin = payload;
        },
        changePlaySongAction(state, { payload }) {
            state.playSong = payload;
        },
        changeShowPlayBarAction(state, { payload }) {
            state.showPlayBar = payload;
        }
    }
});

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

// 设置当前播放歌曲
export const asyncSetCurrentPlaySongAction = createAsyncThunk(
    "asyncFetch",
    async (payload: { track: TrackDetail }, { dispatch, getState }) => {
        const { track } = payload;

        dispatch(changeShowPlayBarAction(true)); // 显示playBar

        // 等待前先让其渲染
        let song = { ...track, url: "" };
        dispatch(changePlaySongAction(song)); // 保存
        const res = await getSongUrl(track.id);
        song = { ...track, url: res.data[0].url };
        dispatch(changePlaySongAction(song)); // 保存
    }
);

export const {
    changeUserAction,
    changeIsLoginAction,
    changePlaySongAction,
    changeShowPlayBarAction
} = CommonSlice.actions;
export default CommonSlice.reducer;
