"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[2652],{90501:function(e,n,t){t.d(n,{n:function(){return a}});var r=t(93433),a=function(e,n,t){var a=JSON.parse(JSON.stringify(e));return a.splice.apply(a,[t,0].concat((0,r.Z)(a.splice(n,1)))),a}},76623:function(e,n,t){t.r(n),t.d(n,{default:function(){return Fe}});var r=t(72791),a=t(66106),l=t(30914),o=t(15287),i=t(46401),s=t(29439),u=t(92810),c=t(1067),p="input",d="select",m="textArea",f="cascader",y="button",v="formItem",b="GenerateFormItem",h=t(1413),Z=t(80184),x=(0,r.createContext)(null),g={formList:[],selectFormItemKey:void 0},k=function(e,n){var t=n.type,r=n.value;return"formList"===t?(0,h.Z)((0,h.Z)({},e),{},{formList:r}):"selectFormItemKey"===t?(0,h.Z)((0,h.Z)({},e),{},{selectFormItemKey:r}):e},C=function(e){var n=e.children,t=(0,r.useReducer)(k,g),a=(0,s.Z)(t,2),l=a[0],o=a[1];return(0,Z.jsx)(x.Provider,{value:{state:l,dispatch:o},children:n})},j=t(83298),F=function(e){var n=function(){var n=(0,j.Z)().token,t=(0,r.useState)(!1),a=(0,s.Z)(t,2),l=a[0],o=a[1],i=function(){o(!1)};return(0,Z.jsx)(Z.Fragment,{children:r.cloneElement(e,{style:(0,h.Z)((0,h.Z)({},e.props.style),{},{backgroundColor:l?n.colorPrimaryBg:""}),onMouseMove:function(){l||o(!0)},onMouseLeave:i,onDragEnd:i})})};return(0,Z.jsx)(n,{})},L=[{name:"输入框",type:p},{name:"文本框",type:m},{name:"下拉框",type:d},{name:"联级框",type:f},{name:"按钮集合",type:y}],O=function(e){var n=e.name,t=e.type,a=(0,j.Z)().token,o=(0,r.useContext)(x),i=null==o?void 0:o.state.formList,p=(0,c.c)((function(){return{type:v,item:{name:t},end:function(e,n){var t=n.getDropResult();if(e&&t){var r=e.name,a=i||[];"button"===r?a.push({type:r,name:"name"+(null==i?void 0:i.length),key:(0,u.Z)(),span:24,option:[{name:"确认",type:"ok",btnType:"primary",span:12,permission:"",iconFont:"",id:"0"}]}):a.push({type:r,label:"label",name:"name"+(null==i?void 0:i.length),disabled:!1,key:(0,u.Z)(),isRule:1,span:24,labelCol:6,trigger:"1"}),null==o||o.dispatch({type:"formList",value:a})}},collect:function(e){return{isDragging:e.isDragging(),handlerId:e.getHandlerId()}}}}),[i]),d=(0,s.Z)(p,2),m=(d[0].isDragging,d[1]);return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(l.Z,{span:12,children:(0,r.useMemo)((function(){return F((0,Z.jsx)("div",{ref:m,"data-testid":"formItem",className:"rounded-lg p-2 mb-2 border border-solid cursor-pointer",style:{borderColor:a.colorPrimaryBorder},children:n}))}),[a])})})},w=function(){var e=(0,j.Z)().token;return(0,Z.jsx)("div",{className:"rounded-lg p-2 border-2 border-solid",style:{borderColor:e.colorPrimaryBorder},children:(0,Z.jsx)(a.Z,{gutter:16,children:L.map((function(e){return(0,Z.jsx)(O,{name:e.name,type:e.type},e.type)}))})})},I=t(93433),S=t(98422),N=t(95474),P=t(87309),T=t(11532),D=t(23414),K=t(75955),R=t(90501),E=t(4942),V=t(29751),B=t(87640),J=function(e){return(0,B.ZP)({url:"/dnd/options",method:"get"})},A=function(e,n){var t=(0,r.useContext)(x),a=N.Z.useWatch([e],n);(0,r.useEffect)((function(){if(null!=t&&t.state.selectFormItemKey){var n=t.state.formList.map((function(n){return(null==t?void 0:t.state.selectFormItemKey)===n.key?(0,h.Z)((0,h.Z)({},n),{},(0,E.Z)({},e,a)):n}));t.dispatch({type:"formList",value:n})}}),[a])},q=function(){return{getFormData:function(e){var n=e.type,t=e.key,r=e.span,a=e.label,l=e.disabled,o=e.option,i=e.isRule,s=e.isRuleTitle,u=e.rule,c=e.ruleTitle,p=e.name,d=e.labelCol,m={type:n,key:t,span:r,label:a,name:p,disabled:l,option:o};return m=2===i?(0,h.Z)((0,h.Z)({},m),{},{rules:[{required:!0,message:s}]}):(0,h.Z)((0,h.Z)({},m),{},{rules:[{required:!1}]}),u&&(m=(0,h.Z)((0,h.Z)({},m),{},{rules:[].concat((0,I.Z)(m.rules||[]),[{validator:function(e,n){var t=u&&new RegExp(u.substring(1,u.length-1));return""===n||null==n||""===t||null!=t&&t.test(n)||""===n?Promise.resolve():Promise.reject(new Error(c))}}])})),d&&(m=(0,h.Z)((0,h.Z)({},m),{},{layout:{labelCol:{span:d},wrapperCol:{span:24-d}}})),m}}},M=function(e){var n=e.formParams,t=e.index,o=(0,j.Z)().token,i=(0,r.useContext)(x),p=q().getFormData,d=(0,r.useRef)(null),m=(0,S.L)({accept:b,collect:function(e){return{handlerId:e.getHandlerId()}},hover:function(e,n){var r;if(d.current){var a=e.index,l=t;if(a!==l){var o=null===(r=d.current)||void 0===r?void 0:r.getBoundingClientRect(),s=(o.bottom-o.top)/2,u=n.getClientOffset();if(u){var c=u.y-o.top;if(a<l&&c<s)return;if(a>l&&c>s)return}var p=(0,R.n)((null==i?void 0:i.state.formList)||[],l,a);null==i||i.dispatch({type:"formList",value:p||[]}),e.index=l}}}},[null==i?void 0:i.state.formList]),f=(0,s.Z)(m,2),y=f[0].handlerId,v=f[1],g=(0,c.c)((function(){return{type:b,item:function(){return{id:n.key,index:t}},collect:function(e){return{handlerId:e.getHandlerId(),isDragging:e.isDragging()}}}}),[t]),k=(0,s.Z)(g,3),C=k[0].isDragging,F=k[1],L=(k[2],C?0:1);F(v(d));var O=N.Z.useForm(),w=(0,s.Z)(O,1)[0],E=[(0,h.Z)((0,h.Z)({},p(n)),{},{span:24})];return(0,Z.jsxs)(a.Z,{onClick:function(){n.key!==(null==i?void 0:i.state.selectFormItemKey)&&(null==i||i.dispatch({type:"selectFormItemKey",value:n.key}))},className:"rounded-lg p-4 pb-0 mb-2 border border-solid "+"".concat((null==i?void 0:i.state.selectFormItemKey)===n.key?"shadow-lg":""),style:{opacity:L,height:100,backgroundColor:(null==i?void 0:i.state.selectFormItemKey)===n.key?o.colorPrimaryBg:"",borderColor:o.colorPrimaryBorder},"data-handler-id":y,ref:d,children:[(0,Z.jsx)(l.Z,{flex:"auto",children:(0,Z.jsx)(K.Z,{form:w,formList:E})}),(0,Z.jsxs)("div",{className:"absolute right-0 bottom-1 text-center",children:[(0,Z.jsx)(P.ZP,{type:"link",icon:(0,Z.jsx)(T.Z,{}),onClick:function(e){return function(e){e.stopPropagation();var t=(null==i?void 0:i.state.formList.filter((function(e){return e.key!==n.key})))||[];null==i||i.dispatch({type:"formList",value:t}),n.key===(null==i?void 0:i.state.selectFormItemKey)&&i.dispatch({type:"selectFormItemKey",value:void 0})}(e)}}),(0,Z.jsx)(P.ZP,{type:"link",icon:(0,Z.jsx)(D.Z,{}),onClick:function(e){return function(e){e.stopPropagation();var t=(null==i?void 0:i.state.formList.reduce((function(e,t){return n.key===t.key?[].concat((0,I.Z)(e),[t,(0,h.Z)((0,h.Z)({},t),{},{name:"name"+(null==E?void 0:E.length),key:(0,u.Z)()})]):[].concat((0,I.Z)(e),[t])}),[]))||[];null==i||i.dispatch({type:"formList",value:t})}(e)}})]})]})},H=function(){var e=(0,j.Z)().token,n=(0,r.useContext)(x),t=(0,S.L)({accept:v,drop:function(){return{name:"GenerateForm"}},collect:function(e){return{isOver:e.isOver(),canDrop:e.canDrop()}}}),o=(0,s.Z)(t,2),i=o[0],u=(i.isOver,i.canDrop,o[1]);return(0,Z.jsx)("div",{ref:u,"data-testid":"GenerateForm",className:"rounded-lg p-2 border-2 border-solid  ",style:{minHeight:500,borderColor:e.colorPrimaryBorder},children:(0,Z.jsx)(a.Z,{children:null==n?void 0:n.state.formList.map((function(e,n){return(0,Z.jsx)(l.Z,{span:e.span,children:(0,Z.jsx)(M,{formParams:e,index:n})},e.key)}))})})},_=t(74165),G=t(15861),W=t(96230),z=t(79286),$=t(92143),Q=t(81324),U=t(49155),X=function(e){var n=e.options,t=e.updateOptions,r=function(e){var n=e.options,t=e.key,r=e.value,a=e.id;return n.map((function(e){return e.id===a?(0,h.Z)((0,h.Z)({},e),{},(0,E.Z)({},t,r)):e}))};return(0,Z.jsx)(Z.Fragment,{children:n.map((function(e,o){return(0,Z.jsxs)(a.Z,{children:[(0,Z.jsx)(l.Z,{span:8,children:(0,Q.E2)({placeholder:"label",value:e.label,onChange:function(a){return function(e,a){var l=r({options:n,key:"label",value:e.target.value,id:a});t(l)}(a,e.id)}})}),(0,Z.jsx)(l.Z,{span:8,children:(0,Q.E2)({placeholder:"value",value:e.value,onChange:function(a){return function(e,a){var l=r({options:n,key:"value",value:e.target.value,id:a});t(l)}(a,e.id)}})}),(0,Z.jsx)(l.Z,{span:4,children:(0,U.c)({option:[{name:"",type:"add",block:!0,btnType:"dashed",iconFont:(0,Z.jsx)(z.Z,{}),span:24}],onClick:function(){var r,a;r=e.id,a=n.find((function(e){return e.id===r})),a&&t([].concat((0,I.Z)(n),[(0,h.Z)((0,h.Z)({},a),{},{id:(0,u.Z)()})]))}})}),(0,Z.jsx)(l.Z,{span:4,children:(0,U.c)({option:[{name:"",type:"subtract",block:!0,btnType:"dashed",iconFont:(0,Z.jsx)($.Z,{}),span:24}],onClick:function(){!function(e){if(1!==n.length){var r=n.filter((function(n){return n.id!==e}));t(r)}}(e.id)}})})]},e.id)}))})},Y=t(61883),ee=[{type:"primary",value:"primary"},{type:"ghost",value:"ghost"},{type:"dashed",value:"dashed"},{type:"link",value:"link"},{type:"text",value:"text"},{type:"default",value:"default"}],ne=function(e){var n=e.options,t=e.updateOptions,r=function(e,r,a){var l=o({options:n,key:r,value:e.target.value,id:a});t(l)},o=function(e){var n=e.options,t=e.key,r=e.value,a=e.id;return n.map((function(e){return e.id===a?(0,h.Z)((0,h.Z)({},e),{},(0,E.Z)({},t,r)):e}))};return(0,Z.jsx)(Z.Fragment,{children:n.map((function(e,i){return(0,Z.jsxs)(a.Z,{className:"m-4",gutter:16,children:[(0,Z.jsx)(l.Z,{span:12,children:(0,Q.E2)({placeholder:"名字",value:e.name,onChange:function(n){return r(n,"name",e.id)}})}),(0,Z.jsx)(l.Z,{span:12,children:(0,Q.E2)({placeholder:"标识类型",value:e.type,onChange:function(n){return r(n,"type",e.id)}})}),(0,Z.jsx)(l.Z,{span:12,children:(0,Y._)({placeholder:"组件类型",value:e.btnType,option:ee,fieldNames:{label:"type",value:"value"},onChange:function(r){return function(e,r,a){var l=o({options:n,key:r,value:e,id:a});t(l)}(r,"btnType",e.id)}})}),(0,Z.jsx)(l.Z,{span:12,children:(0,Q.E2)({placeholder:"权限标识",value:e.permission,onChange:function(n){return r(n,"hasPermiss",e.id)}})}),(0,Z.jsx)(l.Z,{span:12,children:(0,Q.E2)({placeholder:"图标",value:e.iconFont,onChange:function(n){return r(n,"iconFont",e.id)}})}),(0,Z.jsx)(l.Z,{span:12,children:(0,Q.tm)({placeholder:"span",value:e.span,onChange:function(r){return function(e,r,a){var l=o({options:n,key:r,value:e,id:a});t(l)}(r,"span",e.id)}})}),(0,Z.jsx)(l.Z,{span:12,children:(0,U.c)({option:[{name:"",type:"add",block:!0,btnType:"dashed",iconFont:(0,Z.jsx)(z.Z,{}),span:24}],onClick:function(){var r,a;r=e.id,a=n.find((function(e){return e.id===r})),a&&t([].concat((0,I.Z)(n),[(0,h.Z)((0,h.Z)({},a),{},{id:(0,u.Z)()})]))}})}),(0,Z.jsx)(l.Z,{span:12,children:(0,U.c)({option:[{name:"",type:"subtract",block:!0,btnType:"dashed",iconFont:(0,Z.jsx)($.Z,{}),span:24}],onClick:function(){!function(e){if(1!==n.length){var r=n.filter((function(n){return n.id!==e}));t(r)}}(e.id)}})})]},e.id)}))})},te=function(e,n){return""===n||null==n||/^[_a-zA-Z0-9]+$/.test(n)?Promise.resolve():Promise.reject(new Error("仅由英文字母，数字以及下划线组成"))},re=[{label:"启用",value:!1},{label:"禁用",value:!0}],ae=[],le=["select","cascader"],oe=["label","name","labelCol","span","disabled","trigger","staticOptions","url","urlLabel","urlValue","urlBtn","parent","isRule","isRuleTitle","rule","ruleTitle"],ie=["input","textArea"],se=["label","name","labelCol","span","disabled","parent","isRule","isRuleTitle","rule","ruleTitle"],ue=["button"],ce=["name","span","button"],pe=[{value:"",label:"",id:(0,u.Z)()}],de=function(){var e=(0,j.Z)().token,n=function(){var e=(0,r.useContext)(x);return{editItemValue:function(n){if(null!=e&&e.state.selectFormItemKey){var t=e.state.formList.map((function(t){return(null==e?void 0:e.state.selectFormItemKey)===t.key?(0,h.Z)((0,h.Z)({},t),n):t}));e.dispatch({type:"formList",value:t})}}}}(),t=n.editItemValue,a=(0,r.useContext)(x),l=N.Z.useForm(),o=(0,s.Z)(l,1)[0],i=function(){var e=(0,r.useContext)(x);return[(0,V.Z)(J,{manual:!0,onSuccess:function(n){var t=n.data,r=(null==e?void 0:e.state.formList.map((function(n){return n.key===e.state.selectFormItemKey?(0,h.Z)((0,h.Z)({},n),{},{option:t}):n})))||[];null==e||e.dispatch({type:"formList",value:r})}}).run]}(),u=(0,s.Z)(i,1)[0],c=function(){var e=(0,G.Z)((0,_.Z)().mark((function e(){var n;return(0,_.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("1"!==f){e.next=4;break}t({option:g}),e.next=14;break;case 4:if("2"!==f){e.next=14;break}return e.prev=5,e.next=8,o.validateFields(["url"]);case 8:n=o.getFieldValue("url"),u(n),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(5);case 14:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(){return e.apply(this,arguments)}}(),p=(0,r.useMemo)((function(){var e=null==a?void 0:a.state.formList.filter((function(e){return e.key!==a.state.selectFormItemKey}));return null==e?void 0:e.map((function(e){return{label:e.label,name:e.name}}))}),[null==a?void 0:a.state.formList]),d=(0,r.useState)("1"),m=(0,s.Z)(d,2),f=m[0],y=m[1],v=(0,r.useState)(pe),b=(0,s.Z)(v,2),g=b[0],k=b[1],C=(0,r.useState)(ae),F=(0,s.Z)(C,2),L=F[0],O=F[1],w=[{type:"input",key:"1",label:"标签",name:"label",span:24,layout:{labelCol:{span:6},wrapperCol:{span:18}}},{type:"input",rules:[{required:!0,message:"请输入数据字段"},{validator:te}],key:"2",label:"数据字段",name:"name",span:24,layout:{labelCol:{span:6},wrapperCol:{span:18}}},{type:"slider",key:"3",label:"label宽度",name:"labelCol",max:24,min:0,span:24,layout:{labelCol:{span:6},wrapperCol:{span:18}}},{type:"slider",key:"4",label:"总宽度",name:"span",max:24,min:6,span:24,layout:{labelCol:{span:6},wrapperCol:{span:18}}},{type:"select",key:"5",label:"是否禁用",name:"disabled",allowClear:!1,option:re,span:24,layout:{labelCol:{span:6},wrapperCol:{span:18}}},{type:"userDefined",name:"trigger",children:(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(W.Z,{activeKey:f,items:[{key:"1",label:"静态数据"},{key:"2",label:"动态数据"}],onChange:function(e){y(e),"1"===e?(o.setFieldValue("url",""),o.setFieldValue("urlLabel",""),o.setFieldValue("urlValue","")):"2"===e&&k(pe),t({option:[],trigger:e})}})}),key:"6"},{type:"userDefined",key:"7777",name:"staticOptions",span:24,show:"1"===f,children:(0,Z.jsx)(X,{options:g,updateOptions:function(e){k(e)}}),layout:{labelCol:{span:0},wrapperCol:{span:24}}},{type:"input",key:"88",label:"",name:"url",placeholder:"请输入url",rules:[{required:!0,message:"请输入url"}],span:12,show:"2"===f,layout:{labelCol:{span:0},wrapperCol:{span:24}}},{type:"input",key:"98",label:"",name:"urlLabel",placeholder:"label",rules:[{required:!0,message:"请输入label"}],span:6,show:"2"===f,layout:{labelCol:{span:0},wrapperCol:{span:24}}},{type:"input",key:"108",label:"",name:"urlValue",placeholder:"value",rules:[{required:!0,message:"请输入value"}],span:6,show:"2"===f,layout:{labelCol:{span:0},wrapperCol:{span:24}}},{type:"userDefined",key:"11",name:"urlBtn",span:6,children:(0,Z.jsx)("div",{className:"flex justify-end",children:(0,Z.jsx)(P.ZP,{type:"primary",onClick:c,children:"发送"})}),layout:{labelCol:{span:0},wrapperCol:{span:24}}},{type:"select",key:"12",label:"关联父级",name:"parent",option:p,fieldNames:{label:"label",value:"name"},span:24,layout:{labelCol:{span:6},wrapperCol:{span:18}}},{type:"radio",name:"isRule",label:"是否必填",rules:[],key:"13",span:24,option:[{value:1,name:"否",key:1},{value:2,name:"是",key:2}],optionType:"button",layout:{labelCol:{span:6},wrapperCol:{span:18}}},{type:"textArea",key:"14",label:"是否必填提示语",name:"isRuleTitle",span:24,layout:{labelCol:{span:6},wrapperCol:{span:18}}},{type:"textArea",key:"15",label:"校验规则",name:"rule",span:24,layout:{labelCol:{span:6},wrapperCol:{span:18}}},{type:"textArea",key:"16",label:"校验规则提示语",name:"ruleTitle",span:24,layout:{labelCol:{span:6},wrapperCol:{span:18}}},{type:"userDefined",key:"button",name:"button",span:24,children:(0,Z.jsx)(ne,{options:L,updateOptions:function(e){O(e),t({option:e})}}),layout:{labelCol:{span:0},wrapperCol:{span:24}}}],I=(0,r.useMemo)((function(){var e=null==a?void 0:a.state.formList.find((function(e){return e.key===(null==a?void 0:a.state.selectFormItemKey)}));return null!=e&&e.type?w.filter((function(n){return le.indexOf(null==e?void 0:e.type)>-1?oe.indexOf(n.name)>-1:ie.indexOf(null==e?void 0:e.type)>-1?se.indexOf(n.name)>-1:ue.indexOf(null==e?void 0:e.type)>-1?ce.indexOf(n.name)>-1:void 0})):[]}),[null==a?void 0:a.state.selectFormItemKey,null==a?void 0:a.state.formList,g,L]);return(0,r.useEffect)((function(){if(null!=a&&a.state.selectFormItemKey){var e=a.state.formList.find((function(e){return(null==a?void 0:a.state.selectFormItemKey)===e.key}))||{},n=e.type,t=e.span,r=e.label,l=e.disabled,i=e.url,s=e.parent,u=e.name,c=e.rule,p=e.isRule,d=e.labelCol,m=e.trigger,f=e.urlLabel,v=e.urlValue,b=e.option;o.setFieldsValue({span:t,label:r,disabled:l,url:i,parent:s,name:u,rule:c,isRule:p,labelCol:d,urlLabel:f,urlValue:v,option:b}),m&&y(m),"button"===n&&O(b)}}),[null==a?void 0:a.state.selectFormItemKey]),A("span",o),A("label",o),A("disabled",o),A("url",o),A("parent",o),A("isRule",o),A("isRuleTitle",o),A("rule",o),A("ruleTitle",o),A("name",o),A("labelCol",o),A("urlLabel",o),A("urlValue",o),null!=a&&a.state.selectFormItemKey?(0,Z.jsx)("div",{className:"rounded-lg p-2 border-2 border-solid",style:{borderColor:e.colorPrimaryBorder},children:(0,Z.jsx)(K.Z,{form:o,formList:I})}):(0,Z.jsx)(Z.Fragment,{})},me=t(29883),fe=t(51283),ye=t(71939),ve=t.n(ye),be=t(28709),he=[{label:"dnd格式",value:"dnd"},{label:"标准格式",value:"standard"}],Ze=function(e){var n=e.open,t=e.onOkOrCancel,a=e.confirmLoading,l=(0,r.useContext)(x),o=q().getFormData,i=(0,r.useState)([]),u=(0,s.Z)(i,2),c=u[0],p=u[1];(0,r.useEffect)((function(){n&&b("dnd")}),[n]);var d={name:null,src:c,theme:"rjv-default",iconStyle:"circle",indentWidth:6,collapsed:2,collapseStringsAfterLength:!1,displayDataTypes:!0,displayObjectSize:!0},m=(0,r.useState)("dnd"),f=(0,s.Z)(m,2),y=f[0],v=f[1],b=function(e){v(e),"standard"===e?p((null==l?void 0:l.state.formList.map((function(e){return o(e)})))||[]):"dnd"===e&&p((null==l?void 0:l.state.formList)||[])};return(0,Z.jsxs)(fe.Z,{title:"json",width:800,open:n,onOkOrCancel:t,confirmLoading:a,children:[(0,Z.jsx)(be.Z,{options:he,value:y,onChange:b}),(0,Z.jsx)(ve(),(0,h.Z)({},d))]})},xe=function(e){var n=e.form,t=e.open,r=e.onOkOrCancel,a=e.confirmLoading,l=[{type:"textArea",key:"1",label:"JSON",name:"json",rows:20,span:24,rules:[{validator:function(e,n){if("string"==typeof n)try{var t=JSON.parse(n);return"object"==typeof t&&t?Promise.resolve():Promise.reject("格式不对")}catch(e){return Promise.reject("格式不对")}}}],layout:{labelCol:{span:2},wrapperCol:{span:22}}}];return(0,Z.jsx)(fe.Z,{width:1e3,title:"导入dnd-json",open:t,onOkOrCancel:r,confirmLoading:a,children:(0,Z.jsx)(K.Z,{form:n,formList:l})})},ge=function(e){var n=e.form,t=e.open,a=e.onOkOrCancel,l=e.confirmLoading,o=(0,r.useContext)(x),i=q().getFormData;return(0,Z.jsx)(fe.Z,{width:800,title:"示例",open:t,onOkOrCancel:a,confirmLoading:l,children:(0,Z.jsx)(K.Z,{form:n,formList:(null==o?void 0:o.state.formList.map((function(e){return i(e)})))||[]})})},ke=t(94805),Ce=function(e){var n=e.open,t=e.onOkOrCancel,a=e.confirmLoading,l=(0,r.useContext)(x),o=q().getFormData;return(0,Z.jsx)(fe.Z,{width:1e3,title:"导入dnd-json",open:n,onOkOrCancel:t,confirmLoading:a,children:(0,Z.jsxs)(ke.Z,{bordered:!0,children:[(0,Z.jsx)("div",{children:"import React, {FC} from 'react';"}),(0,Z.jsx)("div",{className:"mb-2",children:"import Iform from '@/antdComponents/iForm';"}),(0,Z.jsx)("div",{className:"mb-1 whitespace-pre",children:"const SeachForm: FC<Iprops> = ({ form, onFinish }) => {"}),(0,Z.jsx)("div",{style:{whiteSpace:"pre-line"},className:"mb-1 whitespace-pre",children:"  const formList = "+JSON.stringify((null==l?void 0:l.state.formList.map((function(e){return o(e)})))||[],null,2)}),(0,Z.jsx)("div",{className:"mb-1 whitespace-pre",children:"  return <Iform form={form} formList={formList}></Iform>;"}),(0,Z.jsx)("div",{className:"mb-1 whitespace-pre",children:"};"})]})})},je=function(){var e=(0,r.useContext)(x),n=(0,r.useState)(!1),t=(0,s.Z)(n,2),a=t[0],l=t[1],o=(0,r.useState)(!1),i=(0,s.Z)(o,2),u=i[0],c=(i[1],(0,r.useState)(!1)),p=(0,s.Z)(c,2),d=p[0],m=p[1],f=(0,r.useState)(!1),y=(0,s.Z)(f,2),v=y[0],b=(y[1],N.Z.useForm()),h=(0,s.Z)(b,1)[0],g=function(){var n=(0,G.Z)((0,_.Z)().mark((function n(t){var r;return(0,_.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("ok"!==t){n.next=17;break}if(r=h.getFieldValue("json")){n.next=4;break}return n.abrupt("return",m(!1));case 4:return n.prev=4,n.next=7,h.validateFields();case 7:n.sent,null==e||e.dispatch({type:"formList",value:JSON.parse(r)}),h.resetFields(),m(!1),n.next=15;break;case 13:n.prev=13,n.t0=n.catch(4);case 15:n.next=19;break;case 17:h.resetFields(),m(!1);case 19:case"end":return n.stop()}}),n,null,[[4,13]])})));return function(e){return n.apply(this,arguments)}}(),k=(0,r.useState)(!1),C=(0,s.Z)(k,2),j=C[0],F=C[1],L=(0,r.useState)(!1),O=(0,s.Z)(L,2),w=O[0],I=(O[1],N.Z.useForm()),S=(0,s.Z)(I,1)[0],P=function(){var e=(0,G.Z)((0,_.Z)().mark((function e(n){return(0,_.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:F(!1);case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),T=(0,r.useState)(!1),D=(0,s.Z)(T,2),K=D[0],R=D[1],E=(0,r.useState)(!1),V=(0,s.Z)(E,2),B=V[0];V[1];return(0,Z.jsxs)("div",{className:"mb-2",children:[(0,Z.jsx)(me.Z,{buttonList:[{name:"生成示例",type:"template",btnType:"primary"},{name:"生成JSON",type:"JSON",btnType:"primary",className:"ml-1"},{name:"导入JSON",type:"import",btnType:"primary",className:"ml-1"},{name:"生成代码",type:"generatCode",btnType:"primary",className:"ml-1"}],onClick:function(e){"JSON"===e?l(!0):"import"===e?m(!0):"template"===e?F(!0):"generatCode"===e&&R(!0)}}),(0,Z.jsx)(Ze,{open:a,onOkOrCancel:function(e){l(!1)},confirmLoading:u}),(0,Z.jsx)(xe,{open:d,onOkOrCancel:g,confirmLoading:v,form:h}),(0,Z.jsx)(ge,{open:j,onOkOrCancel:P,confirmLoading:w,form:S}),(0,Z.jsx)(Ce,{open:K,onOkOrCancel:function(e){R(!1)},confirmLoading:B})]})},Fe=function(){(0,j.Z)().token;return(0,Z.jsx)(ke.Z,{children:(0,Z.jsxs)(C,{children:[(0,Z.jsx)(je,{}),(0,Z.jsxs)(a.Z,{gutter:8,children:[(0,Z.jsxs)(o.W,{backend:i.PD,children:[(0,Z.jsx)(l.Z,{span:6,children:(0,Z.jsx)(w,{})}),(0,Z.jsx)(l.Z,{span:12,children:(0,Z.jsx)(H,{})})]}),(0,Z.jsx)(l.Z,{span:6,children:(0,Z.jsx)(de,{})})]})]})})}}}]);