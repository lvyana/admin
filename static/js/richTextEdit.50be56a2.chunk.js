"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[5942],{15208:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});var s=t(72791),p=(t(68059),t(7295)),l=t(51283),i=t(66106),o=t(30914),d=t(80184);const r=e=>{let{content:n}=e;return(0,d.jsxs)(i.Z,{children:[(0,d.jsx)(o.Z,{span:12,children:(0,d.jsx)("div",{dangerouslySetInnerHTML:{__html:n}})}),(0,d.jsx)(o.Z,{span:12,children:(0,d.jsx)("div",{children:n})})]})};var a=t(75607),c=t(2641),h=t(35796),u=t(97892),x=t.n(u),b=t(94805);const{confirm:m}=a.default,f=()=>{const[e,n]=(0,s.useState)(null),t={placeholder:"请输入内容...",onCreated(e){n(e)},MENU_CONF:{}};t.MENU_CONF.uploadImage={server:"/api/upload"},(0,s.useEffect)((()=>()=>{null!==e&&(e.destroy(),n(null))}),[e]);const[i,o]=(0,s.useState)(""),[a,u]=(0,s.useState)(!1),[f,j]=(0,s.useState)(!1),g=()=>{u(!1)};return(0,d.jsx)("div",{children:(0,d.jsxs)(b.Z,{children:[(0,d.jsx)(p.o,{editor:e,defaultConfig:{},mode:"default",style:{borderBottom:"1px solid #ccc"}}),(0,d.jsx)(p.M,{defaultConfig:t,defaultHtml:'<h2>针对目前前端中台项目优化方案</h2><h3>1、代码管理&nbsp;git&nbsp;分支管理&nbsp;版本分支&nbsp;&nbsp;上线流程</h3><p><img src="http://114.132.242.253:81/git.png" style="width: 785.00px;height: 622.20px;"/></p><h3>2、项目优化&nbsp;页面加载慢&nbsp;组件体验不好&nbsp;文件管理&nbsp;数据管理&nbsp;</h3><p>2.1、页面加载&nbsp;webpack打包优化，减少代码体积、静态文件放到cdn、路由懒加载、预加载</p><p>2.2、组件体验&nbsp;交互效果、组件性能调整</p><p>2.3、文件管理&nbsp;约定好文件名字、文件目录结构</p><p>2.4、针对项目使用较多的幂等数据存放vuex状态管理、较多的接口用mixin进行封装</p><h3>3、组件优化&nbsp;公共组件&nbsp;</h3><p>3.1、公共组件封装要减少使用负担</p><p>3.2、考虑公共组件封装使用场景，不必追求封装而封装</p><h3>4、代码优化</h3>',mode:"default",style:{height:"500px"}}),(0,d.jsxs)("div",{className:"mt-2",children:[(0,d.jsx)(c.ZP,{type:"primary",onClick:()=>{x()().format("YYYY-MM-DD");m({title:"Do you Want to delete these items?",icon:(0,d.jsx)(h.Z,{}),content:"Some descriptions",onOk(){},onCancel(){}})},style:{marginRight:"5px"},children:"提交"}),(0,d.jsx)(c.ZP,{type:"primary",onClick:()=>{o(null==e?void 0:e.getHtml()),u(!0)},children:"预览"})]}),(0,d.jsx)(l.Z,{title:"预览模板",width:"1000px",open:a,confirmLoading:f,onOk:g,onCancel:g,children:(0,d.jsx)(r,{content:i})})]})})}}}]);