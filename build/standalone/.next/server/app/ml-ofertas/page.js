(()=>{var e={};e.id=443,e.ids=[443],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},1808:e=>{"use strict";e.exports=require("net")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},4404:e=>{"use strict";e.exports=require("tls")},7310:e=>{"use strict";e.exports=require("url")},9796:e=>{"use strict";e.exports=require("zlib")},8414:()=>{},7086:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>u,routeModule:()=>m,tree:()=>c});var s=r(5513),a=r(623),i=r(4053),n=r.n(i),o=r(5415),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let c=["",{children:["ml-ofertas",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,4158)),"/Users/julian/dev/personal-website-nextjs/src/app/ml-ofertas/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7989))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,9241)),"/Users/julian/dev/personal-website-nextjs/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5245,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7989))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/Users/julian/dev/personal-website-nextjs/src/app/ml-ofertas/page.tsx"],d="/ml-ofertas/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/ml-ofertas/page",pathname:"/ml-ofertas",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},4703:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,901,23))},4158:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var s=r(9824),a=r(9645),i=r(8626);let n=new(r(27)).ZP,o=!1,l=async()=>(o||(await n.connect("http://0.0.0.0:3002/rpc",{database:process.env.ML_OFERTAS_DATABASE,namespace:process.env.ML_OFERTAS_DATABASE,auth:{username:process.env.DB_USER,password:process.env.DB_PASSWORD,database:process.env.ML_OFERTAS_DATABASE,namespace:process.env.ML_OFERTAS_DATABASE,scopes:["*"]}}),await n.wait(),o=!0),n),c=async(e="MLA1652")=>(await (await l()).query(`SELECT * FROM products WHERE category = '${e}'`))[0];var u=r(9484);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let d=(0,r(9256).Z)("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);var p=r(9485);function m({image:e,price:t,priceDeltaVsYesterday:r,priceDeltaVs5Days:i,seller:n,title:o,url:l}){let c=r/t*100;return console.log(c),(0,s.jsxs)(a.s,{href:l,className:"relative m-0 w-72 h-96",children:[s.jsx("span",{className:(0,u.Z)(c<0?c<-10?"text-green-400 bg-green-900":"text-blue-400 bg-blue-900":0===c?"text-muted-foreground bg-card":"text-destructive-foreground bg-destructive","absolute px-2 text-sm border rounded-full -right-2 -top-2"),children:c<0?c<-10?"Superoferta \uD83D\uDD25":"En oferta \uD83C\uDFF7️":0===c?"Sin cambios":"En aumento \uD83D\uDCC8"}),s.jsx("div",{className:"w-full overflow-hidden h-52",children:s.jsx(p.default,{className:"flex-shrink-0 object-cover w-full h-full rounded-sm",alt:o,height:200,src:e,width:200})}),(0,s.jsxs)("div",{className:"mt-4",children:[s.jsx("h3",{className:"font-medium line-clamp-2",children:o}),(0,s.jsxs)("small",{className:"text-muted-foreground/60",children:["Vendido por: ",n]}),(0,s.jsxs)("p",{className:"mt-2",children:[Intl.NumberFormat(void 0,{style:"currency",currency:"ARS",minimumFractionDigits:0,maximumFractionDigits:0}).format(t)," ",(0,s.jsxs)("small",{className:(0,u.Z)("px-1 py-0.5 rounded-sm",r>0?"text-secondary-foreground bg-secondary-background":0===r?"text-muted-foreground bg-card-background":"text-green-600 bg-destructive-background"),children:[s.jsx("span",{className:"h-3 ",children:r>0?s.jsx(d,{height:"1em",width:"1em",className:"inline-block"}):0===r?"~":s.jsx(d,{height:"1em",width:"1em",className:"inline-block rotate-180"})}),Intl.NumberFormat(void 0,{style:"currency",currency:"ARS",currencyDisplay:"narrowSymbol",minimumFractionDigits:0,maximumFractionDigits:0}).format(r)," ","vs. ayer"]})]})]})]})}async function x({searchParams:e}){let t=await c();return console.log(t),(0,s.jsxs)(i.Z,{className:"max-w-[80ch] mx-auto mb-52 mt-36",children:[s.jsx("h1",{className:"mb-4 text-5xl font-semibold text-center",children:"Mercadofertas"}),s.jsx("p",{className:"mb-4 mb-8 text-xl text-center text-muted-foreground",children:"Mir\xe1 las ofertas de Mercado Libre en un solo lugar. Segu\xed la evoluci\xf3n de precios que estan teniendo los productos m\xe1s destacados."}),s.jsx("div",{className:"flex flex-wrap gap-4",children:t.map(e=>s.jsx(m,{image:e.image,price:Object.entries(e.price_history).sort((e,t)=>new Date(t[0]).getTime()-new Date(e[0]).getTime())[0][1]??0,priceDeltaVsYesterday:e.price_delta_vs_yesterday??0,priceDeltaVs5Days:e.price_delta_vs_last_five_days??0,seller:e.seller,title:e.name,url:e.link},e.id))})]})}}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[722,250,270,27,180,664,552],()=>r(7086));module.exports=s})();