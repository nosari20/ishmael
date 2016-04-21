"use strict";
var promise_1 = require("angular2/src/facade/promise");
var animate_1 = require("../../core/util/animate");
var lang_1 = require("angular2/src/facade/lang");
var MdDialogRef = (function () {
    function MdDialogRef() {
        this._subscription = null;
        this._contentRef = null;
        this.containerRef = null;
        this.isClosed = false;
        this.contentRefDeferred = promise_1.PromiseWrapper.completer();
        this.whenClosedDeferred = promise_1.PromiseWrapper.completer();
    }
    Object.defineProperty(MdDialogRef.prototype, "backdropRef", {
        set: function (value) {
            var _this = this;
            this._backdropRef = value;
            if (this._backdropRef) {
                this._subscription = this._backdropRef.instance.onHiding.subscribe(function () {
                    _this._subscription.unsubscribe();
                    _this.close();
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdDialogRef.prototype, "contentRef", {
        set: function (value) {
            this._contentRef = value;
            this.contentRefDeferred.resolve(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdDialogRef.prototype, "instance", {
        get: function () {
            if (lang_1.isPresent(this._contentRef)) {
                return this._contentRef.instance;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdDialogRef.prototype, "whenClosed", {
        get: function () {
            return this.whenClosedDeferred.promise;
        },
        enumerable: true,
        configurable: true
    });
    MdDialogRef.prototype.close = function (result) {
        var _this = this;
        if (result === void 0) { result = null; }
        if (this.isClosed) {
            return this.whenClosedDeferred.promise;
        }
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        this.isClosed = true;
        return animate_1.Animate.leave(this.containerRef.location.nativeElement, 'md-active').then(function () {
            var otherAsync = Promise.resolve();
            if (_this._backdropRef) {
                otherAsync = _this._backdropRef.instance.hide();
            }
            return otherAsync.then(function () {
                _this.whenClosedDeferred.resolve(result);
            });
        });
    };
    return MdDialogRef;
}());
exports.MdDialogRef = MdDialogRef;
//# sourceMappingURL=dialog_ref.js.map