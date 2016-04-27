import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {LayoutComponent} from "../components/layout/layout.component";
import {Header} from "../components/header/header.component";
import {Footer} from "../components/footer/footer.component";



import {Home} from "../content/home/home.component";
import {Contact} from "../content/contact/contact.component";
import {Videos} from "../content/videos/videos.component";
import {HeaderLink} from "../components/header/link/header-item.component";
import {Search} from "../components/header/search/search.component";
import {SidenavLink} from "../components/sidenav/link/header-item.component";
import {Login} from "../components/login/login.component";
import {Button} from "../components/button/button.component";





@Component({
    selector: 'my-app',
    directives: [LayoutComponent,Header,Footer,HeaderLink,Search,SidenavLink,Login,Button,ROUTER_DIRECTIVES],
    templateUrl: 'app/app/template.html',
    styleUrls: ['app/app/style.css'],

})

@RouteConfig([
    {path:'/', name: 'Home', component: Home},
    {path:'/contact', name: 'Contact', component: Contact},
    {path:'/videos', name: 'Video', component: Videos},


])
export class App{

    _showLogin:boolean=false;

    showLogin(event){
        this._showLogin=!this._showLogin;

        console.log(event)
    }

}


