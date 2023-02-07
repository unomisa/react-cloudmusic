import React, { memo, useContext } from "react";
import { Col, Row } from "antd";

import { PlayBarBaseControlWrapper } from "./style";
import { playBarContext } from "@/components/app-play-bar";
import {
    CaretRightFilled,
    StepBackwardFilled,
    StepForwardFilled,
    PauseOutlined
} from "@ant-design/icons";

const PlayBarBaseControl = memo(() => {
    const { audioELe, pause } = useContext(playBarContext);

    const switchHandle = () => {
        audioELe.paused ? audioELe.play() : audioELe.pause();
    };

    const nextHandle = () => {
        console.log("下一首");
    };

    const PrevHandle = () => {
        console.log("上一首");
    };

    return (
        <PlayBarBaseControlWrapper pause={pause}>
            <Row>
                <Col span={8}></Col>
                <Col span={8} className="control-center">
                    <StepBackwardFilled style={{ fontSize: "28px" }} onClick={PrevHandle} />
                    <div className="control-switch flex-center" onClick={switchHandle}>
                        {pause ? (
                            <CaretRightFilled style={{ fontSize: "36px" }} />
                        ) : (
                            <PauseOutlined style={{ fontSize: "30px" }} />
                        )}
                    </div>
                    <StepForwardFilled style={{ fontSize: "28px" }} onClick={nextHandle} />
                </Col>
                <Col span={8}></Col>
            </Row>
        </PlayBarBaseControlWrapper>
    );
});

export default PlayBarBaseControl;
