"use strict";
var MdDialogConfig = (function () {
    function MdDialogConfig() {
        this.width = null;
        this.height = null;
        this.container = null;
        this.sourceEvent = null;
        this.clickClose = true;
        this.context = {};
    }
    MdDialogConfig.prototype.parent = function (element) {
        this.container = element;
        return this;
    };
    MdDialogConfig.prototype.clickOutsideToClose = function (enabled) {
        this.clickClose = enabled;
        return this;
    };
    MdDialogConfig.prototype.title = function (text) {
        this.context.title = text;
        return this;
    };
    MdDialogConfig.prototype.textContent = function (text) {
        this.context.textContent = text;
        return this;
    };
    MdDialogConfig.prototype.ariaLabel = function (text) {
        this.context.ariaLabel = text;
        return this;
    };
    MdDialogConfig.prototype.ok = function (text) {
        this.context.ok = text;
        return this;
    };
    MdDialogConfig.prototype.cancel = function (text) {
        this.context.cancel = text;
        return this;
    };
    MdDialogConfig.prototype.targetEvent = function (ev) {
        this.sourceEvent = ev;
        return this;
    };
    return MdDialogConfig;
}());
exports.MdDialogConfig = MdDialogConfig;
//# sourceMappingURL=dialog_config.js.map