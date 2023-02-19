import styled from "styled-components";

import theme from "@/assets/theme/page-theme";

interface Props {
    showPlayBar: boolean;
}

export const AppContentWrapper = styled.div<Props>`
    width: 100%;
    padding-top: ${theme.size.headerHeight}px;
    padding-bottom: ${(props) => (props.showPlayBar ? theme.size.playBarHeight + "px" : 0)};
    min-height: 100vh;
    overflow: hidden;

    .page-content {
        width: ${theme.size.contentWidth}px;
        margin: 0 auto;
        min-height: inherit;
        padding-top: 1px;
    }
`;
