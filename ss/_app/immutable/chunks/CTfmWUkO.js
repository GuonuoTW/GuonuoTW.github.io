import{S as T,F as V,G as z,I as m,J as H,K as P,U as b,L as y,M as D,c as J,N as Q,O as W,i as X,A as k,y as U,l as p,E as ee,P as re,Q as ne,k as ae,j as q,R as B,v as $,T as j,m as te,B as C,V as Z,W as ie,d as fe,X as se,Y as ue,Z as F,_ as le,$ as de,a0 as ve,a1 as G,a2 as _e,a3 as ce,a4 as be,a5 as oe,a6 as ge,a7 as ye}from"./DL_gzIfW.js";import{s as Pe,g as he}from"./BLVoSXR0.js";function E(r,l=null,_){if(typeof r!="object"||r===null||T in r)return r;const s=W(r);if(s!==V&&s!==z)return r;var i=new Map,d=X(r),o=m(0);d&&i.set("length",m(r.length));var h;return new Proxy(r,{defineProperty(f,e,n){(!("value"in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&Q();var t=i.get(e);return t===void 0?(t=m(n.value),i.set(e,t)):y(t,E(n.value,h)),!0},deleteProperty(f,e){var n=i.get(e);if(n===void 0)e in f&&i.set(e,m(b));else{if(d&&typeof e=="string"){var t=i.get("length"),a=Number(e);Number.isInteger(a)&&a<t.v&&y(t,a)}y(n,b),K(o)}return!0},get(f,e,n){var c;if(e===T)return r;var t=i.get(e),a=e in f;if(t===void 0&&(!a||(c=D(f,e))!=null&&c.writable)&&(t=m(E(a?f[e]:b,h)),i.set(e,t)),t!==void 0){var u=P(t);return u===b?void 0:u}return Reflect.get(f,e,n)},getOwnPropertyDescriptor(f,e){var n=Reflect.getOwnPropertyDescriptor(f,e);if(n&&"value"in n){var t=i.get(e);t&&(n.value=P(t))}else if(n===void 0){var a=i.get(e),u=a==null?void 0:a.v;if(a!==void 0&&u!==b)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return n},has(f,e){var u;if(e===T)return!0;var n=i.get(e),t=n!==void 0&&n.v!==b||Reflect.has(f,e);if(n!==void 0||J!==null&&(!t||(u=D(f,e))!=null&&u.writable)){n===void 0&&(n=m(t?E(f[e],h):b),i.set(e,n));var a=P(n);if(a===b)return!1}return t},set(f,e,n,t){var S;var a=i.get(e),u=e in f;if(d&&e==="length")for(var c=n;c<a.v;c+=1){var I=i.get(c+"");I!==void 0?y(I,b):c in f&&(I=m(b),i.set(c+"",I))}a===void 0?(!u||(S=D(f,e))!=null&&S.writable)&&(a=m(void 0),y(a,E(n,h)),i.set(e,a)):(u=a.v!==b,y(a,E(n,h)));var g=Reflect.getOwnPropertyDescriptor(f,e);if(g!=null&&g.set&&g.set.call(t,n),!u){if(d&&typeof e=="string"){var w=i.get("length"),N=Number(e);Number.isInteger(N)&&N>=w.v&&y(w,N+1)}K(o)}return!0},ownKeys(f){P(o);var e=Reflect.ownKeys(f).filter(a=>{var u=i.get(a);return u===void 0||u.v!==b});for(var[n,t]of i)t.v!==b&&!(n in f)&&e.push(n);return e},setPrototypeOf(){H()}})}function K(r,l=1){y(r,r.v+l)}function Re(r,l,_=!1){U&&p();var s=r,i=null,d=null,o=b,h=_?ee:0,f=!1;const e=(t,a=!0)=>{f=!0,n(a,t)},n=(t,a)=>{if(o===(o=t))return;let u=!1;if(U){const c=s.data===re;!!o===c&&(s=ne(),ae(s),q(!1),u=!0)}o?(i?B(i):a&&(i=$(()=>a(s))),d&&j(d,()=>{d=null})):(d?B(d):a&&(d=$(()=>a(s))),i&&j(i,()=>{i=null})),u&&q(!0)};k(()=>{f=!1,l(e),f||n(null,null)},h),U&&(s=te)}let A=!1,M=Symbol();function Ee(r,l,_){const s=_[l]??(_[l]={store:null,source:Z(void 0),unsubscribe:C});if(s.store!==r&&!(M in _))if(s.unsubscribe(),s.store=r??null,r==null)s.source.v=void 0,s.unsubscribe=C;else{var i=!0;s.unsubscribe=Pe(r,d=>{i?s.source.v=d:y(s.source,d)}),i=!1}return r&&M in _?he(r):P(s.source)}function we(){const r={};function l(){ie(()=>{for(var _ in r)r[_].unsubscribe();fe(r,M,{enumerable:!1,value:!0})})}return[r,l]}function me(r){var l=A;try{return A=!1,[r(),A]}finally{A=l}}function Ne(r,l,_,s){var Y;var i=(_&ge)!==0,d=!be||(_&oe)!==0,o=(_&_e)!==0,h=(_&ye)!==0,f=!1,e;o?[e,f]=me(()=>r[l]):e=r[l];var n=T in r||ce in r,t=o&&(((Y=D(r,l))==null?void 0:Y.set)??(n&&l in r&&(v=>r[l]=v)))||void 0,a=s,u=!0,c=!1,I=()=>(c=!0,u&&(u=!1,h?a=G(s):a=s),a);e===void 0&&s!==void 0&&(t&&d&&se(),e=I(),t&&t(e));var g;if(d)g=()=>{var v=r[l];return v===void 0?I():(u=!0,c=!1,v)};else{var w=(i?F:le)(()=>r[l]);w.f|=ue,g=()=>{var v=P(w);return v!==void 0&&(a=void 0),v===void 0?a:v}}if((_&de)===0)return g;if(t){var N=r.$$legacy;return function(v,R){return arguments.length>0?((!d||!R||N||f)&&t(R?g():v),v):g()}}var S=!1,L=Z(e),O=F(()=>{var v=g(),R=P(L);return S?(S=!1,R):L.v=v});return i||(O.equals=ve),function(v,R){if(arguments.length>0){const x=R?P(O):d&&o?E(v):v;return O.equals(x)||(S=!0,y(L,x),c&&a!==void 0&&(a=x),G(()=>P(O))),v}return P(O)}}export{E as a,we as b,Re as i,Ne as p,Ee as s};
