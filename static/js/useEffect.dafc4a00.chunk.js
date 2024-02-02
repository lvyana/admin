"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[3443],{68792:(e,t,n)=>{n.d(t,{Z:()=>i});n(72791);var r=n(16421),l=n(83298);const s=e=>{let{items:t,styleConfig:n,style:r,bordered:s}=e;const{token:d}=(0,l.Z)(),i={marginBottom:24,background:d.colorFillAlter,borderRadius:d.borderRadiusLG,border:"none"};if("1"===n){return{list:null==t?void 0:t.map((e=>({...e,style:i}))),style:{background:d.colorBgContainer},bordered:!1}}return{items:t,styleConfig:n,style:r,bordered:s}};var d=n(80184);const i=e=>{let{...t}=e;const{items:n,styleConfig:l,style:i,bordered:o,...c}=t,a=s({items:n,styleConfig:l,style:i,bordered:o});return(0,d.jsx)(r.Z,{...c,bordered:a.bordered,style:a.style,items:a.list})}},4429:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(72791),l=n(94044),s=n.n(l),d=n(61293),i=(n(44350),n(99465),n(6639),n(27862),n(80184));const o=e=>{let{initCode:t="function add(a, b) {\n  return a + b;\n}"}=e;const[n,l]=(0,r.useState)(t);return(0,i.jsx)(s(),{value:n,onValueChange:e=>l(e),highlight:e=>(0,d.highlight)(e,d.languages.js,"jsx"),padding:10,style:{fontSize:14},readOnly:!0,disabled:!0})}},64241:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var r=n(72791),l=n(2641),s=n(94805),d=n(68792),i=n(4429),o=n(80184);const c=[{label:"执行机制",children:"浏览器渲染之后执行,不会阻塞渲染",key:"0"},{label:"无参数",children:"每次 reader 都会执行",key:"1"},{label:"空数组 []",children:"组件初始化执行一次",key:"2"},{label:"数组并且有参数 [a,b]",children:"数组内数据变化就会执行",key:"3"},{label:"回调函数中 return 作用",children:(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{children:"1、清理上一次事件绑定,不清理会导致事件多次绑定"}),(0,o.jsx)("div",{children:"2、组件初始化不执行,组件销毁时执行,数据更新时先执行 return 函数"})]}),key:"4"},{label:"示例代码",children:(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i.Z,{initCode:"//闭包陷阱\nfunction Counter() {\n\tconst [count, setCount] = useState(0);\n  \n\tuseEffect(() => {\n\t  const id = setInterval(() => {\n\t\tsetCount(count + 1);\n\t  }, 1000);\n\t  return () => clearInterval(id);\n\t}, []);\n  \n\treturn <h1>{count}</h1>;\n  }\n\n  // 解决方案1\n  useEffect(() => {\n\tconst id = setInterval(() => {\n\t  setCount(count + 1);\n\t}, 1000);\n\treturn () => clearInterval(id);\n  }, [count]);\n  //缺陷\n  // 计时器不准了，因为每次 count 变化时都会销毁并重新计时。\n  // 频繁 生成/销毁 定时器带来了一定性能负担。\n\n  // 完美解决方案\n  useEffect(() => {\n\tconst id = setInterval(() => {\n\t  setCount(c => c + 1);\n\t}, 1000);\n\treturn () => clearInterval(id);\n  }, []);\n  \n  "})}),key:"5"}],a=()=>{const[e,t]=(0,r.useState)(0);(0,r.useEffect)((()=>()=>{})),(0,r.useEffect)((()=>()=>{}),[]),(0,r.useEffect)((()=>()=>{}),[e]);return(0,o.jsxs)(s.Z,{children:[(0,o.jsx)(l.ZP,{type:"link",onClick:()=>{t(e+1)},children:"+1"}),(0,o.jsx)(u,{value:e}),(0,o.jsx)(d.Z,{styleConfig:"1",defaultActiveKey:["0"],items:c})]})},u=e=>{let{value:t}=e;return(0,r.useEffect)((()=>()=>{})),(0,o.jsx)(o.Fragment,{children:t})}}}]);