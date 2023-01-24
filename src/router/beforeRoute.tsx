// import { Navigate, useLocation } from "react-router-dom";
import React, { memo } from "react";

import { IVueRoute } from ".";

const BeforeRoute = memo((props: { route: IVueRoute; children: any }) => {
    window.scrollTo(0, 0); // 每次跳转路由置顶

    if (props.route?.meta?.title) {
        document.title = props.route.meta.title;
    }

    // const isLogin: boolean = !!Cookies.get("userInfo");
    // if (props?.route?.meta?.isLogin) {
    //     if (!isLogin) {
    //         return <Navigate to={"/login"} replace />;
    //     }
    // }

    // const location = useLocation();
    // const routerKey = location.pathname;
    // if (isLogin && ["/login"].includes(routerKey)) {
    //     return <Navigate to={"/"} replace />;
    // }

    // 后置路由
    // useEffect(() => {
    //     console.log("后置路由");
    // }, []);

    return <>{props.children}</>;
});

export default BeforeRoute;
