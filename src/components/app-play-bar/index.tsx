import React, { createContext, memo, useRef, useState, useEffect, useMemo } from "react";
import { shallowEqual } from "react-redux";
import { useAppSelector } from "@/store/redux-hooks";

import { TrackDetail } from "@/types/common";
import PlayBarCenter from "./c-cpns/play-bar-center";
import PlayBarLeft from "./c-cpns/play-bar-left";
import PlayBarRight from "./c-cpns/play-bar-right";

import { AppPlayBarWrapper } from "./style";

export const playBarContext = createContext({
    playSong: undefined as TrackDetail,
    audioELe: null as HTMLAudioElement,
    pause: true,
    loading: true
});

const AppPlayBar = memo(() => {
    const { showPlayBar, playSong, playSongUrl } = useAppSelector(
        (state) => ({
            showPlayBar: state.common.showPlayBar,
            playSong: state.common.playSong,
            playSongUrl: state.common.playSongUrl
        }),
        shallowEqual
    );

    console.log("playbar重新渲染");

    const [loading, setLoading] = useState(true); // 歌曲是否正在加载

    const [pause, setPause] = useState(true); // 是否暂停

    const audioRef = useRef<HTMLAudioElement>(); // 记录audio element

    const canplayHandle = () => {
        setLoading(false); // 设置加载完成
        console.log("可以播放");
        audioRef.current.play();
    };

    const playHandle = () => {
        console.log("开始播放");
        setPause(false);
    };

    const pauseHandle = () => {
        console.log("暂停");
        setPause(true);
    };

    const endedHandle = () => {
        console.log("播放完成");
        setLoading(true); // 播放完成后设置以加载下一首
    };

    // 切换歌曲
    useEffect(() => {
        setLoading(true);
        setPause(true);
    }, [playSong]);

    // 注入数据
    const providerValue = useMemo(
        () => ({ audioELe: audioRef.current, pause, loading, playSong }),
        [playSong, pause, loading, audioRef.current]
    );

    return (
        <playBarContext.Provider value={providerValue}>
            {playSong && (
                <AppPlayBarWrapper show={showPlayBar}>
                    <PlayBarLeft />
                    <PlayBarCenter />
                    <PlayBarRight />
                </AppPlayBarWrapper>
            )}

            <audio
                src={playSongUrl}
                ref={audioRef}
                onCanPlay={canplayHandle}
                onPlay={playHandle}
                onPause={pauseHandle}
                onEnded={endedHandle}
            />
        </playBarContext.Provider>
    );
});

export default AppPlayBar;
