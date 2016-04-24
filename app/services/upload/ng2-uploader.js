System.register(["./directives/ng-file-select", "./directives/ng-file-drop", "./services/ng2-uploader"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ng_file_select_1, ng_file_drop_1, ng2_uploader_1;
    var UPLOAD_DIRECTIVES;
    var exportedNames_1 = {
        'UPLOAD_DIRECTIVES': true
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
            function (ng_file_select_1_1) {
                ng_file_select_1 = ng_file_select_1_1;
                exportStar_1(ng_file_select_1_1);
            },
            function (ng_file_drop_1_1) {
                ng_file_drop_1 = ng_file_drop_1_1;
                exportStar_1(ng_file_drop_1_1);
            },
            function (ng2_uploader_1_1) {
                ng2_uploader_1 = ng2_uploader_1_1;
                exportStar_1(ng2_uploader_1_1);
            }],
        execute: function() {
            exports_1("default",{
                directives: [ng_file_select_1.NgFileSelect, ng_file_drop_1.NgFileDrop],
                providers: [ng2_uploader_1.Ng2Uploader]
            });
            exports_1("UPLOAD_DIRECTIVES", UPLOAD_DIRECTIVES = [ng_file_select_1.NgFileSelect, ng_file_drop_1.NgFileDrop]);
        }
    }
});
//# sourceMappingURL=ng2-uploader.js.map