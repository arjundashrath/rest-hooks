"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[79],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},79750:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>l,toc:()=>s,default:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={title:"Fetching multiple resources at once",id:"fetch-multiple",original_id:"fetch-multiple"},i=void 0,l={unversionedId:"guides/fetch-multiple",id:"version-2.2/guides/fetch-multiple",title:"Fetching multiple resources at once",description:"Parallel",source:"@site/versioned_docs/version-2.2/guides/fetch-multiple.md",sourceDirName:"guides",slug:"/guides/fetch-multiple",permalink:"/docs/2.2/guides/fetch-multiple",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/fetch-multiple.md",tags:[],version:"2.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"Fetching multiple resources at once",id:"fetch-multiple",original_id:"fetch-multiple"},sidebar:"version-2.2/docs",previous:{title:"Dealing with network errors",permalink:"/docs/2.2/guides/network-errors"},next:{title:"Resource types",permalink:"/docs/2.2/guides/resource-types"}},s=[{value:"Parallel",id:"parallel",children:[],level:2},{value:"Sequential",id:"sequential",children:[],level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"parallel"},"Parallel"),(0,o.kt)("p",null,"If you have the parameters you needs to fetch, they will all happen in parallel!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { useResource } from "rest-hooks";\nimport { PostResource, TaskResource } from "./resources";\n\nexport default function Post({ name }: { name: string }) {\n  const [post, tasks] = useResource(\n    [PostResource.detailShape(), { name }],\n    [TaskResource.detailShape(), { name }],\n  );\n  return (\n    <div>\n      <Post post={post} />\n      <Task task={task} />\n    </div>\n  );\n}\n')),(0,o.kt)("h2",{id:"sequential"},"Sequential"),(0,o.kt)("p",null,"Each ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.2/api/useresource"},"useResource()")," call ensures the resource returned is available. That means\nthat until that point it will yield running the rest of the component function\nwhen it is loading or errored."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { useResource } from "rest-hooks";\nimport { PostResource, UserResource } from "./resources";\n\nexport default function Post({ id }: { id: number }) {\n  const post = useResource(PostResource.detailShape(), { id });\n  const author = useResource(\n    UserResource.detailShape(),\n    {\n      id: post.userId\n    }\n  );\n  return (\n    <div>\n      <h1>\n        {post.title} by {author && author.name}\n      </h1>\n      <p>{post.body}</p>\n    </div>\n  );\n}\n')))}u.isMDXComponent=!0}}]);