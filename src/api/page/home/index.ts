import { request } from "@/services/index";

// * 数据请求

// 顶部轮播图
export function getBanner() {
    return request.get({
        url: "/banner"
    });
}

// 获取新歌
export function getNewSongs(limit) {
    return request.get({
        url: "/personalized/newsong",
        params: {
            limit
        }
    });
}

// 获取推荐歌单
export function getPersonalizedList(limit?: number) {
    return request.get({
        url: "/personalized",
        params: {
            limit
        }
    });
}

// 获取热门歌手
export function getHotArtists(limit?: number, offset?: number) {
    return request.get({
        url: "/top/artists",
        params: {
            limit,
            offset
        }
    });
}
