export interface PreviewCard {
    id: number;
    name: string; // 卡片名称
    picUrl: string;
    playCount?: number; // 播放量
    trackCount?: number; // 数量
    highQuality?: boolean; // 是否高质量
}

export type PreviewType = "playList"; // 预览卡片类型
