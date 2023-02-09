import React, { memo, useState, useEffect, RefCallback } from "react";

import { MenuUnfoldOutlined } from "@ant-design/icons";
import { PlayListTriggerWrapper } from "./style";
import PlayList from "../play-list";

const PlayListTrigger = memo(() => {
    const [open, setOpen] = useState(false);

    const [isListRender, setIsListRender] = useState(false);

    const playListSwitchHandle = (e: React.MouseEvent<any, any>) => {
        e.stopPropagation();
        setOpen(!open);
    };

    useEffect(() => {
        function hiddenPlayList() {
            setOpen(false);
            console.log("关闭playlist");
        }

        if (open) {
            setIsListRender(true);
            window.addEventListener("click", hiddenPlayList);
        } else {
            window.removeEventListener("click", hiddenPlayList);
        }

        return () => window.removeEventListener("click", hiddenPlayList);
    }, [open]);

    return (
        <PlayListTriggerWrapper className="flex-center" open={open}>
            <MenuUnfoldOutlined
                style={{ fontSize: "24px" }}
                onClick={(e) => playListSwitchHandle(e)}
            />
            {/* 最外层停止冒泡事件 */}

            {isListRender && (
                <div className="play-list-popover" onClick={(e) => e.stopPropagation()}>
                    <PlayList open={open} />
                </div>
            )}
        </PlayListTriggerWrapper>
    );
});

export default PlayListTrigger;
