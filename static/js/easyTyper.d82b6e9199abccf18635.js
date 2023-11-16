"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[8238],{75325:(t,e,s)=>{s.d(e,{Z:()=>p});var i=s(72791),n=function(t,e,s,i){return new(s||(s=Promise))((function(n,o){function c(t){try{u(i.next(t))}catch(t){o(t)}}function h(t){try{u(i.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?n(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(c,h)}u((i=i.apply(t,e||[])).next())}))};const o=t=>{throw new Error(t)},c=t=>{const e=Object.keys({output:"",type:"",isEnd:!1,speed:80,backSpeed:40,sleep:3e3,singleBack:!1,sentencePause:!1}),s=Object.keys(t);e.length!==s.length&&o("配置对象错误: 字段数量不正确！"),e.forEach((e=>{void 0!==t[e]&&null!==t[e]||o("配置对象错误：字段值为null或undefined！")}))},h=t=>{Object.keys(t).forEach((e=>{const s=u[e](t);s.check()&&s.showTip(e)}))},u={output:t=>new r("string",t.output),type:t=>new r("string",t.type),isEnd:t=>new r("boolean",t.isEnd),speed:t=>new r("number",t.speed),backSpeed:t=>new r("number",t.backSpeed),sleep:t=>new r("number",t.sleep),singleBack:t=>new r("boolean",t.singleBack),sentencePause:t=>new r("boolean",t.sentencePause)};class r{constructor(t,e){this.type=t,this.field=e}check(){return typeof this.field!=="".concat(this.type)}showTip(t){o("配置对象错误：属性 ".concat(t," 必须为 ").concat(this.type," 类型！"))}}const l=class{constructor(t,e,s,i){c(t),h(t),this.obj=t,this.input="string"==typeof e?[e]:e,this.fn="function"==typeof s?s:function(){},this.hooks="function"==typeof i?i:function(){},this.timer=0,this.typeAction={rollback:this.typedBack.bind(this),normal:this.play.bind(this),custom:this.fn},this.init()}init(){this.play()}play(){if(!this.input.length)return this.fn(this);let t=0,e=!1,s=this.input.shift()||"";this.timer=setInterval((()=>(t===s.length&&(t=0,e=!0,this.closeTimer()),this.obj.isEnd?this.closeTimer():e?this.nextTick():(this.obj.output=s.slice(0,t+1),this.hooks(s.slice(0,t+1),this),void t++))),this.obj.speed)}typedBack(){if(!this.input.length&&this.obj.sentencePause)return this.fn(this);let t=this.obj.output,e=t.length,s=!1;this.timer=setInterval((()=>(-1===e&&(this.obj.output="",this.hooks("",this),e=0,s=!0,this.closeTimer()),this.obj.isEnd?(this.closeTimer(),this.obj.singleBack=!1):s?(this.obj.singleBack=!1,(()=>{const{length:t}=this.input;return t?this.play():this.fn(this)})()):(this.obj.output=t.slice(0,e+1),this.hooks(t.slice(0,e+1),this),void e--))),this.obj.backSpeed)}nextTick(){return n(this,void 0,void 0,(function*(){return yield this.sleep(this.obj.sleep),this.obj.singleBack?this.typedBack():this.getOutputType()}))}getOutputType(){return this.typeAction[this.obj.type](this)}closeTimer(){clearInterval(this.timer)}sleep(t){return new Promise((e=>setTimeout(e,t)))}close(){return this.obj.isEnd=!0}},p=t=>{const[e,s]=(0,i.useState)(""),[n,o]=(0,i.useState)(null);(0,i.useLayoutEffect)((()=>(c(),()=>{null==n||n.close()})),[]);const c=()=>{const e=new l({output:"",isEnd:!1,speed:80,singleBack:!1,sleep:0,type:"normal",backSpeed:40,sentencePause:!1},t,h,u);o(e)},h=()=>{},u=t=>{s(t)};return{output:e}}},37006:(t,e,s)=>{s.r(e),s.d(e,{default:()=>c});s(72791);var i=s(75325),n=s(94805),o=s(80184);const c=()=>{const{output:t}=(0,i.Z)("asy-typer-js是一个轻量级的插件, 用于实现页面文字的打字机效果. 它使用起来非常简单, 只需要几行代码就能实现高大上的打字机效果.而且对MVVM框架支持完美，还兼容原生JS.");return(0,o.jsx)(n.Z,{children:t})}}}]);