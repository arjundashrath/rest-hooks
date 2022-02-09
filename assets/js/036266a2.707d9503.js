/*! For license information please see 036266a2.707d9503.js.LICENSE.txt */
(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[24882,37103,68047,714,18961,36701,68649,901],{62525:e=>{"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var l,s,i=a(e),c=1;c<arguments.length;c++){for(var u in l=Object(arguments[c]))n.call(l,u)&&(i[u]=l[u]);if(t){s=t(l);for(var d=0;d<s.length;d++)r.call(l,s[d])&&(i[s[d]]=l[s[d]])}}return i}},41535:(e,t,n)=>{"use strict";var r=n(62525),a=60103,o=60106;var l=60109,s=60110,i=60112;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;a=d("react.element"),o=d("react.portal"),d("react.fragment"),d("react.strict_mode"),d("react.profiler"),l=d("react.provider"),s=d("react.context"),i=d("react.forward_ref"),d("react.suspense"),c=d("react.memo"),u=d("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f={};function h(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||m}function b(){}function y(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||m}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=h.prototype;var v=y.prototype=new b;v.constructor=y,r(v,h.prototype),v.isPureReactComponent=!0;var g=Array.isArray,E=Object.prototype.hasOwnProperty,k={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var r,o={},l=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(l=""+t.key),t)E.call(t,r)&&!w.hasOwnProperty(r)&&(o[r]=t[r]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var c=Array(i),u=0;u<i;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===o[r]&&(o[r]=i[r]);return{$$typeof:a,type:e,key:l,ref:s,props:o,_owner:k.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var x=/\/+/g;function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,n,r,l){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var i=!1;if(null===e)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case a:case o:i=!0}}if(i)return l=l(i=e),e=""===r?"."+N(i,0):r,g(l)?(n="",null!=e&&(n=e.replace(x,"$&/")+"/"),S(l,t,n,"",(function(e){return e}))):null!=l&&(j(l)&&(l=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(x,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=""===r?".":r+":",g(e))for(var c=0;c<e.length;c++){var u=r+N(s=e[c],c);i+=S(s,t,n,u,l)}else if("function"==typeof(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e)))for(e=u.call(e),c=0;!(s=e.next()).done;)i+=S(s=s.value,t,n,u=r+N(s,c++),l);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function T(e,t,n){if(null==e)return e;var r=[],a=0;return S(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function _(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var C={current:null},Z={transition:0}},27378:(e,t,n)=>{"use strict";n(41535)},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(67294);const a=function(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(87462),a=n(67294),o=n(72389),l=n(75773),s=n(86010);const i="tabItem_LplD";function c(e){var t,n;const{lazy:o,block:c,defaultValue:u,values:d,groupId:p,className:m}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,l.lx)(h,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===u?u:u??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=f[0])?void 0:n.props.value);if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:g}=(0,l.UB)(),[E,k]=(0,a.useState)(y),w=[],{blockElementScrollPositionUntilNextRender:O}=(0,l.o5)();if(null!=p){const e=v[p];null!=e&&e!==E&&h.some((t=>t.value===e))&&k(e)}const j=e=>{const t=e.currentTarget,n=w.indexOf(t),r=h[n].value;r!==E&&(O(t),k(r),null!=p&&g(p,r))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]||w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]||w[w.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},m)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>w.push(e),onKeyDown:x,onFocus:j,onClick:j},o,{className:(0,s.Z)("tabs__item",i,null==o?void 0:o.className,{"tabs__item--active":E===t})}),n??t)}))),o?(0,a.cloneElement)(f.filter((e=>e.props.value===E))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function u(e){const t=(0,o.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},84195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},70720:(e,t,n)=>{"use strict";n.d(t,{Z:()=>fe});var r=n(67294),a=n(24861),o=n(88300),l=n(71481),s=n(42910),i=n(99876),c=n(63312),u=n(33186),d=n(52803),p=n(44431),m=n.n(p),f=n(49909),h=n(53775);class b extends h.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}static partialUpdate(){const e=super.partialUpdate();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:t.id})})}static create(){const e=super.create();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:n.id})})}}class y extends b{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static merge(e,t){return e.updatedAt<t.updatedAt?{...e,...t}:e}static endpointMutate(){const e=super.endpointMutate();return e.extend({getFetchInit(t){return t&&(t={...t,updatedAt:Date.now()}),e.getFetchInit.call(this,t)}})}static partialUpdate(){return super.partialUpdate().extend({schema:this,optimisticUpdater:v})}static create(){const e=this.list().key({});return super.create().extend({schema:this,optimisticUpdater:g,update:t=>({[e]:function(e){return void 0===e&&(e=[]),[...e,t]}})})}static delete(){return super.delete().extend({schema:new f.Z(this),optimisticUpdater:E})}}y.urlRoot="/api/todos";const v=(e,t,n)=>({id:t.id,...e.getResponse(y.detail(),{id:t.id}).data,...n,updatedAt:e.fetchedAt}),g=(e,t,n)=>({...n,updatedAt:e.fetchedAt}),E=(e,t)=>({...t,updatedAt:e.fetchedAt});var k=n(87462),w=n(50776),O=n(86010),j=n(95999),x=n(52263),N=n(72389),S=n(75773),T=n(55423),_=n(84195),C=n(58699),Z=n(28808),P=n(96714),I=n(28224),U=n(91262);const A="playgroundContainer_sLUA",D="row_YGZs",R="hidden_Hh8i",$="playgroundHeader_Zx4K",F="playgroundEditor_lYwu",M="playgroundPreview_rk9R",V="playgroundResult_tefG",q="debugToggle_zlro",L="tabControls_trxh",B="tabs_m54V",z="tab_bTGw",G="selected_QXZk";var H=n(60522),X=n(83552);function K(e){let{value:t}=e;const{isDarkTheme:n}=(0,S.If)(),a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]);return r.createElement(X.L,{shouldExpandNode:Y,data:t,theme:{tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"}})}function Y(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}function J(e){let{toggle:t,selectedValue:n}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:q,onClick:t},"Store"),"y"===n?r.createElement(ee,null):null)}const Q=(0,r.memo)(J);function W(){const e=(0,r.useContext)(H.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,delete t.lastReset,t}),[e]);return r.createElement(K,{value:t})}const ee=(0,r.memo)(W);function te(e){let{groupId:t,defaultOpen:n,row:a}=e;const{tabGroupChoices:o,setTabGroupChoices:l}=(0,S.UB)(),[s,i]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:c}=(0,S.o5)();if(null!=t){const e=o[t];null!=e&&e!==s&&i(e)}const u=(0,r.useCallback)((e=>{c(e.currentTarget),i((e=>"y"===e?"n":"y")),l(t,"y"===s?"n":"y")}),[c,t,s,l]),d=(0,r.useMemo)((()=>[new I.Z,new C.Z(Z.Z)]),[]),p=!("n"===s||!a);return r.createElement(P.nq,{managers:d},r.createElement("div",{className:(0,O.Z)(M,{[R]:p})},r.createElement(U.Z,{fallback:r.createElement(re,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(re,null)},r.createElement(w.i5,null),r.createElement(w.IF,null))))),r.createElement(Q,{selectedValue:s,toggle:u}))}const ne=(0,r.memo)(te);function re(){return r.createElement("div",null,"Loading...")}function ae(e){let{children:t,className:n}=e;return r.createElement("div",{className:(0,O.Z)($,n)},t)}function oe(e){let{groupId:t,defaultOpen:n,row:a}=e;return r.createElement("div",null,r.createElement(ae,null,r.createElement(j.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),r.createElement("div",{className:V},r.createElement(ne,{groupId:t,defaultOpen:n,row:a})))}function le(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(_.Z);return r.createElement("div",{className:B,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:a,label:o}=n;return r.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,O.Z)(z,{[G]:e===a}),onFocus:t,onClick:t,value:a},o)})))}function se(e){let{children:t}=e;return r.createElement(ae,{className:L},r.createElement("div",null,t),r.createElement(le,null))}function ie(e){let{title:t}=e;const{values:n}=(0,r.useContext)(_.Z),a=n.length>0,o=(0,N.Z)();return r.createElement("div",null,a?r.createElement(se,null,t):r.createElement(ae,null,t),r.createElement(w.uz,{key:o,className:F}))}function ce(e){let{children:t,transformCode:n,groupId:a,defaultOpen:o,row:l,hidden:s=!1,...i}=e;const{siteConfig:{themeConfig:{liveCodeBlock:{playgroundPosition:c}}}}=(0,x.Z)(),u=(0,S.pJ)();i.scope;return r.createElement("div",{className:(0,O.Z)(A,{[D]:l,[R]:s})},r.createElement(w.nu,(0,k.Z)({code:t.replace(/\n$/,""),transformCode:n||(e=>(e=>T.transpileModule(e,{compilerOptions:{module:T.ModuleKind.ESNext,target:T.ScriptTarget.ES5,jsx:"react"}}).outputText)(`${e};`)),transpileOptions:{target:{chrome:71},transforms:{classes:!1,letConst:!1,getterSetter:!1,generator:!1,asyncAwait:!1,moduleImport:!1,moduleExport:!1}},theme:u},i),"top"===c?r.createElement(r.Fragment,null,r.createElement(oe,{groupId:a,defaultOpen:o,row:l}),r.createElement(ie,null)):r.createElement(r.Fragment,null,r.createElement(ie,null),r.createElement(oe,{groupId:a,defaultOpen:o,row:l}))))}ie.defaultProps={title:r.createElement(j.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")},ce.defaultProps={row:!1};class ue extends c.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}ue.schema={updatedAt:Date};const de=new o.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:ue});const pe={...a,...i,...d,...u,mockFetch:function(e,t,n){void 0===n&&(n=150);const r=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return new Promise((t=>setTimeout((()=>t(e(...r))),n)))};return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:m(),lastUpdated:de,TimedEntity:ue,CurrentTime:function(){const[e,t]=(0,r.useState)((()=>new Date));return(0,r.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),r.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,a]=r.useState(0),{resetEntireStore:o}=l.Z();return r.createElement(s.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",null,t.message," ",r.createElement("i",null,t.status)),r.createElement("button",{onClick:()=>{o(),a((e=>e+1))}},"Clear Error"))}},t)},TodoResource:class extends y{static list(){const e=super.list();return e.extend({async fetch(){return(await e(...arguments)).slice(0,5)}})}}},me=e=>{let{children:t,groupId:n,hidden:a=!1,defaultOpen:o="n",row:l=!1}=e;return r.createElement(ce,{scope:pe,noInline:!0,groupId:n,defaultOpen:o,row:l,hidden:a},"string"==typeof t?t:t.props.children.props.children)},fe=(0,r.memo)(me)},70523:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(9877),a=n(58215),o=n(67294);function l(e){let{children:t}=e;return o.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},o.createElement(a.Z,{value:"ts"},t[0]),o.createElement(a.Z,{value:"js"},t[1]))}},55791:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>i,toc:()=>c,default:()=>d});var r=n(87462),a=(n(27378),n(3905)),o=(n(70523),n(70720));const l={title:"schema.Object"},s=void 0,i={unversionedId:"api/Object",id:"api/Object",title:"schema.Object",description:"schema.Values - Representing Objects with known keys | Rest Hooks",source:"@site/../docs/api/Object.md",sourceDirName:"api",slug:"/api/Object",permalink:"/docs/next/api/Object",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Object.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{title:"schema.Object"},sidebar:"docs",previous:{title:"Entity",permalink:"/docs/next/api/Entity"},next:{title:"schema.Array",permalink:"/docs/next/api/Array"}},c=[{value:"Instance Methods",id:"instance-methods",children:[],level:4},{value:"Usage",id:"usage",children:[],level:4}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"schema.Values - Representing Objects with known keys | Rest Hooks")),(0,a.kt)("p",null,"Define a plain object mapping that has values needing to be normalized into Entities. ",(0,a.kt)("em",{parentName:"p"},"Note: The same behavior can be defined with shorthand syntax: ",(0,a.kt)("inlineCode",{parentName:"em"},"{ ... }"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"definition"),": ",(0,a.kt)("strong",{parentName:"li"},"required")," A definition of the nested entities found within this object. Defaults to empty object.\nYou ",(0,a.kt)("em",{parentName:"li"},"do not")," need to define any keys in your object other than those that hold other entities. All other values will be copied to the normalized output.")),(0,a.kt)("h4",{id:"instance-methods"},"Instance Methods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"define(definition)"),": When used, the ",(0,a.kt)("inlineCode",{parentName:"li"},"definition")," passed in will be merged with the original definition passed to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Object")," constructor. This method tends to be useful for creating circular references in schema.")),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)(o.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const sampleData = () =>\n  Promise.resolve({ users: [{ id: '123', name: 'Beth' }] });\n\nclass User extends Entity {\n  readonly name: string = '';\n  pk() {\n    return this.id;\n  }\n}\nconst userList = new Endpoint(sampleData, {\n  schema:\n    new schema.Object({ users: new schema.Array(User) }),\n  ,\n});\nfunction UsersPage() {\n  const { users } = useSuspense(userList, {});\n  return (\n    <div>\n      {users.map(user => <div key={user.pk()}>{user.name}</div>)}\n    </div>\n  );\n}\nrender(<UsersPage />);\n"))))}d.isMDXComponent=!0},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);