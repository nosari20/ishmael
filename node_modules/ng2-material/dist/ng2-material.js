System.register("ng2-material/components/content/content.ts", ["angular2/core.js"], function(exports_1) {
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
    var core_1;
    var MdContent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /**
             * @name mdContent
             *
             * @description
             * The `<md-content>` directive is a container element useful for scrollable content
             *
             * @usage
             *
             * - Add the `[layout-padding]` attribute to make the content padded.
             *
             * <hljs lang="html">
             *  <md-content layout-padding>
             *      Lorem ipsum dolor sit amet, ne quod novum mei.
             *  </md-content>
             * </hljs>
             *
             */
            MdContent = (function () {
                function MdContent() {
                }
                MdContent = __decorate([
                    core_1.Directive({ selector: 'md-content' }), 
                    __metadata('design:paramtypes', [])
                ], MdContent);
                return MdContent;
            }());
            exports_1("MdContent", MdContent);
        }
    }
});

System.register("ng2-material/components/dialog/dialog_config.ts", [], function(exports_1) {
    "use strict";
    var MdDialogConfig;
    return {
        setters:[],
        execute: function() {
            /** Configuration for a dialog to be opened. */
            MdDialogConfig = (function () {
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
            exports_1("MdDialogConfig", MdDialogConfig);
        }
    }
});

System.register("ng2-material/components/dialog/dialog_container.ts", ["angular2/core.js", "ng2-material/core/key_codes.ts"], function(exports_1) {
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
    var core_1, key_codes_1;
    var MdDialogContainer, MdDialogContent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (key_codes_1_1) {
                key_codes_1 = key_codes_1_1;
            }],
        execute: function() {
            /**
             * Container for user-provided dialog content.
             */
            MdDialogContainer = (function () {
                function MdDialogContainer() {
                    this.contentRef = null;
                    this.dialogRef = null;
                }
                MdDialogContainer.prototype.wrapFocus = function () {
                    // Return the focus to the host element. Blocked on #1251.
                };
                MdDialogContainer.prototype.documentKeypress = function (event) {
                    if (event.keyCode == key_codes_1.KeyCodes.ESCAPE) {
                        this.dialogRef.close();
                    }
                };
                MdDialogContainer = __decorate([
                    core_1.Component({
                        selector: 'md-dialog-container',
                        encapsulation: core_1.ViewEncapsulation.None,
                        template: "\n    <md-dialog-content></md-dialog-content>\n    <div tabindex=\"0\" (focus)=\"wrapFocus()\"></div>",
                        directives: [core_1.forwardRef(function () { return MdDialogContent; })],
                        host: {
                            'class': 'md-dialog',
                            'tabindex': '0',
                            '(body:keydown)': 'documentKeypress($event)',
                        },
                    }), 
                    __metadata('design:paramtypes', [])
                ], MdDialogContainer);
                return MdDialogContainer;
            }());
            exports_1("MdDialogContainer", MdDialogContainer);
            /**
             * Simple decorator used only to communicate an ElementRef to the parent MdDialogContainer as the
             * location for where the dialog content will be loaded.
             */
            MdDialogContent = (function () {
                function MdDialogContent(dialogContainer, elementRef) {
                    dialogContainer.contentRef = elementRef;
                }
                MdDialogContent = __decorate([
                    core_1.Directive({
                        selector: 'md-dialog-content'
                    }),
                    __param(0, core_1.Host()),
                    __param(0, core_1.SkipSelf()), 
                    __metadata('design:paramtypes', [MdDialogContainer, (typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
                ], MdDialogContent);
                return MdDialogContent;
                var _a;
            }());
            exports_1("MdDialogContent", MdDialogContent);
        }
    }
});

System.register("ng2-material/components/button/button.ts", ["angular2/core.js", "angular2/src/facade/async.js", "angular2/src/facade/lang.js", "ng2-material/core/util/ink.ts"], function(exports_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, async_1, lang_1, ink_1;
    var BUTTON_TEMPLATE, MdButton, MdAnchor;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (ink_1_1) {
                ink_1 = ink_1_1;
            }],
        execute: function() {
            BUTTON_TEMPLATE = "<span class=\"md-button-wrapper\"><ng-content></ng-content></span>";
            // TODO(jelbourn): Make the `isMouseDown` stuff done with one global listener.
            MdButton = (function () {
                function MdButton(_element) {
                    this._element = _element;
                    /** Whether a mousedown has occured on this element in the last 100ms. */
                    this.isMouseDown = false;
                    /** Whether the button has focus from the keyboard (not the mouse). Used for class binding. */
                    this.isKeyboardFocused = false;
                }
                MdButton.prototype.onMousedown = function (event) {
                    var _this = this;
                    // We only *show* the focus style when focus has come to the button via the keyboard.
                    // The Material Design spec is silent on this topic, and without doing this, the
                    // button continues to look :active after clicking.
                    // @see http://marcysutton.com/button-focus-hell/
                    this.isMouseDown = true;
                    async_1.TimerWrapper.setTimeout(function () {
                        _this.isMouseDown = false;
                    }, 100);
                    if (this._element && ink_1.Ink.canApply(this._element.nativeElement)) {
                        ink_1.Ink.rippleEvent(this._element.nativeElement, event);
                    }
                };
                MdButton.prototype.onFocus = function () {
                    this.isKeyboardFocused = !this.isMouseDown;
                };
                MdButton.prototype.onBlur = function () {
                    this.isKeyboardFocused = false;
                };
                MdButton = __decorate([
                    core_1.Component({
                        selector: '[md-button]:not(a), [md-fab]:not(a), [md-raised-button]:not(a)',
                        template: BUTTON_TEMPLATE,
                        encapsulation: core_1.ViewEncapsulation.None,
                        host: {
                            '(mousedown)': 'onMousedown($event)',
                            '(focus)': 'onFocus()',
                            '(blur)': 'onBlur()',
                            '[class.md-button-focus]': 'isKeyboardFocused',
                        },
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
                ], MdButton);
                return MdButton;
                var _a;
            }());
            exports_1("MdButton", MdButton);
            MdAnchor = (function (_super) {
                __extends(MdAnchor, _super);
                function MdAnchor() {
                    _super.apply(this, arguments);
                }
                Object.defineProperty(MdAnchor.prototype, "disabled", {
                    get: function () {
                        return this.disabled_;
                    },
                    set: function (value) {
                        // The presence of *any* disabled value makes the component disabled, *except* for false.
                        this.disabled_ = lang_1.isPresent(value) && this.disabled !== false;
                    },
                    enumerable: true,
                    configurable: true
                });
                MdAnchor.prototype.onClick = function (event) {
                    // A disabled anchor shouldn't navigate anywhere.
                    if (this.disabled) {
                        event.preventDefault();
                    }
                };
                /** Invoked when a change is detected. */
                MdAnchor.prototype.ngOnChanges = function (_) {
                    // A disabled anchor should not be in the tab flow.
                    this.tabIndex = this.disabled ? -1 : 0;
                };
                Object.defineProperty(MdAnchor.prototype, "isAriaDisabled", {
                    /** Gets the aria-disabled value for the component, which must be a string for Dart. */
                    get: function () {
                        return this.disabled ? 'true' : 'false';
                    },
                    enumerable: true,
                    configurable: true
                });
                MdAnchor = __decorate([
                    core_1.Component({
                        selector: 'a[md-button], a[md-raised-button], a[md-fab]',
                        inputs: ['disabled'],
                        template: BUTTON_TEMPLATE,
                        encapsulation: core_1.ViewEncapsulation.None,
                        host: {
                            '(click)': 'onClick($event)',
                            '(mousedown)': 'onMousedown()',
                            '(focus)': 'onFocus()',
                            '(blur)': 'onBlur()',
                            '[tabIndex]': 'tabIndex',
                            '[class.md-button-focus]': 'isKeyboardFocused',
                            '[attr.aria-disabled]': 'isAriaDisabled',
                        },
                    }), 
                    __metadata('design:paramtypes', [])
                ], MdAnchor);
                return MdAnchor;
            }(MdButton));
            exports_1("MdAnchor", MdAnchor);
        }
    }
});

System.register("ng2-material/components/dialog/dialog_ref.ts", ["angular2/src/facade/promise.js", "ng2-material/core/util/animate.ts", "angular2/src/facade/lang.js"], function(exports_1) {
    "use strict";
    var promise_1, animate_1, lang_1;
    var MdDialogRef;
    return {
        setters:[
            function (promise_1_1) {
                promise_1 = promise_1_1;
            },
            function (animate_1_1) {
                animate_1 = animate_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            }],
        execute: function() {
            /**
             * Reference to an opened dialog.
             */
            MdDialogRef = (function () {
                function MdDialogRef() {
                    /**
                     * The backdrop hiding subscription
                     * @private
                     */
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
                    /**
                     * Gets the component instance for the content of the dialog.
                     */
                    get: function () {
                        if (lang_1.isPresent(this._contentRef)) {
                            return this._contentRef.instance;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdDialogRef.prototype, "whenClosed", {
                    /**
                     * Gets a promise that is resolved when the dialog is closed.
                     */
                    get: function () {
                        return this.whenClosedDeferred.promise;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Closes the dialog. This operation is asynchronous.
                 */
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
            exports_1("MdDialogRef", MdDialogRef);
        }
    }
});

System.register("ng2-material/components/dialog/dialog_basic.ts", ["angular2/common.js", "ng2-material/components/button/button.ts", "angular2/core.js", "ng2-material/components/dialog/dialog_ref.ts"], function(exports_1) {
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
    var common_1, button_1, core_1, dialog_ref_1;
    var MdDialogBasic;
    return {
        setters:[
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dialog_ref_1_1) {
                dialog_ref_1 = dialog_ref_1_1;
            }],
        execute: function() {
            MdDialogBasic = (function () {
                function MdDialogBasic(dialog) {
                    this.dialog = dialog;
                    this.title = '';
                    this.textContent = '';
                    this.cancel = '';
                    this.ok = '';
                    this.type = 'alert';
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MdDialogBasic.prototype, "title", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MdDialogBasic.prototype, "textContent", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MdDialogBasic.prototype, "cancel", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MdDialogBasic.prototype, "ok", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MdDialogBasic.prototype, "type", void 0);
                MdDialogBasic = __decorate([
                    core_1.Component({
                        selector: 'md-dialog-basic',
                        template: "\n  <h2 class=\"md-title\">{{ title }}</h2>\n  <p>{{ textContent }}</p>\n  <md-dialog-actions>\n    <template [ngIf]=\"cancel != ''\">\n    <button md-button type=\"button\" (click)=\"dialog.close(false)\">\n      <span>{{ cancel }}</span>\n    </button>    \n    </template>\n    <template [ngIf]=\"ok != ''\">\n    <button md-button class=\"md-primary\" type=\"button\" (click)=\"dialog.close(true)\">\n      <span>{{ ok }}</span>\n    </button>\n    </template>\n  </md-dialog-actions>",
                        directives: [button_1.MdButton, common_1.NgIf]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof dialog_ref_1.MdDialogRef !== 'undefined' && dialog_ref_1.MdDialogRef) === 'function' && _a) || Object])
                ], MdDialogBasic);
                return MdDialogBasic;
                var _a;
            }());
            exports_1("MdDialogBasic", MdDialogBasic);
        }
    }
});

System.register("ng2-material/components/dialog/dialog.ts", ["angular2/core.js", "angular2/src/facade/lang.js", "ng2-material/components/dialog/dialog_ref.ts", "ng2-material/components/dialog/dialog_config.ts", "ng2-material/components/dialog/dialog_container.ts", "ng2-material/components/backdrop/backdrop.ts", "angular2/src/platform/dom/dom_adapter.js", "ng2-material/core/util/animate.ts", "ng2-material/components/dialog/dialog_basic.ts"], function(exports_1) {
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
    var core_1, lang_1, dialog_ref_1, dialog_config_1, dialog_container_1, backdrop_1, dom_adapter_1, animate_1;
    var MdDialog;
    var exportedNames_1 = {
        'MdDialog': true
    };
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default"&& !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (dialog_ref_1_1) {
                dialog_ref_1 = dialog_ref_1_1;
                exportStar_1(dialog_ref_1_1);
            },
            function (dialog_config_1_1) {
                dialog_config_1 = dialog_config_1_1;
                exportStar_1(dialog_config_1_1);
            },
            function (dialog_container_1_1) {
                dialog_container_1 = dialog_container_1_1;
                exportStar_1(dialog_container_1_1);
            },
            function (backdrop_1_1) {
                backdrop_1 = backdrop_1_1;
            },
            function (dom_adapter_1_1) {
                dom_adapter_1 = dom_adapter_1_1;
            },
            function (animate_1_1) {
                animate_1 = animate_1_1;
            },
            function (dialog_basic_1_1) {
                exportStar_1(dialog_basic_1_1);
            }],
        execute: function() {
            // TODO(jelbourn): Wrap focus from end of dialog back to the start. Blocked on #1251
            // TODO(jelbourn): Focus the dialog element when it is opened.
            // TODO(jelbourn): Pre-built `alert` and `confirm` dialogs.
            // TODO(jelbourn): Animate dialog out of / into opening element.
            /**
             * Service for opening modal dialogs.
             */
            MdDialog = (function () {
                function MdDialog(componentLoader, rootRenderer) {
                    this.componentLoader = componentLoader;
                    /**
                     * Renderer for manipulating dialog and backdrop component elements.
                     * @private
                     */
                    this._renderer = null;
                    this._defaultContainer = dom_adapter_1.DOM.query('body');
                    var type = new core_1.RenderComponentType("__md-dialog-" + MdDialog._uniqueId++, core_1.ViewEncapsulation.None, []);
                    this._renderer = rootRenderer.renderComponent(type);
                }
                /**
                 * Opens a modal dialog.
                 * @param type The component to open.
                 * @param elementRef The logical location into which the component will be opened.
                 * @param options
                 * @returns Promise for a reference to the dialog.
                 */
                MdDialog.prototype.open = function (type, elementRef, options) {
                    var _this = this;
                    if (options === void 0) { options = new dialog_config_1.MdDialogConfig(); }
                    // Create the dialogRef here so that it can be injected into the content component.
                    var dialogRef = new dialog_ref_1.MdDialogRef();
                    var bindings = core_1.Injector.resolve([core_1.APPLICATION_COMMON_PROVIDERS, core_1.provide(dialog_ref_1.MdDialogRef, { useValue: dialogRef })]);
                    var backdropRefPromise = this._openBackdrop(elementRef, bindings, options);
                    // First, load the MdDialogContainer, into which the given component will be loaded.
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
                        // Now load the given component into the MdDialogContainer.
                        return _this.componentLoader.loadNextToLocation(type, containerRef.instance.contentRef, bindings)
                            .then(function (contentRef) {
                            Object.keys(options.context).forEach(function (key) {
                                contentRef.instance[key] = options.context[key];
                            });
                            // Wrap both component refs for the container and the content so that we can return
                            // the `instance` of the content but the dispose method of the container back to the
                            // opener.
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
                /** Loads the dialog backdrop (transparent overlay over the rest of the page). */
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
                /**
                 * Unique id counter for RenderComponentType.
                 * @private
                 */
                MdDialog._uniqueId = 0;
                MdDialog = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof core_1.DynamicComponentLoader !== 'undefined' && core_1.DynamicComponentLoader) === 'function' && _a) || Object, (typeof (_b = typeof core_1.RootRenderer !== 'undefined' && core_1.RootRenderer) === 'function' && _b) || Object])
                ], MdDialog);
                return MdDialog;
                var _a, _b;
            }());
            exports_1("MdDialog", MdDialog);
        }
    }
});

System.register("ng2-material/components/divider/divider.ts", ["angular2/core.js"], function(exports_1) {
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
    var core_1;
    var MdDivider;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /**
             * @name mdDivider
             *
             * @description
             * Dividers group and separate content within lists and page layouts using strong visual and spatial distinctions. This divider is a thin rule, lightweight enough to not distract the user from content.
             *
             * @param {boolean=} md-inset Add this attribute to activate the inset divider style.
             * @usage
             * <hljs lang="html">
             * <md-divider></md-divider>
             *
             * <md-divider md-inset></md-divider>
             * </hljs>
             *
             */
            MdDivider = (function () {
                function MdDivider() {
                }
                MdDivider = __decorate([
                    core_1.Component({
                        selector: 'md-divider',
                        template: '',
                        encapsulation: core_1.ViewEncapsulation.None
                    }), 
                    __metadata('design:paramtypes', [])
                ], MdDivider);
                return MdDivider;
            }());
            exports_1("MdDivider", MdDivider);
        }
    }
});

