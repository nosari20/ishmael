/**
 * Created by ACH02 on 13/04/2016.
 */
import {Component} from 'angular2/core';
import {Card} from "../../components/card/card.component";
import {Button} from "../../components/button/button.component";



@Component({
    selector:'home',
    templateUrl: 'app/content/home/template.html',
    styleUrls: ['app/content/home/style.css'],
    directives: [Card,Button],
    host: {'class' : 'ng-animate page'}

})

export class Home {

}



