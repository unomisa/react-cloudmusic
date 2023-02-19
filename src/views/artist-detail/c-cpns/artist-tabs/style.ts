import styled from "styled-components";

export const ArtistTabsWrapper = styled.div`
    .ant-tabs-tab {
        font-size: 18px;
        color: #909399;

        &-active {
            font-weight: bold;

            .ant-tabs-tab-btn {
                color: #444444 !important;
            }
        }
    }
`;
