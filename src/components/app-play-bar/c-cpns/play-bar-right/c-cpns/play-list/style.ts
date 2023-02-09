import theme from "@/assets/theme/page-theme";
import styled from "styled-components";

export const PlayListWrapper = styled.div`
    .play-list-container {
        background-color: white;
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
        border-radius: 3px;

        .play-list {
            &-content {
                width: 400px;
                border-radius: 3px;
                padding: 12px 5px 12px 12px;
                overflow: hidden;
            }

            &-top {
                margin-bottom: 12px;

                .play-list {
                    &-title {
                        font-size: 20px;
                        &-text {
                            transform: translateY(-1.5px);
                        }
                    }

                    &-clear {
                        cursor: pointer;
                        color: #409eff;
                        margin-left: auto;
                        margin-right: 14px;
                    }

                    &-count {
                        font-size: 12px;
                        margin-left: 24px;
                        color: ${theme.gray.secondary};
                    }
                }
            }

            &-inner {
                position: relative;
                height: 400px;
                overflow: hidden scroll;
                padding-right: 5px;

                .track-content {
                    font-size: 14px;
                }

                .track-name {
                }

                .track-other {
                    margin-left: 9px;
                }

                &::-webkit-scrollbar {
                    /*滚动条整体样式*/
                    width: 8px; /*高宽分别对应横竖滚动条的尺寸*/
                    height: 1px;
                }
                &::-webkit-scrollbar-thumb {
                    /*滚动条里面小方块*/
                    border-radius: 10px;
                    background-color: #ebd6e2;
                }
                &::-webkit-scrollbar-track {
                    /*滚动条里面轨道*/
                    border-radius: 10px;
                }
            }
        }
    }
`;
