import React, { memo } from "react";
import { Avatar, Button } from "antd";

import { HeaderRightWrapper } from "./style";
import login from "@/components/login";
import { useAppSelector } from "@/store/redux-hooks";
import { shallowEqual } from "react-redux";

const HeaderRight = memo((props) => {
    const { user, isLogin } = useAppSelector((state) => state.common, shallowEqual);

    return (
        <HeaderRightWrapper>
            {isLogin ? (
                <div className="user-info">
                    <Avatar src={user.profile?.avatarUrl} size={48} />
                    <span className="user-name">{user.profile?.nickname}</span>
                </div>
            ) : (
                <Button size="large" className="login-btn" onClick={() => login.show()}>
                    登录/注册
                </Button>
            )}
        </HeaderRightWrapper>
    );
});

export default HeaderRight;
