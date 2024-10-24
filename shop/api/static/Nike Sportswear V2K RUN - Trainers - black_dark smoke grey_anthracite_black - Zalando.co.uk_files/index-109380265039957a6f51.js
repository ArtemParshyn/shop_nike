define(["classnames","react","rendering-engine-api","z-shop-event-bus"],(function(e,t,n,a){return(self.renderingEngineWebpackJsonp=self.renderingEngineWebpackJsonp||[]).push([[53215],{73960:function(e,t,n){"use strict";n.d(t,{Uf:function(){return a},Yq:function(){return o},mY:function(){return r},qp:function(){return i}});const a=e=>e.find((e=>e.isDefaultOffer)),i=(e,t)=>{var n;if(!t)return;const i=e.simplesWithStock.find((e=>e.sku===t));var o;const r=a(null!=(o=null==i?void 0:i.allOffers)?o:[]);return null==r||null==(n=r.merchant)?void 0:n.id},o=e=>e.find((e=>e.isDefaultOffer)),r=(e,t)=>{var n;if(!t)return;const a=e.simples.find((e=>e.sku===t));var i;const r=o(null!=(i=null==a?void 0:a.allOffers)?i:[]);return null==r||null==(n=r.merchant)?void 0:n.id}},6962:function(){window.__RENDERING_ENGINE_TRANSLATION_KEYS__={...window.__RENDERING_ENGINE_TRANSLATION_KEYS__,product_view:["zalando.prodpres.notification.out_of_stock","zalando.prodpres.notification.subheadline.out_of_stock","pdp.action.back_button","product.pdp.similar-items-button","meta.domain","meta.description.pds","catalog.article.price","catalog.article.colorKey","seo.pdp.preowned"]}},56298:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var a=n(29443),i=n(32740),o=n(30812),r=n(85959),l=n.n(r),c=n(32078);var s=n(89862),d=n(46673),u=n(73960);const m=(e,t,n)=>((e,t)=>{const n=null!=t&&t.startsWith("SEM");return e&&n})(e,t)&&(e=>!!e&&e.some((e=>{if(e&&e.key){const t=JSON.parse(e.key);return t.length>0&&t[0]&&t[0].hints.includes("SIMILAR")}return!1})))(n);var p=n(38856),f=n(75839),E=n(87548),b=n(10170),h=n(96353),w=n(36124),g=n(58779),_=n(2673),I=n(52130),v=n(19895),k=n.n(v),S=n(11506),y=n(34617);const N="www.zalando.de",O={DE:{"de-AT":"www.zalando.at"||N,"de-CH":"www.zalando.ch"||N,"de-DE":"www.zalando.de"||N},EN:{"en-GB":"www.zalando.co.uk"||N,"en-IE":"www.zalando.ie"||N,"en-DE":"en.zalando.de"||N},NL:{"nl-BE":"www.zalando.be"||N,"nl-NL":"www.zalando.nl"||N},FR:{"fr-BE":"fr.zalando.be"||N,"fr-CH":"fr.zalando.ch"||N,"fr-FR":"www.zalando.fr"||N},IT:{"it-CH":"it.zalando.ch"||N,"it-IT":"www.zalando.it"||N}},A={"www.zalando.de":{hrefLangDomains:O.DE,facebookId:"175480935857680"},"en.zalando.de":{hrefLangDomains:O.EN,facebookId:"175480935857680"},"www.zalando.nl":{hrefLangDomains:O.NL,facebookId:"435766449794064"},"www.zalando.fr":{hrefLangDomains:O.FR,facebookId:"330383783677451"},"www.zalando.it":{hrefLangDomains:O.IT,facebookId:"368069176566256"},"www.zalando.co.uk":{hrefLangDomains:O.EN,facebookId:"235172583248445"},"www.zalando.at":{hrefLangDomains:O.DE,facebookId:"175480935857680"},"www.zalando.ch":{hrefLangDomains:O.DE,facebookId:"329077433816820"},"fr.zalando.ch":{hrefLangDomains:O.FR,facebookId:"329077433816820"},"it.zalando.ch":{hrefLangDomains:O.IT,facebookId:"329077433816820"},"www.zalando.pl":{facebookId:"267636633320522"},"www.zalando.be":{hrefLangDomains:O.NL,facebookId:"323997907664947"},"fr.zalando.be":{hrefLangDomains:O.FR,facebookId:"323997907664947"},"www.zalando.se":{facebookId:"393168717374343"},"www.zalando.fi":{facebookId:"188215141295191"},"www.zalando.dk":{facebookId:"198099466970617"},"www.zalando.es":{facebookId:"327760033954496"},"www.zalando.no":{facebookId:"506158486076035"},"www.zalando.cz":{},"www.zalando.ie":{hrefLangDomains:O.EN},"www.zalando.pt":{}};const T={day:"2-digit",month:"2-digit",year:"numeric"};function D(e){var t;const{data:n,locale:a,salesChannelConfig:i,url:o,appDomain:l=""}=e;if(null===n)return null;const{brand:c,name:s,color:d,displayPrice:u,urisInAllLocales:m,primaryImage:p,sku:f,condition:E}=n,b={domain:()=>__("meta.domain"),description:(e,t,n,a,i,o)=>__("meta.description.pds",e,t,n,a,i,o),twitterPriceLabel:()=>__("catalog.article.price"),twitterColorLabel:()=>__("catalog.article.colorKey"),preOwnedLabel:()=>__("seo.pdp.preowned")},{original:h,promotional:w}=u,g=w?w.formatted:h.formatted,_=(e=>{const t=new Date;try{return Intl.DateTimeFormat(e,T).format(t)}catch(e){return t.getDate()+"."+(t.getMonth()+1)+"."+t.getFullYear()}})(a),I=function(e,t){return t.name&&"-"!==t.name&&t.label&&t.label!==t.name?e+"/"+t.label:e}(s,d),v=function(e,t,n){if(n&&t&&"PRE_OWNED"===n.kind)return e+" - ("+t+")";return e}(I,b.preOwnedLabel(),E),k=b.description("",c.name,v,"",g,_);const S=c.name+" "+v+" - "+b.domain(),y=Object.keys(o.query).length>0,N=function(e,t,n){const a=n.config.hosts.find((t=>t.host===e));return(null==a?void 0:a.default_language)===t}(o.hostname,a,i),O=!y&&N,D=O?null:r.createElement("meta",{name:"robots",content:"NOINDEX, FOLLOW"}),L=o.protocol+"//"+o.hostname+o.pathname,C=function(e,t){var n;const a=Object.prototype.hasOwnProperty.call(A,e.hostname)?null==(n=A[e.hostname])?void 0:n.hrefLangDomains:{},i=t||[];return Object.keys(a||{}).map((t=>{const n="en-DE"===t?"en-GB":t,o=i.find((e=>(null==e?void 0:e.locale)===n)),l=a?a[t]:"",c=e.protocol+"//"+l+(null==o?void 0:o.uri);return r.createElement("link",{key:t,rel:"alternate",hrefLang:t,href:c})}))}(o,m),P=O?null:r.createElement("link",{rel:"canonical",href:L}),B=null==p?void 0:p.uri,R=(null==(t=A[o.hostname])?void 0:t.facebookId)||"",z="zalando://PDS?sku="+f+"&appdomainId="+l,Y="android-app://de.zalando.mobile/zalando/PDS?appdomainId="+l+"&sku="+f;return r.createElement(r.Fragment,null,r.createElement("title",null,S),r.createElement("meta",{name:"description",content:k}),D,P,C,r.createElement("meta",{property:"fb:app_id",content:R}),r.createElement("meta",{property:"og:site",content:"https://"+o.hostname}),r.createElement("meta",{property:"og:title",content:S}),r.createElement("meta",{property:"og:description",content:k}),r.createElement("meta",{property:"og:image",content:B}),r.createElement("meta",{property:"og:type",content:"zalando_sharing:product"}),r.createElement("meta",{property:"og:site_name",content:"Zalando Shop"}),r.createElement("meta",{property:"og:url",content:o.pathname}),r.createElement("meta",{name:"twitter:card",content:"product"}),r.createElement("meta",{name:"twitter:site",content:"@Zalando"}),r.createElement("meta",{name:"twitter:creator",content:"@Zalando"}),r.createElement("meta",{name:"twitter:title",content:S}),r.createElement("meta",{name:"twitter:description",content:k}),r.createElement("meta",{name:"twitter:image",content:B}),r.createElement("meta",{name:"twitter:data1",content:g}),r.createElement("meta",{name:"twitter:label1",content:b.twitterPriceLabel()}),function(e,t){return e.name&&"-"!==e.name?r.createElement(r.Fragment,null,r.createElement("meta",{name:"twitter:data2",content:e.name}),r.createElement("meta",{name:"twitter:label2",content:t})):null}(d,b.twitterColorLabel()),r.createElement("meta",{property:"al:ios:url",content:z}),r.createElement("meta",{property:"al:ios:app_store_id",content:"585629514"}),r.createElement("meta",{property:"al:ios:app_name",content:"Zalando"}),r.createElement("link",{rel:"alternate",href:Y}))}var L=n(21775);const C="PDP$CHANGE_SIZE",P="PDP$UNSELECT_SIZE";function B(e,t){const[n,a]=r.useState((0,d.tQ)(e,t)),[i,o]=r.useState("ABOVE");return r.useEffect((function(){return L.on(C,(e=>{a(e)})),L.on(P,(()=>{a("")})),()=>{L.off(C),L.off(P)}}),[]),r.useEffect((function(){(t=>{var n;const a=(i=t,null==(r=e.simplesWithStock.find((e=>e.sku===i)))?void 0:r.offer);var i,r,l;(e=>{var t;return null==e||null==(t=e.benefits)?void 0:t.some((e=>{let{benefitKind:t}=e;return"PLUS_PRIORITY_ACCESS_RESERVATION"===t}))})(a)&&["REQUEST_INVITATION","MODIFY_INVITATION"].includes(null!=(l=null==a||null==(n=a.availabilityAction)?void 0:n.kind)?l:"")?o("BELOW"):o("ABOVE")})(n)}),[n,e.simplesWithStock]),i}var R;!function(e){e.CUSTOMER_ACTION="CUSTOMER_ACTION",e.INFORMATION="INFORMATION",e.LOYALTY_POINTS_EARLY_ACCESS="LOYALTY_POINTS_EARLY_ACCESS",e.LOYALTY_POINTS_PRIORITY_ACCESS="LOYALTY_POINTS_PRIORITY_ACCESS",e.LOYALTY_POINTS_BONUS_POINTS="LOYALTY_POINTS_BONUS_POINTS"}(R||(R={}));var z={back:()=>__("pdp.action.back_button"),toSimilarItems:()=>__("product.pdp.similar-items-button")},Y=n(31435),x=n(40357),F=n(25277),G=n(14410);var M=e=>{let{isDesignerExperience:t,handleGoBack:n,translations:a}=e;return t?l().createElement(x.A,{className:o(f.nzo,f.Srn,b.uvl,b.aUF),onClick:n},l().createElement(w.A,{src:Y.A,className:G.ct}),l().createElement(_.Ay,{className:o(b.uB3),color:I.r7.primary,preset:I.nx.bodyBold},a.back())):l().createElement("div",{className:o(f.nzo,f.Srn,b.uvl)},l().createElement(F.Q,{label:a.back(),icon:l().createElement(w.A,{src:Y.A}),onClick:n}))},W=n(6589),U=n(71156),H=n(96545);var K=e=>{let{translations:t,handleToSimilarItemsIconLinkClick:n}=e;return l().createElement("div",{className:o(b.uvl,b.aUF)},l().createElement(U.A,{size:H.s.large,href:"#similar-items",onClick:n,className:o(b.Ubi)},t.toSimilarItems()))};const V=(e,t)=>({id:e.entity.id,enableGiftWrappingOption:t,isFlexiPriceEnabled:!!e.ruleData.isFlexiPriceEnabled,moduleInput:W.n.PRODUCT_DETAILS,...e.ruleData.isFlexiPriceEnabled&&{displayContext:W.n.PRODUCT_DETAILS}}),q=e=>({id:e.entity.id});var j=(0,i.view)().withFragments((()=>k())).withQueries((e=>{const t=!!e.ruleData.enableGiftWrappingOption;return{data:{query:c,variables:V(e,t)},seoHeadProductQuery:{query:y,variables:q(e)}}})).withTracking((e=>({def:a.def,context:{id:e.entity.id},exposeData:e=>{const{product:t}=e.dataDependencies.data;if(!t)return;return{common:{content_group_detail:t.sku},entitySpecific:{}}}}))).withStaticTiles((e=>{let{entity:t,ruleData:{fashionAssistantRendererEnabled:n,isRatingsReviewsEnabled:a,voiceInputEnabled:i,isEditorsNoteEnabled:o}}=e;return{structuredData:[{id:t.id,hints:["structuredData"]}],productGallery:[{id:t.id,hints:["gallery",...t.hints]}],productDetail:[{id:t.id,hints:[...t.hints]}],...o?{productEditorsNote:[{id:t.id,hints:["editorsNote"]}]}:{},productSizing:[{id:t.id,hints:["sizing"]}],productSustainabilityBenefitsInfo:[{id:t.id,hints:["sustainabilityBenefitsInfo"]}],productCTA:[{id:t.id,hints:["cta"]}],productAtAGlance:[{id:t.id,hints:["productAtAGlance"]}],productAtAGlanceDrawer:[{id:t.id,hints:["productAtAGlanceDrawer"]}],productConvenience:[{id:t.id,hints:["convenience"]}],productCoordinatedSet:[{id:t.id,hints:["mixAndMatch"]}],productAttributes:[{id:t.id,hints:["attributes"]}],productReport:[{id:t.id,hints:["report"]}],productRibbon:[{id:t.id,hints:["ribbon"]}],...a?{productReviews:[{id:t.id,hints:["reviews"]}]}:{},plusBenefitsBanner:[{id:t.id,hints:["plus-benefits-banner"]}],plusExclusivityNotifications:[{id:t.id,hints:["plus-notifications"]}],skipButtons:[{hints:["skip-buttons"]}],newsletterBanner:[{id:"ern:nlconsent::default",hints:["banner"]}],hacHowItWorks:[{id:t.id,hints:["hac-how-it-works"],type:"checkoutcontract"}],appDownloadBanner:[{type:"app-download-banner"}],outfitNotifications:[{type:"outfit-notifications"}],visibilityInfo:[{hints:["visibility-info-modal"]}],reportModal:[{hints:["report-modal"]}],basicCommunication:[{id:t.id,hints:["basic-communication"]}],informationBanner:[{type:"information-banner"}],partnerInformation:[{id:t.id,hints:["product-partner-info"]}],header:[{type:"navigation"}],...n?{fashionAssistantChat:[{hints:["fashion-assistant","zfa-flow",i?"speech_enabled":""],fragmentsData:{productId:t.id}}]}:{}}})).withProcessDependencies(((e,t)=>{var n,a,o,r;if(!e.data||!e.data.product){var l,c;return(null==(c=e.data)||null==(l=c.errors)?void 0:l.has(i.OperationErrorCodes.notFound))?{action:"loopback",hints:["entity-404-error"],message:"Product not found",error:!1}:{action:"error",message:"Failed to retrieve product data"}}const{product:s,customer:d,loyaltyPointsProgram:u}=e.data,m=[],p=[];null==(a=s.relevantEntities)||null==(n=a.edges)||n.forEach((e=>{let{node:{id:t,reason:n}}=e;const a={id:t};n&&"kind"in n&&null!==n.kind?a.hints=[n.kind]:n&&"value"in n&&"product-curated-block-collection"===n.value&&(a.hints=["ProductCuratedBlockCollection"]),t.startsWith("ern:editorial:")?p.push(a):m.push(a)}));const{comingSoon:f,simplesWithStock:E,isGiftWrappingKitAvailable:b,segmentCommunication:h,sustainability:w,availabilityAction:g,displayPriceModule:_}=s,I=null==s?void 0:s.hasSubscribableSimple,v=E.length>0,k="REQUEST_INVITATION"===(null==g?void 0:g.kind),{locale:S}=t.context,y=e.seoHeadProductQuery.product,N=null==s||null==(o=s.condition)?void 0:o.kind,O=null==h?void 0:h.kind,A=!!w,T="ELIGIBLE"===(null==d||null==(r=d.plusMembership)?void 0:r.membershipStatus),D="ELIGIBLE"===(null==u?void 0:u.loyaltyStatus);return{action:"render",data:{...e.data,comingSoon:f,inStock:v,locale:S,seoHeadProductData:y,product:s,productConditionKind:N,shouldIncludeSubscriptionDrawer:I,segmentedBannerType:O,isSustainableProduct:A,isProductAvailableForInviteOnly:k,displayPriceModule:_},tiles:{relevantEntities:m,productExclusiveStorytelling:p,...b&&{productGiftWrapping:[{id:t.entity.id,hints:["giftWrapping"]}]},...I&&{productSubscriptionDrawer:[{hints:["product-subscription-drawer"]}]},...T?{plusSignUp:[{type:"customer",hints:["plus-signup"]}]}:{},...D&&{loyaltyPointsOptIn:[{type:"customer",hints:["loyalty-points-optin"]}]},segmentedBanner:[{id:t.entity.id,hints:["segmented-banner"]}],ribbon:[{id:t.entity.id,hints:["ribbon"]}],followBrandNotification:[{hints:["follow-brand-notification"]}]}}})).withMeta((e=>{let{data:{seoHeadProductData:t},context:n}=e;return r.createElement(D,{data:t,locale:n.locale,salesChannelConfig:n.salesChannelConfig,url:n.navigation.url,appDomain:n.appDomain})})).withRenderTile((e=>{let{tileToRender:t,entity:n}=e;return n.hints.includes("SIMILAR")?r.createElement("div",{id:"similar-items"},t):t})).withRender((e=>{var t,n,a;const{context:{experience:l,deviceInfo:{isMobile:c},navigation:{url:{query:v}}},data:{comingSoon:k,inStock:y,product:N,shouldIncludeSubscriptionDrawer:O,segmentedBannerType:A,isSustainableProduct:T,isProductAvailableForInviteOnly:D,displayPriceModule:L},tiles:{productGallery:C=null,productDetail:P=null,productEditorsNote:Y=null,productCTA:x=null,productAtAGlanceDrawer:F=null,productAtAGlance:G=null,productGiftWrapping:W=null,productConvenience:U=null,productSizing:H=null,productCoordinatedSet:V=null,productAttributes:q=null,segmentedBanner:j=null,productReport:Q=null,productRibbon:Z=null,productReviews:$=null,plusBenefitsBanner:J=null,plusExclusivityNotifications:X=null,plusSignUp:ee=null,loyaltyPointsOptIn:te=null,productExclusiveStorytelling:ne=null,productSustainabilityBenefitsInfo:ae=null,structuredData:ie=null,relevantEntities:oe,newsletterBanner:re,appDownloadBanner:le,informationBanner:ce,header:se,fashionAssistantChat:de,outfitNotifications:ue,visibilityInfo:me,reportModal:pe,productSubscriptionDrawer:fe,followBrandNotification:Ee=null,hacHowItWorks:be,basicCommunication:he,partnerInformation:we,skipButtons:ge},ruleData:{isViewTransitionsEnabled:_e}}=e;r.useEffect((()=>{if(!Boolean(e.ruleData.enableStandaloneInShadow))return;const t=((e,t,n)=>{if(!e)return;const a=(0,d.tQ)(e,t),i=(0,u.qp)(e,a),o=e.displayPrice.original.currency,r=e.simplesWithStock.find((e=>e.sku===a)),l=null==r?void 0:r.allOffers.find((e=>e.isDefaultOffer));let c,m,p,f;var E;return a&&l?(c=l.price.trackingCurrentAmount,m=l.price.trackingDiscountAmount,p=l.displayFlags.map((e=>e.kind)).join(";"),f=null==(E=l.displayPriceModule)?void 0:E.trackingKey):(c=e.displayPrice.trackingCurrentAmount,m=e.displayPrice.trackingDiscountAmount,p=e.displayFlags.map((e=>e.kind)).join(";"),f=n),{name:"view_item",context:{currency:o,value:c,content_group_detail:e.sku,items:[{affiliation:i,...m&&{discount:m},item_id:e.sku,item_brand:e.brand.name,item_name:e.name,item_variant:a,price:c,item_benefits:e.benefits?e.benefits.map((e=>e.kind)).join(";"):"",item_flags:p,size_availability:e.simples.map((e=>{var t;return null==(t=e.offer.stock)?void 0:t.quantity})).join(";"),...f&&{price_context:f}}],legacy_event_name:s.gR}}})(N,v,null==L?void 0:L.trackingKey);t&&e.tools.tracking.trackStandalone(t)}),[]);const{experienceName:Ie}=(0,S.q)(l),ve=Ie.isDesigner(),ke=!!e.ruleData.isReplenishmentEnabled,Se=!1!==e.ruleData.clientSideOnlyDisabled,[ye,Ne]=r.useState(Se);r.useEffect((()=>{Se||(0,i.requestIdleCallback)((()=>{Ne(!0)}))}),[]);const Oe=B(N,v);Se||(0,i.useRestoreScrollPosition)(ye);const Ae=!!e.ruleData.isHistoryBreadcrumbEnabled,{handleGoBack:Te,shouldRenderBackButton:De}=((e,t,n)=>{const[a,i]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const e=document.referrer.includes("zalando");i(e)}),[]),{handleGoBack:()=>{(e=>{e.trackStandalone({name:"select_content",context:{event_trigger_name:"back_button"}})})(n),window.history.back()},shouldRenderBackButton:a&&e&&!t}})(Ae,c,e.tools.tracking),{handleToSimilarItemsIconLinkClick:Le,shouldRenderToSimilarItemsBanner:Ce}=((e,t,n,a)=>({handleToSimilarItemsIconLinkClick:()=>{(e=>{e.trackStandalone({name:"select_content",context:{event_trigger_name:"click_similar_items_banner"}})})(a)},shouldRenderToSimilarItemsBanner:m(e,t,n)}))(Boolean(e.ruleData.isLPOPDPModificationEnabled),String(v.wmc),oe,e.tools.tracking);return r.createElement(i.ViewTracker,null,r.createElement(r.Fragment,null,ge,le,ce,se,de,r.createElement("main",{id:"main-content"},Z,!y&&!k&&r.createElement("div",{className:o(f.Vg8,b.fwT,ve&&b.bgx)},r.createElement("div",{className:o(f.nME)},r.createElement("div",{className:o(f.nzo,f.Srn)},r.createElement("style",{dangerouslySetInnerHTML:{__html:"@media (max-width: 767px) { .z-pdp__escape-grid { margin: 0 -24px; } }"}}),r.createElement(_.Ay,{className:"z-pdp__escape-grid"},r.createElement(g.A,{icon:r.createElement(w.A,{src:h.A}),label:r.createElement(_.Ay,{tag:"p",preset:I.nx.bodySmall},__("zalando.prodpres.notification.out_of_stock")+"\n                            "+__("zalando.prodpres.notification.subheadline.out_of_stock"))}))))),Ce&&c&&r.createElement(K,{translations:z,handleToSimilarItemsIconLinkClick:Le}),r.createElement("div",{className:f.Vg8},r.createElement("div",{className:o(f.nME,b.fwT,ve&&b.Gzf)},r.createElement("div",{..._e?{id:"view-transition-anchor"}:{},..._e?{style:{viewTransitionName:N.sku}}:{},className:o(f.NW$,f.UKO,f.kCT,p.BY,E.Kjg,!ve&&E.lwO)},De&&r.createElement(M,{isDesignerExperience:ve,handleGoBack:Te,translations:z}),C),r.createElement("div",{className:o(f.nzo,f.NW$,f.UKO,f.M0C,f.Tap,E.Kjg,E.aF$,p.oD)},P,r.createElement("div",{"data-testid":"banner-cta-block"},"ABOVE"===Oe&&J,[R.CUSTOMER_ACTION,R.LOYALTY_POINTS_EARLY_ACCESS,R.LOYALTY_POINTS_PRIORITY_ACCESS].includes(A)&&j,Boolean(x)&&r.createElement("div",{className:o(b.hkP,{[b.nmT]:"BELOW"===Oe||[R.CUSTOMER_ACTION,R.LOYALTY_POINTS_EARLY_ACCESS,R.LOYALTY_POINTS_PRIORITY_ACCESS].includes(A)})},H,x,ve&&Y,W),"BELOW"===Oe&&J,[R.INFORMATION,R.LOYALTY_POINTS_BONUS_POINTS].includes(A)&&j),he,Boolean(ne)&&c&&r.createElement("div",{className:o(b.hkP,b.nmT)},ne),T&&r.createElement("div",{className:o(b.Hm_,b.FOb)},ae),Boolean(U)&&r.createElement("div",{className:o(b.Hm_,b.FOb)},U),Boolean(V)&&!!(null==(t=N.productCoordinatedSet)?void 0:t.totalCount)&&r.createElement("div",{className:o(b.Hm_,b.FOb)},V),Boolean(G)&&!!(null==(n=N.atAGlanceAttributes)?void 0:n.length)&&r.createElement("div",{className:o(b.JQd,b.b1h)},G),Boolean(F)&&!!(null==(a=N.groupedAttributes)?void 0:a.length)&&r.createElement("div",{className:b.Ol8},F),Boolean(q)&&r.createElement("div",{className:b.Hm_},q),Boolean(Q)&&r.createElement("div",{className:o(b.Ol8,b.g5R)},Q),Boolean($)&&r.createElement("div",{className:o(b.Ol8,b.g5R)},$),X))),r.createElement("div",{style:{overflowX:"hidden"}},r.createElement("div",{className:o(b.Hm_,b.FOb)},Boolean(ne)&&!c&&r.createElement("div",{className:o(b.nmT)},ne),ye&&r.createElement(r.Fragment,null,oe)))),ue,e.fragments.tracking,e.fragments.glados,re,e.fragments.footer,e.fragments.miniCartNew,ee,te,ie,Ee,ke&&O&&fe,D&&be,me,pe,we))}))},19895:function(e){e.exports={tracking:{id:"tracking",url:""},footer:{id:"footer",url:""},glados:{id:"glados",url:""},miniCartNew:{id:"minicart",url:""}}},32078:function(e){e.exports={id:"b1e2a1f0788324d91da4339b3efa93e7326763a462e0cd593f091a1938e5707e"}},34617:function(e){e.exports={id:"c8c938dbcd7f75e2872b23cfbc4f1d5c039c6d70dab7fe0551e9bb094ed82737"}},30812:function(t){"use strict";t.exports=e},85959:function(e){"use strict";e.exports=t},32740:function(e){"use strict";e.exports=n},21775:function(e){"use strict";e.exports=a}},function(e){var t=function(t){return e(e.s=t)};return e.O(0,[29674],(function(){return t(6962),t(56298)})),e.O()}])}));
//# sourceMappingURL=https://zalando.de/dev/source-maps/product_view/index-ecfbcb4156363f7ff46f.map