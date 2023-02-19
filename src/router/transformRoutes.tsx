import { Navigate, useRoutes } from "react-router-dom";
import React, { memo } from "react";
import type { RouteObject } from "react-router-dom";

import vueRoutes, { IVueRoute } from ".";

import BeforeRoute from "./beforeRoute";

// 将配置转换
function transformRoutes(routes: IVueRoute[]) {
    return routes.map((route) => {
        const afterRoute: RouteObject = {
            path: route.path
        };

        afterRoute.element = (
            <BeforeRoute route={route}>
                <route.component />
            </BeforeRoute>
        );

        if (route.children) {
            afterRoute.children = transformRoutes(route.children);
        }

        if (route.redirect) {
            afterRoute.element = <Navigate to={route.redirect} />;
        }

        return afterRoute;
    });
}

const RouterView = memo(() => {
    return useRoutes(transformRoutes(vueRoutes));
});

export default RouterView;
