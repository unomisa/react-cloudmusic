import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { SongListDetailState, SongListAsyncPayload } from "@/types/song-list-detail";
import { getPlayListDetail, getSongDetail } from "@/api";
import { TrackId } from "@/types/common";

const initialState: SongListDetailState = {
    playListDetail: null,
    trackList: []
};

const SongListDetailSlice = createSlice({
    name: "songListDetail",
    initialState,
    reducers: {
        changePlayListDetailAction(state, { payload }) {
            state.playListDetail = payload;
        },
        changeTrackListAction(state, { payload }) {
            state.trackList = payload;
        }
    }
});

// 请求歌单详情数据
export const asyncGetPlayListDetailAction = createAsyncThunk(
    "asyncFetch",
    async (payload: SongListAsyncPayload, { dispatch }) => {
        const { id } = payload;

        const detailRes = await getPlayListDetail(id);
        dispatch(changePlayListDetailAction(detailRes.playlist));

        // 拼接歌曲id
        const trackIds = detailRes.playlist.trackIds.map((track: TrackId) => track.id).join(",");
        const trackUrlsRes = await getSongDetail(trackIds);
        dispatch(changeTrackListAction(trackUrlsRes.songs));
    }
);

export const songListDetailStateResetAction = createAsyncThunk(
    "asyncFetch",
    async (payload, { dispatch }) => {
        dispatch(changePlayListDetailAction(null));
        dispatch(changeTrackListAction([]));
    }
);

export const { changePlayListDetailAction, changeTrackListAction } = SongListDetailSlice.actions;
export default SongListDetailSlice.reducer;
