import theme from "@/assets/theme/page-theme";
import styled from "styled-components";

export const TrackWrapper = styled.div`
    height: 48px;
    user-select: none;

    &:hover {
        background-color: #fbebf4 !important;
    }

    &:nth-child(2n) {
        background-color: #f9f9f9;
    }

    .ellipsis {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .track {
        &-content {
            height: 100%;
            font-size: 16px;

            .ant-col {
                display: flex;
                align-items: center;
                height: 100%;
                font-size: inherit;

                > * {
                    line-height: 1.4;
                }
            }
        }

        &-index {
            margin-left: 12px;
            color: ${theme.gray.primary};
        }

        &-like {
            transform: translateY(1px);
            margin-left: 12px;
            cursor: pointer;
        }

        &-name {
            &-alia {
                color: ${theme.gray.secondary};
            }
        }

        &-art {
            color: ${theme.gray.primary};

            &-name {
                cursor: pointer;

                &:hover {
                    color: black;
                }
            }

            &-gap {
                margin: 0 5px;
            }
        }

        &-album {
            color: ${theme.gray.primary};
            cursor: pointer;

            &:hover {
                color: black;
            }
        }

        &-duration {
            color: ${theme.gray.secondary};
        }
    }
`;
