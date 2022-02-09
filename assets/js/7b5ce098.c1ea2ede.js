"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[26554],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||s;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73721:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>o,metadata:()=>l,toc:()=>i,default:()=>c});var r=n(87462),a=(n(67294),n(3905));const s={id:"useresourcenew",title:"useResourceNew()",original_id:"useresourcenew"},o=void 0,l={unversionedId:"api/useresourcenew",id:"version-2.2/api/useresourcenew",title:"useResourceNew()",description:"### Rest Hooks 3.0",source:"@site/versioned_docs/version-2.2/api/useResourceNew.md",sourceDirName:"api",slug:"/api/useresourcenew",permalink:"/docs/2.2/api/useresourcenew",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useResourceNew.md",tags:[],version:"2.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{id:"useresourcenew",title:"useResourceNew()",original_id:"useresourcenew"},sidebar:"version-2.2/docs",previous:{title:"useResource()",permalink:"/docs/2.2/api/useresource"},next:{title:"useFetcher()",permalink:"/docs/2.2/api/useFetcher"}},i=[{value:"Single",id:"single",children:[],level:2},{value:"List",id:"list",children:[],level:2},{value:"Parallel",id:"parallel",children:[],level:2},{value:"Sequential",id:"sequential",children:[],level:2},{value:"Paginated data",id:"paginated-data",children:[],level:2},{value:"Useful <code>FetchShape</code>s to send",id:"useful-fetchshapes-to-send",children:[],level:2}],u={toc:i};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useResourceNew(fetchShape: ReadShape, params: object | null):\n  Denormalized<typeof fetchShape.schema>;\n\nfunction useResourceNew(...[fetchShape: ReadShape, params: object | null]):\n  Denormalized<typeof fetchShape.schema>[];\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useResourceNew<\n  Params extends Readonly<object>,\n  Body extends Readonly<object | string> | void,\n  S extends Schema\n>(fetchShape: ReadShape<S, Params, Body>, params: Params | null): Denormalized<S>;\n\nfunction useResourceNew<\n  Params extends Readonly<object>,\n  Body extends Readonly<object | string> | void,\n  S extends Schema\n>(...[fetchShape: ReadShape<S, Params, Body>, params: Params | null]): Denormalized<S>[];\n")),(0,a.kt)("blockquote",null,(0,a.kt)("h3",{parentName:"blockquote",id:"rest-hooks-30"},"Rest Hooks 3.0"),(0,a.kt)("p",{parentName:"blockquote"},"This is the future default behavior of ",(0,a.kt)("inlineCode",{parentName:"p"},"useResource()")," in version 3.0."),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"3.0 will keep the legacy version as ",(0,a.kt)("inlineCode",{parentName:"li"},"useResourceLegacy()")),(0,a.kt)("li",{parentName:"ul"},"3.1 will remove both ",(0,a.kt)("inlineCode",{parentName:"li"},"useResourceLegacy()")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"useResourceNew()"),", leaving this behavior in ",(0,a.kt)("inlineCode",{parentName:"li"},"useResource()")))),(0,a.kt)("p",null,"Excellent for retrieving the data you need."),(0,a.kt)("p",null,"Cache policy is ",(0,a.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc5861"},"Stale-While-Revalidate")," by default but also ",(0,a.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/guides/resource-lifetime"},"configurable"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Triggers fetch:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"On first-render and when parameters change"),(0,a.kt)("li",{parentName:"ul"},"and When not in cache or result is considered stale"),(0,a.kt)("li",{parentName:"ul"},"and When no identical requests are in flight"),(0,a.kt)("li",{parentName:"ul"},"and when params are not null"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.restapitutorial.com/httpstatuscodes.html"},"On Error (404, 500, etc)"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Throws error to be ",(0,a.kt)("a",{parentName:"li",href:"/docs/2.2/guides/network-errors"},"caught")," by ",(0,a.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/error-boundaries.html"},"Error Boundaries")))),(0,a.kt)("li",{parentName:"ul"},"While Loading:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Returns previously cached if exists (even if stale)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/2.2/guides/loading-state"},"Suspend rendering")," otherwise")))),(0,a.kt)("h2",{id:"single"},"Single"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function Post({ id }: { id: number }) {\n  const post = useResourceNew(PostResource.detailShape(), { id });\n  // post as PostResource\n}\n")),(0,a.kt)("h2",{id:"list"},"List"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function Posts() {\n  const posts = useResourceNew(PostResource.listShape(), {});\n  // posts as PostResource[]\n}\n")),(0,a.kt)("h2",{id:"parallel"},"Parallel"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function Posts() {\n  const [user, posts] = useResourceNew(\n    [UserResource.detailShape(), { id: userId }],\n    [PostResource.listShape(), { userId }],\n  );\n  // user as UserResource\n  // posts as PostResource[]\n}\n")),(0,a.kt)("h2",{id:"sequential"},"Sequential"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function PostWithAuthor() {\n  const post = useResourceNew(PostResource.detailShape(), { id });\n  // post as PostResource\n  const author = useResourceNew(UserResource.detailShape(), {\n    id: post.userId,\n  });\n  // author as UserResource\n}\n")),(0,a.kt)("h2",{id:"paginated-data"},"Paginated data"),(0,a.kt)("p",null,"When entities are stored in nested structures, that structure will remain."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class PaginatedPostResource extends Resource {\n  readonly id: number | null = null;\n  readonly title: string = '';\n  readonly content: string = '';\n\n  static urlRoot = 'http://test.com/post/';\n\n  static listShape<T extends typeof Resource>(this: T) {\n    return {\n      ...super.listShape(),\n      schema: { results: [this.getEntitySchema()], nextPage: '', lastPage: '' },\n    };\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function ArticleList({ page }: { page: string }) {\n  const { results: posts, nextPage, lastPage } = useResourceNew(\n    PaginatedPostResource.listShape(),\n    { page },\n  );\n  // posts as PaginatedPostResource[]\n}\n")),(0,a.kt)("h2",{id:"useful-fetchshapes-to-send"},"Useful ",(0,a.kt)("inlineCode",{parentName:"h2"},"FetchShape"),"s to send"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/2.2/api/resource#provided-and-overridable-methods"},"Resource")," provides these built-in:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"detailShape()"),(0,a.kt)("li",{parentName:"ul"},"listShape()")),(0,a.kt)("p",null,"Feel free to add your own ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.2/api/FetchShape"},"FetchShape")," as well."))}c.isMDXComponent=!0}}]);