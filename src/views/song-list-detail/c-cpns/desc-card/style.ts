import styled from "styled-components";
import theme from "@/assets/theme/page-theme";

export const DescCardWrapper = styled.div``;

interface RightContentProps {
    isCollapse: boolean;
}

export const DescCardRightContentWrapper = styled.div<RightContentProps>`
    .detail-content {
        font-size: 14px;

        > * {
            margin-top: 12px;
        }

        > *:first-child {
            margin-top: 0;
        }

        .detail-creator {
            display: flex;
            align-items: center;

            &-link {
                cursor: pointer;
            }

            &-name {
                margin-left: 5px;
                font-size: 14px;
                color: ${theme.link.normal};

                &:hover {
                    color: ${theme.link.hover};
                }
            }

            &-date {
                margin-left: 20px;
                color: ${theme.gray.primary};
                font-size: 14px;

                & > span {
                    margin-right: 12px;

                    &:last-child {
                        margin-right: 0;
                    }
                }
            }
        }

        .detail-tags {
            .detail-tag {
                color: ${theme.link.normal};
                cursor: pointer;

                &:hover {
                    color: ${theme.link.hover};
                }

                &::after {
                    content: "/";
                    margin: 0 5px;
                }

                &:last-child {
                    &::after {
                        content: "";
                    }
                }
            }
        }

        .detail-count {
            & > * {
                margin-right: 20px;

                &:last-child {
                    margin-right: 0;
                }
            }
        }

        .detail-desc {
            .ant-collapse-header {
                padding: 0;
            }

            .ant-collapse-header-text {
                ${(props) => theme.mixin.multilineEllipsis(props.isCollapse ? 9999 : 1)}
            }

            .ant-collapse-content-box {
                padding: 0;
            }

            &-content {
                color: ${theme.gray.primary};
            }
        }
    }
`;
