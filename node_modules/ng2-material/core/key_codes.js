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
var lang_1 = require("angular2/src/facade/lang");
var KeyCodes = (function () {
    function KeyCodes() {
    }
    KeyCodes.ESCAPE = 27;
    KeyCodes.SPACE = 32;
    KeyCodes.UP = 38;
    KeyCodes.DOWN = 40;
    __decorate([
        lang_1.CONST(), 
        __metadata('design:type', Object)
    ], KeyCodes, "ESCAPE", void 0);
    __decorate([
        lang_1.CONST(), 
        __metadata('design:type', Object)
    ], KeyCodes, "SPACE", void 0);
    __decorate([
        lang_1.CONST(), 
        __metadata('design:type', Object)
    ], KeyCodes, "UP", void 0);
    __decorate([
        lang_1.CONST(), 
        __metadata('design:type', Object)
    ], KeyCodes, "DOWN", void 0);
    KeyCodes = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [])
    ], KeyCodes);
    return KeyCodes;
}());
exports.KeyCodes = KeyCodes;
//# sourceMappingURL=key_codes.js.map