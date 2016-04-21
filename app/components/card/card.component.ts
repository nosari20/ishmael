/**
 * Created by ACH02 on 14/04/2016.
 */
import {Component, Input} from 'angular2/core';


@Component({
    selector:'card',
    templateUrl: 'app/components/card/template.html',
    styleUrls: ['app/components/card/style.css'],

})

export class Card {

    @Input() className: String;
    @Input() title: String;

}

