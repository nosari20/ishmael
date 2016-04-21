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
var math_1 = require("angular2/src/facade/math");
var ProgressMode = (function () {
    function ProgressMode() {
    }
    ProgressMode.DETERMINATE = 'determinate';
    ProgressMode.INDETERMINATE = 'indeterminate';
    ProgressMode.BUFFER = 'buffer';
    ProgressMode.QUERY = 'query';
    __decorate([
        lang_1.CONST(), 
        __metadata('design:type', Object)
    ], ProgressMode, "DETERMINATE", void 0);
    __decorate([
        lang_1.CONST(), 
        __metadata('design:type', Object)
    ], ProgressMode, "INDETERMINATE", void 0);
    __decorate([
        lang_1.CONST(), 
        __metadata('design:type', Object)
    ], ProgressMode, "BUFFER", void 0);
    __decorate([
        lang_1.CONST(), 
        __metadata('design:type', Object)
    ], ProgressMode, "QUERY", void 0);
    ProgressMode = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [])
    ], ProgressMode);
    return ProgressMode;
}());
exports.ProgressMode = ProgressMode;
var MdProgressLinear = (function () {
    function MdProgressLinear() {
        this.mode = ProgressMode.DETERMINATE;
        this.primaryBarTransform = '';
        this.secondaryBarTransform = '';
    }
    MdProgressLinear.clamp = function (v) {
        return math_1.Math.max(0, math_1.Math.min(100, v));
    };
    Object.defineProperty(MdProgressLinear.prototype, "value", {
        get: function () {
            return this.value_;
        },
        set: function (v) {
            if (lang_1.isPresent(v)) {
                this.value_ = MdProgressLinear.clamp(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    MdProgressLinear.prototype.ngOnChanges = function (_) {
        if (this.mode === ProgressMode.QUERY || this.mode === ProgressMode.INDETERMINATE) {
            return;
        }
        if (!lang_1.isBlank(this.value)) {
            this.primaryBarTransform = this.transformForValue(this.value);
        }
        if (this.mode === ProgressMode.BUFFER && !lang_1.isBlank(this.bufferValue)) {
            this.secondaryBarTransform = this.transformForValue(this.bufferValue);
        }
    };
    MdProgressLinear.prototype.transformForValue = function (value) {
        var scale = value / 100;
        var translateX = (value - 100) / 2;
        return "translateX(" + translateX + "%) scale(" + scale + ", 1)";
    };
    __decorate([
        core_1.Input('value'), 
        __metadata('design:type', Number)
    ], MdProgressLinear.prototype, "value_", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MdProgressLinear.prototype, "bufferValue", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdProgressLinear.prototype, "mode", void 0);
    MdProgressLinear = __decorate([
        core_1.Component({
            selector: 'md-progress-linear',
            inputs: ['value', 'bufferValue', 'mode'],
            host: {
                'role': 'progressbar',
                'aria-valuemin': '0',
                'aria-valuemax': '100',
                '[attr.aria-valuenow]': 'value',
                '[attr.mode]': 'mode'
            },
            template: "\n    <div class=\"md-progress-linear-container md-ready\">\n      <div class=\"md-progress-linear-dashed\"></div>\n      <div class=\"md-progress-linear-bar md-progress-linear-bar1\"\n          [style.-webkit-transform]=\"secondaryBarTransform\"\n          [style.transform]=\"secondaryBarTransform\"></div>\n      <div class=\"md-progress-linear-bar md-progress-linear-bar2\"\n          [style.-webkit-transform]=\"primaryBarTransform\"\n          [style.transform]=\"primaryBarTransform\"></div>\n    </div>",
            directives: [],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], MdProgressLinear);
    return MdProgressLinear;
}());
exports.MdProgressLinear = MdProgressLinear;
//# sourceMappingURL=progress_linear.js.map