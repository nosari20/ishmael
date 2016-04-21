declare module 'ng2-material/core/util/animate' {
	/**
	 * Provide an API for animating elements with CSS transitions
	 */
	export class Animate {
	    /**
	     * Look up the transition event name for the browser type and cache it.
	     */
	    static TRANSITION_EVENT: string;
	    static enter(el: HTMLElement, cssClass: string): Promise<void>;
	    static leave(el: HTMLElement, cssClass: string): Promise<void>;
	    /**
	     * Get the duration of any transitions being applied to the given element.
	     *
	     * Based on: https://gist.github.com/snorpey/5323028
	     * @param element The element to query
	     * @param includeDelay Include any specified transition-delay value.
	     * @returns {number}
	     */
	    static getTransitionDuration(element: HTMLElement, includeDelay?: boolean): any;
	    static setTransitionDuration(element: HTMLElement, delayMs: number): void;
	    static whichTransitionEvent(): string;
	    static animateStyles(element: HTMLElement, styles: {
	        [style: string]: string | number;
	    }, durationMs: number): Promise<void>;
	    /**
	     * Set CSS styles immediately by turning off transition duration and restoring it afterward
	     */
	    static setStyles(element: HTMLElement, styles: {
	        [style: string]: string | number;
	    }): Promise<void>;
	    /**
	     * Wait a period of time, then resolve a promise.
	     * @param milliseconds The period to wait before resolving.
	     * @returns {Promise<void>|Promise} A promise that resolves after a period of time.
	     */
	    static wait(milliseconds?: number): Promise<void>;
	}

}
declare module 'ng2-material/core/util/ink' {
	/**
	 * Create ink ripples on elements in the page.
	 */
	export class Ink {
	    /**
	     * Determine if ink can be applied to a given element.
	     * @param element The element to check
	     */
	    static canApply(element: HTMLElement): boolean;
	    /**
	     * Ink ripples are equal in height/width, so get the scalar size
	     * of the container.
	     *
	     * @param fit To fit the ripple to the element
	     * @param width Width of the ripple container
	     * @param height Height of the ripple container
	     * @returns {number}
	     */
	    static getSize(fit: boolean, width: number, height: number): number;
	    /**
	     * Apply an ink ripple to an element at the given position.
	     *
	     * @param element The element to apply a ripple to
	     * @param left The x position inside the element for the ripple to originate from
	     * @param top The y position inside the element for the ripple to originate from
	     * @returns {Promise<any>} A promise that resolves when the ripple has faded
	     */
	    static ripple(element: HTMLElement, left: number, top: number): Promise<any>;
	    /**
	     * Start an ink ripple from a MouseEvent.
	     *
	     * @param element The element to ripple on.
	     * @param event The mouse event to indicate where the ripple should start at
	     * @returns {Promise<any>} A promise that resolves when the ripple has faded.
	     */
	    static rippleEvent(element: HTMLElement, event: MouseEvent): Promise<any>;
	}

}
declare module 'ng2-material/components/button/button' {
	import { OnChanges, ElementRef } from "angular2/core";
	export class MdButton {
	    private _element;
	    /** Whether a mousedown has occured on this element in the last 100ms. */
	    isMouseDown: boolean;
	    /** Whether the button has focus from the keyboard (not the mouse). Used for class binding. */
	    isKeyboardFocused: boolean;
	    constructor(_element: ElementRef);
	    onMousedown(event: any): void;
	    onFocus(): void;
	    onBlur(): void;
	}
	export class MdAnchor extends MdButton implements OnChanges {
	    tabIndex: number;
	    disabled_: boolean;
	    disabled: boolean;
	    onClick(event: any): void;
	    /** Invoked when a change is detected. */
	    ngOnChanges(_: any): void;
	    /** Gets the aria-disabled value for the component, which must be a string for Dart. */
	    isAriaDisabled: string;
	}

}
declare module 'ng2-material/core/key_codes' {
	export class KeyCodes {
	    static ESCAPE: number;
	    static SPACE: number;
	    static UP: number;
	    static DOWN: number;
	}

}
declare module 'ng2-material/core/util/util' {
	/**
	 * Returns a function, that, as long as it continues to be invoked, will not
	 * be triggered. The function will be called after it stops being called for
	 * N milliseconds.
	 * @param wait Integer value of msecs to delay (since last debounce reset); default value 10 msecs
	 */
	export function debounce(func: any, wait: any, scope: any): () => void;
	/**
	 * Returns a function that can only be triggered every `delay` milliseconds.
	 * In other words, the function will not be called unless it has been more
	 * than `delay` milliseconds since the last call.
	 */
	export function throttle(func: any, delay: any, scope: any): () => void;
	export function rAF(callback: any): void;
	export function parseTabIndexAttribute(attr: any): number;
	export function isNumber(value: any): boolean;

}
declare module 'ng2-material/components/checkbox/checkbox' {
	import { EventEmitter } from "angular2/core";
	export class MdCheckbox {
	    checkedChange: EventEmitter<boolean>;
	    /** Whether this checkbox is checked. */
	    checked: boolean;
	    /** Whether this checkbox is disabled. */
	    disabled_: boolean;
	    /** Setter for tabindex */
	    private _tabindex;
	    tabindex: number;
	    disabled: boolean;
	    onKeydown(event: KeyboardEvent): void;
	    toggle(event: any): void;
	}

}
declare module 'ng2-material/components/content/content' {
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
	export class MdContent {
	}

}
declare module 'ng2-material/components/dialog/dialog_ref' {
	import { ComponentRef } from "angular2/core";
	/**
	 * Reference to an opened dialog.
	 */
	export class MdDialogRef {
	    containerRef: ComponentRef;
	    _backdropRef: ComponentRef;
	    _contentRef: ComponentRef;
	    isClosed: boolean;
	    whenClosedDeferred: any;
	    contentRefDeferred: any;
	    constructor();
	    /**
	     * The backdrop hiding subscription
	     * @private
	     */
	    private _subscription;
	    backdropRef: ComponentRef;
	    contentRef: ComponentRef;
	    /**
	     * Gets the component instance for the content of the dialog.
	     */
	    instance: any;
	    /**
	     * Gets a promise that is resolved when the dialog is closed.
	     */
	    whenClosed: Promise<any>;
	    /**
	     * Closes the dialog. This operation is asynchronous.
	     */
	    close(result?: any): Promise<void>;
	}

}
declare module 'ng2-material/components/dialog/dialog_config' {
	/** Configuration for a dialog to be opened. */
	export class MdDialogConfig {
	    width: string;
	    height: string;
	    container: HTMLElement;
	    sourceEvent: Event;
	    clickClose: boolean;
	    context: any;
	    parent(element: HTMLElement): MdDialogConfig;
	    clickOutsideToClose(enabled: boolean): MdDialogConfig;
	    title(text: string): MdDialogConfig;
	    textContent(text: string): MdDialogConfig;
	    ariaLabel(text: string): MdDialogConfig;
	    ok(text: string): MdDialogConfig;
	    cancel(text: string): MdDialogConfig;
	    targetEvent(ev: Event): MdDialogConfig;
	}

}
declare module 'ng2-material/components/dialog/dialog_container' {
	import { ElementRef } from "angular2/core";
	import { MdDialogRef } from 'ng2-material/components/dialog/dialog_ref';
	/**
	 * Container for user-provided dialog content.
	 */
	export class MdDialogContainer {
	    contentRef: ElementRef;
	    dialogRef: MdDialogRef;
	    constructor();
	    wrapFocus(): void;
	    documentKeypress(event: KeyboardEvent): void;
	}
	/**
	 * Simple decorator used only to communicate an ElementRef to the parent MdDialogContainer as the
	 * location for where the dialog content will be loaded.
	 */
	export class MdDialogContent {
	    constructor(dialogContainer: MdDialogContainer, elementRef: ElementRef);
	}

}
declare module 'ng2-material/components/backdrop/backdrop' {
	import { ElementRef, EventEmitter } from "angular2/core";
	/**
	 * An overlay for content on the page.
	 * Can optionally dismiss when clicked on.
	 * Has outputs for show/showing and hide/hiding.
	 */
	export class MdBackdrop {
	    element: ElementRef;
	    /**
	     * When true, clicking on the backdrop will close it
	     */
	    clickClose: boolean;
	    /**
	     * When true, disable the parent container scroll while the backdrop is active.
	     */
	    hideScroll: boolean;
	    /**
	     * Emits when the backdrop begins to hide.
	     */
	    onHiding: EventEmitter<MdBackdrop>;
	    /**
	     * Emits when the backdrop has finished being hidden.
	     */
	    onHidden: EventEmitter<MdBackdrop>;
	    /**
	     * Emits when the backdrop begins to be shown.
	     */
	    onShowing: EventEmitter<MdBackdrop>;
	    /**
	     * Emits when the backdrop has finished being shown.
	     */
	    onShown: EventEmitter<MdBackdrop>;
	    constructor(element: ElementRef);
	    /**
	     * The CSS class name to transition on/off when the backdrop is hidden/shown.
	     */
	    transitionClass: string;
	    /**
	     * Whether to add the {@see transitionClass} or remove it when the backdrop is shown. The
	     * opposite will happen when the backdrop is hidden.
	     */
	    transitionAddClass: boolean;
	    /**
	     * Whether the backdrop is visible.
	     */
	    visible: boolean;
	    private _visible;
	    private _transitioning;
	    private _previousOverflow;
	    private _body;
	    onClick(): void;
	    /**
	     * Hide the backdrop and return a promise that is resolved when the hide animations are
	     * complete.
	     */
	    hide(): Promise<any>;
	    /**
	     * Show the backdrop and return a promise that is resolved when the show animations are
	     * complete.
	     */
	    show(): Promise<any>;
	    /**
	     * Toggle the visibility of the backdrop.
	     * @param visible whether or not the backdrop should be visible
	     * @returns {any}
	     */
	    toggle(visible?: boolean): any;
	}

}
declare module 'ng2-material/components/dialog/dialog_basic' {
	import { MdDialogRef } from 'ng2-material/components/dialog/dialog_ref';
	export class MdDialogBasic {
	    dialog: MdDialogRef;
	    title: string;
	    textContent: string;
	    cancel: string;
	    ok: string;
	    type: string;
	    constructor(dialog: MdDialogRef);
	}

}
declare module 'ng2-material/components/dialog/dialog' {
	import { ComponentRef, DynamicComponentLoader, ElementRef, ResolvedProvider, RootRenderer } from "angular2/core";
	import { Type } from "angular2/src/facade/lang";
	import { MdDialogRef } from 'ng2-material/components/dialog/dialog_ref';
	import { MdDialogConfig } from 'ng2-material/components/dialog/dialog_config';
	export * from 'ng2-material/components/dialog/dialog_config';
	export * from 'ng2-material/components/dialog/dialog_container';
	export * from 'ng2-material/components/dialog/dialog_ref';
	export * from 'ng2-material/components/dialog/dialog_basic';
	/**
	 * Service for opening modal dialogs.
	 */
	export class MdDialog {
	    componentLoader: DynamicComponentLoader;
	    /**
	     * Unique id counter for RenderComponentType.
	     * @private
	     */
	    static _uniqueId: number;
	    /**
	     * Renderer for manipulating dialog and backdrop component elements.
	     * @private
	     */
	    private _renderer;
	    constructor(componentLoader: DynamicComponentLoader, rootRenderer: RootRenderer);
	    private _defaultContainer;
	    /**
	     * Opens a modal dialog.
	     * @param type The component to open.
	     * @param elementRef The logical location into which the component will be opened.
	     * @param options
	     * @returns Promise for a reference to the dialog.
	     */
	    open(type: Type, elementRef: ElementRef, options?: MdDialogConfig): Promise<MdDialogRef>;
	    /** Loads the dialog backdrop (transparent overlay over the rest of the page). */
	    _openBackdrop(elementRef: ElementRef, bindings: ResolvedProvider[], options: MdDialogConfig): Promise<ComponentRef>;
	    alert(message: string, okMessage: string): Promise<any>;
	    confirm(message: string, okMessage: string, cancelMessage: string): Promise<any>;
	}

}
declare module 'ng2-material/components/divider/divider' {
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
	export class MdDivider {
	}

}
declare module 'ng2-material/components/icon/icon' {
	export class MdIcon {
	}

}
declare module 'ng2-material/components/ink/ink' {
	import { ElementRef, EventEmitter } from "angular2/core";
	export class MdInk {
	    private _element;
	    inked: EventEmitter<MdInk>;
	    constructor(_element: ElementRef);
	    onMousedown(event: any): void;
	}

}
declare module 'ng2-material/components/form/validators' {
	import { Validator, Control } from "angular2/common";
	export class MdPatternValidator implements Validator {
	    /**
	     * Returns a validator that checks to see if a string matches a given Regular Expression
	     */
	    static inline(pattern: string): any;
	    mdPattern: string;
	    validate(control: Control): {
	        [key: string]: any;
	    };
	}
	export class MdMaxLengthValidator implements Validator {
	    /**
	     * Returns a validator that checks for a maximum length of a string
	     */
	    static inline(length: number | string): any;
	    mdMaxLength: string;
	    validate(control: Control): {
	        [key: string]: any;
	    };
	}
	export class MdMaxValueValidator implements Validator {
	    /**
	     * Returns a validator that checks for a maximum number value
	     */
	    static inline(length: number | string): any;
	    mdMax: string;
	    validate(control: Control): {
	        [key: string]: any;
	    };
	}
	export class MdMinValueValidator implements Validator {
	    /**
	     * Returns a validator that checks for a minimum number value
	     */
	    static inline(length: number | string): any;
	    mdMin: string;
	    validate(control: Control): {
	        [key: string]: any;
	    };
	}
	export class MdNumberRequiredValidator implements Validator {
	    /**
	     * Returns a validator that checks for the existence of a truthy value
	     */
	    static inline(): any;
	    validate(control: Control): {
	        [key: string]: any;
	    };
	}
	export const INPUT_VALIDATORS: (typeof MdMaxLengthValidator | typeof MdPatternValidator | typeof MdMaxValueValidator | typeof MdMinValueValidator | typeof MdNumberRequiredValidator)[];

}
declare module 'ng2-material/components/form/messages' {
	import { NgFormModel, NgControlName } from "angular2/common";
	import { OnDestroy, OnInit, QueryList } from "angular2/core";
	export class MdMessage {
	    errorKey: string;
	    okay: boolean;
	}
	export class MdMessages implements OnInit, OnDestroy {
	    messages: QueryList<MdMessage>;
	    form: NgFormModel;
	    property: string | NgControlName;
	    valid: boolean;
	    isTouched: boolean;
	    constructor(messages: QueryList<MdMessage>, form: NgFormModel);
	    /**
	     * Subscription to value changes that is to be dropped when the component is destroyed.
	     * @type {null}
	     * @private
	     */
	    private _unsubscribe;
	    ngOnInit(): void;
	    ngOnDestroy(): any;
	    private _valueChanged();
	}

}
declare module 'ng2-material/components/input/input' {
	import { AfterContentInit, ElementRef, OnChanges } from "angular2/core";
	import { EventEmitter } from "angular2/src/facade/async";
	export class MdInput {
	    _value: string;
	    value: string;
	    placeholder: string;
	    mdChange: EventEmitter<any>;
	    mdFocusChange: EventEmitter<any>;
	    setHasFocus(hasFocus: boolean): void;
	}
	export class MdInputContainer implements AfterContentInit, OnChanges {
	    private _element;
	    _input: MdInput;
	    inputHasValue: boolean;
	    inputHasFocus: boolean;
	    inputHasPlaceholder: boolean;
	    constructor(_element: ElementRef);
	    ngOnChanges(_: any): void;
	    ngAfterContentInit(): void;
	}

}
declare module 'ng2-material/components/list/list' {
	import { ElementRef, AfterViewInit } from "angular2/core";
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
	export class MdList {
	}
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
	export class MdListItem implements AfterViewInit {
	    private _element;
	    constructor(_element: ElementRef);
	    ngAfterViewInit(): any;
	    setupToggleAria(): void;
	}

}
declare module 'ng2-material/components/progress_linear/progress_linear' {
	import { OnChanges } from "angular2/core";
	/** Different display / behavior modes for progress_linear. */
	export class ProgressMode {
	    static DETERMINATE: string;
	    static INDETERMINATE: string;
	    static BUFFER: string;
	    static QUERY: string;
	}
	export class MdProgressLinear implements OnChanges {
	    /** Clamps a value to be between 0 and 100. */
	    static clamp(v: any): any;
	    /** Value for the primary bar. */
	    value_: number;
	    /** Value for the secondary bar. */
	    bufferValue: number;
	    /** The render mode for the progress bar. */
	    mode: string;
	    /** CSS `transform` property applied to the primary bar. */
	    primaryBarTransform: string;
	    /** CSS `transform` property applied to the secondary bar. */
	    secondaryBarTransform: string;
	    constructor();
	    value: number;
	    ngOnChanges(_: any): void;
	    /** Gets the CSS `transform` property for a progress bar based on the given value (0 - 100). */
	    transformForValue(value: any): string;
	}

}
declare module 'ng2-material/components/progress_circular/progress_circular' {
	import { MdProgressLinear } from 'ng2-material/components/progress_linear/progress_linear';
	export class MdProgressCircular extends MdProgressLinear {
	    /** Value for the circle diameter. */
	    diameter_: string;
	    mode: string;
	    /** CSS `transform` property applied to the circle diameter. */
	    diameterTransformation: string;
	    /** CSS property length of circle preloader side. */
	    outerSize: string;
	    /** CSS `transform` property applied to the circle gap. */
	    gapTransition: string;
	    /** CSS `transition` property applied to circle. */
	    defaultHalfTransition: string;
	    /** CSS `transform` property applied to the left half of circle. */
	    leftHalfTransform: string;
	    /** CSS `transform` property applied to the right half of circle. */
	    rightHalfTransform: string;
	    diameter: string;
	    ngOnInit(): void;
	    ngOnChanges(_: any): void;
	    transformLeftHalf(value: any): void;
	    transformRightHalf(value: any): void;
	    updateScale(): void;
	    getDiameterRatio(): number;
	    webkit(style: string): string;
	}

}
declare module 'ng2-material/core/util/media' {
	import { Subject } from "rxjs/Subject";
	/**
	 * As defined in core/style/variables.scss
	 *
	 * $layout-breakpoint-xs:     600px !default;
	 * $layout-breakpoint-sm:     960px !default;
	 * $layout-breakpoint-md:     1280px !default;
	 * $layout-breakpoint-lg:     1920px !default;
	 *
	 */
	export const MEDIA: any;
	export const MEDIA_PRIORITY: any;
	/**
	 * Reference to a Media query listener. When you are done with it, call the `destroy` method
	 * to release its reference.
	 */
	export class MediaListener {
	    query: string;
	    private _mql;
	    private _media;
	    /**
	     * Emits when the query that this is listening for changes.
	     */
	    onMatched: Subject<MediaQueryList>;
	    /**
	     * Determine if this query is currently matched by the viewport.
	     * @returns {boolean} True if the query is matched.
	     */
	    matches: boolean;
	    private _destroyed;
	    private _listener;
	    constructor(query: string, _mql: MediaQueryList, _media: Media);
	    /**
	     * Destroy and unhook this listener.
	     */
	    destroy(): void;
	}
	/**
	 * Injectable class for being notified of changes to viewport media queries.
	 */
	export class Media {
	    private _cache;
	    listen(query: string): MediaListener;
	    unregisterListener(listener: MediaListener): void;
	    hasMedia(size: string): boolean;
	    static hasMedia(size: string): boolean;
	    static getQuery(size: string): string;
	}

}
declare module 'ng2-material/components/peekaboo/peekaboo' {
	import { OnDestroy } from "angular2/core";
	import { Media } from 'ng2-material/core/util/media';
	/** Different peekaboo actions to apply when active */
	export class PeekabooAction {
	    static SHOW: string;
	    static HIDE: string;
	}
	/**
	 * @name mdPeekaboo
	 *
	 * @description
	 * The `[md-peekaboo]` directive is an attribute that toggles the visibility of elements based
	 * on the current viewport size and scrollTop.
	 *
	 */
	export class MdPeekaboo implements OnDestroy {
	    media: Media;
	    static SIZES: string[];
	    break: number;
	    breakAction: string;
	    static MakeNumber(value: any): number;
	    private _active;
	    active: boolean;
	    scrollTop: number;
	    private _breakXs;
	    breakXs: number;
	    private _breakSm;
	    breakSm: number;
	    private _breakMd;
	    breakMd: number;
	    private _breakLg;
	    breakLg: number;
	    private _breakXl;
	    breakXl: number;
	    private _breakpoint;
	    breakpoint: string;
	    private _mediaListeners;
	    constructor(media: Media);
	    ngOnDestroy(): any;
	    private _watchMediaQuery(size);
	    private _windowScroll;
	    /**
	     * Evaluate the current scroll and media breakpoint to determine what scrollTop
	     * value should be used for the peekaboo active state.
	     * @returns number The scrollTop breakpoint that was evaluated against.
	     */
	    evaluate(): number;
	}

}
declare module 'ng2-material/components/radio/radio_dispatcher' {
	/**
	 * Class for radio buttons to coordinate unique selection based on name.
	 * Intended to be consumed as an Angular service.
	 */
	export class MdRadioDispatcher {
	    listeners_: Function[];
	    /** Notify other nadio buttons that selection for the given name has been set. */
	    notify(name: string): void;
	    /** Listen for future changes to radio button selection. */
	    listen(listener: any): void;
	}

}
declare module 'ng2-material/components/radio/radio_button' {
	import { OnChanges, OnInit, OnDestroy } from "angular2/core";
	import { EventEmitter } from "angular2/src/facade/async";
	import { MdRadioDispatcher } from 'ng2-material/components/radio/radio_dispatcher';
	export class MdRadioGroup implements OnChanges {
	    change: EventEmitter<any>;
	    /** The selected value for the radio group. The value comes from the options. */
	    value_: any;
	    value: any;
	    /** The HTML name attribute applied to radio buttons in this group. */
	    name_: string;
	    /** Dispatcher for coordinating radio unique-selection by name. */
	    radioDispatcher: MdRadioDispatcher;
	    /** Array of child radio buttons. */
	    radios_: MdRadioButton[];
	    activedescendant: any;
	    disabled_: boolean;
	    /** The ID of the selected radio button. */
	    selectedRadioId: string;
	    tabindex: number;
	    constructor(tabindex: string, disabled: string, radioDispatcher: MdRadioDispatcher);
	    /** Gets the name of this group, as to be applied in the HTML 'name' attribute. */
	    getName(): string;
	    disabled: boolean;
	    /** Change handler invoked when bindings are resolved or when bindings have changed. */
	    ngOnChanges(_: any): void;
	    private _setChildValue(value);
	    /** Update the value of this radio group from a child md-radio being selected. */
	    updateValue(value: any, id: string): void;
	    /** Registers a child radio button with this group. */
	    register(radio: MdRadioButton): void;
	    /** Unregister a child radio button with this group. */
	    unregister(radio: MdRadioButton): void;
	    /** Handles up and down arrow key presses to change the selected child radio. */
	    onKeydown(event: KeyboardEvent): void;
	    getSelectedRadioIndex(): number;
	    /**
	     * Return a child radio by its value.
	     */
	    getChildByValue(value: any): MdRadioButton;
	    /** Steps the selected radio based on the given step value (usually either +1 or -1). */
	    stepSelectedRadio(step: any): void;
	}
	export class MdRadioButton implements OnInit, OnDestroy {
	    /** Whether this radio is checked. */
	    checked: boolean;
	    /** Whether the radio is disabled. */
	    disabled_: boolean;
	    /** The unique ID for the radio button. */
	    id: string;
	    /** Analog to HTML 'name' attribute used to group radios for unique selection. */
	    name: string;
	    /** Value assigned to this radio. Used to assign the value to the parent MdRadioGroup. */
	    value: any;
	    /** The parent radio group. May or may not be present. */
	    radioGroup: MdRadioGroup;
	    /** Dispatcher for coordinating radio unique-selection by name. */
	    radioDispatcher: MdRadioDispatcher;
	    tabindex: number;
	    constructor(radioGroup: MdRadioGroup, id: string, value: string, checked: string, tabindex: string, radioDispatcher: MdRadioDispatcher);
	    /** Change handler invoked when bindings are resolved or when bindings have changed. */
	    ngOnInit(): void;
	    ngOnDestroy(): any;
	    /** Whether this radio button is disabled, taking the parent group into account. */
	    isDisabled(): boolean;
	    disabled: any;
	    /** Select this radio button. */
	    select(event: Event): void;
	    /** Handles pressing the space key to select this focused radio button. */
	    onKeydown(event: KeyboardEvent): void;
	}

}
declare module 'ng2-material/components/switcher/switch' {
	import { MdCheckbox } from 'ng2-material/components/checkbox/checkbox';
	export class MdSwitch extends MdCheckbox {
	}

}
declare module 'ng2-material/components/subheader/subheader' {
	export class MdSubheader {
	}

}
declare module 'ng2-material/components/sidenav/sidenav_service' {
	import { MdSidenav } from 'ng2-material/components/sidenav/sidenav';
	export class SidenavService {
	    show(name: string): Promise<void>;
	    hide(name: string): Promise<void>;
	    find(name: string): MdSidenav;
	    private _instances;
	    register(instance: MdSidenav): void;
	    unregister(instance: MdSidenav): void;
	}

}
declare module 'ng2-material/components/sidenav/sidenav' {
	import { ElementRef, OnDestroy, OnInit, QueryList, AfterViewInit, ApplicationRef, EventEmitter, Renderer } from "angular2/core";
	import { MdBackdrop } from 'ng2-material/components/backdrop/backdrop';
	import { SidenavService } from 'ng2-material/components/sidenav/sidenav_service';
	export class SidenavAlignment {
	    /**
	     * The sidenav will be displayed on the left side of the content.
	     */
	    static LEFT: string;
	    /**
	     * The sidenav will be displayed on the right side of the content.
	     */
	    static RIGHT: string;
	}
	export class SidenavStyle {
	    /**
	     * The sidenav will hover over the content.
	     */
	    static OVER: string;
	    /**
	     * The sidenav will push the content to the side and display without obscuring it.
	     */
	    static SIDE: string;
	}
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
	export class MdSidenav extends MdBackdrop implements OnInit, OnDestroy {
	    element: ElementRef;
	    service: SidenavService;
	    renderer: Renderer;
	    container: MdSidenavContainer;
	    name: string;
	    onHiding: EventEmitter<MdSidenav>;
	    onHidden: EventEmitter<MdSidenav>;
	    onShowing: EventEmitter<MdSidenav>;
	    onShown: EventEmitter<MdSidenav>;
	    align: string;
	    /**
	     * One of 'side' or 'over'. 'side' will push the content out of the way and not display
	     * a backdrop overlay, and 'over' will display the overlay and be dismissed when the user
	     * clicks on the backdrop.
	     */
	    style: string;
	    private _align;
	    private _style;
	    /**
	     * The backdrop element the container provides.
	     */
	    backdropRef: MdBackdrop;
	    transitionClass: string;
	    transitionAddClass: boolean;
	    constructor(element: ElementRef, service: SidenavService, renderer: Renderer, container: MdSidenavContainer);
	    ngOnInit(): any;
	    ngOnDestroy(): any;
	    toggle(visible: boolean): Promise<void>;
	}
	export class MdSidenavContainer implements OnDestroy, AfterViewInit {
	    private _app;
	    children: QueryList<MdSidenav>;
	    private _backdrop;
	    constructor(_app: ApplicationRef);
	    private _unsubscribe;
	    ngOnDestroy(): any;
	    isPushed: boolean;
	    ngAfterViewInit(): any;
	    updateStyle(child: MdSidenav): void;
	}

}
declare module 'ng2-material/components/toolbar/toolbar' {
	import { AfterContentInit, OnChanges, OnDestroy, ElementRef } from "angular2/core";
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
	export class MdToolbar implements AfterContentInit, OnChanges, OnDestroy {
	    el: ElementRef;
	    mdShrinkSpeed: number;
	    mdScrollShrink: boolean;
	    private _mdShrinkSpeed;
	    private _debouncedContentScroll;
	    private _debouncedUpdateHeight;
	    private _content;
	    private _toolbarHeight;
	    private _cancelScrollShrink;
	    private _previousScrollTop;
	    private _currentY;
	    private _mdScrollShrink;
	    constructor(el: ElementRef);
	    ngAfterContentInit(): any;
	    ngOnChanges(changes: {}): any;
	    ngOnDestroy(): any;
	    disableScrollShrink(): void;
	    updateToolbarHeight(): void;
	    onContentScroll(e?: any): void;
	}

}
declare module 'ng2-material/components/tabs/tabs' {
	import { QueryList, ViewContainerRef, TemplateRef, ElementRef } from "angular2/core";
	export class MdTab {
	    viewContainer: ViewContainerRef;
	    templateRef: TemplateRef;
	    label: string;
	    disabled: boolean;
	    private _active;
	    constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef);
	    active: boolean;
	}
	export class MdTabs {
	    panes: QueryList<MdTab>;
	    private _element;
	    mdNoScroll: boolean;
	    constructor(panes: QueryList<MdTab>, _element: ElementRef);
	    private _selected;
	    selected: number;
	    selectedTab: MdTab;
	    onTabClick(pane: MdTab, event?: any): void;
	}

}
declare module 'ng2-material/all' {
	import { Type } from "angular2/src/facade/lang";
	export * from 'ng2-material/components/button/button';
	export * from 'ng2-material/components/checkbox/checkbox';
	export * from 'ng2-material/components/content/content';
	export * from 'ng2-material/components/dialog/dialog';
	export * from 'ng2-material/components/divider/divider';
	export * from 'ng2-material/components/icon/icon';
	export * from 'ng2-material/components/ink/ink';
	export * from 'ng2-material/components/form/validators';
	export * from 'ng2-material/components/form/messages';
	export * from 'ng2-material/components/input/input';
	export * from 'ng2-material/components/list/list';
	export * from 'ng2-material/components/progress_linear/progress_linear';
	export * from 'ng2-material/components/progress_circular/progress_circular';
	export * from 'ng2-material/components/peekaboo/peekaboo';
	export * from 'ng2-material/components/radio/radio_button';
	export * from 'ng2-material/components/radio/radio_dispatcher';
	export * from 'ng2-material/components/switcher/switch';
	export * from 'ng2-material/components/subheader/subheader';
	export * from 'ng2-material/components/sidenav/sidenav';
	export * from 'ng2-material/components/sidenav/sidenav_service';
	export * from 'ng2-material/components/toolbar/toolbar';
	export * from 'ng2-material/components/tabs/tabs';
	export * from 'ng2-material/core/util/media';
	export * from 'ng2-material/core/util/animate';
	/**
	 * Collection of Material Design component directives.
	 */
	export const MATERIAL_DIRECTIVES: Type[];
	/**
	 * Collection of Material Design component providers.
	 */
	export const MATERIAL_PROVIDERS: any[];

}
declare module 'ng2-material/components/card/card' {
	/**
	 * @name mdCard
	 *
	 * @description
	 * The `<md-card>` directive is a container element used within `<md-content>` containers.
	 *
	 * An image included as a direct descendant will fill the card's width, while the `<md-card-content>`
	 * container will wrap text content and provide padding. An `<md-card-footer>` element can be
	 * optionally included to put content flush against the bottom edge of the card.
	 *
	 * Action buttons can be included in an `<md-card-actions>` element, similar to `<md-dialog-actions>`.
	 * You can then position buttons using layout attributes.
	 *
	 * Card is built with:
	 * * `<md-card-header>` - Header for the card, holds avatar, text and squared image
	 *  - `<md-card-avatar>` - Card avatar
	 *    - `md-user-avatar` - Class for user image
	 *    - `<md-icon>`
	 *  - `<md-card-header-text>` - Contains elements for the card description
	 *    - `md-title` - Class for the card title
	 *    - `md-subhead` - Class for the card sub header
	 * * `<img>` - Image for the card
	 * * `<md-card-title>` - Card content title
	 *  - `<md-card-title-text>`
	 *    - `md-headline` - Class for the card content title
	 *    - `md-subhead` - Class for the card content sub header
	 *  - `<md-card-title-media>` - Squared image within the title
	 *    - `md-media-sm` - Class for small image
	 *    - `md-media-md` - Class for medium image
	 *    - `md-media-lg` - Class for large image
	 * * `<md-card-content>` - Card content
	 *  - `md-media-xl` - Class for extra large image
	 * * `<md-card-actions>` - Card actions
	 *  - `<md-card-icon-actions>` - Icon actions
	 *
	 * Cards have constant width and variable heights; where the maximum height is limited to what can
	 * fit within a single view on a platform, but it can temporarily expand as needed.
	 *
	 * @usage
	 * ### Card with optional footer
	 * <hljs lang="html">
	 * <md-card>
	 *  <img src="card-image.png" class="md-card-image" alt="image caption">
	 *  <md-card-content>
	 *    <h2>Card headline</h2>
	 *    <p>Card content</p>
	 *  </md-card-content>
	 *  <md-card-footer>
	 *    Card footer
	 *  </md-card-footer>
	 * </md-card>
	 * </hljs>
	 *
	 * ### Card with actions
	 * <hljs lang="html">
	 * <md-card>
	 *  <img src="card-image.png" class="md-card-image" alt="image caption">
	 *  <md-card-content>
	 *    <h2>Card headline</h2>
	 *    <p>Card content</p>
	 *  </md-card-content>
	 *  <md-card-actions layout="row" layout-align="end center">
	 *    <md-button>Action 1</md-button>
	 *    <md-button>Action 2</md-button>
	 *  </md-card-actions>
	 * </md-card>
	 * </hljs>
	 *
	 * ### Card with header, image, title actions and content
	 * <hljs lang="html">
	 * <md-card>
	 *   <md-card-header>
	 *     <md-card-avatar>
	 *       <img class="md-user-avatar" src="avatar.png"/>
	 *     </md-card-avatar>
	 *     <md-card-header-text>
	 *       <span class="md-title">Title</span>
	 *       <span class="md-subhead">Sub header</span>
	 *     </md-card-header-text>
	 *   </md-card-header>
	 *   <img ng-src="card-image.png" class="md-card-image" alt="image caption">
	 *   <md-card-title>
	 *     <md-card-title-text>
	 *       <span class="md-headline">Card headline</span>
	 *       <span class="md-subhead">Card subheader</span>
	 *     </md-card-title-text>
	 *   </md-card-title>
	 *   <md-card-actions layout="row" layout-align="start center">
	 *     <md-button>Action 1</md-button>
	 *     <md-button>Action 2</md-button>
	 *     <md-card-icon-actions>
	 *       <md-button class="md-icon-button" aria-label="icon">
	 *         <md-icon md-svg-icon="icon"></md-icon>
	 *       </md-button>
	 *     </md-card-icon-actions>
	 *   </md-card-actions>
	 *   <md-card-content>
	 *     <p>
	 *      Card content
	 *     </p>
	 *   </md-card-content>
	 * </md-card>
	 * </hljs>
	 */
	export class MdContent {
	}

}
declare var require: any;
declare var module: any;
declare var require: any;
