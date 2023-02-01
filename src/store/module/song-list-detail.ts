import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { SongListDetailState, SongListAsyncPayload } from "@/types/song-list-detail";
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
    (payload: SongListAsyncPayload, { dispatch }) => {
        const { id } = payload;

        getPlayListDetail(id).then((res) => {
            dispatch(changePlayListDetail(res.playlist));
        });
    }
);

export const { changePlayListDetail } = SongListDetailSlice.actions;
export default SongListDetailSlice.reducer;
