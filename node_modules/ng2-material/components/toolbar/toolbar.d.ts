import { AfterContentInit, OnChanges, OnDestroy, ElementRef } from "angular2/core";
export declare class MdToolbar implements AfterContentInit, OnChanges, OnDestroy {
    el: ElementRef;
    mdShrinkSpeed: number;
    mdScrollShrink: boolean;
    private _mdShrinkSpeed;
    private _debouncedContentScroll;
    private _debouncedUpdateHeight;
    private _content;
    private _toolbarHeight;
    private _cancelScrollShrink;
    private _previousScrollTop;
    private _currentY;
    private _mdScrollShrink;
    constructor(el: ElementRef);
    ngAfterContentInit(): any;
    ngOnChanges(changes: {}): any;
    ngOnDestroy(): any;
    disableScrollShrink(): void;
    updateToolbarHeight(): void;
    onContentScroll(e?: any): void;
}
