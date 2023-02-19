import React, { memo, useEffect } from "react";
import { SongListDetailWrapper } from "./style";
import { useAppDispatch, useAppSelector } from "@/store/redux-hooks";
import {
    asyncGetPlayListDetailAction,
    songListDetailStateResetAction
} from "@/store/module/song-list-detail";

import GradientBg from "@/components/gradient-bg";
import DescCard from "./c-cpns/desc-card";
import { shallowEqual } from "react-redux";
import { useParams } from "react-router-dom";
import ListContent from "./c-cpns/list-content";

const SongListDetail = memo(() => {
    const { playListDetail, trackList } = useAppSelector(
        (state) => ({
            playListDetail: state.songListDetail.playListDetail,
            trackList: state.songListDetail.trackList
        }),
        shallowEqual
    );

    const dispatch = useAppDispatch();

    const { id } = useParams();
    console.log("id: ", id);

    useEffect(() => {
        dispatch(asyncGetPlayListDetailAction({ id }));

        return () => {
            dispatch(songListDetailStateResetAction());
        };
    }, [id]);

    return (
        <SongListDetailWrapper>
            <GradientBg endColor="#ffd1ff" />
            <div className="page-content">
                {playListDetail && <DescCard detail={playListDetail} trackList={trackList} />}
                {trackList && <ListContent trackList={trackList} />}
            </div>
        </SongListDetailWrapper>
    );
});

export default SongListDetail;
