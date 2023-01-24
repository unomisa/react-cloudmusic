import React, { memo } from "react";
import { SongListDetailWrapper } from "./style";

import DetailCard from "@/components/detail-card";
import GradientBg from "@/components/gradient-bg";

const SongListDetail = memo(() => {
    return (
        <SongListDetailWrapper>
            <GradientBg endColor="#ffd1ff" />
            <div className="page-content">
                <DetailCard />
            </div>
        </SongListDetailWrapper>
    );
});

export default SongListDetail;
