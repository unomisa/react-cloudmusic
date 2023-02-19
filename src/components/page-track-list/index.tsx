import React, { memo, useCallback, useState, useEffect } from "react";

import { PageTrackListWrapper } from "./style";
import TrackList from "@/components/track-list";
import { useAppDispatch } from "@/store/redux-hooks";
import { changePlayListAction } from "@/store/module/common";
import { TrackDetail } from "@/types/common";
import { useScrollPosition } from "@/hooks";

interface Props {
    trackList: TrackDetail[];
}

const PageTrackList = memo(({ trackList }: Props) => {
    const [trackListFirstInto, setTrackListFirstInto] = useState(true); // 是否第一次刷新trackList

    const [limit] = useState(50);

    const [offset, setOffset] = useState(0);

    const dispatch = useAppDispatch();

    const scrollY = useScrollPosition((position) => position.scrollY);

    const [copyTrackList, setCopyTrackList] = useState([]);

    // 获得当前track 模块
    const getTrackListPart = () => {
        let part: TrackDetail[];

        const partSize = offset + limit > trackList.length ? trackList.length : offset + limit;

        if (partSize === trackList.length) {
            part = trackList;
        } else {
            part = trackList.slice(0, partSize);
        }

        setOffset(partSize);
        return part;
    };

    // 首次渲染部分
    useEffect(() => {
        if (trackListFirstInto && trackList.length > 0) {
            setCopyTrackList(getTrackListPart());
            setTrackListFirstInto(false);
        }
    }, [trackList]);

    // 监听滚动位置，触底滚动
    useEffect(() => {
        const scrollHeight = document.body.scrollHeight;
        const windowHeight = document.documentElement.clientHeight;

        if (scrollHeight - scrollY < windowHeight + 50) {
            setCopyTrackList(getTrackListPart());
        }
    }, [scrollY]);

    const addToPlayList = useCallback(() => {
        dispatch(changePlayListAction(trackList));
    }, [trackList]);

    console.log("歌单详情页面刷新");

    return (
        <PageTrackListWrapper>
            <TrackList list={copyTrackList} addToPlayList={addToPlayList} />
        </PageTrackListWrapper>
    );
});

export default PageTrackList;
