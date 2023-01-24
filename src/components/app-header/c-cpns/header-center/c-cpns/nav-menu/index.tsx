import React, { memo } from "react";
import { NavMenuWrapper } from "./style";

import { Tabs } from "antd";
import { navTabs } from "@/config";

const NavMenu = memo((props) => {
    function onChange(key: string) {
        console.log(key);
    }

    return (
        <NavMenuWrapper>
            <Tabs
                defaultActiveKey="1"
                items={navTabs}
                onChange={onChange}
                className="nav-menu-tabs"
                size="large"
            />
        </NavMenuWrapper>
    );
});

export default NavMenu;
