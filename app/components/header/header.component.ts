import {Component} from 'angular2/core';
import {Router}              from 'angular2/router';
import {Sidenav} from "../sidenav/sidenav.component";


@Component({
    selector: 'header',
    templateUrl:'app/components/header/header.html',
    styleUrls: ['app/components/header/style.css'],
    directives: [Sidenav]
})

export class Header{

    public scroll:Number=0;
    public nav:boolean=false;
    public status:String='closed';

    constructor(private _router: Router){

    }

    toggleNav(){
        this.nav=!this.nav;
    }



    toggleSearch(){
        if(this.status=='closed'){
            this.status='opened';
        }else{
            this.status='closed';
        }


    }



}



