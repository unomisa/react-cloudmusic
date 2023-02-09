import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CommonState, Song, TrackDetail } from "@/types/common";
import { getLoginStatus, getSongUrl } from "@/api";

import { getUserDetail } from "@/api/common/user";
import { inform } from "@/config/antd";
import { StoreState } from "..";

const initialState: CommonState = {
    isLogin: false, // 是否登录
    user: undefined, // 用户信息
    playSong: undefined, // 当前播放歌曲
    playSongUrl: "", // 播放歌曲url
    playList: [], // 播放列表
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
        changePlaySongUrlAction(state, { payload }) {
            state.playSongUrl = payload;
        },
        changePlayListAction(state, { payload }) {
            state.playList = payload;
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
    async (payload: { track: TrackDetail; trackList: TrackDetail[] }, { dispatch, getState }) => {
        const { trackList, track } = payload;

        const storeState = getState() as StoreState;

        const { playSong } = storeState.common;

        if (track.id === playSong?.id) return; // 相同歌曲直接跳出

        dispatch(changePlaySongAction(track)); // 显示播放歌曲信息
        dispatch(changeShowPlayBarAction(true)); // 显示playBar

        console.log("切换当前歌曲");
        const res = await getSongUrl(track.id); // 获取歌曲url
        dispatch(changePlaySongUrlAction(res.data[0].url));
    }
);

export const {
    changeUserAction,
    changeIsLoginAction,
    changePlaySongAction,
    changePlaySongUrlAction,
    changePlayListAction,
    changeShowPlayBarAction
} = CommonSlice.actions;
export default CommonSlice.reducer;
