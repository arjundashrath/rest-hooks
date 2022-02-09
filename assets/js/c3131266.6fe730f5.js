"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[48800],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,y=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(y,a(a({ref:t},p),{},{components:r})):n.createElement(y,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},82810:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>a,metadata:()=>l,toc:()=>s,default:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={title:"Multi-column primary key",id:"multi-pk",original_id:"multi-pk"},a=void 0,l={unversionedId:"guides/multi-pk",id:"version-2.2/guides/multi-pk",title:"Multi-column primary key",description:"Sometimes you have a resource that doesn't have its own primary key. This is typically",source:"@site/versioned_docs/version-2.2/guides/multi-pk.md",sourceDirName:"guides",slug:"/guides/multi-pk",permalink:"/docs/2.2/guides/multi-pk",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/multi-pk.md",tags:[],version:"2.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"Multi-column primary key",id:"multi-pk",original_id:"multi-pk"},sidebar:"version-2.2/docs",previous:{title:"Computed Properties",permalink:"/docs/2.2/guides/computed-properties"},next:{title:"Nesting related resources (server-side join)",permalink:"/docs/2.2/guides/nested-response"}},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sometimes you have a resource that doesn't have its own primary key. This is typically\nfound in ",(0,o.kt)("inlineCode",{parentName:"p"},"join tables")," that express ",(0,o.kt)("inlineCode",{parentName:"p"},"many-to-many")," relationships."),(0,o.kt)("p",null,"Since the pk() method must return either a number, string or null, make sure to\ndo a simple serialization. A simple join on the values should work. Be care to\nmake sure your join value can't be a part of the id."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export class VoteResource extends Resource {\n  readonly userId: number | null = null;\n  readonly postId: number | null = null;\n  readonly createdAt: string = '1900-01-01T01:01:01Z';\n\n  pk() {\n    return [this.userId, this.postId].join(',');\n  }\n  static urlRoot = 'https://example.com/votes/';\n}\n")))}p.isMDXComponent=!0}}]);