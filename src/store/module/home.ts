import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBanner, getHotArtists, getPersonalizedList } from "@/api/page/home";

import { HomeState } from "@/types/home";

const initialState: HomeState = {
    bannerList: [],
    personalizedList: [],
    hotArtists: []
};

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        changeBannerListAction(state, { payload }) {
            state.bannerList = payload;
        },
        changePersonalizedListAction(state, { payload }) {
            state.personalizedList = payload;
        },
        changeHotArtistsAction(state, { payload }) {
            state.hotArtists = payload;
        }
    }
});

// 在一个异步函数中请求home页面所需数据
export const asyncFetchHomeDataAction = createAsyncThunk("asyncFetch", (payload, { dispatch }) => {
    getBanner().then((res) => {
        dispatch(changeBannerListAction(res.banners));
    });

    getPersonalizedList(15).then((res) => {
        dispatch(changePersonalizedListAction(res.result));
    });

    getHotArtists(24).then((res) => {
        dispatch(changeHotArtistsAction(res.artists));
    });
});

export const { changeBannerListAction, changePersonalizedListAction, changeHotArtistsAction } =
    homeSlice.actions;
export default homeSlice.reducer;
