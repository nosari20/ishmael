"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var checkbox_1 = require("../checkbox/checkbox");
var MdSwitch = (function (_super) {
    __extends(MdSwitch, _super);
    function MdSwitch() {
        _super.apply(this, arguments);
    }
    MdSwitch = __decorate([
        core_1.Component({
            selector: 'md-switch',
            inputs: ['checked', 'disabled'],
            host: {
                'role': 'checkbox',
                '[attr.aria-checked]': 'checked',
                '[attr.aria-disabled]': 'disabled_',
                '(keydown)': 'onKeydown($event)',
                '(click)': 'toggle($event)'
            },
            template: "\n    <div class=\"md-switch-container\">\n      <div class=\"md-switch-bar\"></div>\n      <div class=\"md-switch-thumb-container\">\n        <div class=\"md-switch-thumb\"></div>\n      </div>\n    </div>\n    <div class=\"md-switch-label\">\n      <ng-content></ng-content>\n    </div>",
            directives: [],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], MdSwitch);
    return MdSwitch;
}(checkbox_1.MdCheckbox));
exports.MdSwitch = MdSwitch;
//# sourceMappingURL=switch.js.map