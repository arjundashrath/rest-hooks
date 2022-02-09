"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[33067],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=l(n),m=r,h=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},37849:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>o,toc:()=>u,default:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Custom endpoints",id:"endpoints",original_id:"endpoints"},s=void 0,o={unversionedId:"guides/endpoints",id:"version-2.2/guides/endpoints",title:"Custom endpoints",description:"Previously we saw how we could use",source:"@site/versioned_docs/version-2.2/guides/endpoints.md",sourceDirName:"guides",slug:"/guides/endpoints",permalink:"/docs/2.2/guides/endpoints",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/endpoints.md",tags:[],version:"2.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"Custom endpoints",id:"endpoints",original_id:"endpoints"},sidebar:"version-2.2/docs",previous:{title:"URL Patterns",permalink:"/docs/2.2/guides/url"},next:{title:"Pagination",permalink:"/docs/2.2/guides/pagination"}},u=[{value:"Overriding endpoints",id:"overriding-endpoints",children:[{value:"Default schema",id:"default-schema",children:[],level:3},{value:"Example schema",id:"example-schema",children:[],level:3},{value:"Resource definition",id:"resource-definition",children:[],level:3}],level:2},{value:"Additional endpoints",id:"additional-endpoints",children:[{value:"RPC",id:"rpc",children:[],level:3},{value:"Custom GET",id:"custom-get",children:[{value:"Usage",id:"usage",children:[],level:4}],level:3}],level:2}],l={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../getting-started/usage#use-resource-docs-api-useresource"},"Previously we saw how we could use"),"\nthe ",(0,r.kt)("a",{parentName:"p",href:"../api/useResource"},"useResource()")," and ",(0,r.kt)("a",{parentName:"p",href:"../api/useFetcher"},"useFetcher()")," hooks to read and mutate\ndata. The first argument of these hooks is known as a ",(0,r.kt)("a",{parentName:"p",href:"../api/FetchShape"},"FetchShape"),".\nFetchShapes are the minimal definition of instructions needed to tell Rest Hooks how to handle\nthose types of requests."),(0,r.kt)("p",null,"Resource comes with a ",(0,r.kt)("a",{parentName:"p",href:"../api/resource#fetch-shapes-docs-next-api-fetchshape"},"small handleful FetchShapes"),"\nfor each of the typical ",(0,r.kt)("a",{parentName:"p",href:"https://restfulapi.net/http-methods/"},"CRUD operations"),". This is often not enough."),(0,r.kt)("h2",{id:"overriding-endpoints"},"Overriding endpoints"),(0,r.kt)("p",null,"By default the listShape() assumes an array of entities returned while detailShape() assumes\njust the entity returned."),(0,r.kt)("h3",{id:"default-schema"},"Default schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "postId": 1,\n  "id": 1,\n  "name": "id labore ex et quam laborum",\n  "email": "Eliseo@gardner.biz",\n  "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\\ntempora quo necessitatibus\\ndolor quam autem quasi\\nreiciendis et nam sapiente accusantium"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /comments/1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "postId": 1,\n    "id": 1,\n    "name": "id labore ex et quam laborum",\n    "email": "Eliseo@gardner.biz",\n    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\\ntempora quo necessitatibus\\ndolor quam autem quasi\\nreiciendis et nam sapiente accusantium"\n  },\n  {\n    "postId": 1,\n    "id": 2,\n    "name": "quo vero reiciendis velit similique earum",\n    "email": "Jayne_Kuhic@sydney.com",\n    "body": "est natus enim nihil est dolore omnis voluptatem numquam\\net omnis occaecati quod ullam at\\nvoluptatem error expedita pariatur\\nnihil sint nostrum voluptatem reiciendis et"\n  },\n  {\n    "postId": 1,\n    "id": 3,\n    "name": "odio adipisci rerum aut animi",\n    "email": "Nikita@garfield.biz",\n    "body": "quia molestiae reprehenderit quasi aspernatur\\naut expedita occaecati aliquam eveniet laudantium\\nomnis quibusdam delectus saepe quia accusamus maiores nam est\\ncum et ducimus et vero voluptates excepturi deleniti ratione"\n  }\n]\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /comments")),(0,r.kt)("h3",{id:"example-schema"},"Example schema"),(0,r.kt)("p",null,"However, often the data is not returned quite so simply. For instance, maybe it can be found in a 'data'\nkey of an object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "postId": 1,\n    "id": 1,\n    "name": "id labore ex et quam laborum",\n    "email": "Eliseo@gardner.biz",\n    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\\ntempora quo necessitatibus\\ndolor quam autem quasi\\nreiciendis et nam sapiente accusantium"\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /comments/1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "postId": 1,\n      "id": 1,\n      "name": "id labore ex et quam laborum",\n      "email": "Eliseo@gardner.biz",\n      "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\\ntempora quo necessitatibus\\ndolor quam autem quasi\\nreiciendis et nam sapiente accusantium"\n    },\n    {\n      "postId": 1,\n      "id": 2,\n      "name": "quo vero reiciendis velit similique earum",\n      "email": "Jayne_Kuhic@sydney.com",\n      "body": "est natus enim nihil est dolore omnis voluptatem numquam\\net omnis occaecati quod ullam at\\nvoluptatem error expedita pariatur\\nnihil sint nostrum voluptatem reiciendis et"\n    },\n    {\n      "postId": 1,\n      "id": 3,\n      "name": "odio adipisci rerum aut animi",\n      "email": "Nikita@garfield.biz",\n      "body": "quia molestiae reprehenderit quasi aspernatur\\naut expedita occaecati aliquam eveniet laudantium\\nomnis quibusdam delectus saepe quia accusamus maiores nam est\\ncum et ducimus et vero voluptates excepturi deleniti ratione"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /comments")),(0,r.kt)("h3",{id:"resource-definition"},"Resource definition"),(0,r.kt)("p",null,"In this case, you'll need to override your detailShape() and listShape() definitions to reflect\nthe structure of your data. This is known as a 'schema' definition."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  Resource,\n  ReadShape,\n  SchemaDetail,\n  SchemaList,\n  AbstractInstanceType,\n} from 'rest-hooks';\n\nexport default class CommentResource extends Resource {\n  static detailShape<T extends typeof Resource>(\n    this: T,\n  ): ReadShape<SchemaDetail<AbstractInstanceType<T>>> {\n    return {\n      ...super.detailShape(),\n      schema: { data: this.getEntitySchema() },\n    };\n  }\n  static listShape<T extends typeof Resource>(\n    this: T,\n  ): ReadShape<SchemaList<AbstractInstanceType<T>>> {\n    return {\n      ...super.listShape(),\n      schema: { data: [this.getEntitySchema()] },\n    };\n  }\n}\n")),(0,r.kt)("p",null,"Here we only overrode the 'schema' part of the ",(0,r.kt)("a",{parentName:"p",href:"../api/FetchShape"},"FetchShape")," - taking advantage\nof ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super"},"super")," to keep\nthe other pieces the same. See ",(0,r.kt)("a",{parentName:"p",href:"./pagination"},"pagination"),", ",(0,r.kt)("a",{parentName:"p",href:"./nested-response"},"nested resources"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"./rpc"},"mutation side-effects")," guide for more examples of custom schemas and overriding\nendpoints."),(0,r.kt)("h2",{id:"additional-endpoints"},"Additional endpoints"),(0,r.kt)("p",null,"In many cases there are more means of interacting with a given resource than the basic CRUD\noperations. Often this means a custom RPC call, or even a custom retrieval endpoint. We'll demonstrate\na few examples here, but be sure to learn more about ",(0,r.kt)("a",{parentName:"p",href:"../api/FetchShape"},"FetchShape"),"s to\ndefine exactly what your endpoint needs."),(0,r.kt)("h3",{id:"rpc"},"RPC"),(0,r.kt)("p",null,"In this example, we have an RPC endpoint located at ",(0,r.kt)("inlineCode",{parentName:"p"},"/users/[id]/make_manager"),". This endpoint\ndoesn't expect any body, but is a POST request. Because it is so similar to a ",(0,r.kt)("a",{parentName:"p",href:"../api/resource#createshape-mutateshape"},"createShape()"),"\nwe'll be extended that schema definition."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  Resource,\n  MutateShape,\n  SchemaDetail,\n  AbstractInstanceType,\n} from 'rest-hooks';\n\nexport default class UserResource extends Resource {\n  static makeManagerShape<T extends typeof Resource>(\n    this: T,\n  ): MutateShape<SchemaDetail<AbstractInstanceType<T>>, { id: number }, {}> {\n    return {\n      ...this.createShape(),\n      getFetchKey: ({ id }: { id: number }) => {\n        return `/users/${id}/make_manager`;\n      },\n      fetch: ({ id }: { id: number }, body?: Readonly<object | string>) => {\n        return this.fetch('post', `/users/${id}/make_manager`, body);\n      },\n    };\n  }\n}\n")),(0,r.kt)("p",null,"We customized the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Custom type:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Params of { id: number }"),(0,r.kt)("li",{parentName:"ul"},"Body (payload) of {}"))),(0,r.kt)("li",{parentName:"ul"},"Custom url")),(0,r.kt)("h3",{id:"custom-get"},"Custom GET"),(0,r.kt)("p",null,"Normally we can look up user resources like any other - with their 'id'. However,\nhow do we get the currently logged in user? One way is to define a special url\njust for retrieving the current user. In this case - ",(0,r.kt)("inlineCode",{parentName:"p"},"/current_user/"),". Since there\nis only one - we won't need to send any params."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  Resource,\n  ReadShape,\n  SchemaDetail,\n  AbstractInstanceType,\n} from 'rest-hooks';\n\nexport default class UserResource extends Resource {\n  /** Retrieves current logged in user */\n  static currentShape<T extends typeof Resource>(\n    this: T,\n  ): ReadShape<SchemaDetail<AbstractInstanceType<T>>, {}> {\n    return {\n      ...this.detailShape(),\n      getFetchKey: () => {\n        return '/current_user/';\n      },\n      fetch: (params: {}, body?: Readonly<object | string>) => {\n        return this.fetch('post', `/current_user/`, body);\n      },\n    };\n  }\n}\n")),(0,r.kt)("p",null,"We customized the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Custom type:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Params of {}"))),(0,r.kt)("li",{parentName:"ul"},"Custom url")),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useResource } from 'rest-hooks';\n\nimport UserResource from 'resources/user';\n\nexport default function CurrentUserProfilePage() {\n  const loggedInUser = useResource(UserResource.currentShape(), {});\n\n  return <ProfileDetail user={loggedInUser} />\n}\n")))}p.isMDXComponent=!0}}]);