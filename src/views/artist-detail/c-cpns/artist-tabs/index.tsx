import React, { memo } from "react";
import { Tabs, TabsProps } from "antd";

import { ArtistTabsWrapper } from "./style";
import ArtistAlbum from "../artist-album";

const items: TabsProps["items"] = [
    {
        key: "1",
        label: `专辑`,
        children: <ArtistAlbum />
    },
    {
        key: "2",
        label: `歌手详情`,
        children: `Content of Tab Pane 2`
    },
    {
        key: "3",
        label: `相似歌手`,
        children: `Content of Tab Pane 3`
    }
];

const ArtistTabs = memo(() => {
    const onTabsChange = (value) => {
        console.log("tab改变", value);
    };

    return (
        <ArtistTabsWrapper>
            <Tabs defaultActiveKey="1" items={items} onChange={onTabsChange} />
        </ArtistTabsWrapper>
    );
});

export default ArtistTabs;
