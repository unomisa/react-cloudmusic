import { User, Track, TrackId } from "@/types/common";

export interface SongListDetailState {
    playListDetail: PlayListDetail;
}

export type PlayListDetail = {
    id: number;
    name: string; // 歌单名
    coverImgUrl: string; // 歌单图片
    userId: number;
    highQuality: boolean; // 是否精选
    createTime: number; // 创建时间
    updateTime: number; // 最近更新时间
    trackCount: number; // 歌曲数量
    trackUpdateTime: number;
    commentThreadId: string;
    playCount: number; // 歌曲博放数量
    description: string; // 简介
    tags: string[]; // 标签
    creator: User; // 创建者
    tracks: Track[];
    trackIds: TrackId[];
    shareCount: number; // 分享数量
    commentCount: number; // 评论数量
    subscribedCount: number; // 收藏数量
    subscribed: boolean; // 用户是否收藏
};
