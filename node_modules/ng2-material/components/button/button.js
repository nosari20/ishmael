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
var async_1 = require("angular2/src/facade/async");
var lang_1 = require("angular2/src/facade/lang");
var ink_1 = require("../../core/util/ink");
var BUTTON_TEMPLATE = "<span class=\"md-button-wrapper\"><ng-content></ng-content></span>";
var MdButton = (function () {
    function MdButton(_element) {
        this._element = _element;
        this.isMouseDown = false;
        this.isKeyboardFocused = false;
    }
    MdButton.prototype.onMousedown = function (event) {
        var _this = this;
        this.isMouseDown = true;
        async_1.TimerWrapper.setTimeout(function () {
            _this.isMouseDown = false;
        }, 100);
        if (this._element && ink_1.Ink.canApply(this._element.nativeElement)) {
            ink_1.Ink.rippleEvent(this._element.nativeElement, event);
        }
    };
    MdButton.prototype.onFocus = function () {
        this.isKeyboardFocused = !this.isMouseDown;
    };
    MdButton.prototype.onBlur = function () {
        this.isKeyboardFocused = false;
    };
    MdButton = __decorate([
        core_1.Component({
            selector: '[md-button]:not(a), [md-fab]:not(a), [md-raised-button]:not(a)',
            template: BUTTON_TEMPLATE,
            encapsulation: core_1.ViewEncapsulation.None,
            host: {
                '(mousedown)': 'onMousedown($event)',
                '(focus)': 'onFocus()',
                '(blur)': 'onBlur()',
                '[class.md-button-focus]': 'isKeyboardFocused',
            },
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MdButton);
    return MdButton;
}());
exports.MdButton = MdButton;
var MdAnchor = (function (_super) {
    __extends(MdAnchor, _super);
    function MdAnchor() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(MdAnchor.prototype, "disabled", {
        get: function () {
            return this.disabled_;
        },
        set: function (value) {
            this.disabled_ = lang_1.isPresent(value) && this.disabled !== false;
        },
        enumerable: true,
        configurable: true
    });
    MdAnchor.prototype.onClick = function (event) {
        if (this.disabled) {
            event.preventDefault();
        }
    };
    MdAnchor.prototype.ngOnChanges = function (_) {
        this.tabIndex = this.disabled ? -1 : 0;
    };
    Object.defineProperty(MdAnchor.prototype, "isAriaDisabled", {
        get: function () {
            return this.disabled ? 'true' : 'false';
        },
        enumerable: true,
        configurable: true
    });
    MdAnchor = __decorate([
        core_1.Component({
            selector: 'a[md-button], a[md-raised-button], a[md-fab]',
            inputs: ['disabled'],
            template: BUTTON_TEMPLATE,
            encapsulation: core_1.ViewEncapsulation.None,
            host: {
                '(click)': 'onClick($event)',
                '(mousedown)': 'onMousedown()',
                '(focus)': 'onFocus()',
                '(blur)': 'onBlur()',
                '[tabIndex]': 'tabIndex',
                '[class.md-button-focus]': 'isKeyboardFocused',
                '[attr.aria-disabled]': 'isAriaDisabled',
            },
        }), 
        __metadata('design:paramtypes', [])
    ], MdAnchor);
    return MdAnchor;
}(MdButton));
exports.MdAnchor = MdAnchor;
//# sourceMappingURL=button.js.map