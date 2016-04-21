System.register(['angular2/core', 'angular2/router', "../components/layout/layout.component", "../components/header/header.component", "../components/footer/footer.component", "../content/home/home.component", "../content/contact/contact.component", "../content/videos/videos.component", "../components/header/link/header-item.component", "../components/header/search/search.component", "../components/sidenav/link/header-item.component"], function(exports_1, context_1) {
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
    var core_1, router_1, layout_component_1, header_component_1, footer_component_1, home_component_1, contact_component_1, videos_component_1, header_item_component_1, search_component_1, header_item_component_2;
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
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (videos_component_1_1) {
                videos_component_1 = videos_component_1_1;
            },
            function (header_item_component_1_1) {
                header_item_component_1 = header_item_component_1_1;
            },
            function (search_component_1_1) {
                search_component_1 = search_component_1_1;
            },
            function (header_item_component_2_1) {
                header_item_component_2 = header_item_component_2_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                }
                App = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [layout_component_1.LayoutComponent, header_component_1.Header, footer_component_1.Footer, header_item_component_1.HeaderLink, search_component_1.Search, header_item_component_2.SidenavLink, router_1.ROUTER_DIRECTIVES],
                        templateUrl: 'app/app/template.html',
                        styleUrls: ['app/app/style.css'],
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Home', component: home_component_1.Home },
                        { path: '/contact', name: 'Contact', component: contact_component_1.Contact },
                        { path: '/videos', name: 'Video', component: videos_component_1.Videos },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=app.component.js.map