System.register(['angular2/core', "angular2/http"], function(exports_1, context_1) {
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
    var core_1, http_1;
    var Youtube;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            Youtube = (function () {
                function Youtube(_http) {
                    this._http = _http;
                    this._URL = 'https://www.googleapis.com/youtube/v3/search?';
                    this._APIKEY = '&key=AIzaSyCOWJ-iJGcYyAHvFooGnr7IVDXY7JgTSdc';
                    this._REGION = '&regionCode=FR';
                }
                Youtube.prototype.list = function (query) {
                    return this._http.get(this._URL + 'part=snippet&q=' + query + this._APIKEY + this._REGION);
                };
                Youtube = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], Youtube);
                return Youtube;
            }());
            exports_1("Youtube", Youtube);
        }
    }
});
//# sourceMappingURL=youtube.services.js.map