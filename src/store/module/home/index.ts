import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBanner, getPersonalizedList } from "@/api/page/home";

import { HomeState } from "./type";

const initialState: HomeState = {
    bannerList: [],
    personalizedList: []
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
});

export const { changeBannerListAction, changePersonalizedListAction } = homeSlice.actions;
export default homeSlice.reducer;
