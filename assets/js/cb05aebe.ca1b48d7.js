"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[39736],{96497:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(9877),a=n(58215),r=n(67294),s=n(87799);function i(e){let{pkgs:t,dev:n=!1}=e;return r.createElement(o.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},r.createElement(a.Z,{value:"yarn"},r.createElement(s.Z,{className:"language-bash"},"yarn add ",n?"--dev ":"",t)),r.createElement(a.Z,{value:"npm"},r.createElement(s.Z,{className:"language-bash"},"npm install --save",n?"Dev ":""," ",t)))}},56922:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(67294),a=n(15814);const r={React:o,...o,...a}},10018:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>d,metadata:()=>p,toc:()=>c,default:()=>k});var o=n(87462),a=(n(67294),n(3905)),r=n(96497),s=n(9877),i=n(58215);const l={title:"Unit testing hooks"},d=void 0,p={unversionedId:"guides/unit-testing-hooks",id:"version-6.1/guides/unit-testing-hooks",title:"Unit testing hooks",description:"Hooks allow you to pull complex behaviors out of your components into succinct,",source:"@site/versioned_docs/version-6.1/guides/unit-testing-hooks.md",sourceDirName:"guides",slug:"/guides/unit-testing-hooks",permalink:"/docs/guides/unit-testing-hooks",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/unit-testing-hooks.md",tags:[],version:"6.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{title:"Unit testing hooks"},sidebar:"version-6.1/docs",previous:{title:"Mocking data for Storybook",permalink:"/docs/guides/storybook"},next:{title:"Unit testing components",permalink:"/docs/guides/unit-testing-components"}},c=[{value:"Polyfill fetch in node",id:"polyfill-fetch-in-node",children:[],level:3},{value:"Example:",id:"example",children:[],level:3}],u={toc:c};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Hooks allow you to pull complex behaviors out of your components into succinct,\ncomposable functions. This makes testing component behavior potentially much\neasier. But how does this work if you want to use hooks from ",(0,a.kt)("inlineCode",{parentName:"p"},"rest-hooks"),"?"),(0,a.kt)("p",null,"We have provided some simple utilities to reduce boilerplate for unit tests\nthat are wrappers around ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/testing-library/react-hooks-testing-library"},"@testing-library/react-hooks"),"'s ",(0,a.kt)("a",{parentName:"p",href:"https://react-hooks-testing-library.com/reference/api#renderhook-options"},"renderHook()"),"."),(0,a.kt)("p",null,"We want a ",(0,a.kt)("a",{parentName:"p",href:"../api/makeRenderRestHook#renderresthook"},"renderRestHook()")," function that renders in the context of both\na ",(0,a.kt)("inlineCode",{parentName:"p"},"Provider")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Suspense")," boundary."),(0,a.kt)("p",null,"To support both providers, you must choose among two provider-generators to\nsend as args to the ",(0,a.kt)("a",{parentName:"p",href:"../api/makeRenderRestHook#renderresthook"},"renderRestHook()")," generator."),(0,a.kt)("p",null,"These will generally be done during test setup. It's important to call cleanup\nupon test completion."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("inlineCode",{parentName:"p"},"renderRestHook()")," creates a Provider context with new manager instances. This means each call\nto ",(0,a.kt)("inlineCode",{parentName:"p"},"renderRestHook()")," will result in a completely fresh cache state as well as manager state."))),(0,a.kt)("h3",{id:"polyfill-fetch-in-node"},"Polyfill fetch in node"),(0,a.kt)("p",null,"Node doesn't come with fetch out of the box, so we need to be sure to polyfill it."),(0,a.kt)(r.Z,{pkgs:"whatwg-fetch",dev:!0,mdxType:"PkgTabs"}),(0,a.kt)(s.Z,{defaultValue:"jest",values:[{label:"jest",value:"jest"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"jest",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // other things\n  setupFiles: ['./testSetup.js'],\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// testSetup.js\nrequire('whatwg-fetch');\n")))),(0,a.kt)("h3",{id:"example"},"Example:"),(0,a.kt)(s.Z,{defaultValue:"CacheProvider",values:[{label:"CacheProvider",value:"CacheProvider"},{label:"ExternalCacheProvider",value:"ExternalCacheProvider"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"CacheProvider",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import nock from 'nock';\nimport { makeRenderRestHook, makeCacheProvider } from '@rest-hooks/test';\n\ndescribe('useResource()', () => {\n  let renderRestHook: ReturnType<typeof makeRenderRestHook>;\n\n  beforeEach(() => {\n    nock(/.*/)\n      .persist()\n      .defaultReplyHeaders({\n        'Access-Control-Allow-Origin': '*',\n        'Content-Type': 'application/json',\n      })\n      .options(/.*/)\n      .reply(200)\n      .get(`/article/0`)\n      .reply(403, {});\n    renderRestHook = makeRenderRestHook(makeCacheProvider);\n  });\n\n  afterEach(() => {\n    nock.cleanAll();\n  });\n\n  it('should throw errors on bad network', async () => {\n    const { result, waitForNextUpdate } = renderRestHook(() => {\n      return useResource(ArticleResource.detail(), {\n        title: '0',\n      });\n    });\n    expect(result.current).toBeUndefined();\n    await waitForNextUpdate();\n    expect(result.error).toBeDefined();\n    expect((result.error as any).status).toBe(403);\n  });\n});\n"))),(0,a.kt)(i.Z,{value:"ExternalCacheProvider",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import nock from 'nock';\nimport { makeRenderRestHook, makeExternalCacheProvider } from '@rest-hooks/test';\n\ndescribe('useResource()', () => {\n  let renderRestHook: ReturnType<typeof makeRenderRestHook>;\n\n  beforeEach(() => {\n    nock(/.*/)\n      .persist()\n      .defaultReplyHeaders({\n        'Access-Control-Allow-Origin': '*',\n        'Content-Type': 'application/json',\n      })\n      .options(/.*/)\n      .reply(200)\n      .get(`/article/0`)\n      .reply(403, {});\n    renderRestHook = makeRenderRestHook(makeExternalCacheProvider);\n  });\n\n  afterEach(() => {\n    nock.cleanAll();\n  });\n\n  it('should throw errors on bad network', async () => {\n    const { result, waitForNextUpdate } = renderRestHook(() => {\n      return useResource(ArticleResource.detail(), {\n        title: '0',\n      });\n    });\n    expect(result.current).toBeUndefined();\n    await waitForNextUpdate();\n    expect(result.error).toBeDefined();\n    expect((result.error as any).status).toBe(403);\n  });\n});\n")))))}k.isMDXComponent=!0}}]);