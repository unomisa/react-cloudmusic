import { configureStore } from "@reduxjs/toolkit";

import homeReducer from "./module/home";
import commonReducer from "./module/common";
import songListDetailReducer from "./module/song-list-detail";
import loginReducer from "./module/login";
import artistReducer from "./module/artist-detail";

const store = configureStore({
    reducer: {
        home: homeReducer,
        common: commonReducer,
        login: loginReducer,
        songListDetail: songListDetailReducer,
        artistDetail: artistReducer
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: false
        });
    }
});

export type AppDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof store.getState>;

export default store;
