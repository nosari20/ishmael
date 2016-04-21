import { OnChanges, OnInit, OnDestroy } from "angular2/core";
import { EventEmitter } from "angular2/src/facade/async";
import { MdRadioDispatcher } from "./radio_dispatcher";
export declare class MdRadioGroup implements OnChanges {
    change: EventEmitter<any>;
    value_: any;
    value: any;
    name_: string;
    radioDispatcher: MdRadioDispatcher;
    radios_: MdRadioButton[];
    activedescendant: any;
    disabled_: boolean;
    selectedRadioId: string;
    tabindex: number;
    constructor(tabindex: string, disabled: string, radioDispatcher: MdRadioDispatcher);
    getName(): string;
    disabled: boolean;
    ngOnChanges(_: any): void;
    private _setChildValue(value);
    updateValue(value: any, id: string): void;
    register(radio: MdRadioButton): void;
    unregister(radio: MdRadioButton): void;
    onKeydown(event: KeyboardEvent): void;
    getSelectedRadioIndex(): number;
    getChildByValue(value: any): MdRadioButton;
    stepSelectedRadio(step: any): void;
}
export declare class MdRadioButton implements OnInit, OnDestroy {
    checked: boolean;
    disabled_: boolean;
    id: string;
    name: string;
    value: any;
    radioGroup: MdRadioGroup;
    radioDispatcher: MdRadioDispatcher;
    tabindex: number;
    constructor(radioGroup: MdRadioGroup, id: string, value: string, checked: string, tabindex: string, radioDispatcher: MdRadioDispatcher);
    ngOnInit(): void;
    ngOnDestroy(): any;
    isDisabled(): boolean;
    disabled: any;
    select(event: Event): void;
    onKeydown(event: KeyboardEvent): void;
}
