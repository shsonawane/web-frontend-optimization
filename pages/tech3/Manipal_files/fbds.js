try{(function(a,b,c,d){var e=a._fbq||(a._fbq=[]);if(e.push!==Array.prototype.push){return
}var f=/^\d+$/,g="https://www.facebook.com/tr/",h={},i=[],j=c.href,k=b.referrer,l=a.top!==a;
function m(c){var d=[];for(var a=0,b=c.length;a<b;a++){d.push(c[a][0]+"="+encodeURIComponent(c[a][1]))
}return d.join("&")}function n(a,b){var c=function c(){a.detachEvent?a.detachEvent("onload",c):a.onload=null,b()
};a.attachEvent?a.attachEvent("onload",c):a.onload=c}function o(c,d){var e="fb"+Math.random().toString().replace(".",""),f=b.createElement("form");
f.method="post";f.action=c;f.target=e;f.acceptCharset="utf-8";f.style.display="none";
c=!!(a.attachEvent&&!a.addEventListener);c=c?'<iframe name="'+e+'">':"iframe";var g=b.createElement(c);
g.src="javascript:false";g.id=e;g.name=e;f.appendChild(g);n(g,function(){for(var a=0,c=d.length;
a<c;a++){var e=b.createElement("input");e.name=d[a][0];e.value=d[a][1];f.appendChild(e)
}n(g,function(){f.parentNode.removeChild(f)});f.submit()});b.body.appendChild(f)}h.addPixelId=function(a){i.push(a)
};h.track=function(b,c){var d=typeof b;if(d!=="string"&&d!=="number"){return !1}if(f.test(b)){p(null,b,c);
return !0}for(var d=0,a=i.length;d<a;d++){p(i[d],b,c)}return i.length>0};function p(a,b,c){var d=[];
d.push(["id",a]);d.push(["ev",b]);d.push(["dl",j]);d.push(["rl",k]);d.push(["if",l]);
d.push(["ts",new Date().valueOf()]);if(c&&typeof c==="object"){for(var e in c){if(Object.prototype.hasOwnProperty.call(c,e)){a=c[e];
b=a===null?"null":typeof a;b in {number:1,string:1,"boolean":1}?d.push(["cd["+encodeURIComponent(e)+"]",a]):b==="object"&&(a=typeof JSON==="undefined"?String(a):JSON.stringify(a),d.push(["cd["+encodeURIComponent(e)+"]",a]))
}}}b=m(d);if(2048>(g+"?"+b).length){a=new Image();a.src=g+"?"+b}else{o(g,d)}}var q=function(b){if(Object.prototype.toString.call(b)!=="[object Array]"){return !1
}var c=b.shift();if(!c){return !1}c=h[c];if(typeof c!=="function"){return !1}if(a._fbds){var d=a._fbds.pixelId;
f.test(d)&&(i.push(d),delete a._fbds.pixelId)}return c.apply(h,b)};for(var r=0,s=e.length;
r<s;++r){q(e[r])}e.push=q;if(e.disablePushState===!0){return}if(!d.pushState||!d.replaceState){return
}r=function(){k=j,j=c.href,e.push(["track","PixelInitialized"])};s=function(a,b,c){var d=a[b];
a[b]=function(){var a=d.apply(this,arguments);c.apply(this,arguments);return a}};
s(d,"pushState",r);s(d,"replaceState",r);a.addEventListener("popstate",r,!1)})(window,document,location,history)
}catch(e){new Image().src="https://www.facebook.com/common/scribe_endpoint.php?c=jssdk_error&m="+encodeURIComponent('{"error":"LOAD", "extra": {"name":"'+e.name+'","line":"'+(e.lineNumber||e.line)+'","script":"'+(e.fileName||e.sourceURL||e.script)+'","stack":"'+(e.stackTrace||e.stack)+'","revision":"4071710","namespace":"FB","message":"'+e.message+'"}}')
};