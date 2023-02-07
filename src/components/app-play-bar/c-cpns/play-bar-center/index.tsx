import React, { memo } from "react";

import { PlayBarCenterWrapper } from "./style";
import { Song } from "@/types/common";
import PlayBarBaseControl from "./c-cpns/play-bar-base-control";
import PlayBarProgress from "./c-cpns/play-bar-progress";

interface Props {
    song: Song;
}

const PlayBarCenter = memo(({ song }: Props) => {
    return (
        <PlayBarCenterWrapper>
            <PlayBarBaseControl />
            <PlayBarProgress />
        </PlayBarCenterWrapper>
    );
});

export default PlayBarCenter;
