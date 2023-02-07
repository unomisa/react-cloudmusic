import React, { memo } from "react";

import { ListContentWrapper } from "./style";
import Track from "@/components/track";
import { TrackDetail } from "@/types/common";

interface Props {
    trackList: TrackDetail[];
}

const ListContent = memo(({ trackList }: Props) => {
    return (
        <ListContentWrapper>
            {trackList.map((track, index) => {
                return <Track track={track} index={index} key={track.id} />;
            })}
        </ListContentWrapper>
    );
});

export default ListContent;
