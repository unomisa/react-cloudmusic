import styled from "styled-components";
import { Props } from "./index";

export const GradientBgWrapper = styled.div<Props>`
    position: absolute;
    z-index: -1;
    content: "";
    width: 100%;
    height: 230px;
    background-image: linear-gradient(to top, #ffffff 0%, ${(props) => props.endColor} 100%);
    // background-image: linear-gradient(to top, #ffd1ff 0%, #ffffff 100%);
    // border: 1px solid transparent;
`;
