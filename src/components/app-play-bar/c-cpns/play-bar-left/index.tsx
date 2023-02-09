import React, { memo, useContext } from "react";
import { Image } from "antd";

import LikeSong from "@/components/like-song";

import { PlayBarLeftWrapper } from "./style";
import { formatImgUrl } from "@/utils";
import { playBarContext } from "../..";

const PlayBarLeft = memo(() => {
    const { playSong } = useContext(playBarContext);

    return (
        <PlayBarLeftWrapper>
            <div className="content-left">
                <Image
                    width={66}
                    height={66}
                    src={formatImgUrl(playSong.al?.picUrl, 66)}
                    preview={false}
                />
            </div>
            <div className="content-right">
                <div className="content-right-line1 ellipsis-line1">
                    <div className="song-name">{playSong.name}</div>
                    <div className="content-right-other">
                        <LikeSong track={playSong} />
                    </div>
                </div>
                <div className="song-art ellipsis-line1 ">
                    {playSong.ar?.map((art, index) => {
                        return (
                            <span key={art.id}>
                                <span className="song-art-name">{art.name}</span>
                                {index !== playSong.ar.length - 1 && (
                                    <span className="song-art-separate">/</span>
                                )}
                            </span>
                        );
                    })}
                </div>
            </div>
        </PlayBarLeftWrapper>
    );
});

export default PlayBarLeft;
