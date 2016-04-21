import { ComponentRef } from "angular2/core";
export declare class MdDialogRef {
    containerRef: ComponentRef;
    _backdropRef: ComponentRef;
    _contentRef: ComponentRef;
    isClosed: boolean;
    whenClosedDeferred: any;
    contentRefDeferred: any;
    constructor();
    private _subscription;
    backdropRef: ComponentRef;
    contentRef: ComponentRef;
    instance: any;
    whenClosed: Promise<any>;
    close(result?: any): Promise<void>;
}
