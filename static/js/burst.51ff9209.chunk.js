"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[4227],{13781:(e,r,n)=>{n.r(r),n.d(r,{default:()=>x});var t=n(65043),l=n(87021),s=n(47419),a=n(11645),c=n(76566),i=n(70579);const o=e=>{let{className:r,config:n,readerComponent:l}=e;const{data:s,itemHeight:a,visibleCount:c,key:o,preloadCount:u=6}=n,[d,h]=(0,t.useState)(0),[p,m]=(0,t.useState)(c),f=(0,t.useRef)(null),x=(0,t.useMemo)((()=>s.length*a),[s,a]),g=(0,t.useMemo)((()=>c*a),[c,a]),v=(0,t.useCallback)((()=>{var e,r;const n=null!==(e=null===(r=f.current)||void 0===r?void 0:r.scrollTop)&&void 0!==e?e:0,t=Math.floor(n/a),l=Math.min(t+c,s.length);h(t),m(l)}),[s.length,a,c]);return(0,i.jsx)("div",{className:r,ref:f,style:{height:g,overflowY:"auto"},onScroll:v,children:(0,i.jsx)("div",{style:{height:x},children:s.slice(d,p+u).map((e=>(0,i.jsx)("div",{style:{transform:"translateY(".concat(d*a,"px)")},children:l(e)},e[o])))})})};let u;const d=(e,r)=>{let{readerComponent:n,config:l}=e;const{arr:s,eachRenderNum:a,key:c}=l,o=(0,t.useRef)(0),[d,h]=(0,t.useState)([]),p=(0,t.useRef)(!1),m=Math.ceil(s.length/a),f=(0,t.useCallback)((()=>{if(p.current)return;if(o.current>=m)return window.cancelIdleCallback(u);const e=s.slice(o.current*a,(o.current+1)*a);h((r=>[...r,...e])),o.current+=1,u=requestIdleCallback((()=>{f()}),{timeout:3e3})}),[]);return(0,t.useImperativeHandle)(r,(()=>({onSchedule:()=>{p.current=!1,f()},reset:()=>{p.current=!0,o.current=0,h([])}}))),(0,i.jsx)("div",{style:{height:500,overflow:"auto"},children:d.map((e=>(0,i.jsx)(t.Fragment,{children:n(e)},e[c])))})},h=()=>(0,t.forwardRef)(d);let p=Array.from({length:4e4},((e,r)=>r)).map((e=>({name:"张三"+e,age:e,sex:e%2==0?"男":"女"})));const m=h(),f=e=>{let{name:r,age:n,sex:t}=e;return(0,i.jsxs)("div",{style:{height:50,border:"1px solid blue"},children:[(0,i.jsxs)("span",{children:[" 姓名: ",r]}),(0,i.jsxs)("span",{children:["年龄:",n]}),(0,i.jsxs)("span",{children:[" 性别:",t]})]})},x=()=>{const e=(0,t.useRef)(null);return(0,i.jsxs)(c.A,{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(l.Ay,{type:"primary",onClick:()=>{var r;null===(r=e.current)||void 0===r||r.onSchedule()},children:"优化渲染"}),(0,i.jsx)(l.Ay,{type:"primary",onClick:()=>{var r;null===(r=e.current)||void 0===r||r.reset()},children:"清除数据"})]}),(0,i.jsxs)(s.A,{gutter:8,children:[(0,i.jsx)(a.A,{span:12,children:(0,i.jsx)(m,{ref:e,config:{arr:p,eachRenderNum:400,key:"age"},readerComponent:f})}),(0,i.jsx)(a.A,{span:12,children:(0,i.jsx)(o,{className:"mt-8",config:{data:p,itemHeight:50,visibleCount:10,key:"age",preloadCount:2},readerComponent:f})})]})]})}}}]);