function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r,n,i,o,c,a,s,u,l,f,p,v,g,d,b,y,h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},m={},_={},w=h.parcelRequire3a11;null==w&&((w=function(e){if(e in m)return m[e].exports;if(e in _){var t=_[e];delete _[e];var r={id:e,exports:{}};return m[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){_[e]=t},h.parcelRequire3a11=w),w.register("27Lyk",function(t,r){e(t.exports,"register",()=>n,e=>n=e),e(t.exports,"resolve",()=>i,e=>i=e);var n,i,o={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)o[t[r]]=e[t[r]]},i=function(e){var t=o[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),w("27Lyk").register(JSON.parse('{"f9fpV":"index.5306887f.js","eyyUD":"icons.c14567a0.svg"}'));var S={},O={},j=function(e){return e&&e.Math===Math&&e};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
O=j("object"==typeof globalThis&&globalThis)||j("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
j("object"==typeof self&&self)||j("object"==typeof h&&h)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||O||Function("return this")();var k={},E={};// Detect IE8's incomplete defineProperty implementation
k=!(E=function(e){try{return!!e()}catch(e){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var T={},M={};M=!E(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var e=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof e||e.hasOwnProperty("prototype")});var P=Function.prototype.call;T=M?P.bind(P):function(){return P.apply(P,arguments)};var L={}.propertyIsEnumerable,$=Object.getOwnPropertyDescriptor;o=$&&!L.call({1:2},1)?function(e){var t=$(this,e);return!!t&&t.enumerable}:L;var D={};D=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var I={},x={},F={},C=Function.prototype,H=C.call,A=M&&C.bind.bind(H,H),R={},N=(F=M?A:function(e){return function(){return H.apply(e,arguments)}})({}.toString),U=F("".slice);R=function(e){return U(N(e),8,-1)};var q=Object,z=F("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
x=E(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!q("z").propertyIsEnumerable(0)})?function(e){return"String"===R(e)?z(e,""):q(e)}:q;var B={},W={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
W=function(e){return null==e};var V=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
B=function(e){if(W(e))throw V("Can't call method on "+e);return e},I=function(e){return x(B(e))};var G={},J={},K={},Y={},Q={},X="object"==typeof document&&document.all,Z=(Q={all:X,IS_HTMLDDA:void 0===X&&void 0!==X}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
Y=Q.IS_HTMLDDA?function(e){return"function"==typeof e||e===Z}:function(e){return"function"==typeof e};var ee=Q.all;K=Q.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:Y(e)||e===ee}:function(e){return"object"==typeof e?null!==e:Y(e)};var et={},er={};er=function(e,t){var r;return arguments.length<2?(r=O[e],Y(r)?r:void 0):O[e]&&O[e][t]};var en={};en=F({}.isPrototypeOf);var ei={},eo={},ec={},ea={};ea="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var es=O.process,eu=O.Deno,el=es&&es.versions||eu&&eu.version,ef=el&&el.v8;ef&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(a=(c=ef.split("."))[0]>0&&c[0]<4?1:+(c[0]+c[1])),!a&&ea&&(!(c=ea.match(/Edge\/(\d+)/))||c[1]>=74)&&(c=ea.match(/Chrome\/(\d+)/))&&(a=+c[1]),ec=a;var ep=O.String;ei=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(eo=!!Object.getOwnPropertySymbols&&!E(function(){var e=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!ep(e)||!(Object(e) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&ec&&ec<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ev=Object;et=ei?function(e){return"symbol"==typeof e}:function(e){var t=er("Symbol");return Y(t)&&en(t.prototype,ev(e))};var eg={},ed={},eb={},ey=String;eb=function(e){try{return ey(e)}catch(e){return"Object"}};var eh=TypeError;// `Assert: IsCallable(argument) is true`
ed=function(e){if(Y(e))return e;throw eh(eb(e)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
eg=function(e,t){var r=e[t];return W(r)?void 0:ed(r)};var em={},e_=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
em=function(e,t){var r,n;if("string"===t&&Y(r=e.toString)&&!K(n=T(r,e))||Y(r=e.valueOf)&&!K(n=T(r,e))||"string"!==t&&Y(r=e.toString)&&!K(n=T(r,e)))return n;throw e_("Can't convert object to primitive value")};var ew={},eS={};eS=!1;var eO={},ej={},ek=Object.defineProperty;ej=function(e,t){try{ek(O,e,{value:t,configurable:!0,writable:!0})}catch(r){O[e]=t}return t};var eE="__core-js_shared__";eO=O[eE]||ej(eE,{}),(ew=function(e,t){return eO[e]||(eO[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.32.1",mode:eS?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.1/LICENSE",source:"https://github.com/zloirock/core-js"});var eT={},eM={},eP=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
eM=function(e){return eP(B(e))};var eL=F({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
eT=Object.hasOwn||function(e,t){return eL(eM(e),t)};var e$={},eD=0,eI=Math.random(),ex=F(1..toString);e$=function(e){return"Symbol("+(void 0===e?"":e)+")_"+ex(++eD+eI,36)};var eF=O.Symbol,eC=ew("wks"),eH=ei?eF.for||eF:eF&&eF.withoutSetter||e$,eA=TypeError,eR=(eT(eC,r="toPrimitive")||(eC[r]=eo&&eT(eF,r)?eF[r]:eH("Symbol."+r)),eC[r]);// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
J=function(e,t){if(!K(e)||et(e))return e;var r,n=eg(e,eR);if(n){if(void 0===t&&(t="default"),r=T(n,e,t),!K(r)||et(r))return r;throw eA("Can't convert object to primitive value")}return void 0===t&&(t="number"),em(e,t)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
G=function(e){var t=J(e,"string");return et(t)?t:t+""};var eN={},eU={},eq=O.document,ez=K(eq)&&K(eq.createElement);eU=function(e){return ez?eq.createElement(e):{}},// Thanks to IE8 for its funny defineProperty
eN=!k&&!E(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(eU("div"),"a",{get:function(){return 7}}).a});// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var eB=Object.getOwnPropertyDescriptor;i=k?eB:function(e,t){if(e=I(e),t=G(t),eN)try{return eB(e,t)}catch(e){}if(eT(e,t))return D(!T(o,e,t),e[t])};var eW={},eV={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
eV=k&&E(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eG={},eJ=String,eK=TypeError;// `Assert: Type(argument) is Object`
eG=function(e){if(K(e))return e;throw eK(eJ(e)+" is not an object")};var eY=TypeError,eQ=Object.defineProperty,eX=Object.getOwnPropertyDescriptor,eZ="enumerable",e0="configurable",e1="writable";s=k?eV?function(e,t,r){if(eG(e),t=G(t),eG(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e1 in r&&!r[e1]){var n=eX(e,t);n&&n[e1]&&(e[t]=r.value,r={configurable:e0 in r?r[e0]:n[e0],enumerable:eZ in r?r[eZ]:n[eZ],writable:!1})}return eQ(e,t,r)}:eQ:function(e,t,r){if(eG(e),t=G(t),eG(r),eN)try{return eQ(e,t,r)}catch(e){}if("get"in r||"set"in r)throw eY("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eW=k?function(e,t,r){return s(e,t,D(1,r))}:function(e,t,r){return e[t]=r,e};var e2={},e7={},e3=Function.prototype,e4=k&&Object.getOwnPropertyDescriptor,e9=eT(e3,"name")&&(!k||k&&e4(e3,"name").configurable),e8={},e5=F(Function.toString);Y(eO.inspectSource)||(eO.inspectSource=function(e){return e5(e)}),e8=eO.inspectSource;var e6={},te={},tt=O.WeakMap;te=Y(tt)&&/native code/.test(String(tt));var tr={},tn=ew("keys");tr=function(e){return tn[e]||(tn[e]=e$(e))};var ti={};ti={};var to="Object already initialized",tc=O.TypeError,ta=O.WeakMap;if(te||eO.state){var ts=eO.state||(eO.state=new ta);/* eslint-disable no-self-assign -- prototype methods protection */ts.get=ts.get,ts.has=ts.has,ts.set=ts.set,/* eslint-enable no-self-assign -- prototype methods protection */u=function(e,t){if(ts.has(e))throw tc(to);return t.facade=e,ts.set(e,t),t},l=function(e){return ts.get(e)||{}},f=function(e){return ts.has(e)}}else{var tu=tr("state");ti[tu]=!0,u=function(e,t){if(eT(e,tu))throw tc(to);return t.facade=e,eW(e,tu,t),t},l=function(e){return eT(e,tu)?e[tu]:{}},f=function(e){return eT(e,tu)}}var tl=(e6={set:u,get:l,has:f,enforce:function(e){return f(e)?l(e):u(e,{})},getterFor:function(e){return function(t){var r;if(!K(t)||(r=l(t)).type!==e)throw tc("Incompatible receiver, "+e+" required");return r}}}).enforce,tf=e6.get,tp=String,tv=Object.defineProperty,tg=F("".slice),td=F("".replace),tb=F([].join),ty=k&&!E(function(){return 8!==tv(function(){},"length",{value:8}).length}),th=String(String).split("String"),tm=e7=function(e,t,r){"Symbol("===tg(tp(t),0,7)&&(t="["+td(tp(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eT(e,"name")||e9&&e.name!==t)&&(k?tv(e,"name",{value:t,configurable:!0}):e.name=t),ty&&r&&eT(r,"arity")&&e.length!==r.arity&&tv(e,"length",{value:r.arity});try{r&&eT(r,"constructor")&&r.constructor?k&&tv(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tl(e);return eT(n,"source")||(n.source=tb(th,"string"==typeof t?t:"")),e};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=tm(function(){return Y(this)&&tf(this).source||e8(this)},"toString"),e2=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(Y(r)&&e7(r,o,n),n.global)i?e[t]=r:ej(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:s(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var t_={},tw={},tS={},tO={},tj={},tk={},tE=Math.ceil,tT=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
tk=Math.trunc||function(e){var t=+e;return(t>0?tT:tE)(t)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
tj=function(e){var t=+e;// eslint-disable-next-line no-self-compare -- NaN check
return t!=t||0===t?0:tk(t)};var tM=Math.max,tP=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
tO=function(e,t){var r=tj(e);return r<0?tM(r+t,0):tP(r,t)};var tL={},t$={},tD=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
t$=function(e){return e>0?tD(tj(e),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
tL=function(e){return t$(e.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var tI=function(e){return function(t,r,n){var i,o=I(t),c=tL(o),a=tO(n,c);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(e&&r!=r){for(;c>a;)// eslint-disable-next-line no-self-compare -- NaN check
if((i=o[a++])!=i)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;c>a;a++)if((e||a in o)&&o[a]===r)return e||a||0;return!e&&-1}},tx={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:tI(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:tI(!1)}.indexOf,tF=F([].push);tS=function(e,t){var r,n=I(e),i=0,o=[];for(r in n)!eT(ti,r)&&eT(n,r)&&tF(o,r);// Don't enum bug & hidden keys
for(;t.length>i;)eT(n,r=t[i++])&&(~tx(o,r)||tF(o,r));return o};var tC=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");p=Object.getOwnPropertyNames||function(e){return tS(e,tC)},v=Object.getOwnPropertySymbols;var tH=F([].concat);// all object keys, includes non-enumerable and symbols
tw=er("Reflect","ownKeys")||function(e){var t=p(eG(e));return v?tH(t,v(e)):t},t_=function(e,t,r){for(var n=tw(t),o=0;o<n.length;o++){var c=n[o];eT(e,c)||r&&eT(r,c)||s(e,c,i(t,c))}};var tA={},tR=/#|\.prototype\./,tN=function(e,t){var r=tq[tU(e)];return r===tB||r!==tz&&(Y(t)?E(t):!!t)},tU=tN.normalize=function(e){return String(e).replace(tR,".").toLowerCase()},tq=tN.data={},tz=tN.NATIVE="N",tB=tN.POLYFILL="P";tA=tN,/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/S=function(e,t){var r,n,o,c,a,s=e.target,u=e.global,l=e.stat;if(r=u?O:l?O[s]||ej(s,{}):(O[s]||{}).prototype)for(n in t){// contained in target
if(c=t[n],o=e.dontCallGetSet?(a=i(r,n))&&a.value:r[n],!tA(u?n:s+(l?".":"#")+n,e.forced)&&void 0!==o){if(typeof c==typeof o)continue;t_(c,o)}(e.sham||o&&o.sham)&&eW(c,"sham",!0),e2(r,n,c,e)}};var tW={},tV={},tG=Function.prototype,tJ=tG.apply,tK=tG.call;// eslint-disable-next-line es/no-reflect -- safe
tV="object"==typeof Reflect&&Reflect.apply||(M?tK.bind(tJ):function(){return tK.apply(tJ,arguments)});var tY={},tQ={},tX=(tQ=function(e){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===R(e))return F(e)})(tQ.bind);// optional / simple context binding
tY=function(e,t){return ed(e),void 0===t?e:M?tX(e,t):function(){return e.apply(t,arguments)}};var tZ={};tZ=er("document","documentElement");var t0={};t0=F([].slice);var t1={},t2=TypeError;t1=function(e,t){if(e<t)throw t2("Not enough arguments");return e};var t7={};// eslint-disable-next-line redos/no-vulnerable -- safe
t7=/(?:ipad|iphone|ipod).*applewebkit/i.test(ea);var t3={};t3="process"===R(O.process);var t4=O.setImmediate,t9=O.clearImmediate,t8=O.process,t5=O.Dispatch,t6=O.Function,re=O.MessageChannel,rt=O.String,rr=0,rn={},ri="onreadystatechange";E(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
g=O.location});var ro=function(e){if(eT(rn,e)){var t=rn[e];delete rn[e],t()}},rc=function(e){return function(){ro(e)}},ra=function(e){ro(e.data)},rs=function(e){// old engines have not location.origin
O.postMessage(rt(e),g.protocol+"//"+g.host)};t4&&t9||(t4=function(e){t1(arguments.length,1);var t=Y(e)?e:t6(e),r=t0(arguments,1);return rn[++rr]=function(){tV(t,void 0,r)},d(rr),rr},t9=function(e){delete rn[e]},t3?d=function(e){t8.nextTick(rc(e))}:t5&&t5.now?d=function(e){t5.now(rc(e))}:re&&!t7?(y=(b=new re).port2,b.port1.onmessage=ra,d=tY(y.postMessage,y)):O.addEventListener&&Y(O.postMessage)&&!O.importScripts&&g&&"file:"!==g.protocol&&!E(rs)?(d=rs,O.addEventListener("message",ra,!1)):d=ri in eU("script")?function(e){tZ.appendChild(eU("script"))[ri]=function(){tZ.removeChild(this),ro(e)}}:function(e){setTimeout(rc(e),0)});var ru=(tW={set:t4,clear:t9}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
S({global:!0,bind:!0,enumerable:!0,forced:O.clearImmediate!==ru},{clearImmediate:ru});var rl=tW.set,rf={},rp={};/* global Bun -- Deno case */rp="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rv=O.Function,rg=/MSIE .\./.test(ea)||rp&&((n=O.Bun.version.split(".")).length<3||"0"===n[0]&&(n[1]<3||"3"===n[1]&&"0"===n[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
rf=function(e,t){var r=t?2:1;return rg?function(n,i/* , ...arguments */){var o=t1(arguments.length,1)>r,c=Y(n)?n:rv(n),a=o?t0(arguments,r):[],s=o?function(){tV(c,this,a)}:c;return t?e(s,i):e(s)}:e};// https://github.com/oven-sh/bun/issues/1633
var rd=O.setImmediate?rf(rl,!1):rl;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
S({global:!0,bind:!0,enumerable:!0,forced:O.setImmediate!==rd},{setImmediate:rd});var rb={};rb=new URL(w("27Lyk").resolve("eyyUD"),import.meta.url).toString();const ry=document.querySelector(".recipe"),rh=function(e){let r=`
        <div class="spinner">
          <svg>
            <use href="${/*@__PURE__*/t(rb)}#icon-loader"></use>
          </svg>
        </div>
        `;e.innerHTML="",e.insertAdjacentHTML("afterbegin",r)};console.log("er");const rm=async function(){try{// 1. Loading recipe
rh(ry);let e=await fetch("https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcc3e"),r=await e.json();if(!e.ok)throw Error(`${r.message} (${e.status})`);console.log(e,r);let n=r.data.recipe;n={id:n.id,title:n.title,publisher:n.publisher,sourceUrl:n.source_url,image:n.image_url,servings:n.servings,cookingTime:n.cooking_time,ingredients:n.ingredients},console.log(n);//2. Rendering recipe
let i=`
      <figure class="recipe__fig">
        <img src="${n.image}" alt="${n.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${n.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${/*@__PURE__*/t(rb)}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${n.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${/*@__PURE__*/t(rb)}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${n.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="${/*@__PURE__*/t(rb)}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="${/*@__PURE__*/t(rb)}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated">
          <svg>
            <use href="src/img/icons.svg#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round">
          <svg class="">
            <use href="src/img/icons.svg#icon-bookmark-fill"></use>
          </svg>
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${n.ingredients.map(e=>`         
            <li class="recipe__ingredient">
            <svg class="recipe__icon">
              <use href="src/img/icons.svg#icon-check"></use>
            </svg>
            <div class="recipe__quantity">${e.quantity}</div>
            <div class="recipe__description">
              <span class="recipe__unit">${e.unit}</span>
              ${e.description}
            </div>
          </li>
          `).join("")}

      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher"> ${n.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${n.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="src/img/icons.svg#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `;ry.innerHTML="",ry.insertAdjacentHTML("afterbegin",i)}catch(e){alert(e)}};rm();//# sourceMappingURL=index.5306887f.js.map

//# sourceMappingURL=index.5306887f.js.map
