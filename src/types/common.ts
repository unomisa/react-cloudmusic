export interface CommonState {
    isLogin: boolean;
}

// 头像详情
export type AvatarDetail = {
    userType: number;
    identityLevel: number;
    identityIconUrl: string;
};

// 创建者
export type User = {
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
    /** p1.music.126.net/6WOd8M2uPlfuu9TCiBCSMw==/109951163521987363.jpg", */
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

// 歌曲详情
export type Track = {
    name: string;
    id: number;
    pst: number;
    t: number;
    alia?: any[];
    pop: number;
    st: number;
    rt: string;
    fee: number;
    v: number;
    crbt?: any;
    cf: string;
    dt: number;
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
    single: number;
    noCopyrightRcmd?: any;
    cp: number;
    mv: number;
    mst: number;
    rtype: number;
    rurl?: any;
    publishTime: number;
};

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
