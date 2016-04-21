"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var SidenavService = (function () {
    function SidenavService() {
        this._instances = [];
    }
    SidenavService.prototype.show = function (name) {
        var instance = this.find(name);
        if (!instance) {
            return Promise.reject('invalid container');
        }
        return instance.show();
    };
    SidenavService.prototype.hide = function (name) {
        var instance = this.find(name);
        if (!instance) {
            return Promise.reject('invalid container');
        }
        return instance.hide();
    };
    SidenavService.prototype.find = function (name) {
        return this._instances.filter(function (c) {
            return c.name === name;
        })[0] || null;
    };
    SidenavService.prototype.register = function (instance) {
        this._instances.push(instance);
    };
    SidenavService.prototype.unregister = function (instance) {
        this._instances = this._instances.filter(function (c) {
            return c.name !== instance.name;
        });
    };
    SidenavService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SidenavService);
    return SidenavService;
}());
exports.SidenavService = SidenavService;
//# sourceMappingURL=sidenav_service.js.map