import { MdSidenav } from "./sidenav";
export declare class SidenavService {
    show(name: string): Promise<void>;
    hide(name: string): Promise<void>;
    find(name: string): MdSidenav;
    private _instances;
    register(instance: MdSidenav): void;
    unregister(instance: MdSidenav): void;
}