System.register("ng2-material/components/icon/icon.ts", ["angular2/core.js"], function(exports_1) {
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
    var core_1;
    var MdIcon;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MdIcon = (function () {
                function MdIcon() {
                }
                MdIcon = __decorate([
                    core_1.Directive({
                        selector: '[md-icon], .md-icon',
                        host: {
                            '[class.material-icons]': 'true'
                        }
                    }), 
                    __metadata('design:paramtypes', [])
                ], MdIcon);
                return MdIcon;
            }());
            exports_1("MdIcon", MdIcon);
        }
    }
});

System.register("ng2-material/components/ink/ink.ts", ["angular2/core.js", "ng2-material/core/util/ink.ts"], function(exports_1) {
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
    var core_1, ink_1;
    var MdInk;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ink_1_1) {
                ink_1 = ink_1_1;
            }],
        execute: function() {
            MdInk = (function () {
                function MdInk(_element) {
                    this._element = _element;
                    this.inked = new core_1.EventEmitter(false);
                }
                MdInk.prototype.onMousedown = function (event) {
                    var _this = this;
                    if (this._element && ink_1.Ink.canApply(this._element.nativeElement)) {
                        ink_1.Ink.rippleEvent(this._element.nativeElement, event).then(function () {
                            _this.inked.emit(_this);
                        });
                    }
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
                ], MdInk.prototype, "inked", void 0);
                MdInk = __decorate([
                    core_1.Directive({
                        selector: '[md-ink]',
                        host: {
                            '(mousedown)': 'onMousedown($event)'
                        },
                    }), 
                    __metadata('design:paramtypes', [(typeof (_b = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _b) || Object])
                ], MdInk);
                return MdInk;
                var _a, _b;
            }());
            exports_1("MdInk", MdInk);
        }
    }
});

