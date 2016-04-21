export declare class MdDialogConfig {
    width: string;
    height: string;
    container: HTMLElement;
    sourceEvent: Event;
    clickClose: boolean;
    context: any;
    parent(element: HTMLElement): MdDialogConfig;
    clickOutsideToClose(enabled: boolean): MdDialogConfig;
    title(text: string): MdDialogConfig;
    textContent(text: string): MdDialogConfig;
    ariaLabel(text: string): MdDialogConfig;
    ok(text: string): MdDialogConfig;
    cancel(text: string): MdDialogConfig;
    targetEvent(ev: Event): MdDialogConfig;
}
