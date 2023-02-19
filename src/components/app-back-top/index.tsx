import React, { memo } from "react";
import { FloatButton } from "antd";

import { AppBackTopWrapper } from "./style";

const AppBackTop = memo(() => {
    return (
        <AppBackTopWrapper>
            <FloatButton.BackTop />;
        </AppBackTopWrapper>
    );
});

export default AppBackTop;
