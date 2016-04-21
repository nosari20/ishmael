import { EventEmitter } from "angular2/core";
export declare class MdCheckbox {
    checkedChange: EventEmitter<boolean>;
    checked: boolean;
    disabled_: boolean;
    private _tabindex;
    tabindex: number;
    disabled: boolean;
    onKeydown(event: KeyboardEvent): void;
    toggle(event: any): void;
}
