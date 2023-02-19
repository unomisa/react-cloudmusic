import React, { memo, useCallback } from "react";
import { Button } from "antd";
import { ArtistDescCardWrapper } from "./style";

import DetailCard from "@/components/detail-card";
import DetailCardBtnGroup from "@/components/detail-card/c-cpns/detail-card-btn-group";
import DetailCardTop from "@/components/detail-card/c-cpns/detail-card-top";

import { ArtistDetail } from "@/types/artist-detail";
import { formatImgUrl } from "@/utils";
import { UserOutlined } from "@ant-design/icons";

interface Props {
    detail: ArtistDetail;
}

const ArtistDescCard = memo(({ detail }: Props) => {
    const { artist } = detail;

    const collectHandle = useCallback(() => {
        console.log("收藏");
    }, []);

    const goUserDetail = () => {
        console.log("跳转用户主页");
    };

    const CardRight = (
        <>
            <DetailCardTop type="歌手" name={artist.name} />

            <DetailCardBtnGroup collectHandle={collectHandle}>
                <Button
                    type="primary"
                    shape="round"
                    icon={<UserOutlined />}
                    size={"middle"}
                    onClick={goUserDetail}>
                    个人主页
                </Button>
            </DetailCardBtnGroup>

            <div className="artist-count-group">
                <span className="artist-count-item">单曲数：{artist.musicSize}</span>
                <span className="artist-count-item">专辑数：{artist.albumSize}</span>
                <span className="artist-count-item">MV数：{artist.mvSize}</span>
            </div>
        </>
    );

    return (
        <ArtistDescCardWrapper>
            <DetailCard imgSrc={formatImgUrl(detail.artist.cover, 200)} RightContent={CardRight} />
        </ArtistDescCardWrapper>
    );
});

export default ArtistDescCard;
