"use strict";
var dom_adapter_1 = require("angular2/src/platform/dom/dom_adapter");
var async_1 = require("angular2/src/facade/async");
var Animate = (function () {
    function Animate() {
    }
    Animate.enter = function (el, cssClass) {
        dom_adapter_1.DOM.removeClass(el, cssClass);
        return new Promise(function (resolve) {
            dom_adapter_1.DOM.addClass(el, cssClass + '-add');
            async_1.TimerWrapper.setTimeout(function () {
                var duration = Animate.getTransitionDuration(el, true);
                var callTimeout = async_1.TimerWrapper.setTimeout(function () { return done(true); }, duration);
                var done = function (timeout) {
                    if (!removeListener) {
                        return;
                    }
                    dom_adapter_1.DOM.removeClass(el, cssClass + '-add-active');
                    dom_adapter_1.DOM.removeClass(el, cssClass + '-add');
                    if (!timeout) {
                        async_1.TimerWrapper.clearTimeout(callTimeout);
                    }
                    removeListener();
                    removeListener = null;
                    resolve();
                };
                var removeListener = dom_adapter_1.DOM.onAndCancel(el, Animate.TRANSITION_EVENT, function () { return done(false); });
                dom_adapter_1.DOM.addClass(el, cssClass + '-add-active');
                dom_adapter_1.DOM.addClass(el, cssClass);
            }, 1);
        });
    };
    Animate.leave = function (el, cssClass) {
        return new Promise(function (resolve) {
            dom_adapter_1.DOM.addClass(el, cssClass + '-remove');
            async_1.TimerWrapper.setTimeout(function () {
                var duration = Animate.getTransitionDuration(el, true);
                var callTimeout = async_1.TimerWrapper.setTimeout(function () { return done(true); }, duration);
                var done = function (timeout) {
                    if (!removeListener) {
                        return;
                    }
                    dom_adapter_1.DOM.removeClass(el, cssClass + '-remove-active');
                    dom_adapter_1.DOM.removeClass(el, cssClass + '-remove');
                    if (!timeout) {
                        async_1.TimerWrapper.clearTimeout(callTimeout);
                    }
                    removeListener();
                    removeListener = null;
                    resolve();
                };
                var removeListener = dom_adapter_1.DOM.onAndCancel(el, Animate.TRANSITION_EVENT, done);
                dom_adapter_1.DOM.addClass(el, cssClass + '-remove-active');
                dom_adapter_1.DOM.removeClass(el, cssClass);
            }, 1);
        });
    };
    Animate.getTransitionDuration = function (element, includeDelay) {
        if (includeDelay === void 0) { includeDelay = false; }
        var prefixes = ['', 'moz', 'webkit', 'ms', 'o', 'khtml'];
        var style = window.getComputedStyle(element);
        for (var i = 0; i < prefixes.length; i++) {
            var durationProperty = (i === 0 ? '' : "-" + prefixes[i] + "-") + "transition-duration";
            var duration = style[durationProperty];
            if (!duration) {
                continue;
            }
            duration = (duration.indexOf('ms') > -1) ? parseFloat(duration) : parseFloat(duration) * 1000;
            if (duration === 0) {
                continue;
            }
            if (includeDelay) {
                var delayProperty = (i === 0 ? '' : "-" + prefixes[i] + "-") + "transition-delay";
                var delay = style[delayProperty];
                if (typeof delay !== 'undefined') {
                    duration += (delay.indexOf('ms') > -1) ? parseFloat(delay) : parseFloat(delay) * 1000;
                }
            }
            return duration;
        }
        return -1;
    };
    Animate.setTransitionDuration = function (element, delayMs) {
        dom_adapter_1.DOM.setStyle(element, 'transition-duration', delayMs + "ms");
    };
    Animate.whichTransitionEvent = function () {
        var t;
        var el = document.createElement('fakeelement');
        var transitions = {
            'transition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'MozTransition': 'transitionend',
            'WebkitTransition': 'webkitTransitionEnd'
        };
        for (t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }
    };
    Animate.animateStyles = function (element, styles, durationMs) {
        var saveDuration = Animate.getTransitionDuration(element);
        Animate.setTransitionDuration(element, durationMs);
        return new Promise(function (animResolve, animReject) {
            var callTimeout = async_1.TimerWrapper.setTimeout(function () { return done(true); }, durationMs);
            var done = function (timeout) {
                if (!removeListener) {
                    return;
                }
                if (timeout) {
                    async_1.TimerWrapper.clearTimeout(callTimeout);
                }
                removeListener();
                removeListener = null;
                if (saveDuration !== -1) {
                    Animate.setTransitionDuration(element, saveDuration);
                }
                else {
                    dom_adapter_1.DOM.removeStyle(element, 'transition-duration');
                }
                animResolve();
            };
            var removeListener = dom_adapter_1.DOM.onAndCancel(element, Animate.TRANSITION_EVENT, function () { return done(false); });
            Object.keys(styles).forEach(function (key) {
                dom_adapter_1.DOM.setStyle(element, key, "" + styles[key]);
            });
        });
    };
    Animate.setStyles = function (element, styles) {
        var saveDuration = Animate.getTransitionDuration(element);
        Animate.setTransitionDuration(element, 0);
        return new Promise(function (resolve, reject) {
            Object.keys(styles).forEach(function (key) {
                dom_adapter_1.DOM.setStyle(element, key, "" + styles[key]);
            });
            if (saveDuration !== -1) {
                Animate.setTransitionDuration(element, saveDuration);
            }
            else {
                dom_adapter_1.DOM.removeStyle(element, 'transition-duration');
            }
            resolve();
        });
    };
    Animate.wait = function (milliseconds) {
        if (milliseconds === void 0) { milliseconds = 10; }
        return new Promise(function (resolve) {
            async_1.TimerWrapper.setTimeout(function () { return resolve(); }, milliseconds);
        });
    };
    Animate.TRANSITION_EVENT = Animate.whichTransitionEvent();
    return Animate;
}());
exports.Animate = Animate;
//# sourceMappingURL=animate.js.map