"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[7591],{14532:(e,t,n)=>{n.d(t,{A:()=>i});n(65043);var r=n(27371),l=n(96029);const s=e=>{let{items:t,styleConfig:n,style:r,bordered:s}=e;const{token:d}=(0,l.A)(),i={marginBottom:24,background:d.colorFillAlter,borderRadius:d.borderRadiusLG,border:"none"};if("1"===n){return{list:null==t?void 0:t.map((e=>({...e,style:i}))),style:{background:d.colorBgContainer},bordered:!1}}return{items:t,styleConfig:n,style:r,bordered:s}};var d=n(70579);const i=e=>{let{...t}=e;const{items:n,styleConfig:l,style:i,bordered:o,...c}=t,a=s({items:n,styleConfig:l,style:i,bordered:o});return(0,d.jsx)(r.A,{...c,bordered:a.bordered,style:a.style,items:a.list})}},62560:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(65043),l=n(91228),s=n.n(l),d=n(82999),i=(n(83241),n(53636),n(15575),n(15696),n(70579));const o=e=>{let{initCode:t="function add(a, b) {\n  return a + b;\n}"}=e;const[n,l]=(0,r.useState)(t);return(0,i.jsx)(s(),{value:n,onValueChange:e=>l(e),highlight:e=>(0,d.highlight)(e,d.languages.js,"jsx"),padding:10,style:{fontSize:14},readOnly:!0,disabled:!0})}},11327:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var r=n(65043),l=n(87021),s=n(76566),d=n(14532),i=n(62560),o=n(70579);const c=[{label:"执行机制",children:"浏览器渲染之后执行,不会阻塞渲染",key:"0"},{label:"无参数",children:"每次 reader 都会执行",key:"1"},{label:"空数组 []",children:"组件初始化执行一次",key:"2"},{label:"数组并且有参数 [a,b]",children:"数组内数据变化就会执行",key:"3"},{label:"回调函数中 return 作用",children:(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{children:"1、清理上一次事件绑定,不清理会导致事件多次绑定"}),(0,o.jsx)("div",{children:"2、组件初始化不执行,组件销毁时执行,数据更新时先执行 return 函数"})]}),key:"4"},{label:"示例代码",children:(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i.A,{initCode:"//闭包陷阱\nfunction Counter() {\n\tconst [count, setCount] = useState(0);\n  \n\tuseEffect(() => {\n\t  const id = setInterval(() => {\n\t\tsetCount(count + 1);\n\t  }, 1000);\n\t  return () => clearInterval(id);\n\t}, []);\n  \n\treturn <h1>{count}</h1>;\n  }\n\n  // 解决方案1\n  useEffect(() => {\n\tconst id = setInterval(() => {\n\t  setCount(count + 1);\n\t}, 1000);\n\treturn () => clearInterval(id);\n  }, [count]);\n  //缺陷\n  // 计时器不准了，因为每次 count 变化时都会销毁并重新计时。\n  // 频繁 生成/销毁 定时器带来了一定性能负担。\n\n  // 完美解决方案\n  useEffect(() => {\n\tconst id = setInterval(() => {\n\t  setCount(c => c + 1);\n\t}, 1000);\n\treturn () => clearInterval(id);\n  }, []);\n  \n  "})}),key:"5"}],a=()=>{const[e,t]=(0,r.useState)(0);(0,r.useEffect)((()=>()=>{})),(0,r.useEffect)((()=>()=>{}),[]),(0,r.useEffect)((()=>()=>{}),[e]);return(0,o.jsxs)(s.A,{children:[(0,o.jsx)(l.Ay,{type:"link",onClick:()=>{t(e+1)},children:"+1"}),(0,o.jsx)(u,{value:e}),(0,o.jsx)(d.A,{styleConfig:"1",defaultActiveKey:["0"],items:c})]})},u=e=>{let{value:t}=e;return(0,r.useEffect)((()=>()=>{})),(0,o.jsx)(o.Fragment,{children:t})}}}]);