import React, { memo } from "react";
import { AppHeaderWrapper } from "./style";

import HeaderLeft from "./c-cpns/header-left";
import HeaderRight from "./c-cpns/header-right";
import HeaderCenter from "./c-cpns/header-center";

const AppHeader = memo(() => {
    return (
        <AppHeaderWrapper>
            <div className="header-content">
                <HeaderLeft />
                <HeaderCenter />
                <HeaderRight />
            </div>
        </AppHeaderWrapper>
    );
});

export default AppHeader;
