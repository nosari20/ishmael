System.register(['angular2/core', "../../components/card/card.component", "../../components/fab/fab.component.component", "../../components/button/button.component", "../../components/book/book.component"], function(exports_1, context_1) {
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
    var core_1, card_component_1, fab_component_component_1, button_component_1, book_component_1;
    var Books;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (card_component_1_1) {
                card_component_1 = card_component_1_1;
            },
            function (fab_component_component_1_1) {
                fab_component_component_1 = fab_component_component_1_1;
            },
            function (button_component_1_1) {
                button_component_1 = button_component_1_1;
            },
            function (book_component_1_1) {
                book_component_1 = book_component_1_1;
            }],
        execute: function() {
            Books = (function () {
                function Books() {
                }
                Books = __decorate([
                    core_1.Component({
                        templateUrl: 'app/content/books/template.html',
                        styleUrls: ['app/content/books/style.css'],
                        directives: [card_component_1.Card, fab_component_component_1.Fab, button_component_1.Button, book_component_1.Book],
                        host: { 'class': 'ng-animate page' }
                    }), 
                    __metadata('design:paramtypes', [])
                ], Books);
                return Books;
            }());
            exports_1("Books", Books);
        }
    }
});
//# sourceMappingURL=books.component.js.map