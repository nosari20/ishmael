import {Component} from 'angular2/core';
import {Button} from "../button/button.component";

@Component({
    selector: 'snackbar',
    templateUrl: 'app/components/snackbar/template.html',
    styleUrls: ['app/components/snackbar/style.css'],
    host:     {'[class.closed]':'closed'},
    directives:[Button]
})

export class Snackbar {

    closed:boolean=false;

    

    close(){
        this.closed=true;
        //AJAX
    }


}



