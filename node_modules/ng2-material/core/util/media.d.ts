import { Subject } from "rxjs/Subject";
export declare const MEDIA: any;
export declare const MEDIA_PRIORITY: any;
export declare class MediaListener {
    query: string;
    private _mql;
    private _media;
    onMatched: Subject<MediaQueryList>;
    matches: boolean;
    private _destroyed;
    private _listener;
    constructor(query: string, _mql: MediaQueryList, _media: Media);
    destroy(): void;
}
export declare class Media {
    private _cache;
    listen(query: string): MediaListener;
    unregisterListener(listener: MediaListener): void;
    hasMedia(size: string): boolean;
    static hasMedia(size: string): boolean;
    static getQuery(size: string): string;
}
