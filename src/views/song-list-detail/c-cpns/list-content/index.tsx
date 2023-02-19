import React, { memo } from "react";

import { ListContentWrapper } from "./style";
import { TrackDetail } from "@/types/common";
import PageTrackList from "@/components/page-track-list";

interface Props {
    trackList: TrackDetail[];
}

const ListContent = memo(({ trackList }: Props) => {
    return (
        <ListContentWrapper>
            <PageTrackList trackList={trackList} />
        </ListContentWrapper>
    );
});

export default ListContent;
