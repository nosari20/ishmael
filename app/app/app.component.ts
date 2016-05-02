import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {LayoutComponent} from "../components/layout/layout.component";
import {Header} from "../components/header/header.component";
import {Footer} from "../components/footer/footer.component";



import {Home} from "../content/home/home.component";
import {HeaderLink} from "../components/header/link/header-item.component";
import {Search} from "../components/header/search/search.component";
import {SidenavLink} from "../components/sidenav/link/header-item.component";
import {Button} from "../components/button/button.component";
import {Profile} from "../content/profile/profile.component";
import {Login} from "../content/login/login.component";
import {Books} from "../content/books/books.component";
import {AuthenticationService} from "../services/authentication/authentication.service";





@Component({
    selector: 'my-app',
    directives: [LayoutComponent,Header,Footer,HeaderLink,Search,SidenavLink,Login,Button,ROUTER_DIRECTIVES],
    templateUrl: 'app/app/template.html',
    styleUrls: ['app/app/style.css'],
    providers: [AuthenticationService],

})

@RouteConfig([
    {path:'/', name: 'Home', component: Home},
    {path:'/books', name: 'Books', component: Books},
    {path:'/profile', name: 'Profile', component: Profile},
    {path:'/login', name: 'Login', component: Login},


])
export class App{

    _showLogin:boolean=false;

    constructor(
        private _service:AuthenticationService){}



    logout() {
        if(!this._service.logout()){
            console.log('Failed to login');
        }
    }



}


