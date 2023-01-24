import styled from "styled-components";

export const HeaderLeftWrapper = styled.div`
    flex: 1;

    > .left-content {
        display: inline-flex;
        align-items: center;
        justify-content: flex-start;
        cursor: pointer;

        > .header-left {
            &-icon {
                margin-left: -3px;
            }

            &-title {
                color: white;
                font-size: 24px;
                margin-left: 8px;
            }
        }
    }
`;
