import styled from "styled-components";

import theme from "@/assets/theme/page-theme";

export const AppContentWrapper = styled.div`
    width: 100%;
    padding-top: ${theme.size.headerHeight}px;
    min-height: 100vh;

    .page-content {
        width: ${theme.size.contentWidth}px;
        margin: 0 auto;
        min-height: inherit;
        padding-top: 1px;
    }
`;
