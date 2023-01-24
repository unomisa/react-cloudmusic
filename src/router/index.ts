import Home from "@/views/home";
import SongListDetail from "@/views/song-list-detail";

export interface IVueRoute {
    path: string;
    component: React.MemoExoticComponent<any>;
    redirect?: string;
    meta?: Record<string, string>;
    children?: IVueRoute[];
}

const vueRoutes: IVueRoute[] = [
    {
        path: "/",
        redirect: "/home",
        component: Home
    },
    {
        path: "/home",
        meta: {
            title: "首页"
        },
        component: Home
    },
    {
        path: "/songlistdetail/:id",
        meta: {
            title: "歌单详情"
        },
        component: SongListDetail
    }
];

export default vueRoutes;
