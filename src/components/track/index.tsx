import React, { memo, useContext, useEffect, useRef } from "react";
import { Col, Row } from "antd";
import { HeartOutlined, HeartFilled, CustomerServiceOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import { TrackWrapper } from "./style";
import { TrackDetail } from "@/types/common";
import { formatDuration } from "@/utils";
import theme from "@/assets/theme/page-theme";
import { useAppDispatch } from "@/store/redux-hooks";
import { asyncSetCurrentPlaySongAction } from "@/store/module/common";
import { TrackListContext } from "../track-list";
import classNames from "classnames";
import LikeSong from "../like-song";

interface Props {
    track: TrackDetail;
    index: number;
    isPlay: boolean;
    isLike?: boolean;
    other?: (track: TrackDetail, isPlay: boolean) => React.ReactNode;
    getPlayTrackNode?: (trackNode: HTMLDivElement) => void;
    addToPlayList?: (list: TrackDetail[]) => void;
}

const Track = memo((props: Props) => {
    const { index, track, other, getPlayTrackNode, isPlay, addToPlayList, isLike } = props;

    const { trackArea, gutter, list: trackList } = useContext(TrackListContext);

    const containerRef = useRef();

    const dispatch = useAppDispatch();

    console.log("track重新渲染", trackArea.album);

    useEffect(() => {
        if (isPlay) {
            getPlayTrackNode && getPlayTrackNode(containerRef.current);
        }
    }, [isPlay]);

    // 播放歌曲，以及将当前列表传入
    const play = () => {
        dispatch(asyncSetCurrentPlaySongAction({ track }));
        addToPlayList && addToPlayList(trackList);
    };

    return (
        <TrackWrapper onDoubleClick={play} ref={containerRef}>
            <Row
                gutter={gutter}
                className={classNames("track-content", {
                    "track-play": isPlay
                })}>
                <Col span={trackArea.other}>
                    {other ? (
                        other(track, isPlay)
                    ) : (
                        <>
                            <span className="track-index">
                                {isPlay ? (
                                    <CustomerServiceOutlined
                                        style={{ color: theme.color.primaryColor }}
                                    />
                                ) : (
                                    <>{index < 9 ? "0" + (index + 1) : index + 1}</>
                                )}
                            </span>
                            <span className="track-like">
                                <LikeSong track={track} isLike={isLike} />
                            </span>
                        </>
                    )}
                </Col>

                <Col span={trackArea.name}>
                    <div className="track-name ellipsis">
                        <span>{track.name}</span>
                        {track.alia.length > 0 && (
                            <span className="track-name-alia">（{track.alia[0]}）</span>
                        )}
                    </div>
                </Col>

                <Col span={trackArea.artist}>
                    <div className="ellipsis">
                        {track.ar.map((arItem, index) => {
                            return (
                                <span className="track-art" key={index}>
                                    <span className="track-art-name">
                                        <Link to={"/artistdetail/" + arItem.id}>{arItem.name}</Link>
                                    </span>
                                    {index !== track.ar.length - 1 && (
                                        <span className="track-art-gap">/</span>
                                    )}
                                </span>
                            );
                        })}
                    </div>
                </Col>

                <Col span={trackArea.album}>
                    <div className="ellipsis track-album">
                        <Link to={"/albumdetail/" + track.al.id}>{track.al.name}</Link>
                    </div>
                </Col>

                <Col span={trackArea.duration}>
                    <div className="ellipsis track-duration">{formatDuration(track.dt)}</div>
                </Col>
                <Col span={trackArea.extend}></Col>
            </Row>
        </TrackWrapper>
    );
});

export default Track;
