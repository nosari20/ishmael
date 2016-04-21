"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var portal_1 = require('./portal');
var portal_exceptions_1 = require('./portal-exceptions');
/**
 * A PortalHost for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 *
 * This is the only part of the portal core that directly touches the DOM.
 */
var DomPortalHost = (function (_super) {
    __extends(DomPortalHost, _super);
    function DomPortalHost(_hostDomElement, _componentLoader, _viewManager) {
        _super.call(this);
        this._hostDomElement = _hostDomElement;
        this._componentLoader = _componentLoader;
        this._viewManager = _viewManager;
    }
    /** Attach the given ComponentPortal to DOM element using the DynamicComponentLoader. */
    DomPortalHost.prototype.attachComponentPortal = function (portal) {
        var _this = this;
        if (portal.origin == null) {
            throw new portal_exceptions_1.MdComponentPortalAttachedToDomWithoutOriginException();
        }
        return this._componentLoader.loadNextToLocation(portal.component, portal.origin).then(function (ref) {
            _this._hostDomElement.appendChild(ref.hostView.rootNodes[0]);
            _this.setDisposeFn(function () { return ref.dispose(); });
            return ref;
        });
    };
    DomPortalHost.prototype.attachTemplatePortal = function (portal) {
        var _this = this;
        var viewContainer = this._viewManager.getViewContainer(portal.templateRef.elementRef);
        var viewRef = viewContainer.createEmbeddedView(portal.templateRef);
        // TODO(jelbourn): locals don't currently work with DomPortalHost; investigate whether there
        // is a bug in Angular.
        portal.locals.forEach(function (v, k) { return viewRef.setLocal(k, v); });
        viewRef.rootNodes.forEach(function (rootNode) { return _this._hostDomElement.appendChild(rootNode); });
        this.setDisposeFn((function () {
            var index = viewContainer.indexOf(viewRef);
            if (index != -1) {
                viewContainer.remove(index);
            }
        }));
        // TODO(jelbourn): Return locals from view.
        return Promise.resolve(new Map());
    };
    DomPortalHost.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        if (this._hostDomElement.parentNode != null) {
            this._hostDomElement.parentNode.removeChild(this._hostDomElement);
        }
    };
    return DomPortalHost;
}(portal_1.BasePortalHost));
exports.DomPortalHost = DomPortalHost;
//# sourceMappingURL=dom-portal-host.js.map