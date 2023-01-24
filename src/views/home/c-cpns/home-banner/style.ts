import styled from "styled-components";

const bannerHeight = 250;

export const HomeBannerWrapper = styled.div`
    margin: 48px 0 80px;

    > .banner {
        &-inner {
            height: ${bannerHeight}px;
            width: 100%;

            .ant-image-img {
                height: ${bannerHeight}px;
                border-radius: 5px;
                cursor: pointer;
            }

            .banner {
                &-item {
                }
            }

            .slick-slide {
                transition: transform 0.4s ease;
                transform: scale(0.9);
            }

            .slick-track {
                padding: 10px 0;
            }

            .slick-center {
                position: relative;
                z-index: 9;
                transform: scale(1.5, 1.05);
            }
        }
    }
`;
