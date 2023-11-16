"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[7710],{68792:(e,n,t)=>{t.d(n,{Z:()=>c});t(72791);var o=t(16421),r=t(83298);const a=e=>{let{list:n,styleConfig:t,style:o,bordered:a}=e;const{token:l}=(0,r.Z)(),c={marginBottom:24,background:l.colorFillAlter,borderRadius:l.borderRadiusLG,border:"none"};if("1"===t){return{list:null==n?void 0:n.map((e=>({...e,style:c}))),style:{background:l.colorBgContainer},bordered:!1}}return{list:n,styleConfig:t,style:o,bordered:a}};var l=t(80184);const c=e=>{let{list:n,defaultActiveKey:t,styleConfig:r,bordered:c=!0,onChange:i,expandIcon:s,style:d}=e;const u=a({list:n,styleConfig:r,style:d,bordered:c});return(0,l.jsx)(o.Z,{bordered:u.bordered,defaultActiveKey:t,onChange:i,expandIcon:s,style:u.style,items:u.list})}},18372:(e,n,t)=>{t.r(n),t.d(n,{IuseSyncExternalStore:()=>f,IuseSyncExternalStoreItem:()=>y,default:()=>h});var o=t(72791);let r=0,a=[{id:r++,text:"Todo #1"}],l=[];function c(){for(let e of l)e()}const i={addTodo(){a=[...a,{id:r++,text:"Todo #"+r}],c()},deleteTodo(){a=a.filter(((e,n)=>0!==n)),c()},subscribe:e=>(l=[...l,e],()=>{l=l.filter((n=>n!==e))}),getSnapshot:()=>a};var s=t(94805),d=t(98010),u=t(68792),p=t(80184);const v={name:"Add todo",type:"key",btnType:"primary"},f=()=>{const e=(0,o.useSyncExternalStore)(i.subscribe,i.getSnapshot);return(0,p.jsxs)(s.Z,{children:[(0,p.jsx)(d.Z,{buttonItem:v,onClick:()=>i.addTodo()}),(0,p.jsx)("hr",{}),(0,p.jsx)("ul",{children:e.map((e=>(0,p.jsx)("li",{children:e.text},e.id)))}),(0,p.jsx)(y,{}),(0,p.jsx)(x,{})]})},y=()=>{const e=(0,o.useSyncExternalStore)(i.subscribe,i.getSnapshot);return(0,p.jsxs)("div",{children:[(0,p.jsx)("div",{children:"测试: useSyncExternalStore数据可以共享"}),(0,p.jsx)(d.Z,{buttonItem:v,onClick:()=>i.addTodo()}),(0,p.jsx)(d.Z,{buttonItem:{...v,name:"delete todo"},onClick:()=>i.deleteTodo()}),(0,p.jsx)("hr",{}),(0,p.jsx)("ul",{children:e.map((e=>(0,p.jsx)("li",{children:e.text},e.id)))})]})},b=[{header:"useSyncExternalStore 参数说明",content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{children:"useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot)"}),(0,p.jsx)("div",{children:"subscribe函数得订阅这个store, 并且返回一个可以取消订阅的函数。"}),(0,p.jsx)("div",{children:"getSnapshot函数得可以从store里读取数据快照。"}),(0,p.jsx)("div",{children:"subscribe: 是一个函数，只有一个回调函数作为入参，并且使其订阅这个store. 当store发生改变的时候，这个回调函数应该得到执行，而且这会触发组件的重新渲染。subscribe函数应该返回一个可以取消订阅的方法。"}),(0,p.jsx)("div",{children:"getSnapshot: 是一个函数，返回一个组件中需要用到的store里的一个数据值的快照。当这个store没有改变的时候，重复调用getSnapshot必须返回同样的值。如果store发生改变并且返回的数据值不一样了（用Object.js做比较），那么Reacr重新渲染这个组件。"}),(0,p.jsx)("div",{children:"getServerSnapshot（可选参数）: 是一个函数，返回store数据的初始快照。只会在服务端渲染的时候使用，并且是在服务端渲染好的内容往客户端灌水的时候。服务端的快照必须和客户端的一致。并且通常是序列化后被发送到客户端的，如果你不传这个参数，在服务端渲染的时候会报错"}),(0,p.jsx)("div",{children:"当前你在组件渲染中使用到的store数据的快照"}),(0,p.jsx)("div",{children:"警告"}),(0,p.jsx)("div",{children:"调用getSnapshot返回的这个store数据快照不能修改，如果所依赖的store有可以更改的数据，当数据发生改变返回新的不可修改的数据，否则返回上一次缓存的数据快照。"}),(0,p.jsx)("div",{children:"如果在重新渲染的时候传来一个不同的subscribe函数，React会用新的subscribe重新订阅这个store。你可以通过在组件外面声明subscribe的方式来避免"})]}),key:"1"}],x=()=>(0,p.jsx)(u.Z,{list:b}),h=f},70365:(e,n,t)=>{t.d(n,{Z:()=>g});var o=t(29439),r=t(93433),a=t(71002),l=t(81694),c=t.n(l),i=t(75179),s=t(60632),d=t(72791),u=t(87462),p=t(44925),v=t(85501),f=t(4942),y=t(98568),b=t(11354),x=d.forwardRef((function(e,n){var t,r=e.prefixCls,a=e.forceRender,l=e.className,i=e.style,s=e.children,u=e.isActive,p=e.role,v=d.useState(u||a),y=(0,o.Z)(v,2),b=y[0],x=y[1];return d.useEffect((function(){(a||u)&&x(!0)}),[a,u]),b?d.createElement("div",{ref:n,className:c()("".concat(r,"-content"),(t={},(0,f.Z)(t,"".concat(r,"-content-active"),u),(0,f.Z)(t,"".concat(r,"-content-inactive"),!u),t),l),style:i,role:p},d.createElement("div",{className:"".concat(r,"-content-box")},s)):null}));x.displayName="PanelContent";const h=x;var m=["showArrow","headerClass","isActive","onItemClick","forceRender","className","prefixCls","collapsible","accordion","panelKey","extra","header","expandIcon","openMotion","destroyInactivePanel","children"];const C=d.forwardRef((function(e,n){var t,o,r=e.showArrow,a=void 0===r||r,l=e.headerClass,i=e.isActive,s=e.onItemClick,v=e.forceRender,x=e.className,C=e.prefixCls,I=e.collapsible,k=e.accordion,j=e.panelKey,Z=e.extra,S=e.header,g=e.expandIcon,E=e.openMotion,N=e.destroyInactivePanel,A=e.children,P=(0,p.Z)(e,m),R="disabled"===I,w="header"===I,K="icon"===I,T=null!=Z&&"boolean"!=typeof Z,M=function(){null==s||s(j)},O="function"==typeof g?g(e):d.createElement("i",{className:"arrow"});O&&(O=d.createElement("div",{className:"".concat(C,"-expand-icon"),onClick:["header","icon"].includes(I)?M:void 0},O));var B=c()((t={},(0,f.Z)(t,"".concat(C,"-item"),!0),(0,f.Z)(t,"".concat(C,"-item-active"),i),(0,f.Z)(t,"".concat(C,"-item-disabled"),R),t),x),F={className:c()(l,(o={},(0,f.Z)(o,"".concat(C,"-header"),!0),(0,f.Z)(o,"".concat(C,"-header-collapsible-only"),w),(0,f.Z)(o,"".concat(C,"-icon-collapsible-only"),K),o)),"aria-expanded":i,"aria-disabled":R,onKeyDown:function(e){"Enter"!==e.key&&e.keyCode!==b.Z.ENTER&&e.which!==b.Z.ENTER||M()}};return w||K||(F.onClick=M,F.role=k?"tab":"button",F.tabIndex=R?-1:0),d.createElement("div",(0,u.Z)({},P,{ref:n,className:B}),d.createElement("div",F,a&&O,d.createElement("span",{className:"".concat(C,"-header-text"),onClick:"header"===I?M:void 0},S),T&&d.createElement("div",{className:"".concat(C,"-extra")},Z)),d.createElement(y.ZP,(0,u.Z)({visible:i,leavedClassName:"".concat(C,"-content-hidden")},E,{forceRender:v,removeOnLeave:N}),(function(e,n){var t=e.className,o=e.style;return d.createElement(h,{ref:n,prefixCls:C,className:t,style:o,isActive:i,forceRender:v,role:k?"tabpanel":void 0},A)})))}));var I=["children","label","key","collapsible","onItemClick","destroyInactivePanel"];const k=function(e,n,t){return Array.isArray(e)?function(e,n){var t=n.prefixCls,o=n.accordion,r=n.collapsible,a=n.destroyInactivePanel,l=n.onItemClick,c=n.activeKey,i=n.openMotion,s=n.expandIcon;return e.map((function(e,n){var v=e.children,f=e.label,y=e.key,b=e.collapsible,x=e.onItemClick,h=e.destroyInactivePanel,m=(0,p.Z)(e,I),k=String(null!=y?y:n),j=null!=b?b:r,Z=null!=h?h:a,S=!1;return S=o?c[0]===k:c.indexOf(k)>-1,d.createElement(C,(0,u.Z)({},m,{prefixCls:t,key:k,panelKey:k,isActive:S,accordion:o,openMotion:i,expandIcon:s,header:f,collapsible:j,onItemClick:function(e){"disabled"!==j&&(l(e),null==x||x(e))},destroyInactivePanel:Z}),v)}))}(e,t):(0,v.Z)(n).map((function(e,n){return function(e,n,t){if(!e)return null;var o=t.prefixCls,r=t.accordion,a=t.collapsible,l=t.destroyInactivePanel,c=t.onItemClick,i=t.activeKey,s=t.openMotion,u=t.expandIcon,p=e.key||String(n),v=e.props,f=v.header,y=v.headerClass,b=v.destroyInactivePanel,x=v.collapsible,h=v.onItemClick,m=!1;m=r?i[0]===p:i.indexOf(p)>-1;var C=null!=x?x:a,I={key:p,panelKey:p,header:f,headerClass:y,isActive:m,prefixCls:o,destroyInactivePanel:null!=b?b:l,openMotion:s,accordion:r,children:e.props.children,onItemClick:function(e){"disabled"!==C&&(c(e),null==h||h(e))},expandIcon:u,collapsible:C};return"string"==typeof e.type?e:(Object.keys(I).forEach((function(e){void 0===I[e]&&delete I[e]})),d.cloneElement(e,I))}(e,n,t)}))};function j(e){var n=e;if(!Array.isArray(n)){var t=(0,a.Z)(n);n="number"===t||"string"===t?[n]:[]}return n.map((function(e){return String(e)}))}var Z=d.forwardRef((function(e,n){var t=e.prefixCls,a=void 0===t?"rc-collapse":t,l=e.destroyInactivePanel,u=void 0!==l&&l,p=e.style,v=e.accordion,f=e.className,y=e.children,b=e.collapsible,x=e.openMotion,h=e.expandIcon,m=e.activeKey,C=e.defaultActiveKey,I=e.onChange,Z=e.items,S=c()(a,f),g=(0,i.Z)([],{value:m,onChange:function(e){return null==I?void 0:I(e)},defaultValue:C,postState:j}),E=(0,o.Z)(g,2),N=E[0],A=E[1];(0,s.ZP)(!y,"`children` will be removed in next major version. Please use `items` instead.");var P=k(Z,y,{prefixCls:a,accordion:v,openMotion:x,expandIcon:h,collapsible:b,destroyInactivePanel:u,onItemClick:function(e){return A((function(){return v?N[0]===e?[]:[e]:N.indexOf(e)>-1?N.filter((function(n){return n!==e})):[].concat((0,r.Z)(N),[e])}))},activeKey:N});return d.createElement("div",{ref:n,className:S,style:p,role:v?"tablist":void 0},P)}));const S=Object.assign(Z,{Panel:C}),g=S;S.Panel}}]);