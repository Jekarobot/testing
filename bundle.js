(()=>{"use strict";var e={913:(e,t,n)=>{n.r(t)},675:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.setupInputEventListener=a,t.setupCheckButtonEventListener=s,t.setupCloseModalEventListener=l,t.initializeApp=i;var c=n(509),r=n(929),o=n(999),d="";function a(){var e;null===(e=document.getElementById("card-number"))||void 0===e||e.addEventListener("input",(function(e){var t=e.target.value.replace(/\s+/g,"");if(/^\d+$/.test(t)){var n=(0,r.getPaymentSystem)(t);n!==d&&(d=n,(0,o.highlightIcon)(n))}}))}function s(){var e;null===(e=document.getElementById("check-button"))||void 0===e||e.addEventListener("click",(function(){var e=document.getElementById("card-number").value.replace(/\s+/g,""),t=document.getElementById("modal"),n=document.getElementById("modal-text");if(/^\d+$/.test(e)&&e.length>=13&&e.length<=19){var o=(0,c.luhnCheck)(e),d=(0,r.getPaymentSystem)(e);n.textContent="Карта ".concat(d,o?" валидна":" невалидна")}else n.textContent="Номер карты некорректен";t.style.display="block"}))}function l(){var e;null===(e=document.getElementById("close-modal"))||void 0===e||e.addEventListener("click",(function(){document.getElementById("modal").style.display="none"}))}function i(){a(),s(),l()}i()},999:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.highlightIcon=function(e){var t,n,c,r,o,d,a;switch(document.querySelectorAll(".icon").forEach((function(e){e.classList.remove("active")})),e){case"Visa":null===(t=document.getElementById("visaIcon"))||void 0===t||t.classList.add("active");break;case"MasterCard":null===(n=document.getElementById("masterCardIcon"))||void 0===n||n.classList.add("active");break;case"American Express":null===(c=document.getElementById("amexIcon"))||void 0===c||c.classList.add("active");break;case"Discover":null===(r=document.getElementById("discoverIcon"))||void 0===r||r.classList.add("active");break;case"JCB":null===(o=document.getElementById("jcbIcon"))||void 0===o||o.classList.add("active");break;case"Diners Club":null===(d=document.getElementById("dinersIcon"))||void 0===d||d.classList.add("active");break;case"MIR":null===(a=document.getElementById("mirIcon"))||void 0===a||a.classList.add("active")}}},509:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.luhnCheck=function(e){for(var t=0,n=!1,c=e.length-1;c>=0;c--){var r=parseInt(e[c],10);n&&(r*=2)>9&&(r-=9),t+=r,n=!n}return t%10==0}},929:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getPaymentSystem=function(e){return/^4[0-9]{12}(?:[0-9]{3})?$/.test(e)?"Visa":/^(?:5[1-5][0-9]{14}|2(?!20\d)\d{14})$/.test(e)?"MasterCard":/^3[47][0-9]{13}$/.test(e)?"American Express":/^6(?:011|5[0-9]{2})[0-9]{12}$/.test(e)?"Discover":/^(?:2131|1800|35\d{3})\d{11}$/.test(e)?"JCB":/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/.test(e)?"Diners Club":/^220[0-4][0-9]{12}$/.test(e)?"MIR":"Unknown"}},156:function(e,t,n){var c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),n(913);var r=c(n(329)),o=c(n(594)),d=c(n(711)),a=c(n(979)),s=c(n(169)),l=c(n(294)),i=c(n(936));document.addEventListener("DOMContentLoaded",(function(){document.getElementById("visaIcon").src=r.default,document.getElementById("masterCardIcon").src=o.default,document.getElementById("amexIcon").src=d.default,document.getElementById("discoverIcon").src=a.default,document.getElementById("jcbIcon").src=s.default,document.getElementById("dinersIcon").src=l.default,document.getElementById("mirIcon").src=i.default})),n(675)},711:(e,t,n)=>{e.exports=n.p+"766b0b81921b5e4d933f.png"},294:(e,t,n)=>{e.exports=n.p+"6745904df750be5dec65.png"},979:(e,t,n)=>{e.exports=n.p+"774be2ec1dff2ab2d40b.png"},169:(e,t,n)=>{e.exports=n.p+"cbb04d50be4fb8da8783.png"},594:(e,t,n)=>{e.exports=n.p+"635771566b0c9644efc8.png"},936:(e,t,n)=>{e.exports=n.p+"17de570ca5eb213a02f6.png"},329:(e,t,n)=>{e.exports=n.p+"c1f898696b3ff677ca98.png"}},t={};function n(c){var r=t[c];if(void 0!==r)return r.exports;var o=t[c]={exports:{}};return e[c].call(o.exports,o,o.exports,n),o.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var c=t.getElementsByTagName("script");if(c.length)for(var r=c.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=c[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n(156)})();