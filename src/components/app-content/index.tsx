import React, { memo } from "react";
import type { ReactNode } from "react";

import { AppContentWrapper } from "./style";
import { useAppSelector } from "@/store/redux-hooks";
import { shallowEqual } from "react-redux";
import AppBackTop from "../app-back-top";

interface Props {
    children: ReactNode;
}

const AppContent = memo((props: Props) => {
    const { children } = props;

    const { showPlayBar } = useAppSelector(
        (state) => ({
            showPlayBar: state.common.showPlayBar
        }),
        shallowEqual
    );

    return (
        <AppContentWrapper showPlayBar={showPlayBar}>
            {children}
            <AppBackTop />
        </AppContentWrapper>
    );
});

export default AppContent;
