System.register(['angular2/core', "../input/input/input.component", "../button/button.component"], function(exports_1, context_1) {
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
    var core_1, input_component_1, button_component_1;
    var Login, User;
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
            }],
        execute: function() {
            Login = (function () {
                function Login() {
                    this.eventEmitter = new core_1.EventEmitter();
                    this.user = new User(0, '', '', '', '');
                }
                Login.prototype.validate = function () {
                    this.eventEmitter.emit(this.user); //WITH LOGIN DATA
                };
                __decorate([
                    core_1.Output('closeLogin'), 
                    __metadata('design:type', Object)
                ], Login.prototype, "eventEmitter", void 0);
                Login = __decorate([
                    core_1.Component({
                        selector: 'login',
                        templateUrl: 'app/components/login/template.html',
                        styleUrls: ['app/components/login/style.css'],
                        directives: [input_component_1.MdInput, button_component_1.Button, input_component_1.MdInputValueAccessor]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Login);
                return Login;
            }());
            exports_1("Login", Login);
            User = (function () {
                function User(id, email, password, name, firstName) {
                    this.id = id;
                    this.email = email;
                    this.password = password;
                    this.name = name;
                    this.firstName = firstName;
                }
                return User;
            }());
            exports_1("User", User);
        }
    }
});
//# sourceMappingURL=login.component.js.map