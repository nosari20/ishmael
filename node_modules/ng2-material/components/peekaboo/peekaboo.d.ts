import { OnDestroy } from "angular2/core";
import { Media } from "../../core/util/media";
export declare class PeekabooAction {
    static SHOW: string;
    static HIDE: string;
}
export declare class MdPeekaboo implements OnDestroy {
    media: Media;
    static SIZES: string[];
    break: number;
    breakAction: string;
    static MakeNumber(value: any): number;
    private _active;
    active: boolean;
    scrollTop: number;
    private _breakXs;
    breakXs: number;
    private _breakSm;
    breakSm: number;
    private _breakMd;
    breakMd: number;
    private _breakLg;
    breakLg: number;
    private _breakXl;
    breakXl: number;
    private _breakpoint;
    breakpoint: string;
    private _mediaListeners;
    constructor(media: Media);
    ngOnDestroy(): any;
    private _watchMediaQuery(size);
    private _windowScroll;
    evaluate(): number;
}
