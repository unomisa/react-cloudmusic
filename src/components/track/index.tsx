import React, { memo, useContext, useEffect, useRef } from "react";
import { Col, Row } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import { TrackWrapper } from "./style";
import { TrackDetail } from "@/types/common";
import { formatDuration } from "@/utils";
import theme from "@/assets/theme/page-theme";
import { Ar } from "@/types/common";
import { useAppDispatch, useAppSelector } from "@/store/redux-hooks";
import { asyncSetCurrentPlaySongAction } from "@/store/module/common";
import { TrackListContext } from "../track-list";
import { shallowEqual } from "react-redux";
import classNames from "classnames";

interface Props {
    track: TrackDetail;
    index: number;
    isPlay: boolean;
    other?: (track: TrackDetail, isPlay: boolean) => React.ReactNode;
    getPlayTrackNode?: (trackNode: HTMLDivElement) => void;
    addToPlayList?: (list: TrackDetail[]) => void;
}

const Track = memo((props: Props) => {
    const { index, track, other, getPlayTrackNode, isPlay, addToPlayList } = props;

    const { trackArea, gutter, list: trackList } = useContext(TrackListContext);

    const containerRef = useRef();

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    console.log("track重新渲染");

    useEffect(() => {
        if (isPlay) {
            getPlayTrackNode && getPlayTrackNode(containerRef.current);
        }
    }, [isPlay]);

    // 跳转歌手详情
    const goArtDetail = (art: Ar) => {
        navigate("/artistdetail/" + art.id);
    };

    // 跳转专辑详情
    const goAlbumDetail = () => {
        navigate("/albumdetail/" + track.al.id);
    };

    // 播放歌曲，以及将当前列表传入
    const play = () => {
        dispatch(asyncSetCurrentPlaySongAction({ track, trackList }));
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
                                {index < 9 ? "0" + (index + 1) : index + 1}
                            </span>

                            <span className="track-like">
                                <HeartOutlined style={{ color: theme.gray.primary }} />
                                {/* <HeartFilled style={{ color: theme.color.primaryColor }} /> */}
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
                                    <span
                                        className="track-art-name"
                                        onClick={(e) => goArtDetail(arItem)}>
                                        {arItem.name}
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
                    <div className="ellipsis track-album" onClick={goAlbumDetail}>
                        {track.al.name}
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
