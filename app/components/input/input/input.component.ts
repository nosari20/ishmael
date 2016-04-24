import {Component, Input} from 'angular2/core';

@Component({
    selector: 'md-input',
    templateUrl: 'app/components/input/input/template.html',
    styleUrls: ['app/components/input/input/style.css']
})

export class MdInput {

    @Input() type: String;
    @Input() name: String;
    @Input() disabled:boolean;
}



