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
var ink_1 = require("../../core/util/ink");
var MdInk = (function () {
    function MdInk(_element) {
        this._element = _element;
        this.inked = new core_1.EventEmitter(false);
    }
    MdInk.prototype.onMousedown = function (event) {
        var _this = this;
        if (this._element && ink_1.Ink.canApply(this._element.nativeElement)) {
            ink_1.Ink.rippleEvent(this._element.nativeElement, event).then(function () {
                _this.inked.emit(_this);
            });
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MdInk.prototype, "inked", void 0);
    MdInk = __decorate([
        core_1.Directive({
            selector: '[md-ink]',
            host: {
                '(mousedown)': 'onMousedown($event)'
            },
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MdInk);
    return MdInk;
}());
exports.MdInk = MdInk;
//# sourceMappingURL=ink.js.map