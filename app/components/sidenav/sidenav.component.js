System.register(['angular2/core', "../button/button.component"], function(exports_1, context_1) {
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
    var core_1, button_component_1;
    var Sidenav;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (button_component_1_1) {
                button_component_1 = button_component_1_1;
            }],
        execute: function() {
            Sidenav = (function () {
                function Sidenav() {
                    this.open = false;
                    this.toggleEvent = new core_1.EventEmitter();
                }
                Sidenav.prototype.toggle = function () {
                    this.toggleEvent.emit("event");
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], Sidenav.prototype, "open", void 0);
                __decorate([
                    core_1.Output('toggleNav'), 
                    __metadata('design:type', Object)
                ], Sidenav.prototype, "toggleEvent", void 0);
                Sidenav = __decorate([
                    core_1.Component({
                        selector: 'sidenav',
                        templateUrl: 'app/components/sidenav/template.html',
                        styleUrls: ['app/components/sidenav/style.css'],
                        host: { '[class.open]': 'open' },
                        directives: [button_component_1.Button]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Sidenav);
                return Sidenav;
            }());
            exports_1("Sidenav", Sidenav);
        }
    }
});
//# sourceMappingURL=sidenav.component.js.map