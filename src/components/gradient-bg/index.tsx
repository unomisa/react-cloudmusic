import React, { memo } from "react";
import { GradientBgWrapper } from "./style";

export interface Props {
    endColor: string;
}

const GradientBg = memo((props: Props) => {
    const { endColor } = props;

    return <GradientBgWrapper endColor={endColor}></GradientBgWrapper>;
});

export default GradientBg;
