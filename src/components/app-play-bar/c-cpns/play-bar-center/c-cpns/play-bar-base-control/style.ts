import styled from "styled-components";

export const PlayBarBaseControlWrapper = styled.div<{ pause: boolean }>`
    .control {
        &-center {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
        }

        &-switch {
            background-color: #f4f4f4;
            border-radius: 50%;
            height: 40px;
            width: 40px;
            cursor: pointer;

            > * {
                transform: translateX(${(props) => (props.pause ? "3px" : 0)});
            }
        }
    }
`;
