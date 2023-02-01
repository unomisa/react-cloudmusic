import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { SongListDetailState } from "@/types/song-list-detail";
import { getPlayListDetail } from "@/api";

const initialState: SongListDetailState = {
    playListDetail: undefined
};

const SongListDetailSlice = createSlice({
    name: "songListDetail",
    initialState,
    reducers: {
        changePlayListDetail(state, { payload }) {
            state.playListDetail = payload;
        }
    }
});

// 在一个异步函数中请求页面所需数据
export const asyncGetPlayListDetailAction = createAsyncThunk(
    "asyncFetch",
    (payload, { dispatch }) => {
        getPlayListDetail(2544350).then((res) => {
            dispatch(changePlayListDetail(res.playlist));
        });
    }
);

export const { changePlayListDetail } = SongListDetailSlice.actions;
export default SongListDetailSlice.reducer;
