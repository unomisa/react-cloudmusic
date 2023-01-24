import { memo, useEffect } from "react";
import { shallowEqual } from "react-redux";
import { useAppDispatch, useAppSelector } from "@/store/redux-hooks";

import { asyncFetchHomeDataAction } from "@/store/module/home";
import { HomeWrapper } from "./style";
import HomeBanner from "./c-cpns/home-banner";
import HomePersonalizedList from "./c-cpns/home-personalizedlist";

const Home = memo(() => {
    const { bannerList, personalizedList } = useAppSelector((state) => state.home, shallowEqual);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(asyncFetchHomeDataAction());
    }, [dispatch]);

    return (
        <HomeWrapper>
            <div className="page-content">
                <HomeBanner bannerList={bannerList} />
                <HomePersonalizedList personalizedList={personalizedList} />
            </div>
        </HomeWrapper>
    );
});

export default Home;
