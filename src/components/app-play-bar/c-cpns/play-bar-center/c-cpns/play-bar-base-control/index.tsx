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
import { useAppDispatch, useAppSelector } from "@/store/redux-hooks";
import { asyncSetCurrentPlaySongAction, getPlayIndex } from "@/store/module/common";
import { shallowEqual } from "react-redux";

const PlayBarBaseControl = memo(() => {
    const { playList } = useAppSelector((state) => state.common, shallowEqual);

    const playIndex = useAppSelector(getPlayIndex, shallowEqual);

    const { audioELe, pause } = useContext(playBarContext);

    const switchHandle = () => {
        audioELe.paused ? audioELe.play() : audioELe.pause();
    };

    const dispatch = useAppDispatch();

    const nextHandle = () => {
        dispatch(asyncSetCurrentPlaySongAction({ track: playList[playIndex + 1] }));
    };

    const PrevHandle = () => {
        dispatch(asyncSetCurrentPlaySongAction({ track: playList[playIndex - 1] }));
    };

    return (
        <PlayBarBaseControlWrapper pause={pause}>
            <Row>
                <Col span={8}></Col>
                <Col span={8} className="control-center">
                    <StepBackwardFilled style={{ fontSize: "24px" }} onClick={PrevHandle} />
                    <div className="control-switch flex-center" onClick={switchHandle}>
                        {pause ? (
                            <CaretRightFilled style={{ fontSize: "30px" }} />
                        ) : (
                            <PauseOutlined style={{ fontSize: "24px" }} />
                        )}
                    </div>
                    <StepForwardFilled style={{ fontSize: "24px" }} onClick={nextHandle} />
                </Col>
                <Col span={8}></Col>
            </Row>
        </PlayBarBaseControlWrapper>
    );
});

export default PlayBarBaseControl;
