define(["react","rendering-engine-api"],(function(e,t){return(self.renderingEngineWebpackJsonp=self.renderingEngineWebpackJsonp||[]).push([[11983],{95585:function(){window.__RENDERING_ENGINE_TRANSLATION_KEYS__={...window.__RENDERING_ENGINE_TRANSLATION_KEYS__,"product_structured-data":["meta.description.pds"]}},539:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(32740),a=n(85959),i=n(40557);const o="http://schema.org/OutOfStock",c="http://schema.org/InStock",s="https://schema.org/LimitedAvailability",l="http://schema.org/UsedCondition",u="http://schema.org/NewCondition",d={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5};var g=(e,t,n,r,a,i)=>__("meta.description.pds",e,t,n,r,a,i),p=(0,r.tile)().withQueries((e=>({data:{query:i,variables:{id:e.entity.id,isRatingsReviewsEnabled:!!e.ruleData.isRatingsReviewsEnabled}}}))).withProcessDependencies(((e,t)=>{if(!e.data||!e.data.product)return{action:"error",message:"Invalid product"};const{condition:n,media:r,simples:a,availabilityStatus:i,family:g}=e.data.product,{context:{navigation:{url:p}}}=t,m=!!t.ruleData.isRatingsReviewsEnabled,f=g?g.ratingAndReviews:null,y=f?f.rating:null,h=f?f.reviews:null;let E,v;const R=y?Math.round(1e3*y.average)/1e3:null,_=y?y.totalCount:0,b=h?h.totalCount:0;m&&R&&(E={"@type":"AggregateRating",ratingValue:R,bestRating:5,worstRating:1,ratingCount:_,reviewCount:b}),m&&h&&(v=h.edges.map((e=>{var t,n,r;const a=e.node;return{"@type":"Review",author:{"@type":"Person",name:a.authorName},reviewRating:{"@type":"Rating",ratingValue:d[a.rating],bestRating:5,worstRating:1},description:null==(t=a.originalContent)?void 0:t.title,reviewBody:null==(n=a.originalContent)?void 0:n.text,datePublished:a.publishedAt,inLanguage:null==(r=a.originalContent)?void 0:r.locale}})));const w=r.map((e=>"uri"in e?e.uri:"")).filter((e=>""!==e)),A=n&&"PRE_OWNED"===n.kind?l:u,N=a.map((e=>{let t;t=e.offer.stock&&"OUT_OF_STOCK"===e.offer.stock.quantity?o:"RESTRICTED"===i||"AVAILABLE_SOON"===i?s:"AVAILABLE"===i?c:o;const{original:n,promotional:r}=e.offer.price,a=r||n;return{"@type":"Offer",availability:t,price:""+a.amount/100,priceCurrency:a.currency,sku:e.sku,url:p.pathname}}));return{action:"render",data:{product:e.data.product,aggregateRating:E,reviewsArray:v,imageArray:w,itemCondition:A,offersArray:N},context:t.context}})).withRender((e=>{const{context:{navigation:{url:t}},data:{product:n,imageArray:r,itemCondition:i,offersArray:o,aggregateRating:c,reviewsArray:s}}=e,{brand:l,category:u,color:d,displayPrice:p,name:m,sku:f}=n,{original:y,promotional:h}=p,E=h?h.formatted:y.formatted,v=(new Date).toISOString().substring(0,10),R=d.name||"",_=d.label||"",b=R===_?R:R+"/"+_,w=g(u||"",l.name,m,b,E,v),A={"@context":"http://schema.org","@type":"Product",aggregateRating:c,reviews:s,brand:{"@type":"Brand",name:l.name},color:b,image:r,itemCondition:i,manufacturer:l.name,name:m,offers:o,sku:f,url:t.pathname,description:w};return a.createElement(a.Fragment,null,a.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(A)}}),a.createElement("script",{type:"application/javascript",dangerouslySetInnerHTML:{__html:'(function(){function forEach(seq,callback){for(let index=0;index<seq.length;index++){callback(seq[index]);}}try{setInterval(function(){if(document && document.querySelectorAll){forEach(document.querySelectorAll("iframe[id*=\'UBPNotif\']"),function(e){e.remove()});forEach(document.querySelectorAll("html[data-ubp-style-handle]"),function(e){e.style.marginTop=0});}},200);}catch(err){}})()'}}))}))},40557:function(e){e.exports={id:"edb81faf201043d396133c77a873b3c0cf31d01a0b195945e67e3be0a6df85ec"}},85959:function(t){"use strict";t.exports=e},32740:function(e){"use strict";e.exports=t}},function(e){var t=function(t){return e(e.s=t)};return e.O(0,[29674],(function(){return t(95585),t(539)})),e.O()}])}));
//# sourceMappingURL=https://zalando.de/dev/source-maps/product_structured-data/index-66afefd581a887a6fbbd.map