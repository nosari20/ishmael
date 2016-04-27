import {Component, Input, Output, EventEmitter, Directive, forwardRef, Provider} from 'angular2/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "angular2/common";

@Component({
    selector: 'md-input',
    templateUrl: 'app/components/input/input/template.html',
    styleUrls: ['app/components/input/input/style.css']
})

export class MdInput {

    @Input() type: String;
    @Input() name: String;
    @Input() disabled:boolean;

    @Input() data: any;
    @Output() dataChange: any = new EventEmitter();




    //for ngModel
    writeValue(value:string[]) {
        this.data = value;
    }
    changeValue(value: any){
        this.dataChange.emit(this.data)
    }




}





//for ngModel

const CUSTOM_VALUE_ACCESSOR = new Provider(
    NG_VALUE_ACCESSOR, {useExisting: forwardRef(() => MdInputValueAccessor), multi: true});

@Directive({
    selector: 'md-input',
    host: {'(dataChange)': 'onChange($event)'},
    providers: [CUSTOM_VALUE_ACCESSOR]
})
export class MdInputValueAccessor implements ControlValueAccessor {
    onChange = (_) => {};
    onTouched = () => {};

    constructor(private host: MdInput) {

    }

    writeValue(value: any): void {
        this.host.writeValue(value);
    }


    registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
    registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}



