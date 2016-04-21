"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var exceptions_1 = require('angular2/src/facade/exceptions');
/** Exception thrown when a ComponentPortal is attached to a DomPortalHost without an origin. */
var MdComponentPortalAttachedToDomWithoutOriginException = (function (_super) {
    __extends(MdComponentPortalAttachedToDomWithoutOriginException, _super);
    function MdComponentPortalAttachedToDomWithoutOriginException() {
        _super.call(this, 'A ComponentPortal must have an origin set when attached to a DomPortalHost ' +
            'because the DOM element is not part of the Angular application context.');
    }
    return MdComponentPortalAttachedToDomWithoutOriginException;
}(exceptions_1.BaseException));
exports.MdComponentPortalAttachedToDomWithoutOriginException = MdComponentPortalAttachedToDomWithoutOriginException;
/** Exception thrown when attmepting to attach a null portal to a host. */
var MdNullPortalException = (function (_super) {
    __extends(MdNullPortalException, _super);
    function MdNullPortalException() {
        _super.call(this, 'Must provide a portal to attach');
    }
    return MdNullPortalException;
}(exceptions_1.BaseException));
exports.MdNullPortalException = MdNullPortalException;
/** Exception thrown when attmepting to attach a portal to a host that is already attached. */
var MdPortalAlreadyAttachedException = (function (_super) {
    __extends(MdPortalAlreadyAttachedException, _super);
    function MdPortalAlreadyAttachedException() {
        _super.call(this, 'Host already has a portal attached');
    }
    return MdPortalAlreadyAttachedException;
}(exceptions_1.BaseException));
exports.MdPortalAlreadyAttachedException = MdPortalAlreadyAttachedException;
/** Exception thrown when attmepting to attach a portal to an already-disposed host. */
var MdPortalHostAlreadyDisposedException = (function (_super) {
    __extends(MdPortalHostAlreadyDisposedException, _super);
    function MdPortalHostAlreadyDisposedException() {
        _super.call(this, 'This PortalHost has already been disposed');
    }
    return MdPortalHostAlreadyDisposedException;
}(exceptions_1.BaseException));
exports.MdPortalHostAlreadyDisposedException = MdPortalHostAlreadyDisposedException;
/** Exception thrown when attmepting to attach an unknown portal type. */
var MdUnknownPortalTypeException = (function (_super) {
    __extends(MdUnknownPortalTypeException, _super);
    function MdUnknownPortalTypeException() {
        _super.call(this, 'Attempting to attach an unknown Portal type. ' +
            'BasePortalHost accepts either a ComponentPortal or a TemplatePortal.');
    }
    return MdUnknownPortalTypeException;
}(exceptions_1.BaseException));
exports.MdUnknownPortalTypeException = MdUnknownPortalTypeException;
/** Exception thrown when attmepting to attach a portal to a null host. */
var MdNullPortalHostException = (function (_super) {
    __extends(MdNullPortalHostException, _super);
    function MdNullPortalHostException() {
        _super.call(this, 'Attmepting to attach a portal to a null PortalHost');
    }
    return MdNullPortalHostException;
}(exceptions_1.BaseException));
exports.MdNullPortalHostException = MdNullPortalHostException;
/** Exception thrown when attmepting to detach a portal that is not attached. */
var MdNoPortalAttachedException = (function (_super) {
    __extends(MdNoPortalAttachedException, _super);
    function MdNoPortalAttachedException() {
        _super.call(this, 'Attmepting to detach a portal that is not attached to a host');
    }
    return MdNoPortalAttachedException;
}(exceptions_1.BaseException));
exports.MdNoPortalAttachedException = MdNoPortalAttachedException;
//# sourceMappingURL=portal-exceptions.js.map