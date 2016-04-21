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
var testing_1 = require('angular2/testing');
var core_1 = require('angular2/core');
var portal_directives_1 = require('./portal-directives');
var portal_1 = require('./portal');
var portal_directives_2 = require('./portal-directives');
var testing_2 = require('angular2/testing');
var testing_3 = require('angular2/testing');
var core_2 = require('angular2/core');
var core_3 = require('angular2/core');
var dom_portal_host_1 = require('./dom-portal-host');
function main() {
    testing_1.describe('Portals', function () {
        var builder;
        testing_1.beforeEach(testing_1.inject([testing_1.TestComponentBuilder], function (tcb) {
            builder = tcb;
        }));
        testing_1.describe('PortalHostDirective', function () {
            testing_1.it('should load a component into the portal', fakeAsyncTest(function () {
                var appFixture;
                builder.createAsync(PortalTestApp).then(function (fixture) {
                    appFixture = fixture;
                });
                // Flush the async creation of the PortalTestApp.
                testing_3.flushMicrotasks();
                // Set the selectedHost to be a ComponentPortal.
                var testAppComponent = appFixture.debugElement.componentInstance;
                testAppComponent.selectedPortal = new portal_1.ComponentPortal(PizzaMsg);
                appFixture.detectChanges();
                // Flush the attachment of the Portal.
                testing_3.flushMicrotasks();
                // Expect that the content of the attached portal is present.
                var hostContainer = appFixture.nativeElement.querySelector('.portal-container');
                testing_1.expect(hostContainer.textContent).toContain('Pizza');
            }));
            testing_1.it('should load a <template> portal', fakeAsyncTest(function () {
                var appFixture;
                builder.createAsync(PortalTestApp).then(function (fixture) {
                    appFixture = fixture;
                });
                // Flush the async creation of the PortalTestApp.
                testing_3.flushMicrotasks();
                var testAppComponent = appFixture.debugElement.componentInstance;
                // Detect changes initially so that the component's ViewChildren are resolved.
                appFixture.detectChanges();
                // Set the selectedHost to be a TemplatePortal.
                testAppComponent.selectedPortal = testAppComponent.cakePortal;
                appFixture.detectChanges();
                // Flush the attachment of the Portal.
                testing_3.flushMicrotasks();
                // Expect that the content of the attached portal is present.
                var hostContainer = appFixture.nativeElement.querySelector('.portal-container');
                testing_1.expect(hostContainer.textContent).toContain('Cake');
            }));
            testing_1.it('should load a <template> portal with the `*` sugar', fakeAsyncTest(function () {
                var appFixture;
                builder.createAsync(PortalTestApp).then(function (fixture) {
                    appFixture = fixture;
                });
                // Flush the async creation of the PortalTestApp.
                testing_3.flushMicrotasks();
                var testAppComponent = appFixture.debugElement.componentInstance;
                // Detect changes initially so that the component's ViewChildren are resolved.
                appFixture.detectChanges();
                // Set the selectedHost to be a TemplatePortal (with the `*` syntax).
                testAppComponent.selectedPortal = testAppComponent.piePortal;
                appFixture.detectChanges();
                // Flush the attachment of the Portal.
                testing_3.flushMicrotasks();
                // Expect that the content of the attached portal is present.
                var hostContainer = appFixture.nativeElement.querySelector('.portal-container');
                testing_1.expect(hostContainer.textContent).toContain('Pie');
            }));
            testing_1.it('should load a <template> portal with a binding', fakeAsyncTest(function () {
                var appFixture;
                builder.createAsync(PortalTestApp).then(function (fixture) {
                    appFixture = fixture;
                });
                // Flush the async creation of the PortalTestApp.
                testing_3.flushMicrotasks();
                var testAppComponent = appFixture.debugElement.componentInstance;
                // Detect changes initially so that the component's ViewChildren are resolved.
                appFixture.detectChanges();
                // Set the selectedHost to be a TemplatePortal.
                testAppComponent.selectedPortal = testAppComponent.portalWithBinding;
                appFixture.detectChanges();
                // Flush the attachment of the Portal.
                testing_3.flushMicrotasks();
                // Now that the portal is attached, change detection has to happen again in order
                // for the bindings to update.
                appFixture.detectChanges();
                // Expect that the content of the attached portal is present.
                var hostContainer = appFixture.nativeElement.querySelector('.portal-container');
                testing_1.expect(hostContainer.textContent).toContain('Banana');
                // When updating the binding value.
                testAppComponent.fruit = 'Mango';
                appFixture.detectChanges();
                // Expect the new value to be reflected in the rendered output.
                testing_1.expect(hostContainer.textContent).toContainError('Mango');
            }));
            testing_1.it('should load a <template> portal with extra locals', fakeAsyncTest(function () {
                var appFixture;
                builder.createAsync(PortalTestApp).then(function (fixture) {
                    appFixture = fixture;
                });
                // Flush the async creation of the PortalTestApp.
                testing_3.flushMicrotasks();
                var testAppComponent = appFixture.debugElement.componentInstance;
                // Detect changes initially so that the component's ViewChildren are resolved.
                appFixture.detectChanges();
                var locals = new Map();
                locals.set('appetizer', 'Samosa');
                var templatePortal = testAppComponent.portalWithLocals;
                templatePortal.locals = locals;
                // Set the selectedHost to be a TemplatePortal.
                testAppComponent.selectedPortal = templatePortal;
                appFixture.detectChanges();
                // Flush the attachment of the Portal.
                testing_3.flushMicrotasks();
                // Now that the portal is attached, change detection has to happen again in order
                // for the bindings to update.
                appFixture.detectChanges();
                // Expect that the content of the attached portal is present.
                var hostContainer = appFixture.nativeElement.querySelector('.portal-container');
                testing_1.expect(hostContainer.textContent).toContain('Samosa');
            }));
            testing_1.it('should change the attached portal', fakeAsyncTest(function () {
                var appFixture;
                builder.createAsync(PortalTestApp).then(function (fixture) {
                    appFixture = fixture;
                });
                // Flush the async creation of the PortalTestApp.
                testing_3.flushMicrotasks();
                var testAppComponent = appFixture.debugElement.componentInstance;
                // Detect changes initially so that the component's ViewChildren are resolved.
                appFixture.detectChanges();
                // Set the selectedHost to be a ComponentPortal.
                testAppComponent.selectedPortal = testAppComponent.piePortal;
                appFixture.detectChanges();
                // Flush the attachment of the Portal.
                testing_3.flushMicrotasks();
                appFixture.detectChanges();
                // Expect that the content of the attached portal is present.
                var hostContainer = appFixture.nativeElement.querySelector('.portal-container');
                testing_1.expect(hostContainer.textContent).toContain('Pie');
                testAppComponent.selectedPortal = new portal_1.ComponentPortal(PizzaMsg);
                appFixture.detectChanges();
                testing_3.flushMicrotasks();
                testing_1.expect(hostContainer.textContent).toContain('Pizza');
            }));
        });
        testing_1.describe('DomPortalHost', function () {
            var componentLoader;
            var viewManager;
            var someElementRef;
            var someDomElement;
            var host;
            testing_1.beforeEach(testing_1.inject([core_2.DynamicComponentLoader, core_3.AppViewManager], testing_2.fakeAsync(function (dcl, avm) {
                viewManager = avm;
                componentLoader = dcl;
                someDomElement = document.createElement('div');
                host = new dom_portal_host_1.DomPortalHost(someDomElement, componentLoader, viewManager);
                builder.createAsync(ArbitraryElementRefComponent).then(function (fixture) {
                    someElementRef = fixture.componentInstance.elementRef;
                });
                testing_3.flushMicrotasks();
            })));
            testing_1.it('should attach and detach a component portal', fakeAsyncTest(function () {
                var portal = new portal_1.ComponentPortal(PizzaMsg, someElementRef);
                var componentInstance;
                portal.attach(host).then(function (ref) {
                    componentInstance = ref.instance;
                });
                testing_3.flushMicrotasks();
                testing_1.expect(componentInstance).toBeAnInstanceOf(PizzaMsg);
                testing_1.expect(someDomElement.textContent).toContain('Pizza');
                host.detach();
                testing_3.flushMicrotasks();
                testing_1.expect(someDomElement.innerHTML).toBe('');
            }));
            testing_1.it('should attach and detach a template portal', fakeAsyncTest(function () {
                var appFixture;
                builder.createAsync(PortalTestApp).then(function (fixture) {
                    appFixture = fixture;
                });
                // Flush the async creation of the PortalTestApp.
                testing_3.flushMicrotasks();
                appFixture.detectChanges();
                appFixture.componentInstance.cakePortal.attach(host);
                testing_3.flushMicrotasks();
                testing_1.expect(someDomElement.textContent).toContain('Cake');
            }));
            testing_1.it('should attach and detach a template portal with a binding', fakeAsyncTest(function () {
                var appFixture;
                builder.createAsync(PortalTestApp).then(function (fixture) {
                    appFixture = fixture;
                });
                // Flush the async creation of the PortalTestApp.
                testing_3.flushMicrotasks();
                var testAppComponent = appFixture.debugElement.componentInstance;
                // Detect changes initially so that the component's ViewChildren are resolved.
                appFixture.detectChanges();
                // Attach the TemplatePortal.
                testAppComponent.portalWithBinding.attach(host);
                appFixture.detectChanges();
                // Flush the attachment of the Portal.
                testing_3.flushMicrotasks();
                // Now that the portal is attached, change detection has to happen again in order
                // for the bindings to update.
                appFixture.detectChanges();
                // Expect that the content of the attached portal is present.
                testing_1.expect(someDomElement.textContent).toContain('Banana');
                // When updating the binding value.
                testAppComponent.fruit = 'Mango';
                appFixture.detectChanges();
                // Expect the new value to be reflected in the rendered output.
                testing_1.expect(someDomElement.textContent).toContainError('Mango');
                host.detach();
                testing_1.expect(someDomElement.innerHTML).toBe('');
            }));
            testing_1.it('should change the attached portal', fakeAsyncTest(function () {
                var appFixture;
                builder.createAsync(PortalTestApp).then(function (fixture) {
                    appFixture = fixture;
                });
                // Flush the async creation of the PortalTestApp.
                testing_3.flushMicrotasks();
                appFixture.detectChanges();
                appFixture.componentInstance.piePortal.attach(host);
                testing_3.flushMicrotasks();
                testing_1.expect(someDomElement.textContent).toContain('Pie');
                host.detach();
                testing_3.flushMicrotasks();
                host.attach(new portal_1.ComponentPortal(PizzaMsg, someElementRef));
                testing_3.flushMicrotasks();
                testing_1.expect(someDomElement.textContent).toContain('Pizza');
            }));
        });
    });
}
exports.main = main;
/** Simple component for testing ComponentPortal. */
var PizzaMsg = (function () {
    function PizzaMsg() {
    }
    PizzaMsg = __decorate([
        core_1.Component({
            selector: 'pizza-msg',
            template: '<p>Pizza</p>',
        }), 
        __metadata('design:paramtypes', [])
    ], PizzaMsg);
    return PizzaMsg;
}());
/** Simple component to grab an arbitrary ElementRef */
var ArbitraryElementRefComponent = (function () {
    function ArbitraryElementRefComponent(elementRef) {
        this.elementRef = elementRef;
    }
    ArbitraryElementRefComponent = __decorate([
        core_1.Component({
            selector: 'some-placeholder',
            template: '<p>Hello</p>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ArbitraryElementRefComponent);
    return ArbitraryElementRefComponent;
}());
/** Test-bed component that contains a portal host and a couple of template portals. */
var PortalTestApp = (function () {
    function PortalTestApp() {
        this.fruit = 'Banana';
    }
    Object.defineProperty(PortalTestApp.prototype, "cakePortal", {
        get: function () {
            return this.portals.first;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PortalTestApp.prototype, "piePortal", {
        get: function () {
            return this.portals.toArray()[1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PortalTestApp.prototype, "portalWithBinding", {
        get: function () {
            return this.portals.toArray()[2];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PortalTestApp.prototype, "portalWithLocals", {
        get: function () {
            return this.portals.last;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.ViewChildren(portal_directives_1.TemplatePortalDirective), 
        __metadata('design:type', core_1.QueryList)
    ], PortalTestApp.prototype, "portals", void 0);
    PortalTestApp = __decorate([
        core_1.Component({
            selector: 'portal-test',
            template: "\n  <div class=\"portal-container\">\n    <template [portalHost]=\"selectedPortal\"></template>\n  </div>\n\n  <template portal>Cake</template>\n\n  <div *portal>Pie</div>\n\n  <template portal> {{fruit}} </template>\n\n  <template portal #yum=\"appetizer\">{{yum}}</template>\n  ",
            directives: [portal_directives_2.PortalHostDirective, portal_directives_1.TemplatePortalDirective],
        }), 
        __metadata('design:paramtypes', [])
    ], PortalTestApp);
    return PortalTestApp;
}());
function fakeAsyncTest(fn) {
    return testing_1.inject([], testing_2.fakeAsync(fn));
}
//# sourceMappingURL=portal.spec.js.map