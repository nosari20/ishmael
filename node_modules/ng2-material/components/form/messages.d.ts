import { NgFormModel, NgControlName } from "angular2/common";
import { OnDestroy, OnInit, QueryList } from "angular2/core";
export declare class MdMessage {
    errorKey: string;
    okay: boolean;
}
export declare class MdMessages implements OnInit, OnDestroy {
    messages: QueryList<MdMessage>;
    form: NgFormModel;
    property: string | NgControlName;
    valid: boolean;
    isTouched: boolean;
    constructor(messages: QueryList<MdMessage>, form: NgFormModel);
    private _unsubscribe;
    ngOnInit(): void;
    ngOnDestroy(): any;
    private _valueChanged();
}
