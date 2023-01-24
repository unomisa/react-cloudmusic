import theme from "@/assets/theme/page-theme";
import styled from "styled-components";

export const PlayCardWrapper = styled.div`
    > .preview-inner {
        .preview {
            &-pic {
                position: relative;
                border-radius: 5px;
                overflow: hidden;
                cursor: pointer;

                img {
                    border-radius: 5px;
                }

                &:hover {
                    .preview-hover {
                        opacity: 1;
                    }
                }
            }

            &-hover {
                opacity: 0;
                position: absolute;
                right: 12px;
                bottom: 12px;
                padding: 4px;
                border-radius: 50%;
                background-color: rgba(255, 255, 255, 0.8);
                transition: opacity 0.3s ease;

                &-inner {
                    transform: translateX(2.5px) scaleY(0.8);
                }
            }

            &-topwrapper {
                position: absolute;
                top: 0;
                right: 0;
                left: 0;
                z-index: 1;
                background-color: rgba(0, 0, 0, 0.05);
                height: 32px;
            }

            &-playcount {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 5px;
                color: white;
            }

            &-name {
                margin: 8px 0;
                ${theme.mixin.multilineEllipsis(2)}

                &:hover {
                    color: black;
                }
            }
        }
    }
`;
