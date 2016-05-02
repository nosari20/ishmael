System.register(['angular2/core', 'angular2/router', "../components/layout/layout.component", "../components/header/header.component", "../components/footer/footer.component", "../content/home/home.component", "../components/header/link/header-item.component", "../components/header/search/search.component", "../components/sidenav/link/header-item.component", "../components/button/button.component", "../content/profile/profile.component", "../content/login/login.component", "../content/books/books.component", "../services/authentication/authentication.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, layout_component_1, header_component_1, footer_component_1, home_component_1, header_item_component_1, search_component_1, header_item_component_2, button_component_1, profile_component_1, login_component_1, books_component_1, authentication_service_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (layout_component_1_1) {
                layout_component_1 = layout_component_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (header_item_component_1_1) {
                header_item_component_1 = header_item_component_1_1;
            },
            function (search_component_1_1) {
                search_component_1 = search_component_1_1;
            },
            function (header_item_component_2_1) {
                header_item_component_2 = header_item_component_2_1;
            },
            function (button_component_1_1) {
                button_component_1 = button_component_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (books_component_1_1) {
                books_component_1 = books_component_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            }],
        execute: function() {
            App = (function () {
                function App(_service) {
                    this._service = _service;
                    this._showLogin = false;
                }
                App.prototype.logout = function () {
                    if (!this._service.logout()) {
                        console.log('Failed to login');
                    }
                };
                App = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [layout_component_1.LayoutComponent, header_component_1.Header, footer_component_1.Footer, header_item_component_1.HeaderLink, search_component_1.Search, header_item_component_2.SidenavLink, login_component_1.Login, button_component_1.Button, router_1.ROUTER_DIRECTIVES],
                        templateUrl: 'app/app/template.html',
                        styleUrls: ['app/app/style.css'],
                        providers: [authentication_service_1.AuthenticationService],
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Home', component: home_component_1.Home },
                        { path: '/books', name: 'Books', component: books_component_1.Books },
                        { path: '/profile', name: 'Profile', component: profile_component_1.Profile },
                        { path: '/login', name: 'Login', component: login_component_1.Login },
                    ]), 
                    __metadata('design:paramtypes', [authentication_service_1.AuthenticationService])
                ], App);
                return App;
            }());
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=app.component.js.map