import { Button } from "antd";
import React, { memo } from "react";
import { FolderAddOutlined } from "@ant-design/icons";

import { DetailCardBtnGroupWrapper } from "./style";

interface Props {
    collectHandle: () => void;
    children: React.ReactNode;
}

const DetailCardBtnGroup = memo((props: Props) => {
    const { children, collectHandle } = props;
    return (
        <DetailCardBtnGroupWrapper>
            {children}

            <Button
                type="primary"
                ghost
                shape="round"
                icon={<FolderAddOutlined />}
                size={"middle"}
                onClick={collectHandle}>
                收藏
            </Button>
        </DetailCardBtnGroupWrapper>
    );
});

export default DetailCardBtnGroup;
