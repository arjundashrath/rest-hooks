"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[94810],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52237:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>s,metadata:()=>i,toc:()=>c,default:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={title:"<MockResolver />"},s=void 0,i={unversionedId:"api/MockResolver",id:"version-6.1/api/MockResolver",title:"<MockResolver />",description:"&lt;MockResolver /\\> enables easy loading of fixtures to see what different network responses might look like.",source:"@site/versioned_docs/version-6.1/api/MockResolver.md",sourceDirName:"api",slug:"/api/MockResolver",permalink:"/docs/api/MockResolver",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/MockResolver.md",tags:[],version:"6.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{title:"<MockResolver />"},sidebar:"version-6.1/docs",previous:{title:"Resource",permalink:"/docs/api/resource"},next:{title:"makeRenderRestHook()",permalink:"/docs/api/makeRenderRestHook"}},c=[{value:"Arguments",id:"arguments",children:[{value:"fixtures",id:"fixtures",children:[],level:3}],level:2},{value:"Returns",id:"returns",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],p={toc:c};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function MockResolver({\n  children,\n  fixtures,\n}: {\n  children: React.ReactNode;\n  fixtures: Fixture[];\n}): JSX.Element;\n")),(0,o.kt)("p",null,"<","MockResolver /",">"," enables easy loading of fixtures to see what different network responses might look like.\nThis is useful for ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/storybook"},"storybook")," as well as component testing."),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("h3",{id:"fixtures"},"fixtures"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface SuccessFixtureEndpoint<\n  E extends EndpointInterface = EndpointInterface,\n> {\n  endpoint: E;\n  args: Parameters<E>;\n  response: ResolveType<E>;\n  error?: false;\n}\n\n/** @deprecated */\nexport interface SuccessFixture {\n  request: FetchShape<Schema, any>;\n  params?: any;\n  body?: any;\n  result: object | string | number;\n  error?: false;\n}\n\nexport interface ErrorFixtureEndpoint<\n  E extends EndpointInterface = EndpointInterface,\n> {\n  endpoint: E;\n  args: Parameters<E>;\n  response: any;\n  error: true;\n}\n\n/** @deprecated */\nexport interface ErrorFixture {\n  request: FetchShape<Schema, any>;\n  params?: any;\n  body?: any;\n  result: Error;\n  error: true;\n}\n\nexport type FixtureEndpoint = SuccessFixtureEndpoint | ErrorFixtureEndpoint;\nexport type Fixture = SuccessFixture | ErrorFixture | FixtureEndpoint;\n")),(0,o.kt)("p",null,"This prop specifies the fixtures to use data from. Each item represents a fetch defined by the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/api/Endpoint"},"Endpoint")," and params. ",(0,o.kt)("inlineCode",{parentName:"p"},"Result")," contains the JSON response expected from said fetch."),(0,o.kt)("h2",{id:"returns"},"Returns"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"JSX.Element\n")),(0,o.kt)("p",null,"Renders the children prop."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { MockResolver } from '@rest-hooks/test';\n\nimport ArticleResource from 'resources/ArticleResource';\nimport MyComponentToTest from 'components/MyComponentToTest';\n\nconst results = [\n  {\n    endpoint: ArticleResource.list(),\n    args: [{ maxResults: 10 }] as const,\n    response: [\n      {\n        id: 5,\n        content: 'have a merry christmas',\n        author: 2,\n        contributors: [],\n      },\n      {\n        id: 532,\n        content: 'never again',\n        author: 23,\n        contributors: [5],\n      },\n    ],\n  },\n];\n\nconst Template: Story = () => (\n  <MockResolver fixtures={results}><MyComponentToTest /></MockResolver>\n);\n\nexport const MyStory = Template.bind({});\n")))}l.isMDXComponent=!0}}]);