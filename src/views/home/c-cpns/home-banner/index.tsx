import React, { memo } from "react";
import { HomeBannerWrapper } from "./style";

import { Banner } from "@/types/home";
import { Image, Carousel } from "antd";

interface Props {
    bannerList: Banner[];
}

const HomeBanner = memo((props: Props) => {
    const { bannerList = [] } = props;

    // carousel 配置
    const settings = {
        centerMode: true, // 居中模式
        slidesToShow: 3, // 显示几个
        focusOnSelect: true, // 是否点击选中
        dots: true, // 下面的提示点
        infinite: true,
        centerPadding: "0px",
        speed: 400 // 切换速度
    };

    return (
        <HomeBannerWrapper>
            <div className="banner-inner">
                <Carousel {...settings}>
                    {bannerList.map((banner) => {
                        return (
                            <div className="banner-item" key={banner.targetId}>
                                <Image src={banner.imageUrl} preview={false} />
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </HomeBannerWrapper>
    );
});

export default HomeBanner;
