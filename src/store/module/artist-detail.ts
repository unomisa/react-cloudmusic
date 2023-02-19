import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getArtistAlbum, getArtistDetail } from "@/api";
import { ArtistDetailState } from "@/types/artist-detail";

const initialState: ArtistDetailState = {
    artistDetail: null
};

const ArtistDetailSlice = createSlice({
    name: "artistDetail",
    initialState,
    reducers: {
        changeArtistDetailAction(state, { payload }) {
            state.artistDetail = payload;
        }
    }
});

// 请求歌手详情数据
export const asyncGetArtistDetailAction = createAsyncThunk(
    "asyncFetch",
    async (payload: { id: string | number }, { dispatch }) => {
        const { id } = payload;

        getArtistDetail(id).then((res) => {
            dispatch(changeArtistDetailAction(res.data));
        });

        getArtistAlbum(id).then((res) => {
            console.log("res: ", res);
        });
    }
);

// 清除数据
export const artistDetailStateResetAction = createAsyncThunk(
    "asyncFetch",
    async (payload, { dispatch }) => {
        dispatch(changeArtistDetailAction(null));
    }
);

export const { changeArtistDetailAction } = ArtistDetailSlice.actions;
export default ArtistDetailSlice.reducer;
