"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[3443],{68792:(e,n,t)=>{t.d(n,{Z:()=>i});t(72791);var r=t(16421),l=t(83298);const s=e=>{let{list:n,styleConfig:t,style:r,bordered:s}=e;const{token:d}=(0,l.Z)(),i={marginBottom:24,background:d.colorFillAlter,borderRadius:d.borderRadiusLG,border:"none"};if("1"===t){return{list:null==n?void 0:n.map((e=>({...e,style:i}))),style:{background:d.colorBgContainer},bordered:!1}}return{list:n,styleConfig:t,style:r,bordered:s}};var d=t(80184);const i=e=>{let{list:n,defaultActiveKey:t,styleConfig:l,bordered:i=!0,onChange:o,expandIcon:a,style:c}=e;const u=s({list:n,styleConfig:l,style:c,bordered:i});return(0,d.jsx)(r.Z,{bordered:u.bordered,defaultActiveKey:t,onChange:o,expandIcon:a,style:u.style,items:u.list})}},4429:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(72791),l=t(94044),s=t.n(l),d=t(61293),i=(t(44350),t(99465),t(6639),t(27862),t(80184));const o=e=>{let{initCode:n="function add(a, b) {\n  return a + b;\n}"}=e;const[t,l]=(0,r.useState)(n);return(0,i.jsx)(s(),{value:t,onValueChange:e=>l(e),highlight:e=>(0,d.highlight)(e,d.languages.js,"jsx"),padding:10,style:{fontSize:14},readOnly:!0,disabled:!0})}},64241:(e,n,t)=>{t.r(n),t.d(n,{default:()=>c});var r=t(72791),l=t(2641),s=t(94805),d=t(68792),i=t(4429),o=t(80184);const a=[{label:"执行机制",children:"浏览器渲染之后执行,不会阻塞渲染",key:"0"},{label:"无参数",children:"每次 reader 都会执行",key:"1"},{label:"空数组 []",children:"组件初始化执行一次",key:"2"},{label:"数组并且有参数 [a,b]",children:"数组内数据变化就会执行",key:"3"},{label:"回调函数中 return 作用",children:(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{children:"1、清理上一次事件绑定,不清理会导致事件多次绑定"}),(0,o.jsx)("div",{children:"2、组件初始化不执行,组件销毁时执行,数据更新时先执行 return 函数"})]}),key:"4"},{label:"示例代码",children:(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i.Z,{initCode:"//闭包陷阱\nfunction Counter() {\n\tconst [count, setCount] = useState(0);\n  \n\tuseEffect(() => {\n\t  const id = setInterval(() => {\n\t\tsetCount(count + 1);\n\t  }, 1000);\n\t  return () => clearInterval(id);\n\t}, []);\n  \n\treturn <h1>{count}</h1>;\n  }\n\n  // 解决方案1\n  useEffect(() => {\n\tconst id = setInterval(() => {\n\t  setCount(count + 1);\n\t}, 1000);\n\treturn () => clearInterval(id);\n  }, [count]);\n  //缺陷\n  // 计时器不准了，因为每次 count 变化时都会销毁并重新计时。\n  // 频繁 生成/销毁 定时器带来了一定性能负担。\n\n  // 完美解决方案\n  useEffect(() => {\n\tconst id = setInterval(() => {\n\t  setCount(c => c + 1);\n\t}, 1000);\n\treturn () => clearInterval(id);\n  }, []);\n  \n  "})}),key:"5"}],c=()=>{const[e,n]=(0,r.useState)(0);(0,r.useEffect)((()=>()=>{})),(0,r.useEffect)((()=>()=>{}),[]),(0,r.useEffect)((()=>()=>{}),[e]);return(0,o.jsxs)(s.Z,{children:[(0,o.jsx)(l.ZP,{type:"link",onClick:()=>{n(e+1)},children:"+1"}),(0,o.jsx)(u,{value:e}),(0,o.jsx)(d.Z,{styleConfig:"1",defaultActiveKey:["0"],list:a})]})},u=e=>{let{value:n}=e;return(0,r.useEffect)((()=>()=>{})),(0,o.jsx)(o.Fragment,{children:n})}}}]);