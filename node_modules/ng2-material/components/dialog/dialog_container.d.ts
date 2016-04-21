import { ElementRef } from "angular2/core";
import { MdDialogRef } from "./dialog_ref";
export declare class MdDialogContainer {
    contentRef: ElementRef;
    dialogRef: MdDialogRef;
    constructor();
    wrapFocus(): void;
    documentKeypress(event: KeyboardEvent): void;
}
export declare class MdDialogContent {
    constructor(dialogContainer: MdDialogContainer, elementRef: ElementRef);
}
