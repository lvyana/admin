"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[5268],{94805:function(e,n,t){var r=t(1413),a=(t(72791),t(36473)),i=t(80184);n.Z=function(e){var n=e.bordered,t=void 0!==n&&n,l=e.children,s=e.style,c=void 0===s?{}:s,u=e.hoverable,o=void 0!==u&&u,d=e.className;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(a.Z,{hoverable:o,bordered:t,bodyStyle:(0,r.Z)({padding:"16px"},c),className:d,children:l})})}},44299:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var r=t(72791),a=t(66106),i=t(30914),l=t(94805),s=t(94433),c=t(80184),u=function(){var e=(0,r.useRef)(null);(0,r.useEffect)((function(){n()}),[]);var n=function(){fetch("https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json").then((function(e){return e.json()})).then((function(e){t(e)})).catch((function(e){}))},t=function(n){var t;null===(t=e.current)||void 0===t||t.destroy(),e.current=new s.Line("lineDiv",{data:n,padding:"auto",xField:"Date",yField:"scales",xAxis:{tickCount:5}}),e.current.render()};return(0,c.jsx)("div",{id:"lineDiv"})},o=function(){var e=(0,r.useRef)(null);(0,r.useEffect)((function(){n()}),[]);var n=function(){fetch("https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json").then((function(e){return e.json()})).then((function(n){var t;null===(t=e.current)||void 0===t||t.destroy(),e.current=new s.Area("area",{data:n,xField:"timePeriod",yField:"value",xAxis:{range:[0,1]}}),e.current.render()}))};return(0,c.jsx)("div",{id:"area"})},d=[{type:"家具家电",sales:38},{type:"粮油副食",sales:52},{type:"生鲜水果",sales:61},{type:"美容洗护",sales:145},{type:"母婴用品",sales:48},{type:"进口食品",sales:38},{type:"食品饮料",sales:38},{type:"家庭清洁",sales:38}],f=function(){var e=(0,r.useRef)(null);(0,r.useEffect)((function(){n()}),[]);var n=function(){var n;null===(n=e.current)||void 0===n||n.destroy(),e.current=new s.Column("columnPlot",{data:d,xField:"type",yField:"sales",label:{position:"middle",style:{fill:"#FFFFFF",opacity:.6}},xAxis:{label:{autoHide:!0,autoRotate:!1}},meta:{type:{alias:"类别"},sales:{alias:"销售额"}}}),e.current.render()};return(0,c.jsx)("div",{id:"columnPlot"})},p=[{type:"分类一",value:27},{type:"分类二",value:25},{type:"分类三",value:18},{type:"分类四",value:15},{type:"分类五",value:10},{type:"其他",value:5}],v=function(){var e=(0,r.useRef)(null);(0,r.useEffect)((function(){n()}),[]);var n=function(){var n;null===(n=e.current)||void 0===n||n.destroy(),e.current=new s.Pie("piePlot",{appendPadding:10,data:p,angleField:"value",colorField:"type",radius:.9,label:{type:"inner",offset:"-30%",content:function(e){var n=e.percent;return"".concat((100*n).toFixed(0),"%")},style:{fontSize:14,textAlign:"center"}},interactions:[{type:"element-active"}]}),e.current.render()};return(0,c.jsx)("div",{id:"piePlot"})},y=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(a.Z,{gutter:16,children:[(0,c.jsx)(i.Z,{span:12,className:"mb-4",children:(0,c.jsx)(l.Z,{children:(0,c.jsx)(u,{})})}),(0,c.jsx)(i.Z,{span:12,className:"mb-4",children:(0,c.jsx)(l.Z,{children:(0,c.jsx)(o,{})})}),(0,c.jsx)(i.Z,{span:12,children:(0,c.jsx)(l.Z,{children:(0,c.jsx)(f,{})})}),(0,c.jsx)(i.Z,{span:12,children:(0,c.jsx)(l.Z,{children:(0,c.jsx)(v,{})})})]})})}}}]);