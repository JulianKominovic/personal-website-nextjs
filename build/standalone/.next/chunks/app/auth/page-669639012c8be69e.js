(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[235],{451:function(e,t,r){Promise.resolve().then(r.bind(r,4938))},4938:function(e,t,r){"use strict";r.r(t);var n=r(8038);r(719),t.default=function(){return(0,n.jsxs)("form",{action:"#",method:"post",onSubmit:function(e){e.preventDefault();let t=new FormData(e.currentTarget).get("password");console.log(t),fetch("/api/auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t})}).finally(()=>{window.location.href="/"})},children:[(0,n.jsx)("input",{type:"password",name:"password",className:"border"}),(0,n.jsx)("button",{className:"border",children:"Submit"})]})}},3952:function(e,t,r){"use strict";var n=r(719),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(e,t,r){var n,s={},f=null,c=null;for(n in void 0!==r&&(f=""+r),void 0!==t.key&&(f=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,n)&&!u.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:f,ref:c,props:s,_owner:i.current}}t.Fragment=s,t.jsx=f,t.jsxs=f},8038:function(e,t,r){"use strict";e.exports=r(3952)}},function(e){e.O(0,[120,543,744],function(){return e(e.s=451)}),_N_E=e.O()}]);