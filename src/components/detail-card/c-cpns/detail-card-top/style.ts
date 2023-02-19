import styled from "styled-components";
import theme from "@/assets/theme/page-theme";

interface Props {
    bgc: string;
}

export const DetailCardTopWrapper = styled.div<Props>`
    display: flex;
    align-items: center;

    .detail-card {
        &-type {
            padding: 3px 6px;
            color: white;
            border-radius: 3px;
            background-color: ${(props) => props.bgc ?? theme.color.primaryColor};
            font-size: 14px;

            &-text {
                margin-left: 5px;
                font-size: 13px;
            }
        }

        &-name {
            font-size: 24px;
            font-weight: bold;
            margin-left: 12px;
        }
    }
`;
