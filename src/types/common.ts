import { User } from "./user";

export interface CommonState {
    isLogin: boolean;
    user: User;
    playSong: TrackDetail;
    playSongUrl: string;
    playList: TrackDetail[];
    showPlayBar: boolean;
}

// 头像详情
export type AvatarDetail = {
    userType: number;
    identityLevel: number;
    identityIconUrl: string;
};

// 创建者
export type Creator = {
    defaultAvatar: boolean;
    province: number;
    authStatus: number;
    followed: boolean;
    avatarUrl: string;
    accountStatus: number;
    gender: number;
    city: number;
    birthday: number;
    userId: number;
    userType: number;
    nickname: string;
    signature: string;
    description: string;
    detailDescription: string;
    avatarImgId: number;
    backgroundImgId: number;
    backgroundUrl: string;
    authority: number;
    mutual: boolean;
    expertTags?: any;
    experts?: any;
    djStatus: number;
    vipType: number;
    remarkName?: any;
    authenticationTypes: number;
    avatarDetail: AvatarDetail;
    avatarImgIdStr: string;
    backgroundImgIdStr: string;
    anchor: boolean;
    avatarImgId_str: string;
};

// 歌曲id
export type TrackId = {
    id: number;
    v: number;
    t: number;
    at: number;
    alg?: any;
    uid: number;
    rcmdReason: string;
    sc?: any;
    f?: any;
    sr?: any;
};

// 歌曲url
export type TrackUrl = {
    id: number;
    /** m8.music.126.net/20230205182744/a0643b7140d2b7177e55f3e925a9f71d/ymusic/5a7c/c70e/984e/99286773f79bff18aea0513b12d455b8.mp3", */
    url: string;
    br: number;
    size: number;
    md5: string;
    code: number;
    expi: number;
    type: string;
    gain: number;
    peak: number;
    fee: number;
    uf?: any;
    payed: number;
    flag: number;
    canExtend: boolean;
    freeTrialInfo?: any;
    level: string;
    encodeType: string;
    urlSource: number;
    rightSource: number;
    podcastCtrp?: any;
    effectTypes?: any;
    time: number;
};

// 歌手列表
export type Ar = {
    id: number;
    name: string;
    tns: any[];
    alias: any[];
};

// 专辑简要信息
export type Al = {
    id: number;
    name: string;
    picUrl: string;
    tns: any[];
    pic_str: string;
    pic: number;
};

// 歌曲详情
export interface TrackDetail {
    name: string;
    id: number;
    pst: number;
    t: number;
    ar: Ar[];
    alia?: any[];
    pop: number;
    st: number;
    rt: string;
    fee: number;
    v: number;
    crbt?: any;
    cf: string;
    al: Al;
    dt: number;
    sq?: any;
    hr?: any;
    a?: any;
    cd: string;
    no: number;
    rtUrl?: any;
    ftype: number;
    rtUrls: any[];
    djId: number;
    copyright: number;
    s_id: number;
    mark: number;
    originCoverType: number;
    originSongSimpleData?: any;
    tagPicList?: any;
    resourceState: boolean;
    version: number;
    songJumpInfo?: any;
    entertainmentTags?: any;
    awardTags?: any;
    single: number;
    noCopyrightRcmd?: any;
    mst: number;
    cp: number;
    mv: number;
    rtype: number;
    rurl?: any;
    publishTime: number;
}

export interface Song extends TrackDetail {
    url: string;
}
