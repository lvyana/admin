"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[2489],{22044:function(A,t,e){var n=e(70737).Z.useToken;t.Z=function(){return{token:n().token}}},92729:function(A,t,e){e.r(t),e.d(t,{default:function(){return EA}});var n=e(29439),i=e(72791),o=e(57689),a=e(25671),r=e(55076),c=e(1413),l=e(93433),s=e(43222),u=e(11087),h=e(1416),d=e(49655),p=e(87175),y=e(87101),f=e(80184),m=["role/allocation"],x=function(){var A=(0,o.TH)().pathname,t=(0,y.Z)().selectMenuPath;(0,i.useEffect)((function(){u(h(A))}),[A]);var e=(0,i.useState)([]),a=(0,n.Z)(e,2),r=a[0],c=a[1],u=function(A){c(A)},h=function(A){var t;return null===(t=A.split("/"))||void 0===t?void 0:t.reduce((function(A,t,e,n){if(!t)return A;if(n.length-1===e)return A;var i="";return i=0===A.length?"/"+t:[A[A.length-1],t].join("/"),[].concat((0,l.Z)(A),[i])}),[])},m=(0,d.CG)(p.SI);return(0,f.jsx)(s.Z,{theme:"light",defaultOpenKeys:h(A),defaultSelectedKeys:[t||A],openKeys:r,onOpenChange:u,selectedKeys:[t||A],mode:"inline",items:b(m)})},g=(0,i.memo)(x),Z=function(A,t,e,n,i){return{key:t,icon:e&&(0,f.jsx)(h.Z,{type:e}),children:n,label:A,type:i}},b=function A(t){return t.reduce((function(t,e){if(!1===e.show)return(0,l.Z)(t);if(e.children&&e.children.length>0){var n=(0,c.Z)((0,c.Z)({},Z(e.title,e.path,e.icon)),{},{children:A(e.children)});return[].concat((0,l.Z)(t),[n])}var i=Z((0,f.jsxs)(u.rU,{to:e.path,children:[" ",e.title]}),e.path,e.icon);return[].concat((0,l.Z)(t),[i])}),[])},j=e(66106),C=e(30914),k=e(75202),B=e(54620),S=e(87309),F=e(55962),R=e(66256),E=function(A){var t=A.id,e=(0,i.useRef)(document.getElementById(t)),o=(0,B.Z)(e),a=(0,n.Z)(o,2),r=a[0],c=a[1],l=c.enterFullscreen,s=c.exitFullscreen,u=function(){r?s():l()};return(0,f.jsx)(f.Fragment,{children:r?(0,f.jsx)(S.ZP,{type:"link",onClick:u,icon:(0,f.jsx)(F.Z,{})}):(0,f.jsx)(S.ZP,{type:"link",onClick:u,icon:(0,f.jsx)(R.Z,{})})})},Q=function(){return(0,f.jsx)(E,{id:"root"})},U=e(32385),w=e(60541),G=e(85060),q={"layout-dropdown-widht":"header_layout-dropdown-widht__D8dwh","layout-tabs-center":"header_layout-tabs-center__cmOs0","layout-tabs-padding":"header_layout-tabs-padding__iymKD","layout-tabs-btn-left":"header_layout-tabs-btn-left__Lx3Uz","layout-tabs-btn-Right":"header_layout-tabs-btn-Right__opimn","layout-tabs-list":"header_layout-tabs-list__AmGcp"},N=function(){var A=(0,d.TL)(),t=(0,d.CG)(G.h2),e=[{key:"small",label:"small",disabled:"small"===t},{key:"middle",label:"middle",disabled:"middle"===t},{key:"large",label:"large",disabled:"large"===t}];return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(U.Z,{arrow:{pointAtCenter:!0},getPopupContainer:function(){return document.getElementById("header-icon-function")},menu:{items:e,onClick:function(t){var e=t.key;A((0,G.a1)(e))}},placement:"bottom",trigger:["click"],overlayClassName:q["layout-dropdown"],children:(0,f.jsx)(S.ZP,{type:"link",icon:(0,f.jsx)(w.Z,{})})})})},V=e(16188),T=function(A){return A.reduce((function(A,t){if(!1===t.show)return A;var e=I((0,f.jsxs)(u.rU,{to:t.path,children:[" ",t.title]}),t.path);return[].concat((0,l.Z)(A),[e])}),[])},I=function(A,t,e,n,i){return{key:t,icon:e,children:n,label:A,type:i}},K=function(){var A=(0,o.TH)(),t=(0,d.CG)(p.SI),e=(0,i.useState)([]),a=(0,n.Z)(e,2),r=a[0],c=a[1];return(0,i.useEffect)((function(){if(-1===A.pathname.indexOf(m[0])){var e=[];A.pathname.split("/").map((function(A,n){if(0===n)e[0]={path:"/",title:"系统",children:t};else{var i,o,a=null===(i=e[n-1])||void 0===i||null===(o=i.children)||void 0===o?void 0:o.find((function(t){return-1!==t.path.indexOf(A)}));a&&(e[n]=a)}})),c(e)}}),[A.pathname]),(0,f.jsx)("div",{style:{paddingLeft:"27px"},children:(0,f.jsx)(V.Z,{style:{},children:r.map((function(A,t){var e;return A.children?(0,f.jsx)(V.Z.Item,{menu:{items:T(A.children),selectedKeys:[null===(e=r[t+1])||void 0===e?void 0:e.path]},children:(0,f.jsx)("a",{children:A.title})},A.path):(0,f.jsx)(V.Z.Item,{children:A.title},A.path)}))})})},M=e(376),v=e(11730),L=function(){var A=(0,i.useState)(!1),t=(0,n.Z)(A,2),e=t[0],o=t[1],a=(0,i.useRef)(null),r=(0,i.useState)(null),c=(0,n.Z)(r,2),l=c[0],s=c[1];(0,i.useEffect)((function(){e&&a.current.focus()}),[e]);return(0,f.jsxs)("div",{className:"inline-block w-48 text-right",children:[(0,f.jsx)(U.Z,{menu:{items:D(l)},children:(0,f.jsx)(M.Z,{placeholder:"搜索",ref:a,suffix:W,onBlur:function(){o(!1),s([])},onChange:function(A){A.target.value?s([{value:1,id:1}]):s([])},className:"rounded-full",style:{width:e?"192px":0,opacity:e?1:0,transitionProperty:"width,opacity",transitionDuration:"0.5s,0.2s",transitionTimingFunction:"ease-out"}})}),!e&&(0,f.jsx)(S.ZP,{type:"link",style:{position:"absolute",left:156,top:17,zIndex:1},onClick:function(){o(!0)},icon:W})]})},W=(0,f.jsx)(v.Z,{style:{fontSize:16}}),D=function(A){return null!=A&&A.length?[{key:"1",label:(0,f.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com",children:"1st menu item"})},{key:"2",label:(0,f.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.luohanacademy.com",children:"3rd menu item (disabled)"})},{key:"3",label:"a danger item"}]:[]},H=e(21940),O=e(22266),J=function(){var A=(0,o.s0)(),t=(0,d.CG)(H.MM);return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(S.ZP,{type:"link",style:{padding:"4px 5px"},children:(0,f.jsx)(U.Z,{arrow:{pointAtCenter:!0},getPopupContainer:function(){return document.getElementById("header-icon-function")},menu:{items:[{key:"1",label:"个人中心"},{key:"2",label:"退出登录"}],onClick:function(t){"1"===t.key?A("/mycenter"):"2"===t.key&&A("/login")}},placement:"bottom",trigger:["click"],overlayClassName:q["layout-dropdown"],children:(0,f.jsxs)("div",{children:[(0,f.jsx)(O.C,{className:"unctionality",src:t,style:{backgroundColor:"#fde3cf"}}),(0,f.jsx)(k.go,{MinWidth:890,children:(0,f.jsx)("span",{className:"mr5 ml5",children:"admin"})})]})})})})},Y=e(78587),z=e(69228),X=e(16726),P=e(90342),_=e(78792),$=e(29751),AA=e(17195),tA=function(){return(0,AA.Z)({url:"/messgeCenter",method:"get"})},eA=function(){(0,i.useEffect)((function(){a()}),[]);var A=(0,i.useState)([]),t=(0,n.Z)(A,2),e=t[0],o=t[1],a=(0,$.Z)(tA,{manual:!0,onSuccess:function(A){var t=A.data;o(t)}}).run;return(0,f.jsx)("div",{className:"".concat(q["layout-tabs-List"]),children:(0,f.jsx)(_.ZP,{bordered:!0,dataSource:e,renderItem:function(A){return(0,f.jsx)(_.ZP.Item,{style:{backgroundColor:A.isRead?"#ccc":""},children:A.title})}})})},nA=function(A){var t=A.hide,e=(0,o.s0)(),n=[{label:"通知",key:"item-1",children:(0,f.jsx)(eA,{})},{label:"消息",key:"item-2",children:(0,f.jsx)(eA,{})}];return(0,f.jsxs)("div",{className:"".concat(q["layout-tabs-center"]),children:[(0,f.jsx)(P.Z,{defaultActiveKey:"1",onChange:function(A){},items:n,className:"".concat(q["layout-tabs-List"])}),(0,f.jsxs)(j.Z,{className:"mt-1",gutter:8,children:[(0,f.jsx)(C.Z,{span:12,children:(0,f.jsx)(S.ZP,{type:"dashed",style:{width:"100%"},children:"全部已读"})}),(0,f.jsx)(C.Z,{span:12,children:(0,f.jsx)(S.ZP,{type:"dashed",style:{width:"100%"},onClick:function(){return t(),void e("messgeCenter")},children:"查看更多"})})]})]})},iA=function(){var A=(0,i.useState)(!1),t=(0,n.Z)(A,2),e=t[0],o=t[1];return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(z.Z,{getPopupContainer:function(){return document.getElementById("header-icon-function")},open:e,onOpenChange:function(A){o(A)},placement:"bottomRight",content:(0,f.jsx)(nA,{hide:function(){o(!1)}}),trigger:"click",children:(0,f.jsx)(X.Z,{count:5,offset:[-5,5],size:"small",children:(0,f.jsx)(S.ZP,{type:"link",icon:(0,f.jsx)(Y.Z,{})})})})})},oA=e(59434),aA=function(){var A=(0,d.TL)(),t=(0,oA.v9)(G.gZ),e=[{label:"icon-taiyang",key:"dark"},{label:"icon-ClearNight-qing-yewan",key:"white"}],n=(0,i.useMemo)((function(){var A;return null===(A=e.find((function(A){return A.key===t})))||void 0===A?void 0:A.label}),[t]);return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(S.ZP,{type:"link",icon:(0,f.jsx)(h.Z,{type:n||"icon-taiyang",style:{transform:"scale(1.4)"}}),onClick:function(){"dark"===t?A((0,G.Wt)("white")):"white"===t&&A((0,G.Wt)("dark"))}})})},rA=function(){(0,o.s0)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(S.ZP,{type:"link",icon:(0,f.jsx)(O.C,{style:{display:"inline-table"},src:"data:image/png;base64,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",size:16}),onClick:function(){var A=window.open("about:blank");A&&(A.location.href="https://gitee.com/lv_yan-a/react-app")}}),(0,f.jsx)(S.ZP,{type:"link",icon:(0,f.jsx)(O.C,{style:{display:"inline-table"},src:"data:image/png;base64,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",size:16}),onClick:function(){var A=window.open("about:blank");A&&(A.location.href="https://github.com/lvyana/react-app")}})]})},cA=function(){return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(j.Z,{justify:"space-around",align:"middle",children:[(0,f.jsx)(C.Z,{flex:"345px",children:(0,f.jsx)(K,{})}),(0,f.jsx)(C.Z,{flex:"auto",children:(0,f.jsxs)(j.Z,{justify:"end",id:"header-icon-function",children:[(0,f.jsx)(k.go,{MinWidth:1040,children:(0,f.jsxs)(C.Z,{children:[(0,f.jsx)(L,{}),(0,f.jsx)(Q,{}),(0,f.jsx)(N,{}),(0,f.jsx)(iA,{}),(0,f.jsx)(aA,{}),(0,f.jsx)(rA,{})]})}),(0,f.jsx)(C.Z,{children:(0,f.jsx)(J,{})})]})})]})})},lA=(0,i.memo)(cA),sA=[{title:"首页",path:"/home",icon:"icon-baohu"},{title:"antd",path:"/antd",icon:"icon-baohu",children:[{title:"expenses",path:"/antd/expenses",icon:"icon-yinle"},{title:"动态表单",path:"/antd/dynamicform",icon:"icon-chongzhizhongxin"}]},{title:"react",path:"/react",icon:"icon-qianbao",children:[{title:"hooks",path:"/react/hooks",icon:"icon-qianbao",children:[{title:"useState",path:"/react/hooks/myUseState",icon:"icon-kongjian"},{title:"useEffect",path:"/react/hooks/myUseEffect",icon:"icon-fenxiangerweima"},{title:"useLayoutEffect",path:"/react/hooks/myUseLayoutEffect",icon:"icon-wodemaidan"},{title:"useReducer",path:"/react/hooks/myUseReducer",icon:"icon-gouwu"},{title:"useContext",path:"/react/hooks/myUseContext",icon:"icon-gouwu"},{title:"useMemo",path:"/react/hooks/myUseMemo",icon:"icon-zuji"},{title:"useCallback",path:"/react/hooks/myUseCallback",icon:"icon-ditu"},{title:"useRef",path:"/react/hooks/myUseRef",icon:"icon-youhuiquan"},{title:"Suspense",path:"/react/hooks/mySuspense",icon:"icon-dingdan"},{title:"forwardRef",path:"/react/hooks/myForwardRef",icon:"icon-paimai"},{title:"myUseTransition",path:"/react/hooks/myUseTransition",icon:"icon-paimai"}]},{title:"reactDom",path:"/react/reactDom",icon:"icon-xinpin",children:[{title:"createPortal",path:"/react/reactDom/createPortal",icon:"icon-xinpin"},{title:"flushSync",path:"/react/reactDom/flushSync",icon:"icon-xinpin"}]},{title:"Rtk",path:"/react/rtk",icon:"icon-xinpin"}]},{title:"Router",path:"/router",icon:"icon-jiushui",children:[{title:"RouterDemo",path:"/router/routerDemo",icon:"icon-qiche"},{title:"useRouter",path:"/router/myUseRouter",icon:"icon-shangou"}]},{title:"plugin",path:"/plugin",icon:"icon-yiliao",children:[{title:"富文本",path:"/plugin/richtextedit",icon:"icon-huodong"},{title:"pdf",path:"/plugin/pdf",icon:"icon-biaoshu"},{title:"视频",path:"/plugin/player",icon:"icon-shangcheng"},{title:"grid布局",path:"/plugin/demoGridLayout",icon:"icon-jiaoyu"},{title:"响应式",path:"/plugin/responsive",icon:"icon-shenghuo"},{title:"语言切换",path:"/plugin/i18n",icon:"icon-xinpin"},{title:"表单生成",path:"/plugin/dnd",icon:"icon-xinpin"},{title:"数据切片",path:"/plugin/burst",icon:"icon-xinpin"}]},{title:"个人中心",path:"/mycenter",show:!1},{title:"消息中心",path:"/messgeCenter",show:!1}],uA=e(22044),hA="tabsMain_tabs__mbjLG",dA=function(){var A=(0,uA.Z)().token,t=(0,i.useState)([]),e=(0,n.Z)(t,2),a=e[0],r=e[1],c=(0,i.useState)(),s=(0,n.Z)(c,2),u=s[0],h=s[1],p=(0,o.TH)(),y=(0,o.s0)(),m=function A(t){return t.reduce((function(t,e){return e.children&&e.children.length>0?[].concat((0,l.Z)(t),(0,l.Z)(A(e.children))):[].concat((0,l.Z)(t),[e])}),[])},x=(0,i.useMemo)((function(){return m(sA)}),[]);(0,i.useEffect)((function(){var A=p.pathname,t=p.search,e=p.state;if("/"!==A){h(A+t);var n="";if(t||e)n="场景";else{var i=x.find((function(t){return t.path===A}));n=null==i?void 0:i.title}if(!n)return;if(0===a.length)r([{title:n,path:A+t,disabled:!1,closable:!1}]);else-1===a.findIndex((function(e){return e.path===A+t}))&&r([].concat((0,l.Z)(a),[{title:n,path:A+t,disabled:!1,closable:!0}]))}}),[p]);var g=function(A){y(A),h(A)},Z=(0,d.CG)(G.h2);return(0,f.jsx)("div",{className:hA,children:(0,f.jsx)(P.Z,{style:{color:A.colorTextBase,backgroundColor:A.colorBgLayout},hideAdd:!0,onChange:g,activeKey:u,type:"editable-card",onEdit:function(A,t){var e=a.filter((function(t){return t.path!==A}));r(e),A===p.pathname&&g(e[e.length-1].path)},size:Z,items:a.map((function(A){return pA(A.title,A.path,A.disabled,A.closable)}))})})},pA=function(A,t,e,n){return{label:A,key:t,disabled:e,closable:n}},yA=e(10240),fA=[{title:"Upload File",description:"Put your files here.",cover:(0,f.jsx)("img",{alt:"tour.png",src:"https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"}),target:function(){return document.querySelector(".unctionality")}},{title:"Save",description:"Save your changes.",target:function(){return document.querySelector(".card__image")}}],mA=function(A){var t=A.open,e=A.steps,n=void 0===e?fA:e,i=A.onClose;return(0,f.jsx)(yA.Z,{open:t,onClose:i,steps:n})},xA=function(){var A=(0,d.TL)();(0,i.useEffect)((function(){A((0,p.Mq)())}),[])},gA=e(74165),ZA=e(15861),bA=e(40482),jA=function(A){var t=(0,d.TL)(),e=(0,i.useRef)(0),n=function(A,t,e){var n=function(){return new Promise(function(){var n=(0,ZA.Z)((0,gA.Z)().mark((function n(i,o){var a;return(0,gA.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t();case 3:a=n.sent,e(a),i({default:A}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),i({default:function(){return(0,f.jsx)("div",{children:"路由没啦...."})}});case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(A,t){return n.apply(this,arguments)}}())};return(0,i.lazy)(n)}(A,(function(){return e.current=e.current+1,new Promise((function(A,t){setTimeout((function(){A(sA)}),100)}))}),(function(A){t((0,p.$E)(A))}));return 0===e.current?(0,f.jsx)(i.Suspense,{fallback:(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(bA.Z,{})}),children:(0,f.jsx)(n,{})}):(0,f.jsx)(A,{})},CA=e(53325),kA=e(78462),BA=a.Z.Header,SA=a.Z.Content,FA=a.Z.Sider,RA=function(){var A=(0,uA.Z)().token;xA();var t=(0,k.RP)(650).isShow;(0,i.useEffect)((function(){p(t?0:200)}),[t]);var e=(0,i.useState)(!1),c=(0,n.Z)(e,2),l=c[0],s=c[1],u=(0,i.useState)((function(){return t?0:200})),h=(0,n.Z)(u,2),d=h[0],p=h[1];(0,i.useEffect)((function(){p(t?0:l?80:200)}),[t,l]),(0,i.useEffect)((function(){"0"!==(0,kA.sV)()&&(0,kA.sV)()||Z(!0)}),[]);var y=(0,i.useState)(!1),m=(0,n.Z)(y,2),x=m[0],Z=m[1],b={position:"absolute",top:0,zIndex:1,width:"100%",height:"64px",backgroundColor:"".concat(A.colorBgBase),backgroundImage:" url(".concat(CA,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain",boxShadow:"0 3px 6px 0 rgb(195, 195, 195)"};return(0,f.jsxs)(a.Z,{className:"my-layout",style:{minHeight:"100vh"},children:[(0,f.jsx)(k.go,{MinWidth:650,children:(0,f.jsxs)(FA,{className:"layout-transition",zeroWidthTriggerStyle:{backgroundColor:A.colorBgBase},style:{backgroundColor:A.colorBgBase},collapsible:!0,collapsed:l,onCollapse:function(A){s(A)},children:[(0,f.jsx)("div",{style:b}),(0,f.jsx)(g,{})]})}),(0,f.jsxs)(a.Z,{className:"layout-transition",style:{position:"relative",marginLeft:d},children:[(0,f.jsxs)("div",{className:"layout-transition",style:{position:"fixed",zIndex:2,width:"calc(100% - ".concat(d,"px)")},children:[(0,f.jsx)(BA,{className:"",style:{padding:0,backgroundColor:A.colorBgBase},children:(0,f.jsx)(lA,{})}),(0,f.jsx)(dA,{})]}),(0,f.jsx)(SA,{style:{position:"relative",padding:"8px",marginTop:"105px",overflowX:"auto"},children:(0,f.jsx)(o.j3,{})})]}),(0,f.jsx)(r.Z.BackTop,{visibilityHeight:600}),(0,f.jsx)(mA,{open:x,onClose:function(){Z(!1),(0,kA.bN)("1")}})]})},EA=function(){return jA(RA)}},75202:function(A,t,e){e.d(t,{RP:function(){return a},go:function(){return o},r6:function(){return i}});var n=e(24805),i=function(A){var t=A.children,e=A.MaxWidth;return(0,n.useMediaQuery)({query:"(max-width: ".concat(e,"px)")})?t:null},o=function(A){var t=A.children,e=A.MinWidth;return(0,n.useMediaQuery)({query:"(min-width: ".concat(e,"px)")})?t:null},a=function(A){return{isShow:(0,n.useMediaQuery)({query:"(max-width: ".concat(A,"px)")})}}},1416:function(A,t,e){var n=(0,e(92721).Z)({scriptUrl:["//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js","//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js","//at.alicdn.com/t/c/font_3416197_kfyeg89yfl.js"]});t.Z=n}}]);