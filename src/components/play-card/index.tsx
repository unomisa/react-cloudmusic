import React, { memo } from "react";
import { Image } from "antd";
import { useNavigate } from "react-router-dom";

import { PlayCardWrapper } from "./style";
import { PreviewCard, PreviewType } from "./type";
import { formatCount } from "@/utils";
import { CaretRightOutlined } from "@ant-design/icons";
import { pageTheme } from "@/assets/theme";

interface Props {
    previewCard: PreviewCard;
    previewType: PreviewType;
}

const PlayCard = memo((props: Props) => {
    const { previewCard, previewType } = props;

    const navigate = useNavigate();

    function goDetail() {
        switch (previewType) {
            case "playList":
                return navigate("/songlistdetail/" + previewCard.id);
        }
    }

    return (
        <PlayCardWrapper>
            <div className="preview-inner" onClick={goDetail}>
                <div className="preview-pic">
                    <div className="preview-topwrapper">
                        <span className="preview-playcount flex-center">
                            <CaretRightOutlined style={{ fontSize: "20px" }} />
                            {formatCount(previewCard.playCount)}
                        </span>
                    </div>

                    <Image src={previewCard.picUrl} preview={false} placeholder />

                    <div className="preview-hover flex-center">
                        <div className="preview-hover-inner">
                            <CaretRightOutlined
                                style={{
                                    fontSize: "32px",
                                    color: `${pageTheme.color.primaryColor}`
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="preview-name">{previewCard.name}</div>
            </div>
        </PlayCardWrapper>
    );
});

export default PlayCard;
