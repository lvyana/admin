"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[183],{10183:function(t,e,n){n.d(e,{Z:function(){return L}});var a=n(4942),c=n(29439),o=n(71002),i=n(81694),s=n.n(i),r=n(72791),l=n(71929),g=n(41818),d=function(t){var e,n,c=t.prefixCls,o=t.className,i=t.style,l=t.size,g=t.shape,d=s()((e={},(0,a.Z)(e,"".concat(c,"-lg"),"large"===l),(0,a.Z)(e,"".concat(c,"-sm"),"small"===l),e)),u=s()((n={},(0,a.Z)(n,"".concat(c,"-circle"),"circle"===g),(0,a.Z)(n,"".concat(c,"-square"),"square"===g),(0,a.Z)(n,"".concat(c,"-round"),"round"===g),n)),m=r.useMemo((function(){return"number"==typeof l?{width:l,height:l,lineHeight:"".concat(l,"px")}:{}}),[l]);return r.createElement("span",{className:s()(c,d,u,o),style:Object.assign(Object.assign({},m),i)})},u=n(63814),m=n(55564),h=n(89922),b=new u.E4("ant-skeleton-loading",{"0%":{backgroundPosition:"100% 50%"},"100%":{backgroundPosition:"0 50%"}}),v=function(t){return{height:t,lineHeight:"".concat(t,"px")}},p=function(t){return Object.assign({width:t},v(t))},f=function(t){return Object.assign({width:5*t,minWidth:5*t},v(t))},k=function(t){return Object.assign({width:t},v(t))},Z=function(t,e,n){var c,o=t.skeletonButtonCls;return c={},(0,a.Z)(c,"".concat(n).concat(o,"-circle"),{width:e,minWidth:e,borderRadius:"50%"}),(0,a.Z)(c,"".concat(n).concat(o,"-round"),{borderRadius:e}),c},C=function(t){return Object.assign({width:2*t,minWidth:2*t},v(t))},j=function(t){var e,n,c,o,i,s=t.componentCls,r=t.skeletonAvatarCls,l=t.skeletonTitleCls,g=t.skeletonParagraphCls,d=t.skeletonButtonCls,u=t.skeletonInputCls,m=t.skeletonImageCls,h=t.controlHeight,v=t.controlHeightLG,j=t.controlHeightSM,O=t.color,w=t.padding,x=t.marginSM,E=t.borderRadius,N=t.skeletonTitleHeight,y=t.skeletonBlockRadius,H=t.skeletonParagraphLineHeight,z=t.controlHeightXS,R=t.skeletonParagraphMarginTop;return i={},(0,a.Z)(i,"".concat(s),(c={display:"table",width:"100%"},(0,a.Z)(c,"".concat(s,"-header"),(e={display:"table-cell",paddingInlineEnd:w,verticalAlign:"top"},(0,a.Z)(e,"".concat(r),Object.assign({display:"inline-block",verticalAlign:"top",background:O},p(h))),(0,a.Z)(e,"".concat(r,"-circle"),{borderRadius:"50%"}),(0,a.Z)(e,"".concat(r,"-lg"),Object.assign({},p(v))),(0,a.Z)(e,"".concat(r,"-sm"),Object.assign({},p(j))),e)),(0,a.Z)(c,"".concat(s,"-content"),(n={display:"table-cell",width:"100%",verticalAlign:"top"},(0,a.Z)(n,"".concat(l),(0,a.Z)({width:"100%",height:N,background:O,borderRadius:y},"+ ".concat(g),{marginBlockStart:j})),(0,a.Z)(n,"".concat(g),{padding:0,"> li":{width:"100%",height:H,listStyle:"none",background:O,borderRadius:y,"+ li":{marginBlockStart:z}}}),(0,a.Z)(n,"".concat(g,"> li:last-child:not(:first-child):not(:nth-child(2))"),{width:"61%"}),n)),(0,a.Z)(c,"&-round ".concat(s,"-content"),(0,a.Z)({},"".concat(l,", ").concat(g," > li"),{borderRadius:E})),c)),(0,a.Z)(i,"".concat(s,"-with-avatar ").concat(s,"-content"),(0,a.Z)({},"".concat(l),(0,a.Z)({marginBlockStart:x},"+ ".concat(g),{marginBlockStart:R}))),(0,a.Z)(i,"".concat(s).concat(s,"-element"),Object.assign(Object.assign(Object.assign(Object.assign({display:"inline-block",width:"auto"},function(t){var e=t.borderRadiusSM,n=t.skeletonButtonCls,c=t.controlHeight,o=t.controlHeightLG,i=t.controlHeightSM,s=t.color;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign((0,a.Z)({},"".concat(n),Object.assign({display:"inline-block",verticalAlign:"top",background:s,borderRadius:e,width:2*c,minWidth:2*c},C(c))),Z(t,c,n)),(0,a.Z)({},"".concat(n,"-lg"),Object.assign({},C(o)))),Z(t,o,"".concat(n,"-lg"))),(0,a.Z)({},"".concat(n,"-sm"),Object.assign({},C(i)))),Z(t,i,"".concat(n,"-sm")))}(t)),function(t){var e,n=t.skeletonAvatarCls,c=t.color,o=t.controlHeight,i=t.controlHeightLG,s=t.controlHeightSM;return e={},(0,a.Z)(e,"".concat(n),Object.assign({display:"inline-block",verticalAlign:"top",background:c},p(o))),(0,a.Z)(e,"".concat(n).concat(n,"-circle"),{borderRadius:"50%"}),(0,a.Z)(e,"".concat(n).concat(n,"-lg"),Object.assign({},p(i))),(0,a.Z)(e,"".concat(n).concat(n,"-sm"),Object.assign({},p(s))),e}(t)),function(t){var e,n=t.controlHeight,c=t.borderRadiusSM,o=t.skeletonInputCls,i=t.controlHeightLG,s=t.controlHeightSM,r=t.color;return e={},(0,a.Z)(e,"".concat(o),Object.assign({display:"inline-block",verticalAlign:"top",background:r,borderRadius:c},f(n))),(0,a.Z)(e,"".concat(o,"-lg"),Object.assign({},f(i))),(0,a.Z)(e,"".concat(o,"-sm"),Object.assign({},f(s))),e}(t)),function(t){var e,n,c=t.skeletonImageCls,o=t.imageSizeBase,i=t.color,s=t.borderRadiusSM;return n={},(0,a.Z)(n,"".concat(c),Object.assign(Object.assign({display:"flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",background:i,borderRadius:s},k(2*o)),(e={},(0,a.Z)(e,"".concat(c,"-path"),{fill:"#bfbfbf"}),(0,a.Z)(e,"".concat(c,"-svg"),Object.assign(Object.assign({},k(o)),{maxWidth:4*o,maxHeight:4*o})),(0,a.Z)(e,"".concat(c,"-svg").concat(c,"-svg-circle"),{borderRadius:"50%"}),e))),(0,a.Z)(n,"".concat(c).concat(c,"-circle"),{borderRadius:"50%"}),n}(t))),(0,a.Z)(i,"".concat(s).concat(s,"-block"),(o={width:"100%"},(0,a.Z)(o,"".concat(d),{width:"100%"}),(0,a.Z)(o,"".concat(u),{width:"100%"}),o)),(0,a.Z)(i,"".concat(s).concat(s,"-active"),(0,a.Z)({},"\n        ".concat(l,",\n        ").concat(g," > li,\n        ").concat(r,",\n        ").concat(d,",\n        ").concat(u,",\n        ").concat(m,"\n      "),Object.assign({},function(t){return{background:t.skeletonLoadingBackground,backgroundSize:"400% 100%",animationName:b,animationDuration:t.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite"}}(t)))),i},O=(0,m.Z)("Skeleton",(function(t){var e=t.componentCls,n=(0,h.TS)(t,{skeletonAvatarCls:"".concat(e,"-avatar"),skeletonTitleCls:"".concat(e,"-title"),skeletonParagraphCls:"".concat(e,"-paragraph"),skeletonButtonCls:"".concat(e,"-button"),skeletonInputCls:"".concat(e,"-input"),skeletonImageCls:"".concat(e,"-image"),imageSizeBase:1.5*t.controlHeight,skeletonTitleHeight:t.controlHeight/2,skeletonBlockRadius:t.borderRadiusSM,skeletonParagraphLineHeight:t.controlHeight/2,skeletonParagraphMarginTop:t.marginLG+t.marginXXS,borderRadius:100,skeletonLoadingBackground:"linear-gradient(90deg, ".concat(t.color," 25%, ").concat(t.colorGradientEnd," 37%, ").concat(t.color," 63%)"),skeletonLoadingMotionDuration:"1.4s"});return[j(n)]}),(function(t){return{color:t.colorFillContent,colorGradientEnd:t.colorFill}})),w=function(t){var e=t.prefixCls,n=t.className,o=t.rootClassName,i=t.active,u=t.shape,m=void 0===u?"circle":u,h=t.size,b=void 0===h?"default":h,v=(0,r.useContext(l.E_).getPrefixCls)("skeleton",e),p=O(v),f=(0,c.Z)(p,2),k=f[0],Z=f[1],C=(0,g.Z)(t,["prefixCls","className"]),j=s()(v,"".concat(v,"-element"),(0,a.Z)({},"".concat(v,"-active"),i),n,o,Z);return k(r.createElement("div",{className:j},r.createElement(d,Object.assign({prefixCls:"".concat(v,"-avatar"),shape:m,size:b},C))))},x=function(t){var e,n=t.prefixCls,o=t.className,i=t.rootClassName,u=t.active,m=t.block,h=void 0!==m&&m,b=t.size,v=void 0===b?"default":b,p=(0,r.useContext(l.E_).getPrefixCls)("skeleton",n),f=O(p),k=(0,c.Z)(f,2),Z=k[0],C=k[1],j=(0,g.Z)(t,["prefixCls"]),w=s()(p,"".concat(p,"-element"),(e={},(0,a.Z)(e,"".concat(p,"-active"),u),(0,a.Z)(e,"".concat(p,"-block"),h),e),o,i,C);return Z(r.createElement("div",{className:w},r.createElement(d,Object.assign({prefixCls:"".concat(p,"-button"),size:v},j))))},E=n(1413),N={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"},y=n(8711),H=function(t,e){return r.createElement(y.Z,(0,E.Z)((0,E.Z)({},t),{},{ref:e,icon:N}))};H.displayName="DotChartOutlined";var z=r.forwardRef(H),R=function(t){var e=t.prefixCls,n=t.className,o=t.rootClassName,i=t.style,g=t.active,d=t.children,u=(0,r.useContext(l.E_).getPrefixCls)("skeleton",e),m=O(u),h=(0,c.Z)(m,2),b=h[0],v=h[1],p=s()(u,"".concat(u,"-element"),(0,a.Z)({},"".concat(u,"-active"),g),v,n,o),f=null!=d?d:r.createElement(z,null);return b(r.createElement("div",{className:p},r.createElement("div",{className:s()("".concat(u,"-image"),n),style:i},f)))},S=function(t){var e=t.prefixCls,n=t.className,o=t.rootClassName,i=t.style,g=t.active,d=(0,r.useContext(l.E_).getPrefixCls)("skeleton",e),u=O(d),m=(0,c.Z)(u,2),h=m[0],b=m[1],v=s()(d,"".concat(d,"-element"),(0,a.Z)({},"".concat(d,"-active"),g),n,o,b);return h(r.createElement("div",{className:v},r.createElement("div",{className:s()("".concat(d,"-image"),n),style:i},r.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(d,"-image-svg")},r.createElement("path",{d:"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",className:"".concat(d,"-image-path")})))))},M=function(t){var e,n=t.prefixCls,o=t.className,i=t.rootClassName,u=t.active,m=t.block,h=t.size,b=void 0===h?"default":h,v=(0,r.useContext(l.E_).getPrefixCls)("skeleton",n),p=O(v),f=(0,c.Z)(p,2),k=f[0],Z=f[1],C=(0,g.Z)(t,["prefixCls"]),j=s()(v,"".concat(v,"-element"),(e={},(0,a.Z)(e,"".concat(v,"-active"),u),(0,a.Z)(e,"".concat(v,"-block"),m),e),o,i,Z);return k(r.createElement("div",{className:j},r.createElement(d,Object.assign({prefixCls:"".concat(v,"-input"),size:b},C))))},B=n(93433),A=function(t){var e=function(e){var n=t.width,a=t.rows,c=void 0===a?2:a;return Array.isArray(n)?n[e]:c-1===e?n:void 0},n=t.prefixCls,a=t.className,c=t.style,o=t.rows,i=(0,B.Z)(Array(o)).map((function(t,n){return r.createElement("li",{key:n,style:{width:e(n)}})}));return r.createElement("ul",{className:s()(n,a),style:c},i)},P=function(t){var e=t.prefixCls,n=t.className,a=t.width,c=t.style;return r.createElement("h3",{className:s()(e,n),style:Object.assign({width:a},c)})};function q(t){return t&&"object"===(0,o.Z)(t)?t:{}}var I=function(t){var e=t.prefixCls,n=t.loading,o=t.className,i=t.rootClassName,g=t.style,u=t.children,m=t.avatar,h=void 0!==m&&m,b=t.title,v=void 0===b||b,p=t.paragraph,f=void 0===p||p,k=t.active,Z=t.round,C=r.useContext(l.E_),j=C.getPrefixCls,w=C.direction,x=j("skeleton",e),E=O(x),N=(0,c.Z)(E,2),y=N[0],H=N[1];if(n||!("loading"in t)){var z,R,S,M=!!h,B=!!v,I=!!f;if(M){var L=Object.assign(Object.assign({prefixCls:"".concat(x,"-avatar")},function(t,e){return t&&!e?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}(B,I)),q(h));R=r.createElement("div",{className:"".concat(x,"-header")},r.createElement(d,Object.assign({},L)))}if(B||I){var T,_;if(B){var G=Object.assign(Object.assign({prefixCls:"".concat(x,"-title")},function(t,e){return!t&&e?{width:"38%"}:t&&e?{width:"50%"}:{}}(M,I)),q(v));T=r.createElement(P,Object.assign({},G))}if(I){var W=Object.assign(Object.assign({prefixCls:"".concat(x,"-paragraph")},function(t,e){var n={};return t&&e||(n.width="61%"),n.rows=!t&&e?3:2,n}(M,B)),q(f));_=r.createElement(A,Object.assign({},W))}S=r.createElement("div",{className:"".concat(x,"-content")},T,_)}var D=s()(x,(z={},(0,a.Z)(z,"".concat(x,"-with-avatar"),M),(0,a.Z)(z,"".concat(x,"-active"),k),(0,a.Z)(z,"".concat(x,"-rtl"),"rtl"===w),(0,a.Z)(z,"".concat(x,"-round"),Z),z),o,i,H);return y(r.createElement("div",{className:D,style:g},R,S))}return void 0!==u?u:null};I.Button=x,I.Avatar=w,I.Input=M,I.Image=S,I.Node=R;var L=I}}]);