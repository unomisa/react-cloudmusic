import styled from "styled-components";

import theme from "@/assets/theme/page-theme";

export const QrCodeLoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .qr-code-login {
        &-title {
            font-size: 24px;
        }

        &-img {
            margin: 12px 0;
            width: 180px;
            height: 180px;
        }

        &-footer {
            font-size: 14px;

            &-app {
                color: ${theme.color.primaryColor};
            }
        }
    }
`;
