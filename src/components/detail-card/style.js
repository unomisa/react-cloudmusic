import styled from "styled-components";

export const DetailCardWrapper = styled.div`
    display: flex;
    margin: 40px 0;
    padding: 20px;
    background-color: white;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    border-radius: 5px;

    > .detail-card {
        &-left {
            flex: 0 0 190px;
            margin-right: 40px;

            .detail-img {
                border-radius: 5px;
            }
        }
        &-right {
            flex: 1;

            > * {
                margin-top: 12px;
            }

            > *:first-child {
                margin-top: 0;
            }
        }
    }
`;
