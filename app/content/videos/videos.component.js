System.register(['angular2/core', "../../components/card/card.component", "../../services/youtube/youtube.services", "../../components/loader/loader.component"], function(exports_1, context_1) {
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
    var core_1, card_component_1, youtube_services_1, loader_component_1;
    var Videos;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (card_component_1_1) {
                card_component_1 = card_component_1_1;
            },
            function (youtube_services_1_1) {
                youtube_services_1 = youtube_services_1_1;
            },
            function (loader_component_1_1) {
                loader_component_1 = loader_component_1_1;
            }],
        execute: function() {
            Videos = (function () {
                function Videos(_youtubeService) {
                    this._youtubeService = _youtubeService;
                    this._query = '';
                }
                Videos.prototype.getlist = function () {
                    var _this = this;
                    var tmp = this._youtubeService.list(this._query);
                    tmp.subscribe(function (list) { _this._list = list.json().items; });
                };
                Videos.prototype.ngOnInit = function () {
                    this.getlist();
                };
                Videos.prototype.reload = function () {
                    this.getlist();
                };
                Videos = __decorate([
                    core_1.Component({
                        templateUrl: 'app/content/videos/template.html',
                        styleUrls: ['app/content/videos/style.css'],
                        directives: [card_component_1.Card, loader_component_1.Loader],
                        providers: [youtube_services_1.Youtube],
                        host: { 'class': 'ng-animate page' }
                    }), 
                    __metadata('design:paramtypes', [youtube_services_1.Youtube])
                ], Videos);
                return Videos;
            }());
            exports_1("Videos", Videos);
        }
    }
});
//# sourceMappingURL=videos.component.js.map