"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[3502],{94805:function(e,r,n){var t=n(1413),s=(n(72791),n(36473)),a=n(80184);r.Z=function(e){var r=e.bordered,n=void 0!==r&&r,c=e.children,i=e.style,l=void 0===i?{}:i,o=e.hoverable,d=void 0!==o&&o,b=e.className;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.Z,{hoverable:d,bordered:n,bodyStyle:(0,t.Z)({padding:"16px"},l),className:b,children:c})})}},68792:function(e,r,n){n.d(r,{Z:function(){return b}});n(72791);var t=n(16421),s=n(66579),a=n(85060),c=n(1413),i=n(22044),l=function(e){var r=e.list,n=e.styleConfig,t=e.style,s=e.bordered,a=(0,i.Z)().token,l={marginBottom:24,background:a.colorFillAlter,borderRadius:a.borderRadiusLG,border:"none"};return"1"===n?{list:r.map((function(e){return(0,c.Z)((0,c.Z)({},e),{},{style:l})})),style:{background:a.colorBgContainer},bordered:!1}:{list:r,styleConfig:n,style:t,bordered:s}},o=n(80184),d=t.Z.Panel,b=function(e){var r=e.list,n=e.defaultActiveKey,c=e.styleConfig,i=e.bordered,b=void 0===i||i,x=e.onChange,j=e.expandIcon,u=e.style,v=(0,s.C)(a.h2),f=l({list:r,styleConfig:c,style:u,bordered:b});return(0,o.jsx)(t.Z,{bordered:f.bordered,defaultActiveKey:n,onChange:x,size:v,expandIcon:j,style:f.style,children:f.list.map((function(e){return(0,o.jsx)(d,{header:e.header,style:e.style,className:e.className,children:e.content},e.key)}))})}},90427:function(e,r,n){n.r(r);n(72791);var t=n(94805),s=n(68792),a=n(80184);r.default=function(){var e=[{header:"标题",content:(0,a.jsxs)("div",{children:["# 这是一级标题",(0,a.jsx)("br",{}),"## 这是二级标题 ",(0,a.jsx)("br",{}),"### 这是三级标题 ",(0,a.jsx)("br",{}),"#### 这是四级标题 ",(0,a.jsx)("br",{}),"##### 这是五级标题 ",(0,a.jsx)("br",{}),"###### 这是六级标题",(0,a.jsx)("br",{}),"tips: 注意：标准的 Markdown 语法中 # 后面没有空格，但在「 语雀」中需要加空格才能识别。"]}),key:"1"},{header:"字体",content:(0,a.jsxs)("div",{children:["**这是加粗的文字**",(0,a.jsx)("br",{}),"*这是倾斜的文字*",(0,a.jsx)("br",{}),"***这是斜体加粗的文字***",(0,a.jsx)("br",{}),"~~这是加删除线的文字~~",(0,a.jsx)("br",{}),"tips: 注意：* 和 ~ 后没有空格"]}),key:"2"},{header:"引用",content:(0,a.jsxs)("div",{children:[">","这是引用的内容",(0,a.jsx)("br",{}),">>","这是引用的内容",(0,a.jsx)("br",{}),">>>","这是引用的内容",(0,a.jsx)("br",{}),"tips: 注意：标准的 Markdown 语法中",">"," 后面没有空格，但在「 语雀」中需要加空格才能识别。"]}),key:"3"},{header:"分割线",content:(0,a.jsxs)("div",{children:["---",(0,a.jsx)("br",{}),"----",(0,a.jsx)("br",{}),"***",(0,a.jsx)("br",{}),"*****",(0,a.jsx)("br",{}),"tips: 三个或者三个以上的 - 或者 * 都可以。以上四种写法显示效果都一样。"]}),key:"4"},{header:"图片",content:(0,a.jsxs)("div",{children:["![图片alt](图片地址 ''图片title'')",(0,a.jsx)("br",{}),"图片alt就是显示在图片下面的文字,相当于对图片内容的解释。",(0,a.jsx)("br",{}),"图片title是图片的标题,当鼠标移到图片上时显示的内容。title可加可不加",(0,a.jsx)("br",{})]}),key:"5"},{header:"超链接",content:(0,a.jsxs)("div",{children:['[超链接名](超链接地址 "超链接title")',(0,a.jsx)("br",{}),"title可加可不加",(0,a.jsx)("br",{}),"tips: 注意：标准的 Markdown 语法中 [] 以及 () 都是英文符号，且上述符号与文件间没有空格。"]}),key:"6"},{header:"无序列表",content:(0,a.jsxs)("div",{children:["- 列表内容 ",(0,a.jsx)("br",{}),"+ 列表内容 ",(0,a.jsx)("br",{}),"* 列表内容 ",(0,a.jsx)("br",{}),"tips: 注意：- + * 跟内容之间都要有一个空格",(0,a.jsx)("br",{})]}),key:"7"},{header:"有序列表",content:(0,a.jsxs)("div",{children:["1.列表内容",(0,a.jsx)("br",{}),"2.列表内容",(0,a.jsx)("br",{}),"3.列表内容",(0,a.jsx)("br",{}),"tips: 注意：序号跟内容之间要有空格",(0,a.jsx)("br",{})]}),key:"8"},{header:"嵌套列表",content:(0,a.jsxs)("div",{children:["上一级与下一级之间敲三个空格即可。",(0,a.jsx)("br",{}),"● 一级标题",(0,a.jsx)("br",{})," ○ 二级标题",(0,a.jsx)("br",{})," ○ 二级标题 ",(0,a.jsx)("br",{}),"● 一级标题",(0,a.jsx)("br",{})," ○ 二级标题",(0,a.jsx)("br",{}),"■ 三级标题",(0,a.jsx)("br",{}),"1 一级标题",(0,a.jsx)("br",{})," a 二级标题",(0,a.jsx)("br",{})," b 二级标题",(0,a.jsx)("br",{}),"i 三级标题",(0,a.jsx)("br",{}),"ii 三级标题",(0,a.jsx)("br",{})]}),key:"9"},{header:"表格",content:(0,a.jsxs)("div",{children:["表头|表头|表头 ",(0,a.jsx)("br",{}),"---|:--:|---: ",(0,a.jsx)("br",{}),"内容|内容|内容 ",(0,a.jsx)("br",{}),"内容|内容|内容 ",(0,a.jsx)("br",{}),"第二行分割表头和内容。 ",(0,a.jsx)("br",{}),"- 有一个就行，为了对齐，多加了几个 ",(0,a.jsx)("br",{}),"文字默认居左 ",(0,a.jsx)("br",{}),"-两边加：表示文字居中 ",(0,a.jsx)("br",{}),"-右边加：表示文字居右 ",(0,a.jsx)("br",{}),"注：原生的语法两边都要用 | 包起来。此处省略",(0,a.jsx)("br",{})]}),key:"10"},{header:"代码",content:(0,a.jsxs)("div",{children:["单行代码：代码之间分别用一个反引号包起来",(0,a.jsx)("br",{}),"`代码内容`",(0,a.jsx)("br",{}),"代码块：代码之间分别用三个反引号抱起来，且两边的反引号单独占一行",(0,a.jsx)("br",{}),"```",(0,a.jsx)("br",{}),"代码...",(0,a.jsx)("br",{}),"代码...",(0,a.jsx)("br",{}),"代码...",(0,a.jsx)("br",{}),"```",(0,a.jsx)("br",{})]}),key:"11"}];return(0,a.jsx)(t.Z,{children:(0,a.jsx)(s.Z,{list:e,defaultActiveKey:["1"],styleConfig:"1"})})}},23968:function(e,r,n){n.d(r,{Z:function(){return Z}});var t=n(29439),s=n(93433),a=n(71002),c=n(81694),i=n.n(c),l=n(85501),o=n(75179),d=n(72791),b=n(4942),x=n(87462),j=n(44925),u=n(98568),v=n(11354),f=d.forwardRef((function(e,r){var n,s=e.prefixCls,a=e.forceRender,c=e.className,l=e.style,o=e.children,x=e.isActive,j=e.role,u=d.useState(x||a),v=(0,t.Z)(u,2),f=v[0],h=v[1];return d.useEffect((function(){(a||x)&&h(!0)}),[a,x]),f?d.createElement("div",{ref:r,className:i()("".concat(s,"-content"),(n={},(0,b.Z)(n,"".concat(s,"-content-active"),x),(0,b.Z)(n,"".concat(s,"-content-inactive"),!x),n),c),style:l,role:j},d.createElement("div",{className:"".concat(s,"-content-box")},o)):null}));f.displayName="PanelContent";var h=f,y=["showArrow","headerClass","isActive","onItemClick","forceRender","className","prefixCls","collapsible","accordion","panelKey","extra","header","expandIcon","openMotion","destroyInactivePanel","children"],p=d.forwardRef((function(e,r){var n,t,s=e.showArrow,a=void 0===s||s,c=e.headerClass,l=e.isActive,o=e.onItemClick,f=e.forceRender,p=e.className,m=e.prefixCls,k=e.collapsible,C=e.accordion,Z=e.panelKey,N=e.extra,g=e.header,E=e.expandIcon,I=e.openMotion,w=e.destroyInactivePanel,A=e.children,R=(0,j.Z)(e,y),P="disabled"===k,K="header"===k,M="icon"===k,O=null!=N&&"boolean"!=typeof N,S=function(){null==o||o(Z)},B="function"==typeof E?E(e):d.createElement("i",{className:"arrow"});B&&(B=d.createElement("div",{className:"".concat(m,"-expand-icon"),onClick:["header","icon"].includes(k)?S:void 0},B));var F=i()((n={},(0,b.Z)(n,"".concat(m,"-item"),!0),(0,b.Z)(n,"".concat(m,"-item-active"),l),(0,b.Z)(n,"".concat(m,"-item-disabled"),P),n),p),L={className:i()((t={},(0,b.Z)(t,"".concat(m,"-header"),!0),(0,b.Z)(t,"headerClass",c),(0,b.Z)(t,"".concat(m,"-header-collapsible-only"),K),(0,b.Z)(t,"".concat(m,"-icon-collapsible-only"),M),t)),"aria-expanded":l,"aria-disabled":P,onKeyPress:function(e){"Enter"!==e.key&&e.keyCode!==v.Z.ENTER&&e.which!==v.Z.ENTER||S()}};return K||M||(L.onClick=S,L.role=C?"tab":"button",L.tabIndex=P?-1:0),d.createElement("div",(0,x.Z)({},R,{ref:r,className:F}),d.createElement("div",L,a&&B,d.createElement("span",{className:"".concat(m,"-header-text"),onClick:"header"===k?S:void 0},g),O&&d.createElement("div",{className:"".concat(m,"-extra")},N)),d.createElement(u.ZP,(0,x.Z)({visible:l,leavedClassName:"".concat(m,"-content-hidden")},I,{forceRender:f,removeOnLeave:w}),(function(e,r){var n=e.className,t=e.style;return d.createElement(h,{ref:r,prefixCls:m,className:n,style:t,isActive:l,forceRender:f,role:C?"tabpanel":void 0},A)})))}));function m(e){var r=e;if(!Array.isArray(r)){var n=(0,a.Z)(r);r="number"===n||"string"===n?[r]:[]}return r.map((function(e){return String(e)}))}var k=d.forwardRef((function(e,r){var n=e.prefixCls,a=void 0===n?"rc-collapse":n,c=e.destroyInactivePanel,b=void 0!==c&&c,x=e.style,j=e.accordion,u=e.className,v=e.children,f=e.collapsible,h=e.openMotion,y=e.expandIcon,p=e.activeKey,k=e.defaultActiveKey,C=e.onChange,Z=i()(a,u),N=(0,o.Z)([],{value:p,onChange:function(e){return null==C?void 0:C(e)},defaultValue:k,postState:m}),g=(0,t.Z)(N,2),E=g[0],I=g[1],w=(0,l.Z)(v).map((function(e,r){if(!e)return null;var n=e.key||String(r),t=e.props,c=t.header,i=t.headerClass,l=t.destroyInactivePanel,o=t.collapsible,x=t.onItemClick,u=!1;u=j?E[0]===n:E.indexOf(n)>-1;var v=null!=o?o:f,p={key:n,panelKey:n,header:c,headerClass:i,isActive:u,prefixCls:a,destroyInactivePanel:null!=l?l:b,openMotion:h,accordion:j,children:e.props.children,onItemClick:function(e){"disabled"!==v&&(!function(e){I((function(){return j?E[0]===e?[]:[e]:E.indexOf(e)>-1?E.filter((function(r){return r!==e})):[].concat((0,s.Z)(E),[e])}))}(e),null==x||x(e))},expandIcon:y,collapsible:v};return"string"==typeof e.type?e:(Object.keys(p).forEach((function(e){void 0===p[e]&&delete p[e]})),d.cloneElement(e,p))}));return d.createElement("div",{ref:r,className:Z,style:x,role:j?"tablist":void 0},w)})),C=Object.assign(k,{Panel:p}),Z=C;C.Panel}}]);