var s=Object.defineProperty,t=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,a=(t,e,r)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;import{S as o,i as n,s as l,e as h,t as i,k as c,c as f,a as u,g as d,d as p,n as b,b as m,f as v,D as $,E as g,h as j,F as w,G as k,j as x,m as E,o as J,H as y,I,J as O,x as D,u as P,v as S}from"../chunks/vendor-57371f43.js";import{t as V}from"../chunks/timestamp-c9f97abd.js";function A(s){let t,e,r,a,o,n,l,j,w;return{c(){t=h("div"),e=h("a"),r=i("home"),a=c(),o=h("a"),n=i("page"),l=c(),j=h("a"),w=i("beat"),this.h()},l(s){t=f(s,"DIV",{class:!0});var h=u(t);e=f(h,"A",{href:!0,class:!0});var i=u(e);r=d(i,"home"),i.forEach(p),a=b(h),o=f(h,"A",{href:!0,class:!0});var c=u(o);n=d(c,"page"),c.forEach(p),l=b(h),j=f(h,"A",{href:!0,class:!0});var m=u(j);w=d(m,"beat"),m.forEach(p),h.forEach(p),this.h()},h(){m(e,"href","/"),m(e,"class","svelte-xpt94p"),m(o,"href","/page"),m(o,"class","svelte-xpt94p"),m(j,"href","/beat"),m(j,"class","svelte-xpt94p"),m(t,"class","nav svelte-xpt94p")},m(s,h){v(s,t,h),$(t,e),$(e,r),$(t,a),$(t,o),$(o,n),$(t,l),$(t,j),$(j,w)},p:g,i:g,o:g,d(s){s&&p(t)}}}class q extends o{constructor(s){super(),n(this,s,null,A,l,{})}}function z(s){let t,e,r,a;return{c(){t=h("div"),e=i("© 1630549920 - "),r=i(s[0]),a=i(" Stefan"),this.h()},l(o){t=f(o,"DIV",{class:!0});var n=u(t);e=d(n,"© 1630549920 - "),r=d(n,s[0]),a=d(n," Stefan"),n.forEach(p),this.h()},h(){m(t,"class","footer svelte-g5euym")},m(s,o){v(s,t,o),$(t,e),$(t,r),$(t,a)},p(s,[t]){1&t&&j(r,s[0])},i:g,o:g,d(s){s&&p(t)}}}function F(s,t,e){let r;return w(s,V,(s=>e(0,r=s))),[r]}class G extends o{constructor(s){super(),n(this,s,F,z,l,{})}}class H{constructor(s){this.workers=[],s.forEach((s=>{this.workers.push(new M(s))}))}run(s){return new Promise(((t,e)=>{this.addJob(s,(s=>t(s.data)))}))}addJob(s,t){let e=[...this.workers].sort(((s,t)=>s.jobs.length-t.jobs.length));console.log(`worker load: ${this.workers.map((s=>s.status())).join("")}`),e[0].startJob(s,t)}}class M{constructor(s){this.jobId=0,this.jobs=[],this.worker=s,this.worker.onmessage=this.endJob.bind(this),this.handlers={}}endJob(s){let t=s.data.id;this.handlers[t](s),this.removeJob(t),delete this.handlers[t]}removeJob(s){var t=this.jobs.indexOf(s);-1!==t&&this.jobs.splice(t,1)}startJob(s,o){let n=this.jobId++;this.jobs.push(n),this.handlers[n]=o,this.worker.postMessage(((s,o)=>{for(var n in o||(o={}))e.call(o,n)&&a(s,n,o[n]);if(t)for(var n of t(o))r.call(o,n)&&a(s,n,o[n]);return s})({id:n},s))}status(){return 0==this.jobs.length?"▁":1==this.jobs.length?"▃":2==this.jobs.length?"▅":this.jobs.length>=5?"▓":this.jobs.length>=3?"▒":void 0}}function W(s){let t,e,r,a,o,n,l;e=new q({});const i=s[1].default,d=k(i,s,s[0],null);return n=new G({}),{c(){t=h("div"),x(e.$$.fragment),r=c(),a=h("div"),d&&d.c(),o=c(),x(n.$$.fragment),this.h()},l(s){t=f(s,"DIV",{id:!0,class:!0});var l=u(t);E(e.$$.fragment,l),r=b(l),a=f(l,"DIV",{id:!0,class:!0});var h=u(a);d&&d.l(h),h.forEach(p),o=b(l),E(n.$$.fragment,l),l.forEach(p),this.h()},h(){m(a,"id","site-content"),m(a,"class","svelte-oqmsbr"),m(t,"id","site"),m(t,"class","svelte-oqmsbr")},m(s,h){v(s,t,h),J(e,t,null),$(t,r),$(t,a),d&&d.m(a,null),$(t,o),J(n,t,null),l=!0},p(s,[t]){d&&d.p&&(!l||1&t)&&y(d,i,s,s[0],l?O(i,s[0],t,null):I(s[0]),null)},i(s){l||(D(e.$$.fragment,s),D(d,s),D(n.$$.fragment,s),l=!0)},o(s){P(e.$$.fragment,s),P(d,s),P(n.$$.fragment,s),l=!1},d(s){s&&p(t),S(e),d&&d.d(s),S(n)}}}function B(s,t,e){let{$$slots:r={},$$scope:a}=t;{let s=4,t=[];for(let e=0;e<s;e++)t.push(new Worker("/workers/factorization.js"));window.factorizer=new H(t)}return s.$$set=s=>{"$$scope"in s&&e(0,a=s.$$scope)},[a,r]}class C extends o{constructor(s){super(),n(this,s,B,W,l,{})}}export{C as default};