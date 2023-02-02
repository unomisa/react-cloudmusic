export interface LoginState {
    isShowLogin: boolean;
    tabActiveKey: string;
    qrCode: QRCode;
}

export type QRCode = {
    key: string;
    base64Img: string;
    statusCode: number;
};
