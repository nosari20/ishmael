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
var common_1 = require("angular2/common");
var button_1 = require("../button/button");
var core_1 = require("angular2/core");
var dialog_ref_1 = require("./dialog_ref");
var MdDialogBasic = (function () {
    function MdDialogBasic(dialog) {
        this.dialog = dialog;
        this.title = '';
        this.textContent = '';
        this.cancel = '';
        this.ok = '';
        this.type = 'alert';
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdDialogBasic.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdDialogBasic.prototype, "textContent", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdDialogBasic.prototype, "cancel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdDialogBasic.prototype, "ok", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdDialogBasic.prototype, "type", void 0);
    MdDialogBasic = __decorate([
        core_1.Component({
            selector: 'md-dialog-basic',
            template: "\n  <h2 class=\"md-title\">{{ title }}</h2>\n  <p>{{ textContent }}</p>\n  <md-dialog-actions>\n    <template [ngIf]=\"cancel != ''\">\n    <button md-button type=\"button\" (click)=\"dialog.close(false)\">\n      <span>{{ cancel }}</span>\n    </button>    \n    </template>\n    <template [ngIf]=\"ok != ''\">\n    <button md-button class=\"md-primary\" type=\"button\" (click)=\"dialog.close(true)\">\n      <span>{{ ok }}</span>\n    </button>\n    </template>\n  </md-dialog-actions>",
            directives: [button_1.MdButton, common_1.NgIf]
        }), 
        __metadata('design:paramtypes', [dialog_ref_1.MdDialogRef])
    ], MdDialogBasic);
    return MdDialogBasic;
}());
exports.MdDialogBasic = MdDialogBasic;
//# sourceMappingURL=dialog_basic.js.map