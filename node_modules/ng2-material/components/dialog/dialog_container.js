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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("angular2/core");
var key_codes_1 = require("../../core/key_codes");
var MdDialogContainer = (function () {
    function MdDialogContainer() {
        this.contentRef = null;
        this.dialogRef = null;
    }
    MdDialogContainer.prototype.wrapFocus = function () {
    };
    MdDialogContainer.prototype.documentKeypress = function (event) {
        if (event.keyCode == key_codes_1.KeyCodes.ESCAPE) {
            this.dialogRef.close();
        }
    };
    MdDialogContainer = __decorate([
        core_1.Component({
            selector: 'md-dialog-container',
            encapsulation: core_1.ViewEncapsulation.None,
            template: "\n    <md-dialog-content></md-dialog-content>\n    <div tabindex=\"0\" (focus)=\"wrapFocus()\"></div>",
            directives: [core_1.forwardRef(function () { return MdDialogContent; })],
            host: {
                'class': 'md-dialog',
                'tabindex': '0',
                '(body:keydown)': 'documentKeypress($event)',
            },
        }), 
        __metadata('design:paramtypes', [])
    ], MdDialogContainer);
    return MdDialogContainer;
}());
exports.MdDialogContainer = MdDialogContainer;
var MdDialogContent = (function () {
    function MdDialogContent(dialogContainer, elementRef) {
        dialogContainer.contentRef = elementRef;
    }
    MdDialogContent = __decorate([
        core_1.Directive({
            selector: 'md-dialog-content'
        }),
        __param(0, core_1.Host()),
        __param(0, core_1.SkipSelf()), 
        __metadata('design:paramtypes', [MdDialogContainer, core_1.ElementRef])
    ], MdDialogContent);
    return MdDialogContent;
}());
exports.MdDialogContent = MdDialogContent;
//# sourceMappingURL=dialog_container.js.map