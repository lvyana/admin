"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[5103],{33516:(e,t,a)=>{a.d(t,{A:()=>l});a(65043);var n=a(68292),r=a(70579);const l=e=>{let{...t}=e;const{style:a,showTotal:l=!0,...s}=t;return(0,r.jsx)(n.A,{...s,style:{float:"right",...a},showTotal:e=>{if(l)return"总 ".concat(e," 条")}})}},71860:(e,t,a)=>{a.d(t,{A:()=>m});var n=a(65043),r=a(10688),l=a(87021),s=a(62058),c=a(77550),i=a(45591),o=a(76566),d=a(70579);const u={position:"fixed",top:138,right:200,zIndex:10,transform:"translate(-50%, 0)"},h=e=>{let{children:t}=e;const a=(0,n.useRef)(),r=(0,n.useRef)(),[h,p]=(0,n.useState)(!0);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(c.P.div,{onDrag:(e,t)=>{a.current=t.offset,r.current=t.point,e.preventDefault(),e.stopPropagation()},onClick:()=>{if(a.current)return setTimeout((()=>{a.current=null}),100);p(!1)},drag:!0,dragElastic:0,dragConstraints:{top:-50,left:-200,right:50,bottom:200},style:{display:h?"block":"none",textAlign:"center",...u},children:(0,d.jsx)(l.Ay,{shape:"circle",icon:(0,d.jsx)(s.A,{})})}),!h&&(0,d.jsx)("div",{style:{position:"fixed",top:80,left:0,width:"100%",zIndex:10,padding:20},children:(0,d.jsx)(c.P.div,{style:{opacity:0},animate:{opacity:1,y:"auto"},transition:{ease:"linear",duration:.3},children:(0,d.jsxs)(o.A,{className:"shadow-2xl",children:[t,(0,d.jsx)("div",{children:(0,d.jsx)(l.Ay,{type:"link",onClick:()=>{p(!0)},style:{position:"sticky",bottom:0,left:"50%",transform:"translate(-50%, 0)"},icon:(0,d.jsx)(i.A,{})})})]})})})]})};var p=a(13554);const m=e=>{let{formProps:t,formList:a}=e;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(p.mW,{MaxWidth:1540,children:(0,d.jsx)(h,{children:(0,d.jsx)(r.A,{formProps:t,formList:a})})}),(0,d.jsx)(p.UE,{MinWidth:1540,children:(0,d.jsx)(o.A,{styles:{body:{paddingBottom:0}},children:(0,d.jsx)(r.A,{formProps:t,formList:a})})})]})}},31852:(e,t,a)=>{a.d(t,{A:()=>p});var n=a(65043),r=a(62058),l=a(47419),s=a(11645),c=a(87021),i=a(70579);const o=e=>{let{children:t,onSubmit:a,onClose:n}=e;return(0,i.jsxs)("div",{className:"p-2 w-64",children:[(0,i.jsx)("div",{className:"mb-2",children:t}),(0,i.jsxs)(l.A,{justify:"space-between",children:[(0,i.jsx)(s.A,{children:(0,i.jsx)(c.Ay,{type:"default",onClick:n,children:"清空"})}),(0,i.jsx)(s.A,{children:(0,i.jsx)(c.Ay,{type:"primary",onClick:a,children:"确定"})})]})]})};var d=a(13720),u=a(34584);const h=e=>{let{type:t,value:a,selectedKeys:r,setSelectedKeys:l,confirm:s,visible:c,onSearch:h,formItemParams:p}=e;const m=(0,n.useRef)(),g=e=>{Array.isArray(e)?l(e):l([e]),m.current=e},y=e=>{l(e.target.value?[e.target.value]:[]),m.current=e.target.value},x=(0,n.useRef)();(0,n.useEffect)((()=>{c&&(Array.isArray(a)?(l(a||[]),x.current="isArray"):l(a?[a]:[]))}),[c]);const f=(0,n.useMemo)((()=>"treeSelect"===t?(0,d.A)({...p,value:r,onChange:g}):"input"===t?(0,u.V4)({...p,value:r[0],onChange:y}):void 0),[r,p]);return(0,i.jsx)(o,{onClose:()=>{l([]),s(),"isArray"===x.current?h([]):h(void 0)},onSubmit:()=>{h(m.current),l(r),s()},children:f})},p=e=>{let{type:t,value:a,onSearch:n,formItemParams:l}=e;return{filterDropdown:e=>{let{...r}=e;return(0,i.jsx)(h,{...r,type:t,value:a,onSearch:n,formItemParams:l})},filterIcon:e=>(0,i.jsx)(r.A,{style:{color:m(a)}})}},m=e=>Array.isArray(e)?null!=e&&e.length?"#1890ff":void 0:e?"#1890ff":void 0},30221:(e,t,a)=>{a.d(t,{A:()=>s});a(65043);var n=a(96651),r=a(96029),l=a(70579);const s=e=>{let{...t}=e;const{token:a}=(0,r.A)(),{children:s,color:c=a.colorPrimary,...i}=t;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(n.A,{...i,color:c,children:s})})}},57802:(e,t,a)=>{a.d(t,{G:()=>l});var n=a(65043),r=a(49834);const l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const[t,a]=(0,n.useState)([]);(0,n.useDebugValue)(t),(0,n.useEffect)((()=>(l(),()=>{a([])})),e);const l=async()=>{try{const e=await(0,r.h)(),{data:t}=e;a(t)}catch(e){}};return{statusData:t}}},87315:(e,t,a)=>{a.d(t,{j:()=>n});const n=(e,t,a)=>{const n=JSON.parse(JSON.stringify(e));return n.splice(a,0,...n.splice(t,1)),n}},89131:(e,t,a)=>{a.r(t),a.d(t,{default:()=>J});var n=a(65043),r=a(34496),l=a(87021),s=a(30221),c=a(15315),i=a(73216),o=a(31852),d=a(70579);const u=e=>{let{buttonEvent:t,columnsSeachValue:a}=e;const r=(0,i.Zp)(),u=(e,t)=>{"name"===e&&r("/mycenter",{state:{name:t.name}})},[h,p]=(0,n.useState)([{label:(0,d.jsx)("div",{children:"修改"}),key:"11"},{label:(0,d.jsx)("div",{children:"删除"}),key:"22"}]);return{columns:[{title:"名字",dataIndex:"name",key:"name",...(0,o.A)({type:"treeSelect",value:a.current.name,onSearch:e=>t({type:"name",value:e}),formItemParams:{multiple:!0,treeData:[{title:"placeholder",value:"light"},{title:"placeholder1",value:"light1"}],fieldNames:{label:"title",value:"value"},placeholder:"请选择名字"}}),width:100,align:"center",render:(e,t)=>(0,d.jsx)(s.A,{placement:"top",overlayInnerStyle:{width:200},title:(0,d.jsx)(d.Fragment,{children:e}),children:(0,d.jsx)(l.Ay,{type:"link",style:{width:100},onClick:()=>u("name",t),children:(0,d.jsx)("div",{className:"truncate",style:{width:70},children:e})})})},{title:"年龄",dataIndex:"age",key:"age",width:100,align:"center",render:e=>(0,d.jsx)(s.A,{placement:"top",overlayInnerStyle:{width:"100px"},title:(0,d.jsx)(d.Fragment,{children:e}),children:(0,d.jsx)("div",{className:"truncate",children:e})})},{title:"体重",dataIndex:"weight",key:"weight",align:"center",render:e=>(0,d.jsx)(s.A,{placement:"top",overlayInnerStyle:{width:"100px"},title:(0,d.jsx)(d.Fragment,{children:e}),children:(0,d.jsx)("div",{className:"truncate",children:e})})},{title:"身高",dataIndex:"height",key:"height",align:"center",...(0,o.A)({type:"input",value:a.current.height,onSearch:e=>t({type:"height",value:e}),formItemParams:{placeholder:"请输入身高"}}),render:e=>(0,d.jsx)(s.A,{placement:"top",overlayInnerStyle:{width:"100px"},title:(0,d.jsx)(d.Fragment,{children:e}),children:(0,d.jsx)("div",{className:"truncate",children:e})})},{title:"备注",dataIndex:"remark",key:"remark",align:"center",render:e=>(0,d.jsx)(s.A,{placement:"top",overlayInnerStyle:{width:"180px"},title:(0,d.jsx)(d.Fragment,{children:e}),children:(0,d.jsx)("div",{className:"truncate",children:e})})},{title:"操作",key:"operation",width:80,align:"center",render:(e,t)=>(0,d.jsx)(c.A,{menu:{items:h,onClick:e=>u(e.key,t)},onOpenChange:e=>{}})}]}};var h=a(41496),p=a(76566),m=a(71860),g=a(57802);const y=e=>{let{formProps:t,submit:a,reset:n}=e;const{statusData:r}=(0,g.G)(),l=[{type:"input",key:2,span:6,formItemProps:{name:"age",label:"年龄",labelCol:{span:6},wrapperCol:{span:18}},comConfig:{placeholder:"请输入年龄"}},{type:"select",key:3,span:6,comConfig:{options:r,placeholder:"请选择状态",fieldNames:{label:"name",value:"status"}},formItemProps:{name:"status",label:"状态",labelCol:{span:6},wrapperCol:{span:18}}},{type:"button",key:14,span:6,comConfig:{options:[{comConfig:{type:"primary",name:"搜索",icon:"icon-sousuo",onClick:a},tag:"subimt"},{comConfig:{name:"重置",icon:"icon-zhongzhi",className:"ml-1",onClick:n},tag:"onReset"}],style:{marginLeft:"10px"}}}];return(0,d.jsx)(m.A,{formProps:t,formList:l})};var x=a(33516),f=a(47419),j=a(11645),v=a(58168);const A={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z"}}]},name:"setting",theme:"outlined"};var k=a(6127),b=function(e,t){return n.createElement(k.A,(0,v.A)({},e,{ref:t,icon:A}))};const S=n.forwardRef(b);var C=a(87315),w=a(37632);const I=e=>{let{...t}=e;return(0,d.jsx)(w.A,{...t})},D=e=>{let{initData:t,checkedKeys:a,updateInitData:n,updateCheckedKeys:r}=e;return(0,d.jsx)(I,{className:"draggable-tree",checkedKeys:a,onCheck:e=>{r(e)},draggable:!0,blockNode:!0,onDragEnter:e=>{},onDrop:e=>{const a=t.findIndex((t=>t.headerFieldId===e.dragNodesKeys[0]));if((-1!==e.dropPosition||0!==a)&&e.dropPosition!==a)if(-1===e.dropPosition){let e=(0,C.j)(t,a,0);n(e)}else if(e.dropPosition>a){let r=(0,C.j)(t,a,e.dropPosition-1);n(r)}else if(e.dropPosition<a){let r=(0,C.j)(t,a,e.dropPosition);n(r)}},treeData:t,fieldNames:{title:"headerFieldName",key:"headerFieldId",children:"children"},checkable:!0})};var N=a(19573),P=a(11201);const F=(e,t)=>t.reduce(((t,a)=>a.type===e?a.headerField:t),[]);var z=a(22487);const K=e=>{let{type:t,onCallbackData:a}=e;const{headerConfigItem:r,checkedKeys:l}=(e=>{const t=(0,N.GV)(P.I1),[a,r]=(0,n.useState)([]),[l,s]=(0,n.useState)([]);return(0,n.useEffect)((()=>{const a=F(e,t);r(a);const n=(e=>e.reduce(((e,t)=>"true"===t.headerSelected?[...e,t.headerFieldId]:e),[]))(a);s(n)}),[t,e]),{headerConfigItem:a,checkedKeys:l}})(t);(0,n.useEffect)((()=>{c(r),o(l)}),[r,l]);const[s,c]=(0,n.useState)([]),[i,o]=(0,n.useState)([]),[u,h]=(0,n.useState)(!1),[p,m]=(0,n.useState)(!1);(0,n.useEffect)((()=>{0===i.length?g("0"):s.length===i.length?g("2"):g("1")}),[i]);const g=e=>{"0"===e?(h(!1),m(!1)):"1"===e?(h(!0),m(!1)):"2"===e&&(h(!1),m(!0))};return(0,d.jsxs)(d.Fragment,{children:[(0,z.m)({indeterminate:u,checked:p,onChange:e=>{if(h(!1),m(e.target.checked),e.target.checked){const e=s.reduce(((e,t)=>[...e,t.headerFieldId]),[]);o(e)}else o([])}}),(0,d.jsx)(D,{initData:s,checkedKeys:i,updateInitData:e=>{c(e),a(e,i)},updateCheckedKeys:e=>{o(e)}})]})},E=(0,n.memo)(K);var L=a(8651);const R=e=>{let{children:t,type:a}=e;const[r,s]=(0,n.useState)(!1),c=()=>{s(!1)},[i,o]=(0,n.useState)(!1);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(f.A,{justify:"space-between",children:[(0,d.jsx)(j.A,{children:t}),(0,d.jsx)(j.A,{children:(0,d.jsx)(f.A,{children:(0,d.jsx)(j.A,{children:(0,d.jsx)(l.Ay,{type:"link",icon:(0,d.jsx)(S,{}),onClick:()=>{s(!0)}})})})})]}),(0,d.jsxs)(L.A,{title:"编辑表头",open:r,onOk:async()=>{o(!0);try{c()}catch(e){}o(!1)},onCancel:()=>{c()},confirmLoading:i,children:[(0,d.jsx)(E,{type:a,onCallbackData:(e,t)=>{}})," "]})]})};var T=a(39428);const V=e=>(0,T.Ay)({url:"/seachForm/tabelData",method:"post",data:e});var M=a(53536);const G=(e,t)=>{const{wait:a,leading:r,trailing:l,callback:s,errorCallback:c}=t||{},[i,o]=(0,n.useState)(!1),[d,u]=(0,n.useState)(),h=(0,n.useRef)();return h.current||(h.current=(0,M.debounce)((async t=>{try{o(!0);const a=await e(t);if(u(a),o(!1),s)return s(a)}catch(e){if(o(!1),c)return c(e)}}),a,{leading:r,trailing:l})),{loading:i,data:d,run:h.current}};var O=a(16954);const W=new Set,B=()=>{const e=(0,N.jL)(),t=(0,N.GV)(O.pb);return{getKeepAliveData:e=>{var a;return(null===(a=t[e])||void 0===a?void 0:a.value)||{}},keepAliveAllData:t,setKeepAliveData:t=>{const{key:a}=t;W.has(a)&&e((0,O.He)(t))}}};W.add("1");const J=()=>{const e=(0,n.useRef)({name:[],height:""}),{columns:t}=u({buttonEvent:t=>{let{type:a,value:n}=t;"name"===a&&(e.current.name=n),"height"===a&&(e.current.height=n),g.current.pageNum=1,f()},columnsSeachValue:e}),[a]=r.A.useForm(),{expensesTableData:l,total:s,getTabelData:c,loading:i}=(()=>{const[e,t]=(0,n.useState)(0),{loading:a,data:r,run:l}=G(V,{wait:3e3,leading:!0,callback:e=>{const{total:a}=e;t(a)}});return{expensesTableData:null==r?void 0:r.data,total:e,getTabelData:l,loading:a}})(),{getKeepAliveData:o,setKeepAliveData:m}=B(),g=(0,n.useRef)({pageSize:10,pageNum:1});(0,n.useEffect)((()=>{const{pageNum:t,pageSize:n,name:r,age:l,status:s,height:c}=o("1");a.setFieldsValue({age:l,status:s}),e.current={name:r||e.current.name,height:c||e.current.height},g.current={pageNum:t||g.current.pageNum,pageSize:n||g.current.pageSize},f()}),[]);const f=()=>{let t=a.getFieldsValue();(e=>{m({key:"1",value:e})})({...t,...g.current,...e.current}),c({...t,...g.current,...e.current})};return(0,d.jsxs)("div",{children:[(0,d.jsx)(y,{formProps:{form:a},reset:()=>{a.resetFields(),f()},submit:f}),(0,d.jsxs)(p.A,{styles:{body:{marginTop:"10px"}},children:[(0,d.jsx)(R,{type:"seachForm"}),(0,d.jsx)(h.A,{rowKey:"key",columns:t,dataSource:l,loading:i,scroll:{x:"100%"}}),(0,d.jsx)(x.A,{className:"mt-4",total:s,pageSize:g.current.pageSize,current:g.current.pageNum,onChange:(e,t)=>{g.current={pageNum:e,pageSize:t},f()}})]})]})}}}]);