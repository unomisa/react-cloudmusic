import React, { memo } from "react";

import Router from "./router/transformRoutes";
import AppHeader from "./components/app-header";
// import AppFooter from "./components/app-footer";
import AppContent from "./components/app-content";

const App = memo(() => {
    return (
        <div>
            <AppHeader />
            <AppContent>
                <Router />
            </AppContent>
            {/* <AppFooter /> */}
        </div>
    );
});

export default App;