System.register("ng2-material/components/form/validators.ts", ["angular2/src/facade/lang.js", "angular2/common.js", "angular2/core.js", "ng2-material/core/util/util.ts"], function(exports_1) {
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
    var lang_1, common_1, core_1, util_1;
    var PATTERN_VALIDATOR, MdPatternValidator, MAXLENGTH_VALIDATOR, MdMaxLengthValidator, MAXVALUE_VALIDATOR, MdMaxValueValidator, MINVALUE_VALIDATOR, MdMinValueValidator, NUMBER_REQUIRED_VALIDATOR, MdNumberRequiredValidator, INPUT_VALIDATORS;
    return {
        setters:[
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (util_1_1) {
                util_1 = util_1_1;
            }],
        execute: function() {
            PATTERN_VALIDATOR = lang_1.CONST_EXPR(new core_1.Provider(common_1.NG_VALIDATORS, {
                useExisting: core_1.forwardRef(function () { return MdPatternValidator; }),
                multi: true
            }));
            MdPatternValidator = (function () {
                function MdPatternValidator() {
                }
                /**
                 * Returns a validator that checks to see if a string matches a given Regular Expression
                 */
                MdPatternValidator.inline = function (pattern) {
                    return function validate(control) {
                        if (control.value === '' || new RegExp(pattern).test(control.value)) {
                            return null;
                        }
                        return {
                            mdPattern: true
                        };
                    };
                };
                MdPatternValidator.prototype.validate = function (control) {
                    return MdPatternValidator.inline(this.mdPattern)(control);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MdPatternValidator.prototype, "mdPattern", void 0);
                MdPatternValidator = __decorate([
                    core_1.Directive({
                        selector: '[mdPattern]',
                        providers: [PATTERN_VALIDATOR]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MdPatternValidator);
                return MdPatternValidator;
            }());
            exports_1("MdPatternValidator", MdPatternValidator);
            MAXLENGTH_VALIDATOR = lang_1.CONST_EXPR(new core_1.Provider(common_1.NG_VALIDATORS, {
                useExisting: core_1.forwardRef(function () { return MdMaxLengthValidator; }),
                multi: true
            }));
            MdMaxLengthValidator = (function () {
                function MdMaxLengthValidator() {
                }
                /**
                 * Returns a validator that checks for a maximum length of a string
                 */
                MdMaxLengthValidator.inline = function (length) {
                    return function validate(control) {
                        if (!control.value || control.value.length <= length) {
                            return null;
                        }
                        return {
                            mdMaxLength: true
                        };
                    };
                };
                MdMaxLengthValidator.prototype.validate = function (control) {
                    return MdMaxLengthValidator.inline(this.mdMaxLength)(control);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MdMaxLengthValidator.prototype, "mdMaxLength", void 0);
                MdMaxLengthValidator = __decorate([
                    core_1.Directive({ selector: '[mdMaxLength]', providers: [MAXLENGTH_VALIDATOR] }), 
                    __metadata('design:paramtypes', [])
                ], MdMaxLengthValidator);
                return MdMaxLengthValidator;
            }());
            exports_1("MdMaxLengthValidator", MdMaxLengthValidator);
            MAXVALUE_VALIDATOR = lang_1.CONST_EXPR(new core_1.Provider(common_1.NG_VALIDATORS, {
                useExisting: core_1.forwardRef(function () { return MdMaxValueValidator; }),
                multi: true
            }));
            MdMaxValueValidator = (function () {
                function MdMaxValueValidator() {
                }
                /**
                 * Returns a validator that checks for a maximum number value
                 */
                MdMaxValueValidator.inline = function (length) {
                    return function validate(control) {
                        if (lang_1.NumberWrapper.isNaN(control.value) || control.value <= length) {
                            return null;
                        }
                        return {
                            mdMax: true
                        };
                    };
                };
                MdMaxValueValidator.prototype.validate = function (control) {
                    return MdMaxValueValidator.inline(this.mdMax)(control);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MdMaxValueValidator.prototype, "mdMax", void 0);
                MdMaxValueValidator = __decorate([
                    core_1.Directive({ selector: '[mdMax]', providers: [MAXVALUE_VALIDATOR] }), 
                    __metadata('design:paramtypes', [])
                ], MdMaxValueValidator);
                return MdMaxValueValidator;
            }());
            exports_1("MdMaxValueValidator", MdMaxValueValidator);
            MINVALUE_VALIDATOR = lang_1.CONST_EXPR(new core_1.Provider(common_1.NG_VALIDATORS, {
                useExisting: core_1.forwardRef(function () { return MdMinValueValidator; }),
                multi: true
            }));
            MdMinValueValidator = (function () {
                function MdMinValueValidator() {
                }
                /**
                 * Returns a validator that checks for a minimum number value
                 */
                MdMinValueValidator.inline = function (length) {
                    return function validate(control) {
                        if (lang_1.NumberWrapper.isNaN(control.value) || control.value >= length) {
                            return null;
                        }
                        return {
                            mdMin: true
                        };
                    };
                };
                MdMinValueValidator.prototype.validate = function (control) {
                    return MdMinValueValidator.inline(this.mdMin)(control);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MdMinValueValidator.prototype, "mdMin", void 0);
                MdMinValueValidator = __decorate([
                    core_1.Directive({ selector: '[mdMin]', providers: [MINVALUE_VALIDATOR] }), 
                    __metadata('design:paramtypes', [])
                ], MdMinValueValidator);
                return MdMinValueValidator;
            }());
            exports_1("MdMinValueValidator", MdMinValueValidator);
            NUMBER_REQUIRED_VALIDATOR = lang_1.CONST_EXPR(new core_1.Provider(common_1.NG_VALIDATORS, {
                useExisting: core_1.forwardRef(function () { return MdNumberRequiredValidator; }),
                multi: true
            }));
            MdNumberRequiredValidator = (function () {
                function MdNumberRequiredValidator() {
                }
                /**
                 * Returns a validator that checks for the existence of a truthy value
                 */
                MdNumberRequiredValidator.inline = function () {
                    return function validate(control) {
                        var isNum = !lang_1.NumberWrapper.isNaN(control.value) && util_1.isNumber(control.value);
                        return isNum ? null : { mdNumberRequired: true };
                    };
                };
                MdNumberRequiredValidator.prototype.validate = function (control) {
                    return MdNumberRequiredValidator.inline()(control);
                };
                MdNumberRequiredValidator = __decorate([
                    core_1.Directive({ selector: '[mdNumberRequired]', providers: [NUMBER_REQUIRED_VALIDATOR] }), 
                    __metadata('design:paramtypes', [])
                ], MdNumberRequiredValidator);
                return MdNumberRequiredValidator;
            }());
            exports_1("MdNumberRequiredValidator", MdNumberRequiredValidator);
            exports_1("INPUT_VALIDATORS", INPUT_VALIDATORS = [
                MdMaxLengthValidator,
                MdPatternValidator,
                MdMaxValueValidator,
                MdMinValueValidator,
                MdNumberRequiredValidator
            ]);
        }
    }
});

System.register("ng2-material/components/form/messages.ts", ["angular2/src/facade/lang.js", "angular2/common.js", "angular2/core.js"], function(exports_1) {
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
    var lang_1, common_1, core_1;
    var MdMessage, MdMessages;
    return {
        setters:[
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // TODO(jd): Behaviors to test
            // - md-messages with no md-message children act as message for all errors in a field
            // - md-message="propName" binds to FormBuilder group by given name
            // - [md-message]="viewLocal" binds to given NgControlName referenced from the view
            // - [md-messages] adds md-valid and md-invalid class based on field validation state
            // - throws informative errors when it fails to bind to a given form field because it cannot be found.
            MdMessage = (function () {
                function MdMessage() {
                    this.okay = true;
                }
                __decorate([
                    core_1.Input('md-message'), 
                    __metadata('design:type', String)
                ], MdMessage.prototype, "errorKey", void 0);
                MdMessage = __decorate([
                    core_1.Directive({
                        selector: '[md-message]',
                        host: {
                            '[style.display]': 'okay ? "none" : "inherit"'
                        }
                    }), 
                    __metadata('design:paramtypes', [])
                ], MdMessage);
                return MdMessage;
            }());
            exports_1("MdMessage", MdMessage);
            MdMessages = (function () {
                function MdMessages(messages, form) {
                    this.messages = messages;
                    this.form = form;
                    /**
                     * Subscription to value changes that is to be dropped when the component is destroyed.
                     * @type {null}
                     * @private
                     */
                    this._unsubscribe = null;
                }
                Object.defineProperty(MdMessages.prototype, "valid", {
                    get: function () {
                        if (this.property instanceof common_1.NgControlName) {
                            var ctrl_1 = this.property;
                            return !!ctrl_1.valid;
                        }
                        var prop = this.property;
                        var group = this.form.control;
                        var ctrl = group.controls[prop];
                        return ctrl && ctrl.valid;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdMessages.prototype, "isTouched", {
                    get: function () {
                        if (this.property instanceof common_1.NgControlName) {
                            return this.property.touched;
                        }
                        var prop = this.property;
                        var group = this.form.control;
                        var ctrl = group.controls[prop];
                        return ctrl && ctrl.touched;
                    },
                    enumerable: true,
                    configurable: true
                });
                MdMessages.prototype.ngOnInit = function () {
                    if (this.property instanceof common_1.NgControlName) {
                        var ctrl = this.property;
                        this.form = ctrl.formDirective;
                        this._unsubscribe = ctrl.update.subscribe(this._valueChanged.bind(this));
                    }
                    else {
                        if (!this.form) {
                            throw new Error('md-messages cannot bind to text property without a parent NgFormModel');
                        }
                        var prop = this.property;
                        var group = this.form.control;
                        if (!group) {
                            throw new Error('md-messages cannot bind to text property without a ControlGroup');
                        }
                        var ctrl = group.controls[prop];
                        if (!ctrl) {
                            throw new Error("md-messages cannot find property(" + prop + ") in ControlGroup!");
                        }
                        this._unsubscribe = ctrl.valueChanges.subscribe(this._valueChanged.bind(this));
                    }
                };
                MdMessages.prototype.ngOnDestroy = function () {
                    this._unsubscribe.unsubscribe();
                };
                MdMessages.prototype._valueChanged = function () {
                    var errors = null;
                    if (this.property instanceof common_1.NgControlName) {
                        var ctrl = this.property;
                        errors = ctrl.errors;
                    }
                    else {
                        var prop = this.property;
                        var group = this.form.control;
                        var ctrl = group.controls[prop];
                        errors = ctrl.errors;
                    }
                    if (errors) {
                        this.messages.toArray().forEach(function (m) {
                            m.okay = !m.errorKey ? !errors : !lang_1.isPresent(errors[m.errorKey]);
                        });
                    }
                };
                __decorate([
                    core_1.Input('md-messages'), 
                    __metadata('design:type', Object)
                ], MdMessages.prototype, "property", void 0);
                MdMessages = __decorate([
                    core_1.Directive({
                        selector: '[md-messages]',
                        host: {
                            'md-messages': '',
                            '[style.display]': '(valid || !isTouched) ? "none" : "inherit"',
                            '[class.md-valid]': 'valid && isTouched',
                            '[class.md-invalid]': '!valid && isTouched'
                        }
                    }),
                    __param(0, core_1.Query(MdMessage)),
                    __param(1, core_1.Optional()),
                    __param(1, core_1.SkipSelf()),
                    __param(1, core_1.Host()), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof core_1.QueryList !== 'undefined' && core_1.QueryList) === 'function' && _a) || Object, (typeof (_b = typeof common_1.NgFormModel !== 'undefined' && common_1.NgFormModel) === 'function' && _b) || Object])
                ], MdMessages);
                return MdMessages;
                var _a, _b;
            }());
            exports_1("MdMessages", MdMessages);
        }
    }
});

System.register("ng2-material/components/input/input.ts", ["angular2/core.js", "angular2/common.js", "angular2/src/facade/async.js", "angular2/src/facade/lang.js", "angular2/src/platform/dom/dom_adapter.js"], function(exports_1) {
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
    var core_1, common_1, async_1, lang_1, dom_adapter_1;
    var MdInput, MdInputContainer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (dom_adapter_1_1) {
                dom_adapter_1 = dom_adapter_1_1;
            }],
        execute: function() {
            // TODO(jd): <select> hasFocus/hasValue classes
            // TODO(jd): input container validation styles.
            // TODO(jelbourn): textarea resizing
            // TODO(jelbourn): max-length counter
            MdInput = (function () {
                function MdInput() {
                    this.mdChange = new async_1.EventEmitter();
                    this.mdFocusChange = new async_1.EventEmitter(false);
                }
                Object.defineProperty(MdInput.prototype, "value", {
                    get: function () {
                        return !lang_1.isBlank(this._value) ? this._value : '';
                    },
                    set: function (value) {
                        this._value = value;
                        async_1.ObservableWrapper.callEmit(this.mdChange, this.value);
                    },
                    enumerable: true,
                    configurable: true
                });
                MdInput.prototype.setHasFocus = function (hasFocus) {
                    async_1.ObservableWrapper.callEmit(this.mdFocusChange, hasFocus);
                };
                __decorate([
                    core_1.Input('value'), 
                    __metadata('design:type', String), 
                    __metadata('design:paramtypes', [String])
                ], MdInput.prototype, "value", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MdInput.prototype, "placeholder", void 0);
                __decorate([
                    core_1.Output('valueChange'), 
                    __metadata('design:type', (typeof (_a = typeof async_1.EventEmitter !== 'undefined' && async_1.EventEmitter) === 'function' && _a) || Object)
                ], MdInput.prototype, "mdChange", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', (typeof (_b = typeof async_1.EventEmitter !== 'undefined' && async_1.EventEmitter) === 'function' && _b) || Object)
                ], MdInput.prototype, "mdFocusChange", void 0);
                MdInput = __decorate([
                    core_1.Directive({
                        selector: 'input[md-input],input.md-input,textarea[md-input],textarea.md-input',
                        host: {
                            'class': 'md-input',
                            '[value]': 'value',
                            '(input)': 'value=$event.target.value',
                            '(focus)': 'setHasFocus(true)',
                            '(blur)': 'setHasFocus(false)'
                        },
                        providers: [common_1.FORM_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MdInput);
                return MdInput;
                var _a, _b;
            }());
            exports_1("MdInput", MdInput);
            MdInputContainer = (function () {
                function MdInputContainer(_element) {
                    this._element = _element;
                    // The MdInput or MdTextarea inside of this container.
                    this._input = null;
                    // Whether the input inside of this container has a non-empty value.
                    this.inputHasValue = false;
                    // Whether the input inside of this container has focus.
                    this.inputHasFocus = false;
                    // Whether the input inside of this container has a placeholder
                    this.inputHasPlaceholder = false;
                }
                MdInputContainer.prototype.ngOnChanges = function (_) {
                    this.inputHasValue = this._input.value !== '';
                    // TODO(jd): Is there something like @ContentChild that accepts a selector? I would prefer not to
                    // use a directive for label elements because I cannot use a parent->child selector to make them
                    // specific to md-input
                    this.inputHasPlaceholder = !!dom_adapter_1.DOM.querySelector(this._element.nativeElement, 'label') && !!this._input.placeholder;
                };
                MdInputContainer.prototype.ngAfterContentInit = function () {
                    var _this = this;
                    // If there is no text input, just bail and do nothing.
                    if (this._input === null) {
                        return;
                    }
                    // TODO(jd): :sob: what is the correct way to update these variables after the component initializes?
                    //  any time I do it directly here, debug mode complains about values changing after being checked. I
                    //  need to wait until the content has been initialized so that `_input` is there
                    // For now, just wrap it in a setTimeout to let the change detection finish up, and then set the values...
                    async_1.TimerWrapper.setTimeout(function () { return _this.ngOnChanges({}); }, 0);
                    // Listen to input changes and focus events so that we can apply the appropriate CSS
                    // classes based on the input state.
                    async_1.ObservableWrapper.subscribe(this._input.mdChange, function (value) {
                        _this.inputHasValue = value !== '';
                    });
                    async_1.ObservableWrapper.subscribe(this._input.mdFocusChange, function (hasFocus) {
                        _this.inputHasFocus = hasFocus;
                    });
                };
                __decorate([
                    core_1.ContentChild(MdInput), 
                    __metadata('design:type', MdInput)
                ], MdInputContainer.prototype, "_input", void 0);
                MdInputContainer = __decorate([
                    core_1.Component({
                        selector: 'md-input-container',
                        template: "<ng-content></ng-content><div class=\"md-errors-spacer\"></div>",
                        host: {
                            '[class.md-input-has-value]': 'inputHasValue',
                            '[class.md-input-has-placeholder]': 'inputHasPlaceholder',
                            '[class.md-input-focused]': 'inputHasFocus',
                        }
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
                ], MdInputContainer);
                return MdInputContainer;
                var _a;
            }());
            exports_1("MdInputContainer", MdInputContainer);
        }
    }
});

System.register("ng2-material/components/list/list.ts", ["angular2/core.js", "angular2/src/platform/dom/dom_adapter.js"], function(exports_1) {
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
    var core_1, dom_adapter_1;
    var MdList, MdListItem;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dom_adapter_1_1) {
                dom_adapter_1 = dom_adapter_1_1;
            }],
        execute: function() {
            /**
             * @description
             * The `<md-list>` directive is a list container for 1..n `<md-list-item>` tags.
             *
             * @usage
             * <hljs lang="html">
             * <md-list>
             *   <md-list-item class="md-2-line" ng-repeat="item in todos">
             *     <md-checkbox ng-model="item.done"></md-checkbox>
             *     <div class="md-list-item-text">
             *       <h3>{{item.title}}</h3>
             *       <p>{{item.description}}</p>
             *     </div>
             *   </md-list-item>
             * </md-list>
             * </hljs>
             */
            MdList = (function () {
                function MdList() {
                }
                MdList = __decorate([
                    core_1.Directive({
                        selector: 'md-list',
                        host: {
                            'role': 'list'
                        }
                    }), 
                    __metadata('design:paramtypes', [])
                ], MdList);
                return MdList;
            }());
            exports_1("MdList", MdList);
            /**
             * @description
             * The `<md-list-item>` directive is a container intended for row items in a `<md-list>` container.
             * The `md-2-line` and `md-3-line` classes can be added to a `<md-list-item>`
             * to increase the height with 22px and 40px respectively.
             *
             * ## CSS
             * `.md-avatar` - class for image avatars
             *
             * `.md-avatar-icon` - class for icon avatars
             *
             * `.md-offset` - on content without an avatar
             *
             * @usage
             * <hljs lang="html">
             *  <md-list>
             *    <md-list-item>
             *      <img class="md-avatar" ng-src="path/to/img"/>
             *      <span>Item content in list</span>
             *    </md-list-item>
             *    <md-list-item>
             *      <md-icon class="md-avatar-icon" md-svg-icon="communication:phone"></md-icon>
             *      <span>Item content in list</span>
             *    </md-list-item>
             *  </md-list>
             * </hljs>
             *
             */
            MdListItem = (function () {
                function MdListItem(_element) {
                    this._element = _element;
                }
                MdListItem.prototype.ngAfterViewInit = function () {
                    this.setupToggleAria();
                };
                MdListItem.prototype.setupToggleAria = function () {
                    var toggleTypes = ['md-switch', 'md-checkbox'];
                    var toggle;
                    var el = this._element.nativeElement;
                    for (var i = 0, toggleType; toggleType = toggleTypes[i]; ++i) {
                        if (toggle = dom_adapter_1.DOM.querySelector(el, toggleType)) {
                            if (!toggle.hasAttribute('aria-label')) {
                                var p = dom_adapter_1.DOM.querySelector(el, 'p');
                                if (!p)
                                    return;
                                toggle.setAttribute('aria-label', 'Toggle ' + p.textContent);
                            }
                        }
                    }
                };
                MdListItem = __decorate([
                    core_1.Component({
                        selector: 'md-list-item',
                        host: {
                            'role': 'listitem'
                        },
                        properties: ['wrap'],
                        template: "\n    <div class=\"md-no-style md-list-item-inner\">\n      <ng-content></ng-content>\n    </div>"
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
                ], MdListItem);
                return MdListItem;
                var _a;
            }());
            exports_1("MdListItem", MdListItem);
        }
    }
});

System.register("ng2-material/components/progress_linear/progress_linear.ts", ["angular2/core.js", "angular2/src/facade/lang.js", "angular2/src/facade/math.js"], function(exports_1) {
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
    var core_1, lang_1, math_1;
    var ProgressMode, MdProgressLinear;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (math_1_1) {
                math_1 = math_1_1;
            }],
        execute: function() {
            /** Different display / behavior modes for progress_linear. */
            ProgressMode = (function () {
                function ProgressMode() {
                }
                ProgressMode.DETERMINATE = 'determinate';
                ProgressMode.INDETERMINATE = 'indeterminate';
                ProgressMode.BUFFER = 'buffer';
                ProgressMode.QUERY = 'query';
                __decorate([
                    lang_1.CONST(), 
                    __metadata('design:type', Object)
                ], ProgressMode, "DETERMINATE", void 0);
                __decorate([
                    lang_1.CONST(), 
                    __metadata('design:type', Object)
                ], ProgressMode, "INDETERMINATE", void 0);
                __decorate([
                    lang_1.CONST(), 
                    __metadata('design:type', Object)
                ], ProgressMode, "BUFFER", void 0);
                __decorate([
                    lang_1.CONST(), 
                    __metadata('design:type', Object)
                ], ProgressMode, "QUERY", void 0);
                ProgressMode = __decorate([
                    lang_1.CONST(), 
                    __metadata('design:paramtypes', [])
                ], ProgressMode);
                return ProgressMode;
            }());
            exports_1("ProgressMode", ProgressMode);
            MdProgressLinear = (function () {
                function MdProgressLinear() {
                    /** The render mode for the progress bar. */
                    this.mode = ProgressMode.DETERMINATE;
                    this.primaryBarTransform = '';
                    this.secondaryBarTransform = '';
                }
                /** Clamps a value to be between 0 and 100. */
                MdProgressLinear.clamp = function (v) {
                    return math_1.Math.max(0, math_1.Math.min(100, v));
                };
                Object.defineProperty(MdProgressLinear.prototype, "value", {
                    get: function () {
                        return this.value_;
                    },
                    set: function (v) {
                        if (lang_1.isPresent(v)) {
                            this.value_ = MdProgressLinear.clamp(v);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                MdProgressLinear.prototype.ngOnChanges = function (_) {
                    // If the mode does not use a value, or if there is no value, do nothing.
                    if (this.mode === ProgressMode.QUERY || this.mode === ProgressMode.INDETERMINATE) {
                        return;
                    }
                    if (!lang_1.isBlank(this.value)) {
                        this.primaryBarTransform = this.transformForValue(this.value);
                    }
                    // The bufferValue is only used in buffer mode.
                    if (this.mode === ProgressMode.BUFFER && !lang_1.isBlank(this.bufferValue)) {
                        this.secondaryBarTransform = this.transformForValue(this.bufferValue);
                    }
                };
                /** Gets the CSS `transform` property for a progress bar based on the given value (0 - 100). */
                MdProgressLinear.prototype.transformForValue = function (value) {
                    // TODO(jelbourn): test perf gain of caching these, since there are only 101 values.
                    var scale = value / 100;
                    var translateX = (value - 100) / 2;
                    return "translateX(" + translateX + "%) scale(" + scale + ", 1)";
                };
                __decorate([
                    core_1.Input('value'), 
                    __metadata('design:type', Number)
                ], MdProgressLinear.prototype, "value_", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], MdProgressLinear.prototype, "bufferValue", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MdProgressLinear.prototype, "mode", void 0);
                MdProgressLinear = __decorate([
                    core_1.Component({
                        selector: 'md-progress-linear',
                        inputs: ['value', 'bufferValue', 'mode'],
                        host: {
                            'role': 'progressbar',
                            'aria-valuemin': '0',
                            'aria-valuemax': '100',
                            '[attr.aria-valuenow]': 'value',
                            '[attr.mode]': 'mode'
                        },
                        template: "\n    <div class=\"md-progress-linear-container md-ready\">\n      <div class=\"md-progress-linear-dashed\"></div>\n      <div class=\"md-progress-linear-bar md-progress-linear-bar1\"\n          [style.-webkit-transform]=\"secondaryBarTransform\"\n          [style.transform]=\"secondaryBarTransform\"></div>\n      <div class=\"md-progress-linear-bar md-progress-linear-bar2\"\n          [style.-webkit-transform]=\"primaryBarTransform\"\n          [style.transform]=\"primaryBarTransform\"></div>\n    </div>",
                        directives: [],
                        encapsulation: core_1.ViewEncapsulation.None
                    }), 
                    __metadata('design:paramtypes', [])
                ], MdProgressLinear);
                return MdProgressLinear;
            }());
            exports_1("MdProgressLinear", MdProgressLinear);
        }
    }
});

System.register("ng2-material/components/progress_circular/progress_circular.ts", ["angular2/core.js", "angular2/src/facade/lang.js", "ng2-material/components/progress_linear/progress_linear.ts", "angular2/src/facade/math.js"], function(exports_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, lang_1, progress_linear_1, math_1;
    var ProgressMode, Defaults, MdProgressCircular;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (progress_linear_1_1) {
                progress_linear_1 = progress_linear_1_1;
            },
            function (math_1_1) {
                math_1 = math_1_1;
            }],
        execute: function() {
            ProgressMode = (function () {
                function ProgressMode() {
                }
                ProgressMode.DETERMINATE = 'determinate';
                ProgressMode.INDETERMINATE = 'indeterminate';
                __decorate([
                    lang_1.CONST(), 
                    __metadata('design:type', Object)
                ], ProgressMode, "DETERMINATE", void 0);
                __decorate([
                    lang_1.CONST(), 
                    __metadata('design:type', Object)
                ], ProgressMode, "INDETERMINATE", void 0);
                ProgressMode = __decorate([
                    lang_1.CONST(), 
                    __metadata('design:paramtypes', [])
                ], ProgressMode);
                return ProgressMode;
            }());
            Defaults = (function () {
                function Defaults() {
                }
                Defaults.DEFAULT_PROGRESS_SIZE = 100;
                Defaults.DEFAULT_SCALING = 0.5;
                Defaults.DEFAULT_HALF_TRANSITION = 'transform 0.1s linear';
                __decorate([
                    lang_1.CONST(), 
                    __metadata('design:type', Object)
                ], Defaults, "DEFAULT_PROGRESS_SIZE", void 0);
                __decorate([
                    lang_1.CONST(), 
                    __metadata('design:type', Object)
                ], Defaults, "DEFAULT_SCALING", void 0);
                __decorate([
                    lang_1.CONST(), 
                    __metadata('design:type', Object)
                ], Defaults, "DEFAULT_HALF_TRANSITION", void 0);
                Defaults = __decorate([
                    lang_1.CONST(), 
                    __metadata('design:paramtypes', [])
                ], Defaults);
                return Defaults;
            }());
            MdProgressCircular = (function (_super) {
                __extends(MdProgressCircular, _super);
                function MdProgressCircular() {
                    _super.apply(this, arguments);
                    /** CSS `transition` property applied to circle. */
                    this.defaultHalfTransition = Defaults.DEFAULT_HALF_TRANSITION;
                }
                Object.defineProperty(MdProgressCircular.prototype, "diameter", {
                    get: function () {
                        return this.diameter_;
                    },
                    set: function (v) {
                        if (lang_1.isPresent(v)) {
                            this.diameter_ = v;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                MdProgressCircular.prototype.ngOnInit = function () {
                    this.updateScale();
                };
                MdProgressCircular.prototype.ngOnChanges = function (_) {
                    if (this.mode === ProgressMode.INDETERMINATE || lang_1.isBlank(this.value)) {
                        return;
                    }
                    this.gapTransition = (this.value <= 50) ? '' : 'borderBottomColor 0.1s linear';
                    this.transformLeftHalf(this.value);
                    this.transformRightHalf(this.value);
                };
                MdProgressCircular.prototype.transformLeftHalf = function (value) {
                    var rotation = (value <= 50) ? 135 : (((value - 50) / 50 * 180) + 135);
                    this.leftHalfTransform = "rotate(" + rotation + "deg)";
                };
                MdProgressCircular.prototype.transformRightHalf = function (value) {
                    var rotation = (value >= 50) ? 45 : (value / 50 * 180 - 135);
                    this.rightHalfTransform = "rotate(" + rotation + "deg)";
                };
                MdProgressCircular.prototype.updateScale = function () {
                    this.outerSize = 100 * this.getDiameterRatio() + 'px';
                    this.diameterTransformation = "translate(-50%, -50%) scale( " + this.getDiameterRatio() + " )";
                };
                MdProgressCircular.prototype.getDiameterRatio = function () {
                    if (!this.diameter)
                        return Defaults.DEFAULT_SCALING;
                    var match = /([0-9]*)%/.exec(this.diameter);
                    var value = math_1.Math.max(0, (match && match[1] / 100) || parseFloat(this.diameter));
                    return (value > 1) ? value / Defaults.DEFAULT_PROGRESS_SIZE : value;
                };
                MdProgressCircular.prototype.webkit = function (style) {
                    return "-webkit-" + style;
                };
                __decorate([
                    core_1.Input('diameter'), 
                    __metadata('design:type', String)
                ], MdProgressCircular.prototype, "diameter_", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MdProgressCircular.prototype, "mode", void 0);
                MdProgressCircular = __decorate([
                    core_1.Component({
                        selector: 'md-progress-circular',
                        inputs: ['value', 'diameter'],
                        host: {
                            'role': 'progressbar',
                            'aria-valuemin': '0',
                            'aria-valuemax': '100',
                            '[attr.aria-valuenow]': 'value',
                            '[style.width]': 'outerSize',
                            '[style.height]': 'outerSize'
                        },
                        template: "\n    <div class=\"md-scale-wrapper\"\n     [style.-webkit-transform]=\"diameterTransformation\"\n     [style.transform]=\"diameterTransformation\">\n      <div class=\"md-spinner-wrapper\">\n        <div class=\"md-inner\">\n          <div class=\"md-gap\"\n          [style.-webkit-transition]=\"gapTransition\"\n          [style.transition]=\"gapTransition\"></div>\n          <div class=\"md-left\">\n            <div class=\"md-half-circle\"\n              [style.-webkit-transform]=\"leftHalfTransform\"\n              [style.transform]=\"leftHalfTransform\"\n              [style.-webkit-transition]=\"defaultHalfTransition\"\n              [style.transition]=\"defaultHalfTransition\"></div>\n          </div>\n          <div class=\"md-right\">\n            <div class=\"md-half-circle\"\n              [style.-webkit-transform]=\"rightHalfTransform\"\n              [style.transform]=\"rightHalfTransform\"\n              [style.-webkit-transition]=\"defaultHalfTransition\"\n              [style.transition]=\"defaultHalfTransition\"></div>\n          </div>\n        </div>\n      </div>\n    </div>",
                        directives: [],
                        encapsulation: core_1.ViewEncapsulation.None
                    }), 
                    __metadata('design:paramtypes', [])
                ], MdProgressCircular);
                return MdProgressCircular;
            }(progress_linear_1.MdProgressLinear));
            exports_1("MdProgressCircular", MdProgressCircular);
        }
    }
});

System.register("ng2-material/components/peekaboo/peekaboo.ts", ["angular2/core.js", "ng2-material/core/util/media.ts", "angular2/src/facade/lang.js"], function(exports_1) {
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
    var core_1, media_1, lang_1;
    var PeekabooAction, MdPeekaboo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (media_1_1) {
                media_1 = media_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            }],
        execute: function() {
            /** Different peekaboo actions to apply when active */
            PeekabooAction = (function () {
                function PeekabooAction() {
                }
                PeekabooAction.SHOW = 'show';
                PeekabooAction.HIDE = 'hide';
                __decorate([
                    lang_1.CONST(), 
                    __metadata('design:type', Object)
                ], PeekabooAction, "SHOW", void 0);
                __decorate([
                    lang_1.CONST(), 
                    __metadata('design:type', Object)
                ], PeekabooAction, "HIDE", void 0);
                PeekabooAction = __decorate([
                    lang_1.CONST(), 
                    __metadata('design:paramtypes', [])
                ], PeekabooAction);
                return PeekabooAction;
            }());
            exports_1("PeekabooAction", PeekabooAction);
            /**
             * @name mdPeekaboo
             *
             * @description
             * The `[md-peekaboo]` directive is an attribute that toggles the visibility of elements based
             * on the current viewport size and scrollTop.
             *
             */
            MdPeekaboo = (function () {
                function MdPeekaboo(media) {
                    var _this = this;
                    this.media = media;
                    this.break = 100;
                    this._active = false;
                    this._breakXs = -1;
                    this._breakSm = -1;
                    this._breakMd = -1;
                    this._breakLg = -1;
                    this._breakXl = -1;
                    this._breakpoint = null;
                    this._mediaListeners = [];
                    this._windowScroll = this.evaluate.bind(this);
                    window.addEventListener('scroll', this._windowScroll);
                    MdPeekaboo.SIZES.forEach(function (size) {
                        _this._watchMediaQuery(size);
                        if (media_1.Media.hasMedia(size)) {
                            _this._breakpoint = size;
                        }
                    });
                    this.evaluate();
                }
                MdPeekaboo.MakeNumber = function (value) {
                    return lang_1.isString(value) ? lang_1.NumberWrapper.parseInt(value, 10) : value;
                };
                Object.defineProperty(MdPeekaboo.prototype, "active", {
                    get: function () {
                        return this._active;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdPeekaboo.prototype, "scrollTop", {
                    get: function () {
                        return window.pageYOffset || document.documentElement.scrollTop;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdPeekaboo.prototype, "breakXs", {
                    get: function () {
                        return this._breakXs;
                    },
                    set: function (value) {
                        this._breakXs = MdPeekaboo.MakeNumber(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdPeekaboo.prototype, "breakSm", {
                    get: function () {
                        return this._breakSm;
                    },
                    set: function (value) {
                        this._breakSm = MdPeekaboo.MakeNumber(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdPeekaboo.prototype, "breakMd", {
                    get: function () {
                        return this._breakMd;
                    },
                    set: function (value) {
                        this._breakMd = MdPeekaboo.MakeNumber(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdPeekaboo.prototype, "breakLg", {
                    get: function () {
                        return this._breakLg;
                    },
                    set: function (value) {
                        this._breakLg = MdPeekaboo.MakeNumber(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdPeekaboo.prototype, "breakXl", {
                    get: function () {
                        return this._breakXl;
                    },
                    set: function (value) {
                        this._breakXl = MdPeekaboo.MakeNumber(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdPeekaboo.prototype, "breakpoint", {
                    get: function () {
                        return this._breakpoint;
                    },
                    set: function (size) {
                        this._breakpoint = size;
                        this.evaluate();
                    },
                    enumerable: true,
                    configurable: true
                });
                MdPeekaboo.prototype.ngOnDestroy = function () {
                    this._mediaListeners.forEach(function (l) {
                        l.destroy();
                    });
                    this._mediaListeners = [];
                    window.removeEventListener('scroll', this._windowScroll);
                };
                MdPeekaboo.prototype._watchMediaQuery = function (size) {
                    var _this = this;
                    var l = this.media.listen(media_1.Media.getQuery(size));
                    l.onMatched.subscribe(function (mql) {
                        _this.breakpoint = size;
                    });
                    this._mediaListeners.push(l);
                };
                /**
                 * Evaluate the current scroll and media breakpoint to determine what scrollTop
                 * value should be used for the peekaboo active state.
                 * @returns number The scrollTop breakpoint that was evaluated against.
                 */
                MdPeekaboo.prototype.evaluate = function () {
                    var top = this.scrollTop;
                    var bp = this.break;
                    switch (this._breakpoint) {
                        case 'xl':
                            if (this._breakXl !== -1) {
                                bp = this._breakXl;
                                break;
                            }
                        case 'lg':
                            if (this._breakLg !== -1) {
                                bp = this._breakLg;
                                break;
                            }
                        case 'md':
                            if (this._breakMd !== -1) {
                                bp = this._breakMd;
                                break;
                            }
                        case 'sm':
                            if (this._breakSm !== -1) {
                                bp = this._breakSm;
                                break;
                            }
                        case 'xs':
                            if (this._breakXs !== -1) {
                                bp = this._breakXs;
                                break;
                            }
                    }
                    if (top >= bp && !this._active) {
                        this._active = true;
                    }
                    else if (top < bp && this._active) {
                        this._active = false;
                    }
                    return bp;
                };
                MdPeekaboo.SIZES = ['xs', 'sm', 'md', 'lg', 'xl'];
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], MdPeekaboo.prototype, "break", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MdPeekaboo.prototype, "breakAction", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number), 
                    __metadata('design:paramtypes', [Number])
                ], MdPeekaboo.prototype, "breakXs", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number), 
                    __metadata('design:paramtypes', [Number])
                ], MdPeekaboo.prototype, "breakSm", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number), 
                    __metadata('design:paramtypes', [Number])
                ], MdPeekaboo.prototype, "breakMd", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number), 
                    __metadata('design:paramtypes', [Number])
                ], MdPeekaboo.prototype, "breakLg", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number), 
                    __metadata('design:paramtypes', [Number])
                ], MdPeekaboo.prototype, "breakXl", null);
                MdPeekaboo = __decorate([
                    core_1.Directive({
                        selector: '[md-peekaboo]',
                        inputs: ['break', 'breakXs', 'breakSm', 'breakMd', 'breakLg', 'breakXl'],
                        host: {
                            '[class.md-peekaboo-active]': 'active',
                            '[attr.breakAction]': 'breakAction'
                        }
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof media_1.Media !== 'undefined' && media_1.Media) === 'function' && _a) || Object])
                ], MdPeekaboo);
                return MdPeekaboo;
                var _a;
            }());
            exports_1("MdPeekaboo", MdPeekaboo);
        }
    }
});

System.register("ng2-material/components/radio/radio_button.ts", ["angular2/core.js", "angular2/src/facade/lang.js", "angular2/src/facade/async.js", "ng2-material/components/radio/radio_dispatcher.ts", "ng2-material/core/key_codes.ts", "ng2-material/core/util/util.ts"], function(exports_1) {
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
    var core_1, lang_1, async_1, radio_dispatcher_1, key_codes_1, util_1;
    var _uniqueIdCounter, MdRadioGroup, MdRadioButton;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            },
            function (radio_dispatcher_1_1) {
                radio_dispatcher_1 = radio_dispatcher_1_1;
            },
            function (key_codes_1_1) {
                key_codes_1 = key_codes_1_1;
            },
            function (util_1_1) {
                util_1 = util_1_1;
            }],
        execute: function() {
            // TODO(jd): Use @ContentChildren instead of registering radio buttons with group parent manually.
            // TODO(jelbourn): Behaviors to test
            // Radio name is pulled on parent group
            _uniqueIdCounter = 0;
            MdRadioGroup = (function () {
                function MdRadioGroup(tabindex, disabled, radioDispatcher) {
                    this.change = new async_1.EventEmitter(false);
                    /** The HTML name attribute applied to radio buttons in this group. */
                    this.name_ = "md-radio-group-" + _uniqueIdCounter++;
                    /** Array of child radio buttons. */
                    this.radios_ = [];
                    this.disabled_ = false;
                    /** The ID of the selected radio button. */
                    this.selectedRadioId = '';
                    this.radioDispatcher = radioDispatcher;
                    // The simple presence of the `disabled` attribute dictates disabled state.
                    this.disabled = lang_1.isPresent(disabled);
                    // If the user has not set a tabindex, default to zero (in the normal document flow).
                    this.tabindex = util_1.parseTabIndexAttribute(tabindex);
                }
                Object.defineProperty(MdRadioGroup.prototype, "value", {
                    get: function () {
                        return this.value_;
                    },
                    set: function (value) {
                        this.value_ = value;
                        this._setChildValue(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                /** Gets the name of this group, as to be applied in the HTML 'name' attribute. */
                MdRadioGroup.prototype.getName = function () {
                    return this.name_;
                };
                Object.defineProperty(MdRadioGroup.prototype, "disabled", {
                    get: function () {
                        return this.disabled_;
                    },
                    set: function (value) {
                        this.disabled_ = lang_1.isPresent(value) && value !== false;
                    },
                    enumerable: true,
                    configurable: true
                });
                /** Change handler invoked when bindings are resolved or when bindings have changed. */
                MdRadioGroup.prototype.ngOnChanges = function (_) {
                    // If the component has a disabled attribute with no value, it will set disabled = ''.
                    this.disabled = lang_1.isPresent(this.disabled) && this.disabled !== false;
                    // If the value of this radio-group has been set or changed, we have to look through the
                    // child radio buttons and select the one that has a corresponding value (if any).
                    if (lang_1.isPresent(this.value) && this.value !== '') {
                        this.radioDispatcher.notify(this.name_);
                        this._setChildValue(this.value);
                    }
                };
                MdRadioGroup.prototype._setChildValue = function (value) {
                    var button = this.getChildByValue(value);
                    if (button) {
                        this.selectedRadioId = button.id;
                        this.activedescendant = button.id;
                        button.checked = true;
                    }
                };
                /** Update the value of this radio group from a child md-radio being selected. */
                MdRadioGroup.prototype.updateValue = function (value, id) {
                    this.value = value;
                    this.selectedRadioId = id;
                    this.activedescendant = id;
                    async_1.ObservableWrapper.callEmit(this.change, value);
                };
                /** Registers a child radio button with this group. */
                MdRadioGroup.prototype.register = function (radio) {
                    this.radios_.push(radio);
                };
                /** Unregister a child radio button with this group. */
                MdRadioGroup.prototype.unregister = function (radio) {
                    this.radios_ = this.radios_.filter(function (r) { return r.id !== radio.id; });
                };
                /** Handles up and down arrow key presses to change the selected child radio. */
                MdRadioGroup.prototype.onKeydown = function (event) {
                    if (this.disabled) {
                        return;
                    }
                    switch (event.keyCode) {
                        case key_codes_1.KeyCodes.UP:
                            this.stepSelectedRadio(-1);
                            event.preventDefault();
                            break;
                        case key_codes_1.KeyCodes.DOWN:
                            this.stepSelectedRadio(1);
                            event.preventDefault();
                            break;
                    }
                };
                // TODO(jelbourn): Replace this with a findIndex method in the collections facade.
                MdRadioGroup.prototype.getSelectedRadioIndex = function () {
                    for (var i = 0; i < this.radios_.length; i++) {
                        if (this.radios_[i].id === this.selectedRadioId) {
                            return i;
                        }
                    }
                    return -1;
                };
                /**
                 * Return a child radio by its value.
                 */
                MdRadioGroup.prototype.getChildByValue = function (value) {
                    for (var i = 0; i < this.radios_.length; i++) {
                        if (this.radios_[i].value === value) {
                            return this.radios_[i];
                        }
                    }
                    return null;
                };
                /** Steps the selected radio based on the given step value (usually either +1 or -1). */
                MdRadioGroup.prototype.stepSelectedRadio = function (step) {
                    var index = this.getSelectedRadioIndex() + step;
                    if (index < 0 || index >= this.radios_.length) {
                        return;
                    }
                    var radio = this.radios_[index];
                    // If the next radio is line is disabled, skip it (maintaining direction).
                    if (radio.disabled) {
                        this.stepSelectedRadio(step + (step < 0 ? -1 : 1));
                        return;
                    }
                    this.updateValue(radio.value, radio.id);
                    radio.checked = true;
                };
                __decorate([
                    core_1.Output('valueChange'), 
                    __metadata('design:type', (typeof (_a = typeof async_1.EventEmitter !== 'undefined' && async_1.EventEmitter) === 'function' && _a) || Object)
                ], MdRadioGroup.prototype, "change", void 0);
                __decorate([
                    core_1.Input('value'), 
                    __metadata('design:type', Object)
                ], MdRadioGroup.prototype, "value_", void 0);
                MdRadioGroup = __decorate([
                    core_1.Component({
                        selector: 'md-radio-group',
                        inputs: ['disabled', 'value'],
                        host: {
                            'role': 'radiogroup',
                            '[attr.aria-disabled]': 'disabled',
                            '[attr.aria-activedescendant]': 'activedescendant',
                            '(keydown)': 'onKeydown($event)',
                            '[tabindex]': 'tabindex',
                        },
                        template: "<ng-content></ng-content>",
                        encapsulation: core_1.ViewEncapsulation.None
                    }),
                    __param(0, core_1.Attribute('tabindex')),
                    __param(1, core_1.Attribute('disabled')), 
                    __metadata('design:paramtypes', [String, String, (typeof (_b = typeof radio_dispatcher_1.MdRadioDispatcher !== 'undefined' && radio_dispatcher_1.MdRadioDispatcher) === 'function' && _b) || Object])
                ], MdRadioGroup);
                return MdRadioGroup;
                var _a, _b;
            }());
            exports_1("MdRadioGroup", MdRadioGroup);
            MdRadioButton = (function () {
                function MdRadioButton(radioGroup, id, value, checked, tabindex, radioDispatcher) {
                    // Assertions. Ideally these should be stripped out by the compiler.
                    // TODO(jelbourn): Assert that there's no name binding AND a parent radio group.
                    var _this = this;
                    this.radioGroup = radioGroup;
                    this.radioDispatcher = radioDispatcher;
                    this.value = value ? value : null;
                    this.checked = lang_1.isPresent(checked) ? true : false;
                    this.id = lang_1.isPresent(id) ? id : "md-radio-" + _uniqueIdCounter++;
                    // Whenever a radio button with the same name is checked, uncheck this radio button.
                    radioDispatcher.listen(function (name) {
                        if (name === _this.name) {
                            _this.checked = false;
                        }
                    });
                    // When this radio-button is inside of a radio-group, the group determines the name.
                    if (lang_1.isPresent(radioGroup)) {
                        this.name = radioGroup.getName();
                        this.radioGroup.register(this);
                        if (this.checked) {
                            this.radioGroup.updateValue(this.value, this.id);
                        }
                    }
                    // If the user has not set a tabindex, default to zero (in the normal document flow).
                    if (!lang_1.isPresent(radioGroup)) {
                        this.tabindex = util_1.parseTabIndexAttribute(tabindex);
                    }
                    else {
                        this.tabindex = -1;
                    }
                }
                /** Change handler invoked when bindings are resolved or when bindings have changed. */
                MdRadioButton.prototype.ngOnInit = function () {
                    if (lang_1.isPresent(this.radioGroup)) {
                        this.name = this.radioGroup.getName();
                    }
                };
                MdRadioButton.prototype.ngOnDestroy = function () {
                    if (lang_1.isPresent(this.radioGroup)) {
                        this.radioGroup.unregister(this);
                    }
                };
                /** Whether this radio button is disabled, taking the parent group into account. */
                MdRadioButton.prototype.isDisabled = function () {
                    // Here, this.disabled may be true/false as the result of a binding, may be the empty string
                    // if the user just adds a `disabled` attribute with no value, or may be absent completely.
                    // TODO(jelbourn): If someone sets `disabled="disabled"`, will this work in dart?
                    return this.disabled || (lang_1.isPresent(this.disabled) && lang_1.StringWrapper.equals(this.disabled, '')) ||
                        (lang_1.isPresent(this.radioGroup) && this.radioGroup.disabled);
                };
                Object.defineProperty(MdRadioButton.prototype, "disabled", {
                    get: function () {
                        // True if self or parent group are disabled.
                        return this.disabled_ || (this.radioGroup && this.radioGroup.disabled);
                    },
                    set: function (value) {
                        this.disabled_ = lang_1.isPresent(value) && value !== false;
                    },
                    enumerable: true,
                    configurable: true
                });
                /** Select this radio button. */
                MdRadioButton.prototype.select = function (event) {
                    if (this.isDisabled()) {
                        event.stopPropagation();
                        return;
                    }
                    // Notifiy all radio buttons with the same name to un-check.
                    this.radioDispatcher.notify(this.name);
                    this.checked = true;
                    if (lang_1.isPresent(this.radioGroup)) {
                        this.radioGroup.updateValue(this.value, this.id);
                    }
                };
                /** Handles pressing the space key to select this focused radio button. */
                MdRadioButton.prototype.onKeydown = function (event) {
                    if (event.keyCode === key_codes_1.KeyCodes.SPACE) {
                        event.preventDefault();
                        this.select(event);
                    }
                };
                MdRadioButton = __decorate([
                    core_1.Component({
                        selector: 'md-radio-button',
                        inputs: ['id', 'name', 'value', 'checked', 'disabled'],
                        host: {
                            'role': 'radio',
                            '[id]': 'id',
                            '[tabindex]': 'tabindex',
                            '[attr.aria-checked]': 'checked',
                            '[attr.disabled]': 'disabled ? "" : undefined',
                            '[attr.aria-disabled]': 'disabled',
                            '(keydown)': 'onKeydown($event)',
                            '(click)': 'select($event)'
                        },
                        template: "\n    <label role=\"radio\" class=\"md-radio-root\" [class.md-radio-checked]=\"checked\">\n      <div class=\"md-radio-container\">\n        <div class=\"md-radio-off\"></div>\n        <div class=\"md-radio-on\"></div>\n      </div>\n      <div class=\"md-radio-label\">\n        <ng-content></ng-content>\n      </div>\n    </label>",
                        directives: [],
                        encapsulation: core_1.ViewEncapsulation.None
                    }),
                    __param(0, core_1.Optional()),
                    __param(0, core_1.SkipSelf()),
                    __param(0, core_1.Host()),
                    __param(1, core_1.Attribute('id')),
                    __param(2, core_1.Attribute('value')),
                    __param(3, core_1.Attribute('checked')),
                    __param(4, core_1.Attribute('tabindex')), 
                    __metadata('design:paramtypes', [MdRadioGroup, String, String, String, String, (typeof (_a = typeof radio_dispatcher_1.MdRadioDispatcher !== 'undefined' && radio_dispatcher_1.MdRadioDispatcher) === 'function' && _a) || Object])
                ], MdRadioButton);
                return MdRadioButton;
                var _a;
            }());
            exports_1("MdRadioButton", MdRadioButton);
        }
    }
});

System.register("ng2-material/components/radio/radio_dispatcher.ts", ["angular2/core.js"], function(exports_1) {
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
    var core_1;
    var MdRadioDispatcher;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /**
             * Class for radio buttons to coordinate unique selection based on name.
             * Intended to be consumed as an Angular service.
             */
            MdRadioDispatcher = (function () {
                function MdRadioDispatcher() {
                    this.listeners_ = [];
                }
                /** Notify other nadio buttons that selection for the given name has been set. */
                MdRadioDispatcher.prototype.notify = function (name) {
                    this.listeners_.forEach(function (listener) { return listener(name); });
                };
                /** Listen for future changes to radio button selection. */
                MdRadioDispatcher.prototype.listen = function (listener) {
                    this.listeners_.push(listener);
                };
                MdRadioDispatcher = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], MdRadioDispatcher);
                return MdRadioDispatcher;
            }());
            exports_1("MdRadioDispatcher", MdRadioDispatcher);
        }
    }
});

System.register("ng2-material/core/key_codes.ts", ["angular2/src/facade/lang.js"], function(exports_1) {
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
    var lang_1;
    var KeyCodes;
    return {
        setters:[
            function (lang_1_1) {
                lang_1 = lang_1_1;
            }],
        execute: function() {
            // Can't use an enum because Dart doesn't support enum initializers.
            KeyCodes = (function () {
                function KeyCodes() {
                }
                KeyCodes.ESCAPE = 27;
                KeyCodes.SPACE = 32;
                KeyCodes.UP = 38;
                KeyCodes.DOWN = 40;
                __decorate([
                    lang_1.CONST(), 
                    __metadata('design:type', Object)
                ], KeyCodes, "ESCAPE", void 0);
                __decorate([
                    lang_1.CONST(), 
                    __metadata('design:type', Object)
                ], KeyCodes, "SPACE", void 0);
                __decorate([
                    lang_1.CONST(), 
                    __metadata('design:type', Object)
                ], KeyCodes, "UP", void 0);
                __decorate([
                    lang_1.CONST(), 
                    __metadata('design:type', Object)
                ], KeyCodes, "DOWN", void 0);
                KeyCodes = __decorate([
                    lang_1.CONST(), 
                    __metadata('design:paramtypes', [])
                ], KeyCodes);
                return KeyCodes;
            }());
            exports_1("KeyCodes", KeyCodes);
        }
    }
});

System.register("ng2-material/components/checkbox/checkbox.ts", ["angular2/core.js", "angular2/src/facade/lang.js", "ng2-material/core/key_codes.ts", "ng2-material/core/util/util.ts"], function(exports_1) {
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
    var core_1, lang_1, key_codes_1, util_1;
    var MdCheckbox;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (key_codes_1_1) {
                key_codes_1 = key_codes_1_1;
            },
            function (util_1_1) {
                util_1 = util_1_1;
            }],
        execute: function() {
            // TODO(jd): ng-true-value, ng-false-value
            MdCheckbox = (function () {
                function MdCheckbox() {
                    this.checkedChange = new core_1.EventEmitter(false);
                    /** Whether this checkbox is checked. */
                    this.checked = false;
                    /** Whether this checkbox is disabled. */
                    this.disabled_ = false;
                }
                Object.defineProperty(MdCheckbox.prototype, "tabindex", {
                    get: function () {
                        return this._tabindex;
                    },
                    set: function (value) {
                        this._tabindex = util_1.parseTabIndexAttribute(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdCheckbox.prototype, "disabled", {
                    get: function () {
                        return this.disabled_;
                    },
                    set: function (value) {
                        this.disabled_ = lang_1.isPresent(value) && value !== false;
                    },
                    enumerable: true,
                    configurable: true
                });
                MdCheckbox.prototype.onKeydown = function (event) {
                    if (event.keyCode === key_codes_1.KeyCodes.SPACE) {
                        event.preventDefault();
                        this.toggle(event);
                    }
                };
                MdCheckbox.prototype.toggle = function (event) {
                    if (this.disabled) {
                        event.stopPropagation();
                        return;
                    }
                    this.checked = !this.checked;
                    this.checkedChange.emit(this.checked);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
                ], MdCheckbox.prototype, "checkedChange", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], MdCheckbox.prototype, "checked", void 0);
                __decorate([
                    core_1.Input('disabled'), 
                    __metadata('design:type', Boolean)
                ], MdCheckbox.prototype, "disabled_", void 0);
                __decorate([
                    core_1.Input('tabindex'), 
                    __metadata('design:type', Number)
                ], MdCheckbox.prototype, "_tabindex", void 0);
                MdCheckbox = __decorate([
                    core_1.Component({
                        selector: 'md-checkbox',
                        inputs: ['checked', 'disabled'],
                        template: "\n    <div class=\"md-checkbox-container\">\n      <div class=\"md-checkbox-icon\"></div>\n    </div>\n    <div class=\"md-checkbox-label\"><ng-content></ng-content></div>",
                        directives: [],
                        encapsulation: core_1.ViewEncapsulation.None,
                        host: {
                            'role': 'checkbox',
                            '[attr.aria-checked]': 'checked',
                            '[attr.aria-disabled]': 'disabled',
                            '[tabindex]': 'tabindex',
                            '(keydown)': 'onKeydown($event)',
                            '(click)': 'toggle($event)'
                        }
                    }), 
                    __metadata('design:paramtypes', [])
                ], MdCheckbox);
                return MdCheckbox;
                var _a;
            }());
            exports_1("MdCheckbox", MdCheckbox);
        }
    }
});

System.register("ng2-material/components/switcher/switch.ts", ["angular2/core.js", "ng2-material/components/checkbox/checkbox.ts"], function(exports_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, checkbox_1;
    var MdSwitch;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (checkbox_1_1) {
                checkbox_1 = checkbox_1_1;
            }],
        execute: function() {
            // TODO(jelbourn): add gesture support
            // TODO(jelbourn): clean up CSS.
            MdSwitch = (function (_super) {
                __extends(MdSwitch, _super);
                function MdSwitch() {
                    _super.apply(this, arguments);
                }
                MdSwitch = __decorate([
                    core_1.Component({
                        selector: 'md-switch',
                        inputs: ['checked', 'disabled'],
                        host: {
                            'role': 'checkbox',
                            '[attr.aria-checked]': 'checked',
                            '[attr.aria-disabled]': 'disabled_',
                            '(keydown)': 'onKeydown($event)',
                            '(click)': 'toggle($event)'
                        },
                        template: "\n    <div class=\"md-switch-container\">\n      <div class=\"md-switch-bar\"></div>\n      <div class=\"md-switch-thumb-container\">\n        <div class=\"md-switch-thumb\"></div>\n      </div>\n    </div>\n    <div class=\"md-switch-label\">\n      <ng-content></ng-content>\n    </div>",
                        directives: [],
                        encapsulation: core_1.ViewEncapsulation.None
                    }), 
                    __metadata('design:paramtypes', [])
                ], MdSwitch);
                return MdSwitch;
            }(checkbox_1.MdCheckbox));
            exports_1("MdSwitch", MdSwitch);
        }
    }
});

System.register("ng2-material/components/subheader/subheader.ts", ["angular2/core.js"], function(exports_1) {
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
    var core_1;
    var MdSubheader;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MdSubheader = (function () {
                function MdSubheader() {
                }
                MdSubheader = __decorate([
                    core_1.Component({
                        selector: 'md-subheader',
                        host: {
                            'class': 'md-subheader'
                        },
                        template: "\n    <div class=\"md-subheader-inner\">\n      <span class=\"md-subheader-content\"><ng-content></ng-content></span>\n    </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], MdSubheader);
                return MdSubheader;
            }());
            exports_1("MdSubheader", MdSubheader);
        }
    }
});

System.register("ng2-material/components/backdrop/backdrop.ts", ["ng2-material/core/util/animate.ts", "angular2/core.js", "angular2/src/platform/dom/dom_adapter.js"], function(exports_1) {
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
    var animate_1, core_1, dom_adapter_1;
    var MdBackdrop;
    return {
        setters:[
            function (animate_1_1) {
                animate_1 = animate_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dom_adapter_1_1) {
                dom_adapter_1 = dom_adapter_1_1;
            }],
        execute: function() {
            /**
             * An overlay for content on the page.
             * Can optionally dismiss when clicked on.
             * Has outputs for show/showing and hide/hiding.
             */
            MdBackdrop = (function () {
                function MdBackdrop(element) {
                    this.element = element;
                    /**
                     * When true, clicking on the backdrop will close it
                     */
                    this.clickClose = false;
                    /**
                     * When true, disable the parent container scroll while the backdrop is active.
                     */
                    this.hideScroll = true;
                    /**
                     * Emits when the backdrop begins to hide.
                     */
                    this.onHiding = new core_1.EventEmitter(false);
                    /**
                     * Emits when the backdrop has finished being hidden.
                     */
                    this.onHidden = new core_1.EventEmitter(false);
                    /**
                     * Emits when the backdrop begins to be shown.
                     */
                    this.onShowing = new core_1.EventEmitter();
                    /**
                     * Emits when the backdrop has finished being shown.
                     */
                    this.onShown = new core_1.EventEmitter();
                    /**
                     * The CSS class name to transition on/off when the backdrop is hidden/shown.
                     */
                    this.transitionClass = 'md-active';
                    /**
                     * Whether to add the {@see transitionClass} or remove it when the backdrop is shown. The
                     * opposite will happen when the backdrop is hidden.
                     */
                    this.transitionAddClass = true;
                    this._visible = false;
                    this._transitioning = false;
                    this._previousOverflow = null;
                    this._body = dom_adapter_1.DOM.query('body');
                }
                Object.defineProperty(MdBackdrop.prototype, "visible", {
                    /**
                     * Whether the backdrop is visible.
                     */
                    get: function () {
                        return this._visible;
                    },
                    set: function (value) {
                        this.toggle(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                MdBackdrop.prototype.onClick = function () {
                    if (this.clickClose && !this._transitioning && this.visible) {
                        this.hide();
                    }
                };
                /**
                 * Hide the backdrop and return a promise that is resolved when the hide animations are
                 * complete.
                 */
                MdBackdrop.prototype.hide = function () {
                    return this.toggle(false);
                };
                /**
                 * Show the backdrop and return a promise that is resolved when the show animations are
                 * complete.
                 */
                MdBackdrop.prototype.show = function () {
                    return this.toggle(true);
                };
                /**
                 * Toggle the visibility of the backdrop.
                 * @param visible whether or not the backdrop should be visible
                 * @returns {any}
                 */
                MdBackdrop.prototype.toggle = function (visible) {
                    var _this = this;
                    if (visible === void 0) { visible = !this.visible; }
                    if (visible === this._visible) {
                        return Promise.resolve();
                    }
                    var beginEvent = visible ? this.onShowing : this.onHiding;
                    var endEvent = visible ? this.onShown : this.onHidden;
                    this._visible = visible;
                    this._transitioning = true;
                    beginEvent.emit(this);
                    var action = visible ?
                        (this.transitionAddClass ? animate_1.Animate.enter : animate_1.Animate.leave) :
                        (this.transitionAddClass ? animate_1.Animate.leave : animate_1.Animate.enter);
                    // Page scroll
                    if (visible && this.hideScroll && this.element && !this._previousOverflow) {
                        var style = dom_adapter_1.DOM.getStyle(this._body, 'overflow');
                        if (style !== 'hidden') {
                            this._previousOverflow = style;
                            dom_adapter_1.DOM.setStyle(this._body, 'overflow', 'hidden');
                        }
                    }
                    else if (!visible && this.hideScroll && this.element && this._previousOverflow !== null) {
                        dom_adapter_1.DOM.setStyle(this._body, 'overflow', this._previousOverflow);
                        this._previousOverflow = null;
                    }
                    // Animate transition class in/out and then finally emit the completed event.
                    return action(this.element.nativeElement, this.transitionClass).then(function () {
                        _this._transitioning = false;
                        endEvent.emit(_this);
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], MdBackdrop.prototype, "clickClose", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], MdBackdrop.prototype, "hideScroll", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
                ], MdBackdrop.prototype, "onHiding", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', (typeof (_b = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _b) || Object)
                ], MdBackdrop.prototype, "onHidden", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', (typeof (_c = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _c) || Object)
                ], MdBackdrop.prototype, "onShowing", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', (typeof (_d = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _d) || Object)
                ], MdBackdrop.prototype, "onShown", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MdBackdrop.prototype, "transitionClass", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MdBackdrop.prototype, "transitionAddClass", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], MdBackdrop.prototype, "visible", null);
                MdBackdrop = __decorate([
                    core_1.Component({
                        selector: 'md-backdrop',
                        template: '',
                        encapsulation: core_1.ViewEncapsulation.None,
                        host: {
                            'class': 'md-backdrop',
                            '(click)': 'onClick()',
                        },
                    }), 
                    __metadata('design:paramtypes', [(typeof (_e = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _e) || Object])
                ], MdBackdrop);
                return MdBackdrop;
                var _a, _b, _c, _d, _e;
            }());
            exports_1("MdBackdrop", MdBackdrop);
        }
    }
});

System.register("ng2-material/components/sidenav/sidenav.ts", ["angular2/core.js", "ng2-material/components/backdrop/backdrop.ts", "angular2/src/facade/lang.js", "ng2-material/components/sidenav/sidenav_service.ts", "angular2/src/facade/async.js"], function(exports_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
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
    var core_1, backdrop_1, lang_1, sidenav_service_1, async_1;
    var SidenavAlignment, SidenavStyle, MdSidenav, MdSidenavContainer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (backdrop_1_1) {
                backdrop_1 = backdrop_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (sidenav_service_1_1) {
                sidenav_service_1 = sidenav_service_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            }],
        execute: function() {
            SidenavAlignment = (function () {
                function SidenavAlignment() {
                }
                /**
                 * The sidenav will be displayed on the left side of the content.
                 */
                SidenavAlignment.LEFT = 'left';
                /**
                 * The sidenav will be displayed on the right side of the content.
                 */
                SidenavAlignment.RIGHT = 'right';
                __decorate([
                    lang_1.CONST(), 
                    __metadata('design:type', Object)
                ], SidenavAlignment, "LEFT", void 0);
                __decorate([
                    lang_1.CONST(), 
                    __metadata('design:type', Object)
                ], SidenavAlignment, "RIGHT", void 0);
                SidenavAlignment = __decorate([
                    lang_1.CONST(), 
                    __metadata('design:paramtypes', [])
                ], SidenavAlignment);
                return SidenavAlignment;
            }());
            exports_1("SidenavAlignment", SidenavAlignment);
            SidenavStyle = (function () {
                function SidenavStyle() {
                }
                /**
                 * The sidenav will hover over the content.
                 */
                SidenavStyle.OVER = 'over';
                /**
                 * The sidenav will push the content to the side and display without obscuring it.
                 */
                SidenavStyle.SIDE = 'side';
                __decorate([
                    lang_1.CONST(), 
                    __metadata('design:type', Object)
                ], SidenavStyle, "OVER", void 0);
                __decorate([
                    lang_1.CONST(), 
                    __metadata('design:type', Object)
                ], SidenavStyle, "SIDE", void 0);
                SidenavStyle = __decorate([
                    lang_1.CONST(), 
                    __metadata('design:paramtypes', [])
                ], SidenavStyle);
                return SidenavStyle;
            }());
            exports_1("SidenavStyle", SidenavStyle);
            /**
             * A slide-out navigation element that transitions in from the left or right.
             *
             * ```html
             * <nav md-sidenav="menu" align="right" style="side">
             *   <h1>Components</h1>
             *   <button md-button (click)="close()">Close</button>
             * </nav>
             * ```
             */
            MdSidenav = (function (_super) {
                __extends(MdSidenav, _super);
                function MdSidenav(element, service, renderer, container) {
                    _super.call(this, element);
                    this.element = element;
                    this.service = service;
                    this.renderer = renderer;
                    this.container = container;
                    this.name = 'default';
                    this._align = SidenavAlignment.LEFT;
                    this._style = SidenavStyle.OVER;
                    /**
                     * The backdrop element the container provides.
                     */
                    this.backdropRef = null;
                    this.transitionClass = 'md-closed';
                    this.transitionAddClass = false;
                    this.renderer.setElementClass(this.element.nativeElement, this.transitionClass, !this.transitionAddClass);
                }
                Object.defineProperty(MdSidenav.prototype, "align", {
                    get: function () {
                        return this._align;
                    },
                    set: function (value) {
                        this._align = value === SidenavAlignment.RIGHT ? SidenavAlignment.RIGHT : SidenavAlignment.LEFT;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdSidenav.prototype, "style", {
                    get: function () {
                        return this._style;
                    },
                    /**
                     * One of 'side' or 'over'. 'side' will push the content out of the way and not display
                     * a backdrop overlay, and 'over' will display the overlay and be dismissed when the user
                     * clicks on the backdrop.
                     */
                    set: function (value) {
                        var _this = this;
                        this._style = value === SidenavStyle.SIDE ? SidenavStyle.SIDE : SidenavStyle.OVER;
                        if (this.container) {
                            async_1.TimerWrapper.setTimeout(function () {
                                _this.container.updateStyle(_this);
                            }, 0);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                MdSidenav.prototype.ngOnInit = function () {
                    this.service.register(this);
                };
                MdSidenav.prototype.ngOnDestroy = function () {
                    this.service.unregister(this);
                    this.backdropRef = null;
                };
                MdSidenav.prototype.toggle = function (visible) {
                    if (this.backdropRef) {
                        this.backdropRef.toggle(visible);
                    }
                    return _super.prototype.toggle.call(this, visible);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MdSidenav.prototype, "name", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
                ], MdSidenav.prototype, "onHiding", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', (typeof (_b = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _b) || Object)
                ], MdSidenav.prototype, "onHidden", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', (typeof (_c = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _c) || Object)
                ], MdSidenav.prototype, "onShowing", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', (typeof (_d = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _d) || Object)
                ], MdSidenav.prototype, "onShown", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String), 
                    __metadata('design:paramtypes', [String])
                ], MdSidenav.prototype, "align", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String), 
                    __metadata('design:paramtypes', [String])
                ], MdSidenav.prototype, "style", null);
                MdSidenav = __decorate([
                    core_1.Component({
                        selector: 'md-sidenav',
                        host: {
                            '[class.md-style-side]': 'style=="side"',
                            '[class.md-whiteframe-z2]': 'visible',
                            '[class.md-sidenav-left]': 'align!="right"',
                            '[class.md-sidenav-right]': 'align=="right"'
                        },
                        template: "<ng-content></ng-content>",
                        directives: [backdrop_1.MdBackdrop]
                    }),
                    __param(1, core_1.Inject(core_1.forwardRef(function () { return sidenav_service_1.SidenavService; }))),
                    __param(3, core_1.Optional()),
                    __param(3, core_1.SkipSelf()),
                    __param(3, core_1.Host()),
                    __param(3, core_1.Inject(core_1.forwardRef(function () { return MdSidenavContainer; }))), 
                    __metadata('design:paramtypes', [(typeof (_e = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _e) || Object, (typeof (_f = typeof sidenav_service_1.SidenavService !== 'undefined' && sidenav_service_1.SidenavService) === 'function' && _f) || Object, (typeof (_g = typeof core_1.Renderer !== 'undefined' && core_1.Renderer) === 'function' && _g) || Object, MdSidenavContainer])
                ], MdSidenav);
                return MdSidenav;
                var _a, _b, _c, _d, _e, _f, _g;
            }(backdrop_1.MdBackdrop));
            exports_1("MdSidenav", MdSidenav);
            MdSidenavContainer = (function () {
                // TODO(jd): This change detection hacking could probably be avoided if Zone.JS knew about media
                function MdSidenavContainer(_app) {
                    this._app = _app;
                    this._unsubscribe = null;
                    this.isPushed = false;
                }
                MdSidenavContainer.prototype.ngOnDestroy = function () {
                    this.children.toArray().forEach(function (m) {
                        m.backdropRef = null;
                    });
                    this._unsubscribe.unsubscribe();
                };
                MdSidenavContainer.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    // Tell each child about the backdrop so they can show it
                    // when they are opened or closed.
                    this.children.toArray().forEach(function (m) {
                        m.backdropRef = _this._backdrop;
                    });
                    // When the backdrop is hidden, close any child navs
                    this._unsubscribe = this._backdrop.onHiding.subscribe(function () {
                        _this.children.toArray().forEach(function (m) {
                            m.visible = false;
                        });
                    });
                };
                MdSidenavContainer.prototype.updateStyle = function (child) {
                    var pushed = false;
                    this.children && this.children.toArray().forEach(function (m) {
                        if (m.style === SidenavStyle.SIDE) {
                            pushed = true;
                        }
                    });
                    this.isPushed = pushed;
                    this._app && this._app.tick();
                };
                __decorate([
                    core_1.ContentChildren(MdSidenav), 
                    __metadata('design:type', (typeof (_a = typeof core_1.QueryList !== 'undefined' && core_1.QueryList) === 'function' && _a) || Object)
                ], MdSidenavContainer.prototype, "children", void 0);
                __decorate([
                    core_1.ViewChild(backdrop_1.MdBackdrop), 
                    __metadata('design:type', (typeof (_b = typeof backdrop_1.MdBackdrop !== 'undefined' && backdrop_1.MdBackdrop) === 'function' && _b) || Object)
                ], MdSidenavContainer.prototype, "_backdrop", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], MdSidenavContainer.prototype, "isPushed", void 0);
                MdSidenavContainer = __decorate([
                    core_1.Component({
                        selector: 'md-sidenav-container',
                        template: "\n    <md-backdrop class=\"md-opaque\" clickClose=\"true\"></md-backdrop>\n    <ng-content></ng-content>",
                        directives: [backdrop_1.MdBackdrop],
                        host: {
                            '[class.md-pushed]': 'isPushed'
                        }
                    }),
                    __param(0, core_1.Optional()), 
                    __metadata('design:paramtypes', [(typeof (_c = typeof core_1.ApplicationRef !== 'undefined' && core_1.ApplicationRef) === 'function' && _c) || Object])
                ], MdSidenavContainer);
                return MdSidenavContainer;
                var _a, _b, _c;
            }());
            exports_1("MdSidenavContainer", MdSidenavContainer);
        }
    }
});

System.register("ng2-material/components/sidenav/sidenav_service.ts", ["angular2/core.js"], function(exports_1) {
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
    var core_1;
    var SidenavService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SidenavService = (function () {
                function SidenavService() {
                    this._instances = [];
                }
                SidenavService.prototype.show = function (name) {
                    var instance = this.find(name);
                    if (!instance) {
                        return Promise.reject('invalid container');
                    }
                    return instance.show();
                };
                SidenavService.prototype.hide = function (name) {
                    var instance = this.find(name);
                    if (!instance) {
                        return Promise.reject('invalid container');
                    }
                    return instance.hide();
                };
                SidenavService.prototype.find = function (name) {
                    return this._instances.filter(function (c) {
                        return c.name === name;
                    })[0] || null;
                };
                SidenavService.prototype.register = function (instance) {
                    this._instances.push(instance);
                };
                SidenavService.prototype.unregister = function (instance) {
                    this._instances = this._instances.filter(function (c) {
                        return c.name !== instance.name;
                    });
                };
                SidenavService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], SidenavService);
                return SidenavService;
            }());
            exports_1("SidenavService", SidenavService);
        }
    }
});

