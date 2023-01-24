import React, { memo } from "react";
import { HeaderRightWrapper } from "./style";

import { Button } from "antd";

const HeaderRight = memo((props) => {
    return (
        <HeaderRightWrapper>
            <Button size="large" className="login-btn">
                登录/注册
            </Button>
        </HeaderRightWrapper>
    );
});

export default HeaderRight;
