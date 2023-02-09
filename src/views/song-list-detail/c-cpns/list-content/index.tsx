import React, { memo, useCallback } from "react";

import { ListContentWrapper } from "./style";
import { TrackDetail } from "@/types/common";
import TrackList from "@/components/track-list";
import { useAppDispatch } from "@/store/redux-hooks";
import { changePlayListAction } from "@/store/module/common";

interface Props {
    trackList: TrackDetail[];
}

const ListContent = memo(({ trackList }: Props) => {
    const dispatch = useAppDispatch();

    const addToPlayList = useCallback((list: TrackDetail[]) => {
        dispatch(changePlayListAction(list));
    }, []);

    return (
        <ListContentWrapper>
            <TrackList list={trackList} addToPlayList={addToPlayList} />
        </ListContentWrapper>
    );
});

export default ListContent;
