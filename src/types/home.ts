export interface HomeState {
    bannerList: Banner[];
    personalizedList: playlist[];
}

export type Banner = {
    imageUrl: string;
    targetId: number;
    adid?: any;
    targetType: number;
    titleColor: string;
    typeTitle: string;
    url?: any;
    exclusive: boolean;
    monitorImpress?: any;
    monitorClick?: any;
    monitorType?: any;
    monitorImpressList?: any;
    monitorClickList?: any;
    monitorBlackList?: any;
    extMonitor?: any;
    extMonitorInfo?: any;
    adSource?: any;
    adLocation?: any;
    adDispatchJson?: any;
    encodeId: string;
    program?: any;
    event?: any;
    video?: any;
    song?: any;
    scm: string;
    bannerBizType: string;
};

// 歌单卡片
export type playlist = {
    id: number;
    type: number;
    name: string;
    copywriter: string;
    picUrl: string;
    canDislike: boolean;
    trackNumberUpdateTime: number;
    playCount: number;
    trackCount: number;
    highQuality: boolean;
    alg: string;
};
