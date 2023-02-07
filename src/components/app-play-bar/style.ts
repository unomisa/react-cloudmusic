import theme from "@/assets/theme/page-theme";
import styled from "styled-components";

export const AppPlayBarWrapper = styled.div<{ show: boolean }>`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    height: ${theme.size.playBarHeight}px;
    background-color: white;
    padding: 12px;
    box-shadow: 0 2px 4px rgb(0 0 0 / 12%), 0 0 6px rgb(0 0 0 / 4%);
    transform: translateY(${(props) => (props.show ? 0 : theme.size.playBarHeight + "px")});
    transition: transform 0.3s ease;
`;
