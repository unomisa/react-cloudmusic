import styled from "styled-components";
import theme from "@/assets/theme/page-theme";

export const LoginWrapper = styled.div`
    .ant-tabs-tab-btn {
        &:hover {
            color: ${theme.color.primaryColor} !important;
        }
    }

    .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
        color: ${theme.color.primaryColor} !important;
    }

    .ant-tabs .ant-tabs-ink-bar {
        background-color: ${theme.color.primaryColor} !important;
    }
`;
