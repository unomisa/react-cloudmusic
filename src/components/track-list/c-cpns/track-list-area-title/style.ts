import styled from "styled-components";

import theme from "@/assets/theme/page-theme";

export const TrackListAreaTitleWrapper = styled.div`
    margin-bottom: 16px;

    .trackarea {
        &-other {
            padding-left: 12px;
        }
    }

    .ant-col {
        color: ${theme.color.primaryColor};
        font-size: 16px;
        font-weight: bold;
    }
`;
