/**
 * Created by ACH02 on 13/04/2016.
 */
import {Component} from 'angular2/core';
import {Card} from "../../components/card/card.component";
import {AuthenticationService, User} from "../../services/authentication/authentication.service";
import {MdInput, MdInputValueAccessor} from "../../components/input/input/input.component";
import {Button} from "../../components/button/button.component";





@Component({
    templateUrl: 'app/content/login/template.html',
    styleUrls: ['app/content/login/style.css'],
    directives: [Card, MdInput, Button,MdInputValueAccessor],
    host: {'class' : 'ng-animate page'}

})

export class Login {

    public user = new User('','');
    constructor(
        private _service:AuthenticationService){}

    ngOnInit(){
        //this._service.checkCredentials();
    }

    login() {
        if(!this._service.login(this.user)){
            console.log('Failed to login');
        }
    }
}



