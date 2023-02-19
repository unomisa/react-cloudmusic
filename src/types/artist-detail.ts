export interface ArtistDetailState {
    artistDetail: ArtistDetail;
}

export type ArtistDetail = {
    artist: Artist;
};

export type Artist = {
    id: number;
    cover: string;
    name: string;
    transNames: any[];
    alias: string[];
    identities: string[];
    identifyTag: string[];
    briefDesc: string;
    albumSize: number;
    musicSize: number;
    mvSize: number;
};
