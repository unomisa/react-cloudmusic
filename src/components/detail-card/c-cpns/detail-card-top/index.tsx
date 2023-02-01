import React, { memo } from "react";
import { ProfileFilled } from "@ant-design/icons";

import { DetailCardTopWrapper } from "./style";

interface Props {
    type: "歌单" | "歌手";
    name: string;
    bgc?: string; // 背景颜色
}

const DetailCardTop = memo((props: Props) => {
    const { name, type, bgc } = props;

    return (
        <DetailCardTopWrapper bgc={bgc}>
            <span className="detail-card-type flex-center">
                <ProfileFilled />
                <span className="detail-card-type-text">{type}</span>
            </span>
            <span className="detail-card-name">{name}</span>
        </DetailCardTopWrapper>
    );
});

export default DetailCardTop;
