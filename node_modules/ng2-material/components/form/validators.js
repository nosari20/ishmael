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
var common_1 = require("angular2/common");
var core_1 = require("angular2/core");
var util_1 = require("../../core/util/util");
var PATTERN_VALIDATOR = lang_1.CONST_EXPR(new core_1.Provider(common_1.NG_VALIDATORS, {
    useExisting: core_1.forwardRef(function () { return MdPatternValidator; }),
    multi: true
}));
var MdPatternValidator = (function () {
    function MdPatternValidator() {
    }
    MdPatternValidator.inline = function (pattern) {
        return function validate(control) {
            if (control.value === '' || new RegExp(pattern).test(control.value)) {
                return null;
            }
            return {
                mdPattern: true
            };
        };
    };
    MdPatternValidator.prototype.validate = function (control) {
        return MdPatternValidator.inline(this.mdPattern)(control);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdPatternValidator.prototype, "mdPattern", void 0);
    MdPatternValidator = __decorate([
        core_1.Directive({
            selector: '[mdPattern]',
            providers: [PATTERN_VALIDATOR]
        }), 
        __metadata('design:paramtypes', [])
    ], MdPatternValidator);
    return MdPatternValidator;
}());
exports.MdPatternValidator = MdPatternValidator;
var MAXLENGTH_VALIDATOR = lang_1.CONST_EXPR(new core_1.Provider(common_1.NG_VALIDATORS, {
    useExisting: core_1.forwardRef(function () { return MdMaxLengthValidator; }),
    multi: true
}));
var MdMaxLengthValidator = (function () {
    function MdMaxLengthValidator() {
    }
    MdMaxLengthValidator.inline = function (length) {
        return function validate(control) {
            if (!control.value || control.value.length <= length) {
                return null;
            }
            return {
                mdMaxLength: true
            };
        };
    };
    MdMaxLengthValidator.prototype.validate = function (control) {
        return MdMaxLengthValidator.inline(this.mdMaxLength)(control);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdMaxLengthValidator.prototype, "mdMaxLength", void 0);
    MdMaxLengthValidator = __decorate([
        core_1.Directive({ selector: '[mdMaxLength]', providers: [MAXLENGTH_VALIDATOR] }), 
        __metadata('design:paramtypes', [])
    ], MdMaxLengthValidator);
    return MdMaxLengthValidator;
}());
exports.MdMaxLengthValidator = MdMaxLengthValidator;
var MAXVALUE_VALIDATOR = lang_1.CONST_EXPR(new core_1.Provider(common_1.NG_VALIDATORS, {
    useExisting: core_1.forwardRef(function () { return MdMaxValueValidator; }),
    multi: true
}));
var MdMaxValueValidator = (function () {
    function MdMaxValueValidator() {
    }
    MdMaxValueValidator.inline = function (length) {
        return function validate(control) {
            if (lang_1.NumberWrapper.isNaN(control.value) || control.value <= length) {
                return null;
            }
            return {
                mdMax: true
            };
        };
    };
    MdMaxValueValidator.prototype.validate = function (control) {
        return MdMaxValueValidator.inline(this.mdMax)(control);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdMaxValueValidator.prototype, "mdMax", void 0);
    MdMaxValueValidator = __decorate([
        core_1.Directive({ selector: '[mdMax]', providers: [MAXVALUE_VALIDATOR] }), 
        __metadata('design:paramtypes', [])
    ], MdMaxValueValidator);
    return MdMaxValueValidator;
}());
exports.MdMaxValueValidator = MdMaxValueValidator;
var MINVALUE_VALIDATOR = lang_1.CONST_EXPR(new core_1.Provider(common_1.NG_VALIDATORS, {
    useExisting: core_1.forwardRef(function () { return MdMinValueValidator; }),
    multi: true
}));
var MdMinValueValidator = (function () {
    function MdMinValueValidator() {
    }
    MdMinValueValidator.inline = function (length) {
        return function validate(control) {
            if (lang_1.NumberWrapper.isNaN(control.value) || control.value >= length) {
                return null;
            }
            return {
                mdMin: true
            };
        };
    };
    MdMinValueValidator.prototype.validate = function (control) {
        return MdMinValueValidator.inline(this.mdMin)(control);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdMinValueValidator.prototype, "mdMin", void 0);
    MdMinValueValidator = __decorate([
        core_1.Directive({ selector: '[mdMin]', providers: [MINVALUE_VALIDATOR] }), 
        __metadata('design:paramtypes', [])
    ], MdMinValueValidator);
    return MdMinValueValidator;
}());
exports.MdMinValueValidator = MdMinValueValidator;
var NUMBER_REQUIRED_VALIDATOR = lang_1.CONST_EXPR(new core_1.Provider(common_1.NG_VALIDATORS, {
    useExisting: core_1.forwardRef(function () { return MdNumberRequiredValidator; }),
    multi: true
}));
var MdNumberRequiredValidator = (function () {
    function MdNumberRequiredValidator() {
    }
    MdNumberRequiredValidator.inline = function () {
        return function validate(control) {
            var isNum = !lang_1.NumberWrapper.isNaN(control.value) && util_1.isNumber(control.value);
            return isNum ? null : { mdNumberRequired: true };
        };
    };
    MdNumberRequiredValidator.prototype.validate = function (control) {
        return MdNumberRequiredValidator.inline()(control);
    };
    MdNumberRequiredValidator = __decorate([
        core_1.Directive({ selector: '[mdNumberRequired]', providers: [NUMBER_REQUIRED_VALIDATOR] }), 
        __metadata('design:paramtypes', [])
    ], MdNumberRequiredValidator);
    return MdNumberRequiredValidator;
}());
exports.MdNumberRequiredValidator = MdNumberRequiredValidator;
exports.INPUT_VALIDATORS = [
    MdMaxLengthValidator,
    MdPatternValidator,
    MdMaxValueValidator,
    MdMinValueValidator,
    MdNumberRequiredValidator
];
//# sourceMappingURL=validators.js.map