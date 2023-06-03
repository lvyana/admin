(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[7643],{68792:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});n(72791);var r=n(16421),o=n(1413),i=n(83298),s=function(e){var t=e.list,n=e.styleConfig,r=e.style,s=e.bordered,c=(0,i.Z)().token,u={marginBottom:24,background:c.colorFillAlter,borderRadius:c.borderRadiusLG,border:"none"};return"1"===n?{list:t.map((function(e){return(0,o.Z)((0,o.Z)({},e),{},{style:u})})),style:{background:c.colorBgContainer},bordered:!1}:{list:t,styleConfig:n,style:r,bordered:s}},c=n(80184),u=r.Z.Panel,d=function(e){var t=e.list,n=e.defaultActiveKey,o=e.styleConfig,i=e.bordered,d=void 0===i||i,a=e.onChange,l=e.expandIcon,f=e.style,h=s({list:t,styleConfig:o,style:f,bordered:d});return(0,c.jsx)(r.Z,{bordered:h.bordered,defaultActiveKey:n,onChange:a,expandIcon:l,style:h.style,children:h.list.map((function(e){return(0,c.jsx)(u,{header:e.header,style:e.style,className:e.className,children:e.content},e.key)}))})}},4429:function(e,t,n){"use strict";var r=n(29439),o=n(72791),i=n(94044),s=n.n(i),c=n(61293),u=(n(44350),n(99465),n(6639),n(27862),n(80184));t.Z=function(e){var t=e.initCode,n=void 0===t?"function add(a, b) {\n  return a + b;\n}":t,i=(0,o.useState)(n),d=(0,r.Z)(i,2),a=d[0],l=d[1];return(0,u.jsx)(s(),{value:a,onValueChange:function(e){return l(e)},highlight:function(e){return(0,c.highlight)(e,c.languages.js,"jsx")},padding:10,style:{fontSize:14},readOnly:!0,disabled:!0})}},34076:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(1413),o=n(44925),i=n(29439),s=n(83298),c=n(72791),u=n(8570),d=n(64209),a=n(50082),l="iMarkdown_codeStyle__Hyxme",f=n(80184),h=["node","inline","className","children"],x=function(e){var t=e.url,x=void 0===t?"":t,j=e.initContent,v=void 0===j?"":j,y=(0,c.useState)(v),b=(0,i.Z)(y,2),S=b[0],g=b[1];(0,c.useEffect)((function(){x&&m()}),[]);var m=function(){try{n(946)("./"+x).then((function(e){fetch(e.default).then((function(e){return e.text()})).then((function(e){g(e)}))}))}catch(e){}},p=(0,s.Z)().token;return(0,c.useEffect)((function(){var e;null===(e=document.querySelector("pre"))||void 0===e||e.style.setProperty("background-color",p.colorBgBase)}),[]),(0,f.jsx)("div",{children:(0,f.jsx)(u.D,{className:l,components:{code:function(e){e.node;var t=e.inline,n=e.className,i=e.children,s=(0,o.Z)(e,h),c=/language-(\w+)/.exec(n||"");return!t&&c?(0,f.jsx)(d.Z,(0,r.Z)((0,r.Z)({language:c[1],PreTag:"div"},s),{},{style:a.Z,children:String(i).replace(/\n$/,"")})):(0,f.jsx)("code",(0,r.Z)((0,r.Z)({className:n},s),{},{children:i}))}},children:S})})}},77982:function(e,t,n){"use strict";n.r(t);var r=n(29439),o=n(72791),i=n(87309),s=n(94805),c=n(68792),u=n(4429),d=n(18372),a=n(34076),l=n(80184);t.default=function(){var e=(0,o.useState)(0),t=(0,r.Z)(e,2),n=t[0],f=t[1],h=(0,o.useState)((function(){return 0})),x=(0,r.Z)(h,2),j=x[0],v=x[1],y=[{header:"useState在组件式编程里的基本用处",content:(0,l.jsx)("div",{children:"useState 是一个组件定义状态信息,所谓“状态”,就是该组件任意时刻都存放的各种数据"}),key:"0"},{header:"useState更新",content:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{children:"1、当组件更新state时,会触发组件的重新渲染,可以认为发生了局部刷新"}),(0,l.jsx)("div",{children:"2、在函数内多次更新,会合并处理"}),(0,l.jsx)("div",{children:"3、18之前手动合并处理unstable_batchedUpdates,18之后自动合并处理就不需要了"})]}),key:"1"},{header:"代码示例",content:(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(u.Z,{initCode:"\nimport { useState } from 'react';\n\nexport default function Counter() {\n  const [count, setCount] = useState(0);\n\n  function handleClick() {\n    setCount(count + 1);\n  }\n\n  return (\n    <button onClick={handleClick}>\n      You pressed me {count} times\n    </button>\n  );\n};"})}),key:"2"}];return(0,l.jsxs)(s.Z,{children:[(0,l.jsx)(i.ZP,{type:"link",onClick:function(){setTimeout((function(){return f(n+1)}),1e3),setTimeout((function(){return f(n+1)}),1e3),setTimeout((function(){return v(j+1)}),2e3)},children:"+1"}),n,j,(0,l.jsx)(c.Z,{styleConfig:"1",defaultActiveKey:["0"],list:y}),(0,l.jsx)(d.IuseSyncExternalStoreItem,{}),(0,l.jsx)(a.Z,{url:"useState.md"})]})}},18372:function(e,t,n){"use strict";n.r(t),n.d(t,{IuseSyncExternalStore:function(){return y},IuseSyncExternalStoreItem:function(){return b},default:function(){return m}});var r=n(1413),o=n(72791),i=n(37762),s=n(93433),c=0,u=[{id:c++,text:"Todo #1"}],d=[];function a(){var e,t=(0,i.Z)(d);try{for(t.s();!(e=t.n()).done;){(0,e.value)()}}catch(e){t.e(e)}finally{t.f()}}var l={addTodo:function(){u=[].concat((0,s.Z)(u),[{id:c++,text:"Todo #"+c}]),a()},deleteTodo:function(){u=u.filter((function(e,t){return 0!==t})),a()},subscribe:function(e){return d=[].concat((0,s.Z)(d),[e]),function(){d=d.filter((function(t){return t!==e}))}},getSnapshot:function(){return u}},f=n(94805),h=n(83664),x=n(68792),j=n(80184),v={name:"Add todo",type:"key",btnType:"primary"},y=function(){var e=(0,o.useSyncExternalStore)(l.subscribe,l.getSnapshot);return(0,j.jsxs)(f.Z,{children:[(0,j.jsx)(h.E,{buttonItem:v,onClick:function(){return l.addTodo()}}),(0,j.jsx)("hr",{}),(0,j.jsx)("ul",{children:e.map((function(e){return(0,j.jsx)("li",{children:e.text},e.id)}))}),(0,j.jsx)(b,{}),(0,j.jsx)(g,{})]})},b=function(){var e=(0,o.useSyncExternalStore)(l.subscribe,l.getSnapshot);return(0,j.jsxs)("div",{children:[(0,j.jsx)("div",{children:"测试: useSyncExternalStore数据可以共享"}),(0,j.jsx)(h.E,{buttonItem:v,onClick:function(){return l.addTodo()}}),(0,j.jsx)(h.E,{buttonItem:(0,r.Z)((0,r.Z)({},v),{},{name:"delete todo"}),onClick:function(){return l.deleteTodo()}}),(0,j.jsx)("hr",{}),(0,j.jsx)("ul",{children:e.map((function(e){return(0,j.jsx)("li",{children:e.text},e.id)}))})]})},S=[{header:"useSyncExternalStore 参数说明",content:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{children:"useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot)"}),(0,j.jsx)("div",{children:"subscribe函数得订阅这个store, 并且返回一个可以取消订阅的函数。"}),(0,j.jsx)("div",{children:"getSnapshot函数得可以从store里读取数据快照。"}),(0,j.jsx)("div",{children:"subscribe: 是一个函数，只有一个回调函数作为入参，并且使其订阅这个store. 当store发生改变的时候，这个回调函数应该得到执行，而且这会触发组件的重新渲染。subscribe函数应该返回一个可以取消订阅的方法。"}),(0,j.jsx)("div",{children:"getSnapshot: 是一个函数，返回一个组件中需要用到的store里的一个数据值的快照。当这个store没有改变的时候，重复调用getSnapshot必须返回同样的值。如果store发生改变并且返回的数据值不一样了（用Object.js做比较），那么Reacr重新渲染这个组件。"}),(0,j.jsx)("div",{children:"getServerSnapshot（可选参数）: 是一个函数，返回store数据的初始快照。只会在服务端渲染的时候使用，并且是在服务端渲染好的内容往客户端灌水的时候。服务端的快照必须和客户端的一致。并且通常是序列化后被发送到客户端的，如果你不传这个参数，在服务端渲染的时候会报错"}),(0,j.jsx)("div",{children:"当前你在组件渲染中使用到的store数据的快照"}),(0,j.jsx)("div",{children:"警告"}),(0,j.jsx)("div",{children:"调用getSnapshot返回的这个store数据快照不能修改，如果所依赖的store有可以更改的数据，当数据发生改变返回新的不可修改的数据，否则返回上一次缓存的数据快照。"}),(0,j.jsx)("div",{children:"如果在重新渲染的时候传来一个不同的subscribe函数，React会用新的subscribe重新订阅这个store。你可以通过在组件外面声明subscribe的方式来避免"})]}),key:"1"}],g=function(){return(0,j.jsx)(x.Z,{list:S})},m=y},946:function(e,t,n){var r={"./reactRouterDomV6.md":[91183,1183],"./useState.md":[39805,9805]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n.t(o,17)}))}o.keys=function(){return Object.keys(r)},o.id=946,e.exports=o}}]);