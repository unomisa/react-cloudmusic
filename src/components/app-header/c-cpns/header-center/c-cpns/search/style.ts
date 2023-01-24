import theme from "@/assets/theme/page-theme";
import styled from "styled-components";

export const SearchWrapper = styled.div`
    margin-left: 100px;

    > .search-wrapper {
        width: 333px;
        border-radius: 5px;
    }

    .site-form-item-icon {
        color: ${theme.gray.primary};
    }
`;
