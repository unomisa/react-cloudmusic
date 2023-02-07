import React, { memo } from "react";
import { Col, Row } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import { TrackWrapper } from "./style";
import { TrackDetail } from "@/types/common";
import { formatDuration } from "@/utils";
import theme from "@/assets/theme/page-theme";
import { Ar } from "@/types/common";
import { useAppDispatch } from "@/store/redux-hooks";
import { asyncSetCurrentPlaySongAction } from "@/store/module/common";

interface Props {
    track: TrackDetail;
    trackArea?: TrackArea;
    index: number;
}

interface TrackArea {
    other: number;
    name: number;
    artist: number;
    album: number;
    duration: number;
    extend: number;
}

const Track = memo((props: Props) => {
    const {
        index,
        track,
        trackArea = { other: 3, name: 6, artist: 7, album: 5, duration: 3, extend: 0 }
    } = props;

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    // 跳转歌手详情
    const goArtDetail = (art: Ar) => {
        navigate("/artistdetail/" + art.id);
    };

    // 跳转专辑详情
    const goAlbumDetail = () => {
        navigate("/albumdetail/" + track.al.id);
    };

    const play = () => {
        dispatch(asyncSetCurrentPlaySongAction({ track }));
    };

    return (
        <TrackWrapper onDoubleClick={play}>
            <Row gutter={20} className="track-content">
                <Col span={trackArea.other}>
                    <span className="track-index">{index < 9 ? "0" + (index + 1) : index + 1}</span>

                    <span className="track-like">
                        <HeartOutlined style={{ color: theme.gray.primary }} />
                        {/* <HeartFilled style={{ color: theme.color.primaryColor }} /> */}
                    </span>
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
