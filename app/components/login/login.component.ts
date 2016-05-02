import {Component, Output, EventEmitter} from 'angular2/core';
import {MdInput, MdInputValueAccessor} from "../input/input/input.component";
import {Button} from "../button/button.component";
import {User, AuthenticationService} from "../../services/authentication/authentication.service";



@Component({
    selector: 'login',
    templateUrl: 'app/components/login/template.html',
    styleUrls: ['app/components/login/style.css'],
    directives: [MdInput, Button,MdInputValueAccessor]
})

export class MdLogin {
    
    user=new User('','');


    constructor(
        private _service:AuthenticationService) {}


    validate(){
        //this.eventEmitter.emit(this.user);//WITH LOGIN DATA
        if(!this._service.login(this.user)){
            console.log('Failed to login');
        }

    }

}





