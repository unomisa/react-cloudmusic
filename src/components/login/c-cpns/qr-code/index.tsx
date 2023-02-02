import React, { memo, useEffect } from "react";

import { QrCodeLoginWrapper } from "./style";
import { asyncGetQrCodeLoginAction, asyncGetQRCodeStatusAction } from "@/store/module/login";
import { useAppDispatch, useAppSelector } from "@/store/redux-hooks";
import { Image } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { shallowEqual } from "react-redux";

const QrCodeLogin = memo(() => {
    const { qrCode, isShowLogin } = useAppSelector((state) => state.login, shallowEqual);
    const { base64Img, statusCode } = qrCode;

    const dispatch = useAppDispatch();

    useEffect(() => {
        // 每次打开登录窗口，重新请求
        if (isShowLogin) {
            dispatch(asyncGetQrCodeLoginAction());
        }
    }, [dispatch, isShowLogin]);

    return (
        <QrCodeLoginWrapper>
            {statusCode === 801 && (
                <>
                    <div className="qr-code-login-title">扫码登录</div>

                    <div className="qr-code-login-img flex-center">
                        <Image src={base64Img} placeholder />
                    </div>

                    <div className="qr-code-login-footer">
                        请使用
                        <span className="qr-code-login-footer-app"> 网易云APP </span>
                        扫一扫
                    </div>
                </>
            )}

            {statusCode === 802 && (
                <>
                    <CheckOutlined style={{ fontSize: "120px" }} />
                    <div className="qr-code-login-title">扫描成功,请在手机上确认登录</div>
                </>
            )}
        </QrCodeLoginWrapper>
    );
});

export default QrCodeLogin;
