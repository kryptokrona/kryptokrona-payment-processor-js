import{S as f,i as p,s as h,C as y,k as g,l as w,m as I,h as u,n as D,b as P,D as A,E as $,F as b,g as v,G as E,d as L,H as S,o as j,I as c,J as k}from"../chunks/index.88c3ee78.js";import{s as l,f as F}from"../chunks/store.4a967a42.js";function N(o){let a,r,e;const i=o[1].default,s=y(i,o,o[0],null);return{c(){a=g("main"),s&&s.c(),this.h()},l(t){a=w(t,"MAIN",{class:!0});var n=I(a);s&&s.l(n),n.forEach(u),this.h()},h(){D(a,"class","svelte-h2xdop")},m(t,n){P(t,a,n),s&&s.m(a,null),e=!0},p(t,[n]){s&&s.p&&(!e||n&1)&&A(s,i,t,t[0],e?b(i,t[0],n,null):$(t[0]),null)},i(t){e||(v(s,t),r||E(()=>{r=k(a,F,{}),r.start()}),e=!0)},o(t){L(s,t),e=!1},d(t){t&&u(a),s&&s.d(t)}}}function C(o,a,r){let e;S(o,l,t=>r(2,e=t));let{$$slots:i={},$$scope:s}=a;return j(async()=>{const n=await(await fetch("http://127.0.0.1:3030/getAddress")).json();c(l,e.address=n.walletAddress,e);const _=await(await fetch("http://127.0.0.1:3030/generatePaymentID")).json();c(l,e.paymentID=_.PaymentID,e);const d=location.search,m=new URLSearchParams(d).get("amount");history.replaceState({},null,"/"),m?(c(l,e.amount=m,e),(await(await fetch(`http://127.0.0.1:3030/addPayment?paymentID=${e.paymentID}&amount=${m}`)).json()).status!="ok"&&c(l,e.status="FAILED",e)):c(l,e.status="FAILED",e)}),o.$$set=t=>{"$$scope"in t&&r(0,s=t.$$scope)},[s,i]}class U extends f{constructor(a){super(),p(this,a,C,N,h,{})}}export{U as default};