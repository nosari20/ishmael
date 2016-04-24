/**
 * Created by ACH02 on 13/04/2016.
 */
import {Component} from 'angular2/core';
import {Card} from "../../components/card/card.component";
import {Button} from "../../components/button/button.component";
import {MdInput} from "../../components/input/input/input.component";
import {Checkbox} from "../../components/input/checkbox/checkbox.component";
import {Switch} from "../../components/input/switch/switch.component";
import {File} from "../../components/input/file/file.component";



@Component({
    selector:'home',
    templateUrl: 'app/content/home/template.html',
    styleUrls: ['app/content/home/style.css'],
    directives: [Card,Button, MdInput,Checkbox,Switch,File],
    host: {'class' : 'ng-animate page'}

})

export class Home {

}



