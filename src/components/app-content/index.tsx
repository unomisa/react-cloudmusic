import React, { memo } from "react";
import type { ReactNode } from "react";

import { AppContentWrapper } from "./style";

interface Props {
    children: ReactNode;
}

const AppContent = memo((props: Props) => {
    const { children } = props;

    return <AppContentWrapper>{children}</AppContentWrapper>;
});

export default AppContent;