System.register("ng2-material/core/util/util.ts", ["angular2/src/facade/lang.js"], function(exports_1) {
    "use strict";
    var lang_1;
    /**
     * Returns a function, that, as long as it continues to be invoked, will not
     * be triggered. The function will be called after it stops being called for
     * N milliseconds.
     * @param wait Integer value of msecs to delay (since last debounce reset); default value 10 msecs
     */
    function debounce(func, wait, scope) {
        var timer = null;
        return function debounced() {
            var context = scope, args = Array.prototype.slice.call(arguments);
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(function () {
                timer = undefined;
                func.apply(context, args);
            }, wait || 10);
        };
    }
    exports_1("debounce", debounce);
    /**
     * Returns a function that can only be triggered every `delay` milliseconds.
     * In other words, the function will not be called unless it has been more
     * than `delay` milliseconds since the last call.
     */
    function throttle(func, delay, scope) {
        var recent;
        return function throttled() {
            var context = scope;
            var args = arguments;
            var now = new Date().getTime();
            if (!recent || (now - recent > delay)) {
                func.apply(context, args);
                recent = now;
            }
        };
    }
    exports_1("throttle", throttle);
    function rAF(callback) {
        window.requestAnimationFrame(callback);
    }
    exports_1("rAF", rAF);
    function parseTabIndexAttribute(attr) {
        return lang_1.isPresent(attr) ? lang_1.NumberWrapper.parseInt(attr, 10) : 0;
    }
    exports_1("parseTabIndexAttribute", parseTabIndexAttribute);
    function isNumber(value) {
        return Object.prototype.toString.call(value) === '[object Number]';
    }
    exports_1("isNumber", isNumber);
    return {
        setters:[
            function (lang_1_1) {
                lang_1 = lang_1_1;
            }],
        execute: function() {
        }
    }
});

