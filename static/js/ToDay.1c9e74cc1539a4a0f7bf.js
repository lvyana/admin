"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[6235],{5058:function(e,n,t){var a=t(93433),r=(t(72791),t(32385)),o=t(87309),i=t(75033),s=t(61752),l=t(80184),c=function(e){var n=e.btArr,t=e.onClickBtn;return n.reduce((function(e,n,r){var o=u((0,l.jsx)(s.Z,{buttonList:[n],onClick:function(){return t(n.type,n)}}),r);return[].concat((0,a.Z)(e),[o])}),[])};n.Z=function(e){var n=e.btArr,t=e.onOpenChange,a=e.onClickBtn;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(r.Z,{menu:{items:c({btArr:n,onClickBtn:a})},placement:"bottom",arrow:!0,onOpenChange:t,trigger:["click"],children:(0,l.jsx)(o.ZP,{type:"link",icon:(0,l.jsx)(i.Z,{})})})})};var u=function(e,n,t,a,r){return{key:n,icon:t,children:a,label:e,type:r}}},19689:function(e,n,t){t.d(n,{G:function(){return s},Z:function(){return l}});t(72791);var a=t(20043),r=t(77106),o="iLoading_loading-example__xQgLk",i=t(80184),s=(0,i.jsx)(r.Z,{style:{fontSize:24},spin:!0}),l=function(e){var n=e.children,t=e.loading;return"boolean"==typeof t?(0,i.jsx)(a.Z,{indicator:s,spinning:t,delay:200,children:n}):(0,i.jsx)("div",{className:o,children:(0,i.jsx)(a.Z,{indicator:s,delay:200,style:{}})})}},51283:function(e,n,t){t(72791);var a=t(49428),r=t(80184);n.Z=function(e){var n=e.children,t=e.title,o=e.open,i=e.confirmLoading,s=e.onOkOrCancel,l=e.width,c=void 0===l?"500px":l,u=e.maskClosable,d=void 0!==u&&u,m=e.destroyOnClose,x=void 0===m||m;return(0,r.jsx)("div",{children:(0,r.jsx)(a.Z,{title:t,open:o,confirmLoading:i,onOk:function(){s("ok")},onCancel:function(){s("cancel")},width:c,maskClosable:d,destroyOnClose:x,children:n})})}},57773:function(e,n,t){var a=t(1413),r=(t(72791),t(49655)),o=t(85060),i=t(664),s=t(19689),l=t(80184);n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,c=e.data,u=void 0===c?[]:c,d=e.rowSelection,m=e.rowKey,x=void 0===m?"key":m,f=e.loading,v=void 0!==f&&f,p=e.bordered,h=void 0!==p&&p,j=(0,r.CG)(o.h2);return(0,l.jsx)(i.Z,{bordered:h,style:{marginTop:"10px"},size:j,columns:t,rowSelection:d&&(0,a.Z)({},d),dataSource:u,loading:{indicator:s.G,spinning:v},pagination:!1,rowKey:x})}},71758:function(e,n,t){t.r(n),t.d(n,{default:function(){return se}});var a=t(72791),r=t(29439),o=t(17615),i=t(16726),s=t(42378),l=t(22266),c=t(31752),u=t(51283),d=t(62711),m=t(80184),x=[{value:0,label:"产品"},{value:1,label:"前端"},{value:2,label:"后端"},{value:3,label:"测试"}],f=function(e){var n=e.form,t=e.addPersonnelOpen,a=e.addPersonnelLoading,r=e.onOkOrCancel,o=[{type:"input",name:"name",key:1,label:"姓名",span:12,layout:{labelCol:{span:6},wrapperCol:{span:18}}},{type:"select",name:"post",key:2,label:"岗位",option:x,span:12,layout:{labelCol:{span:6},wrapperCol:{span:18}}}];return(0,m.jsx)(u.Z,{title:"新增人员",open:t,confirmLoading:a,onOkOrCancel:r,children:(0,m.jsx)(d.Z,{form:n,formList:o})})},v=t(17828),p=function(e){var n=e.children,t=e.open,a=e.title,r=e.width,o=void 0===r?378:r,i=e.maskClosable,s=void 0!==i&&i,l=e.onClose,c=e.placement,u=void 0===c?"right":c;return(0,m.jsx)(v.Z,{title:a,width:o,maskClosable:s,placement:u,onClose:l,open:t,children:n})},h=t(57773),j=t(5058),Z=[{type:"修改",name:"修改",btType:"link"},{type:"删除",name:"删除",btType:"link"}],k=function(e){var n=e.loading,t=e.data,a=function(e){},r=[{title:"姓名",dataIndex:"name",key:"name"},{title:"岗位",dataIndex:"post",key:"post"},{title:"操作",dataIndex:"operation",key:"operation",render:function(e,n){return(0,m.jsx)(j.Z,{btArr:Z,onOpenChange:a,onClickBtn:function(e,n){}})}}];return(0,m.jsx)("div",{children:(0,m.jsx)(h.Z,{rowKey:"key",columns:r,data:t,loading:n})})},b=function(e){var n=e.form,t=e.onValuesChange;return(0,m.jsx)(d.Z,{form:n,formList:[{type:"input",label:"姓名",name:"name",key:"1",span:12,layout:{labelCol:{span:4},wrapperCol:{span:20}}}],onValuesChange:t})},g=t(29751),C=t(17195),y=function(e){return(0,C.Z)({url:"/team/editInfo",method:"post",data:e})},w=function(){return(0,C.Z)({url:"/team/members",method:"get"})},N=function(){return(0,C.Z)({url:"/taskList",method:"get"})},L=function(e){return(0,C.Z)({url:"/date/list/".concat(e),method:"get"})},O=function(e){var n=e.open,t=e.onClose,i=function(){var e=(0,g.Z)(y,{manual:!0,debounceWait:1e3}),n=e.data,t=e.loading,a=e.run;return{editPersonnelTableData:(null==n?void 0:n.data)||[],editPersonnelTableLoading:t,run:a}}(),s=i.editPersonnelTableData,l=i.editPersonnelTableLoading,c=i.run;(0,a.useEffect)((function(){if(n){var e=d.getFieldsValue();c(e)}}),[n]);var u=o.Z.useForm(),d=(0,r.Z)(u,1)[0];return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(p,{title:"调整团队",onClose:t,open:n,width:800,children:[(0,m.jsx)(b,{form:d,onValuesChange:function(e,n){c(n)}}),(0,m.jsx)(k,{data:s,loading:l})]})})},S=function(e){var n=e.userId,t=e.onAvatar,u=(0,a.useState)([]),d=(0,r.Z)(u,2),x=d[0],v=d[1];(0,a.useEffect)((function(){p()}),[]);var p=(0,g.Z)(w,{manual:!0,onSuccess:function(e){var n=e.data;v(n)},onError:function(e){}}).run,h=o.Z.useForm(),j=(0,r.Z)(h,1)[0],Z=(0,a.useState)(!1),k=(0,r.Z)(Z,2),b=k[0],C=k[1],y=(0,a.useState)(!1),N=(0,r.Z)(y,2),L=N[0],S=N[1],I=(0,a.useState)(!1),D=(0,r.Z)(I,2),P=D[0],F=D[1];return(0,m.jsx)(i.Z.Ribbon,{text:"team",color:"green",children:(0,m.jsxs)("div",{className:"my-4 p-4 border-2 border-blue-100 shadow-xl",children:[(0,m.jsx)(m.Fragment,{}),x.map((function(e,a){return(0,m.jsx)(s.Z,{placement:"bottom",title:e.name,children:(0,m.jsx)(l.C,{src:e.photo,className:"".concat(n===e.key?"border-blue-400 border-2":""," mr-2 hover:border-blue-300 hover:border-2 cursor-pointer"),onClick:function(){return t(e.key)}})},e.key)})),(0,m.jsx)(l.C,{className:"cursor-pointer mr-2 hover:bg-blue-300 ",onClick:function(){C(!0)},children:"+"}),(0,m.jsx)(l.C,{className:"cursor-pointer  hover:bg-blue-300 ",onClick:function(){F(!0)},children:(0,m.jsx)(c.Z,{})}),(0,m.jsx)(f,{form:j,addPersonnelOpen:b,addPersonnelLoading:L,onOkOrCancel:function(e){"ok"===e?(S(!0),setTimeout((function(){S(!1),C(!1)}),1e3)):"cancel"===e&&C(!1),j.resetFields()}}),(0,m.jsx)(O,{open:P,onClose:function(){F(!1)}})]})})},I=t(19006),D=t(97892),P=t.n(D),F=function(e,n){var t=n.find((function(n){return n.date===P()(e).format("YYYY-MM-DD")}));return t?[{type:"processing",content:"进行中 ".concat(null==t?void 0:t.underway)},{type:"error",content:"超时 ".concat(null==t?void 0:t.overtime)},{type:"success",content:"已完成 ".concat(null==t?void 0:t.accomplish)}]:[]},T=function(e){var n=e.userId,t=e.dateValue,o=e.onchangeDate,s=(0,a.useState)([]),l=(0,r.Z)(s,2),c=l[0],u=l[1],d=(0,g.Z)(L,{manual:!0,onSuccess:function(e){var n=e.data;u(n)}}).run;(0,a.useEffect)((function(){d(n)}),[n]);return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(I.Z,{dateCellRender:function(e){var n=F(e,c);return(0,m.jsx)(m.Fragment,{children:n.map((function(e){return(0,m.jsx)("div",{children:(0,m.jsx)(i.Z,{status:e.type,text:(0,m.jsx)("span",{className:"text-xs",children:e.content})})},e.content)}))})},value:t,onChange:o})})},E=t(1413),A=(0,a.createContext)(null),V={taskListData:[],taskListLoading:!0},U=function(e,n){var t=n.type,a=n.value;return"taskListData"===t?(0,E.Z)((0,E.Z)({},e),{},{taskListData:a}):"taskListLoading"===t?(0,E.Z)((0,E.Z)({},e),{},{taskListLoading:a}):e},_=function(e){var n=e.children,t=(0,a.useReducer)(U,V),o=(0,r.Z)(t,2),i=o[0],s=o[1];return(0,m.jsx)(A.Provider,{value:{state:i,dispatch:s},children:n})},z=t(74165),B=t(15861),G=t(19689),Y=function(e){var n=function(e,n){var t=function(){return new Promise(function(){var t=(0,B.Z)((0,z.Z)().mark((function t(a,r){var o,i,s;return(0,z.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n();case 3:o=t.sent,i=o.oldUserId,s=o.oldDate,a({default:function(){return(0,m.jsx)(e,{oldUserId:i,oldDate:s})}}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),r({default:function(){return(0,m.jsx)(e,{oldUserId:void 0,oldDate:void 0})}});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,n){return t.apply(this,arguments)}}())};return(0,a.lazy)(t)}(e,(function(){return new Promise((function(e,n){setTimeout((function(){e({oldUserId:void 0,oldDate:"2022-11-30"})}),1e3)}))}));return(0,m.jsx)(a.Suspense,{fallback:(0,m.jsx)(G.Z,{}),children:(0,m.jsx)(n,{})})},K=function(e){e.oldUserId,e.oldDate;var n=(0,a.useContext)(A);(0,a.useEffect)((function(){v()}),[]);var t=(0,a.useState)(),o=(0,r.Z)(t,2),i=o[0],s=o[1],l=(0,a.useState)((function(){return P()()})),c=(0,r.Z)(l,2),u=c[0],d=c[1],x=(0,g.Z)(N,{manual:!0,onSuccess:function(e){var t=e.data;null==n||n.dispatch({type:"taskListData",value:t})}}),f=x.loading,v=x.run;x.runAsync;return(0,a.useEffect)((function(){null==n||n.dispatch({type:"taskListLoading",value:f})}),[f]),(0,m.jsxs)("div",{className:"p-2",children:[(0,m.jsx)(S,{userId:i,onAvatar:function(e){s(e),v()}}),(0,m.jsx)(T,{dateValue:u,userId:i,onchangeDate:function(e){d(e),v()}})]})},M=function(){return Y(K)},R=t(80740),Q=t(27804),W=t(93451),q=t(78792),H=t(10183),J=t(68406),X=t(82339),$=t(65273),ee=t(83099),ne=function(e){var n=e.openComment,t=e.loadingComment,a=e.onOkOrCancel;return(0,m.jsx)(u.Z,{open:n,title:"评论",confirmLoading:t,onOkOrCancel:a,children:"Comment"})},te=function(e){var n=e.icon,t=e.text,r=e.isTooltip,o=void 0!==r&&r,i=e.onIcon,l=e.className,c=e.likeNames;return(0,m.jsx)(ee.Z,{className:"hover:text-blue-900 hover:font-bold cursor-pointer ",children:o?(0,m.jsx)(s.Z,{title:null==c?void 0:c.join("、"),children:(0,m.jsxs)("div",{className:"w-16",children:[a.createElement(n,{className:l}),t]})}):(0,m.jsxs)("div",{onClick:i,className:"w-16",children:[a.createElement(n,{className:l}),t]})})},ae=function(){var e=(0,a.useContext)(A),n=(0,a.useState)(!1),t=(0,r.Z)(n,2),o=t[0],s=t[1],l=(0,a.useState)(!1),c=(0,r.Z)(l,2),u=c[0],d=(c[1],function(){s(!0)});return(0,m.jsxs)("div",{children:[(0,m.jsx)(q.ZP,{itemLayout:"vertical",size:"large",dataSource:null==e?void 0:e.state.taskListData,footer:(0,m.jsx)(m.Fragment,{}),renderItem:function(n){return(0,m.jsx)(H.Z,{loading:null==e?void 0:e.state.taskListLoading,active:!0,avatar:!0,children:(0,m.jsxs)(q.ZP.Item,{className:"hover:bg-blue-300 rounded-lg",actions:[(0,m.jsx)(te,{icon:R.Z,className:n.isCollect?"text-blue-900":"",text:n.collectNum},"list-vertical-star-o"),(0,m.jsx)(te,{icon:Q.Z,isTooltip:!0,className:n.isLike?"text-blue-900":"",text:n.likeNum,likeNames:n.likeNames},"list-vertical-like-o"),(0,m.jsx)(te,{icon:W.Z,className:n.isComment?"text-blue-900":"",text:n.commentNum,onIcon:d},"list-vertical-message")],extra:(0,m.jsx)("div",{className:"mt-16",children:(0,m.jsx)(J.Z,{className:"w-56 ",src:n.avatar,placeholder:(0,m.jsx)(J.Z,{preview:!1,src:n.avatar,className:"w-56 "})})}),children:[(0,m.jsx)(q.ZP.Item.Meta,{avatar:(0,m.jsx)(i.Z,{className:"text-xs",status:"processing"}),title:(0,m.jsx)(m.Fragment,{children:n.title}),description:(0,m.jsxs)("div",{className:"flex justify-between",children:[(0,m.jsx)("div",{children:n.description.names.join("、")}),(0,m.jsx)("div",{children:n.description.date})]})}),n.content.map((function(e){return(0,m.jsxs)("div",{className:"mb-2",children:[(0,m.jsxs)("div",{className:"bg-blue-100 mb-2 flex justify-between px-2 p-2 rounded-lg",children:[(0,m.jsxs)("div",{children:[e.index,"、"]}),(0,m.jsx)("div",{className:"flex-1",children:e.title}),(0,m.jsxs)("div",{className:"w-24 text-center",children:[(0,m.jsx)("span",{className:"mr-1",children:(0,m.jsx)(X.Z,{color:"#3b79d0",children:e.name})}),(0,m.jsx)("span",{children:(0,m.jsx)($.Z,{type:"circle",strokeColor:{"0%":"#108ee9","100%":"#87d068"},width:30,percent:e.accomplish})})]})]}),(0,m.jsx)("div",{className:"flex justify-start",children:(0,m.jsx)(J.Z.PreviewGroup,{children:e.avatars.map((function(e,n){return(0,m.jsx)("div",{className:"mr-2",children:(0,m.jsx)(J.Z,{className:"w-28",src:e,placeholder:(0,m.jsx)(J.Z,{preview:!1,src:e})})},n)}))})})]},e.index)}))]},n.key)})}}),(0,m.jsx)(ne,{openComment:o,loadingComment:u,onOkOrCancel:function(e){("ok"===e||"cancel"===e)&&s(!1)}})]})},re=t(55076),oe=t(20681),ie=function(){var e=(0,a.useState)(!1),n=(0,r.Z)(e,2),t=n[0],o=n[1],i=(0,a.useState)(!1),s=(0,r.Z)(i,2),l=s[0];s[1];return(0,m.jsxs)("div",{children:[(0,m.jsx)(re.Z,{icon:(0,m.jsx)(oe.Z,{}),onClick:function(){o(!0)}}),(0,m.jsx)(u.Z,{title:"新增任务",open:t,confirmLoading:l,onOkOrCancel:function(e){o(!1)},children:"123"})]})},se=function(){return(0,m.jsx)(_,{children:(0,m.jsxs)("div",{className:"flex justify-between min-w-xxl",children:[(0,m.jsx)("div",{className:"w-2/5  h-full relative",children:(0,m.jsx)(M,{})}),(0,m.jsx)("div",{className:"w-3/5  overflow-y-auto",style:{height:"calc(100vh - 10px)"},children:(0,m.jsx)(ae,{})}),(0,m.jsx)(ie,{})]})})}}}]);