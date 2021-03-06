System.register(['angular2/core', "../../components/card/card.component", "../../components/button/button.component", "../../components/input/input/input.component", "../../components/input/checkbox/checkbox.component", "../../components/input/switch/switch.component", "../../components/input/file/file.component"], function(exports_1, context_1) {
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
    var core_1, card_component_1, button_component_1, input_component_1, checkbox_component_1, switch_component_1, file_component_1;
    var Home;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (card_component_1_1) {
                card_component_1 = card_component_1_1;
            },
            function (button_component_1_1) {
                button_component_1 = button_component_1_1;
            },
            function (input_component_1_1) {
                input_component_1 = input_component_1_1;
            },
            function (checkbox_component_1_1) {
                checkbox_component_1 = checkbox_component_1_1;
            },
            function (switch_component_1_1) {
                switch_component_1 = switch_component_1_1;
            },
            function (file_component_1_1) {
                file_component_1 = file_component_1_1;
            }],
        execute: function() {
            Home = (function () {
                function Home() {
                }
                Home = __decorate([
                    core_1.Component({
                        selector: 'home',
                        templateUrl: 'app/content/home/template.html',
                        styleUrls: ['app/content/home/style.css'],
                        directives: [card_component_1.Card, button_component_1.Button, input_component_1.MdInput, checkbox_component_1.Checkbox, switch_component_1.Switch, file_component_1.File],
                        host: { 'class': 'ng-animate page' }
                    }), 
                    __metadata('design:paramtypes', [])
                ], Home);
                return Home;
            }());
            exports_1("Home", Home);
        }
    }
});
//# sourceMappingURL=home.component.js.map