import React, { memo, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Modal, Tabs } from "antd";

import { loginTypes } from "./config";
import { LoginWrapper } from "./style";
import { useAppDispatch } from "@/store/redux-hooks";
import { changeIsShowLoginAction, changeTabActiveKeyAction } from "@/store/module/login";
import { useStore } from "@/hooks/use-store";

interface Props {
    open: boolean;
}

const Login = memo(({ open }: Props) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(changeIsShowLoginAction(open));
    }, [open]);

    const handleCancel = () => {
        hidden();
    };

    const tabActiveKeyChange = (key: string) => {
        dispatch(changeTabActiveKeyAction(key)); // 记录当前activeTab
    };

    const LoginTabs = (
        <Tabs defaultActiveKey="1" items={loginTypes} onChange={tabActiveKeyChange} />
    );

    return (
        <Modal open={open} onCancel={handleCancel} footer={[]}>
            <LoginWrapper>{LoginTabs}</LoginWrapper>
        </Modal>
    );
});

const login = () => {
    const container = document.createElement("div");
    document.body.appendChild(container);
    const content = document.createElement("div");
    container.appendChild(content); // 添加到页面上
    const contentReact = createRoot(content);

    return (props: Props) => () => {
        contentReact.render(useStore(<Login {...props} />)); // 将组件渲染至页面
    };
};

const renderLogin = login(); // 渲染值页面

const show = renderLogin({ open: true });
const hidden = renderLogin({ open: false });

export default {
    show,
    hidden
};
