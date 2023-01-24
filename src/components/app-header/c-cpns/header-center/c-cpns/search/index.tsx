import React, { memo } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { SearchWrapper } from "./style";

const Search = memo(() => {
    return (
        <SearchWrapper>
            <Input
                className="search-wrapper"
                placeholder="请输入歌名、歌词、歌手或专辑"
                prefix={<SearchOutlined className="site-form-item-icon" />}
                size="large"
            />
        </SearchWrapper>
    );
});

export default Search;
