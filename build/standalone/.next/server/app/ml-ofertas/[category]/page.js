(()=>{var e={};e.id=894,e.ids=[894],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},1808:e=>{"use strict";e.exports=require("net")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},4404:e=>{"use strict";e.exports=require("tls")},7310:e=>{"use strict";e.exports=require("url")},9796:e=>{"use strict";e.exports=require("zlib")},947:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>l.a,__next_app__:()=>h,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d});var s=r(482),n=r(9108),i=r(2563),l=r.n(i),a=r(8300),o={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>a[e]);r.d(t,o);let d=["",{children:["ml-ofertas",{children:["[category]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,6052)),"/Users/julian/dev/personal-website-nextjs/src/app/ml-ofertas/[category]/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,9139)),"/Users/julian/dev/personal-website-nextjs/src/app/ml-ofertas/layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,2197)),"/Users/julian/dev/personal-website-nextjs/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/julian/dev/personal-website-nextjs/src/app/ml-ofertas/[category]/page.tsx"],u="/ml-ofertas/[category]/page",h={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/ml-ofertas/[category]/page",pathname:"/ml-ofertas/[category]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},9558:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,1900,23)),Promise.resolve().then(r.bind(r,5895))},5895:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>F});var s=r(5344),n=r(3729),i=r(1202);let l=Math.min,a=Math.max,o=Math.abs,d=(Object.values,Array.isArray),c=setTimeout,u=(e,t,r)=>l(r,a(t,e)),h=e=>null!=e,m=e=>{let t,r;return(...s)=>(t||(t=!0,r=e(...s)),r)},p=(e,t,r)=>{let s=r?"unshift":"push";for(let r=0;r<t;r++)e[s](-1);return e},f=(e,t)=>{let r=e.t[t];return -1===r?e.o:r},x=(e,t)=>{if(!e.i)return 0;if(e.l>=t)return e.h[t];e.l<0&&(e.h[0]=0,e.l=0);let r=e.l,s=e.h[r];for(;r<t;)s+=f(e,r),e.h[++r]=s;return e.l=t,s},g=(e,t,r)=>{let s=x(e,r);for(;r>=0&&r<e.i;)if(s<=t){let n=f(e,r);if(s+n>t)break;s+=n,r++}else s-=f(e,--r);return u(r,0,e.i-1)},v=(e,t,r,s)=>{let n=g(e,t,l(r,e.i-1));return[n,g(e,t+s,n)]},b=(e,t,r)=>{let s;let n=t-e.i,i=n>0;return i?(s=e.o*n,p(e.t,n,r),p(e.h,n)):(s=(r?e.t.splice(0,-n):e.t.splice(n)).reduce((t,r)=>t+(-1===r?e.o:r),0),e.h.splice(n)),e.l=r?-1:l(t-1,e.l),e.i=t,[s,i]},y=e=>e.ownerDocument,j=e=>e.defaultView,w=m(()=>!1),_=m(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),N=(e,t,r)=>a(e-(1===r?1:a(1,t)),0),k=(e,t,r,s)=>l(e+(2===r?1:a(1,t)),s-1),P=(e,t,r)=>t.reduce((t,[s,n])=>{let i=n-f(e,s);return(!r||i>0)&&(t+=i),t},0),q=(e,t=40,r=0,s,n,i=0,d=0)=>{let c=!!r,h=[],m=0,g=0,y=0,j=0,w=0,N=0,k=0,q=0,E=c?[0,a(r-1,0)]:null,L=[0,0],S=s||{o:t,i:e,l:-1,t:p([],e),h:p([],e)},R=new Set,D=()=>S.i?x(S,S.i-1)+f(S,S.i-1):0,M=()=>D()+i+d,A=()=>a(0,M()-m),V=e=>{_()&&0!==k?w+=e:(j+=e,y++)};return{p:()=>h,v:()=>JSON.parse(JSON.stringify(S)),m:()=>E?[l(L[0],E[0]),a(L[1],E[1])]:N?L:L=v(S,g-i+w+j,L[0],m),S:e=>-1===S.t[e],I:()=>!!E&&S.t.slice(a(0,E[0]-1),l(S.i-1,E[1]+1)+1).includes(-1),R:e=>x(S,e)-w,C:e=>f(S,e),k:()=>S.i,T:()=>g,M:()=>k,_:()=>m,O:()=>i,H:()=>d,u:D,J:()=>y,W:()=>m>M()?j=0:(N=j,j=0,N),B(e,t){let r=[e,t];return R.add(r),()=>{R.delete(r)}},$(e,t){let r,s,i=0;switch(e){case 1:{let e=t.filter(([e,t])=>S.t[e]!==t);if(!e.length)break;let r=0;if(0===g);else if(g>A()-1.5)r=P(S,e,!0);else if(2===q)r=P(S,e);else{let[t]=L;r=P(S,e.filter(([e])=>e<t))}r&&V(r);let a=!1;e.forEach(([e,t])=>{((e,t,r)=>{let s=-1===e.t[t];return e.t[t]=r,e.l=l(t,e.l),s})(S,e,t)&&(a=!0)}),n&&a&&!g&&(e=>{let t=e.t.filter(e=>-1!==e),r=t[0];e.o=t.every(e=>e===r)?r:(e=>{let t=[...e].sort((e,t)=>e-t),r=e.length/2|0;return t.length%2==0?(t[r-1]+t[r])/2:t[r]})(t)})(S),i=2,s=!0;break}case 2:m!==t&&(m=t,i=2);break;case 3:if(t[1]){let e=A()-g,[r,s]=b(S,t[0],!0);V(s?r:-l(r,e)),s&&(q=2),i=1}else b(S,t[0]);break;case 4:{let e=u(t,0,A()),r=N;if(N=0,e===g)break;let n=e-g,l=o(n);r&&l<o(r)+1||0!==q||(k=n<0?2:1),c&&(E=null,c=!1),s=l>m,g=e,i=5;break}case 5:i=8,0!==k&&(r=!0,i+=1),k=0,q=0,E=null;break;case 6:q=1;break;case 7:E=v(S,t,L[0],m),i=1}i&&(h=[],r&&w&&(j+=w,w=0,y++),R.forEach(([e,t])=>{i&e&&t(s)}))}}},E=n.useEffect,L=(e,t)=>t&&w()?-e:e,S=(e,t,r,s,n)=>{let i=Date.now,l=0,a=!1,o=!1,d=!1,u=!1,m=(()=>{let t;let r=()=>{h(t)&&clearTimeout(t)},s=()=>{r(),t=c(()=>{t=null,(()=>{if(a||o)return a=!1,void m();d=!1,e.$(5)})()},150)};return s.A=r,s})(),p=()=>{l=i(),d&&(u=!0),e.$(4,s()),m()},f=t=>{if(a||0===e.M()||t.ctrlKey)return;let s=i()-l;150>s&&50<s&&(r?t.deltaX:t.deltaY)&&(a=!0)},x=()=>{o=!0,d=u=!1},g=()=>{o=!1,_()&&(d=!0)};return t.addEventListener("scroll",p),t.addEventListener("wheel",f,{passive:!0}),t.addEventListener("touchstart",x,{passive:!0}),t.addEventListener("touchend",g,{passive:!0}),{L:()=>{t.removeEventListener("scroll",p),t.removeEventListener("wheel",f),t.removeEventListener("touchstart",x),t.removeEventListener("touchend",g),m.A()},P:e=>{n(e,u),u=!1}}},R=(e,t)=>{let r;return{V(s){let n=t?"scrollX":"scrollY",i=y(s),l=j(i),a=i.body,o=(e,t,r,s=0)=>{let n=r?"offsetLeft":"offsetTop",i=s+(r&&w()?l.innerWidth-e[n]-e.offsetWidth:e[n]),a=e.offsetParent;return e!==t&&a?o(a,t,r,i):i};r=S(e,l,t,()=>L(l[n],t)-o(s,a,t),e=>{l.scrollBy(t?L(e,t):0,t?0:e)})},L(){r&&r.L()},P:e=>{r&&r.P(e)}}},D="current",M=(e,t)=>{if(d(e))for(let r of e)M(r,t);else h(e)&&"boolean"!=typeof e&&t.push(e)},A=(e,t)=>{let r=e.key;return h(r)?r:"_"+t},V=e=>{let t=(0,n.useRef)();return t[D]||(t[D]=e())},Z=e=>{let t=(0,n.useRef)(e);return E(()=>{t[D]=e},[e]),t},$=e=>{let t;return{V(r){(t||(t=new(j(y(r))).ResizeObserver(e))).observe(r)},D(e){t.unobserve(e)},L(){t&&t.disconnect()}}},U=(e,t)=>{let r;let s=t?"width":"height",n=t?"innerWidth":"innerHeight",i=new WeakMap,l=$(t=>{let r=[];for(let{target:e,contentRect:n}of t){if(!e.offsetParent)continue;let t=i.get(e);h(t)&&r.push([t,n[s]])}r.length&&e.$(1,r)});return{N(t){let s=j(y(t)),i=()=>{e.$(2,s[n])};s.addEventListener("resize",i),i(),r=()=>{s.removeEventListener("resize",i)}},U:(e,t)=>(i.set(e,t),l.V(e),()=>{i.delete(e),l.D(e)}),L(){r&&r(),l.L()}}},C=(0,n.memo)(({F:e,G:t,q:r,K:i,Z:l,ee:a,te:o,ne:d})=>{let c=(0,n.useRef)(null);E(()=>t(c[D],r),[r]);let u=(0,n.useMemo)(()=>{let e={margin:0,padding:0,position:l&&d?void 0:"absolute",[o?"height":"width"]:"100%",[o?"top":"left"]:0,[o?w()?"right":"left":"top"]:i,visibility:!l||d?"visible":"hidden"};return o&&(e.display="flex"),e},[i,l,d]);return(0,s.jsx)(a,"string"==typeof a?{ref:c,style:u,children:e}:{ref:c,style:u,index:r,children:e})}),G=e=>(0,n.useReducer)(e.p,void 0,e.p)[1],O=(e,t)=>(0,n.useMemo)(()=>{if("function"==typeof e)return[e,t||0];let r=(e=>{let t=[];return M(e,t),t})(e);return[e=>r[e],r.length]},[e,t]),z=(0,n.forwardRef)(({children:e,count:t,overscan:r=4,itemSize:l,shift:a,horizontal:o,cache:d,ssrCount:c,as:u="div",item:h="div",onScrollEnd:m,onRangeChange:p},f)=>{let[x,g]=O(e,t),v=(0,n.useRef)(null),b=Z(m),y=(0,n.useRef)(!!c),[j,w,_,P]=V(()=>{let e=!!o,t=q(g,l,c,d,!l);return[t,U(t,e),R(t,e),e]});g!==j.k()&&j.$(3,[g,a]);let L=G(j),[S,M]=j.m(),$=j.M(),z=j.J(),F=j.u(),I=[];E(()=>{y[D]=!1;let e=j.B(3,e=>{e?(0,i.flushSync)(L):L()}),t=j.B(8,()=>{b[D]&&b[D]()}),r=v[D];return w.N(r),_.V(r),()=>{e(),t(),w.L(),_.L()}},[]),E(()=>{let e=j.W();e&&_.P(e)},[z]),(0,n.useEffect)(()=>{p&&p(S,M)},[S,M]),(0,n.useImperativeHandle)(f,()=>({get cache(){return j.v()}}),[]);for(let e=N(S,r,$),t=k(M,r,$,g);e<=t;e++){let t=x(e);I.push((0,s.jsx)(C,{G:w.U,q:e,K:j.R(e),Z:j.S(e),ee:h,F:t,te:P,ne:y[D]},A(t,e)))}return(0,s.jsx)(u,{ref:v,style:{flex:"none",position:"relative",visibility:"hidden",width:P?F:"100%",height:P?"100%":F,pointerEvents:0!==$?"none":"auto"},children:I})});function F(e){return s.jsx(z,{...e})}},6052:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>u,dynamic:()=>h});var n=r(5036),i=r(988),l=r(4165),a=r(4610),o=r(1052),d=r(4664),c=e([i]);i=(c.then?(await c)():c)[0];let h="force-dynamic",m=(e,t)=>{let r=(0,l.r)(e.price_history),s=(0,l.r)(t.price_history),n=(0,l.S)(r,e.price_delta_vs_last_five_days??0),i=(0,l.S)(s,t.price_delta_vs_last_five_days??0);return n-i};async function u({params:e}){let t=decodeURIComponent(e.category),r=await (0,i.R1)(t);return r.length>0?(0,n.jsxs)(a.ZP,{children:[n.jsx("div",{className:"mb-8",children:n.jsx("h3",{id:t,className:"mb-4 text-xl font-semibold text-left",children:(0,o.V)(t)})},t),n.jsx("div",{className:"flex flex-wrap justify-start gap-8",children:r.sort(m).map(e=>n.jsx(d.Z,{image:e.image,price:(0,l.r)(e.price_history)??0,priceDeltaVsYesterday:e.price_delta_vs_yesterday??0,priceDeltaVs5Days:e.price_delta_vs_last_five_days??0,seller:e.seller,title:e.name,url:e.link,currency:e.currency_id},e.id))})]}):n.jsx("p",{className:"text-center",children:"No hay productos en oferta"})}s()}catch(e){s(e)}})},4664:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var s=r(5036),n=r(1947),i=r(990);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,r(9508).Z)("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);var a=r(2813),o=r(4165);function d({image:e,price:t,priceDeltaVsYesterday:r,priceDeltaVs5Days:d,seller:c,title:u,url:h,currency:m}){let p=Math.round(((0,o.S)(t,r)+Number.EPSILON)*100)/100,f={style:"currency",currency:m||"ARS",minimumFractionDigits:0,maximumFractionDigits:0,currencyDisplay:"ARS"!==m?"code":"narrowSymbol"};return(0,s.jsxs)(n.s,{href:h,className:"relative flex-grow m-0 w-72 h-96",children:[s.jsx("span",{className:(0,i.Z)(p<-30?"bg-gradient-to-tr from-purple-700 to-red-900 border-red-600":p<-20?"bg-gradient-to-tr from-red-700 to-orange-900 border-orange-600":p<-10?"bg-gradient-to-tr from-blue-700 to-blue-900 border-blue-600":p<0?"bg-gradient-to-tr from-green-700 to-green-900 border-green-600":"bg-gradient-to-tr from-gray-600 to-gray-800","absolute px-2 border rounded-full -right-2 -top-2 font-medium"),children:p<-30?`Se rifa 🚀 ${p}%`:p<-20?`De remate 🔥🔥🔥 ${p}%`:p<-10?`Superoferta 🔥 ${p}%`:p<0?`En oferta 🏷️ ${p}%`:0===p?"Sin cambios":p>0?"En aumento \uD83D\uDCC8":""}),s.jsx("div",{className:"w-full overflow-hidden h-52",children:s.jsx(a.default,{className:"flex-shrink-0 object-cover w-full h-full rounded-sm",alt:u,height:200,src:e,width:200,loading:"lazy"})}),(0,s.jsxs)("div",{className:"mt-4",children:[s.jsx("h3",{className:"font-medium line-clamp-2",children:u}),(0,s.jsxs)("small",{className:"text-muted-foreground/60",children:["Vendido por: ",c]}),(0,s.jsxs)("p",{className:"mt-2",children:[Intl.NumberFormat(void 0,f).format(t)," ",(0,s.jsxs)("small",{className:(0,i.Z)("px-1 py-0.5 rounded-sm",r>0?"text-red-600":0===r?"text-muted-foreground bg-card-background":"text-green-600 bg-destructive-background"),children:[s.jsx("span",{className:"h-3 ",children:r>0?s.jsx(l,{height:"1em",width:"1em",className:"inline-block"}):0===r?"~":s.jsx(l,{height:"1em",width:"1em",className:"inline-block rotate-180"})}),Intl.NumberFormat(void 0,f).format(r)," ","vs. ayer"]}),(0,s.jsxs)("small",{className:(0,i.Z)("px-1 py-0.5 rounded-sm block",d>0?"text-red-600":0===d?"text-muted-foreground bg-card-background":"text-green-600 bg-destructive-background"),children:[s.jsx("span",{className:"h-3 ",children:d>0?s.jsx(l,{height:"1em",width:"1em",className:"inline-block"}):0===d?"~":s.jsx(l,{height:"1em",width:"1em",className:"inline-block rotate-180"})}),Intl.NumberFormat(void 0,f).format(d)," ","vs. \xfaltimos 5 d\xedas"]})]})]})]})}},4165:(e,t,r)=>{"use strict";function s(e,t){return t/e*100}function n(e){return Object.entries(e).sort((e,t)=>new Date(t[0]).getTime()-new Date(e[0]).getTime())[0][1]}r.d(t,{S:()=>s,r:()=>n})},1947:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a,s:()=>l});var s=r(5036),n=r(2813),i=r(1774);function l({children:e,className:t,href:r,target:n}){let l=(0,i.m6)("h-96 w-[720px] flex items-center justify-center mx-auto rounded-md bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/60 to-transparent p-px flex-shrink-0 big-card-shadows group",t),a="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20  bg-background to-transparent w-full h-full rounded-md flex flex-col p-2 overflow-hidden";return r?s.jsx("a",{href:r,target:n,className:l,children:s.jsx("div",{className:a,children:e})}):s.jsx("article",{className:l,children:s.jsx("div",{className:a,children:e})})}function a({description:e,imageSrc:t,title:r,className:i,iconSrc:a,href:o}){return(0,s.jsxs)(l,{href:o,className:i,children:[s.jsx("header",{className:"w-full h-full overflow-hidden rounded-2xl",children:s.jsx(n.default,{className:"object-cover w-full h-auto rounded-lg",src:t,alt:r,width:760,height:320})}),(0,s.jsxs)("footer",{className:"flex flex-shrink-0 gap-4 px-4 py-3",children:[s.jsx(n.default,{src:a??"",alt:r,width:48,height:48,className:"hidden w-12 h-12 rounded-lg aspect-square sm:block"}),(0,s.jsxs)("div",{children:[s.jsx("h4",{className:"text-lg font-medium",children:r}),s.jsx("p",{className:"text-muted-foreground",children:e})]})]})]})}},4610:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>l});let s=(0,r(6843).createProxy)(String.raw`/Users/julian/dev/personal-website-nextjs/src/components/shared/VirtualList.tsx`),{__esModule:n,$$typeof:i}=s,l=s.default}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,925,337,449,861,595,255,166],()=>r(947));module.exports=s})();