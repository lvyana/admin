(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[7444],{94805:function(e,n,t){"use strict";var a=t(1413),r=(t(72791),t(36473)),i=t(80184);n.Z=function(e){var n=e.bordered,t=void 0!==n&&n,o=e.children,u=e.style,c=void 0===u?{}:u,s=e.hoverable,f=void 0!==s&&s,l=e.className;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.Z,{hoverable:f,bordered:t,bodyStyle:(0,a.Z)({padding:"16px"},c),className:l,children:o})})}},64290:function(e,n,t){"use strict";var a=t(1413),r=t(72791),i=t(57184),o=t(15255),u=t(85060),c=t(80184);n.Z=function(e){var n=e.total,t=e.page,s=e.onPaginationChange,f=e.showTotal,l=void 0===f||f,d=e.showSizeChanger,h=void 0===d||d,p=e.showQuickJumper,v=void 0===p||p,g=e.style,m=e.className,w=(0,o.CG)(u.h2),Z=(0,r.useMemo)((function(){return"small"===w?"small":"default"}),[w]),b=t.current,j=b.pageNum,x=b.pageSize;return(0,c.jsx)(i.Z,{style:(0,a.Z)({marginTop:"30px",float:"right"},g),className:m,total:n,showSizeChanger:h,showQuickJumper:v,defaultCurrent:j,defaultPageSize:x,current:j,pageSize:x,onChange:function(e,n){t.current={pageSize:n,pageNum:e},s("subimt")},size:Z,showTotal:function(e){if(l)return"总 ".concat(e," 条")}})}},8360:function(e,n,t){"use strict";var a=t(37762),r=t(29439),i=t(72791),o=t(90474);n.Z=function(e){var n=(0,i.useState)(),t=(0,r.Z)(n,2),u=t[0],c=t[1],s=new o.Z((function(e,n){var t,r=(0,a.Z)(e);try{for(r.s();!(t=r.n()).done;){var i=t.value.contentRect,o=i.left,u=i.top,s=i.width,f=i.height;c({left:o,top:u,width:s,height:f})}}catch(e){r.e(e)}finally{r.f()}}));return(0,i.useEffect)((function(){return e&&s.observe(e),function(){e&&s.unobserve(e)}}),[e]),{resize:u}}},76327:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var a=t(29439),r=t(72791),i=t(86092),o=t(94805),u="pdf_pdf__f9b+W",c=(t(27549),t(20717),t(19689)),s=t(8360),f=t.p+"static/media/title.80c9fc23337351f81bfb.pdf",l=t(64290),d=t(64094),h=t(80184);i.v0.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(i.v0.version,"/pdf.worker.js");var p=function(){var e=(0,r.useRef)({pageNum:1,pageSize:1}),n=(0,r.useState)(1),t=(0,a.Z)(n,2),p=t[0],v=t[1],g=(0,r.useState)(0),m=(0,a.Z)(g,2),w=m[0],Z=m[1],b=(0,s.Z)(document.getElementById("pdfCard")).resize,j=(0,d.Z)(b,{wait:500});return(0,h.jsxs)(o.Z,{children:[(0,h.jsx)("div",{id:"pdfCard",className:u,onContextMenu:function(e){return function(e){e.preventDefault()}(e)},children:(0,h.jsx)(i.BB,{className:"w-full",file:f,onLoadSuccess:function(e){var n=e.numPages;v(n)},loading:(0,h.jsx)(c.Z,{}),children:(0,h.jsx)(i.T3,{pageNumber:e.current.pageNum,width:null==j?void 0:j.width})})}),(0,h.jsx)("div",{children:(0,h.jsx)(l.Z,{page:e,onPaginationChange:function(){Z(w+1)},total:p,showTotal:!1,showSizeChanger:!1,showQuickJumper:!1,className:"mt-4"})})]})}},93414:function(){},70172:function(){},2001:function(){},33779:function(){},66558:function(){},82258:function(){}}]);