import React, { memo } from "react";
import { AppSectionTitleWrapper } from "./style";

interface Props {
    title: string;
    icon?: React.ReactNode;
}

const AppSectionTitle = memo(({ title, icon }: Props) => {
    return (
        <AppSectionTitleWrapper>
            <span className="section-title">{title}</span>
            <span className="section-icon"> {icon}</span>
        </AppSectionTitleWrapper>
    );
});

export default AppSectionTitle;
