(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[235],{9345:function(e,n,t){Promise.resolve().then(t.bind(t,2476))},2476:function(e,n,t){"use strict";t.r(n);var o=t(3827);t(4090),n.default=function(){return(0,o.jsxs)("form",{action:"#",method:"post",onSubmit:function(e){e.preventDefault();let n=new FormData(e.currentTarget).get("password");console.log(n),fetch("/api/auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:n})}).finally(()=>{window.location.href="/"})},children:[(0,o.jsx)("input",{type:"password",name:"password",className:"border"}),(0,o.jsx)("button",{className:"border",children:"Submit"})]})}}},function(e){e.O(0,[971,69,744],function(){return e(e.s=9345)}),_N_E=e.O()}]);