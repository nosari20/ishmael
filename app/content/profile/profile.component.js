System.register(['angular2/core', "../../components/card/card.component", "../../services/authentication/authentication.service"], function(exports_1, context_1) {
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
    var core_1, card_component_1, authentication_service_1;
    var Profile;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (card_component_1_1) {
                card_component_1 = card_component_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            }],
        execute: function() {
            Profile = (function () {
                function Profile(_service) {
                    this._service = _service;
                }
                Profile.prototype.ngOnInit = function () {
                    this._service.checkCredentials();
                };
                Profile = __decorate([
                    core_1.Component({
                        templateUrl: 'app/content/profile/template.html',
                        styleUrls: ['app/content/profile/style.css'],
                        directives: [card_component_1.Card],
                        host: { 'class': 'ng-animate page' },
                        providers: [authentication_service_1.AuthenticationService],
                    }), 
                    __metadata('design:paramtypes', [authentication_service_1.AuthenticationService])
                ], Profile);
                return Profile;
            }());
            exports_1("Profile", Profile);
        }
    }
});
//# sourceMappingURL=profile.component.js.map