import React, { memo, useCallback, useState, useRef, useEffect } from "react";
import { Avatar, Button, Collapse } from "antd";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
import { PlayCircleFilled, CaretRightOutlined } from "@ant-design/icons";

import DetailCard from "@/components/detail-card";
import DetailCardTop from "@/components/detail-card/c-cpns/detail-card-top";
import DetailCardBtnGroup from "@/components/detail-card/c-cpns/detail-card-btn-group";

import { DescCardWrapper, DescCardRightContentWrapper } from "./style";
import { PlayListDetail } from "@/types/song-list-detail";
import { useLoginAuth } from "@/hooks/index";
import { dateFormat } from "@/utils";

interface Props {
    detail: PlayListDetail;
}

const DescCard = memo((props: Props) => {
    const { detail } = props;
    // 简介区域
    const collapsePanelRef = useRef();
    // 简介未折叠
    const collapsePanelCopyRef = useRef();

    const [isCollapse, setIsCollapse] = useState(false); // 简介是否收缩

    const [isShowArrow, setIsShowArrow] = useState(false);

    // 计算是否需要显示箭头
    useEffect(() => {
        const collapsePanel = collapsePanelRef.current as Element;
        const collapsePanelCopy = collapsePanelCopyRef.current as Element;
        const collapsePanelWidth = collapsePanel.clientWidth;
        const collapsePanelCopyWidth = collapsePanelCopy.clientWidth;

        setIsShowArrow(collapsePanelCopyWidth > collapsePanelWidth);
    }, [detail]);

    const creatorDetailHandle = () => {
        console.log("跳转用户信息");
    };

    // 收藏
    const collectHandle = useLoginAuth(
        useCallback(() => {
            console.log("收藏");
        }, [])
    );

    // 播放全部
    const playAllHandle = () => {};

    // 简介收缩
    const collapseChangeHandle = (key: string | string[]) => {
        if (Array.isArray(key)) {
            if (key.length > 0) {
                setIsCollapse(true);
            } else {
                setIsCollapse(false);
            }
        }
    };

    const DetailRightContent = (
        <DescCardRightContentWrapper isCollapse={isCollapse}>
            <div className="detail-content">
                <DetailCardTop type="歌单" name={detail.name} />

                <div className="detail-creator">
                    <span className="detail-creator-link flex-center" onClick={creatorDetailHandle}>
                        <Avatar src={detail.creator.avatarUrl} />
                        <span className="detail-creator-name">{detail.creator.nickname}</span>
                    </span>

                    <span className="detail-creator-date flex-center">
                        <span>{dateFormat("YY-MM-dd", new Date(detail.createTime))} 创建</span>
                        <span>{dateFormat("YY-MM-dd", new Date(detail.updateTime))} 更新</span>
                    </span>
                </div>

                <DetailCardBtnGroup collectHandle={collectHandle}>
                    <Button
                        type="primary"
                        shape="round"
                        icon={<PlayCircleFilled />}
                        size={"middle"}
                        onClick={playAllHandle}>
                        播放全部
                    </Button>
                </DetailCardBtnGroup>

                <div className="detail-tags">
                    标签：
                    {detail.tags.map((tag) => {
                        return (
                            <span className="detail-tag" key={tag}>
                                {tag}
                            </span>
                        );
                    })}
                </div>

                <div className="detail-count">
                    <span>歌曲：{detail.trackCount}</span>
                    <span>播放：{detail.playCount}</span>
                </div>

                <div className="detail-desc">
                    <span className="detail-desc-label">简介：</span>

                    <div className="detail-desc-content" ref={collapsePanelRef}>
                        <Collapse
                            bordered={false}
                            expandIconPosition="end"
                            ghost
                            onChange={collapseChangeHandle}
                            expandIcon={({ isActive }) => (
                                <CaretRightOutlined rotate={isActive ? -90 : 90} />
                            )}>
                            <CollapsePanel
                                header={detail.description}
                                key="1"
                                showArrow={isShowArrow}
                                collapsible={isShowArrow ? "icon" : "disabled"}
                            />
                        </Collapse>

                        <div className="detail-desc-copy" ref={collapsePanelCopyRef}>
                            {detail.description}
                        </div>
                    </div>
                </div>
            </div>
        </DescCardRightContentWrapper>
    );

    return (
        <DescCardWrapper>
            <DetailCard imgSrc={detail.coverImgUrl} RightContent={DetailRightContent} />
        </DescCardWrapper>
    );
});

export default DescCard;
