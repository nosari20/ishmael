import { ElementRef, EventEmitter } from "angular2/core";
export declare class MdBackdrop {
    element: ElementRef;
    clickClose: boolean;
    hideScroll: boolean;
    onHiding: EventEmitter<MdBackdrop>;
    onHidden: EventEmitter<MdBackdrop>;
    onShowing: EventEmitter<MdBackdrop>;
    onShown: EventEmitter<MdBackdrop>;
    constructor(element: ElementRef);
    transitionClass: string;
    transitionAddClass: boolean;
    visible: boolean;
    private _visible;
    private _transitioning;
    private _previousOverflow;
    private _body;
    onClick(): void;
    hide(): Promise<any>;
    show(): Promise<any>;
    toggle(visible?: boolean): any;
}
