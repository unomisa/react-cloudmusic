import styled from "styled-components";

export const PlayBarProgressWrapper = styled.div`
    display: flex;
    align-items: center;

    .ant-slider {
        width: 500px;
        margin-top: 0;
        margin-bottom: 0;
    }

    .progress {
        &-slider {
            margin: 0 8px;
        }
    }

    .ant-tooltip-arrow {
        &::after,
        &::before {
            background-color: white;
        }
    }

    .ant-tooltip-inner {
        background-color: white;
        color: black;
    }
`;
