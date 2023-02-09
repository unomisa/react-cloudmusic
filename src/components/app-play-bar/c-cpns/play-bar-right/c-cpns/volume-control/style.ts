import styled from "styled-components";

export const VolumeControlWrapper = styled.div`
    .ant-slider {
        width: 150px;
        margin-left: 20px;
    }

    .ant-slider-handle {
        &::after {
            box-shadow: 0 0 0 2px #ffbddc;
        }
    }
`;
