import {Component, Input} from 'angular2/core';
import {Router} from "angular2/router";

@Component({
    selector: 'header-item',
    templateUrl: 'app/components/header/link/template.html',
    styleUrls: ['app/components/header/link/style.css']
})

export class HeaderLink {

    @Input() _routeName: String;

    constructor(private _router: Router){}
}





