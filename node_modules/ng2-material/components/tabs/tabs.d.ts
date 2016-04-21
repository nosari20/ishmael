import { QueryList, ViewContainerRef, TemplateRef, ElementRef } from "angular2/core";
export declare class MdTab {
    viewContainer: ViewContainerRef;
    templateRef: TemplateRef;
    label: string;
    disabled: boolean;
    private _active;
    constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef);
    active: boolean;
}
export declare class MdTabs {
    panes: QueryList<MdTab>;
    private _element;
    mdNoScroll: boolean;
    constructor(panes: QueryList<MdTab>, _element: ElementRef);
    private _selected;
    selected: number;
    selectedTab: MdTab;
    onTabClick(pane: MdTab, event?: any): void;
}
