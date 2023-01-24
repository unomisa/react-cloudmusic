import React, { memo } from "react";

import { HeaderCenterWrapper } from "./style";
import NavMenu from "./c-cpns/nav-menu";
import Search from "./c-cpns/search";

const HeaderCenter = memo(() => {
    return (
        <HeaderCenterWrapper>
            <NavMenu />
            <Search />
        </HeaderCenterWrapper>
    );
});

export default HeaderCenter;
