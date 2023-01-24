import styled from "styled-components";

import theme from "@/assets/theme/page-theme";

export const AppHeaderWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: ${theme.size.headerHeight}px;
    background-color: ${theme.color.primaryColor};
    box-shadow: 0 2px 10px 0 rgb(52 52 52 / 15%);

    > .header-content {
        display: flex;
        height: 100%;
        width: ${theme.size.contentWidth}px;
        align-items: center;
        margin: 0 auto;
    }
`;
