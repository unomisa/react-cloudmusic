import styled from "styled-components";

export const DetailCardBtnGroupWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: -10px 0;

    &::before {
        content: "";
        flex: 1;
        height: 1px;
        background-color: #dcdfe6;
        margin-right: 20px;
    }

    > .ant-btn {
        margin-right: 8px;
    }

    > .ant-btn:last-of-type {
        margin-right: 0;
    }
`;
