"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[2546],{19007:(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var u=o?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(r,a,u):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(72791)),a=r(52737),u=r(17709);function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=s(e);if(t){var a=s(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;return f(e)}(this,r)}}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(s,e);var t,r,n,l=p(s);function s(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return y(f(e=l.call.apply(l,[this].concat(r))),"callPlayer",a.callPlayer),y(f(e),"duration",null),y(f(e),"currentTime",null),y(f(e),"secondsLoaded",null),y(f(e),"mute",(function(){e.callPlayer("mute")})),y(f(e),"unmute",(function(){e.callPlayer("unmute")})),y(f(e),"ref",(function(t){e.iframe=t})),e}return t=s,r=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e){var t=this;(0,a.getSDK)("https://cdn.embed.ly/player-0.1.0.min.js","playerjs").then((function(e){t.iframe&&(t.player=new e.Player(t.iframe),t.player.setLoop(t.props.loop),t.player.on("ready",t.props.onReady),t.player.on("play",t.props.onPlay),t.player.on("pause",t.props.onPause),t.player.on("seeked",t.props.onSeek),t.player.on("ended",t.props.onEnded),t.player.on("error",t.props.onError),t.player.on("timeupdate",(function(e){var r=e.duration,n=e.seconds;t.duration=r,t.currentTime=n})),t.player.on("buffered",(function(e){var r=e.percent;t.duration&&(t.secondsLoaded=t.duration*r)})),t.props.muted&&t.player.mute())}),this.props.onError)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("setCurrentTime",e),t||this.pause()}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",100*e)}},{key:"setLoop",value:function(e){this.callPlayer("setLoop",e)}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return this.secondsLoaded}},{key:"render",value:function(){var e=this.props.url.match(u.MATCH_URL_STREAMABLE)[1];return o.default.createElement("iframe",{ref:this.ref,src:"https://streamable.com/o/".concat(e),frameBorder:"0",scrolling:"no",style:{width:"100%",height:"100%"},allow:"encrypted-media; autoplay; fullscreen;"})}}],r&&i(t.prototype,r),n&&i(t,n),s}(o.Component);t.default=d,y(d,"displayName","Streamable"),y(d,"canPlay",u.canPlay.streamable)}}]);