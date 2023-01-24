import { request } from "@/services/index";

// 获取歌单详情
export function getPlayListDetail(id: number | string, s?: number, timestamp = Date.now()) {
    return request.get({
        url: "/playlist/detail",
        params: {
            id,
            timestamp,
            s // 最近多少个收藏者信息
        }
    });
}
