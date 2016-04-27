System.register(['angular2/core', "angular2/common"], function(exports_1, context_1) {
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
    var core_1, common_1;
    var MdInput, CUSTOM_VALUE_ACCESSOR, MdInputValueAccessor;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            MdInput = (function () {
                function MdInput() {
                    this.dataChange = new core_1.EventEmitter();
                }
                //for ngModel
                MdInput.prototype.writeValue = function (value) {
                    this.data = value;
                };
                MdInput.prototype.changeValue = function (value) {
                    this.dataChange.emit(this.data);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MdInput.prototype, "type", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MdInput.prototype, "name", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], MdInput.prototype, "disabled", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MdInput.prototype, "data", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MdInput.prototype, "dataChange", void 0);
                MdInput = __decorate([
                    core_1.Component({
                        selector: 'md-input',
                        templateUrl: 'app/components/input/input/template.html',
                        styleUrls: ['app/components/input/input/style.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], MdInput);
                return MdInput;
            }());
            exports_1("MdInput", MdInput);
            //for ngModel
            CUSTOM_VALUE_ACCESSOR = new core_1.Provider(common_1.NG_VALUE_ACCESSOR, { useExisting: core_1.forwardRef(function () { return MdInputValueAccessor; }), multi: true });
            MdInputValueAccessor = (function () {
                function MdInputValueAccessor(host) {
                    this.host = host;
                    this.onChange = function (_) { };
                    this.onTouched = function () { };
                }
                MdInputValueAccessor.prototype.writeValue = function (value) {
                    this.host.writeValue(value);
                };
                MdInputValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
                MdInputValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                MdInputValueAccessor = __decorate([
                    core_1.Directive({
                        selector: 'md-input',
                        host: { '(dataChange)': 'onChange($event)' },
                        providers: [CUSTOM_VALUE_ACCESSOR]
                    }), 
                    __metadata('design:paramtypes', [MdInput])
                ], MdInputValueAccessor);
                return MdInputValueAccessor;
            }());
            exports_1("MdInputValueAccessor", MdInputValueAccessor);
        }
    }
});
//# sourceMappingURL=input.component.js.map