System.register("ng2-material/components/toolbar/toolbar.ts", ["angular2/core.js", "ng2-material/core/util/util.ts", "angular2/src/platform/dom/dom_adapter.js", "angular2/src/facade/lang.js"], function(exports_1) {
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
    var core_1, util_1, dom_adapter_1, lang_1;
    var MdToolbar;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (util_1_1) {
                util_1 = util_1_1;
            },
            function (dom_adapter_1_1) {
                dom_adapter_1 = dom_adapter_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            }],
        execute: function() {
            /**
             * @ngdoc directive
             * @name mdToolbar
             * @description
             * `md-toolbar` is used to place a toolbar in your app.
             *
             * Toolbars are usually used above a content area to display the title of the
             * current page, and show relevant action buttons for that page.
             *
             * You can change the height of the toolbar by adding either the
             * `md-medium-tall` or `md-tall` class to the toolbar.
             *
             * @usage
             * <hljs lang="html">
             * <div layout="column" layout-fill>
             *   <md-toolbar>
             *
             *     <div class="md-toolbar-tools">
             *       <span>My App's Title</span>
             *
             *       <!-- fill up the space between left and right area -->
             *       <span flex></span>
             *
             *       <md-button>
             *         Right Bar Button
             *       </md-button>
             *     </div>
             *
             *   </md-toolbar>
             *   <md-content>
             *     Hello!
             *   </md-content>
             * </div>
             * </hljs>
             *
             * @param {boolean=} md-scroll-shrink Whether the header should shrink away as
             * the user scrolls down, and reveal itself as the user scrolls up.
             *
             * _**Note (1):** for scrollShrink to work, the toolbar must be a sibling of a
             * `md-content` element, placed before it. See the scroll shrink demo._
             *
             * _**Note (2):** The `md-scroll-shrink` attribute is only parsed on component
             * initialization, it does not watch for scope changes._
             *
             *
             * @param {number=} mdShrinkSpeed How much to change the speed of the toolbar's
             * shrinking by. For example, if 0.25 is given then the toolbar will shrink
             * at one fourth the rate at which the user scrolls down. Default 0.5.
             */
            MdToolbar = (function () {
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
                    // TODO(jd): better way to find siblings?
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
                        // Add a negative margin-top the size of the toolbar to the content el.
                        // The content will start transformed down the toolbarHeight amount,
                        // so everything looks normal.
                        //
                        // As the user scrolls down, the content will be transformed up slowly
                        // to put the content underneath where the toolbar was.
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
                    __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
                ], MdToolbar);
                return MdToolbar;
                var _a;
            }());
            exports_1("MdToolbar", MdToolbar);
        }
    }
});

