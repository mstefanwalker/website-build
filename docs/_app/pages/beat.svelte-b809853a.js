import{S as t,i as s,s as e,e as a,c as l,a as n,d as i,b as r,f as o,x as c,E as h,t as f,g as u,D as d,L as m,h as p,k as v,n as g,M as x,N as $,O as w,j as y,m as E,o as D,P as j,Q as V,R as I,u as S,T as k,U as X,v as M,V as N,w as P,F as T,W as b,r as A,X as L}from"../chunks/vendor-57371f43.js";import{t as R}from"../chunks/timestamp-c9f97abd.js";function U(t){let s,e;return{c(){s=a("div"),e=f("..."),this.h()},l(t){s=l(t,"DIV",{class:!0});var a=n(s);e=u(a,"..."),a.forEach(i),this.h()},h(){r(s,"class","loading svelte-1iwppxw")},m(t,a){o(t,s,a),d(s,e)},p:h,i:h,o:h,d(t){t&&i(s)}}}function z(t){let s,e,c,y,E,D=t[1]&&B(t);return{c(){s=a("div"),e=a("span"),c=f(t[0]),y=v(),D&&D.c(),this.h()},l(a){s=l(a,"DIV",{});var r=n(s);e=l(r,"SPAN",{class:!0});var o=n(e);c=u(o,t[0]),o.forEach(i),y=g(r),D&&D.l(r),r.forEach(i),this.h()},h(){r(e,"class","svelte-1iwppxw"),m(e,"detail",t[1])},m(t,a){o(t,s,a),d(s,e),d(e,c),d(s,y),D&&D.m(s,null)},p(t,a){1&a&&p(c,t[0]),2&a&&m(e,"detail",t[1]),t[1]?D?D.p(t,a):(D=B(t),D.c(),D.m(s,null)):D&&(D.d(1),D=null)},i(t){t&&(E||x((()=>{E=$(s,w,{duration:400,delay:300}),E.start()})))},o:h,d(t){t&&i(s),D&&D.d()}}}function B(t){let s,e;return{c(){s=a("span"),e=f(t[1]),this.h()},l(a){s=l(a,"SPAN",{class:!0});var r=n(s);e=u(r,t[1]),r.forEach(i),this.h()},h(){r(s,"class","formatted svelte-1iwppxw"),m(s,"prime",t[2]),m(s,"oyster",t[3])},m(t,a){o(t,s,a),d(s,e)},p(t,a){2&a&&p(e,t[1]),4&a&&m(s,"prime",t[2]),8&a&&m(s,"oyster",t[3])},d(t){t&&i(s)}}}function C(t){let s;function e(t,s){return t[4]?z:U}let f=e(t),u=f(t);return{c(){s=a("div"),u.c(),this.h()},l(t){s=l(t,"DIV",{id:!0,class:!0});var e=n(s);u.l(e),e.forEach(i),this.h()},h(){r(s,"id","formatted"),r(s,"class","svelte-1iwppxw")},m(t,e){o(t,s,e),u.m(s,null)},p(t,[a]){f===(f=e(t))&&u?u.p(t,a):(u.d(1),u=f(t),u&&(u.c(),c(u,1),u.m(s,null)))},i(t){c(u)},o:h,d(t){t&&i(s),u.d()}}}function F(t,s,e){let a,{timestamp:l}=s,n=null,i=!1,r=!1;function o({text:t,pr:s=!1,oy:l=!1}){e(4,a=!0),e(1,n=t),e(2,i=s),e(3,r=l)}return setTimeout((()=>function(t){let s=Math.random();s>.995?o({text:"oyster",oy:!0}):s>.94?o({text:new Date(1e3*t).toLocaleString("en-US")}):s>.8?window.factorizer.run({n:t}).then((t=>o({text:t.factors.join(" * "),pr:1==t.factors.length}))):o({text:null})}(l)),10),t.$$set=t=>{"timestamp"in t&&e(0,l=t.timestamp)},e(4,a=!1),[l,n,i,r,a]}class O extends t{constructor(t){super(),s(this,t,F,C,e,{timestamp:0})}}function Q(t,s,e){const a=t.slice();return a[5]=s[e],a[7]=e,a}function W(t,s){let e,f,u,m,p,w,N,P=h;return f=new O({props:{timestamp:s[5].time}}),{key:t,first:null,c(){e=a("div"),y(f.$$.fragment),u=v(),this.h()},l(t){e=l(t,"DIV",{class:!0});var s=n(e);E(f.$$.fragment,s),u=g(s),s.forEach(i),this.h()},h(){r(e,"class","timestamp"),this.first=e},m(t,s){o(t,e,s),D(f,e,null),d(e,u),N=!0},p(t,e){s=t;const a={};1&e&&(a.timestamp=s[5].time),f.$set(a)},r(){w=e.getBoundingClientRect()},f(){j(e),P(),V(e,w)},a(){P(),P=I(e,w,b,{duration:200})},i(t){N||(c(f.$$.fragment,t),t&&x((()=>{p&&p.end(1),m=$(e,X,{x:s[5].flyX,duration:220,delay:240}),m.start()})),N=!0)},o(t){S(f.$$.fragment,t),m&&m.invalidate(),t&&(p=k(e,X,{x:.15*s[5].flyX,duration:220,delay:0})),N=!1},d(t){t&&i(e),M(f),t&&p&&p.end()}}}function q(t){let s,e,h=[],f=new Map,u=t[0];const d=t=>t[5].id;for(let a=0;a<u.length;a+=1){let s=Q(t,u,a),e=d(s);f.set(e,h[a]=W(e,s))}return{c(){s=a("div");for(let t=0;t<h.length;t+=1)h[t].c();this.h()},l(t){s=l(t,"DIV",{id:!0,class:!0});var e=n(s);for(let s=0;s<h.length;s+=1)h[s].l(e);e.forEach(i),this.h()},h(){r(s,"id","timestamps"),r(s,"class","svelte-1ysxjj9")},m(t,a){o(t,s,a);for(let e=0;e<h.length;e+=1)h[e].m(s,null);e=!0},p(t,[e]){if(1&e){u=t[0],A();for(let t=0;t<h.length;t+=1)h[t].r();h=N(h,e,d,1,t,u,f,s,L,W,null,Q);for(let t=0;t<h.length;t+=1)h[t].a();P()}},i(t){if(!e){for(let t=0;t<u.length;t+=1)c(h[t]);e=!0}},o(t){for(let s=0;s<h.length;s+=1)S(h[s]);e=!1},d(t){t&&i(s);for(let s=0;s<h.length;s+=1)h[s].d()}}}function G(t,s,e){let a;T(t,R,(t=>e(1,a=t)));let l=300,n=1,i=[];return t.$$.update=()=>{var s;2&t.$$.dirty&&e(0,(s=a,i=i?(setTimeout((()=>{i.length>=30&&e(0,i=i.slice(0,-1))}),680),[{id:n++,time:s,flyX:l*=-1},...i]):[]))},[i,a]}class H extends t{constructor(t){super(),s(this,t,G,q,e,{})}}export{H as default};
