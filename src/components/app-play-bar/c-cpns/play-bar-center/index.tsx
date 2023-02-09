import React, { memo } from "react";

import { PlayBarCenterWrapper } from "./style";
import PlayBarBaseControl from "./c-cpns/play-bar-base-control";
import PlayBarProgress from "./c-cpns/play-bar-progress";

const PlayBarCenter = memo(() => {
    return (
        <PlayBarCenterWrapper>
            <PlayBarBaseControl />
            <PlayBarProgress />
        </PlayBarCenterWrapper>
    );
});

export default PlayBarCenter;
