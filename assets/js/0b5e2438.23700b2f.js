/*! For license information please see 0b5e2438.23700b2f.js.LICENSE.txt */
(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[77730,37103,68047,714,18961,36701,68649,901],{62525:e=>{"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var l,i,s=a(e),u=1;u<arguments.length;u++){for(var c in l=Object(arguments[u]))n.call(l,c)&&(s[c]=l[c]);if(t){i=t(l);for(var d=0;d<i.length;d++)r.call(l,i[d])&&(s[i[d]]=l[i[d]])}}return s}},41535:(e,t,n)=>{"use strict";var r=n(62525),a=60103,o=60106;var l=60109,i=60110,s=60112;var u=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;a=d("react.element"),o=d("react.portal"),d("react.fragment"),d("react.strict_mode"),d("react.profiler"),l=d("react.provider"),i=d("react.context"),s=d("react.forward_ref"),d("react.suspense"),u=d("react.memo"),c=d("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f={};function h(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||m}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||m}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=h.prototype;var v=b.prototype=new y;v.constructor=b,r(v,h.prototype),v.isPureReactComponent=!0;var g=Array.isArray,k=Object.prototype.hasOwnProperty,E={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var r,o={},l=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(l=""+t.key),t)k.call(t,r)&&!w.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===o[r]&&(o[r]=s[r]);return{$$typeof:a,type:e,key:l,ref:i,props:o,_owner:E.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var j=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,n,r,l){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case a:case o:s=!0}}if(s)return l=l(s=e),e=""===r?"."+x(s,0):r,g(l)?(n="",null!=e&&(n=e.replace(j,"$&/")+"/"),C(l,t,n,"",(function(e){return e}))):null!=l&&(N(l)&&(l=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,n+(!l.key||s&&s.key===l.key?"":(""+l.key).replace(j,"$&/")+"/")+e)),t.push(l)),1;if(s=0,r=""===r?".":r+":",g(e))for(var u=0;u<e.length;u++){var c=r+x(i=e[u],u);s+=C(i,t,n,c,l)}else if("function"==typeof(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e)))for(e=c.call(e),u=0;!(i=e.next()).done;)s+=C(i=i.value,t,n,c=r+x(i,u++),l);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function T(e,t,n){if(null==e)return e;var r=[],a=0;return C(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function S(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var _={current:null},I={transition:0}},27378:(e,t,n)=>{"use strict";n(41535)},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(67294);const a=function(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(87462),a=n(67294),o=n(72389),l=n(75773),i=n(86010);const s="tabItem_LplD";function u(e){var t,n;const{lazy:o,block:u,defaultValue:c,values:d,groupId:p,className:m}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,l.lx)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===c?c:c??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=f[0])?void 0:n.props.value);if(null!==b&&!h.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:g}=(0,l.UB)(),[k,E]=(0,a.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:O}=(0,l.o5)();if(null!=p){const e=v[p];null!=e&&e!==k&&h.some((t=>t.value===e))&&E(e)}const N=e=>{const t=e.currentTarget,n=w.indexOf(t),r=h[n].value;r!==k&&(O(t),E(r),null!=p&&g(p,r))},j=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]||w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]||w[w.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},m)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>w.push(e),onKeyDown:j,onFocus:N,onClick:N},o,{className:(0,i.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":k===t})}),n??t)}))),o?(0,a.cloneElement)(f.filter((e=>e.props.value===k))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function c(e){const t=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},84195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},70720:(e,t,n)=>{"use strict";n.d(t,{Z:()=>fe});var r=n(67294),a=n(24861),o=n(88300),l=n(71481),i=n(42910),s=n(99876),u=n(63312),c=n(33186),d=n(52803),p=n(44431),m=n.n(p),f=n(49909),h=n(53775);class y extends h.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}static partialUpdate(){const e=super.partialUpdate();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:t.id})})}static create(){const e=super.create();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:n.id})})}}class b extends y{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static merge(e,t){return e.updatedAt<t.updatedAt?{...e,...t}:e}static endpointMutate(){const e=super.endpointMutate();return e.extend({getFetchInit(t){return t&&(t={...t,updatedAt:Date.now()}),e.getFetchInit.call(this,t)}})}static partialUpdate(){return super.partialUpdate().extend({schema:this,optimisticUpdater:v})}static create(){const e=this.list().key({});return super.create().extend({schema:this,optimisticUpdater:g,update:t=>({[e]:function(e){return void 0===e&&(e=[]),[...e,t]}})})}static delete(){return super.delete().extend({schema:new f.Z(this),optimisticUpdater:k})}}b.urlRoot="/api/todos";const v=(e,t,n)=>({id:t.id,...e.getResponse(b.detail(),{id:t.id}).data,...n,updatedAt:e.fetchedAt}),g=(e,t,n)=>({...n,updatedAt:e.fetchedAt}),k=(e,t)=>({...t,updatedAt:e.fetchedAt});var E=n(87462),w=n(50776),O=n(86010),N=n(95999),j=n(52263),x=n(72389),C=n(75773),T=n(55423),S=n(84195),_=n(58699),I=n(28808),U=n(96714),Z=n(28224),P=n(91262);const A="playgroundContainer_sLUA",D="row_YGZs",F="hidden_Hh8i",R="playgroundHeader_Zx4K",$="playgroundEditor_lYwu",L="playgroundPreview_rk9R",M="playgroundResult_tefG",V="debugToggle_zlro",q="tabControls_trxh",B="tabs_m54V",z="tab_bTGw",G="selected_QXZk";var H=n(60522),X=n(83552);function K(e){let{value:t}=e;const{isDarkTheme:n}=(0,C.If)(),a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]);return r.createElement(X.L,{shouldExpandNode:J,data:t,theme:{tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"}})}function J(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}function Y(e){let{toggle:t,selectedValue:n}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:V,onClick:t},"Store"),"y"===n?r.createElement(ee,null):null)}const Q=(0,r.memo)(Y);function W(){const e=(0,r.useContext)(H.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,delete t.lastReset,t}),[e]);return r.createElement(K,{value:t})}const ee=(0,r.memo)(W);function te(e){let{groupId:t,defaultOpen:n,row:a}=e;const{tabGroupChoices:o,setTabGroupChoices:l}=(0,C.UB)(),[i,s]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:u}=(0,C.o5)();if(null!=t){const e=o[t];null!=e&&e!==i&&s(e)}const c=(0,r.useCallback)((e=>{u(e.currentTarget),s((e=>"y"===e?"n":"y")),l(t,"y"===i?"n":"y")}),[u,t,i,l]),d=(0,r.useMemo)((()=>[new Z.Z,new _.Z(I.Z)]),[]),p=!("n"===i||!a);return r.createElement(U.nq,{managers:d},r.createElement("div",{className:(0,O.Z)(L,{[F]:p})},r.createElement(P.Z,{fallback:r.createElement(re,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(re,null)},r.createElement(w.i5,null),r.createElement(w.IF,null))))),r.createElement(Q,{selectedValue:i,toggle:c}))}const ne=(0,r.memo)(te);function re(){return r.createElement("div",null,"Loading...")}function ae(e){let{children:t,className:n}=e;return r.createElement("div",{className:(0,O.Z)(R,n)},t)}function oe(e){let{groupId:t,defaultOpen:n,row:a}=e;return r.createElement("div",null,r.createElement(ae,null,r.createElement(N.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),r.createElement("div",{className:M},r.createElement(ne,{groupId:t,defaultOpen:n,row:a})))}function le(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(S.Z);return r.createElement("div",{className:B,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:a,label:o}=n;return r.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,O.Z)(z,{[G]:e===a}),onFocus:t,onClick:t,value:a},o)})))}function ie(e){let{children:t}=e;return r.createElement(ae,{className:q},r.createElement("div",null,t),r.createElement(le,null))}function se(e){let{title:t}=e;const{values:n}=(0,r.useContext)(S.Z),a=n.length>0,o=(0,x.Z)();return r.createElement("div",null,a?r.createElement(ie,null,t):r.createElement(ae,null,t),r.createElement(w.uz,{key:o,className:$}))}function ue(e){let{children:t,transformCode:n,groupId:a,defaultOpen:o,row:l,hidden:i=!1,...s}=e;const{siteConfig:{themeConfig:{liveCodeBlock:{playgroundPosition:u}}}}=(0,j.Z)(),c=(0,C.pJ)();s.scope;return r.createElement("div",{className:(0,O.Z)(A,{[D]:l,[F]:i})},r.createElement(w.nu,(0,E.Z)({code:t.replace(/\n$/,""),transformCode:n||(e=>(e=>T.transpileModule(e,{compilerOptions:{module:T.ModuleKind.ESNext,target:T.ScriptTarget.ES5,jsx:"react"}}).outputText)(`${e};`)),transpileOptions:{target:{chrome:71},transforms:{classes:!1,letConst:!1,getterSetter:!1,generator:!1,asyncAwait:!1,moduleImport:!1,moduleExport:!1}},theme:c},s),"top"===u?r.createElement(r.Fragment,null,r.createElement(oe,{groupId:a,defaultOpen:o,row:l}),r.createElement(se,null)):r.createElement(r.Fragment,null,r.createElement(se,null),r.createElement(oe,{groupId:a,defaultOpen:o,row:l}))))}se.defaultProps={title:r.createElement(N.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")},ue.defaultProps={row:!1};class ce extends u.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}ce.schema={updatedAt:Date};const de=new o.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:ce});const pe={...a,...s,...d,...c,mockFetch:function(e,t,n){void 0===n&&(n=150);const r=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return new Promise((t=>setTimeout((()=>t(e(...r))),n)))};return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:m(),lastUpdated:de,TimedEntity:ce,CurrentTime:function(){const[e,t]=(0,r.useState)((()=>new Date));return(0,r.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),r.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,a]=r.useState(0),{resetEntireStore:o}=l.Z();return r.createElement(i.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",null,t.message," ",r.createElement("i",null,t.status)),r.createElement("button",{onClick:()=>{o(),a((e=>e+1))}},"Clear Error"))}},t)},TodoResource:class extends b{static list(){const e=super.list();return e.extend({async fetch(){return(await e(...arguments)).slice(0,5)}})}}},me=e=>{let{children:t,groupId:n,hidden:a=!1,defaultOpen:o="n",row:l=!1}=e;return r.createElement(ue,{scope:pe,noInline:!0,groupId:n,defaultOpen:o,row:l,hidden:a},"string"==typeof t?t:t.props.children.props.children)},fe=(0,r.memo)(me)},70523:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(9877),a=n(58215),o=n(67294);function l(e){let{children:t}=e;return o.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},o.createElement(a.Z,{value:"ts"},t[0]),o.createElement(a.Z,{value:"js"},t[1]))}},95650:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>i,metadata:()=>s,toc:()=>u,default:()=>d});var r=n(87462),a=(n(27378),n(3905)),o=(n(70523),n(70720));const l={title:"schema.Union"},i=void 0,s={unversionedId:"api/Union",id:"api/Union",title:"schema.Union",description:"schema.Union - Representing a Union of possible types | Rest Hooks",source:"@site/../docs/api/Union.md",sourceDirName:"api",slug:"/api/Union",permalink:"/docs/next/api/Union",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Union.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{title:"schema.Union"},sidebar:"docs",previous:{title:"schema.Array",permalink:"/docs/next/api/Array"},next:{title:"schema.Values",permalink:"/docs/next/api/Values"}},u=[{value:"Instance Methods",id:"instance-methods",children:[],level:4},{value:"Usage",id:"usage",children:[],level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"schema.Union - Representing a Union of possible types | Rest Hooks")),(0,a.kt)("p",null,"Describe a schema which is a union of multiple schemas. This is useful if you need the polymorphic behavior provided by ",(0,a.kt)("inlineCode",{parentName:"p"},"schema.Array")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"schema.Values")," but for non-collection fields."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"definition"),": ",(0,a.kt)("strong",{parentName:"li"},"required")," An object mapping the definition of the nested entities found within the input array"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"schemaAttribute"),": ",(0,a.kt)("strong",{parentName:"li"},"required")," The attribute on each entity found that defines what schema, per the definition mapping, to use when normalizing.\nCan be a string or a function. If given a function, accepts the following arguments:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value"),": The input value of the entity."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"parent"),": The parent object of the input array."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"key"),": The key at which the input array appears on the parent object.")))),(0,a.kt)("h4",{id:"instance-methods"},"Instance Methods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"define(definition)"),": When used, the ",(0,a.kt)("inlineCode",{parentName:"li"},"definition")," passed in will be merged with the original definition passed to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Union")," constructor. This method tends to be useful for creating circular references in schema.")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: If your data returns an object that you did not provide a mapping for, the original object will be returned in the result and an entity will not be created.")),(0,a.kt)(o.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const sampleData = () =>\n  Promise.resolve([\n    { id: 1, type: 'link', url: 'https://ntucker.true.io', title: 'Nate site' },\n    { id: 10, type: 'post', content: 'good day!' },\n  ]);\n\nabstract class FeedItem extends Entity {\n  readonly id: number = 0;\n  declare readonly type: 'link' | 'post';\n  pk() {\n    return `${this.id}`;\n  }\n}\nclass Link extends FeedItem {\n  readonly type = 'link' as const;\n  readonly url: string = '';\n  readonly title: string = '';\n}\nclass Post extends FeedItem {\n  readonly type = 'post' as const;\n  readonly content: string = '';\n}\n\nconst feed = new Endpoint(sampleData, {\n  schema: [\n    new schema.Union(\n      {\n        link: Link,\n        post: Post,\n      },\n      'type',\n    ),\n  ],\n});\n\nfunction FeedList() {\n  const feedItems = useSuspense(feed, {});\n  return (\n    <div>\n      {feedItems.map(item =>\n        item.type === 'link' ? (\n          <LinkItem link={item} key={item.pk()} />\n        ) : (\n          <PostItem post={item} key={item.pk()} />\n        ),\n      )}\n    </div>\n  );\n}\nfunction LinkItem({ link }: { link: Link }) {\n  return <a href={link.url}>{link.title}</a>;\n}\nfunction PostItem({ post }: { post: Post }) {\n  return <div>{post.content}</div>;\n}\nrender(<FeedList />);\n"))))}d.isMDXComponent=!0},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);