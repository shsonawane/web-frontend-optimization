(function(){function l(a,b,d){var e=Array.prototype.slice.call(arguments,2);return function(){var d=e.slice();
d.push.apply(d,arguments);return a.apply(b,d)}}function aa(a,b){if(a){var d=Array.prototype.slice.call(arguments,1);
try{return a.apply(null,d)}catch(e){return e}}}var n=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()
}:function(){return(new Date).getTime()};function p(a,b){if(a.forEach){a.forEach(b,void 0)
}else{for(var d=0,e=a.length;d<e;d++){d in a&&b.call(void 0,a[d],d,a)}}}function q(a,b){if(a.some){return a.some(b,void 0)
}for(var d=0,e=a.length;d<e;d++){if(d in a&&b.call(void 0,a[d],d,a)){return !0}}return !1
}function r(a){return"[object Array]"==Object.prototype.toString.call(a)?a:[a]}function t(a,b){return u[a]=b
}var u=window._spf_state||{};window._spf_state=u;var v={};"config" in u||t("config",v);
v=u.config;function w(a){var b=y();a in b&&delete b[a]}function ba(){var a=y();for(b in a){z(a[b])||delete a[b]
}a=y();var b=parseInt(v["cache-max"],10);b=isNaN(b)?Infinity:b;b=Object.keys(a).length-b;
if(!(0>=b)){for(var d=0;d<b;d++){var e=Infinity,c;for(c in a){if(a[c].count<e){var f=c;
e=a[c].count}}delete a[f]}}}function z(a){if(!(a&&"data" in a)){return !1}var b=a.life;
b=isNaN(b)?Infinity:b;a=a.time;return n()-a<b}function A(a){var b=parseInt(u["cache-counter"],10)||0;
b++;t("cache-counter",b);a.count=b}function y(){return"cache-storage" in u?u["cache-storage"]:t("cache-storage",{})
}function B(a,b){var d=a.length-b.length;return 0<=d&&a.indexOf(b,d)==d}var C=String.prototype.trim?function(a){return a.trim()
}:function(a){return a.replace(/^\s+|\s+$/g,"")};function D(a,b){a=a.split(b);var d=1==a.length;
return[a[0],d?"":b,d?"":a.slice(1).join(b)]}function E(a){a.data&&"[object String]"==Object.prototype.toString.call(a.data)&&0==a.data.lastIndexOf("spf:",0)&&F(a.data.substring(4))
}function F(a){var b=G[a];b&&(delete G[a],b())}function H(a){window.addEventListener?window.addEventListener("message",a,!1):window.attachEvent&&window.attachEvent("onmessage",a)
}function I(a){window.removeEventListener?window.removeEventListener("message",a,!1):window.detachEvent&&window.detachEvent("onmessage",a)
}var J=function(){function a(){b=!1}if(!window.postMessage){return !1}var b=!0;H(a);
window.postMessage("","*");I(a);return b}(),G={};"async-defers" in u||t("async-defers",G);
G=u["async-defers"];J&&("async-listener" in u&&I(u["async-listener"]),H(E),t("async-listener",E));
var K={};"ps-s" in u||t("ps-s",K);K=u["ps-s"];function L(a){var b=document.createElement("a");
b.href=a;b.href=b.href;a={href:b.href,protocol:b.protocol,host:b.host,hostname:b.hostname,port:b.port,pathname:b.pathname,search:b.search,hash:b.hash,username:b.username,password:b.password};
a.origin=a.protocol+"//"+a.host;a.pathname&&"/"==a.pathname[0]||(a.pathname="/"+a.pathname);
return a}function M(a){a=L(a);return D(a.href,"#")[0]}var N={},O={},P={};"rsrc-s" in u||t("rsrc-s",N);
N=u["rsrc-s"];"rsrc-n" in u||t("rsrc-n",O);O=u["rsrc-n"];"rsrc-u" in u||t("rsrc-u",P);
P=u["rsrc-u"];var Q={};"js-d" in u||t("js-d",Q);Q=u["js-d"];var R={};"js-u" in u||t("js-u",R);
R=u["js-u"];function S(a,b,d){if(b){b=[];var e=0;d&&(a+="\r\n");var c=a.indexOf("[\r\n",e);
for(-1<c&&(e=c+3);-1<(c=a.indexOf(",\r\n",e));){var f=C(a.substring(e,c));e=c+3;f&&b.push(JSON.parse(f))
}c=a.indexOf("]\r\n",e);-1<c&&(f=C(a.substring(e,c)),e=c+3,f&&b.push(JSON.parse(f)));
f="";a.length>e&&(f=a.substring(e),d&&B(f,"\r\n")&&(f=f.substring(0,f.length-2)));
b=T(b);return{h:b,a:f}}a=JSON.parse(a);b=T(r(a));return{h:b,a:""}}function T(a){p(r(a),function(b){if(b){b.head&&(b.head=U(b.head));
if(b.body){for(var a in b.body){b.body[a]=U(b.body[a])}}b.foot&&(b.foot=U(b.foot))
}});return a}function U(a){var b=new ca;if(!a){return b}if("[object String]"!=Object.prototype.toString.call(a)){return a.scripts&&p(a.scripts,function(a){b.scripts.push({url:a.url||"",text:a.text||"",name:a.name||"",async:a.async||!1})
}),a.styles&&p(a.styles,function(a){b.styles.push({url:a.url||"",text:a.text||"",name:a.name||""})
}),a.links&&p(a.links,function(a){"spf-preconnect"==a.rel&&b.links.push({url:a.url||"",rel:a.rel||""})
}),b.html=a.html||"",b}a=a.replace(da,function(a,e,c,f){if("script"==e){e=(e=c.match(V))?e[1]:"";
var d=c.match(ea);d=d?d[1]:"";var k=fa.test(c);c=W.exec(c);return(c=!c||-1!=c[1].indexOf("/javascript")||-1!=c[1].indexOf("/x-javascript")||-1!=c[1].indexOf("/ecmascript"))?(b.scripts.push({url:d,text:f,name:e,async:k}),""):a
}return"style"==e&&(e=(e=c.match(V))?e[1]:"",c=W.exec(c),c=!c||-1!=c[1].indexOf("text/css"))?(b.styles.push({url:"",text:f,name:e}),""):a
});a=a.replace(ha,function(a,e){var c=e.match(ia);c=c?c[1]:"";return"stylesheet"==c?(c=(c=e.match(V))?c[1]:"",e=(e=e.match(X))?e[1]:"",b.styles.push({url:e,text:"",name:c}),""):"spf-preconnect"==c?(e=(e=e.match(X))?e[1]:"",b.links.push({url:e,rel:c}),""):a
});b.html=a;return b}function ca(){this.html="";this.scripts=[];this.styles=[];this.links=[]
}(function(){var a=document.createElement("div");return"transition" in a.style?!0:q(["webkit","Moz","Ms","O","Khtml"],function(b){return b+"Transition" in a.style
})})();var ha=/\x3clink([\s\S]*?)\x3e/ig,da=/\x3c(script|style)([\s\S]*?)\x3e([\s\S]*?)\x3c\/\1\x3e/ig,fa=/(?:\s|^)async(?:\s|=|$)/i,X=/(?:\s|^)href\s*=\s*["']?([^\s"']+)/i,V=/(?:\s|^)name\s*=\s*["']?([^\s"']+)/i,ia=/(?:\s|^)rel\s*=\s*["']?([^\s"']+)/i,ea=/(?:\s|^)src\s*=\s*["']?([^\s"']+)/i,W=/(?:\s|^)type\s*=\s*["']([^"']+)["']/i;
function ja(a,b,d,e){var c=e||{},f=!1,h=0,k,g=new XMLHttpRequest;g.open(a,b,!0);g.timing={};
var m=g.abort;g.abort=function(){clearTimeout(k);g.onreadystatechange=null;m.call(g)
};g.onreadystatechange=function(){var a=g.timing;if(2==g.readyState){a.responseStart=a.responseStart||n();
if("json"==g.responseType){f=!1}else{if(-1<(g.getResponseHeader("Transfer-Encoding")||"").toLowerCase().indexOf("chunked")){f=!0
}else{a=g.getResponseHeader("X-Firefox-Spdy");var d=window.chrome&&chrome.loadTimes&&chrome.loadTimes();
d=d&&d.wasFetchedViaSpdy;f=!(!a&&!d)}}c.l&&c.l(g)}else{3==g.readyState?f&&c.g&&(a=g.responseText.substring(h),h=g.responseText.length,c.g(g,a)):4==g.readyState&&(a.responseEnd=a.responseEnd||n(),window.performance&&window.performance.getEntriesByName&&(g.resourceTiming=window.performance.getEntriesByName(b).pop()),f&&c.g&&g.responseText.length>h&&(a=g.responseText.substring(h),h=g.responseText.length,c.g(g,a)),clearTimeout(k),c.j&&c.j(g))
}};"responseType" in g&&"json"==c.responseType&&(g.responseType="json");c.withCredentials&&(g.withCredentials=c.withCredentials);
e="FormData" in window&&d instanceof FormData;a="POST"==a&&!e;if(c.headers){for(var x in c.headers){g.setRequestHeader(x,c.headers[x]),"content-type"==x.toLowerCase()&&(a=!1)
}}a&&g.setRequestHeader("Content-Type","application/x-www-form-urlencoded");0<c.u&&(k=setTimeout(function(){g.abort();
c.o&&c.o(g)},c.u));g.timing.fetchStart=n();g.send(d);return g}function ka(a,b,d,e,c){var f=!1;
d.responseStart=d.responseEnd=n();b.type&&0==b.type.lastIndexOf("navigate",0)&&(d.navigationStart=d.startTime,v["cache-unified"]||(w(e),f=!0));
b.c&&"multipart"==c.type&&p(c.parts,function(c){c.timing||(c.timing={});c.timing.spfCached=!!d.spfCached;
c.timing.spfPrefetched=!!d.spfPrefetched;b.c(a,c)});la(a,b,d,c,f)}function ma(a,b,d){a=d.getResponseHeader("X-SPF-Response-Type")||"";
b.i=-1!=a.toLowerCase().indexOf("multipart")}function na(a,b,d,e,c,f,h){if(e.i){f=e.a+f;
try{var k=S(f,!0,h)}catch(g){c.abort();b.b&&b.b(a,g,c);return}b.c&&p(k.h,function(c){c.timing||(c.timing={});
c.timing.spfCached=!!d.spfCached;c.timing.spfPrefetched=!!d.spfPrefetched;b.c(a,c)
});e.f=e.f.concat(k.h);e.a=k.a}}function oa(a,b,d,e,c){if(c.timing){for(var f in c.timing){d[f]=c.timing[f]
}}if(c.resourceTiming){if("load"==b.type){for(var h in c.resourceTiming){d[h]=c.resourceTiming[h]
}}else{if(window.performance&&window.performance.timing&&(f=window.performance.timing.navigationStart,f+c.resourceTiming.startTime>=d.startTime)){for(var k in c.resourceTiming){h=c.resourceTiming[k],void 0!==h&&(B(k,"Start")||B(k,"End")||"startTime"==k)&&(d[k]=f+Math.round(h))
}}}}"load"!=b.type&&(d.navigationStart=d.startTime);e.f.length&&(e.a=C(e.a),e.a&&na(a,b,d,e,c,"",!0));
if("json"==c.responseType){if(!c.response){b.b&&b.b(a,Error("JSON response parsing failed"),c);
return}var g=T(r(c.response))}else{try{g=S(c.responseText).h}catch(x){b.b&&b.b(a,x,c);
return}}if(b.c&&1<g.length){for(e=e.f.length;e<g.length;e++){c=g[e],c.timing||(c.timing={}),c.timing.spfCached=!!d.spfCached,c.timing.spfPrefetched=!!d.spfPrefetched,b.c(a,c)
}}if(1<g.length){var m;p(g,function(a){a.cacheType&&(m=a.cacheType)});g={parts:g,type:"multipart"};
m&&(g.cacheType=m)}else{g=1==g.length?g[0]:{}}la(a,b,d,g,!0)}function la(a,b,d,e,c){if(c&&"POST"!=b.method&&(c=pa(a,b.current,e.cacheType,b.type,!0))){e.cacheKey=c;
var f={response:e,type:b.type||""},h=parseInt(v["cache-lifetime"],10),k=parseInt(v["cache-max"],10);
0>=h||0>=k||(k=y(),f={data:f,life:h,time:n(),count:0},A(f),k[c]=f,setTimeout(ba,1000))
}e.timing=d;b.m&&b.m(a,e)}function pa(a,b,d,e,c){a=M(a);var f;v["cache-unified"]?f=a:"navigate-back"==e||"navigate-forward"==e?f="history "+a:"navigate"==e?f=(c?"history ":"prefetch ")+a:"prefetch"==e&&(f=c?"prefetch "+a:"");
b&&"url"==d?f+=" previous "+b:b&&"path"==d&&(f+=" previous "+L(b).pathname);return f||""
}function qa(a,b){var d=[];b&&(d.push(a+" previous "+b),d.push(a+" previous "+L(b).pathname));
d.push(a);var e=null;q(d,function(a){a:{var b=y();if(a in b){b=b[a];if(z(b)){A(b);
b=b.data;break a}w(a)}b=void 0}b&&(e={key:a,response:b.response,type:b.type});return !!b
});return e}function ra(){this.i=!1;this.a="";this.f=[]}function Y(a,b){if(a){var d=Array.prototype.slice.call(arguments);
d[0]=a;d=aa.apply(null,d)}return !1!==d}function sa(a,b,d){Y((a||{}).onError,{url:b,err:d,xhr:void 0})
}function ta(a,b,d){Y((a||{}).onPartProcess,{url:b,part:d})&&Y((a||{}).onPartDone,{url:b,part:d})
}function ua(a,b,d){var e;(e="multipart"==d.type)||(e=Y((a||{}).onProcess,{url:b,response:d}));
e&&Y((a||{}).onDone,{url:b,response:d})}var va={request:function(a,b){b=b||{};b={method:b.method,headers:b.experimental_headers,c:l(ta,null,b),b:l(sa,null,b),m:l(ua,null,b),v:b.postData,type:"",current:window.location.href,s:window.location.href};
b.method=((b.method||"GET")+"").toUpperCase();b.type=b.type||"request";var d=a,e=v["url-identifier"]||"";
if(e){e=e.replace("__type__",b.type||"");var c=D(d,"#"),f=D(c[0],"?");d=f[0];var h=f[1];
f=f[2];var k=c[1];c=c[2];if(0==e.lastIndexOf("?",0)){h&&(e=e.replace("?","&")),f+=e
}else{if(0==e.lastIndexOf(".",0)){if(B(d,"/")){e="index"+e}else{var g=d.lastIndexOf(".");
-1<g&&(d=d.substring(0,g))}}else{B(d,"/")&&0==e.lastIndexOf("/",0)&&(e=e.substring(1))
}d+=e}d=d+h+f+k+c}e=M(d);d={};d.spfUrl=e;d.startTime=n();d.fetchStart=d.startTime;
h=pa(a,b.current,null,b.type,!1);h=qa(h,b.current);d.spfPrefetched=!!h&&"prefetch"==h.type;
d.spfCached=!!h;if(h){a=l(ka,null,a,b,d,h.key,h.response);b=window._spf_state=window._spf_state||{};
var m=parseInt(b.uid,10)||0;m++;b=b.uid=m;G[b]=a;J?window.postMessage("spf:"+b,"*"):window.setTimeout(l(F,null,b),0);
a=null}else{h={};if(f=v["request-headers"]){for(m in f){k=f[m],h[m]=null==k?"":k}}if(b.headers){for(m in b.headers){k=b.headers[m],h[m]=null==k?"":k
}}null!=b.s&&(h["X-SPF-Referer"]=b.s);null!=b.current&&(h["X-SPF-Previous"]=b.current);
if(m=v["advanced-header-identifier"]){h["X-SPF-Request"]=m.replace("__type__",b.type),h.Accept="application/json"
}m=new ra;f=l(oa,null,a,b,d,m);a={headers:h,u:v["request-timeout"],l:l(ma,null,a,m),g:l(na,null,a,b,d,m),j:f,o:f};
b.withCredentials&&(a.withCredentials=b.withCredentials);v["advanced-response-type-json"]&&(a.responseType="json");
a="POST"==b.method?ja("POST",e,b.v,a):ja("GET",e,null,a)}return a}},global=this;global.spf=global.spf||{};
var wa=global.spf,Z;for(Z in va){wa[Z]=va[Z]}}).call(this);