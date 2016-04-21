import { ElementRef, OnDestroy, OnInit, QueryList, AfterViewInit, ApplicationRef, EventEmitter, Renderer } from "angular2/core";
import { MdBackdrop } from "../backdrop/backdrop";
import { SidenavService } from "./sidenav_service";
export declare class SidenavAlignment {
    static LEFT: string;
    static RIGHT: string;
}
export declare class SidenavStyle {
    static OVER: string;
    static SIDE: string;
}
export declare class MdSidenav extends MdBackdrop implements OnInit, OnDestroy {
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
    style: string;
    private _align;
    private _style;
    backdropRef: MdBackdrop;
    transitionClass: string;
    transitionAddClass: boolean;
    constructor(element: ElementRef, service: SidenavService, renderer: Renderer, container: MdSidenavContainer);
    ngOnInit(): any;
    ngOnDestroy(): any;
    toggle(visible: boolean): Promise<void>;
}
export declare class MdSidenavContainer implements OnDestroy, AfterViewInit {
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
