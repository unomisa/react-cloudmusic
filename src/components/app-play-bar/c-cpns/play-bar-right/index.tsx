import React, { memo } from "react";

import { PlayBarRightWrapper } from "./style";
import VolumeControl from "./c-cpns/volume-control";
import PlayListTrigger from "./c-cpns/play-list-trigger";

const PlayBarRight = memo(() => {
    return (
        <PlayBarRightWrapper>
            <VolumeControl />
            <PlayListTrigger />
        </PlayBarRightWrapper>
    );
});

export default PlayBarRight;
