import React, { memo, useMemo } from "react";
import { Carousel, Image } from "antd";

import { HomeArtistsWrapper } from "./style";
import { FireOutlined } from "@ant-design/icons";
import { Artist } from "@/types/common";
import { formatImgUrl } from "@/utils";
import AppSectionTitle from "@/components/app-section-title";
import { useNavigate } from "react-router-dom";

interface Props {
    artists: Artist[];
}

const HomeArtists = memo(({ artists }: Props) => {
    const navigate = useNavigate();

    // 数组拆分
    const artistPart = useMemo(() => {
        let partArr: Artist[][] = [];
        const partSize = 8;
        const partCount = 3;

        for (let i = 0; i < partCount; i++) {
            const part = [];
            const offset = partSize * i;

            for (let j = 0; j < partSize; j++) {
                part.push(artists[j + offset]);
            }

            partArr.push(part);
        }

        return partArr;
    }, [artists]);

    const goArtistDetail = (artist: Artist) => {
        navigate("/artistdetail/" + artist.id);
    };

    // carousel 配置
    const settings = {
        slidesToShow: 1, // 显示几个
        infinite: true,
        speed: 1000, // 切换速度
        autoplay: true,
        autoplaySpeed: 5000
    };

    // console.log('热门歌手重新')

    return (
        <HomeArtistsWrapper>
            <AppSectionTitle title="热门歌手" icon={<FireOutlined />} />
            <Carousel {...settings}>
                {artistPart.map((part, index) => {
                    return (
                        <div key={index} className="artist-part">
                            {part.map((artist, index) => {
                                return (
                                    <div
                                        className="artist-item"
                                        key={artist?.id ?? index}
                                        onClick={() => goArtistDetail(artist)}>
                                        <Image
                                            src={formatImgUrl(artist?.picUrl ?? "", 125)}
                                            className="artist-img"
                                            preview={false}
                                        />

                                        <div className="artist-name">{artist?.name}</div>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </Carousel>
        </HomeArtistsWrapper>
    );
});

export default HomeArtists;
