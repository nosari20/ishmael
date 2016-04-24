System.register(['angular2/core', "../../fab/fab.component.component", "../input/input.component", "../../../services/upload/ng2-uploader"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, fab_component_component_1, input_component_1, ng2_uploader_1;
    var File;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (fab_component_component_1_1) {
                fab_component_component_1 = fab_component_component_1_1;
            },
            function (input_component_1_1) {
                input_component_1 = input_component_1_1;
            },
            function (ng2_uploader_1_1) {
                ng2_uploader_1 = ng2_uploader_1_1;
            }],
        execute: function() {
            File = (function () {
                function File(_el) {
                    this._el = _el;
                    this.open = new core_1.EventEmitter();
                    this.options = {
                        url: 'http://ng2-uploader.com:10050/upload'
                    };
                    this.fileName = "File";
                }
                File.prototype.openFile = function () {
                    this._el.nativeElement.querySelector('input').click();
                };
                File.prototype.upload = function (data) {
                    this.file = data;
                    this.fileName = this.file.originalName;
                };
                __decorate([
                    core_1.Output('click'), 
                    __metadata('design:type', Object)
                ], File.prototype, "open", void 0);
                File = __decorate([
                    core_1.Component({
                        selector: 'md-file',
                        templateUrl: 'app/components/input/file/template.html',
                        styleUrls: ['app/components/input/file/style.css'],
                        directives: [fab_component_component_1.Fab, input_component_1.MdInput, ng2_uploader_1.UPLOAD_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], File);
                return File;
            }());
            exports_1("File", File);
        }
    }
});
//# sourceMappingURL=file.component.js.map