!function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var a="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},r=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){var r=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||function(e){var t=+new Date,a=Math.max(0,16-(t-o)),r=setTimeout(e,a);return o=t,r},o=+new Date;var n=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.mozCancelAnimationFrame||clearTimeout;Function.prototype.bind&&(r=r.bind(a),n=n.bind(a)),(e.exports=r).cancel=n})),o=(r.cancel,jQuery),n=o(window),i=o(document);!function(t){"function"==typeof define&&define.amd?define(["jquery"],(function(e){return t(e)})):"object"==("undefined"==typeof module?"undefined":e(module))&&"object"==e(module.exports)?exports=t(require("jquery")):t(jQuery)}((function(e){function t(e){var t=7.5625,a=2.75;return e<1/a?t*e*e:e<2/a?t*(e-=1.5/a)*e+.75:e<2.5/a?t*(e-=2.25/a)*e+.9375:t*(e-=2.625/a)*e+.984375}void 0!==e.easing&&(e.easing.jswing=e.easing.swing);var a=Math.pow,r=Math.sqrt,o=Math.sin,n=Math.cos,i=Math.PI,l=1.70158,s=1.525*l,c=2*i/3,d=2*i/4.5;e.extend(e.easing,{def:"easeOutQuad",swing:function(t){return e.easing[e.easing.def](t)},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return 1-(1-e)*(1-e)},easeInOutQuad:function(e){return e<.5?2*e*e:1-a(-2*e+2,2)/2},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return 1-a(1-e,3)},easeInOutCubic:function(e){return e<.5?4*e*e*e:1-a(-2*e+2,3)/2},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1-a(1-e,4)},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-a(-2*e+2,4)/2},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1-a(1-e,5)},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1-a(-2*e+2,5)/2},easeInSine:function(e){return 1-n(e*i/2)},easeOutSine:function(e){return o(e*i/2)},easeInOutSine:function(e){return-(n(i*e)-1)/2},easeInExpo:function(e){return 0===e?0:a(2,10*e-10)},easeOutExpo:function(e){return 1===e?1:1-a(2,-10*e)},easeInOutExpo:function(e){return 0===e?0:1===e?1:e<.5?a(2,20*e-10)/2:(2-a(2,-20*e+10))/2},easeInCirc:function(e){return 1-r(1-a(e,2))},easeOutCirc:function(e){return r(1-a(e-1,2))},easeInOutCirc:function(e){return e<.5?(1-r(1-a(2*e,2)))/2:(r(1-a(-2*e+2,2))+1)/2},easeInElastic:function(e){return 0===e?0:1===e?1:-a(2,10*e-10)*o((10*e-10.75)*c)},easeOutElastic:function(e){return 0===e?0:1===e?1:a(2,-10*e)*o((10*e-.75)*c)+1},easeInOutElastic:function(e){return 0===e?0:1===e?1:e<.5?-a(2,20*e-10)*o((20*e-11.125)*d)/2:a(2,-20*e+10)*o((20*e-11.125)*d)/2+1},easeInBack:function(e){return(l+1)*e*e*e-l*e*e},easeOutBack:function(e){return 1+(l+1)*a(e-1,3)+l*a(e-1,2)},easeInOutBack:function(e){return e<.5?a(2*e,2)*(7.189819*e-s)/2:(a(2*e-2,2)*((s+1)*(2*e-2)+s)+2)/2},easeInBounce:function(e){return 1-t(1-e)},easeOutBounce:t,easeInOutBounce:function(e){return e<.5?(1-t(1-2*e))/2:(1+t(2*e-1))/2}})}));var l=[],s=0,c=function(){var e=document.body,t=document.documentElement,a=window.pageYOffset||t.scrollTop,r="";r=a>s?"down":a<s?"up":"none";var o=Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight),n=window.innerHeight||t.clientHeight||e.clientHeight;0===a?r="start":a>=o-n&&(r="end"),l.forEach((function(e){"function"==typeof e&&e(r,a,s)})),s=a},d=function(e,t,a,r){var o,n=!1,i=0;function l(){o&&clearTimeout(o)}function s(){var s=this,c=Date.now()-i,d=arguments;function p(){i=Date.now(),a.apply(s,d)}n||(r&&!o&&p(),l(),void 0===r&&c>e?p():!0!==t&&(o=setTimeout(r?function(){o=void 0}:p,void 0===r?e-c:e)))}return"boolean"!=typeof t&&(r=a,a=t,t=void 0),s.cancel=function(){l(),n=!0},s}(200,(function(){l.length&&r(c)}));function p(){return{w:window.innerWidth,h:window.innerHeight}}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=e.getBoundingClientRect(),r=a.width||1,o=a.height||1,n=0,i=0;return a.top<0&&o+a.top>0?n=o+a.top:a.top>0&&a.top<p().h&&(n=p().h-a.top),a.left<0&&r+a.left>0?i=r+a.left:p().w-a.left>0&&(i=p().w-a.left),n=Math.min(n,o),(i=Math.min(i,r))*n/(r*o)>=t}function u(e,t){var a=!/^#/g.test(t),r=!1,o=e.children(".kioken-tabs-content").children('[data-tab="'.concat(t.replace(/^#/,""),'"]'));if(!(r=a?e.find(".kioken-tabs-buttons").find('[href="#tab-'.concat(t,'"]')):e.find(".kioken-tabs-buttons").find('[href="'.concat(t,'"]')))||!r.length||!o.length)return!1;r.addClass("kioken-tabs-buttons-item-active").siblings().removeClass("kioken-tabs-buttons-item-active"),o.addClass("kioken-tab-active").siblings().removeClass("kioken-tab-active");var n=o.find(".swiper-container")[0];return n&&n.swiper.update(),!0}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"easeInOutCubic",r=e.closest(".wp-block-kioken-accordion"),o=e.closest(".wp-block-kioken-accordion-item"),n=o.find(".kioken-accordion-item-content"),i=o.hasClass("kioken-accordion-item-active"),l=r.hasClass("kioken-accordion-collapse-one");if(i?(n.css("display","block").slideUp(t,a),o.removeClass("kioken-accordion-item-active")):(n.css("display","none").slideDown(t,a),o.addClass("kioken-accordion-item-active")),l){var s=r.find(".kioken-accordion-item-active").not(o);s.length&&(s.find(".kioken-accordion-item-content").css("display","block").slideUp(t,a),s.removeClass("kioken-accordion-item-active"))}c()}n.on("scroll load resize orientationchange throttlescroll.kioken",d),i.on("ready",d),window.initKiokenBlockScripts=function(){var e,t;o(".wp-block-kioken-splitheading").each((function(){if(o(this).find(".heading-line > *").wrapInner("<div class='txtwrap'></div>"),o(this).hasClass("has-transition")){var e=o(this).attr("data-trans-effect"),t=o(this).data("triggerhook"),a=o(this).attr("data-trans-delay");a=void 0!==a?a:0,a*=1e3;var r=o(this).attr("data-trans-rewind");r=void 0!==r&&"true"===r;var n="#"+o(this).attr("id"),i=n+" .heading-line > *",l=n+" .heading-line > .kt-heading-text",s=new ScrollMagic.Controller,c=anime.timeline();"reveal"==e?c.add({targets:i,translateY:["100%",0],duration:1200,delay:anime.stagger(120,{start:a}),easing:"easeInOutCubic"}):c.add({targets:i,translateY:[0,0],begin:function(e){var t;t=o(l),o(t).each((function(e){var t=o(this);setTimeout((function(){t.toggleClass("inviewbefore")}),120*e)})),setTimeout((function(){o(t).each((function(e){var t=o(this);setTimeout((function(){t.toggleClass("inviewafter")}),120*e)}))}),750)}}),new ScrollMagic.Scene({triggerElement:n,triggerHook:t,offset:"5%",reverse:r}).setAnime(c).addTo(s)}})),o(".wp-block-kioken-wrapper").each((function(){if(o(this).hasClass("has-transition")){var e=o(this).attr("data-trans-effect"),t=o(this).attr("data-trans-speed");t*=1e3;var a=o(this).attr("data-trans-dist"),r=o(this).attr("data-trans-delay");r*=1e3;var n=o(this).attr("data-trans-rewind"),i=".kt-wrapper_"+o(this).attr("data-object-id"),l=i+" > .kt-inner > .kinetic",s=i+" > .kt-inner",c=o(this).data("triggerhook"),d=o(this).data("trans-ease-effect");d.match(/^(Power0|Power1|Power2|Power3|Power4|SlowMo)$/)&&(d="Quart");var p=o(this).data("trans-easing")+d,y="true"===n,u=new ScrollMagic.Controller,f=anime.timeline();if("fadeInV"===e)f.add({targets:l,opacity:[0,1],translateY:[a,0],duration:t,delay:r,easing:p});else if("fadeInH"===e)f.add({targets:l,opacity:[0,1],translateX:[a,0],duration:t,delay:r,easing:p});else if("zoomInV"===e)f.add({targets:l,opacity:[0,1],scale:[1.05,1],translateY:[a,0],duration:t,delay:r,easing:p});else if("zoomInH"===e)f.add({targets:l,opacity:[0,1],scale:[1.05,1],translateX:[a,0],duration:t,delay:r,easing:p});else if("flipInV"===e)f.add({targets:l,opacity:[0,1],rotateX:[45,0],translateY:[a,0],duration:t,delay:r,easing:p});else if("flipInH"===e)f.add({targets:l,opacity:[0,1],rotateY:[45,0],translateX:[a,0],duration:t,delay:r,easing:p});else if("curtain"===e){var m=function(){var e="";e="left"==h?"top right":"bottom left",o(b).css({opacity:1,transform:"none"}),o(b+" > *").css({"margin-top":"0px"}),anime({targets:k,scaleX:0,transformOrigin:[e+" 0",e+" 0"],scaleY:1,duration:t,delay:r,easing:p,changeComplete:function(){setTimeout((function(){o(s).delay(2e3).css({overflow:"visible"})}),1e3)}})},g=function(){var e="bottom"==h?"top left":"bottom left";o(b).css({opacity:1,transform:"none"}),o(b+" > *").css({"margin-top":"0px"}),o(s).css({overflow:"visible"}),anime({targets:k,scaleY:0,transformOrigin:[e+" 0",e+" 0"],duration:t,delay:r,easing:p})},h=o(this).attr("data-curtain-from"),k=i+" .curtain",b=i+" .kinetic";anime.timeline(),"left"===h?f.add({targets:k,scaleX:[0,1],transformOrigin:["top left 0","top left 0"],scaleY:[1,1.01],duration:t,delay:r,easing:p,changeComplete:m}):"right"===h?f.add({targets:k,scaleX:[0,1],transformOrigin:["top right 0","top right 0"],scaleY:[1,1.01],duration:t,delay:r,easing:p,changeComplete:m}):"bottom"===h?f.add({targets:k,scaleY:[0,1],transformOrigin:["bottom left 0","bottom left 0"],duration:t,delay:r,easing:p,changeComplete:g}):f.add({targets:k,scaleY:[0,1],transformOrigin:["top left 0","top left 0"],duration:t,delay:r,easing:p,changeComplete:g})}else f.add({targets:l,opacity:[0,1],duration:t,delay:r,easing:"easeInOutSine"});var v=new ScrollMagic.Scene({triggerElement:i,triggerHook:c,offset:"100%",reverse:y}).on("leave",(function(t){v.offset(),v.triggerHook(1),"curtain"===e&&y&&o(i+" .kinetic").css({opacity:0}),v.offset(0)})).on("end",(function(e){v.offset("100%"),v.triggerHook(1)})).setAnime(f).addTo(u)}})),o(".wp-block-kioken-testimonials-carousel").each((function(){var e=".kt-testimonial-carousel_"+o(this).attr("data-object-id"),t=e+" .swiper-container",a={speed:1e3*(parseFloat(o(t).attr("data-speed"))||0),slidesPerView:parseInt(o(t).attr("data-perview"),10),spaceBetween:parseFloat(o(t).attr("data-spacebtw"))||0,centeredSlides:"true"===o(t).attr("data-centered"),loop:"true"===o(t).attr("data-loop"),freeMode:"true"===o(t).attr("data-freescroll"),autoplay:parseFloat(o(t).attr("data-autoplay"))>0&&{delay:1e3*parseFloat(o(t).attr("data-autoplay")),disableOnInteraction:!0},roundLengths:!0,keyboard:{enabled:!0,onlyInViewport:!0},grabCursor:!0,navigation:{nextEl:o(e).find(".swp_btn_wrap .swp-go-next"),prevEl:o(e).find(".swp_btn_wrap .swp-go-prev")},breakpoints:{1024:{slidesPerView:1,spaceBetween:0}}};o(e+" .swiper-wrapper").children().length>=2&&(o(this).addClass("swp-ready"),new Swiper(t,a))})),(e=o(".wp-block-kioken-kinetic-posts.is-carousel")).each((function(){var t="#"+o(this).attr("id"),a=t+" .swiper-container",r={roundLengths:!0,keyboard:!0,grabCursor:!0,speed:1e3*(parseFloat(o(t).attr("data-speed"))||0),slidesPerView:parseInt(o(t).attr("data-perview"),10),spaceBetween:parseFloat(o(t).attr("data-spacebtw"))||0,centeredSlides:"true"===o(t).attr("data-centerslides"),loop:"true"===o(t).attr("data-loop"),freeMode:"true"===o(t).attr("data-freemode"),autoHeight:"true"===o(t).attr("data-autoheight"),navigation:{nextEl:o(t).find(".swp_btn_wrap .swp-go-next"),prevEl:o(t).find(".swp_btn_wrap .swp-go-prev")},breakpoints:{768:{slidesPerView:1,spaceBetween:30}},on:{init:function(){e.addClass("swp-ready")}}};new Swiper(a,r)})),t=window.location.hash,o(".wp-block-kioken-tabs").each((function(){var e=o(this).attr("id"),a=o("#"+e),r=a.attr("data-tab-active"),n=!1;a.find(".kioken-tabs-buttons-item").on("click",(function(e){e.preventDefault();var t=o(this).attr("data-tab")||this.hash;u(a,t)})),t&&(n=u(a,t)),!n&&r&&(n=u(a,"#".concat(r))),!n&&r&&(n=u(a,r));var i=a.find(".swiper-container")[0];i&&i.swiper.update()})),function(){var e=window.location.hash;console.log(e),o(".wp-block-kioken-accordion:not(.kioken-accordion-ready)").each((function(){var t=o(this);if(t.addClass("kioken-accordion-ready"),t.on("click",".wp-block-kioken-accordion-item .kioken-accordion-item-heading",(function(e){e.preventDefault(),f(o(this))})),e){var a=t.find('.wp-block-kioken-accordion-item .kioken-accordion-item-heading[href="'.concat(e,'"]'));a.length&&f(a,0)}}))}(),function(){if(o("body").hasClass("is_IE"))return;var e=document.querySelectorAll(".js-parallax");!function(e,t,a){for(var r=0;r<e.length;r++)t.call(a,r,e[r])}(e,(function(e,t){var a,r=t.getAttribute("data-jarax-speed"),o=t.getAttribute("data-jarax-startpos");t.getAttribute("data-jarax-video");a=r||.5,jarallax(t,{speed:a,elementInViewport:t,imgPosition:o||"50% 50%",disableParallax:/iPad|iPhone|iPod|Android/})}))}(),o(".wp-block-kioken-countup.animated").each((function(){var e=o(this).data("object-id"),t=o(this).find(".kt-count").text();t=parseInt(t,10),o(this).find(".kt-count").attr("class");var a=o(this).attr("data-count-from"),r={var:parseInt(a)},n=".kt-countup_"+e+" .kt-count",i={count:r.var},l=anime.timeline();l.add({targets:i,autoplay:!1,count:t,easing:"easeInOutQuint",round:1,update:function(){var e=document.querySelector(n);null!=e&&(e.innerHTML=i.count)}});var s=new ScrollMagic.Controller;new ScrollMagic.Scene({triggerElement:this,triggerHook:1,reverse:!1}).setAnime(l).addTo(s)})),o(".otb-date").datepicker({firstDay:1,dateFormat:"mm/dd/yy",maxDate:"+3m",minDate:"0",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],nextText:"Next",prevText:"Prev",beforeShow:function(){o("#ui-datepicker-div").addClass("kioken-datepicker")}}),setTimeout((function(){!function(){if(!o(".is-bavarian #site-wrap").hasClass("first-time-loading")){({init:function(){this.elem=o(".wp-block-kioken-map"),this.renderMap()},renderMap:function(){var e=this;e.elem.each((function(t,a){var r=o(this).attr("data-map-attr");r=r.replace(/\/q/g,'"').split("||");var n=JSON.parse("{"+r+"}"),i=e.mapStyles(n.skin);void 0===i&&(i=[]),i.push({featureType:"administrative.land_parcel",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"poi.business",stylers:[{visibility:"off"}]},{featureType:"transit",stylers:[{visibility:"off"}]});var l=new google.maps.Map(a,{zoom:parseInt(n.zoom),center:new google.maps.LatLng(n.lat,n.lng),styles:i,mapTypeControl:"true"==n.mapTypeControl,zoomControl:"true"==n.zoomControl,streetViewControl:"true"==n.streetViewControl,fullscreenControl:"true"==n.fullscreenControl});new google.maps.Marker({position:new google.maps.LatLng(n.lat,n.lng),map:l,icon:{url:ktAtts.url+"/dist/images/markers/"+n.skin+".svg",scaledSize:new google.maps.Size(n.iconSize,n.iconSize)}}),l.setCenter(new google.maps.LatLng(n.lat,n.lng))}))},mapStyles:function(e){var t={silver:[{elementType:"geometry",stylers:[{color:"#f5f5f5"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f5f5"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#dadada"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#c9c9c9"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]}],retro:[{elementType:"geometry",stylers:[{color:"#ebe3cd"}]},{elementType:"labels.text.fill",stylers:[{color:"#523735"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f1e6"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#c9b2a6"}]},{featureType:"administrative.land_parcel",elementType:"geometry.stroke",stylers:[{color:"#dcd2be"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#ae9e90"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#93817c"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#a5b076"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#447530"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#f5f1e6"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#fdfcf8"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#f8c967"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#e9bc62"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#e98d58"}]},{featureType:"road.highway.controlled_access",elementType:"geometry.stroke",stylers:[{color:"#db8555"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#806b63"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"transit.line",elementType:"labels.text.fill",stylers:[{color:"#8f7d77"}]},{featureType:"transit.line",elementType:"labels.text.stroke",stylers:[{color:"#ebe3cd"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#b9d3c2"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#92998d"}]}],dark:[{elementType:"geometry",stylers:[{color:"#212121"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{elementType:"labels.text.stroke",stylers:[{color:"#212121"}]},{featureType:"administrative",elementType:"geometry",stylers:[{color:"#757575"}]},{featureType:"administrative.country",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"administrative.land_parcel",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#181818"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"poi.park",elementType:"labels.text.stroke",stylers:[{color:"#1b1b1b"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#2c2c2c"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#8a8a8a"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#373737"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#3c3c3c"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#4e4e4e"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#3d3d3d"}]}],night:[{elementType:"geometry",stylers:[{color:"#242f3e"}]},{elementType:"labels.text.fill",stylers:[{color:"#746855"}]},{elementType:"labels.text.stroke",stylers:[{color:"#242f3e"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#263c3f"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#6b9a76"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#38414e"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#212a37"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#9ca5b3"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#746855"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#1f2835"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#f3d19c"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#2f3948"}]},{featureType:"transit.station",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#515c6d"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#17263c"}]}],aubergine:[{elementType:"geometry",stylers:[{color:"#1d2c4d"}]},{elementType:"labels.text.fill",stylers:[{color:"#8ec3b9"}]},{elementType:"labels.text.stroke",stylers:[{color:"#1a3646"}]},{featureType:"administrative.country",elementType:"geometry.stroke",stylers:[{color:"#4b6878"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#64779e"}]},{featureType:"administrative.province",elementType:"geometry.stroke",stylers:[{color:"#4b6878"}]},{featureType:"landscape.man_made",elementType:"geometry.stroke",stylers:[{color:"#334e87"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#023e58"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#283d6a"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#6f9ba5"}]},{featureType:"poi",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#023e58"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#3C7680"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#304a7d"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#98a5be"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#2c6675"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#255763"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#b0d5ce"}]},{featureType:"road.highway",elementType:"labels.text.stroke",stylers:[{color:"#023e58"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#98a5be"}]},{featureType:"transit",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"transit.line",elementType:"geometry.fill",stylers:[{color:"#283d6a"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#3a4762"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#0e1626"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#4e6d70"}]}]};return t[e]}}).init()}}()}),500),function(){if(void 0===window.VideoWorker)return void console.log("sicti");o(".wp-block-kioken-videobox:not(.kioken-video-ready)").each((function(){var e=o(this).addClass("kioken-video-ready"),t=e.data("video"),a=e.data("click-action"),r="true"===e.attr("data-video-autoplay");r&&console.log("autoplay active");var n="true"===e.data("video-autopause"),i=e.find(".kioken-video-fullscreen-close-icon");i=i.length?i.html():e.data("fullscreen-action-close-icon")?'<span class="'.concat(e.data("fullscreen-action-close-icon"),'"></span>'):"";var s=e.data("fullscreen-background-color"),c=e.find(".kioken-video-poster"),d=!1,u=!1,f=0,m=e.data("video-aspect-ratio");m=m&&m.split(":")[0]&&m.split(":")[1]?m.split(":")[0]/m.split(":")[1]:16/9,parseFloat(e.data("video-volume"))||(f=1),r&&(f=1);var g,h=new window.VideoWorker(t,{autoplay:0,loop:0,mute:f,volume:parseFloat(e.data("video-volume"))||0,showContols:1});if(h&&h.isValid()){var k=0,b=0,v=!1;e.on("click",(function(){b||(b=1,"fullscreen"===a?k?d&&(d.fadeIn(200),h.play()):(e.addClass("kioken-video-loading"),h.getIframe((function(e){var t,a=(u=o(e)).parent();(d=o('<div class="kioken-video-fullscreen" style="background-color: '.concat(s,';">')).appendTo("body").append(o('<div class="kioken-video-fullscreen-close">'.concat(i,"</div>"))).append(o('<div class="kioken-video-fullscreen-frame">').append(u))).data("kioken-video-aspect-ratio",m),a.remove(),d.fadeIn(200),d.on("click",".kioken-video-fullscreen-close",(function(){h.pause(),d.fadeOut(200)})),t=p(),o(".kioken-video-fullscreen:visible .kioken-video-fullscreen-frame").each((function(){var e,a,r=o(this),n=r.data("kioken-video-aspect-ratio")||16/9;n>t.w/t.h?a=(e=.9*t.w)/n:e=(a=.9*t.h)*n,r.css({width:e,height:a,top:(t.h-a)/2,left:(t.w-e)/2})})),h.play()})),k=1):k?h.play():(e.addClass("kioken-video-loading"),h.getIframe((function(t){var a=(u=o(t)).parent();o('<div class="kioken-video-frame">').appendTo(e).append(u),a.remove(),h.play()})),k=1))})),c.length||h.getImageURL((function(t){c=o('<div class="kioken-video-poster"><img src="'.concat(t,'" alt=""></div>')),e.append(c)}));var T=!1;h.on("ready",(function(){e.removeClass("kioken-video-loading"),"fullscreen"!==a&&e.addClass("kioken-video-playing"),h.play()})),h.on("play",(function(){v=!0})),h.on("pause",(function(){v=!1,T=!0,"fullscreen"===a&&(b=0)})),"fullscreen"!==a&&(r||n)&&(g=function(){!T&&!v&&r&&y(e[0],.6)&&(b?h.play():e.click()),v&&n&&!y(e[0],.6)&&h.pause()},l.push(g))}}))}(),"function"==typeof VanillaTilt&&(o(".tilt-temporary").each((function(){!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)&&!o("body").hasClass("is_IE")&&VanillaTilt.init(document.querySelectorAll(".tilt-temporary"))})),o(".wp-block-kioken-feature.has-tilt").each((function(){var e=".kioken-feature-"+o(this).attr("data-ojbect-id")+" .wp-block-kioken-feature__inner",t=o(this).attr("data-tilt-max"),a=o(this).attr("data-single-axis"),r="none"===a?null:a;VanillaTilt.init(document.querySelectorAll(e),{max:t,scale:1.15,speed:900,axis:r})}))),o(window).width()<769||o(".wp-block-kioken-wrapper").each((function(){if(o(this).hasClass("has-scrollax")){var e=o(this).attr("data-scrollax-val"),t=o(this).attr("data-auto-distance"),a=o(this).attr("data-scrollax-speed"),r=o(this).find(" > .kt-inner:first-child"),n=".kt-wrapper_"+o(this).attr("data-object-id");o(r).height(),"true"===t&&(e>0?"fast"===a?o(this).css({marginTop:"-"+e/2+"px"}):o(this).css({marginBottom:e+"px"}):o(this).css({marginTop:Math.abs(e)+"px"})),"fast"===a?e*=1.5:"veryfast"===a&&e<0?e*=3:e=e;var i=n+" > .kt-inner:first-child",l=anime.timeline();l.add({targets:i,translateY:e,round:1,easing:"linear"});var s=new ScrollMagic.Controller;new ScrollMagic.Scene({triggerElement:n,triggerHook:1,duration:"100%"}).setAnime(l).on("progress",(function(e){})).addTo(s)}})),o(".has-animator").each((function(e,t){var a,r,n,i,l,s,c,d,p,y,u=anime.timeline(),f=new ScrollMagic.Controller,m=o(this).data("anim-from"),g=1e3*parseFloat(o(this).data("anim-duration")),h=parseFloat(o(this).data("anim-distance")),k=!!o(this).data("anim-rewind"),b=o(this).data("anim-easing"),v=o(this).data("anim-effect"),T=o(this).hasClass("ext-vt-fliprotation");T&&console.log("flip var");var w=o(this).data("reveal-type"),x=o(this).data("reveal-from"),C=o(this).data("reveal-color");n="left"==x?"left top":"right"==x?"right top":"bottom"==x?"center bottom":"center top",i="left"==x||"right"==x?[1,0]:[1,1],l="top"==x||"bottom"==x?[1,0]:[1,1],s="left"==x||"right"==x?[0,1]:[1,1],d="top"==x||"bottom"==x?[0,1]:[1,1],c="left"==x||"right"==x?[1,0]:[1,1],p="top"==x||"bottom"==x?[1,0]:[1,1],y="left"==x?"right top":"right"==x?"left top":"bottom"==x?"center top":"center bottom","revealer"==m&&(o(this).prepend("<span class='revealer kb_posa_full'></span>"),a=t.querySelectorAll(".revealer"),o(a).css({backgroundColor:C}),"seq"==w&&o(this).prepend("<span class='revealer-before kb_posa_full'></span>"),r=t.querySelectorAll(".revealer-before"));var S,A=o(this).data("anim-stagger");o.fn.extend({hasClasses:function(e){for(var t in e)if(o(this).hasClass(e[t]))return!0;return!1}}),A&&(o(this).css({visibility:"visible"}),t=o(this).hasClass("wp-block-kioken-wrapper")?t.querySelectorAll(".kinetic > *"):o(this).hasClasses(["wp-block-kioken-features","wp-block-kioken-feature","wp-block-gallery","wp-block-kioken-visual-list","wp-block-group"])?t.querySelectorAll(".has-animator > * > *"):o(this).hasClass("wp-block-kioken-rowlayout")?t.querySelectorAll(".kt-row-column-wrap > *"):o(this).hasClass("wp-block-kioken-column")?t.querySelectorAll(".kt-inside-inner-col > div > *"):t.querySelectorAll(".has-animator > *")),S="none"==b?"linear":b+v;var I=parseFloat(o(this).data("anim-offset"));I=I||0;var O=parseFloat(o(this).data("anim-delay"));O=O||0;var M=parseFloat(o(this).data("anim-stagger-delay"));M=M||120;var F=T?180:0,_=parseFloat(o(this).data("anim-scale-x"));_=_||1;var Y=parseFloat(o(this).data("anim-scale-y"));Y=Y||1;var E=parseFloat(o(this).data("anim-rotate-x"));E=E||0;var H=parseFloat(o(this).data("anim-rotate-y"));H=H||0;var q=parseFloat(o(this).data("anim-skew-x"));q=q||0;var P=parseFloat(o(this).data("anim-skew-y"));P=P||0;var j=0,X=0;"horizontal"===m&&(j=h),"vertical"===m&&(X=h);var V=parseFloat(o(this).data("anim-scale-x"));V=V||1;var B=parseFloat(o(this).data("anim-scale-y"));function Q(){t.style.removeProperty("transform"),t.removeAttribute("data-anim-duration"),t.removeAttribute("data-anim-offset"),t.removeAttribute("data-anim-distance"),t.removeAttribute("data-anim-delay"),t.removeAttribute("data-anim-easing"),t.removeAttribute("data-anim-effect"),t.removeAttribute("data-anim-from"),t.removeAttribute("data-anim-scale-x"),t.removeAttribute("data-anim-scale-y"),t.removeAttribute("data-anim-rotate-x"),t.removeAttribute("data-anim-rotate-y"),t.removeAttribute("data-anim-rotate-y"),t.removeAttribute("data-anim-skew-x"),t.removeAttribute("data-anim-skew-y"),t.removeAttribute("data-anim-stagger"),t.removeAttribute("data-anim-stagger-delay"),t.removeAttribute("data-anim-rewind"),t.removeAttribute("data-reveal-from"),t.removeAttribute("data-reveal-type"),t.removeAttribute("data-reveal-color")}B=B||1,"revealer"!==m?A?u.add({targets:t,duration:g,delay:anime.stagger(M,{start:O}),opacity:[0,1],scaleX:[_,1],scaleY:[Y,1],rotateZ:[F,F],rotateX:[E,0],rotateY:[H,0],skewX:[q,0],skewY:[P,0],translateX:[j,0],translateY:[X,0],easing:S}):u.add({targets:t,duration:g,delay:O,opacity:[0,1],scaleX:[_,1],scaleY:[Y,1],rotateZ:[F,F],rotateX:[E,0],rotateY:[H,0],skewX:[q,0],skewY:[P,0],translateX:[j,0],translateY:[X,0],easing:S,changeComplete:function(e){Q()}}):"direct"==w?u.add({targets:a,duration:g,scaleX:i,scaleY:l,transformOrigin:[n+" 0",n+" 0"],rotateZ:[F,F],easing:S,delay:O,begin:function(e){o(t).css({visibility:"visible"})},changeComplete:function(e){Q()}}):u.add({targets:a,duration:g,scaleX:s,scaleY:d,transformOrigin:[n+" 0",n+" 0"],rotateZ:[F,F],easing:S,delay:O,begin:function(e){o(r).css({opacity:1})}}).add({targets:a,duration:g,scaleX:c,scaleY:p,transformOrigin:[y+" 0",y+" 0"],rotateZ:[F,F],easing:S,begin:function(e){o(r).css({opacity:0})},changeComplete:function(e){Q()}}),new ScrollMagic.Scene({triggerElement:t,triggerHook:"onEnter",reverse:k,offset:I}).on("enter",(function(e){o(t).css({visibility:"visible"}),(E||H)&&o(t).parent().css({perspective:"50em"})})).on("leave",(function(e){k&&u.reverse()})).setAnime(u).addTo(f)}))},jQuery,initKiokenBlockScripts()}();