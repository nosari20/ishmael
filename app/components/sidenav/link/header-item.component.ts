import {Component, Input} from 'angular2/core';
import {Router} from "angular2/router";

@Component({
    selector: 'sidenav-link',
    templateUrl: 'app/components/sidenav/link/template.html',
    styleUrls: ['app/components/sidenav/link/style.css'],
    host:     {'[class.active]':'open'},
})

export class SidenavLink {

    @Input() _routeName: String;

    constructor(private _router: Router){}
}





