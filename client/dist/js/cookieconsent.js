(()=>{"use strict";var e,t={466:(e,t,o)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function r(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,a(n.key),n)}}function a(e){var t=function(e,t){if("object"!=n(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,t||"default");if("object"!=n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==n(t)?t:t+""}var i=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),console.log("init cookie consent"),this.enableXHRMode(),window.dataLayer=window.dataLayer||[],function(){dataLayer.push(arguments)}("consent","default",{ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied",analytics_storage:"denied"}),this.cookieName="CookieConsent",this.cookieJar={},this.updateConsent(),this.pushToDataLayer()},t=[{key:"isSet",value:function(){return void 0!==this.cookieJar[this.cookieName]}},{key:"check",value:function(e){return-1!==this.consent.indexOf(e)}},{key:"updateConsent",value:function(){for(var e=document.cookie?document.cookie.split("; "):[],t=0;t<e.length;t++){var o=e[t].split("="),n=o[0];this.cookieJar[n]=o.slice(1).join("=")}this.consent=this.isSet()?decodeURIComponent(this.cookieJar[this.cookieName]).split(","):[]}},{key:"pushToDataLayer",value:function(){console.log("consent",this.consent),void 0!==window.dataLayer?(this.check("Necessary")&&(console.log("grant: functionality_storage"),gtag("consent","update",{functionality_storage:"granted"}),window.dataLayer.push({event:"cookieconsent_preferences"})),this.check("Analytics")&&(console.log("grant: analytics_storage"),gtag("consent","update",{analytics_storage:"granted"}),window.dataLayer.push({event:"cookieconsent_analytics"})),this.check("Marketing")&&(console.log("grant: ad_storage"),console.log("grant: personalization_storage"),gtag("consent","update",{ad_storage:"granted",personalization_storage:"granted"}),window.dataLayer.push({event:"cookieconsent_marketing"}))):console.log("dataLayer undefined")}},{key:"enableXHRMode",value:function(){var e=this,t=document.getElementById("accept-all-cookies"),o=document.getElementById("accept-necessary-cookies"),n=document.getElementById("cookie-consent-popup");if(n){if(this.isSet())return void n.remove();n.classList.remove("cookie-consent-background--hidden"),t.addEventListener("click",(function(o){o.preventDefault(),e.sendXHRRequest(t.href)})),o.addEventListener("click",(function(t){t.preventDefault(),e.sendXHRRequest(o.href)}))}}},{key:"sendXHRRequest",value:function(e){var t=this,o=document.getElementById("cookie-consent-popup"),n=new XMLHttpRequest;n.open("GET",e),n.addEventListener("load",(function(){n.status>=200&&n.status<300?(console.log("XHRRequest success"),t.updateConsent(),t.pushToDataLayer()):console.log("XHRRequest completed but was not successful. Status:",n.status)})),n.addEventListener("error",(function(){console.error("XHRRequest failed.")})),n.send(),o.remove()}}],t&&r(e.prototype,t),o&&r(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t,o}();window.CookieConsent=i;new i},293:()=>{}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var a=o[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,o,r,a)=>{if(!o){var i=1/0;for(l=0;l<e.length;l++){for(var[o,r,a]=e[l],s=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](o[c])))?o.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,r,a]},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={865:0,335:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var r,a,[i,s,c]=o,u=0;if(i.some((t=>0!==e[t]))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var l=c(n)}for(t&&t(o);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},o=self.webpackChunksilverstripe_cookie_consent=self.webpackChunksilverstripe_cookie_consent||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})(),n.O(void 0,[335],(()=>n(466)));var r=n.O(void 0,[335],(()=>n(293)));r=n.O(r)})();