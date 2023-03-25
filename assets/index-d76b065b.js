(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function g(){}function B(e){return e()}function D(){return Object.create(null)}function k(e){e.forEach(B)}function C(e){return typeof e=="function"}function H(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function R(e){return Object.keys(e).length===0}function F(e,...t){if(e==null)return g;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function U(e){let t;return F(e,n=>t=n)(),t}function V(e,t,n){e.$$.on_destroy.push(F(t,n))}function m(e,t){e.appendChild(t)}function G(e,t,n){e.insertBefore(t,n||null)}function A(e){e.parentNode&&e.parentNode.removeChild(e)}function W(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function _(e){return document.createElement(e)}function K(e){return document.createTextNode(e)}function N(){return K(" ")}function O(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function h(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function X(e){return e===""?null:+e}function Y(e){return Array.from(e.childNodes)}function Z(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function I(e,t){e.value=t??""}let L;function E(e){L=e}const $=[],P=[];let v=[];const z=[],ee=Promise.resolve();let S=!1;function te(){S||(S=!0,ee.then(M))}function j(e){v.push(e)}const w=new Set;let b=0;function M(){if(b!==0)return;const e=L;do{try{for(;b<$.length;){const t=$[b];b++,E(t),ne(t.$$)}}catch(t){throw $.length=0,b=0,t}for(E(null),$.length=0,b=0;P.length;)P.pop()();for(let t=0;t<v.length;t+=1){const n=v[t];w.has(n)||(w.add(n),n())}v.length=0}while($.length);for(;z.length;)z.pop()();S=!1,w.clear(),E(e)}function ne(e){if(e.fragment!==null){e.update(),k(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(j)}}function re(e){const t=[],n=[];v.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),v=t}const se=new Set;function le(e,t){e&&e.i&&(se.delete(e),e.i(t))}function oe(e,t,n,r){const{fragment:l,after_update:o}=e.$$;l&&l.m(t,n),r||j(()=>{const c=e.$$.on_mount.map(B).filter(C);e.$$.on_destroy?e.$$.on_destroy.push(...c):k(c),e.$$.on_mount=[]}),o.forEach(j)}function ce(e,t){const n=e.$$;n.fragment!==null&&(re(n.after_update),k(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ie(e,t){e.$$.dirty[0]===-1&&($.push(e),te(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ue(e,t,n,r,l,o,c,f=[-1]){const a=L;E(e);const s=e.$$={fragment:null,ctx:[],props:o,update:g,not_equal:l,bound:D(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:D(),dirty:f,skip_bound:!1,root:t.target||a.$$.root};c&&c(s.root);let u=!1;if(s.ctx=n?n(e,t.props||{},(d,i,...p)=>{const x=p.length?p[0]:i;return s.ctx&&l(s.ctx[d],s.ctx[d]=x)&&(!s.skip_bound&&s.bound[d]&&s.bound[d](x),u&&ie(e,d)),i}):[],s.update(),u=!0,k(s.before_update),s.fragment=r?r(s.ctx):!1,t.target){if(t.hydrate){const d=Y(t.target);s.fragment&&s.fragment.l(d),d.forEach(A)}else s.fragment&&s.fragment.c();t.intro&&le(e.$$.fragment),oe(e,t.target,t.anchor,t.customElement),M()}E(a)}class fe{$destroy(){ce(this,1),this.$destroy=g}$on(t,n){if(!C(n))return g;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(t){this.$$set&&!R(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const y=[];function ae(e,t=g){let n;const r=new Set;function l(f){if(H(e,f)&&(e=f,n)){const a=!y.length;for(const s of r)s[1](),y.push(s,e);if(a){for(let s=0;s<y.length;s+=2)y[s][0](y[s+1]);y.length=0}}}function o(f){l(f(e))}function c(f,a=g){const s=[f,a];return r.add(s),r.size===1&&(n=t(l)||g),f(e),()=>{r.delete(s),r.size===0&&n&&(n(),n=null)}}return{set:l,update:o,subscribe:c}}function de(e,t){const n=ae(t),{subscribe:r,set:l}=n,o=localStorage.getItem(e);return o&&(JSON.parse(o).length!==t.length?(localStorage.removeItem(e),console.log("DELETEING STALE DATA")):l(JSON.parse(o))),{set(c){localStorage.setItem(e,JSON.stringify(c)),l(c)},update(c){const f=c(U(n));this.set(f)},subscribe:r}}const Q=["Ellekildevej➡️Netto","Græsvang","Fyrrekrogen","Åbyvej","Horsevang","Bøgevej","Åbyvej","Humlevang","Pilevej","Åbyvej","Dyrehegnet➡️Julius","Dyrehegnet➡️Noah","Dyvels Krat","Dyrehegnet","Ved Hanevad","Almeengen","Åbyvej"];console.log(Q);const T=de("reklamerute",Q.map(e=>({street:e,completed:!1})));function J(e,t,n){const r=e.slice();return r[4]=t[n],r[5]=t,r[6]=n,r}function q(e){let t,n,r,l,o,c=e[4].street+"",f,a,s,u;function d(){e[3].call(r,e[5],e[6])}return{c(){t=_("li"),n=_("label"),r=_("input"),l=N(),o=_("span"),f=K(c),a=N(),h(r,"type","checkbox"),h(r,"name",""),h(r,"class","svelte-1m41i9m"),h(o,"class","svelte-1m41i9m"),h(n,"class","svelte-1m41i9m"),h(t,"class","svelte-1m41i9m")},m(i,p){G(i,t,p),m(t,n),m(n,r),r.checked=e[4].completed,m(n,l),m(n,o),m(o,f),m(t,a),s||(u=O(r,"change",d),s=!0)},p(i,p){e=i,p&2&&(r.checked=e[4].completed),p&2&&c!==(c=e[4].street+"")&&Z(f,c)},d(i){i&&A(t),s=!1,u()}}}function he(e){let t,n,r,l,o,c,f,a=e[1],s=[];for(let u=0;u<a.length;u+=1)s[u]=q(J(e,a,u));return{c(){t=_("main"),n=_("input"),r=N(),l=_("ol");for(let u=0;u<s.length;u+=1)s[u].c();h(n,"type","range"),h(n,"min","0.5"),h(n,"max","4"),h(n,"step","0.1"),h(n,"class","svelte-1m41i9m"),h(l,"class","svelte-1m41i9m"),h(t,"style",o=`--size: ${e[0]}rem`),h(t,"class","svelte-1m41i9m")},m(u,d){G(u,t,d),m(t,n),I(n,e[0]),m(t,r),m(t,l);for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(l,null);c||(f=[O(n,"change",e[2]),O(n,"input",e[2])],c=!0)},p(u,[d]){if(d&1&&I(n,u[0]),d&2){a=u[1];let i;for(i=0;i<a.length;i+=1){const p=J(u,a,i);s[i]?s[i].p(p,d):(s[i]=q(p),s[i].c(),s[i].m(l,null))}for(;i<s.length;i+=1)s[i].d(1);s.length=a.length}d&1&&o!==(o=`--size: ${u[0]}rem`)&&h(t,"style",o)},i:g,o:g,d(u){u&&A(t),W(s,u),c=!1,k(f)}}}function pe(e,t,n){let r;V(e,T,f=>n(1,r=f));let l=1.8;function o(){l=X(this.value),n(0,l)}function c(f,a){f[a].completed=this.checked,T.set(r)}return[l,r,o,c]}class me extends fe{constructor(t){super(),ue(this,t,pe,he,H,{})}}new me({target:document.getElementById("app")});
