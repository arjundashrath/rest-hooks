"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[82084],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,v=d["".concat(o,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(v,i(i({ref:t},u),{},{components:n})):a.createElement(v,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);const r=function(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(87462),r=n(67294),l=n(72389),i=n(75773),s=n(86010);const o="tabItem_LplD";function c(e){var t,n;const{lazy:l,block:c,defaultValue:u,values:p,groupId:d,className:m}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=p??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,i.lx)(h,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===u?u:u??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=v[0])?void 0:n.props.value);if(null!==k&&!h.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:y}=(0,i.UB)(),[g,N]=(0,r.useState)(k),w=[],{blockElementScrollPositionUntilNextRender:E}=(0,i.o5)();if(null!=d){const e=b[d];null!=e&&e!==g&&h.some((t=>t.value===e))&&N(e)}const T=e=>{const t=e.currentTarget,n=w.indexOf(t),a=h[n].value;a!==g&&(E(t),N(a),null!=d&&y(d,a))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]||w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]||w[w.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},m)},h.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,key:t,ref:e=>w.push(e),onKeyDown:I,onFocus:T,onClick:T},l,{className:(0,s.Z)("tabs__item",o,null==l?void 0:l.className,{"tabs__item--active":g===t})}),n??t)}))),l?(0,r.cloneElement)(v.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}function u(e){const t=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},11048:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(9877),r=n(58215),l=n(67294);function i(e){let{children:t}=e;return l.createElement(a.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},l.createElement(r.Z,{value:"simple"},t[0]),l.createElement(r.Z,{value:"generics"},t[1]))}},73456:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>o,toc:()=>c,default:()=>p});var a=n(87462),r=(n(67294),n(3905)),l=n(11048);const i={title:"useInvalidator()"},s=void 0,o={unversionedId:"api/useInvalidator",id:"version-6.1/api/useInvalidator",title:"useInvalidator()",description:"Use Controller.invalidate() instead",source:"@site/versioned_docs/version-6.1/api/useInvalidator.md",sourceDirName:"api",slug:"/api/useInvalidator",permalink:"/docs/api/useInvalidator",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useInvalidator.md",tags:[],version:"6.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{title:"useInvalidator()"},sidebar:"version-6.1/docs",previous:{title:"useFetcher()",permalink:"/docs/api/useFetcher"},next:{title:"useResetter()",permalink:"/docs/api/useResetter"}},c=[{value:"Example",id:"example",children:[],level:3},{value:"Internals",id:"internals",children:[],level:3},{value:"Invalidate an entity",id:"invalidate-an-entity",children:[],level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Use ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/Controller#invalidate"},"Controller.invalidate()")," instead"))),(0,r.kt)(l.Z,{mdxType:"GenericsTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function useInvalidator(\n  endpoint: ReadEndpoint,\n): (params: object | null) => void;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function useInvalidator<Params extends Readonly<object>, S extends Schema>(\n  endpoint: ReadEndpoint<(p: Params) => Promise<any>, S>,\n): (params: Params | null) => void;\n"))),(0,r.kt)("p",null,"Mostly useful for imperatively invalidating the cache, with a similar signature to\n",(0,r.kt)("a",{parentName:"p",href:"/docs/api/useFetcher"},"useFetcher"),"."),(0,r.kt)("p",null,"Sending a ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," to params results in a no-op."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Forces refetching and suspense on ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/useresource"},"useResource")," with the same Endpoint\nand parameters."),(0,r.kt)("p",{parentName:"blockquote"},"To refresh while continuing to display stale data - ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/useFetcher"},"useFetcher")," instead.")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function ArticleName({ id }: { id: string }) {\n  const article = useResource(ArticleResource.detail(), { id });\n  const invalidateArticle = useInvalidator(ArticleResource.detail());\n\n  return (\n    <div>\n      <h1>{article.title}<h1>\n      <button onClick={() => invalidateArticle({ id })}>Fetch &amp; suspend</button>\n    </div>\n  );\n}\n")),(0,r.kt)("h3",{id:"internals"},"Internals"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"set expiresAt to 0.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This triggers useRetrieve."))),(0,r.kt)("li",{parentName:"ul"},"deletes results entry.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This only allows direct read from the cache if inferred results."))),(0,r.kt)("li",{parentName:"ul"},"sets meta.invalidated to true.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is used to determine whether to throw promise (trigger suspense)")))),(0,r.kt)("h2",{id:"invalidate-an-entity"},"Invalidate an entity"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useInvalidator()")," invalidates a particular response. If you're looking to invalidate ",(0,r.kt)("em",{parentName:"p"},"every"),"\nresponse containing a particular entity, use the ",(0,r.kt)("a",{parentName:"p",href:"./Delete"},"Delete"),"\nSchema. This causes all responses with that entity marked as required to suspend."),(0,r.kt)("p",null,"In case this isn't an actual endpoint, simply fake the ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const InvalidateArticle = new Endpoint(\n  (params) => Promise.resolve(params),\n  { schema: new schemas.Delete(ArticleResource) }\n);\n\nfunction ArticleName({ id }: { id: string }) {\n  const article = useResource(ArticleResource.detail(), { id });\n  const invalidateAllWithArticle = useFetcher(InvalidateArticle);\n\n  return (\n    <div>\n      <h1>{article.title}<h1>\n      <button onClick={() => invalidateAllWithArticle({ id })}>Fetch &amp; suspend</button>\n    </div>\n  );\n}\n")),(0,r.kt)("p",null,"The fetch should resolve to an object that can compute the ",(0,r.kt)("inlineCode",{parentName:"p"},"pk()")," (like 'id')\nof the entity. This is needed so Rest Hooks knows which entity is being deleted."),(0,r.kt)("p",null,"If the actual server response does not include this information, typically\nyou can pass through relevant information from the params themselves."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const InvalidateArticle = new Endpoint(\n  ({ id }) => {\n    // disregard response from API since it's just an empty string\n    await fetch(`/article/${id}`, { method: 'DELETE' });\n    return { id };\n  },\n  { schema: new schemas.Delete(ArticleResource) },\n);\n")),(0,r.kt)("p",null,"This is actually what the default ",(0,r.kt)("a",{parentName:"p",href:"./resource#delete-endpoint"},"Resource.delete()")," does."))}p.isMDXComponent=!0}}]);