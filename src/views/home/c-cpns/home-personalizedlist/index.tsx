import React, { memo } from "react";

import { HomePersonalizedListWrapper } from "./style";
import { playlist } from "@/types/home";
import PlayCard from "@/components/play-card";

interface Props {
    personalizedList: playlist[];
}

const HomePersonalizedList = memo((props: Props) => {
    const { personalizedList = [] } = props;

    return (
        <HomePersonalizedListWrapper>
            <div className="content">
                {personalizedList.map((playList) => {
                    return (
                        <div key={playList.id}>
                            <PlayCard previewCard={playList} previewType="playList" />
                        </div>
                    );
                })}
            </div>
        </HomePersonalizedListWrapper>
    );
});

export default HomePersonalizedList;
