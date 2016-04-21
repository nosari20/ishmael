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
var common_1 = require("angular2/common");
var async_1 = require("angular2/src/facade/async");
var lang_1 = require("angular2/src/facade/lang");
var dom_adapter_1 = require("angular2/src/platform/dom/dom_adapter");
var MdInput = (function () {
    function MdInput() {
        this.mdChange = new async_1.EventEmitter();
        this.mdFocusChange = new async_1.EventEmitter(false);
    }
    Object.defineProperty(MdInput.prototype, "value", {
        get: function () {
            return !lang_1.isBlank(this._value) ? this._value : '';
        },
        set: function (value) {
            this._value = value;
            async_1.ObservableWrapper.callEmit(this.mdChange, this.value);
        },
        enumerable: true,
        configurable: true
    });
    MdInput.prototype.setHasFocus = function (hasFocus) {
        async_1.ObservableWrapper.callEmit(this.mdFocusChange, hasFocus);
    };
    __decorate([
        core_1.Input('value'), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], MdInput.prototype, "value", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdInput.prototype, "placeholder", void 0);
    __decorate([
        core_1.Output('valueChange'), 
        __metadata('design:type', async_1.EventEmitter)
    ], MdInput.prototype, "mdChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', async_1.EventEmitter)
    ], MdInput.prototype, "mdFocusChange", void 0);
    MdInput = __decorate([
        core_1.Directive({
            selector: 'input[md-input],input.md-input,textarea[md-input],textarea.md-input',
            host: {
                'class': 'md-input',
                '[value]': 'value',
                '(input)': 'value=$event.target.value',
                '(focus)': 'setHasFocus(true)',
                '(blur)': 'setHasFocus(false)'
            },
            providers: [common_1.FORM_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [])
    ], MdInput);
    return MdInput;
}());
exports.MdInput = MdInput;
var MdInputContainer = (function () {
    function MdInputContainer(_element) {
        this._element = _element;
        this._input = null;
        this.inputHasValue = false;
        this.inputHasFocus = false;
        this.inputHasPlaceholder = false;
    }
    MdInputContainer.prototype.ngOnChanges = function (_) {
        this.inputHasValue = this._input.value !== '';
        this.inputHasPlaceholder = !!dom_adapter_1.DOM.querySelector(this._element.nativeElement, 'label') && !!this._input.placeholder;
    };
    MdInputContainer.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this._input === null) {
            return;
        }
        async_1.TimerWrapper.setTimeout(function () { return _this.ngOnChanges({}); }, 0);
        async_1.ObservableWrapper.subscribe(this._input.mdChange, function (value) {
            _this.inputHasValue = value !== '';
        });
        async_1.ObservableWrapper.subscribe(this._input.mdFocusChange, function (hasFocus) {
            _this.inputHasFocus = hasFocus;
        });
    };
    __decorate([
        core_1.ContentChild(MdInput), 
        __metadata('design:type', MdInput)
    ], MdInputContainer.prototype, "_input", void 0);
    MdInputContainer = __decorate([
        core_1.Component({
            selector: 'md-input-container',
            template: "<ng-content></ng-content><div class=\"md-errors-spacer\"></div>",
            host: {
                '[class.md-input-has-value]': 'inputHasValue',
                '[class.md-input-has-placeholder]': 'inputHasPlaceholder',
                '[class.md-input-focused]': 'inputHasFocus',
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MdInputContainer);
    return MdInputContainer;
}());
exports.MdInputContainer = MdInputContainer;
//# sourceMappingURL=input.js.map