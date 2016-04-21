"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var Subject_1 = require("rxjs/Subject");
exports.MEDIA = {
    'xs': '(max-width: 599px)',
    'gt-xs': '(min-width: 600px)',
    'sm': '(min-width: 600px) and (max-width: 959px)',
    'gt-sm': '(min-width: 960px)',
    'md': '(min-width: 960px) and (max-width: 1279px)',
    'gt-md': '(min-width: 1280px)',
    'lg': '(min-width: 1280px) and (max-width: 1919px)',
    'gt-lg': '(min-width: 1920px)',
    'xl': '(min-width: 1920px)'
};
exports.MEDIA_PRIORITY = [
    'xl',
    'gt-lg',
    'lg',
    'gt-md',
    'md',
    'gt-sm',
    'sm',
    'gt-xs',
    'xs'
];
var MediaListener = (function () {
    function MediaListener(query, _mql, _media) {
        var _this = this;
        this.query = query;
        this._mql = _mql;
        this._media = _media;
        this.onMatched = new Subject_1.Subject();
        this._destroyed = false;
        this._listener = function (mql) { return _this.onMatched.next(mql); };
        this._mql.addListener(this._listener);
    }
    Object.defineProperty(MediaListener.prototype, "matches", {
        get: function () {
            return !this._destroyed && this._mql.matches;
        },
        enumerable: true,
        configurable: true
    });
    MediaListener.prototype.destroy = function () {
        if (!this._destroyed) {
            this._mql.removeListener(this._listener);
            this._media.unregisterListener(this);
            this._destroyed = true;
            this._listener = null;
            this._mql = null;
        }
    };
    return MediaListener;
}());
exports.MediaListener = MediaListener;
var Media = (function () {
    function Media() {
        this._cache = {};
    }
    Media.prototype.listen = function (query) {
        var listener = this._cache[query];
        if (!listener) {
            listener = this._cache[query] = {
                mql: window.matchMedia(query),
                references: 0
            };
        }
        listener.references++;
        return new MediaListener(query, listener.mql, this);
    };
    Media.prototype.unregisterListener = function (listener) {
        var cached = this._cache[listener.query];
        if (cached) {
            cached.references--;
            delete this._cache[listener.query];
        }
    };
    Media.prototype.hasMedia = function (size) {
        return Media.hasMedia(size);
    };
    Media.hasMedia = function (size) {
        var query = Media.getQuery(size);
        if (!query) {
            return false;
        }
        return window.matchMedia(query).matches;
    };
    Media.getQuery = function (size) {
        var query = exports.MEDIA[size];
        if (!query) {
            console.warn("unknown media query size " + size + ". Expected one of [" + exports.MEDIA_PRIORITY.join(',') + "]");
            return null;
        }
        return query;
    };
    Media = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Media);
    return Media;
}());
exports.Media = Media;
//# sourceMappingURL=media.js.map