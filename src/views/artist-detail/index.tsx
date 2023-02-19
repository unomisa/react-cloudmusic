import React, { memo, useEffect } from "react";

import { ArtistDetailWrapper } from "./style";
import ArtistDescCard from "./c-cpns/artist-desc-card";
import GradientBg from "@/components/gradient-bg";
import { useAppDispatch, useAppSelector } from "@/store/redux-hooks";
import {
    artistDetailStateResetAction,
    asyncGetArtistDetailAction
} from "@/store/module/artist-detail";
import { useParams } from "react-router-dom";
import { shallowEqual } from "react-redux";
import ArtistTabs from "./c-cpns/artist-tabs";

const ArtistDetail = memo(() => {
    const { detail } = useAppSelector(
        (state) => ({
            detail: state.artistDetail.artistDetail
        }),
        shallowEqual
    );

    const { id } = useParams();

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(asyncGetArtistDetailAction({ id }));

        return () => {
            dispatch(artistDetailStateResetAction());
        };
    }, [id]);

    console.log("歌手详情页面刷新");

    return (
        <ArtistDetailWrapper>
            <GradientBg endColor="#ff94cc" />
            <div className="page-content">
                {detail && <ArtistDescCard detail={detail} />}
                <ArtistTabs />
            </div>
        </ArtistDetailWrapper>
    );
});

export default ArtistDetail;
