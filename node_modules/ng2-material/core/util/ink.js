"use strict";
var lang_1 = require("angular2/src/facade/lang");
var dom_adapter_1 = require("angular2/src/platform/dom/dom_adapter");
var animate_1 = require("./animate");
var Ink = (function () {
    function Ink() {
    }
    Ink.canApply = function (element) {
        return !dom_adapter_1.DOM.hasAttribute(element, 'md-no-ink');
    };
    Ink.getSize = function (fit, width, height) {
        return fit
            ? Math.max(width, height)
            : Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
    };
    Ink.ripple = function (element, left, top) {
        var fit = lang_1.isPresent(dom_adapter_1.DOM.getAttribute(element, 'md-fab'));
        var container = dom_adapter_1.DOM.querySelector(element, '.md-ripple-container');
        if (!container) {
            container = dom_adapter_1.DOM.createElement('div');
            dom_adapter_1.DOM.addClass(container, 'md-ripple-container');
            dom_adapter_1.DOM.appendChild(element, container);
        }
        var ripple = dom_adapter_1.DOM.createElement('div');
        dom_adapter_1.DOM.addClass(ripple, 'md-ripple');
        var getInitialStyles = function () {
            var color = dom_adapter_1.DOM.getComputedStyle(element).color || 'rgb(0,0,0)';
            var size = Ink.getSize(fit, element.clientWidth, element.clientHeight);
            return {
                'background-color': color,
                left: left + "px",
                top: top + "px",
                width: size + "px",
                height: size + "px"
            };
        };
        return animate_1.Animate.setStyles(ripple, getInitialStyles())
            .then(function () { return dom_adapter_1.DOM.appendChild(container, ripple); })
            .then(function () { return dom_adapter_1.DOM.addClass(ripple, 'md-ripple-placed'); })
            .then(function () { return animate_1.Animate.wait(); })
            .then(function () { return dom_adapter_1.DOM.addClass(ripple, 'md-ripple-scaled'); })
            .then(function () { return dom_adapter_1.DOM.addClass(ripple, 'md-ripple-active'); })
            .then(function () { return animate_1.Animate.wait(450); })
            .then(function () { return dom_adapter_1.DOM.removeClass(ripple, 'md-ripple-active'); })
            .then(function () { return animate_1.Animate.wait(650); })
            .then(function () { return dom_adapter_1.DOM.removeChild(container, ripple); });
    };
    Ink.rippleEvent = function (element, event) {
        var rippleX = event.offsetX;
        var rippleY = event.offsetY;
        if (element !== event.srcElement) {
            var rect = dom_adapter_1.DOM.getBoundingClientRect(element);
            rippleX = event.clientX - rect.left;
            rippleY = event.clientY - rect.top;
        }
        return Ink.ripple(element, rippleX, rippleY);
    };
    return Ink;
}());
exports.Ink = Ink;
//# sourceMappingURL=ink.js.map