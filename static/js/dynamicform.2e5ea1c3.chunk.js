"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[2200],{36840:(e,a,l)=>{l.r(a),l.d(a,{default:()=>u});var o=l(65043),n=l(10688),r=l(34496),t=l(16569),p=l(76566),s=l(39428);const i=["button"];var m=l(76597),c=l(70579);const u=()=>{const[e,a]=(0,o.useState)("0"),{formList:l}=b({selectOnChange:e=>{},onSubmit:()=>{},onReset:()=>{},isTitle:e}),[t]=r.A.useForm();return(0,c.jsx)("div",{children:(0,c.jsxs)(p.A,{children:[(0,m.A)({value:e,options:[{label:"表单",value:"0"},{label:"文本",value:"1"}],optionType:"button",onChange:e=>{let{target:{value:l}}=e;a(l)}}),(0,c.jsx)(n.A,{formList:l,formProps:{form:t}})]})})},b=e=>{let{selectOnChange:a,onSubmit:l,onReset:n,isTitle:r}=e;const p=[{type:"input",key:1,span:24,formItemProps:{name:"name",label:"姓名",rules:[],labelCol:{span:6},wrapperCol:{span:18}},comConfig:{placeholder:"请输入姓名"}},{type:"select",key:2,span:24,comConfig:{mode:"multiple",placeholder:"请选择下拉框",options:[{name:"male",value:"male",key:1},{name:"female",value:"female",key:2}],onChange:a,fieldNames:{label:"name",value:"value"}},formItemProps:{name:"select",label:"下拉框",rules:[],labelCol:{span:6},wrapperCol:{span:18}}},{type:"radio",key:3,span:24,comConfig:{options:[{icon:"icon-taiyang",value:"icon-zhuzhuangtu-dashuju",label:"太阳"},{icon:"icon-ClearNight-qing-yewan",value:"icon-drxx91",label:"月亮"}]},formItemProps:{name:"radioIcon",label:"图标单选框",rules:[],labelCol:{span:6},wrapperCol:{span:18}}},{type:"radio",key:4,span:24,comConfig:{options:[{label:"按钮11111111",value:"1"},{label:"菜单222222222",value:"2"}]},formItemProps:{name:"radio",label:"单选框",rules:[],labelCol:{span:6},wrapperCol:{span:18}}},{type:"checkboxGroup",key:5,span:24,comConfig:{options:[{label:"按钮",value:"1"},{label:"菜单",value:"2"}]},formItemProps:{name:"checkbox",label:"多选框",rules:[],labelCol:{span:6},wrapperCol:{span:18}}},{type:"rate",key:6,span:24,comConfig:{tooltips:["terrible","bad","normal","good","wonderful"]},formItemProps:{name:"rate",label:"评分",rules:[],labelCol:{span:6},wrapperCol:{span:18}}},{type:"treeSelect",key:7,span:24,comConfig:{placeholder:"请选择下拉树",fieldNames:{label:"name",value:"value",children:"children"},treeData:[{name:"Light122222222222",value:"light",children:[{title:"Bamboo",value:"bamboo"}]},{name:"Light22333333333333",value:"light2",children:[{title:"Bamboo2",value:"bamboo2"}]}],treeCheckable:!0},formItemProps:{name:"treeSelect",label:"下拉树",rules:[],labelCol:{span:6},wrapperCol:{span:18}}},{type:"cascader",key:8,span:24,comConfig:{placeholder:"请选择联级",options:[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou"}]}]},formItemProps:{name:"cascader",label:"联级",rules:[],labelCol:{span:6},wrapperCol:{span:18}}},{type:"datePicker",key:9,span:24,formItemProps:{name:"date",label:"时间",rules:[],labelCol:{span:6},wrapperCol:{span:18}}},{type:"rangePicker",key:10,span:24,formItemProps:{name:"rangePicker",label:"时间区间",rules:[],labelCol:{span:6},wrapperCol:{span:18}}},{type:"timeRangePicker",key:11,span:24,formItemProps:{name:"timeRangePicker2",label:"可面试时间",rules:[{required:!0,message:"请选择时间"}],labelCol:{span:6},wrapperCol:{span:18}}},{type:"inputNumber",key:12,span:24,formItemProps:{name:"inputNumber",label:"数字",rules:[],labelCol:{span:6},wrapperCol:{span:18}}},{type:"switch",key:13,span:24,formItemProps:{name:"switch",valuePropName:"checked",label:"是否",rules:[],labelCol:{span:6},wrapperCol:{span:18}}},{type:"upload",key:14,span:24,comConfig:{name:"file",action:"".concat(s.VY,"/file"),headers:{Authorization:"{token:00}"},onChange:e=>{const{status:a}=e.file;"done"===a?t.Ay.success("".concat(e.file.name," file uploaded successfully.")):"error"===a&&t.Ay.error("".concat(e.file.name," file upload failed."))}},formItemProps:{label:"upload",name:"file",labelCol:{span:6},wrapperCol:{span:18}}},{type:"button",key:15,span:24,comConfig:{options:[{comConfig:{name:"搜索",type:"primary",waveType:"happy",onClick:l},tag:"submit"},{comConfig:{name:"重置",onClick:n},tag:"onReset"}],style:{float:"right"}}}],[m,c]=(0,o.useState)(p),{setFormListTitle:u}=function(e){const a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,l=(e,a)=>{const{type:l,formItemProps:o,comConfig:n,...r}=e,{name:t,...p}=o||{};return{type:"slot",formItemProps:p,comConfig:a?a(t,n):n,...r}};return{setFormItemTitle:l,setFormListTitle:(o,n)=>{const r=n||a;return o.filter((e=>-1===r.indexOf(e.type))).map((a=>l(a,e)))}}}(((e,a)=>({children:"--",...a})));return(0,o.useEffect)((()=>{(0,o.startTransition)((()=>{c("0"===r?p:u(m))}))}),[r]),{formList:m}}}}]);