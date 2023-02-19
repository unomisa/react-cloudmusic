import theme from "@/assets/theme/page-theme";
import styled from "styled-components";

export const PlayBarLeftWrapper = styled.div`
    flex: 1;
    height: 100%;
    display: flex;

    .content {
        &-left {
            height: 100%;
            margin-right: 12px;
            cursor: pointer;

            img {
                border-radius: 3px;
            }
        }

        &-right {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            &-line1 {
                display: flex;
            }

            &-other {
                > * {
                    margin-left: 5px;
                }
            }
        }
    }

    .song {
        &-name {
        }
        &-art {
            color: ${theme.gray.primary};
            font-size: 14px;
            line-height: 1.5;

            &-name {
                cursor: pointer;

                &:hover {
                    color: black;
                }
            }

            &-separate {
                margin: 0 5px;
            }
        }
    }
`;
