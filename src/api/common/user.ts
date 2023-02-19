import { request } from "@/services/index";

// * 用户信息相关

// 获取用户详情
export function getUserDetail(uid: string) {
    return request.get({
        url: "/user/detail",
        params: {
            uid
        }
    });
}

// 查看数量
export function getUserSubcount() {
    return request.get({
        url: "/user/subcount",
        params: {}
    });
}

// 获取用户喜欢的音乐的列表
export function getLikeList(id) {
    return request.get({
        url: "/likelist",
        params: {
            id
        }
    });
}

// 获取用户收藏歌手
export function getArtistSubList(limit, offset) {
    return request.get({
        url: "/artist/sublist",
        params: {
            limit,
            offset
        }
    });
}

// 获取用户收藏专辑
export function getAlbumSubList(limit, offset) {
    return request.get({
        url: "/album/sublist",
        params: {
            limit,
            offset
        }
    });
}

// 获取用户关注用户
export function getUserFollows(uid, limit, offset) {
    return request.get({
        url: "/user/follows",
        params: {
            uid,
            limit,
            offset
        }
    });
}

// 获取用户粉丝用户
export function getUserFolloweds(uid, limit, offset) {
    return request.get({
        url: "/user/followeds",
        params: {
            uid,
            limit,
            offset
        }
    });
}

// 查看用户歌单
export function getUserPlaylist(uid, limit, offset) {
    return request.get({
        url: "/user/playlist",
        params: {
            uid,
            limit,
            offset
        }
    });
}

// 喜欢音乐
export function likeSong(id: number | string, like: boolean) {
    return request.get({
        url: "/like",
        params: {
            id,
            like
        }
    });
}

// 收藏歌手
export function subArtist(id, t, timestamp) {
    return request.get({
        url: "/artist/sub",
        params: {
            id,
            t,
            timestamp: Date.now()
        }
    });
}

// 关注用户
export function followUser(id, t, timestamp) {
    return request.get({
        url: "/follow",
        params: {
            id,
            t,
            timestamp: Date.now()
        }
    });
}

// 收藏歌单
export function subPlaylist(id, t, timestamp = Date.now()) {
    return request.get({
        url: "/playlist/subscribe",
        params: {
            id,
            t,
            timestamp: Date.now()
        }
    });
}

// 收藏专辑
export function subAlbum(id, t) {
    return request.get({
        url: "/album/sub",
        params: {
            id,
            t,
            timestamp: Date.now()
        }
    });
}
