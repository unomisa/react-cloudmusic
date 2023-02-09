import React, { memo, useContext } from "react";
import { Col, Row } from "antd";

import { TrackArea, TrackListContext } from "../..";
import { TrackListAreaTitleWrapper } from "./style";

const TrackListAreaTitle = memo(() => {
    const { trackArea, gutter } = useContext(TrackListContext);

    return (
        <TrackListAreaTitleWrapper>
            <Row gutter={gutter}>
                <Col span={trackArea.other}>
                    <span className="trackarea-other">序号</span>
                </Col>
                <Col span={trackArea.name}>音乐标题</Col>
                <Col span={trackArea.artist}>歌手</Col>
                <Col span={trackArea.album}>专辑</Col>
                <Col span={trackArea.duration}>时长</Col>
                <Col span={trackArea.extend}>热度</Col>
            </Row>
        </TrackListAreaTitleWrapper>
    );
});

export default TrackListAreaTitle;
