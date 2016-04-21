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
var lang_1 = require("angular2/src/facade/lang");
var progress_linear_1 = require("../progress_linear/progress_linear");
var math_1 = require("angular2/src/facade/math");
var ProgressMode = (function () {
    function ProgressMode() {
    }
    ProgressMode.DETERMINATE = 'determinate';
    ProgressMode.INDETERMINATE = 'indeterminate';
    __decorate([
        lang_1.CONST(), 
        __metadata('design:type', Object)
    ], ProgressMode, "DETERMINATE", void 0);
    __decorate([
        lang_1.CONST(), 
        __metadata('design:type', Object)
    ], ProgressMode, "INDETERMINATE", void 0);
    ProgressMode = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [])
    ], ProgressMode);
    return ProgressMode;
}());
var Defaults = (function () {
    function Defaults() {
    }
    Defaults.DEFAULT_PROGRESS_SIZE = 100;
    Defaults.DEFAULT_SCALING = 0.5;
    Defaults.DEFAULT_HALF_TRANSITION = 'transform 0.1s linear';
    __decorate([
        lang_1.CONST(), 
        __metadata('design:type', Object)
    ], Defaults, "DEFAULT_PROGRESS_SIZE", void 0);
    __decorate([
        lang_1.CONST(), 
        __metadata('design:type', Object)
    ], Defaults, "DEFAULT_SCALING", void 0);
    __decorate([
        lang_1.CONST(), 
        __metadata('design:type', Object)
    ], Defaults, "DEFAULT_HALF_TRANSITION", void 0);
    Defaults = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [])
    ], Defaults);
    return Defaults;
}());
var MdProgressCircular = (function (_super) {
    __extends(MdProgressCircular, _super);
    function MdProgressCircular() {
        _super.apply(this, arguments);
        this.defaultHalfTransition = Defaults.DEFAULT_HALF_TRANSITION;
    }
    Object.defineProperty(MdProgressCircular.prototype, "diameter", {
        get: function () {
            return this.diameter_;
        },
        set: function (v) {
            if (lang_1.isPresent(v)) {
                this.diameter_ = v;
            }
        },
        enumerable: true,
        configurable: true
    });
    MdProgressCircular.prototype.ngOnInit = function () {
        this.updateScale();
    };
    MdProgressCircular.prototype.ngOnChanges = function (_) {
        if (this.mode === ProgressMode.INDETERMINATE || lang_1.isBlank(this.value)) {
            return;
        }
        this.gapTransition = (this.value <= 50) ? '' : 'borderBottomColor 0.1s linear';
        this.transformLeftHalf(this.value);
        this.transformRightHalf(this.value);
    };
    MdProgressCircular.prototype.transformLeftHalf = function (value) {
        var rotation = (value <= 50) ? 135 : (((value - 50) / 50 * 180) + 135);
        this.leftHalfTransform = "rotate(" + rotation + "deg)";
    };
    MdProgressCircular.prototype.transformRightHalf = function (value) {
        var rotation = (value >= 50) ? 45 : (value / 50 * 180 - 135);
        this.rightHalfTransform = "rotate(" + rotation + "deg)";
    };
    MdProgressCircular.prototype.updateScale = function () {
        this.outerSize = 100 * this.getDiameterRatio() + 'px';
        this.diameterTransformation = "translate(-50%, -50%) scale( " + this.getDiameterRatio() + " )";
    };
    MdProgressCircular.prototype.getDiameterRatio = function () {
        if (!this.diameter)
            return Defaults.DEFAULT_SCALING;
        var match = /([0-9]*)%/.exec(this.diameter);
        var value = math_1.Math.max(0, (match && match[1] / 100) || parseFloat(this.diameter));
        return (value > 1) ? value / Defaults.DEFAULT_PROGRESS_SIZE : value;
    };
    MdProgressCircular.prototype.webkit = function (style) {
        return "-webkit-" + style;
    };
    __decorate([
        core_1.Input('diameter'), 
        __metadata('design:type', String)
    ], MdProgressCircular.prototype, "diameter_", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdProgressCircular.prototype, "mode", void 0);
    MdProgressCircular = __decorate([
        core_1.Component({
            selector: 'md-progress-circular',
            inputs: ['value', 'diameter'],
            host: {
                'role': 'progressbar',
                'aria-valuemin': '0',
                'aria-valuemax': '100',
                '[attr.aria-valuenow]': 'value',
                '[style.width]': 'outerSize',
                '[style.height]': 'outerSize'
            },
            template: "\n    <div class=\"md-scale-wrapper\"\n     [style.-webkit-transform]=\"diameterTransformation\"\n     [style.transform]=\"diameterTransformation\">\n      <div class=\"md-spinner-wrapper\">\n        <div class=\"md-inner\">\n          <div class=\"md-gap\"\n          [style.-webkit-transition]=\"gapTransition\"\n          [style.transition]=\"gapTransition\"></div>\n          <div class=\"md-left\">\n            <div class=\"md-half-circle\"\n              [style.-webkit-transform]=\"leftHalfTransform\"\n              [style.transform]=\"leftHalfTransform\"\n              [style.-webkit-transition]=\"defaultHalfTransition\"\n              [style.transition]=\"defaultHalfTransition\"></div>\n          </div>\n          <div class=\"md-right\">\n            <div class=\"md-half-circle\"\n              [style.-webkit-transform]=\"rightHalfTransform\"\n              [style.transform]=\"rightHalfTransform\"\n              [style.-webkit-transition]=\"defaultHalfTransition\"\n              [style.transition]=\"defaultHalfTransition\"></div>\n          </div>\n        </div>\n      </div>\n    </div>",
            directives: [],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], MdProgressCircular);
    return MdProgressCircular;
}(progress_linear_1.MdProgressLinear));
exports.MdProgressCircular = MdProgressCircular;
//# sourceMappingURL=progress_circular.js.map