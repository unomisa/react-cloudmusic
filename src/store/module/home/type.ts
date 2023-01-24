import { Banner, playlist } from "@/api/page/home/type";

export interface HomeState {
    bannerList: Banner[];
    personalizedList: playlist[];
}
