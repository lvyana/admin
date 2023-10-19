"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[7710],{68792:function(e,n,t){t.d(n,{Z:function(){return l}});t(72791);var r=t(16421),o=t(1413),i=t(83298),c=function(e){var n=e.list,t=e.styleConfig,r=e.style,c=e.bordered,a=(0,i.Z)().token,l={marginBottom:24,background:a.colorFillAlter,borderRadius:a.borderRadiusLG,border:"none"};return"1"===t?{list:null==n?void 0:n.map((function(e){return(0,o.Z)((0,o.Z)({},e),{},{style:l})})),style:{background:a.colorBgContainer},bordered:!1}:{list:n,styleConfig:t,style:r,bordered:c}},a=t(80184),l=function(e){var n=e.list,t=e.defaultActiveKey,o=e.styleConfig,i=e.bordered,l=void 0===i||i,s=e.onChange,d=e.expandIcon,u=e.style,f=c({list:n,styleConfig:o,style:u,bordered:l});return(0,a.jsx)(r.Z,{bordered:f.bordered,defaultActiveKey:t,onChange:s,expandIcon:d,style:f.style,items:f.list})}},18372:function(e,n,t){t.r(n),t.d(n,{IuseSyncExternalStore:function(){return x},IuseSyncExternalStoreItem:function(){return h},default:function(){return Z}});var r=t(1413),o=t(72791),i=t(37762),c=t(93433),a=0,l=[{id:a++,text:"Todo #1"}],s=[];function d(){var e,n=(0,i.Z)(s);try{for(n.s();!(e=n.n()).done;){(0,e.value)()}}catch(e){n.e(e)}finally{n.f()}}var u={addTodo:function(){l=[].concat((0,c.Z)(l),[{id:a++,text:"Todo #"+a}]),d()},deleteTodo:function(){l=l.filter((function(e,n){return 0!==n})),d()},subscribe:function(e){return s=[].concat((0,c.Z)(s),[e]),function(){s=s.filter((function(n){return n!==e}))}},getSnapshot:function(){return l}},f=t(94805),v=t(98010),p=t(68792),y=t(80184),b={name:"Add todo",type:"key",btnType:"primary"},x=function(){var e=(0,o.useSyncExternalStore)(u.subscribe,u.getSnapshot);return(0,y.jsxs)(f.Z,{children:[(0,y.jsx)(v.Z,{buttonItem:b,onClick:function(){return u.addTodo()}}),(0,y.jsx)("hr",{}),(0,y.jsx)("ul",{children:e.map((function(e){return(0,y.jsx)("li",{children:e.text},e.id)}))}),(0,y.jsx)(h,{}),(0,y.jsx)(C,{})]})},h=function(){var e=(0,o.useSyncExternalStore)(u.subscribe,u.getSnapshot);return(0,y.jsxs)("div",{children:[(0,y.jsx)("div",{children:"测试: useSyncExternalStore数据可以共享"}),(0,y.jsx)(v.Z,{buttonItem:b,onClick:function(){return u.addTodo()}}),(0,y.jsx)(v.Z,{buttonItem:(0,r.Z)((0,r.Z)({},b),{},{name:"delete todo"}),onClick:function(){return u.deleteTodo()}}),(0,y.jsx)("hr",{}),(0,y.jsx)("ul",{children:e.map((function(e){return(0,y.jsx)("li",{children:e.text},e.id)}))})]})},m=[{header:"useSyncExternalStore 参数说明",content:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{children:"useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot)"}),(0,y.jsx)("div",{children:"subscribe函数得订阅这个store, 并且返回一个可以取消订阅的函数。"}),(0,y.jsx)("div",{children:"getSnapshot函数得可以从store里读取数据快照。"}),(0,y.jsx)("div",{children:"subscribe: 是一个函数，只有一个回调函数作为入参，并且使其订阅这个store. 当store发生改变的时候，这个回调函数应该得到执行，而且这会触发组件的重新渲染。subscribe函数应该返回一个可以取消订阅的方法。"}),(0,y.jsx)("div",{children:"getSnapshot: 是一个函数，返回一个组件中需要用到的store里的一个数据值的快照。当这个store没有改变的时候，重复调用getSnapshot必须返回同样的值。如果store发生改变并且返回的数据值不一样了（用Object.js做比较），那么Reacr重新渲染这个组件。"}),(0,y.jsx)("div",{children:"getServerSnapshot（可选参数）: 是一个函数，返回store数据的初始快照。只会在服务端渲染的时候使用，并且是在服务端渲染好的内容往客户端灌水的时候。服务端的快照必须和客户端的一致。并且通常是序列化后被发送到客户端的，如果你不传这个参数，在服务端渲染的时候会报错"}),(0,y.jsx)("div",{children:"当前你在组件渲染中使用到的store数据的快照"}),(0,y.jsx)("div",{children:"警告"}),(0,y.jsx)("div",{children:"调用getSnapshot返回的这个store数据快照不能修改，如果所依赖的store有可以更改的数据，当数据发生改变返回新的不可修改的数据，否则返回上一次缓存的数据快照。"}),(0,y.jsx)("div",{children:"如果在重新渲染的时候传来一个不同的subscribe函数，React会用新的subscribe重新订阅这个store。你可以通过在组件外面声明subscribe的方式来避免"})]}),key:"1"}],C=function(){return(0,y.jsx)(p.Z,{list:m})},Z=x},70365:function(e,n,t){t.d(n,{Z:function(){return g}});var r=t(29439),o=t(93433),i=t(71002),c=t(81694),a=t.n(c),l=t(75179),s=t(60632),d=t(72791),u=t(87462),f=t(44925),v=t(85501),p=t(4942),y=t(98568),b=t(11354),x=d.forwardRef((function(e,n){var t,o=e.prefixCls,i=e.forceRender,c=e.className,l=e.style,s=e.children,u=e.isActive,f=e.role,v=d.useState(u||i),y=(0,r.Z)(v,2),b=y[0],x=y[1];return d.useEffect((function(){(i||u)&&x(!0)}),[i,u]),b?d.createElement("div",{ref:n,className:a()("".concat(o,"-content"),(t={},(0,p.Z)(t,"".concat(o,"-content-active"),u),(0,p.Z)(t,"".concat(o,"-content-inactive"),!u),t),c),style:l,role:f},d.createElement("div",{className:"".concat(o,"-content-box")},s)):null}));x.displayName="PanelContent";var h=x,m=["showArrow","headerClass","isActive","onItemClick","forceRender","className","prefixCls","collapsible","accordion","panelKey","extra","header","expandIcon","openMotion","destroyInactivePanel","children"],C=d.forwardRef((function(e,n){var t,r,o=e.showArrow,i=void 0===o||o,c=e.headerClass,l=e.isActive,s=e.onItemClick,v=e.forceRender,x=e.className,C=e.prefixCls,Z=e.collapsible,I=e.accordion,k=e.panelKey,j=e.extra,S=e.header,g=e.expandIcon,E=e.openMotion,N=e.destroyInactivePanel,A=e.children,P=(0,f.Z)(e,m),R="disabled"===Z,w="header"===Z,K="icon"===Z,T=null!=j&&"boolean"!=typeof j,M=function(){null==s||s(k)},O="function"==typeof g?g(e):d.createElement("i",{className:"arrow"});O&&(O=d.createElement("div",{className:"".concat(C,"-expand-icon"),onClick:["header","icon"].includes(Z)?M:void 0},O));var B=a()((t={},(0,p.Z)(t,"".concat(C,"-item"),!0),(0,p.Z)(t,"".concat(C,"-item-active"),l),(0,p.Z)(t,"".concat(C,"-item-disabled"),R),t),x),F={className:a()(c,(r={},(0,p.Z)(r,"".concat(C,"-header"),!0),(0,p.Z)(r,"".concat(C,"-header-collapsible-only"),w),(0,p.Z)(r,"".concat(C,"-icon-collapsible-only"),K),r)),"aria-expanded":l,"aria-disabled":R,onKeyDown:function(e){"Enter"!==e.key&&e.keyCode!==b.Z.ENTER&&e.which!==b.Z.ENTER||M()}};return w||K||(F.onClick=M,F.role=I?"tab":"button",F.tabIndex=R?-1:0),d.createElement("div",(0,u.Z)({},P,{ref:n,className:B}),d.createElement("div",F,i&&O,d.createElement("span",{className:"".concat(C,"-header-text"),onClick:"header"===Z?M:void 0},S),T&&d.createElement("div",{className:"".concat(C,"-extra")},j)),d.createElement(y.ZP,(0,u.Z)({visible:l,leavedClassName:"".concat(C,"-content-hidden")},E,{forceRender:v,removeOnLeave:N}),(function(e,n){var t=e.className,r=e.style;return d.createElement(h,{ref:n,prefixCls:C,className:t,style:r,isActive:l,forceRender:v,role:I?"tabpanel":void 0},A)})))})),Z=["children","label","key","collapsible","onItemClick","destroyInactivePanel"];var I=function(e,n,t){return Array.isArray(e)?function(e,n){var t=n.prefixCls,r=n.accordion,o=n.collapsible,i=n.destroyInactivePanel,c=n.onItemClick,a=n.activeKey,l=n.openMotion,s=n.expandIcon;return e.map((function(e,n){var v=e.children,p=e.label,y=e.key,b=e.collapsible,x=e.onItemClick,h=e.destroyInactivePanel,m=(0,f.Z)(e,Z),I=String(null!=y?y:n),k=null!=b?b:o,j=null!=h?h:i,S=!1;return S=r?a[0]===I:a.indexOf(I)>-1,d.createElement(C,(0,u.Z)({},m,{prefixCls:t,key:I,panelKey:I,isActive:S,accordion:r,openMotion:l,expandIcon:s,header:p,collapsible:k,onItemClick:function(e){"disabled"!==k&&(c(e),null==x||x(e))},destroyInactivePanel:j}),v)}))}(e,t):(0,v.Z)(n).map((function(e,n){return function(e,n,t){if(!e)return null;var r=t.prefixCls,o=t.accordion,i=t.collapsible,c=t.destroyInactivePanel,a=t.onItemClick,l=t.activeKey,s=t.openMotion,u=t.expandIcon,f=e.key||String(n),v=e.props,p=v.header,y=v.headerClass,b=v.destroyInactivePanel,x=v.collapsible,h=v.onItemClick,m=!1;m=o?l[0]===f:l.indexOf(f)>-1;var C=null!=x?x:i,Z={key:f,panelKey:f,header:p,headerClass:y,isActive:m,prefixCls:r,destroyInactivePanel:null!=b?b:c,openMotion:s,accordion:o,children:e.props.children,onItemClick:function(e){"disabled"!==C&&(a(e),null==h||h(e))},expandIcon:u,collapsible:C};return"string"==typeof e.type?e:(Object.keys(Z).forEach((function(e){void 0===Z[e]&&delete Z[e]})),d.cloneElement(e,Z))}(e,n,t)}))};function k(e){var n=e;if(!Array.isArray(n)){var t=(0,i.Z)(n);n="number"===t||"string"===t?[n]:[]}return n.map((function(e){return String(e)}))}var j=d.forwardRef((function(e,n){var t=e.prefixCls,i=void 0===t?"rc-collapse":t,c=e.destroyInactivePanel,u=void 0!==c&&c,f=e.style,v=e.accordion,p=e.className,y=e.children,b=e.collapsible,x=e.openMotion,h=e.expandIcon,m=e.activeKey,C=e.defaultActiveKey,Z=e.onChange,j=e.items,S=a()(i,p),g=(0,l.Z)([],{value:m,onChange:function(e){return null==Z?void 0:Z(e)},defaultValue:C,postState:k}),E=(0,r.Z)(g,2),N=E[0],A=E[1];(0,s.ZP)(!y,"`children` will be removed in next major version. Please use `items` instead.");var P=I(j,y,{prefixCls:i,accordion:v,openMotion:x,expandIcon:h,collapsible:b,destroyInactivePanel:u,onItemClick:function(e){return A((function(){return v?N[0]===e?[]:[e]:N.indexOf(e)>-1?N.filter((function(n){return n!==e})):[].concat((0,o.Z)(N),[e])}))},activeKey:N});return d.createElement("div",{ref:n,className:S,style:f,role:v?"tablist":void 0},P)})),S=Object.assign(j,{Panel:C}),g=S;S.Panel}}]);