import styled from "styled-components";

export const PlayBarBaseControlWrapper = styled.div<{ pause: boolean }>`
    .control {
        &-center {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &-switch {
            background-color: #f4f4f4;
            border-radius: 50%;
            height: 48px;
            width: 48px;
            cursor: pointer;

            > * {
                transform: translateX(${(props) => (props.pause ? "3px" : 0)});
            }
        }
    }
`;
