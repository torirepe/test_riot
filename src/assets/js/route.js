var route=function(){"use strict";var e=function(e){e=e||{};var t={},r=Array.prototype.slice;Object.defineProperties(e,{on:{value:function(r,n){if(typeof n=="function"){(t[r]=t[r]||[]).push(n)}return e},enumerable:false,writable:false,configurable:false},off:{value:function(r,n){if(r=="*"&&!n){t={}}else{if(n){var i=t[r];for(var a=0,f;f=i&&i[a];++a){if(f==n){i.splice(a--,1)}}}else{delete t[r]}}return e},enumerable:false,writable:false,configurable:false},one:{value:function(t,r){function n(){e.off(t,n);r.apply(e,arguments)}return e.on(t,n)},enumerable:false,writable:false,configurable:false},trigger:{value:function(n){var i=arguments;var a=arguments.length-1,f=new Array(a),u,o,l;for(l=0;l<a;l++){f[l]=i[l+1]}u=r.call(t[n]||[],0);for(l=0;o=u[l];++l){o.apply(e,f)}if(t["*"]&&n!="*"){e.trigger.apply(e,["*",n].concat(f))}return e},enumerable:false,writable:false,configurable:false}});return e};var t=/^.+?\/\/+[^\/]+/;var r="EventListener";var n="remove"+r;var i="add"+r;var a="hasAttribute";var f="replace";var u="popstate";var o="hashchange";var l="trigger";var s=3;var c=typeof window!="undefined"&&window;var v=typeof document!="undefined"&&document;var h=c&&history;var p=c&&(h.location||c.location);var d=j.prototype;var m=v&&v.ontouchstart?"touchstart":"click";var b=e();var g=false;var y=false;var w;var $;var A;var x;var K;var N=[];var O=0;function S(e){return e.split(/[\/?#]/)}function T(e,t){var r=new RegExp("^"+t[f](/\*/g,"([^/?#]+?)")[f](/\.\./,".*")+"$"),n=e.match(r);if(n){return n.slice(1)}}function E(e,t){var r;return function(){clearTimeout(r);r=setTimeout(e,t)}}function P(e){w=E(R,1);c[i](u,w);c[i](o,w);v[i](m,_);if(e){R(true)}}function j(){this.$=[];e(this);b.on("stop",this.s.bind(this));b.on("emit",this.e.bind(this))}function k(e){return e[f](/^\/|\/$/,"")}function q(e){return typeof e=="string"}function D(e){return(e||p.href)[f](t,"")}function L(e){return $[0]==="#"?(e||p.href||"").split($)[1]||"":(p?D(e):e||"")[f]($,"")}function R(e){var t=O===0;if(s<=O){return}O++;N.push(function(){var t=L();if(e||t!==A){b[l]("emit",t);A=t}});if(t){var r;while(r=N.shift()){r()}O=0}}function _(e){if(e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented){return}var r=e.target;while(r&&r.nodeName!=="A"){r=r.parentNode}if(!r||r.nodeName!=="A"||r[a]("download")||!r[a]("href")||r.target&&r.target!=="_self"||r.href.indexOf(p.href.match(t)[0])===-1){return}if(r.href!==p.href&&(r.href.split("#")[0]===p.href.split("#")[0]||$[0]!=="#"&&D(r.href).indexOf($)!==0||$[0]==="#"&&r.href.split($)[0]!==p.href.split($)[0]||!z(L(r.href),r.title||v.title))){return}e.preventDefault()}function z(e,t,r){if(!h){return b[l]("emit",L(e))}e=$+k(e);t=t||v.title;r?h.replaceState(null,t,e):h.pushState(null,t,e);v.title=t;y=false;R();return y}d.m=function(e,t,r){if(q(e)&&(!t||q(t))){z(e,t,r||false)}else if(t){this.r(e,t)}else{this.r("@",e)}};d.s=function(){this.off("*");this.$=[]};d.e=function(e){this.$.concat("@").some(function(t){var r=(t==="@"?x:K)(k(e),k(t));if(typeof r!="undefined"){this[l].apply(null,[t].concat(r));return y=true}},this)};d.r=function(e,t){if(e!=="@"){e="/"+k(e);this.$.push(e)}this.on(e,t)};var B=new j;var C=B.m.bind(B);C.create=function(){var e=new j;var t=e.m.bind(e);t.stop=e.s.bind(e);return t};C.base=function(e){$=e||"#";A=L()};C.exec=function(){R(true)};C.parser=function(e,t){if(!e&&!t){x=S;K=T}if(e){x=e}if(t){K=t}};C.query=function(){var e={};var t=p.href||A;t[f](/[?&](.+?)=([^&]*)/g,function(t,r,n){e[r]=n});return e};C.stop=function(){if(g){if(c){c[n](u,w);c[n](o,w);v[n](m,_)}b[l]("stop");g=false}};C.start=function(e){if(!g){if(c){if(document.readyState==="complete"){P(e)}else{c[i]("load",function(){setTimeout(function(){P(e)},1)})}}g=true}};C.base();C.parser();return C}();