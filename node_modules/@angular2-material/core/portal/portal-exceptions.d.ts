import { BaseException } from 'angular2/src/facade/exceptions';
/** Exception thrown when a ComponentPortal is attached to a DomPortalHost without an origin. */
export declare class MdComponentPortalAttachedToDomWithoutOriginException extends BaseException {
    constructor();
}
/** Exception thrown when attmepting to attach a null portal to a host. */
export declare class MdNullPortalException extends BaseException {
    constructor();
}
/** Exception thrown when attmepting to attach a portal to a host that is already attached. */
export declare class MdPortalAlreadyAttachedException extends BaseException {
    constructor();
}
/** Exception thrown when attmepting to attach a portal to an already-disposed host. */
export declare class MdPortalHostAlreadyDisposedException extends BaseException {
    constructor();
}
/** Exception thrown when attmepting to attach an unknown portal type. */
export declare class MdUnknownPortalTypeException extends BaseException {
    constructor();
}
/** Exception thrown when attmepting to attach a portal to a null host. */
export declare class MdNullPortalHostException extends BaseException {
    constructor();
}
/** Exception thrown when attmepting to detach a portal that is not attached. */
export declare class MdNoPortalAttachedException extends BaseException {
    constructor();
}