System.register("ng2-material/core/util/ink.ts", ["angular2/src/facade/lang.js", "angular2/src/platform/dom/dom_adapter.js", "ng2-material/core/util/animate.ts"], function(exports_1) {
    "use strict";
    var lang_1, dom_adapter_1, animate_1;
    var Ink;
    return {
        setters:[
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (dom_adapter_1_1) {
                dom_adapter_1 = dom_adapter_1_1;
            },
            function (animate_1_1) {
                animate_1 = animate_1_1;
            }],
        execute: function() {
            /**
             * Create ink ripples on elements in the page.
             */
            Ink = (function () {
                function Ink() {
                }
                /**
                 * Determine if ink can be applied to a given element.
                 * @param element The element to check
                 */
                Ink.canApply = function (element) {
                    return !dom_adapter_1.DOM.hasAttribute(element, 'md-no-ink');
                };
                /**
                 * Ink ripples are equal in height/width, so get the scalar size
                 * of the container.
                 *
                 * @param fit To fit the ripple to the element
                 * @param width Width of the ripple container
                 * @param height Height of the ripple container
                 * @returns {number}
                 */
                Ink.getSize = function (fit, width, height) {
                    return fit
                        ? Math.max(width, height)
                        : Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
                };
                /**
                 * Apply an ink ripple to an element at the given position.
                 *
                 * @param element The element to apply a ripple to
                 * @param left The x position inside the element for the ripple to originate from
                 * @param top The y position inside the element for the ripple to originate from
                 * @returns {Promise<any>} A promise that resolves when the ripple has faded
                 */
                Ink.ripple = function (element, left, top) {
                    var fit = lang_1.isPresent(dom_adapter_1.DOM.getAttribute(element, 'md-fab'));
                    var container = dom_adapter_1.DOM.querySelector(element, '.md-ripple-container');
                    if (!container) {
                        container = dom_adapter_1.DOM.createElement('div');
                        dom_adapter_1.DOM.addClass(container, 'md-ripple-container');
                        dom_adapter_1.DOM.appendChild(element, container);
                    }
                    var ripple = dom_adapter_1.DOM.createElement('div');
                    dom_adapter_1.DOM.addClass(ripple, 'md-ripple');
                    var getInitialStyles = function () {
                        var color = dom_adapter_1.DOM.getComputedStyle(element).color || 'rgb(0,0,0)';
                        var size = Ink.getSize(fit, element.clientWidth, element.clientHeight);
                        return {
                            'background-color': color,
                            left: left + "px",
                            top: top + "px",
                            width: size + "px",
                            height: size + "px"
                        };
                    };
                    return animate_1.Animate.setStyles(ripple, getInitialStyles())
                        .then(function () { return dom_adapter_1.DOM.appendChild(container, ripple); })
                        .then(function () { return dom_adapter_1.DOM.addClass(ripple, 'md-ripple-placed'); })
                        .then(function () { return animate_1.Animate.wait(); })
                        .then(function () { return dom_adapter_1.DOM.addClass(ripple, 'md-ripple-scaled'); })
                        .then(function () { return dom_adapter_1.DOM.addClass(ripple, 'md-ripple-active'); })
                        .then(function () { return animate_1.Animate.wait(450); })
                        .then(function () { return dom_adapter_1.DOM.removeClass(ripple, 'md-ripple-active'); })
                        .then(function () { return animate_1.Animate.wait(650); })
                        .then(function () { return dom_adapter_1.DOM.removeChild(container, ripple); });
                };
                /**
                 * Start an ink ripple from a MouseEvent.
                 *
                 * @param element The element to ripple on.
                 * @param event The mouse event to indicate where the ripple should start at
                 * @returns {Promise<any>} A promise that resolves when the ripple has faded.
                 */
                Ink.rippleEvent = function (element, event) {
                    var rippleX = event.offsetX;
                    var rippleY = event.offsetY;
                    if (element !== event.srcElement) {
                        var rect = dom_adapter_1.DOM.getBoundingClientRect(element);
                        rippleX = event.clientX - rect.left;
                        rippleY = event.clientY - rect.top;
                    }
                    return Ink.ripple(element, rippleX, rippleY);
                };
                return Ink;
            }());
            exports_1("Ink", Ink);
        }
    }
});

