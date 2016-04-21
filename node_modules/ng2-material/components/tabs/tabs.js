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
var ink_1 = require("../../core/util/ink");
var common_1 = require("angular2/common");
var MdTab = (function () {
    function MdTab(viewContainer, templateRef) {
        this.viewContainer = viewContainer;
        this.templateRef = templateRef;
        this.disabled = false;
        this._active = false;
    }
    Object.defineProperty(MdTab.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (active) {
            if (active == this._active) {
                return;
            }
            this._active = active;
            if (active) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
            else {
                this.viewContainer.remove(0);
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdTab.prototype, "label", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdTab.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], MdTab.prototype, "active", null);
    MdTab = __decorate([
        core_1.Directive({
            selector: '[md-tab]'
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.TemplateRef])
    ], MdTab);
    return MdTab;
}());
exports.MdTab = MdTab;
var MdTabs = (function () {
    function MdTabs(panes, _element) {
        var _this = this;
        this.panes = panes;
        this._element = _element;
        this.mdNoScroll = false;
        this._selected = 0;
        this.panes.changes.subscribe(function (_) {
            _this.panes.toArray().forEach(function (p, index) {
                p.active = index === _this._selected;
            });
        });
    }
    Object.defineProperty(MdTabs.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (index) {
            var panes = this.panes.toArray();
            var pane = null;
            if (index >= 0 && index < panes.length) {
                pane = panes[index];
            }
            this.selectedTab = pane;
            this._selected = index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdTabs.prototype, "selectedTab", {
        get: function () {
            var result = null;
            this.panes.toArray().forEach(function (p) {
                if (p.active) {
                    result = p;
                }
            });
            return result;
        },
        set: function (value) {
            var _this = this;
            this.panes.toArray().forEach(function (p, index) {
                p.active = p == value;
                if (p.active) {
                    _this._selected = index;
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    MdTabs.prototype.onTabClick = function (pane, event) {
        if (event && ink_1.Ink.canApply(this._element.nativeElement)) {
            ink_1.Ink.rippleEvent(event.target, event);
        }
        this.selectedTab = pane;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdTabs.prototype, "mdNoScroll", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MdTabs.prototype, "selected", null);
    MdTabs = __decorate([
        core_1.Component({
            selector: 'md-tabs',
            template: "\n    <md-tabs-wrapper>\n      <md-tab-data></md-tab-data>\n      <md-tabs-canvas role=\"tablist\">\n        <md-pagination-wrapper>\n          <template ngFor [ngForOf]=\"panes\" #pane=\"$implicit\" #index=\"i\">\n          <md-tab-item tabindex=\"-1\"\n                       class=\"md-tab\"\n                       (click)=\"onTabClick(pane,$event)\"\n                       [class.md-active]=\"selectedTab == pane\"\n                       [disabled]=\"pane.disabled\"\n                       [style.max-width]=\"maxTabWidth + 'px'\"\n                       role=\"tab\">\n            {{pane.label}}\n          </md-tab-item>\n          </template>\n          <md-ink-bar></md-ink-bar>\n        </md-pagination-wrapper>\n      </md-tabs-canvas>\n    </md-tabs-wrapper>\n    <md-tabs-content-wrapper>\n      <md-tab-content role=\"tabpanel\" class=\"md-active\"\n                      [class.md-no-scroll]=\"mdNoScroll\">\n        <ng-content></ng-content>\n      </md-tab-content>\n    </md-tabs-content-wrapper>",
            directives: [common_1.NgFor],
            properties: ['selected'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(0, core_1.Query(MdTab)), 
        __metadata('design:paramtypes', [core_1.QueryList, core_1.ElementRef])
    ], MdTabs);
    return MdTabs;
}());
exports.MdTabs = MdTabs;
//# sourceMappingURL=tabs.js.map