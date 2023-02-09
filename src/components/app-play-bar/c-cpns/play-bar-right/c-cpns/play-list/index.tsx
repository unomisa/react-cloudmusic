import React, { memo, useCallback, useEffect, useRef, useMemo } from "react";
import { shallowEqual } from "react-redux";
import { useAppSelector } from "@/store/redux-hooks";

import { PlayListWrapper } from "./style";
import { BarsOutlined, CustomerServiceOutlined, DeleteOutlined } from "@ant-design/icons";
import TrackList from "@/components/track-list";
import theme from "@/assets/theme/page-theme";
import { TrackDetail } from "@/types/common";
import { ElScroll } from "@/utils";

interface Props {
    open: boolean;
}

const PlayList = memo(({ open }: Props) => {
    const { playList, playSong } = useAppSelector((state) => state.common, shallowEqual);

    const playTrackRef = useRef<HTMLDivElement>();

    const playListInnerRef = useRef<HTMLDivElement>(); // 滚动列表ref

    const clearHandle = () => {
        console.log("清空列表");
    };

    // 监听播放列表的改变调整滚动高度
    useEffect(() => {
        if (open) {
            setTimeout(() => {
                scrollToPlayTrack(playTrackRef.current);
            }, 0);
        }
    }, [open]);

    console.log("playListcontainer重新渲染");

    const getPlayTrackNode = useCallback((trackNode: HTMLDivElement) => {
        playTrackRef.current = trackNode;
        scrollToPlayTrack(trackNode);
    }, []);

    const scrollToPlayTrack = (trackNode: HTMLDivElement) => {
        const innerEle = playListInnerRef.current;
        const contentEle = innerEle.children[0] as HTMLDivElement;
        let scrollTop = trackNode.offsetTop - innerEle.clientHeight / 2 + trackNode.clientHeight;
        // console.log("scrollTop: ", scrollTop);

        if (scrollTop <= 0) {
            scrollTop = 0;
        }

        if (scrollTop > contentEle.offsetHeight - innerEle.clientHeight) {
            scrollTop = contentEle.offsetHeight - innerEle.clientHeight;
        }

        ElScroll(innerEle, scrollTop, 100);
    };

    const trackOther = useCallback(
        (track: TrackDetail, isPlay: boolean) => (
            <>
                {isPlay && (
                    <span className="track-other">
                        <CustomerServiceOutlined style={{ color: theme.color.primaryColor }} />
                    </span>
                )}
            </>
        ),
        []
    );

    return (
        <PlayListWrapper>
            <div className="play-list-container">
                <div className="play-list-content">
                    <div className="play-list-top flex-a-center">
                        <div className="play-list-title flex-a-center">
                            <BarsOutlined style={{ fontSize: "24px", marginRight: "5px" }} />
                            <span className="play-list-title-text">播放列表</span>
                        </div>

                        <div className="play-list-count">
                            <span>共{playList.length}首</span>
                        </div>

                        <div className="play-list-clear" onClick={clearHandle}>
                            <DeleteOutlined style={{ marginRight: "3px" }} />
                            <span>清空列表</span>
                        </div>
                    </div>

                    <div className="play-list-inner" ref={playListInnerRef}>
                        <TrackList
                            list={playList}
                            showTitle={false}
                            trackArea={useMemo(
                                () => ({
                                    other: 2,
                                    name: 12,
                                    artist: 7,
                                    duration: 3,
                                    album: 0,
                                    extend: 0
                                }),
                                []
                            )}
                            trackOther={trackOther}
                            gutter={10}
                            getPlayTrackNode={getPlayTrackNode}
                        />
                    </div>
                </div>
            </div>
        </PlayListWrapper>
    );
});

export default PlayList;