System.register("ng2-material/components/tabs/tabs.ts", ["angular2/core.js", "ng2-material/core/util/ink.ts", "angular2/common.js"], function(exports_1) {
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
    var core_1, ink_1, common_1;
    var MdTab, MdTabs;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ink_1_1) {
                ink_1 = ink_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            // TODO: behaviors to test
            //  - Tabs will become paginated if there isn't enough room for them
            //  - You can swipe left and right on a mobile device to change tabs
            //  - You can bind the selected tab via the selected attribute on the md-tabs element
            //  - If you set the selected tab binding to -1, it will leave no tab selected
            //  - If you remove a tab, it will try to select a new one
            //  - There's an ink bar that follows the selected tab, you can turn it off if you want
            //  - If you set the disabled attribute on a tab, it becomes unselectable
            //  - If you set md-theme=\"green\" on the md-tabs element, you'll get green tabs
            MdTab = (function () {
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
                    __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _b) || Object])
                ], MdTab);
                return MdTab;
                var _a, _b;
            }());
            exports_1("MdTab", MdTab);
            MdTabs = (function () {
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
                    __metadata('design:paramtypes', [(typeof (_a = typeof core_1.QueryList !== 'undefined' && core_1.QueryList) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _b) || Object])
                ], MdTabs);
                return MdTabs;
                var _a, _b;
            }());
            exports_1("MdTabs", MdTabs);
        }
    }
});

System.register("ng2-material/core/util/media.ts", ["angular2/core.js", "rxjs/Subject"], function(exports_1) {
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
    var core_1, Subject_1;
    var MEDIA, MEDIA_PRIORITY, MediaListener, Media;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            /**
             * As defined in core/style/variables.scss
             *
             * $layout-breakpoint-xs:     600px !default;
             * $layout-breakpoint-sm:     960px !default;
             * $layout-breakpoint-md:     1280px !default;
             * $layout-breakpoint-lg:     1920px !default;
             *
             */
            exports_1("MEDIA", MEDIA = {
                'xs': '(max-width: 599px)',
                'gt-xs': '(min-width: 600px)',
                'sm': '(min-width: 600px) and (max-width: 959px)',
                'gt-sm': '(min-width: 960px)',
                'md': '(min-width: 960px) and (max-width: 1279px)',
                'gt-md': '(min-width: 1280px)',
                'lg': '(min-width: 1280px) and (max-width: 1919px)',
                'gt-lg': '(min-width: 1920px)',
                'xl': '(min-width: 1920px)'
            });
            exports_1("MEDIA_PRIORITY", MEDIA_PRIORITY = [
                'xl',
                'gt-lg',
                'lg',
                'gt-md',
                'md',
                'gt-sm',
                'sm',
                'gt-xs',
                'xs'
            ]);
            /**
             * Reference to a Media query listener. When you are done with it, call the `destroy` method
             * to release its reference.
             */
            MediaListener = (function () {
                function MediaListener(query, _mql, _media) {
                    var _this = this;
                    this.query = query;
                    this._mql = _mql;
                    this._media = _media;
                    /**
                     * Emits when the query that this is listening for changes.
                     */
                    this.onMatched = new Subject_1.Subject();
                    this._destroyed = false;
                    this._listener = function (mql) { return _this.onMatched.next(mql); };
                    this._mql.addListener(this._listener);
                }
                Object.defineProperty(MediaListener.prototype, "matches", {
                    /**
                     * Determine if this query is currently matched by the viewport.
                     * @returns {boolean} True if the query is matched.
                     */
                    get: function () {
                        return !this._destroyed && this._mql.matches;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Destroy and unhook this listener.
                 */
                MediaListener.prototype.destroy = function () {
                    if (!this._destroyed) {
                        this._mql.removeListener(this._listener);
                        this._media.unregisterListener(this);
                        this._destroyed = true;
                        this._listener = null;
                        this._mql = null;
                    }
                };
                return MediaListener;
            }());
            exports_1("MediaListener", MediaListener);
            /**
             * Injectable class for being notified of changes to viewport media queries.
             */
            Media = (function () {
                function Media() {
                    this._cache = {};
                }
                Media.prototype.listen = function (query) {
                    var listener = this._cache[query];
                    if (!listener) {
                        listener = this._cache[query] = {
                            mql: window.matchMedia(query),
                            references: 0
                        };
                    }
                    listener.references++;
                    return new MediaListener(query, listener.mql, this);
                };
                Media.prototype.unregisterListener = function (listener) {
                    var cached = this._cache[listener.query];
                    if (cached) {
                        cached.references--;
                        delete this._cache[listener.query];
                    }
                };
                Media.prototype.hasMedia = function (size) {
                    return Media.hasMedia(size);
                };
                Media.hasMedia = function (size) {
                    var query = Media.getQuery(size);
                    if (!query) {
                        return false;
                    }
                    return window.matchMedia(query).matches;
                };
                Media.getQuery = function (size) {
                    var query = MEDIA[size];
                    if (!query) {
                        console.warn("unknown media query size " + size + ". Expected one of [" + MEDIA_PRIORITY.join(',') + "]");
                        return null;
                    }
                    return query;
                };
                Media = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], Media);
                return Media;
            }());
            exports_1("Media", Media);
        }
    }
});

