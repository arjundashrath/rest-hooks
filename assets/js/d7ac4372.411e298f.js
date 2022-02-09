/*! For license information please see d7ac4372.411e298f.js.LICENSE.txt */
(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[76474],{62525:e=>{"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,i){for(var o,s,l=a(e),c=1;c<arguments.length;c++){for(var u in o=Object(arguments[c]))n.call(o,u)&&(l[u]=o[u]);if(t){s=t(o);for(var d=0;d<s.length;d++)r.call(o,s[d])&&(l[s[d]]=o[s[d]])}}return l}},41535:(e,t,n)=>{"use strict";var r=n(62525),a=60103,i=60106;var o=60109,s=60110,l=60112;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;a=d("react.element"),i=d("react.portal"),d("react.fragment"),d("react.strict_mode"),d("react.profiler"),o=d("react.provider"),s=d("react.context"),l=d("react.forward_ref"),d("react.suspense"),c=d("react.memo"),u=d("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f={};function h(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||m}function y(){}function g(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||m}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=h.prototype;var b=g.prototype=new y;b.constructor=g,r(b,h.prototype),b.isPureReactComponent=!0;var k=Array.isArray,v=Object.prototype.hasOwnProperty,w={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var r,i={},o=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(o=""+t.key),t)v.call(t,r)&&!E.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===i[r]&&(i[r]=l[r]);return{$$typeof:a,type:e,key:o,ref:s,props:i,_owner:w.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var C=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function N(e,t,n,r,o){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case a:case i:l=!0}}if(l)return o=o(l=e),e=""===r?"."+T(l,0):r,k(o)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),N(o,t,n,"",(function(e){return e}))):null!=o&&(x(o)&&(o=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(C,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=""===r?".":r+":",k(e))for(var c=0;c<e.length;c++){var u=r+T(s=e[c],c);l+=N(s,t,n,u,o)}else if("function"==typeof(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e)))for(e=u.call(e),c=0;!(s=e.next()).done;)l+=N(s=s.value,t,n,u=r+T(s,c++),o);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function A(e,t,n){if(null==e)return e;var r=[],a=0;return N(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function j(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var S={current:null},P={transition:0}},27378:(e,t,n)=>{"use strict";n(41535)},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},70720:(e,t,n)=>{"use strict";n.d(t,{Z:()=>fe});var r=n(67294),a=n(24861),i=n(88300),o=n(71481),s=n(42910),l=n(99876),c=n(63312),u=n(33186),d=n(52803),p=n(44431),m=n.n(p),f=n(49909),h=n(53775);class y extends h.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}static partialUpdate(){const e=super.partialUpdate();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:t.id})})}static create(){const e=super.create();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:n.id})})}}class g extends y{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static merge(e,t){return e.updatedAt<t.updatedAt?{...e,...t}:e}static endpointMutate(){const e=super.endpointMutate();return e.extend({getFetchInit(t){return t&&(t={...t,updatedAt:Date.now()}),e.getFetchInit.call(this,t)}})}static partialUpdate(){return super.partialUpdate().extend({schema:this,optimisticUpdater:b})}static create(){const e=this.list().key({});return super.create().extend({schema:this,optimisticUpdater:k,update:t=>({[e]:function(e){return void 0===e&&(e=[]),[...e,t]}})})}static delete(){return super.delete().extend({schema:new f.Z(this),optimisticUpdater:v})}}g.urlRoot="/api/todos";const b=(e,t,n)=>({id:t.id,...e.getResponse(g.detail(),{id:t.id}).data,...n,updatedAt:e.fetchedAt}),k=(e,t,n)=>({...n,updatedAt:e.fetchedAt}),v=(e,t)=>({...t,updatedAt:e.fetchedAt});var w=n(87462),E=n(50776),O=n(86010),x=n(95999),C=n(52263),T=n(72389),N=n(75773),A=n(55423),j=n(84195),S=n(58699),P=n(28808),R=n(96714),U=n(28224),_=n(91262);const I="playgroundContainer_sLUA",D="row_YGZs",Z="hidden_Hh8i",M="playgroundHeader_Zx4K",F="playgroundEditor_lYwu",$="playgroundPreview_rk9R",q="playgroundResult_tefG",H="debugToggle_zlro",L="tabControls_trxh",B="tabs_m54V",z="tab_bTGw",G="selected_QXZk";var V=n(60522),W=n(83552);function X(e){let{value:t}=e;const{isDarkTheme:n}=(0,N.If)(),a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]);return r.createElement(W.L,{shouldExpandNode:J,data:t,theme:{tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"}})}function J(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}function K(e){let{toggle:t,selectedValue:n}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:H,onClick:t},"Store"),"y"===n?r.createElement(ee,null):null)}const Y=(0,r.memo)(K);function Q(){const e=(0,r.useContext)(V.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,delete t.lastReset,t}),[e]);return r.createElement(X,{value:t})}const ee=(0,r.memo)(Q);function te(e){let{groupId:t,defaultOpen:n,row:a}=e;const{tabGroupChoices:i,setTabGroupChoices:o}=(0,N.UB)(),[s,l]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:c}=(0,N.o5)();if(null!=t){const e=i[t];null!=e&&e!==s&&l(e)}const u=(0,r.useCallback)((e=>{c(e.currentTarget),l((e=>"y"===e?"n":"y")),o(t,"y"===s?"n":"y")}),[c,t,s,o]),d=(0,r.useMemo)((()=>[new U.Z,new S.Z(P.Z)]),[]),p=!("n"===s||!a);return r.createElement(R.nq,{managers:d},r.createElement("div",{className:(0,O.Z)($,{[Z]:p})},r.createElement(_.Z,{fallback:r.createElement(re,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(re,null)},r.createElement(E.i5,null),r.createElement(E.IF,null))))),r.createElement(Y,{selectedValue:s,toggle:u}))}const ne=(0,r.memo)(te);function re(){return r.createElement("div",null,"Loading...")}function ae(e){let{children:t,className:n}=e;return r.createElement("div",{className:(0,O.Z)(M,n)},t)}function ie(e){let{groupId:t,defaultOpen:n,row:a}=e;return r.createElement("div",null,r.createElement(ae,null,r.createElement(x.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),r.createElement("div",{className:q},r.createElement(ne,{groupId:t,defaultOpen:n,row:a})))}function oe(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(j.Z);return r.createElement("div",{className:B,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:a,label:i}=n;return r.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,O.Z)(z,{[G]:e===a}),onFocus:t,onClick:t,value:a},i)})))}function se(e){let{children:t}=e;return r.createElement(ae,{className:L},r.createElement("div",null,t),r.createElement(oe,null))}function le(e){let{title:t}=e;const{values:n}=(0,r.useContext)(j.Z),a=n.length>0,i=(0,T.Z)();return r.createElement("div",null,a?r.createElement(se,null,t):r.createElement(ae,null,t),r.createElement(E.uz,{key:i,className:F}))}function ce(e){let{children:t,transformCode:n,groupId:a,defaultOpen:i,row:o,hidden:s=!1,...l}=e;const{siteConfig:{themeConfig:{liveCodeBlock:{playgroundPosition:c}}}}=(0,C.Z)(),u=(0,N.pJ)();l.scope;return r.createElement("div",{className:(0,O.Z)(I,{[D]:o,[Z]:s})},r.createElement(E.nu,(0,w.Z)({code:t.replace(/\n$/,""),transformCode:n||(e=>(e=>A.transpileModule(e,{compilerOptions:{module:A.ModuleKind.ESNext,target:A.ScriptTarget.ES5,jsx:"react"}}).outputText)(`${e};`)),transpileOptions:{target:{chrome:71},transforms:{classes:!1,letConst:!1,getterSetter:!1,generator:!1,asyncAwait:!1,moduleImport:!1,moduleExport:!1}},theme:u},l),"top"===c?r.createElement(r.Fragment,null,r.createElement(ie,{groupId:a,defaultOpen:i,row:o}),r.createElement(le,null)):r.createElement(r.Fragment,null,r.createElement(le,null),r.createElement(ie,{groupId:a,defaultOpen:i,row:o}))))}le.defaultProps={title:r.createElement(x.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")},ce.defaultProps={row:!1};class ue extends c.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}ue.schema={updatedAt:Date};const de=new i.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:ue});const pe={...a,...l,...d,...u,mockFetch:function(e,t,n){void 0===n&&(n=150);const r=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return new Promise((t=>setTimeout((()=>t(e(...r))),n)))};return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:m(),lastUpdated:de,TimedEntity:ue,CurrentTime:function(){const[e,t]=(0,r.useState)((()=>new Date));return(0,r.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),r.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,a]=r.useState(0),{resetEntireStore:i}=o.Z();return r.createElement(s.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",null,t.message," ",r.createElement("i",null,t.status)),r.createElement("button",{onClick:()=>{i(),a((e=>e+1))}},"Clear Error"))}},t)},TodoResource:class extends g{static list(){const e=super.list();return e.extend({async fetch(){return(await e(...arguments)).slice(0,5)}})}}},me=e=>{let{children:t,groupId:n,hidden:a=!1,defaultOpen:i="n",row:o=!1}=e;return r.createElement(ce,{scope:pe,noInline:!0,groupId:n,defaultOpen:i,row:o,hidden:a},"string"==typeof t?t:t.props.children.props.children)},fe=(0,r.memo)(me)},316:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>s,metadata:()=>l,toc:()=>c,default:()=>d});var r=n(87462),a=(n(27378),n(3905)),i=n(70720);const o={title:"Optimistic Updates"},s=void 0,l={unversionedId:"guides/optimistic-updates",id:"guides/optimistic-updates",title:"Optimistic Updates",description:"Optimistic updates enable highly responsive and fast interfaces by avoiding network wait times.",source:"@site/../docs/guides/optimistic-updates.md",sourceDirName:"guides",slug:"/guides/optimistic-updates",permalink:"/docs/next/guides/optimistic-updates",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/optimistic-updates.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1643676127,formattedLastUpdatedAt:"1/31/2022",frontMatter:{title:"Optimistic Updates"},sidebar:"docs",previous:{title:"Immediate Mutation Updates",permalink:"/docs/next/guides/immediate-updates"},next:{title:"Aborting Fetch",permalink:"/docs/next/guides/abort"}},c=[{value:"Partial updates",id:"partial-updates",children:[{value:"ArticleResource.ts",id:"articleresourcets",children:[],level:3},{value:"PublishButton.tsx",id:"publishbuttontsx",children:[],level:3}],level:2},{value:"Optimistic create with instant updates",id:"optimistic-create-with-instant-updates",children:[{value:"ArticleResource.ts",id:"articleresourcets-1",children:[],level:3},{value:"CreateArticle.tsx",id:"createarticletsx",children:[],level:3}],level:2},{value:"Optimistic Deletes",id:"optimistic-deletes",children:[],level:2},{value:"Optimistic Transforms",id:"optimistic-transforms",children:[{value:"Tracking order with updatedAt",id:"tracking-order-with-updatedat",children:[],level:3}],level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Optimistic updates enable highly responsive and fast interfaces by avoiding network wait times.\nAn update is optimistic by assuming the network is successful. In the case of any errors, Rest\nHooks will then roll back any changes in a way that deals with all possible race conditions."),(0,a.kt)("h2",{id:"partial-updates"},"Partial updates"),(0,a.kt)("p",null,"One common use case is for quick toggles. Here we demonstrate a publish button for an\narticle. Note that we need to include the primary key (",(0,a.kt)("inlineCode",{parentName:"p"},"id")," in this case) in the response\nbody to ensure the normalized cache gets updated correctly."),(0,a.kt)("h3",{id:"articleresourcets"},"ArticleResource.ts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MutateEndpoint, SchemaDetail, AbstractInstanceType } from 'rest-hooks';\nimport { Resource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends Resource {\n  readonly id: string | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly published: boolean = false;\n\n  pk() {\n    return this.id;\n  }\n\n  static partialUpdate<T extends typeof Resource>(\n    this: T,\n  ): MutateEndpoint<\n    (p: Readonly<object>, b: Partial<AbstractInstanceType<T>>) => Promise<any>,\n    SchemaDetail<Readonly<AbstractInstanceType<T>>>\n  > {\n    return super.partialUpdate().extend({\n      optimisticUpdater: (snap, params, body) => ({\n        // we absolutely need the primary key here,\n        // but won't be sent in a partial update\n        id: params.id,\n        ...body,\n      }),\n    });\n  }\n}\n")),(0,a.kt)("h3",{id:"publishbuttontsx"},"PublishButton.tsx"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useController } from 'rest-hooks';\nimport ArticleResource from 'ArticleResource';\n\nexport default function PublishButton({ id }: { id: string }) {\n  const { fetch } = useController();\n\n  return (\n    <button\n      onClick={() =>\n        fetch(ArticleResource.partialUpdate(), { id }, { published: true })\n      }\n    >\n      Publish\n    </button>\n  );\n}\n")),(0,a.kt)("h2",{id:"optimistic-create-with-instant-updates"},"Optimistic create with instant updates"),(0,a.kt)("p",null,"Optimistic updates can also be combined with ",(0,a.kt)("a",{parentName:"p",href:"./immediate-updates"},"immediate updates"),", enabling updates to\nother endpoints instantly. This is most commonly seen when creating new items\nwhile viewing a list of them."),(0,a.kt)("p",null,"Here we demonstrate what could be used in a list of articles with a modal\nto create a new article. On submission of the form it would instantly\nadd to the list of articles the newly created article - without waiting on a network response."),(0,a.kt)("h3",{id:"articleresourcets-1"},"ArticleResource.ts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MutateEndpoint, AbstractInstanceType } from 'rest-hooks';\nimport { SchemaDetail, Resource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends Resource {\n  readonly id: string | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly published: boolean = false;\n\n  pk() {\n    return this.id;\n  }\n\n  static create<T extends typeof Resource>(\n    this: T,\n  ): MutateEndpoint<\n    (p: Readonly<object>, b: Partial<AbstractInstanceType<T>>) => Promise<any>,\n    SchemaDetail<Readonly<AbstractInstanceType<T>>>\n  > {\n    return super.create().extend({\n      optimisticUpdater: (snap, params, body) => body,\n    });\n  }\n}\n\nexport const appendUpdater = (\n  newArticleID: string,\n  articleIDs: string[] | undefined,\n) => [...(articleIDs || []), newArticleID];\n")),(0,a.kt)("h3",{id:"createarticletsx"},"CreateArticle.tsx"),(0,a.kt)("p",null,"Since the actual ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," of the article is created on the server, we will need to fill\nin a temporary fake ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," here, so the ",(0,a.kt)("inlineCode",{parentName:"p"},"primary key")," can be generated. This is needed\nto properly normalize the article to be looked up in the cache."),(0,a.kt)("p",null,"Once the network responds, it will have a different ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),", which will replace the existing\ndata. This is often seamless, but care should be taken if the fake ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," is used in any\nrenders - like to issue subsequent requests. We recommend disabling ",(0,a.kt)("inlineCode",{parentName:"p"},"edit")," type features\nthat rely on the ",(0,a.kt)("inlineCode",{parentName:"p"},"primary key")," until the network fetch completes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useController } from 'rest-hooks';\nimport uuid from 'uuid/v4';\nimport ArticleResource from 'ArticleResource';\n\nexport default function CreateArticle() {\n  const { fetch } = useController();\n  const submitHandler = useCallback(\n    data =>\n      // note the fake id we create.\n      fetch(ArticleResource.create(), {}, { id: uuid(), ...data }, [\n        [ArticleResource.list(), {}, appendUpdater],\n      ]),\n    [create],\n  );\n\n  return <Form onSubmit={submitHandler}>{/* rest of form */}</Form>;\n}\n")),(0,a.kt)("h2",{id:"optimistic-deletes"},"Optimistic Deletes"),(0,a.kt)("p",null,"Since deletes ",(0,a.kt)("a",{parentName:"p",href:"./immediate-updates#delete"},"automatically update the cache correctly")," upon fetch success,\nmaking your delete endpoint do this optimistically is as easy as adding the ",(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint#optimisticupdater"},"optimisticUpdater"),"\nfunction to your options."),(0,a.kt)("p",null,"We return an empty string because that's the response we expect from the server. Although by\ndefault, the server response is ignored."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Resource, SimpleResource } from '@rest-hooks/rest';\nimport { MutateEndpoint } from 'rest-hooks';\n\nexport default class ArticleResource extends Resource {\n  readonly id: string | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly published: boolean = false;\n\n  pk() {\n    return this.id;\n  }\n\n  static delete<T extends typeof Resource>(\n    this: T,\n  ): MutateEndpoint<(p: Readonly<object>) => Promise<any>, schemas.Delete<T>> {\n    return super.delete().extend({\n      optimisticUpdater: (snap, params, body) => params,\n    });\n  }\n}\n")),(0,a.kt)("h2",{id:"optimistic-transforms"},"Optimistic Transforms"),(0,a.kt)("p",null,"Sometimes user actions should result in data transformations that are dependent on the previous state of data.\nThe simplest examples of this are toggling a boolean, or incrementing a counter; but the same principal applies to\nmore complicated transforms. To make it more obvious we're using a simple counter here."),(0,a.kt)(i.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class CountEntity extends Entity {\n  readonly count = 0;\n\n  pk() {\n    return `SINGLETON`;\n  }\n}\nconst getCount = new Endpoint(\n  () => fetch('/api/count').then(res => res.json()),\n  {\n    name: 'get',\n    schema: CountEntity,\n  },\n);\nconst increment = new Endpoint(\n  async () => {\n    const body = JSON.stringify({ updatedAt: Date.now() });\n    return await (\n      await fetch('/api/count/increment', {\n        method: 'post',\n        body,\n        headers: {\n          'Content-Type': 'application/json',\n        },\n      })\n    ).json();\n  },\n  {\n    name: 'increment',\n    schema: CountEntity,\n    sideEffect: true,\n    optimisticUpdater(snap) {\n      const { data } = snap.getResponse(getCount);\n      if (!data) throw new AbortOptimistic();\n      return {\n        count: data.count + 1,\n      };\n    },\n  },\n);\n\nfunction CounterPage() {\n  const { fetch } = useController();\n  const { count } = useSuspense(getCount);\n  const [clickHandler, loading, error] = useLoading(() => fetch(increment));\n  return (\n    <div>\n      <p>\n        Click the button multiple times quickly to trigger the race condition\n      </p>\n      <div>\n        {count} <button onClick={clickHandler}>+</button>\n        {loading ? ' ...loading' : ''}\n      </div>\n    </div>\n  );\n}\nrender(<CounterPage />);\n"))),(0,a.kt)("p",null,"Try removing ",(0,a.kt)("inlineCode",{parentName:"p"},"optimisticUpdater")," from the increment ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/Endpoint"},"Endpoint"),". Even without optimistic updates, this race condition can be a real problem. While it is less likely with fast endpoints;\nslower or less reliable internet connections means a slow response time no matter how fast the server is."),(0,a.kt)("p",null,"The problem is that the responses come back in a different order than they are computed. If we can determine the\ncorrect 'total order', we would be able to solve this problem."),(0,a.kt)("p",null,"Without optimistic updates, this can be achieved simply by having the server return a timestamp of when it was last updated.\nThe client can then choose to ignore responses that are out of date by their time of resolution."),(0,a.kt)("h3",{id:"tracking-order-with-updatedat"},"Tracking order with updatedAt"),(0,a.kt)("p",null,"To handle potential out of order resolutions, we can track the last update time in ",(0,a.kt)("inlineCode",{parentName:"p"},"updatedAt"),".\nOverriding our ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/Entity#merge"},"merge"),", we can check which data is newer, and disregard old data\nthat resolves out of order."),(0,a.kt)("p",null,"We use ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/Snapshot#fetchedat"},"snap.fetchedAt")," in our ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/Endpoint#optimisticupdater"},"optimisticUpdater"),". This respresents the moment the fetch is triggered,\nwhich is when the optimistic update first applies."),(0,a.kt)(i.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"class CountEntity extends Entity {\n  readonly count = 0;\n  readonly updatedAt = 0;\n\n  pk() {\n    return `SINGLETON`;\n  }\n\n  static merge(existing, incoming) {\n    if (existing.updatedAt < incoming.updatedAt) {\n      return {\n        ...existing,\n        ...incoming,\n      };\n    }\n    return existing;\n  }\n}\nconst getCount = new Endpoint(\n  () => fetch('/api/count').then(res => res.json()),\n  {\n    name: 'get',\n    schema: CountEntity,\n  },\n);\nconst increment = new Endpoint(\n  async () => {\n    const body = JSON.stringify({ updatedAt: Date.now() });\n    return await (\n      await fetch('/api/count/increment', {\n        method: 'post',\n        body,\n        headers: {\n          'Content-Type': 'application/json',\n        },\n      })\n    ).json();\n  },\n  {\n    name: 'increment',\n    schema: CountEntity,\n    sideEffect: true,\n    optimisticUpdater(snap) {\n      const { data } = snap.getResponse(getCount);\n      // server already has this optimistic computation then do nothing\n      if (!data) throw new AbortOptimistic();\n      return {\n        count: data.count + 1,\n        updatedAt: snap.fetchedAt,\n      };\n    },\n  },\n);\n\nfunction CounterPage() {\n  const { fetch } = useController();\n  const { count } = useSuspense(getCount);\n  const [n, setN] = React.useState(count);\n  const [clickHandler, loading, error] = useLoading(() => {\n    setN(n => n + 1);\n    return fetch(increment);\n  });\n  return (\n    <div>\n      <p>\n        Click the button multiple times quickly to trigger the potential race\n        condition. This time our vector clock protects us.\n      </p>\n      <div>\n        Network: {count} Should be: {n}\n        <br />\n        <button onClick={clickHandler}>+</button>\n        {loading ? ' ...loading' : ''}\n      </div>\n    </div>\n  );\n}\nrender(<CounterPage />);\n"))))}d.isMDXComponent=!0},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);