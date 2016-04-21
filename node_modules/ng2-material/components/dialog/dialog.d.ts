import { ComponentRef, DynamicComponentLoader, ElementRef, ResolvedProvider, RootRenderer } from "angular2/core";
import { Type } from "angular2/src/facade/lang";
import { MdDialogRef } from "./dialog_ref";
import { MdDialogConfig } from "./dialog_config";
export * from './dialog_config';
export * from './dialog_container';
export * from './dialog_ref';
export * from './dialog_basic';
export declare class MdDialog {
    componentLoader: DynamicComponentLoader;
    static _uniqueId: number;
    private _renderer;
    constructor(componentLoader: DynamicComponentLoader, rootRenderer: RootRenderer);
    private _defaultContainer;
    open(type: Type, elementRef: ElementRef, options?: MdDialogConfig): Promise<MdDialogRef>;
    _openBackdrop(elementRef: ElementRef, bindings: ResolvedProvider[], options: MdDialogConfig): Promise<ComponentRef>;
    alert(message: string, okMessage: string): Promise<any>;
    confirm(message: string, okMessage: string, cancelMessage: string): Promise<any>;
}
