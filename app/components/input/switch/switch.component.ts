import {Component, Input} from 'angular2/core';

@Component({
    selector: 'md-switch',
    templateUrl: 'app/components/input/switch/template.html',
    styleUrls: ['app/components/input/switch/style.css']
})

export class Switch {

    @Input() name: String;
}



