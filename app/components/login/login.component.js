System.register(['angular2/core', "../input/input/input.component", "../button/button.component", "../../services/authentication/authentication.service"], function(exports_1, context_1) {
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
    var core_1, input_component_1, button_component_1, authentication_service_1;
    var MdLogin;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (input_component_1_1) {
                input_component_1 = input_component_1_1;
            },
            function (button_component_1_1) {
                button_component_1 = button_component_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            }],
        execute: function() {
            MdLogin = (function () {
                function MdLogin(_service) {
                    this._service = _service;
                    this.user = new authentication_service_1.User('', '');
                }
                MdLogin.prototype.validate = function () {
                    //this.eventEmitter.emit(this.user);//WITH LOGIN DATA
                    if (!this._service.login(this.user)) {
                        console.log('Failed to login');
                    }
                };
                MdLogin = __decorate([
                    core_1.Component({
                        selector: 'login',
                        templateUrl: 'app/components/login/template.html',
                        styleUrls: ['app/components/login/style.css'],
                        directives: [input_component_1.MdInput, button_component_1.Button, input_component_1.MdInputValueAccessor]
                    }), 
                    __metadata('design:paramtypes', [authentication_service_1.AuthenticationService])
                ], MdLogin);
                return MdLogin;
            }());
            exports_1("MdLogin", MdLogin);
        }
    }
});
//# sourceMappingURL=login.component.js.map