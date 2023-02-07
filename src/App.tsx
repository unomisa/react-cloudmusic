import React, { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/redux-hooks";

import Router from "./router/transformRoutes";
import AppHeader from "./components/app-header";
// import AppFooter from "./components/app-footer";
import AppContent from "./components/app-content";
import AppPlayBar from "./components/app-play-bar";

import { asyncGetLoginStatusAction } from "@/store/module/common";

const App = memo(() => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(asyncGetLoginStatusAction()); // 尝试登录
    }, [dispatch]);

    return (
        <div>
            <AppHeader />
            <AppContent>
                <Router />
            </AppContent>
            {/* <AppFooter /> */}
            <AppPlayBar />
        </div>
    );
});

export default App;
