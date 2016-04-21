import { DynamicComponentLoader, AppViewManager, ComponentRef } from 'angular2/core';
import { BasePortalHost, ComponentPortal, TemplatePortal } from './portal';
/**
 * A PortalHost for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 *
 * This is the only part of the portal core that directly touches the DOM.
 */
export declare class DomPortalHost extends BasePortalHost {
    private _hostDomElement;
    private _componentLoader;
    private _viewManager;
    constructor(_hostDomElement: Element, _componentLoader: DynamicComponentLoader, _viewManager: AppViewManager);
    /** Attach the given ComponentPortal to DOM element using the DynamicComponentLoader. */
    attachComponentPortal(portal: ComponentPortal): Promise<ComponentRef>;
    attachTemplatePortal(portal: TemplatePortal): Promise<Map<string, any>>;
    dispose(): void;
}
