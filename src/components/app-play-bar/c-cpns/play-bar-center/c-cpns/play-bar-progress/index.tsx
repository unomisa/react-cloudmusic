import React, { memo, useContext, useEffect, useState, useRef, useCallback } from "react";
import { Slider } from "antd";

import { useAppSelector } from "@/store/redux-hooks";
import { shallowEqual } from "react-redux";

import { PlayBarProgressWrapper } from "./style";
import { formatDuration } from "@/utils";
import { playBarContext } from "@/components/app-play-bar";

const PlayBarProgress = memo(() => {
    const { playSong } = useAppSelector((state) => state.common, shallowEqual);

    const { audioELe, loading } = useContext(playBarContext);

    const [percent, setPercent] = useState(0); // 进度百分比

    const timerRef = useRef<NodeJS.Timer>();

    const popupContainerRef = useRef<HTMLDivElement>();

    // 1s为间隔钟获取一次当前进度
    const repetition = () => {
        timerRef.current = setTimeout(function tick() {
            // console.log("记录进度值");
            setPercent(((audioELe.currentTime * 1000) / playSong.dt) * 100);
            timerRef.current = setTimeout(tick, 1000);
        }, 1000);
    };

    useEffect(() => {
        // console.log("渲染progress组件完毕");
        if (!loading) {
            // 歌曲加载完成开始获取进度
            repetition();
            // console.log("开始获取进度");
        } else {
            // 加载下一首时清除定时器
            clearTimeout(timerRef.current);
            setPercent(0);
            // console.log("播放下一首以清除progeress进度监听");
        }

        return () => clearTimeout(timerRef.current);
    }, [loading]);

    // 拖动修改百分比值
    const dragChangeHandle = (value: number) => {
        clearTimeout(timerRef.current); // 开始拖动时停止计算百分比进度
        setPercent(value);
    };

    // 拖动修改百分比值后
    const dragAfterChangeHandle = (value: number) => {
        setPercent(value);
        audioELe.currentTime = (playSong.dt * value) / 100000;
        repetition(); // 拖动完成后再次开始计算百分比进度
    };

    // 格式化tooltip提示文本
    const formatter = (value: number) => {
        return formatDuration(playSong.dt * (value / 100));
    };

    return (
        <PlayBarProgressWrapper>
            <div>{formatDuration((playSong.dt * percent) / 100)}</div>
            <div className="progress-slider" ref={popupContainerRef}>
                <Slider
                    value={percent}
                    step={0.5}
                    tooltip={{
                        formatter,
                        getPopupContainer: () => popupContainerRef.current
                    }}
                    onChange={dragChangeHandle}
                    onAfterChange={dragAfterChangeHandle}
                />
            </div>
            <div>{formatDuration(playSong.dt)}</div>
        </PlayBarProgressWrapper>
    );
});

export default PlayBarProgress;
