"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[97424],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,y=u["".concat(o,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(y,i(i({ref:t},p),{},{components:n})):a.createElement(y,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);const r=function(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(87462),r=n(67294),l=n(72389),i=n(75773),s=n(86010);const o="tabItem_LplD";function c(e){var t,n;const{lazy:l,block:c,defaultValue:p,values:d,groupId:u,className:m}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,i.lx)(f,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===p?p:p??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=y[0])?void 0:n.props.value);if(null!==g&&!f.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:v}=(0,i.UB)(),[k,T]=(0,r.useState)(g),S=[],{blockElementScrollPositionUntilNextRender:N}=(0,i.o5)();if(null!=u){const e=b[u];null!=e&&e!==k&&f.some((t=>t.value===e))&&T(e)}const x=e=>{const t=e.currentTarget,n=S.indexOf(t),a=f[n].value;a!==k&&(N(t),T(a),null!=u&&v(u,a))},w=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=S.indexOf(e.currentTarget)+1;n=S[t]||S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;n=S[t]||S[S.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},m)},f.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>S.push(e),onKeyDown:w,onFocus:x,onClick:x},l,{className:(0,s.Z)("tabs__item",o,null==l?void 0:l.className,{"tabs__item--active":k===t})}),n??t)}))),l?(0,r.cloneElement)(y.filter((e=>e.props.value===k))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function p(e){const t=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},70523:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(9877),r=n(58215),l=n(67294);function i(e){let{children:t}=e;return l.createElement(a.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},l.createElement(r.Z,{value:"ts"},t[0]),l.createElement(r.Z,{value:"js"},t[1]))}},23823:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>o,toc:()=>c,default:()=>d});var a=n(87462),r=(n(67294),n(3905)),l=n(70523);const i={title:"SimpleRecord"},s=void 0,o={unversionedId:"api/SimpleRecord",id:"version-5.0/api/SimpleRecord",title:"SimpleRecord",description:"SimpleRecord provides a simple immutable interface to store values that have",source:"@site/versioned_docs/version-5.0/api/SimpleRecord.md",sourceDirName:"api",slug:"/api/SimpleRecord",permalink:"/docs/5.0/api/SimpleRecord",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/SimpleRecord.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"SimpleRecord"},sidebar:"version-5.0/docs",previous:{title:"Entity",permalink:"/docs/5.0/api/Entity"},next:{title:"Object",permalink:"/docs/5.0/api/Object"}},c=[{value:"Factory method",id:"factory-method",children:[{value:"static fromJS&lt;T extends typeof SimpleRecord&gt;(this: T, props: Partial&lt;AbstractInstanceType&lt;T&gt;&gt;): AbstractInstanceType&lt;T&gt;",id:"static-fromjst-extends-typeof-simplerecordthis-t-props-partialabstractinstancetypet-abstractinstancetypet",children:[],level:3}],level:2},{value:"Data methods",id:"data-methods",children:[{value:"static merge&lt;T extends typeof SimpleRecord&gt;(first: InstanceType&lt;T&gt;, second: InstanceType&lt;T&gt;) =&gt; InstanceType&lt;T&gt;",id:"static-merget-extends-typeof-simplerecordfirst-instancetypet-second-instancetypet--instancetypet",children:[],level:3},{value:"static hasDefined&lt;T extends typeof SimpleRecord&gt;(instance: InstanceType&lt;T&gt;, key: keyof InstanceType&lt;T&gt;) =&gt; boolean",id:"static-hasdefinedt-extends-typeof-simplerecordinstance-instancetypet-key-keyof-instancetypet--boolean",children:[],level:3},{value:"static toObjectDefined&lt;T extends typeof SimpleRecord&gt;(instance: AbstractInstanceType&lt;T&gt;) =&gt; Partial&lt;InstanceType&lt;T&gt;&gt;",id:"static-toobjectdefinedt-extends-typeof-simplerecordinstance-abstractinstancetypet--partialinstancetypet",children:[],level:3},{value:"static keysDefined&lt;T extends typeof SimpleRecord&gt;(instance: InstanceType&lt;T&gt;) =&gt; (keyof InstanceType&lt;T&gt;)[]",id:"static-keysdefinedt-extends-typeof-simplerecordinstance-instancetypet--keyof-instancetypet",children:[],level:3},{value:"static schema: { k: keyof this: Schema }",id:"static-schema--k-keyof-this-schema-",children:[{value:"Optional members",id:"optional-members",children:[],level:4}],level:3}],level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SimpleRecord")," provides a simple immutable interface to store values that have\ndefaults. When constructed it distinguishes between actually set values and ones\nonly provided by defaults. This is useful to produce accurate merging algorithms\nwhen dealing with partial data definitions."),(0,r.kt)(l.Z,{mdxType:"LanguageTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SimpleRecord } from 'rest-hooks';\n\nexport default class Article extends SimpleRecord {\n  readonly id: number | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly tags: string[] = [];\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { SimpleRecord } from 'rest-hooks';\n\nexport default class Article extends SimpleRecord {\n  id = undefined;\n  title = '';\n  content = '';\n  author = null;\n  tags = [];\n}\n"))),(0,r.kt)("h2",{id:"factory-method"},"Factory method"),(0,r.kt)("h3",{id:"static-fromjst-extends-typeof-simplerecordthis-t-props-partialabstractinstancetypet-abstractinstancetypet"},"static fromJS\\<T extends typeof SimpleRecord",">","(this: T, props: Partial\\<AbstractInstanceType\\<T",">",">","): AbstractInstanceType\\<T",">"),(0,r.kt)("p",null,"This is used to create instances of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource")," you defined. Will copy over props provided to\nthe instance in construction, among other things. ",(0,r.kt)("em",{parentName:"p"},"Be sure to always call ",(0,r.kt)("inlineCode",{parentName:"em"},"super.fromJS()")," when\noverriding.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const articleA = Article.fromJS({\n  title: 'The best library',\n  tags: ['Immutable'],\n});\nconst articleB = Article.fromJS({\n  content: 'A long droning paragraph',\n  tags: ['React', 'TypeScript'],\n});\n")),(0,r.kt)("h2",{id:"data-methods"},"Data methods"),(0,r.kt)("h3",{id:"static-merget-extends-typeof-simplerecordfirst-instancetypet-second-instancetypet--instancetypet"},"static merge\\<T extends typeof SimpleRecord",">","(first: InstanceType\\<T",">",", second: InstanceType\\<T",">",") => InstanceType\\<T",">"),(0,r.kt)("p",null,"Takes only the defined (non-default) values of first and second and creates a new instance copying them over.\nSecond will override values of first. Merge is shallow, so you'll need to override this to do any deep merges."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const mergedArticle = Article.merge(articleA, articleB);\nconsole.log(mergedArticle);\n/*\n{\n  id: undefined,\n  title: 'The best library',\n  content: 'A long droning paragraph',\n  author: null,\n  tags: ['React', 'TypeScript'],\n}\n*/\n")),(0,r.kt)("h3",{id:"static-hasdefinedt-extends-typeof-simplerecordinstance-instancetypet-key-keyof-instancetypet--boolean"},"static hasDefined\\<T extends typeof SimpleRecord",">","(instance: InstanceType\\<T",">",", key: keyof InstanceType\\<T",">",") => boolean"),(0,r.kt)("p",null,"Returns whether provided ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," is defined (non-default) in ",(0,r.kt)("inlineCode",{parentName:"p"},"instance"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"console.log(articleA.hasDefined('title'));\n/* true */\nconsole.log(articleA.hasDefined('content'));\n/* false */\n")),(0,r.kt)("h3",{id:"static-toobjectdefinedt-extends-typeof-simplerecordinstance-abstractinstancetypet--partialinstancetypet"},"static toObjectDefined\\<T extends typeof SimpleRecord",">","(instance: AbstractInstanceType\\<T",">",") => Partial\\<InstanceType\\<T",">",">"),(0,r.kt)("p",null,"Returns an ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")," with only the defined (non-default) members of ",(0,r.kt)("inlineCode",{parentName:"p"},"instance"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"console.log(mergedArticle.toObjectDefined());\n/*\n{\n  title: 'The best library',\n  content: 'A long droning paragraph',\n  tags: ['React', 'TypeScript'],\n}\n*/\n")),(0,r.kt)("h3",{id:"static-keysdefinedt-extends-typeof-simplerecordinstance-instancetypet--keyof-instancetypet"},"static keysDefined\\<T extends typeof SimpleRecord",">","(instance: InstanceType\\<T",">",") => (keyof InstanceType\\<T",">",")[]"),(0,r.kt)("p",null,"Returns an ",(0,r.kt)("inlineCode",{parentName:"p"},"Array")," of all defined (non-default) keys of ",(0,r.kt)("inlineCode",{parentName:"p"},"instance"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"console.log(mergedArticle.keysDefined());\n/* ['title', 'content', 'tags'] */\n")),(0,r.kt)("h3",{id:"static-schema--k-keyof-this-schema-"},"static schema: { ","[k: keyof this]",": Schema }"),(0,r.kt)("p",null,"Set this to ",(0,r.kt)("a",{parentName:"p",href:"../guides/nested-response"},"define entities nested")," inside this one."),(0,r.kt)("p",null,"Additionally can be used to ",(0,r.kt)("a",{parentName:"p",href:"../guides/network-transform#deserializing-fields"},"declare field deserialization")),(0,r.kt)("h4",{id:"optional-members"},"Optional members"),(0,r.kt)("p",null,"Entities references here whose default values in the Record definition itself are\nconsidered 'optional'"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class UserResponse extends SimpleRecord {\n  readonly data: User | null = null; // this field is optional\n  readonly lastUpdated: Date = new Date(0);\n\n  static schema = {\n    data: User,\n    lastUpdated: Date,\n  }\n}\n")))}d.isMDXComponent=!0}}]);