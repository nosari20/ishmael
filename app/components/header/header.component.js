System.register(['angular2/core', 'angular2/router', "../sidenav/sidenav.component"], function(exports_1, context_1) {
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
    var core_1, router_1, sidenav_component_1;
    var Header;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (sidenav_component_1_1) {
                sidenav_component_1 = sidenav_component_1_1;
            }],
        execute: function() {
            Header = (function () {
                function Header(_router) {
                    this._router = _router;
                    this.scroll = 0;
                    this.nav = false;
                    this.status = 'closed';
                }
                Header.prototype.toggleNav = function () {
                    this.nav = !this.nav;
                };
                Header.prototype.toggleSearch = function () {
                    if (this.status == 'closed') {
                        this.status = 'opened';
                    }
                    else {
                        this.status = 'closed';
                    }
                };
                Header = __decorate([
                    core_1.Component({
                        selector: 'header',
                        templateUrl: 'app/components/header/header.html',
                        styleUrls: ['app/components/header/style.css'],
                        directives: [sidenav_component_1.Sidenav]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], Header);
                return Header;
            }());
            exports_1("Header", Header);
        }
    }
});
//# sourceMappingURL=header.component.js.map