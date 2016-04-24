
import {NgFileSelect} from "./directives/ng-file-select";
import {NgFileDrop} from "./directives/ng-file-drop";
import {Ng2Uploader} from "./services/ng2-uploader";
export * from './services/ng2-uploader';
export * from './directives/ng-file-select';
export * from './directives/ng-file-drop';
declare var _default: {
    directives: (typeof NgFileSelect | typeof NgFileDrop)[];
    providers: typeof Ng2Uploader[];
};
export default _default;
export declare const UPLOAD_DIRECTIVES: [any];
