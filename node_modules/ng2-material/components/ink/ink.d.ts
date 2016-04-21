import { ElementRef, EventEmitter } from "angular2/core";
export declare class MdInk {
    private _element;
    inked: EventEmitter<MdInk>;
    constructor(_element: ElementRef);
    onMousedown(event: any): void;
}
