import React, { memo } from "react";

import { LikeSongWrapper } from "./style";
import { TrackDetail } from "@/types/common";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import theme from "@/assets/theme/page-theme";

interface Props {
    track: TrackDetail;
}

const LikeSong = memo(({ track }: Props) => {
    return (
        <LikeSongWrapper>
            <HeartOutlined style={{ color: theme.gray.primary }} />
            {/* <HeartFilled style={{ color: theme.color.primaryColor }} /> */}
        </LikeSongWrapper>
    );
});

export default LikeSong;
