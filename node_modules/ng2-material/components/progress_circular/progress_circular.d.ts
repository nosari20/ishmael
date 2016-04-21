import { MdProgressLinear } from "../progress_linear/progress_linear";
export declare class MdProgressCircular extends MdProgressLinear {
    diameter_: string;
    mode: string;
    diameterTransformation: string;
    outerSize: string;
    gapTransition: string;
    defaultHalfTransition: string;
    leftHalfTransform: string;
    rightHalfTransform: string;
    diameter: string;
    ngOnInit(): void;
    ngOnChanges(_: any): void;
    transformLeftHalf(value: any): void;
    transformRightHalf(value: any): void;
    updateScale(): void;
    getDiameterRatio(): number;
    webkit(style: string): string;
}
