import React, { memo } from "react";
import { PlayBarLeftWrapper } from "./style";
import { Song } from "@/types/common";
import { Image } from "antd";
import { formatImgUrl } from "@/utils";
import LikeSong from "@/components/like-song";

interface Props {
    song: Song;
}

const PlayBarLeft = memo(({ song }: Props) => {
    return (
        <PlayBarLeftWrapper>
            <div className="content-left">
                <Image
                    width={66}
                    height={66}
                    src={formatImgUrl(song.al?.picUrl, 66)}
                    preview={false}
                />
            </div>
            <div className="content-right">
                <div className="content-right-line1 ellipsis-line1">
                    <div className="song-name">{song.name}</div>
                    <div className="content-right-other">
                        <LikeSong track={song} />
                    </div>
                </div>
                <div className="song-art ellipsis-line1 ">
                    {song.ar?.map((art, index) => {
                        return (
                            <span key={art.id}>
                                <span className="song-art-name">{art.name}</span>
                                {index !== song.ar.length - 1 && (
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
