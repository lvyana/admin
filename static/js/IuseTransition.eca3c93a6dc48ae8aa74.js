"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[2408],{94805:function(e,n,a){var r=a(1413),t=(a(72791),a(36473)),s=a(80184);n.Z=function(e){var n=e.bordered,a=void 0!==n&&n,u=e.children,c=e.style,i=void 0===c?{}:c,l=e.hoverable,o=void 0!==l&&l,d=e.className;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.Z,{hoverable:o,bordered:a,bodyStyle:(0,r.Z)({padding:"16px"},i),className:d,children:u})})}},75569:function(e,n,a){a.r(n);var r=a(29439),t=a(72791),s=a(763),u=a(94805),c=a(11201),i=a(80184);n.default=function(){var e=(0,t.useTransition)(),n=(0,r.Z)(e,2),a=n[0],l=n[1],o=(0,t.useState)(""),d=(0,r.Z)(o,2),v=d[0],h=d[1],f=(0,t.useState)([]),p=(0,r.Z)(f,2),x=p[0],b=p[1],j=(0,t.useCallback)((0,s.debounce)((function(e){l((function(){for(var n=[],a=0;a<15e3;a++)n.push(e);b(n)}))}),500),[]);return(0,i.jsxs)(u.Z,{children:[(0,i.jsxs)("span",{children:["优化后输入框：",(0,i.jsx)(c.Z,{value:v,onChange:function(e){h(e.target.value),j(e.target.value)}})]}),(0,i.jsxs)("span",{children:["输入框：",(0,i.jsx)(c.Z,{value:v,onChange:function(e){h(e.target.value);for(var n=[],a=0;a<15e3;a++)n.push(e.target.value);b(n)}})]}),a?(0,i.jsx)("div",{children:"加载中..."}):x.map((function(e,n){return(0,i.jsx)("div",{children:e},n)}))]})}}}]);