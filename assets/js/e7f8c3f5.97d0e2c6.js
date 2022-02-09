"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[16113],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>p});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var u=r.createContext({}),c=function(e){var t=r.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},m=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=c(i),p=n,b=d["".concat(u,".").concat(p)]||d[p]||s[p]||a;return i?r.createElement(b,l(l({ref:t},m),{},{components:i})):r.createElement(b,l({ref:t},m))}));function p(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,l=new Array(a);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<a;c++)l[c]=i[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},46421:(e,t,i)=>{i.r(t),i.d(t,{frontMatter:()=>a,contentTitle:()=>l,metadata:()=>o,toc:()=>u,default:()=>m});var r=i(87462),n=(i(67294),i(3905));const a={title:"Understanding Immutability",sidebar_label:"Understanding Immutability",id:"immutability",original_id:"immutability"},l=void 0,o={unversionedId:"guides/immutability",id:"version-3.0/guides/immutability",title:"Understanding Immutability",description:"Benefits",source:"@site/versioned_docs/version-3.0/guides/immutability.md",sourceDirName:"guides",slug:"/guides/immutability",permalink:"/docs/3.0/guides/immutability",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/immutability.md",tags:[],version:"3.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"Understanding Immutability",sidebar_label:"Understanding Immutability",id:"immutability",original_id:"immutability"}},u=[{value:"Benefits",id:"benefits",children:[],level:2},{value:"The case for immutability",id:"the-case-for-immutability",children:[],level:2}],c={toc:u};function m(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"benefits"},"Benefits"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Simplicity"),(0,n.kt)("li",{parentName:"ul"},"Predictability"),(0,n.kt)("li",{parentName:"ul"},"Performance",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"===")," checks allow frequent short-circuiting in React")))),(0,n.kt)("h2",{id:"the-case-for-immutability"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/immutable-js/immutable-js#the-case-for-immutability"},"The case for immutability")))}m.isMDXComponent=!0}}]);