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
var lang_1 = require("angular2/src/facade/lang");
var key_codes_1 = require("../../core/key_codes");
var util_1 = require("../../core/util/util");
var MdCheckbox = (function () {
    function MdCheckbox() {
        this.checkedChange = new core_1.EventEmitter(false);
        this.checked = false;
        this.disabled_ = false;
    }
    Object.defineProperty(MdCheckbox.prototype, "tabindex", {
        get: function () {
            return this._tabindex;
        },
        set: function (value) {
            this._tabindex = util_1.parseTabIndexAttribute(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdCheckbox.prototype, "disabled", {
        get: function () {
            return this.disabled_;
        },
        set: function (value) {
            this.disabled_ = lang_1.isPresent(value) && value !== false;
        },
        enumerable: true,
        configurable: true
    });
    MdCheckbox.prototype.onKeydown = function (event) {
        if (event.keyCode === key_codes_1.KeyCodes.SPACE) {
            event.preventDefault();
            this.toggle(event);
        }
    };
    MdCheckbox.prototype.toggle = function (event) {
        if (this.disabled) {
            event.stopPropagation();
            return;
        }
        this.checked = !this.checked;
        this.checkedChange.emit(this.checked);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MdCheckbox.prototype, "checkedChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdCheckbox.prototype, "checked", void 0);
    __decorate([
        core_1.Input('disabled'), 
        __metadata('design:type', Boolean)
    ], MdCheckbox.prototype, "disabled_", void 0);
    __decorate([
        core_1.Input('tabindex'), 
        __metadata('design:type', Number)
    ], MdCheckbox.prototype, "_tabindex", void 0);
    MdCheckbox = __decorate([
        core_1.Component({
            selector: 'md-checkbox',
            inputs: ['checked', 'disabled'],
            template: "\n    <div class=\"md-checkbox-container\">\n      <div class=\"md-checkbox-icon\"></div>\n    </div>\n    <div class=\"md-checkbox-label\"><ng-content></ng-content></div>",
            directives: [],
            encapsulation: core_1.ViewEncapsulation.None,
            host: {
                'role': 'checkbox',
                '[attr.aria-checked]': 'checked',
                '[attr.aria-disabled]': 'disabled',
                '[tabindex]': 'tabindex',
                '(keydown)': 'onKeydown($event)',
                '(click)': 'toggle($event)'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], MdCheckbox);
    return MdCheckbox;
}());
exports.MdCheckbox = MdCheckbox;
//# sourceMappingURL=checkbox.js.map