/**
 * Created by ACH02 on 13/04/2016.
 */
import {Component} from 'angular2/core';
import {Card} from "../../components/card/card.component";
import {AuthenticationService} from "../../services/authentication/authentication.service";





@Component({
    templateUrl: 'app/content/profile/template.html',
    styleUrls: ['app/content/profile/style.css'],
    directives: [Card],
    host: {'class' : 'ng-animate page'},
    providers: [AuthenticationService],

})

export class Profile {

    constructor(
        private _service:AuthenticationService){}

    ngOnInit(){
        this._service.checkCredentials();
    }
}



