"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[9974],{35443:function(e,n,t){t(72791);var r=t(61431),a=t(22044),i=t(80184);n.Z=function(e){var n=e.children,t=e.title,c=e.overlayInnerStyle,l=e.placement,o=void 0===l?"top":l,d=(e.color,(0,a.Z)().token);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.Z,{placement:o,overlayInnerStyle:c,color:d.colorPrimary,title:t,children:n})})}},91396:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var r=t(36459),a=t(29439),i=t(72791),c=t(57773),l=t(29751),o=t(35443),d=t(61752),u=t(57689),s=t(5058),h=t(80184),m=function(e){var n=e.buttonEvent,t=(0,u.s0)(),r=(0,i.useState)([{type:"去处理",name:"去处理",btType:"link"}]),c=(0,a.Z)(r,2),l=c[0];c[1];return{columns:[{title:"名字",dataIndex:"name",key:"name",width:100,align:"center",render:function(e,n){return(0,h.jsx)(o.Z,{placement:"top",overlayInnerStyle:{width:200},title:(0,h.jsx)(h.Fragment,{children:e}),children:(0,h.jsx)("div",{className:"truncate",style:{width:100},onClick:function(){return function(e,n){"name"===e&&t("/mycenter",{state:{name:n.name}})}("name",n)},children:e})})}},{title:"年龄",dataIndex:"age",key:"age",width:100,align:"center",render:function(e){return(0,h.jsx)(o.Z,{placement:"top",overlayInnerStyle:{width:"100px"},title:(0,h.jsx)(h.Fragment,{children:e}),children:(0,h.jsx)("div",{className:"truncate",children:e})})}},{title:"体重",dataIndex:"weight",key:"weight",align:"center",render:function(e){return(0,h.jsx)(o.Z,{placement:"top",overlayInnerStyle:{width:"100px"},title:(0,h.jsx)(h.Fragment,{children:e}),children:(0,h.jsx)("div",{className:"truncate",children:e})})}},{title:"身高",dataIndex:"height",key:"height",align:"center",render:function(e){return(0,h.jsx)(o.Z,{placement:"top",overlayInnerStyle:{width:"100px"},title:(0,h.jsx)(h.Fragment,{children:e}),children:(0,h.jsx)("div",{className:"truncate",children:e})})}},{title:"操作",key:"operation",width:160,align:"center",render:function(e,t){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d.Z,{buttonList:l}),(0,h.jsx)(s.Z,{btArr:l,onOpenChange:function(e){},onClickBtn:function(e){return n(e,t)}})]})}}]}},p=t(17195),x=function(e){return(0,p.Z)({url:"/expenses/tabelData",method:"post",data:e})},y=function(){var e=m({buttonEvent:function(){}}).columns,n=(0,i.useState)([]),t=(0,a.Z)(n,2),o=t[0],d=t[1];return(0,r.Z)((0,l.Z)(x,{onSuccess:function(e){d(e.data)}})),(0,h.jsx)("div",{children:(0,h.jsx)(c.Z,{columns:e,data:o})})}}}]);