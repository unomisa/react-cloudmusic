import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CommonState, TrackDetail } from "@/types/common";
import { getLoginStatus, getSongUrl } from "@/api";

import { getLikeList, getUserDetail, likeSong } from "@/api/common/user";
import { inform } from "@/config/antd";
import { StoreState } from "..";
import { UserAttach } from "@/types/user";

const userAttach: UserAttach = {
    likeSongSet: null
};

const initialState: CommonState = {
    isLogin: false, // 是否登录
    user: undefined, // 用户信息
    userAttach: userAttach, // 用户其它信息
    playSong: undefined, // 当前播放歌曲
    playSongUrl: "", // 播放歌曲url
    playList: [], // 播放列表
    playIndex: 0,
    showPlayBar: false // 是否显示播放栏
};

// 获取当前播放歌曲索引
export const getPlayIndex = (state: StoreState) =>
    state.common.playList.findIndex((song) => song.id === state.common.playSong.id);

const CommonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {
        changeUserAction(state, { payload }) {
            state.user = payload;
        },
        changeUserAttachLikeSongSetAction(state, { payload }: { payload: Set<number> }) {
            state.userAttach.likeSongSet = payload;
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
        changePlayIndexAction(state, { payload }) {
            state.playIndex = payload;
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
            dispatch(asyncGetUserAttachAction());

            inform.success({
                message: "登录成功",
                description: "欢迎回到云村"
            });
        }
    }
);

// 设置用户附属信息
export const asyncGetUserAttachAction = createAsyncThunk(
    "asyncFetch",
    async (payload, { dispatch, getState }) => {
        const storeState = getState() as StoreState;
        const { user } = storeState.common;

        // 获取用户喜欢歌曲id列表
        getLikeList(user.profile.userId).then((res) => {
            const ids = res.ids as number[];
            const likeSongSet = new Set(ids);
            dispatch(changeUserAttachLikeSongSetAction(likeSongSet));
        });
    }
);

// 设置当前播放歌曲
export const asyncSetCurrentPlaySongAction = createAsyncThunk(
    "asyncFetch",
    async (payload: { track: TrackDetail }, { dispatch, getState }) => {
        const { track } = payload;
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

// 喜欢歌曲
export const asyncLikeSongAction = createAsyncThunk(
    "asyncFetch",
    async (payload: { track: TrackDetail; isLike: boolean }, { dispatch, getState }) => {
        const storeState = getState() as StoreState;
        const { likeSongSet } = storeState.common.userAttach;

        const { track, isLike } = payload;
        const res = await likeSong(track.id, isLike);
        if (res.code === 200) {
            const copyLikeSongSet = new Set(likeSongSet as Set<number>);

            if (isLike) {
                copyLikeSongSet.add(track.id);
            } else {
                copyLikeSongSet.delete(track.id);
            }
            dispatch(changeUserAttachLikeSongSetAction(copyLikeSongSet)); // 同步本地数据

            inform.success({
                message: isLike ? "已添加到我喜欢的音乐" : "取消喜欢歌曲成功"
            });
        }
    }
);

export const {
    changeUserAction,
    changeUserAttachLikeSongSetAction,
    changeIsLoginAction,
    changePlaySongAction,
    changePlaySongUrlAction,
    changePlayListAction,
    changePlayIndexAction,
    changeShowPlayBarAction
} = CommonSlice.actions;
export default CommonSlice.reducer;