System.register("ng2-material/core/util/animate.ts", ["angular2/src/platform/dom/dom_adapter.js", "angular2/src/facade/async.js"], function(exports_1) {
    "use strict";
    var dom_adapter_1, async_1;
    var Animate;
    return {
        setters:[
            function (dom_adapter_1_1) {
                dom_adapter_1 = dom_adapter_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            }],
        execute: function() {
            /**
             * Provide an API for animating elements with CSS transitions
             */
            Animate = (function () {
                function Animate() {
                }
                Animate.enter = function (el, cssClass) {
                    dom_adapter_1.DOM.removeClass(el, cssClass);
                    return new Promise(function (resolve) {
                        dom_adapter_1.DOM.addClass(el, cssClass + '-add');
                        async_1.TimerWrapper.setTimeout(function () {
                            var duration = Animate.getTransitionDuration(el, true);
                            var callTimeout = async_1.TimerWrapper.setTimeout(function () { return done(true); }, duration);
                            var done = function (timeout) {
                                if (!removeListener) {
                                    return;
                                }
                                dom_adapter_1.DOM.removeClass(el, cssClass + '-add-active');
                                dom_adapter_1.DOM.removeClass(el, cssClass + '-add');
                                if (!timeout) {
                                    async_1.TimerWrapper.clearTimeout(callTimeout);
                                }
                                removeListener();
                                removeListener = null;
                                resolve();
                            };
                            var removeListener = dom_adapter_1.DOM.onAndCancel(el, Animate.TRANSITION_EVENT, function () { return done(false); });
                            dom_adapter_1.DOM.addClass(el, cssClass + '-add-active');
                            dom_adapter_1.DOM.addClass(el, cssClass);
                        }, 1);
                    });
                };
                Animate.leave = function (el, cssClass) {
                    return new Promise(function (resolve) {
                        dom_adapter_1.DOM.addClass(el, cssClass + '-remove');
                        async_1.TimerWrapper.setTimeout(function () {
                            var duration = Animate.getTransitionDuration(el, true);
                            var callTimeout = async_1.TimerWrapper.setTimeout(function () { return done(true); }, duration);
                            var done = function (timeout) {
                                if (!removeListener) {
                                    return;
                                }
                                dom_adapter_1.DOM.removeClass(el, cssClass + '-remove-active');
                                dom_adapter_1.DOM.removeClass(el, cssClass + '-remove');
                                if (!timeout) {
                                    async_1.TimerWrapper.clearTimeout(callTimeout);
                                }
                                removeListener();
                                removeListener = null;
                                resolve();
                            };
                            var removeListener = dom_adapter_1.DOM.onAndCancel(el, Animate.TRANSITION_EVENT, done);
                            dom_adapter_1.DOM.addClass(el, cssClass + '-remove-active');
                            dom_adapter_1.DOM.removeClass(el, cssClass);
                        }, 1);
                    });
                };
                /**
                 * Get the duration of any transitions being applied to the given element.
                 *
                 * Based on: https://gist.github.com/snorpey/5323028
                 * @param element The element to query
                 * @param includeDelay Include any specified transition-delay value.
                 * @returns {number}
                 */
                Animate.getTransitionDuration = function (element, includeDelay) {
                    if (includeDelay === void 0) { includeDelay = false; }
                    var prefixes = ['', 'moz', 'webkit', 'ms', 'o', 'khtml'];
                    var style = window.getComputedStyle(element);
                    for (var i = 0; i < prefixes.length; i++) {
                        var durationProperty = (i === 0 ? '' : "-" + prefixes[i] + "-") + "transition-duration";
                        var duration = style[durationProperty];
                        if (!duration) {
                            continue;
                        }
                        duration = (duration.indexOf('ms') > -1) ? parseFloat(duration) : parseFloat(duration) * 1000;
                        if (duration === 0) {
                            continue;
                        }
                        if (includeDelay) {
                            var delayProperty = (i === 0 ? '' : "-" + prefixes[i] + "-") + "transition-delay";
                            var delay = style[delayProperty];
                            if (typeof delay !== 'undefined') {
                                duration += (delay.indexOf('ms') > -1) ? parseFloat(delay) : parseFloat(delay) * 1000;
                            }
                        }
                        return duration;
                    }
                    return -1;
                };
                Animate.setTransitionDuration = function (element, delayMs) {
                    dom_adapter_1.DOM.setStyle(element, 'transition-duration', delayMs + "ms");
                };
                /* From Modernizr */
                Animate.whichTransitionEvent = function () {
                    var t;
                    var el = document.createElement('fakeelement');
                    var transitions = {
                        'transition': 'transitionend',
                        'OTransition': 'oTransitionEnd',
                        'MozTransition': 'transitionend',
                        'WebkitTransition': 'webkitTransitionEnd'
                    };
                    for (t in transitions) {
                        if (el.style[t] !== undefined) {
                            return transitions[t];
                        }
                    }
                };
                Animate.animateStyles = function (element, styles, durationMs) {
                    var saveDuration = Animate.getTransitionDuration(element);
                    Animate.setTransitionDuration(element, durationMs);
                    return new Promise(function (animResolve, animReject) {
                        var callTimeout = async_1.TimerWrapper.setTimeout(function () { return done(true); }, durationMs);
                        var done = function (timeout) {
                            if (!removeListener) {
                                return;
                            }
                            if (timeout) {
                                async_1.TimerWrapper.clearTimeout(callTimeout);
                            }
                            removeListener();
                            removeListener = null;
                            if (saveDuration !== -1) {
                                Animate.setTransitionDuration(element, saveDuration);
                            }
                            else {
                                dom_adapter_1.DOM.removeStyle(element, 'transition-duration');
                            }
                            animResolve();
                        };
                        var removeListener = dom_adapter_1.DOM.onAndCancel(element, Animate.TRANSITION_EVENT, function () { return done(false); });
                        Object.keys(styles).forEach(function (key) {
                            dom_adapter_1.DOM.setStyle(element, key, "" + styles[key]);
                        });
                    });
                };
                /**
                 * Set CSS styles immediately by turning off transition duration and restoring it afterward
                 */
                Animate.setStyles = function (element, styles) {
                    var saveDuration = Animate.getTransitionDuration(element);
                    Animate.setTransitionDuration(element, 0);
                    return new Promise(function (resolve, reject) {
                        Object.keys(styles).forEach(function (key) {
                            dom_adapter_1.DOM.setStyle(element, key, "" + styles[key]);
                        });
                        if (saveDuration !== -1) {
                            Animate.setTransitionDuration(element, saveDuration);
                        }
                        else {
                            dom_adapter_1.DOM.removeStyle(element, 'transition-duration');
                        }
                        resolve();
                    });
                };
                /**
                 * Wait a period of time, then resolve a promise.
                 * @param milliseconds The period to wait before resolving.
                 * @returns {Promise<void>|Promise} A promise that resolves after a period of time.
                 */
                Animate.wait = function (milliseconds) {
                    if (milliseconds === void 0) { milliseconds = 10; }
                    return new Promise(function (resolve) {
                        async_1.TimerWrapper.setTimeout(function () { return resolve(); }, milliseconds);
                    });
                };
                /**
                 * Look up the transition event name for the browser type and cache it.
                 */
                Animate.TRANSITION_EVENT = Animate.whichTransitionEvent();
                return Animate;
            }());
            exports_1("Animate", Animate);
        }
    }
});

System.register("ng2-material/all.ts", ["angular2/src/facade/lang.js", "ng2-material/components/button/button.ts", "ng2-material/components/checkbox/checkbox.ts", "ng2-material/components/content/content.ts", "ng2-material/components/dialog/dialog.ts", "ng2-material/components/divider/divider.ts", "ng2-material/components/icon/icon.ts", "ng2-material/components/ink/ink.ts", "ng2-material/components/form/validators.ts", "ng2-material/components/form/messages.ts", "ng2-material/components/input/input.ts", "ng2-material/components/list/list.ts", "ng2-material/components/progress_linear/progress_linear.ts", "ng2-material/components/progress_circular/progress_circular.ts", "ng2-material/components/peekaboo/peekaboo.ts", "ng2-material/components/radio/radio_button.ts", "ng2-material/components/radio/radio_dispatcher.ts", "ng2-material/components/switcher/switch.ts", "ng2-material/components/subheader/subheader.ts", "ng2-material/components/sidenav/sidenav.ts", "ng2-material/components/sidenav/sidenav_service.ts", "ng2-material/components/toolbar/toolbar.ts", "ng2-material/components/tabs/tabs.ts", "ng2-material/core/util/media.ts", "ng2-material/core/util/animate.ts"], function(exports_1) {
    "use strict";
    var lang_1, button_1, checkbox_1, content_1, dialog_1, divider_1, icon_1, ink_1, validators_1, messages_1, input_1, list_1, progress_linear_1, progress_circular_1, peekaboo_1, radio_button_1, radio_dispatcher_1, switch_1, subheader_1, sidenav_1, sidenav_service_1, toolbar_1, tabs_1, media_1;
    var MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS;
    var exportedNames_1 = {
        'MATERIAL_DIRECTIVES': true,
        'MATERIAL_PROVIDERS': true
    };
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default"&& !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
                exportStar_1(button_1_1);
            },
            function (checkbox_1_1) {
                checkbox_1 = checkbox_1_1;
                exportStar_1(checkbox_1_1);
            },
            function (content_1_1) {
                content_1 = content_1_1;
                exportStar_1(content_1_1);
            },
            function (dialog_1_1) {
                dialog_1 = dialog_1_1;
                exportStar_1(dialog_1_1);
            },
            function (divider_1_1) {
                divider_1 = divider_1_1;
                exportStar_1(divider_1_1);
            },
            function (icon_1_1) {
                icon_1 = icon_1_1;
                exportStar_1(icon_1_1);
            },
            function (ink_1_1) {
                ink_1 = ink_1_1;
                exportStar_1(ink_1_1);
            },
            function (validators_1_1) {
                validators_1 = validators_1_1;
                exportStar_1(validators_1_1);
            },
            function (messages_1_1) {
                messages_1 = messages_1_1;
                exportStar_1(messages_1_1);
            },
            function (input_1_1) {
                input_1 = input_1_1;
                exportStar_1(input_1_1);
            },
            function (list_1_1) {
                list_1 = list_1_1;
                exportStar_1(list_1_1);
            },
            function (progress_linear_1_1) {
                progress_linear_1 = progress_linear_1_1;
                exportStar_1(progress_linear_1_1);
            },
            function (progress_circular_1_1) {
                progress_circular_1 = progress_circular_1_1;
                exportStar_1(progress_circular_1_1);
            },
            function (peekaboo_1_1) {
                peekaboo_1 = peekaboo_1_1;
                exportStar_1(peekaboo_1_1);
            },
            function (radio_button_1_1) {
                radio_button_1 = radio_button_1_1;
                exportStar_1(radio_button_1_1);
            },
            function (radio_dispatcher_1_1) {
                radio_dispatcher_1 = radio_dispatcher_1_1;
                exportStar_1(radio_dispatcher_1_1);
            },
            function (switch_1_1) {
                switch_1 = switch_1_1;
                exportStar_1(switch_1_1);
            },
            function (subheader_1_1) {
                subheader_1 = subheader_1_1;
                exportStar_1(subheader_1_1);
            },
            function (sidenav_1_1) {
                sidenav_1 = sidenav_1_1;
                exportStar_1(sidenav_1_1);
            },
            function (sidenav_service_1_1) {
                sidenav_service_1 = sidenav_service_1_1;
                exportStar_1(sidenav_service_1_1);
            },
            function (toolbar_1_1) {
                toolbar_1 = toolbar_1_1;
                exportStar_1(toolbar_1_1);
            },
            function (tabs_1_1) {
                tabs_1 = tabs_1_1;
                exportStar_1(tabs_1_1);
            },
            function (media_1_1) {
                media_1 = media_1_1;
                exportStar_1(media_1_1);
            },
            function (animate_1_1) {
                exportStar_1(animate_1_1);
            }],
        execute: function() {
            /**
             * Collection of Material Design component directives.
             */
            exports_1("MATERIAL_DIRECTIVES", MATERIAL_DIRECTIVES = lang_1.CONST_EXPR([
                button_1.MdAnchor, button_1.MdButton,
                checkbox_1.MdCheckbox,
                content_1.MdContent,
                divider_1.MdDivider,
                icon_1.MdIcon,
                ink_1.MdInk,
                input_1.MdInput, input_1.MdInputContainer,
                validators_1.MdPatternValidator, validators_1.MdMaxLengthValidator,
                validators_1.MdMinValueValidator, validators_1.MdMaxValueValidator,
                validators_1.MdNumberRequiredValidator,
                messages_1.MdMessage, messages_1.MdMessages,
                list_1.MdList, list_1.MdListItem,
                peekaboo_1.MdPeekaboo,
                progress_linear_1.MdProgressLinear,
                progress_circular_1.MdProgressCircular,
                radio_button_1.MdRadioButton, radio_button_1.MdRadioGroup,
                sidenav_1.MdSidenav, sidenav_1.MdSidenavContainer,
                subheader_1.MdSubheader,
                switch_1.MdSwitch,
                toolbar_1.MdToolbar,
                tabs_1.MdTab, tabs_1.MdTabs
            ]));
            /**
             * Collection of Material Design component providers.
             */
            exports_1("MATERIAL_PROVIDERS", MATERIAL_PROVIDERS = [
                dialog_1.MdDialog,
                media_1.Media,
                sidenav_service_1.SidenavService,
                radio_dispatcher_1.MdRadioDispatcher,
                validators_1.INPUT_VALIDATORS
            ]);
        }
    }
});

//# sourceMappingURL=ng2-material.js.map