var On=Array.isArray,Vt=Array.prototype.indexOf,Sn=Array.from,Nn=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,Gt=Object.getOwnPropertyDescriptors,Cn=Object.prototype,Pn=Array.prototype,Kt=Object.getPrototypeOf;const bn=()=>{};function Fn(t){return typeof(t==null?void 0:t.then)=="function"}function Mn(t){return t()}function Et(t){for(var n=0;n<t.length;n++)t[n]()}const T=2,wt=4,at=8,st=16,k=32,q=64,H=128,y=256,U=512,v=1024,I=2048,C=4096,S=8192,W=16384,Zt=32768,yt=65536,qn=1<<17,$t=1<<19,gt=1<<20,ct=Symbol("$state"),Ln=Symbol("legacy props");function Tt(t){return t===this.v}function zt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function mt(t){return!zt(t,this.v)}function Wt(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Xt(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Jt(t){throw new Error("https://svelte.dev/e/effect_orphan")}function Qt(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Yn(){throw new Error("https://svelte.dev/e/hydration_failed")}function jn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Bn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Hn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function tn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function nn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let X=!1;function Un(){X=!0}const Vn=1,Gn=2,Kn=16,Zn=1,$n=2,zn=4,Wn=8,Xn=16,Jn=1,Qn=2,rn="[",en="[!",ln="]",At={},tr=Symbol();function xt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let f=null;function vt(t){f=t}function nr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},X&&!n&&(f.l={s:null,u:null,r1:[],r2:ut(!1)})}function rr(t){const n=f;if(n!==null){const s=n.e;if(s!==null){var r=o,e=u;n.e=null;try{for(var l=0;l<s.length;l++){var a=s[l];Z(a.effect),K(a.reaction),Ct(a.fn)}}finally{Z(r),K(e)}}f=n.p,n.m=!0}return{}}function J(){return!X||f!==null&&f.l===null}function ut(t,n){var r={f:0,v:t,reactions:null,equals:Tt,rv:0,wv:0};return r}function er(t){return an(ut(t))}function lr(t,n=!1){var e;const r=ut(t);return n||(r.equals=mt),X&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function an(t){return u!==null&&!g&&(u.f&T)!==0&&(m===null?wn([t]):m.push(t)),t}function ar(t,n){return u!==null&&!g&&J()&&(u.f&(T|st))!==0&&(m===null||!m.includes(t))&&nn(),sn(t,n)}function sn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=jt(),Rt(t,I),J()&&o!==null&&(o.f&v)!==0&&(o.f&(k|q))===0&&(A===null?yn([t]):A.push(t))),n}function Rt(t,n){var r=t.reactions;if(r!==null)for(var e=J(),l=r.length,a=0;a<l;a++){var s=r[a],i=s.f;(i&I)===0&&(!e&&s===o||(R(s,n),(i&(v|y))!==0&&((i&T)!==0?Rt(s,C):tt(s))))}}let N=!1;function sr(t){N=t}let x;function F(t){if(t===null)throw xt(),At;return x=t}function ur(){return F(P(x))}function or(t){if(N){if(P(x)!==null)throw xt(),At;x=t}}function fr(){for(var t=0,n=x;;){if(n.nodeType===8){var r=n.data;if(r===ln){if(t===0)return n;t-=1}else(r===rn||r===en)&&(t+=1)}var e=P(n);n.remove(),n=e}}var pt,un,kt,Dt;function ir(){if(pt===void 0){pt=window,un=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;kt=_t(n,"firstChild").get,Dt=_t(n,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function nt(t=""){return document.createTextNode(t)}function rt(t){return kt.call(t)}function P(t){return Dt.call(t)}function _r(t,n){if(!N)return rt(t);var r=rt(x);if(r===null)r=x.appendChild(nt());else if(n&&r.nodeType!==3){var e=nt();return r==null||r.before(e),F(e),e}return F(r),r}function cr(t,n){if(!N){var r=rt(t);return r instanceof Comment&&r.data===""?P(r):r}return x}function vr(t,n=1,r=!1){let e=N?x:t;for(var l;n--;)l=e,e=P(e);if(!N)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var s=nt();return e===null?l==null||l.after(s):e.before(s),F(s),s}return F(e),e}function pr(t){t.textContent=""}function It(t){var n=T|I,r=u!==null&&(u.f&T)!==0?u:null;return o===null||r!==null&&(r.f&y)!==0?n|=y:o.f|=gt,{ctx:f,deps:null,effects:null,equals:Tt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??o}}function hr(t){const n=It(t);return n.equals=mt,n}function Ot(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)O(n[r])}}function on(t){for(var n=t.parent;n!==null;){if((n.f&T)===0)return n;n=n.parent}return null}function fn(t){var n,r=o;Z(on(t));try{Ot(t),n=Ht(t)}finally{Z(r)}return n}function St(t){var n=fn(t),r=(D||(t.f&y)!==0)&&t.deps!==null?C:v;R(t,r),t.equals(n)||(t.v=n,t.wv=jt())}function Nt(t){o===null&&u===null&&Jt(),u!==null&&(u.f&y)!==0&&o===null&&Xt(),ot&&Wt()}function _n(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function L(t,n,r,e=!0){var l=(t&q)!==0,a=o,s={ctx:f,deps:null,nodes_start:null,nodes_end:null,f:t|I,first:null,fn:n,last:null,next:null,parent:l?null:a,prev:null,teardown:null,transitions:null,wv:0};if(r)try{ft(s),s.f|=Zt}catch(p){throw O(s),p}else n!==null&&tt(s);var i=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(gt|H))===0;if(!i&&!l&&e&&(a!==null&&_n(s,a),u!==null&&(u.f&T)!==0)){var _=u;(_.effects??(_.effects=[])).push(s)}return s}function dr(t){Nt();var n=o!==null&&(o.f&k)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=Ct(t);return e}}function Er(t){return Nt(),cn(t)}function wr(t){const n=L(q,t,!0);return(r={})=>new Promise(e=>{r.outro?hn(n,()=>{O(n),e(void 0)}):(O(n),e(void 0))})}function Ct(t){return L(wt,t,!1)}function cn(t){return L(at,t,!0)}function yr(t,n=[],r=It){const e=n.map(r);return vn(()=>t(...e.map(Dn)))}function vn(t,n=0){return L(at|st|n,t,!0)}function gr(t,n=!0){return L(at|k,t,!0,n)}function Pt(t){var n=t.teardown;if(n!==null){const r=ot,e=u;dt(!0),K(null);try{n.call(null)}finally{dt(r),K(e)}}}function bt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;O(r,n),r=e}}function pn(t){for(var n=t.first;n!==null;){var r=n.next;(n.f&k)===0&&O(n),n=r}}function O(t,n=!0){var r=!1;if((n||(t.f&$t)!==0)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var a=e===l?null:P(e);e.remove(),e=a}r=!0}bt(t,n&&!r),z(t,0),R(t,W);var s=t.transitions;if(s!==null)for(const _ of s)_.stop();Pt(t);var i=t.parent;i!==null&&i.first!==null&&Ft(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ft(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function hn(t,n){var r=[];Mt(t,r,!0),dn(r,()=>{O(t),n&&n()})}function dn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Mt(t,n,r){if((t.f&S)===0){if(t.f^=S,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var l=e.next,a=(e.f&yt)!==0||(e.f&k)!==0;Mt(e,n,a?r:!1),e=l}}}function Tr(t){qt(t,!0)}function qt(t,n){if((t.f&S)!==0){t.f^=S,(t.f&v)===0&&(t.f^=v),Y(t)&&(R(t,I),tt(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&yt)!==0||(r.f&k)!==0;qt(r,l?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}let M=[],et=[];function Lt(){var t=M;M=[],Et(t)}function En(){var t=et;et=[],Et(t)}function mr(t){M.length===0&&queueMicrotask(Lt),M.push(t)}function ht(){M.length>0&&Lt(),et.length>0&&En()}let j=!1,V=!1,G=null,B=!1,ot=!1;function dt(t){ot=t}let b=[];let u=null,g=!1;function K(t){u=t}let o=null;function Z(t){o=t}let m=null;function wn(t){m=t}let c=null,E=0,A=null;function yn(t){A=t}let Yt=1,$=0,D=!1;function jt(){return++Yt}function Y(t){var h;var n=t.f;if((n&I)!==0)return!0;if((n&C)!==0){var r=t.deps,e=(n&y)!==0;if(r!==null){var l,a,s=(n&U)!==0,i=e&&o!==null&&!D,_=r.length;if(s||i){var p=t,w=p.parent;for(l=0;l<_;l++)a=r[l],(s||!((h=a==null?void 0:a.reactions)!=null&&h.includes(p)))&&(a.reactions??(a.reactions=[])).push(p);s&&(p.f^=U),i&&w!==null&&(w.f&y)===0&&(p.f^=y)}for(l=0;l<_;l++)if(a=r[l],Y(a)&&St(a),a.wv>t.wv)return!0}(!e||o!==null&&!D)&&R(t,v)}return!1}function gn(t,n){for(var r=n;r!==null;){if((r.f&H)!==0)try{r.fn(t);return}catch{r.f^=H}r=r.parent}throw j=!1,t}function Tn(t){return(t.f&W)===0&&(t.parent===null||(t.parent.f&H)===0)}function Q(t,n,r,e){if(j){if(r===null&&(j=!1),Tn(n))throw t;return}r!==null&&(j=!0);{gn(t,n);return}}function Bt(t,n,r=!0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];(a.f&T)!==0?Bt(a,n,!1):n===a&&(r?R(a,I):(a.f&v)!==0&&R(a,C),tt(a))}}function Ht(t){var it;var n=c,r=E,e=A,l=u,a=D,s=m,i=f,_=g,p=t.f;c=null,E=0,A=null,D=(p&y)!==0&&(g||!B||u===null),u=(p&(k|q))===0?t:null,m=null,vt(t.ctx),g=!1,$++;try{var w=(0,t.fn)(),h=t.deps;if(c!==null){var d;if(z(t,E),h!==null&&E>0)for(h.length=E+c.length,d=0;d<c.length;d++)h[E+d]=c[d];else t.deps=h=c;if(!D)for(d=E;d<h.length;d++)((it=h[d]).reactions??(it.reactions=[])).push(t)}else h!==null&&E<h.length&&(z(t,E),h.length=E);if(J()&&A!==null&&!g&&h!==null&&(t.f&(T|C|I))===0)for(d=0;d<A.length;d++)Bt(A[d],t);return l!==null&&$++,w}finally{c=n,E=r,A=e,u=l,D=a,m=s,vt(i),g=_}}function mn(t,n){let r=n.reactions;if(r!==null){var e=Vt.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&(n.f&T)!==0&&(c===null||!c.includes(n))&&(R(n,C),(n.f&(y|U))===0&&(n.f^=U),Ot(n),z(n,0))}function z(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)mn(t,r[e])}function ft(t){var n=t.f;if((n&W)===0){R(t,v);var r=o,e=f,l=B;o=t,B=!0;try{(n&st)!==0?pn(t):bt(t),Pt(t);var a=Ht(t);t.teardown=typeof a=="function"?a:null,t.wv=Yt;var s=t.deps,i}catch(_){Q(_,t,r,e||t.ctx)}finally{B=l,o=r}}}function An(){try{Qt()}catch(t){if(G!==null)Q(t,G,null);else throw t}}function Ut(){try{for(var t=0;b.length>0;){t++>1e3&&An();var n=b,r=n.length;b=[];for(var e=0;e<r;e++){var l=n[e];(l.f&v)===0&&(l.f^=v);var a=Rn(l);xn(a)}}}finally{V=!1,G=null}}function xn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if((e.f&(W|S))===0)try{Y(e)&&(ft(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ft(e):e.fn=null))}catch(l){Q(l,e,null,e.ctx)}}}function tt(t){V||(V=!0,queueMicrotask(Ut));for(var n=G=t;n.parent!==null;){n=n.parent;var r=n.f;if((r&(q|k))!==0){if((r&v)===0)return;n.f^=v}}b.push(n)}function Rn(t){var n=[],r=t.first;t:for(;r!==null;){var e=r.f,l=(e&k)!==0,a=l&&(e&v)!==0,s=r.next;if(!a&&(e&S)===0){if((e&wt)!==0)n.push(r);else if(l)r.f^=v;else{var i=u;try{u=r,Y(r)&&ft(r)}catch(w){Q(w,r,null,r.ctx)}finally{u=i}}var _=r.first;if(_!==null){r=_;continue}}if(s===null){let w=r.parent;for(;w!==null;){if(t===w)break t;var p=w.next;if(p!==null){r=p;continue t}w=w.parent}}r=s}return n}function kn(t){var n;for(ht();b.length>0;)V=!0,Ut(),ht();return n}async function Ar(){await Promise.resolve(),kn()}function Dn(t){var n=t.f,r=(n&T)!==0;if(u!==null&&!g){m!==null&&m.includes(t)&&tn();var e=u.deps;t.rv<$&&(t.rv=$,c===null&&e!==null&&e[E]===t?E++:c===null?c=[t]:(!D||!c.includes(t))&&c.push(t))}else if(r&&t.deps===null&&t.effects===null){var l=t,a=l.parent;a!==null&&(a.f&y)===0&&(l.f^=y)}return r&&(l=t,Y(l)&&St(l)),t.v}function xr(t){var n=g;try{return g=!0,t()}finally{g=n}}const In=-7169;function R(t,n){t.f=t.f&In|n}function Rr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ct in t)lt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ct in r&&lt(r)}}}function lt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{lt(t[e],n)}catch{}const r=Kt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Gt(r);for(let l in e){const a=e[l].get;if(a)try{a.call(t)}catch{}}}}}export{hr as $,nr as A,N as B,rr as C,vn as D,yt as E,bn as F,O as G,rn as H,cr as I,Cn as J,Pn as K,ut as L,Hn as M,Dn as N,ar as O,_t as P,Bn as Q,Kt as R,ct as S,en as T,tr as U,fr as V,Tr as W,hn as X,jn as Y,qn as Z,It as _,xr as a,zn as a0,mt as a1,lr as a2,Wn as a3,Ln as a4,Xn as a5,$n as a6,Zn as a7,un as a8,Jn as a9,Gt as aA,zt as aB,Qn as aa,Er as ab,Et as ac,Mn as ad,Rr as ae,Un as af,yr as ag,_r as ah,or as ai,vr as aj,Ct as ak,cn as al,mr as am,kn as an,er as ao,Ar as ap,J as aq,Fn as ar,sn as as,vt as at,S as au,Gn as av,Mt as aw,dn as ax,Vn as ay,Kn as az,Z as b,f as c,Nn as d,u as e,o as f,ir as g,rt as h,On as i,P as j,At as k,X as l,sr as m,F as n,ur as o,x as p,ln as q,xt as r,K as s,Yn as t,dr as u,pr as v,Sn as w,wr as x,nt as y,gr as z};
