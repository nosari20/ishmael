import {Component, Input} from 'angular2/core';

@Component({
    selector: 'md-checkbox',
    templateUrl: 'app/components/input/checkbox/template.html',
    styleUrls: ['app/components/input/checkbox/style.css']
})

export class Checkbox {
    
    @Input() name: String;
}



