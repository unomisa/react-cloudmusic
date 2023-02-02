// 认证信息
export type Identify = {
    imageUrl: string;
    imageDesc: string;
    actionUrl?: any;
};

export type AvatarDetail = {
    userType?: any;
    identityLevel: number;
    identityIconUrl: string;
};

export type AllAuthType = {
    type: number;
    desc: string;
    tags: string[];
};

export type MainAuthType = {
    type: number;
    desc: string;
    tags: string[];
};

export type Profile = {
    avatarDetail: AvatarDetail;
    authStatus: number;
    detailDescription: string;
    mutual: boolean;
    remarkName?: any;
    userType: number;
    birthday: number;
    createTime: number;
    nickname: string;
    defaultAvatar: boolean;
    djStatus: number;
    avatarUrl: string;
    backgroundImgId: number;
    backgroundUrl: string;
    avatarImgId: number;
    province: number;
    city: number;
    gender: number;
    followed: boolean;
    vipType: number;
    accountStatus: number;
    description: string;
    userId: number;
    signature: string;
    authority: number;
    allAuthTypes: AllAuthType[];
    followeds: number;
    follows: number;
    blacklist: boolean;
    artistId: number;
    eventCount: number;
    allSubscribedCount: number;
    playlistBeSubscribedCount: number;
    mainAuthType: MainAuthType;
    avatarImgId_str: string;
    followTime?: any;
    followMe: boolean;
    cCount: number;
    inBlacklist: boolean;
    sDJPCount: number;
    artistName: string;
    playlistCount: number;
    sCount: number;
    newFollows: number;
};

export type User = {
    identify?: Identify;
    level: number;
    listenSongs: number;
    profile: Profile;
};
