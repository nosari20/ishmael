import { AfterContentInit, ElementRef, OnChanges } from "angular2/core";
import { EventEmitter } from "angular2/src/facade/async";
export declare class MdInput {
    _value: string;
    value: string;
    placeholder: string;
    mdChange: EventEmitter<any>;
    mdFocusChange: EventEmitter<any>;
    setHasFocus(hasFocus: boolean): void;
}
export declare class MdInputContainer implements AfterContentInit, OnChanges {
    private _element;
    _input: MdInput;
    inputHasValue: boolean;
    inputHasFocus: boolean;
    inputHasPlaceholder: boolean;
    constructor(_element: ElementRef);
    ngOnChanges(_: any): void;
    ngAfterContentInit(): void;
}
