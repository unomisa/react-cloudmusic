import styled from "styled-components";
import theme from "@/assets/theme/page-theme";

export const HomeArtistsWrapper = styled.div`
    margin-bottom: 20px;

    .artist {
        &-part {
            display: inline-flex !important;
            justify-content: space-between;
        }
        &-item {
            cursor: pointer;
        }

        &-img {
            border-radius: 100%;
            width: 124px;
            height: 124px;
            ${theme.mixin.border}
        }

        &-name {
            text-align: center;
            font-size: 16px;
        }
    }

    .slick-dots {
        bottom: -28px;

        li {
            button {
                background-color: rgba(216, 57, 147, 0.7);
            }
        }

        .slick-active {
            button {
                background-color: ${theme.color.primaryColor} !important;
            }
        }
    }
`;
