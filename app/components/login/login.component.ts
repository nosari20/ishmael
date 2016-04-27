import {Component, Output, EventEmitter} from 'angular2/core';
import {MdInput, MdInputValueAccessor} from "../input/input/input.component";
import {Button} from "../button/button.component";



@Component({
    selector: 'login',
    templateUrl: 'app/components/login/template.html',
    styleUrls: ['app/components/login/style.css'],
    directives: [MdInput, Button,MdInputValueAccessor]
})

export class Login {

    @Output('closeLogin') eventEmitter = new EventEmitter();
    user=new User(0,'','','','');




    validate(){
        this.eventEmitter.emit(this.user);//WITH LOGIN DATA
    }

}


export class User {
    constructor(
        public id: number,
        public email: string,
        public password: string,
        public name: string,
        public firstName: string
    ) {  }
}



