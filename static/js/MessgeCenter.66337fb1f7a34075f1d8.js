"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[9974],{35443:function(e,n,t){t(72791);var r=t(61431),a=t(83298),i=t(80184);n.Z=function(e){var n=e.children,t=e.title,c=e.overlayInnerStyle,l=e.placement,d=void 0===l?"top":l,o=(e.color,(0,a.Z)().token);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.Z,{placement:d,overlayInnerStyle:c,color:o.colorPrimary,title:t,children:n})})}},91396:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r=t(36459),a=t(29439),i=t(72791),c=t(57773),l=t(29751),d=t(35443),o=t(57689),u=t(5058),s=t(80184),h=function(e){var n=e.buttonEvent,t=(0,o.s0)(),r=(0,i.useState)([{type:"去处理",name:"去处理",btnType:"link"}]),c=(0,a.Z)(r,2),l=c[0];c[1];return{columns:[{title:"名字",dataIndex:"name",key:"name",width:100,align:"center",render:function(e,n){return(0,s.jsx)(d.Z,{placement:"top",overlayInnerStyle:{width:200},title:(0,s.jsx)(s.Fragment,{children:e}),children:(0,s.jsx)("div",{className:"truncate",style:{width:100},onClick:function(){return function(e,n){"name"===e&&t("/mycenter",{state:{name:n.name}})}("name",n)},children:e})})}},{title:"年龄",dataIndex:"age",key:"age",width:100,align:"center",render:function(e){return(0,s.jsx)(d.Z,{placement:"top",overlayInnerStyle:{width:"100px"},title:(0,s.jsx)(s.Fragment,{children:e}),children:(0,s.jsx)("div",{className:"truncate",children:e})})}},{title:"体重",dataIndex:"weight",key:"weight",align:"center",render:function(e){return(0,s.jsx)(d.Z,{placement:"top",overlayInnerStyle:{width:"100px"},title:(0,s.jsx)(s.Fragment,{children:e}),children:(0,s.jsx)("div",{className:"truncate",children:e})})}},{title:"身高",dataIndex:"height",key:"height",align:"center",render:function(e){return(0,s.jsx)(d.Z,{placement:"top",overlayInnerStyle:{width:"100px"},title:(0,s.jsx)(s.Fragment,{children:e}),children:(0,s.jsx)("div",{className:"truncate",children:e})})}},{title:"操作",key:"operation",width:160,align:"center",render:function(e,t){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(u.Z,{btArr:l,onOpenChange:function(e){},onClickBtn:function(e){return n(e,t)}})})}}]}},m=t(87640),p=function(e){return(0,m.ZP)({url:"/expenses/tabelData",method:"post",data:e})},x=function(){var e=h({buttonEvent:function(){}}).columns,n=(0,i.useState)([]),t=(0,a.Z)(n,2),d=t[0],o=t[1];return(0,r.Z)((0,l.Z)(p,{onSuccess:function(e){o(e.data)}})),(0,s.jsx)("div",{children:(0,s.jsx)(c.Z,{columns:e,data:d})})}}}]);