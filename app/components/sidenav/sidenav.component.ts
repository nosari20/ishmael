import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Button} from "../button/button.component";

@Component({
    selector: 'sidenav',
    templateUrl: 'app/components/sidenav/template.html',
    styleUrls: ['app/components/sidenav/style.css'],
    host:     {'[class.open]':'open'},
    directives:[Button]

})

export class Sidenav {

    @Input() open: boolean=false;
    @Output('toggleNav') toggleEvent = new EventEmitter();


    toggle(){
        this.toggleEvent.emit("event");
    }

}



