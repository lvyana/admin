"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[896],{30221:(e,t,n)=>{n.d(t,{A:()=>c});n(65043);var a=n(96651),r=n(96029),l=n(70579);const c=e=>{let{...t}=e;const{token:n}=(0,r.A)(),{children:c,color:i=n.colorPrimary,...d}=t;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(a.A,{...d,color:i,children:c})})}},90207:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var a=n(65043),r=n(41496),l=n(41553),c=n(30221),i=n(73216),d=n(15315),s=n(70579);const h=e=>{let{buttonEvent:t}=e;const n=(0,i.Zp)(),[r,l]=(0,a.useState)([{label:"去处理",key:"1"}]);return{columns:[{title:"名字",dataIndex:"name",key:"name",width:100,align:"center",render:(e,t)=>(0,s.jsx)(c.A,{placement:"top",overlayInnerStyle:{width:200},title:(0,s.jsx)(s.Fragment,{children:e}),children:(0,s.jsx)("div",{className:"truncate",style:{width:100},onClick:()=>((e,t)=>{"name"===e&&n("/mycenter",{state:{name:t.name}})})("name",t),children:e})})},{title:"年龄",dataIndex:"age",key:"age",width:100,align:"center",render:e=>(0,s.jsx)(c.A,{placement:"top",overlayInnerStyle:{width:"100px"},title:(0,s.jsx)(s.Fragment,{children:e}),children:(0,s.jsx)("div",{className:"truncate",children:e})})},{title:"体重",dataIndex:"weight",key:"weight",align:"center",render:e=>(0,s.jsx)(c.A,{placement:"top",overlayInnerStyle:{width:"100px"},title:(0,s.jsx)(s.Fragment,{children:e}),children:(0,s.jsx)("div",{className:"truncate",children:e})})},{title:"身高",dataIndex:"height",key:"height",align:"center",render:e=>(0,s.jsx)(c.A,{placement:"top",overlayInnerStyle:{width:"100px"},title:(0,s.jsx)(s.Fragment,{children:e}),children:(0,s.jsx)("div",{className:"truncate",children:e})})},{title:"操作",key:"operation",width:160,align:"center",render:(e,t)=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(d.A,{menu:{items:r},onOpenChange:e=>{}})})}]}};var o=n(39428);const m=e=>(0,o.Ay)({url:"/seachForm/tabelData",method:"post",data:e}),x=()=>{const{columns:e}=h({buttonEvent:()=>{}}),[t,n]=(0,a.useState)([]),{}=(0,l.A)(m,{onSuccess:e=>{n(e.data)}});return(0,s.jsx)("div",{children:(0,s.jsx)(r.A,{columns:e,dataSource:t})})}}}]);