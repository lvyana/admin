"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[5268],{99259:function(e,n,t){t.r(n),t.d(n,{default:function(){return F}});var r=t(72791),l=t(66106),a=t(30914),i=t(94805),s=t(12163),u=t(80184),d=function(){var e=(0,r.useRef)(null);(0,r.useEffect)((function(){n()}),[]);var n=function(){fetch("https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json").then((function(e){return e.json()})).then((function(e){t(e)})).catch((function(e){}))},t=function(n){var t;null===(t=e.current)||void 0===t||t.destroy(),e.current=new s.Line("lineDiv",{data:n,padding:"auto",xField:"Date",yField:"scales",xAxis:{tickCount:5}}),e.current.render()};return(0,u.jsx)("div",{id:"lineDiv"})},o=function(){var e=(0,r.useRef)(null);(0,r.useEffect)((function(){n()}),[]);var n=function(){fetch("https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json").then((function(e){return e.json()})).then((function(n){var t;null===(t=e.current)||void 0===t||t.destroy(),e.current=new s.Area("area",{data:n,xField:"timePeriod",yField:"value",xAxis:{range:[0,1]}}),e.current.render()}))};return(0,u.jsx)("div",{id:"area"})},c=[{type:"家具家电",sales:38},{type:"粮油副食",sales:52},{type:"生鲜水果",sales:61},{type:"美容洗护",sales:145},{type:"母婴用品",sales:48},{type:"进口食品",sales:38},{type:"食品饮料",sales:38},{type:"家庭清洁",sales:38}],f=function(){var e=(0,r.useRef)(null);(0,r.useEffect)((function(){n()}),[]);var n=function(){var n;null===(n=e.current)||void 0===n||n.destroy(),e.current=new s.Column("columnPlot",{data:c,xField:"type",yField:"sales",label:{position:"middle",style:{fill:"#FFFFFF",opacity:.6}},xAxis:{label:{autoHide:!0,autoRotate:!1}},meta:{type:{alias:"类别"},sales:{alias:"销售额"}}}),e.current.render()};return(0,u.jsx)("div",{id:"columnPlot"})},v=[{type:"分类一",value:27},{type:"分类二",value:25},{type:"分类三",value:18},{type:"分类四",value:15},{type:"分类五",value:10},{type:"其他",value:5}],m=function(){var e=(0,r.useRef)(null);(0,r.useEffect)((function(){n()}),[]);var n=function(){var n;null===(n=e.current)||void 0===n||n.destroy(),e.current=new s.Pie("piePlot",{appendPadding:10,data:v,angleField:"value",colorField:"type",radius:.9,label:{type:"inner",offset:"-30%",content:function(e){var n=e.percent;return"".concat((100*n).toFixed(0),"%")},style:{fontSize:14,textAlign:"center"}},interactions:[{type:"element-active"}]}),e.current.render()};return(0,u.jsx)("div",{id:"piePlot"})},x=function(e){var n=e.divId,t=void 0===n?"gauge":n,l=(0,r.useRef)(null);(0,r.useEffect)((function(){a()}),[]);var a=function(){var e;null===(e=l.current)||void 0===e||e.destroy(),l.current=new s.Gauge(t,{percent:.75,range:{color:"l(0) 0:#B8E1FF 1:#3D76DD"},startAngle:Math.PI,endAngle:2*Math.PI,indicator:void 0,statistic:{title:{offsetY:-36,style:{fontSize:"36px",color:"#4B535E"},formatter:function(){return"70%"}},content:{style:{fontSize:"24px",lineHeight:"44px",color:"#4B535E"},formatter:function(){return"加载进度"}}}}),l.current.render()};return(0,u.jsx)("div",{id:t})},p=function(e){var n=e.divId,t=void 0===n?"liquid":n,l=(0,r.useRef)(null);(0,r.useEffect)((function(){a()}),[]);var a=function(){var e;null===(e=l.current)||void 0===e||e.destroy(),l.current=new s.Liquid(t,{percent:.25,outline:{border:4,distance:8},wave:{length:128}}),l.current.render()};return(0,u.jsx)("div",{id:t})},y=function(e){var n=e.divId,t=void 0===n?"WordCloud":n,l=(0,r.useRef)(null);(0,r.useEffect)((function(){a()}),[]);var a=function(){var e;null===(e=l.current)||void 0===e||e.destroy(),fetch("https://gw.alipayobjects.com/os/antvdemo/assets/data/antv-keywords.json").then((function(e){return e.json()})).then((function(e){l.current=new s.WordCloud(t,{data:e,wordField:"name",weightField:"value",colorField:"name",wordStyle:{fontFamily:"Verdana",fontSize:[8,32],rotation:0},random:function(){return.5}}),l.current.render()}))};return(0,u.jsx)("div",{id:t})},h=[{value:100,name:"展现"},{value:80,name:"点击"},{value:60,name:"访问"},{value:40,name:"咨询"},{value:30,name:"订单"}],j=[{value:80,name:"展现"},{value:50,name:"点击"},{value:30,name:"访问"},{value:10,name:"咨询"},{value:5,name:"订单"}],g=function(e){var n=e.divId,t=void 0===n?"mix":n,l=(0,r.useRef)(null);(0,r.useEffect)((function(){a()}),[]);var a=function(){var e;null===(e=l.current)||void 0===e||e.destroy(),l.current=new s.Mix(t,{appendPadding:[8,40,8,18],syncViewPadding:!0,meta:{value:{sync:!0}},tooltip:{shared:!0,showMarkers:!1,showTitle:!1},plots:[{type:"funnel",options:{data:h,yField:"value",xField:"name",shape:"pyramid",conversionTag:!1,label:{position:"right",style:{fill:"rgba(0,0,0,0.65)"},offsetX:10},funnelStyle:{fillOpacity:.85}}},{type:"funnel",options:{data:j,yField:"value",xField:"name",shape:"pyramid",conversionTag:!1,label:!1,funnelStyle:{lineWidth:1,stroke:"#fff"}}}],interactions:[{type:"element-active"}]}),l.current.render()};return(0,u.jsx)("div",{id:t})},F=function(){return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(l.Z,{gutter:16,children:[(0,u.jsx)(a.Z,{xs:24,sm:24,md:12,lg:12,xl:6,className:"mb-4",children:(0,u.jsx)(i.Z,{children:(0,u.jsx)(x,{divId:"gauge1"})})}),(0,u.jsx)(a.Z,{xs:24,sm:24,md:12,lg:12,xl:6,className:"mb-4",children:(0,u.jsx)(i.Z,{children:(0,u.jsx)(p,{divId:"liquid"})})}),(0,u.jsx)(a.Z,{xs:24,sm:24,md:12,lg:12,xl:6,className:"mb-4",children:(0,u.jsx)(i.Z,{children:(0,u.jsx)(y,{divId:"wordCloud"})})}),(0,u.jsx)(a.Z,{xs:24,sm:24,md:12,lg:12,xl:6,className:"mb-4",children:(0,u.jsx)(i.Z,{children:(0,u.jsx)(g,{divId:"DemoMix"})})}),(0,u.jsx)(a.Z,{xs:24,sm:24,md:24,lg:12,xl:12,className:"mb-4",children:(0,u.jsx)(i.Z,{children:(0,u.jsx)(d,{})})}),(0,u.jsx)(a.Z,{xs:24,sm:24,md:24,lg:12,xl:12,className:"mb-4",children:(0,u.jsx)(i.Z,{children:(0,u.jsx)(o,{})})}),(0,u.jsx)(a.Z,{xs:24,sm:24,md:24,lg:12,xl:12,className:"mb-4",children:(0,u.jsx)(i.Z,{children:(0,u.jsx)(f,{})})}),(0,u.jsx)(a.Z,{xs:24,sm:24,md:24,lg:12,xl:12,className:"mb-4",children:(0,u.jsx)(i.Z,{children:(0,u.jsx)(m,{})})})]})})}}}]);