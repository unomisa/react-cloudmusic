import React, { memo } from "react";

import { PlayBarRightWrapper } from "./style";
import { Song } from "@/types/common";

interface Props {
    song: Song;
}

const PlayBarRight = memo(({ song }: Props) => {
    return <PlayBarRightWrapper>PlayBarRight</PlayBarRightWrapper>;
});

export default PlayBarRight;
