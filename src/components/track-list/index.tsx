import React, { createContext, memo, useMemo } from "react";

import { TrackDetail } from "@/types/common";
import { TrackListWrapper } from "./style";
import Track from "@/components/track";
import TrackListAreaTitle from "./c-cpns/track-list-area-title";
import { useAppSelector } from "@/store/redux-hooks";
import { shallowEqual } from "react-redux";

interface Props {
    list: TrackDetail[];
    trackArea?: TrackArea; // 区域分配
    trackOther?: (track: TrackDetail, isPlay: boolean) => React.ReactNode; // track图标区域
    showTitle?: boolean; // 是否显示区域标题
    gutter?: number; // 间隔
    getPlayTrackNode?: (trackNode: HTMLDivElement) => void; // 获取当前track节点
    addToPlayList?: (list: TrackDetail[]) => void;
}

export interface TrackArea {
    other: number;
    name: number;
    artist: number;
    album: number;
    duration: number;
    extend: number;
}

export const TrackListContext = createContext({
    list: [] as TrackDetail[],
    trackArea: {} as TrackArea,
    gutter: 0,
    showTitle: true
});

const TrackList = memo((props: Props) => {
    const {
        list,
        trackArea = { other: 3, name: 6, artist: 7, album: 5, duration: 3, extend: 0 },
        trackOther,
        showTitle = true,
        gutter = 20,
        getPlayTrackNode,
        addToPlayList
    } = props;

    const { playSong } = useAppSelector((state) => state.common, shallowEqual);

    console.log("trackList被渲染");

    const trackListContextProviderValue = useMemo(
        () => ({ list, trackArea, gutter, showTitle }),
        [list]
    );

    return (
        <TrackListWrapper>
            <TrackListContext.Provider value={trackListContextProviderValue}>
                {showTitle && <TrackListAreaTitle />}
                {list.map((track, index) => {
                    const isPlay = track.id === playSong?.id;

                    return (
                        <Track
                            track={track}
                            isPlay={isPlay}
                            index={index}
                            key={track.id}
                            other={trackOther}
                            getPlayTrackNode={getPlayTrackNode}
                            addToPlayList={addToPlayList}
                        />
                    );
                })}
            </TrackListContext.Provider>
        </TrackListWrapper>
    );
});

export default TrackList;
