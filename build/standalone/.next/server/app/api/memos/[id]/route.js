(()=>{var e={};e.id=92,e.ids=[92],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},517:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},4300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},1808:e=>{"use strict";e.exports=require("net")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},4404:e=>{"use strict";e.exports=require("tls")},7310:e=>{"use strict";e.exports=require("url")},9796:e=>{"use strict";e.exports=require("zlib")},3739:()=>{},8322:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{headerHooks:()=>f,originalPathname:()=>E,patchFetch:()=>u,requestAsyncStorage:()=>l,routeModule:()=>p,serverHooks:()=>m,staticGenerationAsyncStorage:()=>d,staticGenerationBailout:()=>y});var n=r(5419),a=r(9108),o=r(9678),i=r(5559),c=e([i]);i=(c.then?(await c)():c)[0];let p=new n.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/memos/[id]/route",pathname:"/api/memos/[id]",filename:"route",bundlePath:"app/api/memos/[id]/route"},resolvedPagePath:"/Users/julian/dev/personal-website-nextjs/src/app/api/memos/[id]/route.ts",nextConfigOutput:"standalone",userland:i}),{requestAsyncStorage:l,staticGenerationAsyncStorage:d,serverHooks:m,headerHooks:f,staticGenerationBailout:y}=p,E="/api/memos/[id]/route";function u(){return(0,o.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:d})}s()}catch(e){s(e)}})},8096:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DynamicServerError:function(){return s},isDynamicServerError:function(){return n}});let r="DYNAMIC_SERVER_USAGE";class s extends Error{constructor(e){super("Dynamic server usage: "+e),this.description=e,this.digest=r}}function n(e){return"object"==typeof e&&null!==e&&"digest"in e&&"string"==typeof e.digest&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2973:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isStaticGenBailoutError:function(){return i},staticGenerationBailout:function(){return u}});let s=r(8096),n=r(5869),a="NEXT_STATIC_GEN_BAILOUT";class o extends Error{constructor(...e){super(...e),this.code=a}}function i(e){return"object"==typeof e&&null!==e&&"code"in e&&e.code===a}function c(e,t){let{dynamic:r,link:s}=t||{};return"Page"+(r?' with `dynamic = "'+r+'"`':"")+" couldn't be rendered statically because it used `"+e+"`."+(s?" See more info here: "+s:"")}let u=(e,t)=>{let{dynamic:r,link:a}=void 0===t?{}:t,i=n.staticGenerationAsyncStorage.getStore();if(!i)return!1;if(i.forceStatic)return!0;if(i.dynamicShouldError)throw new o(c(e,{link:a,dynamic:null!=r?r:"error"}));let u=c(e,{dynamic:r,link:"https://nextjs.org/docs/messages/dynamic-server-error"});if(null==i.postpone||i.postpone.call(i,e),i.revalidate=0,i.isStaticGeneration){let t=new s.DynamicServerError(u);throw i.dynamicUsageDescription=e,i.dynamicUsageStack=t.stack,t}return!1};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5419:(e,t,r)=>{"use strict";e.exports=r(517)},5559:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{DELETE:()=>i,PATCH:()=>c});var n=r(1493),a=r(7439),o=e([n]);n=(o.then?(await o)():o)[0];let i=async(e,{params:t})=>{if(a.cookies().get("auth-cookie")?.value===process.env.AUTH_SECRET){let e=t.id,r=await n.R.delete(e);return new Response(JSON.stringify(r),{status:200,headers:{"Content-Type":"application/json"}})}return new Response("404",{status:404})},c=async(e,{params:t})=>{let r=t.id,{pinned:s}=await e.json();if(a.cookies().get("auth-cookie")?.value===process.env.AUTH_SECRET){let e=await n.R.setPinned(+r,s);return new Response(JSON.stringify(e),{status:200,headers:{"Content-Type":"application/json"}})}return new Response("404",{status:404})};s()}catch(e){s(e)}})},1493:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{R:()=>n});let e=new(r(78)).x6;console.log(process.env.DB_IP_PORT,{database:process.env.RESOURCES_DB_ID,namespace:process.env.RESOURCES_DB_ID,auth:{password:process.env.DB_PASSWORD,username:process.env.DB_USER,database:process.env.RESOURCES_DB_ID,namespace:process.env.RESOURCES_DB_ID,scopes:["*"]}}),await e.connect(`http://${process.env.DB_IP_PORT}/rpc`,{database:process.env.RESOURCES_DB_ID,namespace:process.env.RESOURCES_DB_ID,auth:{password:process.env.DB_PASSWORD,username:process.env.DB_USER,database:process.env.RESOURCES_DB_ID,namespace:process.env.RESOURCES_DB_ID,scopes:["*"]}}),await e.wait();let n={create:async t=>{let r=(await e.query("select * from memos ORDER BY id DESC limit 1"))[0],s=r&&r[0]&&(r[0]?.id).replace(RegExp("[^0-9]","g"),""),n=s?parseInt(s)+1:0;return await e.create("memos",{...t,id:n})},searchContent:async e=>{let t=await n.selectAll(),r=RegExp(e,"i");return t.filter(e=>e.content&&r.test(e.content))},selectAll:async()=>(await (await e.query("select * from memos ORDER BY id DESC"))[0]).sort((e,t)=>{let r=Number(e.pinned);return Number(t.pinned)-r}),selectById:async t=>await e.select("memos:"+t)[0],update:async t=>await e.update("memos:"+parseInt(t.id),t),delete:async t=>await e.delete(`memos:${parseInt(t)}`),setPinned:async(t,r)=>{let s=(await e.select("memos:"+t))[0];return await e.update("memos:"+parseInt(t),{...s,pinned:r})}};s()}catch(e){s(e)}},1)}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,449,439],()=>r(8322));module.exports=s})();