define(["classnames","react","rendering-engine-api","z-shop-event-bus"],(function(e,t,n,r){return(self.renderingEngineWebpackJsonp=self.renderingEngineWebpackJsonp||[]).push([[96568],{13081:function(e,t,n){"use strict";n.d(t,{Ib:function(){return u},Ks:function(){return s},S3:function(){return l},Vz:function(){return i},fY:function(){return r},iw:function(){return c},mO:function(){return _},oj:function(){return o},tC:function(){return a}});const r="CATEGORY_TREE$CATEGORY_CLICKED",o="UPDATE_VIEW",c="ENTITY$SIZE_FILTER_OPENED",a="ENTITY$OPEN_ONBOARDING_DIALOG",i="ENTITY$TOGGLE_MOBILE_FILTERS",l="ENTITY$COMPLETED_BODY_MEASUREMENT_DIALOG",u="ENTITY$COMPLETED_ADD_REFERENCE_ITEM_DIALOG",s="ENTITY$EVENT_LOADING_IN_PROGRESS";var _;!function(e){e.updateAnyFilter="updateAnyFilter",e.updateDiscreteFilter="updateDiscreteFilter",e.updateRangeFilter="updateRangeFilter",e.updateToggleFilter="updateToggleFilter",e.updateSorting="updateSorting",e.updateClearAll="updateClearAll",e.updatePage="updatePage"}(_||(_={}))},82794:function(e,t,n){"use strict";n.d(t,{Az:function(){return p},Cv:function(){return _},JN:function(){return o.JN},Mp:function(){return g},Qx:function(){return A},SK:function(){return E},Uw:function(){return u},XN:function(){return S},YR:function(){return v},cM:function(){return x},dt:function(){return o.dt},eU:function(){return b},ei:function(){return l},em:function(){return T},iX:function(){return m},jF:function(){return D},jO:function(){return s},mL:function(){return f},op:function(){return d},ow:function(){return y},rz:function(){return N},vZ:function(){return k},wg:function(){return R}});var r=n(89862),o=n(67915),c=n(9266),a=n(49213),i=n(95724);const l=(e,t,n,c,a)=>{e.track({name:r.bD,context:{customCategory:"catalog",customLabel:(0,o.JN)(t,(e=>e.label===n),!0,0,c,a)}})};function u(e,t,n,i){void 0===n&&(n=!1),e.track({name:r.Az,context:{filterEvent:c.FilterEvent.SET,filter:t.map((e=>(0,o.ms)(e,n)))}},i.prio2);const l={name:"select_content",context:{legacy_event_name:r.Az,event_trigger_name:(0,o.bL)(c.FilterEvent.SET,n?a.FilterType.QUICK:a.FilterType.STANDARD,t)}};e.trackStandalone(l,i.prio2)}function s(e,t,n,r,o){void 0===r&&(r=!1);_(n,[{key:t,subcategory:t+"_min",values:e.selectedRange&&e.selectedRange.minimum?[String(e.selectedRange.minimum)]:[]},{key:t,subcategory:t+"_max",values:e.selectedRange&&e.selectedRange.maximum?[String(e.selectedRange.maximum)]:[]}],r,o)}function _(e,t,n,i){void 0===n&&(n=!1),e.track({name:r.Az,context:{filterEvent:c.FilterEvent.OPEN,filter:t.map((e=>(0,o.ms)(e,n)))}},i.prio2);const l={name:"select_content",context:{legacy_event_name:r.Az,event_trigger_name:(0,o.bL)(c.FilterEvent.OPEN,n?a.FilterType.QUICK:a.FilterType.STANDARD,t)}};e.trackStandalone(l,i.prio2)}function m(e,t,n,r){void 0===n&&(n=!1);e.map((e=>({key:e.key,subcategory:"-",values:[String(e.isSelected)]}))).forEach((e=>{_(t,[e],n,r)}))}function g(e,t,n){e.track({name:r.SA,context:{sortingEvent:c.SortEvent.OPEN,sortingType:t}},n.prio2);const a={name:"select_content",context:{legacy_event_name:r.SA,event_trigger_name:(0,o.tR)(c.SortEvent.OPEN,t)}};e.trackStandalone(a,n.prio2)}function d(e,t,n){e.track({name:r.SA,context:{sortingEvent:c.SortEvent.SET,sortingType:t}},n.prio2);const a={name:"select_content",context:{legacy_event_name:r.SA,event_trigger_name:(0,o.tR)(c.SortEvent.SET,t)}};e.trackStandalone(a,n.prio2)}const f=(e,t)=>{const n="open filter search",c="brands";e.track({name:r.bD,context:{customActionSuffix:n,customCategory:"catalog",customLabel:c}},t.prio2);const a={name:"select_content",context:{legacy_event_name:r.bD,event_trigger_name:(0,o.L0)(n,c)}};e.trackStandalone(a,t.prio2)};function p(e,t){e.track({name:r.Az,context:{filterEvent:c.FilterEvent.SHOW_MORE}},t.prio2);const n={name:"select_content",context:{legacy_event_name:r.Az,event_trigger_name:(0,o.bL)(c.FilterEvent.SHOW_MORE)}};e.trackStandalone(n,t.prio2)}const y=(e,t)=>{const n="top choices tooltip";if(e.track({name:r.wc,context:{customCategory:"catalog",customLabel:n}},t.prio2),!t)return;const c={name:"view_content",context:{legacy_event_name:r.wc,event_trigger_name:(0,o.L0)("",n)}};e.trackStandalone(c,t.prio2)},E=(e,t)=>{const n="top choices tooltip.closed",c="close";if(e.track({name:r.bD,context:{customCategory:"catalog",customActionSuffix:c,customLabel:n}},t.prio2),!t)return;const a={name:"select_content",context:{legacy_event_name:r.bD,event_trigger_name:(0,o.L0)(c,n)}};e.trackStandalone(a,t.prio2)};function v(e,t){const n="your sizes.not available";e.track({name:r.wc,context:{customCategory:"catalog",customLabel:n}},t.prio2);const c={name:"view_content",context:{legacy_event_name:r.wc,event_trigger_name:(0,o.L0)("",n)}};e.trackStandalone(c,t.prio2)}function x(e,t){const n="set your sizes popup.sizes on okay";e.track({name:r.bD,context:{customCategory:"catalog",customLabel:n}},t.prio2);const c={name:"select_content",context:{legacy_event_name:r.bD,event_trigger_name:(0,o.L0)("",n)}};e.trackStandalone(c,t.prio2)}function S(e,t){e.track({name:r.wc,context:{customCategory:"catalog",customActionSuffix:"dialog",customLabel:"sizes.body_measurement_dialog.size_filter_dropdown"}},t.prio2);const n={name:"view_content",context:{legacy_event_name:r.wc,event_trigger_name:"size_filter|||body_measurement_dialog"}};e.trackStandalone(n,t.prio2)}function b(e,t){e.track({name:r.bD,context:{customCategory:"catalog",customActionSuffix:"dialog",customLabel:"sizes.body_measurement_dialog.size_filter_dropdown"}},t.prio2);const n={name:"select_content",context:{legacy_event_name:r.bD,event_trigger_name:"size_filter|||body_measurement_dialog|||get_measured"}};e.trackStandalone(n,t.prio2)}function k(e,t){e.track({name:r.bD,context:{customCategory:"catalog",customLabel:"set your sizes flyover.add now"}},t.prio2);const n={name:"select_content",context:{legacy_event_name:r.bD,event_trigger_name:"size_filter|||reference_item_dialog|||add_item"}};e.trackStandalone(n,t.prio2)}function T(e,t){e.track({name:r.wc,context:{customCategory:"catalog",customLabel:"set your sizes flyover"}},t.prio2);const n={name:"view_content",context:{legacy_event_name:r.wc,event_trigger_name:"size_filter|||reference_item_dialog"}};e.trackStandalone(n,t.prio2)}function D(e,t){e.track({name:r.bD,context:{customCategory:"catalog",customLabel:"set your sizes popup.add now"}},t.prio2);const n={name:"select_content",context:{legacy_event_name:r.bD,event_trigger_name:"reference_item_tooltip|||add_item"}};e.trackStandalone(n,t.prio2)}function A(e,t){e.track({name:r.wc,context:{customCategory:"catalog",customLabel:"set your sizes popup"}},t.prio2);const n={name:"view_content",context:{legacy_event_name:r.wc,event_trigger_name:"reference_item_tooltip"}};e.trackStandalone(n,t.prio2)}function N(e,t){e.track({name:r.bD,context:{customCategory:"catalog",customLabel:"set your sizes popup.try later"}},t.prio2);const n={name:"select_content",context:{legacy_event_name:r.bD,event_trigger_name:"reference_item_tooltip|||try_later"}};e.trackStandalone(n,t.prio2)}const R=(e,t,n)=>{e.track(i.t1,n.prio2),e.trackStandalone((0,i.l_)(t),n.prio2)}},42182:function(){window.__RENDERING_ENGINE_TRANSLATION_KEYS__={...window.__RENDERING_ENGINE_TRANSLATION_KEYS__,"collection_category-tags":["a11y.categories.label"]}},88986:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var r={};n.r(r),n.d(r,{active:function(){return E},prefixIcon:function(){return x},root:function(){return y},rootCommon:function(){return p},suffixIcon:function(){return S},text:function(){return v}});var o=n(32740),c=n(85959),a=n(30812),i=n(21775),l=n(82794),u=n(19087),s=n(13081),_=n(78692),m=n(38979),g=n(5073),d=n(10170),f=n(96037),p="nUarEP Rt7sMf _6-WsK3 Md_Vex Nk_Omi _MmCDa _0xLoFW u9KIT8 FCIprz",y="nUarEP Rt7sMf _6-WsK3 Md_Vex Nk_Omi _MmCDa _0xLoFW u9KIT8 FCIprz",E="nUarEP Rt7sMf _6-WsK3 Md_Vex Nk_Omi _MmCDa _0xLoFW u9KIT8 FCIprz",v="JCuRr_",x="_9l1hln",S="_9l1hln",b=n(43168),k=n(5828);const T=(0,b.X)(r)(k.A);var D=n(2673),A=n(52130),N=n(41825),R=n(51599);function C(e,t,n){return e.reduce(((e,t)=>{var r;if(!(0,u.QY)(t))return e;const o=null==(r=t.children)?void 0:r.find((e=>e.collection.id===n));if(t.collection.id===n||o&&!(0,u.QY)(o))return{tree:[...e.tree,...(t.children||[]).filter((e=>e.entityCount>0))],hierarchy:[...e.hierarchy,t.label]};if(t.children&&t.children.length>0){const r=C(t.children,[...e.hierarchy,t.label],n);return{tree:[...e.tree,...r.tree],hierarchy:r.hierarchy}}return e}),{tree:[],hierarchy:t})}const L=a(N.Ae,N.FQ,d.y5q,R.XV7),I={};var O=(0,o.tile)().withQueries((e=>{const t=e.context.TEMPORARY_DPS_HACK_CATALOG_QUERY_VARIABLES||{},n=(0,u.FF)(t,e);return{collection:{query:n.isDPSGridEnabled?m:_,variables:n}}})).withTracking((e=>({def:I,context:{id:e.entity.id},useData:()=>({source:"collection",trackingData:{context:{entity_id:e.entity.id}}})}))).withProcessDependencies((e=>{var t,n;return{action:"render",data:{categoryTree:null==(n=e.collection.collection)||null==(t=n.entities)?void 0:t.categoryTree}}})).withRender((e=>{let{tools:t,data:{categoryTree:n},entity:r,ruleData:o,context:_}=e;if(!n||0===n.length)return null;const m=o.suggestedFiltersEnabledForStyleProfile||!!o.suggestedFiltersEnabled&&!!o.fdbeEnabled,p=(0,u.Dy)(_.intent.navigationTargetGroup),{tree:y}=C(n,[],r.id),E=y.length?y:n.filter((e=>e.entityCount>0));return E.length?c.createElement("aside",{className:a(g.K,d.Ol8,d.Np6,{[d.ZHC]:!m}),"data-module":"true"},c.createElement("div",{className:a(f.z,d.ZLx,d.Mn7,d.zFk,d.t8P,{[L]:m}),style:{display:"block"}},E.map(((e,r)=>c.createElement("div",{"aria-label":__("a11y.categories.label"),className:a(f.Y,d.DSR,d.fOU,g.pS,{[d.Cos]:r!==E.length-1}),key:e.collection.id},c.createElement(T,{className:R.JSK,style:{padding:"var(--spacing-xs)"},href:e.collection.uri,label:c.createElement(D.Ay,{preset:A.nx.bodyBold,color:A.r7.primary},e.label),onClick:r=>{r.preventDefault(),(0,l.ei)(t.tracking,n,e.label,p),i.trigger(s.fY,{collectionId:e.collection.id})}})))))):null}))},30812:function(t){"use strict";t.exports=e},85959:function(e){"use strict";e.exports=t},32740:function(e){"use strict";e.exports=n},21775:function(e){"use strict";e.exports=r}},function(e){var t=function(t){return e(e.s=t)};return e.O(0,[29674],(function(){return t(42182),t(88986)})),e.O()}])}));
//# sourceMappingURL=https://zalando.de/dev/source-maps/collection_category-tags/index-1a1c9386819eb4fb2fd0.map