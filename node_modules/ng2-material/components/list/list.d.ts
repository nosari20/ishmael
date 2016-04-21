import { ElementRef, AfterViewInit } from "angular2/core";
export declare class MdList {
}
export declare class MdListItem implements AfterViewInit {
    private _element;
    constructor(_element: ElementRef);
    ngAfterViewInit(): any;
    setupToggleAria(): void;
}
