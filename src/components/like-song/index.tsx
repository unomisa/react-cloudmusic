import React, { memo } from "react";

import { LikeSongWrapper } from "./style";
import { TrackDetail } from "@/types/common";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import theme from "@/assets/theme/page-theme";
import { useAppDispatch } from "@/store/redux-hooks";
import { asyncLikeSongAction } from "@/store/module/common";

interface Props {
    track: TrackDetail;
    isLike: boolean;
}

const LikeSong = memo(({ track, isLike }: Props) => {
    const dispatch = useAppDispatch();

    const likeSong = () => {
        dispatch(asyncLikeSongAction({ track, isLike: !isLike }));
    };

    return (
        <LikeSongWrapper onClick={likeSong}>
            {isLike ? (
                <HeartFilled style={{ color: theme.color.primaryColor }} />
            ) : (
                <HeartOutlined style={{ color: theme.gray.primary }} />
            )}
        </LikeSongWrapper>
    );
});

export default LikeSong;
