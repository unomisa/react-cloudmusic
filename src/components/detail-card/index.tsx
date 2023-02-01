import { Image } from "antd";
import React, { memo } from "react";

import { DetailCardWrapper } from "./style";

interface Props {
    imgSrc: string;
    RightContent: React.ReactNode;
}

const DetailCard = memo((props: Props) => {
    const { imgSrc, RightContent } = props;

    return (
        <DetailCardWrapper>
            <div className="detail-card-left">
                <Image className="detail-img" src={imgSrc + "?param=200y200"} preview={false} />
            </div>

            <div className="detail-card-right">{RightContent}</div>
        </DetailCardWrapper>
    );
});

export default DetailCard;
