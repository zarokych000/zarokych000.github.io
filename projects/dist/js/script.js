"use strict";var swiper,init=!1,spinner=!1,saunaData=[{name:"sauna-type-1",stdSaunas:[{type:"materials",key:"Панели для внутреней отделки сауны",value:"<b>Radiata 15x75mm светлая</b>"},{type:"materials",key:"Доска для полов и отделки зашивок",value:"Тремоольха Medium 190.25 x 92"},{type:"materials",key:"Опоры полов в сауну",value:"Брус термососна 42 x 68"},{type:"materials",key:"Пароизоляция для саун",value:"Фольга Alukraft 25m2"},{type:"materials",key:"Теплоизоляция для саун",value:"Минеральная вата"},{type:"materials",key:"Диффузор",value:"Лючок PISLAABB 100"},{type:"materials",key:"sauna-service-1",value:"Скрытая значение 1"},{type:"materials",key:"sauna-service-2",value:"Скрытая значение 2"},{type:"materials",key:"sauna-service-3",value:"Скрытая значение 3"},{type:"assembly",key:"assembly-1",value:"Какое то название услуги 1"},{type:"assembly",key:"assembly-2",value:"Какое то название услуги 2"},{type:"assembly",key:"assembly-3",value:"Какое то название услуги 3"},{type:"assembly",key:"assembly-4",value:"Какое то название услуги 4"},{type:"assembly",key:"assembly-5",value:"Какое то название услуги 5"}],cmfSaunas:[{type:"materials",key:"sauna-inner-pane",value:"Radiata 15x75mm светлая cmf"},{type:"materials",key:"sauna-floor-desc",value:"Тремоольха Medium 190.25 x 92 cmf"},{type:"materials",key:"sauna-floor-fundament",value:"Брус термососна 42 x 68 cmf"},{type:"materials",key:"sauna-steem-isolation",value:"Фольга Alukraft 25m2 cmf"},{type:"materials",key:"sauna-heat-isolation",value:"Минеральная вата cmf"},{type:"materials",key:"sauna-diffuser",value:"Лючок PISLAABB 100 cmf"},{type:"materials",key:"sauna-service-1",value:"Скрытая значение 1 cmf"},{type:"materials",key:"sauna-service-2",value:"Скрытая значение 2 cmf"},{type:"materials",key:"sauna-service-3",value:"Скрытая значение 3 cmf"},{type:"assembly",key:"assembly-1",value:"Какое то название услуги 1 cmf"},{type:"assembly",key:"assembly-2",value:"Какое то название услуги 2 cmf"},{type:"assembly",key:"assembly-3",value:"Какое то название услуги 3 cmf"},{type:"assembly",key:"assembly-4",value:"Какое то название услуги 4 cmf"},{type:"assembly",key:"assembly-5",value:"Какое то название услуги 5 cmf"}],prmSaunas:[{type:"materials",key:"sauna-inner-pane",value:"Radiata 15x75mm светлая prm"},{type:"materials",key:"sauna-floor-desc",value:"Тремоольха Medium 190.25 x 92 prm"},{type:"materials",key:"sauna-floor-fundament",value:"Брус термососна 42 x 68 prm"},{type:"materials",key:"sauna-steem-isolation",value:"Фольга Alukraft 25m2 prm"},{type:"materials",key:"sauna-heat-isolation",value:"Минеральная вата prm"},{type:"materials",key:"sauna-diffuser",value:"Лючок PISLAABB 100 prm"},{type:"materials",key:"sauna-service-1",value:"Скрытая значение 1 prm"},{type:"materials",key:"sauna-service-2",value:"Скрытая значение 2 prm"},{type:"materials",key:"sauna-service-3",value:"Скрытая значение 3 prm"},{type:"assembly",key:"assembly-1",value:"Какое то название услуги 1 prm"},{type:"assembly",key:"assembly-2",value:"Какое то название услуги 2 prm"},{type:"assembly",key:"assembly-3",value:"Какое то название услуги 3 prm"},{type:"assembly",key:"assembly-4",value:"Какое то название услуги 4 prm"},{type:"assembly",key:"assembly-5",value:"Какое то название услуги 5 prm"}],stdPrice:["270 000","195 000"],cmfPrice:["340 000","290 000"],prmPrice:["460 000","350 000"],sizes:"1505 x 2100",model:"h2500"},{name:"sauna-type-2",stdSaunas:[{type:"materials",key:"sauna-inner-pane",value:"<b>Radiata 15x75mm светлая type-2</b>"},{type:"materials",key:"sauna-floor-desc",value:"Тремоольха Medium 190.25 x 92 type-2"},{type:"materials",key:"sauna-floor-fundament",value:"Брус термососна 42 x 68 type-2"},{type:"assembly",key:"assembly-1",value:"Какое то название услуги 1 type-2"},{type:"assembly",key:"assembly-2",value:"Какое то название услуги 2 type-2"}],cmfSaunas:[{type:"materials",key:"sauna-inner-pane",value:"Radiata 15x75mm светлая cmf type-2"},{type:"materials",key:"sauna-floor-desc",value:"Тремоольха Medium 190.25 x 92 cmf type-2"},{type:"materials",key:"sauna-floor-fundament",value:"Брус термососна 42 x 68 cmf type-2"},{type:"materials",key:"sauna-steem-isolation",value:"Фольга Alukraft 25m2 cmf type-2"},{type:"assembly",key:"assembly-1",value:"Какое то название услуги 1 cmf type-2"},{type:"assembly",key:"assembly-2",value:"Какое то название услуги 2 cmf type-2"}],prmSaunas:[{type:"materials",key:"sauna-inner-pane",value:"Radiata 15x75mm светлая prm type-2"},{type:"materials",key:"sauna-floor-desc",value:"Тремоольха Medium 190.25 x 92 prm type-2"},{type:"materials",key:"sauna-floor-fundament",value:"Брус термососна 42 x 68 prm type-2"},{type:"assembly",key:"assembly-1",value:"Какое то название услуги 1 prm type-2"},{type:"assembly",key:"assembly-2",value:"Какое то название услуги 2 prm type-2"},{type:"assembly",key:"assembly-3",value:"Какое то название услуги 3 prm type-2"}],sizes:"1505 x 2100",model:"h2500"},{name:"sauna-type-3",stdSaunas:[{type:"materials",key:"sauna-inner-pane",value:"Radiata 15x75mm светлая type-3"},{type:"materials",key:"sauna-floor-desc",value:"Тремоольха Medium 190.25 x 92 type-3"},{type:"materials",key:"sauna-floor-fundament",value:"Брус термососна 42 x 68 type-3"},{type:"assembly",key:"assembly-1",value:"Какое то название услуги 1 type-3"},{type:"assembly",key:"assembly-2",value:"Какое то название услуги 2 type-3"}],cmfSaunas:[{type:"materials",key:"sauna-inner-pane",value:"Radiata 15x75mm светлая cmf type-3"},{type:"materials",key:"sauna-floor-desc",value:"Тремоольха Medium 190.25 x 92 cmf type-3"},{type:"materials",key:"sauna-floor-fundament",value:"Брус термососна 42 x 68 cmf type-3"},{type:"materials",key:"sauna-steem-isolation",value:"Фольга Alukraft 25m2 cmf type-3"},{type:"assembly",key:"assembly-1",value:"Какое то название услуги 1 cmf type-3"},{type:"assembly",key:"assembly-2",value:"Какое то название услуги 2 cmf type-3"}],prmSaunas:[{type:"materials",key:"sauna-inner-pane",value:"Radiata 15x75mm светлая prm type-3"},{type:"materials",key:"sauna-floor-desc",value:"Тремоольха Medium 190.25 x 92 prm type-3"},{type:"materials",key:"sauna-floor-fundament",value:"Брус термососна 42 x 68 prm type-3"},{type:"assembly",key:"assembly-1",value:"Какое то название услуги 1 prm type-2"},{type:"assembly",key:"assembly-2",value:"Какое то название услуги 2 prm type-2"},{type:"assembly",key:"assembly-3",value:"Какое то название услуги 3 prm type-2"}],stdPrice:["270 000 3","195 000 3"],cmfPrice:["340 000 3","290 000 3"],prmPrice:["460 000 3","350 000 3"],sizes:"1505 x 2100",model:"h2500"},{name:"sauna-type-4",stdSaunas:[{type:"materials",key:"sauna-inner-pane",value:"Radiata 15x75mm светлая type-4"},{type:"materials",key:"sauna-floor-desc",value:"Тремоольха Medium 190.25 x 92 type-4"},{type:"materials",key:"sauna-floor-fundament",value:"Брус термососна 42 x 68 type-4"},{type:"assembly",key:"assembly-1",value:"Какое то название услуги 1 type-4"},{type:"assembly",key:"assembly-2",value:"Какое то название услуги 2 type-4"}],cmfSaunas:[{type:"materials",key:"sauna-inner-pane",value:"Radiata 15x75mm светлая cmf type-2"},{type:"materials",key:"sauna-floor-desc",value:"Тремоольха Medium 190.25 x 92 cmf type-2"},{type:"materials",key:"sauna-floor-fundament",value:"Брус термососна 42 x 68 cmf type-2"},{type:"materials",key:"sauna-steem-isolation",value:"Фольга Alukraft 25m2 cmf type-2"},{type:"assembly",key:"assembly-1",value:"Какое то название услуги 1 cmf type-2"},{type:"assembly",key:"assembly-2",value:"Какое то название услуги 2 cmf type-2"}],prmSaunas:[{type:"materials",key:"sauna-inner-pane",value:"Radiata 15x75mm светлая prm type-2"},{type:"materials",key:"sauna-floor-desc",value:"Тремоольха Medium 190.25 x 92 prm type-2"},{type:"materials",key:"sauna-floor-fundament",value:"Брус термососна 42 x 68 prm type-2"},{type:"assembly",key:"assembly-1",value:"Какое то название услуги 1 prm type-2"},{type:"assembly",key:"assembly-2",value:"Какое то название услуги 2 prm type-2"},{type:"assembly",key:"assembly-3",value:"Какое то название услуги 3 prm type-2"}],stdPrice:["270 000 4","195 000 4"],cmfPrice:["340 000 4","290 000 4"],prmPrice:["460 000 4","350 000 4"],sizes:"1505 x 2100",model:"h2500"},{name:"sauna-type-5",stdSaunas:[{type:"materials",key:"sauna-inner-pane",value:"Radiata 15x75mm светлая type-5"},{type:"materials",key:"sauna-floor-desc",value:"Тремоольха Medium 190.25 x 92 type-5"},{type:"materials",key:"sauna-floor-fundament",value:"Брус термососна 42 x 68 type-5"},{type:"assembly",key:"assembly-1",value:"Какое то название услуги 1 type-5"},{type:"assembly",key:"assembly-2",value:"Какое то название услуги 2 type-2"}],cmfSaunas:[{type:"materials",key:"sauna-inner-pane",value:"Radiata 15x75mm светлая cmf type-2"},{type:"materials",key:"sauna-floor-desc",value:"Тремоольха Medium 190.25 x 92 cmf type-2"},{type:"materials",key:"sauna-floor-fundament",value:"Брус термососна 42 x 68 cmf type-2"},{type:"materials",key:"sauna-steem-isolation",value:"Фольга Alukraft 25m2 cmf type-2"},{type:"assembly",key:"assembly-1",value:"Какое то название услуги 1 cmf type-2"},{type:"assembly",key:"assembly-2",value:"Какое то название услуги 2 cmf type-2"}],prmSaunas:[{type:"materials",key:"sauna-inner-pane",value:"Radiata 15x75mm светлая prm type-2"},{type:"materials",key:"sauna-floor-desc",value:"Тремоольха Medium 190.25 x 92 prm type-2"},{type:"materials",key:"sauna-floor-fundament",value:"Брус термососна 42 x 68 prm type-2"},{type:"assembly",key:"assembly-1",value:"Какое то название услуги 1 prm type-2"},{type:"assembly",key:"assembly-2",value:"Какое то название услуги 2 prm type-2"},{type:"assembly",key:"assembly-3",value:"Какое то название услуги 3 prm type-2"}],stdPrice:["270 000 5","195 000 5"],cmfPrice:["340 000 5","290 000 5"],prmPrice:["460 000 5","350 000 5"],sizes:"1505 x 2100",model:"h2500"},{name:"sauna-type-6",stdSaunas:[{type:"materials",key:"sauna-inner-pane",value:"Radiata 15x75mm светлая type-6"},{type:"materials",key:"sauna-floor-desc",value:"Тремоольха Medium 190.25 x 92 type-6"},{type:"materials",key:"sauna-floor-fundament",value:"Брус термососна 42 x 68 type-6"},{type:"assembly",key:"assembly-1",value:"Какое то название услуги 1 type-6"},{type:"assembly",key:"assembly-2",value:"Какое то название услуги 2 type-2"}],cmfSaunas:[{type:"materials",key:"sauna-inner-pane",value:"Radiata 15x75mm светлая cmf type-6"},{type:"materials",key:"sauna-floor-desc",value:"Тремоольха Medium 190.25 x 92 cmf type-2"},{type:"materials",key:"sauna-floor-fundament",value:"Брус термососна 42 x 68 cmf type-2"},{type:"materials",key:"sauna-steem-isolation",value:"Фольга Alukraft 25m2 cmf type-2"},{type:"assembly",key:"assembly-1",value:"Какое то название услуги 1 cmf type-6"},{type:"assembly",key:"assembly-2",value:"Какое то название услуги 2 cmf type-6"}],prmSaunas:[{type:"materials",key:"sauna-inner-pane",value:"Radiata 15x75mm светлая prm type-2"},{type:"materials",key:"sauna-floor-desc",value:"Тремоольха Medium 190.25 x 92 prm type-2"},{type:"materials",key:"sauna-floor-fundament",value:"Брус термососна 42 x 68 prm type-2"},{type:"assembly",key:"assembly-1",value:"Какое то название услуги 1 prm type-2"},{type:"assembly",key:"assembly-2",value:"Какое то название услуги 2 prm type-6"},{type:"assembly",key:"assembly-3",value:"Какое то название услуги 3 prm type-6"}],stdPrice:["270 000 6","195 000 6"],cmfPrice:["340 000 6","290 000 6"],prmPrice:["460 000 6","350 000 6"],sizes:"1505 x 2100",model:"h2500"},{name:"sauna-type-7",stdSaunas:[{type:"materials",key:"sauna-inner-pane",value:"Radiata 15x75mm светлая type-7"},{type:"materials",key:"sauna-floor-desc",value:"Тремоольха Medium 190.25 x 92 type-7"},{type:"materials",key:"sauna-floor-fundament",value:"Брус термососна 42 x 68 type-7"},{type:"assembly",key:"assembly-1",value:"Какое то название услуги 1 type-7"},{type:"assembly",key:"assembly-2",value:"Какое то название услуги 2 type-7"}],cmfSaunas:[{type:"materials",key:"sauna-inner-pane",value:"Radiata 15x75mm светлая cmf type-7"},{type:"materials",key:"sauna-floor-desc",value:"Тремоольха Medium 190.25 x 92 cmf type-7"},{type:"materials",key:"sauna-floor-fundament",value:"Брус термососна 42 x 68 cmf type-7"},{type:"materials",key:"sauna-steem-isolation",value:"Фольга Alukraft 25m2 cmf type-7"},{type:"assembly",key:"assembly-1",value:"Какое то название услуги 1 cmf type-7"},{type:"assembly",key:"assembly-2",value:"Какое то название услуги 2 cmf type-7"}],prmSaunas:[{type:"materials",key:"sauna-inner-pane",value:"Radiata 15x75mm светлая prm type-7"},{type:"materials",key:"sauna-floor-desc",value:"Тремоольха Medium 190.25 x 92 prm type-7"},{type:"materials",key:"sauna-floor-fundament",value:"Брус термососна 42 x 68 prm type-7"},{type:"assembly",key:"assembly-1",value:"Какое то название услуги 1 prm type-7"},{type:"assembly",key:"assembly-2",value:"Какое то название услуги 2 prm type-7"},{type:"assembly",key:"assembly-3",value:"Какое то название услуги 3 prm type-7"}],stdPrice:["270 000 7","195 000 7"],cmfPrice:["340 000 7","290 000 7"],prmPrice:["460 000 7","350 000 7"],sizes:"1505 x 2100",model:"h2500"}];function initSlider(){var e=window.matchMedia("(max-width: 1280px)");e.matches&&!init&&(swiper=new Swiper(".sauna-hero__slider",{}),init=!0),init&&!e.matches&&(init=!1,swiper.destroy())}function tabs(e,a,s,t){var l=document.querySelectorAll(e),y=document.querySelectorAll(a);l.forEach((function(e,a){e.addEventListener("click",(function(){l.forEach((function(e){e.classList.remove("active")})),y.forEach((function(e){e.classList.remove("active")})),e.classList.add("active"),y[a].classList.add("active")}))}))}function initTabSliders(e,a,s,t){var l=new Swiper(e,{spaceBetween:17,slidesPerView:4,freeMode:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,navigation:{prevEl:s,nextEl:t},breakpoints:{1200:{slidesPerView:3,spaceBetween:8}}});new Swiper(a,{spaceBetween:10,thumbs:{swiper:l}})}function showAllEstim(e){var a=document.querySelectorAll(e);a.forEach((function(e){e.addEventListener("click",(function(){var a=e.parentElement.parentElement.querySelectorAll(".estimate__service--hide");0!==a.length&&e.classList.add("estimate__show-estim--disable"),a.forEach((function(e){e.classList.remove("estimate__service--hide")}))}))})),a.forEach((function(e){0===e.parentElement.parentElement.querySelectorAll(".estimate__service--hide").length&&e.classList.add("estimate__show-estim--disable")}))}function showNeededData(){function e(e,a){document.querySelector('[data-option="'.concat(a,'"]')).querySelectorAll(".sauna-option__price > span").forEach((function(a,s){a.textContent=e[s]}))}function a(e,a){var s,t=0,l=0;"stdSaunas"===a?s=document.querySelector(".sauna-tabs__item--std"):"cmfSaunas"===a?s=document.querySelector(".sauna-tabs__item--cmf"):"prmSaunas"===a&&(s=document.querySelector(".sauna-tabs__item--prm")),e.forEach((function(e,a){var y=s.querySelectorAll(".estimate__tab-content"),m=document.createElement("div");m.classList.add("estimate__service"),m.innerHTML='\n                <div class="estimate__key">\n                    '.concat(e.key,'\n                </div>\n                <div class="estimate__hyphens"></div>\n                <div class="estimate__value">\n                    ').concat(e.value,"\n                </div>\n            "),"materials"===e.type?(++t>6&&m.classList.add("estimate__service--hide"),y[0].append(m)):(++l>5&&m.classList.add("estimate__service--hide"),y[1].append(m))}))}function s(e){var a=document.querySelector(".sauna-tabs__loader");e?a.classList.add("active"):a.classList.remove("active")}document.querySelectorAll(".sauna-chose__radio").forEach((function(t){t.addEventListener("click",(function(){var l=function(e,a){return e.find((function(e){return e.name===a}))}(saunaData,t.id);console.log(l),l&&0!==l.length&&(s(!0),setTimeout((function(){!function(s){document.querySelectorAll(".estimate__tab-content").forEach((function(e){e.innerHTML=""}));for(var t=0,l=Object.keys(s);t<l.length;t++){var y=l[t];"stdPrice"===y||"cmfPrice"===y||"prmPrice"===y?e(s[y],y):"stdSaunas"!==y&&"cmfSaunas"!==y&&"prmSaunas"!==y||a(s[y],y)}}(l)}),100),setTimeout((function(){var e,a,t,y;e=l.sizes,a=l.model,t=document.querySelectorAll(".estimate__sauna-size"),y=document.querySelectorAll(".estimate__sauna-model"),t.forEach((function(a){a.textContent=e})),y.forEach((function(e){e.textContent="x "+a})),s(!1)}),1e3))}))}))}document.addEventListener("DOMContentLoaded",(function(){initSlider(),tabs(".sauna-promo__tabs .sauna-tabs__control",".sauna-promo__tabs .sauna-tabs__gallery-item"),tabs(".sauna-estimate__tabs .sauna-tabs__control",".sauna-estimate__tabs .sauna-tabs__item"),tabs(".sauna-tabs__item--std .estimate__control",".sauna-tabs__item--std .estimate__tab-content"),tabs(".sauna-tabs__item--cmf .estimate__control",".sauna-tabs__item--cmf .estimate__tab-content"),tabs(".sauna-tabs__item--prm .estimate__control",".sauna-tabs__item--prm .estimate__tab-content"),initTabSliders(".sauna-tabs__gallery-item--std .sauna-gallery__thumbs .swiper-container",".sauna-tabs__gallery-item--std .sauna-gallery__preview",".sauna-tabs__gallery-item--std .sauna-gallery__arrow--prev",".sauna-tabs__gallery-item--std .sauna-gallery__arrow--next"),initTabSliders(".sauna-tabs__gallery-item--cmf .sauna-gallery__thumbs .swiper-container",".sauna-tabs__gallery-item--cmf .sauna-gallery__preview",".sauna-tabs__gallery-item--cmf .sauna-gallery__arrow--prev",".sauna-tabs__gallery-item--cmf .sauna-gallery__arrow--next"),initTabSliders(".sauna-tabs__gallery-item--prem .sauna-gallery__thumbs .swiper-container",".sauna-tabs__gallery-item--prem .sauna-gallery__preview",".sauna-tabs__gallery-item--prem .sauna-gallery__arrow--prev",".sauna-tabs__gallery-item--prem .sauna-gallery__arrow--next");new Swiper(".sauna-chose__slider",{slidesPerView:5,spaceBetween:22,navigation:{prevEl:".sauna-chose__arrow--prev",nextEl:".sauna-chose__arrow--next"},breakpoints:{576:{slidesPerView:1},768:{slidesPerView:2},992:{slidesPerView:3},1315:{slidesPerView:4},1400:{slidesPerView:5}}});showAllEstim(".estimate__show-estim"),showNeededData();new Swiper(".sauna-our-works__slider",{slidesPerView:2,spaceBetween:20,pagination:{el:".sauna-our-works__pagination",type:"progressbar",modifierClass:"",progressbarFillClass:"sauna-our-works__paginaton-fill"},breakpoints:{800:{slidesPerView:1},1300:{slidesPerView:2}}});Fancybox.bind("[data-fancybox]",{autoFocus:!1})})),window.addEventListener("resize",(function(){initSlider()}));
//# sourceMappingURL=script.js.map
