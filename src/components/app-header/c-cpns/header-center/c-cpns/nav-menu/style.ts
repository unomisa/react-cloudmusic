import styled from "styled-components";

export const NavMenuWrapper = styled.div`
    .nav-menu {
        &-tabs {
            color: white;
            user-select: none;

            .ant-tabs-nav {
                margin: 0;

                &::before {
                    border: 0;
                }
            }

            .ant-tabs-tab-btn {
                font-size: 20px;
            }

            .ant-tabs-tab-active {
                padding: 5px 0;

                .ant-tabs-tab-btn {
                    color: white;
                    font-weight: bold;
                }
            }

            .ant-tabs-ink-bar {
                background-color: white;
            }
        }
    }
`;
