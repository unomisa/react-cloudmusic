import React, { memo, useState, useEffect, useContext } from "react";

import { SoundOutlined } from "@ant-design/icons";
import { Slider } from "antd";
import { VolumeControlWrapper } from "./style";
import { playBarContext } from "@/components/app-play-bar";

const VolumeControl = memo(() => {
    const { audioELe } = useContext(playBarContext);

    const [volumePercenter, setVolumePercenter] = useState(50);

    const [oldVolumePercenter, setOldVolumePercenter] = useState(volumePercenter);

    useEffect(() => {
        audioELe.volume = volumePercenter / 100;
    }, [volumePercenter]);

    const volumeChangeHandle = (value: number) => {
        setVolumePercenter(value);
    };

    const volumeToggle = () => {
        if (volumePercenter === 0) {
            setVolumePercenter(oldVolumePercenter);
        } else {
            setOldVolumePercenter(volumePercenter);
            setVolumePercenter(0);
        }
    };

    return (
        <VolumeControlWrapper className="flex-center">
            <SoundOutlined style={{ fontSize: "28px" }} onClick={volumeToggle} />
            <Slider
                value={volumePercenter}
                tooltip={{ open: false }}
                onChange={volumeChangeHandle}
            />
        </VolumeControlWrapper>
    );
});

export default VolumeControl;
