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
var util_1 = require("../../core/util/util");
var dom_adapter_1 = require("angular2/src/platform/dom/dom_adapter");
var lang_1 = require("angular2/src/facade/lang");
var MdToolbar = (function () {
    function MdToolbar(el) {
        this.el = el;
        this._mdShrinkSpeed = 0.5;
        this._debouncedContentScroll = null;
        this._debouncedUpdateHeight = null;
        this._content = null;
        this._toolbarHeight = 0;
        this._cancelScrollShrink = null;
        this._previousScrollTop = 0;
        this._currentY = 0;
        this._mdScrollShrink = false;
        this._debouncedContentScroll = util_1.throttle(this.onContentScroll, 10, this);
        this._debouncedUpdateHeight = util_1.debounce(this.updateToolbarHeight, 5 * 1000, this);
    }
    Object.defineProperty(MdToolbar.prototype, "mdShrinkSpeed", {
        get: function () {
            return this._mdShrinkSpeed;
        },
        set: function (value) {
            this._mdShrinkSpeed = lang_1.isString(value) ? lang_1.NumberWrapper.parseFloat(value) : value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdToolbar.prototype, "mdScrollShrink", {
        get: function () {
            return this._mdScrollShrink;
        },
        set: function (value) {
            this._mdScrollShrink = !!lang_1.isPresent(value);
        },
        enumerable: true,
        configurable: true
    });
    MdToolbar.prototype.ngAfterContentInit = function () {
        this.disableScrollShrink();
        if (!this.mdScrollShrink) {
            return;
        }
        this._content = dom_adapter_1.DOM.querySelector(dom_adapter_1.DOM.parentElement(this.el.nativeElement), 'md-content');
        if (!this._content) {
            return;
        }
        this._cancelScrollShrink = dom_adapter_1.DOM.onAndCancel(this._content, 'scroll', this._debouncedContentScroll);
        dom_adapter_1.DOM.setAttribute(this._content, 'scroll-shrink', 'true');
        util_1.rAF(this.updateToolbarHeight.bind(this));
    };
    MdToolbar.prototype.ngOnChanges = function (changes) {
        this.updateToolbarHeight();
    };
    MdToolbar.prototype.ngOnDestroy = function () {
        this.disableScrollShrink();
    };
    MdToolbar.prototype.disableScrollShrink = function () {
        if (this._cancelScrollShrink) {
            this._cancelScrollShrink();
            this._cancelScrollShrink = null;
        }
    };
    MdToolbar.prototype.updateToolbarHeight = function () {
        this._toolbarHeight = dom_adapter_1.DOM.getProperty(this.el.nativeElement, 'offsetHeight');
        if (this._content) {
            var margin = (-this._toolbarHeight * this.mdShrinkSpeed) + 'px';
            dom_adapter_1.DOM.setStyle(this._content, "margin-top", margin);
            dom_adapter_1.DOM.setStyle(this._content, "margin-bottom", margin);
            this.onContentScroll();
        }
    };
    MdToolbar.prototype.onContentScroll = function (e) {
        var _this = this;
        var scrollTop = e ? e.target.scrollTop : this._previousScrollTop;
        this._debouncedUpdateHeight();
        this._currentY = Math.min(this._toolbarHeight / this.mdShrinkSpeed, Math.max(0, this._currentY + scrollTop - this._previousScrollTop));
        var toolbarXform = "translate3d(0," + -this._currentY * this.mdShrinkSpeed + "px,0)";
        var contentXform = "translate3d(0," + (this._toolbarHeight - this._currentY) * this.mdShrinkSpeed + "px,0)";
        dom_adapter_1.DOM.setStyle(this._content, '-webkit-transform', contentXform);
        dom_adapter_1.DOM.setStyle(this._content, 'transform', contentXform);
        dom_adapter_1.DOM.setStyle(this.el.nativeElement, '-webkit-transform', toolbarXform);
        dom_adapter_1.DOM.setStyle(this.el.nativeElement, 'transform', toolbarXform);
        this._previousScrollTop = scrollTop;
        util_1.rAF(function () {
            var hasWhiteFrame = dom_adapter_1.DOM.hasClass(_this.el.nativeElement, 'md-whiteframe-z1');
            if (hasWhiteFrame && !_this._currentY) {
                dom_adapter_1.DOM.removeClass(_this.el.nativeElement, 'md-whiteframe-z1');
            }
            else if (!hasWhiteFrame && _this._currentY) {
                dom_adapter_1.DOM.addClass(_this.el.nativeElement, 'md-whiteframe-z1');
            }
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], MdToolbar.prototype, "mdShrinkSpeed", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], MdToolbar.prototype, "mdScrollShrink", null);
    MdToolbar = __decorate([
        core_1.Directive({
            selector: 'md-toolbar',
            inputs: ['mdShrinkSpeed', 'mdScrollShrink']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MdToolbar);
    return MdToolbar;
}());
exports.MdToolbar = MdToolbar;
//# sourceMappingURL=toolbar.js.map