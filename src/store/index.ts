import { configureStore } from "@reduxjs/toolkit";

import homeReducer from "./module/home";
import commonReducer from "./module/common";
import songListDetailReducer from "./module/song-list-detail";
import loginReducer from "./module/login";

const store = configureStore({
    reducer: {
        home: homeReducer,
        common: commonReducer,
        songListDetail: songListDetailReducer,
        login: loginReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
