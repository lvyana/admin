"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[4221],{94805:function(e,n,t){var i=t(1413),u=(t(72791),t(36473)),s=t(80184);n.Z=function(e){var n=e.bordered,t=void 0!==n&&n,o=e.children,c=e.style,r=void 0===c?{}:c,a=e.hoverable,l=void 0!==a&&a,h=e.className;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(u.Z,{hoverable:l,bordered:t,bodyStyle:(0,i.Z)({padding:"16px"},r),className:h,children:o})})}},5753:function(e,n,t){t.d(n,{Z:function(){return k}});var i=t(29439),u=t(72791),s=t(71002),o=t(74165),c=t(15671),r=t(43144),a=function(e,n,t,i){return new(t||(t=Promise))((function(u,s){function o(e){try{r(i.next(e))}catch(e){s(e)}}function c(e){try{r(i.throw(e))}catch(e){s(e)}}function r(e){var n;e.done?u(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,c)}r((i=i.apply(e,n||[])).next())}))},l=function(){function e(n,t,i,u){(0,c.Z)(this,e),f(n),p(n),this.obj=n,this.input="string"==typeof t?[t]:t,this.fn="function"==typeof i?i:function(){},this.hooks="function"==typeof u?u:function(){},this.timer=0,this.typeAction={rollback:this.typedBack.bind(this),normal:this.play.bind(this),custom:this.fn},this.init()}return(0,r.Z)(e,[{key:"init",value:function(){this.play()}},{key:"play",value:function(){var e=this;if(!this.input.length)return this.fn(this);var n=0,t=!1,i=this.input.shift()||"";this.timer=setInterval((function(){return n===i.length&&(n=0,t=!0,e.closeTimer()),e.obj.isEnd?e.closeTimer():t?e.nextTick():(e.obj.output=i.slice(0,n+1),e.hooks(i.slice(0,n+1),e),void n++)}),this.obj.speed)}},{key:"typedBack",value:function(){var e=this;if(!this.input.length&&this.obj.sentencePause)return this.fn(this);var n=this.obj.output,t=n.length,i=!1;this.timer=setInterval((function(){return-1===t&&(e.obj.output="",e.hooks("",e),t=0,i=!0,e.closeTimer()),e.obj.isEnd?(e.closeTimer(),e.obj.singleBack=!1):i?(e.obj.singleBack=!1,e.input.length?e.play():e.fn(e)):(e.obj.output=n.slice(0,t+1),e.hooks(n.slice(0,t+1),e),void t--)}),this.obj.backSpeed)}},{key:"nextTick",value:function(){return a(this,void 0,void 0,(0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.sleep(this.obj.sleep);case 2:return e.abrupt("return",this.obj.singleBack?this.typedBack():this.getOutputType());case 3:case"end":return e.stop()}}),e,this)})))}},{key:"getOutputType",value:function(){return this.typeAction[this.obj.type](this)}},{key:"closeTimer",value:function(){clearInterval(this.timer)}},{key:"sleep",value:function(e){return new Promise((function(n){return setTimeout(n,e)}))}},{key:"close",value:function(){return this.obj.isEnd=!0}}]),e}(),h=function(e){throw new Error(e)},f=function(e){var n=Object.keys({output:"",type:"",isEnd:!1,speed:80,backSpeed:40,sleep:3e3,singleBack:!1,sentencePause:!1}),t=Object.keys(e);n.length!==t.length&&h("配置对象错误: 字段数量不正确！"),n.forEach((function(n){void 0!==e[n]&&null!==e[n]||h("配置对象错误：字段值为null或undefined！")}))},p=function(e){Object.keys(e).forEach((function(n){var t=d[n](e);t.check()&&t.showTip(n)}))},d={output:function(e){return new y("string",e.output)},type:function(e){return new y("string",e.type)},isEnd:function(e){return new y("boolean",e.isEnd)},speed:function(e){return new y("number",e.speed)},backSpeed:function(e){return new y("number",e.backSpeed)},sleep:function(e){return new y("number",e.sleep)},singleBack:function(e){return new y("boolean",e.singleBack)},sentencePause:function(e){return new y("boolean",e.sentencePause)}},y=function(){function e(n,t){(0,c.Z)(this,e),this.type=n,this.field=t}return(0,r.Z)(e,[{key:"check",value:function(){return(0,s.Z)(this.field)!=="".concat(this.type)}},{key:"showTip",value:function(e){h("配置对象错误：属性 ".concat(e," 必须为 ").concat(this.type," 类型！"))}}]),e}(),v=l,k=function(e){var n=(0,u.useState)(""),t=(0,i.Z)(n,2),s=t[0],o=t[1],c=(0,u.useState)(null),r=(0,i.Z)(c,2),a=r[0],l=r[1];(0,u.useLayoutEffect)((function(){return h(),function(){null==a||a.close()}}),[]);var h=function(){var n=new v({output:"",isEnd:!1,speed:80,singleBack:!1,sleep:0,type:"normal",backSpeed:40,sentencePause:!1},e,f,p);l(n)},f=function(){},p=function(e){o(e)};return{output:s}}},29663:function(e,n,t){t.r(n);var i=t(29439),u=t(72791),s=t(87309),o=t(54164),c=t(5753),r=t(94805),a=t(80184);n.default=function(){var e=(0,c.Z)("flushSync：可以将回调函数中的更新任务， 放到一个较高级的优先级中，适用于强制刷新，同时确保了DOM会被立即更新").output,n=(0,u.useState)(0),t=(0,i.Z)(n,2),l=t[0],h=t[1];return(0,a.jsxs)(r.Z,{children:[(0,a.jsxs)("div",{children:[" ",e]}),(0,a.jsxs)("div",{style:{padding:20},children:[(0,a.jsxs)("div",{children:["数字: ",l]}),(0,a.jsx)(s.ZP,{color:"primary",onClick:function(){h(1),(0,o.flushSync)((function(){h(2)})),h(3)},children:"点击"})]})]})}}}]);