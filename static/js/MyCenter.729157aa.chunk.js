"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[4706],{72185:(e,s,t)=>{t.r(s),t.d(s,{default:()=>b});var r=t(65043),n=t(76566),i=t(19573),o=t(39063),a=t(2761),l=t(10430),d=t(82485),c=(t(9686),t(68748)),u=t(70579);const p=e=>{let{updatepPhoto:s,setPhotoFinish:t}=e;const n=(0,r.useRef)(null),[i,o]=(0,r.useState)(!0);return(0,u.jsx)(c.A,{spinning:i,children:(0,u.jsx)(d.A,{src:s,style:{height:400,width:"100%"},initialAspectRatio:16/9,guides:!1,crop:()=>{const e=null==n?void 0:n.current,s=null==e?void 0:e.cropper;t(s.getCroppedCanvas().toDataURL()),o(!1)},ref:n})})};var h=t(47419),x=t(11645),j=t(29234),m=t(87021),A=t(94733);const f=e=>{let{photoFinish:s,setPhotoFinish:t}=e;const[n,i]=(0,r.useState)(s);return(0,u.jsxs)("div",{children:[(0,u.jsxs)(h.A,{gutter:20,align:"bottom",children:[(0,u.jsx)(x.A,{span:16,children:(0,u.jsx)(p,{updatepPhoto:n,setPhotoFinish:t})}),(0,u.jsx)(x.A,{span:8,children:(0,u.jsx)(a.A,{src:s,size:200,icon:(0,u.jsx)(l.A,{})})})]}),(0,u.jsx)("div",{style:{marginTop:"10px"},children:(0,u.jsx)(j.A,{name:"file",showUploadList:!1,beforeUpload:function(e){return v(e,(e=>{i(e)})),!1},children:(0,u.jsx)(m.Ay,{icon:(0,u.jsx)(A.A,{}),children:"上传头像"})})})]})},v=(e,s)=>{const t=new FileReader;t.addEventListener("load",(()=>s(t.result))),t.readAsDataURL(e)};var g=t(73216),F=t(34496),P=t(28416);const w=()=>{const e=(0,g.zy)(),[s]=F.A.useForm();(0,r.useEffect)((()=>{var t;e.state?s.setFieldsValue({userName:null===(t=e.state)||void 0===t?void 0:t.name}):s.setFieldsValue({userName:void 0})}),[s,e]);return(0,u.jsxs)(F.A,{form:s,labelCol:{span:4,offset:4},wrapperCol:{span:12},onFinish:e=>{},onFinishFailed:e=>{},children:[(0,u.jsx)(F.A.Item,{label:"用户名",name:"userName",rules:[{required:!0,message:"Please input your username!"}],children:(0,u.jsx)(P.A,{})}),(0,u.jsx)(F.A.Item,{label:"密码",name:"passWord",rules:[{required:!0,message:"Please input your password!"}],children:(0,u.jsx)(P.A.Password,{})}),(0,u.jsx)(F.A.Item,{label:"确认密码",name:"confirmPassWord",rules:[{required:!0,message:"Please input your confirm password!"},{validator:(e,t)=>t&&t!==s.getFieldValue("passWord")?Promise.reject(new Error("密码不一致")):Promise.resolve()}],children:(0,u.jsx)(P.A.Password,{})}),(0,u.jsx)(F.A.Item,{wrapperCol:{offset:8,span:16},children:(0,u.jsx)(m.Ay,{type:"primary",htmlType:"submit",children:"Submit"})})]})};var y=t(8651);const b=()=>{const e=(0,i.jL)(),[s,t]=(0,r.useState)(!1),[d,c]=(0,r.useState)(!1),p=(0,i.GV)(o.yl),[h,x]=(0,r.useState)(p);return(0,u.jsxs)(n.A,{children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{style:{marginBottom:"20px",textAlign:"center"},children:(0,u.jsx)("span",{onClick:()=>{x(p),t(!0)},children:(0,u.jsx)(a.A,{src:p,size:200,icon:(0,u.jsx)(l.A,{})})})}),(0,u.jsx)(w,{})]}),(0,u.jsx)(y.A,{title:"修改头像",open:s,confirmLoading:d,onOk:()=>{c(!0),setTimeout((()=>{e((0,o.c5)(h)),t(!1),c(!1)}),1e3)},onCancel:()=>{t(!1)},width:800,children:(0,u.jsx)(f,{photoFinish:h,setPhotoFinish:x})})]})}}}]);