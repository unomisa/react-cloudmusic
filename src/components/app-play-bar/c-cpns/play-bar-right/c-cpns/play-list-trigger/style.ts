import styled from "styled-components";

interface Props {
    open: boolean;
}

export const PlayListTriggerWrapper = styled.div<Props>`
    position: relative;
    margin-left: 80px;

    .play-list-popover {
        display: ${open ? "black" : "none"};
        position: absolute;
        top: -30px;
        right: 0;
        transform: translate(${(props) => (props.open ? 0 : "calc(100% + 40px)")}, -100%);
        transition: transform 0.3s ease;
    }
`;
