"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[6932],{64290:(e,t,n)=>{n.d(t,{Z:()=>s});n(72791);var a=n(58729),r=n(80184);const s=e=>{let{...t}=e;const{style:n,showTotal:s=!0,...l}=t;return(0,r.jsx)(a.Z,{...l,style:{float:"right",...n},showTotal:e=>{if(s)return"总 ".concat(e," 条")}})}},35443:(e,t,n)=>{n.d(t,{Z:()=>l});n(72791);var a=n(42378),r=n(83298),s=n(80184);const l=e=>{let{...t}=e;const{token:n}=(0,r.Z)(),{children:l,color:i=n.colorPrimary,...c}=t;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.Z,{...c,color:i,children:l})})}},90501:(e,t,n)=>{n.d(t,{n:()=>a});const a=(e,t,n)=>{const a=JSON.parse(JSON.stringify(e));return a.splice(n,0,...a.splice(t,1)),a}},37197:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Q});var a=n(72791),r=n(83062),s=n(2641),l=n(35443),i=n(5058),c=n(57689),o=n(11730),d=n(66106),u=n(30914),p=n(80184);const h=e=>{let{children:t,onSubmit:n,onClose:a}=e;return(0,p.jsxs)("div",{className:"p-2 w-64",children:[(0,p.jsx)("div",{className:"mb-2",children:t}),(0,p.jsxs)(d.Z,{justify:"space-between",children:[(0,p.jsx)(u.Z,{children:(0,p.jsx)(s.ZP,{type:"default",onClick:a,children:"清空"})}),(0,p.jsx)(u.Z,{children:(0,p.jsx)(s.ZP,{type:"primary",onClick:n,children:"确定"})})]})]})};var m=n(61126),x=n(25285);const g=e=>{let{type:t,form:n,selectedKeys:r,setSelectedKeys:s,confirm:l,visible:i,dataIndex:c,onSearch:o,formItemParams:d}=e;const u=e=>{Array.isArray(e)?s(e):s([e])},g=e=>{s(e.target.value?[e.target.value]:[])},y=(0,a.useRef)();(0,a.useEffect)((()=>{i&&(Array.isArray(n.current[c])?(s(n.current[c]||[]),y.current="isArray"):s(n.current[c]?[n.current[c]]:[]))}),[i]);const f=(0,a.useMemo)((()=>"treeSelect"===t?(0,m.Z)({value:r,...d,onChange:u}):"input"===t?(0,x.Np)({value:r[0],...d,onChange:g}):void 0),[r,d]);return(0,p.jsx)(h,{onClose:()=>{n.current[c]=[],s([]),l(),o()},onSubmit:()=>{"isArray"===y.current?n.current[c]=r:n.current[c]=r[0],s(r),l(),o()},children:f})},y=e=>{let{type:t,dataIndex:n,onSearch:a,form:r,formItemParams:s}=e;return{filterDropdown:e=>{let{selectedKeys:l,setSelectedKeys:i,confirm:c,visible:o}=e;return(0,p.jsx)(g,{type:t,form:r,dataIndex:n,selectedKeys:l,setSelectedKeys:i,confirm:c,visible:o,onSearch:a,formItemParams:s})},filterIcon:e=>(0,p.jsx)(o.Z,{style:{color:f(r.current[n])}})}},f=e=>Array.isArray(e)?null!=e&&e.length?"#1890ff":void 0:e?"#1890ff":void 0,j=e=>{let{buttonEvent:t,columnsSeachValue:n}=e;const r=(0,c.s0)(),o=(e,t)=>{"name"===e&&r("/mycenter",{state:{name:t.name}})},[d,u]=(0,a.useState)([{label:(0,p.jsx)("div",{children:"修改"}),key:"11"},{label:(0,p.jsx)("div",{children:"删除"}),key:"22"}]);return{columns:[{title:"名字",dataIndex:"name",key:"name",...y({type:"treeSelect",dataIndex:"name",onSearch:()=>t("name"),form:n,formItemParams:{multiple:!0,treeData:[{title:"placeholder",value:"light"},{title:"placeholder1",value:"light1"}],fieldNames:{label:"title",value:"value"},placeholder:"请选择名字"}}),width:100,align:"center",render:(e,t)=>(0,p.jsx)(l.Z,{placement:"top",overlayInnerStyle:{width:200},title:(0,p.jsx)(p.Fragment,{children:e}),children:(0,p.jsx)(s.ZP,{type:"link",style:{width:100},onClick:()=>o("name",t),children:(0,p.jsx)("div",{className:"truncate",style:{width:70},children:e})})})},{title:"年龄",dataIndex:"age",key:"age",width:100,align:"center",...y({type:"input",dataIndex:"age",onSearch:()=>t("age"),form:n,formItemParams:{placeholder:"请输入年龄"}}),render:e=>(0,p.jsx)(l.Z,{placement:"top",overlayInnerStyle:{width:"100px"},title:(0,p.jsx)(p.Fragment,{children:e}),children:(0,p.jsx)("div",{className:"truncate",children:e})})},{title:"体重",dataIndex:"weight",key:"weight",align:"center",render:e=>(0,p.jsx)(l.Z,{placement:"top",overlayInnerStyle:{width:"100px"},title:(0,p.jsx)(p.Fragment,{children:e}),children:(0,p.jsx)("div",{className:"truncate",children:e})})},{title:"身高",dataIndex:"height",key:"height",align:"center",render:e=>(0,p.jsx)(l.Z,{placement:"top",overlayInnerStyle:{width:"100px"},title:(0,p.jsx)(p.Fragment,{children:e}),children:(0,p.jsx)("div",{className:"truncate",children:e})})},{title:"备注",dataIndex:"remark",key:"remark",align:"center",render:e=>(0,p.jsx)(l.Z,{placement:"top",overlayInnerStyle:{width:"180px"},title:(0,p.jsx)(p.Fragment,{children:e}),children:(0,p.jsx)("div",{className:"truncate",children:e})})},{title:"操作",key:"operation",width:80,align:"center",render:(e,t)=>(0,p.jsx)(i.Z,{menu:{items:d,onClick:e=>o(e.key,t)},onOpenChange:e=>{}})}]}};var v=n(57773),k=n(94805),S=n(70885),Z=n(10930),b=n(40447);const C={position:"fixed",top:138,right:200,zIndex:10,transform:"translate(-50%, 0)"},I=e=>{let{children:t}=e;const n=(0,a.useRef)(),r=(0,a.useRef)(),[l,i]=(0,a.useState)(!0);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(Z.E.div,{onDrag:(e,t)=>{n.current=t.offset,r.current=t.point,e.preventDefault(),e.stopPropagation()},onClick:()=>{if(n.current)return setTimeout((()=>{n.current=null}),100);i(!1)},drag:!0,dragElastic:0,dragConstraints:{top:-50,left:-200,right:50,bottom:200},style:{display:l?"block":"none",textAlign:"center",...C},children:(0,p.jsx)(s.ZP,{shape:"circle",icon:(0,p.jsx)(o.Z,{})})}),!l&&(0,p.jsx)("div",{style:{position:"fixed",top:80,left:0,width:"100%",zIndex:10,padding:20},children:(0,p.jsx)(Z.E.div,{style:{opacity:0},animate:{opacity:1,y:"auto"},transition:{ease:"linear",duration:.3},children:(0,p.jsxs)(k.Z,{className:"shadow-2xl",children:[t,(0,p.jsx)("div",{children:(0,p.jsx)(s.ZP,{type:"link",onClick:()=>{i(!0)},style:{position:"sticky",bottom:0,left:"50%",transform:"translate(-50%, 0)"},icon:(0,p.jsx)(b.Z,{})})})]})})})]})};var P=n(75202);const N=e=>{let{formProps:t,formList:n}=e;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(P.r6,{MaxWidth:1540,children:(0,p.jsx)(I,{children:(0,p.jsx)(S.Z,{formProps:t,formList:n})})}),(0,p.jsx)(P.go,{MinWidth:1540,children:(0,p.jsx)(k.Z,{bodyStyle:{paddingBottom:0},children:(0,p.jsx)(S.Z,{formProps:t,formList:n})})})]})};var w=n(3496);const D=e=>{let{formProps:t,onFinish:n}=e;const{statusData:r}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const[t,n]=(0,a.useState)([]);(0,a.useDebugValue)(t),(0,a.useEffect)((()=>(r(),()=>{n([])})),e);const r=async()=>{try{const e=await(0,w.i)(),{data:t}=e;n(t)}catch(e){}};return{statusData:t}}(),s=[{type:"input",key:2,span:6,formItemProps:{name:"age",label:"年龄",labelCol:{span:6},wrapperCol:{span:18}},comConfig:{placeholder:"请输入年龄"}},{type:"select",key:3,span:6,comConfig:{options:r,placeholder:"请选择状态",fieldNames:{label:"name",value:"status"}},formItemProps:{name:"status",label:"状态",labelCol:{span:6},wrapperCol:{span:18}}},{type:"button",key:14,span:6,comConfig:{options:[{comConfig:{type:"primary",name:"搜索",icon:"icon-sousuo"},tag:"subimt"},{comConfig:{name:"重置",icon:"icon-zhongzhi",className:"ml-1"},tag:"onReset"}],style:{marginLeft:"10px"},onClick:n}}];return(0,p.jsx)(N,{formProps:t,formList:s})};var F=n(64290),K=n(92414),A=n(89862),z=n(54341),E=n(90501);const T=e=>{let{initData:t,checkedKeys:n,updateInitData:a,updateCheckedKeys:r}=e;return(0,p.jsx)(z.Z,{className:"draggable-tree",checkedKeys:n,onCheck:e=>{r(e)},draggable:!0,blockNode:!0,onDragEnter:e=>{},onDrop:e=>{const n=t.findIndex((t=>t.headerFieldId===e.dragNodesKeys[0]));if((-1!==e.dropPosition||0!==n)&&e.dropPosition!==n)if(-1===e.dropPosition){let e=(0,E.n)(t,n,0);a(e)}else if(e.dropPosition>n){let r=(0,E.n)(t,n,e.dropPosition-1);a(r)}else if(e.dropPosition<n){let r=(0,E.n)(t,n,e.dropPosition);a(r)}},treeData:t,fieldNames:{title:"headerFieldName",key:"headerFieldId",children:"children"},checkable:!0})};var R=n(15255),L=n(87175);const O=(e,t)=>t.reduce(((t,n)=>n.type===e?n.headerField:t),[]),V=e=>{let{type:t,onCallbackData:n}=e;const{headerConfigItem:r,checkedKeys:s}=(e=>{const t=(0,R.CG)(L.RB),[n,r]=(0,a.useState)([]),[s,l]=(0,a.useState)([]);return(0,a.useEffect)((()=>{const n=O(e,t);r(n);const a=(e=>e.reduce(((e,t)=>"true"===t.headerSelected?[...e,t.headerFieldId]:e),[]))(n);l(a)}),[t,e]),{headerConfigItem:n,checkedKeys:s}})(t);(0,a.useEffect)((()=>{i(r),o(s)}),[r,s]);const[l,i]=(0,a.useState)([]),[c,o]=(0,a.useState)([]),[d,u]=(0,a.useState)(!1),[h,m]=(0,a.useState)(!1);(0,a.useEffect)((()=>{0===c.length?x("0"):l.length===c.length?x("2"):x("1")}),[c]);const x=e=>{"0"===e?(u(!1),m(!1)):"1"===e?(u(!0),m(!1)):"2"===e&&(u(!1),m(!0))};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(A.Z,{indeterminate:d,onChange:e=>{if(u(!1),m(e.target.checked),e.target.checked){const e=l.reduce(((e,t)=>[...e,t.headerFieldId]),[]);o(e)}else o([])},checked:h,children:"全选"}),(0,p.jsx)(T,{initData:l,checkedKeys:c,updateInitData:e=>{i(e),n(e,c)},updateCheckedKeys:e=>{o(e)}})]})},M=(0,a.memo)(V);var B=n(51283);const G=e=>{let{children:t,type:n}=e;const[r,l]=(0,a.useState)(!1),i=(0,a.useCallback)((()=>{l(!1)}),[r]),[c,o]=(0,a.useState)(!1);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(d.Z,{justify:"space-between",children:[(0,p.jsx)(u.Z,{children:t}),(0,p.jsx)(u.Z,{children:(0,p.jsx)(d.Z,{children:(0,p.jsx)(u.Z,{children:(0,p.jsx)(s.ZP,{type:"link",icon:(0,p.jsx)(K.Z,{}),onClick:()=>{l(!0)}})})})})]}),(0,p.jsxs)(B.Z,{title:"编辑表头",open:r,onOk:async()=>{o(!0);try{i()}catch(e){}o(!1)},onCancel:()=>{i()},confirmLoading:c,children:[(0,p.jsx)(M,{type:n,onCallbackData:(e,t)=>{}})," "]})]})};var J=n(51058);const W=()=>{const[e,t]=(0,a.useState)([]),[n,r]=(0,a.useState)(0),[s,l]=(0,a.useState)(!1);return{expensesTableData:e,total:n,getTabelData:async e=>{try{l(!0);const n=await(e=>(0,J.ZP)({url:"/expenses/tabelData",method:"post",data:e}))({...e}),{data:a,total:s}=n;t(a),r(s)}catch(e){}l(!1)},loading:s}};var _=n(46988),H=n(12606);const q=e=>{const t=(0,c.TH)(),n=e||t.pathname,r=(0,R.TL)(),s=(0,R.CG)(H.FV),l=(0,a.useMemo)((()=>s),[]),i=["/antd/expenses"];return{initKeepAliveData:l,setKeepAliveData:e=>{i.indexOf(n)>-1&&("/antd/expenses"===n?r((0,H.x7)(e)):_.ZP.error("没有匹配到缓存path"))}}},Q=()=>{const e=(0,a.useRef)({name:[],age:""}),{columns:t}=j({buttonEvent:(e,t)=>{["name","age"].indexOf(e)>-1&&(u.current.pageNum=1,h("subimt"))},columnsSeachValue:e}),[n]=r.Z.useForm(),{expensesTableData:s,total:l,getTabelData:i,loading:c}=W(),{initKeepAliveData:o,setKeepAliveData:d}=q(),u=(0,a.useRef)({pageSize:(null==o?void 0:o.pageSize)||10,pageNum:(null==o?void 0:o.pageNum)||1});(0,a.useEffect)((()=>{const{pageNum:t,pageSize:a,name:r,age:s,status:l}=o||{};n.setFieldsValue({age:s,status:l}),e.current={name:r||e.current.name,age:s||e.current.age},u.current={pageNum:t||u.current.pageNum,pageSize:a||u.current.pageSize},h()}),[]);const h=t=>{"onReset"===t&&n.resetFields();let a=n.getFieldsValue();(e=>{d(e)})({...a,...u.current,...e.current}),i({...a,...u.current,...e.current})};return(0,p.jsxs)("div",{children:[(0,p.jsx)(D,{formProps:{form:n},onFinish:h}),(0,p.jsxs)(k.Z,{bodyStyle:{marginTop:"10px"},children:[(0,p.jsx)(G,{type:"expenses"}),(0,p.jsx)(v.Z,{rowKey:"key",columns:t,dataSource:s,loading:c,scroll:{x:"100%"}}),(0,p.jsx)(F.Z,{className:"mt-4",total:l,pageSize:u.current.pageSize,current:u.current.pageNum,onChange:(e,t)=>{u.current={pageNum:e,pageSize:t},h()}})]})]})}}}]);