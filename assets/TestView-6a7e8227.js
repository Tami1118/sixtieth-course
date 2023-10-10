import{g as $o,C as Go,h as sr,i as Ko,j as Xe,k as zo,l as Ho,m as Qo,L as Tt,n as Wo,S as Xo,p as Yo,_ as Jo,o as z,c as H,a as c,F as Un,q as Bn,e as $r,t as D,d as jn,s as or}from"./index-20289a59.js";var Zo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g,yi=yi||{},v=Zo||self;function pn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Ve(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function ta(e){return Object.prototype.hasOwnProperty.call(e,qn)&&e[qn]||(e[qn]=++ea)}var qn="closure_uid_"+(1e9*Math.random()>>>0),ea=0;function na(e,t,n){return e.call.apply(e.bind,arguments)}function ia(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function J(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?J=na:J=ia,J.apply(null,arguments)}function Ue(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),e.apply(this,i)}}function j(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(i,r,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(i,o)}}function Rt(){this.s=this.s,this.o=this.o}var ra=0;Rt.prototype.s=!1;Rt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),ra!=0)&&ta(this)};Rt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Gr=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function vi(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function ar(e,t){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(pn(i)){const r=e.length||0,s=i.length||0;e.length=r+s;for(let o=0;o<s;o++)e[r+o]=i[o]}else e.push(i)}}function Z(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Z.prototype.h=function(){this.defaultPrevented=!0};var sa=function(){if(!v.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{v.addEventListener("test",()=>{},t),v.removeEventListener("test",()=>{},t)}catch{}return e}();function de(e){return/^[\s\xa0]*$/.test(e)}function gn(){var e=v.navigator;return e&&(e=e.userAgent)?e:""}function ht(e){return gn().indexOf(e)!=-1}function Ei(e){return Ei[" "](e),e}Ei[" "]=function(){};function oa(e,t){var n=Ja;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var aa=ht("Opera"),Gt=ht("Trident")||ht("MSIE"),Kr=ht("Edge"),Zn=Kr||Gt,zr=ht("Gecko")&&!(gn().toLowerCase().indexOf("webkit")!=-1&&!ht("Edge"))&&!(ht("Trident")||ht("MSIE"))&&!ht("Edge"),la=gn().toLowerCase().indexOf("webkit")!=-1&&!ht("Edge");function Hr(){var e=v.document;return e?e.documentMode:void 0}var ti;t:{var $n="",Gn=function(){var e=gn();if(zr)return/rv:([^\);]+)(\)|;)/.exec(e);if(Kr)return/Edge\/([\d\.]+)/.exec(e);if(Gt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(la)return/WebKit\/(\S+)/.exec(e);if(aa)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Gn&&($n=Gn?Gn[1]:""),Gt){var Kn=Hr();if(Kn!=null&&Kn>parseFloat($n)){ti=String(Kn);break t}}ti=$n}var ei;if(v.document&&Gt){var lr=Hr();ei=lr||parseInt(ti,10)||void 0}else ei=void 0;var ua=ei;function fe(e,t){if(Z.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(zr){t:{try{Ei(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:ha[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&fe.$.h.call(this)}}j(fe,Z);var ha={2:"touch",3:"pen",4:"mouse"};fe.prototype.h=function(){fe.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ce="closure_listenable_"+(1e6*Math.random()|0),ca=0;function da(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.la=r,this.key=++ca,this.fa=this.ia=!1}function mn(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Ti(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function fa(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Qr(e){const t={};for(const n in e)t[n]=e[n];return t}const ur="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wr(e,t){let n,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(n in i)e[n]=i[n];for(let s=0;s<ur.length;s++)n=ur[s],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function _n(e){this.src=e,this.g={},this.h=0}_n.prototype.add=function(e,t,n,i,r){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=ii(e,t,i,r);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new da(t,this.src,s,!!i,r),t.ia=n,e.push(t)),t};function ni(e,t){var n=t.type;if(n in e.g){var i=e.g[n],r=Gr(i,t),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(mn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function ii(e,t,n,i){for(var r=0;r<e.length;++r){var s=e[r];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==i)return r}return-1}var wi="closure_lm_"+(1e6*Math.random()|0),zn={};function Xr(e,t,n,i,r){if(i&&i.once)return Jr(e,t,n,i,r);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Xr(e,t[s],n,i,r);return null}return n=Ri(n),e&&e[Ce]?e.O(t,n,Ve(i)?!!i.capture:!!i,r):Yr(e,t,n,!1,i,r)}function Yr(e,t,n,i,r,s){if(!t)throw Error("Invalid event type");var o=Ve(r)?!!r.capture:!!r,a=Ii(e);if(a||(e[wi]=a=new _n(e)),n=a.add(t,n,i,o,s),n.proxy)return n;if(i=pa(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)sa||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(ts(t.toString()),i);else if(e.addListener&&e.removeListener)e.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function pa(){function e(n){return t.call(e.src,e.listener,n)}const t=ga;return e}function Jr(e,t,n,i,r){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Jr(e,t[s],n,i,r);return null}return n=Ri(n),e&&e[Ce]?e.P(t,n,Ve(i)?!!i.capture:!!i,r):Yr(e,t,n,!0,i,r)}function Zr(e,t,n,i,r){if(Array.isArray(t))for(var s=0;s<t.length;s++)Zr(e,t[s],n,i,r);else i=Ve(i)?!!i.capture:!!i,n=Ri(n),e&&e[Ce]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=ii(s,n,i,r),-1<n&&(mn(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ii(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ii(t,n,i,r)),(n=-1<e?t[e]:null)&&Ai(n))}function Ai(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Ce])ni(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(ts(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=Ii(t))?(ni(n,e),n.h==0&&(n.src=null,t[wi]=null)):mn(e)}}}function ts(e){return e in zn?zn[e]:zn[e]="on"+e}function ga(e,t){if(e.fa)e=!0;else{t=new fe(t,this);var n=e.listener,i=e.la||e.src;e.ia&&Ai(e),e=n.call(i,t)}return e}function Ii(e){return e=e[wi],e instanceof _n?e:null}var Hn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ri(e){return typeof e=="function"?e:(e[Hn]||(e[Hn]=function(t){return e.handleEvent(t)}),e[Hn])}function U(){Rt.call(this),this.i=new _n(this),this.S=this,this.J=null}j(U,Rt);U.prototype[Ce]=!0;U.prototype.removeEventListener=function(e,t,n,i){Zr(this,e,t,n,i)};function K(e,t){var n,i=e.J;if(i)for(n=[];i;i=i.J)n.push(i);if(e=e.S,i=t.type||t,typeof t=="string")t=new Z(t,e);else if(t instanceof Z)t.target=t.target||e;else{var r=t;t=new Z(i,e),Wr(t,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];r=Be(o,i,!0,t)&&r}if(o=t.g=e,r=Be(o,i,!0,t)&&r,r=Be(o,i,!1,t)&&r,n)for(s=0;s<n.length;s++)o=t.g=n[s],r=Be(o,i,!1,t)&&r}U.prototype.N=function(){if(U.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)mn(n[i]);delete e.g[t],e.h--}}this.J=null};U.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)};U.prototype.P=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};function Be(e,t,n,i){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&ni(e.i,o),r=a.call(l,i)!==!1&&r}}return r&&!i.defaultPrevented}var Pi=v.JSON.stringify;class ma{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function _a(){var e=Vi;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class ya{constructor(){this.h=this.g=null}add(t,n){const i=es.get();i.set(t,n),this.h?this.h.next=i:this.g=i,this.h=i}}var es=new ma(()=>new va,e=>e.reset());class va{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Ea(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Ta(e){v.setTimeout(()=>{throw e},0)}let pe,ge=!1,Vi=new ya,ns=()=>{const e=v.Promise.resolve(void 0);pe=()=>{e.then(wa)}};var wa=()=>{for(var e;e=_a();){try{e.h.call(e.g)}catch(n){Ta(n)}var t=es;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}ge=!1};function yn(e,t){U.call(this),this.h=e||1,this.g=t||v,this.j=J(this.qb,this),this.l=Date.now()}j(yn,U);g=yn.prototype;g.ga=!1;g.T=null;g.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),K(this,"tick"),this.ga&&(Ci(this),this.start()))}};g.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ci(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}g.N=function(){yn.$.N.call(this),Ci(this),delete this.g};function Si(e,t,n){if(typeof e=="function")n&&(e=J(e,n));else if(e&&typeof e.handleEvent=="function")e=J(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:v.setTimeout(e,t||0)}function is(e){e.g=Si(()=>{e.g=null,e.i&&(e.i=!1,is(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Aa extends Rt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:is(this)}N(){super.N(),this.g&&(v.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function me(e){Rt.call(this),this.h=e,this.g={}}j(me,Rt);var hr=[];function rs(e,t,n,i){Array.isArray(n)||(n&&(hr[0]=n.toString()),n=hr);for(var r=0;r<n.length;r++){var s=Xr(t,n[r],i||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function ss(e){Ti(e.g,function(t,n){this.g.hasOwnProperty(n)&&Ai(t)},e),e.g={}}me.prototype.N=function(){me.$.N.call(this),ss(this)};me.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function vn(){this.g=!0}vn.prototype.Ea=function(){this.g=!1};function Ia(e,t,n,i,r,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var h=u[0];u=u[1];var d=h.split("_");o=2<=d.length&&d[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function Ra(e,t,n,i,r,s,o){e.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+t+`
`+n+`
`+s+" "+o})}function jt(e,t,n,i){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Va(e,n)+(i?" "+i:"")})}function Pa(e,t){e.info(function(){return"TIMEOUT: "+t})}vn.prototype.info=function(){};function Va(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Pi(n)}catch{return t}}var Ft={},cr=null;function En(){return cr=cr||new U}Ft.Ta="serverreachability";function os(e){Z.call(this,Ft.Ta,e)}j(os,Z);function _e(e){const t=En();K(t,new os(t))}Ft.STAT_EVENT="statevent";function as(e,t){Z.call(this,Ft.STAT_EVENT,e),this.stat=t}j(as,Z);function et(e){const t=En();K(t,new as(t,e))}Ft.Ua="timingevent";function ls(e,t){Z.call(this,Ft.Ua,e),this.size=t}j(ls,Z);function Se(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return v.setTimeout(function(){e()},t)}var Tn={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},us={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function xi(){}xi.prototype.h=null;function dr(e){return e.h||(e.h=e.i())}function hs(){}var xe={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Di(){Z.call(this,"d")}j(Di,Z);function ki(){Z.call(this,"c")}j(ki,Z);var ri;function wn(){}j(wn,xi);wn.prototype.g=function(){return new XMLHttpRequest};wn.prototype.i=function(){return{}};ri=new wn;function De(e,t,n,i){this.l=e,this.j=t,this.m=n,this.W=i||1,this.U=new me(this),this.P=Ca,e=Zn?125:void 0,this.V=new yn(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new cs}function cs(){this.i=null,this.g="",this.h=!1}var Ca=45e3,si={},Ye={};g=De.prototype;g.setTimeout=function(e){this.P=e};function oi(e,t,n){e.L=1,e.v=In(yt(t)),e.s=n,e.S=!0,ds(e,null)}function ds(e,t){e.G=Date.now(),ke(e),e.A=yt(e.v);var n=e.A,i=e.W;Array.isArray(i)||(i=[String(i)]),Es(n.i,"t",i),e.C=0,n=e.l.J,e.h=new cs,e.g=js(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Aa(J(e.Pa,e,e.g),e.O)),rs(e.U,e.g,"readystatechange",e.nb),t=e.I?Qr(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),_e(),Ia(e.j,e.u,e.A,e.m,e.W,e.s)}g.nb=function(e){e=e.target;const t=this.M;t&&ct(e)==3?t.l():this.Pa(e)};g.Pa=function(e){try{if(e==this.g)t:{const h=ct(this.g);var t=this.g.Ia();const d=this.g.da();if(!(3>h)&&(h!=3||Zn||this.g&&(this.h.h||this.g.ja()||mr(this.g)))){this.J||h!=4||t==7||(t==8||0>=d?_e(3):_e(2)),An(this);var n=this.g.da();this.ca=n;e:if(fs(this)){var i=mr(this.g);e="";var r=i.length,s=ct(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ct(this),oe(this);var o="";break e}this.h.i=new v.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:s&&t==r-1});i.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Ra(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!de(a)){var u=a;break e}}u=null}if(n=u)jt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ai(this,n);else{this.i=!1,this.o=3,et(12),Ct(this),oe(this);break t}}this.S?(ps(this,h,o),Zn&&this.i&&h==3&&(rs(this.U,this.V,"tick",this.mb),this.V.start())):(jt(this.j,this.m,o,null),ai(this,o)),h==4&&Ct(this),this.i&&!this.J&&(h==4?Fs(this.l,this):(this.i=!1,ke(this)))}else Wa(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,et(12)):(this.o=0,et(13)),Ct(this),oe(this)}}}catch{}finally{}};function fs(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function ps(e,t,n){let i=!0,r;for(;!e.J&&e.C<n.length;)if(r=Sa(e,n),r==Ye){t==4&&(e.o=4,et(14),i=!1),jt(e.j,e.m,null,"[Incomplete Response]");break}else if(r==si){e.o=4,et(15),jt(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}else jt(e.j,e.m,r,null),ai(e,r);fs(e)&&r!=Ye&&r!=si&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,et(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Li(t),t.M=!0,et(11))):(jt(e.j,e.m,n,"[Invalid Chunked Response]"),Ct(e),oe(e))}g.mb=function(){if(this.g){var e=ct(this.g),t=this.g.ja();this.C<t.length&&(An(this),ps(this,e,t),this.i&&e!=4&&ke(this))}};function Sa(e,t){var n=e.C,i=t.indexOf(`
`,n);return i==-1?Ye:(n=Number(t.substring(n,i)),isNaN(n)?si:(i+=1,i+n>t.length?Ye:(t=t.slice(i,i+n),e.C=i+n,t)))}g.cancel=function(){this.J=!0,Ct(this)};function ke(e){e.Y=Date.now()+e.P,gs(e,e.P)}function gs(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Se(J(e.lb,e),t)}function An(e){e.B&&(v.clearTimeout(e.B),e.B=null)}g.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Pa(this.j,this.A),this.L!=2&&(_e(),et(17)),Ct(this),this.o=2,oe(this)):gs(this,this.Y-e)};function oe(e){e.l.H==0||e.J||Fs(e.l,e)}function Ct(e){An(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Ci(e.V),ss(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function ai(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||li(n.i,e))){if(!e.K&&li(n.i,e)&&n.H==3){try{var i=n.Ja.g.parse(t)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)tn(n),Cn(n);else break t;Fi(n),et(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=Se(J(n.ib,n),6e3));if(1>=As(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else St(n,11)}else if((e.K||n.g==e)&&tn(n),!de(t))for(r=n.Ja.g.parse(t),t=0;t<r.length;t++){let u=r[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const h=u[3];h!=null&&(n.ra=h,n.l.info("VER="+n.ra));const d=u[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const m=u[5];m!=null&&typeof m=="number"&&0<m&&(i=1.5*m,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const y=e.g;if(y){const R=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(R){var s=i.i;s.g||R.indexOf("spdy")==-1&&R.indexOf("quic")==-1&&R.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Ni(s,s.h),s.h=null))}if(i.F){const x=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;x&&(i.Da=x,C(i.I,i.F,x))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=e;if(i.wa=Bs(i,i.J?i.pa:null,i.Y),o.K){Is(i.i,o);var a=o,l=i.L;l&&a.setTimeout(l),a.B&&(An(a),ke(a)),i.g=o}else Os(i);0<n.j.length&&Sn(n)}else u[0]!="stop"&&u[0]!="close"||St(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?St(n,7):Mi(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}_e(4)}catch{}}function xa(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(pn(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}t=[],n=0;for(i in e)t[n++]=e[i];return t}function Da(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(pn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}function ms(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(pn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Da(e),i=xa(e),r=i.length,s=0;s<r;s++)t.call(void 0,i[s],n&&n[s],e)}var _s=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ka(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var s=e[n].substring(0,i);r=e[n].substring(i+1)}else s=e[n];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Dt(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Dt){this.h=e.h,Je(this,e.j),this.s=e.s,this.g=e.g,Ze(this,e.m),this.l=e.l;var t=e.i,n=new ye;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),fr(this,n),this.o=e.o}else e&&(t=String(e).match(_s))?(this.h=!1,Je(this,t[1]||"",!0),this.s=re(t[2]||""),this.g=re(t[3]||"",!0),Ze(this,t[4]),this.l=re(t[5]||"",!0),fr(this,t[6]||"",!0),this.o=re(t[7]||"")):(this.h=!1,this.i=new ye(null,this.h))}Dt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(se(t,pr,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(se(t,pr,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(se(n,n.charAt(0)=="/"?Oa:ba,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",se(n,Fa)),e.join("")};function yt(e){return new Dt(e)}function Je(e,t,n){e.j=n?re(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ze(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function fr(e,t,n){t instanceof ye?(e.i=t,La(e.i,e.h)):(n||(t=se(t,Ma)),e.i=new ye(t,e.h))}function C(e,t,n){e.i.set(t,n)}function In(e){return C(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function re(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function se(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Na),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Na(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var pr=/[#\/\?@]/g,ba=/[#\?:]/g,Oa=/[#\?]/g,Ma=/[#\?@]/g,Fa=/#/g;function ye(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Pt(e){e.g||(e.g=new Map,e.h=0,e.i&&ka(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}g=ye.prototype;g.add=function(e,t){Pt(this),this.i=null,e=Xt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function ys(e,t){Pt(e),t=Xt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function vs(e,t){return Pt(e),t=Xt(e,t),e.g.has(t)}g.forEach=function(e,t){Pt(this),this.g.forEach(function(n,i){n.forEach(function(r){e.call(t,r,i,this)},this)},this)};g.ta=function(){Pt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const r=e[i];for(let s=0;s<r.length;s++)n.push(t[i])}return n};g.Z=function(e){Pt(this);let t=[];if(typeof e=="string")vs(this,e)&&(t=t.concat(this.g.get(Xt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};g.set=function(e,t){return Pt(this),this.i=null,e=Xt(this,e),vs(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};g.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Es(e,t,n){ys(e,t),0<n.length&&(e.i=null,e.g.set(Xt(e,t),vi(n)),e.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const s=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var r=s;o[i]!==""&&(r+="="+encodeURIComponent(String(o[i]))),e.push(r)}}return this.i=e.join("&")};function Xt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function La(e,t){t&&!e.j&&(Pt(e),e.i=null,e.g.forEach(function(n,i){var r=i.toLowerCase();i!=r&&(ys(this,i),Es(this,r,n))},e)),e.j=t}var Ua=class{constructor(e,t){this.g=e,this.map=t}};function Ts(e){this.l=e||Ba,v.PerformanceNavigationTiming?(e=v.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(v.g&&v.g.Ka&&v.g.Ka()&&v.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ba=10;function ws(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function As(e){return e.h?1:e.g?e.g.size:0}function li(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Ni(e,t){e.g?e.g.add(t):e.h=t}function Is(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Ts.prototype.cancel=function(){if(this.i=Rs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Rs(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return vi(e.i)}var ja=class{stringify(e){return v.JSON.stringify(e,void 0)}parse(e){return v.JSON.parse(e,void 0)}};function qa(){this.g=new ja}function $a(e,t,n){const i=n||"";try{ms(e,function(r,s){let o=r;Ve(r)&&(o=Pi(r)),t.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw t.push(i+"type="+encodeURIComponent("_badmap")),r}}function Ga(e,t){const n=new vn;if(v.Image){const i=new Image;i.onload=Ue(je,n,i,"TestLoadImage: loaded",!0,t),i.onerror=Ue(je,n,i,"TestLoadImage: error",!1,t),i.onabort=Ue(je,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=Ue(je,n,i,"TestLoadImage: timeout",!1,t),v.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=e}else t(!1)}function je(e,t,n,i,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(i)}catch{}}function Rn(e){this.l=e.ec||null,this.j=e.ob||!1}j(Rn,xi);Rn.prototype.g=function(){return new Pn(this.l,this.j)};Rn.prototype.i=function(e){return function(){return e}}({});function Pn(e,t){U.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=bi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}j(Pn,U);var bi=0;g=Pn.prototype;g.open=function(e,t){if(this.readyState!=bi)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ve(this)};g.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||v).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ne(this)),this.readyState=bi};g.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ve(this)),this.g&&(this.readyState=3,ve(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof v.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ps(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Ps(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}g.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ne(this):ve(this),this.readyState==3&&Ps(this)}};g.Za=function(e){this.g&&(this.response=this.responseText=e,Ne(this))};g.Ya=function(e){this.g&&(this.response=e,Ne(this))};g.ka=function(){this.g&&Ne(this)};function Ne(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ve(e)}g.setRequestHeader=function(e,t){this.v.append(e,t)};g.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function ve(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Pn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Ka=v.JSON.parse;function N(e){U.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Vs,this.L=this.M=!1}j(N,U);var Vs="",za=/^https?$/i,Ha=["POST","PUT"];g=N.prototype;g.Oa=function(e){this.M=e};g.ha=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ri.g(),this.C=this.u?dr(this.u):dr(ri),this.g.onreadystatechange=J(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){gr(this,s);return}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const s of i.keys())n.set(s,i.get(s));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),r=v.FormData&&e instanceof v.FormData,!(0<=Gr(Ha,t))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{xs(this),0<this.B&&((this.L=Qa(this.g))?(this.g.timeout=this.B,this.g.ontimeout=J(this.ua,this)):this.A=Si(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){gr(this,s)}};function Qa(e){return Gt&&typeof e.timeout=="number"&&e.ontimeout!==void 0}g.ua=function(){typeof yi<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,K(this,"timeout"),this.abort(8))};function gr(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Cs(e),Vn(e)}function Cs(e){e.F||(e.F=!0,K(e,"complete"),K(e,"error"))}g.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,K(this,"complete"),K(this,"abort"),Vn(this))};g.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vn(this,!0)),N.$.N.call(this)};g.La=function(){this.s||(this.G||this.v||this.l?Ss(this):this.kb())};g.kb=function(){Ss(this)};function Ss(e){if(e.h&&typeof yi<"u"&&(!e.C[1]||ct(e)!=4||e.da()!=2)){if(e.v&&ct(e)==4)Si(e.La,0,e);else if(K(e,"readystatechange"),ct(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var i;if(i=o===0){var r=String(e.I).match(_s)[1]||null;!r&&v.self&&v.self.location&&(r=v.self.location.protocol.slice(0,-1)),i=!za.test(r?r.toLowerCase():"")}n=i}if(n)K(e,"complete"),K(e,"success");else{e.m=6;try{var s=2<ct(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",Cs(e)}}finally{Vn(e)}}}}function Vn(e,t){if(e.g){xs(e);const n=e.g,i=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||K(e,"ready");try{n.onreadystatechange=i}catch{}}}function xs(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(v.clearTimeout(e.A),e.A=null)}g.isActive=function(){return!!this.g};function ct(e){return e.g?e.g.readyState:0}g.da=function(){try{return 2<ct(this)?this.g.status:-1}catch{return-1}};g.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Ka(t)}};function mr(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Vs:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function Wa(e){const t={};e=(e.g&&2<=ct(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<e.length;i++){if(de(e[i]))continue;var n=Ea(e[i]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[r]||[];t[r]=s,s.push(n)}fa(t,function(i){return i.join(", ")})}g.Ia=function(){return this.m};g.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ds(e){let t="";return Ti(e,function(n,i){t+=i,t+=":",t+=n,t+=`\r
`}),t}function Oi(e,t,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=Ds(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):C(e,t,n))}function te(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function ks(e){this.Ga=0,this.j=[],this.l=new vn,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=te("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=te("baseRetryDelayMs",5e3,e),this.hb=te("retryDelaySeedMs",1e4,e),this.eb=te("forwardChannelMaxRetries",2,e),this.xa=te("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Ts(e&&e.concurrentRequestLimit),this.Ja=new qa,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}g=ks.prototype;g.ra=8;g.H=1;function Mi(e){if(Ns(e),e.H==3){var t=e.W++,n=yt(e.I);if(C(n,"SID",e.K),C(n,"RID",t),C(n,"TYPE","terminate"),be(e,n),t=new De(e,e.l,t),t.L=2,t.v=In(yt(n)),n=!1,v.navigator&&v.navigator.sendBeacon)try{n=v.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&v.Image&&(new Image().src=t.v,n=!0),n||(t.g=js(t.l,null),t.g.ha(t.v)),t.G=Date.now(),ke(t)}Us(e)}function Cn(e){e.g&&(Li(e),e.g.cancel(),e.g=null)}function Ns(e){Cn(e),e.u&&(v.clearTimeout(e.u),e.u=null),tn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&v.clearTimeout(e.m),e.m=null)}function Sn(e){if(!ws(e.i)&&!e.m){e.m=!0;var t=e.Na;pe||ns(),ge||(pe(),ge=!0),Vi.add(t,e),e.C=0}}function Xa(e,t){return As(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Se(J(e.Na,e,t),Ls(e,e.C)),e.C++,!0)}g.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const r=new De(this,this.l,e);let s=this.s;if(this.U&&(s?(s=Qr(s),Wr(s,this.U)):s=this.U),this.o!==null||this.O||(r.I=s,s=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break e}i=void 0}if(i===void 0)break;if(t+=i,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=bs(this,r,t),n=yt(this.I),C(n,"RID",e),C(n,"CVER",22),this.F&&C(n,"X-HTTP-Session-Id",this.F),be(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Ds(s)))+"&"+t:this.o&&Oi(n,this.o,s)),Ni(this.i,r),this.bb&&C(n,"TYPE","init"),this.P?(C(n,"$req",t),C(n,"SID","null"),r.aa=!0,oi(r,n,null)):oi(r,n,t),this.H=2}}else this.H==3&&(e?_r(this,e):this.j.length==0||ws(this.i)||_r(this))};function _r(e,t){var n;t?n=t.m:n=e.W++;const i=yt(e.I);C(i,"SID",e.K),C(i,"RID",n),C(i,"AID",e.V),be(e,i),e.o&&e.s&&Oi(i,e.o,e.s),n=new De(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=bs(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Ni(e.i,n),oi(n,i,t)}function be(e,t){e.na&&Ti(e.na,function(n,i){C(t,i,n)}),e.h&&ms({},function(n,i){C(t,i,n)})}function bs(e,t,n){n=Math.min(e.j.length,n);var i=e.h?J(e.h.Va,e.h,e):null;t:{var r=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=r[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=r[l].g;const h=r[l].map;if(u-=s,0>u)s=Math.max(0,r[l].g-100),a=!1;else try{$a(h,o,"req"+u+"_")}catch{i&&i(h)}}if(a){i=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,i}function Os(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;pe||ns(),ge||(pe(),ge=!0),Vi.add(t,e),e.A=0}}function Fi(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Se(J(e.Ma,e),Ls(e,e.A)),e.A++,!0)}g.Ma=function(){if(this.u=null,Ms(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Se(J(this.jb,this),e)}};g.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,et(10),Cn(this),Ms(this))};function Li(e){e.B!=null&&(v.clearTimeout(e.B),e.B=null)}function Ms(e){e.g=new De(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=yt(e.wa);C(t,"RID","rpc"),C(t,"SID",e.K),C(t,"AID",e.V),C(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&C(t,"TO",e.qa),C(t,"TYPE","xmlhttp"),be(e,t),e.o&&e.s&&Oi(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=In(yt(t)),n.s=null,n.S=!0,ds(n,e)}g.ib=function(){this.v!=null&&(this.v=null,Cn(this),Fi(this),et(19))};function tn(e){e.v!=null&&(v.clearTimeout(e.v),e.v=null)}function Fs(e,t){var n=null;if(e.g==t){tn(e),Li(e),e.g=null;var i=2}else if(li(e.i,t))n=t.F,Is(e.i,t),i=1;else return;if(e.H!=0){if(t.i)if(i==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var r=e.C;i=En(),K(i,new ls(i,n)),Sn(e)}else Os(e);else if(r=t.o,r==3||r==0&&0<t.ca||!(i==1&&Xa(e,t)||i==2&&Fi(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),r){case 1:St(e,5);break;case 4:St(e,10);break;case 3:St(e,6);break;default:St(e,2)}}}function Ls(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function St(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var i=J(e.pb,e);n||(n=new Dt("//www.google.com/images/cleardot.gif"),v.location&&v.location.protocol=="http"||Je(n,"https"),In(n)),Ga(n.toString(),i)}else et(2);e.H=0,e.h&&e.h.za(t),Us(e),Ns(e)}g.pb=function(e){e?(this.l.info("Successfully pinged google.com"),et(2)):(this.l.info("Failed to ping google.com"),et(1))};function Us(e){if(e.H=0,e.ma=[],e.h){const t=Rs(e.i);(t.length!=0||e.j.length!=0)&&(ar(e.ma,t),ar(e.ma,e.j),e.i.i.length=0,vi(e.j),e.j.length=0),e.h.ya()}}function Bs(e,t,n){var i=n instanceof Dt?yt(n):new Dt(n);if(i.g!="")t&&(i.g=t+"."+i.g),Ze(i,i.m);else{var r=v.location;i=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var s=new Dt(null);i&&Je(s,i),t&&(s.g=t),r&&Ze(s,r),n&&(s.l=n),i=s}return n=e.F,t=e.Da,n&&t&&C(i,n,t),C(i,"VER",e.ra),be(e,i),i}function js(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new N(new Rn({ob:!0})):new N(e.va),t.Oa(e.J),t}g.isActive=function(){return!!this.h&&this.h.isActive(this)};function qs(){}g=qs.prototype;g.Ba=function(){};g.Aa=function(){};g.za=function(){};g.ya=function(){};g.isActive=function(){return!0};g.Va=function(){};function en(){if(Gt&&!(10<=Number(ua)))throw Error("Environmental error: no available transport.")}en.prototype.g=function(e,t){return new rt(e,t)};function rt(e,t){U.call(this),this.g=new ks(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!de(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!de(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Yt(this)}j(rt,U);rt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;et(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Bs(e,null,e.Y),Sn(e)};rt.prototype.close=function(){Mi(this.g)};rt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Pi(e),e=n);t.j.push(new Ua(t.fb++,e)),t.H==3&&Sn(t)};rt.prototype.N=function(){this.g.h=null,delete this.j,Mi(this.g),delete this.g,rt.$.N.call(this)};function $s(e){Di.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}j($s,Di);function Gs(){ki.call(this),this.status=1}j(Gs,ki);function Yt(e){this.g=e}j(Yt,qs);Yt.prototype.Ba=function(){K(this.g,"a")};Yt.prototype.Aa=function(e){K(this.g,new $s(e))};Yt.prototype.za=function(e){K(this.g,new Gs)};Yt.prototype.ya=function(){K(this.g,"b")};function Ya(){this.blockSize=-1}function ft(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}j(ft,Ya);ft.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Qn(e,t,n){n||(n=0);var i=Array(16);if(typeof t=="string")for(var r=0;16>r;++r)i[r]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],r=e.g[2];var s=e.g[3],o=t+(s^n&(r^s))+i[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(r^t&(n^r))+i[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=r+(n^s&(t^n))+i[2]+606105819&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(t^r&(s^t))+i[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(s^n&(r^s))+i[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(r^t&(n^r))+i[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=r+(n^s&(t^n))+i[6]+2821735955&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(t^r&(s^t))+i[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(s^n&(r^s))+i[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(r^t&(n^r))+i[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=r+(n^s&(t^n))+i[10]+4294925233&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(t^r&(s^t))+i[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(s^n&(r^s))+i[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(r^t&(n^r))+i[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=r+(n^s&(t^n))+i[14]+2792965006&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(t^r&(s^t))+i[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(r^s&(n^r))+i[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(t^n))+i[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(s^t))+i[11]+643717713&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(r^s))+i[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(n^r))+i[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(t^n))+i[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(s^t))+i[15]+3634488961&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(r^s))+i[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(n^r))+i[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(t^n))+i[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(s^t))+i[3]+4107603335&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(r^s))+i[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(n^r))+i[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(t^n))+i[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(s^t))+i[7]+1735328473&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(r^s))+i[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(n^r^s)+i[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^r)+i[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=r+(s^t^n)+i[11]+1839030562&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^t)+i[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^s)+i[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^r)+i[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=r+(s^t^n)+i[7]+4139469664&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^t)+i[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^s)+i[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^r)+i[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=r+(s^t^n)+i[3]+3572445317&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^t)+i[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^s)+i[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^r)+i[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=r+(s^t^n)+i[15]+530742520&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^t)+i[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(r^(n|~s))+i[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~r))+i[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~n))+i[14]+2878612391&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~t))+i[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~s))+i[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~r))+i[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~n))+i[10]+4293915773&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~t))+i[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~s))+i[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~r))+i[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~n))+i[6]+2734768916&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~t))+i[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~s))+i[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~r))+i[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~n))+i[2]+718787259&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~t))+i[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+r&4294967295,e.g[3]=e.g[3]+s&4294967295}ft.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,i=this.m,r=this.h,s=0;s<t;){if(r==0)for(;s<=n;)Qn(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(i[r++]=e.charCodeAt(s++),r==this.blockSize){Qn(this,i),r=0;break}}else for(;s<t;)if(i[r++]=e[s++],r==this.blockSize){Qn(this,i),r=0;break}}this.h=r,this.i+=t};ft.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var i=0;32>i;i+=8)e[n++]=this.g[t]>>>i&255;return e};function I(e,t){this.h=t;for(var n=[],i=!0,r=e.length-1;0<=r;r--){var s=e[r]|0;i&&s==t||(n[r]=s,i=!1)}this.g=n}var Ja={};function Ui(e){return-128<=e&&128>e?oa(e,function(t){return new I([t|0],0>t?-1:0)}):new I([e|0],0>e?-1:0)}function dt(e){if(isNaN(e)||!isFinite(e))return qt;if(0>e)return G(dt(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=ui;return new I(t,0)}function Ks(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return G(Ks(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=dt(Math.pow(t,8)),i=qt,r=0;r<e.length;r+=8){var s=Math.min(8,e.length-r),o=parseInt(e.substring(r,r+s),t);8>s?(s=dt(Math.pow(t,s)),i=i.R(s).add(dt(o))):(i=i.R(n),i=i.add(dt(o)))}return i}var ui=4294967296,qt=Ui(0),hi=Ui(1),yr=Ui(16777216);g=I.prototype;g.ea=function(){if(ot(this))return-G(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var i=this.D(n);e+=(0<=i?i:ui+i)*t,t*=ui}return e};g.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(gt(this))return"0";if(ot(this))return"-"+G(this).toString(e);for(var t=dt(Math.pow(e,6)),n=this,i="";;){var r=rn(n,t).g;n=nn(n,r.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=r,gt(n))return s+i;for(;6>s.length;)s="0"+s;i=s+i}};g.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function gt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function ot(e){return e.h==-1}g.X=function(e){return e=nn(this,e),ot(e)?-1:gt(e)?0:1};function G(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new I(n,~e.h).add(hi)}g.abs=function(){return ot(this)?G(this):this};g.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,r=0;r<=t;r++){var s=i+(this.D(r)&65535)+(e.D(r)&65535),o=(s>>>16)+(this.D(r)>>>16)+(e.D(r)>>>16);i=o>>>16,s&=65535,o&=65535,n[r]=o<<16|s}return new I(n,n[n.length-1]&-2147483648?-1:0)};function nn(e,t){return e.add(G(t))}g.R=function(e){if(gt(this)||gt(e))return qt;if(ot(this))return ot(e)?G(this).R(G(e)):G(G(this).R(e));if(ot(e))return G(this.R(G(e)));if(0>this.X(yr)&&0>e.X(yr))return dt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<e.g.length;r++){var s=this.D(i)>>>16,o=this.D(i)&65535,a=e.D(r)>>>16,l=e.D(r)&65535;n[2*i+2*r]+=o*l,qe(n,2*i+2*r),n[2*i+2*r+1]+=s*l,qe(n,2*i+2*r+1),n[2*i+2*r+1]+=o*a,qe(n,2*i+2*r+1),n[2*i+2*r+2]+=s*a,qe(n,2*i+2*r+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new I(n,0)};function qe(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function ee(e,t){this.g=e,this.h=t}function rn(e,t){if(gt(t))throw Error("division by zero");if(gt(e))return new ee(qt,qt);if(ot(e))return t=rn(G(e),t),new ee(G(t.g),G(t.h));if(ot(t))return t=rn(e,G(t)),new ee(G(t.g),t.h);if(30<e.g.length){if(ot(e)||ot(t))throw Error("slowDivide_ only works with positive integers.");for(var n=hi,i=t;0>=i.X(e);)n=vr(n),i=vr(i);var r=Ut(n,1),s=Ut(i,1);for(i=Ut(i,2),n=Ut(n,2);!gt(i);){var o=s.add(i);0>=o.X(e)&&(r=r.add(n),s=o),i=Ut(i,1),n=Ut(n,1)}return t=nn(e,r.R(t)),new ee(r,t)}for(r=qt;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),s=dt(n),o=s.R(t);ot(o)||0<o.X(e);)n-=i,s=dt(n),o=s.R(t);gt(s)&&(s=hi),r=r.add(s),e=nn(e,o)}return new ee(r,e)}g.gb=function(e){return rn(this,e).h};g.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)&e.D(i);return new I(n,this.h&e.h)};g.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)|e.D(i);return new I(n,this.h|e.h)};g.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)^e.D(i);return new I(n,this.h^e.h)};function vr(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.D(i)<<1|e.D(i-1)>>>31;return new I(n,e.h)}function Ut(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,r=[],s=0;s<i;s++)r[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new I(r,e.h)}en.prototype.createWebChannel=en.prototype.g;rt.prototype.send=rt.prototype.u;rt.prototype.open=rt.prototype.m;rt.prototype.close=rt.prototype.close;Tn.NO_ERROR=0;Tn.TIMEOUT=8;Tn.HTTP_ERROR=6;us.COMPLETE="complete";hs.EventType=xe;xe.OPEN="a";xe.CLOSE="b";xe.ERROR="c";xe.MESSAGE="d";U.prototype.listen=U.prototype.O;N.prototype.listenOnce=N.prototype.P;N.prototype.getLastError=N.prototype.Sa;N.prototype.getLastErrorCode=N.prototype.Ia;N.prototype.getStatus=N.prototype.da;N.prototype.getResponseJson=N.prototype.Wa;N.prototype.getResponseText=N.prototype.ja;N.prototype.send=N.prototype.ha;N.prototype.setWithCredentials=N.prototype.Oa;ft.prototype.digest=ft.prototype.l;ft.prototype.reset=ft.prototype.reset;ft.prototype.update=ft.prototype.j;I.prototype.add=I.prototype.add;I.prototype.multiply=I.prototype.R;I.prototype.modulo=I.prototype.gb;I.prototype.compare=I.prototype.X;I.prototype.toNumber=I.prototype.ea;I.prototype.toString=I.prototype.toString;I.prototype.getBits=I.prototype.D;I.fromNumber=dt;I.fromString=Ks;var Za=function(){return new en},tl=function(){return En()},Wn=Tn,el=us,nl=Ft,Er={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},$e=hs,il=N,rl=I;const Tr="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}W.UNAUTHENTICATED=new W(null),W.GOOGLE_CREDENTIALS=new W("google-credentials-uid"),W.FIRST_PARTY=new W("first-party-uid"),W.MOCK_USER=new W("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jt="10.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt=new Yo("@firebase/firestore");function ne(){return bt.logLevel}function _(e,...t){if(bt.logLevel<=Tt.DEBUG){const n=t.map(Bi);bt.debug(`Firestore (${Jt}): ${e}`,...n)}}function Ot(e,...t){if(bt.logLevel<=Tt.ERROR){const n=t.map(Bi);bt.error(`Firestore (${Jt}): ${e}`,...n)}}function sn(e,...t){if(bt.logLevel<=Tt.WARN){const n=t.map(Bi);bt.warn(`Firestore (${Jt}): ${e}`,...n)}}function Bi(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e="Unexpected state"){const t=`FIRESTORE (${Jt}) INTERNAL ASSERTION FAILED: `+e;throw Ot(t),new Error(t)}function B(e,t){e||w()}function S(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends Ko{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class sl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(W.UNAUTHENTICATED))}shutdown(){}}class ol{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class al{constructor(t){this.t=t,this.currentUser=W.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let i=this.i;const r=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let s=new kt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new kt,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new kt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==t?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(B(typeof i.accessToken=="string"),new zs(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return B(t===null||typeof t=="string"),new W(t)}}class ll{constructor(t,n,i){this.l=t,this.h=n,this.P=i,this.type="FirstParty",this.user=W.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ul{constructor(t,n,i){this.l=t,this.h=n,this.P=i}getToken(){return Promise.resolve(new ll(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(W.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hl{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cl{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const i=s=>{s.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>i(s))};const r=s=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?r(s):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(B(typeof n.token=="string"),this.R=n.token,new hl(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const r=dl(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=t.charAt(r[s]%t.length))}return i}}function V(e,t){return e<t?-1:e>t?1:0}function Kt(e,t,n){return e.length===t.length&&e.every((i,r)=>n(i,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new E(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new E(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new E(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new E(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return L.fromMillis(Date.now())}static fromDate(t){return L.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*n));return new L(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?V(this.nanoseconds,t.nanoseconds):V(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t){this.timestamp=t}static fromTimestamp(t){return new k(t)}static min(){return new k(new L(0,0))}static max(){return new k(new L(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t,n,i){n===void 0?n=0:n>t.length&&w(),i===void 0?i=t.length-n:i>t.length-n&&w(),this.segments=t,this.offset=n,this.len=i}get length(){return this.len}isEqual(t){return Ee.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ee?t.forEach(i=>{n.push(i)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,i=this.limit();n<i;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const i=Math.min(t.length,n.length);for(let r=0;r<i;r++){const s=t.get(r),o=n.get(r);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class O extends Ee{construct(t,n,i){return new O(t,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const i of t){if(i.indexOf("//")>=0)throw new E(p.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new O(n)}static emptyPath(){return new O([])}}const fl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Y extends Ee{construct(t,n,i){return new Y(t,n,i)}static isValidIdentifier(t){return fl.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Y.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Y(["__name__"])}static fromServerFormat(t){const n=[];let i="",r=0;const s=()=>{if(i.length===0)throw new E(p.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new E(p.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new E(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new E(p.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Y(n)}static emptyPath(){return new Y([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t){this.path=t}static fromPath(t){return new T(O.fromString(t))}static fromName(t){return new T(O.fromString(t).popFirst(5))}static empty(){return new T(O.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&O.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return O.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new T(new O(t.slice()))}}function pl(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,r=k.fromTimestamp(i===1e9?new L(n+1,0):new L(n,i));return new wt(r,T.empty(),t)}function gl(e){return new wt(e.readTime,e.key,-1)}class wt{constructor(t,n,i){this.readTime=t,this.documentKey=n,this.largestBatchId=i}static min(){return new wt(k.min(),T.empty(),-1)}static max(){return new wt(k.max(),T.empty(),-1)}}function ml(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=T.comparator(e.documentKey,t.documentKey),n!==0?n:V(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qs(e){if(e.code!==p.FAILED_PRECONDITION||e.message!==_l)throw e;_("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&w(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new f((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(n,s).next(i,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof f?n:f.resolve(n)}catch(n){return f.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):f.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):f.reject(n)}static resolve(t){return new f((n,i)=>{n(t)})}static reject(t){return new f((n,i)=>{i(t)})}static waitFor(t){return new f((n,i)=>{let r=0,s=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&n()},l=>i(l))}),o=!0,s===r&&n()})}static or(t){let n=f.resolve(!1);for(const i of t)n=n.next(r=>r?f.resolve(r):i());return n}static forEach(t,n){const i=[];return t.forEach((r,s)=>{i.push(n.call(this,r,s))}),this.waitFor(i)}static mapArray(t,n){return new f((i,r)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(t[u]).next(h=>{o[u]=h,++a,a===s&&i(o)},h=>r(h))}})}static doWhile(t,n){return new f((i,r)=>{const s=()=>{t()===!0?n().next(()=>{s()},r):i()};s()})}}function xn(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=i=>this.oe(i),this._e=i=>n.writeSequenceNumber(i))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Ws.ae=-1;function ji(e){return e==null}function on(e){return e===0&&1/e==-1/0}function vl(e){return typeof e=="number"&&Number.isInteger(e)&&!on(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Oe(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Xs(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t,n){this.comparator=t,this.root=n||q.EMPTY}insert(t,n){return new it(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,q.BLACK,null,null))}remove(t){return new it(this.comparator,this.root.remove(t,this.comparator).copy(null,null,q.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(t){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(t,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,i)=>(t(n,i),!1))}toString(){const t=[];return this.inorderTraversal((n,i)=>(t.push(`${n}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ge(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ge(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ge(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ge(this.root,t,this.comparator,!0)}}class Ge{constructor(t,n,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?i(t.key,n):1,n&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class q{constructor(t,n,i,r,s){this.key=t,this.value=n,this.color=i??q.RED,this.left=r??q.EMPTY,this.right=s??q.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,i,r,s){return new q(t??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let r=this;const s=i(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,n,i),null):s===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return q.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let i,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return q.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,q.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,q.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw w();const t=this.left.check();if(t!==this.right.check())throw w();return t+(this.isRed()?0:1)}}q.EMPTY=null,q.RED=!0,q.BLACK=!1;q.EMPTY=new class{constructor(){this.size=0}get key(){throw w()}get value(){throw w()}get color(){throw w()}get left(){throw w()}get right(){throw w()}copy(t,n,i,r,s){return this}insert(t,n,i){return new q(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.comparator=t,this.data=new it(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,i)=>(t(n),!1))}forEachInRange(t,n){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ar(this.data.getIterator())}getIteratorFrom(t){return new Ar(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(i=>{n=n.add(i)}),n}isEqual(t){if(!(t instanceof nt)||this.size!==t.size)return!1;const n=this.data.getIterator(),i=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new nt(this.comparator);return n.data=t,n}}class Ar{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.fields=t,t.sort(Y.comparator)}static empty(){return new ut([])}unionWith(t){let n=new nt(Y.comparator);for(const i of this.fields)n=n.add(i);for(const i of t)n=n.add(i);return new ut(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Kt(this.fields,t.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new El("Invalid base64 string: "+s):s}}(t);return new vt(n)}static fromUint8Array(t){const n=function(r){let s="";for(let o=0;o<r.length;++o)s+=String.fromCharCode(r[o]);return s}(t);return new vt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return V(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const Tl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mt(e){if(B(!!e),typeof e=="string"){let t=0;const n=Tl.exec(e);if(B(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:$(e.seconds),nanos:$(e.nanos)}}function $(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Te(e){return typeof e=="string"?vt.fromBase64String(e):vt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ys(e){const t=e.mapValue.fields.__previous_value__;return qi(t)?Ys(t):t}function an(e){const t=Mt(e.mapValue.fields.__local_write_time__.timestampValue);return new L(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(t,n,i,r,s,o,a,l,u){this.databaseId=t,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class ln{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new ln("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ln&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function zt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?qi(e)?4:Al(e)?9007199254740991:10:w()}function pt(e,t){if(e===t)return!0;const n=zt(e);if(n!==zt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return an(e).isEqual(an(t));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const o=Mt(r.timestampValue),a=Mt(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(r,s){return Te(r.bytesValue).isEqual(Te(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(r,s){return $(r.geoPointValue.latitude)===$(s.geoPointValue.latitude)&&$(r.geoPointValue.longitude)===$(s.geoPointValue.longitude)}(e,t);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return $(r.integerValue)===$(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const o=$(r.doubleValue),a=$(s.doubleValue);return o===a?on(o)===on(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Kt(e.arrayValue.values||[],t.arrayValue.values||[],pt);case 10:return function(r,s){const o=r.mapValue.fields||{},a=s.mapValue.fields||{};if(wr(o)!==wr(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!pt(o[l],a[l])))return!1;return!0}(e,t);default:return w()}}function we(e,t){return(e.values||[]).find(n=>pt(n,t))!==void 0}function Ht(e,t){if(e===t)return 0;const n=zt(e),i=zt(t);if(n!==i)return V(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return V(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=$(s.integerValue||s.doubleValue),l=$(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(e,t);case 3:return Ir(e.timestampValue,t.timestampValue);case 4:return Ir(an(e),an(t));case 5:return V(e.stringValue,t.stringValue);case 6:return function(s,o){const a=Te(s),l=Te(o);return a.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=V(a[u],l[u]);if(h!==0)return h}return V(a.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=V($(s.latitude),$(o.latitude));return a!==0?a:V($(s.longitude),$(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const h=Ht(a[u],l[u]);if(h)return h}return V(a.length,l.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===Ke.mapValue&&o===Ke.mapValue)return 0;if(s===Ke.mapValue)return 1;if(o===Ke.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const m=V(l[d],h[d]);if(m!==0)return m;const y=Ht(a[l[d]],u[h[d]]);if(y!==0)return y}return V(l.length,h.length)}(e.mapValue,t.mapValue);default:throw w()}}function Ir(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return V(e,t);const n=Mt(e),i=Mt(t),r=V(n.seconds,i.seconds);return r!==0?r:V(n.nanos,i.nanos)}function Qt(e){return ci(e)}function ci(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const i=Mt(n);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Te(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return T.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let i="[",r=!0;for(const s of n.values||[])r?r=!1:i+=",",i+=ci(s);return i+"]"}(e.arrayValue):"mapValue"in e?function(n){const i=Object.keys(n.fields||{}).sort();let r="{",s=!0;for(const o of i)s?s=!1:r+=",",r+=`${o}:${ci(n.fields[o])}`;return r+"}"}(e.mapValue):w()}function di(e){return!!e&&"integerValue"in e}function $i(e){return!!e&&"arrayValue"in e}function Qe(e){return!!e&&"mapValue"in e}function ae(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Oe(e.mapValue.fields,(n,i)=>t.mapValue.fields[n]=ae(i)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ae(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Al(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.value=t}static empty(){return new lt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let i=0;i<t.length-1;++i)if(n=(n.mapValue.fields||{})[t.get(i)],!Qe(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=ae(n)}setAll(t){let n=Y.emptyPath(),i={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,r),i={},r=[],n=a.popLast()}o?i[a.lastSegment()]=ae(o):r.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,i,r)}delete(t){const n=this.field(t.popLast());Qe(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return pt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<t.length;++i){let r=n.mapValue.fields[t.get(i)];Qe(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,i){Oe(n,(r,s)=>t[r]=s);for(const r of i)delete t[r]}clone(){return new lt(ae(this.value))}}function Js(e){const t=[];return Oe(e.fields,(n,i)=>{const r=new Y([n]);if(Qe(i)){const s=Js(i.mapValue).fields;if(s.length===0)t.push(r);else for(const o of s)t.push(r.child(o))}else t.push(r)}),new ut(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t,n,i,r,s,o,a){this.key=t,this.documentType=n,this.version=i,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new at(t,0,k.min(),k.min(),k.min(),lt.empty(),0)}static newFoundDocument(t,n,i,r){return new at(t,1,n,k.min(),i,r,0)}static newNoDocument(t,n){return new at(t,2,n,k.min(),k.min(),lt.empty(),0)}static newUnknownDocument(t,n){return new at(t,3,n,k.min(),k.min(),lt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(k.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=lt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=k.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof at&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(t,n){this.position=t,this.inclusive=n}}function Rr(e,t,n){let i=0;for(let r=0;r<e.position.length;r++){const s=t[r],o=e.position[r];if(s.field.isKeyField()?i=T.comparator(T.fromName(o.referenceValue),n.key):i=Ht(o,n.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function Pr(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!pt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t,n="asc"){this.field=t,this.dir=n}}function Il(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{}class F extends Zs{constructor(t,n,i){super(),this.field=t,this.op=n,this.value=i}static create(t,n,i){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,i):new Pl(t,n,i):n==="array-contains"?new Sl(t,i):n==="in"?new xl(t,i):n==="not-in"?new Dl(t,i):n==="array-contains-any"?new kl(t,i):new F(t,n,i)}static createKeyFieldInFilter(t,n,i){return n==="in"?new Vl(t,i):new Cl(t,i)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ht(n,this.value)):n!==null&&zt(this.value)===zt(n)&&this.matchesComparison(Ht(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return w()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class At extends Zs{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new At(t,n)}matches(t){return to(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(n=>n.isInequality());return t!==null?t.field:null}le(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function to(e){return e.op==="and"}function eo(e){return Rl(e)&&to(e)}function Rl(e){for(const t of e.filters)if(t instanceof At)return!1;return!0}function fi(e){if(e instanceof F)return e.field.canonicalString()+e.op.toString()+Qt(e.value);if(eo(e))return e.filters.map(t=>fi(t)).join(",");{const t=e.filters.map(n=>fi(n)).join(",");return`${e.op}(${t})`}}function no(e,t){return e instanceof F?function(i,r){return r instanceof F&&i.op===r.op&&i.field.isEqual(r.field)&&pt(i.value,r.value)}(e,t):e instanceof At?function(i,r){return r instanceof At&&i.op===r.op&&i.filters.length===r.filters.length?i.filters.reduce((s,o,a)=>s&&no(o,r.filters[a]),!0):!1}(e,t):void w()}function io(e){return e instanceof F?function(n){return`${n.field.canonicalString()} ${n.op} ${Qt(n.value)}`}(e):e instanceof At?function(n){return n.op.toString()+" {"+n.getFilters().map(io).join(" ,")+"}"}(e):"Filter"}class Pl extends F{constructor(t,n,i){super(t,n,i),this.key=T.fromName(i.referenceValue)}matches(t){const n=T.comparator(t.key,this.key);return this.matchesComparison(n)}}class Vl extends F{constructor(t,n){super(t,"in",n),this.keys=ro("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Cl extends F{constructor(t,n){super(t,"not-in",n),this.keys=ro("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function ro(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>T.fromName(i.referenceValue))}class Sl extends F{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return $i(n)&&we(n.arrayValue,this.value)}}class xl extends F{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&we(this.value.arrayValue,n)}}class Dl extends F{constructor(t,n){super(t,"not-in",n)}matches(t){if(we(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!we(this.value.arrayValue,n)}}class kl extends F{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!$i(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>we(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(t,n=null,i=[],r=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function Vr(e,t=null,n=[],i=[],r=null,s=null,o=null){return new Nl(e,t,n,i,r,s,o)}function Gi(e){const t=S(e);if(t.he===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(i=>fi(i)).join(","),n+="|ob:",n+=t.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),ji(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>Qt(i)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>Qt(i)).join(",")),t.he=n}return t.he}function Ki(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Il(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!no(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Pr(e.startAt,t.startAt)&&Pr(e.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(t,n=null,i=[],r=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function bl(e,t,n,i,r,s,o,a){return new Dn(e,t,n,i,r,s,o,a)}function Ol(e){return new Dn(e)}function Cr(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Ml(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Fl(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function Ll(e){return e.collectionGroup!==null}function ue(e){const t=S(e);if(t.Pe===null){t.Pe=[];const n=Fl(t),i=Ml(t);if(n!==null&&i===null)n.isKeyField()||t.Pe.push(new le(n)),t.Pe.push(new le(Y.keyField(),"asc"));else{let r=!1;for(const s of t.explicitOrderBy)t.Pe.push(s),s.field.isKeyField()&&(r=!0);if(!r){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new le(Y.keyField(),s))}}}return t.Pe}function Nt(e){const t=S(e);return t.Ie||(t.Ie=Ul(t,ue(e))),t.Ie}function Ul(e,t){if(e.limitType==="F")return Vr(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(r=>{const s=r.dir==="desc"?"asc":"desc";return new le(r.field,s)});const n=e.endAt?new un(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new un(e.startAt.position,e.startAt.inclusive):null;return Vr(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}}function pi(e,t,n){return new Dn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function so(e,t){return Ki(Nt(e),Nt(t))&&e.limitType===t.limitType}function oo(e){return`${Gi(Nt(e))}|lt:${e.limitType}`}function ie(e){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(r=>io(r)).join(", ")}]`),ji(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(r=>Qt(r)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(r=>Qt(r)).join(",")),`Target(${i})`}(Nt(e))}; limitType=${e.limitType})`}function zi(e,t){return t.isFoundDocument()&&function(i,r){const s=r.key.path;return i.collectionGroup!==null?r.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(s):T.isDocumentKey(i.path)?i.path.isEqual(s):i.path.isImmediateParentOf(s)}(e,t)&&function(i,r){for(const s of ue(i))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(e,t)&&function(i,r){for(const s of i.filters)if(!s.matches(r))return!1;return!0}(e,t)&&function(i,r){return!(i.startAt&&!function(o,a,l){const u=Rr(o,a,l);return o.inclusive?u<=0:u<0}(i.startAt,ue(i),r)||i.endAt&&!function(o,a,l){const u=Rr(o,a,l);return o.inclusive?u>=0:u>0}(i.endAt,ue(i),r))}(e,t)}function Bl(e){return(t,n)=>{let i=!1;for(const r of ue(e)){const s=jl(r,t,n);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function jl(e,t,n){const i=e.field.isKeyField()?T.comparator(t.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Ht(l,u):w()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return w()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const i=this.mapKeyFn(t),r=this.inner[i];if(r===void 0)return this.inner[i]=[[t,n]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return i.length===1?delete this.inner[n]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Oe(this.inner,(n,i)=>{for(const[r,s]of i)t(r,s)})}isEmpty(){return Xs(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql=new it(T.comparator);function hn(){return ql}const ao=new it(T.comparator);function ze(...e){let t=ao;for(const n of e)t=t.insert(n.key,n);return t}function lo(e){let t=ao;return e.forEach((n,i)=>t=t.insert(n,i.overlayedDocument)),t}function xt(){return he()}function uo(){return he()}function he(){return new Zt(e=>e.toString(),(e,t)=>e.isEqual(t))}const $l=new it(T.comparator),Gl=new nt(T.comparator);function X(...e){let t=Gl;for(const n of e)t=t.add(n);return t}const Kl=new nt(V);function zl(){return Kl}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:on(t)?"-0":t}}function co(e){return{integerValue:""+e}}function Hl(e,t){return vl(t)?co(t):ho(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(){this._=void 0}}function Ql(e,t,n){return e instanceof cn?function(r,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&qi(s)&&(s=Ys(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof Ae?po(e,t):e instanceof Ie?go(e,t):function(r,s){const o=fo(r,s),a=Sr(o)+Sr(r.Te);return di(o)&&di(r.Te)?co(a):ho(r.serializer,a)}(e,t)}function Wl(e,t,n){return e instanceof Ae?po(e,t):e instanceof Ie?go(e,t):n}function fo(e,t){return e instanceof dn?function(i){return di(i)||function(s){return!!s&&"doubleValue"in s}(i)}(t)?t:{integerValue:0}:null}class cn extends kn{}class Ae extends kn{constructor(t){super(),this.elements=t}}function po(e,t){const n=mo(t);for(const i of e.elements)n.some(r=>pt(r,i))||n.push(i);return{arrayValue:{values:n}}}class Ie extends kn{constructor(t){super(),this.elements=t}}function go(e,t){let n=mo(t);for(const i of e.elements)n=n.filter(r=>!pt(r,i));return{arrayValue:{values:n}}}class dn extends kn{constructor(t,n){super(),this.serializer=t,this.Te=n}}function Sr(e){return $(e.integerValue||e.doubleValue)}function mo(e){return $i(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Xl(e,t){return e.field.isEqual(t.field)&&function(i,r){return i instanceof Ae&&r instanceof Ae||i instanceof Ie&&r instanceof Ie?Kt(i.elements,r.elements,pt):i instanceof dn&&r instanceof dn?pt(i.Te,r.Te):i instanceof cn&&r instanceof cn}(e.transform,t.transform)}class Yl{constructor(t,n){this.version=t,this.transformResults=n}}class mt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new mt}static exists(t){return new mt(void 0,t)}static updateTime(t){return new mt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function We(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Nn{}function _o(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new vo(e.key,mt.none()):new Me(e.key,e.data,mt.none());{const n=e.data,i=lt.empty();let r=new nt(Y.comparator);for(let s of t.fields)if(!r.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?i.delete(s):i.set(s,o),r=r.add(s)}return new Lt(e.key,i,new ut(r.toArray()),mt.none())}}function Jl(e,t,n){e instanceof Me?function(r,s,o){const a=r.value.clone(),l=Dr(r.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Lt?function(r,s,o){if(!We(r.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Dr(r.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(yo(r)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(e,t,n):function(r,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function ce(e,t,n,i){return e instanceof Me?function(s,o,a,l){if(!We(s.precondition,o))return a;const u=s.value.clone(),h=kr(s.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(e,t,n,i):e instanceof Lt?function(s,o,a,l){if(!We(s.precondition,o))return a;const u=kr(s.fieldTransforms,l,o),h=o.data;return h.setAll(yo(s)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(e,t,n,i):function(s,o,a){return We(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function Zl(e,t){let n=null;for(const i of e.fieldTransforms){const r=t.data.field(i.field),s=fo(i.transform,r||null);s!=null&&(n===null&&(n=lt.empty()),n.set(i.field,s))}return n||null}function xr(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(i,r){return i===void 0&&r===void 0||!(!i||!r)&&Kt(i,r,(s,o)=>Xl(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Me extends Nn{constructor(t,n,i,r=[]){super(),this.key=t,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Lt extends Nn{constructor(t,n,i,r,s=[]){super(),this.key=t,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function yo(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}}),t}function Dr(e,t,n){const i=new Map;B(e.length===n.length);for(let r=0;r<n.length;r++){const s=e[r],o=s.transform,a=t.data.field(s.field);i.set(s.field,Wl(o,a,n[r]))}return i}function kr(e,t,n){const i=new Map;for(const r of e){const s=r.transform,o=n.data.field(r.field);i.set(r.field,Ql(s,o,t))}return i}class vo extends Nn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tu extends Nn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(t,n,i,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(t,n){const i=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(t.key)&&Jl(s,t,i[r])}}applyToLocalView(t,n){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(n=ce(i,t,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(n=ce(i,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const i=uo();return this.mutations.forEach(r=>{const s=t.get(r.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(r.key)?null:a;const l=_o(o,a);l!==null&&i.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(k.min())}),i}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),X())}isEqual(t){return this.batchId===t.batchId&&Kt(this.mutations,t.mutations,(n,i)=>xr(n,i))&&Kt(this.baseMutations,t.baseMutations,(n,i)=>xr(n,i))}}class Hi{constructor(t,n,i,r){this.batch=t,this.commitVersion=n,this.mutationResults=i,this.docVersions=r}static from(t,n,i){B(t.mutations.length===i.length);let r=function(){return $l}();const s=t.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,i[o].version);return new Hi(t,n,i,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b,A;function iu(e){switch(e){default:return w();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function ru(e){if(e===void 0)return Ot("GRPC error has no .code"),p.UNKNOWN;switch(e){case b.OK:return p.OK;case b.CANCELLED:return p.CANCELLED;case b.UNKNOWN:return p.UNKNOWN;case b.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case b.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case b.INTERNAL:return p.INTERNAL;case b.UNAVAILABLE:return p.UNAVAILABLE;case b.UNAUTHENTICATED:return p.UNAUTHENTICATED;case b.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case b.NOT_FOUND:return p.NOT_FOUND;case b.ALREADY_EXISTS:return p.ALREADY_EXISTS;case b.PERMISSION_DENIED:return p.PERMISSION_DENIED;case b.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case b.ABORTED:return p.ABORTED;case b.OUT_OF_RANGE:return p.OUT_OF_RANGE;case b.UNIMPLEMENTED:return p.UNIMPLEMENTED;case b.DATA_LOSS:return p.DATA_LOSS;default:return w()}}(A=b||(b={}))[A.OK=0]="OK",A[A.CANCELLED=1]="CANCELLED",A[A.UNKNOWN=2]="UNKNOWN",A[A.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",A[A.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",A[A.NOT_FOUND=5]="NOT_FOUND",A[A.ALREADY_EXISTS=6]="ALREADY_EXISTS",A[A.PERMISSION_DENIED=7]="PERMISSION_DENIED",A[A.UNAUTHENTICATED=16]="UNAUTHENTICATED",A[A.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",A[A.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",A[A.ABORTED=10]="ABORTED",A[A.OUT_OF_RANGE=11]="OUT_OF_RANGE",A[A.UNIMPLEMENTED=12]="UNIMPLEMENTED",A[A.INTERNAL=13]="INTERNAL",A[A.UNAVAILABLE=14]="UNAVAILABLE",A[A.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new rl([4294967295,4294967295],0);class su{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function gi(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ou(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function au(e,t){return gi(e,t.toTimestamp())}function $t(e){return B(!!e),k.fromTimestamp(function(n){const i=Mt(n);return new L(i.seconds,i.nanos)}(e))}function Eo(e,t){return function(i){return new O(["projects",i.projectId,"databases",i.database])}(e).child("documents").child(t).canonicalString()}function lu(e){const t=O.fromString(e);return B(mu(t)),t}function mi(e,t){return Eo(e.databaseId,t.path)}function uu(e){const t=lu(e);return t.length===4?O.emptyPath():cu(t)}function hu(e){return new O(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function cu(e){return B(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Nr(e,t,n){return{name:mi(e,t),fields:n.value.mapValue.fields}}function du(e,t){let n;if(t instanceof Me)n={update:Nr(e,t.key,t.value)};else if(t instanceof vo)n={delete:mi(e,t.key)};else if(t instanceof Lt)n={update:Nr(e,t.key,t.data),updateMask:gu(t.fieldMask)};else{if(!(t instanceof tu))return w();n={verify:mi(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(i=>function(s,o){const a=o.transform;if(a instanceof cn)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ae)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ie)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof dn)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw w()}(0,i))),t.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:au(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:w()}(e,t.precondition)),n}function fu(e,t){return e&&e.length>0?(B(t!==void 0),e.map(n=>function(r,s){let o=r.updateTime?$t(r.updateTime):$t(s);return o.isEqual(k.min())&&(o=$t(s)),new Yl(o,r.transformResults||[])}(n,t))):[]}function pu(e){let t=uu(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){B(i===1);const h=n.from[0];h.allDescendants?r=h.collectionId:t=t.child(h.collectionId)}let s=[];n.where&&(s=function(d){const m=To(d);return m instanceof At&&eo(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(m=>function(R){return new le(Bt(R.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(d){let m;return m=typeof d=="object"?d.value:d,ji(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(d){const m=!!d.before,y=d.values||[];return new un(y,m)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const m=!d.before,y=d.values||[];return new un(y,m)}(n.endAt)),bl(t,r,o,s,a,"F",l,u)}function To(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=Bt(n.unaryFilter.field);return F.create(i,"==",{doubleValue:NaN});case"IS_NULL":const r=Bt(n.unaryFilter.field);return F.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Bt(n.unaryFilter.field);return F.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Bt(n.unaryFilter.field);return F.create(o,"!=",{nullValue:"NULL_VALUE"});default:return w()}}(e):e.fieldFilter!==void 0?function(n){return F.create(Bt(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return w()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return At.create(n.compositeFilter.filters.map(i=>To(i)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return w()}}(n.compositeFilter.op))}(e):w()}function Bt(e){return Y.fromServerFormat(e.fieldPath)}function gu(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function mu(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(t){this.ht=t}}function yu(e){const t=pu({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?pi(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(){this.an=new Eu}addToCollectionParentIndex(t,n){return this.an.add(n),f.resolve()}getCollectionParents(t,n){return f.resolve(this.an.getEntries(n))}addFieldIndex(t,n){return f.resolve()}deleteFieldIndex(t,n){return f.resolve()}deleteAllFieldIndexes(t){return f.resolve()}createTargetIndexes(t,n){return f.resolve()}getDocumentsMatchingTarget(t,n){return f.resolve(null)}getIndexType(t,n){return f.resolve(0)}getFieldIndexes(t,n){return f.resolve([])}getNextCollectionGroupToUpdate(t){return f.resolve(null)}getMinOffset(t,n){return f.resolve(wt.min())}getMinOffsetFromCollectionGroup(t,n){return f.resolve(wt.min())}updateCollectionGroup(t,n,i){return f.resolve()}updateIndexEntries(t,n){return f.resolve()}}class Eu{constructor(){this.index={}}add(t){const n=t.lastSegment(),i=t.popLast(),r=this.index[n]||new nt(O.comparator),s=!r.has(i);return this.index[n]=r.add(i),s}has(t){const n=t.lastSegment(),i=t.popLast(),r=this.index[n];return r&&r.has(i)}getEntries(t){return(this.index[t]||new nt(O.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static Bn(){return new Wt(0)}static Ln(){return new Wt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(){this.changes=new Zt(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,at.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?f.resolve(i):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(t,n,i,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=r}getDocument(t,n){let i=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(i=r,this.remoteDocumentCache.getEntry(t,n))).next(r=>(i!==null&&ce(i.mutation,r,ut.empty(),L.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.getLocalViewOfDocuments(t,i,X()).next(()=>i))}getLocalViewOfDocuments(t,n,i=X()){const r=xt();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,i).next(s=>{let o=ze();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const i=xt();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,X()))}populateOverlays(t,n,i){const r=[];return i.forEach(s=>{n.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(t,r).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,i,r){let s=hn();const o=he(),a=function(){return he()}();return n.forEach((l,u)=>{const h=i.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof Lt)?s=s.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),ce(h.mutation,u,h.mutation.getFieldMask(),L.now())):o.set(u.key,ut.empty())}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var d;return a.set(u,new wu(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(t,n){const i=he();let r=new it((o,a)=>o-a),s=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=i.get(l)||ut.empty();h=a.applyToLocalView(u,h),i.set(l,h);const d=(r.get(a.batchId)||X()).add(l);r=r.insert(a.batchId,d)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,d=uo();h.forEach(m=>{if(!s.has(m)){const y=_o(n.get(m),i.get(m));y!==null&&d.set(m,y),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,d))}return f.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,n,i,r){return function(o){return T.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Ll(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,i,r):this.getDocumentsMatchingCollectionQuery(t,n,i,r)}getNextDocuments(t,n,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,i,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,i.largestBatchId,r-s.size):f.resolve(xt());let a=-1,l=s;return o.next(u=>f.forEach(u,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(h)?f.resolve():this.remoteDocumentCache.getEntry(t,h).next(m=>{l=l.insert(h,m)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,l,u,X())).next(h=>({batchId:a,changes:lo(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new T(n)).next(i=>{let r=ze();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,i,r){const s=n.collectionGroup;let o=ze();return this.indexManager.getCollectionParents(t,s).next(a=>f.forEach(a,l=>{const u=function(d,m){return new Dn(m,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(t,u,i,r).next(h=>{h.forEach((d,m)=>{o=o.insert(d,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,i,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,i.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,i,s,r))).next(o=>{s.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,at.newInvalidDocument(h)))});let a=ze();return o.forEach((l,u)=>{const h=s.get(l);h!==void 0&&ce(h.mutation,u,ut.empty(),L.now()),zi(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(t){this.serializer=t,this.lr=new Map,this.hr=new Map}getBundleMetadata(t,n){return f.resolve(this.lr.get(n))}saveBundleMetadata(t,n){return this.lr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:$t(r.createTime)}}(n)),f.resolve()}getNamedQuery(t,n){return f.resolve(this.hr.get(n))}saveNamedQuery(t,n){return this.hr.set(n.name,function(r){return{name:r.name,query:yu(r.bundledQuery),readTime:$t(r.readTime)}}(n)),f.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(){this.overlays=new it(T.comparator),this.Pr=new Map}getOverlay(t,n){return f.resolve(this.overlays.get(n))}getOverlays(t,n){const i=xt();return f.forEach(n,r=>this.getOverlay(t,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(t,n,i){return i.forEach((r,s)=>{this.It(t,n,s)}),f.resolve()}removeOverlaysForBatchId(t,n,i){const r=this.Pr.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(i)),f.resolve()}getOverlaysForCollection(t,n,i){const r=xt(),s=n.length+1,o=new T(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>i&&r.set(l.getKey(),l)}return f.resolve(r)}getOverlaysForCollectionGroup(t,n,i,r){let s=new it((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>i){let h=s.get(u.largestBatchId);h===null&&(h=xt(),s=s.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=xt(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=r)););return f.resolve(a)}It(t,n,i){const r=this.overlays.get(i.key);if(r!==null){const o=this.Pr.get(r.largestBatchId).delete(i.key);this.Pr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new nu(n,i));let s=this.Pr.get(n);s===void 0&&(s=X(),this.Pr.set(n,s)),this.Pr.set(n,s.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(){this.Ir=new nt(M.dr),this.Tr=new nt(M.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(t,n){const i=new M(t,n);this.Ir=this.Ir.add(i),this.Tr=this.Tr.add(i)}Ar(t,n){t.forEach(i=>this.addReference(i,n))}removeReference(t,n){this.Rr(new M(t,n))}Vr(t,n){t.forEach(i=>this.removeReference(i,n))}mr(t){const n=new T(new O([])),i=new M(n,t),r=new M(n,t+1),s=[];return this.Tr.forEachInRange([i,r],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(t=>this.Rr(t))}Rr(t){this.Ir=this.Ir.delete(t),this.Tr=this.Tr.delete(t)}pr(t){const n=new T(new O([])),i=new M(n,t),r=new M(n,t+1);let s=X();return this.Tr.forEachInRange([i,r],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new M(t,0),i=this.Ir.firstAfterOrEqual(n);return i!==null&&t.isEqual(i.key)}}class M{constructor(t,n){this.key=t,this.yr=n}static dr(t,n){return T.comparator(t.key,n.key)||V(t.yr,n.yr)}static Er(t,n){return V(t.yr,n.yr)||T.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new nt(M.dr)}checkEmpty(t){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,i,r){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new eu(s,n,i,r);this.mutationQueue.push(o);for(const a of r)this.Sr=this.Sr.add(new M(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(t,n){return f.resolve(this.br(n))}getNextMutationBatchAfterBatchId(t,n){const i=n+1,r=this.Dr(i),s=r<0?0:r;return f.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(t){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const i=new M(n,0),r=new M(n,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([i,r],o=>{const a=this.br(o.yr);s.push(a)}),f.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let i=new nt(V);return n.forEach(r=>{const s=new M(r,0),o=new M(r,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],a=>{i=i.add(a.yr)})}),f.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(t,n){const i=n.path,r=i.length+1;let s=i;T.isDocumentKey(s)||(s=s.child(""));const o=new M(new T(s),0);let a=new nt(V);return this.Sr.forEachWhile(l=>{const u=l.key.path;return!!i.isPrefixOf(u)&&(u.length===r&&(a=a.add(l.yr)),!0)},o),f.resolve(this.Cr(a))}Cr(t){const n=[];return t.forEach(i=>{const r=this.br(i);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){B(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.Sr;return f.forEach(n.mutations,r=>{const s=new M(r.key,n.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.Sr=i})}xn(t){}containsKey(t,n){const i=new M(n,0),r=this.Sr.firstAfterOrEqual(i);return f.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,f.resolve()}vr(t,n){return this.Dr(t)}Dr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}br(t){const n=this.Dr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(t){this.Fr=t,this.docs=function(){return new it(T.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const i=n.key,r=this.docs.get(i),s=r?r.size:0,o=this.Fr(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const i=this.docs.get(n);return f.resolve(i?i.document.mutableCopy():at.newInvalidDocument(n))}getEntries(t,n){let i=hn();return n.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():at.newInvalidDocument(r))}),f.resolve(i)}getDocumentsMatchingQuery(t,n,i,r){let s=hn();const o=n.path,a=new T(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||ml(gl(h),i)<=0||(r.has(h.key)||zi(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return f.resolve(s)}getAllFromCollectionGroup(t,n,i,r){w()}Mr(t,n){return f.forEach(this.docs,i=>n(i))}newChangeBuffer(t){return new Cu(this)}getSize(t){return f.resolve(this.size)}}class Cu extends Tu{constructor(t){super(),this.ur=t}applyChanges(t){const n=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?n.push(this.ur.addEntry(t,r)):this.ur.removeEntry(i)}),f.waitFor(n)}getFromCache(t,n){return this.ur.getEntry(t,n)}getAllFromCache(t,n){return this.ur.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(t){this.persistence=t,this.Or=new Zt(n=>Gi(n),Ki),this.lastRemoteSnapshotVersion=k.min(),this.highestTargetId=0,this.Nr=0,this.Br=new Qi,this.targetCount=0,this.Lr=Wt.Bn()}forEachTarget(t,n){return this.Or.forEach((i,r)=>n(r)),f.resolve()}getLastRemoteSnapshotVersion(t){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return f.resolve(this.Nr)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(t,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Nr&&(this.Nr=n),f.resolve()}Qn(t){this.Or.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Lr=new Wt(n),this.highestTargetId=n),t.sequenceNumber>this.Nr&&(this.Nr=t.sequenceNumber)}addTargetData(t,n){return this.Qn(n),this.targetCount+=1,f.resolve()}updateTargetData(t,n){return this.Qn(n),f.resolve()}removeTargetData(t,n){return this.Or.delete(n.target),this.Br.mr(n.targetId),this.targetCount-=1,f.resolve()}removeTargets(t,n,i){let r=0;const s=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),f.waitFor(s).next(()=>r)}getTargetCount(t){return f.resolve(this.targetCount)}getTargetData(t,n){const i=this.Or.get(n)||null;return f.resolve(i)}addMatchingKeys(t,n,i){return this.Br.Ar(n,i),f.resolve()}removeMatchingKeys(t,n,i){this.Br.Vr(n,i);const r=this.persistence.referenceDelegate,s=[];return r&&n.forEach(o=>{s.push(r.markPotentiallyOrphaned(t,o))}),f.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Br.mr(n),f.resolve()}getMatchingKeysForTargetId(t,n){const i=this.Br.pr(n);return f.resolve(i)}containsKey(t,n){return f.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(t,n){this.kr={},this.overlays={},this.qr=new Ws(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=t(this),this.Kr=new Su(this),this.indexManager=new vu,this.remoteDocumentCache=function(r){return new Vu(r)}(i=>this.referenceDelegate.$r(i)),this.serializer=new _u(n),this.Ur=new Iu(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Ru,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let i=this.kr[t.toKey()];return i||(i=new Pu(n,this.referenceDelegate),this.kr[t.toKey()]=i),i}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(t,n,i){_("MemoryPersistence","Starting transaction:",t);const r=new Du(this.qr.next());return this.referenceDelegate.Wr(),i(r).next(s=>this.referenceDelegate.Gr(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}zr(t,n){return f.or(Object.values(this.kr).map(i=>()=>i.containsKey(t,n)))}}class Du extends yl{constructor(t){super(),this.currentSequenceNumber=t}}class Wi{constructor(t){this.persistence=t,this.jr=new Qi,this.Hr=null}static Jr(t){return new Wi(t)}get Yr(){if(this.Hr)return this.Hr;throw w()}addReference(t,n,i){return this.jr.addReference(i,n),this.Yr.delete(i.toString()),f.resolve()}removeReference(t,n,i){return this.jr.removeReference(i,n),this.Yr.add(i.toString()),f.resolve()}markPotentiallyOrphaned(t,n){return this.Yr.add(n.toString()),f.resolve()}removeTarget(t,n){this.jr.mr(n.targetId).forEach(r=>this.Yr.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(s=>this.Yr.add(s.toString()))}).next(()=>i.removeTargetData(t,n))}Wr(){this.Hr=new Set}Gr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Yr,i=>{const r=T.fromPath(i);return this.Zr(t,r).next(s=>{s||n.removeEntry(r,k.min())})}).next(()=>(this.Hr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Zr(t,n).next(i=>{i?this.Yr.delete(n.toString()):this.Yr.add(n.toString())})}$r(t){return 0}Zr(t,n){return f.or([()=>f.resolve(this.jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.zr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(t,n,i,r){this.targetId=t,this.fromCache=n,this.Qi=i,this.Ki=r}static $i(t,n){let i=X(),r=X();for(const s of n.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Xi(t,n.fromCache,i,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(t,n){this.ji=t,this.indexManager=n,this.Ui=!0}getDocumentsMatchingQuery(t,n,i,r){const s={result:null};return this.Hi(t,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Ji(t,n,r,i).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new ku;return this.Yi(t,n,o).next(a=>{if(s.result=a,this.Wi)return this.Zi(t,n,o,a.size)})}).next(()=>s.result)}Zi(t,n,i,r){return i.documentReadCount<this.Gi?(ne()<=Tt.DEBUG&&_("QueryEngine","SDK will not create cache indexes for query:",ie(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),f.resolve()):(ne()<=Tt.DEBUG&&_("QueryEngine","Query:",ie(n),"scans",i.documentReadCount,"local documents and returns",r,"documents as results."),i.documentReadCount>this.zi*r?(ne()<=Tt.DEBUG&&_("QueryEngine","The SDK decides to create cache indexes for query:",ie(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Nt(n))):f.resolve())}Hi(t,n){if(Cr(n))return f.resolve(null);let i=Nt(n);return this.indexManager.getIndexType(t,i).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=pi(n,null,"F"),i=Nt(n)),this.indexManager.getDocumentsMatchingTarget(t,i).next(s=>{const o=X(...s);return this.ji.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,i).next(l=>{const u=this.Xi(n,a);return this.es(n,u,o,l.readTime)?this.Hi(t,pi(n,null,"F")):this.ts(t,u,n,l)}))})))}Ji(t,n,i,r){return Cr(n)||r.isEqual(k.min())?f.resolve(null):this.ji.getDocuments(t,i).next(s=>{const o=this.Xi(n,s);return this.es(n,o,i,r)?f.resolve(null):(ne()<=Tt.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ie(n)),this.ts(t,o,n,pl(r,-1)).next(a=>a))})}Xi(t,n){let i=new nt(Bl(t));return n.forEach((r,s)=>{zi(t,s)&&(i=i.add(s))}),i}es(t,n,i,r){if(t.limit===null)return!1;if(i.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Yi(t,n,i){return ne()<=Tt.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",ie(n)),this.ji.getDocumentsMatchingQuery(t,n,wt.min(),i)}ts(t,n,i,r){return this.ji.getDocumentsMatchingQuery(t,i,r).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(t,n,i,r){this.persistence=t,this.ns=n,this.serializer=r,this.rs=new it(V),this.ss=new Zt(s=>Gi(s),Ki),this.os=new Map,this._s=t.getRemoteDocumentCache(),this.Kr=t.getTargetCache(),this.Ur=t.getBundleCache(),this.us(i)}us(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Au(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.rs))}}function Ou(e,t,n,i){return new bu(e,t,n,i)}async function wo(e,t){const n=S(e);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let r;return n.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,n.us(t),n.mutationQueue.getAllMutationBatches(i))).next(s=>{const o=[],a=[];let l=X();for(const u of r){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of s){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(i,l).next(u=>({cs:u,removedBatchIds:o,addedBatchIds:a}))})})}function Mu(e,t){const n=S(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=t.batch.keys(),s=n._s.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const d=u.batch,m=d.keys();let y=f.resolve();return m.forEach(R=>{y=y.next(()=>h.getEntry(l,R)).next(x=>{const P=u.docVersions.get(R);B(P!==null),x.version.compareTo(P)<0&&(d.applyToRemoteDocument(x,u),x.isValidDocument()&&(x.setReadTime(u.commitVersion),h.addEntry(x)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,i,t,s).next(()=>s.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(a){let l=X();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(t))).next(()=>n.localDocuments.getDocuments(i,r))})}function Fu(e){const t=S(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Kr.getLastRemoteSnapshotVersion(n))}function Lu(e,t){const n=S(e);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}class br{constructor(){this.activeTargetIds=zl()}Rs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}As(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Uu{constructor(){this.ro=new br,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,i){}addLocalQueryTarget(t){return this.ro.Rs(t),this.io[t]||"not-current"}updateQueryState(t,n,i){this.io[t]=n}removeLocalQueryTarget(t){this.ro.Vs(t)}isLocalQueryTarget(t){return this.ro.activeTargetIds.has(t)}clearQueryState(t){delete this.io[t]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(t){return this.ro.activeTargetIds.has(t)}start(){return this.ro=new br,Promise.resolve()}handleUserChange(t,n,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{so(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(t){this.co.push(t)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.co)t(0)}uo(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.co)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let He=null;function Xn(){return He===null?He=function(){return 268435456+Math.round(2147483648*Math.random())}():He++,"0x"+He.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(t){this.ho=t.ho,this.Po=t.Po}Io(t){this.To=t}Eo(t){this.Ao=t}onMessage(t){this.Ro=t}close(){this.Po()}send(t){this.ho(t)}Vo(){this.To()}mo(t){this.Ao(t)}fo(t){this.Ro(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q="WebChannelConnection";class $u extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const i=n.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=i+"://"+n.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${s}`}get So(){return!1}bo(n,i,r,s,o){const a=Xn(),l=this.Do(n,i);_("RestConnection",`Sending RPC '${n}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(u,s,o),this.vo(n,l,u,r).then(h=>(_("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw sn("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",r),h})}Fo(n,i,r,s,o,a){return this.bo(n,i,r,s,o)}Co(n,i,r){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Jt}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((s,o)=>n[o]=s),r&&r.headers.forEach((s,o)=>n[o]=s)}Do(n,i){const r=ju[n];return`${this.po}/v1/${i}:${r}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,n,i,r){const s=Xn();return new Promise((o,a)=>{const l=new il;l.setWithCredentials(!0),l.listenOnce(el.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Wn.NO_ERROR:const h=l.getResponseJson();_(Q,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(h)),o(h);break;case Wn.TIMEOUT:_(Q,`RPC '${t}' ${s} timed out`),a(new E(p.DEADLINE_EXCEEDED,"Request time out"));break;case Wn.HTTP_ERROR:const d=l.getStatus();if(_(Q,`RPC '${t}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const y=m==null?void 0:m.error;if(y&&y.status&&y.message){const R=function(P){const tt=P.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(tt)>=0?tt:p.UNKNOWN}(y.status);a(new E(R,y.message))}else a(new E(p.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new E(p.UNAVAILABLE,"Connection failed."));break;default:w()}}finally{_(Q,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(r);_(Q,`RPC '${t}' ${s} sending request:`,r),l.send(n,"POST",u,i,15)})}Mo(t,n,i){const r=Xn(),s=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Za(),a=tl(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Co(l.initMessageHeaders,n,i),l.encodeInitMessageHeaders=!0;const h=s.join("");_(Q,`Creating RPC '${t}' stream ${r}: ${h}`,l);const d=o.createWebChannel(h,l);let m=!1,y=!1;const R=new qu({ho:P=>{y?_(Q,`Not sending because RPC '${t}' stream ${r} is closed:`,P):(m||(_(Q,`Opening RPC '${t}' stream ${r} transport.`),d.open(),m=!0),_(Q,`RPC '${t}' stream ${r} sending:`,P),d.send(P))},Po:()=>d.close()}),x=(P,tt,st)=>{P.listen(tt,Et=>{try{st(Et)}catch(Vt){setTimeout(()=>{throw Vt},0)}})};return x(d,$e.EventType.OPEN,()=>{y||_(Q,`RPC '${t}' stream ${r} transport opened.`)}),x(d,$e.EventType.CLOSE,()=>{y||(y=!0,_(Q,`RPC '${t}' stream ${r} transport closed`),R.mo())}),x(d,$e.EventType.ERROR,P=>{y||(y=!0,sn(Q,`RPC '${t}' stream ${r} transport errored:`,P),R.mo(new E(p.UNAVAILABLE,"The operation could not be completed")))}),x(d,$e.EventType.MESSAGE,P=>{var tt;if(!y){const st=P.data[0];B(!!st);const Et=st,Vt=Et.error||((tt=Et[0])===null||tt===void 0?void 0:tt.error);if(Vt){_(Q,`RPC '${t}' stream ${r} received error:`,Vt);const nr=Vt.status;let Ln=function(qo){const rr=b[qo];if(rr!==void 0)return ru(rr)}(nr),ir=Vt.message;Ln===void 0&&(Ln=p.INTERNAL,ir="Unknown error status: "+nr+" with message "+Vt.message),y=!0,R.mo(new E(Ln,ir)),d.close()}else _(Q,`RPC '${t}' stream ${r} received:`,st),R.fo(st)}}),x(a,nl.STAT_EVENT,P=>{P.stat===Er.PROXY?_(Q,`RPC '${t}' stream ${r} detected buffering proxy`):P.stat===Er.NOPROXY&&_(Q,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{R.Vo()},0),R}}function Yn(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(e){return new su(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(t,n,i=1e3,r=1.5,s=6e4){this._i=t,this.timerId=n,this.xo=i,this.Oo=r,this.No=s,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(t){this.cancel();const n=Math.floor(this.Bo+this.Ko()),i=Math.max(0,Date.now()-this.ko),r=Math.max(0,n-i);r>0&&_("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,r,()=>(this.ko=Date.now(),t())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(t,n,i,r,s,o,a,l){this._i=t,this.Uo=i,this.Wo=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new Ao(t,n)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(t){this.r_(),this.stream.send(t)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(t,n){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,t!==4?this.Ho.reset():n&&n.code===p.RESOURCE_EXHAUSTED?(Ot(n.toString()),Ot("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):n&&n.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Eo(n)}s_(){}auth(){this.state=1;const t=this.o_(this.Go),n=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.Go===n&&this.__(i,r)},i=>{t(()=>{const r=new E(p.UNKNOWN,"Fetching auth token failed: "+i.message);return this.a_(r)})})}__(t,n){const i=this.o_(this.Go);this.stream=this.u_(t,n),this.stream.Io(()=>{i(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(r=>{i(()=>this.a_(r))}),this.stream.onMessage(r=>{i(()=>this.onMessage(r))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(t){return _("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}o_(t){return n=>{this._i.enqueueAndForget(()=>this.Go===t?n():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ku extends Gu{constructor(t,n,i,r,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,r,o),this.serializer=s,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(t,n){return this.connection.Mo("Write",t,n)}onMessage(t){if(B(!!t.streamToken),this.lastStreamToken=t.streamToken,this.P_){this.Ho.reset();const n=fu(t.writeResults,t.commitTime),i=$t(t.commitTime);return this.listener.T_(i,n)}return B(!t.writeResults||t.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const t={};t.database=hu(this.serializer),this.n_(t)}d_(t){const n={streamToken:this.lastStreamToken,writes:t.map(i=>du(this.serializer,i))};this.n_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu extends class{}{constructor(t,n,i,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=i,this.serializer=r,this.R_=!1}V_(){if(this.R_)throw new E(p.FAILED_PRECONDITION,"The client has already been terminated.")}bo(t,n,i){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection.bo(t,n,i,r,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new E(p.UNKNOWN,r.toString())})}Fo(t,n,i,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(t,n,i,s,o,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new E(p.UNKNOWN,s.toString())})}terminate(){this.R_=!0}}class Hu{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(t){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.w_("Offline")))}set(t){this.D_(),this.f_=0,t==="Online"&&(this.p_=!1),this.w_(t)}w_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}S_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(Ot(n),this.p_=!1):_("OnlineStateTracker",n)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(t,n,i,r,s){this.localStore=t,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=s,this.x_.so(o=>{i.enqueueAndForget(async()=>{Le(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=S(l);u.F_.add(4),await Fe(u),u.O_.set("Unknown"),u.F_.delete(4),await On(u)}(this))})}),this.O_=new Hu(i,r)}}async function On(e){if(Le(e))for(const t of e.M_)await t(!0)}async function Fe(e){for(const t of e.M_)await t(!1)}function Le(e){return S(e).F_.size===0}async function Io(e,t,n){if(!xn(t))throw t;e.F_.add(1),await Fe(e),e.O_.set("Offline"),n||(n=()=>Fu(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await n(),e.F_.delete(1),await On(e)})}function Ro(e,t){return t().catch(n=>Io(e,n,t))}async function Mn(e){const t=S(e),n=It(t);let i=t.C_.length>0?t.C_[t.C_.length-1].batchId:-1;for(;Wu(t);)try{const r=await Lu(t.localStore,i);if(r===null){t.C_.length===0&&n.e_();break}i=r.batchId,Xu(t,r)}catch(r){await Io(t,r)}Po(t)&&Vo(t)}function Wu(e){return Le(e)&&e.C_.length<10}function Xu(e,t){e.C_.push(t);const n=It(e);n.Yo()&&n.I_&&n.d_(t.mutations)}function Po(e){return Le(e)&&!It(e).Jo()&&e.C_.length>0}function Vo(e){It(e).start()}async function Yu(e){It(e).A_()}async function Ju(e){const t=It(e);for(const n of e.C_)t.d_(n.mutations)}async function Zu(e,t,n){const i=e.C_.shift(),r=Hi.from(i,t,n);await Ro(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await Mn(e)}async function th(e,t){t&&It(e).I_&&await async function(i,r){if(function(o){return iu(o)&&o!==p.ABORTED}(r.code)){const s=i.C_.shift();It(i).Xo(),await Ro(i,()=>i.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Mn(i)}}(e,t),Po(e)&&Vo(e)}async function Mr(e,t){const n=S(e);n.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const i=Le(n);n.F_.add(3),await Fe(n),i&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.F_.delete(3),await On(n)}async function eh(e,t){const n=S(e);t?(n.F_.delete(2),await On(n)):t||(n.F_.add(2),await Fe(n),n.O_.set("Unknown"))}function It(e){return e.L_||(e.L_=function(n,i,r){const s=S(n);return s.V_(),new Ku(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(e.datastore,e.asyncQueue,{Io:Yu.bind(null,e),Eo:th.bind(null,e),E_:Ju.bind(null,e),T_:Zu.bind(null,e)}),e.M_.push(async t=>{t?(e.L_.Xo(),await Mn(e)):(await e.L_.stop(),e.C_.length>0&&(_("RemoteStore",`Stopping write stream with ${e.C_.length} pending writes`),e.C_=[]))})),e.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(t,n,i,r,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,i,r,s){const o=Date.now()+i,a=new Yi(t,n,o,r,s);return a.start(i),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new E(p.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Co(e,t){if(Ot("AsyncQueue",`${t}: ${e}`),xn(e))return new E(p.UNAVAILABLE,`${t}: ${e}`);throw e}class nh{constructor(){this.queries=new Zt(t=>oo(t),so),this.onlineState="Unknown",this.K_=new Set}}function ih(e){e.K_.forEach(t=>{t.next()})}class rh{constructor(t,n,i,r,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Zt(a=>oo(a),so),this.pa=new Map,this.ya=new Set,this.wa=new it(T.comparator),this.Sa=new Map,this.ba=new Qi,this.Da={},this.Ca=new Map,this.va=Wt.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function sh(e,t,n){const i=uh(e);try{const r=await function(o,a){const l=S(o),u=L.now(),h=a.reduce((y,R)=>y.add(R.key),X());let d,m;return l.persistence.runTransaction("Locally write mutations","readwrite",y=>{let R=hn(),x=X();return l._s.getEntries(y,h).next(P=>{R=P,R.forEach((tt,st)=>{st.isValidDocument()||(x=x.add(tt))})}).next(()=>l.localDocuments.getOverlayedDocuments(y,R)).next(P=>{d=P;const tt=[];for(const st of a){const Et=Zl(st,d.get(st.key).overlayedDocument);Et!=null&&tt.push(new Lt(st.key,Et,Js(Et.value.mapValue),mt.exists(!0)))}return l.mutationQueue.addMutationBatch(y,u,tt,a)}).next(P=>{m=P;const tt=P.applyToLocalDocumentSet(d,x);return l.documentOverlayCache.saveOverlays(y,P.batchId,tt)})}).then(()=>({batchId:m.batchId,changes:lo(d)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(r.batchId),function(o,a,l){let u=o.Da[o.currentUser.toKey()];u||(u=new it(V)),u=u.insert(a,l),o.Da[o.currentUser.toKey()]=u}(i,r.batchId,n),await Fn(i,r.changes),await Mn(i.remoteStore)}catch(r){const s=Co(r,"Failed to persist write");n.reject(s)}}function Fr(e,t,n){const i=S(e);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const r=[];i.ga.forEach((s,o)=>{const a=o.view.U_(t);a.snapshot&&r.push(a.snapshot)}),function(o,a){const l=S(o);l.onlineState=a;let u=!1;l.queries.forEach((h,d)=>{for(const m of d.listeners)m.U_(a)&&(u=!0)}),u&&ih(l)}(i.eventManager,t),r.length&&i.fa.c_(r),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function oh(e,t){const n=S(e),i=t.batch.batchId;try{const r=await Mu(n.localStore,t);xo(n,i,null),So(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Fn(n,r)}catch(r){await Qs(r)}}async function ah(e,t,n){const i=S(e);try{const r=await function(o,a){const l=S(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(B(d!==null),h=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(i.localStore,t);xo(i,t,n),So(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await Fn(i,r)}catch(r){await Qs(r)}}function So(e,t){(e.Ca.get(t)||[]).forEach(n=>{n.resolve()}),e.Ca.delete(t)}function xo(e,t,n){const i=S(e);let r=i.Da[i.currentUser.toKey()];if(r){const s=r.get(t);s&&(n?s.reject(n):s.resolve(),r=r.remove(t)),i.Da[i.currentUser.toKey()]=r}}async function Fn(e,t,n){const i=S(e),r=[],s=[],o=[];i.ga.isEmpty()||(i.ga.forEach((a,l)=>{o.push(i.Ma(l,t,n).then(u=>{if((u||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const h=Xi.$i(l.targetId,u);s.push(h)}}))}),await Promise.all(o),i.fa.c_(r),await async function(l,u){const h=S(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>f.forEach(u,m=>f.forEach(m.Qi,y=>h.persistence.referenceDelegate.addReference(d,m.targetId,y)).next(()=>f.forEach(m.Ki,y=>h.persistence.referenceDelegate.removeReference(d,m.targetId,y)))))}catch(d){if(!xn(d))throw d;_("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const m=d.targetId;if(!d.fromCache){const y=h.rs.get(m),R=y.snapshotVersion,x=y.withLastLimboFreeSnapshotVersion(R);h.rs=h.rs.insert(m,x)}}}(i.localStore,s))}async function lh(e,t){const n=S(e);if(!n.currentUser.isEqual(t)){_("SyncEngine","User change. New user:",t.toKey());const i=await wo(n.localStore,t);n.currentUser=t,function(s,o){s.Ca.forEach(a=>{a.forEach(l=>{l.reject(new E(p.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await Fn(n,i.cs)}}function uh(e){const t=S(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=oh.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ah.bind(null,t),t}class Lr{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=bn(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Ou(this.persistence,new Nu,t.initialUser,this.serializer)}createPersistence(t){return new xu(Wi.Jr,this.serializer)}createSharedClientState(t){return new Uu}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class hh{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Fr(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=lh.bind(null,this.syncEngine),await eh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new nh}()}createDatastore(t){const n=bn(t.databaseInfo.databaseId),i=function(s){return new $u(s)}(t.databaseInfo);return function(s,o,a,l){return new zu(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,i,n)}createRemoteStore(t){return function(i,r,s,o,a){return new Qu(i,r,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Fr(this.syncEngine,n,0),function(){return Or.C()?new Or:new Bu}())}createSyncEngine(t,n){return function(r,s,o,a,l,u,h){const d=new rh(r,s,o,a,l,u);return h&&(d.Fa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const i=S(n);_("RemoteStore","RemoteStore shutting down."),i.F_.add(5),await Fe(i),i.x_.shutdown(),i.O_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(t,n,i,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=W.UNAUTHENTICATED,this.clientId=Hs.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{_("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(_("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const i=Co(n,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function Jn(e,t){e.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener(async r=>{i.isEqual(r)||(await wo(t.localStore,r),i=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Ur(e,t){e.asyncQueue.verifyOperationInProgress();const n=await fh(e);_("FirestoreClient","Initializing OnlineComponentProvider");const i=await e.getConfiguration();await t.initialize(n,i),e.setCredentialChangeListener(r=>Mr(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>Mr(t.remoteStore,s)),e._onlineComponents=t}function dh(e){return e.name==="FirebaseError"?e.code===p.FAILED_PRECONDITION||e.code===p.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function fh(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await Jn(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!dh(n))throw n;sn("Error using user provided cache. Falling back to memory cache: "+n),await Jn(e,new Lr)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await Jn(e,new Lr);return e._offlineComponents}async function ph(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await Ur(e,e._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await Ur(e,new hh))),e._onlineComponents}function gh(e){return ph(e).then(t=>t.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(e,t,n){if(!n)throw new E(p.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function _h(e,t,n,i){if(t===!0&&i===!0)throw new E(p.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function jr(e){if(!T.isDocumentKey(e))throw new E(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ji(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":w()}function _i(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new E(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ji(e);throw new E(p.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t){var n,i;if(t.host===void 0){if(t.ssl!==void 0)throw new E(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new E(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}_h("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Do((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new E(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new E(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new E(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Zi{constructor(t,n,i,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qr({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new E(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new E(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qr(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new sl;switch(i.type){case"firstParty":return new ul(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new E(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=Br.get(n);i&&(_("ComponentProvider","Removing Datastore"),Br.delete(n),i.terminate())}(this),Promise.resolve()}}function yh(e,t,n,i={}){var r;const s=(e=_i(e,Zi))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&sn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let a,l;if(typeof i.mockUserToken=="string")a=i.mockUserToken,l=W.MOCK_USER;else{a=Wo(i.mockUserToken,(r=e._app)===null||r===void 0?void 0:r.options.projectId);const u=i.mockUserToken.sub||i.mockUserToken.user_id;if(!u)throw new E(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new W(u)}e._authCredentials=new ol(new zs(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new tr(this.firestore,t,this._query)}}class _t{constructor(t,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Re(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new _t(this.firestore,t,this._key)}}class Re extends tr{constructor(t,n,i){super(t,n,Ol(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new _t(this.firestore,null,new T(t))}withConverter(t){return new Re(this.firestore,t,this._path)}}function vh(e,t,...n){if(e=Xe(e),arguments.length===1&&(t=Hs.V()),mh("doc","path",t),e instanceof Zi){const i=O.fromString(t,...n);return jr(i),new _t(e,null,new T(i))}{if(!(e instanceof _t||e instanceof Re))throw new E(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(O.fromString(t,...n));return jr(i),new _t(e.firestore,e instanceof Re?e.converter:null,new T(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new Ao(this,"async_queue_retry"),this.ou=()=>{const n=Yn();n&&_("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const t=Yn();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this._u(),this.au(t)}enterRestrictedMode(t){if(!this.eu){this.eu=!0,this.iu=t||!1;const n=Yn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(t){if(this._u(),this.eu)return new Promise(()=>{});const n=new kt;return this.au(()=>this.eu&&this.iu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xa.push(t),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(t){if(!xn(t))throw t;_("AsyncQueue","Operation failed with retryable error: "+t)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(t){const n=this.Za.then(()=>(this.ru=!0,t().catch(i=>{this.nu=i,this.ru=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw Ot("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.ru=!1,i))));return this.Za=n,n}enqueueAfterDelay(t,n,i){this._u(),this.su.indexOf(t)>-1&&(n=0);const r=Yi.createAndSchedule(this,t,n,i,s=>this.cu(s));return this.tu.push(r),r}_u(){this.nu&&w()}verifyOperationInProgress(){}async lu(){let t;do t=this.Za,await t;while(t!==this.Za)}hu(t){for(const n of this.tu)if(n.timerId===t)return!0;return!1}Pu(t){return this.lu().then(()=>{this.tu.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.lu()})}Iu(t){this.su.push(t)}cu(t){const n=this.tu.indexOf(t);this.tu.splice(n,1)}}class ko extends Zi{constructor(t,n,i,r){super(t,n,i,r),this.type="firestore",this._queue=function(){return new Eh}(),this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||No(this),this._firestoreClient.terminate()}}function Th(e,t){const n=typeof e=="object"?e:zo(),i=typeof e=="string"?e:t||"(default)",r=Ho(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=Qo("firestore");s&&yh(r,...s)}return r}function wh(e){return e._firestoreClient||No(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function No(e){var t,n,i;const r=e._freezeSettings(),s=function(a,l,u,h){return new wl(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Do(h.experimentalLongPollingOptions),h.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,r);e._firestoreClient=new ch(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=r.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Pe(vt.fromBase64String(t))}catch(n){throw new E(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Pe(vt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new E(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Y(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new E(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new E(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return V(this._lat,t._lat)||V(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah=/^__.*__$/;class Ih{constructor(t,n,i){this.data=t,this.fieldMask=n,this.fieldTransforms=i}toMutation(t,n){return this.fieldMask!==null?new Lt(t,this.data,this.fieldMask,n,this.fieldTransforms):new Me(t,this.data,n,this.fieldTransforms)}}function Fo(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw w()}}class er{constructor(t,n,i,r,s,o){this.settings=t,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.du(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(t){return new er(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(t){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.Eu({path:i,Ru:!1});return r.Vu(t),r}mu(t){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.Eu({path:i,Ru:!1});return r.du(),r}fu(t){return this.Eu({path:void 0,Ru:!0})}gu(t){return fn(t,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}du(){if(this.path)for(let t=0;t<this.path.length;t++)this.Vu(this.path.get(t))}Vu(t){if(t.length===0)throw this.gu("Document fields must not be empty");if(Fo(this.Tu)&&Ah.test(t))throw this.gu('Document fields cannot begin and end with "__"')}}class Rh{constructor(t,n,i){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=i||bn(t)}wu(t,n,i,r=!1){return new er({Tu:t,methodName:n,yu:i,path:Y.emptyPath(),Ru:!1,pu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ph(e){const t=e._freezeSettings(),n=bn(e._databaseId);return new Rh(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Vh(e,t,n,i,r,s={}){const o=e.wu(s.merge||s.mergeFields?2:0,t,n,r);jo("Data must be an object, but it was:",o,i);const a=Uo(i,o);let l,u;if(s.merge)l=new ut(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const d of s.mergeFields){const m=Ch(t,d,n);if(!o.contains(m))throw new E(p.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Dh(h,m)||h.push(m)}l=new ut(h),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new Ih(new lt(a),l,u)}function Lo(e,t){if(Bo(e=Xe(e)))return jo("Unsupported field value:",t,e),Uo(e,t);if(e instanceof Oo)return function(i,r){if(!Fo(r.Tu))throw r.gu(`${i._methodName}() can only be used with update() and set()`);if(!r.path)throw r.gu(`${i._methodName}() is not currently supported inside arrays`);const s=i._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Ru&&t.Tu!==4)throw t.gu("Nested arrays are not supported");return function(i,r){const s=[];let o=0;for(const a of i){let l=Lo(a,r.fu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(e,t)}return function(i,r){if((i=Xe(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Hl(r.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const s=L.fromDate(i);return{timestampValue:gi(r.serializer,s)}}if(i instanceof L){const s=new L(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:gi(r.serializer,s)}}if(i instanceof Mo)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Pe)return{bytesValue:ou(r.serializer,i._byteString)};if(i instanceof _t){const s=r.databaseId,o=i.firestore._databaseId;if(!o.isEqual(s))throw r.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Eo(i.firestore._databaseId||r.databaseId,i._key.path)}}throw r.gu(`Unsupported field value: ${Ji(i)}`)}(e,t)}function Uo(e,t){const n={};return Xs(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Oe(e,(i,r)=>{const s=Lo(r,t.Au(i));s!=null&&(n[i]=s)}),{mapValue:{fields:n}}}function Bo(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof L||e instanceof Mo||e instanceof Pe||e instanceof _t||e instanceof Oo)}function jo(e,t,n){if(!Bo(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const i=Ji(n);throw i==="an object"?t.gu(e+" a custom object"):t.gu(e+" "+i)}}function Ch(e,t,n){if((t=Xe(t))instanceof bo)return t._internalPath;if(typeof t=="string")return xh(e,t);throw fn("Field path arguments must be of type string or ",e,!1,void 0,n)}const Sh=new RegExp("[~\\*/\\[\\]]");function xh(e,t,n){if(t.search(Sh)>=0)throw fn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new bo(...t.split("."))._internalPath}catch{throw fn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function fn(e,t,n,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${i}`),o&&(l+=` in document ${r}`),l+=")"),new E(p.INVALID_ARGUMENT,a+e+l)}function Dh(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}function Nh(e,t,n){e=_i(e,_t);const i=_i(e.firestore,ko),r=kh(e.converter,t,n);return bh(i,[Vh(Ph(i),"setDoc",e._key,r,e.converter!==null,n).toMutation(e._key,mt.none())])}function bh(e,t){return function(i,r){const s=new kt;return i.asyncQueue.enqueueAndForget(async()=>sh(await gh(i),r,s)),s.promise}(wh(e),t)}(function(t,n=!0){(function(r){Jt=r})(Xo),$o(new Go("firestore",(i,{instanceIdentifier:r,options:s})=>{const o=i.getProvider("app").getImmediate(),a=new ko(new al(i.getProvider("auth-internal")),new cl(i.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new E(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ln(u.options.projectId,h)}(o,r),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),sr(Tr,"4.2.0",t),sr(Tr,"4.2.0","esm2017")})();const Oh="/sixtieth-course/assets/activity-analyze-a0efeb79.png",Mh="/sixtieth-course/assets/activity-artlist-2644a62c.png",Fh="/sixtieth-course/assets/activity-music-15ebf9b4.png",Lh="/sixtieth-course/assets/activity-cooking-f709248f.png",Uh="/sixtieth-course/assets/activity-languages-6e7cb25d.png",Bh="/sixtieth-course/assets/activity-exercise-8183c1fa.png",jh="/sixtieth-course/assets/activity-dance-d90359f2.png",qh=Th(),$h={data(){return{unitData:[{title:"板橋社區大學",image:"",city:"新北市",area:"板橋區",email:"abc@gmail.com",tel:"2345-6789"},{title:"瑞芳社區大學",image:"",city:"新北市",area:"瑞芳區",email:"abc@gmail.com",tel:"2345-6789"},{title:"新北市樂齡學習中心",image:"",city:"新北市",area:"板橋區",email:"abc@gmail.com",tel:"2345-6789"},{title:"北投社區大學",image:"",city:"台北市",area:"北投區",email:"abc@gmail.com",tel:"2345-6789"},{title:"大安社區大學",image:"",city:"台北市",area:"大安區",email:"abc@gmail.com",tel:"2345-6789"}],courseData:[{title:"樂齡律動如果標題超過第一行不知道會怎麼樣",type:"運動舞蹈",start_date:"2023/10/23",end_date:"2023/12/23",class_day:"星期三",class_time:"16:00~18:00",teacher:"王小美",unit:"板橋社區大學",status:"開課中",image:"https://images.unsplash.com/photo-1573384666979-2b1e160d2d08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2739&q=80",city:"新北市",area:"板橋區"},{title:"后翼棄兵",type:"社會科學",start_date:"2023/10/23",end_date:"2023/12/23",class_day:"星期五",class_time:"16:00~18:00",teacher:"劉德華",unit:"士林社區大學",status:"招生中",image:"https://images.unsplash.com/photo-1529699211952-734e80c4d42b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80",city:"台北市",area:"士林區"},{title:"手工肥皂",type:"風格手作",start_date:"2023/10/23",end_date:"2023/12/23",class_day:"星期二",class_time:"16:00~18:00",teacher:"胡曉玲",unit:"板橋社區大學",status:"滿額",image:"https://images.unsplash.com/photo-1605264964528-06403738d6dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",city:"新北市",area:"板橋區"}]}},methods:{async getData(){console.log("我被執行"),await Nh(vh(qh,"cities","LA"),{name:"Los Angeles",state:"CA",country:"USA"})}}},Gh={class:"container"},Kh=$r('<div class="my-6"><h2 class="fs-8 pb-4 border-bottom mb-4">Color</h2><div class="my-4 d-flex flex-wrap gap-4"><div class="bg-primary rounded-4" style="height:120px;width:180px;"></div><div class="bg-green-dark rounded-4" style="height:120px;width:180px;"></div><div class="bg-secondary rounded-4" style="height:120px;width:180px;"></div><div class="bg-danger rounded-4" style="height:120px;width:180px;"></div><div class="bg-warning rounded-4" style="height:120px;width:180px;"></div></div><div class="my-4 d-flex flex-wrap gap-4"><div class="bg-primary bg-gradient rounded-4" style="height:120px;width:180px;"></div><div class="bg-green-dark bg-gradient rounded-4" style="height:120px;width:180px;"></div><div class="bg-main-gradient rounded-4" style="height:120px;width:180px;"></div></div><div class="my-4 d-flex flex-wrap gap-4"><div class="bg-gray-900 rounded-4" style="height:120px;width:180px;"></div><div class="bg-gray-800 rounded-4" style="height:120px;width:180px;"></div><div class="bg-gray-700 rounded-4" style="height:120px;width:180px;"></div><div class="bg-gray-600 rounded-4" style="height:120px;width:180px;"></div><div class="bg-gray-500 rounded-4" style="height:120px;width:180px;"></div><div class="bg-gray-400 rounded-4" style="height:120px;width:180px;"></div><div class="bg-gray-300 rounded-4" style="height:120px;width:180px;"></div><div class="bg-gray-200 rounded-4" style="height:120px;width:180px;"></div><div class="bg-gray-100 rounded-4" style="height:120px;width:180px;"></div></div></div><div class="my-6"><h2 class="fs-8 pb-4 border-bottom mb-4">Typography</h2><h1 class="h1">思源黑體 This is content.</h1><h2 class="h2">思源黑體 This is content.</h2><h3 class="h3">思源黑體 This is content.</h3><h4 class="h4">思源黑體 This is content.</h4><h5 class="h5">思源黑體 This is content.</h5><h6 class="h6">思源黑體 This is content.</h6><hr><p class="fs-16">思源黑體 This is content.</p><p class="fs-12">思源黑體 This is content.</p><p class="fs-8">思源黑體 This is content.</p><p class="fs-6">思源黑體 This is content.</p><p class="fs-5">思源黑體 This is content.</p><p class="fs-4">思源黑體 This is content.</p></div><div class="my-6"><h2 class="fs-8 pb-4 border-bottom mb-4">Image</h2></div>',3),zh={class:"my-6"},Hh=c("h2",{class:"fs-8 pb-4 border-bottom mb-4"},"Button",-1),Qh=c("button",{class:"btn rounded-5 btn-primary text-white fw-500"},"我是按鈕 Button",-1),Wh={class:"my-6"},Xh=$r('<h2 class="fs-8 pb-4 border-bottom mb-4">Card</h2><div class="mb-8"><h3 class="mb-3">課程狀態</h3><div class="d-flex gap-2"><a href="#" class="bg-green text-white rounded-10 px-3">招生中</a><a href="#" class="bg-danger text-white rounded-10 px-3">滿額</a><a href="#" class="bg-blue text-white rounded-10 px-3">開課中</a><a href="#" class="bg-gray-500 text-white rounded-10 px-3">停招</a></div></div>',2),Yh={class:"mb-8"},Jh=c("h3",{class:"mb-3"},"課程卡片",-1),Zh={class:"row row-cols-1 row-cols-lg-2 row-cols-lg-3 g-5"},tc={class:"card shadow-gray"},ec={class:"row g-0 p-4 pb-6"},nc={class:"col-5 col-lg-12"},ic={class:"card-course-img rounded-20 overflow-hidden position-relative"},rc=["src","alt"],sc={class:"btn bg-gray-700 position-absolute top-0 end-0 m-4 d-flex justify-content-center align-items-center rounded-circle bg-opacity-75",style:{width:"48px",height:"48px","backdrop-filter":"blur(5px)"}},oc={key:0,class:"bi bi-suit-heart-fill text-white fs-5"},ac={class:"col-7 col-lg-12"},lc={class:"card-body d-flex flex-column"},uc={class:"badge bg-secondary text-primary px-3 mb-3 w-fit-content fs-3h"},hc={class:"fs-lg-8 mb-1"},cc={href:"#",class:"fs-3h fs-lg-4 text-primary"},dc={class:"my-3"},fc={class:"text-gray-600"},pc=c("i",{class:"bi bi-person-fill me-2"},null,-1),gc={class:"text-gray-600"},mc=c("i",{class:"bi bi-calendar-date-fill me-2"},null,-1),_c={class:"text-gray-600"},yc=c("i",{class:"bi bi-clock-fill me-2"},null,-1),vc={class:"d-flex flex-wrap justify-content-between mt-auto"},Ec={class:"text-gray-600 fw-600"},Tc={key:0,href:"#",class:"bg-blue text-white rounded-10 px-3"},wc={key:1,href:"#",class:"bg-danger text-white rounded-10 px-3"},Ac={key:2,href:"#",class:"bg-green text-white rounded-10 px-3"},Ic={key:3,href:"#",class:"bg-gray-500 text-white rounded-10 px-3"},Rc=c("div",{class:"px-4 px-lg-0 d-none d-md-flex gap-3"},[c("a",{href:"#",class:"w-100 btn btn-primary text-white rounded-20 shadow-primary"},"詳細資訊"),c("button",{class:"w-100 btn btn-primary text-white rounded-20 shadow-primary"},"我要報名")],-1),Pc={class:"mb-8"},Vc=c("h3",{class:"mb-3"},"課程列表",-1),Cc={class:"table table-hover table-striped table-bordered"},Sc=c("thead",{class:"table-green-dark"},[c("tr",{class:"text-center"},[c("th",{scope:"col"},"開課日期"),c("th",{scope:"col"},"課程分類"),c("th",{scope:"col"},"課程名稱"),c("th",{scope:"col"},"授課教師"),c("th",{scope:"col"},"授課時間"),c("th",{scope:"col"},"開課狀況"),c("th",{scope:"col"},"開課單位"),c("th",{scope:"col"},"區域")])],-1),xc={"data-label":"開課日期",scope:"row"},Dc={"data-label":"課程分類"},kc={"data-label":"課程名稱"},Nc={class:"d-block text-lg-start",href:"#"},bc={"data-label":"授課教師"},Oc={"data-label":"授課時間"},Mc={"data-label":"開課狀況"},Fc={key:0,class:"bg-blue text-white rounded-10 px-3"},Lc={key:1,class:"bg-danger text-white rounded-10 px-3"},Uc={key:2,class:"bg-green text-white rounded-10 px-3"},Bc={key:3,class:"bg-gray-500 text-white rounded-10 px-3"},jc={"data-label":"開課單位"},qc={"data-label":"區域"},$c={class:"mb-8"},Gc=c("h3",{class:"my-3"},"單位卡片",-1),Kc={class:"row row-cols-1 row-cols-lg-4 g-3"},zc={class:"card"},Hc={class:"d-block",href:"#"},Qc={class:"p-4"},Wc={class:"fs-4 fs-lg-6 text-primary"},Xc=c("a",{href:"#",class:"btn btn-primary text-white"},"更多相關資訊",-1),Yc=c("div",{class:"mb-8"},[c("h3",{class:"my-3"},"課程類型卡片"),c("ul",{class:"row row-cols-2 row-cols-lg-5 g-5"},[c("li",{class:"col"},[c("div",{class:"card overflow position-relative shadow-gray"},[c("a",{href:"#",classs:"d-block"},[c("img",{class:"w-100 opacity-50",style:{height:"120px"},src:Oh,alt:"course"}),c("p",{class:"position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center fs-6 fw-700"},"財務")])])]),c("li",{class:"col"},[c("div",{class:"card overflow position-relative shadow-gray"},[c("a",{href:"#",classs:"d-block"},[c("img",{class:"w-100 opacity-50 object-position-20",style:{height:"120px"},src:Mh,alt:"course"}),c("p",{class:"position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center fs-6 fw-700"},"美術")])])]),c("li",{class:"col"},[c("div",{class:"card overflow position-relative shadow-gray"},[c("a",{href:"#",classs:"d-block"},[c("img",{class:"w-100 opacity-50 object-position-40",style:{height:"120px"},src:Fh,alt:"course"}),c("p",{class:"position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center fs-6 fw-700"},"音樂")])])]),c("li",{class:"col"},[c("div",{class:"card overflow position-relative shadow-gray"},[c("a",{href:"#",classs:"d-block"},[c("img",{class:"w-100 opacity-50 object-position-40",style:{height:"120px"},src:Lh,alt:"course"}),c("p",{class:"position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center fs-6 fw-700"},"烹飪")])])]),c("li",{class:"col"},[c("div",{class:"card overflow position-relative shadow-gray"},[c("a",{href:"#",classs:"d-block"},[c("img",{class:"w-100 opacity-50 object-position-20",style:{height:"120px"},src:Uh,alt:"course"}),c("p",{class:"position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center fs-6 fw-700"},"語言")])])]),c("li",{class:"col"},[c("div",{class:"card overflow position-relative shadow-gray"},[c("a",{href:"#",classs:"d-block"},[c("img",{class:"w-100 opacity-50 object-position-center",style:{height:"120px"},src:Bh,alt:"course"}),c("p",{class:"position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center fs-6 fw-700"},"運動")])])]),c("li",{class:"col"},[c("div",{class:"card overflow position-relative shadow-gray"},[c("a",{href:"#",classs:"d-block"},[c("img",{class:"w-100 opacity-50 object-position-40",style:{height:"120px"},src:jh,alt:"course"}),c("p",{class:"position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center fs-6 fw-700"},"跳舞")])])])])],-1),Jc=c("div",{class:"my-6"},[c("form",{action:""},[c("div",{class:"mb-2"},[c("input",{type:"text",class:"form-control"})])])],-1);function Zc(e,t,n,i,r,s){return z(),H("div",Gh,[Kh,c("div",zh,[Hh,Qh,c("button",{class:"btn rounded-5 btn-primary text-white",onClick:t[0]||(t[0]=(...o)=>s.getData&&s.getData(...o))},"取得資料")]),c("div",Wh,[Xh,c("div",Yh,[Jh,c("ul",Zh,[(z(!0),H(Un,null,Bn(r.courseData,o=>(z(),H("li",{class:"col",key:o.title},[c("div",tc,[c("div",ec,[c("div",nc,[c("div",ic,[c("img",{class:"img-cover",src:o.image,alt:o.title},null,8,rc),c("button",sc,[(z(),H("i",oc))])])]),c("div",ac,[c("div",lc,[c("a",uc,D(o.type),1),c("h3",hc,D(o.title),1),c("a",cc,D(o.unit),1),c("ul",dc,[c("li",fc,[pc,jn(D(o.teacher)+" 老師",1)]),c("li",gc,[mc,jn(D(o.start_date)+"－"+D(o.end_date),1)]),c("li",_c,[yc,jn(D(o.class_day)+" "+D(o.class_time),1)])]),c("div",vc,[c("p",Ec,D(o.city)+D(o.area),1),o.status==="開課中"?(z(),H("a",Tc,"開課中")):o.status==="滿額"?(z(),H("a",wc,"滿額")):o.status==="招生中"?(z(),H("a",Ac,"招生中")):o.status==="停招"?(z(),H("a",Ic,"停招")):or("",!0)])]),Rc])])])]))),128))])]),c("div",Pc,[Vc,c("table",Cc,[Sc,c("tbody",null,[(z(!0),H(Un,null,Bn(r.courseData,o=>(z(),H("tr",{class:"text-end text-lg-center",key:o.title},[c("td",xc,D(o.start_date),1),c("td",Dc,D(o.type),1),c("td",kc,[c("a",Nc,D(o.title),1)]),c("td",bc,D(o.teacher),1),c("td",Oc,D(o.class_day)+" "+D(o.class_time),1),c("td",Mc,[o.status==="開課中"?(z(),H("span",Fc,"開課中")):o.status==="滿額"?(z(),H("span",Lc,"滿額")):o.status==="招生中"?(z(),H("span",Uc,"招生中")):o.status==="停招"?(z(),H("span",Bc,"停招")):or("",!0)]),c("td",jc,D(o.unit),1),c("td",qc,D(o.city)+D(o.area),1)]))),128))])])]),c("div",$c,[Gc,c("ul",Kc,[(z(!0),H(Un,null,Bn(r.unitData,o=>(z(),H("li",{class:"col",key:o.title},[c("div",zc,[c("a",Hc,[c("div",Qc,[c("h3",Wc,D(o.title),1),c("p",null,D(o.tel),1),c("p",null,D(o.email),1),c("p",null,D(o.city),1),Xc])])])]))),128))])]),Yc]),Jc])}const sd=Jo($h,[["render",Zc]]);export{sd as default};
