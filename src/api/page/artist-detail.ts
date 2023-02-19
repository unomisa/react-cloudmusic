import { request } from "@/services/index";
import { ArtistDetail } from "@/types/artist-detail";

// 获取歌手详情
export function getArtistDetail(id: string | number) {
    return request.get<ArtistDetail>({
        url: "/artist/detail",
        params: {
            id,
            timestamp: Date.now()
        }
    });
}

// 获取歌手单曲
export function getArtistHotSongs(id) {
    return request.get({
        url: "/artists",
        params: {
            id
        }
    });
}

// 获取歌手专辑信息
export function getArtistAlbum(id: string | number, limit?: number, offset?: number) {
    return request.get({
        url: "/artist/album",
        params: {
            id,
            limit,
            offset
        }
    });
}

// 获取歌手描述
export function getArtistDesc(id) {
    return request.get({
        url: "/artist/desc",
        params: {
            id
        }
    });
}

// 获取相似歌手
export function getSimiArtist(id) {
    return request.get({
        url: "/simi/artist",
        params: {
            id
        }
    });
}
