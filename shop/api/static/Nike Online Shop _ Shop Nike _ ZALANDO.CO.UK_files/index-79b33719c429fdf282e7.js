define(["classnames","react","react-dom","rendering-engine-api","z-shop-event-bus"],(function(e,t,n,r,i){return(self.renderingEngineWebpackJsonp=self.renderingEngineWebpackJsonp||[]).push([[48316],{23171:function(e,t,n){"use strict";n.d(t,{$D:function(){return l},BM:function(){return o},lf:function(){return i}});var r=n(19087);const i=(e,t)=>e===t,l=(e,t)=>{var n;return Boolean((0,r.QY)(e)&&(null==(n=e.children)?void 0:n.some((e=>i(e.collection.id,t)&&!(0,r.QY)(e)))))};function o(e){return!(e&&e.length>=2)}},93035:function(e,t,n){"use strict";var r,i;n.d(t,{h:function(){return r},o:function(){return i}}),function(e){e.BodyMeasurement="BODY_MEASUREMENT",e.SizeOnboarding="SIZE_ONBOARDING"}(r||(r={})),function(e){e.OLD_EXPERIENCE="OLD_EXPERIENCE",e.NEW_EXPERIENCE="NEW_EXPERIENCE"}(i||(i={}))},6866:function(e,t,n){"use strict";function r(e){return"options"in e}function i(e){return"range"in e}function l(e){return!r(e)&&!i(e)}function o(e){return!!e&&("kind"in e&&"group"===e.kind)}n.d(t,{Bj:function(){return o},_E:function(){return l},dk:function(){return r},r5:function(){return i}})},63252:function(e,t,n){"use strict";n.d(t,{A:function(){return c}});var r=n(7882),i=n(16405),l=n(6866),o=n(456);const s=e=>{const t=e.find((e=>e.key===i.xf));if(t&&(0,l.dk)(t))return t},a=e=>{const t=e.find((e=>{let{key:t}=e;return t===i.kW}));if(t&&(0,i.At)(t))return t},u=e=>{const t=e.find((e=>{let{key:t}=e;return t===i.xf}));if(t&&(0,i.At)(t))return t};var c=function(e,t,n,i,l,c){void 0===c&&(c=[r.CT]);let d=[];if(l){const t=e.find((e=>e.key===o.j));var f,m;if(t&&t.options[0])d.push({key:t.key,url_key:t.uriKey,options:[{key:null==(f=t.options[0])?void 0:f.key,url_key:null==(m=t.options[0])?void 0:m.uriKey}]})}else d=e.filter((e=>!c.includes(e.key))).map((e=>{switch(e.__typename){case"CollectionDiscreteFacet":return function(e,t){const n=t&&t.find((t=>t.key===e.key)),r=[],i=[];if(n||e.isSelected){const t=n?e=>n.options.includes(e.key):e=>e.isSelected;e.options.forEach((e=>{t(e)&&(i.push(e),r.push(...e.childKeys))}))}const l=i.filter((e=>!r.includes(e.key))).map((e=>({key:e.key,url_key:e.uriKey})));return 0===l.length?null:{key:e.key,url_key:e.uriKey,options:l}}(e,n.discrete);case"CollectionRangeFacet":return function(e,t){let n;const r=t&&t.find((t=>t.key===e.key));return r?n={minimum:r.minimum,maximum:r.maximum}:e.selectedRange&&(n={minimum:e.selectedRange.minimum,maximum:e.selectedRange.maximum}),!n||"number"!=typeof n.minimum&&"number"!=typeof n.maximum?null:{key:e.key,minimum_url_key:e.minimumUriKey,maximum_url_key:e.maximumUriKey,selectedRange:{minimum:null===n.minimum?void 0:n.minimum,maximum:null===n.maximum?void 0:n.maximum}}}(e,n.range);case"CollectionToggleFacet":return function(e,t){const n=t&&t.find((t=>t.key===e.key));return(n?n.isSelected:e.isSelected)?{key:e.key,url_key:e.uriKey,option:{url_key:"true"}}:null}(e,n.toggle);default:return null}})).filter((e=>null!==e)),i&&function(e,t){const n=s(e),r=u(t),i=a(t),l=(null==r?void 0:r.options.length)===(null==n?void 0:n.options.length);(null==n?void 0:n.options.length)&&l&&!(null==i?void 0:i.options.length)&&t.push({key:"your_brands",url_key:"your_brands",option:{url_key:"true"}})}(e,d);return t&&t.discreteFilters&&function(e,t){t.forEach((t=>{const{key:n,uriKey:r,options:i}=t,l=e.findIndex((e=>e.key===n));if(l>=0&&e[l].options){const t=e[l].options;i.forEach((n=>{t.find((e=>e.key===n.key))||e[l].options.push({key:n.key,url_key:n.uriKey})}))}else e.push({key:n,url_key:r,options:i.map((e=>({key:e.key,url_key:e.uriKey})))})}))}(d,t.discreteFilters),t&&t.rangeFilters&&function(e,t){t.forEach((t=>{const{key:n,maximumUriKey:r,minimumUriKey:i,maximum:l,minimum:o}=t;e.find((e=>e.key===n))||e.push({key:n,minimum_url_key:i,maximum_url_key:r,selectedRange:{minimum:null===o?void 0:o,maximum:null===l?void 0:l}})}))}(d,t.rangeFilters),t&&t.toggleFilters&&function(e,t){t.forEach((t=>{const{key:n,uriKey:r}=t;e.find((e=>e.key===n))||e.push({key:n,url_key:r,option:{url_key:"true"}})}))}(d,t.toggleFilters),d}},16405:function(e,t,n){"use strict";n.d(t,{At:function(){return s},CS:function(){return a},I2:function(){return l},JR:function(){return u},c9:function(){return o},cU:function(){return f},kW:function(){return i},uK:function(){return d},wN:function(){return c},xf:function(){return r}});const r="followed_brands",i="brands",l="prices",o="sustainability_product_standard";function s(e){return"options"in e}function a(e){return"selectedRange"in e}function u(e){return!s(e)&&!a(e)}function c(e){return e===i}function d(e){return e===l}function f(e){return"sustainability_benefits"===e}},79285:function(e,t,n){"use strict";function r(e){return e.filter((e=>{let{isSelected:t}=e;return t})).map((e=>{let{key:t}=e;return t}))}function i(e){return e.options.filter((e=>e.isSelected)).map((e=>e.key))}function l(e,t){return t.filter((t=>e.includes(t.key))).map((e=>({uriKey:e.uriKey,label:e.label})))}n.d(t,{Gy:function(){return r},fF:function(){return i},lb:function(){return l}})},7882:function(e,t,n){"use strict";n.d(t,{q4:function(){return a},CT:function(){return s},$r:function(){return _},XU:function(){return E},Tz:function(){return N},a4:function(){return f},yZ:function(){return y},gR:function(){return k},pJ:function(){return b},dc:function(){return v},nL:function(){return x},TW:function(){return m},t5:function(){return A},Ov:function(){return R}});var r=n(93035),i=n(55916),l=n.n(i);var o=n(6866);const s="your_sizes",a="sizes",u="catalog.size_onboarding_add_size_info_tooltip",c={cookieId:u,minTimespan:864e5,times:2},d={cookieId:"catalog.size_onboarding__size_filter_applied_tooltip",minTimespan:0,times:1},f=e=>{const t=e.find((e=>e.key===s));if(t)return t},m=(e,t)=>{const n=[...e];let r=!1;const i=e.findIndex((e=>y(e)));if(i<=0)return{sizeFacetSortedUp:r,sortedFacets:n};const l=e[i];if((0,o.Bj)(l)){var s;const e=f(l.facets);if((null==e||null==(s=e.onboarding)?void 0:s.contextKey)&&!t.cookies.get(u)){const e=n.splice(i,1)[0];e&&n.splice(0,0,e),r=!0}}return{sizeFacetSortedUp:r,sortedFacets:n}},y=e=>(0,o.Bj)(e)?e.groupKey===a:e.key===a;var g,p,h;const k=e=>({__typename:"CollectionDiscreteFacet",key:a,label:null!=(g=null==e?void 0:e.groupLabel)?g:"",isSelected:!1,groupKey:null!=(p=null==e?void 0:e.groupKey)?p:null,groupLabel:null!=(h=null==e?void 0:e.groupLabel)?h:null,options:[],uriKey:"",description:"",isSelectAllEnabled:!1,selectionType:"single_select"}),_=e=>{const t=e.find((e=>y(e)));if(t)return t},E=e=>(null==e?void 0:e.isSelected)?d:c,v=(e,t)=>{var n,i;return(null==e?void 0:e.isSelected)&&"LEGACY_SINGLE_STEP"===t||(null==e||null==(n=e.onboarding)?void 0:n.contextKey)&&(null==(i=e.onboarding)?void 0:i.kind)!==r.h.BodyMeasurement},b=(e,t)=>{if(!0===t.cookies.get(e.cookieId)){const n={count:1,updated:0};t.cookies.set(e.cookieId,n,Number.MAX_SAFE_INTEGER)}const n=t.cookies.get(e.cookieId);if(!n)return!0;const r=Math.abs(Date.now()-n.updated);return n.count<e.times&&r>e.minTimespan},x=(e,t)=>{var n;return!(!(null==e||null==(n=e.onboarding)?void 0:n.contextKey)||!b(c,t))},N=(e,t,n,r)=>n&&n.isSelected!==r?r?n.label:t.label:e,A=async(e,t)=>{try{const n=await(e=>{let{executeMutation:t,isEnabled:n}=e;return t({...l(),variables:{toggleSizeFilterPreferenceInput:{clientMutationId:"toggle-size-filter-preference",isEnabled:n}}},{loginRequired:!0})})({executeMutation:e.executeMutation,isEnabled:t});if(n.errors&&n.errors.size>0)throw new Error("Failed to toggle your size");return{status:!0}}catch{return(e=>{let{content:t,timeout:r=3e3,preset:i="initial"}=e;Promise.all([n.e(29674),n.e(16791)]).then(n.bind(n,12764)).then((e=>{e.showNotification({content:t,timeout:r,preset:i})}))})({content:__("filter.description.yoursizes.error.message"),preset:"error"}),{status:!1}}},R=e=>{let{tools:t,isEnabled:n,sizeFilterPreferencesEnabled:r}=e;return r?Promise.resolve({status:!0}):A(t,n)}},456:function(e,t,n){"use strict";n.d(t,{j:function(){return r}});const r="top_choices"},31193:function(e,t,n){"use strict";n.d(t,{b:function(){return i}});var r=n(85959);function i(e,t){let{isPaginationRequest:n}=t;const[i,l]=(0,r.useState)(e);return(0,r.useEffect)((()=>{n||i===e||l(e)}),[e,n]),i}},51091:function(e,t,n){"use strict";n.d(t,{Dq:function(){return s},Zh:function(){return a},_H:function(){return o}});var r=n(32740),i=n(63252);const l=e=>{const t=e.find((e=>"sizes"===e.key)),n=[];return null!=t&&n.push([t.key,__("seo.url.parameter.size")]),new Map(n)},o=(e,t)=>!1===t?void 0:e,s=()=>__("link.catalog"),a=e=>{let{fullTextQuery:t,entityId:n,changedFilters:s={},page:a,data:u,sortType:c,shouldResetFilters:d,shouldPreserveSearchContext:f}=e;const m=(0,i.A)(u.facets,u.hiddenFilters,s,!1,!!d),y=a||u.page;let g=[],p=[];for(const e of m)"options"in e&&("sizes"===e.key&&(g=e.options.map((e=>{let{key:t}=e;return t}))),"lengths"===e.key&&(p=e.options.map((e=>{let{key:t}=e;return t}))));return 1===g.length&&1===p.length&&(isNaN(Number(g[0]))||isNaN(Number(p[0]))||(g=[g[0]+"x"+p[0]])),[{[r.ENTITY_TYPE]:"collection",id:n||u.entityId,page:null!==y?String(y):void 0,filters:m,rootCategory:u.rootCategory,fullTextQuery:t||u.fullTextQuery,searchContext:o(u.searchContext,f)},{sort:c||u.sort,sizes:g},l(m)]}},14926:function(){window.__RENDERING_ENGINE_TRANSLATION_KEYS__={...window.__RENDERING_ENGINE_TRANSLATION_KEYS__,"collection_catalog-headline":["seo.url.parameter.size","link.catalog","search.reset.searchterm","catalog.search.strike.results","catalog.search.strike.resultsfound","catalog.search.checkSearchPlaceholder","catalog.headline.category.in"]}},39144:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var r=n(85959),i=n(32740),l=n(78692),o=n(38979),s=n(30812),a=n(22591),u=n(38856),c=n(75839),d=n(9049),f=n(36124),m=n(3906),y=n(54987),g=n(96545),p=n(2673),h=n(52130),k=n(5073),_=n(10170),E=n(89862),v=n(67915);const b=e=>{const t="remove search";e.track({name:E.bD,context:{customCategory:"catalog",customLabel:t}});const n={name:"select_content",context:{legacy_event_name:E.bD,event_trigger_name:(0,v.L0)("",t)}};e.trackStandalone(n)};var x=n(79285),N=n(6866);const A=e=>{let{locale:t,start:n}=e;return r.createElement(p.Ay,{tag:h.Wh.span,font:h.KQ.serif,preset:h.nx.h1},a(n?"‘":"’",{locale:t}))};function R(e){let t,{facets:n,currentCategory:i,seoHeadline:l,title:o,locale:a,fullTextQuery:E,isRootCategory:v,catalogResultKind:R,linkTo:S,isMobile:K,tracking:T,showNonBoldNoResultsText:F}=e;const I=["brand","partner"],C=["brands","colors","sizes","upper_materials"],z=n.filter((e=>C.includes(e.key)&&e.isSelected)).length,P=e=>(void 0===e&&(e=""),r.createElement("div",{className:s(u.pJ,k.OL,u.JQ)},r.createElement(p.Ay,{preset:h.nx.h1,className:s(_.oJi)},r.createElement("span",null,r.createElement(A,{start:!0,locale:a}),E,r.createElement(A,{locale:a}),e)),r.createElement(m.A,{onClick:()=>b(T),"aria-label":__("search.reset.searchterm"),href:S&&S(i),label:__("search.reset.searchterm"),className:k.OL},r.createElement(f.A,{src:d.A,"aria-hidden":"true",fontSize:"custom",color:h.r7.primary,style:{fontSize:"19px"}})))),D=(e,t)=>{const n=null==e?void 0:e.find((e=>"brand"===(null==e?void 0:e.key)));let i={uriKey:"",label:""};if(n){const e=t.find((e=>"followed_brands"===e.key));if(e&&(0,N.dk)(e)){const t=(0,x.fF)(e),r=(0,x.lb)(t,e.options).find((e=>e.label===n.value));i=null!=r?r:i}const l=t.find((e=>"brands"===e.key));if(!i.uriKey&&l&&(0,N.dk)(l)){const e=(0,x.fF)(l),t=(0,x.lb)(e,l.options);t[0]&&(i=t[0])}return r.createElement("div",{className:c.nME},r.createElement(y.A,{href:"/"+i.uriKey+"/",size:g.s.large,title:i.label},r.createElement(p.Ay,{preset:h.nx.h1,tag:h.Wh.span,font:h.KQ.serif},n.value+" ")))}return null},M=e=>{const t=null==e?void 0:e.find((e=>"partner"===(null==e?void 0:e.key)));return t?r.createElement("div",{className:c.nME},r.createElement(p.Ay,{preset:h.nx.h1,tag:h.Wh.span,font:h.KQ.serif},t.value+" ")):null},w=(e,t,n)=>{const l=e.find((e=>"search_terms"===(null==e?void 0:e.key)));return null==e?void 0:e.filter((e=>!I.includes((null==e?void 0:e.key)||""))).map(((e,o)=>"category"!==(null==e?void 0:e.key)&&"translation_catalog"!==(null==e?void 0:e.key)||n?"search_terms"===(null==e?void 0:e.key)||"category"===(null==e?void 0:e.key)&&n&&!l?r.createElement(r.Fragment,null,r.createElement(p.Ay,{preset:h.nx.h1,key:"seo-headline-"+o,tag:h.Wh.span,className:s(_.oJi)},r.createElement(A,{start:!0,locale:a}),""+e.value,r.createElement(A,{locale:a})," "),0===t?r.createElement(r.Fragment,null,r.createElement(m.A,{href:S&&S(i),"aria-label":__("search.reset.searchterm"),onClick:()=>b(T),className:s(_.oJi,k.OL),label:__("search.reset.searchterm")},r.createElement(f.A,{src:d.A,fontSize:"custom","aria-hidden":"true",color:h.r7.primary,style:{fontSize:"19px"}}))," "):null):"category"!==(null==e?void 0:e.key)&&"translation_in"!==(null==e?void 0:e.key)||!n?r.createElement(p.Ay,{preset:h.nx.h1,key:"seo-headline-"+o,className:s(k.YW,k.Nf,_.oJi),tag:h.Wh.span,font:h.KQ.serif},(null==e?void 0:e.value)+" "):!v&&K?r.createElement(p.Ay,{preset:h.nx.h1,key:"seo-headline-"+o,className:s(k.FN,_.oJi),tag:h.Wh.span,font:h.KQ.serif},(null==e?void 0:e.value)+" "):null:r.createElement(p.Ay,{preset:h.nx.h1,key:"seo-headline-"+o,tag:h.Wh.span,className:s(_.oJi)},e.value+" ")))};switch(R){case"STRIKE_SEARCH":t=r.createElement(r.Fragment,null,r.createElement(p.Ay,{preset:h.nx.h1},r.createElement("span",null,__("catalog.search.strike.results"),r.createElement(A,{start:!0,locale:a}),E,r.createElement(A,{locale:a}))),r.createElement("div",{className:_.aUF},r.createElement(p.Ay,{preset:h.nx.h2,font:h.KQ.serif},__("catalog.search.strike.resultsfound"))));break;case"NO_HITS":t=(null==n?void 0:n.length)?P():r.createElement(r.Fragment,null,r.createElement(p.Ay,{preset:h.nx.h1},r.createElement("span",null,__("catalog.search.strike.results"),r.createElement(A,{start:!0,locale:a}),E,r.createElement(A,{locale:a}))),r.createElement("div",{className:_.E0r},r.createElement(p.Ay,{preset:F?h.nx.bodyLarge:h.nx.bodyLargeBold,font:h.KQ.serif},__("catalog.search.checkSearchPlaceholder"))));break;default:if(E)if(l&&l.length>0)t=r.createElement("div",{className:c.nzo},r.createElement(p.Ay,{tag:h.Wh.h1,preset:h.nx.h1},M(l),D(l,n),r.createElement("div",{className:c.nME},w(l,z,E))));else{t=P(!v&&K?" "+__("catalog.headline.category.in")+" "+o:"")}else t=l&&l.length>0?r.createElement("div",{className:c.nzo},r.createElement(p.Ay,{tag:h.Wh.h1,preset:h.nx.h1},M(l),D(l,n),r.createElement("div",{className:c.nME},w(l,z)))):r.createElement(p.Ay,{preset:h.nx.h1},o)}return t}var S=n(51091),K=n(19087),T=n(23171),F=n(31193),I=n(11506);const C={};var z=(0,i.tile)().withQueries((e=>{const t=e.context.TEMPORARY_DPS_HACK_CATALOG_QUERY_VARIABLES||{},n=(0,K.FF)(t,e);return{collection:{query:n.isDPSGridEnabled?o:l,variables:n}}})).withTracking((e=>({def:C,context:{id:e.entity.id},useData:()=>({source:"collection",trackingData:{context:{entity_id:e.entity.id}}})}))).withProcessDependencies(((e,t)=>{let{ruleData:n,context:r}=t;var i,l,o,s,a,u;const c=e.collection.collection;var d;const f=null!=(d=null==c||null==(i=c.entities)?void 0:i.facets)?d:[];var m;const y=null!=(m=null==c||null==(l=c.entities)?void 0:l.hiddenFilters)?m:null,g=null==c||null==(o=c.entities)?void 0:o.orderedBy;var p;const h=null!=(p=null==c?void 0:c.title)?p:"",k=null==c||null==(s=c.entities)?void 0:s.categoryPath,_=(0,K.Lz)(null==c||null==(a=c.entities)?void 0:a.catalogResultKind);var E;const v=null!=(E=null==c||null==(u=c.seo)?void 0:u.headline)?E:[],b=r.experience;return{action:"render",data:{facets:f,hiddenFilters:y,sort:g,collectionTitle:h,categoryPath:k,catalogResultKind:_,seoHeadline:v,isDesigner:(0,I.q)(b).experienceName.isDesigner()},ruleData:n}})).withRender((e=>{var t,n;const{data:i,tools:l,entity:o,context:s}=e,a=Boolean(null==(t=s.TEMPORARY_DPS_HACK_CATALOG_QUERY_VARIABLES)?void 0:t.isPaginationRequest),u=(0,F.b)(i.facets,{isPaginationRequest:a}),c=(0,F.b)(i.hiddenFilters,{isPaginationRequest:a}),d=(0,F.b)(i.categoryPath,{isPaginationRequest:a}),f=(0,T.BM)(d),m=(0,F.b)(i.seoHeadline,{isPaginationRequest:a}),y=null==(n=s.TEMPORARY_DPS_HACK_CATALOG_QUERY_VARIABLES)?void 0:n.filters,g=null==y?void 0:y.fullTextQuery;return r.createElement("div",{"data-module":"true"},r.createElement(R,{facets:u,currentCategory:o.id,seoHeadline:m,title:i.collectionTitle,locale:s.locale,fullTextQuery:g,isRootCategory:f,catalogResultKind:i.catalogResultKind,linkTo:e=>l.navigation.linkTo(...(0,S.Zh)({entityId:e,page:1,data:{entityId:o.id,facets:u,hiddenFilters:c,page:1,rootCategory:(0,S.Dq)(),fullTextQuery:void 0,searchContext:null==y?void 0:y.searchContext,sort:i.sort}})),isMobile:s.deviceInfo.isMobile,tracking:l.tracking,showNonBoldNoResultsText:i.isDesigner}))}))},97117:function(e){e.exports={af:"“”‘’",sq:"„“‘’",az:"«»‹›",eu:"«»‹›",be:"«»“”",bg:"„“’’",ca:"«»“”","zh-Hans":"“”‘’",hr:"„”‘’",cs:"„“‚‘",da:"»«›‹",nl:"‘’“”","en-uk":"‘’“”","en-us":"“”‘’",eo:"“”‘’",et:"„“«»",fil:"“”‘’",fi:"””’’",fr:"«»“”","fr-sw":"«»‹›",ka:"„““”",de:"„“‚‘","de-sw":"«»‹›",el:"«»“”",he:"\"\"''",hu:"„”»«",is:"„“‚‘",id:"“”‘’",ga:"“”‘’",it:"«»“”","it-sw":"«»‹›",ko:"“”‘’",lv:"«»„“",mk:"„“’‘",no:"«»’’",pl:"„”«»","pt-br":"“”‘’","pt-pl":"«»“”",ro:"„”«»",ru:"«»„“",sr:"„”’’",sk:"„“‚‘",sl:"„“‚‘",es:"«»“”",sv:"””’’",th:"“”‘’",tr:"“”‘’",uk:"«»„“",cy:"‘’“”"}},22591:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=t.locale;if(-1===Object.keys(l.default).indexOf(n))return e;var r=l.default[n],i="",o=/(^|\s)(?:"(.*?)"|'(.*?)')(\s|$|\.|,|\?|!)/gim,s=function(e,t){return function(r){var l=arguments.length<=1||void 0===arguments[1]?"":arguments[1],s=arguments.length<=2||void 0===arguments[2]?"":arguments[2],a=arguments.length<=3||void 0===arguments[3]?"":arguments[3],u=arguments.length<=4||void 0===arguments[4]?"":arguments[4],c=s+a;return t&&(c=c.replace(o,t)),"fr"===n&&(i=" "),""+l+e[0]+i+c+i+e[1]+u}};return e.replace(o,s(r.slice(0,2),s(r.slice(2,4))))};var r,i=n(97117),l=(r=i)&&r.__esModule?r:{default:r};e.exports=t.default},55916:function(e){e.exports={id:"72abb6def0330cfd96c1b8992133f964cf1618d72bd70a19501188f7445811d7"}},30812:function(t){"use strict";t.exports=e},85959:function(e){"use strict";e.exports=t},48398:function(e){"use strict";e.exports=n},32740:function(e){"use strict";e.exports=r},21775:function(e){"use strict";e.exports=i}},function(e){var t=function(t){return e(e.s=t)};return e.O(0,[29674],(function(){return t(14926),t(39144)})),e.O()}])}));
//# sourceMappingURL=https://zalando.de/dev/source-maps/collection_catalog-headline/index-d5129cee399ead3c9e01.map