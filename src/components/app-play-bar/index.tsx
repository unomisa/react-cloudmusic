import { useAppSelector } from "@/store/redux-hooks";
import React, { createContext, memo, useRef, useState, useEffect } from "react";
import { shallowEqual } from "react-redux";

import PlayBarCenter from "./c-cpns/play-bar-center";
import PlayBarLeft from "./c-cpns/play-bar-left";
import PlayBarRight from "./c-cpns/play-bar-right";

import { AppPlayBarWrapper } from "./style";

export const playBarContext = createContext({
    audioELe: null as HTMLAudioElement,
    pause: true,
    loading: true
});

const AppPlayBar = memo(() => {
    const { showPlayBar, playSong } = useAppSelector((state) => state.common, shallowEqual);

    const [loading, SetLoading] = useState(true); // 歌曲是否正在加载

    const [pause, setPause] = useState(true); // 是否暂停

    const audioRef = useRef<HTMLAudioElement>(); // 记录audio element

    const canplayHandle = () => {
        SetLoading(false); // 设置加载完成
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
        SetLoading(true); // 播放完成后设置以加载下一首
    };

    // 注入数据
    const providerValue = { audioELe: audioRef.current, pause, loading };

    return (
        <playBarContext.Provider value={providerValue}>
            {playSong && (
                <AppPlayBarWrapper show={showPlayBar}>
                    <PlayBarLeft song={playSong} />
                    <PlayBarCenter song={playSong} />
                    <PlayBarRight song={playSong} />
                </AppPlayBarWrapper>
            )}

            <audio
                src={playSong?.url}
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
