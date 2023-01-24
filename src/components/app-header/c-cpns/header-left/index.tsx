import React, { memo } from "react";

import Logo from "@/assets/svg/icon-logo";
import { HeaderLeftWrapper } from "./style";
import { useNavigate } from "react-router-dom";

const HeaderLeft = memo((props) => {
    const navigate = useNavigate();

    function goHome() {
        navigate("/home");
    }

    return (
        <HeaderLeftWrapper>
            <div className="left-content" onClick={goHome}>
                <span className="header-left-icon">
                    <Logo width={52} height={52} />
                </span>

                <span className="header-left-title">网易云音乐</span>
            </div>
        </HeaderLeftWrapper>
    );
});

export default HeaderLeft;
