define(["classnames","react","react-dom","rendering-engine-api","z-shop-event-bus"],(function(t,e,i,o,s){return(self.renderingEngineWebpackJsonp=self.renderingEngineWebpackJsonp||[]).push([[38062],{93384:function(){window.__RENDERING_ENGINE_TRANSLATION_KEYS__={...window.__RENDERING_ENGINE_TRANSLATION_KEYS__,"checkout_hac-how-it-works":["main.close","hac.how_it_works.steps.title","hac.how_it_works.steps.step_1.title","hac.how_it_works.steps.step_1.text","hac.how_it_works.steps.step_2.title","hac.how_it_works.steps.step_2.text","product.flag.priorityaccess.plus","pdp.offer.plus.priorityaccess.inviteoverlay.member.description","pdp.offer.plus.priorityaccess.inviteoverlay.eligible.description","pdp.offer.plus.priorityaccess.inviteoverlay.eligible.trial.cta","pdp.offer.plus.priorityaccess.inviteoverlay.eligible.notrial.cta","pdp.offer.loyalty_points.priorityaccess.inviteoverlay.active.description","pdp.offer.loyalty_points.priorityaccess.inviteoverlay.eligible.description","pdp.offer.loyalty_points.priorityaccess.inviteoverlay.eligible.optin.cta","replenishment.list.empty.download_appstore.link","replenishment.list.empty.download_playstore.link","hac.how_it_works.cta.add_to_wishlist","hac.how_it_works.cta.remove_from_wishlist"]}},28148:function(t,e,i){"use strict";i.d(e,{js:function(){return o},yR:function(){return s},zz:function(){return r}});const o="PDP$CHANGE_SIZE",s="PDP$UNSELECT_SIZE",r="INVITE_ONLY_HOW_IT_WORKS"},86236:function(t,e,i){"use strict";i.d(e,{js:function(){return o.js},yR:function(){return o.yR},U$:function(){return n},DG:function(){return r},Ci:function(){return s},hj:function(){return c},U8:function(){return p}});var o=i(28148);const s={title:()=>__("hac.how_it_works.steps.title"),step_1_name:()=>__("hac.how_it_works.steps.step_1.title"),step_1_description:()=>__("hac.how_it_works.steps.step_1.text"),step_2_name:()=>__("hac.how_it_works.steps.step_2.title"),step_2_description:()=>__("hac.how_it_works.steps.step_2.text")},r={name:()=>__("product.flag.priorityaccess.plus"),description:t=>t?__("pdp.offer.plus.priorityaccess.inviteoverlay.member.description"):__("pdp.offer.plus.priorityaccess.inviteoverlay.eligible.description"),ctaText:t=>t?__("pdp.offer.plus.priorityaccess.inviteoverlay.eligible.trial.cta"):__("pdp.offer.plus.priorityaccess.inviteoverlay.eligible.notrial.cta")},n={name:()=>__("product.flag.priorityaccess.plus"),description:t=>t?__("pdp.offer.loyalty_points.priorityaccess.inviteoverlay.active.description"):__("pdp.offer.loyalty_points.priorityaccess.inviteoverlay.eligible.description"),ctaText:()=>__("pdp.offer.loyalty_points.priorityaccess.inviteoverlay.eligible.optin.cta")},c={appStoreLink:()=>__("replenishment.list.empty.download_appstore.link"),playStoreLink:()=>__("replenishment.list.empty.download_playstore.link")},p={addToList:()=>__("hac.how_it_works.cta.add_to_wishlist"),removeFromList:()=>__("hac.how_it_works.cta.remove_from_wishlist")}},28621:function(t,e,i){"use strict";i.r(e);var o=i(85959),s=i(21775),r=i(32740),n=i(59890),c=i(39809),p=i(3853),a=i(86236),l=i(75923);const _=new n.l;e.default=(0,r.tile)().withQueries((t=>{let{entity:e}=t;return{data:{query:l,variables:{id:e.id}}}})).withTracking((t=>({resolve:()=>({context:{id:t.entity.id}})}))).withProcessDependencies((t=>t.data&&t.data.product?{action:"render",data:{...t.data}}:{action:"error",message:"Product not found"})).withRender((t=>{const{data:{product:e,customer:r,loyaltyPointsProgram:n},tools:l,context:u}=t;if(null===e)return null;const[d,f]=(0,o.useState)();(0,o.useEffect)((()=>(s.on(a.js,f),s.on(a.yR,f),()=>{s.off(a.js),s.off(a.yR)})),[]);(0,o.useEffect)((()=>(s.on(p.qp,(()=>_.emit("open"))),()=>s.off(p.qp))));const y=(0,c.v)((()=>Promise.all([i.e(29674),i.e(35633)]).then(i.bind(i,35633)).then((t=>t.default))));return o.createElement("div",null,o.createElement(y,{bus:_,locale:u.locale,closeDialog:()=>_.emit("close"),product:e,simpleSku:d,tools:l,plusMembership:null==r?void 0:r.plusMembership,loyaltyPointsProgram:n}))}))},75923:function(t){t.exports={id:"66a1f3c2f479786e001216091aa6747dbf4f6ec6fd77dd540f9d6f8a1091b01a"}},30812:function(e){"use strict";e.exports=t},85959:function(t){"use strict";t.exports=e},48398:function(t){"use strict";t.exports=i},32740:function(t){"use strict";t.exports=o},21775:function(t){"use strict";t.exports=s}},function(t){var e=function(e){return t(t.s=e)};return t.O(0,[29674],(function(){return e(93384),e(28621)})),t.O()}])}));
//# sourceMappingURL=https://zalando.de/dev/source-maps/checkout_hac-how-it-works/index-99205e2034d263a92df7.map