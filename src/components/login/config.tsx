import { TabsProps } from "antd";

import { ExpandOutlined } from "@ant-design/icons";
import QrCodeLogin from "./c-cpns/qr-code";

export const loginTypes: TabsProps["items"] = [
    {
        key: "1",
        label: (
            <span>
                <ExpandOutlined />
                二维码登录
            </span>
        ),
        children: <QrCodeLogin />
    }
];
