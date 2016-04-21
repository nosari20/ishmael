import { OnChanges } from "angular2/core";
export declare class ProgressMode {
    static DETERMINATE: string;
    static INDETERMINATE: string;
    static BUFFER: string;
    static QUERY: string;
}
export declare class MdProgressLinear implements OnChanges {
    static clamp(v: any): any;
    value_: number;
    bufferValue: number;
    mode: string;
    primaryBarTransform: string;
    secondaryBarTransform: string;
    constructor();
    value: number;
    ngOnChanges(_: any): void;
    transformForValue(value: any): string;
}
