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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require("angular2/core");
var lang_1 = require("angular2/src/facade/lang");
var dialog_ref_1 = require("./dialog_ref");
var dialog_config_1 = require("./dialog_config");
var dialog_container_1 = require("./dialog_container");
var backdrop_1 = require("../backdrop/backdrop");
var dom_adapter_1 = require("angular2/src/platform/dom/dom_adapter");
var animate_1 = require("../../core/util/animate");
__export(require('./dialog_config'));
__export(require('./dialog_container'));
__export(require('./dialog_ref'));
__export(require('./dialog_basic'));
var MdDialog = (function () {
    function MdDialog(componentLoader, rootRenderer) {
        this.componentLoader = componentLoader;
        this._renderer = null;
        this._defaultContainer = dom_adapter_1.DOM.query('body');
        var type = new core_1.RenderComponentType("__md-dialog-" + MdDialog._uniqueId++, core_1.ViewEncapsulation.None, []);
        this._renderer = rootRenderer.renderComponent(type);
    }
    MdDialog.prototype.open = function (type, elementRef, options) {
        var _this = this;
        if (options === void 0) { options = new dialog_config_1.MdDialogConfig(); }
        var dialogRef = new dialog_ref_1.MdDialogRef();
        var bindings = core_1.Injector.resolve([core_1.APPLICATION_COMMON_PROVIDERS, core_1.provide(dialog_ref_1.MdDialogRef, { useValue: dialogRef })]);
        var backdropRefPromise = this._openBackdrop(elementRef, bindings, options);
        return this.componentLoader.loadNextToLocation(dialog_container_1.MdDialogContainer, elementRef, bindings)
            .then(function (containerRef) {
            var dialogElement = containerRef.location.nativeElement;
            _this._renderer.setElementClass(dialogElement, 'md-dialog-absolute', !!options.container);
            dom_adapter_1.DOM.appendChild(options.container || _this._defaultContainer, dialogElement);
            if (lang_1.isPresent(options.width)) {
                _this._renderer.setElementStyle(dialogElement, 'width', options.width);
            }
            if (lang_1.isPresent(options.height)) {
                _this._renderer.setElementStyle(dialogElement, 'height', options.height);
            }
            dialogRef.containerRef = containerRef;
            return _this.componentLoader.loadNextToLocation(type, containerRef.instance.contentRef, bindings)
                .then(function (contentRef) {
                Object.keys(options.context).forEach(function (key) {
                    contentRef.instance[key] = options.context[key];
                });
                dialogRef.contentRef = contentRef;
                containerRef.instance.dialogRef = dialogRef;
                backdropRefPromise.then(function (backdropRef) {
                    dialogRef.backdropRef = backdropRef;
                    dialogRef.whenClosed.then(function (_) {
                        backdropRef.instance.hide().then(function () {
                            containerRef.dispose();
                            contentRef.dispose();
                            backdropRef.dispose();
                        });
                    });
                });
                return animate_1.Animate.enter(dialogElement, 'md-active').then(function () { return dialogRef; });
            });
        });
    };
    MdDialog.prototype._openBackdrop = function (elementRef, bindings, options) {
        var _this = this;
        return this.componentLoader.loadNextToLocation(backdrop_1.MdBackdrop, elementRef, bindings)
            .then(function (componentRef) {
            var backdrop = componentRef.instance;
            backdrop.clickClose = options.clickClose;
            _this._renderer.setElementClass(componentRef.location.nativeElement, 'md-backdrop', true);
            _this._renderer.setElementClass(componentRef.location.nativeElement, 'md-opaque', true);
            _this._renderer.setElementClass(componentRef.location.nativeElement, 'md-backdrop-absolute', !!options.container);
            dom_adapter_1.DOM.appendChild(options.container || _this._defaultContainer, componentRef.location.nativeElement);
            return backdrop.show().then(function () { return componentRef; });
        });
    };
    MdDialog.prototype.alert = function (message, okMessage) {
        throw 'Not implemented';
    };
    MdDialog.prototype.confirm = function (message, okMessage, cancelMessage) {
        throw 'Not implemented';
    };
    MdDialog._uniqueId = 0;
    MdDialog = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [core_1.DynamicComponentLoader, core_1.RootRenderer])
    ], MdDialog);
    return MdDialog;
}());
exports.MdDialog = MdDialog;
//# sourceMappingURL=dialog.js.map