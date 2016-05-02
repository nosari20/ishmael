/**
 * Created by ACH02 on 13/04/2016.
 */
import {Component} from 'angular2/core';
import {Card} from "../../components/card/card.component";
import {Fab} from "../../components/fab/fab.component.component";
import {Button} from "../../components/button/button.component";
import {Book} from "../../components/book/book.component";





@Component({
    templateUrl: 'app/content/books/template.html',
    styleUrls: ['app/content/books/style.css'],
    directives: [Card,Fab,Button,Book],
    host: {'class' : 'ng-animate page'}

})

export class Books {

}



