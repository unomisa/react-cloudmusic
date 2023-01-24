import React, { memo, useEffect } from "react";

import { useAppDispatch } from "@/store/redux-hooks";
import { asyncGetPlayListDetailAction } from "@/store/module/common";
import { DetailCardWrapper } from "./style";

const DetailCard = memo(() => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(asyncGetPlayListDetailAction());
    }, [dispatch]);

    return <DetailCardWrapper>DetailCard</DetailCardWrapper>;
});

export default DetailCard;
