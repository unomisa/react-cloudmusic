import { request } from "@/services/index";

// 获取专辑内容
export function getAlbum(id) {
    return request.get({
        url: "/album",
        params: {
            id,
            timestamp: Date.now()
        }
    });
}

export function getAlbumComment(id, limit, offset) {
    return request.get({
        url: "/comment/album",
        params: {
            id,
            limit,
            offset,
            timestamp: Date.now()
        }
    });
}

// 专辑动态信息,如是否收藏,收藏数,评论数,分享数
export function getAlbumDynamic(id) {
    return request.get({
        url: "/album/detail/dynamic",
        params: {
            id,
            timestamp: Date.now()
        }
    });
}
