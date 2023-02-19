import React, { memo } from "react";
import { Avatar, Button } from "antd";

import { HeaderRightWrapper } from "./style";
import login from "@/components/login";
import { useAppDispatch, useAppSelector } from "@/store/redux-hooks";
import { shallowEqual } from "react-redux";
import { changeIsLoginAction } from "@/store/module/common";

const HeaderRight = memo((props) => {
    const { user, isLogin } = useAppSelector(
        (state) => ({
            user: state.common.user,
            isLogin: state.common.isLogin
        }),
        shallowEqual
    );

    const dispatch = useAppDispatch();
    const loginOut = () => {
        dispatch(changeIsLoginAction(false));
        console.log("退出登录");
    };

    return (
        <HeaderRightWrapper>
            {isLogin ? (
                <div className="user-info" onClick={loginOut}>
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
