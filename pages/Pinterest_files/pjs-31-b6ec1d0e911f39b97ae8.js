webpackJsonp([31],{GArG:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"SearchNag",function(){return u});var i=n("d6ZO"),s=n.n(i),c=n("Kqaz"),l=n("gEaE"),u=function(e){function t(){var n,a,i;r(this,t);for(var s=arguments.length,c=Array(s),l=0;l<s;l++)c[l]=arguments[l];return n=a=o(this,e.call.apply(e,[this].concat(c))),a.handleLinkClick=function(e){if(e.target&&"A"===e.target.tagName){var t=e.target.getAttribute("href");t&&(e.preventDefault(),a.logAndNavigateToLink(t))}},a.handleLinkKeyPress=function(e){if(e.target&&"A"===e.target.tagName){var t=e.target.getAttribute("href");t&&(e.preventDefault(),a.logAndNavigateToLink(t))}},i=n,o(a,i)}return a(t,e),t.prototype.logAndNavigateToLink=function e(t){(0,this.props.contextLog)(101,{view:2,element:10578,url:t}),window.location.assign(t)},t.prototype.render=function e(){var t=this.props.messages;return i.createElement(l.J,{smSize:"xs",mdSize:"sm",lgSize:"md"},i.createElement("span",{className:"searchNagContainer",dangerouslySetInnerHTML:{__html:t.join(" ")},onClick:this.handleLinkClick,onKeyPress:this.handleLinkKeyPress}))},t}(i.PureComponent);t.default=Object(c.a)(u)}});