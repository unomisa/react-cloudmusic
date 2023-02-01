import { configureStore } from "@reduxjs/toolkit";

import homeReducer from "./module/home";
import commonReducer from "./module/common";
import SongListDetailReducer from "./module/song-list-detail";

const store = configureStore({
    reducer: {
        home: homeReducer,
        common: commonReducer,
        songListDetail: SongListDetailReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
