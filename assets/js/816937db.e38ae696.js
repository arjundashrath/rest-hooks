"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[89433],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48431:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>a,contentTitle:()=>l,metadata:()=>i,toc:()=>c,default:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"Protocol Specific Extensions"},l=void 0,i={unversionedId:"getting-started/protocols",id:"version-4.0/getting-started/protocols",title:"Protocol Specific Extensions",description:"REST / CRUD",source:"@site/versioned_docs/version-4.0/getting-started/protocols.md",sourceDirName:"getting-started",slug:"/getting-started/protocols",permalink:"/docs/4.0/getting-started/protocols",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/protocols.md",tags:[],version:"4.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"Protocol Specific Extensions"}},c=[{value:"REST / CRUD",id:"rest--crud",children:[{value:"Resource",id:"resource",children:[{value:"Readonly endpoints",id:"readonly-endpoints",children:[],level:4},{value:"Mutation endpoints",id:"mutation-endpoints",children:[],level:4}],level:3}],level:2},{value:"GraphQL",id:"graphql",children:[],level:2}],s={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"rest--crud"},"REST / CRUD"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @rest-hooks/rest\n")),(0,o.kt)("h3",{id:"resource"},"Resource"),(0,o.kt)("p",null,"// make this a table"),(0,o.kt)("h4",{id:"readonly-endpoints"},"Readonly endpoints"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Resource.detail()"),(0,o.kt)("li",{parentName:"ul"},"Resource.list()")),(0,o.kt)("h4",{id:"mutation-endpoints"},"Mutation endpoints"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Resource.create()"),(0,o.kt)("li",{parentName:"ul"},"Resource.update()"),(0,o.kt)("li",{parentName:"ul"},"Resource.partialUpdate()"),(0,o.kt)("li",{parentName:"ul"},"Resource.delete()")),(0,o.kt)("h2",{id:"graphql"},"GraphQL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class GQLEntity extends Entity {\n  readonly id: number = 0;\n\n  pk() { return `${this.id}`; }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const GQL = new Endpoint(\n  ()\n)\n")))}p.isMDXComponent=!0}}]);