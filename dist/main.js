define("script/scrollTop",[],function(){return function(e,t){return t===undefined?e.scrollY?e.scrollY:e.scrollTop:t<=0?(e.scrollTo?e.scrollTo(0,0):e.scrollTop=0,0):(e.scrollTo?e.scrollTo(0,t):e.scrollTop=t,t)}}),define("script/speedConduct",[],function(){return function(e,t,n,r){var i,s,o=Math.PI;switch(t){case"ease-in":i=Math.cos;break;case"ease-out":i=Math.sin;break;case"steady":return s=e;default:i=Math.cos}return s=e*i(o/2*(r-n)/r),s>20?s:20}}),define("script/handler",["./scrollTop","./speedConduct"],function(e,t){return function(n,r,i){if(n===undefined){console.error("You must assign a dom node object or window object as the first param.");return}typeof r!="number"&&(typeof r=="string"&&r.match(/ease|steady/).length!==0&&(i=r),r=300),i===undefined&&(i="steady");var s=e(n),o=s,u,a=function(){u=t(r,i,o,s),o-=u,e(n,o)!==0&&setTimeout(a,1e3/60)};a()}}),require(["script/handler"],function(e){var t=document.getElementsByClassName("divBtn")[0],n=document.getElementsByClassName("globalBtn")[0],r=document.getElementsByClassName("papa")[0];t.addEventListener("click",function(){e(r,"ease-in")}),n.addEventListener("click",function(){e(window,300,"ease-out")})}),define("main",function(){});