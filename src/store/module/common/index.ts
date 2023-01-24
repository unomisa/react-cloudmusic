import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getPlayListDetail } from "@/api";

const initialState = {
    playListDetail: {}
};

const CommonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {
        changePlayListDetail(state, { payload }) {
            state.playListDetail = payload;
        }
    }
});

// 在一个异步函数中请求home页面所需数据
export const asyncGetPlayListDetailAction = createAsyncThunk(
    "asyncFetch",
    (payload, { dispatch }) => {
        getPlayListDetail(8068884775).then((res) => {
            // dispatch(changePlayListDetail(res.banners));
        });
    }
);

export const { changePlayListDetail } = CommonSlice.actions;
export default CommonSlice.reducer;
