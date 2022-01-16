/*!
 * Bootstrap v3.0.2 by @fat and @mdo
 * Copyright 2013 Twitter, Inc.
 * Licensed under http://www.apache.org/licenses/LICENSE-2.0
 *
 * Designed and built with all the love in the world by @mdo and @fat.
 */
;
if(typeof jQuery==="undefined"){throw new Error("Bootstrap requires jQuery")
}+function(c){function d(){var a=document.createElement("bootstrap");
var b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};
for(var f in b){if(a.style[f]!==undefined){return{end:b[f]}
}}}c.fn.emulateTransitionEnd=function(b){var g=false,h=this;
c(this).one(c.support.transition.end,function(){g=true
});
var a=function(){if(!g){c(h).trigger(c.support.transition.end)
}};
setTimeout(a,b);
return this
};
c(function(){c.support.transition=d()
})
}(jQuery);
+function(g){var h='[data-dismiss="alert"]';
var e=function(a){g(a).on("click",h,this.close)
};
e.prototype.close=function(a){var b=g(this);
var d=b.attr("data-target");
if(!d){d=b.attr("href");
d=d&&d.replace(/.*(?=#[^\s]*$)/,"")
}var c=g(d);
if(a){a.preventDefault()
}if(!c.length){c=b.hasClass("alert")?b:b.parent()
}c.trigger(a=g.Event("close.bs.alert"));
if(a.isDefaultPrevented()){return
}c.removeClass("in");
function k(){c.trigger("closed.bs.alert").remove()
}g.support.transition&&c.hasClass("fade")?c.one(g.support.transition.end,k).emulateTransitionEnd(150):k()
};
var f=g.fn.alert;
g.fn.alert=function(a){return this.each(function(){var b=g(this);
var c=b.data("bs.alert");
if(!c){b.data("bs.alert",(c=new e(this)))
}if(typeof a=="string"){c[a].call(b)
}})
};
g.fn.alert.Constructor=e;
g.fn.alert.noConflict=function(){g.fn.alert=f;
return this
};
g(document).on("click.bs.alert.data-api",h,e.prototype.close)
}(jQuery);
+function(f){var d=function(a,b){this.$element=f(a);
this.options=f.extend({},d.DEFAULTS,b)
};
d.DEFAULTS={loadingText:"loading..."};
d.prototype.setState=function(c){var a="disabled";
var k=this.$element;
var b=k.is("input")?"val":"html";
var j=k.data();
c=c+"Text";
if(!j.resetText){k.data("resetText",k[b]())
}k[b](j[c]||this.options[c]);
setTimeout(function(){c=="loadingText"?k.addClass(a).attr(a,a):k.removeClass(a).removeAttr(a)
},0)
};
d.prototype.toggle=function(){var b=this.$element.closest('[data-toggle="buttons"]');
if(b.length){var a=this.$element.find("input").prop("checked",!this.$element.hasClass("active")).trigger("change");
if(a.prop("type")==="radio"){b.find(".active").removeClass("active")
}}this.$element.toggleClass("active")
};
var e=f.fn.button;
f.fn.button=function(a){return this.each(function(){var b=f(this);
var c=b.data("bs.button");
var h=typeof a=="object"&&a;
if(!c){b.data("bs.button",(c=new d(this,h)))
}if(a=="toggle"){c.toggle()
}else{if(a){c.setState(a)
}}})
};
f.fn.button.Constructor=d;
f.fn.button.noConflict=function(){f.fn.button=e;
return this
};
f(document).on("click.bs.button.data-api","[data-toggle^=button]",function(a){var b=f(a.target);
if(!b.hasClass("btn")){b=b.closest(".btn")
}b.button("toggle");
a.preventDefault()
})
}(jQuery);
+function(d){var f=function(a,b){this.$element=d(a);
this.$indicators=this.$element.find(".carousel-indicators");
this.options=b;
this.paused=this.sliding=this.interval=this.$active=this.$items=null;
this.options.pause=="hover"&&this.$element.on("mouseenter",d.proxy(this.pause,this)).on("mouseleave",d.proxy(this.cycle,this))
};
f.DEFAULTS={interval:5000,pause:"hover",wrap:true};
f.prototype.cycle=function(a){a||(this.paused=false);
this.interval&&clearInterval(this.interval);
this.options.interval&&!this.paused&&(this.interval=setInterval(d.proxy(this.next,this),this.options.interval));
return this
};
f.prototype.getActiveIndex=function(){this.$active=this.$element.find(".item.active");
this.$items=this.$active.parent().children();
return this.$items.index(this.$active)
};
f.prototype.to=function(a){var b=this;
var c=this.getActiveIndex();
if(a>(this.$items.length-1)||a<0){return
}if(this.sliding){return this.$element.one("slid",function(){b.to(a)
})
}if(c==a){return this.pause().cycle()
}return this.slide(a>c?"next":"prev",d(this.$items[a]))
};
f.prototype.pause=function(a){a||(this.paused=true);
if(this.$element.find(".next, .prev").length&&d.support.transition.end){this.$element.trigger(d.support.transition.end);
this.cycle(true)
}this.interval=clearInterval(this.interval);
return this
};
f.prototype.next=function(){if(this.sliding){return
}return this.slide("next")
};
f.prototype.prev=function(){if(this.sliding){return
}return this.slide("prev")
};
f.prototype.slide=function(c,r){var a=this.$element.find(".item.active");
var s=r||a[c]();
var n=this.interval;
var b=c=="next"?"left":"right";
var q=c=="next"?"first":"last";
var p=this;
if(!s.length){if(!this.options.wrap){return
}s=this.$element.find(".item")[q]()
}this.sliding=true;
n&&this.pause();
var o=d.Event("slide.bs.carousel",{relatedTarget:s[0],direction:b});
if(s.hasClass("active")){return
}if(this.$indicators.length){this.$indicators.find(".active").removeClass("active");
this.$element.one("slid",function(){var g=d(p.$indicators.children()[p.getActiveIndex()]);
g&&g.addClass("active")
})
}if(d.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(o);
if(o.isDefaultPrevented()){return
}s.addClass(c);
s[0].offsetWidth;
a.addClass(b);
s.addClass(b);
a.one(d.support.transition.end,function(){s.removeClass([c,b].join(" ")).addClass("active");
a.removeClass(["active",b].join(" "));
p.sliding=false;
setTimeout(function(){p.$element.trigger("slid")
},0)
}).emulateTransitionEnd(600)
}else{this.$element.trigger(o);
if(o.isDefaultPrevented()){return
}a.removeClass("active");
s.addClass("active");
this.sliding=false;
this.$element.trigger("slid")
}n&&this.cycle();
return this
};
var e=d.fn.carousel;
d.fn.carousel=function(a){return this.each(function(){var b=d(this);
var c=b.data("bs.carousel");
var k=d.extend({},f.DEFAULTS,b.data(),typeof a=="object"&&a);
var j=typeof a=="string"?a:k.slide;
if(!c){b.data("bs.carousel",(c=new f(this,k)))
}if(typeof a=="number"){c.to(a)
}else{if(j){c[j]()
}else{if(k.interval){c.pause().cycle()
}}}})
};
d.fn.carousel.Constructor=f;
d.fn.carousel.noConflict=function(){d.fn.carousel=e;
return this
};
d(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(a){var b=d(this),m;
var n=d(b.attr("data-target")||(m=b.attr("href"))&&m.replace(/.*(?=#[^\s]+$)/,""));
var k=d.extend({},n.data(),b.data());
var c=b.attr("data-slide-to");
if(c){k.interval=false
}n.carousel(k);
if(c=b.attr("data-slide-to")){n.data("bs.carousel").to(c)
}a.preventDefault()
});
d(window).on("load",function(){d('[data-ride="carousel"]').each(function(){var a=d(this);
a.carousel(a.data())
})
})
}(jQuery);
+function(d){var f=function(a,b){this.$element=d(a);
this.options=d.extend({},f.DEFAULTS,b);
this.transitioning=null;
if(this.options.parent){this.$parent=d(this.options.parent)
}if(this.options.toggle){this.toggle()
}};
f.DEFAULTS={toggle:true};
f.prototype.dimension=function(){var a=this.$element.hasClass("width");
return a?"width":"height"
};
f.prototype.show=function(){if(this.transitioning||this.$element.hasClass("in")){return
}var k=d.Event("show.bs.collapse");
this.$element.trigger(k);
if(k.isDefaultPrevented()){return
}var b=this.$parent&&this.$parent.find("> .panel > .in");
if(b&&b.length){var j=b.data("bs.collapse");
if(j&&j.transitioning){return
}b.collapse("hide");
j||b.data("bs.collapse",null)
}var a=this.dimension();
this.$element.removeClass("collapse").addClass("collapsing")[a](0);
this.transitioning=1;
var m=function(){this.$element.removeClass("collapsing").addClass("in")[a]("auto");
this.transitioning=0;
this.$element.trigger("shown.bs.collapse")
};
if(!d.support.transition){return m.call(this)
}var c=d.camelCase(["scroll",a].join("-"));
this.$element.one(d.support.transition.end,d.proxy(m,this)).emulateTransitionEnd(350)[a](this.$element[0][c])
};
f.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass("in")){return
}var b=d.Event("hide.bs.collapse");
this.$element.trigger(b);
if(b.isDefaultPrevented()){return
}var a=this.dimension();
this.$element[a](this.$element[a]())[0].offsetHeight;
this.$element.addClass("collapsing").removeClass("collapse").removeClass("in");
this.transitioning=1;
var c=function(){this.transitioning=0;
this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
};
if(!d.support.transition){return c.call(this)
}this.$element[a](0).one(d.support.transition.end,d.proxy(c,this)).emulateTransitionEnd(350)
};
f.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()
};
var e=d.fn.collapse;
d.fn.collapse=function(a){return this.each(function(){var b=d(this);
var c=b.data("bs.collapse");
var h=d.extend({},f.DEFAULTS,b.data(),typeof a=="object"&&a);
if(!c){b.data("bs.collapse",(c=new f(this,h)))
}if(typeof a=="string"){c[a]()
}})
};
d.fn.collapse.Constructor=f;
d.fn.collapse.noConflict=function(){d.fn.collapse=e;
return this
};
d(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(n){var b=d(this),s;
var c=b.attr("data-target")||n.preventDefault()||(s=b.attr("href"))&&s.replace(/.*(?=#[^\s]+$)/,"");
var r=d(c);
var p=r.data("bs.collapse");
var o=p?"toggle":b.data();
var a=b.attr("data-parent");
var q=a&&d(a);
if(!p||!p.transitioning){if(q){q.find('[data-toggle=collapse][data-parent="'+a+'"]').not(b).addClass("collapsed")
}b[r.hasClass("in")?"addClass":"removeClass"]("collapsed")
}r.collapse(o)
})
}(jQuery);
+function(k){var n=".dropdown-backdrop";
var h="[data-toggle=dropdown]";
var j=function(a){var b=k(a).on("click.bs.dropdown",this.toggle)
};
j.prototype.toggle=function(a){var b=k(this);
if(b.is(".disabled, :disabled")){return
}var c=m(b);
var d=c.hasClass("open");
o();
if(!d){if("ontouchstart" in document.documentElement&&!c.closest(".navbar-nav").length){k('<div class="dropdown-backdrop"/>').insertAfter(k(this)).on("click",o)
}c.trigger(a=k.Event("show.bs.dropdown"));
if(a.isDefaultPrevented()){return
}c.toggleClass("open").trigger("shown.bs.dropdown");
b.focus()
}return false
};
j.prototype.keydown=function(b){if(!/(38|40|27)/.test(b.keyCode)){return
}var c=k(this);
b.preventDefault();
b.stopPropagation();
if(c.is(".disabled, :disabled")){return
}var d=m(c);
var e=d.hasClass("open");
if(!e||(e&&b.keyCode==27)){if(b.which==27){d.find(h).focus()
}return c.click()
}var a=k("[role=menu] li:not(.divider):visible a",d);
if(!a.length){return
}var f=a.index(a.filter(":focus"));
if(b.keyCode==38&&f>0){f--
}if(b.keyCode==40&&f<a.length-1){f++
}if(!~f){f=0
}a.eq(f).focus()
};
function o(){k(n).remove();
k(h).each(function(a){var b=m(k(this));
if(!b.hasClass("open")){return
}b.trigger(a=k.Event("hide.bs.dropdown"));
if(a.isDefaultPrevented()){return
}b.removeClass("open").trigger("hidden.bs.dropdown")
})
}function m(a){var c=a.attr("data-target");
if(!c){c=a.attr("href");
c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,"")
}var b=c&&k(c);
return b&&b.length?b:a.parent()
}var p=k.fn.dropdown;
k.fn.dropdown=function(a){return this.each(function(){var b=k(this);
var c=b.data("dropdown");
if(!c){b.data("dropdown",(c=new j(this)))
}if(typeof a=="string"){c[a].call(b)
}})
};
k.fn.dropdown.Constructor=j;
k.fn.dropdown.noConflict=function(){k.fn.dropdown=p;
return this
};
k(document).on("click.bs.dropdown.data-api",o).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()
}).on("click.bs.dropdown.data-api",h,j.prototype.toggle).on("keydown.bs.dropdown.data-api",h+", [role=menu]",j.prototype.keydown)
}(jQuery);
+function(f){var d=function(a,b){this.options=b;
this.$element=f(a);
this.$backdrop=this.isShown=null;
if(this.options.remote){this.$element.load(this.options.remote)
}};
d.DEFAULTS={backdrop:true,keyboard:true,show:true};
d.prototype.toggle=function(a){return this[!this.isShown?"show":"hide"](a)
};
d.prototype.show=function(a){var c=this;
var b=f.Event("show.bs.modal",{relatedTarget:a});
this.$element.trigger(b);
if(this.isShown||b.isDefaultPrevented()){return
}this.isShown=true;
this.escape();
this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',f.proxy(this.hide,this));
this.backdrop(function(){var g=f.support.transition&&c.$element.hasClass("fade");
if(!c.$element.parent().length){c.$element.appendTo(document.body)
}c.$element.show();
if(g){c.$element[0].offsetWidth
}c.$element.addClass("in").attr("aria-hidden",false);
c.enforceFocus();
var j=f.Event("shown.bs.modal",{relatedTarget:a});
g?c.$element.find(".modal-dialog").one(f.support.transition.end,function(){c.$element.focus().trigger(j)
}).emulateTransitionEnd(300):c.$element.focus().trigger(j)
})
};
d.prototype.hide=function(a){if(a){a.preventDefault()
}a=f.Event("hide.bs.modal");
this.$element.trigger(a);
if(!this.isShown||a.isDefaultPrevented()){return
}this.isShown=false;
this.escape();
f(document).off("focusin.bs.modal");
this.$element.removeClass("in").attr("aria-hidden",true).off("click.dismiss.modal");
f.support.transition&&this.$element.hasClass("fade")?this.$element.one(f.support.transition.end,f.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal()
};
d.prototype.enforceFocus=function(){f(document).off("focusin.bs.modal").on("focusin.bs.modal",f.proxy(function(a){if(this.$element[0]!==a.target&&!this.$element.has(a.target).length){this.$element.focus()
}},this))
};
d.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on("keyup.dismiss.bs.modal",f.proxy(function(a){a.which==27&&this.hide()
},this))
}else{if(!this.isShown){this.$element.off("keyup.dismiss.bs.modal")
}}};
d.prototype.hideModal=function(){var a=this;
this.$element.hide();
this.backdrop(function(){a.removeBackdrop();
a.$element.trigger("hidden.bs.modal")
})
};
d.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove();
this.$backdrop=null
};
d.prototype.backdrop=function(a){var b=this;
var c=this.$element.hasClass("fade")?"fade":"";
if(this.isShown&&this.options.backdrop){var h=f.support.transition&&c;
this.$backdrop=f('<div class="modal-backdrop '+c+'" />').appendTo(document.body);
this.$element.on("click.dismiss.modal",f.proxy(function(g){if(g.target!==g.currentTarget){return
}this.options.backdrop=="static"?this.$element[0].focus.call(this.$element[0]):this.hide.call(this)
},this));
if(h){this.$backdrop[0].offsetWidth
}this.$backdrop.addClass("in");
if(!a){return
}h?this.$backdrop.one(f.support.transition.end,a).emulateTransitionEnd(150):a()
}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");
f.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(f.support.transition.end,a).emulateTransitionEnd(150):a()
}else{if(a){a()
}}}};
var e=f.fn.modal;
f.fn.modal=function(b,a){return this.each(function(){var c=f(this);
var j=c.data("bs.modal");
var k=f.extend({},d.DEFAULTS,c.data(),typeof b=="object"&&b);
if(!j){c.data("bs.modal",(j=new d(this,k)))
}if(typeof b=="string"){j[b](a)
}else{if(k.show){j.show(a)
}}})
};
f.fn.modal.Constructor=d;
f.fn.modal.noConflict=function(){f.fn.modal=e;
return this
};
f(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(a){var b=f(this);
var j=b.attr("href");
var k=f(b.attr("data-target")||(j&&j.replace(/.*(?=#[^\s]+$)/,"")));
var c=k.data("modal")?"toggle":f.extend({remote:!/#/.test(j)&&j},k.data(),b.data());
a.preventDefault();
k.modal(c,this).one("hide",function(){b.is(":visible")&&b.focus()
})
});
f(document).on("show.bs.modal",".modal",function(){f(document.body).addClass("modal-open")
}).on("hidden.bs.modal",".modal",function(){f(document.body).removeClass("modal-open")
})
}(jQuery);
+function(f){var d=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null;
this.init("tooltip",a,b)
};
d.DEFAULTS={animation:true,placement:"top",selector:false,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:false,container:false};
d.prototype.init=function(b,m,o){this.enabled=true;
this.type=b;
this.$element=f(m);
this.options=this.getOptions(o);
var c=this.options.trigger.split(" ");
for(var n=c.length;
n--;
){var p=c[n];
if(p=="click"){this.$element.on("click."+this.type,this.options.selector,f.proxy(this.toggle,this))
}else{if(p!="manual"){var a=p=="hover"?"mouseenter":"focus";
var q=p=="hover"?"mouseleave":"blur";
this.$element.on(a+"."+this.type,this.options.selector,f.proxy(this.enter,this));
this.$element.on(q+"."+this.type,this.options.selector,f.proxy(this.leave,this))
}}}this.options.selector?(this._options=f.extend({},this.options,{trigger:"manual",selector:""})):this.fixTitle()
};
d.prototype.getDefaults=function(){return d.DEFAULTS
};
d.prototype.getOptions=function(a){a=f.extend({},this.getDefaults(),this.$element.data(),a);
if(a.delay&&typeof a.delay=="number"){a.delay={show:a.delay,hide:a.delay}
}return a
};
d.prototype.getDelegateOptions=function(){var b={};
var a=this.getDefaults();
this._options&&f.each(this._options,function(h,c){if(a[h]!=c){b[h]=c
}});
return b
};
d.prototype.enter=function(a){var b=a instanceof this.constructor?a:f(a.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);
clearTimeout(b.timeout);
b.hoverState="in";
if(!b.options.delay||!b.options.delay.show){return b.show()
}b.timeout=setTimeout(function(){if(b.hoverState=="in"){b.show()
}},b.options.delay.show)
};
d.prototype.leave=function(a){var b=a instanceof this.constructor?a:f(a.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);
clearTimeout(b.timeout);
b.hoverState="out";
if(!b.options.delay||!b.options.delay.hide){return b.hide()
}b.timeout=setTimeout(function(){if(b.hoverState=="out"){b.hide()
}},b.options.delay.hide)
};
d.prototype.show=function(){var u=f.Event("show.bs."+this.type);
if(this.hasContent()&&this.enabled){this.$element.trigger(u);
if(u.isDefaultPrevented()){return
}var y=this.tip();
this.setContent();
if(this.options.animation){y.addClass("fade")
}var z=typeof this.options.placement=="function"?this.options.placement.call(this,y[0],this.$element[0]):this.options.placement;
var a=/\s?auto?\s?/i;
var E=a.test(z);
if(E){z=z.replace(a,"")||"top"
}y.detach().css({top:0,left:0,display:"block"}).addClass(z);
this.options.container?y.appendTo(this.options.container):y.insertAfter(this.$element);
var t=this.getPosition();
var D=y[0].offsetWidth;
var w=y[0].offsetHeight;
if(E){var A=this.$element.parent();
var B=z;
var c=document.documentElement.scrollTop||document.body.scrollTop;
var b=this.options.container=="body"?window.innerWidth:A.outerWidth();
var v=this.options.container=="body"?window.innerHeight:A.outerHeight();
var x=this.options.container=="body"?0:A.offset().left;
z=z=="bottom"&&t.top+t.height+w-c>v?"top":z=="top"&&t.top-c-w<0?"bottom":z=="right"&&t.right+D>b?"left":z=="left"&&t.left-D<x?"right":z;
y.removeClass(B).addClass(z)
}var C=this.getCalculatedOffset(z,t,D,w);
this.applyPlacement(C,z);
this.$element.trigger("shown.bs."+this.type)
}};
d.prototype.applyPlacement=function(q,p){var s;
var o=this.tip();
var t=o[0].offsetWidth;
var a=o[0].offsetHeight;
var u=parseInt(o.css("margin-top"),10);
var r=parseInt(o.css("margin-left"),10);
if(isNaN(u)){u=0
}if(isNaN(r)){r=0
}q.top=q.top+u;
q.left=q.left+r;
o.offset(q).addClass("in");
var v=o[0].offsetWidth;
var c=o[0].offsetHeight;
if(p=="top"&&c!=a){s=true;
q.top=q.top+a-c
}if(/bottom|top/.test(p)){var b=0;
if(q.left<0){b=q.left*-2;
q.left=0;
o.offset(q);
v=o[0].offsetWidth;
c=o[0].offsetHeight
}this.replaceArrow(b-t+v,v,"left")
}else{this.replaceArrow(c-a,c,"top")
}if(s){o.offset(q)
}};
d.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?(50*(1-a/b)+"%"):"")
};
d.prototype.setContent=function(){var a=this.tip();
var b=this.getTitle();
a.find(".tooltip-inner")[this.options.html?"html":"text"](b);
a.removeClass("fade in top bottom left right")
};
d.prototype.hide=function(){var c=this;
var a=this.tip();
var b=f.Event("hide.bs."+this.type);
function j(){if(c.hoverState!="in"){a.detach()
}}this.$element.trigger(b);
if(b.isDefaultPrevented()){return
}a.removeClass("in");
f.support.transition&&this.$tip.hasClass("fade")?a.one(f.support.transition.end,j).emulateTransitionEnd(150):j();
this.$element.trigger("hidden.bs."+this.type);
return this
};
d.prototype.fixTitle=function(){var a=this.$element;
if(a.attr("title")||typeof(a.attr("data-original-title"))!="string"){a.attr("data-original-title",a.attr("title")||"").attr("title","")
}};
d.prototype.hasContent=function(){return this.getTitle()
};
d.prototype.getPosition=function(){var a=this.$element[0];
return f.extend({},(typeof a.getBoundingClientRect=="function")?a.getBoundingClientRect():{width:a.offsetWidth,height:a.offsetHeight},this.$element.offset())
};
d.prototype.getCalculatedOffset=function(h,a,c,b){return h=="bottom"?{top:a.top+a.height,left:a.left+a.width/2-c/2}:h=="top"?{top:a.top-b,left:a.left+a.width/2-c/2}:h=="left"?{top:a.top+a.height/2-b/2,left:a.left-c}:{top:a.top+a.height/2-b/2,left:a.left+a.width}
};
d.prototype.getTitle=function(){var a;
var c=this.$element;
var b=this.options;
a=c.attr("data-original-title")||(typeof b.title=="function"?b.title.call(c[0]):b.title);
return a
};
d.prototype.tip=function(){return this.$tip=this.$tip||f(this.options.template)
};
d.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")
};
d.prototype.validate=function(){if(!this.$element[0].parentNode){this.hide();
this.$element=null;
this.options=null
}};
d.prototype.enable=function(){this.enabled=true
};
d.prototype.disable=function(){this.enabled=false
};
d.prototype.toggleEnabled=function(){this.enabled=!this.enabled
};
d.prototype.toggle=function(a){var b=a?f(a.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;
b.tip().hasClass("in")?b.leave(b):b.enter(b)
};
d.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)
};
var e=f.fn.tooltip;
f.fn.tooltip=function(a){return this.each(function(){var b=f(this);
var c=b.data("bs.tooltip");
var h=typeof a=="object"&&a;
if(!c){b.data("bs.tooltip",(c=new d(this,h)))
}if(typeof a=="string"){c[a]()
}})
};
f.fn.tooltip.Constructor=d;
f.fn.tooltip.noConflict=function(){f.fn.tooltip=e;
return this
}
}(jQuery);
+function(f){var d=function(a,b){this.init("popover",a,b)
};
if(!f.fn.tooltip){throw new Error("Popover requires tooltip.js")
}d.DEFAULTS=f.extend({},f.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'});
d.prototype=f.extend({},f.fn.tooltip.Constructor.prototype);
d.prototype.constructor=d;
d.prototype.getDefaults=function(){return d.DEFAULTS
};
d.prototype.setContent=function(){var a=this.tip();
var b=this.getTitle();
var c=this.getContent();
a.find(".popover-title")[this.options.html?"html":"text"](b);
a.find(".popover-content")[this.options.html?"html":"text"](c);
a.removeClass("fade top bottom left right in");
if(!a.find(".popover-title").html()){a.find(".popover-title").hide()
}};
d.prototype.hasContent=function(){return this.getTitle()||this.getContent()
};
d.prototype.getContent=function(){var b=this.$element;
var a=this.options;
return b.attr("data-content")||(typeof a.content=="function"?a.content.call(b[0]):a.content)
};
d.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")
};
d.prototype.tip=function(){if(!this.$tip){this.$tip=f(this.options.template)
}return this.$tip
};
var e=f.fn.popover;
f.fn.popover=function(a){return this.each(function(){var b=f(this);
var c=b.data("bs.popover");
var h=typeof a=="object"&&a;
if(!c){b.data("bs.popover",(c=new d(this,h)))
}if(typeof a=="string"){c[a]()
}})
};
f.fn.popover.Constructor=d;
f.fn.popover.noConflict=function(){f.fn.popover=e;
return this
}
}(jQuery);
+function(f){function d(b,c){var h;
var a=f.proxy(this.process,this);
this.$element=f(b).is("body")?f(window):f(b);
this.$body=f("body");
this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",a);
this.options=f.extend({},d.DEFAULTS,c);
this.selector=(this.options.target||((h=f(b).attr("href"))&&h.replace(/.*(?=#[^\s]+$)/,""))||"")+" .nav li span > a";
this.offsets=f([]);
this.targets=f([]);
this.activeTarget=null;
this.refresh();
this.process()
}d.DEFAULTS={offset:10};
d.prototype.refresh=function(){var c=this.$element[0]==window?"offset":"position";
this.offsets=f([]);
this.targets=f([]);
var b=this;
var a=this.$body.find(this.selector).map(function(){var k=f(this);
var m=k.data("target")||k.attr("href");
var j=/^#\w/.test(m)&&f(m);
return(j&&j.length&&[[j[c]().top+(!f.isWindow(b.$scrollElement.get(0))&&b.$scrollElement.scrollTop()),m]])||null
}).sort(function(j,k){return j[0]-k[0]
}).each(function(){b.offsets.push(this[0]);
b.targets.push(this[1])
})
};
d.prototype.process=function(){var b=this.$scrollElement.scrollTop()+this.options.offset;
var n=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight;
var c=n-this.$scrollElement.height();
var m=this.offsets;
var p=this.targets;
var a=this.activeTarget;
var o;
if(b>=c){return a!=(o=p.last()[0])&&this.activate(o)
}for(o=m.length;
o--;
){a!=p[o]&&b>=m[o]&&(!m[o+1]||b<=m[o+1])&&this.activate(p[o])
}};
d.prototype.activate=function(a){this.activeTarget=a;
f(this.selector).parents(".active").removeClass("active");
var c=this.selector+'[data-target="'+a+'"],'+this.selector+'[href="'+a+'"]';
var b=f(c).parents("li").addClass("active");
if(b.parent(".dropdown-menu").length){b=b.closest("li.dropdown").addClass("active")
}b.trigger("activate")
};
var e=f.fn.scrollspy;
f.fn.scrollspy=function(a){return this.each(function(){var b=f(this);
var c=b.data("bs.scrollspy");
var h=typeof a=="object"&&a;
if(!c){b.data("bs.scrollspy",(c=new d(this,h)))
}if(typeof a=="string"){c[a]()
}})
};
f.fn.scrollspy.Constructor=d;
f.fn.scrollspy.noConflict=function(){f.fn.scrollspy=e;
return this
};
f(window).on("load",function(){f('[data-spy="scroll"]').each(function(){var a=f(this)
})
})
}(jQuery);
+function(f){var d=function(a){this.element=f(a)
};
d.prototype.show=function(){var a=this.element;
var k=a.closest("ul:not(.dropdown-menu)");
var m=a.data("target");
if(!m){m=a.attr("href");
m=m&&m.replace(/.*(?=#[^\s]*$)/,"")
}if(a.parent("li").hasClass("active")){return
}var c=k.find(".active:last a")[0];
var b=f.Event("show.bs.tab",{relatedTarget:c});
a.trigger(b);
if(b.isDefaultPrevented()){return
}var n=f(m);
this.activate(a.parent("li"),k);
this.activate(n,n.parent(),function(){a.trigger({type:"shown.bs.tab",relatedTarget:c})
})
};
d.prototype.activate=function(j,k,a){var m=k.find("> .active");
var b=a&&f.support.transition&&m.hasClass("fade");
function c(){m.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");
j.addClass("active");
if(b){j[0].offsetWidth;
j.addClass("in")
}else{j.removeClass("fade")
}if(j.parent(".dropdown-menu")){j.closest("li.dropdown").addClass("active")
}a&&a()
}b?m.one(f.support.transition.end,c).emulateTransitionEnd(150):c();
m.removeClass("in")
};
var e=f.fn.tab;
f.fn.tab=function(a){return this.each(function(){var b=f(this);
var c=b.data("bs.tab");
if(!c){b.data("bs.tab",(c=new d(this)))
}if(typeof a=="string"){c[a]()
}})
};
f.fn.tab.Constructor=d;
f.fn.tab.noConflict=function(){f.fn.tab=e;
return this
};
f(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(a){a.preventDefault();
f(this).tab("show")
})
}(jQuery);
+function(f){var d=function(a,b){this.options=f.extend({},d.DEFAULTS,b);
this.$window=f(window).on("scroll.bs.affix.data-api",f.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",f.proxy(this.checkPositionWithEventLoop,this));
this.$element=f(a);
this.affixed=this.unpin=null;
this.checkPosition()
};
d.RESET="affix affix-top affix-bottom";
d.DEFAULTS={offset:0};
d.prototype.checkPositionWithEventLoop=function(){setTimeout(f.proxy(this.checkPosition,this),1)
};
d.prototype.checkPosition=function(){if(!this.$element.is(":visible")){return
}var c=f(document).height();
var b=this.$window.scrollTop();
var o=this.$element.offset();
var a=this.options.offset;
var k=a.top;
var m=a.bottom;
if(typeof a!="object"){m=k=a
}if(typeof k=="function"){k=a.top()
}if(typeof m=="function"){m=a.bottom()
}var n=this.unpin!=null&&(b+this.unpin<=o.top)?false:m!=null&&(o.top+this.$element.height()>=c-m)?"bottom":k!=null&&(b<=k)?"top":false;
if(this.affixed===n){return
}if(this.unpin){this.$element.css("top","")
}this.affixed=n;
this.unpin=n=="bottom"?o.top-b:null;
this.$element.removeClass(d.RESET).addClass("affix"+(n?"-"+n:""));
if(n=="bottom"){this.$element.offset({top:document.body.offsetHeight-m-this.$element.height()})
}};
var e=f.fn.affix;
f.fn.affix=function(a){return this.each(function(){var b=f(this);
var c=b.data("bs.affix");
var h=typeof a=="object"&&a;
if(!c){b.data("bs.affix",(c=new d(this,h)))
}if(typeof a=="string"){c[a]()
}})
};
f.fn.affix.Constructor=d;
f.fn.affix.noConflict=function(){f.fn.affix=e;
return this
};
f(window).on("load",function(){f('[data-spy="affix"]').each(function(){var a=f(this);
var b=a.data();
b.offset=b.offset||{};
if(b.offsetBottom){b.offset.bottom=b.offsetBottom
}if(b.offsetTop){b.offset.top=b.offsetTop
}a.affix(b)
})
})
}(jQuery);
/*! Picturefill - Responsive Images that work today. (and mimic the proposed Picture element with span elements). Author: Scott Jehl, Filament Group, 2012 | License: MIT/GPLv2 */
;
var ua=window.navigator.userAgent;
var msie=ua.indexOf("MSIE ");
if(msie<=0){(function(b){b.picturefill=function(){var u=b.document.getElementsByTagName("span");
for(var q=0,j=u.length;
q<j;
q++){if(u[q].getAttribute("data-picture")!==null){var t=u[q].getElementsByTagName("span"),o=[];
for(var r=0,p=t.length;
r<p;
r++){var s=t[r].getAttribute("data-media");
if(!s||(b.matchMedia&&b.matchMedia(s).matches)){o.push(t[r])
}}var a=u[q].getElementsByTagName("img")[0];
if(o.length){var n=o.pop();
if(!a||a.parentNode.nodeName==="NOSCRIPT"){a=b.document.createElement("img");
a.alt=u[q].getAttribute("data-alt")
}else{if(n===a.parentNode){continue
}}a.src=n.getAttribute("data-src");
n.appendChild(a);
a.removeAttribute("width");
a.removeAttribute("height")
}else{if(a){a.parentNode.removeChild(a)
}}}}};
if(b.addEventListener){b.addEventListener("resize",b.picturefill,false);
b.addEventListener("DOMContentLoaded",function(){b.picturefill();
b.removeEventListener("load",b.picturefill,false)
},false);
b.addEventListener("load",b.picturefill,false)
}else{if(b.attachEvent){b.attachEvent("onload",b.picturefill)
}}}(this))
}(function(f){var d=function(a,b){this.init(a,b)
},e=null;
d.prototype={init:function(b,c){this.$element=f(b);
var h=(c&&c.bootstrapMajorVersion)?c.bootstrapMajorVersion:f.fn.bootstrapPaginator.defaults.bootstrapMajorVersion,a=this.$element.attr("id");
if(h===2&&!this.$element.is("div")){throw"in Bootstrap version 2 the pagination must be a div element. Or if you are using Bootstrap pagination 3. Please specify it in bootstrapMajorVersion in the option"
}else{if(h>2&&!this.$element.is("ul")){throw"in Bootstrap version 3 the pagination root item must be an ul element."
}}this.currentPage=1;
this.lastPage=1;
this.setOptions(c);
this.initialized=true
},setOptions:function(a){this.options=f.extend({},(this.options||f.fn.bootstrapPaginator.defaults),a);
this.totalPages=parseInt(this.options.totalPages,10);
this.numberOfPages=parseInt(this.options.numberOfPages,10);
if(a&&typeof(a.currentPage)!=="undefined"){this.setCurrentPage(a.currentPage)
}this.listen();
this.render();
if(!this.initialized&&this.lastPage!==this.currentPage){this.$element.trigger("page-changed",[this.lastPage,this.currentPage])
}},listen:function(){this.$element.off("page-clicked");
this.$element.off("page-changed");
if(typeof(this.options.onPageClicked)==="function"){this.$element.bind("page-clicked",this.options.onPageClicked)
}if(typeof(this.options.onPageChanged)==="function"){this.$element.on("page-changed",this.options.onPageChanged)
}this.$element.bind("page-clicked",this.onPageClicked)
},destroy:function(){this.$element.off("page-clicked");
this.$element.off("page-changed");
this.$element.removeData("bootstrapPaginator");
this.$element.empty()
},show:function(a){this.setCurrentPage(a);
this.render();
if(this.lastPage!==this.currentPage){this.$element.trigger("page-changed",[this.lastPage,this.currentPage])
}},showNext:function(){var a=this.getPages();
if(a.next){this.show(a.next)
}},showPrevious:function(){var a=this.getPages();
if(a.prev){this.show(a.prev)
}},showFirst:function(){var a=this.getPages();
if(a.first){this.show(a.first)
}},showLast:function(){var a=this.getPages();
if(a.last){this.show(a.last)
}},onPageItemClicked:function(b){var c=b.data.type,a=b.data.page;
this.$element.trigger("page-clicked",[b,c,a])
},onPageClicked:function(c,k,j,b){var a=f("."+c.currentTarget.className.split(" ")[0]);
switch(j){case"first":a.bootstrapPaginator("showFirst");
break;
case"prev":a.bootstrapPaginator("showPrevious");
break;
case"next":a.bootstrapPaginator("showNext");
break;
case"last":a.bootstrapPaginator("showLast");
break;
case"page":a.bootstrapPaginator("show",b);
break
}},render:function(){var b=this.getValueFromOption(this.options.containerClass,this.$element),a=this.options.size||"normal",r=this.options.alignment||"left",x=this.getPages(),s=this.options.bootstrapMajorVersion===2?f("<ul></ul>"):this.$element,p=this.options.bootstrapMajorVersion===2?this.getValueFromOption(this.options.listContainerClass,s):null,t=null,w=null,u=null,c=null,y=null,v=0;
this.$element.addClass("pagination");
switch(a.toLowerCase()){case"large":case"small":case"mini":this.$element.addClass(f.fn.bootstrapPaginator.sizeArray[this.options.bootstrapMajorVersion][a.toLowerCase()]);
break;
default:break
}if(this.options.bootstrapMajorVersion===2){switch(r.toLowerCase()){case"center":this.$element.addClass("pagination-centered");
break;
case"right":this.$element.addClass("pagination-right");
break;
default:break
}}this.$element.addClass(b);
this.$element.empty();
if(this.options.bootstrapMajorVersion===2){this.$element.append(s);
s.addClass(p)
}this.pageRef=[];
if(x.first){t=this.buildPageItem("first",x.first);
if(t){s.append(t)
}}if(x.prev){w=this.buildPageItem("prev",x.prev);
if(w){s.append(w);
s.find("li:first-child").addClass("first")
}}for(v=0;
v<x.length;
v=v+1){y=this.buildPageItem("page",x[v]);
if(y){s.append(y)
}}if(x.next){u=this.buildPageItem("next",x.next);
if(u){s.append(u);
s.find("li:last-child").addClass("last")
}}if(x.last){c=this.buildPageItem("last",x.last);
if(c){s.append(c)
}}},buildPageItem:function(m,o){var c=f("<li></li>"),q=f("<a></a>"),a="",b="",r=this.options.itemContainerClass(m,o,this.currentPage),p=this.getValueFromOption(this.options.itemContentClass,m,o,this.currentPage),n=null;
switch(m){case"first":if(!this.getValueFromOption(this.options.shouldShowPage,m,o,this.currentPage)){return
}a=this.options.itemTexts(m,o,this.currentPage);
b=this.options.tooltipTitles(m,o,this.currentPage);
break;
case"last":if(!this.getValueFromOption(this.options.shouldShowPage,m,o,this.currentPage)){return
}a=this.options.itemTexts(m,o,this.currentPage);
b=this.options.tooltipTitles(m,o,this.currentPage);
break;
case"prev":if(!this.getValueFromOption(this.options.shouldShowPage,m,o,this.currentPage)){return
}a=this.options.itemTexts(m,o,this.currentPage);
b=this.options.tooltipTitles(m,o,this.currentPage);
break;
case"next":if(!this.getValueFromOption(this.options.shouldShowPage,m,o,this.currentPage)){return
}a=this.options.itemTexts(m,o,this.currentPage);
b=this.options.tooltipTitles(m,o,this.currentPage);
break;
case"page":if(!this.getValueFromOption(this.options.shouldShowPage,m,o,this.currentPage)){return
}a=this.options.itemTexts(m,o,this.currentPage);
b=this.options.tooltipTitles(m,o,this.currentPage);
break
}c.addClass(r).append(q);
q.addClass(p).html(a).on("click",null,{type:m,page:o},f.proxy(this.onPageItemClicked,this));
if(this.options.pageUrl){q.attr("href",this.getValueFromOption(this.options.pageUrl,m,o,this.currentPage))
}if(this.options.useBootstrapTooltip){n=f.extend({},this.options.bootstrapTooltipOptions,{title:b});
q.tooltip(n)
}else{q.attr("title",b)
}return c
},setCurrentPage:function(a){if(a>this.totalPages||a<1){throw"Page out of range"
}this.lastPage=this.currentPage;
this.currentPage=parseInt(a,10)
},getPages:function(){var b=this.totalPages,a=(this.currentPage%this.numberOfPages===0)?(parseInt(this.currentPage/this.numberOfPages,10)-1)*this.numberOfPages+1:parseInt(this.currentPage/this.numberOfPages,10)*this.numberOfPages+1,j=[],c=0,k=0;
a=a<1?1:a;
for(c=a,k=0;
k<this.numberOfPages&&c<=b;
c=c+1,k=k+1){j.push(c)
}j.first=1;
if(this.currentPage>1){j.prev=this.currentPage-1
}else{j.prev=1
}if(this.currentPage<b){j.next=this.currentPage+1
}else{j.next=b
}j.last=b;
j.current=this.currentPage;
j.total=b;
j.numberOfPages=this.options.numberOfPages;
return j
},getValueFromOption:function(a){var c=null,b=Array.prototype.slice.call(arguments,1);
if(typeof a==="function"){c=a.apply(this,b)
}else{c=a
}return c
}};
e=f.fn.bootstrapPaginator;
f.fn.bootstrapPaginator=function(a){var b=arguments,c=null;
f(this).each(function(p,o){var m=f(o),n=m.data("bootstrapPaginator"),q=(typeof a!=="object")?null:a;
if(!n){n=new d(this,q);
m=f(n.$element);
m.data("bootstrapPaginator",n);
return
}if(typeof a==="string"){if(n[a]){c=n[a].apply(n,Array.prototype.slice.call(b,1))
}else{throw"Method "+a+" does not exist"
}}else{c=n.setOptions(a)
}});
return c
};
f.fn.bootstrapPaginator.sizeArray={"2":{large:"pagination-large",small:"pagination-small",mini:"pagination-mini"},"3":{large:"pagination-lg",small:"pagination-sm",mini:""}};
f.fn.bootstrapPaginator.defaults={containerClass:"",size:"normal",alignment:"left",bootstrapMajorVersion:2,listContainerClass:"",itemContainerClass:function(c,b,a){return(b===a)?"active":""
},itemContentClass:function(c,b,a){return""
},currentPage:1,numberOfPages:10,totalPages:1,pageUrl:function(c,b,a){return null
},onPageClicked:null,onPageChanged:null,useBootstrapTooltip:false,shouldShowPage:function(c,b,a){var h=true;
switch(c){case"first":h=(false);
break;
case"prev":h=(a!==1);
break;
case"next":h=(a!==this.totalPages);
break;
case"last":h=(false);
break;
case"page":h=true;
break
}return h
},itemTexts:function(c,b,a){switch(c){case"first":return"&lt;&lt;";
case"prev":return"&nbsp;";
case"next":return"&nbsp;";
case"last":return"&gt;&gt;";
case"page":return b
}},tooltipTitles:function(c,b,a){switch(c){case"first":return"Go to first page";
case"prev":return"Go to previous page";
case"next":return"Go to next page";
case"last":return"Go to last page";
case"page":return(b===a)?"Current page is "+b:"Go to page "+b
}},bootstrapTooltipOptions:{animation:true,html:true,placement:"top",selector:false,title:"",container:false}};
f.fn.bootstrapPaginator.Constructor=d
}(window.jQuery));
/*! Lazy Load 1.9.3 - MIT license - Copyright 2010-2013 Mika Tuupola */
;
!function(j,h,g,f){var k=j(h);
j.fn.lazyload=function(c){function b(){var m=0;
e.each(function(){var n=j(this);
if(!d.skip_invisible||n.is(":visible")){if(j.abovethetop(this,d)||j.leftofbegin(this,d)){}else{if(j.belowthefold(this,d)||j.rightoffold(this,d)){if(++m>d.failure_limit){return !1
}}else{n.trigger("appear"),m=0
}}}})
}var a,e=this,d={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:h,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};
return c&&(f!==c.failurelimit&&(c.failure_limit=c.failurelimit,delete c.failurelimit),f!==c.effectspeed&&(c.effect_speed=c.effectspeed,delete c.effectspeed),j.extend(d,c)),a=d.container===f||d.container===h?k:j(d.container),0===d.event.indexOf("scroll")&&a.bind(d.event,function(){return b()
}),this.each(function(){var p=this,o=j(p);
p.loaded=!1,(o.attr("src")===f||o.attr("src")===!1)&&o.is("img")&&o.attr("src",d.placeholder),o.one("appear",function(){if(!this.loaded){if(d.appear){var m=e.length;
d.appear.call(p,m,d)
}j("<img />").bind("load",function(){var n=o.attr("data-"+d.data_attribute);
o.hide(),o.is("img")?o.attr("src",n):o.css("background-image","url('"+n+"')"),o[d.effect](d.effect_speed),p.loaded=!0;
var t=j.grep(e,function(q){return !q.loaded
});
if(e=j(t),d.load){var s=e.length;
d.load.call(p,s,d)
}}).attr("src",o.attr("data-"+d.data_attribute))
}}),0!==d.event.indexOf("scroll")&&o.bind(d.event,function(){p.loaded||o.trigger("appear")
})
}),k.bind("resize",function(){b()
}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&k.bind("pageshow",function(m){m.originalEvent&&m.originalEvent.persisted&&e.each(function(){j(this).trigger("appear")
})
}),j(g).ready(function(){b()
}),this
},j.belowthefold=function(a,c){var b;
return b=c.container===f||c.container===h?(h.innerHeight?h.innerHeight:k.height())+k.scrollTop():j(c.container).offset().top+j(c.container).height(),b<=j(a).offset().top-c.threshold
},j.rightoffold=function(a,c){var b;
return b=c.container===f||c.container===h?k.width()+k.scrollLeft():j(c.container).offset().left+j(c.container).width(),b<=j(a).offset().left-c.threshold
},j.abovethetop=function(a,c){var b;
return b=c.container===f||c.container===h?k.scrollTop():j(c.container).offset().top,b>=j(a).offset().top+c.threshold+j(a).height()
},j.leftofbegin=function(a,c){var b;
return b=c.container===f||c.container===h?k.scrollLeft():j(c.container).offset().left,b>=j(a).offset().left+c.threshold+j(a).width()
},j.inviewport=function(b,a){return !(j.rightoffold(b,a)||j.leftofbegin(b,a)||j.belowthefold(b,a)||j.abovethetop(b,a))
},j.extend(j.expr[":"],{"below-the-fold":function(a){return j.belowthefold(a,{threshold:0})
},"above-the-top":function(a){return !j.belowthefold(a,{threshold:0})
},"right-of-screen":function(a){return j.rightoffold(a,{threshold:0})
},"left-of-screen":function(a){return !j.rightoffold(a,{threshold:0})
},"in-viewport":function(a){return j.inviewport(a,{threshold:0})
},"above-the-fold":function(a){return !j.belowthefold(a,{threshold:0})
},"right-of-fold":function(a){return j.rightoffold(a,{threshold:0})
},"left-of-fold":function(a){return !j.rightoffold(a,{threshold:0})
}})
}(jQuery,window,document);
(function(b){b.flexslider=function(B,a){var E=b(B);
E.vars=b.extend({},b.flexslider.defaults,a);
var x=E.vars.namespace,C=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,w=(("ontouchstart" in window)||C||window.DocumentTouch&&document instanceof DocumentTouch)&&E.vars.touch,D="click touchend MSPointerUp keyup",F="",r,y=E.vars.direction==="vertical",v=E.vars.reverse,s=(E.vars.itemWidth>0),z=E.vars.animation==="fade",u=E.vars.asNavFor!=="",A={},t=true;
b.data(B,"flexslider",E);
A={init:function(){E.animating=false;
E.currentSlide=parseInt((E.vars.startAt?E.vars.startAt:0),10);
if(isNaN(E.currentSlide)){E.currentSlide=0
}E.animatingTo=E.currentSlide;
E.atEnd=(E.currentSlide===0||E.currentSlide===E.last);
E.containerSelector=E.vars.selector.substr(0,E.vars.selector.search(" "));
E.slides=b(E.vars.selector,E);
E.container=b(E.containerSelector,E);
E.count=E.slides.length;
E.syncExists=b(E.vars.sync).length>0;
if(E.vars.animation==="slide"){E.vars.animation="swing"
}E.prop=(y)?"top":"marginLeft";
E.args={};
E.manualPause=false;
E.stopped=false;
E.started=false;
E.startTimeout=null;
E.transitions=!E.vars.video&&!z&&E.vars.useCSS&&(function(){var c=document.createElement("div"),d=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];
for(var e in d){if(c.style[d[e]]!==undefined){E.pfx=d[e].replace("Perspective","").toLowerCase();
E.prop="-"+E.pfx+"-transform";
return true
}}return false
}());
E.ensureAnimationEnd="";
if(E.vars.controlsContainer!==""){E.controlsContainer=b(E.vars.controlsContainer).length>0&&b(E.vars.controlsContainer)
}if(E.vars.manualControls!==""){E.manualControls=b(E.vars.manualControls).length>0&&b(E.vars.manualControls)
}if(E.vars.randomize){E.slides.sort(function(){return(Math.round(Math.random())-0.5)
});
E.container.empty().append(E.slides)
}E.doMath();
E.setup("init");
if(E.vars.controlNav){A.controlNav.setup()
}if(E.vars.directionNav){A.directionNav.setup()
}if(E.vars.keyboard&&(b(E.containerSelector).length===1||E.vars.multipleKeyboard)){b(document).bind("keyup",function(d){var e=d.keyCode;
if(!E.animating&&(e===39||e===37)){var c=(e===39)?E.getTarget("next"):(e===37)?E.getTarget("prev"):false;
E.flexAnimate(c,E.vars.pauseOnAction)
}})
}if(E.vars.mousewheel){E.bind("mousewheel",function(e,c,f,g){e.preventDefault();
var d=(c<0)?E.getTarget("next"):E.getTarget("prev");
E.flexAnimate(d,E.vars.pauseOnAction)
})
}if(E.vars.pausePlay){A.pausePlay.setup()
}if(E.vars.slideshow&&E.vars.pauseInvisible){A.pauseInvisible.init()
}if(E.vars.slideshow){if(E.vars.pauseOnHover){E.hover(function(){if(!E.manualPlay&&!E.manualPause){E.pause()
}},function(){if(!E.manualPause&&!E.manualPlay&&!E.stopped){E.play()
}})
}if(!E.vars.pauseInvisible||!A.pauseInvisible.isHidden()){(E.vars.initDelay>0)?E.startTimeout=setTimeout(E.play,E.vars.initDelay):E.play()
}}if(u){A.asNav.setup()
}if(w&&E.vars.touch){A.touch()
}if(!z||(z&&E.vars.smoothHeight)){b(window).bind("resize orientationchange focus",A.resize)
}E.find("img").attr("draggable","false");
setTimeout(function(){E.vars.start(E)
},200)
},asNav:{setup:function(){E.asNav=true;
E.animatingTo=Math.floor(E.currentSlide/E.move);
E.currentItem=E.currentSlide;
E.slides.removeClass(x+"active-slide").eq(E.currentItem).addClass(x+"active-slide");
if(!C){E.slides.on(D,function(d){d.preventDefault();
var e=b(this),f=e.index();
var c=e.offset().left-b(E).scrollLeft();
if(c<=0&&e.hasClass(x+"active-slide")){E.flexAnimate(E.getTarget("prev"),true)
}else{if(!b(E.vars.asNavFor).data("flexslider").animating&&!e.hasClass(x+"active-slide")){E.direction=(E.currentItem<f)?"next":"prev";
E.flexAnimate(f,E.vars.pauseOnAction,false,true,true)
}}})
}else{B._slider=E;
E.slides.each(function(){var c=this;
c._gesture=new MSGesture();
c._gesture.target=c;
c.addEventListener("MSPointerDown",function(d){d.preventDefault();
if(d.currentTarget._gesture){d.currentTarget._gesture.addPointer(d.pointerId)
}},false);
c.addEventListener("MSGestureTap",function(d){d.preventDefault();
var e=b(this),f=e.index();
if(!b(E.vars.asNavFor).data("flexslider").animating&&!e.hasClass("active")){E.direction=(E.currentItem<f)?"next":"prev";
E.flexAnimate(f,E.vars.pauseOnAction,false,true,true)
}})
})
}}},controlNav:{setup:function(){if(!E.manualControls){A.controlNav.setupPaging()
}else{A.controlNav.setupManual()
}},setupPaging:function(){var e=(E.vars.controlNav==="thumbnails")?"control-thumbs":"control-paging",g=1,d,h;
E.controlNavScaffold=b('<ol class="'+x+"control-nav "+x+e+'"></ol>');
if(E.pagingCount>1){for(var f=0;
f<E.pagingCount;
f++){h=E.slides.eq(f);
d=(E.vars.controlNav==="thumbnails")?'<img src="'+h.attr("data-thumb")+'"/>':"<a>"+g+"</a>";
if("thumbnails"===E.vars.controlNav&&true===E.vars.thumbCaptions){var c=h.attr("data-thumbcaption");
if(""!=c&&undefined!=c){d+='<span class="'+x+'caption">'+c+"</span>"
}}E.controlNavScaffold.append("<li>"+d+"</li>");
g++
}}(E.controlsContainer)?b(E.controlsContainer).append(E.controlNavScaffold):E.append(E.controlNavScaffold);
A.controlNav.set();
A.controlNav.active();
E.controlNavScaffold.delegate("a, img",D,function(j){j.preventDefault();
if(F===""||F===j.type){var k=b(this),m=E.controlNav.index(k);
if(!k.hasClass(x+"active")){E.direction=(m>E.currentSlide)?"next":"prev";
E.flexAnimate(m,E.vars.pauseOnAction)
}}if(F===""){F=j.type
}A.setToClearWatchedEvent()
})
},setupManual:function(){E.controlNav=E.manualControls;
A.controlNav.active();
E.controlNav.bind(D,function(e){e.preventDefault();
if(F===""||F===e.type){var c=b(this),d=E.controlNav.index(c);
if(!c.hasClass(x+"active")){(d>E.currentSlide)?E.direction="next":E.direction="prev";
E.flexAnimate(d,E.vars.pauseOnAction)
}}if(F===""){F=e.type
}A.setToClearWatchedEvent()
})
},set:function(){var c=(E.vars.controlNav==="thumbnails")?"img":"a";
E.controlNav=b("."+x+"control-nav li "+c,(E.controlsContainer)?E.controlsContainer:E)
},active:function(){E.controlNav.removeClass(x+"active").eq(E.animatingTo).addClass(x+"active")
},update:function(d,c){if(E.pagingCount>1&&d==="add"){E.controlNavScaffold.append(b("<li><a>"+E.count+"</a></li>"))
}else{if(E.pagingCount===1){E.controlNavScaffold.find("li").remove()
}else{E.controlNav.eq(c).closest("li").remove()
}}A.controlNav.set();
(E.pagingCount>1&&E.pagingCount!==E.controlNav.length)?E.update(c,d):A.controlNav.active()
}},directionNav:{setup:function(){var c=b('<ul class="'+x+'direction-nav"><li><a class="'+x+'prev" href="#">'+E.vars.prevText+'</a></li><li><a class="'+x+'next" href="#">'+E.vars.nextText+"</a></li></ul>");
if(E.controlsContainer){b(E.controlsContainer).append(c);
E.directionNav=b("."+x+"direction-nav li a",E.controlsContainer)
}else{E.append(c);
E.directionNav=b("."+x+"direction-nav li a",E)
}A.directionNav.update();
E.directionNav.bind(D,function(e){e.preventDefault();
var d;
if(F===""||F===e.type){d=(b(this).hasClass(x+"next"))?E.getTarget("next"):E.getTarget("prev");
E.flexAnimate(d,E.vars.pauseOnAction)
}if(F===""){F=e.type
}A.setToClearWatchedEvent()
})
},update:function(){var c=x+"disabled";
if(E.pagingCount===1){E.directionNav.addClass(c).attr("tabindex","-1")
}else{if(!E.vars.animationLoop){if(E.animatingTo===0){E.directionNav.removeClass(c).filter("."+x+"prev").addClass(c).attr("tabindex","-1")
}else{if(E.animatingTo===E.last){E.directionNav.removeClass(c).filter("."+x+"next").addClass(c).attr("tabindex","-1")
}else{E.directionNav.removeClass(c).removeAttr("tabindex")
}}}else{E.directionNav.removeClass(c).removeAttr("tabindex")
}}}},pausePlay:{setup:function(){var c=b('<div class="'+x+'pauseplay"><a></a></div>');
if(E.controlsContainer){E.controlsContainer.append(c);
E.pausePlay=b("."+x+"pauseplay a",E.controlsContainer)
}else{E.append(c);
E.pausePlay=b("."+x+"pauseplay a",E)
}A.pausePlay.update((E.vars.slideshow)?x+"pause":x+"play");
E.pausePlay.bind(D,function(d){d.preventDefault();
if(F===""||F===d.type){if(b(this).hasClass(x+"pause")){E.manualPause=true;
E.manualPlay=false;
E.pause()
}else{E.manualPause=false;
E.manualPlay=true;
E.play()
}}if(F===""){F=d.type
}A.setToClearWatchedEvent()
})
},update:function(c){(c==="play")?E.pausePlay.removeClass(x+"pause").addClass(x+"play").html(E.vars.playText):E.pausePlay.removeClass(x+"play").addClass(x+"pause").html(E.vars.pauseText)
}},touch:function(){var e,h,k,d,o,J,f=false,p=0,H=0,m=0;
if(!C){B.addEventListener("touchstart",j,false);
function j(G){if(E.animating){G.preventDefault()
}else{if((window.navigator.msPointerEnabled)||G.touches.length===1){E.pause();
d=(y)?E.h:E.w;
J=Number(new Date());
p=G.touches[0].pageX;
H=G.touches[0].pageY;
k=(s&&v&&E.animatingTo===E.last)?0:(s&&v)?E.limit-(((E.itemW+E.vars.itemMargin)*E.move)*E.animatingTo):(s&&E.currentSlide===E.last)?E.limit:(s)?((E.itemW+E.vars.itemMargin)*E.move)*E.currentSlide:(v)?(E.last-E.currentSlide+E.cloneOffset)*d:(E.currentSlide+E.cloneOffset)*d;
e=(y)?H:p;
h=(y)?p:H;
B.addEventListener("touchmove",I,false);
B.addEventListener("touchend",q,false)
}}}function I(K){p=K.touches[0].pageX;
H=K.touches[0].pageY;
o=(y)?e-H:e-p;
f=(y)?(Math.abs(o)<Math.abs(p-h)):(Math.abs(o)<Math.abs(H-h));
var G=500;
if(!f||Number(new Date())-J>G){K.preventDefault();
if(!z&&E.transitions){if(!E.vars.animationLoop){o=o/((E.currentSlide===0&&o<0||E.currentSlide===E.last&&o>0)?(Math.abs(o)/d+2):1)
}E.setProps(k+o,"setTouch")
}}}function q(G){B.removeEventListener("touchmove",I,false);
if(E.animatingTo===E.currentSlide&&!f&&!(o===null)){var K=(v)?-o:o,L=(K>0)?E.getTarget("next"):E.getTarget("prev");
if(E.canAdvance(L)&&(Number(new Date())-J<550&&Math.abs(K)>50||Math.abs(K)>d/2)){E.flexAnimate(L,E.vars.pauseOnAction)
}else{if(!z){E.flexAnimate(E.currentSlide,E.vars.pauseOnAction,true)
}}}B.removeEventListener("touchend",q,false);
e=null;
h=null;
o=null;
k=null
}}else{B.style.msTouchAction="none";
B._gesture=new MSGesture();
B._gesture.target=B;
B.addEventListener("MSPointerDown",c,false);
B._slider=E;
B.addEventListener("MSGestureChange",g,false);
B.addEventListener("MSGestureEnd",n,false);
function c(G){G.stopPropagation();
if(E.animating){G.preventDefault()
}else{E.pause();
B._gesture.addPointer(G.pointerId);
m=0;
d=(y)?E.h:E.w;
J=Number(new Date());
k=(s&&v&&E.animatingTo===E.last)?0:(s&&v)?E.limit-(((E.itemW+E.vars.itemMargin)*E.move)*E.animatingTo):(s&&E.currentSlide===E.last)?E.limit:(s)?((E.itemW+E.vars.itemMargin)*E.move)*E.currentSlide:(v)?(E.last-E.currentSlide+E.cloneOffset)*d:(E.currentSlide+E.cloneOffset)*d
}}function g(G){G.stopPropagation();
var L=G.target._slider;
if(!L){return
}var M=-G.translationX,N=-G.translationY;
m=m+((y)?N:M);
o=m;
f=(y)?(Math.abs(m)<Math.abs(-M)):(Math.abs(m)<Math.abs(-N));
if(G.detail===G.MSGESTURE_FLAG_INERTIA){setImmediate(function(){B._gesture.stop()
});
return
}if(!f||Number(new Date())-J>500){G.preventDefault();
if(!z&&L.transitions){if(!L.vars.animationLoop){o=m/((L.currentSlide===0&&m<0||L.currentSlide===L.last&&m>0)?(Math.abs(m)/d+2):1)
}L.setProps(k+o,"setTouch")
}}}function n(G){G.stopPropagation();
var N=G.target._slider;
if(!N){return
}if(N.animatingTo===N.currentSlide&&!f&&!(o===null)){var L=(v)?-o:o,M=(L>0)?N.getTarget("next"):N.getTarget("prev");
if(N.canAdvance(M)&&(Number(new Date())-J<550&&Math.abs(L)>50||Math.abs(L)>d/2)){N.flexAnimate(M,N.vars.pauseOnAction)
}else{if(!z){N.flexAnimate(N.currentSlide,N.vars.pauseOnAction,true)
}}}e=null;
h=null;
o=null;
k=null;
m=0
}}},resize:function(){if(!E.animating&&E.is(":visible")){if(!s){E.doMath()
}if(z){A.smoothHeight()
}else{if(s){E.slides.width(E.computedW);
E.update(E.pagingCount);
E.setProps()
}else{if(y){E.viewport.height(E.h);
E.setProps(E.h,"setTotal")
}else{if(E.vars.smoothHeight){A.smoothHeight()
}E.newSlides.width(E.computedW);
E.setProps(E.computedW,"setTotal")
}}}}},smoothHeight:function(d){if(!y||z){var c=(z)?E:E.viewport;
(d)?c.animate({height:E.slides.eq(E.animatingTo).height()},d):c.height(E.slides.eq(E.animatingTo).height())
}},sync:function(e){var c=b(E.vars.sync).data("flexslider"),d=E.animatingTo;
switch(e){case"animate":c.flexAnimate(d,E.vars.pauseOnAction,false,true);
break;
case"play":if(!c.playing&&!c.asNav){c.play()
}break;
case"pause":c.pause();
break
}},uniqueID:function(c){c.filter("[id]").add(c.find("[id]")).each(function(){var d=b(this);
d.attr("id",d.attr("id")+"_clone")
});
return c
},pauseInvisible:{visProp:null,init:function(){var c=["webkit","moz","ms","o"];
if("hidden" in document){return"hidden"
}for(var d=0;
d<c.length;
d++){if((c[d]+"Hidden") in document){A.pauseInvisible.visProp=c[d]+"Hidden"
}}if(A.pauseInvisible.visProp){var e=A.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";
document.addEventListener(e,function(){if(A.pauseInvisible.isHidden()){if(E.startTimeout){clearTimeout(E.startTimeout)
}else{E.pause()
}}else{if(E.started){E.play()
}else{(E.vars.initDelay>0)?setTimeout(E.play,E.vars.initDelay):E.play()
}}})
}},isHidden:function(){return document[A.pauseInvisible.visProp]||false
}},setToClearWatchedEvent:function(){clearTimeout(r);
r=setTimeout(function(){F=""
},3000)
}};
E.flexAnimate=function(e,d,m,j,h){if(!E.vars.animationLoop&&e!==E.currentSlide){E.direction=(e>E.currentSlide)?"next":"prev"
}if(u&&E.pagingCount===1){E.direction=(E.currentItem<e)?"next":"prev"
}if(!E.animating&&(E.canAdvance(e,h)||m)&&E.is(":visible")){if(u&&j){var n=b(E.vars.asNavFor).data("flexslider");
E.atEnd=e===0||e===E.count-1;
n.flexAnimate(e,true,false,true,h);
E.direction=(E.currentItem<e)?"next":"prev";
n.direction=E.direction;
if(Math.ceil((e+1)/E.visible)-1!==E.currentSlide&&e!==0){E.currentItem=e;
E.slides.removeClass(x+"active-slide").eq(e).addClass(x+"active-slide");
e=Math.floor(e/E.visible)
}else{E.currentItem=e;
E.slides.removeClass(x+"active-slide").eq(e).addClass(x+"active-slide");
return false
}}E.animating=true;
E.animatingTo=e;
if(d){E.pause()
}E.vars.before(E);
if(E.syncExists&&!h){A.sync("animate")
}if(E.vars.controlNav){A.controlNav.active()
}if(!s){E.slides.removeClass(x+"active-slide").eq(e).addClass(x+"active-slide")
}E.atEnd=e===0||e===E.last;
if(E.vars.directionNav){A.directionNav.update()
}if(e===E.last){E.vars.end(E);
if(!E.vars.animationLoop){E.pause()
}}if(!z){var f=(y)?E.slides.filter(":first").height():E.computedW,g,k,c;
if(s){g=E.vars.itemMargin;
c=((E.itemW+g)*E.move)*E.animatingTo;
k=(c>E.limit&&E.visible!==1)?E.limit:c
}else{if(E.currentSlide===0&&e===E.count-1&&E.vars.animationLoop&&E.direction!=="next"){k=(v)?(E.count+E.cloneOffset)*f:0
}else{if(E.currentSlide===E.last&&e===0&&E.vars.animationLoop&&E.direction!=="prev"){k=(v)?0:(E.count+1)*f
}else{k=(v)?((E.count-1)-e+E.cloneOffset)*f:(e+E.cloneOffset)*f
}}}E.setProps(k,"",E.vars.animationSpeed);
if(E.transitions){if(!E.vars.animationLoop||!E.atEnd){E.animating=false;
E.currentSlide=E.animatingTo
}E.container.unbind("webkitTransitionEnd transitionend");
E.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(E.ensureAnimationEnd);
E.wrapup(f)
});
clearTimeout(E.ensureAnimationEnd);
E.ensureAnimationEnd=setTimeout(function(){E.wrapup(f)
},E.vars.animationSpeed+100)
}else{E.container.animate(E.args,E.vars.animationSpeed,E.vars.easing,function(){E.wrapup(f)
})
}}else{if(!w){E.slides.eq(E.currentSlide).css({zIndex:1}).animate({opacity:0},E.vars.animationSpeed,E.vars.easing);
E.slides.eq(e).css({zIndex:2}).animate({opacity:1},E.vars.animationSpeed,E.vars.easing,E.wrapup)
}else{E.slides.eq(E.currentSlide).css({opacity:0,zIndex:1});
E.slides.eq(e).css({opacity:1,zIndex:2});
E.wrapup(f)
}}if(E.vars.smoothHeight){A.smoothHeight(E.vars.animationSpeed)
}}};
E.wrapup=function(c){if(!z&&!s){if(E.currentSlide===0&&E.animatingTo===E.last&&E.vars.animationLoop){E.setProps(c,"jumpEnd")
}else{if(E.currentSlide===E.last&&E.animatingTo===0&&E.vars.animationLoop){E.setProps(c,"jumpStart")
}}}E.animating=false;
E.currentSlide=E.animatingTo;
E.vars.after(E)
};
E.animateSlides=function(){if(!E.animating&&t){E.flexAnimate(E.getTarget("next"))
}};
E.pause=function(){clearInterval(E.animatedSlides);
E.animatedSlides=null;
E.playing=false;
if(E.vars.pausePlay){A.pausePlay.update("play")
}if(E.syncExists){A.sync("pause")
}};
E.play=function(){if(E.playing){clearInterval(E.animatedSlides)
}E.animatedSlides=E.animatedSlides||setInterval(E.animateSlides,E.vars.slideshowSpeed);
E.started=E.playing=true;
if(E.vars.pausePlay){A.pausePlay.update("pause")
}if(E.syncExists){A.sync("play")
}};
E.stop=function(){E.pause();
E.stopped=true
};
E.canAdvance=function(c,e){var d=(u)?E.pagingCount-1:E.last;
return(e)?true:(u&&E.currentItem===E.count-1&&c===0&&E.direction==="prev")?true:(u&&E.currentItem===0&&c===E.pagingCount-1&&E.direction!=="next")?false:(c===E.currentSlide&&!u)?false:(E.vars.animationLoop)?true:(E.atEnd&&E.currentSlide===0&&c===d&&E.direction!=="next")?false:(E.atEnd&&E.currentSlide===d&&c===0&&E.direction==="next")?false:true
};
E.getTarget=function(c){E.direction=c;
if(c==="next"){return(E.currentSlide===E.last)?0:E.currentSlide+1
}else{return(E.currentSlide===0)?E.last:E.currentSlide-1
}};
E.setProps=function(c,f,e){var d=(function(){var h=(c)?c:((E.itemW+E.vars.itemMargin)*E.move)*E.animatingTo,g=(function(){if(s){return(f==="setTouch")?c:(v&&E.animatingTo===E.last)?0:(v)?E.limit-(((E.itemW+E.vars.itemMargin)*E.move)*E.animatingTo):(E.animatingTo===E.last)?E.limit:h
}else{switch(f){case"setTotal":return(v)?((E.count-1)-E.currentSlide+E.cloneOffset)*c:(E.currentSlide+E.cloneOffset)*c;
case"setTouch":return(v)?c:c;
case"jumpEnd":return(v)?c:E.count*c;
case"jumpStart":return(v)?E.count*c:c;
default:return c
}}}());
return(g*-1)+"px"
}());
if(E.transitions){d=(y)?"translate3d(0,"+d+",0)":"translate3d("+d+",0,0)";
e=(e!==undefined)?(e/1000)+"s":"0s";
E.container.css("-"+E.pfx+"-transition-duration",e);
E.container.css("transition-duration",e)
}E.args[E.prop]=d;
if(E.transitions||e===undefined){E.container.css(E.args)
}E.container.css("transform",d)
};
E.setup=function(d){if(!z){var c,e;
if(d==="init"){E.viewport=b('<div class="'+x+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(E).append(E.container);
E.cloneCount=0;
E.cloneOffset=0;
if(v){e=b.makeArray(E.slides).reverse();
E.slides=b(e);
E.container.empty().append(E.slides)
}}if(E.vars.animationLoop&&!s){E.cloneCount=2;
E.cloneOffset=1;
if(d!=="init"){E.container.find(".clone").remove()
}E.container.append(A.uniqueID(E.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(A.uniqueID(E.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))
}E.newSlides=b(E.vars.selector,E);
c=(v)?E.count-1-E.currentSlide+E.cloneOffset:E.currentSlide+E.cloneOffset;
if(y&&!s){E.container.height((E.count+E.cloneCount)*200+"%").css("position","absolute").width("100%");
setTimeout(function(){E.newSlides.css({display:"block"});
E.doMath();
E.viewport.height(E.h);
E.setProps(c*E.h,"init")
},(d==="init")?100:0)
}else{E.container.width((E.count+E.cloneCount)*200+"%");
E.setProps(c*E.computedW,"init");
setTimeout(function(){E.doMath();
E.newSlides.css({width:E.computedW,"float":"left",display:"block"});
if(E.vars.smoothHeight){A.smoothHeight()
}},(d==="init")?100:0)
}}else{E.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"});
if(d==="init"){if(!w){if(E.vars.fadeFirstSlide==false){E.slides.css({opacity:0,display:"block",zIndex:1}).eq(E.currentSlide).css({zIndex:2}).css({opacity:1})
}else{E.slides.css({opacity:0,display:"block",zIndex:1}).eq(E.currentSlide).css({zIndex:2}).animate({opacity:1},E.vars.animationSpeed,E.vars.easing)
}}else{E.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+E.vars.animationSpeed/1000+"s ease",zIndex:1}).eq(E.currentSlide).css({opacity:1,zIndex:2})
}}if(E.vars.smoothHeight){A.smoothHeight()
}}if(!s){E.slides.removeClass(x+"active-slide").eq(E.currentSlide).addClass(x+"active-slide")
}E.vars.init(E)
};
E.doMath=function(){var f=E.slides.first(),c=E.vars.itemMargin,e=E.vars.minItems,d=E.vars.maxItems;
E.w=(E.viewport===undefined)?E.width():E.viewport.width();
E.h=f.height();
E.boxPadding=f.outerWidth()-f.width();
if(s){E.itemT=E.vars.itemWidth+c;
E.minW=(e)?e*E.itemT:E.w;
E.maxW=(d)?(d*E.itemT)-c:E.w;
E.itemW=(E.minW>E.w)?(E.w-(c*(e-1)))/e:(E.maxW<E.w)?(E.w-(c*(d-1)))/d:(E.vars.itemWidth>E.w)?E.w:E.vars.itemWidth;
E.visible=Math.floor(E.w/(E.itemW));
E.move=(E.vars.move>0&&E.vars.move<E.visible)?E.vars.move:E.visible;
E.pagingCount=Math.ceil(((E.count-E.visible)/E.move)+1);
E.last=E.pagingCount-1;
E.limit=(E.pagingCount===1)?0:(E.vars.itemWidth>E.w)?(E.itemW*(E.count-1))+(c*(E.count-1)):((E.itemW+c)*E.count)-E.w-c
}else{E.itemW=E.w;
E.pagingCount=E.count;
E.last=E.count-1
}E.computedW=E.itemW-E.boxPadding
};
E.update=function(c,d){E.doMath();
if(!s){if(c<E.currentSlide){E.currentSlide+=1
}else{if(c<=E.currentSlide&&c!==0){E.currentSlide-=1
}}E.animatingTo=E.currentSlide
}if(E.vars.controlNav&&!E.manualControls){if((d==="add"&&!s)||E.pagingCount>E.controlNav.length){A.controlNav.update("add")
}else{if((d==="remove"&&!s)||E.pagingCount<E.controlNav.length){if(s&&E.currentSlide>E.last){E.currentSlide-=1;
E.animatingTo-=1
}A.controlNav.update("remove",E.last)
}}}if(E.vars.directionNav){A.directionNav.update()
}};
E.addSlide=function(e,c){var d=b(e);
E.count+=1;
E.last=E.count-1;
if(y&&v){(c!==undefined)?E.slides.eq(E.count-c).after(d):E.container.prepend(d)
}else{(c!==undefined)?E.slides.eq(c).before(d):E.container.append(d)
}E.update(c,"add");
E.slides=b(E.vars.selector+":not(.clone)",E);
E.setup();
E.vars.added(E)
};
E.removeSlide=function(d){var c=(isNaN(d))?E.slides.index(b(d)):d;
E.count-=1;
E.last=E.count-1;
if(isNaN(d)){b(d,E.slides).remove()
}else{(y&&v)?E.slides.eq(E.last).remove():E.slides.eq(d).remove()
}E.doMath();
E.update(c,"remove");
E.slides=b(E.vars.selector+":not(.clone)",E);
E.setup();
E.vars.removed(E)
};
A.init()
};
b(window).blur(function(a){focused=false
}).focus(function(a){focused=true
});
b.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:false,animationLoop:true,smoothHeight:false,startAt:0,slideshow:true,slideshowSpeed:7000,animationSpeed:600,initDelay:0,randomize:false,fadeFirstSlide:true,thumbCaptions:false,pauseOnAction:true,pauseOnHover:false,pauseInvisible:true,useCSS:true,touch:true,video:false,controlNav:true,directionNav:true,prevText:"Previous",nextText:"Next",keyboard:true,multipleKeyboard:false,mousewheel:false,pausePlay:false,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:true,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}};
b.fn.flexslider=function(a){if(a===undefined){a={}
}if(typeof a==="object"){return this.each(function(){var c=b(this),h=(a.selector)?a.selector:".slides > li",g=c.find(h);
if((g.length===1&&a.allowOneSlide===true)||g.length===0){g.fadeIn(400);
if(a.start){a.start(c)
}}else{if(c.data("flexslider")===undefined){new b.flexslider(this,a)
}}})
}else{var d=b(this).data("flexslider");
switch(a){case"play":d.play();
break;
case"pause":d.pause();
break;
case"stop":d.stop();
break;
case"next":d.flexAnimate(d.getTarget("next"),true);
break;
case"prev":case"previous":d.flexAnimate(d.getTarget("prev"),true);
break;
default:if(typeof a==="number"){d.flexAnimate(a,true)
}}}}
})(jQuery);
/*!
 * jQuery flexslider extension
 * Original author: @markirby
 * Licensed under the MIT license
 */
(function(o,p,h,m){var k="flexsliderManualDirectionControls",n={previousElementSelector:".previous",nextElementSelector:".next",disabledStateClassName:"disable"};
function j(a,b){this.element=a;
this.options=o.extend({},n,b);
this._flexslider=o(a).data("flexslider");
this._originalFlexsliderWrapupFunction=this._flexslider.wrapup;
this._defaults=n;
this._name=k;
this.init()
}j.prototype.init=function(){this.addEventListeners();
var a=this;
this._flexslider.wrapup=function(b){a.onAnimationEnd.call(a,b)
}
};
j.prototype.addEventListeners=function(){o(this.element).find(this.options.previousElementSelector).bind("touchstart.flexsliderPromo click.flexsliderPromo",{self:this},function(a){a.stopPropagation();
a.preventDefault();
if(!a.handled){a.data.self.goToTargetInDirection("prev");
a.handled=true
}});
o(this.element).find(this.options.nextElementSelector).bind("click.flexsliderPromo",{self:this},function(a){a.stopPropagation();
a.preventDefault();
if(!a.handled){a.data.self.goToTargetInDirection("next");
a.handled=true
}})
};
j.prototype.goToTargetInDirection=function(a){var b=this._flexslider.getTarget(a);
if(this._flexslider.canAdvance(b)){this._flexslider.flexAnimate(b)
}return false
};
j.prototype.addOrRemoveDisabledStateForDirection=function(a,c){var b=this._flexslider.getTarget(a);
if(!this._flexslider.canAdvance(b)){c.addClass(this.options.disabledStateClassName)
}else{c.removeClass(this.options.disabledStateClassName)
}};
j.prototype.onAnimationEnd=function(a){var c=o(this.element).find(this.options.nextElementSelector),b=o(this.element).find(this.options.previousElementSelector);
this.addOrRemoveDisabledStateForDirection("next",c);
this.addOrRemoveDisabledStateForDirection("prev",b);
this._originalFlexsliderWrapupFunction(a)
};
o.fn[k]=function(a){return this.each(function(){if(!o.data(this,"plugin_"+k)){o.data(this,"plugin_"+k,new j(this,a))
}})
}
})(jQuery,window,document);
if(!Object.keys){Object.keys=function(d){var f=[];
for(var e in d){if(d.hasOwnProperty(e)){f.push(e)
}}return f
}
}if(!Array.prototype.indexOf){Array.prototype.indexOf=function(d){var e=this.length>>>0;
var f=Number(arguments[1])||0;
f=(f<0)?Math.ceil(f):Math.floor(f);
if(f<0){f+=e
}for(;
f<e;
f++){if(f in this&&this[f]===d){return f
}}return -1
}
}
/*! jQuery UI - v1.10.4 - 2014-01-17
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.slider.js, jquery.ui.sortable.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */
(function(g,j){var h=0,k=/^ui-id-\d+$/;
g.ui=g.ui||{};
g.extend(g.ui,{version:"1.10.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});
g.fn.extend({focus:(function(a){return function(c,b){return typeof c==="number"?this.each(function(){var d=this;
setTimeout(function(){g(d).focus();
if(b){b.call(d)
}},c)
}):a.apply(this,arguments)
}
})(g.fn.focus),scrollParent:function(){var a;
if((g.ui.ie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){a=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(g.css(this,"position"))&&(/(auto|scroll)/).test(g.css(this,"overflow")+g.css(this,"overflow-y")+g.css(this,"overflow-x"))
}).eq(0)
}else{a=this.parents().filter(function(){return(/(auto|scroll)/).test(g.css(this,"overflow")+g.css(this,"overflow-y")+g.css(this,"overflow-x"))
}).eq(0)
}return(/fixed/).test(this.css("position"))||!a.length?g(document):a
},zIndex:function(a){if(a!==j){return this.css("zIndex",a)
}if(this.length){var c=g(this[0]),d,b;
while(c.length&&c[0]!==document){d=c.css("position");
if(d==="absolute"||d==="relative"||d==="fixed"){b=parseInt(c.css("zIndex"),10);
if(!isNaN(b)&&b!==0){return b
}}c=c.parent()
}}return 0
},uniqueId:function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++h)
}})
},removeUniqueId:function(){return this.each(function(){if(k.test(this.id)){g(this).removeAttr("id")
}})
}});
function m(d,f){var b,c,e,a=d.nodeName.toLowerCase();
if("area"===a){b=d.parentNode;
c=b.name;
if(!d.href||!c||b.nodeName.toLowerCase()!=="map"){return false
}e=g("img[usemap=#"+c+"]")[0];
return !!e&&n(e)
}return(/input|select|textarea|button|object/.test(a)?!d.disabled:"a"===a?d.href||f:f)&&n(d)
}function n(a){return g.expr.filters.visible(a)&&!g(a).parents().addBack().filter(function(){return g.css(this,"visibility")==="hidden"
}).length
}g.extend(g.expr[":"],{data:g.expr.createPseudo?g.expr.createPseudo(function(a){return function(b){return !!g.data(b,a)
}
}):function(a,b,c){return !!g.data(a,c[3])
},focusable:function(a){return m(a,!isNaN(g.attr(a,"tabindex")))
},tabbable:function(a){var c=g.attr(a,"tabindex"),b=isNaN(c);
return(b||c>=0)&&m(a,!b)
}});
if(!g("<a>").outerWidth(1).jquery){g.each(["Width","Height"],function(d,f){var e=f==="Width"?["Left","Right"]:["Top","Bottom"],c=f.toLowerCase(),a={innerWidth:g.fn.innerWidth,innerHeight:g.fn.innerHeight,outerWidth:g.fn.outerWidth,outerHeight:g.fn.outerHeight};
function b(s,t,q,r){g.each(e,function(){t-=parseFloat(g.css(s,"padding"+this))||0;
if(q){t-=parseFloat(g.css(s,"border"+this+"Width"))||0
}if(r){t-=parseFloat(g.css(s,"margin"+this))||0
}});
return t
}g.fn["inner"+f]=function(o){if(o===j){return a["inner"+f].call(this)
}return this.each(function(){g(this).css(c,b(this,o)+"px")
})
};
g.fn["outer"+f]=function(o,p){if(typeof o!=="number"){return a["outer"+f].call(this,o)
}return this.each(function(){g(this).css(c,b(this,o,true,p)+"px")
})
}
})
}if(!g.fn.addBack){g.fn.addBack=function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))
}
}if(g("<a>").data("a-b","a").removeData("a-b").data("a-b")){g.fn.removeData=(function(a){return function(b){if(arguments.length){return a.call(this,g.camelCase(b))
}else{return a.call(this)
}}
})(g.fn.removeData)
}g.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
g.support.selectstart="onselectstart" in document.createElement("div");
g.fn.extend({disableSelection:function(){return this.bind((g.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()
})
},enableSelection:function(){return this.unbind(".ui-disableSelection")
}});
g.extend(g.ui,{plugin:{add:function(d,c,a){var e,b=g.ui[d].prototype;
for(e in a){b.plugins[e]=b.plugins[e]||[];
b.plugins[e].push([c,a[e]])
}},call:function(e,c,d){var b,a=e.plugins[c];
if(!a||!e.element[0].parentNode||e.element[0].parentNode.nodeType===11){return
}for(b=0;
b<a.length;
b++){if(e.options[a[b][0]]){a[b][1].apply(e.element,d)
}}}},hasScroll:function(a,c){if(g(a).css("overflow")==="hidden"){return false
}var d=(c&&c==="left")?"scrollLeft":"scrollTop",b=false;
if(a[d]>0){return true
}a[d]=1;
b=(a[d]>0);
a[d]=0;
return b
}})
})(jQuery);
(function(f,h){var g=0,j=Array.prototype.slice,k=f.cleanData;
f.cleanData=function(d){for(var c=0,b;
(b=d[c])!=null;
c++){try{f(b).triggerHandler("remove")
}catch(a){}}k(d)
};
f.widget=function(r,q,a){var d,c,o,b,p={},e=r.split(".")[0];
r=r.split(".")[1];
d=e+"-"+r;
if(!a){a=q;
q=f.Widget
}f.expr[":"][d.toLowerCase()]=function(m){return !!f.data(m,d)
};
f[e]=f[e]||{};
c=f[e][r];
o=f[e][r]=function(n,m){if(!this._createWidget){return new o(n,m)
}if(arguments.length){this._createWidget(n,m)
}};
f.extend(o,c,{version:a.version,_proto:f.extend({},a),_childConstructors:[]});
b=new q();
b.options=f.widget.extend({},b.options);
f.each(a,function(m,n){if(!f.isFunction(n)){p[m]=n;
return
}p[m]=(function(){var t=function(){return q.prototype[m].apply(this,arguments)
},s=function(u){return q.prototype[m].apply(this,u)
};
return function(){var v=this._super,x=this._superApply,w;
this._super=t;
this._superApply=s;
w=n.apply(this,arguments);
this._super=v;
this._superApply=x;
return w
}
})()
});
o.prototype=f.widget.extend(b,{widgetEventPrefix:c?(b.widgetEventPrefix||r):r},p,{constructor:o,namespace:e,widgetName:r,widgetFullName:d});
if(c){f.each(c._childConstructors,function(n,m){var s=m.prototype;
f.widget(s.namespace+"."+s.widgetName,o,m._proto)
});
delete c._childConstructors
}else{q._childConstructors.push(o)
}f.widget.bridge(r,o)
};
f.widget.extend=function(a){var e=j.call(arguments,1),b=0,m=e.length,d,c;
for(;
b<m;
b++){for(d in e[b]){c=e[b][d];
if(e[b].hasOwnProperty(d)&&c!==h){if(f.isPlainObject(c)){a[d]=f.isPlainObject(a[d])?f.widget.extend({},a[d],c):f.widget.extend({},c)
}else{a[d]=c
}}}}return a
};
f.widget.bridge=function(b,c){var a=c.prototype.widgetFullName||b;
f.fn[b]=function(e){var n=typeof e==="string",m=j.call(arguments,1),d=this;
e=!n&&m.length?f.widget.extend.apply(null,[e].concat(m)):e;
if(n){this.each(function(){var p,o=f.data(this,a);
if(!o){return f.error("cannot call methods on "+b+" prior to initialization; attempted to call method '"+e+"'")
}if(!f.isFunction(o[e])||e.charAt(0)==="_"){return f.error("no such method '"+e+"' for "+b+" widget instance")
}p=o[e].apply(o,m);
if(p!==o&&p!==h){d=p&&p.jquery?d.pushStack(p.get()):p;
return false
}})
}else{this.each(function(){var o=f.data(this,a);
if(o){o.option(e||{})._init()
}else{f.data(this,a,new c(e,this))
}})
}return d
}
};
f.Widget=function(){};
f.Widget._childConstructors=[];
f.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(b,a){a=f(a||this.defaultElement||this)[0];
this.element=f(a);
this.uuid=g++;
this.eventNamespace="."+this.widgetName+this.uuid;
this.options=f.widget.extend({},this.options,this._getCreateOptions(),b);
this.bindings=f();
this.hoverable=f();
this.focusable=f();
if(a!==this){f.data(a,this.widgetFullName,this);
this._on(true,this.element,{remove:function(c){if(c.target===a){this.destroy()
}}});
this.document=f(a.style?a.ownerDocument:a.document||a);
this.window=f(this.document[0].defaultView||this.document[0].parentWindow)
}this._create();
this._trigger("create",null,this._getCreateEventData());
this._init()
},_getCreateOptions:f.noop,_getCreateEventData:f.noop,_create:f.noop,_init:f.noop,destroy:function(){this._destroy();
this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(f.camelCase(this.widgetFullName));
this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled");
this.bindings.unbind(this.eventNamespace);
this.hoverable.removeClass("ui-state-hover");
this.focusable.removeClass("ui-state-focus")
},_destroy:f.noop,widget:function(){return this.element
},option:function(c,b){var m=c,a,d,e;
if(arguments.length===0){return f.widget.extend({},this.options)
}if(typeof c==="string"){m={};
a=c.split(".");
c=a.shift();
if(a.length){d=m[c]=f.widget.extend({},this.options[c]);
for(e=0;
e<a.length-1;
e++){d[a[e]]=d[a[e]]||{};
d=d[a[e]]
}c=a.pop();
if(arguments.length===1){return d[c]===h?null:d[c]
}d[c]=b
}else{if(arguments.length===1){return this.options[c]===h?null:this.options[c]
}m[c]=b
}}this._setOptions(m);
return this
},_setOptions:function(b){var a;
for(a in b){this._setOption(a,b[a])
}return this
},_setOption:function(b,a){this.options[b]=a;
if(b==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!a).attr("aria-disabled",a);
this.hoverable.removeClass("ui-state-hover");
this.focusable.removeClass("ui-state-focus")
}return this
},enable:function(){return this._setOption("disabled",false)
},disable:function(){return this._setOption("disabled",true)
},_on:function(b,c,d){var a,e=this;
if(typeof b!=="boolean"){d=c;
c=b;
b=false
}if(!d){d=c;
c=this.element;
a=this.widget()
}else{c=a=f(c);
this.bindings=this.bindings.add(c)
}f.each(d,function(t,u){function q(){if(!b&&(e.options.disabled===true||f(this).hasClass("ui-state-disabled"))){return
}return(typeof u==="string"?e[u]:u).apply(e,arguments)
}if(typeof u!=="string"){q.guid=u.guid=u.guid||q.guid||f.guid++
}var v=t.match(/^(\w+)\s*(.*)$/),r=v[1]+e.eventNamespace,s=v[2];
if(s){a.delegate(s,r,q)
}else{c.bind(r,q)
}})
},_off:function(a,b){b=(b||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;
a.unbind(b).undelegate(b)
},_delay:function(a,b){function c(){return(typeof a==="string"?d[a]:a).apply(d,arguments)
}var d=this;
return setTimeout(c,b||0)
},_hoverable:function(a){this.hoverable=this.hoverable.add(a);
this._on(a,{mouseenter:function(b){f(b.currentTarget).addClass("ui-state-hover")
},mouseleave:function(b){f(b.currentTarget).removeClass("ui-state-hover")
}})
},_focusable:function(a){this.focusable=this.focusable.add(a);
this._on(a,{focusin:function(b){f(b.currentTarget).addClass("ui-state-focus")
},focusout:function(b){f(b.currentTarget).removeClass("ui-state-focus")
}})
},_trigger:function(m,e,d){var a,b,c=this.options[m];
d=d||{};
e=f.Event(e);
e.type=(m===this.widgetEventPrefix?m:this.widgetEventPrefix+m).toLowerCase();
e.target=this.element[0];
b=e.originalEvent;
if(b){for(a in b){if(!(a in e)){e[a]=b[a]
}}}this.element.trigger(e,d);
return !(f.isFunction(c)&&c.apply(this.element[0],[e].concat(d))===false||e.isDefaultPrevented())
}};
f.each({show:"fadeIn",hide:"fadeOut"},function(a,b){f.Widget.prototype["_"+a]=function(e,m,c){if(typeof m==="string"){m={effect:m}
}var d,n=!m?a:m===true||typeof m==="number"?b:m.effect||b;
m=m||{};
if(typeof m==="number"){m={duration:m}
}d=!f.isEmptyObject(m);
m.complete=c;
if(m.delay){e.delay(m.delay)
}if(d&&f.effects&&f.effects.effect[n]){e[a](m)
}else{if(n!==a&&e[n]){e[n](m.duration,m.easing,c)
}else{e.queue(function(o){f(this)[a]();
if(c){c.call(e[0])
}o()
})
}}}
})
})(jQuery);
(function(d,f){var e=false;
d(document).mouseup(function(){e=false
});
d.widget("ui.mouse",{version:"1.10.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var a=this;
this.element.bind("mousedown."+this.widgetName,function(b){return a._mouseDown(b)
}).bind("click."+this.widgetName,function(b){if(true===d.data(b.target,a.widgetName+".preventClickEvent")){d.removeData(b.target,a.widgetName+".preventClickEvent");
b.stopImmediatePropagation();
return false
}});
this.started=false
},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);
if(this._mouseMoveDelegate){d(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)
}},_mouseDown:function(b){if(e){return
}(this._mouseStarted&&this._mouseUp(b));
this._mouseDownEvent=b;
var c=this,a=(b.which===1),h=(typeof this.options.cancel==="string"&&b.target.nodeName?d(b.target).closest(this.options.cancel).length:false);
if(!a||h||!this._mouseCapture(b)){return true
}this.mouseDelayMet=!this.options.delay;
if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){c.mouseDelayMet=true
},this.options.delay)
}if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){this._mouseStarted=(this._mouseStart(b)!==false);
if(!this._mouseStarted){b.preventDefault();
return true
}}if(true===d.data(b.target,this.widgetName+".preventClickEvent")){d.removeData(b.target,this.widgetName+".preventClickEvent")
}this._mouseMoveDelegate=function(g){return c._mouseMove(g)
};
this._mouseUpDelegate=function(g){return c._mouseUp(g)
};
d(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);
b.preventDefault();
e=true;
return true
},_mouseMove:function(a){if(d.ui.ie&&(!document.documentMode||document.documentMode<9)&&!a.button){return this._mouseUp(a)
}if(this._mouseStarted){this._mouseDrag(a);
return a.preventDefault()
}if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,a)!==false);
(this._mouseStarted?this._mouseDrag(a):this._mouseUp(a))
}return !this._mouseStarted
},_mouseUp:function(a){d(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
if(this._mouseStarted){this._mouseStarted=false;
if(a.target===this._mouseDownEvent.target){d.data(a.target,this.widgetName+".preventClickEvent",true)
}this._mouseStop(a)
}return false
},_mouseDistanceMet:function(a){return(Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance)
},_mouseDelayMet:function(){return this.mouseDelayMet
},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true
}})
})(jQuery);
(function(z,B){z.ui=z.ui||{};
var u,t=Math.max,p=Math.abs,r=Math.round,A=/left|center|right/,w=/top|center|bottom/,D=/[\+\-]\d+(\.[\d]+)?%?/,s=/^\w+/,C=/%$/,x=z.fn.position;
function q(a,b,c){return[parseFloat(a[0])*(C.test(a[0])?b/100:1),parseFloat(a[1])*(C.test(a[1])?c/100:1)]
}function v(b,a){return parseInt(z.css(b,a),10)||0
}function y(a){var b=a[0];
if(b.nodeType===9){return{width:a.width(),height:a.height(),offset:{top:0,left:0}}
}if(z.isWindow(b)){return{width:a.width(),height:a.height(),offset:{top:a.scrollTop(),left:a.scrollLeft()}}
}if(b.preventDefault){return{width:0,height:0,offset:{top:b.pageY,left:b.pageX}}
}return{width:a.outerWidth(),height:a.outerHeight(),offset:a.offset()}
}z.position={scrollbarWidth:function(){if(u!==B){return u
}var c,d,a=z("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),b=a.children()[0];
z("body").append(a);
c=b.offsetWidth;
a.css("overflow","scroll");
d=b.offsetWidth;
if(c===d){d=a[0].clientWidth
}a.remove();
return(u=c-d)
},getScrollInfo:function(a){var b=a.isWindow||a.isDocument?"":a.element.css("overflow-x"),c=a.isWindow||a.isDocument?"":a.element.css("overflow-y"),d=b==="scroll"||(b==="auto"&&a.width<a.element[0].scrollWidth),e=c==="scroll"||(c==="auto"&&a.height<a.element[0].scrollHeight);
return{width:e?z.position.scrollbarWidth():0,height:d?z.position.scrollbarWidth():0}
},getWithinInfo:function(c){var b=z(c||window),d=z.isWindow(b[0]),a=!!b[0]&&b[0].nodeType===9;
return{element:b,isWindow:d,isDocument:a,offset:b.offset()||{left:0,top:0},scrollLeft:b.scrollLeft(),scrollTop:b.scrollTop(),width:d?b.width():b.outerWidth(),height:d?b.height():b.outerHeight()}
}};
z.fn.position=function(e){if(!e||!e.of){return x.apply(this,arguments)
}e=z.extend({},e);
var d,h,k,f,m,c,j=z(e.of),n=z.position.getWithinInfo(e.within),b=z.position.getScrollInfo(n),g=(e.collision||"flip").split(" "),a={};
c=y(j);
if(j[0].preventDefault){e.at="left top"
}h=c.width;
k=c.height;
f=c.offset;
m=z.extend({},f);
z.each(["my","at"],function(){var o=(e[this]||"").split(" "),E,F;
if(o.length===1){o=A.test(o[0])?o.concat(["center"]):w.test(o[0])?["center"].concat(o):["center","center"]
}o[0]=A.test(o[0])?o[0]:"center";
o[1]=w.test(o[1])?o[1]:"center";
E=D.exec(o[0]);
F=D.exec(o[1]);
a[this]=[E?E[0]:0,F?F[0]:0];
e[this]=[s.exec(o[0])[0],s.exec(o[1])[0]]
});
if(g.length===1){g[1]=g[0]
}if(e.at[0]==="right"){m.left+=h
}else{if(e.at[0]==="center"){m.left+=h/2
}}if(e.at[1]==="bottom"){m.top+=k
}else{if(e.at[1]==="center"){m.top+=k/2
}}d=q(a.at,h,k);
m.left+=d[0];
m.top+=d[1];
return this.each(function(){var M,O,V=z(this),T=V.outerWidth(),o=V.outerHeight(),U=v(this,"marginLeft"),N=v(this,"marginTop"),P=T+U+v(this,"marginRight")+b.width,Q=o+N+v(this,"marginBottom")+b.height,S=z.extend({},m),R=q(a.my,V.outerWidth(),V.outerHeight());
if(e.my[0]==="right"){S.left-=T
}else{if(e.my[0]==="center"){S.left-=T/2
}}if(e.my[1]==="bottom"){S.top-=o
}else{if(e.my[1]==="center"){S.top-=o/2
}}S.left+=R[0];
S.top+=R[1];
if(!z.support.offsetFractions){S.left=r(S.left);
S.top=r(S.top)
}M={marginLeft:U,marginTop:N};
z.each(["left","top"],function(E,F){if(z.ui.position[g[E]]){z.ui.position[g[E]][F](S,{targetWidth:h,targetHeight:k,elemWidth:T,elemHeight:o,collisionPosition:M,collisionWidth:P,collisionHeight:Q,offset:[d[0]+R[0],d[1]+R[1]],my:e.my,at:e.at,within:n,elem:V})
}});
if(e.using){O=function(G){var E=f.left-S.left,H=E+h-T,F=f.top-S.top,I=F+k-o,J={target:{element:j,left:f.left,top:f.top,width:h,height:k},element:{element:V,left:S.left,top:S.top,width:T,height:o},horizontal:H<0?"left":E>0?"right":"center",vertical:I<0?"top":F>0?"bottom":"middle"};
if(h<T&&p(E+H)<h){J.horizontal="center"
}if(k<o&&p(F+I)<k){J.vertical="middle"
}if(t(p(E),p(H))>t(p(F),p(I))){J.important="horizontal"
}else{J.important="vertical"
}e.using.call(this,G,J)
}
}V.offset(z.extend(S,{using:O}))
})
};
z.ui.position={fit:{left:function(h,j){var a=j.within,f=a.isWindow?a.scrollLeft:a.offset.left,d=a.width,g=h.left-j.collisionPosition.marginLeft,e=f-g,b=g+j.collisionWidth-d-f,c;
if(j.collisionWidth>d){if(e>0&&b<=0){c=h.left+e+j.collisionWidth-d-f;
h.left+=e-c
}else{if(b>0&&e<=0){h.left=f
}else{if(e>b){h.left=f+d-j.collisionWidth
}else{h.left=f
}}}}else{if(e>0){h.left+=e
}else{if(b>0){h.left-=b
}else{h.left=t(h.left-g,h.left)
}}}},top:function(j,a){var b=a.within,e=b.isWindow?b.scrollTop:b.offset.top,d=a.within.height,g=j.top-a.collisionPosition.marginTop,f=e-g,h=g+a.collisionHeight-d-e,c;
if(a.collisionHeight>d){if(f>0&&h<=0){c=j.top+f+a.collisionHeight-d-e;
j.top+=f-c
}else{if(h>0&&f<=0){j.top=e
}else{if(f>h){j.top=e+d-a.collisionHeight
}else{j.top=e
}}}}else{if(f>0){j.top+=f
}else{if(h>0){j.top-=h
}else{j.top=t(j.top-g,j.top)
}}}}},flip:{left:function(m,n){var o=n.within,g=o.offset.left+o.scrollLeft,c=o.width,a=o.isWindow?o.scrollLeft:o.offset.left,k=m.left-n.collisionPosition.marginLeft,f=k-a,b=k+n.collisionWidth-c-a,h=n.my[0]==="left"?-n.elemWidth:n.my[0]==="right"?n.elemWidth:0,e=n.at[0]==="left"?n.targetWidth:n.at[0]==="right"?-n.targetWidth:0,E=-2*n.offset[0],d,j;
if(f<0){d=m.left+h+e+E+n.collisionWidth-c-g;
if(d<0||d<p(f)){m.left+=h+e+E
}}else{if(b>0){j=m.left-n.collisionPosition.marginLeft+h+e+E-a;
if(j>0||p(j)<b){m.left+=h+e+E
}}}},top:function(o,E){var F=E.within,e=F.offset.top+F.scrollTop,d=F.height,f=F.isWindow?F.scrollTop:F.offset.top,m=o.top-E.collisionPosition.marginTop,j=m-f,n=m+E.collisionHeight-d-f,h=E.my[1]==="top",k=h?-E.elemHeight:E.my[1]==="bottom"?E.elemHeight:0,b=E.at[1]==="top"?E.targetHeight:E.at[1]==="bottom"?-E.targetHeight:0,a=-2*E.offset[1],g,c;
if(j<0){c=o.top+k+b+a+E.collisionHeight-d-e;
if((o.top+k+b+a)>j&&(c<0||c<p(j))){o.top+=k+b+a
}}else{if(n>0){g=o.top-E.collisionPosition.marginTop+k+b+a-f;
if((o.top+k+b+a)>n&&(g>0||p(g)<n)){o.top+=k+b+a
}}}}},flipfit:{left:function(){z.ui.position.flip.left.apply(this,arguments);
z.ui.position.fit.left.apply(this,arguments)
},top:function(){z.ui.position.flip.top.apply(this,arguments);
z.ui.position.fit.top.apply(this,arguments)
}}};
(function(){var c,a,f,d,e,g=document.getElementsByTagName("body")[0],b=document.createElement("div");
c=document.createElement(g?"div":"body");
f={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};
if(g){z.extend(f,{position:"absolute",left:"-1000px",top:"-1000px"})
}for(e in f){c.style[e]=f[e]
}c.appendChild(b);
a=g||document.documentElement;
a.insertBefore(c,a.firstChild);
b.style.cssText="position: absolute; left: 10.7432222px;";
d=z(b).offset().left;
z.support.offsetFractions=d>10&&d<11;
c.innerHTML="";
a.removeChild(c)
})()
}(jQuery));
(function(j,h){var f=0,k={},g={};
k.height=k.paddingTop=k.paddingBottom=k.borderTopWidth=k.borderBottomWidth="hide";
g.height=g.paddingTop=g.paddingBottom=g.borderTopWidth=g.borderBottomWidth="show";
j.widget("ui.accordion",{version:"1.10.4",options:{active:0,animate:{},collapsible:false,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var a=this.options;
this.prevShow=this.prevHide=j();
this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist");
if(!a.collapsible&&(a.active===false||a.active==null)){a.active=0
}this._processPanels();
if(a.active<0){a.active+=this.headers.length
}this._refresh()
},_getCreateEventData:function(){return{header:this.active,panel:!this.active.length?j():this.active.next(),content:!this.active.length?j():this.active.next()}
},_createIcons:function(){var a=this.options.icons;
if(a){j("<span>").addClass("ui-accordion-header-icon ui-icon "+a.header).prependTo(this.headers);
this.active.children(".ui-accordion-header-icon").removeClass(a.header).addClass(a.activeHeader);
this.headers.addClass("ui-accordion-icons")
}},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
},_destroy:function(){var a;
this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){if(/^ui-accordion/.test(this.id)){this.removeAttribute("id")
}});
this._destroyIcons();
a=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){if(/^ui-accordion/.test(this.id)){this.removeAttribute("id")
}});
if(this.options.heightStyle!=="content"){a.css("height","")
}},_setOption:function(b,a){if(b==="active"){this._activate(a);
return
}if(b==="event"){if(this.options.event){this._off(this.headers,this.options.event)
}this._setupEvents(a)
}this._super(b,a);
if(b==="collapsible"&&!a&&this.options.active===false){this._activate(0)
}if(b==="icons"){this._destroyIcons();
if(a){this._createIcons()
}}if(b==="disabled"){this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!a)
}},_keydown:function(b){if(b.altKey||b.ctrlKey){return
}var a=j.ui.keyCode,c=this.headers.length,e=this.headers.index(b.target),d=false;
switch(b.keyCode){case a.RIGHT:case a.DOWN:d=this.headers[(e+1)%c];
break;
case a.LEFT:case a.UP:d=this.headers[(e-1+c)%c];
break;
case a.SPACE:case a.ENTER:this._eventHandler(b);
break;
case a.HOME:d=this.headers[0];
break;
case a.END:d=this.headers[c-1];
break
}if(d){j(b.target).attr("tabIndex",-1);
j(d).attr("tabIndex",0);
d.focus();
b.preventDefault()
}},_panelKeyDown:function(a){if(a.keyCode===j.ui.keyCode.UP&&a.ctrlKey){j(a.currentTarget).prev().focus()
}},refresh:function(){var a=this.options;
this._processPanels();
if((a.active===false&&a.collapsible===true)||!this.headers.length){a.active=false;
this.active=j()
}else{if(a.active===false){this._activate(0)
}else{if(this.active.length&&!j.contains(this.element[0],this.active[0])){if(this.headers.length===this.headers.find(".ui-state-disabled").length){a.active=false;
this.active=j()
}else{this._activate(Math.max(0,a.active-1))
}}else{a.active=this.headers.index(this.active)
}}}this._destroyIcons();
this._refresh()
},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all");
this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
},_refresh:function(){var a,c=this.options,d=c.heightStyle,b=this.element.parent(),e=this.accordionId="ui-accordion-"+(this.element.attr("id")||++f);
this.active=this._findActive(c.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");
this.active.next().addClass("ui-accordion-content-active").show();
this.headers.attr("role","tab").each(function(t){var s=j(this),p=s.attr("id"),r=s.next(),q=r.attr("id");
if(!p){p=e+"-header-"+t;
s.attr("id",p)
}if(!q){q=e+"-panel-"+t;
r.attr("id",q)
}s.attr("aria-controls",q);
r.attr("aria-labelledby",p)
}).next().attr("role","tabpanel");
this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide();
if(!this.active.length){this.headers.eq(0).attr("tabIndex",0)
}else{this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"})
}this._createIcons();
this._setupEvents(c.event);
if(d==="fill"){a=b.height();
this.element.siblings(":visible").each(function(){var m=j(this),n=m.css("position");
if(n==="absolute"||n==="fixed"){return
}a-=m.outerHeight(true)
});
this.headers.each(function(){a-=j(this).outerHeight(true)
});
this.headers.next().each(function(){j(this).height(Math.max(0,a-j(this).innerHeight()+j(this).height()))
}).css("overflow","auto")
}else{if(d==="auto"){a=0;
this.headers.next().each(function(){a=Math.max(a,j(this).css("height","").height())
}).height(a)
}}},_activate:function(b){var a=this._findActive(b)[0];
if(a===this.active[0]){return
}a=a||this.active[0];
this._eventHandler({target:a,currentTarget:a,preventDefault:j.noop})
},_findActive:function(a){return typeof a==="number"?this.headers.eq(a):j()
},_setupEvents:function(a){var b={keydown:"_keydown"};
if(a){j.each(a.split(" "),function(c,d){b[d]="_eventHandler"
})
}this._off(this.headers.add(this.headers.next()));
this._on(this.headers,b);
this._on(this.headers.next(),{keydown:"_panelKeyDown"});
this._hoverable(this.headers);
this._focusable(this.headers)
},_eventHandler:function(r){var a=this.options,o=this.active,e=j(r.currentTarget),c=e[0]===o[0],q=c&&a.collapsible,p=q?j():e.next(),d=o.next(),b={oldHeader:o,oldPanel:d,newHeader:q?j():e,newPanel:p};
r.preventDefault();
if((c&&!a.collapsible)||(this._trigger("beforeActivate",r,b)===false)){return
}a.active=q?false:this.headers.index(e);
this.active=c?j():e;
this._toggle(b);
o.removeClass("ui-accordion-header-active ui-state-active");
if(a.icons){o.children(".ui-accordion-header-icon").removeClass(a.icons.activeHeader).addClass(a.icons.header)
}if(!c){e.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top");
if(a.icons){e.children(".ui-accordion-header-icon").removeClass(a.icons.header).addClass(a.icons.activeHeader)
}e.next().addClass("ui-accordion-content-active")
}},_toggle:function(a){var c=a.newPanel,b=this.prevShow.length?this.prevShow:a.oldPanel;
this.prevShow.add(this.prevHide).stop(true,true);
this.prevShow=c;
this.prevHide=b;
if(this.options.animate){this._animate(c,b,a)
}else{b.hide();
c.show();
this._toggleComplete(a)
}b.attr({"aria-hidden":"true"});
b.prev().attr("aria-selected","false");
if(c.length&&b.length){b.prev().attr({tabIndex:-1,"aria-expanded":"false"})
}else{if(c.length){this.headers.filter(function(){return j(this).attr("tabIndex")===0
}).attr("tabIndex",-1)
}}c.attr("aria-hidden","false").prev().attr({"aria-selected":"true",tabIndex:0,"aria-expanded":"true"})
},_animate:function(x,d,t){var e,r,u,s=this,c=0,b=x.length&&(!d.length||(x.index()<d.index())),v=this.options.animate||{},a=b&&v.down||v,w=function(){s._toggleComplete(t)
};
if(typeof a==="number"){u=a
}if(typeof a==="string"){r=a
}r=r||a.easing||v.easing;
u=u||a.duration||v.duration;
if(!d.length){return x.animate(g,u,r,w)
}if(!x.length){return d.animate(k,u,r,w)
}e=x.show().outerHeight();
d.animate(k,{duration:u,easing:r,step:function(n,m){m.now=Math.round(n)
}});
x.hide().animate(g,{duration:u,easing:r,complete:w,step:function(n,m){m.now=Math.round(n);
if(m.prop!=="height"){c+=m.now
}else{if(s.options.heightStyle!=="content"){m.now=Math.round(e-d.outerHeight()-c);
c=0
}}}})
},_toggleComplete:function(a){var b=a.oldPanel;
b.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");
if(b.length){b.parent()[0].className=b.parent()[0].className
}this._trigger("activate",null,a)
}})
})(jQuery);
(function(d,c){d.widget("ui.autocomplete",{version:"1.10.4",defaultElement:"<input>",options:{appendTo:null,autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var k,n,j,a=this.element[0].nodeName.toLowerCase(),b=a==="textarea",m=a==="input";
this.isMultiLine=b?true:m?false:this.element.prop("isContentEditable");
this.valueMethod=this.element[b||m?"val":"text"];
this.isNewMenu=true;
this.element.addClass("ui-autocomplete-input").attr("autocomplete","off");
this._on(this.element,{keydown:function(f){if(this.element.prop("readOnly")){k=true;
j=true;
n=true;
return
}k=false;
j=false;
n=false;
var e=d.ui.keyCode;
switch(f.keyCode){case e.PAGE_UP:k=true;
this._move("previousPage",f);
break;
case e.PAGE_DOWN:k=true;
this._move("nextPage",f);
break;
case e.UP:k=true;
this._keyEvent("previous",f);
break;
case e.DOWN:k=true;
this._keyEvent("next",f);
break;
case e.ENTER:case e.NUMPAD_ENTER:if(this.menu.active){k=true;
f.preventDefault();
this.menu.select(f)
}break;
case e.TAB:if(this.menu.active){this.menu.select(f)
}break;
case e.ESCAPE:if(this.menu.element.is(":visible")){this._value(this.term);
this.close(f);
f.preventDefault()
}break;
default:n=true;
this._searchTimeout(f);
break
}},keypress:function(f){if(k){k=false;
if(!this.isMultiLine||this.menu.element.is(":visible")){f.preventDefault()
}return
}if(n){return
}var e=d.ui.keyCode;
switch(f.keyCode){case e.PAGE_UP:this._move("previousPage",f);
break;
case e.PAGE_DOWN:this._move("nextPage",f);
break;
case e.UP:this._keyEvent("previous",f);
break;
case e.DOWN:this._keyEvent("next",f);
break
}},input:function(e){if(j){j=false;
e.preventDefault();
return
}this._searchTimeout(e)
},focus:function(){this.selectedItem=null;
this.previous=this._value()
},blur:function(e){if(this.cancelBlur){delete this.cancelBlur;
return
}clearTimeout(this.searching);
this.close(e);
this._change(e)
}});
this._initSource();
this.menu=d("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().data("ui-menu");
this._on(this.menu.element,{mousedown:function(f){f.preventDefault();
this.cancelBlur=true;
this._delay(function(){delete this.cancelBlur
});
var e=this.menu.element[0];
if(!d(f.target).closest(".ui-menu-item").length){this._delay(function(){var g=this;
this.document.one("mousedown",function(h){if(h.target!==g.element[0]&&h.target!==e&&!d.contains(e,h.target)){g.close()
}})
})
}},menufocus:function(f,e){if(this.isNewMenu){this.isNewMenu=false;
if(f.originalEvent&&/^mouse/.test(f.originalEvent.type)){this.menu.blur();
this.document.one("mousemove",function(){d(f.target).trigger(f.originalEvent)
});
return
}}var g=e.item.data("ui-autocomplete-item");
if(false!==this._trigger("focus",f,{item:g})){if(f.originalEvent&&/^key/.test(f.originalEvent.type)){this._value(g.value)
}}else{this.liveRegion.text(g.value)
}},menuselect:function(f,e){var g=e.item.data("ui-autocomplete-item"),h=this.previous;
if(this.element[0]!==this.document[0].activeElement){this.element.focus();
this.previous=h;
this._delay(function(){this.previous=h;
this.selectedItem=g
})
}if(false!==this._trigger("select",f,{item:g})){this._value(g.value)
}this.term=this._value();
this.close(f);
this.selectedItem=g
}});
this.liveRegion=d("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element);
this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})
},_destroy:function(){clearTimeout(this.searching);
this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
this.menu.element.remove();
this.liveRegion.remove()
},_setOption:function(b,a){this._super(b,a);
if(b==="source"){this._initSource()
}if(b==="appendTo"){this.menu.element.appendTo(this._appendTo())
}if(b==="disabled"&&a&&this.xhr){this.xhr.abort()
}},_appendTo:function(){var a=this.options.appendTo;
if(a){a=a.jquery||a.nodeType?d(a):this.document.find(a).eq(0)
}if(!a){a=this.element.closest(".ui-front")
}if(!a.length){a=this.document[0].body
}return a
},_initSource:function(){var a,f,b=this;
if(d.isArray(this.options.source)){a=this.options.source;
this.source=function(e,h){h(d.ui.autocomplete.filter(a,e.term))
}
}else{if(typeof this.options.source==="string"){f=this.options.source;
this.source=function(e,h){if(b.xhr){b.xhr.abort()
}b.xhr=d.ajax({url:f,data:e,dataType:"json",success:function(g){h(g)
},error:function(){h([])
}})
}
}else{this.source=this.options.source
}}},_searchTimeout:function(a){clearTimeout(this.searching);
this.searching=this._delay(function(){if(this.term!==this._value()){this.selectedItem=null;
this.search(null,a)
}},this.options.delay)
},search:function(a,b){a=a!=null?a:this._value();
this.term=this._value();
if(a.length<this.options.minLength){return this.close(b)
}if(this._trigger("search",b)===false){return
}return this._search(a)
},_search:function(a){this.pending++;
this.element.addClass("ui-autocomplete-loading");
this.cancelSearch=false;
this.source({term:a},this._response())
},_response:function(){var a=++this.requestIndex;
return d.proxy(function(b){if(a===this.requestIndex){this.__response(b)
}this.pending--;
if(!this.pending){this.element.removeClass("ui-autocomplete-loading")
}},this)
},__response:function(a){if(a){a=this._normalize(a)
}this._trigger("response",null,{content:a});
if(!this.options.disabled&&a&&a.length&&!this.cancelSearch){this._suggest(a);
this._trigger("open")
}else{this._close()
}},close:function(a){this.cancelSearch=true;
this._close(a)
},_close:function(a){if(this.menu.element.is(":visible")){this.menu.element.hide();
this.menu.blur();
this.isNewMenu=true;
this._trigger("close",a)
}},_change:function(a){if(this.previous!==this._value()){this._trigger("change",a,{item:this.selectedItem})
}},_normalize:function(a){if(a.length&&a[0].label&&a[0].value){return a
}return d.map(a,function(b){if(typeof b==="string"){return{label:b,value:b}
}return d.extend({label:b.label||b.value,value:b.value||b.label},b)
})
},_suggest:function(b){var a=this.menu.element.empty();
this._renderMenu(a,b);
this.isNewMenu=true;
this.menu.refresh();
a.show();
this._resizeMenu();
a.position(d.extend({of:this.element},this.options.position));
if(this.options.autoFocus){this.menu.next()
}},_resizeMenu:function(){var a=this.menu.element;
a.outerWidth(Math.max(a.width("").outerWidth()+1,this.element.outerWidth()))
},_renderMenu:function(b,f){var a=this;
d.each(f,function(h,e){a._renderItemData(b,e)
})
},_renderItemData:function(b,a){return this._renderItem(b,a).data("ui-autocomplete-item",a)
},_renderItem:function(b,a){return d("<li>").append(d("<a>").text(a.label)).appendTo(b)
},_move:function(a,b){if(!this.menu.element.is(":visible")){this.search(null,b);
return
}if(this.menu.isFirstItem()&&/^previous/.test(a)||this.menu.isLastItem()&&/^next/.test(a)){this._value(this.term);
this.menu.blur();
return
}this.menu[a](b)
},widget:function(){return this.menu.element
},_value:function(){return this.valueMethod.apply(this.element,arguments)
},_keyEvent:function(a,b){if(!this.isMultiLine||this.menu.element.is(":visible")){this._move(a,b);
b.preventDefault()
}}});
d.extend(d.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
},filter:function(a,f){var b=new RegExp(d.ui.autocomplete.escapeRegex(f),"i");
return d.grep(a,function(e){return b.test(e.label||e.value||e)
})
}});
d.widget("ui.autocomplete",d.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(a){return a+(a>1?" results are":" result is")+" available, use up and down arrow keys to navigate."
}}},__response:function(a){var b;
this._superApply(arguments);
if(this.options.disabled||this.cancelSearch){return
}if(a&&a.length){b=this.options.messages.results(a.length)
}else{b=this.options.messages.noResults
}this.liveRegion.text(b)
}})
}(jQuery));
(function(n,k){var p,h="ui-button ui-widget ui-state-default ui-corner-all",m="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",o=function(){var a=n(this);
setTimeout(function(){a.find(":ui-button").button("refresh")
},1)
},j=function(c){var d=c.name,b=c.form,a=n([]);
if(d){d=d.replace(/'/g,"\\'");
if(b){a=n(b).find("[name='"+d+"']")
}else{a=n("[name='"+d+"']",c.ownerDocument).filter(function(){return !this.form
})
}}return a
};
n.widget("ui.button",{version:"1.10.4",defaultElement:"<button>",options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,o);
if(typeof this.options.disabled!=="boolean"){this.options.disabled=!!this.element.prop("disabled")
}else{this.element.prop("disabled",this.options.disabled)
}this._determineButtonType();
this.hasTitle=!!this.buttonElement.attr("title");
var b=this,d=this.options,a=this.type==="checkbox"||this.type==="radio",c=!a?"ui-state-active":"";
if(d.label===null){d.label=(this.type==="input"?this.buttonElement.val():this.buttonElement.html())
}this._hoverable(this.buttonElement);
this.buttonElement.addClass(h).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(d.disabled){return
}if(this===p){n(this).addClass("ui-state-active")
}}).bind("mouseleave"+this.eventNamespace,function(){if(d.disabled){return
}n(this).removeClass(c)
}).bind("click"+this.eventNamespace,function(e){if(d.disabled){e.preventDefault();
e.stopImmediatePropagation()
}});
this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")
},blur:function(){this.buttonElement.removeClass("ui-state-focus")
}});
if(a){this.element.bind("change"+this.eventNamespace,function(){b.refresh()
})
}if(this.type==="checkbox"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(d.disabled){return false
}})
}else{if(this.type==="radio"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(d.disabled){return false
}n(this).addClass("ui-state-active");
b.buttonElement.attr("aria-pressed","true");
var e=b.element[0];
j(e).not(e).map(function(){return n(this).button("widget")[0]
}).removeClass("ui-state-active").attr("aria-pressed","false")
})
}else{this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(d.disabled){return false
}n(this).addClass("ui-state-active");
p=this;
b.document.one("mouseup",function(){p=null
})
}).bind("mouseup"+this.eventNamespace,function(){if(d.disabled){return false
}n(this).removeClass("ui-state-active")
}).bind("keydown"+this.eventNamespace,function(e){if(d.disabled){return false
}if(e.keyCode===n.ui.keyCode.SPACE||e.keyCode===n.ui.keyCode.ENTER){n(this).addClass("ui-state-active")
}}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){n(this).removeClass("ui-state-active")
});
if(this.buttonElement.is("a")){this.buttonElement.keyup(function(e){if(e.keyCode===n.ui.keyCode.SPACE){n(this).click()
}})
}}}this._setOption("disabled",d.disabled);
this._resetButton()
},_determineButtonType:function(){var c,a,b;
if(this.element.is("[type=checkbox]")){this.type="checkbox"
}else{if(this.element.is("[type=radio]")){this.type="radio"
}else{if(this.element.is("input")){this.type="input"
}else{this.type="button"
}}}if(this.type==="checkbox"||this.type==="radio"){c=this.element.parents().last();
a="label[for='"+this.element.attr("id")+"']";
this.buttonElement=c.find(a);
if(!this.buttonElement.length){c=c.length?c.siblings():this.element.siblings();
this.buttonElement=c.filter(a);
if(!this.buttonElement.length){this.buttonElement=c.find(a)
}}this.element.addClass("ui-helper-hidden-accessible");
b=this.element.is(":checked");
if(b){this.buttonElement.addClass("ui-state-active")
}this.buttonElement.prop("aria-pressed",b)
}else{this.buttonElement=this.element
}},widget:function(){return this.buttonElement
},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");
this.buttonElement.removeClass(h+" ui-state-active "+m).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
if(!this.hasTitle){this.buttonElement.removeAttr("title")
}},_setOption:function(b,a){this._super(b,a);
if(b==="disabled"){this.element.prop("disabled",!!a);
if(a){this.buttonElement.removeClass("ui-state-focus")
}return
}this._resetButton()
},refresh:function(){var a=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");
if(a!==this.options.disabled){this._setOption("disabled",a)
}if(this.type==="radio"){j(this.element[0]).each(function(){if(n(this).is(":checked")){n(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true")
}else{n(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")
}})
}else{if(this.type==="checkbox"){if(this.element.is(":checked")){this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true")
}else{this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false")
}}}},_resetButton:function(){if(this.type==="input"){if(this.options.label){this.element.val(this.options.label)
}return
}var a=this.buttonElement.removeClass(m),c=n("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(a.empty()).text(),d=this.options.icons,e=d.primary&&d.secondary,b=[];
if(d.primary||d.secondary){if(this.options.text){b.push("ui-button-text-icon"+(e?"s":(d.primary?"-primary":"-secondary")))
}if(d.primary){a.prepend("<span class='ui-button-icon-primary ui-icon "+d.primary+"'></span>")
}if(d.secondary){a.append("<span class='ui-button-icon-secondary ui-icon "+d.secondary+"'></span>")
}if(!this.options.text){b.push(e?"ui-button-icons-only":"ui-button-icon-only");
if(!this.hasTitle){a.attr("title",n.trim(c))
}}}else{b.push("ui-button-text-only")
}a.addClass(b.join(" "))
}});
n.widget("ui.buttonset",{version:"1.10.4",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")
},_init:function(){this.refresh()
},_setOption:function(b,a){if(b==="disabled"){this.buttons.button("option",b,a)
}this._super(b,a)
},refresh:function(){var a=this.element.css("direction")==="rtl";
this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return n(this).button("widget")[0]
}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(a?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(a?"ui-corner-left":"ui-corner-right").end().end()
},_destroy:function(){this.element.removeClass("ui-buttonset");
this.buttons.map(function(){return n(this).button("widget")[0]
}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
}})
}(jQuery));
(function(n,k){n.extend(n.ui,{datepicker:{version:"1.10.4"}});
var m="datepicker",p;
function h(){this._curInst=null;
this._keyEvent=false;
this._disabledInputs=[];
this._datepickerShowing=false;
this._inDialog=false;
this._mainDivId="ui-datepicker-div";
this._inlineClass="ui-datepicker-inline";
this._appendClass="ui-datepicker-append";
this._triggerClass="ui-datepicker-trigger";
this._dialogClass="ui-datepicker-dialog";
this._disableClass="ui-datepicker-disabled";
this._unselectableClass="ui-datepicker-unselectable";
this._currentClass="ui-datepicker-current-day";
this._dayOverClass="ui-datepicker-days-cell-over";
this.regional=[];
this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false};
n.extend(this._defaults,this.regional[""]);
this.dpDiv=o(n("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
}n.extend(h.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv
},setDefaults:function(a){j(this._defaults,a||{});
return this
},_attachDatepicker:function(b,e){var a,c,d;
a=b.nodeName.toLowerCase();
c=(a==="div"||a==="span");
if(!b.id){this.uuid+=1;
b.id="dp"+this.uuid
}d=this._newInst(n(b),c);
d.settings=n.extend({},e||{});
if(a==="input"){this._connectDatepicker(b,d)
}else{if(c){this._inlineDatepicker(b,d)
}}},_newInst:function(b,c){var a=b[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");
return{id:a,input:b,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:c,dpDiv:(!c?this.dpDiv:o(n("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))}
},_connectDatepicker:function(a,b){var c=n(a);
b.append=n([]);
b.trigger=n([]);
if(c.hasClass(this.markerClassName)){return
}this._attachments(c,b);
c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp);
this._autoSize(b);
n.data(a,m,b);
if(b.settings.disabled){this._disableDatepicker(a)
}},_attachments:function(d,a){var e,b,f,g=this._get(a,"appendText"),c=this._get(a,"isRTL");
if(a.append){a.append.remove()
}if(g){a.append=n("<span class='"+this._appendClass+"'>"+g+"</span>");
d[c?"before":"after"](a.append)
}d.unbind("focus",this._showDatepicker);
if(a.trigger){a.trigger.remove()
}e=this._get(a,"showOn");
if(e==="focus"||e==="both"){d.focus(this._showDatepicker)
}if(e==="button"||e==="both"){b=this._get(a,"buttonText");
f=this._get(a,"buttonImage");
a.trigger=n(this._get(a,"buttonImageOnly")?n("<img/>").addClass(this._triggerClass).attr({src:f,alt:b,title:b}):n("<button type='button'></button>").addClass(this._triggerClass).html(!f?b:n("<img/>").attr({src:f,alt:b,title:b})));
d[c?"before":"after"](a.trigger);
a.trigger.click(function(){if(n.datepicker._datepickerShowing&&n.datepicker._lastInput===d[0]){n.datepicker._hideDatepicker()
}else{if(n.datepicker._datepickerShowing&&n.datepicker._lastInput!==d[0]){n.datepicker._hideDatepicker();
n.datepicker._showDatepicker(d[0])
}else{n.datepicker._showDatepicker(d[0])
}}return false
})
}},_autoSize:function(f){if(this._get(f,"autoSize")&&!f.inline){var b,d,c,g,a=new Date(2009,12-1,20),e=this._get(f,"dateFormat");
if(e.match(/[DM]/)){b=function(q){d=0;
c=0;
for(g=0;
g<q.length;
g++){if(q[g].length>d){d=q[g].length;
c=g
}}return c
};
a.setMonth(b(this._get(f,(e.match(/MM/)?"monthNames":"monthNamesShort"))));
a.setDate(b(this._get(f,(e.match(/DD/)?"dayNames":"dayNamesShort")))+20-a.getDay())
}f.input.attr("size",this._formatDate(f,a).length)
}},_inlineDatepicker:function(b,c){var a=n(b);
if(a.hasClass(this.markerClassName)){return
}a.addClass(this.markerClassName).append(c.dpDiv);
n.data(b,m,c);
this._setDate(c,this._getDefaultDate(c),true);
this._updateDatepicker(c);
this._updateAlternate(c);
if(c.settings.disabled){this._disableDatepicker(b)
}c.dpDiv.css("display","block")
},_dialogDatepicker:function(d,u,f,t,e){var v,a,g,b,c,s=this._dialogInst;
if(!s){this.uuid+=1;
v="dp"+this.uuid;
this._dialogInput=n("<input type='text' id='"+v+"' style='position: absolute; top: -100px; width: 0px;'/>");
this._dialogInput.keydown(this._doKeyDown);
n("body").append(this._dialogInput);
s=this._dialogInst=this._newInst(this._dialogInput,false);
s.settings={};
n.data(this._dialogInput[0],m,s)
}j(s.settings,t||{});
u=(u&&u.constructor===Date?this._formatDate(s,u):u);
this._dialogInput.val(u);
this._pos=(e?(e.length?e:[e.pageX,e.pageY]):null);
if(!this._pos){a=document.documentElement.clientWidth;
g=document.documentElement.clientHeight;
b=document.documentElement.scrollLeft||document.body.scrollLeft;
c=document.documentElement.scrollTop||document.body.scrollTop;
this._pos=[(a/2)-100+b,(g/2)-150+c]
}this._dialogInput.css("left",(this._pos[0]+20)+"px").css("top",this._pos[1]+"px");
s.settings.onSelect=f;
this._inDialog=true;
this.dpDiv.addClass(this._dialogClass);
this._showDatepicker(this._dialogInput[0]);
if(n.blockUI){n.blockUI(this.dpDiv)
}n.data(this._dialogInput[0],m,s);
return this
},_destroyDatepicker:function(b){var a,d=n(b),c=n.data(b,m);
if(!d.hasClass(this.markerClassName)){return
}a=b.nodeName.toLowerCase();
n.removeData(b,m);
if(a==="input"){c.append.remove();
c.trigger.remove();
d.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)
}else{if(a==="div"||a==="span"){d.removeClass(this.markerClassName).empty()
}}},_enableDatepicker:function(b){var a,c,e=n(b),d=n.data(b,m);
if(!e.hasClass(this.markerClassName)){return
}a=b.nodeName.toLowerCase();
if(a==="input"){b.disabled=false;
d.trigger.filter("button").each(function(){this.disabled=false
}).end().filter("img").css({opacity:"1.0",cursor:""})
}else{if(a==="div"||a==="span"){c=e.children("."+this._inlineClass);
c.children().removeClass("ui-state-disabled");
c.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",false)
}}this._disabledInputs=n.map(this._disabledInputs,function(f){return(f===b?null:f)
})
},_disableDatepicker:function(b){var a,c,e=n(b),d=n.data(b,m);
if(!e.hasClass(this.markerClassName)){return
}a=b.nodeName.toLowerCase();
if(a==="input"){b.disabled=true;
d.trigger.filter("button").each(function(){this.disabled=true
}).end().filter("img").css({opacity:"0.5",cursor:"default"})
}else{if(a==="div"||a==="span"){c=e.children("."+this._inlineClass);
c.children().addClass("ui-state-disabled");
c.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",true)
}}this._disabledInputs=n.map(this._disabledInputs,function(f){return(f===b?null:f)
});
this._disabledInputs[this._disabledInputs.length]=b
},_isDisabledDatepicker:function(a){if(!a){return false
}for(var b=0;
b<this._disabledInputs.length;
b++){if(this._disabledInputs[b]===a){return true
}}return false
},_getInst:function(a){try{return n.data(a,m)
}catch(b){throw"Missing instance data for this datepicker"
}},_optionDatepicker:function(q,e,a){var d,f,b,g,c=this._getInst(q);
if(arguments.length===2&&typeof e==="string"){return(e==="defaults"?n.extend({},n.datepicker._defaults):(c?(e==="all"?n.extend({},c.settings):this._get(c,e)):null))
}d=e||{};
if(typeof e==="string"){d={};
d[e]=a
}if(c){if(this._curInst===c){this._hideDatepicker()
}f=this._getDateDatepicker(q,true);
b=this._getMinMaxDate(c,"min");
g=this._getMinMaxDate(c,"max");
j(c.settings,d);
if(b!==null&&d.dateFormat!==k&&d.minDate===k){c.settings.minDate=this._formatDate(c,b)
}if(g!==null&&d.dateFormat!==k&&d.maxDate===k){c.settings.maxDate=this._formatDate(c,g)
}if("disabled" in d){if(d.disabled){this._disableDatepicker(q)
}else{this._enableDatepicker(q)
}}this._attachments(n(q),c);
this._autoSize(c);
this._setDate(c,f);
this._updateAlternate(c);
this._updateDatepicker(c)
}},_changeDatepicker:function(a,c,b){this._optionDatepicker(a,c,b)
},_refreshDatepicker:function(a){var b=this._getInst(a);
if(b){this._updateDatepicker(b)
}},_setDateDatepicker:function(a,c){var b=this._getInst(a);
if(b){this._setDate(b,c);
this._updateDatepicker(b);
this._updateAlternate(b)
}},_getDateDatepicker:function(a,c){var b=this._getInst(a);
if(b&&!b.inline){this._setDateFromField(b,c)
}return(b?this._getDate(b):null)
},_doKeyDown:function(c){var e,f,a,b=n.datepicker._getInst(c.target),g=true,d=b.dpDiv.is(".ui-datepicker-rtl");
b._keyEvent=true;
if(n.datepicker._datepickerShowing){switch(c.keyCode){case 9:n.datepicker._hideDatepicker();
g=false;
break;
case 13:a=n("td."+n.datepicker._dayOverClass+":not(."+n.datepicker._currentClass+")",b.dpDiv);
if(a[0]){n.datepicker._selectDay(c.target,b.selectedMonth,b.selectedYear,a[0])
}e=n.datepicker._get(b,"onSelect");
if(e){f=n.datepicker._formatDate(b);
e.apply((b.input?b.input[0]:null),[f,b])
}else{n.datepicker._hideDatepicker()
}return false;
case 27:n.datepicker._hideDatepicker();
break;
case 33:n.datepicker._adjustDate(c.target,(c.ctrlKey?-n.datepicker._get(b,"stepBigMonths"):-n.datepicker._get(b,"stepMonths")),"M");
break;
case 34:n.datepicker._adjustDate(c.target,(c.ctrlKey?+n.datepicker._get(b,"stepBigMonths"):+n.datepicker._get(b,"stepMonths")),"M");
break;
case 35:if(c.ctrlKey||c.metaKey){n.datepicker._clearDate(c.target)
}g=c.ctrlKey||c.metaKey;
break;
case 36:if(c.ctrlKey||c.metaKey){n.datepicker._gotoToday(c.target)
}g=c.ctrlKey||c.metaKey;
break;
case 37:if(c.ctrlKey||c.metaKey){n.datepicker._adjustDate(c.target,(d?+1:-1),"D")
}g=c.ctrlKey||c.metaKey;
if(c.originalEvent.altKey){n.datepicker._adjustDate(c.target,(c.ctrlKey?-n.datepicker._get(b,"stepBigMonths"):-n.datepicker._get(b,"stepMonths")),"M")
}break;
case 38:if(c.ctrlKey||c.metaKey){n.datepicker._adjustDate(c.target,-7,"D")
}g=c.ctrlKey||c.metaKey;
break;
case 39:if(c.ctrlKey||c.metaKey){n.datepicker._adjustDate(c.target,(d?-1:+1),"D")
}g=c.ctrlKey||c.metaKey;
if(c.originalEvent.altKey){n.datepicker._adjustDate(c.target,(c.ctrlKey?+n.datepicker._get(b,"stepBigMonths"):+n.datepicker._get(b,"stepMonths")),"M")
}break;
case 40:if(c.ctrlKey||c.metaKey){n.datepicker._adjustDate(c.target,+7,"D")
}g=c.ctrlKey||c.metaKey;
break;
default:g=false
}}else{if(c.keyCode===36&&c.ctrlKey){n.datepicker._showDatepicker(this)
}else{g=false
}}if(g){c.preventDefault();
c.stopPropagation()
}},_doKeyPress:function(b){var c,d,a=n.datepicker._getInst(b.target);
if(n.datepicker._get(a,"constrainInput")){c=n.datepicker._possibleChars(n.datepicker._get(a,"dateFormat"));
d=String.fromCharCode(b.charCode==null?b.keyCode:b.charCode);
return b.ctrlKey||b.metaKey||(d<" "||!c||c.indexOf(d)>-1)
}},_doKeyUp:function(b){var d,a=n.datepicker._getInst(b.target);
if(a.input.val()!==a.lastVal){try{d=n.datepicker.parseDate(n.datepicker._get(a,"dateFormat"),(a.input?a.input.val():null),n.datepicker._getFormatConfig(a));
if(d){n.datepicker._setDateFromField(a);
n.datepicker._updateAlternate(a);
n.datepicker._updateDatepicker(a)
}}catch(c){}}return true
},_showDatepicker:function(e){e=e.target||e;
if(e.nodeName.toLowerCase()!=="input"){e=n("input",e.parentNode)[0]
}if(n.datepicker._isDisabledDatepicker(e)||n.datepicker._lastInput===e){return
}var c,g,d,a,q,f,b;
c=n.datepicker._getInst(e);
if(n.datepicker._curInst&&n.datepicker._curInst!==c){n.datepicker._curInst.dpDiv.stop(true,true);
if(c&&n.datepicker._datepickerShowing){n.datepicker._hideDatepicker(n.datepicker._curInst.input[0])
}}g=n.datepicker._get(c,"beforeShow");
d=g?g.apply(e,[e,c]):{};
if(d===false){return
}j(c.settings,d);
c.lastVal=null;
n.datepicker._lastInput=e;
n.datepicker._setDateFromField(c);
if(n.datepicker._inDialog){e.value=""
}if(!n.datepicker._pos){n.datepicker._pos=n.datepicker._findPos(e);
n.datepicker._pos[1]+=e.offsetHeight
}a=false;
n(e).parents().each(function(){a|=n(this).css("position")==="fixed";
return !a
});
q={left:n.datepicker._pos[0],top:n.datepicker._pos[1]};
n.datepicker._pos=null;
c.dpDiv.empty();
c.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});
n.datepicker._updateDatepicker(c);
q=n.datepicker._checkOffset(c,q,a);
c.dpDiv.css({position:(n.datepicker._inDialog&&n.blockUI?"static":(a?"fixed":"absolute")),display:"none",left:q.left+"px",top:q.top+"px"});
if(!c.inline){f=n.datepicker._get(c,"showAnim");
b=n.datepicker._get(c,"duration");
c.dpDiv.zIndex(n(e).zIndex()+1);
n.datepicker._datepickerShowing=true;
if(n.effects&&n.effects.effect[f]){c.dpDiv.show(f,n.datepicker._get(c,"showOptions"),b)
}else{c.dpDiv[f||"show"](f?b:null)
}if(n.datepicker._shouldFocusInput(c)){c.input.focus()
}n.datepicker._curInst=c
}},_updateDatepicker:function(c){this.maxRows=4;
p=c;
c.dpDiv.empty().append(this._generateHTML(c));
this._attachHandlers(c);
c.dpDiv.find("."+this._dayOverClass+" a").mouseover();
var a,e=this._getNumberOfMonths(c),b=e[1],d=17;
c.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
if(b>1){c.dpDiv.addClass("ui-datepicker-multi-"+b).css("width",(d*b)+"em")
}c.dpDiv[(e[0]!==1||e[1]!==1?"add":"remove")+"Class"]("ui-datepicker-multi");
c.dpDiv[(this._get(c,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");
if(c===n.datepicker._curInst&&n.datepicker._datepickerShowing&&n.datepicker._shouldFocusInput(c)){c.input.focus()
}if(c.yearshtml){a=c.yearshtml;
setTimeout(function(){if(a===c.yearshtml&&c.yearshtml){c.dpDiv.find("select.ui-datepicker-year:first").replaceWith(c.yearshtml)
}a=c.yearshtml=null
},0)
}},_shouldFocusInput:function(a){return a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&!a.input.is(":focus")
},_checkOffset:function(d,f,g){var e=d.dpDiv.outerWidth(),a=d.dpDiv.outerHeight(),b=d.input?d.input.outerWidth():0,r=d.input?d.input.outerHeight():0,c=document.documentElement.clientWidth+(g?0:n(document).scrollLeft()),q=document.documentElement.clientHeight+(g?0:n(document).scrollTop());
f.left-=(this._get(d,"isRTL")?(e-b):0);
f.left-=(g&&f.left===d.input.offset().left)?n(document).scrollLeft():0;
f.top-=(g&&f.top===(d.input.offset().top+r))?n(document).scrollTop():0;
f.left-=Math.min(f.left,(f.left+e>c&&c>e)?Math.abs(f.left+e-c):0);
f.top-=Math.min(f.top,(f.top+a>q&&q>a)?Math.abs(a+r):0);
return f
},_findPos:function(a){var d,b=this._getInst(a),c=this._get(b,"isRTL");
while(a&&(a.type==="hidden"||a.nodeType!==1||n.expr.filters.hidden(a))){a=a[c?"previousSibling":"nextSibling"]
}d=n(a).offset();
return[d.left,d.top]
},_hideDatepicker:function(d){var e,a,b,f,c=this._curInst;
if(!c||(d&&c!==n.data(d,m))){return
}if(this._datepickerShowing){e=this._get(c,"showAnim");
a=this._get(c,"duration");
b=function(){n.datepicker._tidyDialog(c)
};
if(n.effects&&(n.effects.effect[e]||n.effects[e])){c.dpDiv.hide(e,n.datepicker._get(c,"showOptions"),a,b)
}else{c.dpDiv[(e==="slideDown"?"slideUp":(e==="fadeIn"?"fadeOut":"hide"))]((e?a:null),b)
}if(!e){b()
}this._datepickerShowing=false;
f=this._get(c,"onClose");
if(f){f.apply((c.input?c.input[0]:null),[(c.input?c.input.val():""),c])
}this._lastInput=null;
if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});
if(n.blockUI){n.unblockUI();
n("body").append(this.dpDiv)
}}this._inDialog=false
}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
},_checkExternalClick:function(b){if(!n.datepicker._curInst){return
}var c=n(b.target),a=n.datepicker._getInst(c[0]);
if(((c[0].id!==n.datepicker._mainDivId&&c.parents("#"+n.datepicker._mainDivId).length===0&&!c.hasClass(n.datepicker.markerClassName)&&!c.closest("."+n.datepicker._triggerClass).length&&n.datepicker._datepickerShowing&&!(n.datepicker._inDialog&&n.blockUI)))||(c.hasClass(n.datepicker.markerClassName)&&n.datepicker._curInst!==a)){n.datepicker._hideDatepicker()
}},_adjustDate:function(a,b,c){var d=n(a),e=this._getInst(d[0]);
if(this._isDisabledDatepicker(d[0])){return
}this._adjustInstDate(e,b+(c==="M"?this._get(e,"showCurrentAtPos"):0),c);
this._updateDatepicker(e)
},_gotoToday:function(a){var d,b=n(a),c=this._getInst(b[0]);
if(this._get(c,"gotoCurrent")&&c.currentDay){c.selectedDay=c.currentDay;
c.drawMonth=c.selectedMonth=c.currentMonth;
c.drawYear=c.selectedYear=c.currentYear
}else{d=new Date();
c.selectedDay=d.getDate();
c.drawMonth=c.selectedMonth=d.getMonth();
c.drawYear=c.selectedYear=d.getFullYear()
}this._notifyChange(c);
this._adjustDate(b)
},_selectMonthYear:function(a,e,b){var c=n(a),d=this._getInst(c[0]);
d["selected"+(b==="M"?"Month":"Year")]=d["draw"+(b==="M"?"Month":"Year")]=parseInt(e.options[e.selectedIndex].value,10);
this._notifyChange(d);
this._adjustDate(c)
},_selectDay:function(a,c,f,b){var e,d=n(a);
if(n(b).hasClass(this._unselectableClass)||this._isDisabledDatepicker(d[0])){return
}e=this._getInst(d[0]);
e.selectedDay=e.currentDay=n("a",b).html();
e.selectedMonth=e.currentMonth=c;
e.selectedYear=e.currentYear=f;
this._selectDate(a,this._formatDate(e,e.currentDay,e.currentMonth,e.currentYear))
},_clearDate:function(a){var b=n(a);
this._selectDate(b,"")
},_selectDate:function(a,e){var d,b=n(a),c=this._getInst(b[0]);
e=(e!=null?e:this._formatDate(c));
if(c.input){c.input.val(e)
}this._updateAlternate(c);
d=this._get(c,"onSelect");
if(d){d.apply((c.input?c.input[0]:null),[e,c])
}else{if(c.input){c.input.trigger("change")
}}if(c.inline){this._updateDatepicker(c)
}else{this._hideDatepicker();
this._lastInput=c.input[0];
if(typeof(c.input[0])!=="object"){c.input.focus()
}this._lastInput=null
}},_updateAlternate:function(a){var b,c,e,d=this._get(a,"altField");
if(d){b=this._get(a,"altFormat")||this._get(a,"dateFormat");
c=this._getDate(a);
e=this.formatDate(b,c,this._getFormatConfig(a));
n(d).each(function(){n(this).val(e)
})
}},noWeekends:function(a){var b=a.getDay();
return[(b>0&&b<6),""]
},iso8601Week:function(c){var b,a=new Date(c.getTime());
a.setDate(a.getDate()+4-(a.getDay()||7));
b=a.getTime();
a.setMonth(0);
a.setDate(1);
return Math.floor(Math.round((b-a)/86400000)/7)+1
},parseDate:function(c,F,a){if(c==null||F==null){throw"Invalid arguments"
}F=(typeof F==="object"?F.toString():F+"");
if(F===""){return null
}var Q,f,S,b=0,N=(a?a.shortYearCutoff:null)||this._defaults.shortYearCutoff,R=(typeof N!=="string"?N:new Date().getFullYear()%100+parseInt(N,10)),J=(a?a.dayNamesShort:null)||this._defaults.dayNamesShort,I=(a?a.dayNames:null)||this._defaults.dayNames,T=(a?a.monthNamesShort:null)||this._defaults.monthNamesShort,P=(a?a.monthNames:null)||this._defaults.monthNames,O=-1,H=-1,d=-1,L=-1,e=false,K,G=function(r){var q=(Q+1<c.length&&c.charAt(Q+1)===r);
if(q){Q++
}return q
},E=function(s){var u=G(s),r=(s==="@"?14:(s==="!"?20:(s==="y"&&u?4:(s==="o"?3:2)))),q=new RegExp("^\\d{1,"+r+"}"),t=F.substring(b).match(q);
if(!t){throw"Missing number at position "+b
}b+=t[0].length;
return parseInt(t[0],10)
},M=function(t,s,q){var u=-1,r=n.map(G(t)?q:s,function(v,w){return[[w,v]]
}).sort(function(v,w){return -(v[1].length-w[1].length)
});
n.each(r,function(w,v){var x=v[1];
if(F.substr(b,x.length).toLowerCase()===x.toLowerCase()){u=v[0];
b+=x.length;
return false
}});
if(u!==-1){return u+1
}else{throw"Unknown name at position "+b
}},g=function(){if(F.charAt(b)!==c.charAt(Q)){throw"Unexpected literal at position "+b
}b++
};
for(Q=0;
Q<c.length;
Q++){if(e){if(c.charAt(Q)==="'"&&!G("'")){e=false
}else{g()
}}else{switch(c.charAt(Q)){case"d":d=E("d");
break;
case"D":M("D",J,I);
break;
case"o":L=E("o");
break;
case"m":H=E("m");
break;
case"M":H=M("M",T,P);
break;
case"y":O=E("y");
break;
case"@":K=new Date(E("@"));
O=K.getFullYear();
H=K.getMonth()+1;
d=K.getDate();
break;
case"!":K=new Date((E("!")-this._ticksTo1970)/10000);
O=K.getFullYear();
H=K.getMonth()+1;
d=K.getDate();
break;
case"'":if(G("'")){g()
}else{e=true
}break;
default:g()
}}}if(b<F.length){S=F.substr(b);
if(!/^\s+/.test(S)){throw"Extra/unparsed characters found in date: "+S
}}if(O===-1){O=new Date().getFullYear()
}else{if(O<100){O+=new Date().getFullYear()-new Date().getFullYear()%100+(O<=R?0:-100)
}}if(L>-1){H=1;
d=L;
do{f=this._getDaysInMonth(O,H-1);
if(d<=f){break
}H++;
d-=f
}while(true)
}K=this._daylightSavingAdjust(new Date(O,H-1,d));
if(K.getFullYear()!==O||K.getMonth()+1!==H||K.getDate()!==d){throw"Invalid date"
}return K
},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*10000000),formatDate:function(b,u,g){if(!u){return""
}var z,y=(g?g.dayNamesShort:null)||this._defaults.dayNamesShort,w=(g?g.dayNames:null)||this._defaults.dayNames,d=(g?g.monthNamesShort:null)||this._defaults.monthNamesShort,f=(g?g.monthNames:null)||this._defaults.monthNames,a=function(r){var q=(z+1<b.length&&b.charAt(z+1)===r);
if(q){z++
}return q
},x=function(r,q,t){var s=""+q;
if(a(r)){while(s.length<t){s="0"+s
}}return s
},e=function(t,r,s,q){return(a(t)?q[r]:s[r])
},v="",c=false;
if(u){for(z=0;
z<b.length;
z++){if(c){if(b.charAt(z)==="'"&&!a("'")){c=false
}else{v+=b.charAt(z)
}}else{switch(b.charAt(z)){case"d":v+=x("d",u.getDate(),2);
break;
case"D":v+=e("D",u.getDay(),y,w);
break;
case"o":v+=x("o",Math.round((new Date(u.getFullYear(),u.getMonth(),u.getDate()).getTime()-new Date(u.getFullYear(),0,0).getTime())/86400000),3);
break;
case"m":v+=x("m",u.getMonth()+1,2);
break;
case"M":v+=e("M",u.getMonth(),d,f);
break;
case"y":v+=(a("y")?u.getFullYear():(u.getYear()%100<10?"0":"")+u.getYear()%100);
break;
case"@":v+=u.getTime();
break;
case"!":v+=u.getTime()*10000+this._ticksTo1970;
break;
case"'":if(a("'")){v+="'"
}else{c=true
}break;
default:v+=b.charAt(z)
}}}}return v
},_possibleChars:function(a){var b,c="",d=false,e=function(f){var g=(b+1<a.length&&a.charAt(b+1)===f);
if(g){b++
}return g
};
for(b=0;
b<a.length;
b++){if(d){if(a.charAt(b)==="'"&&!e("'")){d=false
}else{c+=a.charAt(b)
}}else{switch(a.charAt(b)){case"d":case"m":case"y":case"@":c+="0123456789";
break;
case"D":case"M":return null;
case"'":if(e("'")){c+="'"
}else{d=true
}break;
default:c+=a.charAt(b)
}}}return c
},_get:function(a,b){return a.settings[b]!==k?a.settings[b]:this._defaults[b]
},_setDateFromField:function(a,d){if(a.input.val()===a.lastVal){return
}var f=this._get(a,"dateFormat"),g=a.lastVal=a.input?a.input.val():null,q=this._getDefaultDate(a),e=q,c=this._getFormatConfig(a);
try{e=this.parseDate(f,g,c)||q
}catch(b){g=(d?"":g)
}a.selectedDay=e.getDate();
a.drawMonth=a.selectedMonth=e.getMonth();
a.drawYear=a.selectedYear=e.getFullYear();
a.currentDay=(g?e.getDate():0);
a.currentMonth=(g?e.getMonth():0);
a.currentYear=(g?e.getFullYear():0);
this._adjustInstDate(a)
},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date()))
},_determineDate:function(b,e,a){var c=function(g){var q=new Date();
q.setDate(q.getDate()+g);
return q
},d=function(g){try{return n.datepicker.parseDate(n.datepicker._get(b,"dateFormat"),g,n.datepicker._getFormatConfig(b))
}catch(v){}var A=(g.toLowerCase().match(/^c/)?n.datepicker._getDate(b):null)||new Date(),z=A.getFullYear(),w=A.getMonth(),B=A.getDate(),x=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,y=x.exec(g);
while(y){switch(y[2]||"d"){case"d":case"D":B+=parseInt(y[1],10);
break;
case"w":case"W":B+=parseInt(y[1],10)*7;
break;
case"m":case"M":w+=parseInt(y[1],10);
B=Math.min(B,n.datepicker._getDaysInMonth(z,w));
break;
case"y":case"Y":z+=parseInt(y[1],10);
B=Math.min(B,n.datepicker._getDaysInMonth(z,w));
break
}y=x.exec(g)
}return new Date(z,w,B)
},f=(e==null||e===""?a:(typeof e==="string"?d(e):(typeof e==="number"?(isNaN(e)?a:c(e)):new Date(e.getTime()))));
f=(f&&f.toString()==="Invalid Date"?a:f);
if(f){f.setHours(0);
f.setMinutes(0);
f.setSeconds(0);
f.setMilliseconds(0)
}return this._daylightSavingAdjust(f)
},_daylightSavingAdjust:function(a){if(!a){return null
}a.setHours(a.getHours()>12?a.getHours()+2:0);
return a
},_setDate:function(g,c,a){var f=!c,d=g.selectedMonth,b=g.selectedYear,e=this._restrictMinMax(g,this._determineDate(g,c,new Date()));
g.selectedDay=g.currentDay=e.getDate();
g.drawMonth=g.selectedMonth=g.currentMonth=e.getMonth();
g.drawYear=g.selectedYear=g.currentYear=e.getFullYear();
if((d!==g.selectedMonth||b!==g.selectedYear)&&!a){this._notifyChange(g)
}this._adjustInstDate(g);
if(g.input){g.input.val(f?"":this._formatDate(g))
}},_getDate:function(a){var b=(!a.currentYear||(a.input&&a.input.val()==="")?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay)));
return b
},_attachHandlers:function(b){var c=this._get(b,"stepMonths"),a="#"+b.id.replace(/\\\\/g,"\\");
b.dpDiv.find("[data-handler]").map(function(){var d={prev:function(){n.datepicker._adjustDate(a,-c,"M")
},next:function(){n.datepicker._adjustDate(a,+c,"M")
},hide:function(){n.datepicker._hideDatepicker()
},today:function(){n.datepicker._gotoToday(a)
},selectDay:function(){n.datepicker._selectDay(a,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);
return false
},selectMonth:function(){n.datepicker._selectMonthYear(a,this,"M");
return false
},selectYear:function(){n.datepicker._selectMonthYear(a,this,"Y");
return false
}};
n(this).bind(this.getAttribute("data-event"),d[this.getAttribute("data-handler")])
})
},_generateHTML:function(c){var aM,aO,ak,at,a2,aL,e,ao,aF,aw,ax,aV,aT,aU,a5,aN,aX,aG,aH,am,av,aI,ay,aW,a1,g,aq,an,ap,aY,aC,aS,d,a,a3,aK,aB,ar,aR,b=new Date(),aJ=this._daylightSavingAdjust(new Date(b.getFullYear(),b.getMonth(),b.getDate())),aE=this._get(c,"isRTL"),aA=this._get(c,"showButtonPanel"),al=this._get(c,"hideIfNoPrevNext"),az=this._get(c,"navigationAsDateFormat"),aQ=this._getNumberOfMonths(c),aZ=this._get(c,"showCurrentAtPos"),au=this._get(c,"stepMonths"),aD=(aQ[0]!==1||aQ[1]!==1),a4=this._daylightSavingAdjust((!c.currentDay?new Date(9999,9,9):new Date(c.currentYear,c.currentMonth,c.currentDay))),a0=this._getMinMaxDate(c,"min"),aP=this._getMinMaxDate(c,"max"),a6=c.drawMonth-aZ,f=c.drawYear;
if(a6<0){a6+=12;
f--
}if(aP){aM=this._daylightSavingAdjust(new Date(aP.getFullYear(),aP.getMonth()-(aQ[0]*aQ[1])+1,aP.getDate()));
aM=(a0&&aM<a0?a0:aM);
while(this._daylightSavingAdjust(new Date(f,a6,1))>aM){a6--;
if(a6<0){a6=11;
f--
}}}c.drawMonth=a6;
c.drawYear=f;
aO=this._get(c,"prevText");
aO=(!az?aO:this.formatDate(aO,this._daylightSavingAdjust(new Date(f,a6-au,1)),this._getFormatConfig(c)));
ak=(this._canAdjustMonth(c,-1,f,a6)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+aO+"'><span class='ui-icon ui-icon-circle-triangle-"+(aE?"e":"w")+"'>"+aO+"</span></a>":(al?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+aO+"'><span class='ui-icon ui-icon-circle-triangle-"+(aE?"e":"w")+"'>"+aO+"</span></a>"));
at=this._get(c,"nextText");
at=(!az?at:this.formatDate(at,this._daylightSavingAdjust(new Date(f,a6+au,1)),this._getFormatConfig(c)));
a2=(this._canAdjustMonth(c,+1,f,a6)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+at+"'><span class='ui-icon ui-icon-circle-triangle-"+(aE?"w":"e")+"'>"+at+"</span></a>":(al?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+at+"'><span class='ui-icon ui-icon-circle-triangle-"+(aE?"w":"e")+"'>"+at+"</span></a>"));
aL=this._get(c,"currentText");
e=(this._get(c,"gotoCurrent")&&c.currentDay?a4:aJ);
aL=(!az?aL:this.formatDate(aL,e,this._getFormatConfig(c)));
ao=(!c.inline?"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(c,"closeText")+"</button>":"");
aF=(aA)?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(aE?ao:"")+(this._isInRange(c,e)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+aL+"</button>":"")+(aE?"":ao)+"</div>":"";
aw=parseInt(this._get(c,"firstDay"),10);
aw=(isNaN(aw)?0:aw);
ax=this._get(c,"showWeek");
aV=this._get(c,"dayNames");
aT=this._get(c,"dayNamesMin");
aU=this._get(c,"monthNames");
a5=this._get(c,"monthNamesShort");
aN=this._get(c,"beforeShowDay");
aX=this._get(c,"showOtherMonths");
aG=this._get(c,"selectOtherMonths");
aH=this._getDefaultDate(c);
am="";
av;
for(aI=0;
aI<aQ[0];
aI++){ay="";
this.maxRows=4;
for(aW=0;
aW<aQ[1];
aW++){a1=this._daylightSavingAdjust(new Date(f,a6,c.selectedDay));
g=" ui-corner-all";
aq="";
if(aD){aq+="<div class='ui-datepicker-group";
if(aQ[1]>1){switch(aW){case 0:aq+=" ui-datepicker-group-first";
g=" ui-corner-"+(aE?"right":"left");
break;
case aQ[1]-1:aq+=" ui-datepicker-group-last";
g=" ui-corner-"+(aE?"left":"right");
break;
default:aq+=" ui-datepicker-group-middle";
g="";
break
}}aq+="'>"
}aq+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+g+"'>"+(/all|left/.test(g)&&aI===0?(aE?a2:ak):"")+(/all|right/.test(g)&&aI===0?(aE?ak:a2):"")+this._generateMonthYearHeader(c,a6,f,a0,aP,aI>0||aW>0,aU,a5)+"</div><table class='ui-datepicker-calendar'><thead><tr>";
an=(ax?"<th class='ui-datepicker-week-col'>"+this._get(c,"weekHeader")+"</th>":"");
for(av=0;
av<7;
av++){ap=(av+aw)%7;
an+="<th"+((av+aw+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+aV[ap]+"'>"+aT[ap]+"</span></th>"
}aq+=an+"</tr></thead><tbody>";
aY=this._getDaysInMonth(f,a6);
if(f===c.selectedYear&&a6===c.selectedMonth){c.selectedDay=Math.min(c.selectedDay,aY)
}aC=(this._getFirstDayOfMonth(f,a6)-aw+7)%7;
aS=Math.ceil((aC+aY)/7);
d=(aD?this.maxRows>aS?this.maxRows:aS:aS);
this.maxRows=d;
a=this._daylightSavingAdjust(new Date(f,a6,1-aC));
for(a3=0;
a3<d;
a3++){aq+="<tr>";
aK=(!ax?"":"<td class='ui-datepicker-week-col'>"+this._get(c,"calculateWeek")(a)+"</td>");
for(av=0;
av<7;
av++){aB=(aN?aN.apply((c.input?c.input[0]:null),[a]):[true,""]);
ar=(a.getMonth()!==a6);
aR=(ar&&!aG)||!aB[0]||(a0&&a<a0)||(aP&&a>aP);
aK+="<td class='"+((av+aw+6)%7>=5?" ui-datepicker-week-end":"")+(ar?" ui-datepicker-other-month":"")+((a.getTime()===a1.getTime()&&a6===c.selectedMonth&&c._keyEvent)||(aH.getTime()===a.getTime()&&aH.getTime()===a1.getTime())?" "+this._dayOverClass:"")+(aR?" "+this._unselectableClass+" ui-state-disabled":"")+(ar&&!aX?"":" "+aB[1]+(a.getTime()===a4.getTime()?" "+this._currentClass:"")+(a.getTime()===aJ.getTime()?" ui-datepicker-today":""))+"'"+((!ar||aX)&&aB[2]?" title='"+aB[2].replace(/'/g,"&#39;")+"'":"")+(aR?"":" data-handler='selectDay' data-event='click' data-month='"+a.getMonth()+"' data-year='"+a.getFullYear()+"'")+">"+(ar&&!aX?"&#xa0;":(aR?"<span class='ui-state-default'>"+a.getDate()+"</span>":"<a class='ui-state-default"+(a.getTime()===aJ.getTime()?" ui-state-highlight":"")+(a.getTime()===a4.getTime()?" ui-state-active":"")+(ar?" ui-priority-secondary":"")+"' href='#'>"+a.getDate()+"</a>"))+"</td>";
a.setDate(a.getDate()+1);
a=this._daylightSavingAdjust(a)
}aq+=aK+"</tr>"
}a6++;
if(a6>11){a6=0;
f++
}aq+="</tbody></table>"+(aD?"</div>"+((aQ[0]>0&&aW===aQ[1]-1)?"<div class='ui-datepicker-row-break'></div>":""):"");
ay+=aq
}am+=ay
}am+=aF;
c._keyEvent=false;
return am
},_generateMonthYearHeader:function(L,N,g,J,D,f,H,P){var b,O,a,d,K,e,C,I,M=this._get(L,"changeMonth"),G=this._get(L,"changeYear"),F=this._get(L,"showMonthAfterYear"),E="<div class='ui-datepicker-title'>",c="";
if(f||!M){c+="<span class='ui-datepicker-month'>"+H[N]+"</span>"
}else{b=(J&&J.getFullYear()===g);
O=(D&&D.getFullYear()===g);
c+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
for(a=0;
a<12;
a++){if((!b||a>=J.getMonth())&&(!O||a<=D.getMonth())){c+="<option value='"+a+"'"+(a===N?" selected='selected'":"")+">"+P[a]+"</option>"
}}c+="</select>"
}if(!F){E+=c+(f||!(M&&G)?"&#xa0;":"")
}if(!L.yearshtml){L.yearshtml="";
if(f||!G){E+="<span class='ui-datepicker-year'>"+g+"</span>"
}else{d=this._get(L,"yearRange").split(":");
K=new Date().getFullYear();
e=function(q){var r=(q.match(/c[+\-].*/)?g+parseInt(q.substring(1),10):(q.match(/[+\-].*/)?K+parseInt(q,10):parseInt(q,10)));
return(isNaN(r)?K:r)
};
C=e(d[0]);
I=Math.max(C,e(d[1]||""));
C=(J?Math.max(C,J.getFullYear()):C);
I=(D?Math.min(I,D.getFullYear()):I);
L.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
for(;
C<=I;
C++){L.yearshtml+="<option value='"+C+"'"+(C===g?" selected='selected'":"")+">"+C+"</option>"
}L.yearshtml+="</select>";
E+=L.yearshtml;
L.yearshtml=null
}}E+=this._get(L,"yearSuffix");
if(F){E+=(f||!(M&&G)?"&#xa0;":"")+c
}E+="</div>";
return E
},_adjustInstDate:function(c,g,a){var d=c.drawYear+(a==="Y"?g:0),b=c.drawMonth+(a==="M"?g:0),f=Math.min(c.selectedDay,this._getDaysInMonth(d,b))+(a==="D"?g:0),e=this._restrictMinMax(c,this._daylightSavingAdjust(new Date(d,b,f)));
c.selectedDay=e.getDate();
c.drawMonth=c.selectedMonth=e.getMonth();
c.drawYear=c.selectedYear=e.getFullYear();
if(a==="M"||a==="Y"){this._notifyChange(c)
}},_restrictMinMax:function(b,d){var c=this._getMinMaxDate(b,"min"),a=this._getMinMaxDate(b,"max"),e=(c&&d<c?c:d);
return(a&&e>a?a:e)
},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");
if(b){b.apply((a.input?a.input[0]:null),[a.selectedYear,a.selectedMonth+1,a])
}},_getNumberOfMonths:function(a){var b=this._get(a,"numberOfMonths");
return(b==null?[1,1]:(typeof b==="number"?[1,b]:b))
},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)
},_getDaysInMonth:function(b,a){return 32-this._daylightSavingAdjust(new Date(b,a,32)).getDate()
},_getFirstDayOfMonth:function(b,a){return new Date(b,a,1).getDay()
},_canAdjustMonth:function(c,a,d,b){var f=this._getNumberOfMonths(c),e=this._daylightSavingAdjust(new Date(d,b+(a<0?a:f[0]*f[1]),1));
if(a<0){e.setDate(this._getDaysInMonth(e.getFullYear(),e.getMonth()))
}return this._isInRange(c,e)
},_isInRange:function(e,g){var q,b,f=this._getMinMaxDate(e,"min"),r=this._getMinMaxDate(e,"max"),a=null,d=null,c=this._get(e,"yearRange");
if(c){q=c.split(":");
b=new Date().getFullYear();
a=parseInt(q[0],10);
d=parseInt(q[1],10);
if(q[0].match(/[+\-].*/)){a+=b
}if(q[1].match(/[+\-].*/)){d+=b
}}return((!f||g.getTime()>=f.getTime())&&(!r||g.getTime()<=r.getTime())&&(!a||g.getFullYear()>=a)&&(!d||g.getFullYear()<=d))
},_getFormatConfig:function(b){var a=this._get(b,"shortYearCutoff");
a=(typeof a!=="string"?a:new Date().getFullYear()%100+parseInt(a,10));
return{shortYearCutoff:a,dayNamesShort:this._get(b,"dayNamesShort"),dayNames:this._get(b,"dayNames"),monthNamesShort:this._get(b,"monthNamesShort"),monthNames:this._get(b,"monthNames")}
},_formatDate:function(b,e,a,c){if(!e){b.currentDay=b.selectedDay;
b.currentMonth=b.selectedMonth;
b.currentYear=b.selectedYear
}var d=(e?(typeof e==="object"?e:this._daylightSavingAdjust(new Date(c,a,e))):this._daylightSavingAdjust(new Date(b.currentYear,b.currentMonth,b.currentDay)));
return this.formatDate(this._get(b,"dateFormat"),d,this._getFormatConfig(b))
}});
function o(a){var b="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
return a.delegate(b,"mouseout",function(){n(this).removeClass("ui-state-hover");
if(this.className.indexOf("ui-datepicker-prev")!==-1){n(this).removeClass("ui-datepicker-prev-hover")
}if(this.className.indexOf("ui-datepicker-next")!==-1){n(this).removeClass("ui-datepicker-next-hover")
}}).delegate(b,"mouseover",function(){if(!n.datepicker._isDisabledDatepicker(p.inline?a.parent()[0]:p.input[0])){n(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
n(this).addClass("ui-state-hover");
if(this.className.indexOf("ui-datepicker-prev")!==-1){n(this).addClass("ui-datepicker-prev-hover")
}if(this.className.indexOf("ui-datepicker-next")!==-1){n(this).addClass("ui-datepicker-next-hover")
}}})
}function j(a,b){n.extend(a,b);
for(var c in b){if(b[c]==null){a[c]=b[c]
}}return a
}n.fn.datepicker=function(a){if(!this.length){return this
}if(!n.datepicker.initialized){n(document).mousedown(n.datepicker._checkExternalClick);
n.datepicker.initialized=true
}if(n("#"+n.datepicker._mainDivId).length===0){n("body").append(n.datepicker.dpDiv)
}var b=Array.prototype.slice.call(arguments,1);
if(typeof a==="string"&&(a==="isDisabled"||a==="getDate"||a==="widget")){return n.datepicker["_"+a+"Datepicker"].apply(n.datepicker,[this[0]].concat(b))
}if(a==="option"&&arguments.length===2&&typeof arguments[1]==="string"){return n.datepicker["_"+a+"Datepicker"].apply(n.datepicker,[this[0]].concat(b))
}return this.each(function(){typeof a==="string"?n.datepicker["_"+a+"Datepicker"].apply(n.datepicker,[this].concat(b)):n.datepicker._attachDatepicker(this,a)
})
};
n.datepicker=new h();
n.datepicker.initialized=false;
n.datepicker.uuid=new Date().getTime();
n.datepicker.version="1.10.4"
})(jQuery);
(function(h,g){var f={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},e={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true};
h.widget("ui.dialog",{version:"1.10.4",options:{appendTo:"body",autoOpen:true,buttons:[],closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",of:window,collision:"fit",using:function(a){var b=h(this).css(a).offset().top;
if(b<0){h(this).css("top",a.top-b)
}}},resizable:true,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height};
this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};
this.originalTitle=this.element.attr("title");
this.options.title=this.options.title||this.originalTitle;
this._createWrapper();
this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);
this._createTitlebar();
this._createButtonPane();
if(this.options.draggable&&h.fn.draggable){this._makeDraggable()
}if(this.options.resizable&&h.fn.resizable){this._makeResizable()
}this._isOpen=false
},_init:function(){if(this.options.autoOpen){this.open()
}},_appendTo:function(){var a=this.options.appendTo;
if(a&&(a.jquery||a.nodeType)){return h(a)
}return this.document.find(a||"body").eq(0)
},_destroy:function(){var a,b=this.originalPosition;
this._destroyOverlay();
this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();
this.uiDialog.stop(true,true).remove();
if(this.originalTitle){this.element.attr("title",this.originalTitle)
}a=b.parent.children().eq(b.index);
if(a.length&&a[0]!==this.element[0]){a.before(this.element)
}else{b.parent.append(this.element)
}},widget:function(){return this.uiDialog
},disable:h.noop,enable:h.noop,close:function(a){var b,c=this;
if(!this._isOpen||this._trigger("beforeClose",a)===false){return
}this._isOpen=false;
this._destroyOverlay();
if(!this.opener.filter(":focusable").focus().length){try{b=this.document[0].activeElement;
if(b&&b.nodeName.toLowerCase()!=="body"){h(b).blur()
}}catch(d){}}this._hide(this.uiDialog,this.options.hide,function(){c._trigger("close",a)
})
},isOpen:function(){return this._isOpen
},moveToTop:function(){this._moveToTop()
},_moveToTop:function(a,c){var b=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
if(b&&!c){this._trigger("focus",a)
}return b
},open:function(){var a=this;
if(this._isOpen){if(this._moveToTop()){this._focusTabbable()
}return
}this._isOpen=true;
this.opener=h(this.document[0].activeElement);
this._size();
this._position();
this._createOverlay();
this._moveToTop(null,true);
this._show(this.uiDialog,this.options.show,function(){a._focusTabbable();
a._trigger("focus")
});
this._trigger("open")
},_focusTabbable:function(){var a=this.element.find("[autofocus]");
if(!a.length){a=this.element.find(":tabbable")
}if(!a.length){a=this.uiDialogButtonPane.find(":tabbable")
}if(!a.length){a=this.uiDialogTitlebarClose.filter(":tabbable")
}if(!a.length){a=this.uiDialog
}a.eq(0).focus()
},_keepFocus:function(b){function a(){var c=this.document[0].activeElement,d=this.uiDialog[0]===c||h.contains(this.uiDialog[0],c);
if(!d){this._focusTabbable()
}}b.preventDefault();
a.call(this);
this._delay(a)
},_createWrapper:function(){this.uiDialog=h("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo());
this._on(this.uiDialog,{keydown:function(b){if(this.options.closeOnEscape&&!b.isDefaultPrevented()&&b.keyCode&&b.keyCode===h.ui.keyCode.ESCAPE){b.preventDefault();
this.close(b);
return
}if(b.keyCode!==h.ui.keyCode.TAB){return
}var c=this.uiDialog.find(":tabbable"),a=c.filter(":first"),d=c.filter(":last");
if((b.target===d[0]||b.target===this.uiDialog[0])&&!b.shiftKey){a.focus(1);
b.preventDefault()
}else{if((b.target===a[0]||b.target===this.uiDialog[0])&&b.shiftKey){d.focus(1);
b.preventDefault()
}}},mousedown:function(a){if(this._moveToTop(a)){this._focusTabbable()
}}});
if(!this.element.find("[aria-describedby]").length){this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})
}},_createTitlebar:function(){var a;
this.uiDialogTitlebar=h("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);
this._on(this.uiDialogTitlebar,{mousedown:function(b){if(!h(b.target).closest(".ui-dialog-titlebar-close")){this.uiDialog.focus()
}}});
this.uiDialogTitlebarClose=h("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:false}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);
this._on(this.uiDialogTitlebarClose,{click:function(b){b.preventDefault();
this.close(b)
}});
a=h("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);
this._title(a);
this.uiDialog.attr({"aria-labelledby":a.attr("id")})
},_title:function(a){if(!this.options.title){a.html("&#160;")
}a.text(this.options.title)
},_createButtonPane:function(){this.uiDialogButtonPane=h("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
this.uiButtonSet=h("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);
this._createButtons()
},_createButtons:function(){var a=this,b=this.options.buttons;
this.uiDialogButtonPane.remove();
this.uiButtonSet.empty();
if(h.isEmptyObject(b)||(h.isArray(b)&&!b.length)){this.uiDialog.removeClass("ui-dialog-buttons");
return
}h.each(b,function(m,k){var d,c;
k=h.isFunction(k)?{click:k,text:m}:k;
k=h.extend({type:"button"},k);
d=k.click;
k.click=function(){d.apply(a.element[0],arguments)
};
c={icons:k.icons,text:k.showText};
delete k.icons;
delete k.showText;
h("<button></button>",k).button(c).appendTo(a.uiButtonSet)
});
this.uiDialog.addClass("ui-dialog-buttons");
this.uiDialogButtonPane.appendTo(this.uiDialog)
},_makeDraggable:function(){var a=this,b=this.options;
function c(d){return{position:d.position,offset:d.offset}
}this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(j,d){h(this).addClass("ui-dialog-dragging");
a._blockFrames();
a._trigger("dragStart",j,c(d))
},drag:function(j,d){a._trigger("drag",j,c(d))
},stop:function(j,d){b.position=[d.position.left-a.document.scrollLeft(),d.position.top-a.document.scrollTop()];
h(this).removeClass("ui-dialog-dragging");
a._unblockFrames();
a._trigger("dragStop",j,c(d))
}})
},_makeResizable:function(){var a=this,c=this.options,b=c.resizable,m=this.uiDialog.css("position"),d=typeof b==="string"?b:"n,e,s,w,se,sw,ne,nw";
function k(j){return{originalPosition:j.originalPosition,originalSize:j.originalSize,position:j.position,size:j.size}
}this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:c.maxWidth,maxHeight:c.maxHeight,minWidth:c.minWidth,minHeight:this._minHeight(),handles:d,start:function(n,j){h(this).addClass("ui-dialog-resizing");
a._blockFrames();
a._trigger("resizeStart",n,k(j))
},resize:function(n,j){a._trigger("resize",n,k(j))
},stop:function(n,j){c.height=h(this).height();
c.width=h(this).width();
h(this).removeClass("ui-dialog-resizing");
a._unblockFrames();
a._trigger("resizeStop",n,k(j))
}}).css("position",m)
},_minHeight:function(){var a=this.options;
return a.height==="auto"?a.minHeight:Math.min(a.minHeight,a.height)
},_position:function(){var a=this.uiDialog.is(":visible");
if(!a){this.uiDialog.show()
}this.uiDialog.position(this.options.position);
if(!a){this.uiDialog.hide()
}},_setOptions:function(b){var a=this,c=false,d={};
h.each(b,function(m,k){a._setOption(m,k);
if(m in f){c=true
}if(m in e){d[m]=k
}});
if(c){this._size();
this._position()
}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option",d)
}},_setOption:function(c,b){var d,a,j=this.uiDialog;
if(c==="dialogClass"){j.removeClass(this.options.dialogClass).addClass(b)
}if(c==="disabled"){return
}this._super(c,b);
if(c==="appendTo"){this.uiDialog.appendTo(this._appendTo())
}if(c==="buttons"){this._createButtons()
}if(c==="closeText"){this.uiDialogTitlebarClose.button({label:""+b})
}if(c==="draggable"){d=j.is(":data(ui-draggable)");
if(d&&!b){j.draggable("destroy")
}if(!d&&b){this._makeDraggable()
}}if(c==="position"){this._position()
}if(c==="resizable"){a=j.is(":data(ui-resizable)");
if(a&&!b){j.resizable("destroy")
}if(a&&typeof b==="string"){j.resizable("option","handles",b)
}if(!a&&b!==false){this._makeResizable()
}}if(c==="title"){this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))
}},_size:function(){var d,b,a,c=this.options;
this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0});
if(c.minWidth>c.width){c.width=c.minWidth
}d=this.uiDialog.css({height:"auto",width:c.width}).outerHeight();
b=Math.max(0,c.minHeight-d);
a=typeof c.maxHeight==="number"?Math.max(0,c.maxHeight-d):"none";
if(c.height==="auto"){this.element.css({minHeight:b,maxHeight:a,height:"auto"})
}else{this.element.height(Math.max(0,c.height-d))
}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option","minHeight",this._minHeight())
}},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var a=h(this);
return h("<div>").css({position:"absolute",width:a.outerWidth(),height:a.outerHeight()}).appendTo(a.parent()).offset(a.offset())[0]
})
},_unblockFrames:function(){if(this.iframeBlocks){this.iframeBlocks.remove();
delete this.iframeBlocks
}},_allowInteraction:function(a){if(h(a.target).closest(".ui-dialog").length){return true
}return !!h(a.target).closest(".ui-datepicker").length
},_createOverlay:function(){if(!this.options.modal){return
}var a=this,b=this.widgetFullName;
if(!h.ui.dialog.overlayInstances){this._delay(function(){if(h.ui.dialog.overlayInstances){this.document.bind("focusin.dialog",function(c){if(!a._allowInteraction(c)){c.preventDefault();
h(".ui-dialog:visible:last .ui-dialog-content").data(b)._focusTabbable()
}})
}})
}this.overlay=h("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());
this._on(this.overlay,{mousedown:"_keepFocus"});
h.ui.dialog.overlayInstances++
},_destroyOverlay:function(){if(!this.options.modal){return
}if(this.overlay){h.ui.dialog.overlayInstances--;
if(!h.ui.dialog.overlayInstances){this.document.unbind("focusin.dialog")
}this.overlay.remove();
this.overlay=null
}}});
h.ui.dialog.overlayInstances=0;
if(h.uiBackCompat!==false){h.widget("ui.dialog",h.ui.dialog,{_position:function(){var c=this.options.position,b=[],a=[0,0],d;
if(c){if(typeof c==="string"||(typeof c==="object"&&"0" in c)){b=c.split?c.split(" "):[c[0],c[1]];
if(b.length===1){b[1]=b[0]
}h.each(["left","top"],function(m,n){if(+b[m]===b[m]){a[m]=b[m];
b[m]=n
}});
c={my:b[0]+(a[0]<0?a[0]:"+"+a[0])+" "+b[1]+(a[1]<0?a[1]:"+"+a[1]),at:b.join(" ")}
}c=h.extend({},h.ui.dialog.prototype.options.position,c)
}else{c=h.ui.dialog.prototype.options.position
}d=this.uiDialog.is(":visible");
if(!d){this.uiDialog.show()
}this.uiDialog.position(c);
if(!d){this.uiDialog.hide()
}}})
}}(jQuery));
(function(d,c){d.widget("ui.draggable",d.ui.mouse,{version:"1.10.4",widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false,drag:null,start:null,stop:null},_create:function(){if(this.options.helper==="original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"
}if(this.options.addClasses){this.element.addClass("ui-draggable")
}if(this.options.disabled){this.element.addClass("ui-draggable-disabled")
}this._mouseInit()
},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
this._mouseDestroy()
},_mouseCapture:function(b){var a=this.options;
if(this.helper||a.disabled||d(b.target).closest(".ui-resizable-handle").length>0){return false
}this.handle=this._getHandle(b);
if(!this.handle){return false
}d(a.iframeFix===true?"iframe":a.iframeFix).each(function(){d("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(d(this).offset()).appendTo("body")
});
return true
},_mouseStart:function(b){var a=this.options;
this.helper=this._createHelper(b);
this.helper.addClass("ui-draggable-dragging");
this._cacheHelperProportions();
if(d.ui.ddmanager){d.ui.ddmanager.current=this
}this._cacheMargins();
this.cssPosition=this.helper.css("position");
this.scrollParent=this.helper.scrollParent();
this.offsetParent=this.helper.offsetParent();
this.offsetParentCssPosition=this.offsetParent.css("position");
this.offset=this.positionAbs=this.element.offset();
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
this.offset.scroll=false;
d.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this.position=this._generatePosition(b);
this.originalPageX=b.pageX;
this.originalPageY=b.pageY;
(a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt));
this._setContainment();
if(this._trigger("start",b)===false){this._clear();
return false
}this._cacheHelperProportions();
if(d.ui.ddmanager&&!a.dropBehaviour){d.ui.ddmanager.prepareOffsets(this,b)
}this._mouseDrag(b,true);
if(d.ui.ddmanager){d.ui.ddmanager.dragStart(this,b)
}return true
},_mouseDrag:function(f,a){if(this.offsetParentCssPosition==="fixed"){this.offset.parent=this._getParentOffset()
}this.position=this._generatePosition(f);
this.positionAbs=this._convertPositionTo("absolute");
if(!a){var b=this._uiHash();
if(this._trigger("drag",f,b)===false){this._mouseUp({});
return false
}this.position=b.position
}if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px"
}if(d.ui.ddmanager){d.ui.ddmanager.drag(this,f)
}return false
},_mouseStop:function(b){var f=this,a=false;
if(d.ui.ddmanager&&!this.options.dropBehaviour){a=d.ui.ddmanager.drop(this,b)
}if(this.dropped){a=this.dropped;
this.dropped=false
}if(this.options.helper==="original"&&!d.contains(this.element[0].ownerDocument,this.element[0])){return false
}if((this.options.revert==="invalid"&&!a)||(this.options.revert==="valid"&&a)||this.options.revert===true||(d.isFunction(this.options.revert)&&this.options.revert.call(this.element,a))){d(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(f._trigger("stop",b)!==false){f._clear()
}})
}else{if(this._trigger("stop",b)!==false){this._clear()
}}return false
},_mouseUp:function(a){d("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)
});
if(d.ui.ddmanager){d.ui.ddmanager.dragStop(this,a)
}return d.ui.mouse.prototype._mouseUp.call(this,a)
},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp({})
}else{this._clear()
}return this
},_getHandle:function(a){return this.options.handle?!!d(a.target).closest(this.element.find(this.options.handle)).length:true
},_createHelper:function(b){var a=this.options,f=d.isFunction(a.helper)?d(a.helper.apply(this.element[0],[b])):(a.helper==="clone"?this.element.clone().removeAttr("id"):this.element);
if(!f.parents("body").length){f.appendTo((a.appendTo==="parent"?this.element[0].parentNode:a.appendTo))
}if(f[0]!==this.element[0]&&!(/(fixed|absolute)/).test(f.css("position"))){f.css("position","absolute")
}return f
},_adjustOffsetFromHelper:function(a){if(typeof a==="string"){a=a.split(" ")
}if(d.isArray(a)){a={left:+a[0],top:+a[1]||0}
}if("left" in a){this.offset.click.left=a.left+this.margins.left
}if("right" in a){this.offset.click.left=this.helperProportions.width-a.right+this.margins.left
}if("top" in a){this.offset.click.top=a.top+this.margins.top
}if("bottom" in a){this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top
}},_getParentOffset:function(){var a=this.offsetParent.offset();
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&d.contains(this.scrollParent[0],this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();
a.top+=this.scrollParent.scrollTop()
}if((this.offsetParent[0]===document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&d.ui.ie)){a={top:0,left:0}
}return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var a=this.element.position();
return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}else{return{top:0,left:0}
}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0),right:(parseInt(this.element.css("marginRight"),10)||0),bottom:(parseInt(this.element.css("marginBottom"),10)||0)}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var h,a,j,b=this.options;
if(!b.containment){this.containment=null;
return
}if(b.containment==="window"){this.containment=[d(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,d(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,d(window).scrollLeft()+d(window).width()-this.helperProportions.width-this.margins.left,d(window).scrollTop()+(d(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];
return
}if(b.containment==="document"){this.containment=[0,0,d(document).width()-this.helperProportions.width-this.margins.left,(d(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];
return
}if(b.containment.constructor===Array){this.containment=b.containment;
return
}if(b.containment==="parent"){b.containment=this.helper[0].parentNode
}a=d(b.containment);
j=a[0];
if(!j){return
}h=a.css("overflow")!=="hidden";
this.containment=[(parseInt(a.css("borderLeftWidth"),10)||0)+(parseInt(a.css("paddingLeft"),10)||0),(parseInt(a.css("borderTopWidth"),10)||0)+(parseInt(a.css("paddingTop"),10)||0),(h?Math.max(j.scrollWidth,j.offsetWidth):j.offsetWidth)-(parseInt(a.css("borderRightWidth"),10)||0)-(parseInt(a.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(h?Math.max(j.scrollHeight,j.offsetHeight):j.offsetHeight)-(parseInt(a.css("borderBottomWidth"),10)||0)-(parseInt(a.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];
this.relative_container=a
},_convertPositionTo:function(b,a){if(!a){a=this.position
}var h=b==="absolute"?1:-1,j=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&d.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent;
if(!this.offset.scroll){this.offset.scroll={top:j.scrollTop(),left:j.scrollLeft()}
}return{top:(a.top+this.offset.relative.top*h+this.offset.parent.top*h-((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():this.offset.scroll.top)*h)),left:(a.left+this.offset.relative.left*h+this.offset.parent.left*h-((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():this.offset.scroll.left)*h))}
},_generatePosition:function(r){var s,m,b,p,q=this.options,a=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&d.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,n=r.pageX,o=r.pageY;
if(!this.offset.scroll){this.offset.scroll={top:a.scrollTop(),left:a.scrollLeft()}
}if(this.originalPosition){if(this.containment){if(this.relative_container){m=this.relative_container.offset();
s=[this.containment[0]+m.left,this.containment[1]+m.top,this.containment[2]+m.left,this.containment[3]+m.top]
}else{s=this.containment
}if(r.pageX-this.offset.click.left<s[0]){n=s[0]+this.offset.click.left
}if(r.pageY-this.offset.click.top<s[1]){o=s[1]+this.offset.click.top
}if(r.pageX-this.offset.click.left>s[2]){n=s[2]+this.offset.click.left
}if(r.pageY-this.offset.click.top>s[3]){o=s[3]+this.offset.click.top
}}if(q.grid){b=q.grid[1]?this.originalPageY+Math.round((o-this.originalPageY)/q.grid[1])*q.grid[1]:this.originalPageY;
o=s?((b-this.offset.click.top>=s[1]||b-this.offset.click.top>s[3])?b:((b-this.offset.click.top>=s[1])?b-q.grid[1]:b+q.grid[1])):b;
p=q.grid[0]?this.originalPageX+Math.round((n-this.originalPageX)/q.grid[0])*q.grid[0]:this.originalPageX;
n=s?((p-this.offset.click.left>=s[0]||p-this.offset.click.left>s[2])?p:((p-this.offset.click.left>=s[0])?p-q.grid[0]:p+q.grid[0])):p
}}return{top:(o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():this.offset.scroll.top)),left:(n-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():this.offset.scroll.left))}
},_clear:function(){this.helper.removeClass("ui-draggable-dragging");
if(this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()
}this.helper=null;
this.cancelHelperRemoval=false
},_trigger:function(f,b,a){a=a||this._uiHash();
d.ui.plugin.call(this,f,[b,a]);
if(f==="drag"){this.positionAbs=this._convertPositionTo("absolute")
}return d.Widget.prototype._trigger.call(this,f,b,a)
},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}
}});
d.ui.plugin.add("draggable","connectToSortable",{start:function(j,b){var h=d(this).data("ui-draggable"),a=h.options,k=d.extend({},b,{item:h.element});
h.sortables=[];
d(a.connectToSortable).each(function(){var e=d.data(this,"ui-sortable");
if(e&&!e.options.disabled){h.sortables.push({instance:e,shouldRevert:e.options.revert});
e.refreshPositions();
e._trigger("activate",j,k)
}})
},stop:function(g,a){var b=d(this).data("ui-draggable"),h=d.extend({},a,{item:b.element});
d.each(b.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;
b.cancelHelperRemoval=true;
this.instance.cancelHelperRemoval=false;
if(this.shouldRevert){this.instance.options.revert=this.shouldRevert
}this.instance._mouseStop(g);
this.instance.options.helper=this.instance.options._helper;
if(b.options.helper==="original"){this.instance.currentItem.css({top:"auto",left:"auto"})
}}else{this.instance.cancelHelperRemoval=false;
this.instance._trigger("deactivate",g,h)
}})
},drag:function(g,a){var b=d(this).data("ui-draggable"),h=this;
d.each(b.sortables,function(){var f=false,e=this;
this.instance.positionAbs=b.positionAbs;
this.instance.helperProportions=b.helperProportions;
this.instance.offset.click=b.offset.click;
if(this.instance._intersectsWith(this.instance.containerCache)){f=true;
d.each(b.sortables,function(){this.instance.positionAbs=b.positionAbs;
this.instance.helperProportions=b.helperProportions;
this.instance.offset.click=b.offset.click;
if(this!==e&&this.instance._intersectsWith(this.instance.containerCache)&&d.contains(e.instance.element[0],this.instance.element[0])){f=false
}return f
})
}if(f){if(!this.instance.isOver){this.instance.isOver=1;
this.instance.currentItem=d(h).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",true);
this.instance.options._helper=this.instance.options.helper;
this.instance.options.helper=function(){return a.helper[0]
};
g.target=this.instance.currentItem[0];
this.instance._mouseCapture(g,true);
this.instance._mouseStart(g,true,true);
this.instance.offset.click.top=b.offset.click.top;
this.instance.offset.click.left=b.offset.click.left;
this.instance.offset.parent.left-=b.offset.parent.left-this.instance.offset.parent.left;
this.instance.offset.parent.top-=b.offset.parent.top-this.instance.offset.parent.top;
b._trigger("toSortable",g);
b.dropped=this.instance.element;
b.currentItem=b.element;
this.instance.fromOutside=b
}if(this.instance.currentItem){this.instance._mouseDrag(g)
}}else{if(this.instance.isOver){this.instance.isOver=0;
this.instance.cancelHelperRemoval=true;
this.instance.options.revert=false;
this.instance._trigger("out",g,this.instance._uiHash(this.instance));
this.instance._mouseStop(g,true);
this.instance.options.helper=this.instance.options._helper;
this.instance.currentItem.remove();
if(this.instance.placeholder){this.instance.placeholder.remove()
}b._trigger("fromSortable",g);
b.dropped=false
}}})
}});
d.ui.plugin.add("draggable","cursor",{start:function(){var b=d("body"),a=d(this).data("ui-draggable").options;
if(b.css("cursor")){a._cursor=b.css("cursor")
}b.css("cursor",a.cursor)
},stop:function(){var a=d(this).data("ui-draggable").options;
if(a._cursor){d("body").css("cursor",a._cursor)
}}});
d.ui.plugin.add("draggable","opacity",{start:function(g,b){var h=d(b.helper),a=d(this).data("ui-draggable").options;
if(h.css("opacity")){a._opacity=h.css("opacity")
}h.css("opacity",a.opacity)
},stop:function(f,b){var a=d(this).data("ui-draggable").options;
if(a._opacity){d(b.helper).css("opacity",a._opacity)
}}});
d.ui.plugin.add("draggable","scroll",{start:function(){var a=d(this).data("ui-draggable");
if(a.scrollParent[0]!==document&&a.scrollParent[0].tagName!=="HTML"){a.overflowOffset=a.scrollParent.offset()
}},drag:function(b){var g=d(this).data("ui-draggable"),a=g.options,h=false;
if(g.scrollParent[0]!==document&&g.scrollParent[0].tagName!=="HTML"){if(!a.axis||a.axis!=="x"){if((g.overflowOffset.top+g.scrollParent[0].offsetHeight)-b.pageY<a.scrollSensitivity){g.scrollParent[0].scrollTop=h=g.scrollParent[0].scrollTop+a.scrollSpeed
}else{if(b.pageY-g.overflowOffset.top<a.scrollSensitivity){g.scrollParent[0].scrollTop=h=g.scrollParent[0].scrollTop-a.scrollSpeed
}}}if(!a.axis||a.axis!=="y"){if((g.overflowOffset.left+g.scrollParent[0].offsetWidth)-b.pageX<a.scrollSensitivity){g.scrollParent[0].scrollLeft=h=g.scrollParent[0].scrollLeft+a.scrollSpeed
}else{if(b.pageX-g.overflowOffset.left<a.scrollSensitivity){g.scrollParent[0].scrollLeft=h=g.scrollParent[0].scrollLeft-a.scrollSpeed
}}}}else{if(!a.axis||a.axis!=="x"){if(b.pageY-d(document).scrollTop()<a.scrollSensitivity){h=d(document).scrollTop(d(document).scrollTop()-a.scrollSpeed)
}else{if(d(window).height()-(b.pageY-d(document).scrollTop())<a.scrollSensitivity){h=d(document).scrollTop(d(document).scrollTop()+a.scrollSpeed)
}}}if(!a.axis||a.axis!=="y"){if(b.pageX-d(document).scrollLeft()<a.scrollSensitivity){h=d(document).scrollLeft(d(document).scrollLeft()-a.scrollSpeed)
}else{if(d(window).width()-(b.pageX-d(document).scrollLeft())<a.scrollSensitivity){h=d(document).scrollLeft(d(document).scrollLeft()+a.scrollSpeed)
}}}}if(h!==false&&d.ui.ddmanager&&!a.dropBehaviour){d.ui.ddmanager.prepareOffsets(g,b)
}}});
d.ui.plugin.add("draggable","snap",{start:function(){var b=d(this).data("ui-draggable"),a=b.options;
b.snapElements=[];
d(a.snap.constructor!==String?(a.snap.items||":data(ui-draggable)"):a.snap).each(function(){var g=d(this),h=g.offset();
if(this!==b.element[0]){b.snapElements.push({item:this,width:g.outerWidth(),height:g.outerHeight(),top:h.top,left:h.left})
}})
},drag:function(B,F){var O,a,J,I,C,G,H,E,t,K,L=d(this).data("ui-draggable"),D=L.options,b=D.snapTolerance,o=F.offset.left,r=o+L.helperProportions.width,M=F.offset.top,N=M+L.helperProportions.height;
for(t=L.snapElements.length-1;
t>=0;
t--){C=L.snapElements[t].left;
G=C+L.snapElements[t].width;
H=L.snapElements[t].top;
E=H+L.snapElements[t].height;
if(r<C-b||o>G+b||N<H-b||M>E+b||!d.contains(L.snapElements[t].item.ownerDocument,L.snapElements[t].item)){if(L.snapElements[t].snapping){(L.options.snap.release&&L.options.snap.release.call(L.element,B,d.extend(L._uiHash(),{snapItem:L.snapElements[t].item})))
}L.snapElements[t].snapping=false;
continue
}if(D.snapMode!=="inner"){O=Math.abs(H-N)<=b;
a=Math.abs(E-M)<=b;
J=Math.abs(C-r)<=b;
I=Math.abs(G-o)<=b;
if(O){F.position.top=L._convertPositionTo("relative",{top:H-L.helperProportions.height,left:0}).top-L.margins.top
}if(a){F.position.top=L._convertPositionTo("relative",{top:E,left:0}).top-L.margins.top
}if(J){F.position.left=L._convertPositionTo("relative",{top:0,left:C-L.helperProportions.width}).left-L.margins.left
}if(I){F.position.left=L._convertPositionTo("relative",{top:0,left:G}).left-L.margins.left
}}K=(O||a||J||I);
if(D.snapMode!=="outer"){O=Math.abs(H-M)<=b;
a=Math.abs(E-N)<=b;
J=Math.abs(C-o)<=b;
I=Math.abs(G-r)<=b;
if(O){F.position.top=L._convertPositionTo("relative",{top:H,left:0}).top-L.margins.top
}if(a){F.position.top=L._convertPositionTo("relative",{top:E-L.helperProportions.height,left:0}).top-L.margins.top
}if(J){F.position.left=L._convertPositionTo("relative",{top:0,left:C}).left-L.margins.left
}if(I){F.position.left=L._convertPositionTo("relative",{top:0,left:G-L.helperProportions.width}).left-L.margins.left
}}if(!L.snapElements[t].snapping&&(O||a||J||I||K)){(L.options.snap.snap&&L.options.snap.snap.call(L.element,B,d.extend(L._uiHash(),{snapItem:L.snapElements[t].item})))
}L.snapElements[t].snapping=(O||a||J||I||K)
}}});
d.ui.plugin.add("draggable","stack",{start:function(){var f,a=this.data("ui-draggable").options,b=d.makeArray(d(a.stack)).sort(function(e,h){return(parseInt(d(e).css("zIndex"),10)||0)-(parseInt(d(h).css("zIndex"),10)||0)
});
if(!b.length){return
}f=parseInt(d(b[0]).css("zIndex"),10)||0;
d(b).each(function(e){d(this).css("zIndex",f+e)
});
this.css("zIndex",(f+b.length))
}});
d.ui.plugin.add("draggable","zIndex",{start:function(g,b){var h=d(b.helper),a=d(this).data("ui-draggable").options;
if(h.css("zIndex")){a._zIndex=h.css("zIndex")
}h.css("zIndex",a.zIndex)
},stop:function(f,b){var a=d(this).data("ui-draggable").options;
if(a._zIndex){d(b.helper).css("zIndex",a._zIndex)
}}})
})(jQuery);
(function(d,f){function e(b,c,a){return(b>c)&&(b<(c+a))
}d.widget("ui.droppable",{version:"1.10.4",widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var b,a=this.options,c=a.accept;
this.isover=false;
this.isout=true;
this.accept=d.isFunction(c)?c:function(h){return h.is(c)
};
this.proportions=function(){if(arguments.length){b=arguments[0]
}else{return b?b:b={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}
}};
d.ui.ddmanager.droppables[a.scope]=d.ui.ddmanager.droppables[a.scope]||[];
d.ui.ddmanager.droppables[a.scope].push(this);
(a.addClasses&&this.element.addClass("ui-droppable"))
},_destroy:function(){var a=0,b=d.ui.ddmanager.droppables[this.options.scope];
for(;
a<b.length;
a++){if(b[a]===this){b.splice(a,1)
}}this.element.removeClass("ui-droppable ui-droppable-disabled")
},_setOption:function(b,a){if(b==="accept"){this.accept=d.isFunction(a)?a:function(c){return c.is(a)
}
}d.Widget.prototype._setOption.apply(this,arguments)
},_activate:function(a){var b=d.ui.ddmanager.current;
if(this.options.activeClass){this.element.addClass(this.options.activeClass)
}if(b){this._trigger("activate",a,this.ui(b))
}},_deactivate:function(a){var b=d.ui.ddmanager.current;
if(this.options.activeClass){this.element.removeClass(this.options.activeClass)
}if(b){this._trigger("deactivate",a,this.ui(b))
}},_over:function(a){var b=d.ui.ddmanager.current;
if(!b||(b.currentItem||b.element)[0]===this.element[0]){return
}if(this.accept.call(this.element[0],(b.currentItem||b.element))){if(this.options.hoverClass){this.element.addClass(this.options.hoverClass)
}this._trigger("over",a,this.ui(b))
}},_out:function(a){var b=d.ui.ddmanager.current;
if(!b||(b.currentItem||b.element)[0]===this.element[0]){return
}if(this.accept.call(this.element[0],(b.currentItem||b.element))){if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)
}this._trigger("out",a,this.ui(b))
}},_drop:function(c,b){var h=b||d.ui.ddmanager.current,a=false;
if(!h||(h.currentItem||h.element)[0]===this.element[0]){return false
}this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var g=d.data(this,"ui-droppable");
if(g.options.greedy&&!g.options.disabled&&g.options.scope===h.options.scope&&g.accept.call(g.element[0],(h.currentItem||h.element))&&d.ui.intersect(h,d.extend(g,{offset:g.element.offset()}),g.options.tolerance)){a=true;
return false
}});
if(a){return false
}if(this.accept.call(this.element[0],(h.currentItem||h.element))){if(this.options.activeClass){this.element.removeClass(this.options.activeClass)
}if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)
}this._trigger("drop",c,this.ui(h));
return this.element
}return false
},ui:function(a){return{draggable:(a.currentItem||a.element),helper:a.helper,position:a.position,offset:a.positionAbs}
}});
d.ui.intersect=function(a,u,c){if(!u.offset){return false
}var w,v,y=(a.positionAbs||a.position.absolute).left,r=(a.positionAbs||a.position.absolute).top,z=y+a.helperProportions.width,s=r+a.helperProportions.height,x=u.offset.left,b=u.offset.top,A=x+u.proportions().width,t=b+u.proportions().height;
switch(c){case"fit":return(x<=y&&z<=A&&b<=r&&s<=t);
case"intersect":return(x<y+(a.helperProportions.width/2)&&z-(a.helperProportions.width/2)<A&&b<r+(a.helperProportions.height/2)&&s-(a.helperProportions.height/2)<t);
case"pointer":w=((a.positionAbs||a.position.absolute).left+(a.clickOffset||a.offset.click).left);
v=((a.positionAbs||a.position.absolute).top+(a.clickOffset||a.offset.click).top);
return e(v,b,u.proportions().height)&&e(w,x,u.proportions().width);
case"touch":return((r>=b&&r<=t)||(s>=b&&s<=t)||(r<b&&s>t))&&((y>=x&&y<=A)||(z>=x&&z<=A)||(y<x&&z>A));
default:return false
}};
d.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(j,b){var m,n,o=d.ui.ddmanager.droppables[j.options.scope]||[],c=b?b.type:null,a=(j.currentItem||j.element).find(":data(ui-droppable)").addBack();
droppablesLoop:for(m=0;
m<o.length;
m++){if(o[m].options.disabled||(j&&!o[m].accept.call(o[m].element[0],(j.currentItem||j.element)))){continue
}for(n=0;
n<a.length;
n++){if(a[n]===o[m].element[0]){o[m].proportions().height=0;
continue droppablesLoop
}}o[m].visible=o[m].element.css("display")!=="none";
if(!o[m].visible){continue
}if(c==="mousedown"){o[m]._activate.call(o[m],b)
}o[m].offset=o[m].element.offset();
o[m].proportions({width:o[m].element[0].offsetWidth,height:o[m].element[0].offsetHeight})
}},drop:function(c,b){var a=false;
d.each((d.ui.ddmanager.droppables[c.options.scope]||[]).slice(),function(){if(!this.options){return
}if(!this.options.disabled&&this.visible&&d.ui.intersect(c,this,this.options.tolerance)){a=this._drop.call(this,b)||a
}if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],(c.currentItem||c.element))){this.isout=true;
this.isover=false;
this._deactivate.call(this,b)
}});
return a
},dragStart:function(b,a){b.element.parentsUntil("body").bind("scroll.droppable",function(){if(!b.options.refreshPositions){d.ui.ddmanager.prepareOffsets(b,a)
}})
},drag:function(b,a){if(b.options.refreshPositions){d.ui.ddmanager.prepareOffsets(b,a)
}d.each(d.ui.ddmanager.droppables[b.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return
}var k,n,o,m=d.ui.intersect(b,this,this.options.tolerance),c=!m&&this.isover?"isout":(m&&!this.isover?"isover":null);
if(!c){return
}if(this.options.greedy){n=this.options.scope;
o=this.element.parents(":data(ui-droppable)").filter(function(){return d.data(this,"ui-droppable").options.scope===n
});
if(o.length){k=d.data(o[0],"ui-droppable");
k.greedyChild=(c==="isover")
}}if(k&&c==="isover"){k.isover=false;
k.isout=true;
k._out.call(k,a)
}this[c]=true;
this[c==="isout"?"isover":"isout"]=false;
this[c==="isover"?"_over":"_out"].call(this,a);
if(k&&c==="isout"){k.isout=false;
k.isover=true;
k._over.call(k,a)
}})
},dragStop:function(b,a){b.element.parentsUntil("body").unbind("scroll.droppable");
if(!b.options.refreshPositions){d.ui.ddmanager.prepareOffsets(b,a)
}}}
})(jQuery);
(function(e,f){var d="ui-effects-";
e.effects={effect:{}};
/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
(function(a,A){var t="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",w=/^([\-+])=\s*(\d+\.?\d*)/,x=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(g){return[g[1],g[2],g[3],g[4]]
}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(g){return[g[1]*2.55,g[2]*2.55,g[3]*2.55,g[4]]
}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(g){return[parseInt(g[1],16),parseInt(g[2],16),parseInt(g[3],16)]
}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(g){return[parseInt(g[1]+g[1],16),parseInt(g[2]+g[2],16),parseInt(g[3]+g[3],16)]
}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(g){return[g[1],g[2]/100,g[3]/100,g[4]]
}}],z=a.Color=function(j,h,k,g){return new a.Color.fn.parse(j,h,k,g)
},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},b={"byte":{floor:true,max:255},percent:{max:1},degrees:{mod:360,floor:true}},c=z.support={},C=a("<p>")[0],D,s=a.each;
C.style.cssText="background-color:rgba(1,1,1,.5)";
c.rgba=C.style.backgroundColor.indexOf("rgba")>-1;
s(u,function(h,g){g.cache="_"+h;
g.props.alpha={idx:3,type:"percent",def:1}
});
function v(j,g,h){var k=b[g.type]||{};
if(j==null){return(h||!g.def)?null:g.def
}j=k.floor?~~j:parseFloat(j);
if(isNaN(j)){return g.def
}if(k.mod){return(j+k.mod)%k.mod
}return 0>j?0:k.max<j?k.max:j
}function y(j){var g=z(),h=g._rgba=[];
j=j.toLowerCase();
s(x,function(p,m){var k,q=m.re.exec(j),n=q&&m.parse(q),o=m.space||"rgba";
if(n){k=g[o](n);
g[u[o].cache]=k[u[o].cache];
h=g._rgba=k._rgba;
return false
}});
if(h.length){if(h.join()==="0,0,0,0"){a.extend(h,D.transparent)
}return g
}return D[j]
}z.fn=a.extend(z.prototype,{parse:function(o,h,n,g){if(o===A){this._rgba=[null,null,null,null];
return this
}if(o.jquery||o.nodeType){o=a(o).css(h);
h=A
}var j=this,k=a.type(o),m=this._rgba=[];
if(h!==A){o=[o,h,n,g];
k="array"
}if(k==="string"){return this.parse(y(o)||D._default)
}if(k==="array"){s(u.rgba.props,function(q,p){m[p.idx]=v(o[p.idx],p)
});
return this
}if(k==="object"){if(o instanceof z){s(u,function(q,p){if(o[p.cache]){j[p.cache]=o[p.cache].slice()
}})
}else{s(u,function(p,r){var q=r.cache;
s(r.props,function(F,E){if(!j[q]&&r.to){if(F==="alpha"||o[F]==null){return
}j[q]=r.to(j._rgba)
}j[q][E.idx]=v(o[F],E,true)
});
if(j[q]&&a.inArray(null,j[q].slice(0,3))<0){j[q][3]=1;
if(r.from){j._rgba=r.from(j[q])
}}})
}return this
}},is:function(h){var k=z(h),g=true,j=this;
s(u,function(n,p){var o,m=k[p.cache];
if(m){o=j[p.cache]||p.to&&p.to(j._rgba)||[];
s(p.props,function(q,r){if(m[r.idx]!=null){g=(m[r.idx]===o[r.idx]);
return g
}})
}return g
});
return g
},_space:function(){var h=[],g=this;
s(u,function(k,j){if(g[j.cache]){h.push(k)
}});
return h.pop()
},transition:function(m,o){var k=z(m),j=k._space(),h=u[j],g=this.alpha()===0?z("transparent"):this,p=g[h.cache]||h.to(g._rgba),n=p.slice();
k=k[h.cache];
s(h.props,function(H,r){var I=r.idx,J=p[I],q=k[I],G=b[r.type]||{};
if(q===null){return
}if(J===null){n[I]=q
}else{if(G.mod){if(q-J>G.mod/2){J+=G.mod
}else{if(J-q>G.mod/2){J-=G.mod
}}}n[I]=v((q-J)*o+J,r)
}});
return this[j](n)
},blend:function(g){if(this._rgba[3]===1){return this
}var h=this._rgba.slice(),j=h.pop(),k=z(g)._rgba;
return z(a.map(h,function(n,m){return(1-j)*k[m]+j*n
}))
},toRgbaString:function(){var g="rgba(",h=a.map(this._rgba,function(k,j){return k==null?(j>2?1:0):k
});
if(h[3]===1){h.pop();
g="rgb("
}return g+h.join()+")"
},toHslaString:function(){var g="hsla(",h=a.map(this.hsla(),function(k,j){if(k==null){k=j>2?1:0
}if(j&&j<3){k=Math.round(k*100)+"%"
}return k
});
if(h[3]===1){h.pop();
g="hsl("
}return g+h.join()+")"
},toHexString:function(j){var h=this._rgba.slice(),g=h.pop();
if(j){h.push(~~(g*255))
}return"#"+a.map(h,function(k){k=(k||0).toString(16);
return k.length===1?"0"+k:k
}).join("")
},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()
}});
z.fn.parse.prototype=z.fn;
function B(g,h,j){j=(j+1)%1;
if(j*6<1){return g+(h-g)*j*6
}if(j*2<1){return h
}if(j*3<2){return g+(h-g)*((2/3)-j)*6
}return g
}u.hsla.to=function(q){if(q[0]==null||q[1]==null||q[2]==null){return[null,null,null,q[3]]
}var F=q[0]/255,n=q[1]/255,m=q[2]/255,j=q[3],k=Math.max(F,n,m),p=Math.min(F,n,m),h=k-p,g=k+p,r=g*0.5,o,G;
if(p===k){o=0
}else{if(F===k){o=(60*(n-m)/h)+360
}else{if(n===k){o=(60*(m-F)/h)+120
}else{o=(60*(F-n)/h)+240
}}}if(h===0){G=0
}else{if(r<=0.5){G=h/g
}else{G=h/(2-g)
}}return[Math.round(o)%360,G,r,j==null?1:j]
};
u.hsla.from=function(g){if(g[0]==null||g[1]==null||g[2]==null){return[null,null,null,g[3]]
}var h=g[0]/360,j=g[1],k=g[2],m=g[3],o=k<=0.5?k*(1+j):k+j-k*j,n=2*k-o;
return[Math.round(B(n,o,h+(1/3))*255),Math.round(B(n,o,h)*255),Math.round(B(n,o,h-(1/3))*255),m]
};
s(u,function(m,j){var k=j.props,n=j.cache,g=j.to,h=j.from;
z.fn[m]=function(q){if(g&&!this[n]){this[n]=g(this._rgba)
}if(q===A){return this[n].slice()
}var p,E=a.type(q),r=(E==="array"||E==="object")?q:arguments,o=this[n].slice();
s(k,function(I,G){var H=r[E==="object"?I:G.idx];
if(H==null){H=o[G.idx]
}o[G.idx]=v(H,G)
});
if(h){p=z(h(o));
p[n]=o;
return p
}else{return z(o)
}};
s(k,function(p,o){if(z.fn[p]){return
}z.fn[p]=function(H){var r=a.type(H),I=(p==="alpha"?(this._hsla?"hsla":"rgba"):m),J=this[I](),G=J[o.idx],q;
if(r==="undefined"){return G
}if(r==="function"){H=H.call(this,G);
r=a.type(H)
}if(H==null&&o.empty){return this
}if(r==="string"){q=w.exec(H);
if(q){H=G+parseFloat(q[2])*(q[1]==="+"?1:-1)
}}J[o.idx]=H;
return this[I](J)
}
})
});
z.hook=function(g){var h=g.split(" ");
s(h,function(k,j){a.cssHooks[j]={set:function(p,n){var m,r,o="";
if(n!=="transparent"&&(a.type(n)!=="string"||(m=y(n)))){n=z(m||n);
if(!c.rgba&&n._rgba[3]!==1){r=j==="backgroundColor"?p.parentNode:p;
while((o===""||o==="transparent")&&r&&r.style){try{o=a.css(r,"backgroundColor");
r=r.parentNode
}catch(q){}}n=n.blend(o&&o!=="transparent"?o:"_default")
}n=n.toRgbaString()
}try{p.style[j]=n
}catch(q){}}};
a.fx.step[j]=function(m){if(!m.colorInit){m.start=z(m.elem,j);
m.end=z(m.end);
m.colorInit=true
}a.cssHooks[j].set(m.elem,m.start.transition(m.end,m.pos))
}
})
};
z.hook(t);
a.cssHooks.borderColor={expand:function(g){var h={};
s(["Top","Right","Bottom","Left"],function(j,k){h["border"+k+"Color"]=g
});
return h
}};
D=a.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}
})(jQuery);
(function(){var c=["add","remove","toggle"],b={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};
e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(j,g){e.fx.step[g]=function(k){if(k.end!=="none"&&!k.setAttr||k.pos===1&&!k.setAttr){jQuery.style(k.elem,g,k.end);
k.setAttr=true
}}
});
function a(g){var o,p,n=g.ownerDocument.defaultView?g.ownerDocument.defaultView.getComputedStyle(g,null):g.currentStyle,m={};
if(n&&n.length&&n[0]&&n[n[0]]){p=n.length;
while(p--){o=n[p];
if(typeof n[o]==="string"){m[e.camelCase(o)]=n[o]
}}}else{for(o in n){if(typeof n[o]==="string"){m[o]=n[o]
}}}return m
}function h(p,n){var g={},o,m;
for(o in n){m=n[o];
if(p[o]!==m){if(!b[o]){if(e.fx.step[o]||!isNaN(parseFloat(m))){g[o]=m
}}}}return g
}if(!e.fn.addBack){e.fn.addBack=function(g){return this.add(g==null?this.prevObject:this.prevObject.filter(g))
}
}e.effects.animateClass=function(p,o,g,m){var n=e.speed(o,g,m);
return this.queue(function(){var q=e(this),j=q.attr("class")||"",r,k=n.children?q.find("*").addBack():q;
k=k.map(function(){var s=e(this);
return{el:s,start:a(this)}
});
r=function(){e.each(c,function(t,s){if(p[s]){q[s+"Class"](p[s])
}})
};
r();
k=k.map(function(){this.end=a(this.el[0]);
this.diff=h(this.start,this.end);
return this
});
q.attr("class",j);
k=k.map(function(){var t=this,v=e.Deferred(),u=e.extend({},n,{queue:false,complete:function(){v.resolve(t)
}});
this.el.animate(this.diff,u);
return v.promise()
});
e.when.apply(e,k.get()).done(function(){r();
e.each(arguments,function(){var s=this.el;
e.each(this.diff,function(t){s.css(t,"")
})
});
n.complete.call(q[0])
})
})
};
e.fn.extend({addClass:(function(g){return function(o,p,m,n){return p?e.effects.animateClass.call(this,{add:o},p,m,n):g.apply(this,arguments)
}
})(e.fn.addClass),removeClass:(function(g){return function(o,p,m,n){return arguments.length>1?e.effects.animateClass.call(this,{remove:o},p,m,n):g.apply(this,arguments)
}
})(e.fn.removeClass),toggleClass:(function(g){return function(p,q,r,n,o){if(typeof q==="boolean"||q===f){if(!r){return g.apply(this,arguments)
}else{return e.effects.animateClass.call(this,(q?{add:p}:{remove:p}),r,n,o)
}}else{return e.effects.animateClass.call(this,{toggle:p},q,r,n)
}}
})(e.fn.toggleClass),switchClass:function(p,n,o,g,m){return e.effects.animateClass.call(this,{add:n,remove:p},o,g,m)
}})
})();
(function(){e.extend(e.effects,{version:"1.10.4",save:function(j,c){for(var k=0;
k<c.length;
k++){if(c[k]!==null){j.data(d+c[k],j[0].style[c[k]])
}}},restore:function(m,c){var k,n;
for(n=0;
n<c.length;
n++){if(c[n]!==null){k=m.data(d+c[n]);
if(k===f){k=""
}m.css(c[n],k)
}}},setMode:function(h,c){if(c==="toggle"){c=h.is(":hidden")?"show":"hide"
}return c
},getBaseline:function(k,j){var c,m;
switch(k[0]){case"top":c=0;
break;
case"middle":c=0.5;
break;
case"bottom":c=1;
break;
default:c=k[0]/j.height
}switch(k[1]){case"left":m=0;
break;
case"center":m=0.5;
break;
case"right":m=1;
break;
default:m=k[1]/j.width
}return{x:m,y:c}
},createWrapper:function(p){if(p.parent().is(".ui-effects-wrapper")){return p.parent()
}var o={width:p.outerWidth(true),height:p.outerHeight(true),"float":p.css("float")},c=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),q={width:p.width(),height:p.height()},m=document.activeElement;
try{m.id
}catch(n){m=document.body
}p.wrap(c);
if(p[0]===m||e.contains(p[0],m)){e(m).focus()
}c=p.parent();
if(p.css("position")==="static"){c.css({position:"relative"});
p.css({position:"relative"})
}else{e.extend(o,{position:p.css("position"),zIndex:p.css("z-index")});
e.each(["top","left","bottom","right"],function(h,g){o[g]=p.css(g);
if(isNaN(parseInt(o[g],10))){o[g]="auto"
}});
p.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})
}p.css(q);
return c.css(o).show()
},removeWrapper:function(h){var c=document.activeElement;
if(h.parent().is(".ui-effects-wrapper")){h.parent().replaceWith(h);
if(h[0]===c||e.contains(h[0],c)){e(c).focus()
}}return h
},setTransition:function(k,c,m,j){j=j||{};
e.each(c,function(h,n){var g=k.cssUnit(n);
if(g[0]>0){j[n]=g[0]*m+g[1]
}});
return j
}});
function b(k,m,j,c){if(e.isPlainObject(k)){m=k;
k=k.effect
}k={effect:k};
if(m==null){m={}
}if(e.isFunction(m)){c=m;
j=null;
m={}
}if(typeof m==="number"||e.fx.speeds[m]){c=j;
j=m;
m={}
}if(e.isFunction(j)){c=j;
j=null
}if(m){e.extend(k,m)
}j=j||m.duration;
k.duration=e.fx.off?0:typeof j==="number"?j:j in e.fx.speeds?e.fx.speeds[j]:e.fx.speeds._default;
k.complete=c||m.complete;
return k
}function a(c){if(!c||typeof c==="number"||e.fx.speeds[c]){return true
}if(typeof c==="string"&&!e.effects.effect[c]){return true
}if(e.isFunction(c)){return true
}if(typeof c==="object"&&!c.effect){return true
}return false
}e.fn.extend({effect:function(){var m=b.apply(this,arguments),c=m.mode,o=m.queue,n=e.effects.effect[m.effect];
if(e.fx.off||!n){if(c){return this[c](m.duration,m.complete)
}else{return this.each(function(){if(m.complete){m.complete.call(this)
}})
}}function k(g){var q=e(this),h=m.complete,p=m.mode;
function j(){if(e.isFunction(h)){h.call(q[0])
}if(e.isFunction(g)){g()
}}if(q.is(":hidden")?p==="hide":p==="show"){q[p]();
j()
}else{n.call(q[0],m,j)
}}return o===false?this.each(k):this.queue(o||"fx",k)
},show:(function(c){return function(j){if(a(j)){return c.apply(this,arguments)
}else{var k=b.apply(this,arguments);
k.mode="show";
return this.effect.call(this,k)
}}
})(e.fn.show),hide:(function(c){return function(j){if(a(j)){return c.apply(this,arguments)
}else{var k=b.apply(this,arguments);
k.mode="hide";
return this.effect.call(this,k)
}}
})(e.fn.hide),toggle:(function(c){return function(j){if(a(j)||typeof j==="boolean"){return c.apply(this,arguments)
}else{var k=b.apply(this,arguments);
k.mode="toggle";
return this.effect.call(this,k)
}}
})(e.fn.toggle),cssUnit:function(k){var j=this.css(k),c=[];
e.each(["em","px","%","pt"],function(h,g){if(j.indexOf(g)>0){c=[parseFloat(j),g]
}});
return c
}})
})();
(function(){var a={};
e.each(["Quad","Cubic","Quart","Quint","Expo"],function(b,c){a[c]=function(h){return Math.pow(h,b+2)
}
});
e.extend(a,{Sine:function(b){return 1-Math.cos(b*Math.PI/2)
},Circ:function(b){return 1-Math.sqrt(1-b*b)
},Elastic:function(b){return b===0||b===1?b:-Math.pow(2,8*(b-1))*Math.sin(((b-1)*80-7.5)*Math.PI/15)
},Back:function(b){return b*b*(3*b-2)
},Bounce:function(b){var h,c=4;
while(b<((h=Math.pow(2,--c))-1)/11){}return 1/Math.pow(4,3-c)-7.5625*Math.pow((h*3-2)/22-b,2)
}});
e.each(a,function(b,c){e.easing["easeIn"+b]=c;
e.easing["easeOut"+b]=function(h){return 1-c(1-h)
};
e.easing["easeInOut"+b]=function(h){return h<0.5?c(h*2)/2:1-c(h*-2+2)/2
}
})
})()
})(jQuery);
(function(e,g){var f=/up|down|vertical/,h=/up|left|vertical|horizontal/;
e.effects.effect.blind=function(z,o){var y=e(this),b=["position","top","bottom","left","right","height","width"],d=e.effects.setMode(y,z.mode||"hide"),a=z.direction||"up",w=f.test(a),x=w?"height":"width",c=w?"top":"left",C=h.test(a),u={},D=d==="show",A,B,v;
if(y.parent().is(".ui-effects-wrapper")){e.effects.save(y.parent(),b)
}else{e.effects.save(y,b)
}y.show();
A=e.effects.createWrapper(y).css({overflow:"hidden"});
B=A[x]();
v=parseFloat(A.css(c))||0;
u[x]=D?B:0;
if(!C){y.css(w?"bottom":"right",0).css(w?"top":"left","auto").css({position:"absolute"});
u[c]=D?v:B+v
}if(D){A.css(x,0);
if(!C){A.css(c,v+B)
}}A.animate(u,{duration:z.duration,easing:z.easing,queue:false,complete:function(){if(d==="hide"){y.hide()
}e.effects.restore(y,b);
e.effects.removeWrapper(y);
o()
}})
}
})(jQuery);
(function(d,c){d.effects.effect.bounce=function(F,G){var O=d(this),N=["position","top","bottom","left","right","height","width"],H=d.effects.setMode(O,F.mode||"effect"),I=H==="hide",o=H==="show",b=F.direction||"up",M=F.distance,J=F.times||5,a=J*2+(o||I?1:0),y=F.duration/a,D=F.easing,L=(b==="up"||b==="down")?"top":"left",E=(b==="up"||b==="left"),z,K,A,C=O.queue(),B=C.length;
if(o||I){N.push("opacity")
}d.effects.save(O,N);
O.show();
d.effects.createWrapper(O);
if(!M){M=O[L==="top"?"outerHeight":"outerWidth"]()/3
}if(o){A={opacity:1};
A[L]=0;
O.css("opacity",0).css(L,E?-M*2:M*2).animate(A,y,D)
}if(I){M=M/Math.pow(2,J-1)
}A={};
A[L]=0;
for(z=0;
z<J;
z++){K={};
K[L]=(E?"-=":"+=")+M;
O.animate(K,y,D).animate(A,y,D);
M=I?M*2:M/2
}if(I){K={opacity:0};
K[L]=(E?"-=":"+=")+M;
O.animate(K,y,D)
}O.queue(function(){if(I){O.hide()
}d.effects.restore(O,N);
d.effects.removeWrapper(O);
G()
});
if(B>1){C.splice.apply(C,[1,0].concat(C.splice(B,a+1)))
}O.dequeue()
}
})(jQuery);
(function(d,c){d.effects.effect.clip=function(y,v){var x=d(this),r=["position","top","bottom","left","right","height","width"],s=d.effects.setMode(x,y.mode||"hide"),b=s==="show",o=y.direction||"vertical",t=o==="vertical",a=t?"height":"width",u=t?"top":"left",w={},A,z,B;
d.effects.save(x,r);
x.show();
A=d.effects.createWrapper(x).css({overflow:"hidden"});
z=(x[0].tagName==="IMG")?A:x;
B=z[a]();
if(b){z.css(a,0);
z.css(u,B/2)
}w[a]=b?B:0;
w[u]=b?0:B/2;
z.animate(w,{queue:false,duration:y.duration,easing:y.easing,complete:function(){if(!b){x.hide()
}d.effects.restore(x,r);
d.effects.removeWrapper(x);
v()
}})
}
})(jQuery);
(function(d,c){d.effects.effect.drop=function(u,q){var t=d(this),o=["position","top","bottom","left","right","opacity","height","width"],p=d.effects.setMode(t,u.mode||"hide"),b=p==="show",n=u.direction||"left",s=(n==="up"||n==="down")?"top":"left",a=(n==="up"||n==="left")?"pos":"neg",r={opacity:b?1:0},v;
d.effects.save(t,o);
t.show();
d.effects.createWrapper(t);
v=u.distance||t[s==="top"?"outerHeight":"outerWidth"](true)/2;
if(b){t.css("opacity",0).css(s,a==="pos"?-v:v)
}r[s]=(b?(a==="pos"?"+=":"-="):(a==="pos"?"-=":"+="))+v;
t.animate(r,{queue:false,duration:u.duration,easing:u.easing,complete:function(){if(p==="hide"){t.hide()
}d.effects.restore(t,o);
d.effects.removeWrapper(t);
q()
}})
}
})(jQuery);
(function(d,c){d.effects.effect.explode=function(z,A){var G=z.pieces?Math.round(Math.sqrt(z.pieces)):3,L=G,M=d(this),E=d.effects.setMode(M,z.mode||"hide"),b=E==="show",I=M.show().css("visibility","hidden").offset(),y=Math.ceil(M.outerWidth()/L),B=Math.ceil(M.outerHeight()/G),H=[],j,o,K,C,D,F;
function a(){H.push(this);
if(H.length===G*L){J()
}}for(j=0;
j<G;
j++){C=I.top+j*B;
F=j-(G-1)/2;
for(o=0;
o<L;
o++){K=I.left+o*y;
D=o-(L-1)/2;
M.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-o*y,top:-j*B}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:y,height:B,left:K+(b?D*y:0),top:C+(b?F*B:0),opacity:b?0:1}).animate({left:K+(b?0:D*y),top:C+(b?0:F*B),opacity:b?1:0},z.duration||500,z.easing,a)
}}function J(){M.css({visibility:"visible"});
d(H).remove();
if(!b){M.hide()
}A()
}}
})(jQuery);
(function(d,c){d.effects.effect.fade=function(a,h){var g=d(this),b=d.effects.setMode(g,a.mode||"toggle");
g.animate({opacity:b},{queue:false,duration:a.duration,easing:a.easing,complete:h})
}
})(jQuery);
(function(d,c){d.effects.effect.fold=function(D,z){var C=d(this),u=["position","top","bottom","left","right","height","width"],x=d.effects.setMode(C,D.mode||"hide"),a=x==="show",w=x==="hide",G=D.size||15,v=/([0-9]+)%/.exec(G),H=!!D.horizFirst,y=a!==H,B=y?["width","height"]:["height","width"],A=D.duration/2,E,F,b={},o={};
d.effects.save(C,u);
C.show();
E=d.effects.createWrapper(C).css({overflow:"hidden"});
F=y?[E.width(),E.height()]:[E.height(),E.width()];
if(v){G=parseInt(v[1],10)/100*F[w?0:1]
}if(a){E.css(H?{height:0,width:G}:{height:G,width:0})
}b[B[0]]=a?F[0]:G;
o[B[1]]=a?F[1]:0;
E.animate(b,A,D.easing).animate(o,A,D.easing,function(){if(w){C.hide()
}d.effects.restore(C,u);
d.effects.removeWrapper(C);
z()
})
}
})(jQuery);
(function(d,c){d.effects.effect.highlight=function(a,n){var k=d(this),m=["backgroundImage","backgroundColor","opacity"],b=d.effects.setMode(k,a.mode||"show"),j={backgroundColor:k.css("backgroundColor")};
if(b==="hide"){j.opacity=0
}d.effects.save(k,m);
k.show().css({backgroundImage:"none",backgroundColor:a.color||"#ffff99"}).animate(j,{queue:false,duration:a.duration,easing:a.easing,complete:function(){if(b==="hide"){k.hide()
}d.effects.restore(k,m);
n()
}})
}
})(jQuery);
(function(d,c){d.effects.effect.pulsate=function(A,w){var y=d(this),t=d.effects.setMode(y,A.mode||"show"),b=t==="show",s=t==="hide",a=(b||t==="hide"),r=((A.times||5)*2)+(a?1:0),x=A.duration/r,o=0,u=y.queue(),z=u.length,v;
if(b||!y.is(":visible")){y.css("opacity",0).show();
o=1
}for(v=1;
v<r;
v++){y.animate({opacity:o},x,A.easing);
o=1-o
}y.animate({opacity:o},x,A.easing);
y.queue(function(){if(s){y.hide()
}w()
});
if(z>1){u.splice.apply(u,[1,0].concat(u.splice(z,r+1)))
}y.dequeue()
}
})(jQuery);
(function(d,c){d.effects.effect.puff=function(a,q){var k=d(this),b=d.effects.setMode(k,a.mode||"hide"),n=b==="hide",m=parseInt(a.percent,10)||150,o=m/100,p={height:k.height(),width:k.width(),outerHeight:k.outerHeight(),outerWidth:k.outerWidth()};
d.extend(a,{effect:"scale",queue:false,fade:true,mode:b,complete:q,percent:n?m:100,from:n?p:{height:p.height*o,width:p.width*o,outerHeight:p.outerHeight*o,outerWidth:p.outerWidth*o}});
k.effect(a)
};
d.effects.effect.scale=function(t,q){var s=d(this),a=d.extend(true,{},t),p=d.effects.setMode(s,t.mode||"effect"),o=parseInt(t.percent,10)||(parseInt(t.percent,10)===0?0:(p==="hide"?0:100)),m=t.direction||"both",b=t.origin,r={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()},n={y:m!=="horizontal"?(o/100):1,x:m!=="vertical"?(o/100):1};
a.effect="size";
a.queue=false;
a.complete=q;
if(p!=="effect"){a.origin=b||["middle","center"];
a.restore=true
}a.from=t.from||(p==="show"?{height:0,width:0,outerHeight:0,outerWidth:0}:r);
a.to={height:r.height*n.y,width:r.width*n.x,outerHeight:r.outerHeight*n.y,outerWidth:r.outerWidth*n.x};
if(a.fade){if(p==="show"){a.from.opacity=0;
a.to.opacity=1
}if(p==="hide"){a.from.opacity=1;
a.to.opacity=0
}}s.effect(a)
};
d.effects.effect.size=function(C,D){var y,F,E,L=d(this),z=["position","top","bottom","left","right","width","height","overflow","opacity"],A=["position","top","bottom","left","right","overflow","opacity"],B=["width","height","overflow"],H=["fontSize"],w=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],K=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],G=d.effects.setMode(L,C.mode||"effect"),x=C.restore||G!=="effect",a=C.scale||"both",o=C.origin||["middle","center"],b=L.css("position"),J=x?z:A,I={height:0,width:0,outerHeight:0,outerWidth:0};
if(G==="show"){L.show()
}y={height:L.height(),width:L.width(),outerHeight:L.outerHeight(),outerWidth:L.outerWidth()};
if(C.mode==="toggle"&&G==="show"){L.from=C.to||I;
L.to=C.from||y
}else{L.from=C.from||(G==="show"?I:y);
L.to=C.to||(G==="hide"?I:y)
}E={from:{y:L.from.height/y.height,x:L.from.width/y.width},to:{y:L.to.height/y.height,x:L.to.width/y.width}};
if(a==="box"||a==="both"){if(E.from.y!==E.to.y){J=J.concat(w);
L.from=d.effects.setTransition(L,w,E.from.y,L.from);
L.to=d.effects.setTransition(L,w,E.to.y,L.to)
}if(E.from.x!==E.to.x){J=J.concat(K);
L.from=d.effects.setTransition(L,K,E.from.x,L.from);
L.to=d.effects.setTransition(L,K,E.to.x,L.to)
}}if(a==="content"||a==="both"){if(E.from.y!==E.to.y){J=J.concat(H).concat(B);
L.from=d.effects.setTransition(L,H,E.from.y,L.from);
L.to=d.effects.setTransition(L,H,E.to.y,L.to)
}}d.effects.save(L,J);
L.show();
d.effects.createWrapper(L);
L.css("overflow","hidden").css(L.from);
if(o){F=d.effects.getBaseline(o,y);
L.from.top=(y.outerHeight-L.outerHeight())*F.y;
L.from.left=(y.outerWidth-L.outerWidth())*F.x;
L.to.top=(y.outerHeight-L.to.outerHeight)*F.y;
L.to.left=(y.outerWidth-L.to.outerWidth)*F.x
}L.css(L.from);
if(a==="content"||a==="both"){w=w.concat(["marginTop","marginBottom"]).concat(H);
K=K.concat(["marginLeft","marginRight"]);
B=z.concat(w).concat(K);
L.find("*[width]").each(function(){var e=d(this),f={height:e.height(),width:e.width(),outerHeight:e.outerHeight(),outerWidth:e.outerWidth()};
if(x){d.effects.save(e,B)
}e.from={height:f.height*E.from.y,width:f.width*E.from.x,outerHeight:f.outerHeight*E.from.y,outerWidth:f.outerWidth*E.from.x};
e.to={height:f.height*E.to.y,width:f.width*E.to.x,outerHeight:f.height*E.to.y,outerWidth:f.width*E.to.x};
if(E.from.y!==E.to.y){e.from=d.effects.setTransition(e,w,E.from.y,e.from);
e.to=d.effects.setTransition(e,w,E.to.y,e.to)
}if(E.from.x!==E.to.x){e.from=d.effects.setTransition(e,K,E.from.x,e.from);
e.to=d.effects.setTransition(e,K,E.to.x,e.to)
}e.css(e.from);
e.animate(e.to,C.duration,C.easing,function(){if(x){d.effects.restore(e,B)
}})
})
}L.animate(L.to,{queue:false,duration:C.duration,easing:C.easing,complete:function(){if(L.to.opacity===0){L.css("opacity",L.from.opacity)
}if(G==="hide"){L.hide()
}d.effects.restore(L,J);
if(!x){if(b==="static"){L.css({position:"relative",top:L.to.top,left:L.to.left})
}else{d.each(["top","left"],function(f,e){L.css(e,function(k,h){var j=parseInt(h,10),g=f?L.to.left:L.to.top;
if(h==="auto"){return g+"px"
}return j+g+"px"
})
})
}}d.effects.removeWrapper(L);
D()
}})
}
})(jQuery);
(function(d,c){d.effects.effect.shake=function(C,D){var K=d(this),J=["position","top","bottom","left","right","height","width"],E=d.effects.setMode(K,C.mode||"effect"),b=C.direction||"left",I=C.distance||20,F=C.times||3,a=F*2+1,y=Math.round(C.duration/a),G=(b==="up"||b==="down")?"top":"left",H=(b==="up"||b==="left"),o={},w={},x={},z,B=K.queue(),A=B.length;
d.effects.save(K,J);
K.show();
d.effects.createWrapper(K);
o[G]=(H?"-=":"+=")+I;
w[G]=(H?"+=":"-=")+I*2;
x[G]=(H?"-=":"+=")+I*2;
K.animate(o,y,C.easing);
for(z=1;
z<F;
z++){K.animate(w,y,C.easing).animate(x,y,C.easing)
}K.animate(w,y,C.easing).animate(o,y/2,C.easing).queue(function(){if(E==="hide"){K.hide()
}d.effects.restore(K,J);
d.effects.removeWrapper(K);
D()
});
if(A>1){B.splice.apply(B,[1,0].concat(B.splice(A,a+1)))
}K.dequeue()
}
})(jQuery);
(function(d,c){d.effects.effect.slide=function(t,p){var s=d(this),n=["position","top","bottom","left","right","width","height"],o=d.effects.setMode(s,t.mode||"show"),a=o==="show",b=t.direction||"left",r=(b==="up"||b==="down")?"top":"left",u=(b==="up"||b==="left"),v,q={};
d.effects.save(s,n);
s.show();
v=t.distance||s[r==="top"?"outerHeight":"outerWidth"](true);
d.effects.createWrapper(s).css({overflow:"hidden"});
if(a){s.css(r,u?(isNaN(v)?"-"+v:-v):v)
}q[r]=(a?(u?"+=":"-="):(u?"-=":"+="))+v;
s.animate(q,{queue:false,duration:t.duration,easing:t.easing,complete:function(){if(o==="hide"){s.hide()
}d.effects.restore(s,n);
d.effects.removeWrapper(s);
p()
}})
}
})(jQuery);
(function(d,c){d.effects.effect.transfer=function(w,s){var u=d(this),p=d(w.to),a=p.css("position")==="fixed",q=d("body"),o=a?q.scrollTop():0,b=a?q.scrollLeft():0,x=p.offset(),t={top:x.top-o,left:x.left-b,height:p.innerHeight(),width:p.innerWidth()},r=u.offset(),v=d("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(w.className).css({top:r.top-o,left:r.left-b,height:u.innerHeight(),width:u.innerWidth(),position:a?"fixed":"absolute"}).animate(t,w.duration,w.easing,function(){v.remove();
s()
})
}
})(jQuery);
(function(d,c){d.widget("ui.menu",{version:"1.10.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element;
this.mouseHandled=false;
this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,d.proxy(function(a){if(this.options.disabled){a.preventDefault()
}},this));
if(this.options.disabled){this.element.addClass("ui-state-disabled").attr("aria-disabled","true")
}this._on({"mousedown .ui-menu-item > a":function(a){a.preventDefault()
},"click .ui-state-disabled > a":function(a){a.preventDefault()
},"click .ui-menu-item:has(a)":function(b){var a=d(b.target).closest(".ui-menu-item");
if(!this.mouseHandled&&a.not(".ui-state-disabled").length){this.select(b);
if(!b.isPropagationStopped()){this.mouseHandled=true
}if(a.has(".ui-menu").length){this.expand(b)
}else{if(!this.element.is(":focus")&&d(this.document[0].activeElement).closest(".ui-menu").length){this.element.trigger("focus",[true]);
if(this.active&&this.active.parents(".ui-menu").length===1){clearTimeout(this.timer)
}}}}},"mouseenter .ui-menu-item":function(b){var a=d(b.currentTarget);
a.siblings().children(".ui-state-active").removeClass("ui-state-active");
this.focus(b,a)
},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(a,f){var b=this.active||this.element.children(".ui-menu-item").eq(0);
if(!f){this.focus(a,b)
}},blur:function(a){this._delay(function(){if(!d.contains(this.element[0],this.document[0].activeElement)){this.collapseAll(a)
}})
},keydown:"_keydown"});
this.refresh();
this._on(this.document,{click:function(a){if(!d(a.target).closest(".ui-menu").length){this.collapseAll(a)
}this.mouseHandled=false
}})
},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var a=d(this);
if(a.data("ui-menu-submenu-carat")){a.remove()
}});
this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
},_keydown:function(b){var p,k,a,m,n,q=true;
function o(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
}switch(b.keyCode){case d.ui.keyCode.PAGE_UP:this.previousPage(b);
break;
case d.ui.keyCode.PAGE_DOWN:this.nextPage(b);
break;
case d.ui.keyCode.HOME:this._move("first","first",b);
break;
case d.ui.keyCode.END:this._move("last","last",b);
break;
case d.ui.keyCode.UP:this.previous(b);
break;
case d.ui.keyCode.DOWN:this.next(b);
break;
case d.ui.keyCode.LEFT:this.collapse(b);
break;
case d.ui.keyCode.RIGHT:if(this.active&&!this.active.is(".ui-state-disabled")){this.expand(b)
}break;
case d.ui.keyCode.ENTER:case d.ui.keyCode.SPACE:this._activate(b);
break;
case d.ui.keyCode.ESCAPE:this.collapse(b);
break;
default:q=false;
k=this.previousFilter||"";
a=String.fromCharCode(b.keyCode);
m=false;
clearTimeout(this.filterTimer);
if(a===k){m=true
}else{a=k+a
}n=new RegExp("^"+o(a),"i");
p=this.activeMenu.children(".ui-menu-item").filter(function(){return n.test(d(this).children("a").text())
});
p=m&&p.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):p;
if(!p.length){a=String.fromCharCode(b.keyCode);
n=new RegExp("^"+o(a),"i");
p=this.activeMenu.children(".ui-menu-item").filter(function(){return n.test(d(this).children("a").text())
})
}if(p.length){this.focus(b,p);
if(p.length>1){this.previousFilter=a;
this.filterTimer=this._delay(function(){delete this.previousFilter
},1000)
}else{delete this.previousFilter
}}else{delete this.previousFilter
}}if(q){b.preventDefault()
}},_activate:function(a){if(!this.active.is(".ui-state-disabled")){if(this.active.children("a[aria-haspopup='true']").length){this.expand(a)
}else{this.select(a)
}}},refresh:function(){var a,b=this.options.icons.submenu,f=this.element.find(this.options.menus);
this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length);
f.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=d(this),j=e.prev("a"),k=d("<span>").addClass("ui-menu-icon ui-icon "+b).data("ui-menu-submenu-carat",true);
j.attr("aria-haspopup","true").prepend(k);
e.attr("aria-labelledby",j.attr("id"))
});
a=f.add(this.element);
a.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()});
a.children(":not(.ui-menu-item)").each(function(){var e=d(this);
if(!/[^\-\u2014\u2013\s]/.test(e.text())){e.addClass("ui-widget-content ui-menu-divider")
}});
a.children(".ui-state-disabled").attr("aria-disabled","true");
if(this.active&&!d.contains(this.element[0],this.active[0])){this.blur()
}},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]
},_setOption:function(b,a){if(b==="icons"){this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(a.submenu)
}this._super(b,a)
},focus:function(g,h){var a,b;
this.blur(g,g&&g.type==="focus");
this._scrollIntoView(h);
this.active=h.first();
b=this.active.children("a").addClass("ui-state-focus");
if(this.options.role){this.element.attr("aria-activedescendant",b.attr("id"))
}this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active");
if(g&&g.type==="keydown"){this._close()
}else{this.timer=this._delay(function(){this._close()
},this.delay)
}a=h.children(".ui-menu");
if(a.length&&g&&(/^mouse/.test(g.type))){this._startOpening(a)
}this.activeMenu=h.parent();
this._trigger("focus",g,{item:h})
},_scrollIntoView:function(k){var a,m,j,o,n,b;
if(this._hasScroll()){a=parseFloat(d.css(this.activeMenu[0],"borderTopWidth"))||0;
m=parseFloat(d.css(this.activeMenu[0],"paddingTop"))||0;
j=k.offset().top-this.activeMenu.offset().top-a-m;
o=this.activeMenu.scrollTop();
n=this.activeMenu.height();
b=k.height();
if(j<0){this.activeMenu.scrollTop(o+j)
}else{if(j+b>n){this.activeMenu.scrollTop(o+j-n+b)
}}}},blur:function(a,b){if(!b){clearTimeout(this.timer)
}if(!this.active){return
}this.active.children("a").removeClass("ui-state-focus");
this.active=null;
this._trigger("blur",a,{item:this.active})
},_startOpening:function(a){clearTimeout(this.timer);
if(a.attr("aria-hidden")!=="true"){return
}this.timer=this._delay(function(){this._close();
this._open(a)
},this.delay)
},_open:function(a){var b=d.extend({of:this.active},this.options.position);
clearTimeout(this.timer);
this.element.find(".ui-menu").not(a.parents(".ui-menu")).hide().attr("aria-hidden","true");
a.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(b)
},collapseAll:function(a,b){clearTimeout(this.timer);
this.timer=this._delay(function(){var f=b?this.element:d(a&&a.target).closest(this.element.find(".ui-menu"));
if(!f.length){f=this.element
}this._close(f);
this.blur(a);
this.activeMenu=f
},this.delay)
},_close:function(a){if(!a){a=this.active?this.active.parent():this.element
}a.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")
},collapse:function(a){var b=this.active&&this.active.parent().closest(".ui-menu-item",this.element);
if(b&&b.length){this._close();
this.focus(a,b)
}},expand:function(a){var b=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();
if(b&&b.length){this._open(b.parent());
this._delay(function(){this.focus(a,b)
})
}},next:function(a){this._move("next","first",a)
},previous:function(a){this._move("prev","last",a)
},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length
},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length
},_move:function(a,g,b){var h;
if(this.active){if(a==="first"||a==="last"){h=this.active[a==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1)
}else{h=this.active[a+"All"](".ui-menu-item").eq(0)
}}if(!h||!h.length||!this.active){h=this.activeMenu.children(".ui-menu-item")[g]()
}this.focus(b,h)
},nextPage:function(b){var g,a,h;
if(!this.active){this.next(b);
return
}if(this.isLastItem()){return
}if(this._hasScroll()){a=this.active.offset().top;
h=this.element.height();
this.active.nextAll(".ui-menu-item").each(function(){g=d(this);
return g.offset().top-a-h<0
});
this.focus(b,g)
}else{this.focus(b,this.activeMenu.children(".ui-menu-item")[!this.active?"first":"last"]())
}},previousPage:function(b){var g,a,h;
if(!this.active){this.next(b);
return
}if(this.isFirstItem()){return
}if(this._hasScroll()){a=this.active.offset().top;
h=this.element.height();
this.active.prevAll(".ui-menu-item").each(function(){g=d(this);
return g.offset().top-a+h>0
});
this.focus(b,g)
}else{this.focus(b,this.activeMenu.children(".ui-menu-item").first())
}},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")
},select:function(b){this.active=this.active||d(b.target).closest(".ui-menu-item");
var a={item:this.active};
if(!this.active.has(".ui-menu").length){this.collapseAll(b,true)
}this._trigger("select",b,a)
}})
}(jQuery));
(function(d,c){d.widget("ui.progressbar",{version:"1.10.4",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue();
this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min});
this.valueDiv=d("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
this._refreshValue()
},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.valueDiv.remove()
},value:function(a){if(a===c){return this.options.value
}this.options.value=this._constrainedValue(a);
this._refreshValue()
},_constrainedValue:function(a){if(a===c){a=this.options.value
}this.indeterminate=a===false;
if(typeof a!=="number"){a=0
}return this.indeterminate?false:Math.min(this.options.max,Math.max(this.min,a))
},_setOptions:function(b){var a=b.value;
delete b.value;
this._super(b);
this.options.value=this._constrainedValue(a);
this._refreshValue()
},_setOption:function(b,a){if(b==="max"){a=Math.max(this.min,a)
}this._super(b,a)
},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)
},_refreshValue:function(){var a=this.options.value,b=this._percentage();
this.valueDiv.toggle(this.indeterminate||a>this.min).toggleClass("ui-corner-right",a===this.options.max).width(b.toFixed(0)+"%");
this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate);
if(this.indeterminate){this.element.removeAttr("aria-valuenow");
if(!this.overlayDiv){this.overlayDiv=d("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv)
}}else{this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":a});
if(this.overlayDiv){this.overlayDiv.remove();
this.overlayDiv=null
}}if(this.oldValue!==a){this.oldValue=a;
this._trigger("change")
}if(a===this.options.max){this._trigger("complete")
}}})
})(jQuery);
(function(h,g){function e(a){return parseInt(a,10)||0
}function f(a){return !isNaN(parseInt(a,10))
}h.widget("ui.resizable",h.ui.mouse,{version:"1.10.4",widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var a,n,c,m,o,d=this,b=this.options;
this.element.addClass("ui-resizable");
h.extend(this,{_aspectRatio:!!(b.aspectRatio),aspectRatio:b.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:b.helper||b.ghost||b.animate?b.helper||"ui-resizable-helper":null});
if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){this.element.wrap(h("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));
this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable"));
this.elementIsWrapper=true;
this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});
this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});
this.originalResizeStyle=this.originalElement.css("resize");
this.originalElement.css("resize","none");
this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));
this.originalElement.css({margin:this.originalElement.css("margin")});
this._proportionallyResize()
}this.handles=b.handles||(!h(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});
if(this.handles.constructor===String){if(this.handles==="all"){this.handles="n,e,s,w,se,sw,ne,nw"
}a=this.handles.split(",");
this.handles={};
for(n=0;
n<a.length;
n++){c=h.trim(a[n]);
o="ui-resizable-"+c;
m=h("<div class='ui-resizable-handle "+o+"'></div>");
m.css({zIndex:b.zIndex});
if("se"===c){m.addClass("ui-icon ui-icon-gripsmall-diagonal-se")
}this.handles[c]=".ui-resizable-"+c;
this.element.append(m)
}}this._renderAxis=function(k){var t,s,j,r;
k=k||this.element;
for(t in this.handles){if(this.handles[t].constructor===String){this.handles[t]=h(this.handles[t],this.element).show()
}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){s=h(this.handles[t],this.element);
r=/sw|ne|nw|se|n|s/.test(t)?s.outerHeight():s.outerWidth();
j=["padding",/ne|nw|n/.test(t)?"Top":/se|sw|s/.test(t)?"Bottom":/^e$/.test(t)?"Right":"Left"].join("");
k.css(j,r);
this._proportionallyResize()
}if(!h(this.handles[t]).length){continue
}}};
this._renderAxis(this.element);
this._handles=h(".ui-resizable-handle",this.element).disableSelection();
this._handles.mouseover(function(){if(!d.resizing){if(this.className){m=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
}d.axis=m&&m[1]?m[1]:"se"
}});
if(b.autoHide){this._handles.hide();
h(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(b.disabled){return
}h(this).removeClass("ui-resizable-autohide");
d._handles.show()
}).mouseleave(function(){if(b.disabled){return
}if(!d.resizing){h(this).addClass("ui-resizable-autohide");
d._handles.hide()
}})
}this._mouseInit()
},_destroy:function(){this._mouseDestroy();
var a,b=function(c){h(c).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
};
if(this.elementIsWrapper){b(this.element);
a=this.element;
this.originalElement.css({position:a.css("position"),width:a.outerWidth(),height:a.outerHeight(),top:a.css("top"),left:a.css("left")}).insertAfter(a);
a.remove()
}this.originalElement.css("resize",this.originalResizeStyle);
b(this.originalElement);
return this
},_mouseCapture:function(b){var c,a,d=false;
for(c in this.handles){a=h(this.handles[c])[0];
if(a===b.target||h.contains(a,b.target)){d=true
}}return !this.options.disabled&&d
},_mouseStart:function(m){var a,d,b,c=this.options,n=this.element.position(),o=this.element;
this.resizing=true;
if((/absolute/).test(o.css("position"))){o.css({position:"absolute",top:o.css("top"),left:o.css("left")})
}else{if(o.is(".ui-draggable")){o.css({position:"absolute",top:n.top,left:n.left})
}}this._renderProxy();
a=e(this.helper.css("left"));
d=e(this.helper.css("top"));
if(c.containment){a+=h(c.containment).scrollLeft()||0;
d+=h(c.containment).scrollTop()||0
}this.offset=this.helper.offset();
this.position={left:a,top:d};
this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:o.width(),height:o.height()};
this.originalSize=this._helper?{width:o.outerWidth(),height:o.outerHeight()}:{width:o.width(),height:o.height()};
this.originalPosition={left:a,top:d};
this.sizeDiff={width:o.outerWidth()-o.width(),height:o.outerHeight()-o.height()};
this.originalMousePosition={left:m.pageX,top:m.pageY};
this.aspectRatio=(typeof c.aspectRatio==="number")?c.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);
b=h(".ui-resizable-"+this.axis).css("cursor");
h("body").css("cursor",b==="auto"?this.axis+"-resize":b);
o.addClass("ui-resizable-resizing");
this._propagate("start",m);
return true
},_mouseDrag:function(z){var t,x=this.helper,s={},v=this.originalMousePosition,r=this.axis,c=this.position.top,y=this.position.left,d=this.size.width,u=this.size.height,a=(z.pageX-v.left)||0,b=(z.pageY-v.top)||0,w=this._change[r];
if(!w){return false
}t=w.apply(this,[z,a,b]);
this._updateVirtualBoundaries(z.shiftKey);
if(this._aspectRatio||z.shiftKey){t=this._updateRatio(t,z)
}t=this._respectSize(t,z);
this._updateCache(t);
this._propagate("resize",z);
if(this.position.top!==c){s.top=this.position.top+"px"
}if(this.position.left!==y){s.left=this.position.left+"px"
}if(this.size.width!==d){s.width=this.size.width+"px"
}if(this.size.height!==u){s.height=this.size.height+"px"
}x.css(s);
if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize()
}if(!h.isEmptyObject(s)){this._trigger("resize",z,this.ui())
}return false
},_mouseStop:function(q){this.resizing=false;
var r,t,s,d,a,o,b,p=this.options,c=this;
if(this._helper){r=this._proportionallyResizeElements;
t=r.length&&(/textarea/i).test(r[0].nodeName);
s=t&&h.ui.hasScroll(r[0],"left")?0:c.sizeDiff.height;
d=t?0:c.sizeDiff.width;
a={width:(c.helper.width()-d),height:(c.helper.height()-s)};
o=(parseInt(c.element.css("left"),10)+(c.position.left-c.originalPosition.left))||null;
b=(parseInt(c.element.css("top"),10)+(c.position.top-c.originalPosition.top))||null;
if(!p.animate){this.element.css(h.extend(a,{top:b,left:o}))
}c.helper.height(c.size.height);
c.helper.width(c.size.width);
if(this._helper&&!p.animate){this._proportionallyResize()
}}h("body").css("cursor","auto");
this.element.removeClass("ui-resizable-resizing");
this._propagate("stop",q);
if(this._helper){this.helper.remove()
}return false
},_updateVirtualBoundaries:function(m){var c,d,n,a,o,b=this.options;
o={minWidth:f(b.minWidth)?b.minWidth:0,maxWidth:f(b.maxWidth)?b.maxWidth:Infinity,minHeight:f(b.minHeight)?b.minHeight:0,maxHeight:f(b.maxHeight)?b.maxHeight:Infinity};
if(this._aspectRatio||m){c=o.minHeight*this.aspectRatio;
n=o.minWidth/this.aspectRatio;
d=o.maxHeight*this.aspectRatio;
a=o.maxWidth/this.aspectRatio;
if(c>o.minWidth){o.minWidth=c
}if(n>o.minHeight){o.minHeight=n
}if(d<o.maxWidth){o.maxWidth=d
}if(a<o.maxHeight){o.maxHeight=a
}}this._vBoundaries=o
},_updateCache:function(a){this.offset=this.helper.offset();
if(f(a.left)){this.position.left=a.left
}if(f(a.top)){this.position.top=a.top
}if(f(a.height)){this.size.height=a.height
}if(f(a.width)){this.size.width=a.width
}},_updateRatio:function(b){var a=this.position,c=this.size,d=this.axis;
if(f(b.height)){b.width=(b.height*this.aspectRatio)
}else{if(f(b.width)){b.height=(b.width/this.aspectRatio)
}}if(d==="sw"){b.left=a.left+(c.width-b.width);
b.top=null
}if(d==="nw"){b.top=a.top+(c.height-b.height);
b.left=a.left+(c.width-b.width)
}return b
},_respectSize:function(q){var t=this._vBoundaries,c=this.axis,a=f(q.width)&&t.maxWidth&&(t.maxWidth<q.width),o=f(q.height)&&t.maxHeight&&(t.maxHeight<q.height),s=f(q.width)&&t.minWidth&&(t.minWidth>q.width),b=f(q.height)&&t.minHeight&&(t.minHeight>q.height),u=this.originalPosition.left+this.originalSize.width,d=this.position.top+this.size.height,r=/sw|nw|w/.test(c),v=/nw|ne|n/.test(c);
if(s){q.width=t.minWidth
}if(b){q.height=t.minHeight
}if(a){q.width=t.maxWidth
}if(o){q.height=t.maxHeight
}if(s&&r){q.left=u-t.minWidth
}if(a&&r){q.left=u-t.maxWidth
}if(b&&v){q.top=d-t.minHeight
}if(o&&v){q.top=d-t.maxHeight
}if(!q.width&&!q.height&&!q.left&&q.top){q.top=null
}else{if(!q.width&&!q.height&&!q.top&&q.left){q.left=null
}}return q
},_proportionallyResize:function(){if(!this._proportionallyResizeElements.length){return
}var c,j,a,m,b,d=this.helper||this.element;
for(c=0;
c<this._proportionallyResizeElements.length;
c++){b=this._proportionallyResizeElements[c];
if(!this.borderDif){this.borderDif=[];
a=[b.css("borderTopWidth"),b.css("borderRightWidth"),b.css("borderBottomWidth"),b.css("borderLeftWidth")];
m=[b.css("paddingTop"),b.css("paddingRight"),b.css("paddingBottom"),b.css("paddingLeft")];
for(j=0;
j<a.length;
j++){this.borderDif[j]=(parseInt(a[j],10)||0)+(parseInt(m[j],10)||0)
}}b.css({height:(d.height()-this.borderDif[0]-this.borderDif[2])||0,width:(d.width()-this.borderDif[1]-this.borderDif[3])||0})
}},_renderProxy:function(){var b=this.element,a=this.options;
this.elementOffset=b.offset();
if(this._helper){this.helper=this.helper||h("<div style='overflow:hidden;'></div>");
this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++a.zIndex});
this.helper.appendTo("body").disableSelection()
}else{this.helper=this.element
}},_change:{e:function(a,b){return{width:this.originalSize.width+b}
},w:function(b,d){var c=this.originalSize,a=this.originalPosition;
return{left:a.left+d,width:c.width-d}
},n:function(b,d,j){var c=this.originalSize,a=this.originalPosition;
return{top:a.top+j,height:c.height-j}
},s:function(a,b,c){return{height:this.originalSize.height+c}
},se:function(a,b,c){return h.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[a,b,c]))
},sw:function(a,b,c){return h.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[a,b,c]))
},ne:function(a,b,c){return h.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[a,b,c]))
},nw:function(a,b,c){return h.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[a,b,c]))
}},_propagate:function(a,b){h.ui.plugin.call(this,a,[b,this.ui()]);
(a!=="resize"&&this._trigger(a,b,this.ui()))
},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}
}});
h.ui.plugin.add("resizable","animate",{stop:function(q){var b=h(this).data("ui-resizable"),o=b.options,r=b._proportionallyResizeElements,t=r.length&&(/textarea/i).test(r[0].nodeName),s=t&&h.ui.hasScroll(r[0],"left")?0:b.sizeDiff.height,c=t?0:b.sizeDiff.width,p={width:(b.size.width-c),height:(b.size.height-s)},d=(parseInt(b.element.css("left"),10)+(b.position.left-b.originalPosition.left))||null,a=(parseInt(b.element.css("top"),10)+(b.position.top-b.originalPosition.top))||null;
b.element.animate(h.extend(p,a&&d?{top:a,left:d}:{}),{duration:o.animateDuration,easing:o.animateEasing,step:function(){var j={width:parseInt(b.element.css("width"),10),height:parseInt(b.element.css("height"),10),top:parseInt(b.element.css("top"),10),left:parseInt(b.element.css("left"),10)};
if(r&&r.length){h(r[0]).css({width:j.width,height:j.height})
}b._updateCache(j);
b._propagate("resize",q)
}})
}});
h.ui.plugin.add("resizable","containment",{start:function(){var d,v,b,x,o,u,a,c=h(this).data("ui-resizable"),p=c.options,s=c.element,w=p.containment,t=(w instanceof h)?w.get(0):(/parent/.test(w))?s.parent().get(0):w;
if(!t){return
}c.containerElement=h(t);
if(/document/.test(w)||w===document){c.containerOffset={left:0,top:0};
c.containerPosition={left:0,top:0};
c.parentData={element:h(document),left:0,top:0,width:h(document).width(),height:h(document).height()||document.body.parentNode.scrollHeight}
}else{d=h(t);
v=[];
h(["Top","Right","Left","Bottom"]).each(function(j,k){v[j]=e(d.css("padding"+k))
});
c.containerOffset=d.offset();
c.containerPosition=d.position();
c.containerSize={height:(d.innerHeight()-v[3]),width:(d.innerWidth()-v[1])};
b=c.containerOffset;
x=c.containerSize.height;
o=c.containerSize.width;
u=(h.ui.hasScroll(t,"left")?t.scrollWidth:o);
a=(h.ui.hasScroll(t)?t.scrollHeight:x);
c.parentData={element:t,left:b.left,top:b.top,width:u,height:a}
}},resize:function(w){var r,a,s,t,o=h(this).data("ui-resizable"),u=o.options,c=o.containerOffset,d=o.position,b=o._aspectRatio||w.shiftKey,x={top:0,left:0},v=o.containerElement;
if(v[0]!==document&&(/static/).test(v.css("position"))){x=c
}if(d.left<(o._helper?c.left:0)){o.size.width=o.size.width+(o._helper?(o.position.left-c.left):(o.position.left-x.left));
if(b){o.size.height=o.size.width/o.aspectRatio
}o.position.left=u.helper?c.left:0
}if(d.top<(o._helper?c.top:0)){o.size.height=o.size.height+(o._helper?(o.position.top-c.top):o.position.top);
if(b){o.size.width=o.size.height*o.aspectRatio
}o.position.top=o._helper?c.top:0
}o.offset.left=o.parentData.left+o.position.left;
o.offset.top=o.parentData.top+o.position.top;
r=Math.abs((o._helper?o.offset.left-x.left:(o.offset.left-x.left))+o.sizeDiff.width);
a=Math.abs((o._helper?o.offset.top-x.top:(o.offset.top-c.top))+o.sizeDiff.height);
s=o.containerElement.get(0)===o.element.parent().get(0);
t=/relative|absolute/.test(o.containerElement.css("position"));
if(s&&t){r-=Math.abs(o.parentData.left)
}if(r+o.size.width>=o.parentData.width){o.size.width=o.parentData.width-r;
if(b){o.size.height=o.size.width/o.aspectRatio
}}if(a+o.size.height>=o.parentData.height){o.size.height=o.parentData.height-a;
if(b){o.size.width=o.size.height*o.aspectRatio
}}},stop:function(){var d=h(this).data("ui-resizable"),r=d.options,c=d.containerOffset,s=d.containerPosition,q=d.containerElement,p=h(d.helper),a=p.offset(),b=p.outerWidth()-d.sizeDiff.width,o=p.outerHeight()-d.sizeDiff.height;
if(d._helper&&!r.animate&&(/relative/).test(q.css("position"))){h(this).css({left:a.left-s.left-c.left,width:b,height:o})
}if(d._helper&&!r.animate&&(/static/).test(q.css("position"))){h(this).css({left:a.left-s.left-c.left,width:b,height:o})
}}});
h.ui.plugin.add("resizable","alsoResize",{start:function(){var c=h(this).data("ui-resizable"),a=c.options,b=function(d){h(d).each(function(){var j=h(this);
j.data("ui-resizable-alsoresize",{width:parseInt(j.width(),10),height:parseInt(j.height(),10),left:parseInt(j.css("left"),10),top:parseInt(j.css("top"),10)})
})
};
if(typeof(a.alsoResize)==="object"&&!a.alsoResize.parentNode){if(a.alsoResize.length){a.alsoResize=a.alsoResize[0];
b(a.alsoResize)
}else{h.each(a.alsoResize,function(d){b(d)
})
}}else{b(a.alsoResize)
}},resize:function(n,d){var o=h(this).data("ui-resizable"),c=o.options,m=o.originalSize,a=o.originalPosition,b={height:(o.size.height-m.height)||0,width:(o.size.width-m.width)||0,top:(o.position.top-a.top)||0,left:(o.position.left-a.left)||0},p=function(j,k){h(j).each(function(){var t=h(this),s=h(this).data("ui-resizable-alsoresize"),u={},v=k&&k.length?k:t.parents(d.originalElement[0]).length?["width","height"]:["width","height","top","left"];
h.each(v,function(w,q){var r=(s[q]||0)+(b[q]||0);
if(r&&r>=0){u[q]=r||null
}});
t.css(u)
})
};
if(typeof(c.alsoResize)==="object"&&!c.alsoResize.nodeType){h.each(c.alsoResize,function(j,k){p(j,k)
})
}else{p(c.alsoResize)
}},stop:function(){h(this).removeData("resizable-alsoresize")
}});
h.ui.plugin.add("resizable","ghost",{start:function(){var b=h(this).data("ui-resizable"),a=b.options,c=b.size;
b.ghost=b.originalElement.clone();
b.ghost.css({opacity:0.25,display:"block",position:"relative",height:c.height,width:c.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof a.ghost==="string"?a.ghost:"");
b.ghost.appendTo(b.helper)
},resize:function(){var a=h(this).data("ui-resizable");
if(a.ghost){a.ghost.css({position:"relative",height:a.size.height,width:a.size.width})
}},stop:function(){var a=h(this).data("ui-resizable");
if(a.ghost&&a.helper){a.helper.get(0).removeChild(a.ghost.get(0))
}}});
h.ui.plugin.add("resizable","grid",{resize:function(){var a=h(this).data("ui-resizable"),z=a.options,H=a.size,x=a.originalSize,d=a.originalPosition,G=a.axis,C=typeof z.grid==="number"?[z.grid,z.grid]:z.grid,c=(C[0]||1),o=(C[1]||1),A=Math.round((H.width-x.width)/c)*c,B=Math.round((H.height-x.height)/o)*o,w=x.width+A,D=x.height+B,y=z.maxWidth&&(z.maxWidth<w),F=z.maxHeight&&(z.maxHeight<D),b=z.minWidth&&(z.minWidth>w),E=z.minHeight&&(z.minHeight>D);
z.grid=C;
if(b){w=w+c
}if(E){D=D+o
}if(y){w=w-c
}if(F){D=D-o
}if(/^(se|s|e)$/.test(G)){a.size.width=w;
a.size.height=D
}else{if(/^(ne)$/.test(G)){a.size.width=w;
a.size.height=D;
a.position.top=d.top-B
}else{if(/^(sw)$/.test(G)){a.size.width=w;
a.size.height=D;
a.position.left=d.left-A
}else{if(D-o>0){a.size.height=D;
a.position.top=d.top-B
}else{a.size.height=o;
a.position.top=d.top+x.height-o
}if(w-c>0){a.size.width=w;
a.position.left=d.left-A
}else{a.size.width=c;
a.position.left=d.left+x.width-c
}}}}}})
})(jQuery);
(function(d,c){d.widget("ui.selectable",d.ui.mouse,{version:"1.10.4",options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var a,b=this;
this.element.addClass("ui-selectable");
this.dragged=false;
this.refresh=function(){a=d(b.options.filter,b.element[0]);
a.addClass("ui-selectee");
a.each(function(){var h=d(this),g=h.offset();
d.data(this,"selectable-item",{element:this,$element:h,left:g.left,top:g.top,right:g.left+h.outerWidth(),bottom:g.top+h.outerHeight(),startselected:false,selected:h.hasClass("ui-selected"),selecting:h.hasClass("ui-selecting"),unselecting:h.hasClass("ui-unselecting")})
})
};
this.refresh();
this.selectees=a.addClass("ui-selectee");
this._mouseInit();
this.helper=d("<div class='ui-selectable-helper'></div>")
},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");
this.element.removeClass("ui-selectable ui-selectable-disabled");
this._mouseDestroy()
},_mouseStart:function(a){var b=this,f=this.options;
this.opos=[a.pageX,a.pageY];
if(this.options.disabled){return
}this.selectees=d(f.filter,this.element[0]);
this._trigger("start",a);
d(f.appendTo).append(this.helper);
this.helper.css({left:a.pageX,top:a.pageY,width:0,height:0});
if(f.autoRefresh){this.refresh()
}this.selectees.filter(".ui-selected").each(function(){var e=d.data(this,"selectable-item");
e.startselected=true;
if(!a.metaKey&&!a.ctrlKey){e.$element.removeClass("ui-selected");
e.selected=false;
e.$element.addClass("ui-unselecting");
e.unselecting=true;
b._trigger("unselecting",a,{unselecting:e.element})
}});
d(a.target).parents().addBack().each(function(){var h,e=d.data(this,"selectable-item");
if(e){h=(!a.metaKey&&!a.ctrlKey)||!e.$element.hasClass("ui-selected");
e.$element.removeClass(h?"ui-unselecting":"ui-selected").addClass(h?"ui-selecting":"ui-unselecting");
e.unselecting=!h;
e.selecting=h;
e.selected=h;
if(h){b._trigger("selecting",a,{selecting:e.element})
}else{b._trigger("unselecting",a,{unselecting:e.element})
}return false
}})
},_mouseDrag:function(a){this.dragged=true;
if(this.options.disabled){return
}var m,b=this,o=this.options,p=this.opos[0],k=this.opos[1],q=a.pageX,n=a.pageY;
if(p>q){m=q;
q=p;
p=m
}if(k>n){m=n;
n=k;
k=m
}this.helper.css({left:p,top:k,width:q-p,height:n-k});
this.selectees.each(function(){var f=d.data(this,"selectable-item"),e=false;
if(!f||f.element===b.element[0]){return
}if(o.tolerance==="touch"){e=(!(f.left>q||f.right<p||f.top>n||f.bottom<k))
}else{if(o.tolerance==="fit"){e=(f.left>p&&f.right<q&&f.top>k&&f.bottom<n)
}}if(e){if(f.selected){f.$element.removeClass("ui-selected");
f.selected=false
}if(f.unselecting){f.$element.removeClass("ui-unselecting");
f.unselecting=false
}if(!f.selecting){f.$element.addClass("ui-selecting");
f.selecting=true;
b._trigger("selecting",a,{selecting:f.element})
}}else{if(f.selecting){if((a.metaKey||a.ctrlKey)&&f.startselected){f.$element.removeClass("ui-selecting");
f.selecting=false;
f.$element.addClass("ui-selected");
f.selected=true
}else{f.$element.removeClass("ui-selecting");
f.selecting=false;
if(f.startselected){f.$element.addClass("ui-unselecting");
f.unselecting=true
}b._trigger("unselecting",a,{unselecting:f.element})
}}if(f.selected){if(!a.metaKey&&!a.ctrlKey&&!f.startselected){f.$element.removeClass("ui-selected");
f.selected=false;
f.$element.addClass("ui-unselecting");
f.unselecting=true;
b._trigger("unselecting",a,{unselecting:f.element})
}}}});
return false
},_mouseStop:function(a){var b=this;
this.dragged=false;
d(".ui-unselecting",this.element[0]).each(function(){var f=d.data(this,"selectable-item");
f.$element.removeClass("ui-unselecting");
f.unselecting=false;
f.startselected=false;
b._trigger("unselected",a,{unselected:f.element})
});
d(".ui-selecting",this.element[0]).each(function(){var f=d.data(this,"selectable-item");
f.$element.removeClass("ui-selecting").addClass("ui-selected");
f.selecting=false;
f.selected=true;
f.startselected=true;
b._trigger("selected",a,{selected:f.element})
});
this._trigger("stop",a);
this.helper.remove();
return false
}})
})(jQuery);
(function(d,f){var e=5;
d.widget("ui.slider",d.ui.mouse,{version:"1.10.4",widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=false;
this._mouseSliding=false;
this._animateOff=true;
this._handleIndex=null;
this._detectOrientation();
this._mouseInit();
this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all");
this._refresh();
this._setOption("disabled",this.options.disabled);
this._animateOff=false
},_refresh:function(){this._createRange();
this._createHandles();
this._setupEvents();
this._refreshValue()
},_createHandles:function(){var c,n,m=this.options,a=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),b="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",k=[];
n=(m.values&&m.values.length)||1;
if(a.length>n){a.slice(n).remove();
a=a.slice(0,n)
}for(c=a.length;
c<n;
c++){k.push(b)
}this.handles=a.add(d(k.join("")).appendTo(this.element));
this.handle=this.handles.eq(0);
this.handles.each(function(g){d(this).data("ui-slider-handle-index",g)
})
},_createRange:function(){var b=this.options,a="";
if(b.range){if(b.range===true){if(!b.values){b.values=[this._valueMin(),this._valueMin()]
}else{if(b.values.length&&b.values.length!==2){b.values=[b.values[0],b.values[0]]
}else{if(d.isArray(b.values)){b.values=b.values.slice(0)
}}}}if(!this.range||!this.range.length){this.range=d("<div></div>").appendTo(this.element);
a="ui-slider-range ui-widget-header ui-corner-all"
}else{this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""})
}this.range.addClass(a+((b.range==="min"||b.range==="max")?" ui-slider-range-"+b.range:""))
}else{if(this.range){this.range.remove()
}this.range=null
}},_setupEvents:function(){var a=this.handles.add(this.range).filter("a");
this._off(a);
this._on(a,this._handleEvents);
this._hoverable(a);
this._focusable(a)
},_destroy:function(){this.handles.remove();
if(this.range){this.range.remove()
}this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");
this._mouseDestroy()
},_mouseCapture:function(t){var p,b,u,r,c,a,q,v,o=this,s=this.options;
if(s.disabled){return false
}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};
this.elementOffset=this.element.offset();
p={x:t.pageX,y:t.pageY};
b=this._normValueFromMouse(p);
u=this._valueMax()-this._valueMin()+1;
this.handles.each(function(h){var g=Math.abs(b-o.values(h));
if((u>g)||(u===g&&(h===o._lastChangedValue||o.values(h)===s.min))){u=g;
r=d(this);
c=h
}});
a=this._start(t,c);
if(a===false){return false
}this._mouseSliding=true;
this._handleIndex=c;
r.addClass("ui-state-active").focus();
q=r.offset();
v=!d(t.target).parents().addBack().is(".ui-slider-handle");
this._clickOffset=v?{left:0,top:0}:{left:t.pageX-q.left-(r.width()/2),top:t.pageY-q.top-(r.height()/2)-(parseInt(r.css("borderTopWidth"),10)||0)-(parseInt(r.css("borderBottomWidth"),10)||0)+(parseInt(r.css("marginTop"),10)||0)};
if(!this.handles.hasClass("ui-state-hover")){this._slide(t,c,b)
}this._animateOff=true;
return true
},_mouseStart:function(){return true
},_mouseDrag:function(a){var c={x:a.pageX,y:a.pageY},b=this._normValueFromMouse(c);
this._slide(a,this._handleIndex,b);
return false
},_mouseStop:function(a){this.handles.removeClass("ui-state-active");
this._mouseSliding=false;
this._stop(a,this._handleIndex);
this._change(a,this._handleIndex);
this._handleIndex=null;
this._clickOffset=null;
this._animateOff=false;
return false
},_detectOrientation:function(){this.orientation=(this.options.orientation==="vertical")?"vertical":"horizontal"
},_normValueFromMouse:function(k){var m,b,c,j,a;
if(this.orientation==="horizontal"){m=this.elementSize.width;
b=k.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)
}else{m=this.elementSize.height;
b=k.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)
}c=(b/m);
if(c>1){c=1
}if(c<0){c=0
}if(this.orientation==="vertical"){c=1-c
}j=this._valueMax()-this._valueMin();
a=this._valueMin()+c*j;
return this._trimAlignValue(a)
},_start:function(a,b){var c={handle:this.handles[b],value:this.value()};
if(this.options.values&&this.options.values.length){c.value=this.values(b);
c.values=this.values()
}return this._trigger("start",a,c)
},_slide:function(b,c,j){var m,k,a;
if(this.options.values&&this.options.values.length){m=this.values(c?0:1);
if((this.options.values.length===2&&this.options.range===true)&&((c===0&&j>m)||(c===1&&j<m))){j=m
}if(j!==this.values(c)){k=this.values();
k[c]=j;
a=this._trigger("slide",b,{handle:this.handles[c],value:j,values:k});
m=this.values(c?0:1);
if(a!==false){this.values(c,j)
}}}else{if(j!==this.value()){a=this._trigger("slide",b,{handle:this.handles[c],value:j});
if(a!==false){this.value(j)
}}}},_stop:function(a,b){var c={handle:this.handles[b],value:this.value()};
if(this.options.values&&this.options.values.length){c.value=this.values(b);
c.values=this.values()
}this._trigger("stop",a,c)
},_change:function(a,b){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[b],value:this.value()};
if(this.options.values&&this.options.values.length){c.value=this.values(b);
c.values=this.values()
}this._lastChangedValue=b;
this._trigger("change",a,c)
}},value:function(a){if(arguments.length){this.options.value=this._trimAlignValue(a);
this._refreshValue();
this._change(null,0);
return
}return this._value()
},values:function(j,a){var b,k,c;
if(arguments.length>1){this.options.values[j]=this._trimAlignValue(a);
this._refreshValue();
this._change(null,j);
return
}if(arguments.length){if(d.isArray(arguments[0])){b=this.options.values;
k=arguments[0];
for(c=0;
c<b.length;
c+=1){b[c]=this._trimAlignValue(k[c]);
this._change(null,c)
}this._refreshValue()
}else{if(this.options.values&&this.options.values.length){return this._values(j)
}else{return this.value()
}}}else{return this._values()
}},_setOption:function(c,b){var h,a=0;
if(c==="range"&&this.options.range===true){if(b==="min"){this.options.value=this._values(0);
this.options.values=null
}else{if(b==="max"){this.options.value=this._values(this.options.values.length-1);
this.options.values=null
}}}if(d.isArray(this.options.values)){a=this.options.values.length
}d.Widget.prototype._setOption.apply(this,arguments);
switch(c){case"orientation":this._detectOrientation();
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);
this._refreshValue();
break;
case"value":this._animateOff=true;
this._refreshValue();
this._change(null,0);
this._animateOff=false;
break;
case"values":this._animateOff=true;
this._refreshValue();
for(h=0;
h<a;
h+=1){this._change(null,h)
}this._animateOff=false;
break;
case"min":case"max":this._animateOff=true;
this._refreshValue();
this._animateOff=false;
break;
case"range":this._animateOff=true;
this._refresh();
this._animateOff=false;
break
}},_value:function(){var a=this.options.value;
a=this._trimAlignValue(a);
return a
},_values:function(h){var a,b,c;
if(arguments.length){a=this.options.values[h];
a=this._trimAlignValue(a);
return a
}else{if(this.options.values&&this.options.values.length){b=this.options.values.slice();
for(c=0;
c<b.length;
c+=1){b[c]=this._trimAlignValue(b[c])
}return b
}else{return[]
}}},_trimAlignValue:function(a){if(a<=this._valueMin()){return this._valueMin()
}if(a>=this._valueMax()){return this._valueMax()
}var h=(this.options.step>0)?this.options.step:1,b=(a-this._valueMin())%h,c=a-b;
if(Math.abs(b)*2>=h){c+=(b>0)?h:(-h)
}return parseFloat(c.toFixed(5))
},_valueMin:function(){return this.options.min
},_valueMax:function(){return this.options.max
},_refreshValue:function(){var o,p,b,n,a,q=this.options.range,r=this.options,c=this,s=(!this._animateOff)?r.animate:false,t={};
if(this.options.values&&this.options.values.length){this.handles.each(function(g){p=(c.values(g)-c._valueMin())/(c._valueMax()-c._valueMin())*100;
t[c.orientation==="horizontal"?"left":"bottom"]=p+"%";
d(this).stop(1,1)[s?"animate":"css"](t,r.animate);
if(c.options.range===true){if(c.orientation==="horizontal"){if(g===0){c.range.stop(1,1)[s?"animate":"css"]({left:p+"%"},r.animate)
}if(g===1){c.range[s?"animate":"css"]({width:(p-o)+"%"},{queue:false,duration:r.animate})
}}else{if(g===0){c.range.stop(1,1)[s?"animate":"css"]({bottom:(p)+"%"},r.animate)
}if(g===1){c.range[s?"animate":"css"]({height:(p-o)+"%"},{queue:false,duration:r.animate})
}}}o=p
})
}else{b=this.value();
n=this._valueMin();
a=this._valueMax();
p=(a!==n)?(b-n)/(a-n)*100:0;
t[this.orientation==="horizontal"?"left":"bottom"]=p+"%";
this.handle.stop(1,1)[s?"animate":"css"](t,r.animate);
if(q==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[s?"animate":"css"]({width:p+"%"},r.animate)
}if(q==="max"&&this.orientation==="horizontal"){this.range[s?"animate":"css"]({width:(100-p)+"%"},{queue:false,duration:r.animate})
}if(q==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[s?"animate":"css"]({height:p+"%"},r.animate)
}if(q==="max"&&this.orientation==="vertical"){this.range[s?"animate":"css"]({height:(100-p)+"%"},{queue:false,duration:r.animate})
}}},_handleEvents:{keydown:function(b){var a,j,k,c,m=d(b.target).data("ui-slider-handle-index");
switch(b.keyCode){case d.ui.keyCode.HOME:case d.ui.keyCode.END:case d.ui.keyCode.PAGE_UP:case d.ui.keyCode.PAGE_DOWN:case d.ui.keyCode.UP:case d.ui.keyCode.RIGHT:case d.ui.keyCode.DOWN:case d.ui.keyCode.LEFT:b.preventDefault();
if(!this._keySliding){this._keySliding=true;
d(b.target).addClass("ui-state-active");
a=this._start(b,m);
if(a===false){return
}}break
}c=this.options.step;
if(this.options.values&&this.options.values.length){j=k=this.values(m)
}else{j=k=this.value()
}switch(b.keyCode){case d.ui.keyCode.HOME:k=this._valueMin();
break;
case d.ui.keyCode.END:k=this._valueMax();
break;
case d.ui.keyCode.PAGE_UP:k=this._trimAlignValue(j+((this._valueMax()-this._valueMin())/e));
break;
case d.ui.keyCode.PAGE_DOWN:k=this._trimAlignValue(j-((this._valueMax()-this._valueMin())/e));
break;
case d.ui.keyCode.UP:case d.ui.keyCode.RIGHT:if(j===this._valueMax()){return
}k=this._trimAlignValue(j+c);
break;
case d.ui.keyCode.DOWN:case d.ui.keyCode.LEFT:if(j===this._valueMin()){return
}k=this._trimAlignValue(j-c);
break
}this._slide(b,m,k)
},click:function(a){a.preventDefault()
},keyup:function(a){var b=d(a.target).data("ui-slider-handle-index");
if(this._keySliding){this._keySliding=false;
this._stop(a,b);
this._change(a,b);
d(a.target).removeClass("ui-state-active")
}}}})
}(jQuery));
(function(e,g){function f(b,c,a){return(b>c)&&(b<(c+a))
}function h(a){return(/left|right/).test(a.css("float"))||(/inline|table-cell/).test(a.css("display"))
}e.widget("ui.sortable",e.ui.mouse,{version:"1.10.4",widgetEventPrefix:"sort",ready:false,options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var a=this.options;
this.containerCache={};
this.element.addClass("ui-sortable");
this.refresh();
this.floating=this.items.length?a.axis==="x"||h(this.items[0].item):false;
this.offset=this.element.offset();
this._mouseInit();
this.ready=true
},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled");
this._mouseDestroy();
for(var a=this.items.length-1;
a>=0;
a--){this.items[a].item.removeData(this.widgetName+"-item")
}return this
},_setOption:function(b,a){if(b==="disabled"){this.options[b]=a;
this.widget().toggleClass("ui-sortable-disabled",!!a)
}else{e.Widget.prototype._setOption.apply(this,arguments)
}},_mouseCapture:function(c,b){var j=null,a=false,d=this;
if(this.reverting){return false
}if(this.options.disabled||this.options.type==="static"){return false
}this._refreshItems(c);
e(c.target).parents().each(function(){if(e.data(this,d.widgetName+"-item")===d){j=e(this);
return false
}});
if(e.data(c.target,d.widgetName+"-item")===d){j=e(c.target)
}if(!j){return false
}if(this.options.handle&&!b){e(this.options.handle,j).find("*").addBack().each(function(){if(this===c.target){a=true
}});
if(!a){return false
}}this.currentItem=j;
this._removeCurrentsFromItems();
return true
},_mouseStart:function(c,b,m){var d,n,a=this.options;
this.currentContainer=this;
this.refreshPositions();
this.helper=this._createHelper(c);
this._cacheHelperProportions();
this._cacheMargins();
this.scrollParent=this.helper.scrollParent();
this.offset=this.currentItem.offset();
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
e.extend(this.offset,{click:{left:c.pageX-this.offset.left,top:c.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.helper.css("position","absolute");
this.cssPosition=this.helper.css("position");
this.originalPosition=this._generatePosition(c);
this.originalPageX=c.pageX;
this.originalPageY=c.pageY;
(a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt));
this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};
if(this.helper[0]!==this.currentItem[0]){this.currentItem.hide()
}this._createPlaceholder();
if(a.containment){this._setContainment()
}if(a.cursor&&a.cursor!=="auto"){n=this.document.find("body");
this.storedCursor=n.css("cursor");
n.css("cursor",a.cursor);
this.storedStylesheet=e("<style>*{ cursor: "+a.cursor+" !important; }</style>").appendTo(n)
}if(a.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")
}this.helper.css("opacity",a.opacity)
}if(a.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")
}this.helper.css("zIndex",a.zIndex)
}if(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"){this.overflowOffset=this.scrollParent.offset()
}this._trigger("start",c,this._uiHash());
if(!this._preserveHelperProportions){this._cacheHelperProportions()
}if(!m){for(d=this.containers.length-1;
d>=0;
d--){this.containers[d]._trigger("activate",c,this._uiHash(this))
}}if(e.ui.ddmanager){e.ui.ddmanager.current=this
}if(e.ui.ddmanager&&!a.dropBehaviour){e.ui.ddmanager.prepareOffsets(this,c)
}this.dragging=true;
this.helper.addClass("ui-sortable-helper");
this._mouseDrag(c);
return true
},_mouseDrag:function(c){var m,d,n,a,b=this.options,o=false;
this.position=this._generatePosition(c);
this.positionAbs=this._convertPositionTo("absolute");
if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs
}if(this.options.scroll){if(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-c.pageY<b.scrollSensitivity){this.scrollParent[0].scrollTop=o=this.scrollParent[0].scrollTop+b.scrollSpeed
}else{if(c.pageY-this.overflowOffset.top<b.scrollSensitivity){this.scrollParent[0].scrollTop=o=this.scrollParent[0].scrollTop-b.scrollSpeed
}}if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-c.pageX<b.scrollSensitivity){this.scrollParent[0].scrollLeft=o=this.scrollParent[0].scrollLeft+b.scrollSpeed
}else{if(c.pageX-this.overflowOffset.left<b.scrollSensitivity){this.scrollParent[0].scrollLeft=o=this.scrollParent[0].scrollLeft-b.scrollSpeed
}}}else{if(c.pageY-e(document).scrollTop()<b.scrollSensitivity){o=e(document).scrollTop(e(document).scrollTop()-b.scrollSpeed)
}else{if(e(window).height()-(c.pageY-e(document).scrollTop())<b.scrollSensitivity){o=e(document).scrollTop(e(document).scrollTop()+b.scrollSpeed)
}}if(c.pageX-e(document).scrollLeft()<b.scrollSensitivity){o=e(document).scrollLeft(e(document).scrollLeft()-b.scrollSpeed)
}else{if(e(window).width()-(c.pageX-e(document).scrollLeft())<b.scrollSensitivity){o=e(document).scrollLeft(e(document).scrollLeft()+b.scrollSpeed)
}}}if(o!==false&&e.ui.ddmanager&&!b.dropBehaviour){e.ui.ddmanager.prepareOffsets(this,c)
}}this.positionAbs=this._convertPositionTo("absolute");
if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px"
}for(m=this.items.length-1;
m>=0;
m--){d=this.items[m];
n=d.item[0];
a=this._intersectsWithPointer(d);
if(!a){continue
}if(d.instance!==this.currentContainer){continue
}if(n!==this.currentItem[0]&&this.placeholder[a===1?"next":"prev"]()[0]!==n&&!e.contains(this.placeholder[0],n)&&(this.options.type==="semi-dynamic"?!e.contains(this.element[0],n):true)){this.direction=a===1?"down":"up";
if(this.options.tolerance==="pointer"||this._intersectsWithSides(d)){this._rearrange(c,d)
}else{break
}this._trigger("change",c,this._uiHash());
break
}}this._contactContainers(c);
if(e.ui.ddmanager){e.ui.ddmanager.drag(this,c)
}this._trigger("sort",c,this._uiHash());
this.lastPositionAbs=this.positionAbs;
return false
},_mouseStop:function(d,b){if(!d){return
}if(e.ui.ddmanager&&!this.options.dropBehaviour){e.ui.ddmanager.drop(this,d)
}if(this.options.revert){var k=this,a=this.placeholder.offset(),m=this.options.axis,c={};
if(!m||m==="x"){c.left=a.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)
}if(!m||m==="y"){c.top=a.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)
}this.reverting=true;
e(this.helper).animate(c,parseInt(this.options.revert,10)||500,function(){k._clear(d)
})
}else{this._clear(d,b)
}return false
},cancel:function(){if(this.dragging){this._mouseUp({target:null});
if(this.options.helper==="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
}else{this.currentItem.show()
}for(var a=this.containers.length-1;
a>=0;
a--){this.containers[a]._trigger("deactivate",null,this._uiHash(this));
if(this.containers[a].containerCache.over){this.containers[a]._trigger("out",null,this._uiHash(this));
this.containers[a].containerCache.over=0
}}}if(this.placeholder){if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])
}if(this.options.helper!=="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()
}e.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});
if(this.domPosition.prev){e(this.domPosition.prev).after(this.currentItem)
}else{e(this.domPosition.parent).prepend(this.currentItem)
}}return this
},serialize:function(a){var c=this._getItemsAsjQuery(a&&a.connected),b=[];
a=a||{};
e(c).each(function(){var d=(e(a.item||this).attr(a.attribute||"id")||"").match(a.expression||(/(.+)[\-=_](.+)/));
if(d){b.push((a.key||d[1]+"[]")+"="+(a.key&&a.expression?d[1]:d[2]))
}});
if(!b.length&&a.key){b.push(a.key+"=")
}return b.join("&")
},toArray:function(a){var c=this._getItemsAsjQuery(a&&a.connected),b=[];
a=a||{};
c.each(function(){b.push(e(a.item||this).attr(a.attribute||"id")||"")
});
return b
},_intersectsWith:function(a){var y=this.positionAbs.left,z=y+this.helperProportions.width,c=this.positionAbs.top,d=c+this.helperProportions.height,x=a.left,A=x+a.width,C=a.top,r=C+a.height,B=this.offset.click.top,t=this.offset.click.left,v=(this.options.axis==="x")||((c+B)>C&&(c+B)<r),b=(this.options.axis==="y")||((y+t)>x&&(y+t)<A),w=v&&b;
if(this.options.tolerance==="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!=="pointer"&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"])){return w
}else{return(x<y+(this.helperProportions.width/2)&&z-(this.helperProportions.width/2)<A&&C<c+(this.helperProportions.height/2)&&d-(this.helperProportions.height/2)<r)
}},_intersectsWithPointer:function(d){var c=(this.options.axis==="x")||f(this.positionAbs.top+this.offset.click.top,d.top,d.height),k=(this.options.axis==="y")||f(this.positionAbs.left+this.offset.click.left,d.left,d.width),a=c&&k,m=this._getDragVerticalDirection(),b=this._getDragHorizontalDirection();
if(!a){return false
}return this.floating?(((b&&b==="right")||m==="down")?2:1):(m&&(m==="down"?2:1))
},_intersectsWithSides:function(b){var d=f(this.positionAbs.top+this.offset.click.top,b.top+(b.height/2),b.height),c=f(this.positionAbs.left+this.offset.click.left,b.left+(b.width/2),b.width),j=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();
if(this.floating&&a){return((a==="right"&&c)||(a==="left"&&!c))
}else{return j&&((j==="down"&&d)||(j==="up"&&!d))
}},_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;
return a!==0&&(a>0?"down":"up")
},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;
return a!==0&&(a>0?"right":"left")
},refresh:function(a){this._refreshItems(a);
this.refreshPositions();
return this
},_connectWith:function(){var a=this.options;
return a.connectWith.constructor===String?[a.connectWith]:a.connectWith
},_getItemsAsjQuery:function(s){var q,r,b,j,d=[],p=[],c=this._connectWith();
if(c&&s){for(q=c.length-1;
q>=0;
q--){b=e(c[q]);
for(r=b.length-1;
r>=0;
r--){j=e.data(b[r],this.widgetFullName);
if(j&&j!==this&&!j.options.disabled){p.push([e.isFunction(j.options.items)?j.options.items.call(j.element):e(j.options.items,j.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),j])
}}}}p.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);
function a(){d.push(this)
}for(q=p.length-1;
q>=0;
q--){p[q][0].each(a)
}return e(d)
},_removeCurrentsFromItems:function(){var a=this.currentItem.find(":data("+this.widgetName+"-item)");
this.items=e.grep(this.items,function(b){for(var c=0;
c<a.length;
c++){if(a[c]===b.item[0]){return false
}}return true
})
},_refreshItems:function(y){this.items=[];
this.containers=[this];
var u,w,c,t,d,x,a,b,s=this.items,v=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],y,{item:this.currentItem}):e(this.options.items,this.element),this]],j=this._connectWith();
if(j&&this.ready){for(u=j.length-1;
u>=0;
u--){c=e(j[u]);
for(w=c.length-1;
w>=0;
w--){t=e.data(c[w],this.widgetFullName);
if(t&&t!==this&&!t.options.disabled){v.push([e.isFunction(t.options.items)?t.options.items.call(t.element[0],y,{item:this.currentItem}):e(t.options.items,t.element),t]);
this.containers.push(t)
}}}}for(u=v.length-1;
u>=0;
u--){d=v[u][1];
x=v[u][0];
for(w=0,b=x.length;
w<b;
w++){a=e(x[w]);
a.data(this.widgetName+"-item",d);
s.push({item:a,instance:d,width:0,height:0,left:0,top:0})
}}},refreshPositions:function(k){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()
}var c,b,d,a;
for(c=this.items.length-1;
c>=0;
c--){b=this.items[c];
if(b.instance!==this.currentContainer&&this.currentContainer&&b.item[0]!==this.currentItem[0]){continue
}d=this.options.toleranceElement?e(this.options.toleranceElement,b.item):b.item;
if(!k){b.width=d.outerWidth();
b.height=d.outerHeight()
}a=d.offset();
b.left=a.left;
b.top=a.top
}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)
}else{for(c=this.containers.length-1;
c>=0;
c--){a=this.containers[c].element.offset();
this.containers[c].containerCache.left=a.left;
this.containers[c].containerCache.top=a.top;
this.containers[c].containerCache.width=this.containers[c].element.outerWidth();
this.containers[c].containerCache.height=this.containers[c].element.outerHeight()
}}return this
},_createPlaceholder:function(b){b=b||this;
var c,a=b.options;
if(!a.placeholder||a.placeholder.constructor===String){c=a.placeholder;
a.placeholder={element:function(){var d=b.currentItem[0].nodeName.toLowerCase(),j=e("<"+d+">",b.document[0]).addClass(c||b.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");
if(d==="tr"){b.currentItem.children().each(function(){e("<td>&#160;</td>",b.document[0]).attr("colspan",e(this).attr("colspan")||1).appendTo(j)
})
}else{if(d==="img"){j.attr("src",b.currentItem.attr("src"))
}}if(!c){j.css("visibility","hidden")
}return j
},update:function(j,d){if(c&&!a.forcePlaceholderSize){return
}if(!d.height()){d.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10))
}if(!d.width()){d.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||0,10))
}}}
}b.placeholder=e(a.placeholder.element.call(b.element,b.currentItem));
b.currentItem.after(b.placeholder);
a.placeholder.update(b,b.placeholder)
},_contactContainers:function(z){var u,w,c,t,j,a,y,A,v,d,x=null,b=null;
for(u=this.containers.length-1;
u>=0;
u--){if(e.contains(this.currentItem[0],this.containers[u].element[0])){continue
}if(this._intersectsWith(this.containers[u].containerCache)){if(x&&e.contains(this.containers[u].element[0],x.element[0])){continue
}x=this.containers[u];
b=u
}else{if(this.containers[u].containerCache.over){this.containers[u]._trigger("out",z,this._uiHash(this));
this.containers[u].containerCache.over=0
}}}if(!x){return
}if(this.containers.length===1){if(!this.containers[b].containerCache.over){this.containers[b]._trigger("over",z,this._uiHash(this));
this.containers[b].containerCache.over=1
}}else{c=10000;
t=null;
d=x.floating||h(this.currentItem);
j=d?"left":"top";
a=d?"width":"height";
y=this.positionAbs[j]+this.offset.click[j];
for(w=this.items.length-1;
w>=0;
w--){if(!e.contains(this.containers[b].element[0],this.items[w].item[0])){continue
}if(this.items[w].item[0]===this.currentItem[0]){continue
}if(d&&!f(this.positionAbs.top+this.offset.click.top,this.items[w].top,this.items[w].height)){continue
}A=this.items[w].item.offset()[j];
v=false;
if(Math.abs(A-y)>Math.abs(A+this.items[w][a]-y)){v=true;
A+=this.items[w][a]
}if(Math.abs(A-y)<c){c=Math.abs(A-y);
t=this.items[w];
this.direction=v?"up":"down"
}}if(!t&&!this.options.dropOnEmpty){return
}if(this.currentContainer===this.containers[b]){return
}t?this._rearrange(z,t,null,true):this._rearrange(z,null,this.containers[b].element,true);
this._trigger("change",z,this._uiHash());
this.containers[b]._trigger("change",z,this._uiHash(this));
this.currentContainer=this.containers[b];
this.options.placeholder.update(this.currentContainer,this.placeholder);
this.containers[b]._trigger("over",z,this._uiHash(this));
this.containers[b].containerCache.over=1
}},_createHelper:function(b){var a=this.options,c=e.isFunction(a.helper)?e(a.helper.apply(this.element[0],[b,this.currentItem])):(a.helper==="clone"?this.currentItem.clone():this.currentItem);
if(!c.parents("body").length){e(a.appendTo!=="parent"?a.appendTo:this.currentItem[0].parentNode)[0].appendChild(c[0])
}if(c[0]===this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}
}if(!c[0].style.width||a.forceHelperSize){c.width(this.currentItem.width())
}if(!c[0].style.height||a.forceHelperSize){c.height(this.currentItem.height())
}return c
},_adjustOffsetFromHelper:function(a){if(typeof a==="string"){a=a.split(" ")
}if(e.isArray(a)){a={left:+a[0],top:+a[1]||0}
}if("left" in a){this.offset.click.left=a.left+this.margins.left
}if("right" in a){this.offset.click.left=this.helperProportions.width-a.right+this.margins.left
}if("top" in a){this.offset.click.top=a.top+this.margins.top
}if("bottom" in a){this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top
}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();
var a=this.offsetParent.offset();
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();
a.top+=this.scrollParent.scrollTop()
}if(this.offsetParent[0]===document.body||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&e.ui.ie)){a={top:0,left:0}
}return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var a=this.currentItem.position();
return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}else{return{top:0,left:0}
}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var c,a,d,b=this.options;
if(b.containment==="parent"){b.containment=this.helper[0].parentNode
}if(b.containment==="document"||b.containment==="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,e(b.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,(e(b.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]
}if(!(/^(document|window|parent)$/).test(b.containment)){c=e(b.containment)[0];
a=e(b.containment).offset();
d=(e(c).css("overflow")!=="hidden");
this.containment=[a.left+(parseInt(e(c).css("borderLeftWidth"),10)||0)+(parseInt(e(c).css("paddingLeft"),10)||0)-this.margins.left,a.top+(parseInt(e(c).css("borderTopWidth"),10)||0)+(parseInt(e(c).css("paddingTop"),10)||0)-this.margins.top,a.left+(d?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(e(c).css("borderLeftWidth"),10)||0)-(parseInt(e(c).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,a.top+(d?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(e(c).css("borderTopWidth"),10)||0)-(parseInt(e(c).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]
}},_convertPositionTo:function(c,a){if(!a){a=this.position
}var d=c==="absolute"?1:-1,j=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,b=(/(html|body)/i).test(j[0].tagName);
return{top:(a.top+this.offset.relative.top*d+this.offset.parent.top*d-((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(b?0:j.scrollTop()))*d)),left:(a.left+this.offset.relative.left*d+this.offset.parent.left*d-((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():b?0:j.scrollLeft())*d))}
},_generatePosition:function(m){var c,d,b=this.options,n=m.pageX,o=m.pageY,p=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,a=(/(html|body)/i).test(p[0].tagName);
if(this.cssPosition==="relative"&&!(this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()
}if(this.originalPosition){if(this.containment){if(m.pageX-this.offset.click.left<this.containment[0]){n=this.containment[0]+this.offset.click.left
}if(m.pageY-this.offset.click.top<this.containment[1]){o=this.containment[1]+this.offset.click.top
}if(m.pageX-this.offset.click.left>this.containment[2]){n=this.containment[2]+this.offset.click.left
}if(m.pageY-this.offset.click.top>this.containment[3]){o=this.containment[3]+this.offset.click.top
}}if(b.grid){c=this.originalPageY+Math.round((o-this.originalPageY)/b.grid[1])*b.grid[1];
o=this.containment?((c-this.offset.click.top>=this.containment[1]&&c-this.offset.click.top<=this.containment[3])?c:((c-this.offset.click.top>=this.containment[1])?c-b.grid[1]:c+b.grid[1])):c;
d=this.originalPageX+Math.round((n-this.originalPageX)/b.grid[0])*b.grid[0];
n=this.containment?((d-this.offset.click.left>=this.containment[0]&&d-this.offset.click.left<=this.containment[2])?d:((d-this.offset.click.left>=this.containment[0])?d-b.grid[0]:d+b.grid[0])):d
}}return{top:(o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(a?0:p.scrollTop())))),left:(n-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():a?0:p.scrollLeft())))}
},_rearrange:function(a,b,d,c){d?d[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction==="down"?b.item[0]:b.item[0].nextSibling));
this.counter=this.counter?++this.counter:1;
var k=this.counter;
this._delay(function(){if(k===this.counter){this.refreshPositions(!c)
}})
},_clear:function(d,b){this.reverting=false;
var k,a=[];
if(!this._noFinalSort&&this.currentItem.parent().length){this.placeholder.before(this.currentItem)
}this._noFinalSort=null;
if(this.helper[0]===this.currentItem[0]){for(k in this._storedCSS){if(this._storedCSS[k]==="auto"||this._storedCSS[k]==="static"){this._storedCSS[k]=""
}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
}else{this.currentItem.show()
}if(this.fromOutside&&!b){a.push(function(j){this._trigger("receive",j,this._uiHash(this.fromOutside))
})
}if((this.fromOutside||this.domPosition.prev!==this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!==this.currentItem.parent()[0])&&!b){a.push(function(j){this._trigger("update",j,this._uiHash())
})
}if(this!==this.currentContainer){if(!b){a.push(function(j){this._trigger("remove",j,this._uiHash())
});
a.push((function(j){return function(m){j._trigger("receive",m,this._uiHash(this))
}
}).call(this,this.currentContainer));
a.push((function(j){return function(m){j._trigger("update",m,this._uiHash(this))
}
}).call(this,this.currentContainer))
}}function c(j,n,m){return function(o){m._trigger(j,o,n._uiHash(n))
}
}for(k=this.containers.length-1;
k>=0;
k--){if(!b){a.push(c("deactivate",this,this.containers[k]))
}if(this.containers[k].containerCache.over){a.push(c("out",this,this.containers[k]));
this.containers[k].containerCache.over=0
}}if(this.storedCursor){this.document.find("body").css("cursor",this.storedCursor);
this.storedStylesheet.remove()
}if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity)
}if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex==="auto"?"":this._storedZIndex)
}this.dragging=false;
if(this.cancelHelperRemoval){if(!b){this._trigger("beforeStop",d,this._uiHash());
for(k=0;
k<a.length;
k++){a[k].call(this,d)
}this._trigger("stop",d,this._uiHash())
}this.fromOutside=false;
return false
}if(!b){this._trigger("beforeStop",d,this._uiHash())
}this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
if(this.helper[0]!==this.currentItem[0]){this.helper.remove()
}this.helper=null;
if(!b){for(k=0;
k<a.length;
k++){a[k].call(this,d)
}this._trigger("stop",d,this._uiHash())
}this.fromOutside=false;
return true
},_trigger:function(){if(e.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel()
}},_uiHash:function(b){var a=b||this;
return{helper:a.helper,placeholder:a.placeholder||e([]),position:a.position,originalPosition:a.originalPosition,offset:a.positionAbs,item:a.currentItem,sender:b?b.element:null}
}})
})(jQuery);
(function(c){function d(a){return function(){var b=this.element.val();
a.apply(this,arguments);
this._refresh();
if(b!==this.element.val()){this._trigger("change")
}}
}c.widget("ui.spinner",{version:"1.10.4",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:true,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max);
this._setOption("min",this.options.min);
this._setOption("step",this.options.step);
if(this.value()!==""){this._value(this.element.val(),true)
}this._draw();
this._on(this._events);
this._refresh();
this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})
},_getCreateOptions:function(){var b={},a=this.element;
c.each(["min","max","step"],function(k,j){var h=a.attr(j);
if(h!==undefined&&h.length){b[j]=h
}});
return b
},_events:{keydown:function(a){if(this._start(a)&&this._keydown(a)){a.preventDefault()
}},keyup:"_stop",focus:function(){this.previous=this.element.val()
},blur:function(a){if(this.cancelBlur){delete this.cancelBlur;
return
}this._stop();
this._refresh();
if(this.previous!==this.element.val()){this._trigger("change",a)
}},mousewheel:function(b,a){if(!a){return
}if(!this.spinning&&!this._start(b)){return false
}this._spin((a>0?1:-1)*this.options.step,b);
clearTimeout(this.mousewheelTimer);
this.mousewheelTimer=this._delay(function(){if(this.spinning){this._stop(b)
}},100);
b.preventDefault()
},"mousedown .ui-spinner-button":function(b){var f;
f=this.element[0]===this.document[0].activeElement?this.previous:this.element.val();
function a(){var e=this.element[0]===this.document[0].activeElement;
if(!e){this.element.focus();
this.previous=f;
this._delay(function(){this.previous=f
})
}}b.preventDefault();
a.call(this);
this.cancelBlur=true;
this._delay(function(){delete this.cancelBlur;
a.call(this)
});
if(this._start(b)===false){return
}this._repeat(null,c(b.currentTarget).hasClass("ui-spinner-up")?1:-1,b)
},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(a){if(!c(a.currentTarget).hasClass("ui-state-active")){return
}if(this._start(a)===false){return false
}this._repeat(null,c(a.currentTarget).hasClass("ui-spinner-up")?1:-1,a)
},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var a=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
this.element.attr("role","spinbutton");
this.buttons=a.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all");
if(this.buttons.height()>Math.ceil(a.height()*0.5)&&a.height()>0){a.height(a.height())
}if(this.options.disabled){this.disable()
}},_keydown:function(b){var f=this.options,a=c.ui.keyCode;
switch(b.keyCode){case a.UP:this._repeat(null,1,b);
return true;
case a.DOWN:this._repeat(null,-1,b);
return true;
case a.PAGE_UP:this._repeat(null,f.page,b);
return true;
case a.PAGE_DOWN:this._repeat(null,-f.page,b);
return true
}return false
},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon "+this.options.icons.down+"'>&#9660;</span></a>"
},_start:function(a){if(!this.spinning&&this._trigger("start",a)===false){return false
}if(!this.counter){this.counter=1
}this.spinning=true;
return true
},_repeat:function(b,f,a){b=b||500;
clearTimeout(this.timer);
this.timer=this._delay(function(){this._repeat(40,f,a)
},b);
this._spin(f*this.options.step,a)
},_spin:function(b,f){var a=this.value()||0;
if(!this.counter){this.counter=1
}a=this._adjustValue(a+b*this._increment(this.counter));
if(!this.spinning||this._trigger("spin",f,{value:a})!==false){this._value(a);
this.counter++
}},_increment:function(b){var a=this.options.incremental;
if(a){return c.isFunction(a)?a(b):Math.floor(b*b*b/50000-b*b/500+17*b/200+1)
}return 1
},_precision:function(){var a=this._precisionOf(this.options.step);
if(this.options.min!==null){a=Math.max(a,this._precisionOf(this.options.min))
}return a
},_precisionOf:function(b){var a=b.toString(),f=a.indexOf(".");
return f===-1?0:a.length-f-1
},_adjustValue:function(b){var g,a,h=this.options;
g=h.min!==null?h.min:0;
a=b-g;
a=Math.round(a/h.step)*h.step;
b=g+a;
b=parseFloat(b.toFixed(this._precision()));
if(h.max!==null&&b>h.max){return h.max
}if(h.min!==null&&b<h.min){return h.min
}return b
},_stop:function(a){if(!this.spinning){return
}clearTimeout(this.timer);
clearTimeout(this.mousewheelTimer);
this.counter=0;
this.spinning=false;
this._trigger("stop",a)
},_setOption:function(f,b){if(f==="culture"||f==="numberFormat"){var a=this._parse(this.element.val());
this.options[f]=b;
this.element.val(this._format(a));
return
}if(f==="max"||f==="min"||f==="step"){if(typeof b==="string"){b=this._parse(b)
}}if(f==="icons"){this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(b.up);
this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(b.down)
}this._super(f,b);
if(f==="disabled"){if(b){this.element.prop("disabled",true);
this.buttons.button("disable")
}else{this.element.prop("disabled",false);
this.buttons.button("enable")
}}},_setOptions:d(function(a){this._super(a);
this._value(this.element.val())
}),_parse:function(a){if(typeof a==="string"&&a!==""){a=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(a,10,this.options.culture):+a
}return a===""||isNaN(a)?null:a
},_format:function(a){if(a===""){return""
}return window.Globalize&&this.options.numberFormat?Globalize.format(a,this.options.numberFormat,this.options.culture):a
},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})
},_value:function(a,f){var b;
if(a!==""){b=this._parse(a);
if(b!==null){if(!f){b=this._adjustValue(b)
}a=this._format(b)
}}this.element.val(a);
this._refresh()
},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",false).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.uiSpinner.replaceWith(this.element)
},stepUp:d(function(a){this._stepUp(a)
}),_stepUp:function(a){if(this._start()){this._spin((a||1)*this.options.step);
this._stop()
}},stepDown:d(function(a){this._stepDown(a)
}),_stepDown:function(a){if(this._start()){this._spin((a||1)*-this.options.step);
this._stop()
}},pageUp:d(function(a){this._stepUp((a||1)*this.options.page)
}),pageDown:d(function(a){this._stepDown((a||1)*this.options.page)
}),value:function(a){if(!arguments.length){return this._parse(this.element.val())
}d(this._value).call(this,a)
},widget:function(){return this.uiSpinner
}})
}(jQuery));
(function(n,k){var h=0,j=/#.*$/;
function m(){return ++h
}function g(a){a=a.cloneNode(false);
return a.hash.length>1&&decodeURIComponent(a.href.replace(j,""))===decodeURIComponent(location.href.replace(j,""))
}n.widget("ui.tabs",{version:"1.10.4",delay:300,options:{active:null,collapsible:false,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var a=this,b=this.options;
this.running=false;
this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",b.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(c){if(n(this).is(".ui-state-disabled")){c.preventDefault()
}}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){if(n(this).closest("li").is(".ui-state-disabled")){this.blur()
}});
this._processTabs();
b.active=this._initialActive();
if(n.isArray(b.disabled)){b.disabled=n.unique(b.disabled.concat(n.map(this.tabs.filter(".ui-state-disabled"),function(c){return a.tabs.index(c)
}))).sort()
}if(this.options.active!==false&&this.anchors.length){this.active=this._findActive(b.active)
}else{this.active=n()
}this._refresh();
if(this.active.length){this.load(b.active)
}},_initialActive:function(){var b=this.options.active,c=this.options.collapsible,a=location.hash.substring(1);
if(b===null){if(a){this.tabs.each(function(e,d){if(n(d).attr("aria-controls")===a){b=e;
return false
}})
}if(b===null){b=this.tabs.index(this.tabs.filter(".ui-tabs-active"))
}if(b===null||b===-1){b=this.tabs.length?0:false
}}if(b!==false){b=this.tabs.index(this.tabs.eq(b));
if(b===-1){b=c?false:0
}}if(!c&&b===false&&this.anchors.length){b=0
}return b
},_getCreateEventData:function(){return{tab:this.active,panel:!this.active.length?n():this._getPanelForTab(this.active)}
},_tabKeydown:function(b){var c=n(this.document[0].activeElement).closest("li"),d=this.tabs.index(c),a=true;
if(this._handlePageNav(b)){return
}switch(b.keyCode){case n.ui.keyCode.RIGHT:case n.ui.keyCode.DOWN:d++;
break;
case n.ui.keyCode.UP:case n.ui.keyCode.LEFT:a=false;
d--;
break;
case n.ui.keyCode.END:d=this.anchors.length-1;
break;
case n.ui.keyCode.HOME:d=0;
break;
case n.ui.keyCode.SPACE:b.preventDefault();
clearTimeout(this.activating);
this._activate(d);
return;
case n.ui.keyCode.ENTER:b.preventDefault();
clearTimeout(this.activating);
this._activate(d===this.options.active?false:d);
return;
default:return
}b.preventDefault();
clearTimeout(this.activating);
d=this._focusNextTab(d,a);
if(!b.ctrlKey){c.attr("aria-selected","false");
this.tabs.eq(d).attr("aria-selected","true");
this.activating=this._delay(function(){this.option("active",d)
},this.delay)
}},_panelKeydown:function(a){if(this._handlePageNav(a)){return
}if(a.ctrlKey&&a.keyCode===n.ui.keyCode.UP){a.preventDefault();
this.active.focus()
}},_handlePageNav:function(a){if(a.altKey&&a.keyCode===n.ui.keyCode.PAGE_UP){this._activate(this._focusNextTab(this.options.active-1,false));
return true
}if(a.altKey&&a.keyCode===n.ui.keyCode.PAGE_DOWN){this._activate(this._focusNextTab(this.options.active+1,true));
return true
}},_findNextTab:function(c,b){var d=this.tabs.length-1;
function a(){if(c>d){c=0
}if(c<0){c=d
}return c
}while(n.inArray(a(),this.options.disabled)!==-1){c=b?c+1:c-1
}return c
},_focusNextTab:function(b,a){b=this._findNextTab(b,a);
this.tabs.eq(b).focus();
return b
},_setOption:function(b,a){if(b==="active"){this._activate(a);
return
}if(b==="disabled"){this._setupDisabled(a);
return
}this._super(b,a);
if(b==="collapsible"){this.element.toggleClass("ui-tabs-collapsible",a);
if(!a&&this.options.active===false){this._activate(0)
}}if(b==="event"){this._setupEvents(a)
}if(b==="heightStyle"){this._setupHeightStyle(a)
}},_tabId:function(a){return a.attr("aria-controls")||"ui-tabs-"+m()
},_sanitizeSelector:function(a){return a?a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""
},refresh:function(){var a=this.options,b=this.tablist.children(":has(a[href])");
a.disabled=n.map(b.filter(".ui-state-disabled"),function(c){return b.index(c)
});
this._processTabs();
if(a.active===false||!this.anchors.length){a.active=false;
this.active=n()
}else{if(this.active.length&&!n.contains(this.tablist[0],this.active[0])){if(this.tabs.length===a.disabled.length){a.active=false;
this.active=n()
}else{this._activate(this._findNextTab(Math.max(0,a.active-1),false))
}}else{a.active=this.tabs.index(this.active)
}}this._refresh()
},_refresh:function(){this._setupDisabled(this.options.disabled);
this._setupEvents(this.options.event);
this._setupHeightStyle(this.options.heightStyle);
this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1});
this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"});
if(!this.active.length){this.tabs.eq(0).attr("tabIndex",0)
}else{this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0});
this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})
}},_processTabs:function(){var a=this;
this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist");
this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1});
this.anchors=this.tabs.map(function(){return n("a",this)[0]
}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1});
this.panels=n();
this.anchors.each(function(s,c){var f,e,b,d=n(c).uniqueId().attr("id"),r=n(c).closest("li"),q=r.attr("aria-controls");
if(g(c)){f=c.hash;
e=a.element.find(a._sanitizeSelector(f))
}else{b=a._tabId(r);
f="#"+b;
e=a.element.find(f);
if(!e.length){e=a._createPanel(b);
e.insertAfter(a.panels[s-1]||a.tablist)
}e.attr("aria-live","polite")
}if(e.length){a.panels=a.panels.add(e)
}if(q){r.data("ui-tabs-aria-controls",q)
}r.attr({"aria-controls":f.substring(1),"aria-labelledby":d});
e.attr("aria-labelledby",d)
});
this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")
},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)
},_createPanel:function(a){return n("<div>").attr("id",a).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",true)
},_setupDisabled:function(a){if(n.isArray(a)){if(!a.length){a=false
}else{if(a.length===this.anchors.length){a=true
}}}for(var b=0,c;
(c=this.tabs[b]);
b++){if(a===true||n.inArray(b,a)!==-1){n(c).addClass("ui-state-disabled").attr("aria-disabled","true")
}else{n(c).removeClass("ui-state-disabled").removeAttr("aria-disabled")
}}this.options.disabled=a
},_setupEvents:function(a){var b={click:function(c){c.preventDefault()
}};
if(a){n.each(a.split(" "),function(c,d){b[d]="_eventHandler"
})
}this._off(this.anchors.add(this.tabs).add(this.panels));
this._on(this.anchors,b);
this._on(this.tabs,{keydown:"_tabKeydown"});
this._on(this.panels,{keydown:"_panelKeydown"});
this._focusable(this.tabs);
this._hoverable(this.tabs)
},_setupHeightStyle:function(c){var a,b=this.element.parent();
if(c==="fill"){a=b.height();
a-=this.element.outerHeight()-this.element.height();
this.element.siblings(":visible").each(function(){var d=n(this),e=d.css("position");
if(e==="absolute"||e==="fixed"){return
}a-=d.outerHeight(true)
});
this.element.children().not(this.panels).each(function(){a-=n(this).outerHeight(true)
});
this.panels.each(function(){n(this).height(Math.max(0,a-n(this).innerHeight()+n(this).height()))
}).css("overflow","auto")
}else{if(c==="auto"){a=0;
this.panels.each(function(){a=Math.max(a,n(this).height("").height())
}).height(a)
}}},_eventHandler:function(t){var a=this.options,f=this.active,e=n(t.currentTarget),q=e.closest("li"),c=q[0]===f[0],s=c&&a.collapsible,r=s?n():this._getPanelForTab(q),d=!f.length?n():this._getPanelForTab(f),b={oldTab:f,oldPanel:d,newTab:s?n():q,newPanel:r};
t.preventDefault();
if(q.hasClass("ui-state-disabled")||q.hasClass("ui-tabs-loading")||this.running||(c&&!a.collapsible)||(this._trigger("beforeActivate",t,b)===false)){return
}a.active=s?false:this.tabs.index(q);
this.active=c?n():q;
if(this.xhr){this.xhr.abort()
}if(!d.length&&!r.length){n.error("jQuery UI Tabs: Mismatching fragment identifier.")
}if(r.length){this.load(this.tabs.index(q),t)
}this._toggle(t,b)
},_toggle:function(a,b){var c=this,o=b.newPanel,d=b.oldPanel;
this.running=true;
function e(){c.running=false;
c._trigger("activate",a,b)
}function f(){b.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
if(o.length&&c.options.show){c._show(o,c.options.show,e)
}else{o.show();
e()
}}if(d.length&&this.options.hide){this._hide(d,this.options.hide,function(){b.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
f()
})
}else{b.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
d.hide();
f()
}d.attr({"aria-expanded":"false","aria-hidden":"true"});
b.oldTab.attr("aria-selected","false");
if(o.length&&d.length){b.oldTab.attr("tabIndex",-1)
}else{if(o.length){this.tabs.filter(function(){return n(this).attr("tabIndex")===0
}).attr("tabIndex",-1)
}}o.attr({"aria-expanded":"true","aria-hidden":"false"});
b.newTab.attr({"aria-selected":"true",tabIndex:0})
},_activate:function(b){var c,a=this._findActive(b);
if(a[0]===this.active[0]){return
}if(!a.length){a=this.active
}c=a.find(".ui-tabs-anchor")[0];
this._eventHandler({target:c,currentTarget:c,preventDefault:n.noop})
},_findActive:function(a){return a===false?n():this.tabs.eq(a)
},_getIndex:function(a){if(typeof a==="string"){a=this.anchors.index(this.anchors.filter("[href$='"+a+"']"))
}return a
},_destroy:function(){if(this.xhr){this.xhr.abort()
}this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");
this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");
this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();
this.tabs.add(this.panels).each(function(){if(n.data(this,"ui-tabs-destroy")){n(this).remove()
}else{n(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
}});
this.tabs.each(function(){var b=n(this),a=b.data("ui-tabs-aria-controls");
if(a){b.attr("aria-controls",a).removeData("ui-tabs-aria-controls")
}else{b.removeAttr("aria-controls")
}});
this.panels.show();
if(this.options.heightStyle!=="content"){this.panels.css("height","")
}},enable:function(b){var a=this.options.disabled;
if(a===false){return
}if(b===k){a=false
}else{b=this._getIndex(b);
if(n.isArray(a)){a=n.map(a,function(c){return c!==b?c:null
})
}else{a=n.map(this.tabs,function(d,c){return c!==b?c:null
})
}}this._setupDisabled(a)
},disable:function(b){var a=this.options.disabled;
if(a===true){return
}if(b===k){a=true
}else{b=this._getIndex(b);
if(n.inArray(b,a)!==-1){return
}if(n.isArray(a)){a=n.merge([b],a).sort()
}else{a=[b]
}}this._setupDisabled(a)
},load:function(e,a){e=this._getIndex(e);
var b=this,d=this.tabs.eq(e),f=d.find(".ui-tabs-anchor"),o=this._getPanelForTab(d),c={tab:d,panel:o};
if(g(f[0])){return
}this.xhr=n.ajax(this._ajaxSettings(f,a,c));
if(this.xhr&&this.xhr.statusText!=="canceled"){d.addClass("ui-tabs-loading");
o.attr("aria-busy","true");
this.xhr.success(function(p){setTimeout(function(){o.html(p);
b._trigger("load",a,c)
},1)
}).complete(function(p,q){setTimeout(function(){if(q==="abort"){b.panels.stop(false,true)
}d.removeClass("ui-tabs-loading");
o.removeAttr("aria-busy");
if(p===b.xhr){delete b.xhr
}},1)
})
}},_ajaxSettings:function(d,a,b){var c=this;
return{url:d.attr("href"),beforeSend:function(e,f){return c._trigger("beforeLoad",a,n.extend({jqXHR:e,ajaxSettings:f},b))
}}
},_getPanelForTab:function(b){var a=n(b).attr("aria-controls");
return this.element.find(this._sanitizeSelector("#"+a))
}})
})(jQuery);
(function(g){var e=0;
function h(b,a){var c=(b.attr("aria-describedby")||"").split(/\s+/);
c.push(a);
b.data("ui-tooltip-id",a).attr("aria-describedby",g.trim(c.join(" ")))
}function f(b){var a=b.data("ui-tooltip-id"),c=(b.attr("aria-describedby")||"").split(/\s+/),d=g.inArray(a,c);
if(d!==-1){c.splice(d,1)
}b.removeData("ui-tooltip-id");
c=g.trim(c.join(" "));
if(c){b.attr("aria-describedby",c)
}else{b.removeAttr("aria-describedby")
}}g.widget("ui.tooltip",{version:"1.10.4",options:{content:function(){var a=g(this).attr("title")||"";
return g("<a>").text(a).html()
},hide:true,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:true,tooltipClass:null,track:false,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"});
this.tooltips={};
this.parents={};
if(this.options.disabled){this._disable()
}},_setOption:function(c,a){var b=this;
if(c==="disabled"){this[a?"_disable":"_enable"]();
this.options[c]=a;
return
}this._super(c,a);
if(c==="content"){g.each(this.tooltips,function(d,j){b._updateContent(j)
})
}},_disable:function(){var a=this;
g.each(this.tooltips,function(b,d){var c=g.Event("blur");
c.target=c.currentTarget=d[0];
a.close(c,true)
});
this.element.find(this.options.items).addBack().each(function(){var b=g(this);
if(b.is("[title]")){b.data("ui-tooltip-title",b.attr("title")).attr("title","")
}})
},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var a=g(this);
if(a.data("ui-tooltip-title")){a.attr("title",a.data("ui-tooltip-title"))
}})
},open:function(b){var c=this,a=g(b?b.target:this.element).closest(this.options.items);
if(!a.length||a.data("ui-tooltip-id")){return
}if(a.attr("title")){a.data("ui-tooltip-title",a.attr("title"))
}a.data("ui-tooltip-open",true);
if(b&&b.type==="mouseover"){a.parents().each(function(){var d=g(this),j;
if(d.data("ui-tooltip-open")){j=g.Event("blur");
j.target=j.currentTarget=this;
c.close(j,true)
}if(d.attr("title")){d.uniqueId();
c.parents[this.id]={element:this,title:d.attr("title")};
d.attr("title","")
}})
}this._updateContent(a,b)
},_updateContent:function(a,b){var c,m=this.options.content,d=this,k=b?b.type:null;
if(typeof m==="string"){return this._open(b,a,m)
}c=m.call(a[0],function(j){if(!a.data("ui-tooltip-open")){return
}d._delay(function(){if(b){b.type=k
}this._open(b,a,j)
})
});
if(c){this._open(b,a,c)
}},_open:function(d,b,m){var c,n,o,a=g.extend({},this.options.position);
if(!m){return
}c=this._find(b);
if(c.length){c.find(".ui-tooltip-content").html(m);
return
}if(b.is("[title]")){if(d&&d.type==="mouseover"){b.attr("title","")
}else{b.removeAttr("title")
}}c=this._tooltip(b);
h(b,c.attr("id"));
c.find(".ui-tooltip-content").html(m);
function p(j){a.of=j;
if(c.is(":hidden")){return
}c.position(a)
}if(this.options.track&&d&&/^mouse/.test(d.type)){this._on(this.document,{mousemove:p});
p(d)
}else{c.position(g.extend({of:b},this.options.position))
}c.hide();
this._show(c,this.options.show);
if(this.options.show&&this.options.show.delay){o=this.delayedShow=setInterval(function(){if(c.is(":visible")){p(a.of);
clearInterval(o)
}},g.fx.interval)
}this._trigger("open",d,{tooltip:c});
n={keyup:function(j){if(j.keyCode===g.ui.keyCode.ESCAPE){var k=g.Event(j);
k.currentTarget=b[0];
this.close(k,true)
}},remove:function(){this._removeTooltip(c)
}};
if(!d||d.type==="mouseover"){n.mouseleave="close"
}if(!d||d.type==="focusin"){n.focusout="close"
}this._on(true,b,n)
},close:function(c){var d=this,a=g(c?c.currentTarget:this.element),b=this._find(a);
if(this.closing){return
}clearInterval(this.delayedShow);
if(a.data("ui-tooltip-title")){a.attr("title",a.data("ui-tooltip-title"))
}f(a);
b.stop(true);
this._hide(b,this.options.hide,function(){d._removeTooltip(g(this))
});
a.removeData("ui-tooltip-open");
this._off(a,"mouseleave focusout keyup");
if(a[0]!==this.element[0]){this._off(a,"remove")
}this._off(this.document,"mousemove");
if(c&&c.type==="mouseleave"){g.each(this.parents,function(k,m){g(m.element).attr("title",m.title);
delete d.parents[k]
})
}this.closing=true;
this._trigger("close",c,{tooltip:b});
this.closing=false
},_tooltip:function(c){var a="ui-tooltip-"+e++,b=g("<div>").attr({id:a,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));
g("<div>").addClass("ui-tooltip-content").appendTo(b);
b.appendTo(this.document[0].body);
this.tooltips[a]=c;
return b
},_find:function(b){var a=b.data("ui-tooltip-id");
return a?g("#"+a):g()
},_removeTooltip:function(a){a.remove();
delete this.tooltips[a.attr("id")]
},_destroy:function(){var a=this;
g.each(this.tooltips,function(b,d){var c=g.Event("blur");
c.target=c.currentTarget=d[0];
a.close(c,true);
g("#"+b).remove();
if(d.data("ui-tooltip-title")){d.attr("title",d.data("ui-tooltip-title"));
d.removeData("ui-tooltip-title")
}})
}})
}(jQuery));
/*! jQuery UI - v1.10.3 - 2013-12-01
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.button.js, jquery.ui.dialog.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(g,j){var h=0,k=/^ui-id-\d+$/;
g.ui=g.ui||{};
g.extend(g.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});
g.fn.extend({focus:(function(a){return function(c,b){return typeof c==="number"?this.each(function(){var d=this;
setTimeout(function(){g(d).focus();
if(b){b.call(d)
}},c)
}):a.apply(this,arguments)
}
})(g.fn.focus),scrollParent:function(){var a;
if((g.ui.ie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){a=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(g.css(this,"position"))&&(/(auto|scroll)/).test(g.css(this,"overflow")+g.css(this,"overflow-y")+g.css(this,"overflow-x"))
}).eq(0)
}else{a=this.parents().filter(function(){return(/(auto|scroll)/).test(g.css(this,"overflow")+g.css(this,"overflow-y")+g.css(this,"overflow-x"))
}).eq(0)
}return(/fixed/).test(this.css("position"))||!a.length?g(document):a
},zIndex:function(a){if(a!==j){return this.css("zIndex",a)
}if(this.length){var c=g(this[0]),d,b;
while(c.length&&c[0]!==document){d=c.css("position");
if(d==="absolute"||d==="relative"||d==="fixed"){b=parseInt(c.css("zIndex"),10);
if(!isNaN(b)&&b!==0){return b
}}c=c.parent()
}}return 0
},uniqueId:function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++h)
}})
},removeUniqueId:function(){return this.each(function(){if(k.test(this.id)){g(this).removeAttr("id")
}})
}});
function m(d,f){var b,c,e,a=d.nodeName.toLowerCase();
if("area"===a){b=d.parentNode;
c=b.name;
if(!d.href||!c||b.nodeName.toLowerCase()!=="map"){return false
}e=g("img[usemap=#"+c+"]")[0];
return !!e&&n(e)
}return(/input|select|textarea|button|object/.test(a)?!d.disabled:"a"===a?d.href||f:f)&&n(d)
}function n(a){return g.expr.filters.visible(a)&&!g(a).parents().addBack().filter(function(){return g.css(this,"visibility")==="hidden"
}).length
}g.extend(g.expr[":"],{data:g.expr.createPseudo?g.expr.createPseudo(function(a){return function(b){return !!g.data(b,a)
}
}):function(a,b,c){return !!g.data(a,c[3])
},focusable:function(a){return m(a,!isNaN(g.attr(a,"tabindex")))
},tabbable:function(a){var c=g.attr(a,"tabindex"),b=isNaN(c);
return(b||c>=0)&&m(a,!b)
}});
if(!g("<a>").outerWidth(1).jquery){g.each(["Width","Height"],function(d,f){var e=f==="Width"?["Left","Right"]:["Top","Bottom"],c=f.toLowerCase(),a={innerWidth:g.fn.innerWidth,innerHeight:g.fn.innerHeight,outerWidth:g.fn.outerWidth,outerHeight:g.fn.outerHeight};
function b(s,t,q,r){g.each(e,function(){t-=parseFloat(g.css(s,"padding"+this))||0;
if(q){t-=parseFloat(g.css(s,"border"+this+"Width"))||0
}if(r){t-=parseFloat(g.css(s,"margin"+this))||0
}});
return t
}g.fn["inner"+f]=function(o){if(o===j){return a["inner"+f].call(this)
}return this.each(function(){g(this).css(c,b(this,o)+"px")
})
};
g.fn["outer"+f]=function(o,p){if(typeof o!=="number"){return a["outer"+f].call(this,o)
}return this.each(function(){g(this).css(c,b(this,o,true,p)+"px")
})
}
})
}if(!g.fn.addBack){g.fn.addBack=function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))
}
}if(g("<a>").data("a-b","a").removeData("a-b").data("a-b")){g.fn.removeData=(function(a){return function(b){if(arguments.length){return a.call(this,g.camelCase(b))
}else{return a.call(this)
}}
})(g.fn.removeData)
}g.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
g.support.selectstart="onselectstart" in document.createElement("div");
g.fn.extend({disableSelection:function(){return this.bind((g.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()
})
},enableSelection:function(){return this.unbind(".ui-disableSelection")
}});
g.extend(g.ui,{plugin:{add:function(d,c,a){var e,b=g.ui[d].prototype;
for(e in a){b.plugins[e]=b.plugins[e]||[];
b.plugins[e].push([c,a[e]])
}},call:function(e,c,d){var b,a=e.plugins[c];
if(!a||!e.element[0].parentNode||e.element[0].parentNode.nodeType===11){return
}for(b=0;
b<a.length;
b++){if(e.options[a[b][0]]){a[b][1].apply(e.element,d)
}}}},hasScroll:function(a,c){if(g(a).css("overflow")==="hidden"){return false
}var d=(c&&c==="left")?"scrollLeft":"scrollTop",b=false;
if(a[d]>0){return true
}a[d]=1;
b=(a[d]>0);
a[d]=0;
return b
}})
})(jQuery);
(function(f,h){var g=0,j=Array.prototype.slice,k=f.cleanData;
f.cleanData=function(d){for(var c=0,b;
(b=d[c])!=null;
c++){try{f(b).triggerHandler("remove")
}catch(a){}}k(d)
};
f.widget=function(r,q,a){var d,c,o,b,p={},e=r.split(".")[0];
r=r.split(".")[1];
d=e+"-"+r;
if(!a){a=q;
q=f.Widget
}f.expr[":"][d.toLowerCase()]=function(m){return !!f.data(m,d)
};
f[e]=f[e]||{};
c=f[e][r];
o=f[e][r]=function(n,m){if(!this._createWidget){return new o(n,m)
}if(arguments.length){this._createWidget(n,m)
}};
f.extend(o,c,{version:a.version,_proto:f.extend({},a),_childConstructors:[]});
b=new q();
b.options=f.widget.extend({},b.options);
f.each(a,function(m,n){if(!f.isFunction(n)){p[m]=n;
return
}p[m]=(function(){var t=function(){return q.prototype[m].apply(this,arguments)
},s=function(u){return q.prototype[m].apply(this,u)
};
return function(){var v=this._super,x=this._superApply,w;
this._super=t;
this._superApply=s;
w=n.apply(this,arguments);
this._super=v;
this._superApply=x;
return w
}
})()
});
o.prototype=f.widget.extend(b,{widgetEventPrefix:c?b.widgetEventPrefix:r},p,{constructor:o,namespace:e,widgetName:r,widgetFullName:d});
if(c){f.each(c._childConstructors,function(n,m){var s=m.prototype;
f.widget(s.namespace+"."+s.widgetName,o,m._proto)
});
delete c._childConstructors
}else{q._childConstructors.push(o)
}f.widget.bridge(r,o)
};
f.widget.extend=function(a){var e=j.call(arguments,1),b=0,m=e.length,d,c;
for(;
b<m;
b++){for(d in e[b]){c=e[b][d];
if(e[b].hasOwnProperty(d)&&c!==h){if(f.isPlainObject(c)){a[d]=f.isPlainObject(a[d])?f.widget.extend({},a[d],c):f.widget.extend({},c)
}else{a[d]=c
}}}}return a
};
f.widget.bridge=function(b,c){var a=c.prototype.widgetFullName||b;
f.fn[b]=function(e){var n=typeof e==="string",m=j.call(arguments,1),d=this;
e=!n&&m.length?f.widget.extend.apply(null,[e].concat(m)):e;
if(n){this.each(function(){var p,o=f.data(this,a);
if(!o){return f.error("cannot call methods on "+b+" prior to initialization; attempted to call method '"+e+"'")
}if(!f.isFunction(o[e])||e.charAt(0)==="_"){return f.error("no such method '"+e+"' for "+b+" widget instance")
}p=o[e].apply(o,m);
if(p!==o&&p!==h){d=p&&p.jquery?d.pushStack(p.get()):p;
return false
}})
}else{this.each(function(){var o=f.data(this,a);
if(o){o.option(e||{})._init()
}else{f.data(this,a,new c(e,this))
}})
}return d
}
};
f.Widget=function(){};
f.Widget._childConstructors=[];
f.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(b,a){a=f(a||this.defaultElement||this)[0];
this.element=f(a);
this.uuid=g++;
this.eventNamespace="."+this.widgetName+this.uuid;
this.options=f.widget.extend({},this.options,this._getCreateOptions(),b);
this.bindings=f();
this.hoverable=f();
this.focusable=f();
if(a!==this){f.data(a,this.widgetFullName,this);
this._on(true,this.element,{remove:function(c){if(c.target===a){this.destroy()
}}});
this.document=f(a.style?a.ownerDocument:a.document||a);
this.window=f(this.document[0].defaultView||this.document[0].parentWindow)
}this._create();
this._trigger("create",null,this._getCreateEventData());
this._init()
},_getCreateOptions:f.noop,_getCreateEventData:f.noop,_create:f.noop,_init:f.noop,destroy:function(){this._destroy();
this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(f.camelCase(this.widgetFullName));
this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled");
this.bindings.unbind(this.eventNamespace);
this.hoverable.removeClass("ui-state-hover");
this.focusable.removeClass("ui-state-focus")
},_destroy:f.noop,widget:function(){return this.element
},option:function(c,b){var m=c,a,d,e;
if(arguments.length===0){return f.widget.extend({},this.options)
}if(typeof c==="string"){m={};
a=c.split(".");
c=a.shift();
if(a.length){d=m[c]=f.widget.extend({},this.options[c]);
for(e=0;
e<a.length-1;
e++){d[a[e]]=d[a[e]]||{};
d=d[a[e]]
}c=a.pop();
if(b===h){return d[c]===h?null:d[c]
}d[c]=b
}else{if(b===h){return this.options[c]===h?null:this.options[c]
}m[c]=b
}}this._setOptions(m);
return this
},_setOptions:function(b){var a;
for(a in b){this._setOption(a,b[a])
}return this
},_setOption:function(b,a){this.options[b]=a;
if(b==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!a).attr("aria-disabled",a);
this.hoverable.removeClass("ui-state-hover");
this.focusable.removeClass("ui-state-focus")
}return this
},enable:function(){return this._setOption("disabled",false)
},disable:function(){return this._setOption("disabled",true)
},_on:function(b,c,d){var a,e=this;
if(typeof b!=="boolean"){d=c;
c=b;
b=false
}if(!d){d=c;
c=this.element;
a=this.widget()
}else{c=a=f(c);
this.bindings=this.bindings.add(c)
}f.each(d,function(t,u){function q(){if(!b&&(e.options.disabled===true||f(this).hasClass("ui-state-disabled"))){return
}return(typeof u==="string"?e[u]:u).apply(e,arguments)
}if(typeof u!=="string"){q.guid=u.guid=u.guid||q.guid||f.guid++
}var v=t.match(/^(\w+)\s*(.*)$/),r=v[1]+e.eventNamespace,s=v[2];
if(s){a.delegate(s,r,q)
}else{c.bind(r,q)
}})
},_off:function(a,b){b=(b||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;
a.unbind(b).undelegate(b)
},_delay:function(a,b){function c(){return(typeof a==="string"?d[a]:a).apply(d,arguments)
}var d=this;
return setTimeout(c,b||0)
},_hoverable:function(a){this.hoverable=this.hoverable.add(a);
this._on(a,{mouseenter:function(b){f(b.currentTarget).addClass("ui-state-hover")
},mouseleave:function(b){f(b.currentTarget).removeClass("ui-state-hover")
}})
},_focusable:function(a){this.focusable=this.focusable.add(a);
this._on(a,{focusin:function(b){f(b.currentTarget).addClass("ui-state-focus")
},focusout:function(b){f(b.currentTarget).removeClass("ui-state-focus")
}})
},_trigger:function(m,e,d){var a,b,c=this.options[m];
d=d||{};
e=f.Event(e);
e.type=(m===this.widgetEventPrefix?m:this.widgetEventPrefix+m).toLowerCase();
e.target=this.element[0];
b=e.originalEvent;
if(b){for(a in b){if(!(a in e)){e[a]=b[a]
}}}this.element.trigger(e,d);
return !(f.isFunction(c)&&c.apply(this.element[0],[e].concat(d))===false||e.isDefaultPrevented())
}};
f.each({show:"fadeIn",hide:"fadeOut"},function(a,b){f.Widget.prototype["_"+a]=function(e,m,c){if(typeof m==="string"){m={effect:m}
}var d,n=!m?a:m===true||typeof m==="number"?b:m.effect||b;
m=m||{};
if(typeof m==="number"){m={duration:m}
}d=!f.isEmptyObject(m);
m.complete=c;
if(m.delay){e.delay(m.delay)
}if(d&&f.effects&&f.effects.effect[n]){e[a](m)
}else{if(n!==a&&e[n]){e[n](m.duration,m.easing,c)
}else{e.queue(function(o){f(this)[a]();
if(c){c.call(e[0])
}o()
})
}}}
})
})(jQuery);
(function(d,f){var e=false;
d(document).mouseup(function(){e=false
});
d.widget("ui.mouse",{version:"1.10.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var a=this;
this.element.bind("mousedown."+this.widgetName,function(b){return a._mouseDown(b)
}).bind("click."+this.widgetName,function(b){if(true===d.data(b.target,a.widgetName+".preventClickEvent")){d.removeData(b.target,a.widgetName+".preventClickEvent");
b.stopImmediatePropagation();
return false
}});
this.started=false
},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);
if(this._mouseMoveDelegate){d(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)
}},_mouseDown:function(b){if(e){return
}(this._mouseStarted&&this._mouseUp(b));
this._mouseDownEvent=b;
var c=this,a=(b.which===1),h=(typeof this.options.cancel==="string"&&b.target.nodeName?d(b.target).closest(this.options.cancel).length:false);
if(!a||h||!this._mouseCapture(b)){return true
}this.mouseDelayMet=!this.options.delay;
if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){c.mouseDelayMet=true
},this.options.delay)
}if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){this._mouseStarted=(this._mouseStart(b)!==false);
if(!this._mouseStarted){b.preventDefault();
return true
}}if(true===d.data(b.target,this.widgetName+".preventClickEvent")){d.removeData(b.target,this.widgetName+".preventClickEvent")
}this._mouseMoveDelegate=function(g){return c._mouseMove(g)
};
this._mouseUpDelegate=function(g){return c._mouseUp(g)
};
d(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);
b.preventDefault();
e=true;
return true
},_mouseMove:function(a){if(d.ui.ie&&(!document.documentMode||document.documentMode<9)&&!a.button){return this._mouseUp(a)
}if(this._mouseStarted){this._mouseDrag(a);
return a.preventDefault()
}if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,a)!==false);
(this._mouseStarted?this._mouseDrag(a):this._mouseUp(a))
}return !this._mouseStarted
},_mouseUp:function(a){d(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
if(this._mouseStarted){this._mouseStarted=false;
if(a.target===this._mouseDownEvent.target){d.data(a.target,this.widgetName+".preventClickEvent",true)
}this._mouseStop(a)
}return false
},_mouseDistanceMet:function(a){return(Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance)
},_mouseDelayMet:function(){return this.mouseDelayMet
},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true
}})
})(jQuery);
(function(z,B){z.ui=z.ui||{};
var u,t=Math.max,p=Math.abs,r=Math.round,A=/left|center|right/,w=/top|center|bottom/,D=/[\+\-]\d+(\.[\d]+)?%?/,s=/^\w+/,C=/%$/,x=z.fn.position;
function q(a,b,c){return[parseFloat(a[0])*(C.test(a[0])?b/100:1),parseFloat(a[1])*(C.test(a[1])?c/100:1)]
}function v(b,a){return parseInt(z.css(b,a),10)||0
}function y(a){var b=a[0];
if(b.nodeType===9){return{width:a.width(),height:a.height(),offset:{top:0,left:0}}
}if(z.isWindow(b)){return{width:a.width(),height:a.height(),offset:{top:a.scrollTop(),left:a.scrollLeft()}}
}if(b.preventDefault){return{width:0,height:0,offset:{top:b.pageY,left:b.pageX}}
}return{width:a.outerWidth(),height:a.outerHeight(),offset:a.offset()}
}z.position={scrollbarWidth:function(){if(u!==B){return u
}var c,d,a=z("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),b=a.children()[0];
z("body").append(a);
c=b.offsetWidth;
a.css("overflow","scroll");
d=b.offsetWidth;
if(c===d){d=a[0].clientWidth
}a.remove();
return(u=c-d)
},getScrollInfo:function(a){var b=a.isWindow?"":a.element.css("overflow-x"),c=a.isWindow?"":a.element.css("overflow-y"),d=b==="scroll"||(b==="auto"&&a.width<a.element[0].scrollWidth),e=c==="scroll"||(c==="auto"&&a.height<a.element[0].scrollHeight);
return{width:e?z.position.scrollbarWidth():0,height:d?z.position.scrollbarWidth():0}
},getWithinInfo:function(b){var a=z(b||window),c=z.isWindow(a[0]);
return{element:a,isWindow:c,offset:a.offset()||{left:0,top:0},scrollLeft:a.scrollLeft(),scrollTop:a.scrollTop(),width:c?a.width():a.outerWidth(),height:c?a.height():a.outerHeight()}
}};
z.fn.position=function(e){if(!e||!e.of){return x.apply(this,arguments)
}e=z.extend({},e);
var d,h,k,f,m,c,j=z(e.of),n=z.position.getWithinInfo(e.within),b=z.position.getScrollInfo(n),g=(e.collision||"flip").split(" "),a={};
c=y(j);
if(j[0].preventDefault){e.at="left top"
}h=c.width;
k=c.height;
f=c.offset;
m=z.extend({},f);
z.each(["my","at"],function(){var o=(e[this]||"").split(" "),E,F;
if(o.length===1){o=A.test(o[0])?o.concat(["center"]):w.test(o[0])?["center"].concat(o):["center","center"]
}o[0]=A.test(o[0])?o[0]:"center";
o[1]=w.test(o[1])?o[1]:"center";
E=D.exec(o[0]);
F=D.exec(o[1]);
a[this]=[E?E[0]:0,F?F[0]:0];
e[this]=[s.exec(o[0])[0],s.exec(o[1])[0]]
});
if(g.length===1){g[1]=g[0]
}if(e.at[0]==="right"){m.left+=h
}else{if(e.at[0]==="center"){m.left+=h/2
}}if(e.at[1]==="bottom"){m.top+=k
}else{if(e.at[1]==="center"){m.top+=k/2
}}d=q(a.at,h,k);
m.left+=d[0];
m.top+=d[1];
return this.each(function(){var M,O,V=z(this),T=V.outerWidth(),o=V.outerHeight(),U=v(this,"marginLeft"),N=v(this,"marginTop"),P=T+U+v(this,"marginRight")+b.width,Q=o+N+v(this,"marginBottom")+b.height,S=z.extend({},m),R=q(a.my,V.outerWidth(),V.outerHeight());
if(e.my[0]==="right"){S.left-=T
}else{if(e.my[0]==="center"){S.left-=T/2
}}if(e.my[1]==="bottom"){S.top-=o
}else{if(e.my[1]==="center"){S.top-=o/2
}}S.left+=R[0];
S.top+=R[1];
if(!z.support.offsetFractions){S.left=r(S.left);
S.top=r(S.top)
}M={marginLeft:U,marginTop:N};
z.each(["left","top"],function(E,F){if(z.ui.position[g[E]]){z.ui.position[g[E]][F](S,{targetWidth:h,targetHeight:k,elemWidth:T,elemHeight:o,collisionPosition:M,collisionWidth:P,collisionHeight:Q,offset:[d[0]+R[0],d[1]+R[1]],my:e.my,at:e.at,within:n,elem:V})
}});
if(e.using){O=function(G){var E=f.left-S.left,H=E+h-T,F=f.top-S.top,I=F+k-o,J={target:{element:j,left:f.left,top:f.top,width:h,height:k},element:{element:V,left:S.left,top:S.top,width:T,height:o},horizontal:H<0?"left":E>0?"right":"center",vertical:I<0?"top":F>0?"bottom":"middle"};
if(h<T&&p(E+H)<h){J.horizontal="center"
}if(k<o&&p(F+I)<k){J.vertical="middle"
}if(t(p(E),p(H))>t(p(F),p(I))){J.important="horizontal"
}else{J.important="vertical"
}e.using.call(this,G,J)
}
}V.offset(z.extend(S,{using:O}))
})
};
z.ui.position={fit:{left:function(h,j){var a=j.within,f=a.isWindow?a.scrollLeft:a.offset.left,d=a.width,g=h.left-j.collisionPosition.marginLeft,e=f-g,b=g+j.collisionWidth-d-f,c;
if(j.collisionWidth>d){if(e>0&&b<=0){c=h.left+e+j.collisionWidth-d-f;
h.left+=e-c
}else{if(b>0&&e<=0){h.left=f
}else{if(e>b){h.left=f+d-j.collisionWidth
}else{h.left=f
}}}}else{if(e>0){h.left+=e
}else{if(b>0){h.left-=b
}else{h.left=t(h.left-g,h.left)
}}}},top:function(j,a){var b=a.within,e=b.isWindow?b.scrollTop:b.offset.top,d=a.within.height,g=j.top-a.collisionPosition.marginTop,f=e-g,h=g+a.collisionHeight-d-e,c;
if(a.collisionHeight>d){if(f>0&&h<=0){c=j.top+f+a.collisionHeight-d-e;
j.top+=f-c
}else{if(h>0&&f<=0){j.top=e
}else{if(f>h){j.top=e+d-a.collisionHeight
}else{j.top=e
}}}}else{if(f>0){j.top+=f
}else{if(h>0){j.top-=h
}else{j.top=t(j.top-g,j.top)
}}}}},flip:{left:function(m,n){var o=n.within,g=o.offset.left+o.scrollLeft,c=o.width,a=o.isWindow?o.scrollLeft:o.offset.left,k=m.left-n.collisionPosition.marginLeft,f=k-a,b=k+n.collisionWidth-c-a,h=n.my[0]==="left"?-n.elemWidth:n.my[0]==="right"?n.elemWidth:0,e=n.at[0]==="left"?n.targetWidth:n.at[0]==="right"?-n.targetWidth:0,E=-2*n.offset[0],d,j;
if(f<0){d=m.left+h+e+E+n.collisionWidth-c-g;
if(d<0||d<p(f)){m.left+=h+e+E
}}else{if(b>0){j=m.left-n.collisionPosition.marginLeft+h+e+E-a;
if(j>0||p(j)<b){m.left+=h+e+E
}}}},top:function(o,E){var F=E.within,e=F.offset.top+F.scrollTop,d=F.height,f=F.isWindow?F.scrollTop:F.offset.top,m=o.top-E.collisionPosition.marginTop,j=m-f,n=m+E.collisionHeight-d-f,h=E.my[1]==="top",k=h?-E.elemHeight:E.my[1]==="bottom"?E.elemHeight:0,b=E.at[1]==="top"?E.targetHeight:E.at[1]==="bottom"?-E.targetHeight:0,a=-2*E.offset[1],g,c;
if(j<0){c=o.top+k+b+a+E.collisionHeight-d-e;
if((o.top+k+b+a)>j&&(c<0||c<p(j))){o.top+=k+b+a
}}else{if(n>0){g=o.top-E.collisionPosition.marginTop+k+b+a-f;
if((o.top+k+b+a)>n&&(g>0||p(g)<n)){o.top+=k+b+a
}}}}},flipfit:{left:function(){z.ui.position.flip.left.apply(this,arguments);
z.ui.position.fit.left.apply(this,arguments)
},top:function(){z.ui.position.flip.top.apply(this,arguments);
z.ui.position.fit.top.apply(this,arguments)
}}};
(function(){var c,a,f,d,e,g=document.getElementsByTagName("body")[0],b=document.createElement("div");
c=document.createElement(g?"div":"body");
f={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};
if(g){z.extend(f,{position:"absolute",left:"-1000px",top:"-1000px"})
}for(e in f){c.style[e]=f[e]
}c.appendChild(b);
a=g||document.documentElement;
a.insertBefore(c,a.firstChild);
b.style.cssText="position: absolute; left: 10.7432222px;";
d=z(b).offset().left;
z.support.offsetFractions=d>10&&d<11;
c.innerHTML="";
a.removeChild(c)
})()
}(jQuery));
(function(d,c){d.widget("ui.draggable",d.ui.mouse,{version:"1.10.3",widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false,drag:null,start:null,stop:null},_create:function(){if(this.options.helper==="original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"
}if(this.options.addClasses){this.element.addClass("ui-draggable")
}if(this.options.disabled){this.element.addClass("ui-draggable-disabled")
}this._mouseInit()
},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
this._mouseDestroy()
},_mouseCapture:function(b){var a=this.options;
if(this.helper||a.disabled||d(b.target).closest(".ui-resizable-handle").length>0){return false
}this.handle=this._getHandle(b);
if(!this.handle){return false
}d(a.iframeFix===true?"iframe":a.iframeFix).each(function(){d("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(d(this).offset()).appendTo("body")
});
return true
},_mouseStart:function(b){var a=this.options;
this.helper=this._createHelper(b);
this.helper.addClass("ui-draggable-dragging");
this._cacheHelperProportions();
if(d.ui.ddmanager){d.ui.ddmanager.current=this
}this._cacheMargins();
this.cssPosition=this.helper.css("position");
this.scrollParent=this.helper.scrollParent();
this.offsetParent=this.helper.offsetParent();
this.offsetParentCssPosition=this.offsetParent.css("position");
this.offset=this.positionAbs=this.element.offset();
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
this.offset.scroll=false;
d.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this.position=this._generatePosition(b);
this.originalPageX=b.pageX;
this.originalPageY=b.pageY;
(a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt));
this._setContainment();
if(this._trigger("start",b)===false){this._clear();
return false
}this._cacheHelperProportions();
if(d.ui.ddmanager&&!a.dropBehaviour){d.ui.ddmanager.prepareOffsets(this,b)
}this._mouseDrag(b,true);
if(d.ui.ddmanager){d.ui.ddmanager.dragStart(this,b)
}return true
},_mouseDrag:function(f,a){if(this.offsetParentCssPosition==="fixed"){this.offset.parent=this._getParentOffset()
}this.position=this._generatePosition(f);
this.positionAbs=this._convertPositionTo("absolute");
if(!a){var b=this._uiHash();
if(this._trigger("drag",f,b)===false){this._mouseUp({});
return false
}this.position=b.position
}if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px"
}if(d.ui.ddmanager){d.ui.ddmanager.drag(this,f)
}return false
},_mouseStop:function(b){var f=this,a=false;
if(d.ui.ddmanager&&!this.options.dropBehaviour){a=d.ui.ddmanager.drop(this,b)
}if(this.dropped){a=this.dropped;
this.dropped=false
}if(this.options.helper==="original"&&!d.contains(this.element[0].ownerDocument,this.element[0])){return false
}if((this.options.revert==="invalid"&&!a)||(this.options.revert==="valid"&&a)||this.options.revert===true||(d.isFunction(this.options.revert)&&this.options.revert.call(this.element,a))){d(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(f._trigger("stop",b)!==false){f._clear()
}})
}else{if(this._trigger("stop",b)!==false){this._clear()
}}return false
},_mouseUp:function(a){d("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)
});
if(d.ui.ddmanager){d.ui.ddmanager.dragStop(this,a)
}return d.ui.mouse.prototype._mouseUp.call(this,a)
},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp({})
}else{this._clear()
}return this
},_getHandle:function(a){return this.options.handle?!!d(a.target).closest(this.element.find(this.options.handle)).length:true
},_createHelper:function(b){var a=this.options,f=d.isFunction(a.helper)?d(a.helper.apply(this.element[0],[b])):(a.helper==="clone"?this.element.clone().removeAttr("id"):this.element);
if(!f.parents("body").length){f.appendTo((a.appendTo==="parent"?this.element[0].parentNode:a.appendTo))
}if(f[0]!==this.element[0]&&!(/(fixed|absolute)/).test(f.css("position"))){f.css("position","absolute")
}return f
},_adjustOffsetFromHelper:function(a){if(typeof a==="string"){a=a.split(" ")
}if(d.isArray(a)){a={left:+a[0],top:+a[1]||0}
}if("left" in a){this.offset.click.left=a.left+this.margins.left
}if("right" in a){this.offset.click.left=this.helperProportions.width-a.right+this.margins.left
}if("top" in a){this.offset.click.top=a.top+this.margins.top
}if("bottom" in a){this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top
}},_getParentOffset:function(){var a=this.offsetParent.offset();
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&d.contains(this.scrollParent[0],this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();
a.top+=this.scrollParent.scrollTop()
}if((this.offsetParent[0]===document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&d.ui.ie)){a={top:0,left:0}
}return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var a=this.element.position();
return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}else{return{top:0,left:0}
}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0),right:(parseInt(this.element.css("marginRight"),10)||0),bottom:(parseInt(this.element.css("marginBottom"),10)||0)}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var h,a,j,b=this.options;
if(!b.containment){this.containment=null;
return
}if(b.containment==="window"){this.containment=[d(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,d(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,d(window).scrollLeft()+d(window).width()-this.helperProportions.width-this.margins.left,d(window).scrollTop()+(d(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];
return
}if(b.containment==="document"){this.containment=[0,0,d(document).width()-this.helperProportions.width-this.margins.left,(d(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];
return
}if(b.containment.constructor===Array){this.containment=b.containment;
return
}if(b.containment==="parent"){b.containment=this.helper[0].parentNode
}a=d(b.containment);
j=a[0];
if(!j){return
}h=a.css("overflow")!=="hidden";
this.containment=[(parseInt(a.css("borderLeftWidth"),10)||0)+(parseInt(a.css("paddingLeft"),10)||0),(parseInt(a.css("borderTopWidth"),10)||0)+(parseInt(a.css("paddingTop"),10)||0),(h?Math.max(j.scrollWidth,j.offsetWidth):j.offsetWidth)-(parseInt(a.css("borderRightWidth"),10)||0)-(parseInt(a.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(h?Math.max(j.scrollHeight,j.offsetHeight):j.offsetHeight)-(parseInt(a.css("borderBottomWidth"),10)||0)-(parseInt(a.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];
this.relative_container=a
},_convertPositionTo:function(b,a){if(!a){a=this.position
}var h=b==="absolute"?1:-1,j=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&d.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent;
if(!this.offset.scroll){this.offset.scroll={top:j.scrollTop(),left:j.scrollLeft()}
}return{top:(a.top+this.offset.relative.top*h+this.offset.parent.top*h-((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():this.offset.scroll.top)*h)),left:(a.left+this.offset.relative.left*h+this.offset.parent.left*h-((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():this.offset.scroll.left)*h))}
},_generatePosition:function(r){var s,m,b,p,q=this.options,a=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&d.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,n=r.pageX,o=r.pageY;
if(!this.offset.scroll){this.offset.scroll={top:a.scrollTop(),left:a.scrollLeft()}
}if(this.originalPosition){if(this.containment){if(this.relative_container){m=this.relative_container.offset();
s=[this.containment[0]+m.left,this.containment[1]+m.top,this.containment[2]+m.left,this.containment[3]+m.top]
}else{s=this.containment
}if(r.pageX-this.offset.click.left<s[0]){n=s[0]+this.offset.click.left
}if(r.pageY-this.offset.click.top<s[1]){o=s[1]+this.offset.click.top
}if(r.pageX-this.offset.click.left>s[2]){n=s[2]+this.offset.click.left
}if(r.pageY-this.offset.click.top>s[3]){o=s[3]+this.offset.click.top
}}if(q.grid){b=q.grid[1]?this.originalPageY+Math.round((o-this.originalPageY)/q.grid[1])*q.grid[1]:this.originalPageY;
o=s?((b-this.offset.click.top>=s[1]||b-this.offset.click.top>s[3])?b:((b-this.offset.click.top>=s[1])?b-q.grid[1]:b+q.grid[1])):b;
p=q.grid[0]?this.originalPageX+Math.round((n-this.originalPageX)/q.grid[0])*q.grid[0]:this.originalPageX;
n=s?((p-this.offset.click.left>=s[0]||p-this.offset.click.left>s[2])?p:((p-this.offset.click.left>=s[0])?p-q.grid[0]:p+q.grid[0])):p
}}return{top:(o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():this.offset.scroll.top)),left:(n-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():this.offset.scroll.left))}
},_clear:function(){this.helper.removeClass("ui-draggable-dragging");
if(this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()
}this.helper=null;
this.cancelHelperRemoval=false
},_trigger:function(f,b,a){a=a||this._uiHash();
d.ui.plugin.call(this,f,[b,a]);
if(f==="drag"){this.positionAbs=this._convertPositionTo("absolute")
}return d.Widget.prototype._trigger.call(this,f,b,a)
},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}
}});
d.ui.plugin.add("draggable","connectToSortable",{start:function(j,b){var h=d(this).data("ui-draggable"),a=h.options,k=d.extend({},b,{item:h.element});
h.sortables=[];
d(a.connectToSortable).each(function(){var e=d.data(this,"ui-sortable");
if(e&&!e.options.disabled){h.sortables.push({instance:e,shouldRevert:e.options.revert});
e.refreshPositions();
e._trigger("activate",j,k)
}})
},stop:function(g,a){var b=d(this).data("ui-draggable"),h=d.extend({},a,{item:b.element});
d.each(b.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;
b.cancelHelperRemoval=true;
this.instance.cancelHelperRemoval=false;
if(this.shouldRevert){this.instance.options.revert=this.shouldRevert
}this.instance._mouseStop(g);
this.instance.options.helper=this.instance.options._helper;
if(b.options.helper==="original"){this.instance.currentItem.css({top:"auto",left:"auto"})
}}else{this.instance.cancelHelperRemoval=false;
this.instance._trigger("deactivate",g,h)
}})
},drag:function(g,a){var b=d(this).data("ui-draggable"),h=this;
d.each(b.sortables,function(){var f=false,e=this;
this.instance.positionAbs=b.positionAbs;
this.instance.helperProportions=b.helperProportions;
this.instance.offset.click=b.offset.click;
if(this.instance._intersectsWith(this.instance.containerCache)){f=true;
d.each(b.sortables,function(){this.instance.positionAbs=b.positionAbs;
this.instance.helperProportions=b.helperProportions;
this.instance.offset.click=b.offset.click;
if(this!==e&&this.instance._intersectsWith(this.instance.containerCache)&&d.contains(e.instance.element[0],this.instance.element[0])){f=false
}return f
})
}if(f){if(!this.instance.isOver){this.instance.isOver=1;
this.instance.currentItem=d(h).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",true);
this.instance.options._helper=this.instance.options.helper;
this.instance.options.helper=function(){return a.helper[0]
};
g.target=this.instance.currentItem[0];
this.instance._mouseCapture(g,true);
this.instance._mouseStart(g,true,true);
this.instance.offset.click.top=b.offset.click.top;
this.instance.offset.click.left=b.offset.click.left;
this.instance.offset.parent.left-=b.offset.parent.left-this.instance.offset.parent.left;
this.instance.offset.parent.top-=b.offset.parent.top-this.instance.offset.parent.top;
b._trigger("toSortable",g);
b.dropped=this.instance.element;
b.currentItem=b.element;
this.instance.fromOutside=b
}if(this.instance.currentItem){this.instance._mouseDrag(g)
}}else{if(this.instance.isOver){this.instance.isOver=0;
this.instance.cancelHelperRemoval=true;
this.instance.options.revert=false;
this.instance._trigger("out",g,this.instance._uiHash(this.instance));
this.instance._mouseStop(g,true);
this.instance.options.helper=this.instance.options._helper;
this.instance.currentItem.remove();
if(this.instance.placeholder){this.instance.placeholder.remove()
}b._trigger("fromSortable",g);
b.dropped=false
}}})
}});
d.ui.plugin.add("draggable","cursor",{start:function(){var b=d("body"),a=d(this).data("ui-draggable").options;
if(b.css("cursor")){a._cursor=b.css("cursor")
}b.css("cursor",a.cursor)
},stop:function(){var a=d(this).data("ui-draggable").options;
if(a._cursor){d("body").css("cursor",a._cursor)
}}});
d.ui.plugin.add("draggable","opacity",{start:function(g,b){var h=d(b.helper),a=d(this).data("ui-draggable").options;
if(h.css("opacity")){a._opacity=h.css("opacity")
}h.css("opacity",a.opacity)
},stop:function(f,b){var a=d(this).data("ui-draggable").options;
if(a._opacity){d(b.helper).css("opacity",a._opacity)
}}});
d.ui.plugin.add("draggable","scroll",{start:function(){var a=d(this).data("ui-draggable");
if(a.scrollParent[0]!==document&&a.scrollParent[0].tagName!=="HTML"){a.overflowOffset=a.scrollParent.offset()
}},drag:function(b){var g=d(this).data("ui-draggable"),a=g.options,h=false;
if(g.scrollParent[0]!==document&&g.scrollParent[0].tagName!=="HTML"){if(!a.axis||a.axis!=="x"){if((g.overflowOffset.top+g.scrollParent[0].offsetHeight)-b.pageY<a.scrollSensitivity){g.scrollParent[0].scrollTop=h=g.scrollParent[0].scrollTop+a.scrollSpeed
}else{if(b.pageY-g.overflowOffset.top<a.scrollSensitivity){g.scrollParent[0].scrollTop=h=g.scrollParent[0].scrollTop-a.scrollSpeed
}}}if(!a.axis||a.axis!=="y"){if((g.overflowOffset.left+g.scrollParent[0].offsetWidth)-b.pageX<a.scrollSensitivity){g.scrollParent[0].scrollLeft=h=g.scrollParent[0].scrollLeft+a.scrollSpeed
}else{if(b.pageX-g.overflowOffset.left<a.scrollSensitivity){g.scrollParent[0].scrollLeft=h=g.scrollParent[0].scrollLeft-a.scrollSpeed
}}}}else{if(!a.axis||a.axis!=="x"){if(b.pageY-d(document).scrollTop()<a.scrollSensitivity){h=d(document).scrollTop(d(document).scrollTop()-a.scrollSpeed)
}else{if(d(window).height()-(b.pageY-d(document).scrollTop())<a.scrollSensitivity){h=d(document).scrollTop(d(document).scrollTop()+a.scrollSpeed)
}}}if(!a.axis||a.axis!=="y"){if(b.pageX-d(document).scrollLeft()<a.scrollSensitivity){h=d(document).scrollLeft(d(document).scrollLeft()-a.scrollSpeed)
}else{if(d(window).width()-(b.pageX-d(document).scrollLeft())<a.scrollSensitivity){h=d(document).scrollLeft(d(document).scrollLeft()+a.scrollSpeed)
}}}}if(h!==false&&d.ui.ddmanager&&!a.dropBehaviour){d.ui.ddmanager.prepareOffsets(g,b)
}}});
d.ui.plugin.add("draggable","snap",{start:function(){var b=d(this).data("ui-draggable"),a=b.options;
b.snapElements=[];
d(a.snap.constructor!==String?(a.snap.items||":data(ui-draggable)"):a.snap).each(function(){var g=d(this),h=g.offset();
if(this!==b.element[0]){b.snapElements.push({item:this,width:g.outerWidth(),height:g.outerHeight(),top:h.top,left:h.left})
}})
},drag:function(B,F){var O,a,J,I,C,G,H,E,t,K,L=d(this).data("ui-draggable"),D=L.options,b=D.snapTolerance,o=F.offset.left,r=o+L.helperProportions.width,M=F.offset.top,N=M+L.helperProportions.height;
for(t=L.snapElements.length-1;
t>=0;
t--){C=L.snapElements[t].left;
G=C+L.snapElements[t].width;
H=L.snapElements[t].top;
E=H+L.snapElements[t].height;
if(r<C-b||o>G+b||N<H-b||M>E+b||!d.contains(L.snapElements[t].item.ownerDocument,L.snapElements[t].item)){if(L.snapElements[t].snapping){(L.options.snap.release&&L.options.snap.release.call(L.element,B,d.extend(L._uiHash(),{snapItem:L.snapElements[t].item})))
}L.snapElements[t].snapping=false;
continue
}if(D.snapMode!=="inner"){O=Math.abs(H-N)<=b;
a=Math.abs(E-M)<=b;
J=Math.abs(C-r)<=b;
I=Math.abs(G-o)<=b;
if(O){F.position.top=L._convertPositionTo("relative",{top:H-L.helperProportions.height,left:0}).top-L.margins.top
}if(a){F.position.top=L._convertPositionTo("relative",{top:E,left:0}).top-L.margins.top
}if(J){F.position.left=L._convertPositionTo("relative",{top:0,left:C-L.helperProportions.width}).left-L.margins.left
}if(I){F.position.left=L._convertPositionTo("relative",{top:0,left:G}).left-L.margins.left
}}K=(O||a||J||I);
if(D.snapMode!=="outer"){O=Math.abs(H-M)<=b;
a=Math.abs(E-N)<=b;
J=Math.abs(C-o)<=b;
I=Math.abs(G-r)<=b;
if(O){F.position.top=L._convertPositionTo("relative",{top:H,left:0}).top-L.margins.top
}if(a){F.position.top=L._convertPositionTo("relative",{top:E-L.helperProportions.height,left:0}).top-L.margins.top
}if(J){F.position.left=L._convertPositionTo("relative",{top:0,left:C}).left-L.margins.left
}if(I){F.position.left=L._convertPositionTo("relative",{top:0,left:G-L.helperProportions.width}).left-L.margins.left
}}if(!L.snapElements[t].snapping&&(O||a||J||I||K)){(L.options.snap.snap&&L.options.snap.snap.call(L.element,B,d.extend(L._uiHash(),{snapItem:L.snapElements[t].item})))
}L.snapElements[t].snapping=(O||a||J||I||K)
}}});
d.ui.plugin.add("draggable","stack",{start:function(){var f,a=this.data("ui-draggable").options,b=d.makeArray(d(a.stack)).sort(function(e,h){return(parseInt(d(e).css("zIndex"),10)||0)-(parseInt(d(h).css("zIndex"),10)||0)
});
if(!b.length){return
}f=parseInt(d(b[0]).css("zIndex"),10)||0;
d(b).each(function(e){d(this).css("zIndex",f+e)
});
this.css("zIndex",(f+b.length))
}});
d.ui.plugin.add("draggable","zIndex",{start:function(g,b){var h=d(b.helper),a=d(this).data("ui-draggable").options;
if(h.css("zIndex")){a._zIndex=h.css("zIndex")
}h.css("zIndex",a.zIndex)
},stop:function(f,b){var a=d(this).data("ui-draggable").options;
if(a._zIndex){d(b.helper).css("zIndex",a._zIndex)
}}})
})(jQuery);
(function(d,f){function e(b,c,a){return(b>c)&&(b<(c+a))
}d.widget("ui.droppable",{version:"1.10.3",widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var a=this.options,b=a.accept;
this.isover=false;
this.isout=true;
this.accept=d.isFunction(b)?b:function(c){return c.is(b)
};
this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};
d.ui.ddmanager.droppables[a.scope]=d.ui.ddmanager.droppables[a.scope]||[];
d.ui.ddmanager.droppables[a.scope].push(this);
(a.addClasses&&this.element.addClass("ui-droppable"))
},_destroy:function(){var a=0,b=d.ui.ddmanager.droppables[this.options.scope];
for(;
a<b.length;
a++){if(b[a]===this){b.splice(a,1)
}}this.element.removeClass("ui-droppable ui-droppable-disabled")
},_setOption:function(b,a){if(b==="accept"){this.accept=d.isFunction(a)?a:function(c){return c.is(a)
}
}d.Widget.prototype._setOption.apply(this,arguments)
},_activate:function(a){var b=d.ui.ddmanager.current;
if(this.options.activeClass){this.element.addClass(this.options.activeClass)
}if(b){this._trigger("activate",a,this.ui(b))
}},_deactivate:function(a){var b=d.ui.ddmanager.current;
if(this.options.activeClass){this.element.removeClass(this.options.activeClass)
}if(b){this._trigger("deactivate",a,this.ui(b))
}},_over:function(a){var b=d.ui.ddmanager.current;
if(!b||(b.currentItem||b.element)[0]===this.element[0]){return
}if(this.accept.call(this.element[0],(b.currentItem||b.element))){if(this.options.hoverClass){this.element.addClass(this.options.hoverClass)
}this._trigger("over",a,this.ui(b))
}},_out:function(a){var b=d.ui.ddmanager.current;
if(!b||(b.currentItem||b.element)[0]===this.element[0]){return
}if(this.accept.call(this.element[0],(b.currentItem||b.element))){if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)
}this._trigger("out",a,this.ui(b))
}},_drop:function(c,b){var h=b||d.ui.ddmanager.current,a=false;
if(!h||(h.currentItem||h.element)[0]===this.element[0]){return false
}this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var g=d.data(this,"ui-droppable");
if(g.options.greedy&&!g.options.disabled&&g.options.scope===h.options.scope&&g.accept.call(g.element[0],(h.currentItem||h.element))&&d.ui.intersect(h,d.extend(g,{offset:g.element.offset()}),g.options.tolerance)){a=true;
return false
}});
if(a){return false
}if(this.accept.call(this.element[0],(h.currentItem||h.element))){if(this.options.activeClass){this.element.removeClass(this.options.activeClass)
}if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)
}this._trigger("drop",c,this.ui(h));
return this.element
}return false
},ui:function(a){return{draggable:(a.currentItem||a.element),helper:a.helper,position:a.position,offset:a.positionAbs}
}});
d.ui.intersect=function(a,u,c){if(!u.offset){return false
}var w,v,y=(a.positionAbs||a.position.absolute).left,z=y+a.helperProportions.width,r=(a.positionAbs||a.position.absolute).top,s=r+a.helperProportions.height,x=u.offset.left,A=x+u.proportions.width,b=u.offset.top,t=b+u.proportions.height;
switch(c){case"fit":return(x<=y&&z<=A&&b<=r&&s<=t);
case"intersect":return(x<y+(a.helperProportions.width/2)&&z-(a.helperProportions.width/2)<A&&b<r+(a.helperProportions.height/2)&&s-(a.helperProportions.height/2)<t);
case"pointer":w=((a.positionAbs||a.position.absolute).left+(a.clickOffset||a.offset.click).left);
v=((a.positionAbs||a.position.absolute).top+(a.clickOffset||a.offset.click).top);
return e(v,b,u.proportions.height)&&e(w,x,u.proportions.width);
case"touch":return((r>=b&&r<=t)||(s>=b&&s<=t)||(r<b&&s>t))&&((y>=x&&y<=A)||(z>=x&&z<=A)||(y<x&&z>A));
default:return false
}};
d.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(j,b){var m,n,o=d.ui.ddmanager.droppables[j.options.scope]||[],c=b?b.type:null,a=(j.currentItem||j.element).find(":data(ui-droppable)").addBack();
droppablesLoop:for(m=0;
m<o.length;
m++){if(o[m].options.disabled||(j&&!o[m].accept.call(o[m].element[0],(j.currentItem||j.element)))){continue
}for(n=0;
n<a.length;
n++){if(a[n]===o[m].element[0]){o[m].proportions.height=0;
continue droppablesLoop
}}o[m].visible=o[m].element.css("display")!=="none";
if(!o[m].visible){continue
}if(c==="mousedown"){o[m]._activate.call(o[m],b)
}o[m].offset=o[m].element.offset();
o[m].proportions={width:o[m].element[0].offsetWidth,height:o[m].element[0].offsetHeight}
}},drop:function(c,b){var a=false;
d.each((d.ui.ddmanager.droppables[c.options.scope]||[]).slice(),function(){if(!this.options){return
}if(!this.options.disabled&&this.visible&&d.ui.intersect(c,this,this.options.tolerance)){a=this._drop.call(this,b)||a
}if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],(c.currentItem||c.element))){this.isout=true;
this.isover=false;
this._deactivate.call(this,b)
}});
return a
},dragStart:function(b,a){b.element.parentsUntil("body").bind("scroll.droppable",function(){if(!b.options.refreshPositions){d.ui.ddmanager.prepareOffsets(b,a)
}})
},drag:function(b,a){if(b.options.refreshPositions){d.ui.ddmanager.prepareOffsets(b,a)
}d.each(d.ui.ddmanager.droppables[b.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return
}var k,n,o,m=d.ui.intersect(b,this,this.options.tolerance),c=!m&&this.isover?"isout":(m&&!this.isover?"isover":null);
if(!c){return
}if(this.options.greedy){n=this.options.scope;
o=this.element.parents(":data(ui-droppable)").filter(function(){return d.data(this,"ui-droppable").options.scope===n
});
if(o.length){k=d.data(o[0],"ui-droppable");
k.greedyChild=(c==="isover")
}}if(k&&c==="isover"){k.isover=false;
k.isout=true;
k._out.call(k,a)
}this[c]=true;
this[c==="isout"?"isover":"isout"]=false;
this[c==="isover"?"_over":"_out"].call(this,a);
if(k&&c==="isout"){k.isout=false;
k.isover=true;
k._over.call(k,a)
}})
},dragStop:function(b,a){b.element.parentsUntil("body").unbind("scroll.droppable");
if(!b.options.refreshPositions){d.ui.ddmanager.prepareOffsets(b,a)
}}}
})(jQuery);
(function(h,g){function e(a){return parseInt(a,10)||0
}function f(a){return !isNaN(parseInt(a,10))
}h.widget("ui.resizable",h.ui.mouse,{version:"1.10.3",widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var a,n,c,m,o,d=this,b=this.options;
this.element.addClass("ui-resizable");
h.extend(this,{_aspectRatio:!!(b.aspectRatio),aspectRatio:b.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:b.helper||b.ghost||b.animate?b.helper||"ui-resizable-helper":null});
if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){this.element.wrap(h("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));
this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable"));
this.elementIsWrapper=true;
this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});
this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});
this.originalResizeStyle=this.originalElement.css("resize");
this.originalElement.css("resize","none");
this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));
this.originalElement.css({margin:this.originalElement.css("margin")});
this._proportionallyResize()
}this.handles=b.handles||(!h(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});
if(this.handles.constructor===String){if(this.handles==="all"){this.handles="n,e,s,w,se,sw,ne,nw"
}a=this.handles.split(",");
this.handles={};
for(n=0;
n<a.length;
n++){c=h.trim(a[n]);
o="ui-resizable-"+c;
m=h("<div class='ui-resizable-handle "+o+"'></div>");
m.css({zIndex:b.zIndex});
if("se"===c){m.addClass("ui-icon ui-icon-gripsmall-diagonal-se")
}this.handles[c]=".ui-resizable-"+c;
this.element.append(m)
}}this._renderAxis=function(k){var t,s,j,r;
k=k||this.element;
for(t in this.handles){if(this.handles[t].constructor===String){this.handles[t]=h(this.handles[t],this.element).show()
}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){s=h(this.handles[t],this.element);
r=/sw|ne|nw|se|n|s/.test(t)?s.outerHeight():s.outerWidth();
j=["padding",/ne|nw|n/.test(t)?"Top":/se|sw|s/.test(t)?"Bottom":/^e$/.test(t)?"Right":"Left"].join("");
k.css(j,r);
this._proportionallyResize()
}if(!h(this.handles[t]).length){continue
}}};
this._renderAxis(this.element);
this._handles=h(".ui-resizable-handle",this.element).disableSelection();
this._handles.mouseover(function(){if(!d.resizing){if(this.className){m=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
}d.axis=m&&m[1]?m[1]:"se"
}});
if(b.autoHide){this._handles.hide();
h(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(b.disabled){return
}h(this).removeClass("ui-resizable-autohide");
d._handles.show()
}).mouseleave(function(){if(b.disabled){return
}if(!d.resizing){h(this).addClass("ui-resizable-autohide");
d._handles.hide()
}})
}this._mouseInit()
},_destroy:function(){this._mouseDestroy();
var a,b=function(c){h(c).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
};
if(this.elementIsWrapper){b(this.element);
a=this.element;
this.originalElement.css({position:a.css("position"),width:a.outerWidth(),height:a.outerHeight(),top:a.css("top"),left:a.css("left")}).insertAfter(a);
a.remove()
}this.originalElement.css("resize",this.originalResizeStyle);
b(this.originalElement);
return this
},_mouseCapture:function(b){var c,a,d=false;
for(c in this.handles){a=h(this.handles[c])[0];
if(a===b.target||h.contains(a,b.target)){d=true
}}return !this.options.disabled&&d
},_mouseStart:function(m){var a,d,b,c=this.options,n=this.element.position(),o=this.element;
this.resizing=true;
if((/absolute/).test(o.css("position"))){o.css({position:"absolute",top:o.css("top"),left:o.css("left")})
}else{if(o.is(".ui-draggable")){o.css({position:"absolute",top:n.top,left:n.left})
}}this._renderProxy();
a=e(this.helper.css("left"));
d=e(this.helper.css("top"));
if(c.containment){a+=h(c.containment).scrollLeft()||0;
d+=h(c.containment).scrollTop()||0
}this.offset=this.helper.offset();
this.position={left:a,top:d};
this.size=this._helper?{width:o.outerWidth(),height:o.outerHeight()}:{width:o.width(),height:o.height()};
this.originalSize=this._helper?{width:o.outerWidth(),height:o.outerHeight()}:{width:o.width(),height:o.height()};
this.originalPosition={left:a,top:d};
this.sizeDiff={width:o.outerWidth()-o.width(),height:o.outerHeight()-o.height()};
this.originalMousePosition={left:m.pageX,top:m.pageY};
this.aspectRatio=(typeof c.aspectRatio==="number")?c.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);
b=h(".ui-resizable-"+this.axis).css("cursor");
h("body").css("cursor",b==="auto"?this.axis+"-resize":b);
o.addClass("ui-resizable-resizing");
this._propagate("start",m);
return true
},_mouseDrag:function(z){var t,x=this.helper,s={},v=this.originalMousePosition,r=this.axis,c=this.position.top,y=this.position.left,d=this.size.width,u=this.size.height,a=(z.pageX-v.left)||0,b=(z.pageY-v.top)||0,w=this._change[r];
if(!w){return false
}t=w.apply(this,[z,a,b]);
this._updateVirtualBoundaries(z.shiftKey);
if(this._aspectRatio||z.shiftKey){t=this._updateRatio(t,z)
}t=this._respectSize(t,z);
this._updateCache(t);
this._propagate("resize",z);
if(this.position.top!==c){s.top=this.position.top+"px"
}if(this.position.left!==y){s.left=this.position.left+"px"
}if(this.size.width!==d){s.width=this.size.width+"px"
}if(this.size.height!==u){s.height=this.size.height+"px"
}x.css(s);
if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize()
}if(!h.isEmptyObject(s)){this._trigger("resize",z,this.ui())
}return false
},_mouseStop:function(q){this.resizing=false;
var r,t,s,d,a,o,b,p=this.options,c=this;
if(this._helper){r=this._proportionallyResizeElements;
t=r.length&&(/textarea/i).test(r[0].nodeName);
s=t&&h.ui.hasScroll(r[0],"left")?0:c.sizeDiff.height;
d=t?0:c.sizeDiff.width;
a={width:(c.helper.width()-d),height:(c.helper.height()-s)};
o=(parseInt(c.element.css("left"),10)+(c.position.left-c.originalPosition.left))||null;
b=(parseInt(c.element.css("top"),10)+(c.position.top-c.originalPosition.top))||null;
if(!p.animate){this.element.css(h.extend(a,{top:b,left:o}))
}c.helper.height(c.size.height);
c.helper.width(c.size.width);
if(this._helper&&!p.animate){this._proportionallyResize()
}}h("body").css("cursor","auto");
this.element.removeClass("ui-resizable-resizing");
this._propagate("stop",q);
if(this._helper){this.helper.remove()
}return false
},_updateVirtualBoundaries:function(m){var c,d,n,a,o,b=this.options;
o={minWidth:f(b.minWidth)?b.minWidth:0,maxWidth:f(b.maxWidth)?b.maxWidth:Infinity,minHeight:f(b.minHeight)?b.minHeight:0,maxHeight:f(b.maxHeight)?b.maxHeight:Infinity};
if(this._aspectRatio||m){c=o.minHeight*this.aspectRatio;
n=o.minWidth/this.aspectRatio;
d=o.maxHeight*this.aspectRatio;
a=o.maxWidth/this.aspectRatio;
if(c>o.minWidth){o.minWidth=c
}if(n>o.minHeight){o.minHeight=n
}if(d<o.maxWidth){o.maxWidth=d
}if(a<o.maxHeight){o.maxHeight=a
}}this._vBoundaries=o
},_updateCache:function(a){this.offset=this.helper.offset();
if(f(a.left)){this.position.left=a.left
}if(f(a.top)){this.position.top=a.top
}if(f(a.height)){this.size.height=a.height
}if(f(a.width)){this.size.width=a.width
}},_updateRatio:function(b){var a=this.position,c=this.size,d=this.axis;
if(f(b.height)){b.width=(b.height*this.aspectRatio)
}else{if(f(b.width)){b.height=(b.width/this.aspectRatio)
}}if(d==="sw"){b.left=a.left+(c.width-b.width);
b.top=null
}if(d==="nw"){b.top=a.top+(c.height-b.height);
b.left=a.left+(c.width-b.width)
}return b
},_respectSize:function(q){var t=this._vBoundaries,c=this.axis,a=f(q.width)&&t.maxWidth&&(t.maxWidth<q.width),o=f(q.height)&&t.maxHeight&&(t.maxHeight<q.height),s=f(q.width)&&t.minWidth&&(t.minWidth>q.width),b=f(q.height)&&t.minHeight&&(t.minHeight>q.height),u=this.originalPosition.left+this.originalSize.width,d=this.position.top+this.size.height,r=/sw|nw|w/.test(c),v=/nw|ne|n/.test(c);
if(s){q.width=t.minWidth
}if(b){q.height=t.minHeight
}if(a){q.width=t.maxWidth
}if(o){q.height=t.maxHeight
}if(s&&r){q.left=u-t.minWidth
}if(a&&r){q.left=u-t.maxWidth
}if(b&&v){q.top=d-t.minHeight
}if(o&&v){q.top=d-t.maxHeight
}if(!q.width&&!q.height&&!q.left&&q.top){q.top=null
}else{if(!q.width&&!q.height&&!q.top&&q.left){q.left=null
}}return q
},_proportionallyResize:function(){if(!this._proportionallyResizeElements.length){return
}var c,j,a,m,b,d=this.helper||this.element;
for(c=0;
c<this._proportionallyResizeElements.length;
c++){b=this._proportionallyResizeElements[c];
if(!this.borderDif){this.borderDif=[];
a=[b.css("borderTopWidth"),b.css("borderRightWidth"),b.css("borderBottomWidth"),b.css("borderLeftWidth")];
m=[b.css("paddingTop"),b.css("paddingRight"),b.css("paddingBottom"),b.css("paddingLeft")];
for(j=0;
j<a.length;
j++){this.borderDif[j]=(parseInt(a[j],10)||0)+(parseInt(m[j],10)||0)
}}b.css({height:(d.height()-this.borderDif[0]-this.borderDif[2])||0,width:(d.width()-this.borderDif[1]-this.borderDif[3])||0})
}},_renderProxy:function(){var b=this.element,a=this.options;
this.elementOffset=b.offset();
if(this._helper){this.helper=this.helper||h("<div style='overflow:hidden;'></div>");
this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++a.zIndex});
this.helper.appendTo("body").disableSelection()
}else{this.helper=this.element
}},_change:{e:function(a,b){return{width:this.originalSize.width+b}
},w:function(b,d){var c=this.originalSize,a=this.originalPosition;
return{left:a.left+d,width:c.width-d}
},n:function(b,d,j){var c=this.originalSize,a=this.originalPosition;
return{top:a.top+j,height:c.height-j}
},s:function(a,b,c){return{height:this.originalSize.height+c}
},se:function(a,b,c){return h.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[a,b,c]))
},sw:function(a,b,c){return h.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[a,b,c]))
},ne:function(a,b,c){return h.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[a,b,c]))
},nw:function(a,b,c){return h.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[a,b,c]))
}},_propagate:function(a,b){h.ui.plugin.call(this,a,[b,this.ui()]);
(a!=="resize"&&this._trigger(a,b,this.ui()))
},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}
}});
h.ui.plugin.add("resizable","animate",{stop:function(q){var b=h(this).data("ui-resizable"),o=b.options,r=b._proportionallyResizeElements,t=r.length&&(/textarea/i).test(r[0].nodeName),s=t&&h.ui.hasScroll(r[0],"left")?0:b.sizeDiff.height,c=t?0:b.sizeDiff.width,p={width:(b.size.width-c),height:(b.size.height-s)},d=(parseInt(b.element.css("left"),10)+(b.position.left-b.originalPosition.left))||null,a=(parseInt(b.element.css("top"),10)+(b.position.top-b.originalPosition.top))||null;
b.element.animate(h.extend(p,a&&d?{top:a,left:d}:{}),{duration:o.animateDuration,easing:o.animateEasing,step:function(){var j={width:parseInt(b.element.css("width"),10),height:parseInt(b.element.css("height"),10),top:parseInt(b.element.css("top"),10),left:parseInt(b.element.css("left"),10)};
if(r&&r.length){h(r[0]).css({width:j.width,height:j.height})
}b._updateCache(j);
b._propagate("resize",q)
}})
}});
h.ui.plugin.add("resizable","containment",{start:function(){var d,v,b,x,o,u,a,c=h(this).data("ui-resizable"),p=c.options,s=c.element,w=p.containment,t=(w instanceof h)?w.get(0):(/parent/.test(w))?s.parent().get(0):w;
if(!t){return
}c.containerElement=h(t);
if(/document/.test(w)||w===document){c.containerOffset={left:0,top:0};
c.containerPosition={left:0,top:0};
c.parentData={element:h(document),left:0,top:0,width:h(document).width(),height:h(document).height()||document.body.parentNode.scrollHeight}
}else{d=h(t);
v=[];
h(["Top","Right","Left","Bottom"]).each(function(j,k){v[j]=e(d.css("padding"+k))
});
c.containerOffset=d.offset();
c.containerPosition=d.position();
c.containerSize={height:(d.innerHeight()-v[3]),width:(d.innerWidth()-v[1])};
b=c.containerOffset;
x=c.containerSize.height;
o=c.containerSize.width;
u=(h.ui.hasScroll(t,"left")?t.scrollWidth:o);
a=(h.ui.hasScroll(t)?t.scrollHeight:x);
c.parentData={element:t,left:b.left,top:b.top,width:u,height:a}
}},resize:function(w){var r,a,s,t,o=h(this).data("ui-resizable"),u=o.options,c=o.containerOffset,d=o.position,b=o._aspectRatio||w.shiftKey,x={top:0,left:0},v=o.containerElement;
if(v[0]!==document&&(/static/).test(v.css("position"))){x=c
}if(d.left<(o._helper?c.left:0)){o.size.width=o.size.width+(o._helper?(o.position.left-c.left):(o.position.left-x.left));
if(b){o.size.height=o.size.width/o.aspectRatio
}o.position.left=u.helper?c.left:0
}if(d.top<(o._helper?c.top:0)){o.size.height=o.size.height+(o._helper?(o.position.top-c.top):o.position.top);
if(b){o.size.width=o.size.height*o.aspectRatio
}o.position.top=o._helper?c.top:0
}o.offset.left=o.parentData.left+o.position.left;
o.offset.top=o.parentData.top+o.position.top;
r=Math.abs((o._helper?o.offset.left-x.left:(o.offset.left-x.left))+o.sizeDiff.width);
a=Math.abs((o._helper?o.offset.top-x.top:(o.offset.top-c.top))+o.sizeDiff.height);
s=o.containerElement.get(0)===o.element.parent().get(0);
t=/relative|absolute/.test(o.containerElement.css("position"));
if(s&&t){r-=o.parentData.left
}if(r+o.size.width>=o.parentData.width){o.size.width=o.parentData.width-r;
if(b){o.size.height=o.size.width/o.aspectRatio
}}if(a+o.size.height>=o.parentData.height){o.size.height=o.parentData.height-a;
if(b){o.size.width=o.size.height*o.aspectRatio
}}},stop:function(){var d=h(this).data("ui-resizable"),r=d.options,c=d.containerOffset,s=d.containerPosition,q=d.containerElement,p=h(d.helper),a=p.offset(),b=p.outerWidth()-d.sizeDiff.width,o=p.outerHeight()-d.sizeDiff.height;
if(d._helper&&!r.animate&&(/relative/).test(q.css("position"))){h(this).css({left:a.left-s.left-c.left,width:b,height:o})
}if(d._helper&&!r.animate&&(/static/).test(q.css("position"))){h(this).css({left:a.left-s.left-c.left,width:b,height:o})
}}});
h.ui.plugin.add("resizable","alsoResize",{start:function(){var c=h(this).data("ui-resizable"),a=c.options,b=function(d){h(d).each(function(){var j=h(this);
j.data("ui-resizable-alsoresize",{width:parseInt(j.width(),10),height:parseInt(j.height(),10),left:parseInt(j.css("left"),10),top:parseInt(j.css("top"),10)})
})
};
if(typeof(a.alsoResize)==="object"&&!a.alsoResize.parentNode){if(a.alsoResize.length){a.alsoResize=a.alsoResize[0];
b(a.alsoResize)
}else{h.each(a.alsoResize,function(d){b(d)
})
}}else{b(a.alsoResize)
}},resize:function(n,d){var o=h(this).data("ui-resizable"),c=o.options,m=o.originalSize,a=o.originalPosition,b={height:(o.size.height-m.height)||0,width:(o.size.width-m.width)||0,top:(o.position.top-a.top)||0,left:(o.position.left-a.left)||0},p=function(j,k){h(j).each(function(){var t=h(this),s=h(this).data("ui-resizable-alsoresize"),u={},v=k&&k.length?k:t.parents(d.originalElement[0]).length?["width","height"]:["width","height","top","left"];
h.each(v,function(w,q){var r=(s[q]||0)+(b[q]||0);
if(r&&r>=0){u[q]=r||null
}});
t.css(u)
})
};
if(typeof(c.alsoResize)==="object"&&!c.alsoResize.nodeType){h.each(c.alsoResize,function(j,k){p(j,k)
})
}else{p(c.alsoResize)
}},stop:function(){h(this).removeData("resizable-alsoresize")
}});
h.ui.plugin.add("resizable","ghost",{start:function(){var b=h(this).data("ui-resizable"),a=b.options,c=b.size;
b.ghost=b.originalElement.clone();
b.ghost.css({opacity:0.25,display:"block",position:"relative",height:c.height,width:c.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof a.ghost==="string"?a.ghost:"");
b.ghost.appendTo(b.helper)
},resize:function(){var a=h(this).data("ui-resizable");
if(a.ghost){a.ghost.css({position:"relative",height:a.size.height,width:a.size.width})
}},stop:function(){var a=h(this).data("ui-resizable");
if(a.ghost&&a.helper){a.helper.get(0).removeChild(a.ghost.get(0))
}}});
h.ui.plugin.add("resizable","grid",{resize:function(){var a=h(this).data("ui-resizable"),z=a.options,H=a.size,x=a.originalSize,d=a.originalPosition,G=a.axis,C=typeof z.grid==="number"?[z.grid,z.grid]:z.grid,c=(C[0]||1),o=(C[1]||1),A=Math.round((H.width-x.width)/c)*c,B=Math.round((H.height-x.height)/o)*o,w=x.width+A,D=x.height+B,y=z.maxWidth&&(z.maxWidth<w),F=z.maxHeight&&(z.maxHeight<D),b=z.minWidth&&(z.minWidth>w),E=z.minHeight&&(z.minHeight>D);
z.grid=C;
if(b){w=w+c
}if(E){D=D+o
}if(y){w=w-c
}if(F){D=D-o
}if(/^(se|s|e)$/.test(G)){a.size.width=w;
a.size.height=D
}else{if(/^(ne)$/.test(G)){a.size.width=w;
a.size.height=D;
a.position.top=d.top-B
}else{if(/^(sw)$/.test(G)){a.size.width=w;
a.size.height=D;
a.position.left=d.left-A
}else{a.size.width=w;
a.size.height=D;
a.position.top=d.top-B;
a.position.left=d.left-A
}}}}})
})(jQuery);
(function(d,c){d.widget("ui.selectable",d.ui.mouse,{version:"1.10.3",options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var a,b=this;
this.element.addClass("ui-selectable");
this.dragged=false;
this.refresh=function(){a=d(b.options.filter,b.element[0]);
a.addClass("ui-selectee");
a.each(function(){var h=d(this),g=h.offset();
d.data(this,"selectable-item",{element:this,$element:h,left:g.left,top:g.top,right:g.left+h.outerWidth(),bottom:g.top+h.outerHeight(),startselected:false,selected:h.hasClass("ui-selected"),selecting:h.hasClass("ui-selecting"),unselecting:h.hasClass("ui-unselecting")})
})
};
this.refresh();
this.selectees=a.addClass("ui-selectee");
this._mouseInit();
this.helper=d("<div class='ui-selectable-helper'></div>")
},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");
this.element.removeClass("ui-selectable ui-selectable-disabled");
this._mouseDestroy()
},_mouseStart:function(a){var b=this,f=this.options;
this.opos=[a.pageX,a.pageY];
if(this.options.disabled){return
}this.selectees=d(f.filter,this.element[0]);
this._trigger("start",a);
d(f.appendTo).append(this.helper);
this.helper.css({left:a.pageX,top:a.pageY,width:0,height:0});
if(f.autoRefresh){this.refresh()
}this.selectees.filter(".ui-selected").each(function(){var e=d.data(this,"selectable-item");
e.startselected=true;
if(!a.metaKey&&!a.ctrlKey){e.$element.removeClass("ui-selected");
e.selected=false;
e.$element.addClass("ui-unselecting");
e.unselecting=true;
b._trigger("unselecting",a,{unselecting:e.element})
}});
d(a.target).parents().addBack().each(function(){var h,e=d.data(this,"selectable-item");
if(e){h=(!a.metaKey&&!a.ctrlKey)||!e.$element.hasClass("ui-selected");
e.$element.removeClass(h?"ui-unselecting":"ui-selected").addClass(h?"ui-selecting":"ui-unselecting");
e.unselecting=!h;
e.selecting=h;
e.selected=h;
if(h){b._trigger("selecting",a,{selecting:e.element})
}else{b._trigger("unselecting",a,{unselecting:e.element})
}return false
}})
},_mouseDrag:function(a){this.dragged=true;
if(this.options.disabled){return
}var m,b=this,o=this.options,p=this.opos[0],k=this.opos[1],q=a.pageX,n=a.pageY;
if(p>q){m=q;
q=p;
p=m
}if(k>n){m=n;
n=k;
k=m
}this.helper.css({left:p,top:k,width:q-p,height:n-k});
this.selectees.each(function(){var f=d.data(this,"selectable-item"),e=false;
if(!f||f.element===b.element[0]){return
}if(o.tolerance==="touch"){e=(!(f.left>q||f.right<p||f.top>n||f.bottom<k))
}else{if(o.tolerance==="fit"){e=(f.left>p&&f.right<q&&f.top>k&&f.bottom<n)
}}if(e){if(f.selected){f.$element.removeClass("ui-selected");
f.selected=false
}if(f.unselecting){f.$element.removeClass("ui-unselecting");
f.unselecting=false
}if(!f.selecting){f.$element.addClass("ui-selecting");
f.selecting=true;
b._trigger("selecting",a,{selecting:f.element})
}}else{if(f.selecting){if((a.metaKey||a.ctrlKey)&&f.startselected){f.$element.removeClass("ui-selecting");
f.selecting=false;
f.$element.addClass("ui-selected");
f.selected=true
}else{f.$element.removeClass("ui-selecting");
f.selecting=false;
if(f.startselected){f.$element.addClass("ui-unselecting");
f.unselecting=true
}b._trigger("unselecting",a,{unselecting:f.element})
}}if(f.selected){if(!a.metaKey&&!a.ctrlKey&&!f.startselected){f.$element.removeClass("ui-selected");
f.selected=false;
f.$element.addClass("ui-unselecting");
f.unselecting=true;
b._trigger("unselecting",a,{unselecting:f.element})
}}}});
return false
},_mouseStop:function(a){var b=this;
this.dragged=false;
d(".ui-unselecting",this.element[0]).each(function(){var f=d.data(this,"selectable-item");
f.$element.removeClass("ui-unselecting");
f.unselecting=false;
f.startselected=false;
b._trigger("unselected",a,{unselected:f.element})
});
d(".ui-selecting",this.element[0]).each(function(){var f=d.data(this,"selectable-item");
f.$element.removeClass("ui-selecting").addClass("ui-selected");
f.selecting=false;
f.selected=true;
f.startselected=true;
b._trigger("selected",a,{selected:f.element})
});
this._trigger("stop",a);
this.helper.remove();
return false
}})
})(jQuery);
(function(e,g){function f(b,c,a){return(b>c)&&(b<(c+a))
}function h(a){return(/left|right/).test(a.css("float"))||(/inline|table-cell/).test(a.css("display"))
}e.widget("ui.sortable",e.ui.mouse,{version:"1.10.3",widgetEventPrefix:"sort",ready:false,options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var a=this.options;
this.containerCache={};
this.element.addClass("ui-sortable");
this.refresh();
this.floating=this.items.length?a.axis==="x"||h(this.items[0].item):false;
this.offset=this.element.offset();
this._mouseInit();
this.ready=true
},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled");
this._mouseDestroy();
for(var a=this.items.length-1;
a>=0;
a--){this.items[a].item.removeData(this.widgetName+"-item")
}return this
},_setOption:function(b,a){if(b==="disabled"){this.options[b]=a;
this.widget().toggleClass("ui-sortable-disabled",!!a)
}else{e.Widget.prototype._setOption.apply(this,arguments)
}},_mouseCapture:function(c,b){var j=null,a=false,d=this;
if(this.reverting){return false
}if(this.options.disabled||this.options.type==="static"){return false
}this._refreshItems(c);
e(c.target).parents().each(function(){if(e.data(this,d.widgetName+"-item")===d){j=e(this);
return false
}});
if(e.data(c.target,d.widgetName+"-item")===d){j=e(c.target)
}if(!j){return false
}if(this.options.handle&&!b){e(this.options.handle,j).find("*").addBack().each(function(){if(this===c.target){a=true
}});
if(!a){return false
}}this.currentItem=j;
this._removeCurrentsFromItems();
return true
},_mouseStart:function(c,b,m){var d,n,a=this.options;
this.currentContainer=this;
this.refreshPositions();
this.helper=this._createHelper(c);
this._cacheHelperProportions();
this._cacheMargins();
this.scrollParent=this.helper.scrollParent();
this.offset=this.currentItem.offset();
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
e.extend(this.offset,{click:{left:c.pageX-this.offset.left,top:c.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.helper.css("position","absolute");
this.cssPosition=this.helper.css("position");
this.originalPosition=this._generatePosition(c);
this.originalPageX=c.pageX;
this.originalPageY=c.pageY;
(a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt));
this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};
if(this.helper[0]!==this.currentItem[0]){this.currentItem.hide()
}this._createPlaceholder();
if(a.containment){this._setContainment()
}if(a.cursor&&a.cursor!=="auto"){n=this.document.find("body");
this.storedCursor=n.css("cursor");
n.css("cursor",a.cursor);
this.storedStylesheet=e("<style>*{ cursor: "+a.cursor+" !important; }</style>").appendTo(n)
}if(a.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")
}this.helper.css("opacity",a.opacity)
}if(a.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")
}this.helper.css("zIndex",a.zIndex)
}if(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"){this.overflowOffset=this.scrollParent.offset()
}this._trigger("start",c,this._uiHash());
if(!this._preserveHelperProportions){this._cacheHelperProportions()
}if(!m){for(d=this.containers.length-1;
d>=0;
d--){this.containers[d]._trigger("activate",c,this._uiHash(this))
}}if(e.ui.ddmanager){e.ui.ddmanager.current=this
}if(e.ui.ddmanager&&!a.dropBehaviour){e.ui.ddmanager.prepareOffsets(this,c)
}this.dragging=true;
this.helper.addClass("ui-sortable-helper");
this._mouseDrag(c);
return true
},_mouseDrag:function(c){var m,d,n,a,b=this.options,o=false;
this.position=this._generatePosition(c);
this.positionAbs=this._convertPositionTo("absolute");
if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs
}if(this.options.scroll){if(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-c.pageY<b.scrollSensitivity){this.scrollParent[0].scrollTop=o=this.scrollParent[0].scrollTop+b.scrollSpeed
}else{if(c.pageY-this.overflowOffset.top<b.scrollSensitivity){this.scrollParent[0].scrollTop=o=this.scrollParent[0].scrollTop-b.scrollSpeed
}}if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-c.pageX<b.scrollSensitivity){this.scrollParent[0].scrollLeft=o=this.scrollParent[0].scrollLeft+b.scrollSpeed
}else{if(c.pageX-this.overflowOffset.left<b.scrollSensitivity){this.scrollParent[0].scrollLeft=o=this.scrollParent[0].scrollLeft-b.scrollSpeed
}}}else{if(c.pageY-e(document).scrollTop()<b.scrollSensitivity){o=e(document).scrollTop(e(document).scrollTop()-b.scrollSpeed)
}else{if(e(window).height()-(c.pageY-e(document).scrollTop())<b.scrollSensitivity){o=e(document).scrollTop(e(document).scrollTop()+b.scrollSpeed)
}}if(c.pageX-e(document).scrollLeft()<b.scrollSensitivity){o=e(document).scrollLeft(e(document).scrollLeft()-b.scrollSpeed)
}else{if(e(window).width()-(c.pageX-e(document).scrollLeft())<b.scrollSensitivity){o=e(document).scrollLeft(e(document).scrollLeft()+b.scrollSpeed)
}}}if(o!==false&&e.ui.ddmanager&&!b.dropBehaviour){e.ui.ddmanager.prepareOffsets(this,c)
}}this.positionAbs=this._convertPositionTo("absolute");
if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px"
}for(m=this.items.length-1;
m>=0;
m--){d=this.items[m];
n=d.item[0];
a=this._intersectsWithPointer(d);
if(!a){continue
}if(d.instance!==this.currentContainer){continue
}if(n!==this.currentItem[0]&&this.placeholder[a===1?"next":"prev"]()[0]!==n&&!e.contains(this.placeholder[0],n)&&(this.options.type==="semi-dynamic"?!e.contains(this.element[0],n):true)){this.direction=a===1?"down":"up";
if(this.options.tolerance==="pointer"||this._intersectsWithSides(d)){this._rearrange(c,d)
}else{break
}this._trigger("change",c,this._uiHash());
break
}}this._contactContainers(c);
if(e.ui.ddmanager){e.ui.ddmanager.drag(this,c)
}this._trigger("sort",c,this._uiHash());
this.lastPositionAbs=this.positionAbs;
return false
},_mouseStop:function(d,b){if(!d){return
}if(e.ui.ddmanager&&!this.options.dropBehaviour){e.ui.ddmanager.drop(this,d)
}if(this.options.revert){var k=this,a=this.placeholder.offset(),m=this.options.axis,c={};
if(!m||m==="x"){c.left=a.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)
}if(!m||m==="y"){c.top=a.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)
}this.reverting=true;
e(this.helper).animate(c,parseInt(this.options.revert,10)||500,function(){k._clear(d)
})
}else{this._clear(d,b)
}return false
},cancel:function(){if(this.dragging){this._mouseUp({target:null});
if(this.options.helper==="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
}else{this.currentItem.show()
}for(var a=this.containers.length-1;
a>=0;
a--){this.containers[a]._trigger("deactivate",null,this._uiHash(this));
if(this.containers[a].containerCache.over){this.containers[a]._trigger("out",null,this._uiHash(this));
this.containers[a].containerCache.over=0
}}}if(this.placeholder){if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])
}if(this.options.helper!=="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()
}e.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});
if(this.domPosition.prev){e(this.domPosition.prev).after(this.currentItem)
}else{e(this.domPosition.parent).prepend(this.currentItem)
}}return this
},serialize:function(a){var c=this._getItemsAsjQuery(a&&a.connected),b=[];
a=a||{};
e(c).each(function(){var d=(e(a.item||this).attr(a.attribute||"id")||"").match(a.expression||(/(.+)[\-=_](.+)/));
if(d){b.push((a.key||d[1]+"[]")+"="+(a.key&&a.expression?d[1]:d[2]))
}});
if(!b.length&&a.key){b.push(a.key+"=")
}return b.join("&")
},toArray:function(a){var c=this._getItemsAsjQuery(a&&a.connected),b=[];
a=a||{};
c.each(function(){b.push(e(a.item||this).attr(a.attribute||"id")||"")
});
return b
},_intersectsWith:function(a){var y=this.positionAbs.left,z=y+this.helperProportions.width,c=this.positionAbs.top,d=c+this.helperProportions.height,x=a.left,A=x+a.width,C=a.top,r=C+a.height,B=this.offset.click.top,t=this.offset.click.left,v=(this.options.axis==="x")||((c+B)>C&&(c+B)<r),b=(this.options.axis==="y")||((y+t)>x&&(y+t)<A),w=v&&b;
if(this.options.tolerance==="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!=="pointer"&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"])){return w
}else{return(x<y+(this.helperProportions.width/2)&&z-(this.helperProportions.width/2)<A&&C<c+(this.helperProportions.height/2)&&d-(this.helperProportions.height/2)<r)
}},_intersectsWithPointer:function(d){var c=(this.options.axis==="x")||f(this.positionAbs.top+this.offset.click.top,d.top,d.height),k=(this.options.axis==="y")||f(this.positionAbs.left+this.offset.click.left,d.left,d.width),a=c&&k,m=this._getDragVerticalDirection(),b=this._getDragHorizontalDirection();
if(!a){return false
}return this.floating?(((b&&b==="right")||m==="down")?2:1):(m&&(m==="down"?2:1))
},_intersectsWithSides:function(b){var d=f(this.positionAbs.top+this.offset.click.top,b.top+(b.height/2),b.height),c=f(this.positionAbs.left+this.offset.click.left,b.left+(b.width/2),b.width),j=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();
if(this.floating&&a){return((a==="right"&&c)||(a==="left"&&!c))
}else{return j&&((j==="down"&&d)||(j==="up"&&!d))
}},_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;
return a!==0&&(a>0?"down":"up")
},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;
return a!==0&&(a>0?"right":"left")
},refresh:function(a){this._refreshItems(a);
this.refreshPositions();
return this
},_connectWith:function(){var a=this.options;
return a.connectWith.constructor===String?[a.connectWith]:a.connectWith
},_getItemsAsjQuery:function(b){var d,j,q,a,p=[],o=[],c=this._connectWith();
if(c&&b){for(d=c.length-1;
d>=0;
d--){q=e(c[d]);
for(j=q.length-1;
j>=0;
j--){a=e.data(q[j],this.widgetFullName);
if(a&&a!==this&&!a.options.disabled){o.push([e.isFunction(a.options.items)?a.options.items.call(a.element):e(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a])
}}}}o.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);
for(d=o.length-1;
d>=0;
d--){o[d][0].each(function(){p.push(this)
})
}return e(p)
},_removeCurrentsFromItems:function(){var a=this.currentItem.find(":data("+this.widgetName+"-item)");
this.items=e.grep(this.items,function(b){for(var c=0;
c<a.length;
c++){if(a[c]===b.item[0]){return false
}}return true
})
},_refreshItems:function(y){this.items=[];
this.containers=[this];
var u,w,c,t,d,x,a,b,s=this.items,v=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],y,{item:this.currentItem}):e(this.options.items,this.element),this]],j=this._connectWith();
if(j&&this.ready){for(u=j.length-1;
u>=0;
u--){c=e(j[u]);
for(w=c.length-1;
w>=0;
w--){t=e.data(c[w],this.widgetFullName);
if(t&&t!==this&&!t.options.disabled){v.push([e.isFunction(t.options.items)?t.options.items.call(t.element[0],y,{item:this.currentItem}):e(t.options.items,t.element),t]);
this.containers.push(t)
}}}}for(u=v.length-1;
u>=0;
u--){d=v[u][1];
x=v[u][0];
for(w=0,b=x.length;
w<b;
w++){a=e(x[w]);
a.data(this.widgetName+"-item",d);
s.push({item:a,instance:d,width:0,height:0,left:0,top:0})
}}},refreshPositions:function(k){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()
}var c,b,d,a;
for(c=this.items.length-1;
c>=0;
c--){b=this.items[c];
if(b.instance!==this.currentContainer&&this.currentContainer&&b.item[0]!==this.currentItem[0]){continue
}d=this.options.toleranceElement?e(this.options.toleranceElement,b.item):b.item;
if(!k){b.width=d.outerWidth();
b.height=d.outerHeight()
}a=d.offset();
b.left=a.left;
b.top=a.top
}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)
}else{for(c=this.containers.length-1;
c>=0;
c--){a=this.containers[c].element.offset();
this.containers[c].containerCache.left=a.left;
this.containers[c].containerCache.top=a.top;
this.containers[c].containerCache.width=this.containers[c].element.outerWidth();
this.containers[c].containerCache.height=this.containers[c].element.outerHeight()
}}return this
},_createPlaceholder:function(b){b=b||this;
var c,a=b.options;
if(!a.placeholder||a.placeholder.constructor===String){c=a.placeholder;
a.placeholder={element:function(){var d=b.currentItem[0].nodeName.toLowerCase(),j=e("<"+d+">",b.document[0]).addClass(c||b.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");
if(d==="tr"){b.currentItem.children().each(function(){e("<td>&#160;</td>",b.document[0]).attr("colspan",e(this).attr("colspan")||1).appendTo(j)
})
}else{if(d==="img"){j.attr("src",b.currentItem.attr("src"))
}}if(!c){j.css("visibility","hidden")
}return j
},update:function(j,d){if(c&&!a.forcePlaceholderSize){return
}if(!d.height()){d.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10))
}if(!d.width()){d.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||0,10))
}}}
}b.placeholder=e(a.placeholder.element.call(b.element,b.currentItem));
b.currentItem.after(b.placeholder);
a.placeholder.update(b,b.placeholder)
},_contactContainers:function(z){var u,w,c,t,j,a,y,A,v,d,x=null,b=null;
for(u=this.containers.length-1;
u>=0;
u--){if(e.contains(this.currentItem[0],this.containers[u].element[0])){continue
}if(this._intersectsWith(this.containers[u].containerCache)){if(x&&e.contains(this.containers[u].element[0],x.element[0])){continue
}x=this.containers[u];
b=u
}else{if(this.containers[u].containerCache.over){this.containers[u]._trigger("out",z,this._uiHash(this));
this.containers[u].containerCache.over=0
}}}if(!x){return
}if(this.containers.length===1){if(!this.containers[b].containerCache.over){this.containers[b]._trigger("over",z,this._uiHash(this));
this.containers[b].containerCache.over=1
}}else{c=10000;
t=null;
d=x.floating||h(this.currentItem);
j=d?"left":"top";
a=d?"width":"height";
y=this.positionAbs[j]+this.offset.click[j];
for(w=this.items.length-1;
w>=0;
w--){if(!e.contains(this.containers[b].element[0],this.items[w].item[0])){continue
}if(this.items[w].item[0]===this.currentItem[0]){continue
}if(d&&!f(this.positionAbs.top+this.offset.click.top,this.items[w].top,this.items[w].height)){continue
}A=this.items[w].item.offset()[j];
v=false;
if(Math.abs(A-y)>Math.abs(A+this.items[w][a]-y)){v=true;
A+=this.items[w][a]
}if(Math.abs(A-y)<c){c=Math.abs(A-y);
t=this.items[w];
this.direction=v?"up":"down"
}}if(!t&&!this.options.dropOnEmpty){return
}if(this.currentContainer===this.containers[b]){return
}t?this._rearrange(z,t,null,true):this._rearrange(z,null,this.containers[b].element,true);
this._trigger("change",z,this._uiHash());
this.containers[b]._trigger("change",z,this._uiHash(this));
this.currentContainer=this.containers[b];
this.options.placeholder.update(this.currentContainer,this.placeholder);
this.containers[b]._trigger("over",z,this._uiHash(this));
this.containers[b].containerCache.over=1
}},_createHelper:function(b){var a=this.options,c=e.isFunction(a.helper)?e(a.helper.apply(this.element[0],[b,this.currentItem])):(a.helper==="clone"?this.currentItem.clone():this.currentItem);
if(!c.parents("body").length){e(a.appendTo!=="parent"?a.appendTo:this.currentItem[0].parentNode)[0].appendChild(c[0])
}if(c[0]===this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}
}if(!c[0].style.width||a.forceHelperSize){c.width(this.currentItem.width())
}if(!c[0].style.height||a.forceHelperSize){c.height(this.currentItem.height())
}return c
},_adjustOffsetFromHelper:function(a){if(typeof a==="string"){a=a.split(" ")
}if(e.isArray(a)){a={left:+a[0],top:+a[1]||0}
}if("left" in a){this.offset.click.left=a.left+this.margins.left
}if("right" in a){this.offset.click.left=this.helperProportions.width-a.right+this.margins.left
}if("top" in a){this.offset.click.top=a.top+this.margins.top
}if("bottom" in a){this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top
}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();
var a=this.offsetParent.offset();
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();
a.top+=this.scrollParent.scrollTop()
}if(this.offsetParent[0]===document.body||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&e.ui.ie)){a={top:0,left:0}
}return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var a=this.currentItem.position();
return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}else{return{top:0,left:0}
}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var c,a,d,b=this.options;
if(b.containment==="parent"){b.containment=this.helper[0].parentNode
}if(b.containment==="document"||b.containment==="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,e(b.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,(e(b.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]
}if(!(/^(document|window|parent)$/).test(b.containment)){c=e(b.containment)[0];
a=e(b.containment).offset();
d=(e(c).css("overflow")!=="hidden");
this.containment=[a.left+(parseInt(e(c).css("borderLeftWidth"),10)||0)+(parseInt(e(c).css("paddingLeft"),10)||0)-this.margins.left,a.top+(parseInt(e(c).css("borderTopWidth"),10)||0)+(parseInt(e(c).css("paddingTop"),10)||0)-this.margins.top,a.left+(d?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(e(c).css("borderLeftWidth"),10)||0)-(parseInt(e(c).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,a.top+(d?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(e(c).css("borderTopWidth"),10)||0)-(parseInt(e(c).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]
}},_convertPositionTo:function(c,a){if(!a){a=this.position
}var d=c==="absolute"?1:-1,j=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,b=(/(html|body)/i).test(j[0].tagName);
return{top:(a.top+this.offset.relative.top*d+this.offset.parent.top*d-((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(b?0:j.scrollTop()))*d)),left:(a.left+this.offset.relative.left*d+this.offset.parent.left*d-((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():b?0:j.scrollLeft())*d))}
},_generatePosition:function(m){var c,d,b=this.options,n=m.pageX,o=m.pageY,p=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,a=(/(html|body)/i).test(p[0].tagName);
if(this.cssPosition==="relative"&&!(this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()
}if(this.originalPosition){if(this.containment){if(m.pageX-this.offset.click.left<this.containment[0]){n=this.containment[0]+this.offset.click.left
}if(m.pageY-this.offset.click.top<this.containment[1]){o=this.containment[1]+this.offset.click.top
}if(m.pageX-this.offset.click.left>this.containment[2]){n=this.containment[2]+this.offset.click.left
}if(m.pageY-this.offset.click.top>this.containment[3]){o=this.containment[3]+this.offset.click.top
}}if(b.grid){c=this.originalPageY+Math.round((o-this.originalPageY)/b.grid[1])*b.grid[1];
o=this.containment?((c-this.offset.click.top>=this.containment[1]&&c-this.offset.click.top<=this.containment[3])?c:((c-this.offset.click.top>=this.containment[1])?c-b.grid[1]:c+b.grid[1])):c;
d=this.originalPageX+Math.round((n-this.originalPageX)/b.grid[0])*b.grid[0];
n=this.containment?((d-this.offset.click.left>=this.containment[0]&&d-this.offset.click.left<=this.containment[2])?d:((d-this.offset.click.left>=this.containment[0])?d-b.grid[0]:d+b.grid[0])):d
}}return{top:(o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(a?0:p.scrollTop())))),left:(n-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():a?0:p.scrollLeft())))}
},_rearrange:function(a,b,d,c){d?d[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction==="down"?b.item[0]:b.item[0].nextSibling));
this.counter=this.counter?++this.counter:1;
var k=this.counter;
this._delay(function(){if(k===this.counter){this.refreshPositions(!c)
}})
},_clear:function(c,b){this.reverting=false;
var d,a=[];
if(!this._noFinalSort&&this.currentItem.parent().length){this.placeholder.before(this.currentItem)
}this._noFinalSort=null;
if(this.helper[0]===this.currentItem[0]){for(d in this._storedCSS){if(this._storedCSS[d]==="auto"||this._storedCSS[d]==="static"){this._storedCSS[d]=""
}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
}else{this.currentItem.show()
}if(this.fromOutside&&!b){a.push(function(j){this._trigger("receive",j,this._uiHash(this.fromOutside))
})
}if((this.fromOutside||this.domPosition.prev!==this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!==this.currentItem.parent()[0])&&!b){a.push(function(j){this._trigger("update",j,this._uiHash())
})
}if(this!==this.currentContainer){if(!b){a.push(function(j){this._trigger("remove",j,this._uiHash())
});
a.push((function(j){return function(k){j._trigger("receive",k,this._uiHash(this))
}
}).call(this,this.currentContainer));
a.push((function(j){return function(k){j._trigger("update",k,this._uiHash(this))
}
}).call(this,this.currentContainer))
}}for(d=this.containers.length-1;
d>=0;
d--){if(!b){a.push((function(j){return function(k){j._trigger("deactivate",k,this._uiHash(this))
}
}).call(this,this.containers[d]))
}if(this.containers[d].containerCache.over){a.push((function(j){return function(k){j._trigger("out",k,this._uiHash(this))
}
}).call(this,this.containers[d]));
this.containers[d].containerCache.over=0
}}if(this.storedCursor){this.document.find("body").css("cursor",this.storedCursor);
this.storedStylesheet.remove()
}if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity)
}if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex==="auto"?"":this._storedZIndex)
}this.dragging=false;
if(this.cancelHelperRemoval){if(!b){this._trigger("beforeStop",c,this._uiHash());
for(d=0;
d<a.length;
d++){a[d].call(this,c)
}this._trigger("stop",c,this._uiHash())
}this.fromOutside=false;
return false
}if(!b){this._trigger("beforeStop",c,this._uiHash())
}this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
if(this.helper[0]!==this.currentItem[0]){this.helper.remove()
}this.helper=null;
if(!b){for(d=0;
d<a.length;
d++){a[d].call(this,c)
}this._trigger("stop",c,this._uiHash())
}this.fromOutside=false;
return true
},_trigger:function(){if(e.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel()
}},_uiHash:function(b){var a=b||this;
return{helper:a.helper,placeholder:a.placeholder||e([]),position:a.position,originalPosition:a.originalPosition,offset:a.positionAbs,item:a.currentItem,sender:b?b.element:null}
}})
})(jQuery);
(function(r,v){var m,s,w,p,o="ui-button ui-widget ui-state-default ui-corner-all",u="ui-state-hover ui-state-active ",q="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",n=function(){var a=r(this);
setTimeout(function(){a.find(":ui-button").button("refresh")
},1)
},t=function(a){var b=a.name,d=a.form,c=r([]);
if(b){b=b.replace(/'/g,"\\'");
if(d){c=r(d).find("[name='"+b+"']")
}else{c=r("[name='"+b+"']",a.ownerDocument).filter(function(){return !this.form
})
}}return c
};
r.widget("ui.button",{version:"1.10.3",defaultElement:"<button>",options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,n);
if(typeof this.options.disabled!=="boolean"){this.options.disabled=!!this.element.prop("disabled")
}else{this.element.prop("disabled",this.options.disabled)
}this._determineButtonType();
this.hasTitle=!!this.buttonElement.attr("title");
var d=this,a=this.options,c=this.type==="checkbox"||this.type==="radio",e=!c?"ui-state-active":"",b="ui-state-focus";
if(a.label===null){a.label=(this.type==="input"?this.buttonElement.val():this.buttonElement.html())
}this._hoverable(this.buttonElement);
this.buttonElement.addClass(o).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(a.disabled){return
}if(this===m){r(this).addClass("ui-state-active")
}}).bind("mouseleave"+this.eventNamespace,function(){if(a.disabled){return
}r(this).removeClass(e)
}).bind("click"+this.eventNamespace,function(f){if(a.disabled){f.preventDefault();
f.stopImmediatePropagation()
}});
this.element.bind("focus"+this.eventNamespace,function(){d.buttonElement.addClass(b)
}).bind("blur"+this.eventNamespace,function(){d.buttonElement.removeClass(b)
});
if(c){this.element.bind("change"+this.eventNamespace,function(){if(p){return
}d.refresh()
});
this.buttonElement.bind("mousedown"+this.eventNamespace,function(f){if(a.disabled){return
}p=false;
s=f.pageX;
w=f.pageY
}).bind("mouseup"+this.eventNamespace,function(f){if(a.disabled){return
}if(s!==f.pageX||w!==f.pageY){p=true
}})
}if(this.type==="checkbox"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(a.disabled||p){return false
}})
}else{if(this.type==="radio"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(a.disabled||p){return false
}r(this).addClass("ui-state-active");
d.buttonElement.attr("aria-pressed","true");
var f=d.element[0];
t(f).not(f).map(function(){return r(this).button("widget")[0]
}).removeClass("ui-state-active").attr("aria-pressed","false")
})
}else{this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(a.disabled){return false
}r(this).addClass("ui-state-active");
m=this;
d.document.one("mouseup",function(){m=null
})
}).bind("mouseup"+this.eventNamespace,function(){if(a.disabled){return false
}r(this).removeClass("ui-state-active")
}).bind("keydown"+this.eventNamespace,function(f){if(a.disabled){return false
}if(f.keyCode===r.ui.keyCode.SPACE||f.keyCode===r.ui.keyCode.ENTER){r(this).addClass("ui-state-active")
}}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){r(this).removeClass("ui-state-active")
});
if(this.buttonElement.is("a")){this.buttonElement.keyup(function(f){if(f.keyCode===r.ui.keyCode.SPACE){r(this).click()
}})
}}}this._setOption("disabled",a.disabled);
this._resetButton()
},_determineButtonType:function(){var b,c,a;
if(this.element.is("[type=checkbox]")){this.type="checkbox"
}else{if(this.element.is("[type=radio]")){this.type="radio"
}else{if(this.element.is("input")){this.type="input"
}else{this.type="button"
}}}if(this.type==="checkbox"||this.type==="radio"){b=this.element.parents().last();
c="label[for='"+this.element.attr("id")+"']";
this.buttonElement=b.find(c);
if(!this.buttonElement.length){b=b.length?b.siblings():this.element.siblings();
this.buttonElement=b.filter(c);
if(!this.buttonElement.length){this.buttonElement=b.find(c)
}}this.element.addClass("ui-helper-hidden-accessible");
a=this.element.is(":checked");
if(a){this.buttonElement.addClass("ui-state-active")
}this.buttonElement.prop("aria-pressed",a)
}else{this.buttonElement=this.element
}},widget:function(){return this.buttonElement
},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");
this.buttonElement.removeClass(o+" "+u+" "+q).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
if(!this.hasTitle){this.buttonElement.removeAttr("title")
}},_setOption:function(b,a){this._super(b,a);
if(b==="disabled"){if(a){this.element.prop("disabled",true)
}else{this.element.prop("disabled",false)
}return
}this._resetButton()
},refresh:function(){var a=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");
if(a!==this.options.disabled){this._setOption("disabled",a)
}if(this.type==="radio"){t(this.element[0]).each(function(){if(r(this).is(":checked")){r(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true")
}else{r(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")
}})
}else{if(this.type==="checkbox"){if(this.element.is(":checked")){this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true")
}else{this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false")
}}}},_resetButton:function(){if(this.type==="input"){if(this.options.label){this.element.val(this.options.label)
}return
}var c=this.buttonElement.removeClass(q),e=r("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(c.empty()).text(),a=this.options.icons,b=a.primary&&a.secondary,d=[];
if(a.primary||a.secondary){if(this.options.text){d.push("ui-button-text-icon"+(b?"s":(a.primary?"-primary":"-secondary")))
}if(a.primary){c.prepend("<span class='ui-button-icon-primary ui-icon "+a.primary+"'></span>")
}if(a.secondary){c.append("<span class='ui-button-icon-secondary ui-icon "+a.secondary+"'></span>")
}if(!this.options.text){d.push(b?"ui-button-icons-only":"ui-button-icon-only");
if(!this.hasTitle){c.attr("title",r.trim(e))
}}}else{d.push("ui-button-text-only")
}c.addClass(d.join(" "))
}});
r.widget("ui.buttonset",{version:"1.10.3",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")
},_init:function(){this.refresh()
},_setOption:function(b,a){if(b==="disabled"){this.buttons.button("option",b,a)
}this._super(b,a)
},refresh:function(){var a=this.element.css("direction")==="rtl";
this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return r(this).button("widget")[0]
}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(a?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(a?"ui-corner-left":"ui-corner-right").end().end()
},_destroy:function(){this.element.removeClass("ui-buttonset");
this.buttons.map(function(){return r(this).button("widget")[0]
}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
}})
}(jQuery));
(function(h,g){var f={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},e={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true};
h.widget("ui.dialog",{version:"1.10.3",options:{appendTo:"body",autoOpen:true,buttons:[],closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",of:window,collision:"fit",using:function(a){var b=h(this).css(a).offset().top;
if(b<0){h(this).css("top",a.top-b)
}}},resizable:true,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height};
this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};
this.originalTitle=this.element.attr("title");
this.options.title=this.options.title||this.originalTitle;
this._createWrapper();
this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);
this._createTitlebar();
this._createButtonPane();
if(this.options.draggable&&h.fn.draggable){this._makeDraggable()
}if(this.options.resizable&&h.fn.resizable){this._makeResizable()
}this._isOpen=false
},_init:function(){if(this.options.autoOpen){this.open()
}},_appendTo:function(){var a=this.options.appendTo;
if(a&&(a.jquery||a.nodeType)){return h(a)
}return this.document.find(a||"body").eq(0)
},_destroy:function(){var a,b=this.originalPosition;
this._destroyOverlay();
this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();
this.uiDialog.stop(true,true).remove();
if(this.originalTitle){this.element.attr("title",this.originalTitle)
}a=b.parent.children().eq(b.index);
if(a.length&&a[0]!==this.element[0]){a.before(this.element)
}else{b.parent.append(this.element)
}},widget:function(){return this.uiDialog
},disable:h.noop,enable:h.noop,close:function(a){var b=this;
if(!this._isOpen||this._trigger("beforeClose",a)===false){return
}this._isOpen=false;
this._destroyOverlay();
if(!this.opener.filter(":focusable").focus().length){h(this.document[0].activeElement).blur()
}this._hide(this.uiDialog,this.options.hide,function(){b._trigger("close",a)
})
},isOpen:function(){return this._isOpen
},moveToTop:function(){this._moveToTop()
},_moveToTop:function(a,c){var b=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
if(b&&!c){this._trigger("focus",a)
}return b
},open:function(){var a=this;
if(this._isOpen){if(this._moveToTop()){this._focusTabbable()
}return
}this._isOpen=true;
this.opener=h(this.document[0].activeElement);
this._size();
this._position();
this._createOverlay();
this._moveToTop(null,true);
this._show(this.uiDialog,this.options.show,function(){a._focusTabbable();
a._trigger("focus")
});
this._trigger("open")
},_focusTabbable:function(){var a=this.element.find("[autofocus]");
if(!a.length){a=this.element.find(":tabbable")
}if(!a.length){a=this.uiDialogButtonPane.find(":tabbable")
}if(!a.length){a=this.uiDialogTitlebarClose.filter(":tabbable")
}if(!a.length){a=this.uiDialog
}a.eq(0).focus()
},_keepFocus:function(b){function a(){var c=this.document[0].activeElement,d=this.uiDialog[0]===c||h.contains(this.uiDialog[0],c);
if(!d){this._focusTabbable()
}}b.preventDefault();
a.call(this);
this._delay(a)
},_createWrapper:function(){this.uiDialog=h("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo());
this._on(this.uiDialog,{keydown:function(b){if(this.options.closeOnEscape&&!b.isDefaultPrevented()&&b.keyCode&&b.keyCode===h.ui.keyCode.ESCAPE){b.preventDefault();
this.close(b);
return
}if(b.keyCode!==h.ui.keyCode.TAB){return
}var c=this.uiDialog.find(":tabbable"),a=c.filter(":first"),d=c.filter(":last");
if((b.target===d[0]||b.target===this.uiDialog[0])&&!b.shiftKey){a.focus(1);
b.preventDefault()
}else{if((b.target===a[0]||b.target===this.uiDialog[0])&&b.shiftKey){d.focus(1);
b.preventDefault()
}}},mousedown:function(a){if(this._moveToTop(a)){this._focusTabbable()
}}});
if(!this.element.find("[aria-describedby]").length){this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})
}},_createTitlebar:function(){var a;
this.uiDialogTitlebar=h("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);
this._on(this.uiDialogTitlebar,{mousedown:function(b){if(!h(b.target).closest(".ui-dialog-titlebar-close")){this.uiDialog.focus()
}}});
this.uiDialogTitlebarClose=h("<button></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:false}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);
this._on(this.uiDialogTitlebarClose,{click:function(b){b.preventDefault();
this.close(b)
}});
a=h("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);
this._title(a);
this.uiDialog.attr({"aria-labelledby":a.attr("id")})
},_title:function(a){if(!this.options.title){a.html("&#160;")
}a.text(this.options.title)
},_createButtonPane:function(){this.uiDialogButtonPane=h("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
this.uiButtonSet=h("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);
this._createButtons()
},_createButtons:function(){var a=this,b=this.options.buttons;
this.uiDialogButtonPane.remove();
this.uiButtonSet.empty();
if(h.isEmptyObject(b)||(h.isArray(b)&&!b.length)){this.uiDialog.removeClass("ui-dialog-buttons");
return
}h.each(b,function(m,k){var d,c;
k=h.isFunction(k)?{click:k,text:m}:k;
k=h.extend({type:"button"},k);
d=k.click;
k.click=function(){d.apply(a.element[0],arguments)
};
c={icons:k.icons,text:k.showText};
delete k.icons;
delete k.showText;
h("<button></button>",k).button(c).appendTo(a.uiButtonSet)
});
this.uiDialog.addClass("ui-dialog-buttons");
this.uiDialogButtonPane.appendTo(this.uiDialog)
},_makeDraggable:function(){var a=this,b=this.options;
function c(d){return{position:d.position,offset:d.offset}
}this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(j,d){h(this).addClass("ui-dialog-dragging");
a._blockFrames();
a._trigger("dragStart",j,c(d))
},drag:function(j,d){a._trigger("drag",j,c(d))
},stop:function(j,d){b.position=[d.position.left-a.document.scrollLeft(),d.position.top-a.document.scrollTop()];
h(this).removeClass("ui-dialog-dragging");
a._unblockFrames();
a._trigger("dragStop",j,c(d))
}})
},_makeResizable:function(){var a=this,c=this.options,b=c.resizable,m=this.uiDialog.css("position"),d=typeof b==="string"?b:"n,e,s,w,se,sw,ne,nw";
function k(j){return{originalPosition:j.originalPosition,originalSize:j.originalSize,position:j.position,size:j.size}
}this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:c.maxWidth,maxHeight:c.maxHeight,minWidth:c.minWidth,minHeight:this._minHeight(),handles:d,start:function(n,j){h(this).addClass("ui-dialog-resizing");
a._blockFrames();
a._trigger("resizeStart",n,k(j))
},resize:function(n,j){a._trigger("resize",n,k(j))
},stop:function(n,j){c.height=h(this).height();
c.width=h(this).width();
h(this).removeClass("ui-dialog-resizing");
a._unblockFrames();
a._trigger("resizeStop",n,k(j))
}}).css("position",m)
},_minHeight:function(){var a=this.options;
return a.height==="auto"?a.minHeight:Math.min(a.minHeight,a.height)
},_position:function(){var a=this.uiDialog.is(":visible");
if(!a){this.uiDialog.show()
}this.uiDialog.position(this.options.position);
if(!a){this.uiDialog.hide()
}},_setOptions:function(b){var a=this,c=false,d={};
h.each(b,function(m,k){a._setOption(m,k);
if(m in f){c=true
}if(m in e){d[m]=k
}});
if(c){this._size();
this._position()
}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option",d)
}},_setOption:function(c,b){var d,a,j=this.uiDialog;
if(c==="dialogClass"){j.removeClass(this.options.dialogClass).addClass(b)
}if(c==="disabled"){return
}this._super(c,b);
if(c==="appendTo"){this.uiDialog.appendTo(this._appendTo())
}if(c==="buttons"){this._createButtons()
}if(c==="closeText"){this.uiDialogTitlebarClose.button({label:""+b})
}if(c==="draggable"){d=j.is(":data(ui-draggable)");
if(d&&!b){j.draggable("destroy")
}if(!d&&b){this._makeDraggable()
}}if(c==="position"){this._position()
}if(c==="resizable"){a=j.is(":data(ui-resizable)");
if(a&&!b){j.resizable("destroy")
}if(a&&typeof b==="string"){j.resizable("option","handles",b)
}if(!a&&b!==false){this._makeResizable()
}}if(c==="title"){this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))
}},_size:function(){var d,b,a,c=this.options;
this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0});
if(c.minWidth>c.width){c.width=c.minWidth
}d=this.uiDialog.css({height:"auto",width:c.width}).outerHeight();
b=Math.max(0,c.minHeight-d);
a=typeof c.maxHeight==="number"?Math.max(0,c.maxHeight-d):"none";
if(c.height==="auto"){this.element.css({minHeight:b,maxHeight:a,height:"auto"})
}else{this.element.height(Math.max(0,c.height-d))
}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option","minHeight",this._minHeight())
}},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var a=h(this);
return h("<div>").css({position:"absolute",width:a.outerWidth(),height:a.outerHeight()}).appendTo(a.parent()).offset(a.offset())[0]
})
},_unblockFrames:function(){if(this.iframeBlocks){this.iframeBlocks.remove();
delete this.iframeBlocks
}},_allowInteraction:function(a){return true;
if(h(a.target).closest(".ui-dialog").length){return true
}return !!h(a.target).closest(".ui-datepicker").length
},_createOverlay:function(){if(!this.options.modal){return
}var a=this,b=this.widgetFullName;
if(!h.ui.dialog.overlayInstances){this._delay(function(){if(h.ui.dialog.overlayInstances){this.document.bind("focusin.dialog",function(c){if(!a._allowInteraction(c)){c.preventDefault();
h(".ui-dialog:visible:last .ui-dialog-content").data(b)._focusTabbable()
}})
}})
}this.overlay=h("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());
this._on(this.overlay,{mousedown:"_keepFocus"});
h.ui.dialog.overlayInstances++
},_destroyOverlay:function(){if(!this.options.modal){return
}if(this.overlay){h.ui.dialog.overlayInstances--;
if(!h.ui.dialog.overlayInstances){}this.overlay.remove();
this.overlay=null
}}});
h.ui.dialog.overlayInstances=0;
if(h.uiBackCompat!==false){h.widget("ui.dialog",h.ui.dialog,{_position:function(){var c=this.options.position,b=[],a=[0,0],d;
if(c){if(typeof c==="string"||(typeof c==="object"&&"0" in c)){b=c.split?c.split(" "):[c[0],c[1]];
if(b.length===1){b[1]=b[0]
}h.each(["left","top"],function(m,n){if(+b[m]===b[m]){a[m]=b[m];
b[m]=n
}});
c={my:b[0]+(a[0]<0?a[0]:"+"+a[0])+" "+b[1]+(a[1]<0?a[1]:"+"+a[1]),at:b.join(" ")}
}c=h.extend({},h.ui.dialog.prototype.options.position,c)
}else{c=h.ui.dialog.prototype.options.position
}d=this.uiDialog.is(":visible");
if(!d){this.uiDialog.show()
}this.uiDialog.position(c);
if(!d){this.uiDialog.hide()
}}})
}}(jQuery));
(function(e,f){var d="ui-effects-";
e.effects={effect:{}};
/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
(function(a,A){var t="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",w=/^([\-+])=\s*(\d+\.?\d*)/,x=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(g){return[g[1],g[2],g[3],g[4]]
}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(g){return[g[1]*2.55,g[2]*2.55,g[3]*2.55,g[4]]
}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(g){return[parseInt(g[1],16),parseInt(g[2],16),parseInt(g[3],16)]
}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(g){return[parseInt(g[1]+g[1],16),parseInt(g[2]+g[2],16),parseInt(g[3]+g[3],16)]
}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(g){return[g[1],g[2]/100,g[3]/100,g[4]]
}}],z=a.Color=function(j,h,k,g){return new a.Color.fn.parse(j,h,k,g)
},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},b={"byte":{floor:true,max:255},percent:{max:1},degrees:{mod:360,floor:true}},c=z.support={},C=a("<p>")[0],D,s=a.each;
C.style.cssText="background-color:rgba(1,1,1,.5)";
c.rgba=C.style.backgroundColor.indexOf("rgba")>-1;
s(u,function(h,g){g.cache="_"+h;
g.props.alpha={idx:3,type:"percent",def:1}
});
function v(j,g,h){var k=b[g.type]||{};
if(j==null){return(h||!g.def)?null:g.def
}j=k.floor?~~j:parseFloat(j);
if(isNaN(j)){return g.def
}if(k.mod){return(j+k.mod)%k.mod
}return 0>j?0:k.max<j?k.max:j
}function y(j){var g=z(),h=g._rgba=[];
j=j.toLowerCase();
s(x,function(p,m){var k,q=m.re.exec(j),n=q&&m.parse(q),o=m.space||"rgba";
if(n){k=g[o](n);
g[u[o].cache]=k[u[o].cache];
h=g._rgba=k._rgba;
return false
}});
if(h.length){if(h.join()==="0,0,0,0"){a.extend(h,D.transparent)
}return g
}return D[j]
}z.fn=a.extend(z.prototype,{parse:function(o,h,n,g){if(o===A){this._rgba=[null,null,null,null];
return this
}if(o.jquery||o.nodeType){o=a(o).css(h);
h=A
}var j=this,k=a.type(o),m=this._rgba=[];
if(h!==A){o=[o,h,n,g];
k="array"
}if(k==="string"){return this.parse(y(o)||D._default)
}if(k==="array"){s(u.rgba.props,function(q,p){m[p.idx]=v(o[p.idx],p)
});
return this
}if(k==="object"){if(o instanceof z){s(u,function(q,p){if(o[p.cache]){j[p.cache]=o[p.cache].slice()
}})
}else{s(u,function(p,r){var q=r.cache;
s(r.props,function(F,E){if(!j[q]&&r.to){if(F==="alpha"||o[F]==null){return
}j[q]=r.to(j._rgba)
}j[q][E.idx]=v(o[F],E,true)
});
if(j[q]&&a.inArray(null,j[q].slice(0,3))<0){j[q][3]=1;
if(r.from){j._rgba=r.from(j[q])
}}})
}return this
}},is:function(h){var k=z(h),g=true,j=this;
s(u,function(n,p){var o,m=k[p.cache];
if(m){o=j[p.cache]||p.to&&p.to(j._rgba)||[];
s(p.props,function(q,r){if(m[r.idx]!=null){g=(m[r.idx]===o[r.idx]);
return g
}})
}return g
});
return g
},_space:function(){var h=[],g=this;
s(u,function(k,j){if(g[j.cache]){h.push(k)
}});
return h.pop()
},transition:function(m,o){var k=z(m),j=k._space(),h=u[j],g=this.alpha()===0?z("transparent"):this,p=g[h.cache]||h.to(g._rgba),n=p.slice();
k=k[h.cache];
s(h.props,function(H,r){var I=r.idx,J=p[I],q=k[I],G=b[r.type]||{};
if(q===null){return
}if(J===null){n[I]=q
}else{if(G.mod){if(q-J>G.mod/2){J+=G.mod
}else{if(J-q>G.mod/2){J-=G.mod
}}}n[I]=v((q-J)*o+J,r)
}});
return this[j](n)
},blend:function(g){if(this._rgba[3]===1){return this
}var h=this._rgba.slice(),j=h.pop(),k=z(g)._rgba;
return z(a.map(h,function(n,m){return(1-j)*k[m]+j*n
}))
},toRgbaString:function(){var g="rgba(",h=a.map(this._rgba,function(k,j){return k==null?(j>2?1:0):k
});
if(h[3]===1){h.pop();
g="rgb("
}return g+h.join()+")"
},toHslaString:function(){var g="hsla(",h=a.map(this.hsla(),function(k,j){if(k==null){k=j>2?1:0
}if(j&&j<3){k=Math.round(k*100)+"%"
}return k
});
if(h[3]===1){h.pop();
g="hsl("
}return g+h.join()+")"
},toHexString:function(j){var h=this._rgba.slice(),g=h.pop();
if(j){h.push(~~(g*255))
}return"#"+a.map(h,function(k){k=(k||0).toString(16);
return k.length===1?"0"+k:k
}).join("")
},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()
}});
z.fn.parse.prototype=z.fn;
function B(g,h,j){j=(j+1)%1;
if(j*6<1){return g+(h-g)*j*6
}if(j*2<1){return h
}if(j*3<2){return g+(h-g)*((2/3)-j)*6
}return g
}u.hsla.to=function(q){if(q[0]==null||q[1]==null||q[2]==null){return[null,null,null,q[3]]
}var F=q[0]/255,n=q[1]/255,m=q[2]/255,j=q[3],k=Math.max(F,n,m),p=Math.min(F,n,m),h=k-p,g=k+p,r=g*0.5,o,G;
if(p===k){o=0
}else{if(F===k){o=(60*(n-m)/h)+360
}else{if(n===k){o=(60*(m-F)/h)+120
}else{o=(60*(F-n)/h)+240
}}}if(h===0){G=0
}else{if(r<=0.5){G=h/g
}else{G=h/(2-g)
}}return[Math.round(o)%360,G,r,j==null?1:j]
};
u.hsla.from=function(g){if(g[0]==null||g[1]==null||g[2]==null){return[null,null,null,g[3]]
}var h=g[0]/360,j=g[1],k=g[2],m=g[3],o=k<=0.5?k*(1+j):k+j-k*j,n=2*k-o;
return[Math.round(B(n,o,h+(1/3))*255),Math.round(B(n,o,h)*255),Math.round(B(n,o,h-(1/3))*255),m]
};
s(u,function(m,j){var k=j.props,n=j.cache,g=j.to,h=j.from;
z.fn[m]=function(q){if(g&&!this[n]){this[n]=g(this._rgba)
}if(q===A){return this[n].slice()
}var p,E=a.type(q),r=(E==="array"||E==="object")?q:arguments,o=this[n].slice();
s(k,function(I,G){var H=r[E==="object"?I:G.idx];
if(H==null){H=o[G.idx]
}o[G.idx]=v(H,G)
});
if(h){p=z(h(o));
p[n]=o;
return p
}else{return z(o)
}};
s(k,function(p,o){if(z.fn[p]){return
}z.fn[p]=function(H){var r=a.type(H),I=(p==="alpha"?(this._hsla?"hsla":"rgba"):m),J=this[I](),G=J[o.idx],q;
if(r==="undefined"){return G
}if(r==="function"){H=H.call(this,G);
r=a.type(H)
}if(H==null&&o.empty){return this
}if(r==="string"){q=w.exec(H);
if(q){H=G+parseFloat(q[2])*(q[1]==="+"?1:-1)
}}J[o.idx]=H;
return this[I](J)
}
})
});
z.hook=function(g){var h=g.split(" ");
s(h,function(k,j){a.cssHooks[j]={set:function(p,n){var m,r,o="";
if(n!=="transparent"&&(a.type(n)!=="string"||(m=y(n)))){n=z(m||n);
if(!c.rgba&&n._rgba[3]!==1){r=j==="backgroundColor"?p.parentNode:p;
while((o===""||o==="transparent")&&r&&r.style){try{o=a.css(r,"backgroundColor");
r=r.parentNode
}catch(q){}}n=n.blend(o&&o!=="transparent"?o:"_default")
}n=n.toRgbaString()
}try{p.style[j]=n
}catch(q){}}};
a.fx.step[j]=function(m){if(!m.colorInit){m.start=z(m.elem,j);
m.end=z(m.end);
m.colorInit=true
}a.cssHooks[j].set(m.elem,m.start.transition(m.end,m.pos))
}
})
};
z.hook(t);
a.cssHooks.borderColor={expand:function(g){var h={};
s(["Top","Right","Bottom","Left"],function(j,k){h["border"+k+"Color"]=g
});
return h
}};
D=a.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}
})(jQuery);
(function(){var c=["add","remove","toggle"],b={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};
e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(j,g){e.fx.step[g]=function(k){if(k.end!=="none"&&!k.setAttr||k.pos===1&&!k.setAttr){jQuery.style(k.elem,g,k.end);
k.setAttr=true
}}
});
function a(g){var o,p,n=g.ownerDocument.defaultView?g.ownerDocument.defaultView.getComputedStyle(g,null):g.currentStyle,m={};
if(n&&n.length&&n[0]&&n[n[0]]){p=n.length;
while(p--){o=n[p];
if(typeof n[o]==="string"){m[e.camelCase(o)]=n[o]
}}}else{for(o in n){if(typeof n[o]==="string"){m[o]=n[o]
}}}return m
}function h(p,n){var g={},o,m;
for(o in n){m=n[o];
if(p[o]!==m){if(!b[o]){if(e.fx.step[o]||!isNaN(parseFloat(m))){g[o]=m
}}}}return g
}if(!e.fn.addBack){e.fn.addBack=function(g){return this.add(g==null?this.prevObject:this.prevObject.filter(g))
}
}e.effects.animateClass=function(p,o,g,m){var n=e.speed(o,g,m);
return this.queue(function(){var q=e(this),j=q.attr("class")||"",r,k=n.children?q.find("*").addBack():q;
k=k.map(function(){var s=e(this);
return{el:s,start:a(this)}
});
r=function(){e.each(c,function(t,s){if(p[s]){q[s+"Class"](p[s])
}})
};
r();
k=k.map(function(){this.end=a(this.el[0]);
this.diff=h(this.start,this.end);
return this
});
q.attr("class",j);
k=k.map(function(){var t=this,v=e.Deferred(),u=e.extend({},n,{queue:false,complete:function(){v.resolve(t)
}});
this.el.animate(this.diff,u);
return v.promise()
});
e.when.apply(e,k.get()).done(function(){r();
e.each(arguments,function(){var s=this.el;
e.each(this.diff,function(t){s.css(t,"")
})
});
n.complete.call(q[0])
})
})
};
e.fn.extend({addClass:(function(g){return function(o,p,m,n){return p?e.effects.animateClass.call(this,{add:o},p,m,n):g.apply(this,arguments)
}
})(e.fn.addClass),removeClass:(function(g){return function(o,p,m,n){return arguments.length>1?e.effects.animateClass.call(this,{remove:o},p,m,n):g.apply(this,arguments)
}
})(e.fn.removeClass),toggleClass:(function(g){return function(p,q,r,n,o){if(typeof q==="boolean"||q===f){if(!r){return g.apply(this,arguments)
}else{return e.effects.animateClass.call(this,(q?{add:p}:{remove:p}),r,n,o)
}}else{return e.effects.animateClass.call(this,{toggle:p},q,r,n)
}}
})(e.fn.toggleClass),switchClass:function(p,n,o,g,m){return e.effects.animateClass.call(this,{add:n,remove:p},o,g,m)
}})
})();
(function(){e.extend(e.effects,{version:"1.10.3",save:function(j,c){for(var k=0;
k<c.length;
k++){if(c[k]!==null){j.data(d+c[k],j[0].style[c[k]])
}}},restore:function(m,c){var k,n;
for(n=0;
n<c.length;
n++){if(c[n]!==null){k=m.data(d+c[n]);
if(k===f){k=""
}m.css(c[n],k)
}}},setMode:function(h,c){if(c==="toggle"){c=h.is(":hidden")?"show":"hide"
}return c
},getBaseline:function(k,j){var c,m;
switch(k[0]){case"top":c=0;
break;
case"middle":c=0.5;
break;
case"bottom":c=1;
break;
default:c=k[0]/j.height
}switch(k[1]){case"left":m=0;
break;
case"center":m=0.5;
break;
case"right":m=1;
break;
default:m=k[1]/j.width
}return{x:m,y:c}
},createWrapper:function(p){if(p.parent().is(".ui-effects-wrapper")){return p.parent()
}var o={width:p.outerWidth(true),height:p.outerHeight(true),"float":p.css("float")},c=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),q={width:p.width(),height:p.height()},m=document.activeElement;
try{m.id
}catch(n){m=document.body
}p.wrap(c);
if(p[0]===m||e.contains(p[0],m)){e(m).focus()
}c=p.parent();
if(p.css("position")==="static"){c.css({position:"relative"});
p.css({position:"relative"})
}else{e.extend(o,{position:p.css("position"),zIndex:p.css("z-index")});
e.each(["top","left","bottom","right"],function(h,g){o[g]=p.css(g);
if(isNaN(parseInt(o[g],10))){o[g]="auto"
}});
p.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})
}p.css(q);
return c.css(o).show()
},removeWrapper:function(h){var c=document.activeElement;
if(h.parent().is(".ui-effects-wrapper")){h.parent().replaceWith(h);
if(h[0]===c||e.contains(h[0],c)){e(c).focus()
}}return h
},setTransition:function(k,c,m,j){j=j||{};
e.each(c,function(h,n){var g=k.cssUnit(n);
if(g[0]>0){j[n]=g[0]*m+g[1]
}});
return j
}});
function b(k,m,j,c){if(e.isPlainObject(k)){m=k;
k=k.effect
}k={effect:k};
if(m==null){m={}
}if(e.isFunction(m)){c=m;
j=null;
m={}
}if(typeof m==="number"||e.fx.speeds[m]){c=j;
j=m;
m={}
}if(e.isFunction(j)){c=j;
j=null
}if(m){e.extend(k,m)
}j=j||m.duration;
k.duration=e.fx.off?0:typeof j==="number"?j:j in e.fx.speeds?e.fx.speeds[j]:e.fx.speeds._default;
k.complete=c||m.complete;
return k
}function a(c){if(!c||typeof c==="number"||e.fx.speeds[c]){return true
}if(typeof c==="string"&&!e.effects.effect[c]){return true
}if(e.isFunction(c)){return true
}if(typeof c==="object"&&!c.effect){return true
}return false
}e.fn.extend({effect:function(){var m=b.apply(this,arguments),c=m.mode,o=m.queue,n=e.effects.effect[m.effect];
if(e.fx.off||!n){if(c){return this[c](m.duration,m.complete)
}else{return this.each(function(){if(m.complete){m.complete.call(this)
}})
}}function k(g){var q=e(this),h=m.complete,p=m.mode;
function j(){if(e.isFunction(h)){h.call(q[0])
}if(e.isFunction(g)){g()
}}if(q.is(":hidden")?p==="hide":p==="show"){q[p]();
j()
}else{n.call(q[0],m,j)
}}return o===false?this.each(k):this.queue(o||"fx",k)
},show:(function(c){return function(j){if(a(j)){return c.apply(this,arguments)
}else{var k=b.apply(this,arguments);
k.mode="show";
return this.effect.call(this,k)
}}
})(e.fn.show),hide:(function(c){return function(j){if(a(j)){return c.apply(this,arguments)
}else{var k=b.apply(this,arguments);
k.mode="hide";
return this.effect.call(this,k)
}}
})(e.fn.hide),toggle:(function(c){return function(j){if(a(j)||typeof j==="boolean"){return c.apply(this,arguments)
}else{var k=b.apply(this,arguments);
k.mode="toggle";
return this.effect.call(this,k)
}}
})(e.fn.toggle),cssUnit:function(k){var j=this.css(k),c=[];
e.each(["em","px","%","pt"],function(h,g){if(j.indexOf(g)>0){c=[parseFloat(j),g]
}});
return c
}})
})();
(function(){var a={};
e.each(["Quad","Cubic","Quart","Quint","Expo"],function(b,c){a[c]=function(h){return Math.pow(h,b+2)
}
});
e.extend(a,{Sine:function(b){return 1-Math.cos(b*Math.PI/2)
},Circ:function(b){return 1-Math.sqrt(1-b*b)
},Elastic:function(b){return b===0||b===1?b:-Math.pow(2,8*(b-1))*Math.sin(((b-1)*80-7.5)*Math.PI/15)
},Back:function(b){return b*b*(3*b-2)
},Bounce:function(b){var h,c=4;
while(b<((h=Math.pow(2,--c))-1)/11){}return 1/Math.pow(4,3-c)-7.5625*Math.pow((h*3-2)/22-b,2)
}});
e.each(a,function(b,c){e.easing["easeIn"+b]=c;
e.easing["easeOut"+b]=function(h){return 1-c(1-h)
};
e.easing["easeInOut"+b]=function(h){return h<0.5?c(h*2)/2:1-c(h*-2+2)/2
}
})
})()
})(jQuery);
(function(e,g){var f=/up|down|vertical/,h=/up|left|vertical|horizontal/;
e.effects.effect.blind=function(z,o){var y=e(this),b=["position","top","bottom","left","right","height","width"],d=e.effects.setMode(y,z.mode||"hide"),a=z.direction||"up",w=f.test(a),x=w?"height":"width",c=w?"top":"left",C=h.test(a),u={},D=d==="show",A,B,v;
if(y.parent().is(".ui-effects-wrapper")){e.effects.save(y.parent(),b)
}else{e.effects.save(y,b)
}y.show();
A=e.effects.createWrapper(y).css({overflow:"hidden"});
B=A[x]();
v=parseFloat(A.css(c))||0;
u[x]=D?B:0;
if(!C){y.css(w?"bottom":"right",0).css(w?"top":"left","auto").css({position:"absolute"});
u[c]=D?v:B+v
}if(D){A.css(x,0);
if(!C){A.css(c,v+B)
}}A.animate(u,{duration:z.duration,easing:z.easing,queue:false,complete:function(){if(d==="hide"){y.hide()
}e.effects.restore(y,b);
e.effects.removeWrapper(y);
o()
}})
}
})(jQuery);
(function(d,c){d.effects.effect.bounce=function(F,G){var O=d(this),N=["position","top","bottom","left","right","height","width"],H=d.effects.setMode(O,F.mode||"effect"),I=H==="hide",o=H==="show",b=F.direction||"up",M=F.distance,J=F.times||5,a=J*2+(o||I?1:0),y=F.duration/a,D=F.easing,L=(b==="up"||b==="down")?"top":"left",E=(b==="up"||b==="left"),z,K,A,C=O.queue(),B=C.length;
if(o||I){N.push("opacity")
}d.effects.save(O,N);
O.show();
d.effects.createWrapper(O);
if(!M){M=O[L==="top"?"outerHeight":"outerWidth"]()/3
}if(o){A={opacity:1};
A[L]=0;
O.css("opacity",0).css(L,E?-M*2:M*2).animate(A,y,D)
}if(I){M=M/Math.pow(2,J-1)
}A={};
A[L]=0;
for(z=0;
z<J;
z++){K={};
K[L]=(E?"-=":"+=")+M;
O.animate(K,y,D).animate(A,y,D);
M=I?M*2:M/2
}if(I){K={opacity:0};
K[L]=(E?"-=":"+=")+M;
O.animate(K,y,D)
}O.queue(function(){if(I){O.hide()
}d.effects.restore(O,N);
d.effects.removeWrapper(O);
G()
});
if(B>1){C.splice.apply(C,[1,0].concat(C.splice(B,a+1)))
}O.dequeue()
}
})(jQuery);
(function(d,c){d.effects.effect.clip=function(y,v){var x=d(this),r=["position","top","bottom","left","right","height","width"],s=d.effects.setMode(x,y.mode||"hide"),b=s==="show",o=y.direction||"vertical",t=o==="vertical",a=t?"height":"width",u=t?"top":"left",w={},A,z,B;
d.effects.save(x,r);
x.show();
A=d.effects.createWrapper(x).css({overflow:"hidden"});
z=(x[0].tagName==="IMG")?A:x;
B=z[a]();
if(b){z.css(a,0);
z.css(u,B/2)
}w[a]=b?B:0;
w[u]=b?0:B/2;
z.animate(w,{queue:false,duration:y.duration,easing:y.easing,complete:function(){if(!b){x.hide()
}d.effects.restore(x,r);
d.effects.removeWrapper(x);
v()
}})
}
})(jQuery);
(function(d,c){d.effects.effect.drop=function(u,q){var t=d(this),o=["position","top","bottom","left","right","opacity","height","width"],p=d.effects.setMode(t,u.mode||"hide"),b=p==="show",n=u.direction||"left",s=(n==="up"||n==="down")?"top":"left",a=(n==="up"||n==="left")?"pos":"neg",r={opacity:b?1:0},v;
d.effects.save(t,o);
t.show();
d.effects.createWrapper(t);
v=u.distance||t[s==="top"?"outerHeight":"outerWidth"](true)/2;
if(b){t.css("opacity",0).css(s,a==="pos"?-v:v)
}r[s]=(b?(a==="pos"?"+=":"-="):(a==="pos"?"-=":"+="))+v;
t.animate(r,{queue:false,duration:u.duration,easing:u.easing,complete:function(){if(p==="hide"){t.hide()
}d.effects.restore(t,o);
d.effects.removeWrapper(t);
q()
}})
}
})(jQuery);
(function(d,c){d.effects.effect.explode=function(z,A){var G=z.pieces?Math.round(Math.sqrt(z.pieces)):3,L=G,M=d(this),E=d.effects.setMode(M,z.mode||"hide"),b=E==="show",I=M.show().css("visibility","hidden").offset(),y=Math.ceil(M.outerWidth()/L),B=Math.ceil(M.outerHeight()/G),H=[],j,o,K,C,D,F;
function a(){H.push(this);
if(H.length===G*L){J()
}}for(j=0;
j<G;
j++){C=I.top+j*B;
F=j-(G-1)/2;
for(o=0;
o<L;
o++){K=I.left+o*y;
D=o-(L-1)/2;
M.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-o*y,top:-j*B}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:y,height:B,left:K+(b?D*y:0),top:C+(b?F*B:0),opacity:b?0:1}).animate({left:K+(b?0:D*y),top:C+(b?0:F*B),opacity:b?1:0},z.duration||500,z.easing,a)
}}function J(){M.css({visibility:"visible"});
d(H).remove();
if(!b){M.hide()
}A()
}}
})(jQuery);
(function(d,c){d.effects.effect.fade=function(a,h){var g=d(this),b=d.effects.setMode(g,a.mode||"toggle");
g.animate({opacity:b},{queue:false,duration:a.duration,easing:a.easing,complete:h})
}
})(jQuery);
(function(d,c){d.effects.effect.fold=function(D,z){var C=d(this),u=["position","top","bottom","left","right","height","width"],x=d.effects.setMode(C,D.mode||"hide"),a=x==="show",w=x==="hide",G=D.size||15,v=/([0-9]+)%/.exec(G),H=!!D.horizFirst,y=a!==H,B=y?["width","height"]:["height","width"],A=D.duration/2,E,F,b={},o={};
d.effects.save(C,u);
C.show();
E=d.effects.createWrapper(C).css({overflow:"hidden"});
F=y?[E.width(),E.height()]:[E.height(),E.width()];
if(v){G=parseInt(v[1],10)/100*F[w?0:1]
}if(a){E.css(H?{height:0,width:G}:{height:G,width:0})
}b[B[0]]=a?F[0]:G;
o[B[1]]=a?F[1]:0;
E.animate(b,A,D.easing).animate(o,A,D.easing,function(){if(w){C.hide()
}d.effects.restore(C,u);
d.effects.removeWrapper(C);
z()
})
}
})(jQuery);
(function(d,c){d.effects.effect.highlight=function(a,n){var k=d(this),m=["backgroundImage","backgroundColor","opacity"],b=d.effects.setMode(k,a.mode||"show"),j={backgroundColor:k.css("backgroundColor")};
if(b==="hide"){j.opacity=0
}d.effects.save(k,m);
k.show().css({backgroundImage:"none",backgroundColor:a.color||"#ffff99"}).animate(j,{queue:false,duration:a.duration,easing:a.easing,complete:function(){if(b==="hide"){k.hide()
}d.effects.restore(k,m);
n()
}})
}
})(jQuery);
(function(d,c){d.effects.effect.pulsate=function(A,w){var y=d(this),t=d.effects.setMode(y,A.mode||"show"),b=t==="show",s=t==="hide",a=(b||t==="hide"),r=((A.times||5)*2)+(a?1:0),x=A.duration/r,o=0,u=y.queue(),z=u.length,v;
if(b||!y.is(":visible")){y.css("opacity",0).show();
o=1
}for(v=1;
v<r;
v++){y.animate({opacity:o},x,A.easing);
o=1-o
}y.animate({opacity:o},x,A.easing);
y.queue(function(){if(s){y.hide()
}w()
});
if(z>1){u.splice.apply(u,[1,0].concat(u.splice(z,r+1)))
}y.dequeue()
}
})(jQuery);
(function(d,c){d.effects.effect.puff=function(a,q){var k=d(this),b=d.effects.setMode(k,a.mode||"hide"),n=b==="hide",m=parseInt(a.percent,10)||150,o=m/100,p={height:k.height(),width:k.width(),outerHeight:k.outerHeight(),outerWidth:k.outerWidth()};
d.extend(a,{effect:"scale",queue:false,fade:true,mode:b,complete:q,percent:n?m:100,from:n?p:{height:p.height*o,width:p.width*o,outerHeight:p.outerHeight*o,outerWidth:p.outerWidth*o}});
k.effect(a)
};
d.effects.effect.scale=function(t,q){var s=d(this),a=d.extend(true,{},t),p=d.effects.setMode(s,t.mode||"effect"),o=parseInt(t.percent,10)||(parseInt(t.percent,10)===0?0:(p==="hide"?0:100)),m=t.direction||"both",b=t.origin,r={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()},n={y:m!=="horizontal"?(o/100):1,x:m!=="vertical"?(o/100):1};
a.effect="size";
a.queue=false;
a.complete=q;
if(p!=="effect"){a.origin=b||["middle","center"];
a.restore=true
}a.from=t.from||(p==="show"?{height:0,width:0,outerHeight:0,outerWidth:0}:r);
a.to={height:r.height*n.y,width:r.width*n.x,outerHeight:r.outerHeight*n.y,outerWidth:r.outerWidth*n.x};
if(a.fade){if(p==="show"){a.from.opacity=0;
a.to.opacity=1
}if(p==="hide"){a.from.opacity=1;
a.to.opacity=0
}}s.effect(a)
};
d.effects.effect.size=function(C,D){var y,F,E,L=d(this),z=["position","top","bottom","left","right","width","height","overflow","opacity"],A=["position","top","bottom","left","right","overflow","opacity"],B=["width","height","overflow"],H=["fontSize"],w=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],K=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],G=d.effects.setMode(L,C.mode||"effect"),x=C.restore||G!=="effect",a=C.scale||"both",o=C.origin||["middle","center"],b=L.css("position"),J=x?z:A,I={height:0,width:0,outerHeight:0,outerWidth:0};
if(G==="show"){L.show()
}y={height:L.height(),width:L.width(),outerHeight:L.outerHeight(),outerWidth:L.outerWidth()};
if(C.mode==="toggle"&&G==="show"){L.from=C.to||I;
L.to=C.from||y
}else{L.from=C.from||(G==="show"?I:y);
L.to=C.to||(G==="hide"?I:y)
}E={from:{y:L.from.height/y.height,x:L.from.width/y.width},to:{y:L.to.height/y.height,x:L.to.width/y.width}};
if(a==="box"||a==="both"){if(E.from.y!==E.to.y){J=J.concat(w);
L.from=d.effects.setTransition(L,w,E.from.y,L.from);
L.to=d.effects.setTransition(L,w,E.to.y,L.to)
}if(E.from.x!==E.to.x){J=J.concat(K);
L.from=d.effects.setTransition(L,K,E.from.x,L.from);
L.to=d.effects.setTransition(L,K,E.to.x,L.to)
}}if(a==="content"||a==="both"){if(E.from.y!==E.to.y){J=J.concat(H).concat(B);
L.from=d.effects.setTransition(L,H,E.from.y,L.from);
L.to=d.effects.setTransition(L,H,E.to.y,L.to)
}}d.effects.save(L,J);
L.show();
d.effects.createWrapper(L);
L.css("overflow","hidden").css(L.from);
if(o){F=d.effects.getBaseline(o,y);
L.from.top=(y.outerHeight-L.outerHeight())*F.y;
L.from.left=(y.outerWidth-L.outerWidth())*F.x;
L.to.top=(y.outerHeight-L.to.outerHeight)*F.y;
L.to.left=(y.outerWidth-L.to.outerWidth)*F.x
}L.css(L.from);
if(a==="content"||a==="both"){w=w.concat(["marginTop","marginBottom"]).concat(H);
K=K.concat(["marginLeft","marginRight"]);
B=z.concat(w).concat(K);
L.find("*[width]").each(function(){var e=d(this),f={height:e.height(),width:e.width(),outerHeight:e.outerHeight(),outerWidth:e.outerWidth()};
if(x){d.effects.save(e,B)
}e.from={height:f.height*E.from.y,width:f.width*E.from.x,outerHeight:f.outerHeight*E.from.y,outerWidth:f.outerWidth*E.from.x};
e.to={height:f.height*E.to.y,width:f.width*E.to.x,outerHeight:f.height*E.to.y,outerWidth:f.width*E.to.x};
if(E.from.y!==E.to.y){e.from=d.effects.setTransition(e,w,E.from.y,e.from);
e.to=d.effects.setTransition(e,w,E.to.y,e.to)
}if(E.from.x!==E.to.x){e.from=d.effects.setTransition(e,K,E.from.x,e.from);
e.to=d.effects.setTransition(e,K,E.to.x,e.to)
}e.css(e.from);
e.animate(e.to,C.duration,C.easing,function(){if(x){d.effects.restore(e,B)
}})
})
}L.animate(L.to,{queue:false,duration:C.duration,easing:C.easing,complete:function(){if(L.to.opacity===0){L.css("opacity",L.from.opacity)
}if(G==="hide"){L.hide()
}d.effects.restore(L,J);
if(!x){if(b==="static"){L.css({position:"relative",top:L.to.top,left:L.to.left})
}else{d.each(["top","left"],function(f,e){L.css(e,function(k,h){var j=parseInt(h,10),g=f?L.to.left:L.to.top;
if(h==="auto"){return g+"px"
}return j+g+"px"
})
})
}}d.effects.removeWrapper(L);
D()
}})
}
})(jQuery);
(function(d,c){d.effects.effect.shake=function(C,D){var K=d(this),J=["position","top","bottom","left","right","height","width"],E=d.effects.setMode(K,C.mode||"effect"),b=C.direction||"left",I=C.distance||20,F=C.times||3,a=F*2+1,y=Math.round(C.duration/a),G=(b==="up"||b==="down")?"top":"left",H=(b==="up"||b==="left"),o={},w={},x={},z,B=K.queue(),A=B.length;
d.effects.save(K,J);
K.show();
d.effects.createWrapper(K);
o[G]=(H?"-=":"+=")+I;
w[G]=(H?"+=":"-=")+I*2;
x[G]=(H?"-=":"+=")+I*2;
K.animate(o,y,C.easing);
for(z=1;
z<F;
z++){K.animate(w,y,C.easing).animate(x,y,C.easing)
}K.animate(w,y,C.easing).animate(o,y/2,C.easing).queue(function(){if(E==="hide"){K.hide()
}d.effects.restore(K,J);
d.effects.removeWrapper(K);
D()
});
if(A>1){B.splice.apply(B,[1,0].concat(B.splice(A,a+1)))
}K.dequeue()
}
})(jQuery);
(function(d,c){d.effects.effect.slide=function(t,p){var s=d(this),n=["position","top","bottom","left","right","width","height"],o=d.effects.setMode(s,t.mode||"show"),a=o==="show",b=t.direction||"left",r=(b==="up"||b==="down")?"top":"left",u=(b==="up"||b==="left"),v,q={};
d.effects.save(s,n);
s.show();
v=t.distance||s[r==="top"?"outerHeight":"outerWidth"](true);
d.effects.createWrapper(s).css({overflow:"hidden"});
if(a){s.css(r,u?(isNaN(v)?"-"+v:-v):v)
}q[r]=(a?(u?"+=":"-="):(u?"-=":"+="))+v;
s.animate(q,{queue:false,duration:t.duration,easing:t.easing,complete:function(){if(o==="hide"){s.hide()
}d.effects.restore(s,n);
d.effects.removeWrapper(s);
p()
}})
}
})(jQuery);
(function(d,c){d.effects.effect.transfer=function(w,s){var u=d(this),p=d(w.to),a=p.css("position")==="fixed",q=d("body"),o=a?q.scrollTop():0,b=a?q.scrollLeft():0,x=p.offset(),t={top:x.top-o,left:x.left-b,height:p.innerHeight(),width:p.innerWidth()},r=u.offset(),v=d("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(w.className).css({top:r.top-o,left:r.left-b,height:u.innerHeight(),width:u.innerWidth(),position:a?"fixed":"absolute"}).animate(t,w.duration,w.easing,function(){v.remove();
s()
})
}
})(jQuery);
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.9
 *
 * Requires: jQuery 1.2.2+
 */
(function(b){if(typeof define==="function"&&define.amd){define(["jquery"],b)
}else{if(typeof exports==="object"){module.exports=b
}else{b(jQuery)
}}}(function(u){var t=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],n=("onwheel" in document||document.documentMode>=9)?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],p=Array.prototype.slice,o,v;
if(u.event.fixHooks){for(var s=t.length;
s;
){u.event.fixHooks[t[--s]]=u.event.mouseHooks
}}var r=u.event.special.mousewheel={version:"3.1.9",setup:function(){if(this.addEventListener){for(var a=n.length;
a;
){this.addEventListener(n[--a],m,false)
}}else{this.onmousewheel=m
}u.data(this,"mousewheel-line-height",r.getLineHeight(this));
u.data(this,"mousewheel-page-height",r.getPageHeight(this))
},teardown:function(){if(this.removeEventListener){for(var a=n.length;
a;
){this.removeEventListener(n[--a],m,false)
}}else{this.onmousewheel=null
}},getLineHeight:function(a){return parseInt(u(a)["offsetParent" in u.fn?"offsetParent":"parent"]().css("fontSize"),10)
},getPageHeight:function(a){return u(a).height()
},settings:{adjustOldDeltas:true}};
u.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")
},unmousewheel:function(a){return this.unbind("mousewheel",a)
}});
function m(g){var e=g||window.event,a=p.call(arguments,1),h=0,c=0,d=0,b=0;
g=u.event.fix(e);
g.type="mousewheel";
if("detail" in e){d=e.detail*-1
}if("wheelDelta" in e){d=e.wheelDelta
}if("wheelDeltaY" in e){d=e.wheelDeltaY
}if("wheelDeltaX" in e){c=e.wheelDeltaX*-1
}if("axis" in e&&e.axis===e.HORIZONTAL_AXIS){c=d*-1;
d=0
}h=d===0?c:d;
if("deltaY" in e){d=e.deltaY*-1;
h=d
}if("deltaX" in e){c=e.deltaX;
if(d===0){h=c*-1
}}if(d===0&&c===0){return
}if(e.deltaMode===1){var j=u.data(this,"mousewheel-line-height");
h*=j;
d*=j;
c*=j
}else{if(e.deltaMode===2){var f=u.data(this,"mousewheel-page-height");
h*=f;
d*=f;
c*=f
}}b=Math.max(Math.abs(d),Math.abs(c));
if(!v||b<v){v=b;
if(w(e,b)){v/=40
}}if(w(e,b)){h/=40;
c/=40;
d/=40
}h=Math[h>=1?"floor":"ceil"](h/v);
c=Math[c>=1?"floor":"ceil"](c/v);
d=Math[d>=1?"floor":"ceil"](d/v);
g.deltaX=c;
g.deltaY=d;
g.deltaFactor=v;
g.deltaMode=0;
a.unshift(g,h,c,d);
if(o){clearTimeout(o)
}o=setTimeout(q,200);
return(u.event.dispatch||u.event.handle).apply(this,a)
}function q(){v=null
}function w(a,b){return r.settings.adjustOldDeltas&&a.type==="mousewheel"&&b%120===0
}}));
(function(b){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],b)
}else{b(jQuery)
}}(function(ac){var S="left",T="right",ad="up",G="down",af="in",E="out",V="none",L="auto",W="swipe",K="pinch",R="tap",Y="doubletap",ag="longtap",F="hold",M="horizontal",J="vertical",Z="all",O=10,ab="start",X="move",aa="end",Q="cancel",ah="ontouchstart" in window,I=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,ae=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,P="TouchSwipe";
var U={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe"};
ac.fn.swipe=function(a){var b=ac(this),c=b.data(P);
if(c&&typeof a==="string"){if(c[a]){return c[a].apply(this,Array.prototype.slice.call(arguments,1))
}else{ac.error("Method "+a+" does not exist on jQuery.swipe")
}}else{if(!c&&(typeof a==="object"||!a)){return H.apply(this,arguments)
}}return b
};
ac.fn.swipe.defaults=U;
ac.fn.swipe.phases={PHASE_START:ab,PHASE_MOVE:X,PHASE_END:aa,PHASE_CANCEL:Q};
ac.fn.swipe.directions={LEFT:S,RIGHT:T,UP:ad,DOWN:G,IN:af,OUT:E};
ac.fn.swipe.pageScroll={NONE:V,HORIZONTAL:M,VERTICAL:J,AUTO:L};
ac.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:Z};
function H(a){if(a&&(a.allowPageScroll===undefined&&(a.swipe!==undefined||a.swipeStatus!==undefined))){a.allowPageScroll=V
}if(a.click!==undefined&&a.tap===undefined){a.tap=a.click
}if(!a){a={}
}a=ac.extend({},ac.fn.swipe.defaults,a);
return this.each(function(){var b=ac(this);
var c=b.data(P);
if(!c){c=new N(this,a);
b.data(P,c)
}})
}function N(bV,aw){var w=(ah||ae||!aw.fallbackToMouseEvents),u=w?(ae?(I?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",y=w?(ae?(I?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",g=w?(ae?(I?"MSPointerUp":"pointerup"):"touchend"):"mouseup",j=w?null:"mouseleave",bM=(ae?(I?"MSPointerCancel":"pointercancel"):"touchcancel");
var bj=0,bA=null,bo=0,bY=0,bq=0,z=1,a0=0,bG=0,r=null;
var by=ac(bV);
var b="start";
var e=0;
var bz=null;
var h=0,bX=0,bU=0,bm=0,q=0;
var bt=null,bk=null;
try{by.bind(u,bC);
by.bind(bM,bQ)
}catch(bf){ac.error("events not supported "+u+","+bM+" on jQuery.swipe")
}this.enable=function(){by.bind(u,bC);
by.bind(bM,bQ);
return by
};
this.disable=function(){bF();
return by
};
this.destroy=function(){bF();
by.data(P,null);
return by
};
this.option=function(ai,aj){if(aw[ai]!==undefined){if(aj===undefined){return aw[ai]
}else{aw[ai]=aj
}}else{ac.error("Option "+ai+" does not exist on jQuery.swipe.options")
}return null
};
function bC(aj){if(bO()){return
}if(ac(aj.target).closest(aw.excludedElements,by).length>0){return
}var ai=aj.originalEvent?aj.originalEvent:aj;
var ak,al=ah?ai.touches[0]:ai;
b=ab;
if(ah){e=ai.touches.length
}else{aj.preventDefault()
}bj=0;
bA=null;
bG=null;
bo=0;
bY=0;
bq=0;
z=1;
a0=0;
bz=bg();
r=bp();
k();
if(!ah||(e===aw.fingers||aw.fingers===Z)||bs()){bh(0,al);
h=ay();
if(e==2){bh(1,ai.touches[1]);
bY=bq=ax(bz[0].start,bz[1].start)
}if(aw.swipeStatus||aw.pinchStatus){ak=p(ai,b)
}}else{ak=false
}if(ak===false){b=Q;
p(ai,b);
return ak
}else{if(aw.hold){bk=setTimeout(ac.proxy(function(){by.trigger("hold",[ai.target]);
if(aw.hold){ak=aw.hold.call(by,ai,ai.target)
}},this),aw.longTapThreshold)
}bb(true)
}return null
}function bW(al){var ai=al.originalEvent?al.originalEvent:al;
if(b===aa||b===Q||bd()){return
}var am,an=ah?ai.touches[0]:ai;
var ak=bI(an);
bX=ay();
if(ah){e=ai.touches.length
}if(aw.hold){clearTimeout(bk)
}b=X;
if(e==2){if(bY==0){bh(1,ai.touches[1]);
bY=bq=ax(bz[0].start,bz[1].start)
}else{bI(ai.touches[1]);
bq=ax(bz[0].end,bz[1].end);
bG=az(bz[0].end,bz[1].end)
}z=bS(bY,bq);
a0=Math.abs(bY-bq)
}if((e===aw.fingers||aw.fingers===Z)||!ah||bs()){bA=bE(ak.start,ak.end);
be(al,bA);
bj=bx(ak.start,ak.end);
bo=bD();
bH(bA,bj);
if(aw.swipeStatus||aw.pinchStatus){am=p(ai,b)
}if(!aw.triggerOnTouchEnd||aw.triggerOnTouchLeave){var ao=true;
if(aw.triggerOnTouchLeave){var aj=br(this);
ao=D(ak.end,aj)
}if(!aw.triggerOnTouchEnd&&ao){b=bN(X)
}else{if(aw.triggerOnTouchLeave&&!ao){b=bN(aa)
}}if(b==Q||b==aa){p(ai,b)
}}}else{b=Q;
p(ai,b)
}if(am===false){b=Q;
p(ai,b)
}}function s(aj){var ai=aj.originalEvent;
if(ah){if(ai.touches.length>0){C();
return true
}}if(bd()){e=bm
}bX=ay();
bo=bD();
if(o()||!bc()){b=Q;
p(ai,b)
}else{if(aw.triggerOnTouchEnd||(aw.triggerOnTouchEnd==false&&b===X)){aj.preventDefault();
b=aa;
p(ai,b)
}else{if(!aw.triggerOnTouchEnd&&bT()){b=aa;
bK(ai,b,R)
}else{if(b===X){b=Q;
p(ai,b)
}}}}bb(false);
return null
}function bQ(){e=0;
bX=0;
h=0;
bY=0;
bq=0;
z=1;
k();
bb(false)
}function t(aj){var ai=aj.originalEvent;
if(aw.triggerOnTouchLeave){b=bN(aa);
p(ai,b)
}}function bF(){by.unbind(u,bC);
by.unbind(bM,bQ);
by.unbind(y,bW);
by.unbind(g,s);
if(j){by.unbind(j,t)
}bb(false)
}function bN(ai){var aj=ai;
var ak=bP();
var al=bc();
var am=o();
if(!ak||am){aj=Q
}else{if(al&&ai==X&&(!aw.triggerOnTouchEnd||aw.triggerOnTouchLeave)){aj=aa
}else{if(!al&&ai==aa&&aw.triggerOnTouchLeave){aj=Q
}}}return aj
}function p(ai,ak){var aj=undefined;
if(v()||f()){aj=bK(ai,ak,W)
}else{if((n()||bs())&&aj!==false){aj=bK(ai,ak,K)
}}if(bJ()&&aj!==false){aj=bK(ai,ak,Y)
}else{if(ba()&&aj!==false){aj=bK(ai,ak,ag)
}else{if(bi()&&aj!==false){aj=bK(ai,ak,R)
}}}if(ak===Q){bQ(ai)
}if(ak===aa){if(ah){if(ai.touches.length==0){bQ(ai)
}}else{bQ(ai)
}}return aj
}function bK(ai,al,aj){var ak=undefined;
if(aj==W){by.trigger("swipeStatus",[al,bA||null,bj||0,bo||0,e,bz]);
if(aw.swipeStatus){ak=aw.swipeStatus.call(by,ai,al,bA||null,bj||0,bo||0,e,bz);
if(ak===false){return false
}}if(al==aa&&bu()){by.trigger("swipe",[bA,bj,bo,e,bz]);
if(aw.swipe){ak=aw.swipe.call(by,ai,bA,bj,bo,e,bz);
if(ak===false){return false
}}switch(bA){case S:by.trigger("swipeLeft",[bA,bj,bo,e,bz]);
if(aw.swipeLeft){ak=aw.swipeLeft.call(by,ai,bA,bj,bo,e,bz)
}break;
case T:by.trigger("swipeRight",[bA,bj,bo,e,bz]);
if(aw.swipeRight){ak=aw.swipeRight.call(by,ai,bA,bj,bo,e,bz)
}break;
case ad:by.trigger("swipeUp",[bA,bj,bo,e,bz]);
if(aw.swipeUp){ak=aw.swipeUp.call(by,ai,bA,bj,bo,e,bz)
}break;
case G:by.trigger("swipeDown",[bA,bj,bo,e,bz]);
if(aw.swipeDown){ak=aw.swipeDown.call(by,ai,bA,bj,bo,e,bz)
}break
}}}if(aj==K){by.trigger("pinchStatus",[al,bG||null,a0||0,bo||0,e,z,bz]);
if(aw.pinchStatus){ak=aw.pinchStatus.call(by,ai,al,bG||null,a0||0,bo||0,e,z,bz);
if(ak===false){return false
}}if(al==aa&&bR()){switch(bG){case af:by.trigger("pinchIn",[bG||null,a0||0,bo||0,e,z,bz]);
if(aw.pinchIn){ak=aw.pinchIn.call(by,ai,bG||null,a0||0,bo||0,e,z,bz)
}break;
case E:by.trigger("pinchOut",[bG||null,a0||0,bo||0,e,z,bz]);
if(aw.pinchOut){ak=aw.pinchOut.call(by,ai,bG||null,a0||0,bo||0,e,z,bz)
}break
}}}if(aj==R){if(al===Q||al===aa){clearTimeout(bt);
clearTimeout(bk);
if(c()&&!x()){q=ay();
bt=setTimeout(ac.proxy(function(){q=null;
by.trigger("tap",[ai.target]);
if(aw.tap){ak=aw.tap.call(by,ai,ai.target)
}},this),aw.doubleTapThreshold)
}else{q=null;
by.trigger("tap",[ai.target]);
if(aw.tap){ak=aw.tap.call(by,ai,ai.target)
}}}}else{if(aj==Y){if(al===Q||al===aa){clearTimeout(bt);
q=null;
by.trigger("doubletap",[ai.target]);
if(aw.doubleTap){ak=aw.doubleTap.call(by,ai,ai.target)
}}}else{if(aj==ag){if(al===Q||al===aa){clearTimeout(bt);
q=null;
by.trigger("longtap",[ai.target]);
if(aw.longTap){ak=aw.longTap.call(by,ai,ai.target)
}}}}}return ak
}function bc(){var ai=true;
if(aw.threshold!==null){ai=bj>=aw.threshold
}return ai
}function o(){var ai=false;
if(aw.cancelThreshold!==null&&bA!==null){ai=(bw(bA)-bj)>=aw.cancelThreshold
}return ai
}function bl(){if(aw.pinchThreshold!==null){return a0>=aw.pinchThreshold
}return true
}function bP(){var ai;
if(aw.maxTimeThreshold){if(bo>=aw.maxTimeThreshold){ai=false
}else{ai=true
}}else{ai=true
}return ai
}function be(ak,aj){if(aw.allowPageScroll===V||bs()){ak.preventDefault()
}else{var ai=aw.allowPageScroll===L;
switch(aj){case S:if((aw.swipeLeft&&ai)||(!ai&&aw.allowPageScroll!=M)){ak.preventDefault()
}break;
case T:if((aw.swipeRight&&ai)||(!ai&&aw.allowPageScroll!=M)){ak.preventDefault()
}break;
case ad:if((aw.swipeUp&&ai)||(!ai&&aw.allowPageScroll!=J)){ak.preventDefault()
}break;
case G:if((aw.swipeDown&&ai)||(!ai&&aw.allowPageScroll!=J)){ak.preventDefault()
}break
}}}function bR(){var aj=bB();
var ak=d();
var ai=bl();
return aj&&ak&&ai
}function bs(){return !!(aw.pinchStatus||aw.pinchIn||aw.pinchOut)
}function n(){return !!(bR()&&bs())
}function bu(){var ak=bP();
var ai=bc();
var al=bB();
var an=d();
var am=o();
var aj=!am&&an&&al&&ai&&ak;
return aj
}function f(){return !!(aw.swipe||aw.swipeStatus||aw.swipeLeft||aw.swipeRight||aw.swipeUp||aw.swipeDown)
}function v(){return !!(bu()&&f())
}function bB(){return((e===aw.fingers||aw.fingers===Z)||!ah)
}function d(){return bz[0].end.x!==0
}function bT(){return !!(aw.tap)
}function c(){return !!(aw.doubleTap)
}function bv(){return !!(aw.longTap)
}function m(){if(q==null){return false
}var ai=ay();
return(c()&&((ai-q)<=aw.doubleTapThreshold))
}function x(){return m()
}function A(){return((e===1||!ah)&&(isNaN(bj)||bj<aw.threshold))
}function a(){return((bo>aw.longTapThreshold)&&(bj<O))
}function bi(){return !!(A()&&bT())
}function bJ(){return !!(m()&&c())
}function ba(){return !!(a()&&bv())
}function C(){bU=ay();
bm=event.touches.length+1
}function k(){bU=0;
bm=0
}function bd(){var aj=false;
if(bU){var ai=ay()-bU;
if(ai<=aw.fingerReleaseThreshold){aj=true
}}return aj
}function bO(){return !!(by.data(P+"_intouch")===true)
}function bb(ai){if(ai===true){by.bind(y,bW);
by.bind(g,s);
if(j){by.bind(j,t)
}}else{by.unbind(y,bW,false);
by.unbind(g,s,false);
if(j){by.unbind(j,t,false)
}}by.data(P+"_intouch",ai===true)
}function bh(aj,ak){var ai=ak.identifier!==undefined?ak.identifier:0;
bz[aj].identifier=ai;
bz[aj].start.x=bz[aj].end.x=ak.pageX||ak.clientX;
bz[aj].start.y=bz[aj].end.y=ak.pageY||ak.clientY;
return bz[aj]
}function bI(ak){var ai=ak.identifier!==undefined?ak.identifier:0;
var aj=bn(ai);
aj.end.x=ak.pageX||ak.clientX;
aj.end.y=ak.pageY||ak.clientY;
return aj
}function bn(ai){for(var aj=0;
aj<bz.length;
aj++){if(bz[aj].identifier==ai){return bz[aj]
}}}function bg(){var aj=[];
for(var ai=0;
ai<=5;
ai++){aj.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})
}return aj
}function bH(aj,ai){ai=Math.max(ai,bw(aj));
r[aj].distance=ai
}function bw(ai){if(r[ai]){return r[ai].distance
}return undefined
}function bp(){var ai={};
ai[S]=B(S);
ai[T]=B(T);
ai[ad]=B(ad);
ai[G]=B(G);
return ai
}function B(ai){return{direction:ai,distance:0}
}function bD(){return bX-h
}function ax(ai,aj){var ak=Math.abs(ai.x-aj.x);
var al=Math.abs(ai.y-aj.y);
return Math.round(Math.sqrt(ak*ak+al*al))
}function bS(ak,aj){var ai=(aj/ak)*1;
return ai.toFixed(2)
}function az(){if(z<1){return E
}else{return af
}}function bx(ai,aj){return Math.round(Math.sqrt(Math.pow(aj.x-ai.x,2)+Math.pow(aj.y-ai.y,2)))
}function bL(ak,am){var an=ak.x-am.x;
var ai=am.y-ak.y;
var al=Math.atan2(ai,an);
var aj=Math.round(al*180/Math.PI);
if(aj<0){aj=360-Math.abs(aj)
}return aj
}function bE(aj,ak){var ai=bL(aj,ak);
if((ai<=45)&&(ai>=0)){return S
}else{if((ai<=360)&&(ai>=315)){return S
}else{if((ai>=135)&&(ai<=225)){return T
}else{if((ai>45)&&(ai<135)){return G
}else{return ad
}}}}}function ay(){var ai=new Date();
return ai.getTime()
}function br(ak){ak=ac(ak);
var ai=ak.offset();
var aj={left:ai.left,right:ai.left+ak.outerWidth(),top:ai.top,bottom:ai.top+ak.outerHeight()};
return aj
}function D(aj,ai){return(aj.x>ai.left&&aj.x<ai.right&&aj.y>ai.top&&aj.y<ai.bottom)
}}}));
(function(f,e){var d=f.jQuery||f.Cowboy||(f.Cowboy={}),g;
d.throttle=g=function(k,c,h,n){var m,a=0;
if(typeof c!=="boolean"){n=h;
h=c;
c=e
}function b(){var q=this,j=+new Date()-a,s=arguments;
function o(){a=+new Date();
h.apply(q,s)
}function p(){m=e
}if(n&&!m){o()
}m&&clearTimeout(m);
if(n===e&&j>k){o()
}else{if(c!==true){m=setTimeout(n?p:o,n===e?k-j:k)
}}}if(d.guid){b.guid=h.guid=h.guid||d.guid++
}return b
};
d.debounce=function(a,c,b){return b===e?g(a,c,false):g(a,b,c!==false)
}
})(this);
/*!
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Creative Commons Attribution 3.0 Unported License. For
 * details, see http://creativecommons.org/licenses/by/3.0/.
 */
;
!function(b){b(function(){if(navigator.userAgent.match(/IEMobile\/10\.0/)){var a=document.createElement("style");
a.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}"));
document.getElementsByTagName("head")[0].appendChild(a)
}var h=b(window);
var j=b(document.body);
var g=b(".bs-row").outerHeight(true)+10;
setTimeout(function(){b(".bs-top").affix()
},100);
b(".tooltip-demo").tooltip({selector:"[data-toggle=tooltip]",container:"body"});
b(".tooltip-test").tooltip();
b(".popover-test").popover();
b(".bs-docs-navbar").tooltip({selector:"a[data-toggle=tooltip]",container:".bs-docs-navbar .nav"});
if(window.matchMedia){var k=window.matchMedia("(min-width: 320px) and (max-width: 767px)");
if(k.matches||b(window).width()<400){b("body").addClass("manipal-mobile")
}else{b("body").removeClass("manipal-mobile")
}b(window).resize(function(){k=window.matchMedia("(min-width: 320px) and (max-width: 767px)");
if(k.matches||b(window).width()<400){b("body").addClass("manipal-mobile")
}else{b("body").removeClass("manipal-mobile")
}})
}b("body").removeClass("manipal-small-desktop");
k=(b(window).width()>=768&&b(window).width()<=1200)?true:false;
if(k){b("body").addClass("manipal-small-desktop")
}b(window).resize(function(){b("body").removeClass("manipal-small-desktop");
k=(b(window).width()>=768&&b(window).width()<=1200)?true:false;
if(k){b("body").addClass("manipal-small-desktop")
}});
b("[data-toggle=popover]").popover();
b("#fat-btn").click(function(){var c=b(this);
c.button("loading");
setTimeout(function(){c.button("reset")
},3000)
});
if(b("#hideSocialConnectFlag").length>0&&b("#hideSocialConnectFlag").val()=="true"&&b("#request4info").length==0){b(".manipal-mobile .top-navigation .top-nav-menu-items.rfi-mobile").hide();
b(".manipal-mobile .top-navigation .top-nav-menu-items.mobile-apply-now").css("width","100%")
}else{if(b("#request4info").length==0){b(".manipal-mobile .top-navigation .top-nav-menu-items.rfi-mobile").hide();
b(".manipal-mobile .top-navigation .top-nav-menu-items.mobile-apply-now").css("width","50%");
b(".manipal-mobile .top-navigation .mobile-social-connect").css("width","50%")
}}b(document).ready(function(){if(b(".hero-container").length==0||b("#list-hero-banner").length==0){b(".profile-header-wrapper").addClass("noBanner")
}if(b("#hideSocialConnectFlag").length>0&&b("#hideSocialConnectFlag").val()=="true"){b("ul.navbar-right.container-hide-social-connect li.top-nav-menu-items:nth-last-child(2)").css({marginRight:"20px"});
b("ul.navbar-left.container-hide-social-connect li.top-nav-menu-items:nth-child(2)").css({marginRight:"20px"})
}})
})
}(window.jQuery);
(function(b){b.fn.MaGEAutoComplete=function(a){var a=a||{},s=b(this);
var t;
window.mageAutoComplete="";
defaults={minLength:a.minLength||3,domainValue:"",searchKey:"",multipleKeys:"",campusFlag:false,institutionFlag:false,programFlag:false,myResultObj:{},data:a.data||"",mainObj:"",campusReference:"",instituteReference:"",courseReference:"",issameDomain:true,domainValue:a.domain||"MU"};
var u=function(){mageAutoComplete=defaults.myResultObj;
if(typeof(a.callback)==="function"){a.callback.call(this)
}};
var n=function(){if(defaults.issameDomain){if(!defaults.institutionFlag){defaults.myResultObj.institutes.push({title:defaults.instituteReference.title,url:defaults.instituteReference.url});
defaults.institutionFlag=true
}if(!defaults.programFlag){defaults.myResultObj.programs.push({title:defaults.courseReference.title,url:defaults.courseReference.url});
defaults.programFlag=true
}}else{if(!defaults.campusFlag){defaults.myResultObj.campus.push({title:defaults.campusReference.title,url:defaults.campusReference.url});
defaults.campusFlag=true
}}};
var p=function(d,e){var c=[];
for(var f=0;
f<defaults.multipleKeys.length;
f++){var g=defaults.multipleKeys[f];
for(key=0;
key<e;
key++){var h=d.keywords[key].toLowerCase();
if(h.indexOf(g)>=0){c.push(defaults.multipleKeys[f])
}}}if(defaults.multipleKeys.length===c.length){n()
}};
var r=function(d){var e=d.keywords.length;
if(defaults.multipleKeys.length==1){for(key=0;
key<e;
key++){var c=d.keywords[key].toLowerCase();
if(c.indexOf(defaults.multipleKeys)>=0){n()
}}}else{if(defaults.multipleKeys.length>=1){p(d,e)
}}};
var m=function(d,c){if(typeof d=="object"){b.each(d,function(f,e){if(c=="first"){if(defaults.domainValue==e.domain){defaults.issameDomain=true
}else{defaults.campusFlag=false;
defaults.issameDomain=false
}defaults.campusReference=this;
m(e.institutes,"second")
}if(c=="second"){defaults.instituteReference=this;
defaults.institutionFlag=false;
m(e.courses,"third")
}if(c=="third"){defaults.courseReference=this;
defaults.programFlag=false;
r(e)
}})
}};
var q=function(){defaults.myResultObj={campus:[],institutes:[],programs:[]};
defaults.multipleKeys=b.trim(defaults.searchKey).split(" ");
m(defaults.data,"first")
};
var o=function(){s.on("keyup focus",function(c){if(c.keyCode=="27"){defaults.myResultObj={};
u()
}if(b.trim(s.val().length)>=defaults.minLength){defaults.searchKey=b.trim(s.val()).toLowerCase();
q();
u()
}else{defaults.myResultObj={};
u()
}})
};
o()
}
})(jQuery);
(function(d){if(d("#oafPageIdentifier").length==0){var f;
d.ajax({url:"/apps/manipal/components/site/search/GET.servlet",type:"GET",dataType:"html",success:function(c,b,a){f=d.parseJSON(c);
e(f)
},error:function(a,b){}});
function e(a){if(d("body").hasClass("manipal-mobile")){d("#searchInputMobile").MaGEAutoComplete({data:a,domain:d("#domainValue").val(),callback:function(){d("#search-results-mobile").html("");
var v=2,s=d("<div></div>");
if(mageAutoComplete.programs!=undefined&&mageAutoComplete.institutes!=undefined&&mageAutoComplete.campus!=undefined){if(mageAutoComplete.programs.length!==0){var t=d('<p><span class="category">Programs:</span> </p>');
v=(mageAutoComplete.programs.length>2)?v:mageAutoComplete.programs.length;
for(var r=0;
r<v;
r++){var p=t.append('<a href="'+mageAutoComplete.programs[r].url+'" class="result">'+mageAutoComplete.programs[r].title+"</a>")
}s=s.append(p)
}if(mageAutoComplete.institutes.length!==0){var c=d('<p><span class="category">Programs Offered at:</span> </p>');
v=(mageAutoComplete.institutes.length>2)?v:mageAutoComplete.institutes.length;
for(var r=0;
r<v;
r++){var w=c.append('<a href="'+mageAutoComplete.institutes[r].url+'" class="result">'+mageAutoComplete.institutes[r].title+"</a>")
}s=s.append(w)
}if(mageAutoComplete.campus.length!==0){v=(mageAutoComplete.campus.length>2)?v:mageAutoComplete.campus.length;
for(var r=0;
r<v;
r++){var q=d('<p><span class="category">Other Campus:</span> </p>').append('<a href="'+mageAutoComplete.campus[r].url+'" class="result">'+mageAutoComplete.campus[r].title+"</a>")
}s=s.append(q)
}d("#search-results-mobile").append(s);
if(mageAutoComplete.programs.length>0||mageAutoComplete.institutes.length>0||mageAutoComplete.campus.length>0){var u=d("#globalSearch").val();
d("#search-results-mobile").append('<div class="search-view-all"><a class="global-search-viewall" href="javascript:void(0);" title="View all">View all</a></div>');
d("body").on("click",".global-search-viewall",function(){d("#frm-global-search").submit()
})
}}d("body").on("click",function(g){if(d(g.target).hasClass("search-input")){return
}if(defaults.myResultObj!={}){defaults.myResultObj={};
d("#search-results-mobile").html("")
}})
}})
}else{d("#searchInput").MaGEAutoComplete({data:a,domain:d("#domainValue").val(),callback:function(){d(".search-results").html("");
var v=2,t=d("<div></div>");
if(mageAutoComplete.programs!=undefined&&mageAutoComplete.institutes!=undefined&&mageAutoComplete.campus!=undefined){if(mageAutoComplete.programs.length!==0){var u=d('<p><span class="category">Programs:</span> </p>');
v=(mageAutoComplete.programs.length>2)?v:mageAutoComplete.programs.length;
for(var s=0;
s<v;
s++){var q=u.append('<a href="'+mageAutoComplete.programs[s].url+'" class="result">'+mageAutoComplete.programs[s].title+"</a>")
}t=t.append(q)
}if(mageAutoComplete.institutes.length!==0){var p=d('<p><span class="category">Programs Offered at:</span> </p>');
v=(mageAutoComplete.institutes.length>2)?v:mageAutoComplete.institutes.length;
for(var s=0;
s<v;
s++){var w=p.append('<a href="'+mageAutoComplete.institutes[s].url+'" class="result">'+mageAutoComplete.institutes[s].title+"</a>")
}t=t.append(w)
}if(mageAutoComplete.campus.length!==0){v=(mageAutoComplete.campus.length>2)?v:mageAutoComplete.campus.length;
for(var s=0;
s<v;
s++){var r=d('<p><span class="category">Other Campus:</span> </p>').append('<a href="'+mageAutoComplete.campus[s].url+'" class="result">'+mageAutoComplete.campus[s].title+"</a>")
}t=t.append(r)
}d(".search-results").append(t);
if(mageAutoComplete.programs.length>0||mageAutoComplete.institutes.length>0||mageAutoComplete.campus.length>0){var c=d("#globalSearch").val();
d(".search-results").append('<div class="search-view-all"><a class="global-search-viewall" href="javascript:void(0);" title="View all">View all</a></div>');
d("body").on("click",".global-search-viewall",function(){d("#frm-global-search").submit()
})
}}d("body").on("click",function(g){if(d(g.target).hasClass("search-input")){return
}if(defaults.myResultObj!={}){defaults.myResultObj={};
d(".search-results").html("")
}})
}})
}var b=d(".header-search-box");
d(b).on("submit",".empty-search",function(j){var c=d.trim(d(b).find("#searchInput").val());
var k=d.trim(d(b).find("#searchInputMobile").val());
if(!d("body").hasClass("manipal-mobile")&&c==""){return false
}else{if(d("body").hasClass("manipal-mobile")&&k==""){return false
}}})
}}})(jQuery);
/*!
 * jQuery UI Accordion 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/accordion/
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(j,h){var f=0,k={},g={};
k.height=k.paddingTop=k.paddingBottom=k.borderTopWidth=k.borderBottomWidth="hide";
g.height=g.paddingTop=g.paddingBottom=g.borderTopWidth=g.borderBottomWidth="show";
j.widget("ui.accordion",{version:"1.10.3",options:{active:0,animate:{},collapsible:false,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var a=this.options;
this.prevShow=this.prevHide=j();
this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist");
if(!a.collapsible&&(a.active===false||a.active==null)){a.active=0
}this._processPanels();
if(a.active<0){a.active+=this.headers.length
}this._refresh()
},_getCreateEventData:function(){return{header:this.active,panel:!this.active.length?j():this.active.next(),content:!this.active.length?j():this.active.next()}
},_createIcons:function(){var a=this.options.icons;
if(a){j("<span>").addClass("ui-accordion-header-icon ui-icon "+a.header).prependTo(this.headers);
this.active.children(".ui-accordion-header-icon").removeClass(a.header).addClass(a.activeHeader);
this.headers.addClass("ui-accordion-icons")
}},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
},_destroy:function(){var a;
this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){if(/^ui-accordion/.test(this.id)){this.removeAttribute("id")
}});
this._destroyIcons();
a=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){if(/^ui-accordion/.test(this.id)){this.removeAttribute("id")
}});
if(this.options.heightStyle!=="content"){a.css("height","")
}},_setOption:function(b,a){if(b==="active"){this._activate(a);
return
}if(b==="event"){if(this.options.event){this._off(this.headers,this.options.event)
}this._setupEvents(a)
}this._super(b,a);
if(b==="collapsible"&&!a&&this.options.active===false){this._activate(0)
}if(b==="icons"){this._destroyIcons();
if(a){this._createIcons()
}}if(b==="disabled"){this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!a)
}},_keydown:function(b){if(b.altKey||b.ctrlKey){return
}var a=j.ui.keyCode,c=this.headers.length,e=this.headers.index(b.target),d=false;
switch(b.keyCode){case a.RIGHT:case a.DOWN:d=this.headers[(e+1)%c];
break;
case a.LEFT:case a.UP:d=this.headers[(e-1+c)%c];
break;
case a.SPACE:case a.ENTER:this._eventHandler(b);
break;
case a.HOME:d=this.headers[0];
break;
case a.END:d=this.headers[c-1];
break
}if(d){j(b.target).attr("tabIndex",-1);
j(d).attr("tabIndex",0);
d.focus();
b.preventDefault()
}},_panelKeyDown:function(a){if(a.keyCode===j.ui.keyCode.UP&&a.ctrlKey){j(a.currentTarget).prev().focus()
}},refresh:function(){var a=this.options;
this._processPanels();
if((a.active===false&&a.collapsible===true)||!this.headers.length){a.active=false;
this.active=j()
}else{if(a.active===false){this._activate(0)
}else{if(this.active.length&&!j.contains(this.element[0],this.active[0])){if(this.headers.length===this.headers.find(".ui-state-disabled").length){a.active=false;
this.active=j()
}else{this._activate(Math.max(0,a.active-1))
}}else{a.active=this.headers.index(this.active)
}}}this._destroyIcons();
this._refresh()
},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all");
this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
},_refresh:function(){var a,c=this.options,d=c.heightStyle,b=this.element.parent(),e=this.accordionId="ui-accordion-"+(this.element.attr("id")||++f);
this.active=this._findActive(c.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");
this.active.next().addClass("ui-accordion-content-active").show();
this.headers.attr("role","tab").each(function(t){var s=j(this),p=s.attr("id"),r=s.next(),q=r.attr("id");
if(!p){p=e+"-header-"+t;
s.attr("id",p)
}if(!q){q=e+"-panel-"+t;
r.attr("id",q)
}s.attr("aria-controls",q);
r.attr("aria-labelledby",p)
}).next().attr("role","tabpanel");
this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide();
if(!this.active.length){this.headers.eq(0).attr("tabIndex",0)
}else{this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"})
}this._createIcons();
this._setupEvents(c.event);
if(d==="fill"){a=b.height();
this.element.siblings(":visible").each(function(){var m=j(this),n=m.css("position");
if(n==="absolute"||n==="fixed"){return
}a-=m.outerHeight(true)
});
this.headers.each(function(){a-=j(this).outerHeight(true)
});
this.headers.next().each(function(){j(this).height(Math.max(0,a-j(this).innerHeight()+j(this).height()))
}).css("overflow","auto")
}else{if(d==="auto"){a=0;
this.headers.next().each(function(){a=Math.max(a,j(this).css("height","").height())
}).height(a)
}}},_activate:function(b){var a=this._findActive(b)[0];
if(a===this.active[0]){return
}a=a||this.active[0];
this._eventHandler({target:a,currentTarget:a,preventDefault:j.noop})
},_findActive:function(a){return typeof a==="number"?this.headers.eq(a):j()
},_setupEvents:function(a){var b={keydown:"_keydown"};
if(a){j.each(a.split(" "),function(c,d){b[d]="_eventHandler"
})
}this._off(this.headers.add(this.headers.next()));
this._on(this.headers,b);
this._on(this.headers.next(),{keydown:"_panelKeyDown"});
this._hoverable(this.headers);
this._focusable(this.headers)
},_eventHandler:function(r){var a=this.options,o=this.active,e=j(r.currentTarget),c=e[0]===o[0],q=c&&a.collapsible,p=q?j():e.next(),d=o.next(),b={oldHeader:o,oldPanel:d,newHeader:q?j():e,newPanel:p};
r.preventDefault();
if((c&&!a.collapsible)||(this._trigger("beforeActivate",r,b)===false)){return
}a.active=q?false:this.headers.index(e);
this.active=c?j():e;
this._toggle(b);
o.removeClass("ui-accordion-header-active ui-state-active");
if(a.icons){o.children(".ui-accordion-header-icon").removeClass(a.icons.activeHeader).addClass(a.icons.header)
}if(!c){e.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top");
if(a.icons){e.children(".ui-accordion-header-icon").removeClass(a.icons.header).addClass(a.icons.activeHeader)
}e.next().addClass("ui-accordion-content-active")
}},_toggle:function(a){var c=a.newPanel,b=this.prevShow.length?this.prevShow:a.oldPanel;
this.prevShow.add(this.prevHide).stop(true,true);
this.prevShow=c;
this.prevHide=b;
if(this.options.animate){this._animate(c,b,a)
}else{b.hide();
c.show();
this._toggleComplete(a)
}b.attr({"aria-expanded":"false","aria-hidden":"true"});
b.prev().attr("aria-selected","false");
if(c.length&&b.length){b.prev().attr("tabIndex",-1)
}else{if(c.length){this.headers.filter(function(){return j(this).attr("tabIndex")===0
}).attr("tabIndex",-1)
}}c.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})
},_animate:function(x,d,t){var e,r,u,s=this,c=0,b=x.length&&(!d.length||(x.index()<d.index())),v=this.options.animate||{},a=b&&v.down||v,w=function(){s._toggleComplete(t)
};
if(typeof a==="number"){u=a
}if(typeof a==="string"){r=a
}r=r||a.easing||v.easing;
u=u||a.duration||v.duration;
if(!d.length){return x.animate(g,u,r,w)
}if(!x.length){return d.animate(k,u,r,w)
}e=x.show().outerHeight();
d.animate(k,{duration:u,easing:r,step:function(n,m){m.now=Math.round(n)
}});
x.hide().animate(g,{duration:u,easing:r,complete:w,step:function(n,m){m.now=Math.round(n);
if(m.prop!=="height"){c+=m.now
}else{if(s.options.heightStyle!=="content"){m.now=Math.round(e-d.outerHeight()-c);
c=0
}}}})
},_toggleComplete:function(a){var b=a.oldPanel;
b.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");
if(b.length){b.parent()[0].className=b.parent()[0].className
}this._trigger("activate",null,a)
}})
})(jQuery);
/*! jQuery Validation Plugin - v1.10.0 - 9/7/2012
* https://github.com/jzaefferer/jquery-validation
* Copyright (c) 2012 Jörn Zaefferer; Licensed MIT, GPL */
(function(b){b.extend(b.fn,{validate:function(a){if(!this.length){if(a&&a.debug&&window.console){console.warn("nothing selected, can't validate, returning nothing")
}return
}var d=b.data(this[0],"validator");
if(d){return d
}this.attr("novalidate","novalidate");
d=new b.validator(a,this[0]);
b.data(this[0],"validator",d);
if(d.settings.onsubmit){this.validateDelegate(":submit","click",function(c){if(d.settings.submitHandler){d.submitButton=c.target
}if(b(c.target).hasClass("cancel")){d.cancelSubmit=true
}});
this.submit(function(f){if(d.settings.debug){f.preventDefault()
}function c(){var e;
if(d.settings.submitHandler){if(d.submitButton){e=b("<input type='hidden'/>").attr("name",d.submitButton.name).val(d.submitButton.value).appendTo(d.currentForm)
}d.settings.submitHandler.call(d,d.currentForm,f);
if(d.submitButton){e.remove()
}return false
}return true
}if(d.cancelSubmit){d.cancelSubmit=false;
return c()
}if(d.form()){if(d.pendingRequest){d.formSubmitted=true;
return false
}return c()
}else{d.focusInvalid();
return false
}})
}return d
},valid:function(){if(b(this[0]).is("form")){return this.validate().form()
}else{var d=true;
var a=b(this[0].form).validate();
this.each(function(){d&=a.element(this)
});
return d
}},removeAttrs:function(e){var a={},f=this;
b.each(e.split(/\s/),function(d,c){a[c]=f.attr(c);
f.removeAttr(c)
});
return a
},rules:function(p,s){var n=this[0];
if(p){var q=b.data(n.form,"validator").settings;
var k=q.rules;
var a=b.validator.staticRules(n);
switch(p){case"add":b.extend(a,b.validator.normalizeRule(s));
k[n.name]=a;
if(s.messages){q.messages[n.name]=b.extend(q.messages[n.name],s.messages)
}break;
case"remove":if(!s){delete k[n.name];
return a
}var m={};
b.each(s.split(/\s/),function(d,c){m[c]=a[c];
delete a[c]
});
return m
}}var o=b.validator.normalizeRules(b.extend({},b.validator.metadataRules(n),b.validator.classRules(n),b.validator.attributeRules(n),b.validator.staticRules(n)),n);
if(o.required){var r=o.required;
delete o.required;
o=b.extend({required:r},o)
}return o
}});
b.extend(b.expr[":"],{blank:function(a){return !b.trim(""+a.value)
},filled:function(a){return !!b.trim(""+a.value)
},unchecked:function(a){return !a.checked
}});
b.validator=function(a,d){this.settings=b.extend(true,{},b.validator.defaults,a);
this.currentForm=d;
this.init()
};
b.validator.format=function(a,d){if(arguments.length===1){return function(){var c=b.makeArray(arguments);
c.unshift(a);
return b.validator.format.apply(this,c)
}
}if(arguments.length>2&&d.constructor!==Array){d=b.makeArray(arguments).slice(1)
}if(d.constructor!==Array){d=[d]
}b.each(d,function(f,c){a=a.replace(new RegExp("\\{"+f+"\\}","g"),c)
});
return a
};
b.extend(b.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:true,errorContainer:b([]),errorLabelContainer:b([]),onsubmit:true,ignore:":hidden",ignoreTitle:false,onfocusin:function(a,d){this.lastActive=a;
if(this.settings.focusCleanup&&!this.blockFocusCleanup){if(this.settings.unhighlight){this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass)
}this.addWrapper(this.errorsFor(a)).hide()
}},onfocusout:function(a,d){if(!this.checkable(a)&&(a.name in this.submitted||!this.optional(a))){this.element(a)
}},onkeyup:function(a,d){if(d.which===9&&this.elementValue(a)===""){return
}else{if(a.name in this.submitted||a===this.lastActive){this.element(a)
}}},onclick:function(a,d){if(a.name in this.submitted){this.element(a)
}else{if(a.parentNode.name in this.submitted){this.element(a.parentNode)
}}},highlight:function(e,a,f){if(e.type==="radio"){this.findByName(e.name).addClass(a).removeClass(f)
}else{b(e).addClass(a).removeClass(f)
}},unhighlight:function(e,a,f){if(e.type==="radio"){this.findByName(e.name).removeClass(a).addClass(f)
}else{b(e).removeClass(a).addClass(f)
}}},setDefaults:function(a){b.extend(b.validator.defaults,a)
},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:b.validator.format("Please enter no more than {0} characters."),minlength:b.validator.format("Please enter at least {0} characters."),rangelength:b.validator.format("Please enter a value between {0} and {1} characters long."),range:b.validator.format("Please enter a value between {0} and {1}."),max:b.validator.format("Please enter a value less than or equal to {0}."),min:b.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:false,prototype:{init:function(){this.labelContainer=b(this.settings.errorLabelContainer);
this.errorContext=this.labelContainer.length&&this.labelContainer||b(this.currentForm);
this.containers=b(this.settings.errorContainer).add(this.settings.errorLabelContainer);
this.submitted={};
this.valueCache={};
this.pendingRequest=0;
this.pending={};
this.invalid={};
this.reset();
var a=(this.groups={});
b.each(this.settings.groups,function(d,c){b.each(c.split(/\s/),function(j,k){a[k]=d
})
});
var e=this.settings.rules;
b.each(e,function(d,c){e[d]=b.validator.normalizeRule(c)
});
function f(c){var d=b.data(this[0].form,"validator"),h="on"+c.type.replace(/^validate/,"");
if(d.settings[h]){d.settings[h].call(d,this[0],c)
}}b(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",f).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",f);
if(this.settings.invalidHandler){b(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)
}},form:function(){this.checkForm();
b.extend(this.submitted,this.errorMap);
this.invalid=b.extend({},this.errorMap);
if(!this.valid()){b(this.currentForm).triggerHandler("invalid-form",[this])
}this.showErrors();
return this.valid()
},checkForm:function(){this.prepareForm();
for(var a=0,d=(this.currentElements=this.elements());
d[a];
a++){this.check(d[a])
}return this.valid()
},element:function(d){d=this.validationTargetFor(this.clean(d));
this.lastElement=d;
this.prepareElement(d);
this.currentElements=b(d);
var a=this.check(d)!==false;
if(a){delete this.invalid[d.name]
}else{this.invalid[d.name]=true
}if(!this.numberOfInvalids()){this.toHide=this.toHide.add(this.containers)
}this.showErrors();
return a
},showErrors:function(d){if(d){b.extend(this.errorMap,d);
this.errorList=[];
for(var a in d){this.errorList.push({message:d[a],element:this.findByName(a)[0]})
}this.successList=b.grep(this.successList,function(c){return !(c.name in d)
})
}if(this.settings.showErrors){this.settings.showErrors.call(this,this.errorMap,this.errorList)
}else{this.defaultShowErrors()
}},resetForm:function(){if(b.fn.resetForm){b(this.currentForm).resetForm()
}this.submitted={};
this.lastElement=null;
this.prepareForm();
this.hideErrors();
this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
},numberOfInvalids:function(){return this.objectLength(this.invalid)
},objectLength:function(e){var f=0;
for(var a in e){f++
}return f
},hideErrors:function(){this.addWrapper(this.toHide).hide()
},valid:function(){return this.size()===0
},size:function(){return this.errorList.length
},focusInvalid:function(){if(this.settings.focusInvalid){try{b(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")
}catch(a){}}},findLastActive:function(){var a=this.lastActive;
return a&&b.grep(this.errorList,function(d){return d.element.name===a.name
}).length===1&&a
},elements:function(){var d=this,a={};
return b(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){if(!this.name&&d.settings.debug&&window.console){console.error("%o has no name assigned",this)
}if(this.name in a||!d.objectLength(b(this).rules())){return false
}a[this.name]=true;
return true
})
},clean:function(a){return b(a)[0]
},errors:function(){var a=this.settings.errorClass.replace(" ",".");
return b(this.settings.errorElement+"."+a,this.errorContext)
},reset:function(){this.successList=[];
this.errorList=[];
this.errorMap={};
this.toShow=b([]);
this.toHide=b([]);
this.currentElements=b([])
},prepareForm:function(){this.reset();
this.toHide=this.errors().add(this.containers)
},prepareElement:function(a){this.reset();
this.toHide=this.errorsFor(a)
},elementValue:function(a){var f=b(a).attr("type"),e=b(a).val();
if(f==="radio"||f==="checkbox"){return b('input[name="'+b(a).attr("name")+'"]:checked').val()
}if(typeof e==="string"){return e.replace(/\r/g,"")
}return e
},check:function(q){q=this.validationTargetFor(this.clean(q));
var k=b(q).rules();
var p=false;
var m=this.elementValue(q);
var a;
for(var e in k){var n={method:e,parameters:k[e]};
try{a=b.validator.methods[e].call(this,m,q,n.parameters);
if(a==="dependency-mismatch"){p=true;
continue
}p=false;
if(a==="pending"){this.toHide=this.toHide.not(this.errorsFor(q));
return
}if(!a){this.formatAndAdd(q,n);
return false
}}catch(o){if(this.settings.debug&&window.console){console.log("exception occured when checking element "+q.id+", check the '"+n.method+"' method",o)
}throw o
}}if(p){return
}if(this.objectLength(k)){this.successList.push(q)
}return true
},customMetaMessage:function(a,e){if(!b.metadata){return
}var f=this.settings.meta?b(a).metadata()[this.settings.meta]:b(a).metadata();
return f&&f.messages&&f.messages[e]
},customDataMessage:function(a,d){return b(a).data("msg-"+d.toLowerCase())||(a.attributes&&b(a).attr("data-msg-"+d.toLowerCase()))
},customMessage:function(f,e){var a=this.settings.messages[f];
return a&&(a.constructor===String?a:a[e])
},findDefined:function(){for(var a=0;
a<arguments.length;
a++){if(arguments[a]!==undefined){return arguments[a]
}}return undefined
},defaultMessage:function(a,d){return this.findDefined(this.customMessage(a.name,d),this.customDataMessage(a,d),this.customMetaMessage(a,d),!this.settings.ignoreTitle&&a.title||undefined,b.validator.messages[d],"<strong>Warning: No message defined for "+a.name+"</strong>")
},formatAndAdd:function(h,f){var g=this.defaultMessage(h,f.method),a=/\$?\{(\d+)\}/g;
if(typeof g==="function"){g=g.call(this,f.parameters,h)
}else{if(a.test(g)){g=b.validator.format(g.replace(a,"{$1}"),f.parameters)
}}this.errorList.push({message:g,element:h});
this.errorMap[h.name]=g;
this.submitted[h.name]=g
},addWrapper:function(a){if(this.settings.wrapper){a=a.add(a.parent(this.settings.wrapper))
}return a
},defaultShowErrors:function(){var f,e;
for(f=0;
this.errorList[f];
f++){var a=this.errorList[f];
if(this.settings.highlight){this.settings.highlight.call(this,a.element,this.settings.errorClass,this.settings.validClass)
}this.showLabel(a.element,a.message)
}if(this.errorList.length){this.toShow=this.toShow.add(this.containers)
}if(this.settings.success){for(f=0;
this.successList[f];
f++){this.showLabel(this.successList[f])
}}if(this.settings.unhighlight){for(f=0,e=this.validElements();
e[f];
f++){this.settings.unhighlight.call(this,e[f],this.settings.errorClass,this.settings.validClass)
}}this.toHide=this.toHide.not(this.toShow);
this.hideErrors();
this.addWrapper(this.toShow).show()
},validElements:function(){return this.currentElements.not(this.invalidElements())
},invalidElements:function(){return b(this.errorList).map(function(){return this.element
})
},showLabel:function(f,e){var a=this.errorsFor(f);
if(a.length){a.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
if(a.attr("generated")){a.html(e)
}}else{a=b("<"+this.settings.errorElement+"/>").attr({"for":this.idOrName(f),generated:true}).addClass(this.settings.errorClass).html(e||"");
if(this.settings.wrapper){a=a.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()
}if(!this.labelContainer.append(a).length){if(this.settings.errorPlacement){this.settings.errorPlacement(a,b(f))
}else{a.insertAfter(f)
}}}if(!e&&this.settings.success){a.text("");
if(typeof this.settings.success==="string"){a.addClass(this.settings.success)
}else{this.settings.success(a,f)
}}this.toShow=this.toShow.add(a)
},errorsFor:function(d){var a=this.idOrName(d);
return this.errors().filter(function(){return b(this).attr("for")===a
})
},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)
},validationTargetFor:function(a){if(this.checkable(a)){a=this.findByName(a.name).not(this.settings.ignore)[0]
}return a
},checkable:function(a){return(/radio|checkbox/i).test(a.type)
},findByName:function(a){return b(this.currentForm).find('[name="'+a+'"]')
},getLength:function(d,a){switch(a.nodeName.toLowerCase()){case"select":return b("option:selected",a).length;
case"input":if(this.checkable(a)){return this.findByName(a.name).filter(":checked").length
}}return d.length
},depend:function(d,a){return this.dependTypes[typeof d]?this.dependTypes[typeof d](d,a):true
},dependTypes:{"boolean":function(d,a){return d
},string:function(d,a){return !!b(d,a.form).length
},"function":function(d,a){return d(a)
}},optional:function(a){var d=this.elementValue(a);
return !b.validator.methods.required.call(this,d,a)&&"dependency-mismatch"
},startRequest:function(a){if(!this.pending[a.name]){this.pendingRequest++;
this.pending[a.name]=true
}},stopRequest:function(a,d){this.pendingRequest--;
if(this.pendingRequest<0){this.pendingRequest=0
}delete this.pending[a.name];
if(d&&this.pendingRequest===0&&this.formSubmitted&&this.form()){b(this.currentForm).submit();
this.formSubmitted=false
}else{if(!d&&this.pendingRequest===0&&this.formSubmitted){b(this.currentForm).triggerHandler("invalid-form",[this]);
this.formSubmitted=false
}}},previousValue:function(a){return b.data(a,"previousValue")||b.data(a,"previousValue",{old:null,valid:true,message:this.defaultMessage(a,"remote")})
}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},number:{number:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function(a,d){if(a.constructor===String){this.classRuleSettings[a]=d
}else{b.extend(this.classRuleSettings,a)
}},classRules:function(f){var e={};
var a=b(f).attr("class");
if(a){b.each(a.split(" "),function(){if(this in b.validator.classRuleSettings){b.extend(e,b.validator.classRuleSettings[this])
}})
}return e
},attributeRules:function(k){var h={};
var a=b(k);
for(var g in b.validator.methods){var j;
if(g==="required"){j=a.get(0).getAttribute(g);
if(j===""){j=true
}j=!!j
}else{j=a.attr(g)
}if(j){h[g]=j
}else{if(a[0].getAttribute("type")===g){h[g]=true
}}}if(h.maxlength&&/-1|2147483647|524288/.test(h.maxlength)){delete h.maxlength
}return h
},metadataRules:function(a){if(!b.metadata){return{}
}var d=b.data(a.form,"validator").settings.meta;
return d?b(a).metadata()[d]:b(a).metadata()
},staticRules:function(f){var e={};
var a=b.data(f.form,"validator");
if(a.settings.rules){e=b.validator.normalizeRule(a.settings.rules[f.name])||{}
}return e
},normalizeRules:function(d,a){b.each(d,function(c,g){if(g===false){delete d[c];
return
}if(g.param||g.depends){var h=true;
switch(typeof g.depends){case"string":h=!!b(g.depends,a.form).length;
break;
case"function":h=g.depends.call(a,a);
break
}if(h){d[c]=g.param!==undefined?g.param:true
}else{delete d[c]
}}});
b.each(d,function(f,c){d[f]=b.isFunction(c)?c(a):c
});
b.each(["minlength","maxlength","min","max"],function(){if(d[this]){d[this]=Number(d[this])
}});
b.each(["rangelength","range"],function(){if(d[this]){d[this]=[Number(d[this][0]),Number(d[this][1])]
}});
if(b.validator.autoCreateRanges){if(d.min&&d.max){d.range=[d.min,d.max];
delete d.min;
delete d.max
}if(d.minlength&&d.maxlength){d.rangelength=[d.minlength,d.maxlength];
delete d.minlength;
delete d.maxlength
}}if(d.messages){delete d.messages
}return d
},normalizeRule:function(d){if(typeof d==="string"){var a={};
b.each(d.split(/\s/),function(){a[this]=true
});
d=a
}return d
},addMethod:function(a,e,f){b.validator.methods[a]=e;
b.validator.messages[a]=f!==undefined?f:b.validator.messages[a];
if(e.length<3){b.validator.addClassRules(a,b.validator.normalizeRule(a))
}},methods:{required:function(h,a,f){if(!this.depend(f,a)){return"dependency-mismatch"
}if(a.nodeName.toLowerCase()==="select"){var g=b(a).val();
return g&&g.length>0
}if(this.checkable(a)){return this.getLength(h,a)>0
}return b.trim(h).length>0
},remote:function(j,n,h){if(this.optional(n)){return"dependency-mismatch"
}var m=this.previousValue(n);
if(!this.settings.messages[n.name]){this.settings.messages[n.name]={}
}m.originalMessage=this.settings.messages[n.name].remote;
this.settings.messages[n.name].remote=m.message;
h=typeof h==="string"&&{url:h}||h;
if(this.pending[n.name]){return"pending"
}if(m.old===j){return m.valid
}m.old=j;
var a=this;
this.startRequest(n);
var k={};
k[n.name]=j;
b.ajax(b.extend(true,{url:h,mode:"abort",port:"validate"+n.name,dataType:"json",data:k,success:function(f){a.settings.messages[n.name].remote=m.originalMessage;
var d=f===true||f==="true";
if(d){var g=a.formSubmitted;
a.prepareElement(n);
a.formSubmitted=g;
a.successList.push(n);
delete a.invalid[n.name];
a.showErrors()
}else{var c={};
var e=f||a.defaultMessage(n,"remote");
c[n.name]=m.message=b.isFunction(e)?e(j):e;
a.invalid[n.name]=true;
a.showErrors(c)
}m.valid=d;
a.stopRequest(n,d)
}},h));
return"pending"
},minlength:function(g,a,f){var h=b.isArray(g)?g.length:this.getLength(b.trim(g),a);
return this.optional(a)||h>=f
},maxlength:function(g,a,f){var h=b.isArray(g)?g.length:this.getLength(b.trim(g),a);
return this.optional(a)||h<=f
},rangelength:function(g,a,f){var h=b.isArray(g)?g.length:this.getLength(b.trim(g),a);
return this.optional(a)||(h>=f[0]&&h<=f[1])
},min:function(f,a,e){return this.optional(a)||f>=e
},max:function(f,a,e){return this.optional(a)||f<=e
},range:function(f,a,e){return this.optional(a)||(f>=e[0]&&f<=e[1])
},email:function(d,a){return this.optional(a)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@([a-z0-9-]+)((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(d)
},url:function(d,a){return this.optional(a)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(d)
},date:function(d,a){d=d.split("/")[1]+"/"+d.split("/")[0]+"/"+d.split("/")[2];
return this.optional(a)||!/Invalid|NaN/.test(new Date(d))
},dateISO:function(d,a){return this.optional(a)||/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(d)
},number:function(d,a){return this.optional(a)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(d)
},digits:function(d,a){return this.optional(a)||/^\d+$/.test(d)
},creditcard:function(m,p){if(this.optional(p)){return"dependency-mismatch"
}if(/[^0-9 \-]+/.test(m)){return false
}var k=0,n=0,a=false;
m=m.replace(/\D/g,"");
for(var j=m.length-1;
j>=0;
j--){var o=m.charAt(j);
n=parseInt(o,10);
if(a){if((n*=2)>9){n-=9
}}k+=n;
a=!a
}return(k%10)===0
},equalTo:function(h,a,f){var g=b(f);
if(this.settings.onfocusout){g.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){b(a).valid()
})
}return h===g.val()
}}});
b.format=b.validator.format
}(jQuery));
(function(f){var e={};
if(f.ajaxPrefilter){f.ajaxPrefilter(function(b,c,a){var h=b.port;
if(b.mode==="abort"){if(e[h]){e[h].abort()
}e[h]=a
}})
}else{var d=f.ajax;
f.ajax=function(b){var a=("mode" in b?b:f.ajaxSettings).mode,c=("port" in b?b:f.ajaxSettings).port;
if(a==="abort"){if(e[c]){e[c].abort()
}return(e[c]=d.apply(this,arguments))
}return d.apply(this,arguments)
}
}}(jQuery));
(function(b){if(!jQuery.event.special.focusin&&!jQuery.event.special.focusout&&document.addEventListener){b.each({focus:"focusin",blur:"focusout"},function(f,a){b.event.special[a]={setup:function(){this.addEventListener(f,e,true)
},teardown:function(){this.removeEventListener(f,e,true)
},handler:function(c){var d=arguments;
d[0]=b.event.fix(c);
d[0].type=a;
return b.event.handle.apply(this,d)
}};
function e(c){c=b.event.fix(c);
c.type=a;
return b.event.handle.call(this,c)
}})
}b.extend(b.fn,{validateDelegate:function(e,f,a){return this.bind(f,function(d){var c=b(d.target);
if(c.is(e)){return a.apply(c,arguments)
}})
}})
}(jQuery));
(function($){$.fn.columnize=function(options){var defaults={width:400,columns:false,buildOnce:false,overflow:false,doneFunc:function(){},target:false,ignoreImageLoading:true,columnFloat:"left",lastNeverTallest:false,accuracy:false,manualBreaks:false,cssClassPrefix:""};
options=$.extend(defaults,options);
if(typeof(options.width)=="string"){options.width=parseInt(options.width,10);
if(isNaN(options.width)){options.width=defaults.width
}}return this.each(function(){var $inBox=options.target?$(options.target):$(this);
var maxHeight=$(this).height();
var $cache=$("<div></div>");
var lastWidth=0;
var columnizing=false;
var manualBreaks=options.manualBreaks;
var cssClassPrefix=defaults.cssClassPrefix;
if(typeof(options.cssClassPrefix)=="string"){cssClassPrefix=options.cssClassPrefix
}var adjustment=0;
$cache.append($(this).contents().clone(true));
if(!options.ignoreImageLoading&&!options.target){if(!$inBox.data("imageLoaded")){$inBox.data("imageLoaded",true);
if($(this).find("img").length>0){var func=function($inBox,$cache){return function(){if(!$inBox.data("firstImageLoaded")){$inBox.data("firstImageLoaded","true");
$inBox.empty().append($cache.children().clone(true));
$inBox.columnize(options)
}}
}($(this),$cache);
$(this).find("img").one("load",func);
$(this).find("img").one("abort",func);
return
}}}$inBox.empty();
columnizeIt();
if(!options.buildOnce){$(window).resize(function(){if(!options.buildOnce){if($inBox.data("timeout")){clearTimeout($inBox.data("timeout"))
}$inBox.data("timeout",setTimeout(columnizeIt,200))
}})
}function prefixTheClassName(className,withDot){var dot=withDot?".":"";
if(cssClassPrefix.length){return dot+cssClassPrefix+"-"+className
}return dot+className
}function columnize($putInHere,$pullOutHere,$parentColumn,targetHeight){while((manualBreaks||$parentColumn.height()<targetHeight)&&$pullOutHere[0].childNodes.length){var node=$pullOutHere[0].childNodes[0];
if($(node).find(prefixTheClassName("columnbreak",true)).length){return
}if($(node).hasClass(prefixTheClassName("columnbreak"))){return
}$putInHere.append(node)
}if($putInHere[0].childNodes.length===0){return
}var kids=$putInHere[0].childNodes;
var lastKid=kids[kids.length-1];
$putInHere[0].removeChild(lastKid);
var $item=$(lastKid);
if($item[0].nodeType==3){var oText=$item[0].nodeValue;
var counter2=options.width/18;
if(options.accuracy){counter2=options.accuracy
}var columnText;
var latestTextNode=null;
while($parentColumn.height()<targetHeight&&oText.length){var indexOfSpace=oText.indexOf(" ",counter2);
if(indexOfSpace!=-1){columnText=oText.substring(0,oText.indexOf(" ",counter2))
}else{columnText=oText
}latestTextNode=document.createTextNode(columnText);
$putInHere.append(latestTextNode);
if(oText.length>counter2&&indexOfSpace!=-1){oText=oText.substring(indexOfSpace)
}else{oText=""
}}if($parentColumn.height()>=targetHeight&&latestTextNode!==null){$putInHere[0].removeChild(latestTextNode);
oText=latestTextNode.nodeValue+oText
}if(oText.length){$item[0].nodeValue=oText
}else{return false
}}if($pullOutHere.contents().length){$pullOutHere.prepend($item)
}else{$pullOutHere.append($item)
}return $item[0].nodeType==3
}function split($putInHere,$pullOutHere,$parentColumn,targetHeight){if($putInHere.contents(":last").find(prefixTheClassName("columnbreak",true)).length){return
}if($putInHere.contents(":last").hasClass(prefixTheClassName("columnbreak"))){return
}if($pullOutHere.contents().length){var $cloneMe=$pullOutHere.contents(":first");
if($cloneMe.get(0).nodeType!=1){return
}var $clone=$cloneMe.clone(true);
if($cloneMe.hasClass(prefixTheClassName("columnbreak"))){$putInHere.append($clone);
$cloneMe.remove()
}else{if(manualBreaks){$putInHere.append($clone);
$cloneMe.remove()
}else{if($clone.get(0).nodeType==1&&!$clone.hasClass(prefixTheClassName("dontend"))){$putInHere.append($clone);
if($clone.is("img")&&$parentColumn.height()<targetHeight+20){$cloneMe.remove()
}else{if(!$cloneMe.hasClass(prefixTheClassName("dontsplit"))&&$parentColumn.height()<targetHeight+20){$cloneMe.remove()
}else{if($clone.is("img")||$cloneMe.hasClass(prefixTheClassName("dontsplit"))){$clone.remove()
}else{$clone.empty();
if(!columnize($clone,$cloneMe,$parentColumn,targetHeight)){$cloneMe.addClass(prefixTheClassName("split"));
if($cloneMe.children().length){split($clone,$cloneMe,$parentColumn,targetHeight)
}}else{$cloneMe.addClass(prefixTheClassName("split"))
}if($clone.get(0).childNodes.length===0){$clone.remove()
}}}}}}}}}function singleColumnizeIt(){if($inBox.data("columnized")&&$inBox.children().length==1){return
}$inBox.data("columnized",true);
$inBox.data("columnizing",true);
$inBox.empty();
$inBox.append($("<div class='"+prefixTheClassName("first")+" "+prefixTheClassName("last")+" "+prefixTheClassName("column")+" ' style='width:100%; float: "+options.columnFloat+";'></div>"));
$col=$inBox.children().eq($inBox.children().length-1);
$destroyable=$cache.clone(true);
if(options.overflow){targetHeight=options.overflow.height;
columnize($col,$destroyable,$col,targetHeight);
if(!$destroyable.contents().find(":first-child").hasClass(prefixTheClassName("dontend"))){split($col,$destroyable,$col,targetHeight)
}while($col.contents(":last").length&&checkDontEndColumn($col.contents(":last").get(0))){var $lastKid=$col.contents(":last");
$lastKid.remove();
$destroyable.prepend($lastKid)
}var html="";
var div=document.createElement("DIV");
while($destroyable[0].childNodes.length>0){var kid=$destroyable[0].childNodes[0];
if(kid.attributes){for(var i=0;
i<kid.attributes.length;
i++){if(kid.attributes[i].nodeName.indexOf("jQuery")===0){kid.removeAttribute(kid.attributes[i].nodeName)
}}}div.innerHTML="";
div.appendChild($destroyable[0].childNodes[0]);
html+=div.innerHTML
}var overflow=$(options.overflow.id)[0];
overflow.innerHTML=html
}else{$col.append($destroyable)
}$inBox.data("columnizing",false);
if(options.overflow&&options.overflow.doneFunc){options.overflow.doneFunc()
}}function checkDontEndColumn(dom){if(dom.nodeType==3){if(/^\s+$/.test(dom.nodeValue)){if(!dom.previousSibling){return false
}return checkDontEndColumn(dom.previousSibling)
}return false
}if(dom.nodeType!=1){return false
}if($(dom).hasClass(prefixTheClassName("dontend"))){return true
}if(dom.childNodes.length===0){return false
}return checkDontEndColumn(dom.childNodes[dom.childNodes.length-1])
}function columnizeIt(){adjustment=0;
if(lastWidth==$inBox.width()){return
}lastWidth=$inBox.width();
var numCols=Math.round($inBox.width()/options.width);
var optionWidth=options.width;
var optionHeight=options.height;
if(options.columns){numCols=options.columns
}if(manualBreaks){numCols=$cache.find(prefixTheClassName("columnbreak",true)).length+1;
optionWidth=false
}if(numCols<=1){return singleColumnizeIt()
}if($inBox.data("columnizing")){return
}$inBox.data("columnized",true);
$inBox.data("columnizing",true);
$inBox.empty();
$inBox.append($("<div style='width:"+(Math.floor(100/numCols))+"%; float: "+options.columnFloat+";'></div>"));
$col=$inBox.children(":last");
$col.append($cache.clone());
maxHeight=$col.height();
$inBox.empty();
var targetHeight=maxHeight/numCols;
var firstTime=true;
var maxLoops=3;
var scrollHorizontally=false;
if(options.overflow){maxLoops=1;
targetHeight=options.overflow.height
}else{if(optionHeight&&optionWidth){maxLoops=1;
targetHeight=optionHeight;
scrollHorizontally=true
}}for(var loopCount=0;
loopCount<maxLoops&&loopCount<20;
loopCount++){$inBox.empty();
var $destroyable,className,$col,$lastKid;
try{$destroyable=$cache.clone(true)
}catch(e){$destroyable=$cache.clone()
}$destroyable.css("visibility","hidden");
for(var i=0;
i<numCols;
i++){className=(i===0)?prefixTheClassName("first"):"";
className+=" "+prefixTheClassName("column");
className=(i==numCols-1)?(prefixTheClassName("last")+" "+className):className;
$inBox.append($("<div class='"+className+"' style='width:"+(Math.floor(100/numCols))+"%; float: "+options.columnFloat+";'></div>"))
}i=0;
while(i<numCols-(options.overflow?0:1)||scrollHorizontally&&$destroyable.contents().length){if($inBox.children().length<=i){$inBox.append($("<div class='"+className+"' style='width:"+(Math.floor(100/numCols))+"%; float: "+options.columnFloat+";'></div>"))
}$col=$inBox.children().eq(i);
if(scrollHorizontally){$col.width(optionWidth+"px")
}columnize($col,$destroyable,$col,targetHeight);
split($col,$destroyable,$col,targetHeight);
while($col.contents(":last").length&&checkDontEndColumn($col.contents(":last").get(0))){$lastKid=$col.contents(":last");
$lastKid.remove();
$destroyable.prepend($lastKid)
}i++;
if($col.contents().length===0&&$destroyable.contents().length){$col.append($destroyable.contents(":first"))
}else{if(i==numCols-(options.overflow?0:1)&&!options.overflow){if($destroyable.find(prefixTheClassName("columnbreak",true)).length){numCols++
}}}}if(options.overflow&&!scrollHorizontally){var IE6=false;
/*@cc_on || @_jscript_version < 5.7 @*/
;
var IE7=(document.all)&&(navigator.appVersion.indexOf("MSIE 7.")!=-1);
if(IE6||IE7){var html="";
var div=document.createElement("DIV");
while($destroyable[0].childNodes.length>0){var kid=$destroyable[0].childNodes[0];
for(i=0;
i<kid.attributes.length;
i++){if(kid.attributes[i].nodeName.indexOf("jQuery")===0){kid.removeAttribute(kid.attributes[i].nodeName)
}}div.innerHTML="";
div.appendChild($destroyable[0].childNodes[0]);
html+=div.innerHTML
}var overflow=$(options.overflow.id)[0];
overflow.innerHTML=html
}else{$(options.overflow.id).empty().append($destroyable.contents().clone(true))
}}else{if(!scrollHorizontally){$col=$inBox.children().eq($inBox.children().length-1);
$destroyable.contents().each(function(){$col.append($(this))
});
var afterH=$col.height();
var diff=afterH-targetHeight;
var totalH=0;
var min=10000000;
var max=0;
var lastIsMax=false;
var numberOfColumnsThatDontEndInAColumnBreak=0;
$inBox.children().each(function($inBox){return function($item){var $col=$inBox.children().eq($item);
var endsInBreak=$col.children(":last").find(prefixTheClassName("columnbreak",true)).length;
if(!endsInBreak){var h=$col.height();
lastIsMax=false;
totalH+=h;
if(h>max){max=h;
lastIsMax=true
}if(h<min){min=h
}numberOfColumnsThatDontEndInAColumnBreak++
}}
}($inBox));
var avgH=totalH/numberOfColumnsThatDontEndInAColumnBreak;
if(totalH===0){loopCount=maxLoops
}else{if(options.lastNeverTallest&&lastIsMax){adjustment+=30;
targetHeight=targetHeight+30;
if(loopCount==maxLoops-1){maxLoops++
}}else{if(max-min>30){targetHeight=avgH+30
}else{if(Math.abs(avgH-targetHeight)>20){targetHeight=avgH
}else{loopCount=maxLoops
}}}}}else{$inBox.children().each(function(i){$col=$inBox.children().eq(i);
$col.width(optionWidth+"px");
if(i===0){$col.addClass(prefixTheClassName("first"))
}else{if(i==$inBox.children().length-1){$col.addClass(prefixTheClassName("last"))
}else{$col.removeClass(prefixTheClassName("first"));
$col.removeClass(prefixTheClassName("last"))
}}});
$inBox.width($inBox.children().length*optionWidth+"px")
}}$inBox.append($("<br style='clear:both;'>"))
}$inBox.find(prefixTheClassName("column",true)).find(":first"+prefixTheClassName("removeiffirst",true)).remove();
$inBox.find(prefixTheClassName("column",true)).find(":last"+prefixTheClassName("removeiflast",true)).remove();
$inBox.data("columnizing",false);
if(options.overflow){options.overflow.doneFunc()
}options.doneFunc()
}})
}
})(jQuery);
/*! jQuery Validation Plugin - v1.11.0 - 2/4/2013
* https://github.com/jzaefferer/jquery-validation
* Copyright (c) 2013 Jörn Zaefferer; Licensed MIT */
;
/*!
 * jQuery Validation Plugin 1.11.0
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright 2013 Jörn Zaefferer
 * Released under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */
(function(){function b(a){return a.replace(/<.[^<>]*?>/g," ").replace(/&nbsp;|&#160;/gi," ").replace(/[.(),;:!?%#$'"_+=\/\-]*/g,"")
}jQuery.validator.addMethod("maxWords",function(f,a,e){return this.optional(a)||b(f).match(/\b\w+\b/g).length<=e
},jQuery.validator.format("Please enter {0} words or less."));
jQuery.validator.addMethod("minWords",function(f,a,e){return this.optional(a)||b(f).match(/\b\w+\b/g).length>=e
},jQuery.validator.format("Please enter at least {0} words."));
jQuery.validator.addMethod("rangeWords",function(h,a,g){var j=b(h);
var k=/\b\w+\b/g;
return this.optional(a)||j.match(k).length>=g[0]&&j.match(k).length<=g[1]
},jQuery.validator.format("Please enter between {0} and {1} words."))
}());
jQuery.validator.addMethod("letterswithbasicpunc",function(c,d){return this.optional(d)||/^[a-z\-.,()'"\s]+$/i.test(c)
},"Letters or punctuation only please");
jQuery.validator.addMethod("alphanumeric",function(c,d){return this.optional(d)||/^\w+$/i.test(c)
},"Letters, numbers, and underscores only please");
jQuery.validator.addMethod("lettersonly",function(c,d){return this.optional(d)||/^[a-z]+$/i.test(c)
},"Letters only please");
jQuery.validator.addMethod("nowhitespace",function(c,d){return this.optional(d)||/^\S+$/i.test(c)
},"No white space please");
jQuery.validator.addMethod("ziprange",function(c,d){return this.optional(d)||/^90[2-5]\d\{2\}-\d{4}$/.test(c)
},"Your ZIP-code must be in the range 902xx-xxxx to 905-xx-xxxx");
jQuery.validator.addMethod("zipcodeUS",function(c,d){return this.optional(d)||/\d{5}-\d{4}$|^\d{5}$/.test(c)
},"The specified US ZIP Code is invalid");
jQuery.validator.addMethod("integer",function(c,d){return this.optional(d)||/^-?\d+$/.test(c)
},"A positive or negative non-decimal number please");
jQuery.validator.addMethod("vinUS",function(d){if(d.length!==17){return false
}var r,w,n,q,v,p;
var u=["A","B","C","D","E","F","G","H","J","K","L","M","N","P","R","S","T","U","V","W","X","Y","Z"];
var f=[1,2,3,4,5,6,7,8,1,2,3,4,5,7,9,2,3,4,5,6,7,8,9];
var s=[8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2];
var t=0;
for(r=0;
r<17;
r++){q=s[r];
n=d.slice(r,r+1);
if(r===8){p=n
}if(!isNaN(n)){n*=q
}else{for(w=0;
w<u.length;
w++){if(n.toUpperCase()===u[w]){n=f[w];
n*=q;
if(isNaN(p)&&w===8){p=u[w]
}break
}}}t+=n
}v=t%11;
if(v===10){v="X"
}if(v===p){return true
}return false
},"The specified vehicle identification number (VIN) is invalid.");
jQuery.validator.addMethod("dateITA",function(o,q){var s=false;
var m=/^\d{1,2}\/\d{1,2}\/\d{4}$/;
if(m.test(o)){var j=o.split("/");
var p=parseInt(j[0],10);
var r=parseInt(j[1],10);
var n=parseInt(j[2],10);
var k=new Date(n,r-1,p);
if((k.getFullYear()===n)&&(k.getMonth()===r-1)&&(k.getDate()===p)){s=true
}else{s=false
}}else{s=false
}return this.optional(q)||s
},"Please enter a correct date");
jQuery.validator.addMethod("dateNL",function(c,d){return this.optional(d)||/^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(c)
},"Vul hier een geldige datum in.");
jQuery.validator.addMethod("time",function(c,d){return this.optional(d)||/^([01]\d|2[0-3])(:[0-5]\d){1,2}$/.test(c)
},"Please enter a valid time, between 00:00 and 23:59");
jQuery.validator.addMethod("time12h",function(c,d){return this.optional(d)||/^((0?[1-9]|1[012])(:[0-5]\d){1,2}( ?[AP]M))$/i.test(c)
},"Please enter a valid time in 12-hour format");
jQuery.validator.addMethod("phoneUS",function(d,c){d=d.replace(/\s+/g,"");
return this.optional(c)||d.length>9&&d.match(/^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/)
},"Please specify a valid phone number");
jQuery.validator.addMethod("phoneUK",function(d,c){d=d.replace(/\(|\)|\s+|-/g,"");
return this.optional(c)||d.length>9&&d.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:(?:\d{5}\)?\s?\d{4,5})|(?:\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3}))|(?:\d{3}\)?\s?\d{3}\s?\d{3,4})|(?:\d{2}\)?\s?\d{4}\s?\d{4}))$/)
},"Please specify a valid phone number");
jQuery.validator.addMethod("mobileUK",function(d,c){d=d.replace(/\s+|-/g,"");
return this.optional(c)||d.length>9&&d.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[45789]\d{2}|624)\s?\d{3}\s?\d{3})$/)
},"Please specify a valid mobile number");
jQuery.validator.addMethod("phonesUK",function(d,c){d=d.replace(/\s+|-/g,"");
return this.optional(c)||d.length>9&&d.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[45789]\d{8}|624\d{6})))$/)
},"Please specify a valid uk phone number");
jQuery.validator.addMethod("postcodeUK",function(d,c){d=(d.toUpperCase()).replace(/\s+/g,"");
return this.optional(c)||d.match(/^([^QZ][^IJZ]{0,1}\d{1,2})(\d[^CIKMOV]{2})$/)||d.match(/^([^QV]\d[ABCDEFGHJKSTUW])(\d[^CIKMOV]{2})$/)||d.match(/^([^QV][^IJZ]\d[ABEHMNPRVWXY])(\d[^CIKMOV]{2})$/)||d.match(/^(GIR)(0AA)$/)||d.match(/^(BFPO)(\d{1,4})$/)||d.match(/^(BFPO)(C\/O\d{1,3})$/)
},"Please specify a valid postcode");
jQuery.validator.addMethod("strippedminlength",function(d,e,f){return jQuery(d).text().length>=f
},jQuery.validator.format("Please enter at least {0} characters"));
jQuery.validator.addMethod("email2",function(d,e,f){return this.optional(e)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(d)
},jQuery.validator.messages.email);
jQuery.validator.addMethod("url2",function(d,e,f){return this.optional(e)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(d)
},jQuery.validator.messages.url);
jQuery.validator.addMethod("creditcardtypes",function(e,f,h){if(/[^0-9\-]+/.test(e)){return false
}e=e.replace(/\D/g,"");
var g=0;
if(h.mastercard){g|=1
}if(h.visa){g|=2
}if(h.amex){g|=4
}if(h.dinersclub){g|=8
}if(h.enroute){g|=16
}if(h.discover){g|=32
}if(h.jcb){g|=64
}if(h.unknown){g|=128
}if(h.all){g=1|2|4|8|16|32|64|128
}if(g&1&&/^(5[12345])/.test(e)){return e.length===16
}if(g&2&&/^(4)/.test(e)){return e.length===16
}if(g&4&&/^(3[47])/.test(e)){return e.length===15
}if(g&8&&/^(3(0[012345]|[68]))/.test(e)){return e.length===14
}if(g&16&&/^(2(014|149))/.test(e)){return e.length===15
}if(g&32&&/^(6011)/.test(e)){return e.length===16
}if(g&64&&/^(3)/.test(e)){return e.length===16
}if(g&64&&/^(2131|1800)/.test(e)){return e.length===15
}if(g&128){return true
}return false
},"Please enter a valid credit card number.");
jQuery.validator.addMethod("ipv4",function(d,e,f){return this.optional(e)||/^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(d)
},"Please enter a valid IP v4 address.");
jQuery.validator.addMethod("ipv6",function(d,e,f){return this.optional(e)||/^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(d)
},"Please enter a valid IP v6 address.");
jQuery.validator.addMethod("pattern",function(d,e,f){if(this.optional(e)){return true
}if(typeof f==="string"){f=new RegExp("^(?:"+f+")$")
}return f.test(d)
},"Invalid format.");
jQuery.validator.addMethod("require_from_group",function(k,m,o){var n=this;
var h=o[1];
var p=$(h,m.form).filter(function(){return n.elementValue(this)
}).length>=o[0];
if(!$(m).data("being_validated")){var j=$(h,m.form);
j.data("being_validated",true);
j.valid();
j.data("being_validated",false)
}return p
},jQuery.format("Please fill at least {0} of these fields."));
jQuery.validator.addMethod("skip_or_fill_minimum",function(k,o,j){var r=this;
var q=j[0];
var p=j[1];
var m=$(p,o.form).filter(function(){return r.elementValue(this)
}).length;
var s=m>=q||m===0;
if(!$(o).data("being_validated")){var n=$(p,o.form);
n.data("being_validated",true);
n.valid();
n.data("being_validated",false)
}return s
},jQuery.format("Please either skip these fields or fill at least {0} of them."));
jQuery.validator.addMethod("accept",function(n,p,k){var m=typeof k==="string"?k.replace(/\s/g,"").replace(/,/g,"|"):"image/*",o=this.optional(p),h,j;
if(o){return o
}if($(p).attr("type")==="file"){m=m.replace(/\*/g,".*");
if(p.files&&p.files.length){for(h=0;
h<p.files.length;
h++){j=p.files[h];
if(!j.type.match(new RegExp(".?("+m+")$","i"))){return false
}}}}return true
},jQuery.format("Please enter a value with a valid mimetype."));
jQuery.validator.addMethod("extension",function(d,e,f){f=typeof f==="string"?f.replace(/,/g,"|"):"png|jpe?g|gif";
return this.optional(e)||d.match(new RegExp(".("+f+")$","i"))
},jQuery.format("Please enter a value with a valid extension."));
(function(b){b.widget("custom.combobox",{options:{placeholder:"",eleCls:"",name:""},_create:function(){this.wrapper=b("<span>").addClass("custom-combobox").insertAfter(this.element);
this.element.hide();
this._createAutocomplete();
this._createShowAllButton();
if(typeof(this.options.callback)==="function"){this.options.callback.call(this)
}},_createAutocomplete:function(){var a=this.element.children(":selected"),d=a.val()?a.text():"";
this.input=b("<input>").appendTo(this.wrapper).val(d).attr("title","").attr("placeholder",this.options.placeholder).attr("name",this.options.name).addClass("custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left").addClass(this.options.eleCls).autocomplete({delay:0,minLength:0,source:b.proxy(this,"_source")}).tooltip({tooltipClass:"ui-state-highlight"}).click(function(){b(this).focus();
b(this).autocomplete("search","")
});
b("<input type='hidden'>").appendTo(this.wrapper).addClass("myData");
this._on(this.input,{autocompleteselect:function(f,c){c.item.option.selected=true;
this._trigger("select",f,{item:c.item.option});
this.wrapper.find(".myData").val(c.item.mydata);
this.input.val(c.item.value);
this.input.trigger("change")
},autocompletechange:"_removeIfInvalid"})
},_createShowAllButton:function(){var a=this.input,d=false;
b("<a>").attr("tabIndex",-1).tooltip().appendTo(this.wrapper).button({icons:{primary:"ui-icon-triangle-1-s"},text:false}).removeClass("ui-corner-all").addClass(this.options.eleCls+" custom-combobox-toggle ui-corner-right").mousedown(function(){d=a.autocomplete("widget").is(":visible")
}).click(function(){a.focus();
if(d){return
}a.autocomplete("search","")
})
},_source:function(j,a){var g=new RegExp(b.ui.autocomplete.escapeRegex(j.term),"i");
var k=0;
var h=this.element.children("option").map(function(){var c=b(this).text(),d=b(this).val();
if(this.value&&(!j.term||g.test(c))){k++;
return{label:c,value:c,mydata:d,option:this}
}});
if(k==0){h={};
h=b.makeArray(h);
h=h.map(function(){return{label:"No Results Found",value:"",mydata:"",option:this}
})
}a(h)
},_removeIfInvalid:function(j,g){if(g.item){return
}var h=this.input.val(),a=h.toLowerCase(),k=false;
this.element.children("option").each(function(){if(b(this).text().toLowerCase()===a){this.selected=k=true;
return false
}});
if(k){return
}this.input.val("").tooltip("open");
this.element.val("");
this._delay(function(){this.input.tooltip("close").attr("title","")
},2500);
this.input.autocomplete("instance").term=""
},_destroy:function(){this.wrapper.remove();
this.element.show()
}})
})(jQuery);
(function(q,m,k,s){var n="prettyCheckable",p="plugin_"+n,r={label:"",labelPosition:"right",customClass:"",color:"blue"};
var o=function(a){if(m.ko){q(a).on("change",function(b){b.preventDefault();
if(b.originalEvent===s){var d=q(this).closest(".clearfix"),c=q(d).find("a:first"),e=c.hasClass("checked");
if(e===true){c.addClass("checked")
}else{c.removeClass("checked")
}}})
}a.find("a:first, label").on("touchstart click",function(e){e.preventDefault();
var d=q(this).closest(".clearfix"),c=d.find("input"),b=d.find("a:first");
if(b.hasClass("disabled")===true){return
}if(c.prop("type")==="radio"){q('input[name="'+c.attr("name")+'"]').each(function(g,f){q(f).prop("checked",false).parent().find("a:first").removeClass("checked")
})
}if(m.ko){ko.utils.triggerEvent(c[0],"click")
}else{if(c.prop("checked")){c.prop("checked",false).change()
}else{c.prop("checked",true).change()
}}b.toggleClass("checked")
});
a.find("a:first").on("keyup",function(b){if(b.keyCode===32){q(this).click()
}})
};
var j=function(a){this.element=a;
this.options=q.extend({},r)
};
j.prototype={init:function(v){q.extend(this.options,v);
var u=q(this.element);
u.parent().addClass("has-pretty-child");
u.css("display","none");
var h=u.data("type")!==s?u.data("type"):u.attr("type");
var b=u.data("label")!==s?u.data("label"):this.options.label;
var c=u.data("labelposition")!==s?"label"+u.data("labelposition"):"label"+this.options.labelPosition;
var w=u.data("customclass")!==s?u.data("customclass"):this.options.customClass;
var f=u.data("color")!==s?u.data("color"):this.options.color;
var d=u.prop("disabled")===true?"disabled":"";
var a=["pretty"+h,c,w,f].join(" ");
u.wrap('<div class="clearfix '+a+'"></div>').parent().html();
var e=[];
var g=u.prop("checked")?"checked":"";
if(c==="labelright"){e.push('<a href="#" class="'+g+" "+d+'"></a>');
e.push('<label for="'+u.attr("id")+'">'+b+"</label>")
}else{e.push('<label for="'+u.attr("id")+'">'+b+"</label>");
e.push('<a href="#" class="'+g+" "+d+'"></a>')
}u.parent().append(e.join("\n"));
o(u.parent())
},check:function(){q(this.element).prop("checked",true).attr("checked",true).parent().find("a:first").addClass("checked")
},uncheck:function(){q(this.element).prop("checked",false).attr("checked",false).parent().find("a:first").removeClass("checked")
},enable:function(){q(this.element).removeAttr("disabled").parent().find("a:first").removeClass("disabled")
},disable:function(){q(this.element).attr("disabled","disabled").parent().find("a:first").addClass("disabled")
},destroy:function(){var a=q(this.element),b=a.clone();
b.removeAttr("style").insertBefore(a.parent());
a.parent().remove()
}};
q.fn[n]=function(b){var a,c;
if(!(this.data(p) instanceof j)){this.data(p,new j(this))
}c=this.data(p);
c.element=this;
if(typeof b==="undefined"||typeof b==="object"){if(typeof c.init==="function"){c.init(b)
}}else{if(typeof b==="string"&&typeof c[b]==="function"){a=Array.prototype.slice.call(arguments,1);
return c[b].apply(c,a)
}else{q.error("Method "+b+" does not exist on jQuery."+n)
}}}
}(jQuery,window,document));
(function(b){b.fn.MaGEValidate=function(R){var R=R||{},y=b(this);
var O=".isRequired",G=".isTableCheckRequired",z=".isDate",a=".isMobile",P=".isMobileAnother",M=".isPhone",T=".isimageCheckRequired",K=".isTestValidate",Q=".isScoreValidate",H=".isYearValidate",D=".isRegisterValidate",I=".isDdValidate",E=".isNameValidate",F=".isCodeValidateIfsc",S=".isNumber",B=".isValidTenDigit",C=".isSignValidate",J=".isAddressValidate",A=true;
var L=function(){y.on("submit",function(g){y.find(C).each(function(q,p){var o=b(p).parent();
var n=/^[a-zA-Z0-9 +]+$/;
if(b(p).val()!=""){if(!n.test(b(p).val())){if(!o.hasClass("error")){o.addClass("error");
o.append(b('<p class="error_msg">'+R.signErrorMsg+"</p>"))
}}else{o.removeClass("error");
o.find(".error_msg").remove()
}}});
y.find(J).each(function(p,o){var n=b(o).parent();
var q=/^[a-zA-Z0-9 \\p{Space},#.!\\'\\:\\&\\+\\"\\-\\(\\)/]+$/;
if(b(o).val()!=""){if(!q.test(b(o).val())){if(!n.hasClass("error")){n.addClass("error");
n.append(b('<p class="error_msg">'+R.addressErrorMsg+"</p>"))
}}else{n.removeClass("error");
n.find(".error_msg").remove()
}}});
y.find(E).each(function(q,p){var o=b(p).parent();
var n=/^[a-zA-Z'. ]{0,150}$/;
if(!n.test(b(p).val())){if(!o.hasClass("error")){o.addClass("error");
o.append(b('<p class="error_msg">'+R.nameErrorMsg+"</p>"))
}}else{o.removeClass("error");
o.find(".error_msg").remove()
}});
y.find(S).each(function(p,o){if(b(o).parent(".fieldset_list").parent().css("display")=="none"){return
}var n=b(o).parent();
if(!b.isNumeric(b.trim(b(o).val()))&&b.trim(b(o).val())!=""){if(!n.hasClass("error")){b(n).addClass("error");
b(n).append(b('<p class="error_msg">Please add number</p>'))
}}else{n.removeClass("error");
n.find(".error_msg").remove()
}});
y.find(O).each(function(p,o){var n=b(o).parent();
if(o.nodeName==="INPUT"){if(b.trim(b(o).val())===""){if(!n.hasClass("error")){b(n).addClass("error");
if(n.find(".error_msg").length!=0){n.find(".error_msg").remove()
}b(n).append(b('<p class="error_msg">This field is required</p>'))
}}else{if(b(o).prop("type")=="checkbox"&&!b(o).is(":checked")){if(!n.hasClass("error")){b(n).addClass("error");
b(n).append(b('<p class="error_msg">This field is required, Please select this checkbox</p>'))
}}else{if(b(o).hasClass("emailNotValid")){if(!n.hasClass("error")){b(n).addClass("error");
b(n).find("p.error_msg").remove();
b(n).append(b('<p class="error_msg">Please enter a valid email address</p>'))
}}else{n.removeClass("error");
n.find(".error_msg").remove()
}}}}else{if(b(o).find("input[type=radio]").length>0&&b(o).find("input[type=radio]").parents(".app_form_container").css("display")!="none"){if(b(o).find("input[type=radio]:checked").length<=0){if(!n.hasClass("error")){b(n).addClass("error");
b(n).append(b('<p class="error_msg">Confirm eligiblity. If you do not have the required eligiblity, you cannot apply.</p>'))
}}}else{if(o.nodeName==="SELECT"){if(b(o).prop("selectedIndex")===0){if(!n.hasClass("error")){b(n).addClass("error");
b(n).append(b('<p class="error_msg">This field is required</p>'))
}}else{n.removeClass("error");
n.find(".error_msg").remove()
}}else{if(o.nodeName==="TEXTAREA"){if(b.trim(b(o).val())===""){if(!n.hasClass("error")){b(n).addClass("error");
b(n).append(b('<p class="error_msg">This field is required</p>'))
}}else{n.removeClass("error");
n.find(".error_msg").remove()
}}}}}if(b(n).hasClass("otherCityHide")){n.removeClass("error");
n.find(".error_msg").remove()
}});
y.find(B).each(function(p,o){var n=b(".isValidTenDigit");
if(b(n).val().length!=10){if(!b(o).parent().hasClass("error")){b(o).parent().addClass("error");
b(o).parent().append(b('<p class="error_msg">Please Enter 10 Digits</p>'))
}}else{b(o).parent().removeClass("error");
b(o).parent().find(".error_msg").remove()
}});
y.find(M).each(function(p,o){var n=b(".phone_field");
if(!b.isNumeric(b.trim(b(n).val()))){if(!b(o).hasClass("error")){b(o).addClass("error");
b(o).append(b('<p class="error_msg">This field is required</p>'))
}}else{if(b.trim(b(n).val()).indexOf("0")!=0||b(n).val().length<11){if(!b(o).hasClass("error")){b(o).addClass("error");
b(o).append(b("<p class='error_msg'>Please enter a valid phone number starting with '0'</p>"))
}}else{b(o).removeClass("error");
b(o).find(".error_msg").remove()
}}});
y.find(a).each(function(o,n){var p=b(".mobile_field-1"),q=b(".mobile_field-2");
if(!b.isNumeric(b.trim(b(p).val()))||!b.isNumeric(b.trim(b(q).val()))){if(!b(n).hasClass("error")){b(n).addClass("error");
b(n).append(b('<p class="error_msg">This field is required</p>'))
}}else{b(n).removeClass("error");
b(n).find(".error_msg").remove()
}});
y.find(P).each(function(o,n){var p=b(".another_mobile_field-1"),q=b(".another_mobile_field-2");
if(!b.isNumeric(b.trim(b(p).val()))||!b.isNumeric(b.trim(b(q).val()))){if(!b(n).hasClass("error")){b(n).addClass("error");
b(n).append(b('<p class="error_msg">This field is required</p>'))
}}else{if(b(".another_mobile_field-2")!=null){if(b(".another_mobile_field-2").val()==b(".mobile_field-2").val()){if(!b(n).hasClass("error")){b(n).addClass("error");
b(n).append(b('<p class="error_msg">Parent and student mobile no are same</p>'))
}}}else{b(n).removeClass("error");
b(n).find(".error_msg").remove()
}}});
y.find(K).each(function(q,p){if(b(p).parent(".fieldset_list").parent().css("display")=="none"){return
}var o=b(p).parent();
var n=/^[a-zA-Z'. ]{0,150}$/;
if(!n.test(b(p).val())||b(p).val()==""){if(!o.hasClass("error")){o.addClass("error");
o.append(b('<p class="error_msg">'+R.testErrorMsg+"</p>"))
}}else{o.removeClass("error");
o.find(".error_msg").remove()
}});
y.find(Q).each(function(p,o){if(b(o).parent(".fieldset_list").parent().css("display")=="none"){return
}var n=b(o).parent();
var q=/^\d{0,9}(\.\d{1,4})? *%?$/;
if(!q.test(b(o).val())||b(o).val()==""){if(!n.hasClass("error")){n.addClass("error");
n.append(b('<p class="error_msg">'+R.scoreErrorMsg+"</p>"))
}}else{n.removeClass("error");
n.find(".error_msg").remove()
}});
y.find(H).each(function(q,p){if(b(p).parent(".fieldset_list").parent().css("display")=="none"){return
}var o=b(p).parent();
var n=/^[1-2][0-9]{3}$/;
if(!n.test(b(p).val())||b(p).val()==""){if(!o.hasClass("error")){o.addClass("error");
o.append(b('<p class="error_msg">'+R.yearErrorMsg+"</p>"))
}}else{o.removeClass("error");
o.find(".error_msg").remove()
}});
y.find(D).each(function(q,o){if(b(o).parent(".fieldset_list").parent().css("display")=="none"){return
}var n=b(o).parent();
var p=/^([a-zA-Z0-9\s\-]+)$/;
if(!p.test(b(o).val())||b(o).val()==""){if(!n.hasClass("error")){n.addClass("error");
n.append(b('<p class="error_msg">'+R.registerErrorMsg+"</p>"))
}}else{n.removeClass("error");
n.find(".error_msg").remove()
}});
y.find(I).each(function(q,p){if(b(p).parent(".fieldset_list").parent().css("display")=="none"){return
}var o=b(p).parent();
var n=/^[0-9]{6}$/;
if(!n.test(b(p).val())||b(p).val()==""){if(!o.hasClass("error")){o.addClass("error");
o.append(b('<p class="error_msg">'+R.ddErrorMsg+"</p>"))
}}else{o.removeClass("error");
o.find(".error_msg").remove()
}});
y.find(F).each(function(p,o){var n=b(o).parent();
var q=/^([a-zA-Z0-9\s\-]+)$/;
if(!q.test(b(o).val())&&b.trim(b(o).val())!=""){if(!n.hasClass("error")){n.addClass("error");
n.append(b('<p class="error_msg">'+R.codeErrorMsg+"</p>"))
}}else{n.removeClass("error");
n.find(".error_msg").remove()
}});
y.find(T).each(function(p,o){var n=b(o).parents(".image_container");
if(b.trim(b(o).val())===""){if(!n.hasClass("error")){b(n).addClass("error")
}}else{n.removeClass("error")
}});
y.find(z).on("change",function(n){var p=b(n.target),o=b(p).parent();
if(b.trim(b(p).val())===""){if(!o.hasClass("error")){b(o).addClass("error");
b(o).append(b('<p class="error_msg">This field is required</p>'))
}}else{o.removeClass("error");
o.find(".error_msg").remove()
}});
y.find(M).find("input").on("change",function(o){var n=b(o.target),p=n.parent();
if(!b.isNumeric(b.trim(b(n).val()))){if(!b(p).hasClass("error")){b(p).addClass("error");
b(p).append(b('<p class="error_msg">This field is required</p>'))
}}else{b(p).removeClass("error");
b(p).find(".error_msg").remove()
}});
y.find(a).find("input").on("change",function(n){var o=b(n.target).parents(".isMobile");
var p=o.find(".mobile_field-1"),q=o.find(".mobile_field-2");
if(!b.isNumeric(b.trim(b(p).val()))||!b.isNumeric(b.trim(b(q).val()))){if(!b(o).hasClass("error")){b(o).addClass("error");
b(o).append(b('<p class="error_msg">This field is required</p>'))
}}else{b(o).removeClass("error");
b(o).find(".error_msg").remove()
}});
y.find(P).find("input").on("change",function(n){var o=b(n.target).parents(".isMobileAnother");
var p=o.find(".another_mobile_field-1"),q=o.find(".another_mobile_field-2");
if(!b.isNumeric(b.trim(b(p).val()))||!b.isNumeric(b.trim(b(q).val()))){if(!b(o).hasClass("error")){b(o).addClass("error");
b(o).append(b('<p class="error_msg">This field is required</p>'))
}}else{if(b(".another_mobile_field-2")!=null){if(b(".another_mobile_field-2").val()==b(".mobile_field-2").val()){if(!b(o).hasClass("error")){b(o).addClass("error");
b(o).append(b('<p class="error_msg">Parent and student mobile no are same</p>'))
}}}else{b(o).removeClass("error");
b(o).find(".error_msg").remove()
}}});
y.find(".error").on("keyup",function(n){var q=b(n.target),p=b(q).parent();
var o=q.hasClass("isRequired");
var r=q.hasClass("isNumber");
if(o&&n.target.nodeName==="INPUT"){if(b.trim(b(q).val())===""){if(!p.hasClass("error")){b(p).addClass("error");
if(p.find(".error_msg").length!=0){p.find(".error_msg").remove()
}b(p).append(b('<p class="error_msg">This field is required</p>'))
}}else{if(b(q).prop("type")=="checkbox"&&!b(q).is(":checked")){if(!p.hasClass("error")){b(p).addClass("error");
b(p).append(b('<p class="error_msg">This field is required, Please select this checkbox</p>'))
}}else{p.removeClass("error");
p.find(".error_msg").remove()
}}}if(r){if(!b.isNumeric(b.trim(b(q).val()))){if(!p.hasClass("error")){b(p).addClass("error");
b(p).append(b('<p class="error_msg">Please add number</p>'))
}}else{p.removeClass("error");
p.find(".error_msg").remove()
}}if(o&&n.target.nodeName==="TEXTAREA"){if(b.trim(b(q).val())===""){if(!p.hasClass("error")){b(p).addClass("error");
if(p.find(".error_msg").length!=0){p.find(".error_msg").remove()
}b(p).append(b('<p class="error_msg">This field is required</p>'))
}}else{p.removeClass("error");
p.find(".error_msg").remove()
}}});
y.find(".error").find("input[type='checkbox']").on("change",function(n){var q=b(n.target),p=b(q).parent(),o=q.hasClass("isRequired");
if(!b(q).is(":checked")&&o){if(!p.hasClass("error")){b(p).addClass("error");
b(p).append(b('<p class="error_msg">This field is required, Please select the above checkbox</p>'))
}}else{p.removeClass("error");
p.find(".error_msg").remove()
}});
y.find(".error").find("input[type='radio']").on("change",function(n){var q=b(n.target),p=b(b(q)[0]).parents(".error"),o=q.hasClass("isRequired");
if(!b(p).find("input[type=radio]:checked").length>0&&o){if(!p.hasClass("error")){b(p).addClass("error");
b(p).append(b('<p class="error_msg">Confirm eligiblity. If you do not have the required eligiblity, you cannot apply.</p>'))
}}else{p.removeClass("error");
p.find(".error_msg").remove()
}});
y.find(".error").find("select").on("change",function(n){var q=b(n.target),p=b(q).parent();
var o=q.hasClass("isRequired");
if(b(q).prop("selectedIndex")===0&&o){if(!p.hasClass("error")){b(p).addClass("error");
b(p).append(b('<p class="error_msg">This field is required</p>'))
}}else{p.removeClass("error");
p.find(".error_msg").remove()
}});
y.find(".image_container.error").find("input").on("change",function(n){var p=b(n.target),o=b(p).parents(".image_container");
if(b.trim(b(p).val())===""){if(!o.hasClass("error")){b(o).addClass("error")
}}else{o.removeClass("error")
}});
if(y.find(G).length>0){var h=y.find("error").find(".program_table input:checkbox");
var k=y.find(G).find("input:checkbox:checked").length;
if(k<=0){y.find(G).addClass("error").find(".course_table_tr").removeClass("highlight_tr").end().siblings(".base_topic").append(b('<p class="error_msg">This field is required</p>'))
}}y.find(".error").find(".program_table input:checkbox").on("change",function(o){var n=y.find(G).find("input:checkbox:checked").length;
if(n<=0){if(!y.find(G).hasClass("error")){y.find(G).addClass("error").find(".course_table_tr").removeClass("highlight_tr").end().siblings(".base_topic").append(b('<p class="error_msg">This field is required</p>'))
}}else{y.find(G).removeClass("error").siblings(".base_topic").find(".error_msg").remove();
b(o.target).parents(".course_table_tr").addClass("highlight_tr")
}});
if(b("#icas_course")){var j=b("#branch_2_field").parent();
if(b("#branch_1_field").val()===b("#branch_2_field").val()){if(!j.hasClass("error")){b(j).addClass("error");
b(j).append(b('<p class="error_msg">Branch 1 and 2 cannot be same value</p>'))
}}else{if(j.hasClass("error")){b(j).removeClass("error");
j.find(".error_msg").remove()
}}}if(b("#after_confirm_testcenter").css("display")!="none"){var m=b("#preference_2_field").parent();
if(b("#preference_1_field").val()===b("#preference_2_field").val()){if(!m.hasClass("error")){b(m).addClass("error");
b(m).append(b('<p class="error_msg">Preference 1 and 2 cannot be same value</p>'))
}}else{if(m.hasClass("error")){b(m).removeClass("error");
m.find(".error_msg").remove()
}}}if(y.find(".error").length>0){return false
}else{if(b(y).attr("id")=="forgot_pwd_form"){g.preventDefault();
var c=y.find("#forgot_email_id").val(),d=y.find("#forgot_date_of_birth").val(),e=y.attr("action");
var f=b.ajax({url:e,type:"POST",data:{forgotEmailAddress:c,forgotDateOfBirth:d}});
f.done(function(o){var n=o.status.toLowerCase();
if(n=="success"){b("#forgot_username_pwd_form_container").hide();
b("#forgot_username_pwd_success_container").show()
}else{if(n=="failure"){var p=o.errors;
if(p.hasOwnProperty("generalError")){b("#forgot_username_pwd_form_container .basic_info_container").find(".error_msg").remove();
b("#forgot_username_pwd_form_container .basic_info_container").append('<p class="error_msg">'+p.generalError+"</p>")
}else{if(p.hasOwnProperty("emailOrDateOfBirth")){b("#forgot_username_pwd_form_container .basic_info_container").find(".error_msg").remove();
b("#forgot_username_pwd_form_container .basic_info_container").append('<p class="error_msg">'+p.emailOrDateOfBirth+"</p>")
}else{if(p.hasOwnProperty("emailAddress")){b("#forgot_email_id").parent().addClass("error").append('<p class="error_msg">'+p.emailAddress+"</p>")
}else{if(p.hasOwnProperty("dateOfBirth")){b("#forgot_date_of_birth").parent().addClass("error").append('<p class="error_msg">'+p.dateOfBirth+"</p>")
}}}}}}}).fail(function(){alert("error in data")
})
}if(A){return true;
A=false
}return false
}})
};
var N=function(){L();
b(document).ready(function(){b(".diploma_holder_datepicker").on("click",function(c){if(b(this).is(":checked")&&b(this).val()=="true"){b(".show-date-picker").show()
}else{b(".show-date-picker").hide()
}})
})
};
N()
}
})(jQuery);
$(document).ready(function(){msgData1=$(".detail-information .detail-label").attr("sdate");
msgData2=$(".detail-information .detail-label").attr("edate");
msgData3=$(".detail-information .detail-label").attr("venue");
title=$(".detail-information .detail-label").attr("title");
if(msgData1!=undefined&&msgData2!=undefined&&msgData3!=undefined){var e=new Date(msgData1);
var d=new Date(msgData2);
msgData1=e.toISOString();
msgData2=d.toISOString();
var f="BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Our Company//NONSGML v1.0//EN\nBEGIN:VEVENT\nUID:me@google.com\nDTSTAMP:msgData1\nDTSTART;VALUE=DATE:"+msgData1+"\nDTEND;VALUE=DATE:"+msgData2+"\nATTENDEE;CN=My Self ;RSVP=TRUE:MAILTO:organizer@manipal.com\nORGANIZER;CN=Me:MAILTO::organizer@manipal.com\nLOCATION:"+msgData3+"\nSUMMARY:+ title +\nEND:VEVENT\nEND:VCALENDAR"
}$(".detail-export-event").click(function(){window.open("data:text/calendar;charset=utf8,"+escape(f))
})
});
/*!
 * This file contains the code for the call to action.
 *
 * @project   Manipal GE
 * @date      2013-12-24
 * @author    Shaunak Trivedi, SapientNitro <strivedi4@sapient.com>
 * @licensor  CLIENTNAME
 * @site      Manipal
 *
 */
(function(h,e,g){e.log=function(a){if(h.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
e.toType=(function f(a){return function(b){if(b===a){return"global"
}return({}).toString.call(b).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
}
}(this));
h.callToAction=(function(){function a(){var c=this,A=e(e(".call-to-action .date-info")[0]),b=e(".call-to-action .aftersubmission"),E=e(".call-to-action .aftersubmissionforinternational"),u=e(".call-to-action .beforesubmission"),d=e(".call-to-action .beforesubmissionforinternational"),z=e(".call-to-action .showApplyNowLink"),F=e(".call-to-action .showApplyNowLinkForInternational"),w=e(".call-to-action .disableApplyNowLink"),B=e(".call-to-action .disableApplyNowLinkForInternational"),C=e(".call-to-action .apply"),v=e(".call-to-action .applyForInternational"),y=2,x=1,D=1;
c.getMonth=function(j){j=j.toUpperCase();
switch(j){case"JAN":return"01";
case"FEB":return"02";
case"MAR":return"03";
case"APR":return"04";
case"MAY":return"05";
case"JUN":return"06";
case"JUL":return"07";
case"AUG":return"08";
case"SEP":return"09";
case"OCT":return"10";
case"NOV":return"11";
case"DEC":return"12"
}};
c.checkLastDateIsCrossed=function(){var n=A.find(".date").text(),p=A.find(".month").text().replace("'",""),k=new Date(),q="",j=new Array(),o=e(".date-for-international").text(),m=e(".month-for-international").text().replace("'","");
j[0]="01";
j[1]="02";
j[2]="03";
j[3]="04";
j[4]="05";
j[5]="06";
j[6]="07";
j[7]="08";
j[8]="09";
j[9]="10";
j[10]="11";
j[11]="12";
q=(k.getDate().toString().length>1)?k.getDate().toString():"0"+k.getDate().toString();
q=parseInt(k.getFullYear().toString()+j[k.getMonth()]+q);
n=parseInt("20"+p.split(" ")[1]+c.getMonth(p.split(" ")[0])+n);
o=parseInt("20"+m.split(" ")[1]+c.getMonth(m.split(" ")[0])+o);
C.removeClass("disabled");
v.removeClass("disabled");
if(e(".last-date-for-international").attr("class")===g){if(q<=n){b.hide();
u.show();
z.show();
w.hide();
w.addClass("hide")
}else{C.addClass("disabled");
b.show();
u.hide();
z.hide();
w.show();
w.removeClass("hide")
}}else{if(q<=n){b.hide();
u.show();
z.show();
w.hide();
w.addClass("hide")
}else{C.addClass("disabled");
b.show();
u.hide();
z.hide();
w.show();
w.removeClass("hide")
}}};
c.linkEmpty=function(){var j=e(".call-to-action").find(".apply-action a");
e.each(j,function(m){var k=j[m];
if(e.trim(e(k).attr("href"))==""||e(k).attr("href")==null){e(k).remove()
}})
};
c.init=function(){c.checkLastDateIsCrossed();
c.linkEmpty();
e.each(e("#call-to-action .contact-info .phone"),function(){var k=e(this).find("span").text().split(",");
if(k.length>1){e(this).find("span").remove();
var j;
for(j=0;
j<k.length;
j++){if(j==(k.length-1)){e("this").append("<span>"+k[j]+"</span>")
}else{e("this").append("<span>"+k[j]+",</span>")
}}}});
e.each(e("#call-to-action .contact-info .address"),function(m,j){var k=e(this).find("span").text().split(",");
if(k.length>1){e(this).find("span").remove();
var n;
for(n=0;
n<k.length;
n++){if(n==(k.length-1)){e(this).append("<span>"+k[n]+"</span>")
}else{e(this).append("<span>"+k[n]+",</span>")
}}}});
return this
};
return this.init()
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(d,e,f){d.basicFormsSuccessStories=(function(){function a(){var b=this;
var h=e(".basic-forms .institution-storydd"),c=e(".basic-forms .course-storydd");
b.initializeVariables=function(){h=e(".basic-forms .institution-storydd");
c=e(".basic-forms .course-storydd")
};
this.validateForm=function(){e('input[type="checkbox"][name="certificate"]').change(function(){var g=e('input[name="certificate"]:checked').length;
if(g>0){e(".checkBoxSection").removeClass("highlightSection");
e("#basic-form-successstory .checkboxErrorMsg").css("display","none");
e("#basic-form-successstory").valid()
}else{e(".checkBoxSection").addClass("highlightSection");
e("#basic-form-successstory .checkboxErrorMsg").css("display","block")
}});
e("#basic-form-successstory .form-submit").click(function(){var g=e('input[name="certificate"]:checked').length;
if(g>0){e(".checkBoxSection").removeClass("highlightSection");
e("#basic-form-successstory .checkboxErrorMsg").css("display","none");
e("#basic-form-successstory").valid()
}else{e(".checkBoxSection").addClass("highlightSection");
e("#basic-form-successstory .checkboxErrorMsg").css("display","block")
}if(e("#basic-form-successstory").valid()){e(".reqtranscriptsFormSuccess").css("display","block");
e("#basic-form-successstory").css("display","none");
e('#basic-form-successstory input[type="text"]').val("")
}else{e(".reqtranscriptsFormSuccess").css("display","none")
}});
e("#basic-form-successstory").validate({ignore:[],rules:{successstory:{required:true,maxlength:2500},fname:{required:true,digits:false,minlength:2},emailId:{required:true},mobile:{required:true,digits:true,maxlength:10},rollno:{required:true,digits:true},postaladdr:{required:true,maxlength:500},institution:{required:true},streams:{required:true},course:{required:true},yearofpassing:{required:true},captcha:{required:true}},messages:{successstory:{required:"Please enter description",maxlength:"Only 2500 Characters are allowed"},fname:{required:"Please enter your Name",minlength:"Your name field must consist of at least 2 characters"},emailId:{required:"Please enter a email address"},mobile:{required:"Please provide a mobile number",maxlength:"Only 10 Number are allowed"},rollno:{required:"Please provide a Roll number"},postaladdr:{required:"Please enter the success story",maxlength:"Only 500 Characters are allowed"},institution:{required:(e("#domainValue").val()==="SMUDE")?"Please enter atleast one Stream":(e("#domainValue").val()==="GNXT")?"Please enter atleast one School":"Please enter atleast one Institution"},streams:{required:"Please enter atleast one Streams"},course:{required:"Please enter atleast one Course"},yearofpassing:{required:"Please enter atleast one Year of Passing"},captcha:{required:"Enter text from image"}}})
};
b.placePhot=function(){function g(q){var o=q.target.files;
for(var p=0,s;
s=o[p];
p++){if(!s.type.match("image.*")){continue
}var r=new FileReader();
r.onload=(function(j){return function(k){var m=e(".profilePicSec .profilePic img").attr("src",k.target.result)
}
})(s);
r.readAsDataURL(s)
}}document.getElementById("files").addEventListener("change",g,false)
};
b.uploadProfilePhoto=function(){e("#sucessStory-button").click(function(){e("input[type='file']").trigger("click")
});
e("input[type='file']").change(function(){e("#sucessStory-value").text(this.value.replace(/C:\\fakepath\\/i,""))
})
};
b.populateInstitution=function(){e.each(d.basicFormSucessStory.listItem,function(m,g){e(h).append('<option value="'+g.institute+'">'+g.instituteText+"</option>");
var n=new Array();
e(h).children("option").each(function(j){test=false;
checkVal=n[j]=e(this).val();
for(i=0;
i<n.length-1;
i++){if(checkVal==n[i]){test=true
}}if(test){e(this).remove()
}})
});
e(h).on("change",function(){e(c).html('<option value="000">-Select One-</option>');
for(var g=0;
g<d.basicFormSucessStory.listItem.length;
g++){if(d.basicFormSucessStory.listItem[g].institute==e(this).val()){e(c).append('<option value="'+d.basicFormSucessStory.listItem[g].course+'">'+d.basicFormSucessStory.listItem[g].courseText+"</option>")
}}})
};
this.init=function(){b.initializeVariables();
b.placePhot();
b.uploadProfilePhoto();
b.populateInstitution();
b.validateForm()
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(d,e,f){d.basicForms=(function(){function a(){var b=this,c=true;
this.validateForm=function(){var m=e("#expStartVal").val();
var o=e("#expEndVal").val();
this.populateMinExp=function(){e("#maxexp").parents(".input-wrapper").hide();
e("#minexp").empty();
e("#minexp").append(e("<option>",{value:"",text:"Select One"}));
if(m!=f&&m!=f){var g=m;
for(g=parseInt(m);
g<=parseInt(o);
g++){e("#minexp").append(e("<option>",{value:g,text:g}))
}}};
this.populateMaxExp=function(j){var g=j;
if(g){e("#maxexp").parents(".input-wrapper").show();
var h=g;
for(h=parseInt(g);
h<=parseInt(o);
h++){e("#maxexp").append(e("<option>",{value:h,text:h}))
}}else{e("#maxexp").parents(".input-wrapper").hide()
}};
b.populateMinExp();
var n=e("#selminExpVal").val();
var p=e("#selmaxExpVal").val();
if(n!=""||n!=null||n!=" "){e("#minexp").val(n);
b.populateMaxExp(n)
}if(p!=""||p!=null||p!=" "){e("#maxexp").val(p)
}e("#minexp").on("change",function(){e("#maxexp").empty();
e("#maxexp").append(e("<option>",{value:"",text:"Select One"}));
var g=e(this).val();
b.populateMaxExp(g)
});
e("#basic-form-collaborate .form-submit").click(function(){if(e("#basic-form-collaborate").valid()){e(".collaborateFormSuccess").css("display","block");
e("#basic-form-collaborate").css("display","none");
e('#basic-form-collaborate input[type="text"]').val("")
}else{e(".collaborateFormSuccess").css("display","none")
}});
e("#basic-form-collaborate").validate({ignore:[],rules:{fname:{required:true,digits:false,minlength:2},emailId:{required:true},mobile:{required:true,digits:true},collDescription:{required:true,maxlength:500},orgType:{required:true},area:{required:true},orgtitle:{required:true},captcha:{required:true}},messages:{fname:{required:"Please enter your Name",minlength:"Your username must consist of at least 2 characters"},emailId:{required:"Please enter a email address"},mobile:{required:"Please provide a mobile number"},collDescription:{required:"Please enter the description",maxlength:"Only 500 Characters are allowed"},orgtitle:{required:"Please enter a Organization Title"},orgType:{required:"Please select atleast one Organization Type"},area:{required:"Please select atleast one Area"},captcha:{required:"Enter text from image"}}});
e("#basic-form-feedback").validate({rules:{fname:{required:true,digits:false,minlength:2},emailId:{required:true},mobile:{required:true,digits:true},collDescription:{required:true,maxlength:500},orgType:{required:true},orgtitle:{required:true},captcha:{required:true}},messages:{fname:{required:"Please enter your Name",minlength:"Your username must consist of at least 2 characters"},emailId:{required:"Please enter a email address"},mobile:{required:"Please provide a mobile number"},collDescription:{required:"Please enter the description",maxlength:"Only 500 Characters are allowed"},orgtitle:{required:"Please enter a Organization Title"},orgType:{required:"Please select atleast one Organization Type"},captcha:{required:"Enter text from image"}}});
e("#basic-form-register-your-organization").validate({ignore:[],rules:{fname:{required:true,digits:false,minlength:2},emailId:{required:true},mobile:{required:true,digits:true},query:{required:true,maxlength:200},country:{required:true},city:{required:true},designation:{required:true,digits:false},company:{required:true},captcha:{required:true}},messages:{fname:{required:"Please enter your Name",minlength:"Your username must consist of at least 2 characters"},emailId:{required:"Please enter a email address"},mobile:{required:"Please provide a mobile number"},query:{required:"Please enter the description",maxlength:"Only 200 Characters are allowed"},country:{required:"Please select a country"},city:{required:"Please select a city"},designation:{required:"Please provide a designation"},company:{required:"Please provide a company name"},captcha:{required:"Enter text from image"}}});
e("#basic-form-register-your-organization").click(function(){b.mobileNumberValidate()
});
e("#basic-form-are-you-a-corporate").validate({ignore:[],rules:{fname:{required:true,digits:false,minlength:2},emailId:{required:true},mobile:{required:true,digits:true},query:{required:true,maxlength:200},country:{required:true},city:{required:true},designation:{required:true},company:{required:true},lookingFor:{required:true},captcha:{required:true}},messages:{fname:{required:"Please enter your Name",minlength:"Your username must consist of at least 2 characters"},emailId:{required:"Please enter a email address"},mobile:{required:"Please provide a mobile number"},query:{required:"Please enter the description",maxlength:"Only 200 Characters are allowed"},country:{required:"Please select a country"},city:{required:"Please select a city"},lookingFor:{required:"Please select what you looking for"},designation:{required:"Please provide a designation"},company:{required:"Please provide a company name"},captcha:{required:"Enter text from image"}}});
e("#basic-form-are-you-a-corporate").click(function(){b.mobileNumberValidate()
});
e("#basic-form-open-house-registration").validate({ignore:[],rules:{fname:{required:true,digits:false,minlength:2},emailId:{required:true},mobile:{required:true,digits:true},degree:{required:true},stream:{required:true},country:{required:true},city:{required:true},captcha:{required:true}},messages:{fname:{required:"Please enter your Name",minlength:"Your username must consist of at least 2 characters"},emailId:{required:"Please enter a email address"},mobile:{required:"Please provide a mobile number"},degree:{required:"Please select one degree Type"},stream:{required:"Please select one stream Type"},country:{required:"Please select one country Type"},city:{required:"Please select one city Type"},captcha:{required:"Enter text from image"}}});
e("#basic-form-open-house-registration").click(function(){b.mobileNumberValidate()
});
e("#basic-form-contribute-dd").validate({ignore:[],rules:{fname:{digits:false,minlength:2},designation:{digits:false},org:{digits:false},ddno:{digits:true},datepicker:{date:true},ddval:{digits:true},dddrawnon:{digits:false},ddissue:{digits:false},ddcode:{digits:true},ccamt:{digits:true},captcha:{required:true}},messages:{fname:{required:"Please enter your Name",minlength:"Your username must consist of at least 2 characters"},designation:{required:"Please provide a designation"},org:{required:"Please provide a organization"},ddno:{required:"Please provide a Demand Draft number"},datepicker:{required:"Please provide a valid Date"},ddval:{required:"Please provide a DD value"},dddrawnon:{required:"Please provide a DD drawn on item"},ddissue:{required:"Please provide a DD issuing branch name"},ddcode:{required:"Please provide a DD code"},ccamt:{required:"Please provide an amount"},captcha:{required:"Enter text from image"}}});
e("#basic-form-downloadapp .form-submit").click(function(){if(e("#basic-form-downloadapp").valid()){e(".downloadAppFormSuccess").css("display","block");
e("#basic-form-downloadapp").css("display","none");
e('#basic-form-downloadapp input[type="text"]').val("")
}else{e(".downloadAppFormSuccess").css("display","none")
}});
e("#basic-form-downloadapp").validate({ignore:[],rules:{fname:{required:true,digits:false,minlength:2},emailId:{required:true},mobile:{required:true,digits:true},city:{required:true,digits:false},program:{required:true},stream:{required:true},course:{required:true},category:{required:true},country:{required:true},state:{required:true},captcha:{required:true}},messages:{fname:{required:"Please enter your Name",minlength:"Your username must consist of at least 2 characters"},emailId:{required:"Please enter a email address"},mobile:{required:"Please provide a mobile number"},city:{required:"Please provide a City"},program:{required:"Please enter atleast one Program"},stream:{required:"Please enter atleast one Stream"},course:{required:"Please enter atleast one Course"},category:{required:"Please enter atleast one Category"},country:{required:"Please select one Country"},state:{required:"Please enter atleast one State"},captcha:{required:"Enter text from image"}}});
e("#basic-form-invitealumini").validate({rules:{fname:{required:true,digits:false,minlength:2},emailId:{required:true},mobile:{required:true,digits:true},invitesemail:{maxlength:500},captcha:{required:true}},messages:{fname:{required:"Please enter your Name",minlength:"Your username must consist of at least 2 characters"},emailId:{required:"Please enter a email address"},mobile:{required:"Please provide a mobile number"},invitesemail:{maxlength:"Only 500 Characters are allowed"},captcha:{required:"Enter text from image"}}});
e("#basic-form-sendfeedback .form-submit").click(function(){if(e("#basic-form-sendfeedback").valid()){e(".sendfeedbackFormSuccess").css("display","block");
e("#basic-form-sendfeedback").css("display","none");
e('#basic-form-sendfeedback input[type="text"]').val("")
}else{e(".downloadAppFormSuccess").css("display","none")
}});
e("#basic-form-sendfeedback").validate({ignore:[],rules:{fname:{required:true,digits:false,minlength:2},emailId:{required:true},mobile:{required:true,digits:true},invitesemail:{required:true,maxlength:500},captcha:{required:true}},messages:{fname:{required:"Please enter your Name",minlength:"Your username must consist of at least 2 characters"},emailId:{required:"Please enter a email address"},mobile:{required:"Please provide a mobile number"},invitesemail:{required:"Please provide atleast one Invitees Email Id"},captcha:{required:"Enter text from image"}}});
b.mobileNumberValidate=function(){var g=e("#mobileNumber");
var h=e("#mobilePref");
if(e.trim(g.val()).length<=0){return false
}if(((h.val()=="+91"||h.val()=="91")&&e.trim(g.val()).length!=10)||!/^\d*$/.test(g.val())){if(g.hasClass("error")){g.next("label.error").remove();
g.next("label.custom-error").remove();
g.after('<label for="mobileNumber" generated="true" class="error">Please enter 10 digits</label>')
}else{g.after('<label for="mobileNumber" generated="true" class="error">Please enter 10 digits</label>');
g.addClass("error")
}}else{if((e.trim(g.val()).length<7||e.trim(g.val()).length>11)||!/^\d*$/.test(g.val())){if(g.hasClass("error")){g.next("label.error").remove();
g.next("label.custom-error").remove();
g.after('<label for="mobileNumber" generated="true" class="error">Please enter valid number</label>')
}else{g.after('<label for="mobileNumber" generated="true" class="error">Please enter valid number</label>');
g.addClass("error")
}}}};
b.emailValidate=function(){e(".empty-email-input").blur(function(g){var j=(e(g.target).length==0)?"":e(g.target),k=false;
e(j).removeClass("emailNotValid");
e(j).removeClass("error");
var h=/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
if(!h.test(j.val())){e(j).addClass("emailNotValid");
e(j).addClass("error");
e(j).parent().find("label.error").remove();
e("#emailId").parent().append('<label for="emailId" generated="true" class="error">Please enter a valid email address</label>')
}});
return false
};
e("#invitesemail").blur(function(){var k=null;
var j=null;
var h=true;
k=e("#invitesemail").val();
j=k.split(",");
function g(s){var r=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
return r.test(s)
}for(i=0;
i<j.length;
i++){j[i]=j[i].trim();
if(j[i]!==f&&j[i]!==""){if(!g(j[i])){h=false
}}}if(h==false){e("#invitesemail").addClass("error");
e("#invitesemail").parent().find("label.error").remove();
e("#invitesemail").parent().append('<label for="emailId" generated="true" class="error">Please enter a valid email address</label>')
}else{e("#invitesemail").removeClass("error");
e("#invitesemail").parent().find("label.error").remove()
}});
e("#basic-form-applyjob .form-submit").click(function(){if(e("#basic-form-applyjob").valid()){e(".applyjobFormSuccess").css("display","block");
e("#basic-form-applyjob").css("display","none");
e('#basic-form-applyjob input[type="text"]').val("")
}else{e(".applyjobFormSuccess").css("display","none")
}});
e("#basic-form-applyjob").validate({ignore:[],rules:{fname:{required:true,digits:false,minlength:2},emailId:{required:true},jobtype:{required:true,digits:false},selectfile:{required:true},captcha:{required:true}},messages:{fname:{required:"Please enter your Name",minlength:"Your username must consist of at least 2 characters"},emailId:{required:"Please enter a email address"},jobtype:{required:"Please provide a Job Type"},selectfile:{required:"Please provide atleast one File to Upload"},captcha:{required:"Enter text from image"}}});
e("#basic-form-recruit .form-submit").click(function(){if(e("#basic-form-recruit").valid()){e(".recruitFormSuccess").css("display","block");
e("#basic-form-recruit").css("display","none");
e('#basic-form-recruit input[type="text"]').val("")
}else{e(".recruitFormSuccess").css("display","none")
}});
e("#basic-form-recruit").validate({ignore:[],rules:{fname:{required:true,digits:false,minlength:2},emailId:{required:true},mobile:{required:true,digits:true},jobtitle:{required:true},collDescription:{required:true,maxlength:500},company:{required:true},jobtype:{required:true},maxexp:{required:true},minexp:{required:true},specialiazation:{required:true},captcha:{required:true}},messages:{fname:{required:"Please enter your Name",minlength:"Your username must consist of at least 2 characters"},emailId:{required:"Please enter a email address"},mobile:{required:"Please provide a mobile number"},jobtitle:{required:"Please provide a Job Title"},collDescription:{required:"Please enter the description",maxlength:"Only 500 Characters are allowed"},company:{required:"Please enter atleast one Company"},jobtype:{required:"Please enter atleast one Job type"},maxexp:{required:"Please enter atleast one Maximum Experience"},minexp:{required:"Please enter atleast one Minimum Experience"},specialiazation:{required:"Please enter atleast one Specialization"},captcha:{required:"Enter text from image"}}});
e('input[type="checkbox"][name="certificate"]').change(function(){var g=e('input[name="certificate"]:checked').length;
if(g>0){e(".checkBoxSection").removeClass("highlightSection")
}else{e(".checkBoxSection").addClass("highlightSection")
}});
e("#orgtitle, #fname, #designation, #company").on("keydown",function(g){if((g.which>47&&g.which<58)||(g.which>105&&g.which<112)||(g.which>185&&g.which<223)){g.preventDefault();
return false
}else{return true
}});
e(".basic-forms .requesttrans-submit").on("click",function(k){var g=true;
k.preventDefault();
var j=e(".empty-email-input, #emailId");
e(j).removeClass("emailNotValid");
e(j).removeClass("error");
var u=/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
if(!e(".basic-forms form").valid()){g=false
}if(!u.test(j.val())){e(j).addClass("emailNotValid");
e(j).addClass("error");
e(j).parent().find("label.error").remove();
e("#emailId").parent().append('<label for="emailId" generated="true" class="error">Please enter a valid email address</label>');
g=false
}if(e("#invitesemail").length!=0){var v=null;
var t=null;
var h=true;
v=e("#invitesemail").val();
if(v==""){h=false
}else{t=v.split(",");
function w(r){var q=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
return q.test(r)
}for(i=0;
i<t.length;
i++){t[i]=t[i].trim();
if(t[i]!==f&&t[i]!==""){if(!w(t[i])){h=false
}}}}if(h==false){e("#invitesemail").addClass("error");
e("#invitesemail").parent().find("label.error").remove();
e("#invitesemail").parent().append('<label for="emailId" generated="true" class="error">Please enter a valid email address</label>');
g=false
}else{e("#invitesemail").removeClass("error");
e("#invitesemail").parent().find("label.error").remove()
}}if(g){if(c){e(".basic-forms form").submit();
c=false
}}})
};
this.init=function(){b.validateForm();
b.emailValidate();
if(e("input.paymentRadio").length!=0){e(e("input.paymentRadio")[0]).prettyCheckable("check")
}if(e("input.transcriptsCheckbox").length!=0){e("input.transcriptsCheckbox").prettyCheckable()
}e(".dd-inline input").addClass("checked");
e(".dd-inline .radioTitleDefault").addClass("radioTitleActive");
e(".dd-inline").on("click",function(){e("#ccamount").addClass("hide");
e("#ccamt").removeClass("required");
e("#ddnum").removeClass("hide");
e("#ddno").addClass("required");
e("#ddDate").removeClass("hide");
e("#datepicker").addClass("required");
e("#ddValue").removeClass("hide");
e("#ddval").addClass("required");
e("#ddDrawmOn").removeClass("hide");
e("#dddrawnon").addClass("required");
e("#ddIssuedOn").removeClass("hide");
e("#ddissue").addClass("required");
e("#ddCode").removeClass("hide");
e("#ddcode").addClass("required");
e("#ccinfo").addClass("hide");
e("#ddinfo").removeClass("hide");
e(".dd-inline .radioTitleDefault").addClass("radioTitleActive");
e(".cc-inline .radioTitleDefault").removeClass("radioTitleActive");
e(".cc-inline .paymentRadio").prop("checked",false);
e(".dd-inline .paymentRadio").prop("checked",true);
e("#paymentMode").val("dd")
});
e(".cc-inline").on("click",function(){e("#ccamount").removeClass("hide");
e("#ccamt").addClass("required");
e("#ddnum").addClass("hide");
e("#ddno").removeClass("required");
e("#ddDate").addClass("hide");
e("#datepicker").removeClass("required");
e("#ddValue").addClass("hide");
e("#ddval").removeClass("required");
e("#ddDrawmOn").addClass("hide");
e("#dddrawnon").removeClass("required");
e("#ddIssuedOn").addClass("hide");
e("#ddissue").removeClass("required");
e("#ddCode").addClass("hide");
e("#ddcode").removeClass("required");
e("#ccinfo").removeClass("hide");
e("#ddinfo").addClass("hide");
e(".cc-inline .radioTitleDefault").addClass("radioTitleActive");
e(".dd-inline .radioTitleDefault").removeClass("radioTitleActive");
e(".cc-inline .paymentRadio").prop("checked",true);
e(".dd-inline .paymentRadio").prop("checked",false);
e("#paymentMode").val("CrediCard")
});
e(".fupload ").on("change",function(){e(".select-file").val(e(".fupload ").val())
});
e("#datepicker").datepicker({showOn:"button",buttonImage:"/etc/designs/manipal/images/calender_icon.png",buttonImageOnly:true,changeMonth:true,changeYear:true,yearRange:"1900:2050",dateFormat:"dd/M/yy"})
};
return this.init()
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
/*!
 *
 *
 * @project   Manipal GE
 * @date      2013-05-13
 * @author    Kuldip Raj, SapientNitro <kraj2@sapient.com>
 * @licensor  CLIENTNAME
 * @site      Manipal
 *
 */
(function(b){b.fn.c110b=function(a){var a=a||{},j=a.inputData,m=a.componentContainer,n=b(this);
categoryCarouselDom=function(){var c=j;
var e="";
if(b.trim(c.go_link)!=""&&b.trim(c.link_content)!=""){if(c.go_linkType=="false"){e="<a class='more-info-link' href='"+c.go_link+"' title='"+c.link_title+"'><span class='see-more'>"+c.link_content+"</span></a>"
}else{e="<a class='more-info-link' href='"+c.go_link+"' title='"+c.link_title+"' target='_blank'><span class='see-more'>"+c.link_content+"</span></a>"
}}else{if(b.trim(c.link_content)==""){e=""
}else{e="<a class='more-info-link' href='#' title='"+c.link_title+"'><span class='see-more'>"+c.link_content+"</span></a>"
}}if(c.go_link2||c.link_content2){var g="";
if(b.trim(c.go_link2)!=""&&b.trim(c.link_content2)!=""){if(c.go_link2Type=="false"){g="<a class='more-info-link' href='"+c.go_link2+"' title='"+c.link_title2+"'><span class='see-more'>"+c.link_content2+"</span></a>"
}else{g="<a class='more-info-link' href='"+c.go_link2+"' title='"+c.link_title2+"' target='_blank'><span class='see-more'>"+c.link_content2+"</span></a>"
}}else{if(b.trim(c.link_content2)==""){g=""
}else{g="<a class='more-info-link' href='#' title='"+c.link_title2+"'><span class='see-more'>"+c.link_content2+"</span></a>"
}}b(n).find("#c110-b section .categories .slides").append("<li class = '"+c.color_scheme+"'><div class='category-parent'><div class='container-940'><div class='"+c.position+"'><h3 class='"+c.header_css+"'>"+c.header+"</h3><h2 class='"+c.big_title_css+"'>"+c.big_title+"</h2><p class='"+c.small_css+"'>"+c.text_line1+"</p>"+e+g+"</div></div></div><img class='lazyload' data-src='"+c.image+"' alt='"+c.alt_content+"' /></li>")
}else{b(n).find("#c110-b section .categories .slides").append("<li class = '"+c.color_scheme+"'><div class='category-parent'><div class='container-940'><div class='"+c.position+"'><h3 class='"+c.header_css+"'>"+c.header+"</h3><h2 class='"+c.big_title_css+"'>"+c.big_title+"</h2><p class='"+c.small_css+"'>"+c.text_line1+"</p>"+e+"</div></div></div><img class='lazyload' data-src='"+c.image+"' alt='"+c.alt_content+"' /></li>")
}var d="";
var o="";
var f="";
if(b("#domainValue").val()!="MEMG"){d=b("#c110-b .head-text-big");
o=b("#c110-b .head-text");
f=b("#c110-b .detail-text");
h(o,100);
h(d,100);
h(f,300)
}};
function h(d,c){b.each(d,function(g){var o=b(d)[g],f=b(o).text(),e=f.length;
if(e>c){b(o).text(f.substr(0,c))
}})
}mobileCarouselDom=function(){var p=j;
var g=b("."+m).find("#c110-b section");
var d="";
if(b.trim(p.go_link)!=""){if(p.go_linkType=="false"){d="<a href='"+p.go_link+"' title='"+p.link_content+"' class='view_more'>"+p.link_content+"</a>"
}else{d="<a href='"+p.go_link+"' title='"+p.link_content+"' class='view_more' target='_blank'>"+p.link_content+"</a>"
}}if(p.go_link2){var f="";
if(b.trim(p.go_link2)!=""){if(p.go_link2Type=="false"){f="<a href='"+p.go_link2+"' title='"+p.link_content2+"' class='view_more'>"+p.link_content2+"</a>"
}else{f="<a href='"+p.go_link2+"' title='"+p.link_content2+"' class='view_more' target='_blank'>"+p.link_content2+"</a>"
}}if(p.imageformobile!=null&&p.imageformobile!=""&&p.imageformobile!=undefined){b(g).find(".learning-mobile-content").append("<li class = '"+p.color_scheme+"'><img class='learning-mobile-images lazyload imageForMobile' data-src='"+p.imageformobile+"' alt='' /><div class='"+p.position+"'><h3 class='"+p.header_css+"'>"+p.header+"</h3><h2 class='"+p.big_title_css+"'>"+p.big_title+"</h2><p class='"+p.small_css+"'>"+p.text_line1+"</p>"+d+f+"</div></li>")
}else{b(g).find(".learning-mobile-content").append("<li class = '"+p.color_scheme+"'><img class='learning-mobile-images lazyload' data-src='"+p.mobile_image+"' alt='' /><div class='"+p.position+"'><h3 class='"+p.header_css+"'>"+p.header+"</h3><h2 class='"+p.big_title_css+"'>"+p.big_title+"</h2><p class='"+p.small_css+"'>"+p.text_line1+"</p>"+d+f+"</div></li>")
}}else{if(p.imageformobile!=null&&p.imageformobile!=""&&p.imageformobile!=undefined){b(g).find(".learning-mobile-content").append("<li class = '"+p.color_scheme+"'><img class='learning-mobile-images lazyload imageForMobile' data-src='"+p.imageformobile+"' alt=''/><div class='"+p.position+"'><h3 class='"+p.header_css+"'>"+p.header+"</h3><h2 class='"+p.big_title_css+"'>"+p.big_title+"</h2><p class='"+p.small_css+"'>"+p.text_line1+"</p>"+d+"</div></li>")
}else{b(g).find(".learning-mobile-content").append("<li class = '"+p.color_scheme+"'><img class='learning-mobile-images lazyload' data-src='"+p.mobile_image+"' alt=''/><div class='"+p.position+"'><h3 class='"+p.header_css+"'>"+p.header+"</h3><h2 class='"+p.big_title_css+"'>"+p.big_title+"</h2><p class='"+p.small_css+"'>"+p.text_line1+"</p>"+d+"</div></li>")
}}var c=b("#c110-b .head-text-big");
var o=b("#c110-b .head-text");
var e=b("#c110-b .detail-text");
h(o,100);
h(c,100);
h(e,300)
};
var k=function(){var c=b(window).width();
if(typeof j!="object"){return
}if(c>767){categoryCarouselDom()
}else{mobileCarouselDom()
}};
k()
}
})(jQuery);
(function(d,e,f){d.basicFormsDownloadApplication=(function(){function a(){var b,n;
if(d.basicFormLocationConfig!=f){b=d.basicFormLocationConfig.countries
}if(d.basicFormProgramsConfig!=f){n=d.basicFormProgramsConfig.programs
}var q=this;
var s=e("#basic-form-downloadapp"),p=e("#basic-form-downloadapp #basic-program"),t=e("#basic-form-downloadapp #basic-stream"),o=e("#basic-form-downloadapp #basic-course"),c=e("#basic-form-downloadapp #basic-country"),r=e("#basic-form-downloadapp #basic-state");
this.populateProgramList=function(){if(n!=f){e.each(n,function(g,h){p.append(e("<option>",{value:h.programValue,text:h.programName}))
})
}};
this.populateStreamList=function(g){if(n!=f){var h;
e.each(n,function(k,j){if(g==j.programValue&&g!=""){h=j.streams
}});
t.empty();
t.append(e("<option>",{value:"",text:"Select One"}));
if(h!=f){e.each(h,function(k,j){t.append(e("<option>",{value:j.streamValue,text:j.streamName}))
})
}}o.empty();
o.append(e("<option>",{value:"",text:"Select One"}))
};
this.populateCourseList=function(g,h){if(n!=f){var j,k;
e.each(n,function(u,m){if(g==m.programValue&&g!=""){j=m.streams
}});
if(j!=f){e.each(j,function(u,m){if(h==m.streamValue&&h!=""){k=m.courses
}})
}o.empty();
o.append(e("<option>",{value:"",text:"Select One"}));
if(k!=f){e.each(k,function(u,m){o.append(e("<option>",{value:m.courseValue,text:m.courseName}))
})
}}};
this.populateCountryList=function(){if(b!=f){e.each(b,function(h,g){c.append(e("<option>",{value:g.countryValue,text:g.countryName}))
})
}};
this.populateStateList=function(h){if(b!=f){var g;
e.each(b,function(k,j){if(h==j.countryValue&&h!=""){g=j.states
}});
r.empty();
r.append(e("<option>",{value:"",text:"Select One"}));
if(g!=f){e.each(g,function(j,k){r.append(e("<option>",{value:k.stateValue,text:k.stateName}))
})
}}};
this.init=function(){q.populateProgramList();
q.populateCountryList();
var m=e("#selectedprogramLevel").val();
var j=e("#selectedStream").val();
var g=e("#selectedCourse").val();
var h=e("#selectedCountry").val();
var k=e("#selectedCity").val();
if(m!=""||m!=null||m!=" "){e("#basic-program").val(m);
q.populateStreamList(m)
}if(j!=""||j!=null||j!=" "){e("#basic-stream").val(j);
q.populateCourseList(m,j)
}if(g!=""||g!=null||g!=" "){e("#basic-course").val(g)
}if(h!=""||h!=null||h!=" "){e("#basic-country").val(h);
q.populateStateList(h)
}if(k!=""||k!=null||k!=" "){e("#basic-state").val(k)
}p.on("change",function(){q.populateStreamList(e(this).val())
});
t.on("change",function(){q.populateCourseList(p.val(),e(this).val())
});
c.on("change",function(){q.populateStateList(e(this).val())
})
};
return q.init()
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(d,e,f){d.basicFormsReqTranscripts=(function(){function a(){var b=this;
var h=e(".basic-forms .institution-dd"),c=e(".basic-forms .course-dd");
b.initializeVariables=function(){h=e(".basic-forms .institution-dd");
c=e(".basic-forms .course-dd")
};
this.validateForm=function(){e('input[type="checkbox"][name="certificate"]').change(function(){var g=e('input[name="certificate"]:checked').length;
if(g>0){e(".checkBoxSection").removeClass("highlightSection");
e("#basic-form-reqtranscripts .checkboxErrorMsg").css("display","none");
e("#basic-form-reqtranscripts").valid()
}else{e(".checkBoxSection").addClass("highlightSection");
e("#basic-form-reqtranscripts .checkboxErrorMsg").css("display","block")
}});
e("#basic-form-reqtranscripts .form-submit").click(function(){var g=e('input[name="certificate"]:checked').length;
if(g>0){e(".checkBoxSection").removeClass("highlightSection");
e("#basic-form-reqtranscripts .checkboxErrorMsg").css("display","none");
e("#basic-form-reqtranscripts").valid()
}else{e(".checkBoxSection").addClass("highlightSection");
e("#basic-form-reqtranscripts .checkboxErrorMsg").css("display","block")
}if(e("#basic-form-reqtranscripts").valid()){e(".reqtranscriptsFormSuccess").css("display","block");
e("#basic-form-reqtranscripts").css("display","none");
e('#basic-form-reqtranscripts input[type="text"]').val("")
}else{e(".reqtranscriptsFormSuccess").css("display","none")
}});
e("#basic-form-reqtranscripts").validate({ignore:[],rules:{transrequired:{required:true,maxlength:500},fname:{required:true,digits:false,minlength:2},emailId:{required:true},mobile:{required:true,digits:true},rollno:{required:true},postaladdr:{required:true,maxlength:500},institution:{required:true},course:{required:true},yearofpassing:{required:true},captcha:{required:true}},messages:{transrequired:{required:"Please enter Required Transcript",maxlength:"Only 500 Characters are allowed"},fname:{required:"Please enter your Name",minlength:"Your username must consist of at least 2 characters"},emailId:{required:"Please enter a email address"},mobile:{required:"Please provide a mobile number"},rollno:{required:"Please provide a Roll number"},postaladdr:{required:"Please enter the address",maxlength:"Only 500 Characters are allowed"},institution:{required:"Please enter atleast one Institution"},course:{required:"Please enter atleast one Course"},yearofpassing:{required:"Please enter atleast one Year of Passing"},captcha:{required:"Enter text from image"}}})
};
b.populateInstitution=function(){e.each(d.basicFormRequestTranscript.listItem,function(m,g){e(h).append('<option value="'+g.institute+'">'+g.instituteText+"</option>");
var n=new Array();
e(h).children("option").each(function(j){test=false;
checkVal=n[j]=e(this).val();
for(i=0;
i<n.length-1;
i++){if(checkVal==n[i]){test=true
}}if(test){e(this).remove()
}})
});
e(h).on("change",function(){e(c).html('<option value="000">-Select One-</option>');
for(var g=0;
g<d.basicFormRequestTranscript.listItem.length;
g++){if(d.basicFormRequestTranscript.listItem[g].institute==e(this).val()){e(c).append('<option value="'+d.basicFormRequestTranscript.listItem[g].course+'">'+d.basicFormRequestTranscript.listItem[g].courseText+"</option>")
}}})
};
this.init=function(){b.initializeVariables();
b.populateInstitution();
b.validateForm()
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
/*!
 * This file contains the code for the call to action.
 *
 * @project   Manipal GE
 * @date      2013-12-24
 * @author    Shaunak Trivedi, SapientNitro <strivedi4@sapient.com>
 * @licensor  CLIENTNAME
 * @site      Manipal
 *
 */
(function(d,e,f){d.admissionActions=(function(){function a(){var b=this;
this.init=function(){e(".apply.disabled").on("click",function(h){h.preventDefault()
});
var c=e(".admission-actions-component").find(".apply-action a");
e.each(c,function(k){var j=c[k];
if(e.trim(e(j).attr("href"))==""||e(j).attr("href")==null){e(j).remove()
}});
e.each(e("#admission-actions .contact-info .phone"),function(){var k=e(this).find("span").text().split(",");
if(k.length>1){e(this).find("span").remove();
var j;
for(j=0;
j<k.length;
j++){if(j==(k.length-1)){e("this").append("<span>"+k[j]+"</span>")
}else{e("this").append("<span>"+k[j]+",</span>")
}}}});
e.each(e("#admission-actions .contact-info .address"),function(n,j){var m=e(this).find("span").text().split(",");
if(m.length>1){e(this).find("span").remove();
var o;
for(o=0;
o<m.length;
o++){if(o==(m.length-1)){e(this).append("<span>"+m[o]+"</span>")
}else{e(this).append("<span>"+m[o]+",</span>")
}}}});
return this
};
return this.init()
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(d,e,f){e.log=function(a){if(MODULE.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
d.salesOutletComponent=(function(){function a(){var q=this;
var c,o,r=e(".sales-outlet-container"),s=e(".sales-outlet-table tr td"),p=e(".sales-outlet-table"),n=e(".serial-number"),b=e(".sales-outlet-container-mobile"),t=e(".sales-key").text();
this.manipulateMenu=function(){e(".stateMenu > li").on("click",function(h){h.preventDefault();
var g=e(this).find("a").html();
e("#stateMenu").html(g);
e(this).siblings("li").removeClass("active").end().addClass("active");
var k=d.salesOutletConfig,j=[],m=false;
var u=e(".stateMenu > .active").find("a").data("ivalue").toLowerCase();
e.each(k,function(w,v){m=false;
if(v.stateVal.toLowerCase()===u||(u==="all")){m=true
}if(m){m=false;
j.push(v)
}});
p.find("tr td").parent().remove();
n.find("tr td").parent().remove();
b.empty();
if(j.length==0){return
}else{q.paintDom(j);
q.paintDomMobile(j)
}})
};
this.paintSelectBoxDom=function(){var g=d.salesOutletConfig,u=e(".sales-dropdown .stateMenu");
var j=[],k=[];
e.each(g,function(w,v){if(jQuery.inArray(v.stateVal,k)<0){k.push(v.stateVal);
j.push(v.state)
}});
u.html('<li role="presentation" class="active"><a role="menuitem" tabindex="-1" href="#" data-iValue="all">All</a></li>');
for(var h=0;
h<k.length;
h++){var m='<li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-iValue="'+k[h]+'">'+j[h]+"</a></li>";
u.append(m)
}};
this.alignTableHeight=function(){e(document).ready(function(){e(".serial-number-table tr").each(function(h,g){n.find("tr").eq(h).height(e(this).outerHeight())
})
})
};
this.paintDom=function(k){var w=1,g=false,h=false,j=false;
p.find("th:eq(1)").text(k[0].city[0].bankOneDetails.bankName);
p.find("th:eq(2)").text(k[0].city[0].bankTwoDetails.bankName);
p.find("th:eq(3)").text(k[0].city[0].bankThreeDetails.bankName);
e.each(k,function(y,u){if(u.city[0].bankTwoDetails.bankAddress!=""){h=true
}if(u.city[0].bankOneDetails.bankAddress!=""){g=true
}if(u.city[0].bankThreeDetails.bankAddress!=""){j=true
}if(g==true&&h==true&&j==true){w=3;
return false
}else{if((g==true&&h==true)||(h==true&&j==true)||(g==true&&h==true)){w=2
}else{w=1
}}});
for(var v=0;
v<k.length;
v++){var m="<tr><td>"+k[v].idVal+"</td></tr>";
n.append(m);
if(w==3){p.find("th:eq(1),th:eq(2),th:eq(3)").show();
var x='<tr><td class="city">'+k[v].city[0].location+"</td><td>"+k[v].city[0].bankOneDetails.bankAddress+"</td><td>"+k[v].city[0].bankTwoDetails.bankAddress+"</td><td>"+k[v].city[0].bankThreeDetails.bankAddress+"</td></tr>";
p.append(x)
}else{if(w==2&&g==true&&h==true&&j==false){p.find("th:eq(1),th:eq(2)").show();
p.find("th:eq(3)").hide();
var x='<tr><td class="city">'+k[v].city[0].location+"</td><td>"+k[v].city[0].bankOneDetails.bankAddress+"</td><td>"+k[v].city[0].bankTwoDetails.bankAddress+"</td></tr>";
p.append(x)
}else{if(w==2&&g==true&&h==false&&j==true){p.find("th:eq(1),th:eq(3)").show();
p.find("th:eq(2)").hide();
var x='<tr><td class="city">'+k[v].city[0].location+"</td><td>"+k[v].city[0].bankOneDetails.bankAddress+"</td><td>"+k[v].city[0].bankThreeDetails.bankAddress+"</td></tr>";
p.append(x)
}else{if(w==2&&g==false&&h==true&&j==true){p.find("th:eq(2),th:eq(3)").show();
p.find("th:eq(1)").hide();
var x='<tr><td class="city">'+k[v].city[0].location+"</td><td>"+k[v].city[0].bankTwoDetails.bankAddress+"</td><td>"+k[v].city[0].bankThreeDetails.bankAddress+"</td></tr>";
p.append(x)
}else{if(w==1){if(k[v].city[0].bankOneDetails.bankAddress!=""){p.find("th:eq(1)").show();
p.find("th:eq(2),th:eq(3)").hide();
var x='<tr><td class="city">'+k[v].city[0].location+"</td><td>"+k[v].city[0].bankOneDetails.bankAddress+"</td></tr>";
p.append(x)
}else{if(k[v].city[0].bankTwoDetails.bankAddress!=""){p.find("th:eq(2)").show();
p.find("th:eq(1),th:eq(3)").hide();
var x='<tr><td class="city">'+k[v].city[0].location+"</td><td>"+k[v].city[0].bankTwoDetails.bankAddress+"</td></tr>";
p.append(x)
}else{if(k[v].city[0].bankThreeDetails.bankAddress!=""){p.find("th:eq(3)").show();
p.find("th:eq(1),th:eq(2)").hide();
var x='<tr><td class="city">'+k[v].city[0].location+"</td><td>"+k[v].city[0].bankThreeDetails.bankAddress+"</td></tr>";
p.append(x)
}}}}}}}}}q.sortTable();
if(n.is(":visible")){q.alignTableHeight()
}};
this.sortTable=function(){var g=e(".sales-outlet-table").eq(0).find("tr");
g.sort(function(k,m){var h=e(k).find(".city").text().toLowerCase(),j=e(m).find(".city").text().toLowerCase();
if(h<j){return -1
}if(h>j){return 1
}return 0
});
e(".sales-outlet-table").empty();
g.each(function(j,h){e(".sales-outlet-table").append(h)
})
};
this.paintDomMobile=function(h){b.empty();
var m="",u="",j="";
for(var k=0;
k<h.length;
k++){var g='<p class="clearfix"><span class="sales-key">'+t+'</span> <span> : </span><span class="sales-value">'+h[k].city[0].location+"</span></p>";
if(h[k].city[0].bankOneDetails.bankAddress!=""){m='<p class="clearfix"><span class="sales-key">'+h[k].city[0].bankOneDetails.bankName+'</span> <span> : </span><span class="sales-value">'+h[k].city[0].bankOneDetails.bankAddress+"</span></p>"
}if(h[k].city[0].bankTwoDetails.bankAddress!=""){u='<p class="clearfix"><span class="sales-key">'+h[k].city[0].bankTwoDetails.bankName+'</span> <span> : </span><span class="sales-value">'+h[k].city[0].bankTwoDetails.bankAddress+"</span></p>"
}if(h[k].city[0].bankThreeDetails.bankAddress!=""){j='<p class="clearfix"><span class="sales-key">'+h[k].city[0].bankThreeDetails.bankName+'</span> <span> : </span><span class="sales-value">'+h[k].city[0].bankThreeDetails.bankAddress+"</span></p>"
}var v=g+m+u+j;
b.append('<div class="sales-row">'+v+"</div>")
}};
this.init=function(){q.paintSelectBoxDom();
q.manipulateMenu();
q.paintDom(d.salesOutletConfig);
q.paintDomMobile(d.salesOutletConfig);
return this
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
/*!
 * This file contains the code for the profile details.
 *
 * @project   Manipal GE
 * @date      2014-02-03
 * @author    Malarvannan S, SapientNitro <smalarvannan@sapient.com>
 * @licensor  CLIENTNAME
 * @site      Manipal
 *
 */
(function(d,e,f){e.log=function(a){if(MODULE.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
d.alumniJobListComponent=(function(){function a(){var r,m,b=e(".alumni-job-list-container"),q=e(".list-pagination"),n=e("#list-advantage-module"),o=1,p=10;
this.initPagination=function(j){var h=Object.keys(j).length,k=Math.ceil(h/10);
var g={currentPage:o,totalPages:k,shouldShowPage:function(v,u,t){switch(v){case"first":case"last":return false;
default:return true
}},onPageClicked:function(y,B,z,x){o=x;
var A=0,w=(o*p)-p;
c.paintDom(j)
}};
if(h>0){q.bootstrapPaginator(g)
}else{q.empty()
}};
this.paintDom=function(j){var u="",x=j.length;
var w=(e("#hideAdvantageComponent").val()=="true")?true:false;
var h=(o*p)-p,k=(o*p),g=0;
k=(k>x)?x-1:k;
b.empty();
for(g=h;
g<=k;
g++){u+='<div class="list-container"><h3><a href=\''+j[g].readMoreLink+"'>"+j[g].job_title+'</a></h3><ul><li class="list-company"><strong>'+j[g].company_name+'</strong></li><li class="job-type-mobile">Job Type : <strong>'+j[g].job_type+'</strong></li><li class="experience-web-view">Specialization : <strong>'+j[g].specialization+'</strong></li><li class="specialization-mobile experience-mob-view">Specialization : <strong>'+j[g].specialization+"</strong></li><li class=\"experience-web-view\">Minimum Experience : <strong class='min_exp_data'>"+j[g].min_exp+"</strong>Maximum Experience : <strong>"+j[g].max_exp+"</strong></li><li class=\"min-experience-mob experience-mob-view list-last-mobile\">Min Experience : <strong class='min_exp_data'>"+j[g].min_exp+"</strong>Maximum Experience : <strong>"+j[g].max_exp+'</strong></li><li class="experience-web-view list-last">Posted: <strong>'+j[g].posted_date+'</strong></li><li class="experience-mob-view list-last">Posted: <strong>'+j[g].posted_date+'</strong></li></ul><span class="border-leftalumni-formobile"></span><p class="list-desc">'+j[g].listContent+'</p><p class="read-more"><a href="'+j[g].readMoreLink+'">Read More</a></p></div>';
if(g==4&&o==1&&w==false){u+=n.html()
}}b.html(u);
for(g=h;
g<=k;
g++){var v=b.find(".list-container")[g];
if(j[g].isNew==true){e(v).find("h3 a").addClass("new-list")
}}c.initPagination(j)
};
var c=this;
this.init=function(){b.empty();
c.paintDom(d.alumniJobListConfig);
return this
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(d,e,f){e.log=function(a){if(MODULE.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
d.studentProjectListComponent=(function(){function a(){var c,q,r=e(".student-project-list-container1"),v=e(".student-project-list-container2"),u=e("#studentProject-listing-wrapper .dept_list button"),b=e(".student-project-list-pagination"),t=1,y=10,w=1,x=5,z={};
this.filterData=function(){e("#studentProject-listing-wrapper .dropdown-menu > li, #studentProject-listing-wrapper .dept_list").on("click",function(g){g.preventDefault();
setTimeout(function(){if(!e(g.target).hasClass("dropdown-toggle")){var n=d.studentProjectListConfig,G=[],E=false,m=false,o=false,k=false,H=false;
var j="",D="",h="",p="",F="";
if(e("#studentProject-listing-wrapper .interestAreaMenu > .active").find("a").data("ivalue")){j=e("#studentProject-listing-wrapper .interestAreaMenu > .active").find("a").data("ivalue").toLowerCase()
}else{j="all"
}if(e("#studentProject-listing-wrapper .institutionMenu > .active").find("a").data("ivalue")){D=e("#studentProject-listing-wrapper .institutionMenu > .active").find("a").data("ivalue").toLowerCase()
}else{D="all"
}if(e("#studentProject-listing-wrapper .departmentMenu > .active").find("a").data("ivalue")){h=e("#studentProject-listing-wrapper .departmentMenu > .active").find("a").data("ivalue").toLowerCase()
}else{h="all"
}if(e("#studentProject-listing-wrapper .monthMenu > .active").find("a").data("ivalue")){p=e("#studentProject-listing-wrapper .monthMenu > .active").find("a").data("ivalue").toLowerCase()
}else{p="all"
}if(e("#studentProject-listing-wrapper .yearMenu > .active").find("a").data("ivalue")){F=e("#studentProject-listing-wrapper .yearMenu > .active").find("a").data("ivalue")+"".toLowerCase()
}else{F="all"
}e.each(n,function(B,A){E=false;
m=false;
o=false;
k=false;
H=false;
if((A.filterInterestArea.toLowerCase()===j)||(j==="all")){E=true
}if((A.filterInstitution.toLowerCase()===D)||(D==="all")){m=true
}if((A.filterDepartment.toLowerCase()===h)||(h==="all")){o=true
}if((A.filterMonth.toLowerCase()===p)||(p==="all")){k=true
}if((A.filterYear.toLowerCase()===F)||(F==="all")){H=true
}if(E&&m&&o&&k&&H){E=false;
m=false;
o=false;
k=false;
H=false;
G.push(A)
}});
r.empty();
v.empty();
b.empty();
if(G.length==0){return
}else{s.deptFilter(G)
}}},500)
})
};
this.initPagination=function(j){var g=Object.keys(j).length,h=Math.ceil(g/10);
var k={currentPage:t,totalPages:h,onPageClicked:function(m,p,n,B){t=B;
var o=0,A=(t*y)-y;
r.empty();
v.empty();
e.each(j,function(C,D){if(C>=A){(o<y)?s.paintDom(D):"";
if(o==4&&t==1){r.append(e(".advantage-container").html())
}o++
}})
}};
b.bootstrapPaginator(k)
};
this.paintDom=function(m){var g="",j=m.participantInfo,k=j.length,o="";
for(var h=0;
h<k;
h++){g+="<dt class='category_info list_header_data'><a class='participant_name' href='"+j[h].url+"'>"+j[h].name+"</a></dt>"
}if(m.hasImage){var n="<li class='student-project-list-item clearfix student-project-list-item-image-available'><img src='"+m.imageLink+"' class='student-project-list-item-image' /><div class='student-project-list-item-header clearfix'><a><h3 class='student-project-list-item-title'>"+m.studentProjectListTitle+"</h3></a><dl class='clearfix regular_info'><dt class='date_info list_header_data first'><span class='info'>"+m.date+"</span></dt><dt class='venue_info list_header_data'><span class='info'>"+m.interestAreaValue+"</span></dt></dl><dl class='clearfix participant-name-list'>";
var p="</dl></div><p class='student-project-list-item-details'><span class='border-left-formobile'></span>"+m.itemContent+"</p><div class='bottom-panel'><div></li>";
o=n+g+p
}else{var n="<li class='student-project-list-item clearfix'><div class='student-project-list-item-header clearfix'><h3 class='student-project-list-item-title'><a>"+m.studentProjectListTitle+"</a></h3><dl class='clearfix regular_info'><dt class='date_info list_header_data first'><span class='info'>"+m.date+"</span></dt><dt class='venue_info list_header_data'><span class='info'>"+m.interestAreaValue+"</span></dt></dl><dl class='clearfix participant-name-list'>";
var p="</dl></div><p class='student-project-list-item-details'><span class='border-left-formobile'></span>"+m.itemContent+"</p><div class='bottom-panel'><div></li>";
o=n+g+p
}(w<=5)?r.append(o):v.append(o);
(w==10)?w=0:w+=0
};
this.deptFilter=function(g){var h=0;
e.each(g,function(k,j){(h<y)?s.paintDom(j):"";
if(h==4){r.append(e(".advantage-container").html())
}h++
});
s.initPagination(g)
};
this.loadDepartmentStudentProjectList=function(){var k="all",n="all",m="all",h="all",j="all";
if(z.filterDepartment!=""&&z.filterDepartment!=f){for(var o=0;
o<d.c29_a_5_config.institutionInfo.length;
o++){if(d.c29_a_5_config.institutionInfo[o].department.toLowerCase()==z.filterDepartment.toLowerCase()){u.text(d.c29_a_5_config.institutionInfo[o].departmentText);
m=d.c29_a_5_config.institutionInfo[o].department
}}}else{u.text("All");
m=""
}var g=(typeof z.filterDepartment==="string")?z.filterDepartment:"";
if(g=="all"){g=""
}m=g.toLowerCase();
s.loadData(k,n,m,h,j)
};
this.loadData=function(j,m,k,g,h){setTimeout(function(){var p=d.studentProjectListConfig,F=[],D=false,C=false,E=false,o=false,n=false;
e.each(p,function(B,A){D=false;
C=false;
E=false;
o=false;
n=false;
if((A.filterInterestArea.toLowerCase()===j)||(j==="all")){D=true
}if((A.filterInstitution.toLowerCase()===m)||(m==="all")){C=true
}if((A.filterDepartment.toLowerCase()===k)||(k==="all")){E=true
}if((A.filterMonth.toLowerCase()===g)||(g==="all")){o=true
}if((A.filterYear.toLowerCase()===h)||(h==="all")){n=true
}if(D&&C&&E&&o&&n){D=false;
C=false;
E=false;
o=false;
n=false;
F.push(A)
}});
r.empty();
v.empty();
b.empty();
if(F.length==0){return
}else{s.deptFilter(F)
}},500)
};
var s=this;
this.init=function(){if(d.studentProjectListConfig!=f){var k,h=/\+/g,j=/([^&=]+)=?([^&]*)/g,g=function(n){return decodeURIComponent(n.replace(h," "))
};
var m=window.location.search.substring(1);
while(k=j.exec(m)){z[g(k[1])]=g(k[2])
}r.empty();
v.empty();
s.deptFilter(d.studentProjectListConfig);
if(typeof z.filterDepartment==="string"&&e.trim(z.filterDepartment)){s.loadDepartmentStudentProjectList()
}}e(document).ready(function(){s.filterData()
});
return this
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
/*!
 * This file contains the code for the profile details.
 *
 * @project   Manipal GE
 * @date      2014-01-27
 * @author    Malarvannan S, SapientNitro <smalarvannan@sapient.com>
 * @licensor  CLIENTNAME
 * @site      Manipal
 *
 */
(function(h,e,g){e.log=function(a){if(h.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
e.toType=(function f(a){return function(b){if(b===a){return"global"
}return({}).toString.call(b).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
}
}(this));
h.researchC156Listing=(function(){function a(){var b=this,m=e(".research-list-container"),c=e(".research-left-nav li"),k=e(".research-component-body .researchmobile-drop span"),d=e(".research-component-body .selectdropdown-tab");
b.init=function(){e(function(){b.leftNavClick()
});
var j=e(".research-left-nav li.active").find("p.left-nav-title").text().toLowerCase().replace(/[\s\-]/g,"");
b.paintResearchPageListing(j);
b.ddOption();
return this
};
this.leftNavClick=function(){c.on("click",function(j){j.preventDefault();
c.removeClass("active");
e(this).addClass("active");
var n=e(this).find("p.left-nav-title").text().toLowerCase().replace(/[\s\-]/g,"");
b.paintResearchPageListing(n);
e("html, body").animate({scrollTop:e(".research-list-container").eq(0).offset().top-200},"1000")
})
};
this.paintResearchPageListing=function(A){var v=h.researchPage[A].dataSet,w=h.researchPage[A].viewAllLink,y,E="",x,C,D="";
if(w==""){D=""
}else{D='<div class="view-all-link"><a href="'+w+'">View all</a></div>'
}if(v!=="undefined"){y=v.length
}for(var z=0;
z<y;
z++){if(z>3){break
}var B="";
x=v[z].listNameAndLink;
C=x.length;
for(var j=0;
j<C;
j++){if(j===(C-1)){B+='<li class="list-researcher-name researcher-last"><a href="'+x[j].linkUrl+'">'+x[j].name+"</a></li>"
}else{B+='<li class="list-researcher-name"><a href="'+x[j].linkUrl+'">'+x[j].name+"</a></li>"
}}E+="<div class=\"list-container\"><div class='research-borderLeft'><h3>"+v[z].title+"</h3><ul class='ul-date-part'><li class=\"list-date\">"+v[z].date+"</li></ul><ul class='ul-text-part'><li class=\"list-interest-area\">"+v[z].interestArea+"</li>"+B+"</ul></div><p class=\"list-desc\"><span class='border-left2rows'></span>"+v[z].listContent+"</p></div>"
}m.html(E+D)
};
b.ddOption=function(){var j=e(".research-component-body .researchmobile-drop .selectdropdown-tab li a"),n=e(".research-component-body .researchmobile-drop .selectdropdown-tab li");
e(j).on("click",function(){var t=e(this),q=t.find("p").text();
k.text(q);
e(n).removeClass("active");
var s=t.find("p");
e(s).addClass("active");
var r=e(this).find("p.left-nav-title").text().toLowerCase().replace(/[\s\-]/g,"");
b.paintResearchPageListing(r)
})
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
/*!
 * This file contains the code for the profile details.
 *
 * @project   Manipal GE
 * @date      2013-12-24
 * @author    Shaunak Trivedi, SapientNitro <strivedi4@sapient.com>
 * @licensor  CLIENTNAME
 * @site      Manipal
 *
 */
(function(h,e,g){e.log=function(a){if(h.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
e.toType=(function f(a){return function(b){if(b===a){return"global"
}return({}).toString.call(b).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
}
}(this));
h.programListBrowseProgram=(function(){function a(){var b=this,r=e("#pl-browse-programs .interest-search-container"),p=e("#pl-browse-programs .interest-dd"),c=e("#pl-browse-programs .dropdown-menu"),n=e("#browsePL .filters"),o=e("#searchPL .filters"),d=0,q=false;
b.checkDevice=function(){e(document).ready(function(){if(e("body").hasClass("manipal-mobile")){q=true;
b.populateBrowsePLFilters();
b.populateSearchPLFilters()
}})
};
b.populateBrowsePLFilters=function(){n.empty();
var s="",j="",m="";
var k="";
if(h.browsePLFilterConfig.hideInterestArea==false){k='<li class="interest-search-container" ><div class="dropdown interest-dd-text interest-dd-size"><div >INTEREST AREA</div><a class="interest-dd" data-toggle="dropdown"  href="#"><span data-value="" >All</span><div class="interest-dd-downarrow"></div></a><ul aria-labelledby="drop4" role="menu" class="dropdown-menu" id="interest-dd-option">'+b.populateInterestArea()+"</ul></div></li>";
n.append(k)
}for(d=0;
d<h.browsePLFilterConfig.degreeFilter.length;
d++){if(d==0&&q==false){m+='<li class="degrees" ><div >DEGREES</div><a class="degree-item" data-toggle="dropdown" data-value="'+h.browsePLFilterConfig.degreeFilter[d].value+'" href="javascript:void(0)">'+h.browsePLFilterConfig.degreeFilter[d].text+"</a></li>"
}else{if(d>3||q==true){j+='<li role="presentation"><a class="degree-item interest-dd-size" href="javascript:void(0)" tabindex="-1" role="menuitem" data-value="'+h.browsePLFilterConfig.degreeFilter[d].value+'" >'+h.browsePLFilterConfig.degreeFilter[d].text+"</a></li>"
}else{m+='<li class="separator"><a  href="javascript:void(0)"></a></li>';
m+='<li ><a class="degree-item" data-toggle="dropdown" data-value="'+h.browsePLFilterConfig.degreeFilter[d].value+'" href="javascript:void(0)">'+h.browsePLFilterConfig.degreeFilter[d].text+"</a></li>"
}}}if(h.browsePLFilterConfig.degreeFilter.length>4||q==true){if(q==true){s='<li class="separator"><a  href="javascript:void(0)"></a></li><li class="mobile-degree-dd-container degrees"><div class="mobile-view">DEGREES</div><div class="dropdown mobile-degree-dd"><a class="more-degree-filters" data-toggle="dropdown"  href="#"><span data-value="" >More</span><div class="more-dd-downarrow"></div></a><ul aria-labelledby="drop4" role="menu" class="dropdown-menu" id="more-dd-option">'+j+"</ul></div></li>";
m+=s
}else{s='<li class="separator"><a  href="javascript:void(0)"></a></li><li><div class="dropdown"><a class="more-degree-filters" data-toggle="dropdown"  href="#"><span data-value="" >More</span><div class="more-dd-downarrow"></div></a><ul aria-labelledby="drop4" role="menu" class="dropdown-menu" id="more-dd-option">'+j+"</ul></div></li>";
m+=s
}}n.append(m);
e("#pl-browse-programs #more-dd-option a").unbind("click")
};
b.populateSearchPLFilters=function(){o.empty();
var j="",k="",m="";
var s='<li class="interest-search-container"><div class="interest-search"><div ></div><form id="pl-search" ><input type="text" placeholder="Search" name="q" autocomplete="off" class="interest-search-text" id="searchInput"><div class="search-button-bg" ><button class="search-button" type="submit"></button></div></form></div></li>';
o.append(s);
for(d=0;
d<h.browsePLFilterConfig.degreeFilter.length;
d++){if(d==0&&q==false){m+='<li class="degrees" ><div >DEGREES</div><a class="degree-item" data-toggle="dropdown" data-value="'+h.browsePLFilterConfig.degreeFilter[d].value+'" href="javascript:void(0)">'+h.browsePLFilterConfig.degreeFilter[d].text+"</a></li>"
}else{if(d>3||q==true){k+='<li role="presentation"><a class="degree-item interest-dd-size" href="javascript:void(0)" tabindex="-1" role="menuitem" data-value="'+h.browsePLFilterConfig.degreeFilter[d].value+'" >'+h.browsePLFilterConfig.degreeFilter[d].text+"</a></li>"
}else{m+='<li class="separator"><a  href="javascript:void(0)"></a></li>';
m+='<li ><a class="degree-item" data-toggle="dropdown" data-value="'+h.browsePLFilterConfig.degreeFilter[d].value+'" href="javascript:void(0)">'+h.browsePLFilterConfig.degreeFilter[d].text+"</a></li>"
}}}if(h.browsePLFilterConfig.degreeFilter.length>4||q==true){if(q==false){j='<li class="separator"><a  href="javascript:void(0)"></a></li><li><div class="dropdown"><a class="more-degree-filters" data-toggle="dropdown"  href="#"><span data-value="" >More</span><div class="more-dd-downarrow"></div></a><ul aria-labelledby="drop4" role="menu" class="dropdown-menu" id="more-dd-option">'+k+"</ul></div></li>";
m+=j
}else{j='<li class="separator"><a  href="javascript:void(0)"></a></li><li class="mobile-degree-dd-container degrees"><div class="mobile-view">DEGREES</div><div class="dropdown mobile-degree-dd"><a class="more-degree-filters" data-toggle="dropdown"  href="#"><span data-value="" >More</span><div class="more-dd-downarrow"></div></a><ul aria-labelledby="drop4" role="menu" class="dropdown-menu" id="more-dd-option">'+k+"</ul></div></li>";
m+=j
}}o.append(m);
e("#pl-browse-programs #more-dd-option a").unbind("click")
};
b.populateInterestArea=function(){var m="",j=0,k=[];
k=h.browsePLFilterConfig.interestAreaFilter;
k.sort(function(s,t){s=s.text.toLowerCase();
t=t.text.toLowerCase();
return s<t?-1:s>t?1:0
});
m='<li role="presentation"><a class="interest-dd-size" href="javascript:void(0)" tabindex="-1" role="menuitem" data-value="" >All</a></li>';
for(j=0;
j<k.length;
j++){m+='<li role="presentation"><a class="interest-dd-size" href="javascript:void(0)" tabindex="-1" role="menuitem" data-value="'+k[j].value+'" >'+k[j].text+"</a></li>"
}return m
};
this.init=function(){if(h.browsePLFilterConfig!=g){b.checkDevice();
b.populateBrowsePLFilters();
b.populateSearchPLFilters()
}}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
/*!
 * This file contains the code for the program listing.
 *
 * @project   Manipal GE
 * @date      2013-12-24
 * @author    Shaunak Trivedi, SapientNitro <strivedi4@sapient.com>
 * @licensor  CLIENTNAME
 * @site      Manipal
 *
 */
(function(h,e,g){e.log=function(a){if(h.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
e.toType=(function f(a){return function(b){if(b===a){return"global"
}return({}).toString.call(b).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
}
}(this));
h.programListing=(function(){function a(){var D=this,d=10,L=1,R=e("#program-listing"),P=[],E=e("#pl-browse-programs .tab-header ul li"),H=e(E[0]).find("a").attr("href"),b=e(H).find(".filter-active"),I=e("#pl-browse-programs ul.filters .interest-dd span"),S=e("#pl-browse-programs #interest-dd-option a"),J=e(".program-list-alphabet-sort ul.alpha-filters"),F=e(".program-list-alphabet-sort li.filter"),N=e(".program-list-alphabet-sort li"),G=e("#pl-search"),O="",Q="",c="",B=e("#program-list-alphabet-sort-mobile span.filter"),M=e("#program-list-alphabet-sort-mobile span.alpha-count"),T=false,C=false,K={};
D.checkDevice=function(){e(document).ready(function(){if(e("body").hasClass("manipal-mobile")){B=e("#program-list-alphabet-sort-mobile span.filter");
M=e("#program-list-alphabet-sort-mobile span.alpha-count");
T=true;
B.text(e(".program-list-alphabet-sort-mobile .filter-selected a:eq(0)").text());
M.text(e(".program-list-alphabet-sort-mobile .filter-selected span:eq(0)").text());
D.reInitializeVariable();
D.initializeDDClick();
D.setFormSubmit();
D.setFilters()
}})
};
D.reInitializeVariable=function(){D=this;
d=10;
L=1;
R=e("#program-listing");
P=[];
E=e("#pl-browse-programs .tab-header ul li");
H=e(E[0]).find("a").attr("href");
b=e(H).find(".filter-active");
I=e("#pl-browse-programs ul.filters .interest-dd span");
S=e("#pl-browse-programs #interest-dd-option a");
J=e(".program-list-alphabet-sort ul.alpha-filters");
F=e(".program-list-alphabet-sort li.filter");
N=e(".program-list-alphabet-sort li");
G=e("#pl-browse-programs #pl-search");
O="";
Q="";
c=""
};
D.calAlphabetCount=function(k,r){var u=0,p=0,q=0,m=0,j=0,s=0,w=0,v=0,t=null;
for(w=0;
w<h[H.slice(1)+"Config"].itemList.length;
w++){if(k==""&&h[H.slice(1)+"Config"].itemList[w].filterDegree==r){var n=h[H.slice(1)+"Config"].itemList[w].filterAlphabetical.toLowerCase();
switch(n){case"a-d":u++;
break;
case"e-h":p++;
break;
case"i-l":q++;
break;
case"m-p":m++;
break;
case"q-t":j++;
break;
case"u-z":s++;
break;
default:}}else{if(h[H.slice(1)+"Config"].itemList[w].filterInterestArea==k&&h[H.slice(1)+"Config"].itemList[w].filterDegree==r){var n=h[H.slice(1)+"Config"].itemList[w].filterAlphabetical.toLowerCase();
switch(n){case"a-d":u++;
break;
case"e-h":p++;
break;
case"i-l":q++;
break;
case"m-p":m++;
break;
case"q-t":j++;
break;
case"u-z":s++;
break;
default:}}}}e(F).removeClass("filter-active");
e(F).removeClass("filter-selected");
if(u!=0){t=e("."+e(F[0]).attr("class").split(" ").shift());
t.addClass("filter-active");
e(t[1]).parent().switchClass("alpha-filters","alpha-filters-top")
}if(p!=0){t=e("."+e(F[1]).attr("class").split(" ").shift());
t.addClass("filter-active");
e(t[1]).parent().switchClass("alpha-filters","alpha-filters-top")
}if(q!=0){t=e("."+e(F[2]).attr("class").split(" ").shift());
t.addClass("filter-active");
e(t[1]).parent().switchClass("alpha-filters","alpha-filters-top")
}if(m!=0){t=e("."+e(F[3]).attr("class").split(" ").shift());
t.addClass("filter-active");
e(t[1]).parent().switchClass("alpha-filters","alpha-filters-top")
}if(j!=0){t=e("."+e(F[4]).attr("class").split(" ").shift());
t.addClass("filter-active");
e(t[1]).parent().switchClass("alpha-filters","alpha-filters-top")
}if(s!=0){t=e("."+e(F[5]).attr("class").split(" ").shift());
t.addClass("filter-active");
e(t[1]).parent().switchClass("alpha-filters","alpha-filters-top")
}var x=(e("#hideNumbers").val()=="true")?true:false;
if(x==true){if(!e(".program-list-alphabet-sort ul.alpha-filters").hasClass("prog-without-numbers")){e(".program-list-alphabet-sort ul.alpha-filters").addClass("prog-without-numbers")
}for(v=0;
v<F.length;
v++){var o=e(F[v]);
switch(e(o).attr("data-value")){case"a-d":e(o).find("span").hide();
break;
case"e-h":e(o).find("span").hide();
break;
case"i-l":e(o).find("span").hide();
break;
case"m-p":e(o).find("span").hide();
break;
case"q-t":e(o).find("span").hide();
break;
case"u-z":e(o).find("span").hide();
break;
default:}}}if(x!=true){for(v=0;
v<F.length;
v++){var o=e(F[v]);
switch(e(o).attr("data-value")){case"a-d":e(o).find("span").text("("+u+")");
break;
case"e-h":e(o).find("span").text("("+p+")");
break;
case"i-l":e(o).find("span").text("("+q+")");
break;
case"m-p":e(o).find("span").text("("+m+")");
break;
case"q-t":e(o).find("span").text("("+j+")");
break;
case"u-z":e(o).find("span").text("("+s+")");
break;
default:}}}J=e(".program-list-alphabet-sort ul");
N.unbind("click");
N=J.find(".filter-active");
if(N.length>0){t=e("."+e(N[0]).attr("class").split(" ").shift());
t.addClass("filter-selected");
c=e(N[0]).attr("data-value");
D.alphabetFilterClick()
}};
D.resetLoadMore=function(){L=1
};
D.loadMore=function(){if(((L*d)-d)>P.length){return
}L++;
D.renderList()
};
D.renderList=function(){var j=(L*d)-d,k=(L*d),n=0,r="",m=e(window).width();
var o=(e("#hideAdvantageComponent").val()=="true")?true:false;
var p=(e("#hideLoadMoreButton").val()=="true")?true:false;
k=(k>P.length)?P.length-1:k-1;
if(p){j=0;
k=P.length-1
}for(n=j;
n<=k;
n++){var q=P[n].date;
if(!T){r+='<div class="container-940 tile selection-border"><h2 class="pl-item-heading bold-font" ><a href="'+P[n].contentLink+'">'+P[n].programName+'</a></h2><a class="institute-name light-font-color" href="'+P[n].instituteLink+'">'+P[n].instituteName+'</a><div class="program-det"><div class="institute-det"><ul><li class="light-font-color" >'+P[n].degreeName+" - ["+P[n].years+']</li><li class="bold-font apply-date" >'+q+'</li></ul></div></div><div class="pl-content"><span class="border-left-formobile"></span><p class="light-font-color">'+P[n].itemContent+'</p></div><a class="program-list-item-read-more" href="'+P[n].readMoreLink+'">Read More</a></div>'
}else{r+='<div class="container-940 tile selection-border"><h2 class="pl-item-heading bold-font" ><a href="'+P[n].contentLink+'">'+P[n].programName+'</a></h2><a class="institute-name light-font-color" href="'+P[n].instituteLink+'">'+P[n].instituteName+'</a><div class="program-det"><div class="institute-det col-lg-4"><ul><li class="light-font-color" >'+P[n].degreeName+" - ["+P[n].years+']</li><li class="apply-date" >'+q+'</li></ul></div><div class="col-lg-8 mobile-program-detail-desc clearfix"><span class="program-list-highlight"></span><p class="light-font-color">'+P[n].itemContent+'</p></div><a class="program-list-item-read-more" href="'+P[n].readMoreLink+'">Read More</a></div></div>'
}if(n==4&&H=="#browsePL"&&o==false){r+=e(".advantage-container").html()
}}e(".load-more").remove();
if(j==0){R.empty()
}if(n==0&&C==true){e("#program-listing").html('<div class="container-940 tile"><h2 class="pl-item-heading bold-font" >No results found</h2></div>')
}if(!p){if(k<P.length-1){r+='<div class="load-more"><a href="javascript:void(0)">Load More...</a></div>'
}}R.append(r);
e(".load-more").on("click",this.loadMore)
};
D.enableDegreeFilters=function(){var t=[];
if(H=="#browsePL"){t=h[H.slice(1)+"Config"].itemList
}else{t=h[H.slice(1)+"Config"].itemList=(h[H.slice(1)+"Config"].itemList==g)?[]:h[H.slice(1)+"Config"].itemList
}var q=e(e(H).find("a.degree-item")[0]).attr("data-value"),s=e(e(H).find("a.degree-item")[1]).attr("data-value"),n=e(e(H).find("a.degree-item")[2]).attr("data-value"),m=e(e(H).find("a.degree-item")[3]).attr("data-value"),u=0,k=0,o=0,j=0,r=0,p=0;
for(u=0;
u<t.length;
u++){for(p=0;
p<e(H).find("a.degree-item").length;
p++){if(e(e(H).find("a.degree-item")[p]).attr("data-value")==t[u].filterDegree){e(e(H).find("a.degree-item")[p]).addClass("filter-active");
break
}}}b=e(H).find(".filter-active");
D.setDegFilterClick()
};
D.filterList=function(o,j,m){var k=0;
var n=(e("#hideAlphabeticalOrder").val()=="true")?true:false;
P=[];
for(k=0;
k<h[H.slice(1)+"Config"].itemList.length;
k++){if(e("#pl-browse-programs").length!=0){if(!n){if(o==""){if(h[H.slice(1)+"Config"].itemList[k].filterDegree==j&&h[H.slice(1)+"Config"].itemList[k].filterAlphabetical.toLowerCase()==m){P.push(h[H.slice(1)+"Config"].itemList[k])
}}else{if(h[H.slice(1)+"Config"].itemList[k].filterInterestArea==o&&h[H.slice(1)+"Config"].itemList[k].filterDegree==j&&h[H.slice(1)+"Config"].itemList[k].filterAlphabetical.toLowerCase()==m){P.push(h[H.slice(1)+"Config"].itemList[k])
}}}else{if(o==""){if(h[H.slice(1)+"Config"].itemList[k].filterDegree==j){P.push(h[H.slice(1)+"Config"].itemList[k])
}}else{if(h[H.slice(1)+"Config"].itemList[k].filterInterestArea==o&&h[H.slice(1)+"Config"].itemList[k].filterDegree==j){P.push(h[H.slice(1)+"Config"].itemList[k])
}}}}else{P.push(h[H.slice(1)+"Config"].itemList[k])
}}P.sort(function(p,q){if(p.programSortName==g||p.programSortName==""){p=p.programName.toLowerCase()
}else{p=p.programSortName.toLowerCase()
}if(q.programSortName==g||q.programSortName==""){q=q.programName.toLowerCase()
}else{q=q.programSortName.toLowerCase()
}return p<q?-1:p>q?1:0
});
D.resetLoadMore();
D.renderList();
return true
};
D.setActiveTabContent=function(j){H=j
};
D.getActivatedFilters=function(){return e(H).find(".filter-active")
};
D.resetFilters=function(){if(!e(E[0]).hasClass("active")&&!e(E[1]).hasClass("active")){e(E[0]).addClass("active")
}D.setTabHeaderClick();
e("#pl-browse-programs .tab-content .tab-pane").removeClass("active");
e(H).addClass("active");
if(K.filter!=""&&K.filter!=g){for(var k=0;
k<h.browsePLFilterConfig.interestAreaFilter.length;
k++){if(h.browsePLFilterConfig.interestAreaFilter[k].value.toLowerCase()==K.filter.toLowerCase()){I.text(h.browsePLFilterConfig.interestAreaFilter[k].text);
I.attr("data-value",h.browsePLFilterConfig.interestAreaFilter[k].value);
O=h.browsePLFilterConfig.interestAreaFilter[k].value
}}}else{I.text("All");
I.attr("data-value","");
O=(I.attr("data-value")==g)?"":I.attr("data-value")
}e("#more-dd-option a").on("click",function(){var m=e(this);
if(!m.hasClass("filter-active")){return false
}});
e(H).find("a.degree-item").removeClass("filter-active");
e(H).find("a.degree-item").removeClass("filter-selected");
D.enableDegreeFilters();
e(".arrow-down").remove();
if(K.filterPl!=""&&K.filterPl!=g){Q=K.filterPl.toLowerCase();
var j=b.length;
for(var k=0;
k<j;
k++){if(e(b[k]).attr("data-value")==Q){e(b[k]).after('<div class="arrow-down"></div>');
e(b[k]).addClass("filter-selected");
break
}}}else{e(b[0]).after('<div class="arrow-down"></div>');
e(b[0]).addClass("filter-selected");
if(T){}Q=(e(b[0]).attr("data-value")==g)?"":e(b[0]).attr("data-value")
}D.setDegFilterClick();
if(e("#pl-browse-programs").length!=0){D.calAlphabetCount(O,Q)
}if(T){e(".program-list-alphabet-sort-mobile .dropdown-menu .filter-active:eq(0)").trigger("click");
e(".more-degree-filters span").text(e("#more-dd-option .degree-item:eq(0)").text())
}return true
};
D.getSearchProgramList=function(j){if(j.trim()==""){return
}e.ajax({type:"GET",url:"/bin/manipal/components/searchProgramsServlet?tagSearch=programs&keyword="+j+"&currentPagePath="+h.searchPLConfig.currentPagePath,dataType:"JSON",contentType:"application/json"}).success(function(k){if(k){h[H.slice(1)+"Config"].itemList=k;
var m=h[H.slice(1)+"Config"].itemList.length;
if(m>0){CQ_Analytics.record({event:"SearchFilter",values:{searchKW:j,searchResults:m+""},componentPath:"manipal/components/SearchFilter"})
}else{C=true;
CQ_Analytics.record({event:"SearchFilter",values:{searchKW:j,searchResults:"zero"},componentPath:"manipal/components/SearchFilter"})
}D.getFilterList()
}}).error(function(k){})
};
D.getFilterList=function(){var j=null;
O="";
if(D.resetFilters()){D.filterList(O,Q,c)
}};
D.setTabHeaderClick=function(){E.off().on("click",function(){E.removeClass("active");
C=false;
var n=e(this),k=n.find("a").attr("href"),j=n.attr("data-value"),m=null;
O="";
G.find("input").val("");
D.setActiveTabContent(k);
D.getFilterList();
if(T){if(e(".program-list-alphabet-sort-mobile .dropdown-menu .filter-active").length>0){e(".program-list-alphabet-sort-mobile .dropdown-menu .filter-active:eq(0)").trigger("click")
}else{B.text("A - D");
M.text("(0)")
}}})
};
D.setDegFilterClick=function(){b.off().on("click",function(){var k=e(this);
b.removeClass("filter-selected");
e(".arrow-down").remove();
k.addClass("filter-selected");
if(k.parents(".dropdown-menu").length==0){k.after('<div class="arrow-down"></div>')
}Q=k.attr("data-value");
D.calAlphabetCount(O,Q);
D.filterList(O,Q,c);
if(T){e(".more-degree-filters span").text(e(this).text());
e(".program-list-alphabet-sort-mobile .dropdown-menu .filter-active:eq(0)").trigger("click");
var j=setTimeout(function(){e("#program-listing .advantage-mobile-view").empty();
e("#program-listing .advantage-mobile-view").append('<ul class="slides"><li></li></ul>');
if(window.manipal.advantageComponent!=g&&window.manipal.manipalAdvantage!=g){window.manipal.manipalAdvantage.init()
}},3000)
}})
};
D.initializeDDClick=function(){S.off().on("click",function(){var k=e(this).text(),j=e(this).attr("data-value");
O=j;
I.text(k);
I.attr("data-value",j);
D.calAlphabetCount(O,Q);
D.filterList(O,Q,c);
if(T){if(e(".program-list-alphabet-sort-mobile .dropdown-menu .filter-active").length>0){e(".program-list-alphabet-sort-mobile .dropdown-menu .filter-active:eq(0)").trigger("click")
}else{B.text("A - D");
M.text("(0)")
}var m=setTimeout(function(){e("#program-listing .advantage-mobile-view").empty();
e("#program-listing .advantage-mobile-view").append('<ul class="slides"><li></li></ul>');
if(window.manipal.advantageComponent!=g&&window.manipal.manipalAdvantage!=g){window.manipal.manipalAdvantage.init()
}},3000)
}})
};
D.alphabetFilterClick=function(){N.off().on("click",function(){var k=e(this),j=null;
N.removeClass("filter-selected");
j=e("."+e(k).attr("class").split(" ").shift());
j.addClass("filter-selected");
c=k.attr("data-value");
D.filterList(O,Q,c);
if(D.filterList(O,Q,c)){e("html, body").animate({scrollTop:e(".tile").eq(0).offset().top-230},"1000")
}});
e(".program-list-alphabet-sort-mobile .dropdown-menu .filter-active").click(function(j){j.preventDefault();
var k=B.text();
var m=M.text();
B.text(e(this).find("a").text());
M.text(e(this).find("span").text())
})
};
D.setFormSubmit=function(){G.submit(function(k){k.preventDefault();
var j=e(this).find("input").val();
D.getSearchProgramList(j);
return false
})
};
D.setFilters=function(){if(H==g){H="#browsePL"
}if(h[H.slice(1)+"Config"].itemList&&h[H.slice(1)+"Config"].itemList.length>0){if(D.resetFilters()){D.filterList(O,Q,c)
}}};
D.init=function(){if(h.browsePLConfig!=g){var n,k=/\+/g,m=/([^&=]+)=?([^&]*)/g,j=function(p){return decodeURIComponent(p.replace(k," "))
};
var o=window.location.search.substring(1);
while(n=m.exec(o)){K[j(n[1])]=j(n[2])
}D.reInitializeVariable();
D.initializeDDClick();
D.setFormSubmit();
D.setFilters();
D.checkDevice()
}return this
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(d,e,f){e.log=function(a){if(MODULE.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
d.facultyListFilter=(function(){function a(){var b=this;
var q,o,r,c,m;
var n=e(".fl-filter #institution-dd-option");
var p=e(".program-list-alphabet-sort .alpha-filters");
b.setInterestAreaDDClick=function(){e(".fl-filter #interest-dd-option > li").on("click",function(g){g.preventDefault();
var h=e(this).find("a").html();
e(".fl-filter #interest-dd").html(h);
e(this).siblings("li").removeClass("active").end().addClass("active")
})
};
b.setInstitutionDDClick=function(){e(".fl-filter #institution-dd-option > li").on("click",function(k){k.preventDefault();
var h=e(this).find("a").html(),j=e(this).find("a").attr("data-value");
e(".fl-filter .institution-dd span").text(h);
e(".fl-filter .institution-dd span").attr("data-value",j);
e(this).siblings("li").removeClass("active").end().addClass("active");
var g=e(this).find("a").data("value")
})
};
this.paintDom=function(){var h=d.facultyListFilterConfig;
q=h.hideInterestArea,o=h.hideInstitute,r=h.hideDepartment,c=h.hideMonth,m=h.hideYear;
var j=[],g=[];
if(!q){b.printIArea()
}if(!o){b.printInstitute()
}b.printAlphabetFilter()
};
b.printIArea=function(){var h=d.facultyListFilterConfig.listItem,j=e(".fl-filter #interest-dd-option");
var t=[],g=[];
h.sort(function(u,v){u=u.interestAreaText.toLowerCase();
v=v.interestAreaText.toLowerCase();
return u<v?-1:u>v?1:0
});
e.each(h,function(v,u){if(jQuery.inArray(u.interestArea,g)<0){g.push(u.interestArea);
t.push(u.interestAreaText)
}});
j.html('<li role="presentation" class="active"><a role="menuitem" tabindex="-1" href="#" data-value="">All</a></li>');
for(var k=0;
k<g.length;
k++){var s='<li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-value="'+g[k]+'">'+t[k]+"</a></li>";
j.append(s)
}b.setInterestAreaDDClick()
};
b.printInstitute=function(){var h=d.facultyListFilterConfig.listItem;
var g=[],k=[];
h.sort(function(t,u){t=t.institutionText.toLowerCase();
u=u.institutionText.toLowerCase();
return t<u?-1:t>u?1:0
});
e.each(h,function(u,t){if(jQuery.inArray(t.institution,k)<0){k.push(t.institution);
g.push(t.institutionText)
}});
n.html('<li role="presentation" class="active"><a role="menuitem" tabindex="-1" href="#" data-value="">All</a></li>');
for(var j=0;
j<k.length;
j++){var s='<li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-value="'+k[j]+'">'+g[j]+"</a></li>";
n.append(s)
}b.setInstitutionDDClick()
};
b.printAlphabetFilter=function(){var g="";
g='<li class="atod filter" data-value="'+d.facultyListFilterConfig.alphabetFilter[0].value+'" ><a class="" href="javascript:void(0)">'+d.facultyListFilterConfig.alphabetFilter[0].text+'</a><span>(100)</span></li><li class="separator"><a href="javascript:void(0)"></a></li><li class="etoh filter" data-value="'+d.facultyListFilterConfig.alphabetFilter[1].value+'" ><a class="" href="javascript:void(0)">'+d.facultyListFilterConfig.alphabetFilter[1].text+'</a><span>(100)</span></li><li class="separator"><a href="javascript:void(0)"></a></li><li class="itol filter " data-value="'+d.facultyListFilterConfig.alphabetFilter[2].value+'" ><a class="" href="javascript:void(0)">'+d.facultyListFilterConfig.alphabetFilter[2].text+'</a><span>(100)</span></li><li class="separator"><a href="javascript:void(0)"></a></li><li class="mtop filter" data-value="'+d.facultyListFilterConfig.alphabetFilter[3].value+'" ><a class="" href="javascript:void(0)">'+d.facultyListFilterConfig.alphabetFilter[3].text+'</a><span>(100)</span></li><li class="separator"><a href="javascript:void(0)"></a></li><li class="qtot filter " data-value="'+d.facultyListFilterConfig.alphabetFilter[4].value+'" ><a class="" href="javascript:void(0)">'+d.facultyListFilterConfig.alphabetFilter[4].text+'</a><span>(100)</span></li><li class="separator"><a href="javascript:void(0)"></a></li><li class="utoz filter" data-value="'+d.facultyListFilterConfig.alphabetFilter[5].value+'" ><a class="" href="javascript:void(0)">'+d.facultyListFilterConfig.alphabetFilter[5].text+"</a><span>(100)</span></li>";
p.empty();
p.append(g)
};
this.init=function(){if(d.facultyListFilterConfig!=f){b.paintDom()
}return this
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
/*!
 * This file contains the code for the faculty listing.
 *
 * @project   Manipal GE
 * @date      2014-01-23
 * @author    Shaunak Trivedi, SapientNitro <strivedi4@sapient.com>
 * @licensor  CLIENTNAME
 * @site      Manipal
 *
 */
(function(h,e,g){e.log=function(a){if(h.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
e.toType=(function f(a){return function(b){if(b===a){return"global"
}return({}).toString.call(b).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
}
}(this));
h.facultyListing=(function(){function a(){var d=this,Q=12,P=1,L=[],N=e("#faculty-listing .container-940"),H=e(".component-c129-a-5-list .iarea_list button"),c=e(".component-c129-a-5-list .inst_list button"),S=e(".component-c129-a-5-list .dept_list button"),T=e(".component-c129-a-5-list .sub_dept_list button"),R=e(".component-c129-a-5-list .iarea_list .interestAreaMenu"),J=e(".component-c129-a-5-list .inst_list .institutionMenu"),X=e(".component-c129-a-5-list .dept_list .departmentMenu"),W=e(".component-c129-a-5-list .sub_dept_list .subDepartmentMenu"),G=e(".program-list-alphabet-sort ul.alpha-filters"),I=null,F=e(".program-list-alphabet-sort li.filter"),Z=null,aa="",U="",K="",Y="",O="",b=e("#program-list-alphabet-sort-mobile span.filter"),V=e("#program-list-alphabet-sort-mobile span.alpha-count"),ab=false,M={};
d.checkDevice=function(){if(e("body").hasClass("manipal-mobile")){e(document).ready(function(){b=e("#program-list-alphabet-sort-mobile span.filter");
V=e("#program-list-alphabet-sort-mobile span.alpha-count");
ab=true;
b.text(e("#program-list-alphabet-sort-mobile .filter-selected a:eq(0)").text());
V.text(e("#program-list-alphabet-sort-mobile .filter-selected span:eq(0)").text());
d.initializeDDClick();
d.setFilters()
})
}};
d.initializeDDClick=function(){var k=e("#program-list-alphabet-sort .filter-selected a:eq(0)").text(),j=e("#program-list-alphabet-sort .filter-selected span:eq(0)").text();
e("#program-list-alphabet-sort-mobile .filter-selected").text(k);
e("#program-list-alphabet-sort-mobile .alpha-count").text(j)
};
d.initializeVariables=function(){Q=12;
P=1;
L=[];
N=e("#faculty-listing .container-940");
H=e(".component-c129-a-5-list .iarea_list button");
c=e(".component-c129-a-5-list .inst_list button");
S=e(".component-c129-a-5-list .dept_list button");
T=e(".component-c129-a-5-list .sub_dept_list button");
R=e(".component-c129-a-5-list .iarea_list .interestAreaMenu");
J=e(".component-c129-a-5-list .inst_list .institutionMenu");
X=e(".component-c129-a-5-list .dept_list .departmentMenu");
W=e(".component-c129-a-5-list .sub_dept_list .subDepartmentMenu");
G=e(".program-list-alphabet-sort ul.alpha-filters");
I=null;
F=e(".program-list-alphabet-sort li.filter");
Z=null;
aa="";
U="";
K="";
Y="";
O=""
};
d.setDropDownClick=function(){R.off().on("click","a",function(){var k=e(this).text(),j=e(this).attr("data-ivalue");
if(j=="all"){j=""
}c.text("All");
c.attr("data-value","");
U="";
K="";
aa=j.toLowerCase();
d.calAlphabetCount(aa,U,K);
d.filterList(aa,U,K,O)
});
J.off().on("click","a",function(){var k=e(this).text(),j=e(this).attr("data-ivalue");
if(j=="all"){j=""
}H.text("All");
H.attr("data-value","");
U=j.toLowerCase();
K="";
aa="";
d.calAlphabetCount(aa,U,K);
d.filterList(aa,U,K,O)
});
X.off().on("click","a",function(){var k=e(this).text(),j=e(this).attr("data-ivalue");
if(j=="all"){j=""
}K=j.toLowerCase();
Y="";
if(e(".sub_dept_list").is(":visible")){d.calAlphabetCount(aa,U,K,Y);
d.filterList(aa,U,K,O,Y)
}else{d.calAlphabetCount(aa,U,K);
d.filterList(aa,U,K,O)
}});
W.off().on("click","a",function(){var k=e(this).text(),j=e(this).attr("data-ivalue");
if(j=="all"){j=""
}Y=j.toLowerCase();
d.calAlphabetCount(aa,U,K,Y);
d.filterList(aa,U,K,O,Y)
})
};
d.calAlphabetCount=function(A,B,o,r){var w=0,p=0,s=0,k=0,z=0,x=0,v=0,C=0,n=null,y=false,m=false,j=false,u=false;
for(v=0;
v<h.facultyListConfig.itemList.length;
v++){if(""==A||h.facultyListConfig.itemList[v].filterInterestArea.toLowerCase()==A){y=true
}if(""==B||h.facultyListConfig.itemList[v].filterInstitution.toLowerCase()==B){m=true
}if(""==o||h.facultyListConfig.itemList[v].filterDepartment.toLowerCase()==o){j=true
}if(typeof r!=="undefined"&&h.facultyListConfig.itemList[v].filterSchool!=g){if(""==o||h.facultyListConfig.itemList[v].filterSchool.toLowerCase()==o){j=true
}else{j=false
}if(""==r||h.facultyListConfig.itemList[v].filterDepartment.toLowerCase()==r){u=true
}else{u=false
}if((y&&m&&j&&u)){switch(h.facultyListConfig.itemList[v].filterAlphabetical.toLowerCase()){case"a-d":w++;
break;
case"e-h":p++;
break;
case"i-l":s++;
break;
case"m-p":k++;
break;
case"q-t":z++;
break;
case"u-z":x++;
break;
default:}y=false;
m=false;
j=false;
u=false
}}else{if((y&&m&&j)){switch(h.facultyListConfig.itemList[v].filterAlphabetical.toLowerCase()){case"a-d":w++;
break;
case"e-h":p++;
break;
case"i-l":s++;
break;
case"m-p":k++;
break;
case"q-t":z++;
break;
case"u-z":x++;
break;
default:}y=false;
m=false;
j=false;
u=false
}}}e(F).removeClass("filter-active");
e(F).removeClass("filter-selected");
if(w!=0){n=e("."+e(F[0]).attr("class").split(" ").shift());
n.addClass("filter-active");
e(n[1]).parent().switchClass("alpha-filters","alpha-filters-top")
}if(p!=0){n=e("."+e(F[1]).attr("class").split(" ").shift());
n.addClass("filter-active");
e(n[1]).parent().switchClass("alpha-filters","alpha-filters-top")
}if(s!=0){n=e("."+e(F[2]).attr("class").split(" ").shift());
n.addClass("filter-active");
e(n[1]).parent().switchClass("alpha-filters","alpha-filters-top")
}if(k!=0){n=e("."+e(F[3]).attr("class").split(" ").shift());
n.addClass("filter-active");
e(n[1]).parent().switchClass("alpha-filters","alpha-filters-top")
}if(z!=0){n=e("."+e(F[4]).attr("class").split(" ").shift());
n.addClass("filter-active");
e(n[1]).parent().switchClass("alpha-filters","alpha-filters-top")
}if(x!=0){n=e("."+e(F[5]).attr("class").split(" ").shift());
n.addClass("filter-active");
e(n[1]).parent().switchClass("alpha-filters","alpha-filters-top")
}var q=(e("#hideNumbers").val()=="true")?true:false;
if(q==true){if(!e(".program-list-alphabet-sort ul.alpha-filters").hasClass("without-numbers")){e(".program-list-alphabet-sort ul.alpha-filters").addClass("without-numbers")
}for(C=0;
C<F.length;
C++){var t=e(F[C]);
switch(e(t).attr("data-value")){case"a-d":e(t).find("span").hide();
break;
case"e-h":e(t).find("span").hide();
break;
case"i-l":e(t).find("span").hide();
break;
case"m-p":e(t).find("span").hide();
break;
case"q-t":e(t).find("span").hide();
break;
case"u-z":e(t).find("span").hide();
break;
default:}}}if(q!=true){for(C=0;
C<F.length;
C++){var t=e(F[C]);
switch(e(t).attr("data-value")){case"a-d":e(t).find("span").text("("+w+")");
break;
case"e-h":e(t).find("span").text("("+p+")");
break;
case"i-l":e(t).find("span").text("("+s+")");
break;
case"m-p":e(t).find("span").text("("+k+")");
break;
case"q-t":e(t).find("span").text("("+z+")");
break;
case"u-z":e(t).find("span").text("("+x+")");
break;
default:}}}G=e(".program-list-alphabet-sort ul");
Z=G.find(".filter-active");
if(Z.length>0){n=e("."+e(Z[0]).attr("class").split(" ").shift());
n.addClass("filter-selected");
if((e("#hideAlphabeticalOrder").val()=="true")){O=""
}else{O=e(Z[0]).attr("data-value");
O=O.toLowerCase()
}d.alphabetFilterClick()
}};
d.alphabetFilterClick=function(){Z.off().on("click",function(){var n=e(this),m=null;
var j=n.find("a").text();
var k=n.find("span").text();
Z.removeClass("filter-selected");
m=e("."+e(n).attr("class").split(" ").shift());
m.addClass("filter-selected");
O=n.attr("data-value");
e(".facultyList .program-list-alphabet-sort button .filter-selected").text(j);
e(".facultyList .program-list-alphabet-sort button .filter-selected").attr("data-value",O);
e(".facultyList .program-list-alphabet-sort button .alpha-count").text(k);
if(e(".sub_dept_list").is(":visible")){if(d.filterList(aa,U,K,O,Y)){e("html, body").animate({scrollTop:e(".tile").eq(0).offset().top-200},"1000")
}}else{if(d.filterList(aa,U,K,O)){e("html, body").animate({scrollTop:e(".tile").eq(0).offset().top-200},"1000")
}}})
};
d.resetLoadMore=function(){P=1
};
d.loadMore=function(){if(((P*Q)-Q)>L.length){return
}P++;
d.renderList()
};
d.renderList=function(){var k=(P*Q)-Q,m=(P*Q),n=0,o="";
m=(m>L.length)?L.length-1:m-1;
var j=e(window).width();
if(j>767){for(n=k;
n<=m;
n++){o+='<div class="tile"><div class="faculty-info"><div class="facultylistimgwarp"><img src="'+L[n].profileimg+'" alt="" /></div><div class="name" ><a href="'+L[n].contentLink+'">'+L[n].profilename+'</a></div><div class="designation" >'+L[n].designation+'</div><div class="department" >'+L[n].department+'</div></div><a class="institute" href="'+L[n].instituteLink+'" >'+L[n].institute+'</a><div class="faculty-contact"><div class="email" ><img src="/etc/designs/manipal/images/fl-email.png" /><span>'+L[n].email+'</span></div><p><!-- included to move the phone no to next line --></p><div class="phone" ><img src="/etc/designs/manipal/images/fl-phone.png" /><span>'+L[n].phone+"</span></div></div></div>";
if(n==14){o+=e(".advantage-container").html()
}}}else{for(n=k;
n<=m;
n++){o+='<div class="tile"><div class="faculty-info"><div class="facultylistimgwarp"><img src="'+L[n].profileimg+'" alt="" /></div><div class="name" ><a href="'+L[n].contentLink+'">'+L[n].profilename+'</a></div><div class="designation" >'+L[n].designation+'</div><div class="department" >'+L[n].department+'</div></div><a class="institute" href="'+L[n].instituteLink+'" >'+L[n].institute+'</a><div class="faculty-contact"><div class="email" > <span>'+L[n].email+'</span></div><p><!-- included to move the phone no to next line --></p><div class="phone" ><img src="/etc/designs/manipal/images/fl-phone.png" /><span>'+L[n].phone+"</span></div></div></div>";
if(n==14){o+=e(".advantage-container").html()
}}}e(".load-more").remove();
if(k==0){N.empty()
}if(m<L.length-1){o+='<div class="load-more"><a href="javascript:void(0)">Load More...</a></div>'
}N.append(o);
e(".load-more").on("click",this.loadMore);
e(".faculty-contact .email span, .faculty-contact .phone span").each(function(){if(e.trim(e(this).html()).length<=1){e(this).parent().hide()
}})
};
d.filterList=function(j,k,o,u,n){var q=0,p=false,r=false,s=false,t=false,m=false;
L=[];
for(q=0;
q<h.facultyListConfig.itemList.length;
q++){if(j==""||h.facultyListConfig.itemList[q].filterInterestArea.toLowerCase()==j||e(".component-c129-a-5").length==0){p=true
}if(k==""||h.facultyListConfig.itemList[q].filterInstitution.toLowerCase()==k||e(".component-c129-a-5").length==0){r=true
}if(o==""||h.facultyListConfig.itemList[q].filterDepartment.toLowerCase()==o||e(".component-c129-a-5").length==0){s=true
}if(u==""||h.facultyListConfig.itemList[q].filterAlphabetical.toLowerCase()==u){m=true
}if(typeof n!=="undefined"&&h.facultyListConfig.itemList[q].filterSchool!=g){if(""==o||h.facultyListConfig.itemList[q].filterSchool.toLowerCase()==o||e(".component-c129-a-5").length==0){s=true
}else{s=false
}if(""==n||h.facultyListConfig.itemList[q].filterDepartment.toLowerCase()==n||e(".component-c129-a-5").length==0){t=true
}else{t=false
}if(p&&r&&s&&m&&t){L.push(h.facultyListConfig.itemList[q])
}}else{if(p&&r&&s&&m){L.push(h.facultyListConfig.itemList[q])
}}p=false;
r=false;
s=false;
t=false;
t=false;
m=false
}d.resetLoadMore();
d.renderList();
return true
};
d.resetFilters=function(){var k="",m="",j="",n="";
H.text("All");
H.attr("data-value","");
aa="";
c.text("All");
c.attr("data-value","");
U="";
c.text("All");
c.attr("data-value","");
K="";
if(e(".program-list-alphabet-sort").length!=0){d.calAlphabetCount(k,m,K)
}if(e(".sub_dept_list").is(":visible")){T.text("All");
T.attr("data-value","");
Y="";
if(e(".program-list-alphabet-sort").length!=0){d.calAlphabetCount(k,m,K,Y)
}}};
d.setFilters=function(){if(h.facultyListConfig.itemList&&h.facultyListConfig.itemList.length>0){d.resetFilters();
d.filterList(aa,U,K,O);
if(e(".sub_dept_list").is(":visible")){d.filterList(aa,U,K,O,Y)
}}};
d.loadDepartmentFacultyList=function(){if(M.filterDepartment!=""&&M.filterDepartment!=g){for(var k=0;
k<h.c29_a_5_config.institutionInfo.length;
k++){if(h.c29_a_5_config.institutionInfo[k].department.toLowerCase()==M.filterDepartment.toLowerCase()){S.text(h.c29_a_5_config.institutionInfo[k].departmentText);
K=h.c29_a_5_config.institutionInfo[k].department
}}}else{S.text("All");
K=""
}var j=M.filterDepartment;
if(j=="all"){j=""
}K=j.toLowerCase();
if(e(".sub_dept_list").is(":visible")){d.calAlphabetCount(aa,U,K,Y);
d.filterList(aa,U,K,O,Y)
}else{d.calAlphabetCount(aa,U,K);
d.filterList(aa,U,K,O)
}};
d.init=function(){if(h.facultyListConfig!=g){var n,k=/\+/g,m=/([^&=]+)=?([^&]*)/g,j=function(p){return decodeURIComponent(p.replace(k," "))
};
var o=window.location.search.substring(1);
while(n=m.exec(o)){M[j(n[1])]=j(n[2])
}d.initializeVariables();
d.setDropDownClick();
d.setFilters();
d.checkDevice();
d.initializeDDClick();
if(!e("li.dept_list").hasClass("disable")&&(typeof M.filterDepartment==="string"&&e.trim(M.filterDepartment))){d.loadDepartmentFacultyList()
}}return this
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(d,e,f){e.log=function(a){if(MODULE.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
d.departmentListFilter=(function(){function a(){var b=this;
var q,o,r,c,m;
var n=e(".dl-filter #institution-dd-option");
var p=e(".program-list-alphabet-sort .alpha-filters");
b.setInterestAreaDDClick=function(){e(".dl-filter #interest-dd-option > li").on("click",function(g){g.preventDefault();
var h=e(this).find("a").html();
e(".dl-filter #interest-dd").html(h);
e(this).siblings("li").removeClass("active").end().addClass("active")
})
};
b.setInstitutionDDClick=function(){e(".dl-filter #institution-dd-option > li").on("click",function(k){k.preventDefault();
var h=e(this).find("a").html(),j=e(this).find("a").attr("data-value");
e(".dl-filter .institution-dd span").text(h);
e(".dl-filter .institution-dd span").attr("data-value",j);
e(this).siblings("li").removeClass("active").end().addClass("active");
var g=e(this).find("a").data("value")
})
};
this.paintDom=function(){var h=d.departmentListFilterConfig;
q=h.hideInterestArea,o=h.hideInstitute,r=h.hideDepartment,c=h.hideMonth,m=h.hideYear;
var j=[],g=[];
if(!q){b.printIArea()
}if(!o){b.printInstitute()
}b.printAlphabetFilter()
};
b.printIArea=function(){var h=d.departmentListFilterConfig.listItem,j=e(".dl-filter #interest-dd-option");
var t=[],g=[];
h.sort(function(u,v){u=u.interestAreaText.toLowerCase();
v=v.interestAreaText.toLowerCase();
return u<v?-1:u>v?1:0
});
e.each(h,function(v,u){if(jQuery.inArray(u.interestArea,g)<0){g.push(u.interestArea);
t.push(u.interestAreaText)
}});
j.html('<li role="presentation" class="active"><a role="menuitem" tabindex="-1" href="#" data-value="">All</a></li>');
for(var k=0;
k<g.length;
k++){var s='<li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-value="'+g[k]+'">'+t[k]+"</a></li>";
j.append(s)
}};
b.printInstitute=function(){var h=d.departmentListFilterConfig.listItem;
var g=[],k=[];
h.sort(function(t,u){t=t.institutionText.toLowerCase();
u=u.institutionText.toLowerCase();
return t<u?-1:t>u?1:0
});
e.each(h,function(u,t){if(jQuery.inArray(t.institution,k)<0){k.push(t.institution);
g.push(t.institutionText)
}});
n.html('<li role="presentation" class="active"><a role="menuitem" tabindex="-1" href="#" data-value="">All</a></li>');
for(var j=0;
j<k.length;
j++){var s='<li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-value="'+k[j]+'">'+g[j]+"</a></li>";
n.append(s)
}};
b.printAlphabetFilter=function(){var g="";
g='<li class="atod filter" data-value="'+d.departmentListFilterConfig.alphabetFilter[0].value+'" ><a class="" href="javascript:void(0)">'+d.departmentListFilterConfig.alphabetFilter[0].text+'</a><span>(100)</span></li><li class="separator"><a href="javascript:void(0)"></a></li><li class="etoh filter" data-value="'+d.departmentListFilterConfig.alphabetFilter[1].value+'" ><a class="" href="javascript:void(0)">'+d.departmentListFilterConfig.alphabetFilter[1].text+'</a><span>(100)</span></li><li class="separator"><a href="javascript:void(0)"></a></li><li class="itol filter " data-value="'+d.departmentListFilterConfig.alphabetFilter[2].value+'" ><a class="" href="javascript:void(0)">'+d.departmentListFilterConfig.alphabetFilter[2].text+'</a><span>(100)</span></li><li class="separator"><a href="javascript:void(0)"></a></li><li class="mtop filter" data-value="'+d.departmentListFilterConfig.alphabetFilter[3].value+'" ><a class="" href="javascript:void(0)">'+d.departmentListFilterConfig.alphabetFilter[3].text+'</a><span>(100)</span></li><li class="separator"><a href="javascript:void(0)"></a></li><li class="qtot filter " data-value="'+d.departmentListFilterConfig.alphabetFilter[4].value+'" ><a class="" href="javascript:void(0)">'+d.departmentListFilterConfig.alphabetFilter[4].text+'</a><span>(100)</span></li><li class="separator"><a href="javascript:void(0)"></a></li><li class="utoz filter" data-value="'+d.departmentListFilterConfig.alphabetFilter[5].value+'" ><a class="" href="javascript:void(0)">'+d.departmentListFilterConfig.alphabetFilter[5].text+"</a><span>(100)</span></li>";
p.empty();
p.append(g)
};
this.init=function(){if(d.departmentListFilterConfig!=f){b.paintDom()
}return this
};
return this.init()
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
/*!
 * This file contains the code for the department listing.
 *
 * @project   Manipal GE
 * @date      2014-01-23
 * @author    Shreenithya, SapientNitro <skaveri@sapient.com>
 * @licensor  CLIENTNAME
 * @site      Manipal
 *
 */
(function(h,e,g){e.log=function(a){if(h.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
e.toType=(function f(a){return function(b){if(b===a){return"global"
}return({}).toString.call(b).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
}
}(this));
h.departmentList=(function(){function a(){var D=this,A=10,I=1,c=[],d=e("#department-listing .container-940"),G=e("#department-listing-wrapper .interest-dd span"),J=e("#department-listing-wrapper #interest-dd-option a"),C=e("#department-listing-wrapper .institution-dd span"),H=e("#department-listing-wrapper #institution-dd-option a"),F=e("#department-listing-wrapper .program-list-alphabet-sort ul.alpha-filters"),b=null,E=e("#department-listing-wrapper .program-list-alphabet-sort .alpha-filters li.filter"),M=null,N="",z="",P=0,K="",B=e("#program-list-alphabet-sort-mobile span.filter"),L=e("#program-list-alphabet-sort-mobile span.alpha-count"),O=false;
D.initVariables=function(){A=10,I=1,c=[],d=e("#department-listing .container-940"),G=e("#department-listing-wrapper .interest-dd span"),J=e("#department-listing-wrapper #interest-dd-option a"),C=e("#department-listing-wrapper .institution-dd span"),H=e("#department-listing-wrapper #institution-dd-option a"),F=e("#department-listing-wrapper .program-list-alphabet-sort ul.alpha-filters"),b=null,E=e("#department-listing-wrapper .program-list-alphabet-sort .alpha-filters li.filter"),M=null,N="",z="",P=0,K=""
};
D.checkDevice=function(){e(document).ready(function(){if(e("body").hasClass("manipal-mobile")){B=e("#program-list-alphabet-sort-mobile span.filter");
L=e("#program-list-alphabet-sort-mobile span.alpha-count");
O=true;
B.text(e(".program-list-alphabet-sort-mobile .filter-selected a:eq(0)").text());
L.text(e(".program-list-alphabet-sort-mobile .filter-selected span:eq(0)").text());
D.initializeDepartmentDDClick();
D.setFilters()
}})
};
D.initializeDepartmentDDClick=function(){J.off().on("click",function(){console.log("click filter");
var k=e(this).text(),j=e(this).attr("data-value");
C.text("All");
C.attr("data-value","");
K="";
N=j;
G.text(k);
G.attr("data-value",j);
if(e(".dl-filter").length!=0){D.calAlphabetCount(N,K)
}D.filterList(N,K,z);
if(O){if(e(".program-list-alphabet-sort-mobile .dropdown-menu .filter-active").length>0){e(".program-list-alphabet-sort-mobile .dropdown-menu .filter-active").trigger("click")
}else{B.text("A - D");
L.text("(0)")
}}});
H.off().on("click",function(){var k=e(this).text(),j=e(this).attr("data-value");
G.text("All");
G.attr("data-value","");
K=j;
N="";
C.text(k);
C.attr("data-value",j);
if(e(".dl-filter").length!=0){D.calAlphabetCount(N,K)
}D.filterList(N,K,z);
if(O){if(e(".program-list-alphabet-sort-mobile .dropdown-menu .filter-active").length>0){e(".program-list-alphabet-sort-mobile .dropdown-menu .filter-active").trigger("click")
}else{B.text("A - D");
L.text("(0)")
}}})
};
D.calAlphabetCount=function(m,k){var u=0,q=0,r=0,p=0,n=0,s=0,w=0,v=0,t=null;
for(w=0;
w<h.departmentListConfig.length;
w++){if(""==m&&h.departmentListConfig[w].filterInstitution==k){switch(h.departmentListConfig[w].filterAlphabetical.toLowerCase()){case"a-d":u++;
break;
case"e-h":q++;
break;
case"i-l":r++;
break;
case"m-p":p++;
break;
case"q-t":n++;
break;
case"u-z":s++;
break;
default:}}else{if(h.departmentListConfig[w].filterInterestArea==m&&""==k){switch(h.departmentListConfig[w].filterAlphabetical.toLowerCase()){case"a-d":u++;
break;
case"e-h":q++;
break;
case"i-l":r++;
break;
case"m-p":p++;
break;
case"q-t":n++;
break;
case"u-z":s++;
break;
default:}}else{if(h.departmentListConfig[w].filterInterestArea==m&&h.departmentListConfig[w].filterInstitution==k){switch(h.departmentListConfig[w].filterAlphabetical.toLowerCase()){case"a-d":u++;
break;
case"e-h":q++;
break;
case"i-l":r++;
break;
case"m-p":p++;
break;
case"q-t":n++;
break;
case"u-z":s++;
break;
default:}}else{if(""==m&&""==k){switch(h.departmentListConfig[w].filterAlphabetical.toLowerCase()){case"a-d":u++;
break;
case"e-h":q++;
break;
case"i-l":r++;
break;
case"m-p":p++;
break;
case"q-t":n++;
break;
case"u-z":s++;
break;
default:}}}}}}e(E).removeClass("filter-active");
e(E).removeClass("filter-selected");
if(u!=0){t=e("."+e(E[0]).attr("class").split(" ").shift());
t.addClass("filter-active");
e(t[1]).parent().switchClass("alpha-filters","alpha-filters-top")
}if(q!=0){t=e("."+e(E[1]).attr("class").split(" ").shift());
t.addClass("filter-active");
e(t[1]).parent().switchClass("alpha-filters","alpha-filters-top")
}if(r!=0){t=e("."+e(E[2]).attr("class").split(" ").shift());
t.addClass("filter-active");
e(t[1]).parent().switchClass("alpha-filters","alpha-filters-top")
}if(p!=0){t=e("."+e(E[3]).attr("class").split(" ").shift());
t.addClass("filter-active");
e(t[1]).parent().switchClass("alpha-filters","alpha-filters-top")
}if(n!=0){t=e("."+e(E[4]).attr("class").split(" ").shift());
t.addClass("filter-active");
e(t[1]).parent().switchClass("alpha-filters","alpha-filters-top")
}if(s!=0){t=e("."+e(E[5]).attr("class").split(" ").shift());
t.addClass("filter-active");
e(t[1]).parent().switchClass("alpha-filters","alpha-filters-top")
}var j=(e("#hideNumbers").val()=="true")?true:false;
if(j==true){if(!e(".program-list-alphabet-sort ul.alpha-filters").hasClass("dept-without-numbers")){e(".program-list-alphabet-sort ul.alpha-filters").addClass("dept-without-numbers")
}E.find("span").hide();
L.hide()
}else{for(v=0;
v<E.length;
v++){var o=e(E[v]);
switch(e(o).attr("data-value")){case"a-d":e(o).find("span").text(" ("+u+")");
break;
case"e-h":e(o).find("span").text(" ("+q+")");
break;
case"i-l":e(o).find("span").text(" ("+r+")");
break;
case"m-p":e(o).find("span").text(" ("+p+")");
break;
case"q-t":e(o).find("span").text(" ("+n+")");
break;
case"u-z":e(o).find("span").text(" ("+s+")");
break;
default:}}}F=e("#department-listing-wrapper .program-list-alphabet-sort ul");
M=F.find(".filter-active");
if(M.length>0){t=e("."+e(M[0]).attr("class").split(" ").shift());
t.addClass("filter-selected");
z=e(M[0]).attr("data-value");
if(e("#hideAlphabeticalOrder").val()=="true"){z=""
}}D.alphabetFilterClick()
};
D.alphabetFilterClick=function(){M.off().on("click",function(){var k=e(this),j=null;
M.removeClass("filter-selected");
j=e("."+e(k).attr("class").split(" ").shift());
j.addClass("filter-selected");
z=k.attr("data-value");
D.filterList(N,K,z);
if(D.filterList(N,K,z)){e("html, body").animate({scrollTop:e(".department-listing-details").eq(0).offset().top-250},"1000")
}});
e(".program-list-alphabet-sort-mobile .dropdown-menu .filter-active").click(function(m){m.preventDefault();
var j=B.text();
var k=L.text();
B.text(e(this).find("a").text());
L.text(e(this).find("span").text())
})
};
D.resetLoadMore=function(){I=1
};
D.loadMore=function(){if(((I*A)-A)>c.length){return
}I++;
D.renderList()
};
D.renderList=function(){var k=(I*A)-A,m=(I*A),o=0,j="",n=0;
var p=(e("#hideAdvantageComponent").val()=="true")?true:false;
m=(m>c.length)?c.length-1:m-1;
for(o=k;
o<=m;
o++){n++;
j+='<div class="department-listing-details" title="department listing"><h6 class="department-listing-department-name"><a title="'+c[o].departmentName+'" href="'+c[o].departmentLink+'">'+c[o].departmentName+'</a></h6><a href="'+c[o].instituteLink+'" class="department-listing-institute-name">'+c[o].instituteName+'</a><p class="department-listing-department-description"><span class="border-left-formobile"></span>'+c[o].description+"</p><p class='read-more clearfix'><a href='"+c[o].readMoreLink+"'>Read More</a></p> </div>";
if(n==5&&p==false){j+=e(".advantage-container").html()
}}e(".load-more").remove();
if(k==0){d.empty()
}if(m<c.length-1){j+='<div class="load-more"><a href="javascript:void(0)">Load More...</a></div>'
}d.append(j);
e(".load-more").on("click",this.loadMore)
};
D.filterList=function(m,k,j){var n=0;
c=[];
for(n=0;
n<h.departmentListConfig.length;
n++){if(j==""){c.push(h.departmentListConfig[n])
}else{if(m==""&&k!=""){if(h.departmentListConfig[n].filterInstitution==k&&h.departmentListConfig[n].filterAlphabetical.toLowerCase()==j){c.push(h.departmentListConfig[n])
}}else{if(m!=""&&k==""){if(h.departmentListConfig[n].filterInterestArea==m&&h.departmentListConfig[n].filterAlphabetical.toLowerCase()==j){c.push(h.departmentListConfig[n])
}}else{if(m!=""&&k!=""){if(h.departmentListConfig[n].filterInterestArea==m&&h.departmentListConfig[n].filterInstitution==k&&h.departmentListConfig[n].filterAlphabetical.toLowerCase()==j){c.push(h.departmentListConfig[n])
}}else{if(h.departmentListConfig[n].filterAlphabetical.toLowerCase()==j||e(".dl-filter").length==0){c.push(h.departmentListConfig[n])
}}}}}}c.sort(function(o,q){var p=o.departmentName.toUpperCase(),r=q.departmentName.toUpperCase();
if(p<r){return -1
}if(p>r){return 1
}return 0
});
D.resetLoadMore();
D.renderList();
return true
};
D.resetFilters=function(){var m="",j="",k="";
G.text("All");
G.attr("data-value","");
N="";
C.text("All");
C.attr("data-value","");
K="";
if(e(".dl-filter").length!=0){D.calAlphabetCount(N,K)
}};
D.setFilters=function(){if(h.departmentListConfig&&h.departmentListConfig.length>0){D.resetFilters();
D.filterList(N,K,z)
}};
D.init=function(){if(h.departmentListConfig!=g){D.initVariables();
D.initializeDepartmentDDClick();
D.setFilters();
D.checkDevice()
}return this
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
/*!
 * This file contains the code for the institute list browse program.
 *
 * @project   Manipal GE
 * @date      2013-12-24
 * @author    Shaunak Trivedi, SapientNitro <strivedi4@sapient.com>
 * @licensor  CLIENTNAME
 * @site      Manipal
 *
 */
(function(h,e,g){e.log=function(a){if(h.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
e.toType=(function f(a){return function(b){if(b===a){return"global"
}return({}).toString.call(b).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
}
}(this));
h.instituteListBrowseProgram=(function(){function a(){var b=this,j=e("#il-browse-programs .interest-search-container"),d=e("#il-browse-programs .interest-dd"),c=e("#il-browse-programs .dropdown-menu");
b.populateInterestArea=function(){if(h.browseILFilterConfig.hideInterestArea==true){j.hide()
}else{var n="",m=0,o=[];
o=h.browseILFilterConfig.itemList;
o.sort(function(p,k){p=p.text.toLowerCase();
k=k.text.toLowerCase();
return p<k?-1:p>k?1:0
});
c.empty();
n+='<li role="presentation"><a class="interest-dd-size" href="javascript:void(0)" tabindex="-1" role="menuitem" data-value="" >All</a></li>';
for(m=0;
m<o.length;
m++){n+='<li role="presentation"><a class="interest-dd-size" href="javascript:void(0)" tabindex="-1" role="menuitem" data-value="'+o[m].value+'" >'+o[m].text+"</a></li>"
}j.show();
c.append(n)
}};
this.init=function(){if(h.browseILFilterConfig!=g){b.populateInterestArea()
}}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
/*!
 * This file contains the code for the institute listing.
 *
 * @project   Manipal GE
 * @date      2013-12-24
 * @author    Shaunak Trivedi, SapientNitro <strivedi4@sapient.com>
 * @licensor  CLIENTNAME
 * @site      Manipal
 *
 */
(function(h,e,g){e.log=function(a){if(h.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
e.toType=(function f(a){return function(b){if(b===a){return"global"
}return({}).toString.call(b).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
}
}(this));
h.instituteListing=(function(){function a(){var b=this,o=10,c=1,n=e("#institute-listing"),d=[],p=e("#il-browse-programs ul.filters .interest-dd span"),m=e("#il-browse-programs #interest-dd-option a");
b.initializeVariables=function(){o=10;
c=1;
n=e("#institute-listing");
d=[];
p=e("#il-browse-programs ul.filters .interest-dd span");
m=e("#il-browse-programs #interest-dd-option a")
};
b.resetLoadMore=function(){c=1
};
b.loadMore=function(){if(((c*o)-o)>d.length){return
}c++;
b.renderList()
};
b.renderList=function(){var k=(c*o)-o,r=(c*o),s=0,j="";
var t=(e("#hideAdvantageComponent").val()=="true")?true:false;
r=(r>d.length)?d.length-1:r-1;
for(s=k;
s<=r;
s++){if(!(s==0)&&!(s%5)&&t==false){j+=e(".advantage-container").html()
}else{}j+='<div class="row container-940 selection-border"><a href="'+d[s].instituteLink+'" class="pl-item-heading bold-font" >'+d[s].instituteName+'</a><div class="pl-item-sub"><h3 class="pl-item-subheading" >'+d[s].interestArea+'</h3><div class="program-det"><div class="institute-det col-lg-12"><span class="border-left-formobile"></span><p class="light-font-color bold-font">'+d[s].itemContent+'</p></div></div></div><a href="'+d[s].readMoreLink+'" class="readmore" >Read More</a></div>'
}e(".load-more").remove();
if(k==0){n.empty()
}if(r<d.length-1){j+='<div class="load-more"><a href="javascript:void(0)">Load More...</a></div>'
}n.append(j);
e(".load-more").on("click",this.loadMore)
};
b.filterList=function(j){var k=0;
d=[];
for(k=0;
k<h.instituteListingConfig.itemList.length;
k++){if(e("#il-browse-programs").length!=0){if(j==""){d.push(h.instituteListingConfig.itemList[k])
}else{if(h.instituteListingConfig.itemList[k].filterInterestArea==j){d.push(h.instituteListingConfig.itemList[k])
}}}else{d.push(h.instituteListingConfig.itemList[k])
}}b.resetLoadMore();
b.renderList()
};
b.resetFilters=function(){var j={interestArea:p.attr("data-value")};
return j
};
b.setFilters=function(){if(h.instituteListingConfig.itemList&&h.instituteListingConfig.itemList.length>0){var j="",k=b.resetFilters();
j=k.interestArea;
m.on("click",function(){var r=e(this).text(),q=e(this).attr("data-value");
j=q;
p.text(r);
p.attr("data-value",q);
b.filterList(j)
});
b.filterList(j)
}};
b.init=function(){if(h.instituteListingConfig!=g){b.initializeVariables();
b.setFilters()
}return this
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(d,e,f){e.log=function(a){if(MODULE.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
d.searchFilter=(function(){function a(){var b=this,n=e(".search-filter .filter-active"),k=e(".search-filter ul.filters .more-dd-size span"),m=e(".search-filter #interest-dd-option a"),o=e(".search-filter ul.filters .program-dd-size span"),c=e(".search-filter #program-dd-option a");
b.setListingFiltersClick=function(){n.off().on("click",function(){var g=e(this);
n.removeClass("filter-selected");
e(".arrow-down").remove();
g.addClass("filter-selected");
if(g.parents(".dropdown-menu").length==0&&g.parents(".dropdown").length==0){g.after('<div class="arrow-down"></div>')
}});
m.off().on("click",function(){var g=e(this).text();
k.text(g)
});
c.off().on("click",function(){var g=e(this).text();
o.text(g)
})
};
this.init=function(){b.setListingFiltersClick();
return this
};
return this.init()
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(d,e,f){e.log=function(a){if(MODULE.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
d.c129a5=(function(){function a(){var p,o,q,m,b,n;
this.manipulateMenu=function(){e(".interestAreaMenu > li").on("click",function(g){g.preventDefault();
e(".dept_list").addClass("disable");
var h=e(".departmentMenu > li")[0];
e(h).siblings("li").removeClass("active").end().addClass("active");
e("#departmentMenu").html("All");
h=e(".institutionMenu > li")[0];
e(h).siblings("li").removeClass("active").end().addClass("active");
e("#institutionMenu").html("All");
if(d.c29_a_5_config.hideSubDepartment!=f){if(!e(".sub_dept_list").hasClass("disable")){e(".sub_dept_list").addClass("disable")
}e("#subDepartmentMenu").html("All")
}var j=e(this).find("a").html();
e("#interestAreaMenu").html(j);
e(this).siblings("li").removeClass("active").end().addClass("active")
});
e(".institutionMenu > li").on("click",function(k){k.preventDefault();
e(".dept_list").removeClass("disable");
var h=e(".interestAreaMenu > li")[0];
e(h).siblings("li").removeClass("active").end().addClass("active");
e("#interestAreaMenu").html("All");
var j=e(this).find("a").html();
e("#institutionMenu").html(j);
e("#departmentMenu").html("All");
if(d.c29_a_5_config.hideSubDepartment!=f){if(!e(".sub_dept_list").hasClass("disable")){e(".sub_dept_list").addClass("disable")
}e("#subDepartmentMenu").html("All")
}e(this).siblings("li").removeClass("active").end().addClass("active");
var g=e(this).find("a").data("ivalue");
c.printDept(g)
});
e(".institutionMenu > li:first").on("click",function(g){g.preventDefault();
e(".dept_list").addClass("disable")
});
e(".dept_list").on("click",function(g){g.preventDefault();
if(!e(g.target).hasClass("dropdown-toggle")){var j=e(g.target).html();
var h=e(g.target).data("ivalue");
e("#departmentMenu").html(j);
e(g.target).parents(".deptList").siblings("li").removeClass("active").end().addClass("active");
if(d.c29_a_5_config.hideSubDepartment!=f){e(".sub_dept_list").removeClass("disable");
e("#subDepartmentMenu").html("All");
c.printSubDept(h);
if(j.toLowerCase()=="all"){g.preventDefault();
e(".sub_dept_list").addClass("disable")
}}}});
e(".sub_dept_list").on("click",function(g){g.preventDefault();
if(!e(g.target).hasClass("dropdown-toggle")){var j=e(g.target).html();
var h=e(g.target).data("ivalue");
e("#subDepartmentMenu").html(j);
e(g.target).parents(".deptList").siblings("li").removeClass("active").end().addClass("active")
}});
e(".monthMenu > li").on("click",function(h){h.preventDefault();
var g=e(this).find("a").html();
e("#monthMenu").html(g);
e(this).siblings("li").removeClass("active").end().addClass("active")
});
e(".yearMenu > li").on("click",function(h){h.preventDefault();
var g=e(this).find("a").html();
e("#yearMenu").html(g);
e(this).siblings("li").removeClass("active").end().addClass("active")
})
};
this.paintDom=function(){var j=d.c29_a_5_config;
p=j.hideInterestArea,o=j.hideInstitute,q=j.hideDepartment,b=j.hideMonth,n=j.hideYear;
var u=[],w=[],g=[],v=[],h=[];
if(d.c29_a_5_config.hideSubDepartment!=f){var t=j.hideSubDepartment,k=[]
}if(!p){c.printIArea()
}if(!o){c.printInstitute()
}else{e(".dept_list").removeClass("disable");
e(".iarea_list").addClass("hidden");
e(".or-seperator").parents(".seperator").addClass("hidden");
e(".inst_list").addClass("hidden")
}if(!q){c.printDept()
}else{e(".iarea_list").addClass("hidden");
e(".seperator").addClass("hidden");
e(".inst_list").addClass("hidden");
e(".dept_list").addClass("hidden");
e(".month_list").addClass("hide_seperator")
}if(d.c29_a_5_config.hideSubDepartment!=f){if(!t){c.printSubDept()
}}if(!b){c.printMonth()
}else{e(".month_list").addClass("hidden")
}if(!n){c.printYear()
}e(".month_list").addClass("hide_seperator");
e(".year_list").addClass("hidden")
};
this.printIArea=function(){var j=d.c29_a_5_config.interestAreaInfo,k=e(".component-c129-a-5 .interestAreaMenu");
var g=[],h=[];
j.sort(function(t,u){t=t.interestAreaText.toLowerCase();
u=u.interestAreaText.toLowerCase();
return t<u?-1:t>u?1:0
});
e.each(j,function(u,t){if(jQuery.inArray(t.interestArea,h)<0){h.push(t.interestArea);
g.push(t.interestAreaText)
}});
k.html('<li role="presentation" class="active"><a role="menuitem" tabindex="-1" href="#" data-iValue="all">All</a></li>');
for(var r=0;
r<h.length;
r++){var s='<li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-iValue="'+h[r]+'">'+g[r]+"</a></li>";
k.append(s)
}};
this.printInstitute=function(){var j=d.c29_a_5_config.institutionInfo,k=e(".component-c129-a-5 .institutionMenu");
var h=[],s=[];
j.sort(function(t,u){t=t.institutionText.toLowerCase();
u=u.institutionText.toLowerCase();
return t<u?-1:t>u?1:0
});
e.each(j,function(u,t){if(jQuery.inArray(t.institution,s)<0){s.push(t.institution);
h.push(t.institutionText)
}});
k.html('<li role="presentation" class="active"><a role="menuitem" tabindex="-1" href="#" data-iValue="all">All</a></li>');
for(var r=0;
r<s.length;
r++){var g='<li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-iValue="'+s[r]+'">'+h[r]+"</a></li>";
k.append(g)
}};
this.printDept=function(u){var j=d.c29_a_5_config.institutionInfo,g=u||"*",v=e(".component-c129-a-5 .departmentMenu");
var k=[],t=[];
j.sort(function(r,s){r=r.departmentText.toLowerCase();
s=s.departmentText.toLowerCase();
return r<s?-1:r>s?1:0
});
e.each(j,function(s,r){if(g===r.institution||g==="*"){if(jQuery.inArray(r.department,t)<0){t.push(r.department);
k.push(r.departmentText)
}}});
v.html('<li role="presentation" class="active deptList"><a role="menuitem" tabindex="-1" href="#" data-iValue="all">All</a></li>');
for(var w=0;
w<t.length;
w++){var h='<li role="presentation" class="deptList"><a role="menuitem" tabindex="-1" href="#" data-iValue="'+t[w]+'">'+k[w]+"</a></li>";
v.append(h)
}};
this.printSubDept=function(t){var j=d.c29_a_5_config.institutionInfo,u=t||"*",k=e(".component-c129-a-5 .subDepartmentMenu");
var w=[],g=[];
j.sort(function(r,s){r=r.subDepartmentText.toLowerCase();
s=s.subDepartmentText.toLowerCase();
return r<s?-1:r>s?1:0
});
e.each(j,function(s,r){if(u===r.department||u==="*"){if(jQuery.inArray(r.subDepartment,g)<0){g.push(r.subDepartment);
w.push(r.subDepartmentText)
}}});
k.html('<li role="presentation" class="active"><a role="menuitem" tabindex="-1" href="#" data-iValue="all">All</a></li>');
for(var v=0;
v<g.length;
v++){var h='<li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-iValue="'+g[v]+'">'+w[v]+"</a></li>";
k.append(h)
}};
this.printMonth=function(){var j=d.c29_a_5_config.month,g=e(".component-c129-a-5 .monthMenu");
var k=[];
e.each(j,function(t,s){if(jQuery.inArray(s,k)<0){k.push(s)
}});
g.html('<li role="presentation" class="active"><a role="menuitem" tabindex="-1" href="#" data-iValue="all">All</a></li>');
for(var r=0;
r<k.length;
r++){var h='<li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-iValue="'+k[r]+'">'+k[r]+"</a></li>";
g.append(h)
}};
this.printYear=function(){var j=d.c29_a_5_config.year,k=e(".component-c129-a-5 .yearMenu");
var g=[];
e.each(j,function(t,s){if(jQuery.inArray(s,g)<0){g.push(s)
}});
k.html('<li role="presentation" class="active"><a role="menuitem" tabindex="-1" href="#" data-iValue="all">All</a></li>');
for(var r=0;
r<g.length;
r++){var h='<li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-iValue="'+g[r]+'">'+g[r]+"</a></li>";
k.append(h)
}};
var c=this;
this.init=function(){if(d.c29_a_5_config!=f){e(".dept_list").addClass("disable");
if(d.c29_a_5_config.hideSubDepartment==f){e(".sub_dept_list").hide()
}else{e(".sub_dept_list").addClass("disable")
}c.paintDom();
e(document).ready(function(){c.manipulateMenu()
})
}return this
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(d,e,f){e.log=function(a){if(MODULE.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
d.newsListComponent=(function(){function a(){var c,o,t=e(".js-news-list-1"),u=e(".js-news-list-2"),b=e(".news-list-pagination"),q=1,v=10,r=1,s=5;
this.filterData=function(){e(".dropdown-menu > li, .dept_list").on("click",function(g){g.preventDefault();
setTimeout(function(){if(!e(g.target).hasClass("dropdown-toggle")){var C=d.newsListConfig,h=[],G=false,B=false,D=false,n=false,j=false;
var m="",F="",k="",E="",H="";
if(e("#news-listing-wrapper .interestAreaMenu .active").find("a").data("ivalue")){m=e("#news-listing-wrapper .interestAreaMenu > .active").find("a").data("ivalue").toLowerCase()
}else{m="all"
}if(e("#news-listing-wrapper .institutionMenu .active").find("a").data("ivalue")){F=e("#news-listing-wrapper .institutionMenu > .active").find("a").data("ivalue").toLowerCase()
}else{F="all"
}if(e("#news-listing-wrapper .departmentMenu .active").find("a").data("ivalue")){k=e("#news-listing-wrapper .departmentMenu > .active").find("a").data("ivalue").toLowerCase()
}else{k="all"
}if(e("#news-listing-wrapper .monthMenu .active").find("a").data("ivalue")){E=e("#news-listing-wrapper .monthMenu > .active").find("a").data("ivalue").toLowerCase()
}else{E="all"
}if(e("#news-listing-wrapper .yearMenu .active").find("a").data("ivalue")){H=e("#news-listing-wrapper .yearMenu > .active").find("a").data("ivalue")+"".toLowerCase()
}else{H="all"
}e.each(C,function(x,w){G=false;
B=false;
D=false;
n=false;
j=false;
if((w.filterInterestArea.toLowerCase()===m)||(m==="all")){G=true
}if((w.filterInstitution.toLowerCase()===F)||(F==="all")){B=true
}if((w.filterDepartment.toLowerCase()===k)||(k==="all")){D=true
}if((w.filterMonth.toLowerCase()===E)||(E==="all")){n=true
}if((w.filterYear.toLowerCase()===H)||(H==="all")){j=true
}if(G&&B&&D&&n&&j){G=false;
B=false;
D=false;
n=false;
j=false;
h.push(w)
}});
t.empty();
u.empty();
if(h.length==0){e(".component-news-list .news-list-pagination").css("display","none")
}else{e(".component-news-list .news-list-pagination").css("display","block")
}q=1;
p.deptFilter(h)
}},500)
})
};
this.initPagination=function(j){var g=Object.keys(j).length,h=Math.ceil(g/10);
var k=(e("#hideAdvantageComponent").val()=="true")?true:false;
var m={currentPage:q,totalPages:h,onPageClicked:function(z,C,A,n){q=n;
var B=0,D=(q*v)-v;
t.empty();
u.empty();
e.each(j,function(x,w){if(x>=D){(B<v)?p.paintDom(w):"";
if(B==4&&q==1&&k==false){t.append(e(".advantage-container").html())
}B++
}})
}};
b.bootstrapPaginator(m);
if(g==0){e(".event-list-pagination").css("display","none")
}};
this.paintDom=function(g){var h=e("#domainValue").val();
if(g.hasImage){if(h=="MIU"){var j="<li class='news-list-item clearfix news-list-item-image-available'><a class='clickable-div' href='"+g.readMoreLink+"'><img data-src='"+g.imageLink+"' class='news-list-item-image lazyload' /><div class='news-list-item-header clearfix'><h3 class='news-list-item-title'> <a href='"+g.readMoreLink+"'>"+g.articleTitle+"</a></h3><dl class='clearfix regular_info'><dt class='date_info list_header_data first'><span class='info'>"+g.date+"</span></dt></dl></div><p class='news-list-item-details'>"+g.itemContent+"</p><div class='bottom-panel'><a class='news-list-item-read-more' href='"+g.readMoreLink+"'>Read More</a><div></a></li>"
}else{var j="<li class='news-list-item clearfix news-list-item-image-available'><a class='clickable-div' href='"+g.readMoreLink+"'><img data-src='"+g.imageLink+"' class='news-list-item-image lazyload' /><div class='news-list-item-header clearfix'><h3 class='news-list-item-title'> <a href='"+g.readMoreLink+"'>"+g.articleTitle+"</a></h3><dl class='clearfix regular_info'><dt class='date_info list_header_data first'><span class='info'>"+g.date+"</span></dt><dt class='venue_info list_header_data'><span class='info'>"+g.interestAreaValue+"</span></dt></dl></div><p class='news-list-item-details'>"+g.itemContent+"</p><div class='bottom-panel'><a class='news-list-item-read-more' href='"+g.readMoreLink+"'>Read More</a><div></a></li>"
}}else{if(h=="MIU"){var j="<li class='news-list-item clearfix'><a href='"+g.readMoreLink+"' class='news-list-item-row'></a><div class='news-list-item-header clearfix'><h3 class='news-list-item-title'> <a href='"+g.readMoreLink+"'>"+g.articleTitle+"</a></h3><dl class='clearfix regular_info'><dt class='date_info list_header_data first'><span class='info'>"+g.date+"</span></dt></dl></div><p class='news-list-item-details'>"+g.itemContent+"</p><div class='bottom-panel'><a class='news-list-item-read-more' href='"+g.readMoreLink+"'>Read More</a><div></li>"
}else{if(h=="MUNEWS"){var k=g;
var j="<li class='news-list-item clearfix news-list-item-image-available'><a class='clickable-div' href='"+g.readMoreLink+"'><img data-src='"+g.imageLink+"' class='news-list-item-image lazyload' /><div class='news-list-item-header clearfix'><h3 class='news-list-item-title'> <a href='"+g.readMoreLink+"'>"+g.articleTitle+"</a></h3><dl class='clearfix regular_info'><dt class='date_info list_header_data first'><span class='info'>"+g.date+"</span></dt></dl></div><p class='news-list-item-details'>"+g.itemContent+"</p><div class='bottom-panel'><a class='news-list-item-read-more' href='"+g.readMoreLink+"'>Read More</a><div></a></li>"
}else{var j="<li class='news-list-item clearfix'><a href='"+g.readMoreLink+"' class='news-list-item-row'></a><div class='news-list-item-header clearfix'><h3 class='news-list-item-title'> <a href='"+g.readMoreLink+"'>"+g.articleTitle+"</a></h3><dl class='clearfix regular_info'><dt class='date_info list_header_data first'><span class='info'>"+g.date+"</span></dt><dt class='venue_info list_header_data'><span class='info'>"+g.interestAreaValue+"</span></dt></dl></div><p class='news-list-item-details'>"+g.itemContent+"</p><div class='bottom-panel'><a class='news-list-item-read-more' href='"+g.readMoreLink+"'>Read More</a><div></li>"
}}}t.append(j);
(r==10)?r=0:r+=1
};
this.newsListPagination=function(){e(".news-list-pagination").on("click",function(){e("html, body").animate({scrollTop:e(".news-list-container").eq(0).offset().top-200},"1000")
})
};
this.deptFilter=function(g){var j=0;
var h=(e("#hideAdvantageComponent").val()=="true")?true:false;
e.each(g,function(m,k){(j<v)?p.paintDom(k):"";
if(j==4&&h==false){t.append(e(".advantage-container").html())
}j++
});
p.initPagination(g)
};
var p=this;
this.init=function(){if(d.newsListConfig!=f){t.empty();
u.empty();
p.deptFilter(d.newsListConfig);
e(document).ready(function(){p.filterData()
})
}p.newsListPagination();
return this
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(d,e,f){e.log=function(a){if(MODULE.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
d.eventListComponent=(function(){function a(){var c,p,r=e(".event-list-container-1"),t=e(".event-list-container-2"),b=e(".event-list-pagination"),s=1,w=10,u=1,v=5;
this.filterData=function(){e(".dropdown-menu > li, .dept_list").on("click",function(g){g.preventDefault();
setTimeout(function(){if(!e(g.target).hasClass("dropdown-toggle")){var o=d.eventListConfig,H=[],F=false,n=false,C=false,m=false,h=false;
var k="all",E="all",j="all",D="all",G="all";
if(e(".event-list-filters .firstFilter > .active").length>0){k=e(".event-list-filters .firstFilter").find("li.active a").data("ivalue").toLowerCase()
}if(e(".event-list-filters .secondFilter > .active").length>0){E=e(".event-list-filters .secondFilter > .active").find("a").data("ivalue").toLowerCase()
}if(e(".event-list-filters .thirdFilter > .active").length>0){j=e(".event-list-filters .thirdFilter > .active").find("a").data("ivalue").toLowerCase()
}if(e(".event-list-filters .monthMenu > .active").length>0){D=e(".event-list-filters .monthMenu > .active").find("a").data("ivalue").toLowerCase()
}if(e(".event-list-filters .yearMenu > .active").length>0){G=e(".event-list-filters .yearMenu > .active").find("a").data("ivalue")+"".toLowerCase()
}e.each(o,function(z,y){F=false;
n=false;
C=false;
m=false;
h=false;
if((y.filterInterestArea.toLowerCase()===k)||(k==="all")){F=true
}if(typeof y.filterCategoryArea!=="undefined"&&((y.filterCategoryArea.toLowerCase()===k)||(k==="all"))){F=true
}if((y.filterInstitution.toLowerCase()===E)||(E==="all")){n=true
}if((y.filterCountryArea.toLowerCase()===E)||(E==="all")){n=true
}if((y.filterDepartment.toLowerCase()===j)||(j==="all")){C=true
}if((y.filterCityArea.toLowerCase()===j)||(j==="all")){C=true
}if((y.filterMonth.toLowerCase()===D)||(D==="all")){m=true
}if((y.filterYear.toLowerCase()===G)||(G==="all")){h=true
}if(F&&n&&C&&m&&h){F=false;
n=false;
C=false;
m=false;
h=false;
H.push(y)
}});
r.empty();
t.empty();
if(H.length==0){e(".event-list-pagination").css("display","none");
return
}else{e(".event-list-pagination").css("display","inline-block");
s=1;
q.deptFilter(H)
}}},500)
})
};
this.initPagination=function(j){var g=Object.keys(j).length,h=Math.ceil(g/10);
var k={currentPage:s,totalPages:h,onPageClicked:function(n,A,o,m){s=m;
var z=0,B=(s*w)-w;
r.empty();
t.empty();
e.each(j,function(C,y){if(C>=B){(z<w)?q.paintDom(y):"";
if(z==4&&s==1){r.append(e(".advantage-container").html())
}z++
}})
}};
b.bootstrapPaginator(k)
};
this.exportLinkHandler=function(){e(".js-event-list-export").on("click",function(j){j.preventDefault();
var m=e(this).siblings(".export-data");
var B=e(m).data("start_date"),C=e(m).data("end_date"),D=e(m).data("venue_name"),E=e(m).data("start_time"),g=e(m).data("end_time"),n=e(m).data("event_title");
if(B!=""&&C!=""&&D!=""){var k=new Date(B);
var o=new Date(C);
B=k.toISOString();
C=o.toISOString();
var h="BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Our Company//NONSGML v1.0//EN\nBEGIN:VEVENT\nUID:me@google.com\nDTSTAMP:msgData1\nDTSTART;VALUE=DATE:"+B+"\nDTEND;VALUE=DATE:"+C+"\nATTENDEE;CN=My Self ;RSVP=TRUE:MAILTO:organizer@manipal.com\nORGANIZER;CN=Me:MAILTO::organizer@manipal.com\nLOCATION:"+D+"\nSUMMARY:"+n+"\nEND:VEVENT\nEND:VCALENDAR"
}window.open("data:text/calendar;charset=utf8,"+escape(h))
})
};
this.paintDom=function(j){var k=(j.startDate===j.endDate)?j.startDate:j.startDate+" to "+j.endDate,g=(j.startTime===j.endTime)?j.startTime:j.startTime+" to "+j.endTime,h="";
if(j.status=="true"){var h='<span class="event-status"> <img src="/etc/designs/manipal/images/ongoing-icon.png" height="16" alt="Academics Icon">Ongoing</span>'
}if(j.hasImage){var m="<li class='event-list-item clearfix event-list-item-image-available'><img src='"+j.imageLink+"' class='event-list-item-image' /><div class='event-list-item-header clearfix'><h3 class='event-list-item-title clearfix'>"+h+"<a href='"+j.readMoreLink+"'>"+j.eventTitle+"</a></h3><dl class='clearfix'><dt class='inst_name "+(j.institutionName!=""?"first":"")+" list_header_data'><a href='"+j.institutionLink+"' title='"+j.institutionName+"'>"+j.institutionName+"</a></dt><dt class='date_info "+(j.institutionName==""?"first":"")+" list_header_data'><span class='info_title'>Date:</span><span class='info'>"+k+"</span></dt><dt class='date_info list_header_data'><span class='info_title'>Time:</span><span class='info'>"+g+"</span></dt><dt class='venue_info list_header_data'><span class='info_title'>Venue:</span><span class='info'>"+j.venue+"</span></dt><dt class='category_info list_header_data last'><span class='info_title'>Category:</span><span class='info'>"+j.category+"</span></dt></dl></div><p class='event-list-item-details'><span class='border-left-formobile-image'></span>"+j.itemContent+"</p><div class='bottom-panel'><a class='event-list-item-export-event js-event-list-export' href='#'>Save to calendar</a><a class='event-list-item-read-more' href='"+j.readMoreLink+"'>Read More</a><span class='export-data' data-start_date='"+j.startDate+"' data-end_date='"+j.endDate+"' data-event_title='"+j.eventTitle+"' data-venue_name='"+j.venue+"'><div></li>"
}else{var m="<li class='event-list-item clearfix'><div class='event-list-item-header clearfix'><h3 class='event-list-item-title clearfix'>"+h+"<a href='"+j.readMoreLink+"'>"+j.eventTitle+"</a></h3><dl class='clearfix'><dt class='inst_name "+(j.institutionName!=""?"first":"")+" list_header_data'><a href='"+j.institutionLink+"' title='"+j.institutionName+"'>"+j.institutionName+"</a></dt><dt class='date_info "+(j.institutionName==""?"first":"")+" list_header_data'><span class='info_title'>Date:</span><span class='info'>"+k+"</span></dt><dt class='date_info list_header_data'><span class='info_title'>Time:</span><span class='info'>"+g+"</span></dt><dt class='venue_info list_header_data'><span class='info_title'>Venue:</span><span class='info'>"+j.venue+"</span></dt><dt class='category_info list_header_data last'><span class='info_title'>Category:</span><span class='info'>"+j.category+"</span></dt></dl></div><p class='event-list-item-details'><span class='border-left-formobile-image'></span>"+j.itemContent+"</p><div class='bottom-panel'><a class='event-list-item-export-event js-event-list-export' href='#'>Save to calendar</a><a class='event-list-item-read-more' href='"+j.readMoreLink+"'>Read More</a><span class='export-data' data-start_time='"+j.startTime+"' data-end_time='"+j.endTime+"'data-start_date='"+j.startDate+"' data-end_date='"+j.endDate+"' data-event_title='"+j.eventTitle+"' data-venue_name='"+j.venue+"'><div></li>"
}r.append(m);
(u==10)?u=0:u+=1
};
this.eventListPagination=function(){b.on("click",function(){e("html, body").animate({scrollTop:e(".event-list-container").eq(0).offset().top-200},"1000")
})
};
this.deptFilter=function(g){var h=0;
e.each(g,function(k,j){if(x!=null){if(x!=j.filterCategoryArea){return true
}}(h<w)?q.paintDom(j):"";
if(h==4){r.append(e(".advantage-container").html())
}h++
});
x=null;
q.exportLinkHandler();
q.initPagination(g)
};
var q=this;
var x=null;
this.init=function(){r.empty();
t.empty();
var g=window.location.search.split("?")[1]||null;
x=(g==null)?null:((g.split("=")[0]=="category")?g.split("=")[1]:null);
q.deptFilter(d.eventListConfig);
e(document).ready(function(){q.filterData()
});
q.eventListPagination();
return this
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(d,e,f){e.log=function(a){if(MODULE.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
d.researchListing=(function(){function a(){var n,m,o,b,k;
this.manipulateMenu=function(){e(".component-rl-filter .interestAreaMenu > li").on("click",function(h){h.preventDefault();
e(".component-rl-filter .dept_list").addClass("disable");
var j=e(".component-rl-filter .departmentMenu > li")[0];
e(j).siblings("li").removeClass("active").end().addClass("active");
e(".component-rl-filter #departmentMenu").html("All");
j=e(".component-rl-filter .institutionMenu > li")[0];
e(j).siblings("li").removeClass("active").end().addClass("active");
e(".component-rl-filter #institutionMenu").html("All");
var g=e(this).find("a").html();
e(".component-rl-filter #interestAreaMenu").html(g);
e(this).siblings("li").removeClass("active").end().addClass("active")
});
e(".component-rl-filter .institutionMenu > li").on("click",function(g){g.preventDefault();
setTimeout(function(){if(e(".component-rl-filter .institutionMenu li.active a").data("ivalue").toLowerCase()==="all"){e(".component-rl-filter .dept_list").addClass("disable")
}},500);
e(".component-rl-filter .dept_list").removeClass("disable");
var j=e(".component-rl-filter .interestAreaMenu > li")[0];
e(j).siblings("li").removeClass("active").end().addClass("active");
e(".component-rl-filter #interestAreaMenu").html("All");
var p=e(this).find("a").html();
e(".component-rl-filter #institutionMenu").html(p);
e(".component-rl-filter #departmentMenu").html("All");
e(this).siblings("li").removeClass("active").end().addClass("active");
var h=e(this).find("a").data("ivalue");
c.printDept(h)
});
e(".component-rl-filter .dept_list").on("click",function(h){h.preventDefault();
if(e(this).hasClass("disable")){return false
}else{var g=e(h.target).html();
e(".component-rl-filter #departmentMenu").html(g);
e(h.target).parents(".deptList").siblings("li").removeClass("active").end().addClass("active")
}});
e(".component-rl-filter .monthMenu > li").on("click",function(h){h.preventDefault();
var g=e(this).find("a").html();
e(".component-rl-filter #monthMenu").html(g);
e(this).siblings("li").removeClass("active").end().addClass("active")
});
e(".component-rl-filter .yearMenu > li").on("click",function(h){h.preventDefault();
var g=e(this).find("a").html();
e(".component-rl-filter #yearMenu").html(g);
e(this).siblings("li").removeClass("active").end().addClass("active")
})
};
this.paintDom=function(){var q=d.researchListFilterConfig;
n=q.hideInterestArea,m=q.hideInstitute,o=q.hideDepartment,b=q.hideMonth,k=q.hideYear;
var r=[],g=[],h=[],s=[],j=[];
if(!n){c.printIArea()
}if(!m){c.printInstitute()
}else{e(".component-rl-filter .dept_list").removeClass("disable");
e(".component-rl-filter .iarea_list").addClass("hidden");
e(".component-rl-filter .or-seperator").parents(".seperator").addClass("hidden");
e(".component-rl-filter .inst_list").addClass("hidden")
}if(!o){c.printDept()
}else{e(".component-rl-filter .iarea_list").addClass("hidden");
e(".component-rl-filter .seperator").addClass("hidden");
e(".component-rl-filter .inst_list").addClass("hidden");
e(".component-rl-filter .dept_list").addClass("hidden");
e(".component-rl-filter .month_list").addClass("hide_seperator")
}if(!b){c.printMonth()
}if(!k){c.printYear()
}};
this.printIArea=function(){var q=d.researchListFilterConfig.interestAreaInfo,r=e(".component-rl-filter .interestAreaMenu");
var h=[],j=[];
q.sort(function(p,t){p=p.interestAreaText.toLowerCase();
t=t.interestAreaText.toLowerCase();
return p<t?-1:p>t?1:0
});
e.each(q,function(t,p){if(jQuery.inArray(p.interestArea,j)<0){j.push(p.interestArea);
h.push(p.interestAreaText)
}});
r.html('<li role="presentation" class="active"><a role="menuitem" tabindex="-1" href="#" data-iValue="all">All</a></li>');
for(var s=0;
s<j.length;
s++){var g='<li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-iValue="'+j[s]+'">'+h[s]+"</a></li>";
r.append(g)
}};
this.printInstitute=function(){var q=d.researchListFilterConfig.institutionInfo,r=e(".component-rl-filter .institutionMenu");
var j=[],g=[];
q.sort(function(p,t){p=p.institutionText.toLowerCase();
t=t.institutionText.toLowerCase();
return p<t?-1:p>t?1:0
});
e.each(q,function(t,p){if(jQuery.inArray(p.institution,g)<0){g.push(p.institution);
j.push(p.institutionText)
}});
r.html('<li role="presentation" class="active"><a role="menuitem" tabindex="-1" href="#" data-iValue="all">All</a></li>');
for(var s=0;
s<g.length;
s++){var h='<li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-iValue="'+g[s]+'">'+j[s]+"</a></li>";
r.append(h)
}};
this.printDept=function(v){var s=d.researchListFilterConfig.institutionInfo,h=v||"*",w=e(".component-rl-filter .departmentMenu");
var t=[],u=[];
s.sort(function(p,q){p=p.departmentText.toLowerCase();
q=q.departmentText.toLowerCase();
return p<q?-1:p>q?1:0
});
e.each(s,function(q,p){if(h===p.institution||h==="*"){if(jQuery.inArray(p.department,u)<0){u.push(p.department);
t.push(p.departmentText)
}}});
w.html('<li role="presentation" class="active deptList"><a role="menuitem" tabindex="-1" href="#" data-iValue="all">All</a></li>');
for(var g=0;
g<u.length;
g++){var j='<li role="presentation" class="deptList"><a role="menuitem" tabindex="-1" href="#" data-iValue="'+u[g]+'">'+t[g]+"</a></li>";
w.append(j)
}};
this.printMonth=function(){var p=d.researchListFilterConfig.month,h=e(".component-rl-filter .monthMenu");
var q=[];
e.each(p,function(s,r){if(jQuery.inArray(r,q)<0){q.push(r)
}});
h.html('<li role="presentation" class="active"><a role="menuitem" tabindex="-1" href="#" data-iValue="all">All</a></li>');
for(var g=0;
g<q.length;
g++){var j='<li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-iValue="'+q[g]+'">'+q[g]+"</a></li>";
h.append(j)
}};
this.printYear=function(){var p=d.researchListFilterConfig.year,q=e(".component-rl-filter .yearMenu");
var h=[];
e.each(p,function(s,r){if(jQuery.inArray(r,h)<0){h.push(r)
}});
q.html('<li role="presentation" class="active"><a role="menuitem" tabindex="-1" href="#" data-iValue="all">All</a></li>');
for(var g=0;
g<h.length;
g++){var j='<li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-iValue="'+h[g]+'">'+h[g]+"</a></li>";
q.append(j)
}};
var c=this;
this.init=function(){if(d.researchListFilterConfig!=f){e(".component-rl-filter .dept_list").addClass("disable");
c.paintDom();
e(document).ready(function(){c.manipulateMenu()
})
}return this
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
/*!
 * This file contains the code for the Initialzing Ranking Carousel.
 *
 * @project   Manipal GE
 * @date      2014-05-12
 * @author    Syed Tanzeem, SapientNitro <stanzeem@sapient.com>
 * @licensor  CLIENTNAME
 * @site      Manipal
 *
 */
(function(d,e,f){e.log=function(a){if(MODULE.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
d.chequeredPeople=(function(){function a(){var b=this;
this.init=function(){b.chequeredPeopleListing();
b.checkIfEmpty()
};
this.chequeredPeopleListing=function(){var c=e(".faculty-list-container").find("li").length;
if(c<4){e(".faculty-list-container li").addClass("faculty-first")
}};
this.checkIfEmpty=function(){if(e(".faculty-quotes").is(":empty")){e(".faculty-quotes").css("background","none")
}};
return this.init()
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(d,e,f){e.log=function(a){if(MODULE.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
d.researchListComponent=(function(){function a(){var r,s,c=e(".component-research-list .research-list-container-1"),q=e(".component-research-list .research-list-container-2"),b=e(".component-research-list .research-list-pagination"),x=e(".component-rl-filter .dept_list button"),u=1,y=10,v=1,w=5,z={};
this.filterData=function(){e(".component-rl-filter .dropdown-menu > li, .component-rl-filter .dept_list").on("click",function(g){g.preventDefault();
setTimeout(function(){if(!e(g.target).hasClass("dropdown-toggle")){var n=d.researchListConfig,G=[],E=false,m=false,o=false,k=false,H=false;
var j="",D="",h="",p="",F="";
if(e("#research-listing-wrapper .component-rl-filter .interestAreaMenu > .active").find("a").data("ivalue")){j=e("#research-listing-wrapper .component-rl-filter .interestAreaMenu > .active").find("a").data("ivalue").toLowerCase()
}else{j="all"
}if(e("#research-listing-wrapper .component-rl-filter .institutionMenu > .active").find("a").data("ivalue")){D=e("#research-listing-wrapper .component-rl-filter .institutionMenu > .active").find("a").data("ivalue").toLowerCase()
}else{D="all"
}if(e("#research-listing-wrapper .component-rl-filter .departmentMenu > .active").find("a").data("ivalue")){h=e("#research-listing-wrapper .component-rl-filter .departmentMenu > .active").find("a").data("ivalue").toLowerCase()
}else{h="all"
}if(e("#research-listing-wrapper .component-rl-filter .monthMenu > .active").find("a").data("ivalue")){p=e("#research-listing-wrapper .component-rl-filter .monthMenu > .active").find("a").data("ivalue").toLowerCase()
}else{p="all"
}if(e("#research-listing-wrapper .component-rl-filter .yearMenu > .active").find("a").data("ivalue")){F=e("#research-listing-wrapper .component-rl-filter .yearMenu > .active").find("a").data("ivalue")+"".toLowerCase()
}else{F="all"
}e.each(n,function(B,A){E=false;
m=false;
o=false;
k=false;
H=false;
if((A.filterInterestArea.toLowerCase()===j)||(j==="all")){E=true
}if((A.filterInstitution.toLowerCase()===D)||(D==="all")){m=true
}if((A.filterDepartment.toLowerCase()===h)||(h==="all")){o=true
}if((A.filterMonth.toLowerCase()===p)||(p==="all")){k=true
}if((A.filterYear.toLowerCase()===F)||(F==="all")){H=true
}if(E&&m&&o&&k&&H){E=false;
m=false;
o=false;
k=false;
H=false;
G.push(A)
}});
c.empty();
q.empty();
if(G.length==0){return
}else{u=1;
t.deptFilter(G)
}}},500)
})
};
this.initPagination=function(j){var g=Object.keys(j).length,h=Math.ceil(g/10);
var k={currentPage:u,totalPages:h,onPageClicked:function(m,p,n,B){u=B;
var o=0,A=(u*y)-y;
c.empty();
q.empty();
e.each(j,function(C,D){if(C>=A){(o<y)?t.paintDom(D):"";
if(o==4&&u==1){c.append(e(".advantage-container").html())
}o++
}})
}};
b.bootstrapPaginator(k)
};
this.paintDom=function(h){var k;
var j=(h.startDate===h.endDate)?h.startDate:h.startDate+" to "+h.endDate;
var m="";
for(var g=0;
g<h.researcherName.length;
g++){m+='<dt><a href="'+h.researcherName[g].url+'">'+h.researcherName[g].name+"</a></dt>"
}k='<li class="separator clearfix">';
if(h.hasImage){k+='<div class="image-part"><img src="'+h.imagePath+'" /></div>';
k+='<div class="content-part"><H2><a>'+h.researchTitle+'</a></H2><dl class="subline pull-left"><dt class="subline-date">'+h.datePublished+'</dt><dt class="subline-interestarea">'+h.interestArea+'</dt> </dl><dl class="subline-patentowner ismobilecheck">'+m+'</dl></div><div><p class="patent-content clearfix"><span class="border-left-formobile-image"></span>'+h.description+'</p><p class="patent-readmore clearfix"></p></div></li>'
}else{k+='<div class="content-part-without-image"><H2><a>'+h.researchTitle+'</a></H2><dl class="subline pull-left"><dt class="subline-date">'+h.datePublished+'</dt><dt class="subline-interestarea">'+h.interestArea+'</dt> </dl><dl class="subline-patentowner">'+m+'</dl><p class="patent-content clearfix"><span class="border-left-formobile-image"></span>'+h.description+'</p><p class="patent-readmore clearfix"></p></div></li>'
}c.append(k);
(v==10)?v=0:v+=1
};
this.researchleftNav=function(){e(".research-list-pagination").on("click",function(){e("html, body").animate({scrollTop:e(".research-list-container").eq(0).offset().top-200},"1000")
})
};
this.deptFilter=function(g){var h=0;
v=0;
e.each(g,function(k,j){(h<y)?t.paintDom(j):"";
if(h==4){c.append(e(".advantage-container").html())
}h++
});
t.initPagination(g)
};
this.loadDepartmentResearchList=function(){var k="all",n="all",m="all",h="all",j="all";
if(z.filterDepartment!=""&&z.filterDepartment!=f){for(var o=0;
o<d.researchListFilterConfig.institutionInfo.length;
o++){if(d.researchListFilterConfig.institutionInfo[o].department.toLowerCase()==z.filterDepartment.toLowerCase()){x.text(d.researchListFilterConfig.institutionInfo[o].departmentText);
m=d.researchListFilterConfig.institutionInfo[o].department
}}}else{x.text("All");
m=""
}var g=(typeof z.filterDepartment==="string")?z.filterDepartment:"";
if(g=="all"){g=""
}m=g.toLowerCase();
t.loadData(k,n,m,h,j)
};
this.loadData=function(j,m,k,g,h){setTimeout(function(){var p=d.researchListConfig,F=[],D=false,C=false,E=false,o=false,n=false;
e.each(p,function(B,A){D=false;
C=false;
E=false;
o=false;
n=false;
if((A.filterInterestArea.toLowerCase()===j)||(j==="all")){D=true
}if((A.filterInstitution.toLowerCase()===m)||(m==="all")){C=true
}if((A.filterDepartment.toLowerCase()===k)||(k==="all")){E=true
}if((A.filterMonth.toLowerCase()===g)||(g==="all")){o=true
}if((A.filterYear.toLowerCase()===h)||(h==="all")){n=true
}if(D&&C&&E&&o&&n){D=false;
C=false;
E=false;
o=false;
n=false;
F.push(A)
}});
c.empty();
q.empty();
if(F.length==0){return
}else{u=1;
t.deptFilter(F)
}},500)
};
var t=this;
this.init=function(){if(d.researchListConfig!=f){var k,h=/\+/g,j=/([^&=]+)=?([^&]*)/g,g=function(n){return decodeURIComponent(n.replace(h," "))
};
var m=window.location.search.substring(1);
while(k=j.exec(m)){z[g(k[1])]=g(k[2])
}c.empty();
q.empty();
t.deptFilter(d.researchListConfig);
if(typeof z.filterDepartment==="string"&&e.trim(z.filterDepartment)){t.loadDepartmentResearchList()
}e(document).ready(function(){t.filterData()
})
}t.researchleftNav();
return this
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(d,e,f){e.log=function(a){if(MODULE.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
d.publicationListComponent=(function(){function a(){var c,p,v=e(".publication-list-container"),b=e(".publication-list-pagination"),s=e("#publication-listing-wrapper .dept_list button"),r=1,t=10,o=0,u={};
this.filterData=function(){e(".dropdown-menu > li, .dept_list").on("click",function(g){g.preventDefault();
setTimeout(function(){var C=d.publicationListConfig,h=[],G=false,B=false,D=false,n=false,j=false;
var m="",F="",k="",E="",H="";
if(e("#publication-listing-wrapper .interestAreaMenu > .active").find("a").data("ivalue")){m=e("#publication-listing-wrapper .interestAreaMenu > .active").find("a").data("ivalue").toLowerCase()
}else{m="all"
}if(e("#publication-listing-wrapper .institutionMenu > .active").find("a").data("ivalue")){F=e("#publication-listing-wrapper .institutionMenu > .active").find("a").data("ivalue").toLowerCase()
}else{F="all"
}if(e("#publication-listing-wrapper .departmentMenu > .active").find("a").data("ivalue")){k=e("#publication-listing-wrapper .departmentMenu > .active").find("a").data("ivalue").toLowerCase()
}else{k="all"
}if(e("#publication-listing-wrapper .monthMenu > .active").find("a").data("ivalue")){E=e("#publication-listing-wrapper .monthMenu > .active").find("a").data("ivalue").toLowerCase()
}else{E="all"
}if(e("#publication-listing-wrapper .yearMenu > .active").find("a").data("ivalue")){H=e("#publication-listing-wrapper .yearMenu > .active").find("a").data("ivalue")+"".toLowerCase()
}else{H="all"
}e.each(C,function(x,w){G=false;
B=false;
D=false;
n=false;
j=false;
if((w.filterInterestArea.toLowerCase()===m)||(m==="all")){G=true
}if((w.filterInstitution.toLowerCase()===F)||(F==="all")){B=true
}if((w.filterDepartment.toLowerCase()===k)||(k==="all")){D=true
}if((w.filterMonth.toLowerCase()===E)||(E==="all")){n=true
}if((w.filterYear.toLowerCase()===H)||(H==="all")){j=true
}if(G&&B&&D&&n&&j){G=false;
B=false;
D=false;
n=false;
j=false;
h.push(w)
}});
v.empty();
if(h.length==0){return
}else{r=1;
q.deptFilter(h)
}},500)
})
};
this.initPagination=function(j){var g=Object.keys(j).length,h=Math.ceil(g/10);
var k={currentPage:r,totalPages:h,shouldShowPage:function(w,n,m){switch(w){case"first":case"last":return false;
default:return true
}},onPageClicked:function(y,B,z,n){o=0;
r=n;
var A=0,m=(r*t)-t;
v.empty();
e.each(j,function(x,w){if(x>=m){(A<t)?q.paintDom(w):"";
++A
}})
}};
b.bootstrapPaginator(k)
};
this.paintDom=function(g){o++;
var h="";
for(var k=0;
k<g.authorNameAndLink.length;
k++){h+='<dt><a href="'+g.authorNameAndLink[k].linkUrl+'" class="publication-author-name" title="'+g.authorNameAndLink[k].name+'">'+g.authorNameAndLink[k].name+"</a></dt>"
}var j='<div class="publication-list-item"><h2 class="publication-title"><a>'+g.publicationTitle+'</a></h2><dl class="subline pull-left"><dt class="subline-date noborder">'+g.dated+'</dt><dt class="subline-interestarea">'+g.interestAreaText+'</dt></dl><div class="isMobileCheck"><dl class="subline-patentowner">'+h+'</dl></div><p class="publication-desc clearfix"><span class="border-left-formobile"></span>'+g.itemContent+'</p><p class="publication-export-event"></p></div>';
if(o==5){j+=e(".publication-advantage-container").html()
}v.append(j)
};
this.deptFilter=function(g){var h=0;
e.each(g,function(k,j){(h<t)?q.paintDom(j):"";
++h
});
q.initPagination(g)
};
this.loadDepartmentPublicationList=function(){var k="all",n="all",m="all",h="all",j="all";
if(u.filterDepartment!=""&&u.filterDepartment!=f){for(var w=0;
w<d.c29_a_5_config.institutionInfo.length;
w++){if(d.c29_a_5_config.institutionInfo[w].department.toLowerCase()==u.filterDepartment.toLowerCase()){s.text(d.c29_a_5_config.institutionInfo[w].departmentText);
m=d.c29_a_5_config.institutionInfo[w].department
}}}else{s.text("All");
m=""
}var g=(typeof u.filterDepartment==="string")?u.filterDepartment:"";
if(g=="all"){g=""
}m=g.toLowerCase();
q.loadData(k,n,m,h,j)
};
this.loadData=function(j,m,k,g,h){setTimeout(function(){var C=d.publicationListConfig,A=[],n=false,D=false,E=false,B=false,F=false;
e.each(C,function(w,x){n=false;
D=false;
E=false;
B=false;
F=false;
if((x.filterInterestArea.toLowerCase()===j)||(j)){n=true
}if((x.filterInstitution.toLowerCase()===m)||(m==="all")){D=true
}if((x.filterDepartment.toLowerCase()===k)||(k==="all")){E=true
}if((x.filterMonth.toLowerCase()===g)||(g==="all")){B=true
}if((x.filterYear.toLowerCase()===h)||(h==="all")){F=true
}if(n&&D&&E&&B&&F){n=false;
D=false;
E=false;
B=false;
F=false;
A.push(x)
}});
v.empty();
if(A.length==0){return
}else{r=1;
q.deptFilter(A)
}},500)
};
var q=this;
this.init=function(){if(d.publicationListConfig!=f){var k,h=/\+/g,j=/([^&=]+)=?([^&]*)/g,g=function(n){return decodeURIComponent(n.replace(h," "))
};
var m=window.location.search.substring(1);
while(k=j.exec(m)){u[g(k[1])]=g(k[2])
}v.empty();
q.deptFilter(d.publicationListConfig);
e(document).ready(function(){q.filterData()
});
if(typeof u.filterDepartment==="string"&&e.trim(u.filterDepartment)){q.loadDepartmentPublicationList()
}}return this
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
/*!
 * This file contains the code for the profile details.
 *
 * @project   Manipal GE
 * @date      2014-01-29
 * @author    Malarvannan S, SapientNitro <smalarvannan@sapient.com>
 * @licensor  CLIENTNAME
 * @site      Manipal
 *
 */
(function(d,e,f){e.log=function(a){if(MODULE.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
d.patentListComponent=(function(){function a(){var p,r,q=e(".patent-list-container"),b=e(".list-pagination"),c=e("#list-advantage-module"),v=e("#patent-listing-wrapper .dept_list button"),t=1,w=10,u=0,x={};
this.filterData=function(){e(".dropdown-menu > li, .dept_list").on("click",function(g){g.preventDefault();
setTimeout(function(){var o=d.patentListConfig,H=[],F=false,n=false,C=false,m=false,h=false;
var k="all",E="all",j="all",D="all",G="all";
if(e("#patent-listing-wrapper .interestAreaMenu > .active").length>0){k=e("#patent-listing-wrapper .interestAreaMenu").find("li.active a").data("ivalue").toLowerCase()
}if(e("#patent-listing-wrapper .institutionMenu > .active").length>0){E=e("#patent-listing-wrapper .institutionMenu > .active").find("a").data("ivalue").toLowerCase()
}if(e("#patent-listing-wrapper .departmentMenu > .active").length>0){j=e("#patent-listing-wrapper .departmentMenu > .active").find("a").data("ivalue").toLowerCase()
}if(e("#patent-listing-wrapper .monthMenu > .active").length>0){D=e("#patent-listing-wrapper .monthMenu > .active").find("a").data("ivalue").toLowerCase()
}if(e("#patent-listing-wrapper .yearMenu > .active").length>0){G=e("#patent-listing-wrapper .yearMenu > .active").find("a").data("ivalue")+"".toLowerCase()
}e.each(o,function(z,y){F=false;
n=false;
C=false;
m=false;
h=false;
if((y.filterInterestArea.toLowerCase()===k)||(k==="all")){F=true
}if((y.filterInstitution.toLowerCase()===E)||(E==="all")){n=true
}if((y.filterDepartment.toLowerCase()===j)||(j==="all")){C=true
}if((y.filterMonth.toLowerCase()===D)||(D==="all")){m=true
}if((y.filterYear.toLowerCase()===G)||(G==="all")){h=true
}if(F&&n&&C&&m&&h){F=false;
n=false;
C=false;
m=false;
h=false;
H.push(y)
}});
q.empty();
if(H.length!=0){t=1;
u=0
}s.deptFilter(H)
},500)
})
};
this.initPagination=function(j){var g=Object.keys(j).length,h=Math.ceil(g/10);
var k={currentPage:t,totalPages:h,shouldShowPage:function(o,n,m){switch(o){case"first":case"last":return false;
default:return true
}},onPageClicked:function(n,A,o,m){t=m;
if(t==1){u=0
}var z=0,B=(t*w)-w;
q.empty();
e.each(j,function(C,y){if(C>=B){(z<w)?s.paintDom(y):"";
++z
}})
}};
if(g>0){b.bootstrapPaginator(k)
}else{b.empty()
}};
this.paintDom=function(m){var g="",j=m.patentOwners,k=j.length;
var o=(e("#hideAdvantageComponent").val()=="true")?true:false;
for(var h=0;
h<k;
h++){g+="<dt><a href='"+j[h].linkUrl+"'>"+j[h].ownerName+"</a></dt>"
}var n="<div class='list-container'><h3><a href='"+m.readMoreLink+"'>"+m.patentTitle+"</a></h3><dl class='subline pull-left'><dt class='subline-date'>"+m.patentDate+"</dt><dt class='subline-interestarea'>"+m.interestArea+"</dt></dl><dl class='subline-patentowner'>"+g+"</dl><p class='list-desc clearfix'><span class=\"border-left-formobile-image\"></span>"+m.listContent+"</p></div>";
if(u==4&&t==1&&o==false){n+=c.html()
}q.append(n);
u++
};
this.deptFilter=function(g){var h=0;
e.each(g,function(k,j){(h<w)?s.paintDom(j):"";
h++
});
s.initPagination(g)
};
this.loadDepartmentPatentList=function(){var k="all",n="all",m="all",h="all",j="all";
if(x.filterDepartment!=""&&x.filterDepartment!=f){for(var o=0;
o<d.c29_a_5_config.institutionInfo.length;
o++){if(d.c29_a_5_config.institutionInfo[o].department.toLowerCase()==x.filterDepartment.toLowerCase()){v.text(d.c29_a_5_config.institutionInfo[o].departmentText);
m=d.c29_a_5_config.institutionInfo[o].department
}}}else{v.text("All");
m=""
}var g=(typeof x.filterDepartment==="string")?x.filterDepartment:"";
if(g=="all"){g=""
}m=g.toLowerCase();
s.loadData(k,n,m,h,j)
};
this.loadData=function(j,m,k,g,h){setTimeout(function(){var C=d.patentListConfig,o=[],F=false,D=false,n=false,B=false,E=false;
e.each(C,function(z,y){F=false;
D=false;
n=false;
B=false;
E=false;
if((y.filterInterestArea.toLowerCase()===j)||(j==="all")){F=true
}if((y.filterInstitution.toLowerCase()===m)||(m==="all")){D=true
}if((y.filterDepartment.toLowerCase()===k)||(k==="all")){n=true
}if((y.filterMonth.toLowerCase()===g)||(g==="all")){B=true
}if((y.filterYear.toLowerCase()===h)||(h==="all")){E=true
}if(F&&D&&n&&B&&E){F=false;
D=false;
n=false;
B=false;
E=false;
o.push(y)
}});
q.empty();
if(o.length!=0){t=1;
u=0
}s.deptFilter(o)
},500)
};
var s=this;
this.init=function(){if(d.patentListConfig!=f){var k,h=/\+/g,j=/([^&=]+)=?([^&]*)/g,g=function(n){return decodeURIComponent(n.replace(h," "))
};
var m=window.location.search.substring(1);
while(k=j.exec(m)){x[g(k[1])]=g(k[2])
}q.empty();
s.deptFilter(d.patentListConfig);
if(typeof x.filterDepartment==="string"&&e.trim(x.filterDepartment)){s.loadDepartmentPatentList()
}e(document).ready(function(){s.filterData()
})
}return this
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(d,e,f){d.c129a12=(function(){function a(){var o,n,m,b,k;
this.manipulateMenu=function(){e(".categoryMenu > li").on("click",function(h){h.preventDefault();
e(".dept_list").addClass("disable");
var j=e(".cityMenu > li")[0];
e(j).siblings("li").removeClass("active").end().addClass("active");
e("#cityMenu").html("All");
j=e(".countryMenu > li")[0];
e(j).siblings("li").removeClass("active").end().addClass("active");
e("#countryMenu").html("All");
var g=e(this).find("a").html();
e("#categoryMenu").html(g);
e(this).siblings("li").removeClass("active").end().addClass("active")
});
e(".countryMenu > li").on("click",function(g){g.preventDefault();
e(".dept_list").removeClass("disable");
var j=e(".categoryMenu > li")[0];
e(j).siblings("li").removeClass("active").end().addClass("active");
e("#categoryMenu").html("All");
var p=e(this).find("a").html();
e("#countryMenu").html(p);
e("#cityMenu").html("All");
e(this).siblings("li").removeClass("active").end().addClass("active");
var h=e(this).find("a").data("ivalue");
c.printDept(h)
});
e(".dept_list").on("click",function(h){h.preventDefault();
if(!e(h.target).hasClass("dropdown-toggle")){var g=e(h.target).html();
e("#cityMenu").html(g);
e(h.target).parents(".deptList").siblings("li").removeClass("active").end().addClass("active")
}});
e(".monthMenu > li").on("click",function(h){h.preventDefault();
var g=e(this).find("a").html();
e("#monthMenu").html(g);
e(this).siblings("li").removeClass("active").end().addClass("active")
});
e(".yearMenu > li").on("click",function(h){h.preventDefault();
var g=e(this).find("a").html();
e("#yearMenu").html(g);
e(this).siblings("li").removeClass("active").end().addClass("active")
})
};
this.paintDom=function(){var q=d.c129_a_12_config;
o=q.hidecategory,n=q.hideInstitute,m=q.hidecity,b=q.hideMonth,k=q.hideYear;
var r=[],g=[],h=[],s=[],j=[];
if(!o){c.printIArea()
}if(!n){c.printInstitute()
}else{e(".dept_list").removeClass("disable");
e(".iarea_list").addClass("hidden");
e(".or-seperator").parents(".seperator").addClass("hidden");
e(".inst_list").addClass("hidden")
}if(!m){c.printDept()
}else{e(".iarea_list").addClass("hidden");
e(".seperator").addClass("hidden");
e(".inst_list").addClass("hidden");
e(".dept_list").addClass("hidden");
e(".month_list").addClass("hide_seperator")
}if(!b){c.printMonth()
}if(!k){c.printYear()
}};
this.printIArea=function(){var y=d.c129_a_12_config.categoryInfo,u=window.location.search.split("?")[1]||null,x=(u==null)?null:u.split("=")[1],v=e(".component-c129-a-12 .categoryMenu");
var g=[],h=[];
e.each(y,function(q,p){if(jQuery.inArray(p.category,h)<0){h.push(p.category);
g.push(p.categoryText)
}});
v.html('<li role="presentation" class="active"><a role="menuitem" tabindex="-1" href="#" data-iValue="all">All</a></li>');
for(var j=0;
j<h.length;
j++){var w='<li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-iValue="'+h[j]+'">'+g[j]+"</a></li>";
v.append(w)
}if(x!=null){var t=e(".categoryMenu > li");
e.each(t,function(r,p){var q=e(this).find("a");
if(q.data("ivalue")==x){e("#categoryMenu").html(q.html());
e(this).siblings("li").removeClass("active").end().addClass("active")
}})
}};
this.printInstitute=function(){var q=d.c129_a_12_config.countryInfo,r=e(".component-c129-a-12 .countryMenu");
var j=[],g=[];
e.each(q,function(t,p){if(jQuery.inArray(p.country,g)<0){g.push(p.country);
j.push(p.countryText)
}});
r.html('<li role="presentation" class="active"><a role="menuitem" tabindex="-1" href="#" data-iValue="all">All</a></li>');
for(var s=0;
s<g.length;
s++){var h='<li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-iValue="'+g[s]+'">'+j[s]+"</a></li>";
r.append(h)
}};
this.printDept=function(v){var s=d.c129_a_12_config.countryInfo,g=v||"*",h=e(".component-c129-a-12 .cityMenu");
var t=[],u=[];
e.each(s,function(q,p){if(g===p.country||g==="*"){if(jQuery.inArray(p.city,u)<0){u.push(p.city);
t.push(p.cityText)
}}});
h.html('<li role="presentation" class="active deptList"><a role="menuitem" tabindex="-1" href="#" data-iValue="all">All</a></li>');
for(var w=0;
w<u.length;
w++){var j='<li role="presentation" class="deptList"><a role="menuitem" tabindex="-1" href="#" data-iValue="'+u[w]+'">'+t[w]+"</a></li>";
h.append(j)
}};
this.printMonth=function(){var p=d.c129_a_12_config.month,h=e(".component-c129-a-12 .monthMenu");
var q=[];
e.each(p,function(s,r){if(jQuery.inArray(r,q)<0){q.push(r)
}});
h.html('<li role="presentation" class="active"><a role="menuitem" tabindex="-1" href="#" data-iValue="all">All</a></li>');
for(var g=0;
g<q.length;
g++){var j='<li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-iValue="'+q[g]+'">'+q[g]+"</a></li>";
h.append(j)
}};
this.printYear=function(){var p=d.c129_a_12_config.year,q=e(".component-c129-a-12 .yearMenu");
var h=[];
e.each(p,function(s,r){if(jQuery.inArray(r,h)<0){h.push(r)
}});
q.html('<li role="presentation" class="active"><a role="menuitem" tabindex="-1" href="#" data-iValue="all">All</a></li>');
for(var g=0;
g<h.length;
g++){var j='<li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-iValue="'+h[g]+'">'+h[g]+"</a></li>";
q.append(j)
}};
var c=this;
this.init=function(){e(".dept_list").addClass("disable");
c.paintDom();
e(document).ready(function(){c.manipulateMenu()
});
return this
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(d,e,f){e.log=function(a){if(MODULE.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
d.clubListComponent=(function(){function a(){var c,q,o=e(".component-club-list .club-list-container-1"),p=e(".component-club-list .club-list-container-2"),b=e(".component-club-list .club-list-pagination"),s=1,v=10,t=1,u=5;
this.filterData=function(){e(".component-c129-a-6 .dropdown-menu > li, .component-c129-a-6 .dept_list").on("click",function(g){g.preventDefault();
setTimeout(function(){if(!e(g.target).hasClass("dropdown-toggle")){var B=d.clubListConfig,h=[],F=false,n=false,C=false,D=d.c29_a_6_config.hideInterestArea,j=d.c29_a_6_config.hideInstitute,A=d.c29_a_6_config.hideDepartment;
if(!D&&!j&&!A){var m=e(".component-c129-a-6 .interestAreaMenu > .active").find("a").data("ivalue").toLowerCase(),E=e(".component-c129-a-6 .institutionMenu > .active").find("a").data("ivalue").toLowerCase(),k=e(".component-c129-a-6 .departmentMenu > .active").find("a").data("ivalue").toLowerCase();
e.each(B,function(w,x){F=false;
n=false;
C=false;
if((x.interestArea.toLowerCase()===m)||(m==="all")){F=true
}if((x.institution.toLowerCase()===E)||(E==="all")){n=true
}if((x.department.toLowerCase()===k)||(k==="all")){C=true
}if(F&&n&&C){F=false;
n=false;
C=false;
h.push(x)
}})
}else{if(D&&j&&!A){var k=e(".departmentMenu > .active").find("a").data("ivalue").toLowerCase();
e.each(B,function(w,x){C=false;
if((x.department.toLowerCase()===k)||(k==="all")){C=true
}if(C){C=false;
h.push(x)
}})
}}o.empty();
p.empty();
if(h.length==0){return
}else{r.deptFilter(h)
}}},500)
})
};
this.initPagination=function(j){var g=Object.keys(j).length,h=Math.ceil(g/10);
var k={currentPage:s,totalPages:h,onPageClicked:function(y,B,z,n){s=n;
var A=0,m=(s*v)-v;
o.empty();
p.empty();
e.each(j,function(x,w){if(x>=m){(A<v)?r.paintDom(w):"";
++A
}})
}};
b.bootstrapPaginator(k)
};
this.paintDom=function(g){if(g.hasImage){var h="<li class='club-list-item clearfix club-list-item-image-available'><img src='"+g.imageLink+"' class='club-list-item-image' /><div class='club-list-item-header clearfix'><h3 class='club-list-item-title'><a href='"+g.readMoreLink+"'>"+g.clubTitle+"</a></h3><p class='club-list-item-info'>Members: "+g.noOfMembers+"</P></div><p class='club-list-item-details'>"+g.itemContent+"</p><a class='club-list-item-read-more' href='"+g.readMoreLink+"'>Read More</a></li>"
}else{var h="<li class='club-list-item clearfix'><div class='club-list-item-header clearfix'><h3 class='club-list-item-title'><a href='"+g.readMoreLink+"'>"+g.clubTitle+"</a></h3><p class='club-list-item-info'>Members: "+g.noOfMembers+"</P></div><p class='club-list-item-details'>"+g.itemContent+"</p><a class='club-list-item-read-more' href='"+g.readMoreLink+"'>Read More</a></li>"
}(t<=5)?o.append(h):p.append(h);
(t==10)?t=0:t+=1
};
this.deptFilter=function(g){var j=0;
var h=(e("#hideAdvantageComponent").val()=="true")?true:false;
e.each(g,function(m,k){(j<v)?r.paintDom(k):"";
if(j==5&&h==false){o.append(e(".advantage-container").html())
}++j
});
r.initPagination(g)
};
var r=this;
this.init=function(){o.empty();
p.empty();
r.deptFilter(d.clubListConfig);
e(document).ready(function(){r.filterData()
});
return this
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(d,e,f){e.log=function(a){if(MODULE.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
d.c129a6=(function(){function a(){var j,c,k;
this.manipulateMenu=function(){e(".component-c129-a-6 .interestAreaMenu > li").on("click",function(h){h.preventDefault();
e(".component-c129-a-6 .dept_list").addClass("disable");
var m=e(".component-c129-a-6 .departmentMenu > li")[0];
e(m).siblings("li").removeClass("active").end().addClass("active");
e(".component-c129-a-6 #departmentMenu").html("All");
m=e(".component-c129-a-6 .institutionMenu > li")[0];
e(m).siblings("li").removeClass("active").end().addClass("active");
e(".component-c129-a-6 #institutionMenu").html("All");
var g=e(this).find("a").html();
e(".component-c129-a-6 #interestAreaMenu").html(g);
e(this).siblings("li").removeClass("active").end().addClass("active")
});
e(".component-c129-a-6 .institutionMenu > li").on("click",function(h){h.preventDefault();
e(".component-c129-a-6 .dept_list").removeClass("disable");
var n=e(".interestAreaMenu > li")[0];
e(n).siblings("li").removeClass("active").end().addClass("active");
e(".component-c129-a-6 #interestAreaMenu").html("All");
var g=e(this).find("a").html();
e(".component-c129-a-6 #institutionMenu").html(g);
e(".component-c129-a-6 #departmentMenu").html("All");
e(this).siblings("li").removeClass("active").end().addClass("active");
var m=e(this).find("a").data("ivalue");
b.printDept(m)
});
e(".component-c129-a-6 .dept_list").on("click",function(h){h.preventDefault();
if(!e(h.target).hasClass("dropdown-toggle")){var g=e(h.target).html();
e(".component-c129-a-6 #departmentMenu").html(g);
e(h.target).parents(".deptList").siblings("li").removeClass("active").end().addClass("active")
}})
};
this.paintDom=function(){var g=d.c29_a_6_config;
j=g.hideInterestArea,c=g.hideInstitute,k=g.hideDepartment;
var h=[],m=[],n=[];
if(!j){b.printIArea()
}if(!c){b.printInstitute()
}else{e(".component-c129-a-6 .dept_list").removeClass("disable");
e(".component-c129-a-6 .iarea_list").addClass("hidden");
e(".component-c129-a-6 .or-seperator").parents(".seperator").addClass("hidden");
e(".component-c129-a-6 .inst_list").addClass("hidden")
}if(!k){b.printDept()
}else{e(".component-c129-a-6 .iarea_list").addClass("hidden");
e(".component-c129-a-6 .seperator").addClass("hidden");
e(".component-c129-a-6 .inst_list").addClass("hidden");
e(".component-c129-a-6 .dept_list").addClass("hidden")
}};
this.printIArea=function(){var r=d.c29_a_6_config.interestAreaInfo,g=e(".component-c129-a-6 .interestAreaMenu");
var p=[],q=[];
e.each(r,function(n,m){if(jQuery.inArray(m.interestArea,q)<0){q.push(m.interestArea);
p.push(m.interestAreaText)
}});
g.html('<li role="presentation" class="active"><a role="menuitem" tabindex="-1" href="#" data-iValue="all">All</a></li>');
for(var h=0;
h<q.length;
h++){var o='<li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-iValue="'+q[h]+'">'+p[h]+"</a></li>";
g.append(o)
}};
this.printInstitute=function(){var r=d.c29_a_6_config.institutionInfo,g=e(".component-c129-a-6 .institutionMenu");
var q=[],o=[];
e.each(r,function(n,m){if(jQuery.inArray(m.institution,o)<0){o.push(m.institution);
q.push(m.institutionText)
}});
g.html('<li role="presentation" class="active"><a role="menuitem" tabindex="-1" href="#" data-iValue="all">All</a></li>');
for(var h=0;
h<o.length;
h++){var p='<li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-iValue="'+o[h]+'">'+q[h]+"</a></li>";
g.append(p)
}};
this.printDept=function(g){var t=d.c29_a_6_config.institutionInfo,r=g||"*",h=e(".component-c129-a-6 .departmentMenu");
var u=[],v=[];
e.each(t,function(n,m){if(r===m.institution||r==="*"){if(jQuery.inArray(m.department,v)<0){v.push(m.department);
u.push(m.departmentText)
}}});
h.html('<li role="presentation" class="active deptList"><a role="menuitem" tabindex="-1" href="#" data-iValue="all">All</a></li>');
for(var q=0;
q<v.length;
q++){var s='<li role="presentation" class="deptList"><a role="menuitem" tabindex="-1" href="#" data-iValue="'+v[q]+'">'+u[q]+"</a></li>";
h.append(s)
}};
var b=this;
this.init=function(){if(d.c29_a_6_config!=f){e(".dept_list").addClass("disable");
b.paintDom();
e(document).ready(function(){b.manipulateMenu()
})
}return this
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
/*!
 * This file contains the code for the profile details.
 *
 * @project   Manipal GE
 * @date      2014-01-29
 * @author    Malarvannan S, SapientNitro <smalarvannan@sapient.com>
 * @licensor  CLIENTNAME
 * @site      Manipal
 *
 */
(function(d,e,f){e.log=function(a){if(MODULE.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
d.facultyJobListComponent=(function(){function a(){var n,p,o=e(".faculty-job-list-container"),b=e(".list-pagination"),c=e("#list-advantage-module #advantage"),r=1,t=10,s=0;
this.filterData=function(){e(".dropdown-menu > li, .dept_list").on("click",function(g){g.preventDefault();
setTimeout(function(){var C=d.facultyJobListConfig,j=[],h=false,A=false,D=false,E=d.c29_a_6_config.hideInterestArea,k=d.c29_a_6_config.hideInstitute,B=d.c29_a_6_config.hideDepartment;
if(!E&&!k&&!B){var z=e("#facultyJob-listing-wrapper .interestAreaMenu > .active").find("a").data("ivalue").toLowerCase(),F=e("#facultyJob-listing-wrapper .institutionMenu > .active").find("a").data("ivalue").toLowerCase(),m=e("#facultyJob-listing-wrapper .departmentMenu > .active").find("a").data("ivalue").toLowerCase();
e.each(C,function(v,u){h=false;
A=false;
D=false;
if((u.filterInterestArea.toLowerCase()===z)||(z==="all")){h=true
}if((u.filterInstitution.toLowerCase()===F)||(F==="all")){A=true
}if((u.filterDepartment.toLowerCase()===m)||(m==="all")){D=true
}if(h&&A&&D){h=false;
A=false;
D=false;
j.push(u)
}})
}else{if(E&&k&&!B){var m=e(".departmentMenu > .active").find("a").data("ivalue").toLowerCase();
e.each(C,function(v,u){D=false;
if((u.filterDepartment.toLowerCase()===m)||(m==="all")){D=true
}if(D){D=false;
j.push(u)
}})
}}o.empty();
if(j.length!=0){r=1;
s=0
}q.deptFilter(j)
},500)
})
};
this.initPagination=function(h){var g=Object.keys(h).length,j=Math.ceil(g/10);
var k={currentPage:r,totalPages:j,shouldShowPage:function(v,u,m){switch(v){case"first":case"last":return false;
default:return true
}},onPageClicked:function(y,B,z,x){r=x;
if(r==1){s=0
}var A=0,m=(r*t)-t;
o.empty();
e.each(h,function(u,v){if(u>=m){(A<t)?q.paintDom(v):"";
++A
}})
}};
if(g>0){b.bootstrapPaginator(k)
}else{b.empty()
}};
this.paintDom=function(h){var v="",k=h.listNameAndLink,u=k.length;
var m=(e("#hideAdvantageComponent").val()=="true")?true:false;
for(var g=0;
g<u;
g++){if(g===(u-1)){v+='<li class="list-name list-last"><a href="'+k[g].linkUrl+'">'+k[g].name+"</a></li>"
}else{v+='<li class="list-name"><a href="'+k[g].linkUrl+'">'+k[g].name+"</a></li>"
}}var j='<div class="list-container"><h3><a href=\''+h.readMoreLink+"''>"+h.title+'</a></h3><ul><li class="list-job-id">Job ID : '+h.job_id+"</li>"+v+'</ul><p class="list-desc"><span class="border-left-formobile"></span>'+h.listContent+'</p><p class="read-more"><a href="'+h.readMoreLink+'">Read More</a></p></div>';
if(s==4&&r==1&&m==false){j+='<div class="container-wrapper manipal-advantage" id="advantage">'+c.html()+"</div>"
}o.append(j);
s++
};
this.deptFilter=function(g){var h=0;
e.each(g,function(k,j){(h<t)?q.paintDom(j):"";
++h
});
q.initPagination(g)
};
var q=this;
this.init=function(){o.empty();
q.deptFilter(d.facultyJobListConfig);
e(document).ready(function(){q.filterData()
});
return this
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(b){b.fn.MaGeImageCarousel=function(s){var s=s||{},G=b(this),a=s.sideNav||true,x=s.sideBarContainer||null,E=s.wideImageContainer||null,w=s.thumbnailContainer||null,A=s.galleryWrapper||null,H=s.thumbnailWidth||75,u=s.inputData;
function v(){var c=b(G).find("."+x);
var d=true;
b.each(u,function(h,j){var f;
var g;
if(j.inActiveIcon){f=j.inActiveIcon
}else{f=" "
}if(j.activeIcon){g=j.activeIcon
}else{g=" "
}if(d){var e='<li class="active"><a href="#"><span class="left-nav-icon"><img src="'+f+'" alt="'+h+'" class="normal" /><img src="'+g+'" alt="'+h+'" class="active" /></span><p class="left-nav-title">'+h+"</p></a></li>";
F(j);
d=false
}else{var e='<li><a href="#"><span class="left-nav-icon"><img src="'+f+'" alt="'+h+'" class="normal" /><img src="'+g+'" alt="'+h+'" class="active" /></span><p class="left-nav-title">'+h+"</p></a></li>"
}c.append(e)
});
c.find("li").last().addClass("last-list");
D();
t();
B()
}function B(){b(".leftNavMenu > li").on("click",function(d){d.preventDefault();
var c=b(this).find("a").html();
b("#leftNavMenu").html(c);
b(this).siblings("li").removeClass("active").end().addClass("active");
var e=this;
b.each(u,function(h,f){var g=Object.keys(u).indexOf(h);
if(g===b(e).index()){F(f)
}});
D()
})
}function C(){var c=b(G).find(".mobile-carousel-list .leftNavMenu"),e=0,f=true;
c.empty();
b.each(u,function(g,j){if(e==0&&f){var h='<li role="presentation" class="active"><a role="menuitem" tabindex="-1" href="#" data-ivalue="'+g+'">'+g+"</a></li>";
F(j);
f=false
}else{var h='<li role="presentation"><a role="menuitem" href="#" tabindex="-1" data-ivalue="'+g+'">'+g+"</a></li>"
}e++;
c.append(h)
});
var d=b(c).find("li.active a").html();
b("#leftNavMenu").html(d);
D();
B()
}function t(){b(G).find("."+x+" > li").on("click",function(c){c.preventDefault();
b(this).siblings("li").removeClass("active").end().addClass("active");
var d=this;
b.each(u,function(g,e){var f=Object.keys(u).indexOf(g);
if(f===b(d).index()){F(e)
}});
D()
})
}function F(c){b(document).ready(function(){if(b("body").hasClass("manipal-mobile")){var n=c.mobile_big_img,d=c.mobile_small_img,m="",e="",f=n.length,j=d.length
}else{var n=c.big_img,d=c.small_img,m="",e="",f=n.length,j=d.length
}for(var k=0;
k<f;
k++){m+="<li><img src='"+n[k]+"' alt='slide image' class='component-carousel-image'></li>"
}for(var g=0;
g<j;
g++){e+="<li><img src='"+d[g]+"' alt='thumb slide image' class='component-thumbnail-image'></li>"
}var h="<h3 class='component-header'>"+c.title+"</h3><p class='component-detail'>"+c.description+"</p><div class='"+E+'\'><ul class="slides">'+m+"</ul></div>";
if(f>1&&j>1){h+="<div class='"+w+'\'><ul class="slides">'+e+"</ul></div>"
}b(G).find(".js-main-container").html(h)
})
}function D(){b(document).ready(function(){b(G).find("."+w).flexslider({animation:"slide",controlNav:false,animationLoop:false,slideshow:false,itemWidth:H,directionNav:false,asNavFor:A+" ."+E});
b(G).find("."+E).flexslider({animation:"slide",controlNav:false,animationLoop:false,slideshow:false,directionNav:true,sync:A+" ."+w})
})
}var y=function(){var c=b("#facilities .sticky-nav-data .sticky-title").text();
c=c.trim();
if(b("#pubOrDis").val()=="publishOrDisabled"){if(c.length===0){b("#facilities").remove()
}}};
var z=function(){if(typeof u!="object"){return
}var c=true;
if(E===null||w===null){return
}if(x===null){a=false
}if(a){if(b("body").hasClass("manipal-mobile")){C()
}else{v()
}}else{b.each(u,function(e,d){if(c){F(d);
c=false
}});
D()
}};
z();
y()
}
})(jQuery);
(function(b){if(!b.omr){b.omr=new Object()
}b.omr.mosaic=function(f,a){var e=this;
e.$el=b(f);
e.el=f;
e.$el.data("omr.mosaic",e);
e.init=function(){e.options=b.extend({},b.omr.mosaic.defaultOptions,a);
e.load_box()
};
e.load_box=function(){if(e.options.preload){b(e.options.backdrop,e.el).hide();
b(e.options.overlay,e.el).hide();
b(window).load(function(){if(e.options.options.animation=="fade"&&b(e.options.overlay,e.el).css("opacity")==0){b(e.options.overlay,e.el).css("filter","alpha(opacity=0)")
}b(e.options.overlay,e.el).fadeIn(200,function(){b(e.options.backdrop,e.el).fadeIn(200)
});
e.allow_hover()
})
}else{b(e.options.backdrop,e.el).show();
b(e.options.overlay,e.el).show();
e.allow_hover()
}};
e.allow_hover=function(){switch(e.options.animation){case"fade":b(e.el).hover(function(){b(e.options.overlay,e.el).stop().fadeTo(e.options.speed,e.options.opacity)
},function(){b(e.options.overlay,e.el).stop().fadeTo(e.options.speed,0)
});
break;
case"slide":startX=b(e.options.overlay,e.el).css(e.options.anchor_x)!="auto"?b(e.options.overlay,e.el).css(e.options.anchor_x):"0px";
startY=b(e.options.overlay,e.el).css(e.options.anchor_y)!="auto"?b(e.options.overlay,e.el).css(e.options.anchor_y):"0px";
var c={};
c[e.options.anchor_x]=e.options.hover_x;
c[e.options.anchor_y]=e.options.hover_y;
var d={};
d[e.options.anchor_x]=startX;
d[e.options.anchor_y]=startY;
b(e.el).hover(function(){b(e.options.overlay,e.el).stop().animate(c,e.options.speed)
},function(){b(e.options.overlay,e.el).stop().animate(d,e.options.speed)
});
break
}};
e.init()
};
b.omr.mosaic.defaultOptions={animation:"fade",speed:150,opacity:1,preload:0,anchor_x:"left",anchor_y:"bottom",hover_x:"0px",hover_y:"0px",overlay:".mosaic-overlay",backdrop:".mosaic-backdrop"};
b.fn.mosaic=function(a){return this.each(function(){(new b.omr.mosaic(this,a))
})
}
})(jQuery);
(function(d,e,f){d.mosaicOverlay=(function(){function a(){var b=this;
var c=e(window).width();
this.mosaicPopupInit=function(){e(".mosaic-dialog-modal").dialog({height:"auto",width:"auto",modal:true,closeOnEscape:true,appendTo:".mosaic-grid",autoOpen:false,resizable:false,dialogClass:"noTitle",open:function(){e(".success-msg").css("display","none");
e('#share-picture-form input[type="text"]').val("");
e("#share-picture-form textarea").val("")
}});
d.mosaicLoadOverlay=function(v,o){e(".ui-dialog-titlebar").hide();
if(v=="video"){e("#mosaic-image-overlay,#mosaic-share-pic-overlay").hide();
e("#mosaic-youtube-video,.ui-dialog-titlebar,.mosaic-carousel-left-arrow,.mosaic-carousel-right-arrow").show();
var r=o.find(".mosaic-video-source").text();
var s=o.find(".overlay-big-title").text();
var p=o.find(".overlay-big-desc").text();
var t=o.find(".overlay-big-read-more-text").text();
var u=o.find(".overlay-big-read-more-link").text();
e(".video-url").attr("src",r);
e(".mosaic-overlay-title").text(s);
e(".mosaic-overlay-description").text(p);
e(".mosaic-overlay-read-more a").text(t);
e(".mosaic-overlay-read-more a").attr("href",u);
e(".mosaic-dialog-modal").dialog("open");
e(".mosaic-grid").removeClass("dark-theme light-theme").addClass(o.find(".overlay-theme").text());
e(".mosaic-grid .ui-dialog").css("top","130px")
}else{if(v=="image"){if(c>767){var q=o.find(".overlay-big-image").text()
}else{var q=o.find(".overlay-big-image").text()+"/jcr:content/renditions/cq5dam.thumbnail.310.310.png"
}var s=o.find(".overlay-big-title").text();
var p=o.find(".overlay-big-desc").text();
var t=o.find(".overlay-big-read-more-text").text();
var u=o.find(".overlay-big-read-more-link").text();
e("#mosaic-youtube-video,#mosaic-share-pic-overlay").hide();
e("#mosaic-image-overlay,.ui-dialog-titlebar,.mosaic-carousel-left-arrow,.mosaic-carousel-right-arrow").show();
e("#mosaic-image-overlay .overlay-image-large").attr("src",q);
e(".mosaic-overlay-title").text(s);
e(".mosaic-overlay-description").text(p);
e(".mosaic-overlay-read-more a").text(t);
e(".mosaic-overlay-read-more a").attr("href",u);
e(".mosaic-dialog-modal").dialog("open");
e(".mosaic-grid").removeClass("dark-theme light-theme").addClass(o.find(".overlay-theme").text());
e(".mosaic-grid .ui-dialog").css("top","130px")
}else{if(v=="sharepicture"){e("#mosaic-youtube-video,#mosaic-image-overlay,.mosaic-carousel-left-arrow,.mosaic-carousel-right-arrow").hide();
e("#mosaic-share-pic-overlay").show();
e(".mosaic-dialog-modal").dialog("open");
e(".mosaic-grid .ui-dialog").css("top","50px")
}}}};
e(document).on("click",".mosaic-tile",function(j){if(e(j.target).is(".mosaic-read-more")){}else{j.preventDefault();
var k=e(this);
e("#mosaic-image-overlay .overlay-image-large").attr("src","");
e(".video-url").attr("src","");
var m=e(this).find(".mosaic-type-hidden").text().toLowerCase();
d.mosaicLoadOverlay(m,k)
}});
e(".close-form").on("click",function(h){h.preventDefault();
e(".mosaic-dialog-modal").dialog("close");
e(".success-msg").hide();
e("input[type='text'][name='fname']").addClass("empty-name-input");
e("input[type='text'][name='emailId']").addClass("empty-email-input");
e("#share-picture-form label.error,#share-picture-form label.custom-error").hide();
e('#share-picture-form input[type="text"],#share-picture-form textarea').val("");
e(".select-category").find(".dropdown-default-text").text("Select Category");
e("#share-picture-form #count").text("100");
e(".select-category").removeClass("error-state").addClass("default-state")
})
};
this.init=function(){b.mosaicPopupInit();
return this
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(o,p,m){o.contentBigBox={},o.contentType={},o.contentwideBox={},o.contentSmallBox={},o.category=null,o.configCategory=null,o.contentType={},o.mosaicCarousel={},o.mosaicCarouselOverlay={};
var r=0,j=0,q=0,k=false;
var n={};
if(typeof mosaicSharePic!="undefined"){n={mosaicSharePic:mosaicSharePic}
}o.loadMosaicGallery=(function(){function a(){var b=this;
this.defaultSelect=function(){if(!k){p(".gallery-categories li a").each(function(c){if(p(this).hasClass("active-gallery")){p(this).parent().trigger("click")
}})
}else{p(".gallery-categories-mobile li a").each(function(c){if(p(this).hasClass("active-gallery-mobile")){p(this).parent().trigger("click")
}})
}};
this.galleryCategoryChange=function(){if(!k){p(".gallery-categories li").click(function(c){c.preventDefault();
p(".gallery-categories li a").removeClass("active-gallery");
p(".gallery-categories li a").each(function(e){var f=p(this).children("img").attr("data-src");
f=f.replace("-select.png",".png");
p(this).children("img").attr("data-src",f)
});
p(this).find("a").addClass("active-gallery");
var d=p(this).find("img").attr("data-src");
d=d.replace(".png","-select.png");
p(this).find("img").attr("data-src",d);
r=0,q=0;
o.category=p(this).find("p.gallery-category-icon-descriptor").text();
o.category=o.category.replace(/[\s\-]/g,"").toUpperCase();
if(o.contentType[o.category]!=m){b.loadContent(o.contentType[o.category]);
b.checkEmptyTags()
}})
}else{p(".gallery-categories-mobile li").click(function(c){c.preventDefault();
p(".gallery-categories-mobile li a").removeClass("active-gallery");
p(".gallery-categories-mobile li a").each(function(e){var f=p(this).children("img").attr("data-src");
f=f.replace("-select.png",".png");
p(this).children("img").attr("data-src",f)
});
p(this).find("a").addClass("active-gallery");
var d=p(this).find("img").attr("data-src");
d=d.replace(".png","-select.png");
p(this).find("img").attr("data-src",d);
p("#mosaic-categories-mobile .dropdown-default-text").html(p(this).html());
r=0,q=0;
o.category=p(this).text();
o.category=o.category.replace(/[\s\-]/g,"").toUpperCase();
if(o.contentType[o.category]!=m){b.loadContent(o.contentType[o.category])
}})
}};
p(document).ready(function(){p(".ui-dialog-titlebar-close").click(function(){j=0;
p(".video-url").attr("data-src","")
});
if(p("body").hasClass("manipal-mobile")){k=true;
b.galleryCategoryChange();
b.defaultSelect()
}});
this.overlayCarousel=function(){var d=[];
p(".mosaic-grid").removeClass("dark-theme");
p(".mosaic-grid").removeClass("light-theme");
for(var c=0;
c<o.mosaicCarousel[o.category].length;
c++){if(o.mosaicCarousel[o.category][c]||o.mosaicCarousel[o.category][c]==""||o.mosaicCarousel[o.category][c]==" "){d.push(o.mosaicCarousel[o.category][c])
}}return d
};
p(".mosaic-carousel-right-arrow").click(function(){var e=b.overlayCarousel();
var f=p(".mosaic-dialog-modal #mosaic-image-overlay .overlay-image-large").attr("data-src");
var c=p(".mosaic-dialog-modal .video-url").attr("data-src");
c=c.split("?")[0];
for(var d=j;
d<e.length;
d++){if(((f!=""&&f==e[e.length-6])||(c!=""&&c==e[e.length-6].substring(6).split("?")[0]))&&(j>=(e.length-6)||d>=(e.length-6))){if(e[0].slice(0,6)=="video-"){p("#mosaic-image-overlay").hide();
p("#mosaic-youtube-video").show();
p(".mosaic-dialog-modal #mosaic-image-overlay .overlay-image-large").attr("data-src","");
p(".mosaic-dialog-modal .video-url").attr("data-src",e[0].substring(6))
}else{p(".mosaic-dialog-modal #mosaic-image-overlay .overlay-image-large").attr("data-src",e[0]);
p("#mosaic-image-overlay").show();
p("#mosaic-youtube-video").hide();
p(".mosaic-dialog-modal .video-url").attr("data-src","")
}j=0;
p(".mosaic-overlay-title").text(e[1]);
p(".mosaic-overlay-description").text(e[2]);
p(".mosaic-overlay-read-more a").text(e[3]);
p(".mosaic-overlay-read-more a").attr("href",e[4]);
p(".mosaic-grid").addClass(e[5]);
return false
}else{if(((f!=""&&f==e[d])||(c!=""&&c==e[d].substring(6).split("?")[0]))){j=d+6;
if(e[d+6].slice(0,6)=="video-"){p("#mosaic-image-overlay").hide();
p("#mosaic-youtube-video").show();
p(".mosaic-dialog-modal #mosaic-image-overlay .overlay-image-large").attr("src","");
p(".mosaic-dialog-modal .video-url").attr("data-src",e[d+6].substring(6))
}else{p("#mosaic-image-overlay").show();
p("#mosaic-youtube-video").hide();
p(".mosaic-dialog-modal .video-url").attr("src","");
p(".mosaic-dialog-modal #mosaic-image-overlay .overlay-image-large").attr("data-src",e[d+6])
}p(".mosaic-overlay-title").text(e[d+7]);
p(".mosaic-overlay-description").text(e[d+8]);
p(".mosaic-overlay-read-more a").text(e[d+9]);
p(".mosaic-overlay-read-more a").attr("href",e[d+10]);
p(".mosaic-grid").addClass(e[d+11]);
return false
}}}});
p(".mosaic-carousel-left-arrow").click(function(){var e=b.overlayCarousel();
var f=p(".mosaic-dialog-modal #mosaic-image-overlay .overlay-image-large").attr("data-src");
var c=p(".mosaic-dialog-modal .video-url").attr("data-src");
c=c.split("?")[0];
for(var d=j;
d<e.length;
d++){if(((f!=""&&f==e[0])||(c!=""&&c==e[0].substring(6).split("?")[0]))&&(j==0)){j=e.length-6;
if(e[e.length-6].slice(0,6)=="video-"){p("#mosaic-image-overlay").hide();
p("#mosaic-youtube-video").show();
p(".mosaic-dialog-modal #mosaic-image-overlay .overlay-image-large").attr("src","");
p(".mosaic-dialog-modal .video-url").attr("data-src",e[e.length-6].substring(6))
}else{p(".mosaic-dialog-modal #mosaic-image-overlay .overlay-image-large").attr("data-src",e[e.length-6]);
p("#mosaic-image-overlay").show();
p("#mosaic-youtube-video").hide();
p(".mosaic-dialog-modal .video-url").attr("data-src","")
}p(".mosaic-overlay-title").text(e[e.length-5]);
p(".mosaic-overlay-description").text(e[e.length-4]);
p(".mosaic-overlay-read-more a").text(e[e.length-3]);
p(".mosaic-overlay-read-more a").attr("href",e[e.length-2]);
p(".mosaic-grid").addClass(e[e.length-1]);
return false
}else{if((f!=""&&f==e[d])||(c!=""&&c==e[d].substring(6).split("?")[0])){j=d-6;
if(e[d-6].slice(0,6)=="video-"){p("#mosaic-image-overlay").hide();
p("#mosaic-youtube-video").show();
p(".mosaic-dialog-modal #mosaic-image-overlay .overlay-image-large").attr("data-src","");
p(".mosaic-dialog-modal .video-url").attr("src",e[d-6].substring(6))
}else{p("#mosaic-image-overlay").show();
p("#mosaic-youtube-video").hide();
p(".mosaic-dialog-modal .video-url").attr("src","");
p(".mosaic-dialog-modal #mosaic-image-overlay .overlay-image-large").attr("data-src",e[d-6])
}p(".mosaic-overlay-title").text(e[d-5]);
p(".mosaic-overlay-description").text(e[d-4]);
p(".mosaic-overlay-read-more a").text(e[d-3]);
p(".mosaic-overlay-read-more a").attr("href",e[d-2]);
p(".mosaic-grid").addClass(e[d-1]);
return false
}}}});
this.hoverSlider=function(){if(!p("body").hasClass("manipal-mobile")){var c=(function(){return !("ontouchstart" in window)||!("onmsgesturechange" in window)
})();
if(c){p(".bar").mosaic({opacity:0.9})
}}};
this.loadContent=function(c){b.loadColumnOne(c);
b.loadColumnTwo(c);
b.loadRowOne(c);
b.loadRowTwo(c)
};
this.loadColumnOne=function(c){var e=p(".column-one-wrapper");
e.empty();
var d='<div class="mosaic-tile big-mosaic-block bar"><span class="mosaic-type-hidden"></span><span class="overlay-big-image"></span><span class="overlay-big-title"></span><span class="overlay-big-desc"></span><span class="overlay-big-read-more-text"></span><span class="overlay-big-read-more-link"></span><span class="overlay-theme"></span><a href="#"><img data-src="" class="mosaic-big-img lazyload" alt="Collaboration Image"></a><div class="mosaic-overlay"><div class="mosaic-overlay-data"><h4 class="mosaic-overlay-heading"></h4><p class="mosaic-overlay-content"></p><a href="#" class="mosaic-read-more"></a></div></div><span class="mosaic-video-source"></span></div><div class="small-box-row"><div class="mosaic-tile small-mosaic-block bar ifEmptyFirst"><span class="mosaic-type-hidden"></span><span class="overlay-big-image"></span><span class="overlay-big-title"></span><span class="overlay-big-desc"></span><span class="overlay-big-read-more-text"></span><span class="overlay-big-read-more-link"></span><a href="#"><img data-src="" class="mosaic-small-img lazyload" alt="Collaboration Image"></a><div class="mosaic-overlay"><div class="mosaic-overlay-data"><h4 class="mosaic-overlay-heading"></h4><p class="mosaic-overlay-content"></p><a href="#" class="mosaic-read-more"></a></div></div></div><div class="small-mosaic-block mosaic-tile bar ifEmptySecond"><a href="#"><span class="mosaic-type-hidden"></span><span class="overlay-big-image"></span><span class="overlay-big-title"></span><span class="overlay-big-desc"></span><span class="overlay-big-read-more-text"></span><span class="overlay-big-read-more-link"></span><img data-src="" class="mosaic-small-img lazyload" alt="Collaboration Image"></a><div class="mosaic-overlay"><div class="mosaic-overlay-data"><h4 class="mosaic-overlay-heading"></h4><p class="mosaic-overlay-content"></p><a href="#" class="mosaic-read-more"></a></div></div></div></div>';
e.append(d);
b.bigBox(c[0],e,o.contentBigBox[o.category]);
b.smallBox(c[1],e,o.contentSmallBox[o.category],0);
b.smallBox(c[2],e,o.contentSmallBox[o.category],1);
b.hoverSlider()
};
this.loadColumnTwo=function(c){var e=p(".column-two-wrapper");
e.empty();
if(!k){var d='<div class="small-mosaic-block bar mosaic-tile ifEmptyThird"><a href="#"><img data-src="" class="mosaic-small-img lazyload" alt="Collaboration Image"></a><div class="mosaic-overlay"><div class="mosaic-overlay-data"><h4 class="mosaic-overlay-heading"></h4><p class="mosaic-overlay-content"></p><a href="#" class="mosaic-read-more"></a></div></div></div><div class="small-mosaic-block mosaic-tile bar ifEmptyFourth"><a href="#"><img data-src="" class="lazyload mosaic-small-img" alt="Collaboration Image"></a><div class="mosaic-overlay"><div class="mosaic-overlay-data"><h4 class="mosaic-overlay-heading"></h4><p class="mosaic-overlay-content"></p><a href="#" class="mosaic-read-more"></a></div></div></div><div class="small-mosaic-block bar mosaic-tile"><p class="mosaic-text"></p></div>';
e.append(d);
b.smallBox(c[3],e,o.contentSmallBox[o.category],0);
b.smallBox(c[4],e,o.contentSmallBox[o.category],1);
b.smallBox(c[5],e,o.contentSmallBox[o.category],2);
b.hoverSlider()
}else{var d='<div class="small-box-row"><div class="small-mosaic-block bar mosaic-tile"><a href="#"><img data-src="" class="lazyload mosaic-small-img" alt="Collaboration Image"></a><div class="mosaic-overlay"><h4 class="mosaic-overlay-heading"></h4><p class="mosaic-overlay-content"></p><a href="#" class="mosaic-read-more"></a></div></div><div class="small-mosaic-block mosaic-tile bar"><a href="#"><img data-src="" class="lazyload mosaic-small-img" alt="Collaboration Image"></a><div class="mosaic-overlay"><h4 class="mosaic-overlay-heading"></h4><p class="mosaic-overlay-content"></p><a href="#" class="mosaic-read-more"></a></div></div></div><div class="small-box-row"><div class="small-mosaic-block bar mosaic-tile"><p class="mosaic-text"></p></div><div class="small-mosaic-block bar mosaic-tile"><a href="#"><img data-src="" class="lazyload mosaic-small-img" alt="Collaboration Image" /></a><div class="mosaic-overlay"><h4 class="mosaic-overlay-heading"></h4><p class="mosaic-overlay-content"></p><a href="#" class="mosaic-read-more"></a></div></div>';
e.append(d);
b.smallBox(c[3],e,o.contentSmallBox[o.category],0);
b.smallBox(c[4],e,o.contentSmallBox[o.category],1);
b.smallBox(c[5],e,o.contentSmallBox[o.category],2);
b.smallBox(c[6],e,o.contentSmallBox[o.category],3)
}};
this.loadRowOne=function(c){if(!k){var e=p(".row-one-wrapper");
e.empty();
var d='<div class="small-mosaic-block bar mosaic-tile ifEmptyFifth"><a href="#"><img data-src="" class="lazyload mosaic-small-img" alt="Collaboration Image" /></a><div class="mosaic-overlay"><h4 class="mosaic-overlay-heading"></h4><p class="mosaic-overlay-content"></p><a href="#" class="mosaic-read-more"></a></div></div><div class="wide-mosaic-block bar mosaic-tile"><span class="mosaic-type-hidden">image</span><span class="overlay-big-image"></span><span class="overlay-big-title"></span><span class="overlay-big-desc"></span><span class="overlay-big-read-more-text"></span><span class="overlay-big-read-more-link"></span><span class="overlay-theme"></span><a href="#"><img data-src="" class="lazyload mosaic-wide-img" alt="Collaboration Image" /></a><div class="mosaic-overlay"><div class="mosaic-overlay-data"><h4 class="mosaic-overlay-heading"></h4><p class="mosaic-overlay-content"></p><a href="#" class="mosaic-read-more"></a></div></div></div>';
e.append(d);
b.smallBox(c[6],e,o.contentSmallBox[o.category],0);
b.wideBox(e,o.contentwideBox[o.category]);
b.hoverSlider()
}else{var e=p(".row-two-wrapper");
e.empty();
var d='<div class="wide-mosaic-block bar mosaic-tile"><span class="mosaic-type-hidden">image</span><span class="overlay-big-image"></span><span class="overlay-big-title"></span><span class="overlay-big-desc"></span><span class="overlay-big-read-more-text"></span><span class="overlay-big-read-more-link"></span><span class="overlay-theme"></span><a href="#"><img data-src="" class="lazyload mosaic-wide-img" alt="Collaboration Image" /></a><div class="mosaic-overlay"><h4 class="mosaic-overlay-heading"></h4><p class="mosaic-overlay-content"></p><a href="#" class="mosaic-read-more"></a></div></div><div class="small-box-row"><div class="small-mosaic-block bar mosaic-tile"><a href="#"><img data-src="" class="lazyload mosaic-small-img" alt="Collaboration Image" /></a><div class="mosaic-overlay"><h4 class="mosaic-overlay-heading"></h4><p class="mosaic-overlay-content"></p><a href="#" class="mosaic-read-more"></a></div></div><div class="small-mosaic-block bar mosaic-tile"><a href="#"><img data-src="" class="lazyload mosaic-small-img" alt="Collaboration Image" /></a><div class="mosaic-overlay"><h4 class="mosaic-overlay-heading"></h4><p class="mosaic-overlay-content"></p><a href="#" class="mosaic-read-more"></a></div></div></div>';
e.append(d);
b.wideBox(e,o.contentwideBox[o.category]);
b.smallBox(c[8],e,o.contentSmallBox[o.category],0);
b.smallBox(c[9],e,o.contentSmallBox[o.category],1)
}};
this.loadRowTwo=function(c){if(!k){var e=p(".row-two-wrapper");
e.empty();
var d='<div class="big-mosaic-block bar mosaic-tile"><span class="mosaic-video-source"></span><span class="mosaic-type-hidden"></span><span class="overlay-big-image">/etc/designs/manipal/images/mosaic-coll-big.png</span><span class="overlay-big-title"></span><span class="overlay-big-desc"></span><span class="overlay-big-read-more-text"></span><span class="overlay-big-read-more-link"></span><span class="overlay-theme"></span><a href="#"><img data-src="" class="mosaic-big-img lazyload" alt="Collaboration Image"></a><div class="mosaic-overlay"><div class="mosaic-overlay-data"><h4 class="mosaic-overlay-heading"></h4><p class="mosaic-overlay-content"></p><a href="#" class="mosaic-read-more"></a></div></div></div><div class="vertical-column"><div class="small-mosaic-block bar mosaic-tile ifEmptySixth"><a href="#"><img data-src="" class="lazyload mosaic-small-img" alt="Collaboration Image"></a><div class="mosaic-overlay"><h4 class="mosaic-overlay-heading"></h4><p class="mosaic-overlay-content"></p><a href="#" class="mosaic-read-more"></a></div></div><div class="small-mosaic-block bar mosaic-tile share-pic-tile ifEmptySeventh"><span class="mosaic-type-hidden"></span><a href="#"><p class="mosaic-text share-pictures"><img data-src="" class="lazyload" alt="View More News Pointer" height="15"></p></a></div></div>';
e.append(d);
b.bigBox(c[7],e,o.contentBigBox[o.category]);
b.smallBox(c[8],e,o.contentSmallBox[o.category],0);
b.smallBox(c[9],e,o.contentSmallBox[o.category],1);
b.hoverSlider()
}else{var e=p(".row-one-wrapper");
e.empty();
var d='<div class="big-mosaic-block bar mosaic-tile"><span class="mosaic-video-source"></span><span class="mosaic-type-hidden"></span><span class="overlay-big-image">/etc/designs/manipal/images/mosaic-coll-big.png</span><span class="overlay-big-title"></span><span class="overlay-big-desc"></span><span class="overlay-big-read-more-text"></span><span class="overlay-big-read-more-link"></span><span class="overlay-theme"></span><a href="#"><img data-src="" class="mosaic-big-img lazyload" alt="Collaboration Image"></a><div class="mosaic-overlay"><div class="mosaic-overlay-data"><h4 class="mosaic-overlay-heading"></h4><p class="mosaic-overlay-content"></p><a href="#" class="mosaic-read-more"></a></div></div></div>';
e.append(d);
b.bigBox(c[7],e,o.contentBigBox[o.category])
}};
this.smallBox=function(c,e,g,d){var d=parseInt(d);
var f=p(e).find(".small-mosaic-block");
switch(c){case"text":p(f).eq(d).html("");
p(f).eq(d).append('<div class="mosaic-text">'+g[2+r]+"</div>");
r+=11;
break;
case"image":p(f).eq(d).html("");
p(f).eq(d).append('<span class="overlay-big-image">'+g[5+r]+'</span><span class="overlay-big-title">'+g[6+r]+'</span><span class="overlay-big-desc">'+g[7+r]+'</span><span class="overlay-big-read-more-text">'+g[8+r]+'</span><span class="overlay-big-read-more-link">'+g[9+r]+'</span><span class="overlay-theme">'+g[10+r]+'</span><span class="mosaic-type-hidden">'+c+'</span><a href="#"><img data-src="'+g[0+r]+'" class="mosaic-small-img lazyload" alt="Collaboration Image"></a><div class="mosaic-overlay"><div class="mosaic-overlay-data"><h4 class="mosaic-overlay-heading">'+g[1+r]+'</h4><p class="mosaic-overlay-content">'+g[2+r]+'</p><a href="'+g[4+r]+'" class="mosaic-read-more">'+g[3+r]+"</a></div></div>");
r+=11;
break;
case"sharepicture":p(f).eq(d).html("");
p(f).eq(d).append('<span class="mosaic-type-hidden">'+c+'</span><a href="#"><p class="mosaic-text share-pictures"> '+g[2+r]+'<span class="play-arrow-mosaic"></span></p></a>');
p(f).eq(d).addClass("manipal-web-view");
p(f).eq(d).parent().removeClass("small-box-row")
}};
this.bigBox=function(d,e,c){switch(d){case"image":p(e).find(".mosaic-type-hidden span.mosaic-video-source").remove();
p(e).find(".big-mosaic-block span.mosaic-type-hidden").html(d);
p(e).find(".big-mosaic-block .mosaic-big-img").attr("data-src",c[0+q]);
p(e).find(".big-mosaic-block .mosaic-overlay-heading").html(c[1+q]);
p(e).find(".big-mosaic-block .mosaic-overlay-content").html(c[2+q]);
p(e).find(".big-mosaic-block .mosaic-read-more").html(c[3+q]);
p(e).find(".big-mosaic-block .mosaic-read-more").attr("href",c[4+q]);
p(e).find(".big-mosaic-block .overlay-big-image").html(c[6+q]);
p(e).find(".big-mosaic-block .overlay-big-title").html(c[7+q]);
p(e).find(".big-mosaic-block .overlay-big-desc").html(c[8+q]);
p(e).find(".big-mosaic-block .overlay-big-read-more-text").html(c[9+q]);
p(e).find(".big-mosaic-block .overlay-big-read-more-link").html(c[10+q]);
p(e).find(".big-mosaic-block .overlay-theme").html(c[11+q]);
q+=12;
break;
case"video":p(e).find(".big-mosaic-block span.mosaic-type-hidden").html(d);
p(e).find(".big-mosaic-block .mosaic-big-img").attr("data-src",c[0+q]);
p(e).find(".big-mosaic-block .mosaic-overlay-heading").html(c[1+q]);
p(e).find(".big-mosaic-block .mosaic-overlay-content").html(c[2+q]);
p(e).find(".big-mosaic-block .mosaic-read-more").html(c[3+q]);
p(e).find(".big-mosaic-block .mosaic-read-more").attr("href",c[4+q]);
p(e).find(".big-mosaic-block .mosaic-video-source").html(c[5+q]);
p(e).find(".big-mosaic-block .overlay-big-title").html(c[7+q]);
p(e).find(".big-mosaic-block .overlay-big-desc").html(c[8+q]);
p(e).find(".big-mosaic-block .overlay-big-read-more-text").html(c[9+q]);
p(e).find(".big-mosaic-block .overlay-big-read-more-link").html(c[10+q]);
p(e).find(".big-mosaic-block .overlay-theme").html(c[11+q]);
q+=12;
break
}};
this.wideBox=function(e,c){var d=parseInt(d);
var f=p(e).find(".wide-mosaic-block");
p(f).find(".mosaic-wide-img").attr("data-src",c[0]);
p(f).find(".mosaic-overlay-heading").html(c[1]);
p(f).find(".mosaic-overlay-content").html(c[2]);
p(f).find(".mosaic-read-more").html(c[3]);
p(f).find(".mosaic-read-more").attr("href",c[4]);
p(f).find(".overlay-big-image").html(c[5]);
p(f).find(".overlay-big-title").html(c[6]);
p(f).find(".overlay-big-desc").html(c[7]);
p(f).find(".overlay-big-read-more-text").html(c[8]);
p(f).find(".overlay-big-read-more-link").html(c[9]);
p(f).find(".overlay-theme").html(c[10])
};
this.checkEmptyTags=function(){var Q=p(".small-box-row .ifEmptyFirst .mosaic-overlay .mosaic-overlay-heading").text().trim();
var c=p(".small-box-row .ifEmptyFirst .mosaic-overlay .mosaic-overlay-content").text().trim();
var g=p(".small-box-row .ifEmptyFirst .mosaic-overlay .mosaic-read-more").text().trim();
var h=p(".small-box-row .ifEmptySecond .mosaic-overlay .mosaic-overlay-heading").text().trim();
var I=p(".small-box-row .ifEmptySecond .mosaic-overlay .mosaic-overlay-content").text().trim();
var O=p(".small-box-row .ifEmptySecond .mosaic-overlay .mosaic-read-more").text().trim();
var K=p(".column-two-wrapper .ifEmptyThird .mosaic-overlay .mosaic-overlay-heading").text().trim();
var M=p(".column-two-wrapper .ifEmptyThird .mosaic-overlay .mosaic-overlay-content").text().trim();
var H=p(".column-two-wrapper .ifEmptyThird .mosaic-overlay .mosaic-read-more").text().trim();
var T=p(".column-two-wrapper .ifEmptyFourth .mosaic-overlay .mosaic-overlay-heading").text().trim();
var f=p(".column-two-wrapper .ifEmptyFourth .mosaic-overlay .mosaic-overlay-content").text().trim();
var G=p(".column-two-wrapper .ifEmptyFourth .mosaic-overlay .mosaic-read-more").text().trim();
var P=p(".row-one-wrapper .ifEmptyFifth .mosaic-overlay .mosaic-overlay-heading").text().trim();
var L=p(".row-one-wrapper .ifEmptyFifth .mosaic-overlay .mosaic-overlay-content").text().trim();
var N=p(".row-one-wrapper .ifEmptyFifth .mosaic-overlay .mosaic-read-more").text().trim();
var R=p(".row-two-wrapper .ifEmptySixth .mosaic-overlay .mosaic-overlay-heading").text().trim();
var d=p(".row-two-wrapper .ifEmptySixth .mosaic-overlay .mosaic-overlay-content").text().trim();
var J=p(".row-two-wrapper .ifEmptySixth .mosaic-overlay .mosaic-read-more").text().trim();
var S=p(".row-two-wrapper .ifEmptySeventh .mosaic-overlay .mosaic-overlay-heading").text().trim();
var e=p(".row-two-wrapper .ifEmptySeventh .mosaic-overlay .mosaic-overlay-content").text().trim();
var F=p(".row-two-wrapper .ifEmptySeventh .mosaic-overlay .mosaic-read-more").text().trim();
if(!(Q||c||g)){p(".small-box-row .ifEmptyFirst .mosaic-overlay").remove()
}if(!(h||I||O)){p(".small-box-row .ifEmptySecond .mosaic-overlay").remove()
}if(!(K||M||H)){p(".column-two-wrapper .ifEmptyThird .mosaic-overlay").remove()
}if(!(T||f||G)){p(".column-two-wrapper .ifEmptyFourth .mosaic-overlay").remove()
}if(!(P||L||N)){p(".row-one-wrapper .ifEmptyFifth .mosaic-overlay").remove()
}if(!(R||d||J)){p(".row-two-wrapper .ifEmptySixth .mosaic-overlay").remove()
}if(!(S||e||F)){p(".row-two-wrapper .ifEmptySeventh .mosaic-overlay").remove()
}};
this.init=function(){b.galleryCategoryChange();
b.defaultSelect();
b.checkEmptyTags();
return this
}
}return new a()
}());
if(o.mosaicGridConfig!=m){p.each(o.mosaicGridConfig,function(b,a){o.configCategory=b.toUpperCase();
o.contentType[o.configCategory]=[a.columnOne.bigBox.type,a.columnOne.smallBoxOne.type,a.columnOne.smallBoxTwo.type,a.columnTwo.smallBoxOne.type,a.columnTwo.smallBoxTwo.type,a.columnTwo.smallBoxThree.type,a.rowOne.smallBoxOne.type,a.rowTwo.bigBox.type,a.rowTwo.smallBoxOne.type,a.rowTwo.smallBoxTwo.type];
o.contentBigBox[o.configCategory]=[a.columnOne.bigBox.thumbnailPath,a.columnOne.bigBox.heading,a.columnOne.bigBox.content,a.columnOne.bigBox.more,a.columnOne.bigBox.moreLink,a.columnOne.bigBox.videoID,a.columnOne.bigBox.galleryImage,a.columnOne.bigBox.overlayTitle,a.columnOne.bigBox.overlayDescription,a.columnOne.bigBox.overlayReadMore,a.columnOne.bigBox.overlayReadMoreLink,a.columnOne.bigBox.overlayTheme,a.rowTwo.bigBox.thumbnailPath,a.rowTwo.bigBox.heading,a.rowTwo.bigBox.content,a.rowTwo.bigBox.more,a.rowTwo.bigBox.moreLink,a.rowTwo.bigBox.videoID,a.rowTwo.bigBox.galleryImage,a.rowTwo.bigBox.overlayTitle,a.rowTwo.bigBox.overlayDescription,a.rowTwo.bigBox.overlayReadMore,a.rowTwo.bigBox.overlayReadMoreLink,a.rowTwo.bigBox.overlayTheme];
o.contentSmallBox[o.configCategory]=[a.columnOne.smallBoxOne.thumbnailPath,a.columnOne.smallBoxOne.heading,a.columnOne.smallBoxOne.content,a.columnOne.smallBoxOne.more,a.columnOne.smallBoxOne.moreLink,a.columnOne.smallBoxOne.galleryImage,a.columnOne.smallBoxOne.overlayTitle,a.columnOne.smallBoxOne.overlayDescription,a.columnOne.smallBoxOne.overlayReadMore,a.columnOne.smallBoxOne.overlayReadMoreLink,a.columnOne.smallBoxOne.overlayTheme,a.columnOne.smallBoxTwo.thumbnailPath,a.columnOne.smallBoxTwo.heading,a.columnOne.smallBoxTwo.content,a.columnOne.smallBoxTwo.more,a.columnOne.smallBoxTwo.moreLink,a.columnOne.smallBoxTwo.galleryImage,a.columnOne.smallBoxTwo.overlayTitle,a.columnOne.smallBoxTwo.overlayDescription,a.columnOne.smallBoxTwo.overlayReadMore,a.columnOne.smallBoxTwo.overlayReadMoreLink,a.columnOne.smallBoxTwo.overlayTheme,a.columnTwo.smallBoxOne.thumbnailPath,a.columnTwo.smallBoxOne.heading,a.columnTwo.smallBoxOne.content,a.columnTwo.smallBoxOne.more,a.columnTwo.smallBoxOne.moreLink,a.columnTwo.smallBoxOne.galleryImage,a.columnTwo.smallBoxOne.overlayTitle,a.columnTwo.smallBoxOne.overlayDescription,a.columnTwo.smallBoxOne.overlayReadMore,a.columnTwo.smallBoxOne.overlayReadMoreLink,a.columnTwo.smallBoxOne.overlayTheme,a.columnTwo.smallBoxTwo.thumbnailPath,a.columnTwo.smallBoxTwo.heading,a.columnTwo.smallBoxTwo.content,a.columnTwo.smallBoxTwo.more,a.columnTwo.smallBoxTwo.moreLink,a.columnTwo.smallBoxTwo.galleryImage,a.columnTwo.smallBoxTwo.overlayTitle,a.columnTwo.smallBoxTwo.overlayDescription,a.columnTwo.smallBoxTwo.overlayReadMore,a.columnTwo.smallBoxTwo.overlayReadMoreLink,a.columnTwo.smallBoxTwo.overlayTheme,a.columnTwo.smallBoxThree.thumbnailPath,a.columnTwo.smallBoxThree.heading,a.columnTwo.smallBoxThree.content,a.columnTwo.smallBoxThree.more,a.columnTwo.smallBoxThree.moreLink,a.columnTwo.smallBoxThree.galleryImage,a.columnTwo.smallBoxThree.overlayTitle,a.columnTwo.smallBoxThree.overlayDescription,a.columnTwo.smallBoxThree.overlayReadMore,a.columnTwo.smallBoxThree.overlayReadMoreLink,a.columnTwo.smallBoxThree.overlayTheme,a.rowOne.smallBoxOne.thumbnailPath,a.rowOne.smallBoxOne.heading,a.rowOne.smallBoxOne.content,a.rowOne.smallBoxOne.more,a.rowOne.smallBoxOne.moreLink,a.rowOne.smallBoxOne.galleryImage,a.rowOne.smallBoxOne.overlayTitle,a.rowOne.smallBoxOne.overlayDescription,a.rowOne.smallBoxOne.overlayReadMore,a.rowOne.smallBoxOne.overlayReadMoreLink,a.rowOne.smallBoxOne.overlayTheme,a.rowTwo.smallBoxOne.thumbnailPath,a.rowTwo.smallBoxOne.heading,a.rowTwo.smallBoxOne.content,a.rowTwo.smallBoxOne.more,a.rowTwo.smallBoxOne.moreLink,a.rowTwo.smallBoxOne.galleryImage,a.rowTwo.smallBoxOne.overlayTitle,a.rowTwo.smallBoxOne.overlayDescription,a.rowTwo.smallBoxOne.overlayReadMore,a.rowTwo.smallBoxOne.overlayReadMoreLink,a.rowTwo.smallBoxOne.overlayTheme,a.rowTwo.smallBoxTwo.thumbnailPath,a.rowTwo.smallBoxTwo.heading,a.rowTwo.smallBoxTwo.content,a.rowTwo.smallBoxTwo.more,a.rowTwo.smallBoxTwo.moreLink,a.rowTwo.smallBoxTwo.galleryImage,a.rowTwo.smallBoxTwo.overlayTitle,a.rowTwo.smallBoxTwo.overlayDescription,a.rowTwo.smallBoxTwo.overlayReadMore,a.rowTwo.smallBoxTwo.overlayReadMoreLink,a.rowTwo.smallBoxTwo.overlayTheme];
o.contentwideBox[o.configCategory]=[a.rowOne.wideBox.thumbnailPath,a.rowOne.wideBox.heading,a.rowOne.wideBox.content,a.rowOne.wideBox.more,a.rowOne.wideBox.moreLink,a.rowOne.wideBox.galleryImage,a.rowOne.wideBox.overlayTitle,a.rowOne.wideBox.overlayDescription,a.rowOne.wideBox.overlayReadMore,a.rowOne.wideBox.overlayReadMoreLink,a.rowOne.wideBox.overlayTheme];
o.mosaicCarousel[o.configCategory]=[a.columnOne.bigBox.galleryImage,a.columnOne.bigBox.overlayTitle,a.columnOne.bigBox.overlayDescription,a.columnOne.bigBox.overlayReadMore,a.columnOne.bigBox.overlayReadMoreLink,a.columnOne.bigBox.overlayTheme,a.columnTwo.smallBoxOne.galleryImage,a.columnTwo.smallBoxOne.overlayTitle,a.columnTwo.smallBoxOne.overlayDescription,a.columnTwo.smallBoxOne.overlayReadMore,a.columnTwo.smallBoxOne.overlayReadMoreLink,a.columnTwo.smallBoxOne.overlayTheme,a.rowOne.smallBoxOne.galleryImage,a.rowOne.smallBoxOne.overlayTitle,a.rowOne.smallBoxOne.overlayDescription,a.rowOne.smallBoxOne.overlayReadMore,a.rowOne.smallBoxOne.overlayReadMoreLink,a.rowOne.smallBoxOne.overlayTheme,a.rowOne.wideBox.galleryImage,a.rowOne.wideBox.overlayTitle,a.rowOne.wideBox.overlayDescription,a.rowOne.wideBox.overlayReadMore,a.rowOne.wideBox.overlayReadMoreLink,a.rowOne.wideBox.overlayTheme,a.columnTwo.smallBoxTwo.galleryImage,a.columnTwo.smallBoxTwo.overlayTitle,a.columnTwo.smallBoxTwo.overlayDescription,a.columnTwo.smallBoxTwo.overlayReadMore,a.columnTwo.smallBoxTwo.overlayReadMoreLink,a.columnTwo.smallBoxTwo.overlayTheme,a.rowTwo.bigBox.galleryImage,a.rowTwo.bigBox.overlayTitle,a.rowTwo.bigBox.overlayDescription,a.rowTwo.bigBox.overlayReadMore,a.rowTwo.bigBox.overlayReadMoreLink,a.rowTwo.bigBox.overlayTheme,a.rowTwo.smallBoxOne.galleryImage,a.rowTwo.smallBoxOne.overlayTitle,a.rowTwo.smallBoxOne.overlayDescription,a.rowTwo.smallBoxOne.overlayReadMore,a.rowTwo.smallBoxOne.overlayReadMoreLink,a.rowTwo.smallBoxOne.overlayTheme,a.rowTwo.smallBoxTwo.galleryImage,a.rowTwo.smallBoxTwo.overlayTitle,a.rowTwo.smallBoxTwo.overlayDescription,a.rowTwo.smallBoxTwo.overlayReadMore,a.rowTwo.smallBoxTwo.overlayReadMoreLink,a.rowTwo.smallBoxTwo.overlayTheme,a.columnOne.smallBoxOne.galleryImage,a.columnOne.smallBoxOne.overlayTitle,a.columnOne.smallBoxOne.overlayDescription,a.columnOne.smallBoxOne.overlayReadMore,a.columnOne.smallBoxOne.overlayReadMoreLink,a.columnOne.smallBoxOne.overlayTheme,a.columnOne.smallBoxTwo.galleryImage,a.columnOne.smallBoxTwo.overlayTitle,a.columnOne.smallBoxTwo.overlayDescription,a.columnOne.smallBoxTwo.overlayReadMore,a.columnOne.smallBoxTwo.overlayReadMoreLink,a.columnOne.smallBoxTwo.overlayTheme,a.columnTwo.smallBoxThree.galleryImage,a.columnTwo.smallBoxThree.overlayTitle,a.columnTwo.smallBoxThree.overlayDescription,a.columnTwo.smallBoxThree.overlayReadMore,a.columnTwo.smallBoxThree.overlayReadMoreLink,a.columnTwo.smallBoxThree.overlayTheme]
})
}}(window.manipal=window.manipal||{},jQuery));
(function(d,e,f){d.formInteraction=(function(){function a(){var b=this;
var c=false;
this.characterCounter=function(){var n=100;
var m=e("#picture-desc"),k=e("#count").text();
e("#count").text(n);
e("#picture-desc").keyup(function(g){var h=m.val().length;
if((h>0)&&(h<=n)){k=n-h
}else{k=n
}e("#count").text(k)
})
};
this.validateForm=function(){c=false;
e(".empty-name-input").focus(function(){e(this).removeClass("empty-name-input")
});
e(".empty-email-input").focus(function(){e(this).removeClass("empty-email-input")
});
e("#share-picture-form .dropdown-menu").click(function(h){e(".btn-group .custom-error").remove();
h.stopPropagation()
});
e(".dropdown-options").click(function(){e(".select-category span.dropdown-default-text").text(e(this).text());
e(".select-category").removeClass("default-state");
e("#share-picture-form .dropdown-menu").dropdown()
});
e(".fupload ").on("change",function(){e(".select-picture").val(e(".fupload ").val());
var j=this.files[0];
var k=parseInt((j.size/1024)/1024);
if(k>=10){c=true
}else{c=false
}})
};
e("#share-picture-form").validate({ignore:[],rules:{fname:{required:true,digits:false,minlength:2},pictureName:{required:true},emailId:{required:true,email:true},picDescription:{required:true,maxlength:100},fileUpload:{required:true},captcha:{required:true}},messages:{fname:{required:"Please enter your Name",minlength:"Your username must consist of at least 2 characters"},emailId:{required:"Please enter a email address",email:"Please enter a valid email address"},pictureName:{required:"Please provide a picture name"},picDescription:{required:"Please enter picture description",maxlength:"Only 100 Characters are allowed"},fileUpload:{required:"Please upload a picture"},captcha:{required:"Enter text from image"}}});
e("#share-picture-form").submit(function(k){k.preventDefault();
if(e(".select-category").hasClass("default-state")&&!e(".select-category").hasClass("error-state")){e(".btn-group").append('<label for="category" class="custom-error">Please select a category</label>');
e(".select-category").addClass("error-state")
}if(c){alert("Max size is only 10 MB");
return false
}e("#category").val(e(".dropdown-default-text").text());
var o=e(this);
var m=o.attr("action");
var n=new FormData(this);
if(e("#share-picture-form").valid()){e.ajax({url:m,type:"POST",data:n,mimeType:"multipart/form-data",contentType:false,cache:false,processData:false,success:function(s,q,g){var h=jQuery.parseJSON(s);
var r=h.status.toLowerCase();
if(r=="failure"){var j=h.errors;
if(j.hasOwnProperty("picDescriptionError")){alert("pic desc error");
e("#share-picture-form #picture-desc").parent().append('<label class="error">Please provide valid picture description</label>')
}if(j.hasOwnProperty("picTitleError")){e('#share-picture-form input[name="pictureName"]').parent().append('<label class="error">Please provide valid picture title</label>')
}if(j.hasOwnProperty("fname")){e('#share-picture-form input[name="fname"]').parent().append('<label class="error">Please provide valid name</label>')
}if(!h.isPicValid){e("#share-picture-form .fupload").parent().find(".error").remove();
e("#share-picture-form .fupload").parent().append('<label class="error">Please upload a valid picture.</label>')
}if(!h.isCaptchaValid&&e("#share-picture-form #captcha").siblings(".error").length==0){e("#share-picture-form #captcha").parent().addClass("error").append('<label for="captcha" generated="true" class="error" style="display: block;">Enter text from image</label>')
}if(!h.isCaptchaValid&&e("#share-picture-form #captcha").siblings(".error").length>0){e("#share-picture-form #captcha").siblings(".error").attr("style","display:block")
}return false
}else{if(r=="success"){e(".success-msg span").html(h.name+" ");
e(".success-msg").css("display","block");
e('#share-picture-form input[type="text"]').val("");
e("#share-picture-form textarea").val("");
e(".select-category").find(".dropdown-default-text").text("Select Category");
e(".select-category").removeClass("error-state").addClass("default-state");
e(".fupload").val("");
b.characterCounter()
}}},error:function(j,g,h){alert("Error")
}})
}else{e(".success-msg").css("display","none")
}});
this.init=function(){b.characterCounter();
b.validateForm();
return this
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(h,e,g){e.log=function(a){if(h.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
e.toType=(function f(a){return function(b){if(b===a){return"global"
}return({}).toString.call(b).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
}
}(this));
h.contentPanelLeftNav=(function(){function a(){var b=this;
this.leftNavClick=function(){e(".content-panel-left-nav-wrapper .left-nav li").click(function(d){d.preventDefault();
if(!e(this).hasClass("content-panel-select")){var j=e(this).attr("class")
}else{return
}e(this).parents(".content-panel-left-nav-wrapper").find(".left-nav li").removeClass("content-panel-select");
e(".left-nav-category").removeClass("content-panel-select-prev");
var c=e(this).index();
if(c>0){e(".content-panel-left-nav-wrapper .left-nav li").eq(c-1).find("span.left-nav-category").addClass("content-panel-select-prev")
}e(this).parents(".content-panel-left-nav-wrapper").find(".content-panel-content-placeholder").hide();
e(this).parents(".content-panel-left-nav-wrapper").find("."+j+"-content").show();
e(this).addClass("content-panel-select")
});
e(".stream-nav-category a").click(function(d){event.preventDefault();
var m=e(this).text();
var c=e(this).attr("class");
var n=e(".stream-nav-default-text").text();
var o=e(".stream-nav-default-text").attr("data-class");
e(".stream-nav-default-text").text(m);
e(".stream-nav-default-text").attr("data-class",c);
e(".stream-nav-category").show();
e(".content-panel-content-placeholder").hide();
e("."+c+"-content").show()
})
};
this.init=function(){b.leftNavClick();
return this
};
return this.init()
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
/*!
 * This file contains the code for the Initialzing Ranking Carousel.
 *
 * @project   Manipal GE
 * @date      2013-12-24
 * @author    Shreenithya, SapientNitro <skaveri@sapient.com>
 * @licensor  CLIENTNAME
 * @site      Manipal
 *
 */
(function(d,e,f){e.log=function(a){if(MODULE.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
d.contentPanel=(function(){function a(){var b=this;
this.init=function(){b.contentPanelAccordion();
return this
};
this.contentPanelAccordion=function(){var c={header:"ui-icon-arrow-plus-custom",activeHeader:"ui-icon-arrow-minus-custom"};
e(".content-panel-question").eq(0).find("span.border").hide();
e("#accordion").accordion({collapsible:true,icons:c,heightStyle:"content"});
e(".content-panel-question").click(function(){e(".content-panel-question").removeClass("active-accordion");
e("content-panel-question").next("div").find("p.content-panel-answer").removeClass("active-accordion-content");
if(e(this).hasClass("ui-accordion-header-active")){e(this).addClass("active-accordion")
}})
};
this.noFaqQuote=function(){if(e(".content-panel-quote-container").length==0&&e(".content-panel-faq-container").length==0){e(".content-panel-article-container").addClass("no-quote-faq")
}if(e(".call-to-action").length==0){e(".content-panel-article-container").addClass("no-call-to-action")
}};
return this.init()
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
/*!
 * This file contains the code for the profile details.
 *
 * @project   Manipal GE
 * @date      2013-12-24
 * @author    Shaunak Trivedi, SapientNitro <strivedi4@sapient.com>
 * @licensor  CLIENTNAME
 * @site      Manipal
 *
 */
(function(h,e,g){e.log=function(a){if(h.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
e.toType=(function f(a){return function(b){if(b===a){return"global"
}return({}).toString.call(b).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
}
}(this));
h.profileDetails=(function(){function a(){var D=this,C=5,U=e("#profile-details .nav-tabs"),T=1,S=e("#profile-details #tab-research ul"),M=[],G=1,L=e("#profile-details #tab-newsevents ul"),O=[],E=1,c=e("#profile-details #tab-blog .manipal-web.blog-list"),J=e("#profile-details #tab-blog .manipal-mobile-view.blog-list"),V=[],R=1,Q=e("#profile-details #tab-patent ul"),H=[],F=1,N=e("#profile-details #tab-publication ul"),I=[],K=1,P=e("#profile-details #tab-studentproject ul"),b=[],d=e(".profile-details-dd-mobile .dropdown-menu");
D.checkDevice=function(){e(document).ready(function(){if(e("body").hasClass("manipal-mobile")){var m=e(".profile-details-dd-mobile"),n=e(".profile-details-dd-mobile span.dropdown-default-category"),k=e(".profile-details-dd-mobile .dropdown-menu li"),j=e(".profile-details .tab-content .tab-pane");
k.off().on("click",function(){var q=e(this),o=q.find("a").text(),p=q.find("a").attr("href");
n.text(o);
j.removeClass("active");
e(p).addClass("active")
})
}})
};
D.getTotalPages=function(j){return Math.ceil(j/C)
};
D.renderResearchItems=function(){C=5;
var m=(T*C)-C,n=(T*C),p=0,q="";
n=(n>M.length)?M.length-1:n-1;
S.empty();
for(p=m;
p<=n;
p++){var j="",o=M[p].listNameAndLink,r=o.length;
if(r){for(var k=0;
k<r;
k++){if(o[k].linkUrl==""){j+='<dt><a class="nolink" href="javascript:void(0)">'+o[k].name+"</a></dt>"
}else{j+='<dt><a href="'+o[k].linkUrl+'">'+o[k].name+"</a></dt>"
}}}q+='<li class="separator"><H2>'+M[p].title+'</H2><dl class="subline pull-left">';
if(e.trim(M[p].date)!=""){q+='<dt class="subline-date">'+e.trim(M[p].date)+"</dt>"
}if(e.trim(M[p].interestArea)!=""){q+='<dt class="subline-interestarea">'+e.trim(M[p].interestArea)+"</dt> "
}q+='</dl><dl class="subline-patentowner">'+j+'</dl><p class="patent-content clearfix">'+M[p].listContent+'</p><p class="patent-readmore clearfix">';
if(M[p].readMoreLink!=""){q+='<a href="'+M[p].readMoreLink+'">Read more</a>'
}q+="</p></li>"
}S.append(q)
};
D.renderNewseventsItems=function(){C=5;
var j=(G*C)-C,k=(G*C),m=0,n="";
k=(k>O.length)?O.length-1:k-1;
L.empty();
for(m=j;
m<=k;
m++){n+='<li class="separator"><H2>'+O[m].title+'</H2><p class="subline"><span class="subline-date">'+O[m].date+'</span></p><p class="patent-content clearfix">'+O[m].listContent+'</p><p class="patent-readmore clearfix">';
if(O[m].readMoreLink!=""){n+='<a href="'+O[m].readMoreLink+'">Read more</a>'
}n+="</p></li>"
}L.append(n)
};
D.renderBlogItems=function(){C=6;
var o=(E*C)-C,u=(E*C),p=0,r="",n="";
u=(u>V.length)?V.length-1:u-1;
c.empty();
J.empty();
var j=0;
for(p=o;
p<=u;
p++){var q="",v=V[p].listNameAndLink,m=v.length;
if(m){for(var t=0;
t<m;
t++){if(v[t].linkUrl==""){q+='<a class="nolink" href="javascript:void(0)">'+v[t].name+"</a>"
}else{q+='<a href="'+v[t].linkUrl+'">'+v[t].name+"</a>"
}}}var w="",k=V[p].listCatNameAndLink,s=k.length;
if(s){for(var t=0;
t<s;
t++){if(k[t].catLink==""){w+='<dt><a class="nolink" href="javascript:void(0)>'+k[t].catName+"</a>, </dt>"
}else{w+='<dt><a href="'+k[t].catLink+'">'+k[t].catName+"</a>, </dt>"
}}}w=w.substring(0,w.length-7);
w=w+"</dt>";
console.log("blogdt:"+w);
console.log(j+"-"+j%3);
if(j%3==0){r+='<div class="clearfix"></div>';
n+='<div class="clearfix"></div>';
j=0
}j++;
r+='<div class="pull-left blog-list-container">';
n+='<div class="blog-list-container">';
r+='<a href="'+V[p].itemLink+'"><img src="'+V[p].itemImage+'" /></a><H2>'+V[p].title+'</H2><span class="subline"><div class="pull-left"><img class="thumb" src="../../../../etc/designs/manipal/images/content-panel-left-nav-icons2.png" /></div><div class="pull-left"><p class="subline-patentowner">'+q+'</p><p class="subline-date">'+V[p].date+'</p></div></span><span class="clearfix"></span><div class="patent-content pull-left">'+V[p].listContent+'</div><dl class="patent-category pull-left"><dt>Category:</dt> </dl><dl>'+w+'</dl><div class="patent-readmore clearfix">';
if(V[p].readMoreLink!=""){r+='<a href="'+V[p].readMoreLink+'">Read more</a>'
}r+="</div></div>";
n+='<a class="pd-blog-imglink" href="'+V[p].itemLink+'"><img src="'+V[p].itemImage+'" /></a><H2>'+V[p].title+'</H2><div class="patent-content">'+V[p].listContent+'</div><dl class="patent-category pull-left"><dt>Category:</dt> </dl><dl>'+w+'</dl><span class="subline"><div class="pull-left"><img class="thumb" height="50" width="50" src="../../../../etc/designs/manipal/images/content-panel-left-nav-icons2.png" /></div><div class="pull-left"><p class="subline-patentowner">'+q+'</p><p class="subline-date">'+V[p].date+'</p></div></span><div class="patent-readmore clearfix">';
if(V[p].readMoreLink!=""){n+='<a href="'+V[p].readMoreLink+'">Read more</a>'
}n+="</div></div>"
}c.append(r);
J.append(n)
};
D.renderPatentItems=function(){C=5;
var k=(R*C)-C,n=(R*C),p=0,q="";
n=(n>H.length)?H.length-1:n-1;
Q.empty();
for(p=k;
p<=n;
p++){var m="",o=H[p].listNameAndLink,r=o.length;
if(r){for(var j=0;
j<r;
j++){if(o[j].linkUrl==""){m+='<dt><a class="nolink" href="javascript:void(0)">'+o[j].name+"</a></dt>"
}else{m+='<dt><a href="'+o[j].linkUrl+'">'+o[j].name+"</a></dt>"
}}}q+='<li class="separator"><H2>'+H[p].title+'</H2><dl class="subline pull-left">';
if(e.trim(H[p].date)!=""){q+='<dt class="subline-date">'+e.trim(H[p].date)+"</dt>"
}if(e.trim(H[p].interestArea)!=""){q+='<dt class="subline-interestarea">'+e.trim(H[p].interestArea)+"</dt> "
}q+='</dl><dl class="subline-patentowner">'+m+'</dl><p class="patent-content clearfix">'+H[p].listContent+'</p><p class="patent-readmore clearfix">';
if(H[p].readMoreLink!=""){q+='<a href="'+H[p].readMoreLink+'">Read more</a>'
}q+="</p></li>"
}Q.append(q)
};
D.renderPublicationItems=function(){C=5;
var k=(F*C)-C,m=(F*C),p=0,q="";
m=(m>I.length)?I.length-1:m-1;
N.empty();
for(p=k;
p<=m;
p++){var o="",n=I[p].listNameAndLink,r=n.length;
if(r){for(var j=0;
j<r;
j++){if(n[j].linkUrl==""){o+='<dt><a class="nolink" href="javascript:void(0)">'+n[j].name+"</a></dt>"
}else{o+='<dt><a href="'+n[j].linkUrl+'">'+n[j].name+"</a></dt>"
}}}q+='<li class="separator"><H2>'+I[p].title+'</H2><dl class="subline pull-left">';
if(I[p].date!=""){q+='<dt class="subline-date">'+e.trim(I[p].date)+"</dt>"
}if(e.trim(I[p].interestArea)!=""){q+='<dt class="subline-interestarea">'+e.trim(I[p].interestArea)+"</dt> "
}q+='</dl><dl class="subline-patentowner">'+o+'</dl><p class="patent-content clearfix">'+I[p].listContent+'</p><p class="patent-readmore clearfix">';
if(I[p].readMoreLink!=""){q+='<a href="'+I[p].readMoreLink+'">Read more</a>'
}q+="</p></li>"
}N.append(q)
};
D.renderStudentProjectItems=function(){C=5;
var n=(K*C)-C,s=(K*C),o=0,p="";
s=(s>b.length)?b.length-1:s-1;
P.empty();
for(o=n;
o<=s;
o++){var r="",k=b[o].listNameAndLink,m=k.length;
if(m){var j="";
for(var q=0;
q<m;
q++){j="";
if(q%2==0){j="rightborder"
}if(k[q].linkUrl==""){r+='<dt class="'+j+'"><a class="nolink" href="javascript:void(0)">'+k[q].name+"</a></dt>"
}else{r+='<dt class="'+j+'"><a href="'+k[q].linkUrl+'">'+k[q].name+"</a></dt>"
}}}p+='<li class="separator clearfix">';
if(b[o].hasImage==true){p+='<div class="image-part"><a href="javascript:void(0)" class="thumb"><img src="'+b[o].thumbnailImage+'" /></a></div>';
p+='<div class="content-part"><H2>'+b[o].title+'</H2><dl class="subline pull-left">';
if(e.trim(b[o].date)!=""){p+='<dt class="subline-date">'+e.trim(b[o].date)+"</dt>"
}if(e.trim(b[o].interestArea)!=""){p+='<dt class="subline-interestarea">'+e.trim(b[o].interestArea)+"</dt> "
}p+='</dl><dl class="subline-patentowner">'+r+'</dl><p class="patent-content clearfix">'+b[o].listContent+'</p><p class="patent-readmore clearfix">';
if(b[o].readMoreLink!=""){p+='<a href="'+b[o].readMoreLink+'">Read more</a>'
}p+="</p></div></li>"
}else{p+='<div class="content-part-without-image"><H2>'+b[o].title+'</H2><dl class="subline pull-left">';
if(e.trim(b[o].date)!=""){p+='<dt class="subline-date">'+e.trim(b[o].date)+"</dt>"
}if(e.trim(b[o].interestArea)!=""){p+='<dt class="subline-interestarea">'+e.trim(b[o].interestArea)+"</dt> "
}p+='</dl><dl class="subline-patentowner">'+r+'</dl><p class="patent-content clearfix">'+e.trim(b[o].listContent)+'</p><p class="patent-readmore clearfix">';
if(b[o].readMoreLink!=""){p+='<a href="'+b[o].readMoreLink+'">Read more</a>'
}p+="</p></div></li>"
}}P.append(p)
};
D.setupNewseventsPageData=function(){var k=O.length;
G=1;
k=O.length;
console.log(k);
var j=e(".pg-newsevents");
if(k>0){D.initNewseventsPaginiation(j,k)
}};
D.setupResearchPageData=function(){var k=M.length;
T=1;
k=M.length;
console.log(k);
var j=e(".pg-research");
if(k>0){D.initResearchPaginiation(j,k)
}};
D.setupBlogPageData=function(){var k=V.length;
E=1;
k=V.length;
console.log(k);
var j=e(".pg-blog");
if(V.length>0){D.initBlogPaginiation(j,k)
}};
D.setupPatentPageData=function(){var k=H.length;
R=1;
k=H.length;
console.log(k);
var j=e(".pg-patent");
if(H.length>0){D.initPatentPaginiation(j,k)
}};
D.setupPublicationPageData=function(){var k=I.length;
F=1;
k=I.length;
console.log(k);
var j=e("#profile-details .pg-publication");
if(I.length>0){D.initPublicationPaginiation(j,k)
}};
D.setupStudentProjectPageData=function(){var k=b.length;
K=1;
k=b.length;
console.log(k);
var j=e(".pg-studentproject");
if(b.length>0){D.initStudentProjectPaginiation(j,k)
}};
D.initNewseventsPaginiation=function(k,j){var m={currentPage:G,totalPages:D.getTotalPages(j),onPageClicked:function(o,q,p,n){G=n;
D.renderNewseventsItems()
}};
k.bootstrapPaginator(m)
};
D.initResearchPaginiation=function(k,j){var m={currentPage:T,totalPages:D.getTotalPages(j),onPageClicked:function(o,q,p,n){T=n;
D.renderResearchItems()
}};
k.bootstrapPaginator(m)
};
D.initBlogPaginiation=function(k,j){var m={currentPage:E,totalPages:D.getTotalPages(j),onPageClicked:function(o,q,p,n){E=n;
D.renderBlogItems()
}};
k.bootstrapPaginator(m)
};
D.initPatentPaginiation=function(k,j){var m={currentPage:R,totalPages:D.getTotalPages(j),onPageClicked:function(o,q,p,n){R=n;
D.renderPatentItems()
}};
k.bootstrapPaginator(m)
};
D.initPublicationPaginiation=function(k,j){var m={currentPage:F,totalPages:D.getTotalPages(j),onPageClicked:function(o,q,p,n){F=n;
D.renderPublicationItems()
}};
k.bootstrapPaginator(m)
};
D.initStudentProjectPaginiation=function(k,j){var m={currentPage:K,totalPages:D.getTotalPages(j),onPageClicked:function(o,q,p,n){K=n;
D.renderStudentProjectItems()
}};
k.bootstrapPaginator(m)
};
D.filterNewseventsItems=function(){if(h.profiledetails&&h.profiledetails.newseventsList&&h.profiledetails.newseventsList.length>0){U.append('<li><a href="#tab-newsevents" data-toggle="tab">NEWS & ARTICLES</a><img src="/etc/designs/manipal/images/content-panel-left-nav-highlight-arrow.png" class="profile-details-highlight-arrow" alt="Selected Icon" /></li>');
d.append('<li><a href="#tab-newsevents" class="stream-category-mobile">NEWS & ARTICLES</a></li>');
O=[];
for(var j=0;
j<h.profiledetails.newseventsList.length;
j++){O.push(h.profiledetails.newseventsList[j])
}D.setupNewseventsPageData();
D.renderNewseventsItems()
}};
D.filterResearchItems=function(){if(h.profiledetails&&h.profiledetails.researchList&&h.profiledetails.researchList.length>0){U.append('<li><a href="#tab-research" data-toggle="tab">RESEARCH</a><img src="/etc/designs/manipal/images/content-panel-left-nav-highlight-arrow.png" class="profile-details-highlight-arrow" alt="Selected Icon" /></li>');
d.append('<li><a href="#tab-research" class="stream-category-mobile">RESEARCH</a></li>');
M=[];
for(var j=0;
j<h.profiledetails.researchList.length;
j++){M.push(h.profiledetails.researchList[j])
}D.setupResearchPageData();
D.renderResearchItems()
}};
D.filterBlogItems=function(){if(h.profiledetails&&h.profiledetails.blogList&&h.profiledetails.blogList.length>0){U.append('<li><a href="#tab-blog" data-toggle="tab">BLOG POSTS</a><img src="/etc/designs/manipal/images/content-panel-left-nav-highlight-arrow.png" class="profile-details-highlight-arrow" alt="Selected Icon" /></li>');
d.append('<li><a href="#tab-blog" class="stream-category-mobile">BLOG POSTS</a></li>');
V=[];
for(var j=0;
j<h.profiledetails.blogList.length;
j++){V.push(h.profiledetails.blogList[j])
}D.setupBlogPageData();
D.renderBlogItems()
}};
D.filterPatentItems=function(){if(h.profiledetails&&h.profiledetails.patentList&&h.profiledetails.patentList.length>0){U.append('<li><a href="#tab-patent" data-toggle="tab">PATENTS</a><img src="/etc/designs/manipal/images/content-panel-left-nav-highlight-arrow.png" class="profile-details-highlight-arrow" alt="Selected Icon" /></li>');
d.append('<li><a href="#tab-patent" class="stream-category-mobile">PATENTS</a></li>');
H=[];
for(var j=0;
j<h.profiledetails.patentList.length;
j++){H.push(h.profiledetails.patentList[j])
}D.setupPatentPageData();
D.renderPatentItems()
}};
D.filterPublicationItems=function(){if(h.profiledetails&&h.profiledetails.publicationList&&h.profiledetails.publicationList.length>0){U.append('<li><a href="#tab-publication" data-toggle="tab">PUBLICATIONS</a><img src="/etc/designs/manipal/images/content-panel-left-nav-highlight-arrow.png" class="profile-details-highlight-arrow" alt="Selected Icon" /></li>');
d.append('<li><a href="#tab-publication" class="stream-category-mobile">PUBLICATIONS</a></li>');
I=[];
for(var j=0;
j<h.profiledetails.publicationList.length;
j++){I.push(h.profiledetails.publicationList[j])
}D.setupPublicationPageData();
D.renderPublicationItems()
}};
D.filterStudentProjectItems=function(){if(h.profiledetails&&h.profiledetails.studentprojectList&&h.profiledetails.studentprojectList.length>0){U.append('<li><a href="#tab-studentproject" data-toggle="tab">STUDENT PROJECTS</a><img src="/etc/designs/manipal/images/content-panel-left-nav-highlight-arrow.png" class="profile-details-highlight-arrow" alt="Selected Icon" /></li>');
d.append('<li><a href="#tab-studentproject" class="stream-category-mobile">STUDENT PROJECTS</a></li>');
b=[];
for(var j=0;
j<h.profiledetails.studentprojectList.length;
j++){b.push(h.profiledetails.studentprojectList[j])
}D.setupStudentProjectPageData();
D.renderStudentProjectItems()
}};
D.init=function(){D.checkDevice();
D.filterResearchItems();
D.filterNewseventsItems();
D.filterBlogItems();
D.filterPatentItems();
D.filterPublicationItems();
D.filterStudentProjectItems();
return this
};
return this.init()
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
/*!
 * global.js (e.g. filter.client.js)
 * This file contains the code for the Initialzing Carousel in Home page.
 *
 * @project   Manipal GE
 * @date      2013-11-27
 * @author    Kamatchi Pandiarajan, SapientNitro <kpandiarajan@sapient.com>
 * @licensor  CLIENTNAME
 * @site      Manipal
 *
 */
(function(j,f,h){function g(c,b,a){if(a){var e;
var d=new Date();
d.setTime(d.getTime()+(a*24*60*60*1000));
e="; expires="+d.toGMTString()
}document.cookie=escape(c)+"="+escape(b)+e+"; path=/"
}function k(d){var b=escape(d)+"=";
var e=document.cookie.split(";");
for(var c=0;
c<e.length;
c++){var a=e[c];
while(a.charAt(0)===" "){a=a.substring(1,a.length)
}if(a.indexOf(b)===0){return unescape(a.substring(b.length,a.length))
}}return null
}j.newsFlash=(function(){function a(){var b=this;
this.init=function(){f(function(){if(!f("body").hasClass("manipal-mobile")){var m=f(".top-navigation").outerHeight();
if(k("close_new_flash")===null){b.FlashBanner()
}else{f(".news-flash-banner").addClass("hide-news-flash")
}if(f(".news-flash-banner").length==0||f(".hide-news-flash").length!=0){f(".js-primary-sticky").css("top",m);
if(f(".breadcrumb-container").length!=0){var c=f(".primary-nav-container").outerHeight()+m+5;
f(".breadcrumb-container").css("top",c)
}}else{if(f(".news-flash-banner").length>0&&f(".hide-news-flash").length==0){var n=f(".news-flash-banner").outerHeight();
if(f(".breadcrumb-container").length!=0){var d=parseInt(f(".primary-nav-container").outerHeight()+m+5);
f(".breadcrumb-container").css("top",d+n)
}if(f(".two-link").length!=0){var e=parseInt(f(".two-link").css("top"));
f(".two-link").css("top",e+n)
}}}}});
b.closeBanner();
return this
};
this.FlashBanner=function(){f(".news-flash-message").flexslider({animation:"slide",slideshowSpeed:"6000",directionNav:false,slideshow:true,controlNav:false})
};
this.closeBanner=function(){f(".close-button").on("click",function(c){c.preventDefault();
g("close_new_flash","true");
f(".news-flash-banner").animate({height:"0"},200,"linear",function(){f(this).remove()
});
var m=f(".top-navigation").outerHeight();
f(".js-primary-sticky").css("top",m);
if(f(".breadcrumb-container").length!=0){var d=f(".primary-nav-container").outerHeight()+m+5;
f(".breadcrumb-container").css("top",d)
}f(".request4info.manipal-web-view").removeClass("newsflashShowing");
if(f(".two-link").length!=0){var n=f(".news-flash-banner").outerHeight();
var e=parseInt(f(".two-link").css("top"));
f(".two-link").css("top",e-n);
console.log(n,e)
}})
};
return this.init()
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
/*!
 *
 * This file contains the code for the Initialzing Inspired Learning Carousel in Home page.
 *
 * @project   Manipal GE
 * @date      2013-11-27
 * @author    Kamatchi Pandiarajan, SapientNitro <kpandiarajan@sapient.com>
 * @licensor  CLIENTNAME
 * @site      Manipal
 *
 */
(function(d,e,f){d.arr=null,d.scrollArr=null;
if(d.config!=f){e.each(d.config.stickyNav,function(b,a){if(b=="containerId"){d.arr=[a.research,a.hands_on,a.discipline,a.enterpreneurship,a.careers,a.scholorship,a.news_events,a.video_planner]
}else{if(b=="smoothScrollId"){d.scrollArr=[a.research,a.learning,a.disciplines,a.entrepreneurship,a.careers,a.scholarships]
}}})
}d.inspiredLearning=(function(){function a(){var b=this;
var h=e(window).width();
this.init=function(){if(d.categories!=f){if(h>767){b.categoryCarouselDom();
setTimeout(function(){b.categoryCarousel()
},2500)
}else{b.mobileCarouselDom()
}}return this
};
if(d.scrollArr!=f){for(var c=0;
c<d.scrollArr.length;
c++){e("a[href='"+d.scrollArr[c]+"']").click(function(){var g=e(this).attr("href");
b.smoothScroll(g)
})
}}this.categoryCarousel=function(){e.each(d.categories,function(k,m){var g=Object.keys(d.categories).indexOf(k);
e("section[data-scroll-index="+g+"] .carousel-container").flexslider({animation:"slide",slideshowSpeed:"6000",directionNav:false,slideshow:false,startAt:0,controlsContainer:"section[data-scroll-index="+g+"] .category-nav-container",start:function(j){e(j).find("img.lazy_load:eq(1)").each(function(){var n=e(this).attr("data-src");
e(this).attr("src",n).removeAttr("data-src")
})
},before:function(w){var y=w.slides,t=w.animatingTo,u=e(y[t]),s=u.find("img[data-src]"),v=t,j=v+1,x=v-1;
u.parent().find("img.lazy_load:eq("+v+"), img.lazy_load:eq("+x+"), img.lazy_load:eq("+j+")").each(function(){var n=e(this).attr("data-src");
e(this).attr("src",n).removeAttr("data-src")
})
}})
})
};
this.categoryCarouselDom=function(){var g=e(".bs-docs-container").find("section");
var n=g.length;
for(var m=0;
m<n;
m++){e(g[m]).attr("data-scroll-index",m)
}e.each(d.categories,function(k,o){var j=Object.keys(d.categories).indexOf(k);
e.each(o,function(x,u){var w="";
if(e.trim(u.go_link)!=""){if(u.go_linkType=="false"){w="<a class='more-info-link' href='"+u.go_link+"' title='"+u.link_title+"'>"
}else{w="<a class='more-info-link' href='"+u.go_link+"' title='"+u.link_title+"' target='_blank'>"
}}var A=Object.keys(o).indexOf(x);
e("section[data-scroll-index="+j+"]").find(".categories").attr("id",k);
if(u.go_link2){var z="";
if(e.trim(u.go_link2)!=""){if(u.go_link2Type=="false"){z="<a class='more-info-link secondLink' href='"+u.go_link2+"' title='"+u.link_title2+"'>"
}else{z="<a class='more-info-link secondLink' href='"+u.go_link2+"' title='"+u.link_title2+"' target='_blank'>"
}}e("section[data-scroll-index="+j+"]").find(".categories .slides").append("<li class = '"+u.color_scheme+"'><div class='category-parent'><div class='container-940'><div class='"+u.position+"'><h3 class='"+u.header_css+"'>"+u.header+"</h3><h2 class='"+u.big_title_css+"'>"+u.big_title+"</h2><p class='"+u.small_css+"'>"+u.text_line1+"</p>"+w+"<span class='see-more'>"+u.link_content+"</span></a>"+z+"<span class='see-more'>"+u.link_content2+"</span></a></div></div></div></li>")
}else{e("section[data-scroll-index="+j+"]").find(".categories .slides").append("<li class = '"+u.color_scheme+"'><div class='category-parent'><div class='container-940'><div class='"+u.position+"'><h3 class='"+u.header_css+"'>"+u.header+"</h3><h2 class='"+u.big_title_css+"'>"+u.big_title+"</h2><p class='"+u.small_css+"'>"+u.text_line1+"</p>"+w+"<span class='see-more'>"+u.link_content+"</span></a></div></div></div></li>")
}var y=e("section[data-scroll-index="+j+"] .category-nav-container");
var v=(u.position=="content-left")?"nav-left":"nav-right";
y.addClass(v)
})
});
b.imageCarouselDom(false)
};
this.imageCarouselDom=function(g){e.each(d.categories,function(n,o){var m=Object.keys(d.categories).indexOf(n);
e.each(o,function(j,p){var k=Object.keys(o).indexOf(j);
var q=e("section[data-scroll-index="+m+"]").find(".categories .slides li")[k];
e(q).append("<img class='lazyload' data-src='"+p.image+"' alt='"+p.alt_content+"' />")
})
})
};
this.mobileCarouselDom=function(){var m=e(".bs-docs-container").find("section");
var o=m.length;
var g=e(".mage-sidebar .sidenav li");
for(var n=0;
n<o;
n++){e(m[n]).attr("data-scroll-index",n)
}e.each(d.categories,function(q,j){var p=Object.keys(d.categories).indexOf(q);
var k="";
e.each(j,function(z,w){var A=e(g[p]).find(".inspired-content h3 a").text(),y=e(g[p]).find(".inspired-icon").html(),x=e(g[p]).find(".inspired-content p").text();
e("section[data-scroll-index="+p+"]").find(".categories").attr("id",q);
var v="";
k="<li class = '"+w.color_scheme+"'>";
if(q=="discipline"){e("section[data-scroll-index="+p+"]").find(".learning-mobile-content").height("100%");
e("section[data-scroll-index="+p+"]").find(".learning-mobile-content").addClass("mobile-discipline");
v=e(".discipline-list").html()
}else{if(w.imageformobile!=null&&w.imageformobile!=""&&w.imageformobile!=f){k+="<img data-src='"+w.imageformobile+"' alt='"+A+"' class='learning-mobile-images lazyload imageForMobile' />"
}else{if(!w.imageformobile){k+="<img data-src='"+w.img_mobile+"' alt='"+A+"' class='learning-mobile-images lazyload' />"
}}}k+="<div class='"+w.position+"'><h3>";
if(e("#domainValue").val()=="MUD"){k+="<div class='mobile-icon-bg'>"
}k+=y;
if(e("#domainValue").val()=="MUD"){k+="</div>"
}k+=A+"</h3>";
if(q!="discipline"){k+="<p class='learning-mobile-info'>"+x+"</p><a href='"+w.go_link+".html' title='"+w.link_content+"' class='view_more'>";
if(e("#domainValue").val()=="MUD"){k+=""
}else{k+=w.link_content
}k+="</a>";
if(w.go_link2){k+="<a href='"+w.go_link2+".html' title='"+w.link_content2+"' class='view_more secondLink'>";
if(e("#domainValue").val()=="MUD"){k+="</a>"
}else{k+=w.link_content2+"</a>"
}}}k+="</div></li>"+v;
e("section[data-scroll-index="+p+"]").find(".learning-mobile-content").append(k);
return false
})
})
};
this.smoothScroll=function(g){var j=e(g);
e("html,body").animate({scrollTop:(j.offset()!=f)?j.offset().top:0},"slow")
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(h,e,g){var f=false;
h.stickyNavHome=(function(){function a(){var b=this;
var d=e(".top-navigation").outerHeight(true)+e(".news-flash-banner").outerHeight(true);
var c=false;
function j(){var k=e(window).scrollTop();
if(k>=d){e(".js-primary-sticky_fixed").removeClass("hidden").css("opacity",1);
if(!c){c=true;
e(".js-primary-sticky_fixed").css("top",-d+"px").stop().css({top:0});
e(".main-nav-container").addClass("stuck")
}}else{c=false;
e(".js-primary-sticky_fixed").stop().css({opacity:0,top:-d+"px"});
e(".js-primary-sticky_fixed").addClass("hidden");
e(".main-nav-container").removeClass("stuck")
}}this.init=function(){e(document).ready(function(){e(window).scroll(j)
});
return this
};
return this.init()
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
/*!
 *
 * This file contains the code for the Initialzing Inspired Learning Carousel in Home page.
 *
 * @project   Manipal GE
 * @date      2013-12-10
 * @author    Malarvannan, SapientNitro <kpandiarajan@sapient.com>
 * @licensor  CLIENTNAME
 * @site      Manipal
 *
 */
(function(d,e,f){e.log=function(a){if(MODULE.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
d.disciplineModule=(function(){function a(){var b=this;
var c=e(window).width();
if(c>767&&c<940){e("body").removeAttr("class").addClass("manipal-tablet")
}else{if(c>939){e("body").removeAttr("class").addClass("manipal-regular-web")
}}this.showHideComponent=function(){if(e("#show-all-disciplines")){e(".manipal-regular-web #show-all-disciplines").bind("click",function(h){h.preventDefault();
e("#discipline-short-list").animate({opacity:0},1000);
e(".discipline-list").animate({right:0},1000)
});
e(".manipal-tablet #show-all-disciplines").bind("click",function(h){h.preventDefault();
e("#discipline-short-list").animate({opacity:0},1000);
e(".discipline-list").animate({right:0},1000)
})
}if(e(".discipline-title")){e(".manipal-regular-web .discipline-title .close-btn").bind("click",function(h){h.preventDefault();
e("#discipline-short-list").animate({opacity:1},1000);
e(".discipline-list").animate({right:"-841px"},1000)
});
e(".manipal-tablet .discipline-title .close-btn").bind("click",function(h){h.preventDefault();
e("#discipline-short-list").animate({opacity:1},1000);
e(".discipline-list").animate({right:"-500px"},1000)
})
}};
this.checkForMobile=function(){e(document).ready(function(){if(e(".manipal-mobile .discipline-title")){e(".manipal-mobile .discipline-title").bind("click",function(h){h.preventDefault();
e(".manipal-mobile #discipline-short-list").stop();
e(".manipal-mobile .discipline-list").stop()
})
}})
};
this.showActiveState=function(){e(".discipline-all-container a, .discipline-body a").on("mouseenter",function(){var h=e(this);
h.find(".regular").hide();
h.find(".active").show()
});
e(".discipline-all-container a, .discipline-body a").on("mouseleave",function(){var h=e(this);
h.find(".active").hide();
h.find(".regular").show()
})
};
this.init=function(){b.showHideComponent();
b.showActiveState();
b.checkForMobile();
return this
};
return this.init()
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
/*!
 * This file contains the code for the Initialzing Ranking Carousel.
 *
 * @project   Manipal GE
 * @date      2013-12-24
 * @author    Shaunak Trivedi, SapientNitro <strivedi4@sapient.com>
 * @licensor  CLIENTNAME
 * @site      Manipal
 *
 */
(function(d,e,f){e.log=function(a){if(MODULE.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
d.rankingCarousel=(function(){function a(){var b=this,c=null;
this.init=function(){if(d.rankingCarouselConfig!=f){e(function(){if(e("body").hasClass("manipal-mobile")){b.RankingCarouselMobile();
b.mobileFlexSliderDom()
}else{b.flexSliderDom();
b.RankingCarousel()
}})
}return this
};
this.RankingCarousel=function(){setTimeout(function(){e(".ranking-carousel .flexslider").flexslider({controlsContainer:"flex-ranking-container",animation:"slide",slideshowSpeed:"6000",directionNav:false,slideshow:false,itemWidth:220,itemMargin:80,includeItemMargin:true,animationLoop:false})
},1000)
};
this.RankingCarouselMobile=function(){setTimeout(function(){e(".ranking-container-mobile .flexslider").flexslider({controlsContainer:"flex-ranking-container-mobile",animation:"slide",slideshowSpeed:"6000",directionNav:false,slideshow:false,itemWidth:0,itemMargin:0,includeItemMargin:true,animationLoop:false})
},1000)
};
this.flexSliderDom=function(){e.each(d.rankingCarouselConfig,function(k,j){if(j.award_image){e(".ranking-carousel .flexslider ul.slides").append("<li><div class='row slider-container'><div class='slider-container-cols'><div class='row ranking-head-text'><div class='square'></div><div class='institute_name'>"+j.institute_name+"</div></div><div class='row award_image'><img src='"+j.award_image_path+"' alt='Go'/></div></div><ul class='row source-item'><li class='white-text text-desc'>"+j.text_line+"</li><li><img src='"+j.source_logo+"' alt='Go'/></li><li class='white-text ranking-source-text'>"+j.source_name+"</li></ul></li>")
}else{e(".ranking-carousel .flexslider ul.slides").append("<li><div class='row slider-container'><div class='slider-container-cols'><div class='row ranking-head-text'><div class='square'></div><div class='institute_name'>"+j.institute_name+"</div></div><div class='row institute-info'><div class='institute-desc'>"+j.institute_desc+"</div><div class='ranking-rank-text'>"+j.institute_rank+"</div></div></div><ul class='row source-item'><li class='white-text text-desc'>"+j.text_line+"</li><li><img src='"+j.source_logo+"' alt='Go'/></li><li class='white-text ranking-source-text'>"+j.source_name+"</li></ul></li>")
}})
};
this.mobileFlexSliderDom=function(){var h=0;
e(".ranking-container-mobile .flexslider .slides").empty();
e.each(d.rankingCarouselConfig,function(j,g){if(h<4){if(g.award_image){e(".ranking-container-mobile .flexslider .slides").append("<li><div class='ranking-cotainer-mobile'><div class='ranking-left-container'><div class='ranking-header-mobile'><div class='square'></div><div class='institute_name'>"+g.institute_name+"</div></div><div class='award_image'><img src='"+g.award_image_path+"' alt='Go'/></div></div><div class='ranking-right-container'><div class='ranking-right-source-bg'><div class='ranking-right-content'>"+g.text_line+"</div><div class='outlook-icon-mobile'><img src='"+g.source_logo+"' alt='Go'/></div><div class='ranking-source-text-mobile'>"+g.source_name+"</div></div></div></div></li>")
}else{e(".ranking-container-mobile .flexslider .slides").append("<li><div class='ranking-cotainer-mobile'><div class='ranking-left-container'><div class='ranking-header-mobile'><div class='square'></div><div class='institute_name'>"+g.institute_name+"</div></div><div class='ranking-rank-text-mobile'>"+g.institute_rank+"</div><div class='institute-desc'>"+g.institute_desc+"</div></div><div class='ranking-right-container'><div class='ranking-right-source-bg'><div class='ranking-right-content'>"+g.text_line+"</div><div class='outlook-icon-mobile'><img src='"+g.source_logo+"' alt='Go'/></div><div class='ranking-source-text-mobile'>"+g.source_name+"</div></div></div></div></li>")
}}h++
})
};
if(!e.trim(e(".ranking-container").find(".view-all").text())){e(".ranking-container").find(".view-all").addClass("hide")
}}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(j,k,h){k.log=function(a){if(j.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
k.toType=(function f(a){return function(b){if(b===a){return"global"
}return({}).toString.call(b).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
}
}(this));
var g=k("#primary-sticky").outerHeight(true)+k("#sticky-nav").outerHeight(true);
j.overlay=(function(){function a(){var d=k(".heritage-container .heritage-row").length;
var m=0;
var b=4;
var e=Math.ceil(d/b);
if(e>1){k(".heritage-container .heritage-row").slice(b,d).hide();
k(".carousel-right-arrow").show()
}k(".carousel-right-arrow").click(function(){m++;
k(".heritage-container .heritage-row").hide();
var n=m*b;
var o=parseInt(n+b);
k(".heritage-container .heritage-row").slice(n,o).show("slide",{direction:"right"},1000);
k(".carousel-left-arrow").show();
if(m==e-1){k(".carousel-right-arrow").hide();
return
}});
k(".carousel-left-arrow").click(function(){m--;
if(m<e-1){k(".carousel-right-arrow").show()
}var o=m*b;
var n=parseInt(o+b);
k(".heritage-container .heritage-row").hide();
k(".heritage-container .heritage-row").slice(o,n).show("slide",{direction:"left"},1000);
if(m==0){k(".carousel-right-arrow").show();
k(".carousel-left-arrow").hide();
return
}});
var c=this;
this.popupInit=function(){k(".dialog-modal").dialog({height:"auto",width:"auto",modal:true,closeOnEscape:true,appendTo:"#videoplanner",autoOpen:false});
k(".heritage-container li").click(function(){var o=k(this).attr("id");
var n=o.substr(0,5);
j.loadOverlay(n,o)
});
j.loadOverlay=function(v,z){if(v=="video"){k("#image-overlay,#text-overlay").hide();
k("#youtube-video").show();
var D=k("#"+z).find(".heritage-video-hidden").text();
var E=k("#"+z).find(".heritage-video-year-hidden").text();
var B=k("#"+z).find(".heritage-video-more-link-hidden").text();
var C=k("#"+z).find(".heritage-video-more-hidden").text();
k(".video-year").text(E);
k(".video-description").text(x);
k(".video-overlay-read-more a").text(C);
k(".video-overlay-read-more a").attr("href",B);
k(".dialog-modal").dialog("open");
k(".video-url").attr("src",D)
}else{if(v=="image"){k("#youtube-video,#text-overlay").hide();
k("#image-overlay").show();
var y=k("#"+z).find(".heritage-image-hidden").text();
var E=k("#"+z).find(".heritage-image-year-hidden").text();
var x=k("#"+z).find(".heritage-image-text-hidden").text();
var C=k("#"+z).find(".heritage-image-more-hidden").text();
var B=k("#"+z).find(".heritage-image-more-link-hidden").text();
k(".image-year").text(E);
k(".image-description").text(x);
k(".image-overlay-read-more a").text(C);
k(".image-overlay-read-more a").attr("href",B);
k(".dialog-modal").dialog("open");
k("#image-overlay img").attr("src",y)
}else{k("#text-overlay").show();
k("#youtube-video,#image-overlay").hide();
var w=k("#"+z).find(".heritage-text-heading").text();
var x=k("#"+z).find(".heritage-text-content").text();
var C=k("#"+z).find(".heritage-text-more-hidden").text();
var B=k("#"+z).find(".heritage-text-more-link-hidden").text();
k(".text-overlay-heading").text(w);
k(".text-overlay-content").text(x);
k(".text-overlay-read-more a").text(C);
k(".text-overlay-read-more a").attr("href",B);
k(".dialog-modal").dialog("open")
}}var A=k("#videoplanner").offset().left;
k("#videoplanner .ui-dialog").css("top","130px");
k("#videoplanner .ui-dialog").css("left",A+130+"px")
};
k(".auto-open-overlay").trigger("click");
k(".ui-dialog-titlebar-close").click(function(){k(".video-url").attr("src","")
})
};
this.init=function(){c.popupInit();
return this
};
return this.init()
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(j,k,h){k.log=function(a){if(j.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
k.toType=(function f(a){return function(b){if(b===a){return"global"
}return({}).toString.call(b).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
}
}(this));
var g=k("#primary-sticky").outerHeight(true)+k("#sticky-nav").outerHeight(true);
j.overlay=(function(){function a(){var d=k(".heritage-container .heritage-row").length;
var m=0;
var b=4;
var e=Math.ceil(d/b);
if(e>1){k(".heritage-container .heritage-row").slice(b,d).hide();
k(".carousel-right-arrow").show()
}k(".carousel-right-arrow").click(function(){m++;
k(".heritage-container .heritage-row").hide();
var n=m*b;
var o=parseInt(n+b);
k(".heritage-container .heritage-row").slice(n,o).show("slide",{direction:"right"},1000);
k(".carousel-left-arrow").show();
if(m==e-1){k(".carousel-right-arrow").hide();
return
}});
k(".carousel-left-arrow").click(function(){m--;
if(m<e-1){k(".carousel-right-arrow").show()
}var o=m*b;
var n=parseInt(o+b);
k(".heritage-container .heritage-row").hide();
k(".heritage-container .heritage-row").slice(o,n).show("slide",{direction:"left"},1000);
if(m==0){k(".carousel-right-arrow").show();
k(".carousel-left-arrow").hide();
return
}});
var c=this;
this.popupInit=function(){k(".dialog-modal").dialog({height:"auto",width:"auto",modal:false,closeOnEscape:true,appendTo:"#videoplanner",draggable:false,autoOpen:false,resizable:false});
k(".heritage-container li").click(function(){var p=k(this).attr("id");
var o=p.substr(0,5);
k("#videoplanner").attr("class","");
var q=k("#"+p).find(".overlay-theme").text();
k("#videoplanner").addClass(q);
j.loadOverlay(o,p)
});
j.loadOverlay=function(v,z){if(v=="video"){k("#image-overlay,#text-overlay").hide();
k("#youtube-video").show();
var D=k("#"+z).find(".heritage-video-hidden").text();
var E=k("#"+z).find(".heritage-video-year-hidden").text();
var B=k("#"+z).find(".heritage-video-more-link-hidden").text();
var C=k("#"+z).find(".heritage-video-more-hidden").text();
k(".video-year").text(E);
k(".video-description").text(x);
k(".video-overlay-read-more a").text(C);
k(".video-overlay-read-more a").attr("href",B);
if(B.indexOf("http")!=-1){k(".video-overlay-read-more a").attr("target","_blank")
}k(".dialog-modal").dialog("open");
k(".video-url").attr("src",D)
}else{if(v=="image"){k("#youtube-video,#text-overlay").hide();
k("#image-overlay").show();
var y=k("#"+z).find(".heritage-image-hidden").text();
var E=k("#"+z).find(".heritage-image-year-hidden").text();
var x=k("#"+z).find(".heritage-image-text-hidden").text();
var C=k("#"+z).find(".heritage-image-more-hidden").text();
var B=k("#"+z).find(".heritage-image-more-link-hidden").text();
k(".image-year").text(E);
k(".image-description").text(x);
k(".image-overlay-read-more a").text(C);
k(".image-overlay-read-more a").attr("href",B);
if(B.indexOf("http")!=-1){k(".image-overlay-read-more a").attr("target","_blank")
}k(".dialog-modal").dialog("open");
k("#image-overlay img").attr("src",y)
}else{k("#text-overlay").show();
k("#youtube-video,#image-overlay").hide();
var w=k("#"+z).find(".heritage-text-heading").text();
var x=k("#"+z).find(".heritage-text-content").text();
var C=k("#"+z).find(".heritage-text-more-hidden").text();
var B=k("#"+z).find(".heritage-text-more-link-hidden").text();
k(".text-overlay-heading").text(w);
k(".text-overlay-content").text(x);
k(".text-overlay-read-more a").text(C);
k(".text-overlay-read-more a").attr("href",B);
if(B.indexOf("http")!=-1){k(".text-overlay-read-more a").attr("target","_blank")
}k(".dialog-modal").dialog("open")
}}var A=k("#videoplanner").offset().left;
k("#videoplanner .ui-dialog").css("top","133px");
k("#videoplanner .ui-dialog").css("left",A+132+"px")
};
k(".ui-dialog-titlebar-close").click(function(){k(".video-url").attr("src","")
})
};
this.init=function(){c.popupInit();
return this
};
return this.init()
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(d,e,f){d.leftNav=(function(){function a(){var b=this;
this.changeLeftNavOptions=function(){e(".leftNavC155Menu").click(function(h){h.stopPropagation()
});
b.leftNavChildPageClick();
b.leftNavGrandChildPageClick()
};
this.leftNavChildPageClick=function(){e(".leftNavComp").on("click",function(h){if(!e(this).hasClass("activeChild")){if((!e(h.target).is(".grandchildNav ul li"))&&(!e(h.target).is(".grandchildNav ul li a"))){e(".leftNavComp").removeClass("activeChild");
e(this).addClass("activeChild");
e(".grandchildNav").hide();
e(this).find(".grandchildNav").slideToggle("slow");
e(".grandchildNav ul li a,.grandchildNav ul li").removeClass("active");
e(this).find(".grandchildNav li a").eq(0).addClass("active");
if(e(this).find(".grandchildNav li").length>0){e("#leftNavC155Menu").text(e(this).find(".grandchildNav li a").eq(0).text())
}else{e("#leftNavC155Menu").text(e(this).text())
}}}})
};
this.classic_menu=function(){var p=new Array(),v=new Array(),t=new Array();
var q=e.parseJSON(e("#classicNavigation").val());
var r=e(".menu_list");
if(q!=null){e.each(q,function(h,g){e.each(g,function(j,k){if(k.items!=""){e.each(k.items,function(z,B){var A=e("<li/>").addClass("").appendTo(r);
var D=e("<a/>").addClass("parent").text(B.name).attr("href",B.link).appendTo(A);
var m=B.link;
var C=m.split("/");
p.push(C[C.length-1]);
if(B.items!=""){e(A).addClass("has-sub");
var n=e("<ul/>").addClass("").appendTo(A);
e.each(B.items,function(J,y){var x=e("<li/>").addClass("").appendTo(n);
var I=e("<a/>").addClass("child").text(y.name).attr("href",y.link).appendTo(x);
var G=y.link;
var H=G.split("/");
v.push(H[H.length-1]);
if(y.items!=""){e(x).addClass("has-sub");
var w=e("<ul/>").addClass("grandChild").appendTo(x);
e.each(y.items,function(O,M){var F=e("<li/>").addClass("").appendTo(w);
var N=e("<a/>").addClass("").text(M.name).attr("href",M.link).appendTo(F);
var E=M.link;
var P=E.split("/");
t.push(P[P.length-1])
})
}})
}})
}})
})
}var o=location.pathname;
var s=o.split("/");
var u=s[s.length-1];
if(q!=null){e.each(q,function(h,g){e.each(g,function(n,x){var m=x.link;
var w=m.split("/");
var j=w[w.length-1];
if(u==j){var k=e("<li/>").appendTo(e(".classicMob_menu"));
e("<a/>").text(x.name).attr("href",x.link).appendTo(k);
console.log(x);
e.each(x,function(y,z){if(typeof(z)==="object"){c(z)
}})
}else{var k=e("<li/>").appendTo(e(".classicMob_menu"));
e("<a/>").text(x.name).attr("href",x.link).appendTo(k);
e.each(x.items,function(F,H){var D=H.link;
var E=D.split("/");
var G=E[E.length-1];
if(u==G){var C=e("<li/>").appendTo(e(".classicMob_menu"));
e("<a/>").text(H.name).attr("href",H.link).appendTo(C);
if(H.items!=""){e.each(H,function(z,y){if(typeof(y)==="object"){c(y)
}})
}else{if(typeof(x.items)==="object"){c(x.items)
}}}else{e.each(H.items,function(B,z){var J=z.link;
var I=J.split("/");
var y=I[I.length-1];
if(u==y){if(z.items!=""){e.each(z,function(L,K){if(typeof(K)==="object"){c(K)
}})
}else{var A=e("<li/>").appendTo(e(".classicMob_menu"));
e("<a/>").text(H.name).attr("href",H.link).appendTo(A);
if(typeof(H.items)==="object"){c(H.items)
}}}})
}})
}})
})
}};
function c(h){e.each(h,function(m,g){var n=e("<li/>").appendTo(e(".classicMob_menu"));
e("<a/>").text(g.name).attr("href",g.link).appendTo(n)
})
}this.leftNavGrandChildPageClick=function(){e(".grandchildNav ul li a").click(function(){e(".grandchildNav ul li a,.grandchildNav ul li").removeClass("active");
e(this).addClass("active");
e("#leftNavC155Menu").text(e(this).text())
})
};
this.init=function(){e(document).ready(function(){if(e("body").hasClass("manipal-mobile")){b.changeLeftNavOptions()
}else{b.leftNavChildPageClick();
b.leftNavGrandChildPageClick();
e(".leftNavComp.activeChild").prev().prev().addClass("removeBottomBorder")
}var h=e("#detail-overview").outerHeight(true);
h+=10;
h=h+"px";
e(".leftnav-mainContainer .leftnav-rightContent .content-panel-wrapper").css("margin-top",h);
if(e("#classicNavigation").val()!=""&&e("#classicNavigation").val()!=f){b.classic_menu()
}})
};
return this.init()
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
/*!
 * This file contains the code for the profile details.
 *
 * @project   Manipal GE
 * @date      2014-01-19
 * @author    Malarvannan S, SapientNitro <smalarvannan@sapient.com>
 * @licensor  CLIENTNAME
 * @site      Manipal
 *
 */
(function(h,e,g){e.log=function(a){if(h.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
e.toType=(function f(a){return function(b){if(b===a){return"global"
}return({}).toString.call(b).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
}
}(this));
h.insitituteStreamBasedList=(function(){function a(){var b=this,c=e(".programs-content-container"),d=e(".programs-leftnav li"),k=false,m=e("#stream-based-image-category-mobile span.dropdown-default-category");
b.sortAlpha=function(j,n){return j.innerHTML.toLowerCase()>n.innerHTML.toLowerCase()?1:-1
};
b.checkDevice=function(){e(document).ready(function(){if(e("#stream-based-image-category-mobile").is(":visible")){m=e("#stream-based-image-category-mobile span.dropdown-default-category");
d=e(".stream-image-category-mobile");
k=true;
var j=m.text().toLowerCase().replace(/[\s\-]/g,"");
b.paintStreamBasedContent(j);
e(".stream-image-category-mobile").click(function(o){o.preventDefault();
var p=m.text();
m.text(e(this).text());
var q=e(this).text().replace(/[\s\-]/g,"").toLowerCase();
e(this).text(p);
e(".stream-based-img-content-wrapper .dropdown-menu li").sort(b.sortAlpha).appendTo(".dropdown-menu");
b.paintStreamBasedContent(q)
})
}})
};
b.init=function(){b.checkDevice();
if(h.institutes_sb_image_list!=g){e(function(){b.leftNavClick()
});
if(!k){var j=e(".programs-leftnav li.active").find("p.left-nav-title").text().toLowerCase().replace(/[\s\-]/g,"");
b.paintStreamBasedContent(j);
b.initOtherInstituteSlider()
}}return this
};
this.leftNavClick=function(){if(!k){d.on("click",function(j){j.preventDefault();
d.removeClass("active");
e(this).addClass("active");
var n=e(this).find("p.left-nav-title").text().toLowerCase().replace(/[\s\-]/g,"");
b.paintStreamBasedContent(n)
})
}};
this.initOtherInstituteSlider=function(){if(!k){e(".other-institute-container").flexslider({animation:"slide",slideshowSpeed:"6000",controlNav:false,directionNav:true,slideshow:false,itemWidth:210,itemMargin:25,includeItemMargin:true})
}};
this.paintStreamBasedContent=function(w){var t=h.institutes_sb_image_list,j;
e.each(t,function(o,n){var p=o.toLowerCase().replace(/[\s\-]/g,"");
if(p==w){j=n;
return false
}});
if(j){var r=j.other_institutes,u=r.length,v="";
for(var s=0;
s<u;
s++){v+='<li><p class="other-institute-pic"><img src="'+r[s].other_institute_img+'" alt="OTHER INSTITUTE 1" /></p><p class="other-institute-title">'+r[s].other_institute_title+'</p><p class="other-institute-desc">'+r[s].other_institute_description+'</p><p class="read-more"><a href="'+r[s].other_read_more_link+'" title="READ MORE">Read More</a></li>'
}e(".programs-content-container").html('<div class="star-institute-container"><p class="star-institute-pic"><img src="'+j.star_institute_img+'" alt="STAR INSTITUTE" /></p><p class="star-institute-title">'+j.star_institute_title+'</p><p class="star-institute-desc">'+j.star_institute_description+'</p><p class="read-more"><a href="'+j.star_read_more_link+'" title="READ MORE">Read More</a></div><p class="horizontal-line manipal-web"></p><div class="other-institute-container"><p class="other-institute-top-title">'+j.other_institutes_top_title+'</p><ul class="other-institute-list slides">'+v+"</ul></div>");
b.initOtherInstituteSlider()
}else{e(".programs-content-container").html("<p> No Data Found</p>")
}}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
/*!
 * This file contains the code for the profile details.
 *
 * @project   Manipal GE
 * @date      2013-12-24
 * @author    Shaunak Trivedi, SapientNitro <strivedi4@sapient.com>
 * @licensor  CLIENTNAME
 * @site      Manipal
 *
 */
(function(h,e,g){e.log=function(a){if(h.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
e.toType=(function f(a){return function(b){if(b===a){return"global"
}return({}).toString.call(b).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
}
}(this));
h.programDetails=(function(){function a(){var z=this,x=e("#program-details"),I=e("#stream-based1-category li"),H=e(".stream-based-list-view1-level ul li a"),L=" ",B=" ",G="",c=-1,D=" ",K="",A="",d="",C="",E="",y="",J=false,F="",b="";
z.sortAlpha=function(k,j){return k.innerHTML.toLowerCase()>j.innerHTML.toLowerCase()?1:-1
};
z.checkDevice=function(){e(document).ready(function(){if(e("body").hasClass("manipal-mobile")){F=e("#stream-based-1-level-mobile span.dropdown-default-level");
b=e("#stream-based-1-category-mobile span.dropdown-default-category");
I=e(".stream-category-mobile");
H=e(".stream-level-mobile");
J=true;
e(".stream-level-mobile").click(function(k){k.preventDefault();
var j=F.text();
F.text(e(this).text());
B=e(this).text().replace(/[\s\-]/g,"").toLowerCase();
e(this).text(j);
L=b.text().replace(/[\s\-]/g,"").toLowerCase();
if(L==""){L="nostream"
}e(".stream-based-list-view1-level-mobile .dropdown-menu li").sort(z.sortAlpha).appendTo(".stream-based-list-view1-level-mobile .dropdown-menu");
z.loadProgramData(L,B)
});
e(".stream-category-mobile").click(function(k){k.preventDefault();
var j=b.text();
b.text(e(this).text());
L=e(this).text().replace(/[\s\-]/g,"").toLowerCase();
e(this).text(j);
B=F.text().replace(/[\s\-]/g,"").toLowerCase();
e(".stream-based-list-view1-category-mobile .dropdown-menu li").sort(z.sortAlpha).appendTo(".stream-based-list-view1-category-mobile .dropdown-menu");
z.loadProgramData(L,B)
});
z.selectedDepartment();
z.selectedLevel();
z.defaultSelection()
}})
};
z.defaultSelection=function(){if(h.programs!=g){e.each(h.programs,function(j,k){if(h.programs[j].defaultSelect=="true"){L=h.programs[j].streamCategory;
L=L.replace(/[\s\-]/g,"").toLowerCase();
B=h.programs[j].filterLevel;
B=B.replace(/[\s\-]/g,"").toLowerCase();
if(!J){H.each(function(){var m=e(this).text().replace(/[\s\-]/g,"").toLowerCase();
if(m==B){if(I.length==0&&L=="nostream"){e(this).trigger("click");
return false
}e(this).parent().addClass("selected-level")
}});
if(I.length!=0){I.each(function(){G=e(this).find(".left-nav-category").text();
G=G.replace(/[\s\-]/g,"").toLowerCase();
if(G==L){e(this).trigger("click");
return false
}})
}}else{H.each(function(){var p=e(this).text().replace(/[\s\-]/g,"").toLowerCase();
var o=F.text().replace(/[\s\-]/g,"").toLowerCase();
var m=b.text().replace(/[\s\-]/g,"").toLowerCase();
if(p==B||o==B){var n=e(this);
if((o==B&&m==L)||((I.length==0||I.is(":hidden"))&&L=="nostream"&&o==B)){z.loadProgramData(L,B)
}else{if((I.length==0&&L=="nostream")||(m==L)){e(this).trigger("click");
return false
}else{I.each(function(){G=e(this).text().replace(/[\s\-]/g,"").toLowerCase();
if(G==L){if(o!=B){n.trigger("click")
}e(this).trigger("click");
return false
}})
}}return false
}})
}return false
}})
}};
z.selectedDepartment=function(){if(!J){I.click(function(k){k.preventDefault();
if(!e(this).hasClass("content-panel-select")){I.removeClass("content-panel-select");
e(".left-nav-category").removeClass("content-panel-select-prev");
var j=e(this).index();
if(j>0){I.eq(j-1).find("span.left-nav-category").addClass("content-panel-select-prev")
}e(this).addClass("content-panel-select");
L=e(this).find(".left-nav-category").text();
L=L.replace(/[\s\-]/g,"").toLowerCase();
z.loadProgramData(L,B)
}})
}};
z.selectedLevel=function(){if(!J){H.click(function(j){j.preventDefault();
if(!e(this).parent().hasClass("selected-level")){B=e(this).text();
H.parent().removeClass("selected-level");
B=B.replace(/[\s\-]/g,"").toLowerCase();
e(this).parent().addClass("selected-level");
z.loadProgramData(L,B)
}})
}};
z.loadPrimaryData=function(k){if(k!=-1){for(var m=0;
m<h.programs[k].programsOffered.length;
m++){C+=' <li> <a title="'+h.programs[k].programsOffered[m].linkTitle+'" class="stream-based-view1-sub-links" href=" '+h.programs[k].programsOffered[m].linkRedirect+'">'+h.programs[k].programsOffered[m].linkTitle+"</a></li>"
}D='<ul class="link-section">'+C+"</ul>";
x.append(D);
if(h.programs[k].secondaryInstituteHeading==""){e(".link-section").addClass("no-secondary-program")
}var o=e(".link-section").height();
var n=new Array();
e(".link-section").find("li").each(function(){if(e(this).position().top>o){n.push(e(this).html())
}E=n.length
});
x.empty();
if(E>0){for(var j=0;
j<m;
j++){if(j<m-E){K+=' <li> <a title="'+h.programs[k].programsOffered[j].linkTitle+'" class="stream-based-view1-sub-links" href=" '+h.programs[k].programsOffered[j].linkRedirect+'">'+h.programs[k].programsOffered[j].linkTitle+"</a></li>"
}else{A+=' <li> <a title="'+h.programs[k].programsOffered[j].linkTitle+'" class="stream-based-view1-sub-links" href=" '+h.programs[k].programsOffered[j].linkRedirect+'">'+h.programs[k].programsOffered[j].linkTitle+"</a></li>"
}}}if(A!=""){D=' <div class="stream-based-view1-program-details primary-programs"> <p class="stream-based-view1-sub-heading">'+h.programs[k].primaryInstituteName+'</p><ul class="link-section">'+K+'</ul><ul class="link-section">'+A+'</ul> <div class="clear"></div> </div>'
}else{D=' <div class="stream-based-view1-program-details primary-programs"> <p class="stream-based-view1-sub-heading">'+h.programs[k].primaryInstituteName+'</p><ul class="link-section">'+C+'</ul> <div class="clear"></div> </div>'
}}x.append(D);
if(J){x.append('<p class="stream-based-view-all-mobile"><a href="#" title="Read More">View All</a></p>')
}if(h.programs[k].secondaryInstituteHeading==""){e(".link-section").addClass("no-secondary-program")
}};
z.loadSecondaryData=function(k){if(h.programs[k].secondaryInstituteHeading!=""){for(var j=0;
j<h.programs[k].secondaryInstituteDetails.length;
j++){d+=' <li>  <a href="'+h.programs[k].secondaryInstituteDetails[j].instituteLink+'"> <div class="stramBased1-imageMasking"> <img src=" '+h.programs[k].secondaryInstituteDetails[j].instituteImage+' " alt="Institute Picture"> </div><p class="stream-based-view1-institute-name">'+h.programs[k].secondaryInstituteDetails[j].instituteName+"</p></a></li>"
}y=' <div class="stream-based-view1-program-details secondary-programs"> <p class="stream-based-view1-sub-heading">'+h.programs[k].secondaryInstituteHeading+'</p> <ul class="image-list slides">'+d+'</ul> <div class="clear"></div> </div>';
x.append(y)
}};
z.loadProgramData=function(m,k){x.empty();
d=C=K=A="";
for(var j=0;
j<h.programs.length;
j++){h.programs[j].filterLevel=h.programs[j].filterLevel.replace(/[\s\-]/g,"").toLowerCase();
h.programs[j].streamCategory=h.programs[j].streamCategory.replace(/[\s\-]/g,"").toLowerCase();
if(h.programs[j].filterLevel==k&&h.programs[j].streamCategory==m){c=j;
z.loadPrimaryData(c);
z.loadSecondaryData(c);
break
}}};
this.streamBasedListViewCarousel=function(){e(document).ready(function(){if(e("body").hasClass("manipal-mobile")){e(".stream-based-list-view-wrapper .flexslider").flexslider({animation:"slide",slideshowSpeed:"6000",directionNav:false,slideshow:false,itemWidth:240,itemMargin:15,minItems:1,includeItemMargin:true})
}else{e(".stream-based-list-view-wrapper .flexslider").removeClass();
e(".stream-based-list-view-wrapper .slides").removeClass();
e(".stream-based-list-view-wrapper .flex-viewport").removeClass();
e(".stream-based-list-view-wrapper .secondary-programs > ul").addClass("image-list")
}})
};
z.init=function(){z.checkDevice();
z.selectedDepartment();
z.selectedLevel();
z.defaultSelection();
z.streamBasedListViewCarousel();
return this
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
/*!
 * This file contains the code for the profile details.
 *
 * @project   Manipal GE
 * @date      2013-12-24
 * @author    Shaunak Trivedi, SapientNitro <strivedi4@sapient.com>
 * @licensor  CLIENTNAME
 * @site      Manipal
 *
 */
(function(h,e,g){e.log=function(a){if(h.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
e.toType=(function f(a){return function(b){if(b===a){return"global"
}return({}).toString.call(b).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
}
}(this));
h.departmentDetails=(function(){function a(){var b=this,c=e("#department-details"),m=e("#stream-based-category li"),o="",d="",n=false,p="";
b.sortAlpha=function(k,j){return k.innerHTML.toLowerCase()>j.innerHTML.toLowerCase()?1:-1
};
b.checkDevice=function(){e(document).ready(function(){if(e("body").hasClass("manipal-mobile")){p=e("#stream-based-2-category-mobile span.dropdown-default-category");
m=e(".stream2-category-mobile");
n=true;
e(".stream2-category-mobile").click(function(k){k.preventDefault();
var j=p.text();
p.text(e(this).text());
o=e(this).text().replace(/[\s\-]/g,"").toLowerCase();
e(this).text(j);
e(".stream-based-list-view2-category-mobile .dropdown-menu li").sort(b.sortAlpha).appendTo(".stream-based-list-view2-category-mobile .dropdown-menu");
b.loadDepartmentData(o)
})
}})
};
b.defaultSelectedCategory=function(){if(h.departments!=g){e.each(h.departments,function(q,k){if(h.departments[q].streamCategory=="no-stream"){o=h.departments[q].streamCategory,o=o.replace(/[\s\-]/g,"").toLowerCase();
b.loadDepartmentData(o)
}else{if(h.departments[q].defaultSelectedCategory=="true"){o=h.departments[q].streamCategory,o=o.replace(/[\s\-]/g,"").toLowerCase()
}}});
if(!n){m.each(function(){d=e(this).find(".left-nav-category").text();
d=d.replace(/[\s\-]/g,"").toLowerCase();
if(d==o){e(this).trigger("click");
return false
}})
}else{var j=p.text().replace(/[\s\-]/g,"").toLowerCase();
if(j==o){b.loadDepartmentData(o)
}else{m.each(function(){d=e(this).text().replace(/[\s\-]/g,"").toLowerCase();
if(d==o){e(this).trigger("click");
return false
}})
}}}};
b.selectedDepartment=function(){if(!n){m.click(function(q){q.preventDefault();
if(!e(this).hasClass("content-panel-select")){var j=e(this).attr("class")
}else{return
}m.removeClass("content-panel-select");
e(".left-nav-category").removeClass("content-panel-select-prev");
var r=e(this).index();
if(r>0){m.eq(r-1).find("span.left-nav-category").addClass("content-panel-select-prev")
}e(this).addClass("content-panel-select");
var k=e(this).find(".left-nav-category").text();
k=k.replace(/[\s\-]/g,"").toLowerCase();
b.loadDepartmentData(k)
})
}};
b.loadDepartmentData=function(k){var r=-1;
e.each(h.departments,function(u,q){o=h.departments[u].streamCategory,o=o.replace(/[\s\-]/g,"").toLowerCase();
if(o==k){r=u;
return false
}});
c.empty();
if(r!=-1){var j=h.departments[r].departmentDetails,t="";
for(var s=0;
s<j.length;
s++){if(j[s].description!=""){t+='<div class="stream-based-view-department-details"><a href="'+j[s].departmentLink+'"><h6 class="stream-based-view-department-name">'+j[s].departmentName+'</h6><span class="stream-based-view-institute-name">'+j[s].instituteName+'</span><span class="highlight-department-description"></span><p class="stream-based-view-department-description">'+j[s].description+"</p></a></div>"
}else{t+='<div class="stream-based-view-department-details"><a href="'+j[s].departmentLink+'"><h6 class="stream-based-view-department-name">'+j[s].departmentName+'</h6><span class="stream-based-view-institute-name">'+j[s].instituteName+"</span></a></div>"
}if(s==4&&!n){break
}}if(j.length>5||n){t+='<div class="stream-based-read-more"><a href="'+h.departments[r].viewAllLink+'" title="Read More">'+h.departments[r].viewAllText+"</a></div>"
}c.append(t);
e(".stream-based-view-department-details a").last().css("border-bottom","none")
}};
b.init=function(){b.checkDevice();
b.selectedDepartment();
b.defaultSelectedCategory();
return this
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
/*!
 * This file contains the code for the profile details.
 *
 * @project   Manipal GE
 * @date      2013-12-24
 * @author    SHreenithya, SapientNitro <skaveri@sapient.com>
 * @licensor  CLIENTNAME
 * @site      Manipal
 *
 */
(function(h,e,g){e.log=function(a){if(h.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
e.toType=(function f(a){return function(b){if(b===a){return"global"
}return({}).toString.call(b).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
}
}(this));
h.placementDetails=(function(){function a(){var x=this,b=e("#placement-details-container"),J="",F=" ",C=" ",I="",A=-1,c=" ",y=" ",H="",d="",G="",B="",D="",z="",E=false,w=e("#placement-years-mobile span.dropdown-default-year");
x.checkDevice=function(){e(document).ready(function(){if(w.is(":visible")){console.log("mobile");
w=e("#placement-years-mobile span.dropdown-default-year");
E=true;
x.loadYears();
x.selectedYear();
x.defaultSelection()
}})
};
x.defaultSelection=function(){e.each(h.placements,function(k,j){if(h.placements[k].defaultSelect=="true"){var m=h.placements[k].year;
e.each(J,function(n,o){if(e(this).text()==m){e(this).trigger("click");
return false
}else{if(E==true&&w.text()==m){x.loadPlacementData(m)
}}});
return false
}})
};
x.selectedYear=function(){J.click(function(j){j.preventDefault();
if(!e(this).parent().hasClass("placement-year-select")&&!E){F=e(this).text();
J.parent().removeClass("placement-year-select");
e(this).parent().addClass("placement-year-select");
x.loadPlacementData(F)
}else{var k=w.text();
F=e(this).text();
w.text(F);
e(this).text(k);
x.loadPlacementData(F)
}})
};
x.loadPlacementData=function(j){b.empty();
c=y="";
for(var k=0;
k<h.placements.length;
k++){if(j==h.placements[k].year){x.loadHighlightsData(k,j);
x.loadQuickFactsData(k,j);
return false
}}};
x.loadHighlightsData=function(k,m){var j=h.placements[k].HighlightsStudentDetails,q="",r="",o="",p=0,s=1;
if(h.placements[k].quickFactsTitle==""&&h.placements[k].industryViewTitle==""){r=16;
o=4
}else{r=8
}for(var n=0;
n<j.length;
n++){o--;
if(n%2==p){c+='<li class="alternate-list"> <img class="lazyload" data-src=" '+j[n].companyLogo+' " alt="Company Logo"> <p class="student-count">'+j[n].studentCount+"</p></li>";
p=0;
if(r==16&&!E){if(s==1){p=0
}if(s==2){p=1
}if(o==0){p=0;
s--;
o=4
}}}else{p=1;
if(r==16&&!E){if(s==1){p=0
}if(o==0){p=1;
s++;
o=4
}if(s==2){p=1
}}c+='<li> <img class="lazyload" data-src=" '+j[n].companyLogo+' " alt="Company Logo"> <p class="student-count">'+j[n].studentCount+"</p></li>"
}if(n==r-1&&!E){break
}}if(j.length>r){q='<div class="placement-highlights"><p class="placement-sub-heading">'+h.placements[k].highlightsTitle+'</p><div class="placement-student-details"><ul>'+c+'</ul><a href="'+h.placements[k].viewAllLink+'" title="'+h.placements[k].viewAllText+'" class="view-all">'+h.placements[k].viewAllText+"</a> </div></div>"
}else{q='<div class="placement-highlights"><p class="placement-sub-heading">'+h.placements[k].highlightsTitle+'</p><div class="placement-student-details"><ul>'+c+"</ul> </div></div>"
}b.append(q);
if(r==16&&!E){e(".placement-highlights").addClass("no-facts-industry")
}};
x.loadQuickFactsData=function(k,n){var j=h.placements[k].quickFactsDetails,m="";
if(h.placements[k].quickFactsTitle!=""){for(var o=0;
o<j.length;
o++){y+='<li> <p class="fact-count">'+j[o].quickFactsCount+'</p><p class="fact-text">'+j[o].quickFactsDescription+"</p></li>"
}console.log(E);
if(!E){m='<div class="quick-facts-industry-view-wraper"><p class="placement-sub-heading manipal-web">'+h.placements[k].quickFactsTitle+'</p><div class="quick-facts-container clearfix"><ul>'+y+"</ul></div></div>"
}else{console.log("short");
m='<div class="quick-facts-industry-view-wraper"><div class="quick-facts-container clearfix"><ul><li> <p class="fact-heading-mobile">'+h.placements[k].quickFactsTitle+"</p></li>"+y+"</ul></div></div>"
}}else{if(h.placements[k].industryViewTitle!=""&&h.placements[k].quickFactsTitle==""){m='<div class="quick-facts-industry-view-wraper"></div>'
}}b.append(m);
x.loadIndustryViewData(k,n)
};
x.loadIndustryViewData=function(k,m){var j="",n=e("#placement-details-container .quick-facts-industry-view-wraper");
if(h.placements[k].industryViewTitle!=""&&h.placements[k].industryViewTable!=""){j='<p class="placement-sub-heading">'+h.placements[k].industryViewTitle+'</p><div class="industry-view-container">'+h.placements[k].industryViewTable+"</div>";
n.append(j)
}else{if(h.placements[k].industryViewTitle!=""&&h.placements[k].industryViewImage!=""){j='<p class="placement-sub-heading">'+h.placements[k].industryViewTitle+'</p><div class="industry-view-container"><img class="lazyload" data-src="'+h.placements[k].industryViewImage+'" alt="Industry View" /></div>';
n.append(j)
}}};
x.loadYears=function(){var j="",m="";
if(h.placements!="undefined"){for(var k=0;
k<h.placements.length;
k++){if(!E){j+='<li> <a href="javascript:void(0)" title="'+h.placements[k].year+'">'+h.placements[k].year+"</a></li>"
}else{if(k==0){w.text(h.placements[k].year);
continue
}j+='<li> <a href="javascript:void(0)" class="placement-year">'+h.placements[k].year+"</a></li>"
}}if(!E){e(".year-based-placement-highlights ul").empty();
e(".year-based-placement-highlights ul").append(j);
J=e(".year-based-placement-highlights li a")
}else{e(".placement-years-mobile ul.dropdown-menu").append(j);
J=e(".placement-year")
}}};
x.hidePlacement=function(){var j=e(".placement-wrapper .sticky-nav-data .sticky-title").text();
j=j.trim();
if(e("#pubOrDis").val()=="publishOrDisabled"){if(j.length===0){e(".placement-wrapper").remove()
}}};
x.init=function(){if(h.placements!=g){x.checkDevice();
x.loadYears();
x.selectedYear();
x.defaultSelection()
}x.hidePlacement();
return this
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
/*!
 * This file contains the code for the profile details.
 *
 * @project   Manipal GE
 * @date      2014-02-02
 * @author    Malarvannan S, SapientNitro <smalarvannan@sapient.com>
 * @licensor  CLIENTNAME
 * @site      Manipal
 *
 */
(function(d,e,f){e.log=function(a){if(MODULE.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
d.twoColumnListComponent=(function(){function a(){var h=e(".two-column-content"),c=e(".two-column-list-head").parent().html();
this.filterData=function(){e(".dropdown-menu > li, .dept_list").on("click",function(m){m.preventDefault();
var o=d.twoColumnListConfig,n=[],g=false;
var p=e(".interestAreaMenu > .active").find("a").data("ivalue").toLowerCase();
e.each(o,function(j,k){g=false;
if((k.filterInterestArea.toLowerCase()===p)||(p==="all")){g=true
}if(g){g=false;
n.push(k)
}});
h.empty();
b.paintDom(n)
})
};
this.paintDom=function(g){var q="",p=g.length,r=e("#internationalDateAvailable").val();
for(var n=0;
n<p;
n++){if(r=="true"){var o=g[n].lastDateForInternational;
if(o==""){o=g[n].lastDate
}q+='<li><span class="col-md-4 separator">'+g[n].programName+'</span><span class="col-md-4 separator">'+g[n].lastDate+'<br><br></span><span class="col-md-4">'+o+"</span></li>"
}else{q+='<li><span class="col-md-6 separator">'+g[n].programName+'</span><span class="col-md-6">'+g[n].lastDate+"</span></li>"
}}h.append(c+q)
};
var b=this;
this.init=function(){if(d.twoColumnListConfig!=f){h.empty();
b.paintDom(d.twoColumnListConfig);
e(document).ready(function(){b.filterData()
})
}return this
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(d,e,f){e.log=function(a){if(MODULE.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
d.placementListComponent=(function(){function a(){var q,r,p=e(".placement-list-container"),x=e(".placement-list-table tr td"),b=e(".placement-list-table"),u=e(".placement-mobile-structure"),c=e(".placement-list-pagination"),t=1,w=20,v=[];
u.append('<p class="placement-text-header-mobile">PLACEMENTS</p>');
this.filterData=function(){e(".dropdown-menu > li, .dept_list").on("click",function(g){setTimeout(function(){g.preventDefault();
var o=d.placementListConfig,H=[],F=false,n=false,C=false,m=false,h=false;
var k=e(".interestAreaMenu > .active").find("a").data("ivalue").toLowerCase(),E=e(".institutionMenu > .active").find("a").data("ivalue").toLowerCase(),j=(e(".departmentMenu > .active").length==0)?"all":e(".departmentMenu > .active").find("a").data("ivalue").toLowerCase(),D=(e(".monthMenu > .active").length==0)?"all":e(".monthMenu > .active").find("a").data("ivalue").toLowerCase(),G=e(".yearMenu > .active").find("a").data("ivalue")+"".toLowerCase();
e.each(o,function(z,y){F=false;
n=false;
C=false;
m=false;
h=false;
if((y.filterInterestArea.toLowerCase()===k)||(k==="all")){F=true
}if((y.filterInstitution.toLowerCase()===E)||(E==="all")){n=true
}if((y.filterDepartment.toLowerCase()===j)||(j==="all")){C=true
}if((y.month.toLowerCase()===D)||(D==="all")){m=true
}if((y.year.toLowerCase()===G)||(G==="all")){h=true
}if(F&&n&&C&&m&&h){F=false;
n=false;
C=false;
m=false;
h=false;
H.push(y)
}});
b.find("tr td").remove();
if(H.length==0){return
}else{s.deptFilter(H)
}},500)
})
};
this.initPagination=function(j){var g=Object.keys(j).length,h=Math.ceil(g/20);
var k={currentPage:t,totalPages:h,shouldShowPage:function(o,n,m){switch(o){case"first":case"last":return false;
default:return true
}},onPageClicked:function(n,A,o,m){t=m;
var z=0,B=(t*w)-w;
b.find("tr td").remove();
u.find("ul").remove();
e.each(j,function(C,y){if(C>=B){(z<w)?s.paintDom(y):"";
++z
}})
}};
c.bootstrapPaginator(k)
};
this.paintDom=function(g){var h="<tr><td>"+g.name+"</td><td>"+g.department+"</td><td>"+g.program+"</td><td>"+g.company+"</td><td>"+g.year+"</td></tr>";
b.append(h);
var h='<ul class="student-second-details"><li><div class="student-mobile-left">Name</div><div class="student-mobile-right">'+g.name+'</div><div class="student-right-colon"> : </div></li><li><div class="student-mobile-left">Department</div><div class="student-mobile-right">'+g.department+'</div><div class="student-right-colon"> : </div></li><li><div class="student-mobile-left">Program</div><div class="student-mobile-right">'+g.program+'</div><div class="student-right-colon"> : </div></li><li><div class="student-mobile-left">Company Name</div><div class="student-mobile-right">'+g.company+'</div><div class="student-right-colon"> : </div></li><li><div class="student-mobile-left">Year</div><div class="student-mobile-right">'+g.year+'</div><div class="student-right-colon"> : </div></li></ul>';
u.append(h)
};
this.deptFilter=function(g){var h=0;
g.sort(function(m,n){var j=m.name.toLowerCase(),k=n.name.toLowerCase();
if(j<k){return -1
}if(j>k){return 1
}return 0
});
e.each(g,function(k,j){(h<w)?s.paintDom(j):"";
++h
});
s.initPagination(g)
};
var s=this;
this.init=function(){x.remove();
u.remove();
s.deptFilter(d.placementListConfig);
e(document).ready(function(){s.filterData()
});
return this
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(b){b.fn.MaGeImageGallery=function(s){var s=s||{},G=b(this),a=s.sideNav||true,x=s.sideBarContainer||null,D=s.wideImageContainer||null,w=s.thumbnailContainer||null,z=s.galleryWrapper||null,H=s.thumbnailWidth||75,u=s.inputData;
var A=b(window).width();
function v(){var c=b(G).find("."+x);
var d=true;
b.each(u,function(g,e){if(d){var f='<li class="active"><a href="#"> <span class="left-nav-icon" style="background:url('+e.activeIcon+') center center no-repeat;">&nbsp;</span> <p class="left-nav-title" style="border-bottom: 0;">'+e.title+"</p></a></li>";
E(e);
d=false
}else{var f='<li><a href="#"> <span class="left-nav-icon" style="background:url('+e.inActiveIcon+') center center no-repeat;">&nbsp;</span> <p class="left-nav-title">'+e.title+"</p></a></li>"
}c.append(f)
});
c.find("li").last().addClass("last-list");
C();
t()
}function t(){b(G).find("."+x+" > li").on("click",function(c){c.preventDefault();
b(this).siblings("li").removeClass("active").end().addClass("active");
var d=this;
b.each(u,function(g,e){var f=Object.keys(u).indexOf(g);
if(f===b(d).index()){b(d).siblings("li").find(".left-nav-icon").removeAttr("style").css("background-image","url("+e.inActiveIcon+")").end().end().find(".left-nav-icon").css("background-image","url("+e.activeIcon+")");
E(e)
}});
C()
})
}function E(){var p=u.big_img,J=u.small_img,r=u.mobile_big_img,o=u.mobile_small_img,k=u.imgHeadingDesc,n="",c="",d=p.length,h=J.length;
if(A>767){for(var j=0;
j<d;
j++){var f=b.trim(k[j]);
if(f){var I=B(f,75);
f=F(f);
n+="<li class='wrapper'><img src='"+p[j]+"' alt='slide image' class='component-carousel-image'><div class='description'><span class='caption' data-desc='"+f+"'>";
if(I){n+=I+"</span><span class='tempCaption'></span>";
n+="<img class='caption-icon icon-up' src='/etc/designs/manipal/images/ellipsis_icon_down.png'/>"
}else{n+=f+"</span>"
}n+="</div></li>"
}else{n+="<li><img src='"+p[j]+"' alt='slide image' class='component-carousel-image'></li>"
}}for(var g=0;
g<h;
g++){c+="<li><img src='"+J[g]+"' alt='slide image' class='component-thumbnail-image'></li>"
}}else{if(r!=undefined){for(var j=0;
j<d;
j++){var m=b.trim(k[j]);
if(m){var q=B(m,45);
m=F(m);
n+="<li class='wrapper'><img src='"+r[j]+"' alt='slide image' class='component-carousel-image'><div class='description'><span class='caption' data-desc='"+m+"'>";
if(q){n+=q+"</span><span class='tempCaption'></span>";
n+="<img class='caption-icon icon-up' src='/etc/designs/manipal/images/ellipsis_icon_down.png'/>"
}else{n+=m+"</span>"
}n+="</div></li>"
}else{n+="<li><img src='"+r[j]+"' alt='slide image' class='component-carousel-image'></li>"
}}}if(o!=undefined){for(var g=0;
g<h;
g++){c+="<li><img src='"+o[g]+"' alt='slide image' class='component-thumbnail-image'></li>"
}}}var e="<h3 class='component-header'>"+u.title+"</h3><div class='component-detail'>"+u.description+"</div><div class='"+D+'\'><ul class="slides">'+n+"</ul></div>";
if(d>1&&h>1){e+="<div class='"+w+'\'><ul class="slides">'+c+"</ul></div>"
}b(G).find(".js-main-container").html(e);
b(".description .caption-icon").on("click",function(){var S=b(this),R=b(this).siblings(".caption");
if(S.hasClass("icon-up")){S.attr("src","/etc/designs/manipal/images/ellipsis_icon_up.png");
var V=R.text(),P=R.data("desc");
P=P.replace(/---/g,"'");
P=P.replace(/###/g,'"');
var Q=b(this).parent(),U=Q.find(".tempCaption");
U.text(P);
Q.animate({height:U.outerHeight()});
R.text(P);
R.data("desc",V);
S.removeClass("icon-up")
}else{S.attr("src","/etc/designs/manipal/images/ellipsis_icon_down.png");
var T=F(R.text());
S.parent().animate({height:"31px"});
R.text(R.data("desc"));
R.data("desc",T);
S.addClass("icon-up")
}})
}function B(c,d){if(c.length>d){c=c.substring(0,d)+"...";
return c
}else{return false
}}function F(c){c=c.replace(/'/g,"---");
c=c.replace(/"/g,"###");
return c
}function C(){b(G).find("."+w).flexslider({animation:"slide",controlNav:false,animationLoop:false,slideshow:false,itemWidth:H,directionNav:false,asNavFor:z+" ."+D});
b(G).find("."+D).flexslider({animation:"slide",controlNav:false,animationLoop:false,slideshow:false,directionNav:true,sync:z+" ."+w})
}var y=function(){if(typeof u!="object"){return
}var c=true;
if(D===null||w===null){return
}if(x===null){a=false
}if(a){v()
}else{if(c){E();
c=false
}C()
}};
y()
}
})(jQuery);
(function(c,b,a){c.columnControl=(function(){function d(){var e=this;
this.prepareDom=function(){b.each(b(".image-rte-cta-wrapper"),function(){var f=b(this);
if(f.attr("data-bgset")){f.closest(".parsys_column").css({"background-image":'url("'+f.attr("data-bgset")+'")'})
}if(f.find(".cta-read-more").length){f.closest(".parsys_column").addClass("four-col-read-more-wrapper")
}if(f.find(".move-to-bottom").length){f.find(".move-to-bottom").css({"min-height":f.attr("data-height")+"px"});
f.closest(".parsys_column").removeClass("four-col-read-more-wrapper")
}})
};
this.wrapElements=function(){if((b(window).width()>479)&&(b(window).width()<768)){b(".four-column-manual-container .column-container").each(function(){b(this).find(".four-column-manual-wrapper-c0, .four-column-manual-wrapper-c1").wrapAll("<div class='four-column-manual-row'/>");
b(this).find(".four-column-manual-wrapper-c2, .four-column-manual-wrapper-c3").wrapAll("<div class='four-column-manual-row'/>");
b(this).find(".three-column-manual-wrapper-c0, .three-column-manual-wrapper-c1, .three-column-manual-wrapper-c2").wrapAll("<div class='four-column-manual-row'/>");
b(this).find(".two-column-equal-manual-wrapper-c0, .two-column-equal-manual-wrapper-c1").wrapAll("<div class='four-column-manual-row'/>");
b(this).find(".two-column-unequal-manual-wrapper-c0, .two-column-unequal-manual-wrapper-c1").wrapAll("<div class='four-column-manual-row'/>");
b(this).find(".two-column-unequal-manual-wrapper-variant-c0, .two-column-unequal-manual-wrapper-variant-c1").wrapAll("<div class='four-column-manual-row'/>")
})
}else{if(b(".four-column-manual-row").length){b(".column-container").each(function(){b(this).find(".four-column-manual-wrapper-c0, .four-column-manual-wrapper-c1").unwrap("<div class='four-column-manual-row'/>");
b(this).find(".four-column-manual-wrapper-c2, .four-column-manual-wrapper-c3").unwrap("<div class='four-column-manual-row'/>");
b(this).find(".three-column-manual-wrapper-c0, .three-column-manual-wrapper-c1, .three-column-manual-wrapper-c2").unwrap("<div class='four-column-manual-row'/>");
b(this).find(".two-column-equal-manual-wrapper-c0, .two-column-equal-manual-wrapper-c1").unwrap("<div class='four-column-manual-row'/>");
b(this).find(".two-column-unequal-manual-wrapper-c0, .two-column-unequal-manual-wrapper-c1").unwrap("<div class='four-column-manual-row'/>");
b(this).find(".two-column-unequal-manual-wrapper-variant-c0, .two-column-unequal-manual-wrapper-variant-c1").unwrap("<div class='four-column-manual-row'/>")
})
}}};
this.init=function(){b(document).ready(function(){e.prepareDom();
e.wrapElements();
b.each(b(".four-column-manual-wrapper .column-data .column-rich-text"),function(){b(this).find("img").parent().css({"text-align":"center"})
});
if(b(".apply-now-login").length){b(".primary-sticky .primary-sticky-container .apply-now, .primary-sticky .primary-sticky-container .apply-now a").hide()
}b(window).on("orientationchange resize",function(){e.wrapElements()
})
});
return this
};
return this.init()
}return new d()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(d,e,f){d.faqHome=(function(){function a(){var b=this;
this.initializeClick=function(){e(".component-faqs-list h3 > a").on("click",function(n){n.preventDefault();
var c=e(this).parent().siblings(".faqs-list-detail"),o=e(c).outerHeight(true),m=e(".component-faqs-list.active").find(".faqs-list-detail"),p=m.outerHeight("true");
var q=e(this).parents("li");
if(!q.hasClass("active")){m.css("height",p+"px");
c.parents(".component-faqs").find(".component-faqs-list.active").find(".faqs-list-detail").animate({height:0}).end().find(".faq-read-more-container").animate({opacity:0,height:0}).end().removeClass("active").end().end().parent().addClass("active").end().css({height:0,display:"block"}).animate({height:o+"px"}).siblings(".faq-read-more-container").animate({opacity:1,height:"30px"});
setTimeout(function(){m.removeAttr("style").css("display","none");
c.removeAttr("style")
},502)
}else{e(c).css("height",o+"px");
c.animate({height:0}).siblings(".faq-read-more-container").animate({opacity:0,height:"0"}).parent().removeClass("active");
setTimeout(function(){c.removeAttr("style").css("display","none")
},502)
}})
};
this.paintDom=function(){var n=Math.ceil((Object.keys(d.faqs).length)/2),o=0,c=e(".component-faqs-body.left"),m=e(".component-faqs-body.right"),p="",q="";
e.each(d.faqs,function(h,j){var g="";
if(j.hideOption!="true"){g="<a href='"+j.link+"' class='faq-read-more hidden-xs'>Read More</a>"
}else{g=""
}if(o<n){p+="<li class='component-faqs-list clearfix'><h3 class='faqs-list-head'><a href='#' alt=''><span class='show_hide_icon show'></span>"+j.header+"</a></h3><div class='faqs-list-detail' style='display:none;'>"+j.details+"</div><span class='faq-read-more-container'>"+g+"</span></li>"
}else{q+="<li class='component-faqs-list second-column clearfix'><h3 class='faqs-list-head'><a href='#' alt=''><span class='show_hide_icon show'></span>"+j.header+"</a></h3><div class='faqs-list-detail' style='display:none;'>"+j.details+"</div><span class='faq-read-more-container'>"+g+"</span></li>"
}++o
});
c.html(p);
m.html(q);
b.initializeClick()
};
this.init=function(){b.paintDom();
return this
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(d,e,f){d.faq1Home=(function(){function a(){var b=this;
e(".component-faqs-1-list:first").addClass("active");
e(".faqs-1-list-detail:first").css("display","block");
this.initializeClick=function(){e(".component-faqs-1-list h3 > a").on("click",function(n){n.preventDefault();
var c=e(this).parent().siblings(".faqs-1-list-detail"),o=e(c).outerHeight(true),m=e(".component-faqs-1-list.active").find(".faqs-1-list-detail"),p=m.outerHeight("true");
var q=e(this).parents(".component-faqs-1-list");
if(!q.hasClass("active")){m.css("height",p+"px");
c.parents(".component-faqs-1").find(".component-faqs-1-list.active").find(".faqs-1-list-detail").animate({height:0}).end().find(".faq-1-read-more-container").animate({opacity:0,height:0}).end().removeClass("active").end().end().parent().addClass("active").end().css({height:0,display:"block"}).animate({height:o+"px"}).siblings(".faq-1-read-more-container").animate({opacity:1,height:"30px"});
setTimeout(function(){m.removeAttr("style").css("display","none");
c.removeAttr("style")
},502)
}else{e(c).css("height",o+"px");
e(c).animate({height:0}).siblings(".faq-1-read-more-container").animate({opacity:0,height:"0"});
q.removeClass("active");
setTimeout(function(){c.removeAttr("style").css("display","none")
},502)
}})
};
this.init=function(){b.initializeClick()
};
return this.init()
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(d,e,f){d.OpenHouseFormWizard=(function(){var c,b;
if(d.OpenHouseConfig!=f){c=d.OpenHouseConfig.openhouse;
b=d.OpenHouseConfig.country
}function a(){this.populateDegreeList=function(){if(c!=f){e.each(c,function(g,j){e("#degree").append(e("<option>",{value:j.value,text:j.name}))
})
}};
this.populateCountryList=function(){if(b!=f){e.each(b,function(j,g){e("#Country").append(e("<option>",{value:g.countryValue,text:g.countryName}))
})
}};
this.populateStreamList=function(g){if(c!=f){var j;
e.each(c,function(n,m){if(g==m.value&&g!=""){j=m.items
}});
if(j!=f){e.each(j,function(m,n){e("#stream").append(e("<option>",{value:n.value,text:n.name}))
})
}}};
var h=this;
this.init=function(){e(document).ready(function(){h.populateDegreeList();
h.populateCountryList();
e("#degree").on("change",function(){e("#stream").empty();
e("#stream").append(e("<option>",{value:"",text:"Select One"}));
var g=e(this).val();
h.populateStreamList(g)
})
});
return this
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(d,e,f){d.registerOrgFormWizard=(function(){var b;
if(d.registerYourOrg!=f){b=d.registerYourOrg.registerOrg
}function a(){this.populateCountry=function(){if(b!=f){e.each(b,function(j,k){e("#basic-form-register-your-organization #Country").append(e("<option>",{value:k.value,text:k.name}))
})
}};
this.populateCityAndExt=function(k){if(b!=f){var j;
var m;
e.each(b,function(h,g){if(k==g.value&&k!=""){j=g.items;
m=g.isdCode
}});
if(j!=f){e.each(j,function(h,g){e("#basic-form-register-your-organization #city").append(e("<option>",{value:g.value,text:g.name}))
})
}if(m!=f){e("#basic-form-register-your-organization #mobilePref").val(m)
}}};
var c=this;
this.init=function(){e(document).ready(function(){e("#mobilePref").val("");
c.populateCountry();
var j=e("#selectedCountry").val();
var k=e("#selectedCity").val();
if(j!=""||j!=null||j!=" "){e("#basic-form-register-your-organization #Country").val(j);
c.populateCityAndExt(j)
}if(k!=""||k!=null||k!=" "){e("#basic-form-register-your-organization #city").val(k)
}e("#Country").on("change",function(){e("#basic-form-register-your-organization #city").empty();
e("#basic-form-register-your-organization #city").append(e("<option>",{value:"",text:"Select One"}));
var g=e(this).val();
c.populateCityAndExt(g)
})
});
return this
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(d,e,f){d.areYouACorporateFormWizard=(function(){var b;
if(d.areYouACorporate!=f){b=d.areYouACorporate.corporate
}function a(){this.populateCountry=function(){if(b!=f){e.each(b,function(j,k){e("#basic-form-are-you-a-corporate #Country").append(e("<option>",{value:k.value,text:k.name}))
})
}};
this.populateCityAndExt=function(k){if(b!=f){var j;
var m;
e.each(b,function(h,g){if(k==g.value&&k!=""){j=g.items;
m=g.isdCode
}});
if(j!=f){e.each(j,function(h,g){e("#basic-form-are-you-a-corporate #city").append(e("<option>",{value:g.value,text:g.name}))
})
}if(m!=f){e("#mobilePref").val(m)
}}};
var c=this;
this.init=function(){e(document).ready(function(){e("#mobilePref").val("");
c.populateCountry();
var j=e("#selectedCountry").val();
var k=e("#selectedCity").val();
if(j!=""||j!=null||j!=" "){e("#basic-form-are-you-a-corporate #Country").val(j);
c.populateCityAndExt(j)
}if(k!=""||k!=null||k!=" "){e("#basic-form-are-you-a-corporate #city").val(k)
}e("#Country").on("change",function(){e("#basic-form-are-you-a-corporate #city").empty();
e("#basic-form-are-you-a-corporate #city").append(e("<option>",{value:"",text:"Select One"}));
var g=e(this).val();
c.populateCityAndExt(g)
})
});
return this
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(d,e,f){d.regPopup=(function(){function a(){var b=this,k=null;
var c=e(".reg-popup .regInstitute-dd"),j=e(".reg-popup .regCourse-dd");
b.initializeVariables=function(){c=e(".reg-popup .regInstitute-dd");
j=e(".reg-popup .regCourse-dd")
};
this.validateForm=function(){e("#regpopup-form .form-submit").click(function(){if(e("#regpopup-form").valid()){e(".regPopupSuccess").css("display","block");
e(".regPopupSec").css("display","none");
e('#regpopup-form input[type="text"]').val("")
}else{e(".regPopupSuccess").css("display","none")
}});
k=e("#regpopup-form").validate({rules:{fname:{required:true,digits:false,minlength:2},emailId:{required:true,email:true},phoneno:{required:true,digits:true},rollno:{required:true},institution:{required:true},course:{required:true},yearofpassing:{required:true},":cq:captcha":{required:true,requiredDefault:"Enter verification code"}},messages:{fname:{required:"Please enter your Name",minlength:"Your username must consist of at least 2 characters",requiredDefault:"Please enter your Name"},emailId:{required:"Please enter a email address",requiredDefault:"Please enter a email address",email:"Please enter a valid email address"},phoneno:{required:"Please provide a mobile number",requiredDefault:"Please provide a mobile number"},rollno:{required:"Please provide a mobile number",requiredDefault:"Please provide a mobile number"},institution:{required:"Please enter atleast one Institution"},course:{required:"Please enter atleast one Course"},yearofpassing:{required:"Please enter atleast one Year of Passing"},":cq:captcha":{required:"Enter text from image",requiredDefault:"Enter text from image"}}})
};
b.populateInstitution=function(){e.each(d.registrationPopup.listItem,function(h,g){e(c).append('<option value="'+g.institute+'">'+g.instituteText+"</option>");
var m=new Array();
e(c).children("option").each(function(n){test=false;
checkVal=m[n]=e(this).val();
for(i=0;
i<m.length-1;
i++){if(checkVal==m[i]){test=true
}}if(test){e(this).remove()
}})
});
e(c).on("change",function(){e(j).html('<option value="000">-Select One-</option>');
for(var g=0;
g<d.registrationPopup.listItem.length;
g++){if(d.registrationPopup.listItem[g].institute==e(this).val()){e(j).append('<option value="'+d.registrationPopup.listItem[g].course+'">'+d.registrationPopup.listItem[g].courseText+"</option>")
}}})
};
b.setupFormElements=function(g){var h=g.attr("data-value"),m=e("#regpopup-form");
m.find("input[name='hidUserType']").val(h);
if(k!=null){k.resetForm()
}m.find(".input-wrapper label[name='lblrollno']").text("Roll No.");
m.find(".input-wrapper label[name='yearofpassing']").text("Year of Joining");
if(h.toLowerCase()=="guest"){e(".user-info").show();
m.find(".input-wrapper").hide();
m.find(".input-wrapper input[name='emailId']").parent().show();
m.find(".input-wrapper input[name='phoneno']").parent().show();
m.find(".input-wrapper input[name='submit']").parent().show()
}else{if(h.toLowerCase()=="alumni"){e(".user-info").hide();
m.find(".input-wrapper").show();
m.find(".input-wrapper input[name='phoneno']").parent().hide();
m.find(".input-wrapper label[name='yearofpassing']").text("Year of Passing")
}else{if(h.toLowerCase()=="student"){e(".user-info").hide();
m.find(".input-wrapper").show();
m.find(".input-wrapper input[name='phoneno']").parent().hide()
}else{if(h.toLowerCase()=="faculty"){e(".user-info").hide();
m.find(".input-wrapper").show();
m.find(".input-wrapper input[name='phoneno']").parent().hide();
m.find(".input-wrapper label[name='lblrollno']").text("Job ID")
}}}}};
this.init=function(){if(e("input.connectRadio").length!=0){e("input.connectRadio").prettyCheckable()
}e(".guest-inline a").addClass("checked");
b.setupFormElements(e(e(".radio-inline")[0]));
e(".radio-inline").click(function(){var g=e(this);
e(".radioTitleDefault").removeClass("radioTitleActive");
e(".radio-inline a").removeClass("checked");
g.find("span").addClass("radioTitleActive");
g.find("a").addClass("checked");
b.setupFormElements(g)
});
e(".infoIcon img").mouseover(function(){e(".infoPopup").css("display","block")
});
e(".infoIcon img").mouseout(function(){e(".infoPopup").css("display","none")
});
b.validateForm();
b.initializeVariables();
b.populateInstitution();
e(".reg-popup .close-form, .reg-popup .cancel-button").on("click",function(){e(".reg-popup").dialog("close")
});
e(".reg-popup").dialog({autoOpen:false,resizable:false,height:"auto",width:"auto",zIndex:2000,appendTo:".reg-popup-container",modal:true,dialogClass:"noTitle",closeOnEscape:true})
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
if(window.manipal.c29_a_8_config!=undefined){window.manipal.c129a8.init()
}if(window.manipal.alumniListConfig!=undefined){window.manipal.alumniListComponent.init()
}if(window.manipal.alumniJobListConfig!=undefined){window.manipal.alumniJobListComponent.init()
}if(window.manipal.authorListConfig!=undefined){window.manipal.authorList.init()
}if(window.manipal.blogListFilterConfig!=undefined){window.manipal.blogListFilter.init()
}if(window.manipal.blogListConfig!=undefined){window.manipal.blogListing.init()
}if(window.manipal.departmentListConfig!=undefined){window.manipal.departmentList.init()
}if(window.manipal.eventListConfig!=undefined){window.manipal.eventListComponent.init()
}if(window.manipal.facultyJobListConfig!=undefined){window.manipal.facultyJobListComponent.init()
}if(window.manipal.faqs!=undefined){window.manipal.faqHome.init()
}if(window.manipal.facultyListFilterConfig!=undefined){window.manipal.facultyListFilter.init()
}if(window.manipal.browseILFilterConfig!=undefined){window.manipal.instituteListBrowseProgram.init()
}if(window.manipal.instituteListingConfig!=undefined){window.manipal.instituteListing.init()
}if(window.manipal.mosaicGridConfig!=undefined){window.manipal.loadMosaicGallery.init();
window.manipal.mosaicOverlay.init();
window.manipal.formInteraction.init()
}if(window.manipal.newsListConfig!=undefined){window.manipal.newsListComponent.init()
}if(window.manipal.patentListConfig!=undefined){window.manipal.patentListComponent.init()
}if(window.manipal.placements!=undefined){window.manipal.placementDetails.init()
}if(window.manipal.placementListConfig!=undefined){window.manipal.placementListComponent.init()
}if(window.manipal.browsePLFilterConfig!=undefined){window.manipal.programListBrowseProgram.init()
}if(window.manipal.browsePLConfig!=undefined){window.manipal.programListing.init()
}if(window.manipal.publicationListConfig!=undefined){window.manipal.publicationListComponent.init()
}if(window.manipal.qaListConfig!=undefined){window.manipal.qaListing.init()
}if(window.manipal.rankingCarouselConfig!=undefined){window.manipal.rankingCarousel.init()
}if(window.manipal.researchPage!=undefined){window.manipal.researchC156Listing.init()
}if(window.manipal.researchListFilterConfig!=undefined){window.manipal.researchListing.init()
}if(window.manipal.researchListConfig!=undefined){window.manipal.researchListComponent.init()
}if(window.manipal.salesOutletConfig!=undefined){window.manipal.salesOutletComponent.init()
}if(window.manipal.institutes_sb_image_list!=undefined){window.manipal.insitituteStreamBasedList.init()
}if(window.manipal.programs!=undefined){window.manipal.programDetails.init()
}if(window.manipal.departments!=undefined){window.manipal.departmentDetails.init()
}if(window.manipal.c29_a_5_config!=undefined){window.manipal.c129a5.init()
}if(window.manipal.c129_a_12_config!=undefined){window.manipal.c129a12.init()
}if(window.manipal.facultyListConfig!=undefined){window.manipal.facultyListing.init()
}if(window.manipal.studentProjectListConfig!=undefined){window.manipal.studentProjectListComponent.init()
}if(window.manipal.twoColumnListConfig!=undefined){window.manipal.twoColumnListComponent.init()
}if(window.manipal.categories!=undefined){window.manipal.inspiredLearning.init()
}if(window.manipal.c129_a_8_config!=undefined){window.manipal.c129a8.init()
}if(window.manipal.c29_a_6_config!=undefined){window.manipal.c129a6.init()
}if(window.manipal.clubListConfig!=undefined){window.manipal.clubListComponent.init()
}if(window.manipal.basicFormRequestTranscript!=undefined){window.manipal.basicFormsReqTranscripts.init()
}if(window.manipal.basicFormSucessStory!=undefined){window.manipal.basicFormsSuccessStories.init()
}if(window.manipal.registrationPopup!=undefined){window.manipal.regPopup.init()
}if(window.manipal.OpenHouseConfig!=undefined){window.manipal.OpenHouseFormWizard.init()
}if(window.manipal.registerYourOrg!=undefined){window.manipal.registerOrgFormWizard.init()
}if(window.manipal.areYouACorporate!=undefined){window.manipal.areYouACorporateFormWizard.init()
}window.manipal.thumbnailCarouselConfig={};
$(document).ready(function(){$(".lazy_load").lazyload({threshold:200});
var b=($("#list-hero-banner img").length>1)?$($("#list-hero-banner img")[0]):$("#list-hero-banner img");
b.load(function(){var a=new Image();
a.src=b.attr("src");
var h=a.width;
var k=a.height;
if(k<=175){h=0
}else{if(h<=640){h=1141
}}var j=$(window).width();
if(j<h){var g=h-j;
g=(g/2)*(-1);
$("#list-hero-banner img").css("margin-left",g+"px")
}});
$(".manipal-mobile .request4info").show();
$(".request4info").addClass("show_rfi_dialogue")
});
(function(d,e,f){e.log=function(a){if(MODULE.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
d.c129a8=(function(){function a(){this.manipulateMenu=function(){e(".batchMenu > li").on("click",function(j){j.preventDefault();
var k=e(".courseMenu > li")[0];
e(k).siblings("li").removeClass("active").end().addClass("active");
e("#courseMenu").html("All");
var c=e(this).find("a").html();
e("#batchMenu").html(c);
e(this).siblings("li").removeClass("active").end().addClass("active")
});
e(".courseMenu > li").on("click",function(j){j.preventDefault();
var k=e(".batchMenu > li")[0];
e(k).siblings("li").removeClass("active").end().addClass("active");
e("#batchMenu").html("All");
var c=e(this).find("a").html();
e("#courseMenu").html(c);
e(this).siblings("li").removeClass("active").end().addClass("active")
})
};
this.paintDom=function(){var c=d.c29_a_8_config;
var k=[],j=[];
b.printBatch();
b.printCourse()
};
this.printBatch=function(){var c=d.c29_a_8_config.batch,m=e(".component-c129-a-8 .batchMenu");
var k=[];
e.each(c,function(h,g){if(jQuery.inArray(g,k)<0){k.push(g)
}});
m.html('<li role="presentation" class="active"><a role="menuitem" tabindex="-1" href="#" data-iValue="all">All</a></li>');
for(var n=0;
n<k.length;
n++){var o='<li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-iValue="'+k[n]+'">'+k[n]+"</a></li>";
m.append(o)
}};
this.printCourse=function(){var c=d.c29_a_8_config.courseInfo,n=e(".component-c129-a-8 .courseMenu");
var m=[],q=[];
e.each(c,function(h,g){if(jQuery.inArray(g.courseName,q)<0){q.push(g.courseName);
m.push(g.courseNameText)
}});
n.html('<li role="presentation" class="active"><a role="menuitem" tabindex="-1" href="#" data-iValue="all">All</a></li>');
for(var o=0;
o<q.length;
o++){var p='<li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-iValue="'+q[o]+'">'+m[o]+"</a></li>";
n.append(p)
}};
var b=this;
this.init=function(){b.paintDom();
e(document).ready(function(){b.manipulateMenu()
});
return this
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
/*!
 * This file contains the code for the profile details.
 *
 * @project   Manipal GE
 * @date      2014-02-25
 * @author    Malarvannan S, SapientNitro <smalarvannan@sapient.com>
 * @licensor  CLIENTNAME
 * @site      Manipal
 *
 */
(function(d,e,f){e.log=function(a){if(MODULE.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
d.alumniListComponent=(function(){function a(){var b=e(".alumni-list-content tbody"),q=e(".alumni-list-mobile-content-container"),p=e(".list-pagination"),m=e(".alumni-popover-container"),n=1,o=20,r=0;
this.checkDevice=function(){e(document).ready(function(){if(e("body").hasClass("manipal-mobile")){c.deptFilter(d.alumniListConfig);
c.filterData();
c.bindEventToViewMoreInfo()
}})
};
this.filterData=function(){e(".dropdown-menu > li").on("click",function(k){k.preventDefault();
var v=d.alumniListConfig,t=[],h=false,g=false;
var u=e(".batchMenu > .active").find("a").data("ivalue").toString(),j=e(".courseMenu > .active").find("a").data("ivalue").toLowerCase();
e.each(v,function(w,s){h=false;
g=false;
if((s.batch===u)||(u==="all")){h=true
}if((s.filterCourseName.toLowerCase()===j)||(j==="all")){g=true
}if(h&&g){h=false;
g=false;
t.push(s)
}});
if(e("body").hasClass("manipal-mobile")){q.empty()
}else{b.empty()
}if(t.length!=0){n=1;
r=0
}c.deptFilter(t)
})
};
this.initPagination=function(k){var h=Object.keys(k).length,j=Math.ceil(h/o);
var g={currentPage:n,totalPages:j,onPageClicked:function(y,B,z,x){n=x;
if(n==1){r=0
}var A=0,w=(n*o)-o;
if(e("body").hasClass("manipal-mobile")){q.empty()
}else{b.empty()
}e.each(k,function(t,s){if(t>=w){(A<o)?c.paintDom(s):"";
++A
}});
c.bindEventToViewMoreInfo();
c.hidePopOver()
}};
if(h>0){p.bootstrapPaginator(g)
}else{p.empty()
}c.bindEventToViewMoreInfo();
c.hidePopOver()
};
this.paintDom=function(h){var j=[];
e.each(h,function(t,s){if(t!="filterCourseName"&&t!="view_more_icon"){j.push(t+"#$#"+s)
}});
if(e("body").hasClass("manipal-mobile")){var g='<div class="alumni-list-mobile-content"><p class="alumni-list-details"><span class="col-xs-4 strong">Alumni Name</span><span class="col-xs-8 strong">: '+h.alumniName+'</span></p><p class="alumni-list-details"><span class="col-xs-4 strong">Batch</span><span class="col-xs-8 strong">: '+h.batch+'</span></p><p class="alumni-list-details"><span class="col-xs-4 strong">Course</span><span class="col-xs-8 strong">: '+h.course+'</span></p><p class="alumni-list-details"><span class="col-xs-4 strong">Institution</span><span class="col-xs-8 strong">: <a href="'+h.instituteUrl+'" title="'+h.instituteName+'">'+h.instituteName+'</a></span></p><p class="alumni-list-view-more"><img src="/etc/designs/manipal/images/alumni-info-icon.png" alt="View More Info" height="11" width="10" /> <span>View More Information</span> <span class="more-info-data">'+j.toString()+"</span></p></div>";
q.append(g)
}else{var k="<tr><td>"+h.alumniName+"</td><td>"+h.batch+"</td><td>"+h.course+'</td><td><a href="'+h.instituteUrl+'" title="'+h.instituteName+'">'+h.instituteName+'</a></td><td class="view-more-info"><img src="/etc/designs/manipal/images/alumni-info-icon.png" alt="View More Info"/><span class="more-info-data">'+j.toString()+"</span></td></tr>";
b.append(k)
}r++
};
this.bindEventToViewMoreInfo=function(){if(e("body").hasClass("manipal-mobile")){e(".alumni-list-view-more").on("click",function(){var h=e(this);
var g=h.find("span.more-info-data").html();
c.showMoreInfo(g,h)
})
}else{e(".view-more-info img").on("click",function(){var g=e("#sc-loginstatus").attr("data-loginstatus");
var h=e(this);
var j=h.siblings().html();
if(g==="true"){c.showMoreInfo(j,h)
}else{e(".sc-popup").dialog("open");
e(".sc-mobile-popup").dialog("open")
}})
}};
this.hidePopOver=function(){if(m){if(m.css("display")==="block"){m.hide()
}}};
this.deptFilter=function(h){var g=0;
e.each(h,function(k,j){(g<o)?c.paintDom(j):"";
++g
});
c.initPagination(h)
};
this.showMoreInfo=function(H,O){var R=H.split(","),M=R.length,h,P="",T="",N="",G="",Q="",j="",K="",F="";
for(var J=0;
J<M;
J++){h=R[J].split("#$#");
if(h[0]=="alumniName"){T=h[1]
}else{if(h[0]=="batch"){N=h[1]
}else{if(h[0]=="course"){G=h[1]
}else{if(h[0]=="instituteName"){Q=h[1]
}else{if(h[0]=="instituteUrl"){j=h[1]
}else{if(h[0]=="email"){K=h[1]
}else{if(h[0]=="phone"){F=h[1]
}else{if(h[0]=="imgUrl"){P=h[1]
}}}}}}}}}if(e("body").hasClass("manipal-mobile")){var g='<div class="alumni-popover"><div class="popover-container"><span class="close-mark">X</span><div class="col-md-3 alumni-img-container"><img src="'+P+'" alt="popupover page" /></div><div class="col-md-9 alumni-info-container"><p>'+T+"</p><p>Batch : "+N+"</p><p>Course : "+G+'</p><p><a href="'+j+'">'+Q+'</a></p><p class="popover-email"><a href="mailto:'+K+'">'+K+"</a></p><p>Official Phone: "+F+'</p></div></div><span class="mobile-pointing-arrow"></span></div>'
}else{var g='<div class="alumni-popover"><span class="pointing-arrow"></span><div class="popover-container"><span class="close-mark">X</span><div class="col-md-3 alumni-img-container"><img src="'+P+'" alt="popupover page" /></div><div class="col-md-9 alumni-info-container"><p>'+T+"</p><p>Batch : "+N+"</p><p>Course : "+G+'</p><p><a href="'+j+'">'+Q+'</a></p><p class="popover-email"><a href="mailto:'+K+'">'+K+"</a></p><p>Official Phone: "+F+"</p></div></div></div>"
}m.html(g);
if(e("body").hasClass("manipal-mobile")){var k=m.outerHeight(true);
var I=O.position(),S=I.left+10,L=I.top-k
}else{var I=O.position(),S=I.left-275+10,L=I.top+38
}m.css({left:S,top:L,display:"block"})
};
var c=this;
this.init=function(){c.checkDevice();
q.empty();
b.empty();
c.deptFilter(d.alumniListConfig);
e(document).ready(function(){c.filterData();
c.bindEventToViewMoreInfo();
e("body").on("keyup",function(h){var g=h.keyCode?h.keyCode:h.which;
if(g==27){c.hidePopOver()
}});
e(".alumni-popover-container").on("click","span.close-mark",function(){c.hidePopOver()
})
});
return this
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
/*!
 * This file contains the code for the student details.
 *
 * @project   Manipal GE
 * @date      2013-12-24
 * @author    Shaunak Trivedi, SapientNitro <strivedi4@sapient.com>
 * @licensor  CLIENTNAME
 * @site      Manipal
 *
 */
(function(h,e,g){e.log=function(a){if(h.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
e.toType=(function f(a){return function(b){if(b===a){return"global"
}return({}).toString.call(b).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
}
}(this));
h.studentDetails=(function(){function a(){var C=this,d=5,T=e("#student-details .nav-tabs"),U=e("#student-details .studentmobile-drop span"),R=e("#student-details .selectdropdown-tab"),S=1,Q=e("#student-details #tab-research ul"),J=[],F=1,L=e("#student-details #tab-newsevents ul"),M=[],D=1,c=e("#student-details #tab-blog div.blog-list"),V=[],P=1,O=e("#student-details #tab-patent ul"),G=[],E=1,K=e("#student-details #tab-publication ul"),I=[],H=1,N=e("#student-details #tab-studentproject ul"),b=[];
C.getTotalPages=function(j){return Math.ceil(j/d)
};
C.renderResearchItems=function(){d=5;
var m=(S*d)-d,n=(S*d),p=0,q="";
n=(n>J.length)?J.length-1:n-1;
Q.empty();
for(p=m;
p<=n;
p++){var j="",o=J[p].listNameAndLink,r=o.length;
if(r){for(var k=0;
k<r;
k++){j+='<dt><a href="'+o[k].linkUrl+'">'+o[k].name+"</a></dt>"
}}q+='<li class="separator"><H2>'+J[p].title+'</H2><dl class="subline pull-left">';
if(e.trim(J[p].date)!=""){q+='<dt class="subline-date">'+e.trim(J[p].date)+"</dt>"
}if(e.trim(J[p].interestArea)!=""){q+='<dt class="subline-interestarea">'+e.trim(J[p].interestArea)+"</dt> "
}q+='</dl><dl class="subline-patentowner">'+j+'</dl><p class="patent-content clearfix"><span class="border-left-mobile-research"></span>'+J[p].listContent+'</p><p class="patent-readmore clearfix"><a href="'+J[p].readMoreLink+'">Read more</a></p></li>'
}Q.append(q)
};
C.renderNewseventsItems=function(){d=5;
var j=(F*d)-d,k=(F*d),m=0,n="";
k=(k>M.length)?M.length-1:k-1;
L.empty();
for(m=j;
m<=k;
m++){n+='<li class="separator"><H2>'+M[m].title+'</H2><p class="subline"><span class="subline-date">'+M[m].date+'</span></p><span class="border-left-mobile"></span><p class="patent-content">'+M[m].listContent+'</p><p class="patent-readmore clearfix"><a href="'+M[m].readMoreLink+'">Read more</a></p></li>'
}L.append(n)
};
C.renderBlogItems=function(){d=6;
var n=(D*d)-d,t=(D*d),o=0,q="";
t=(t>V.length)?V.length-1:t-1;
c.empty();
var j=0;
for(o=n;
o<=t;
o++){var p="",u=V[o].listNameAndLink,m=u.length;
if(m){for(var s=0;
s<m;
s++){p+='<a href="'+u[s].linkUrl+'">'+u[s].name+"</a>"
}}var v="",k=V[o].listCatNameAndLink,r=k.length;
if(r){for(var s=0;
s<r;
s++){v+='<dt><a href="'+k[s].catLink+'">'+k[s].catName+"</a>, </dt>"
}}v=v.substring(0,v.length-7);
v=v+"</dt>";
console.log("blogdt:"+v);
console.log(j+"-"+j%3);
if(j%3==0){q+='<div class="clearfix"></div>';
j=0
}j++;
q+='<div class="pull-left blog-list-container">';
q+='<div class="blog-container-mobile"><a href="'+V[o].itemLink+'"><img class="lazyload" data-src="'+V[o].itemImage+'" /></a><H2>'+V[o].title+'</H2><span class="subline"><div class="pull-left"><img class="lazyload thumb" data-src="../../../../etc/designs/manipal/images/content-panel-left-nav-icons2.png" /></div><div class="pull-left"><p class="subline-patentowner">'+p+'</p><p class="subline-date">'+V[o].date+'</p></div></span><span class="clearfix"></span><span class="border-left-mobile"></span><div class="blog-ellipses"><div class="patent-content pull-left">'+V[o].listContent+'</div></div></div><dl class="patent-category pull-left"><dt>Category:</dt> </dl><dl>'+v+'</dl><div class="pull-left"><p class="subline-patentowner blog-owner-mobile">'+p+'</p><p class="subline-date blog-owner-mobile">'+V[o].date+'</p></div><div class="patent-readmore clearfix blog-readmore-mobile"><a href="'+V[o].readMoreLink+'">Read more</a></div></div>'
}c.append(q)
};
C.renderPatentItems=function(){d=5;
var k=(P*d)-d,n=(P*d),p=0,q="";
n=(n>G.length)?G.length-1:n-1;
O.empty();
for(p=k;
p<=n;
p++){var m="",o=G[p].listNameAndLink,r=o.length;
if(r){for(var j=0;
j<r;
j++){m+='<dt><a href="'+o[j].linkUrl+'">'+o[j].name+"</a></dt>"
}}q+='<li class="separator"><H2>'+G[p].title+'</H2><dl class="subline pull-left">';
if(e.trim(G[p].date)!=""){q+='<dt class="subline-date">'+e.trim(G[p].date)+"</dt>"
}if(e.trim(G[p].interestArea)!=""){q+='<dt class="subline-interestarea">'+e.trim(G[p].interestArea)+"</dt> "
}q+='</dl><dl class="subline-patentowner">'+m+'</dl><span class="border-left-mobile-patent"></span><p class="patent-content clearfix">'+G[p].listContent+'</p><p class="patent-readmore clearfix"><a href="'+G[p].readMoreLink+'">Read more</a></p></li>'
}O.append(q)
};
C.renderPublicationItems=function(){d=5;
var k=(E*d)-d,m=(E*d),p=0,q="";
m=(m>I.length)?I.length-1:m-1;
K.empty();
for(p=k;
p<=m;
p++){var o="",n=I[p].listNameAndLink,r=n.length;
if(r){for(var j=0;
j<r;
j++){o+='<dt><a href="'+n[j].linkUrl+'">'+n[j].name+"</a></dt>"
}}q+='<li class="separator"><H2>'+I[p].title+'</H2><dl class="subline pull-left">';
if(e.trim(I[p].date)!=""){q+='<dt class="subline-date">'+e.trim(I[p].date)+"</dt>"
}if(e.trim(I[p].interestArea)!=""){q+='<dt class="subline-interestarea">'+e.trim(I[p].interestArea)+"</dt> "
}q+='</dl><dl class="subline-patentowner">'+o+'</dl><span class="border-left-mobile-publish"></span><p class="patent-content clearfix">'+I[p].listContent+'</p><p class="patent-readmore clearfix"><a href="'+I[p].readMoreLink+'">Read more</a></p></li>'
}K.append(q)
};
C.renderStudentProjectItems=function(){d=5;
var k=(H*d)-d,m=(H*d),o=0,p="";
m=(m>b.length)?b.length-1:m-1;
N.empty();
for(o=k;
o<=m;
o++){var r="",n=b[o].listNameAndLink,q=n.length;
if(q){for(var j=0;
j<q;
j++){r+='<dt><a href="'+n[j].linkUrl+'">'+n[j].name+"</a></dt>"
}}p+='<li class="separator clearfix">';
if(b[o].hasImage==true){p+='<div class="image-part"><a href="javascript:void(0)" class="thumb"><img class="lazyload" data-src="'+b[o].thumbnailImage+'" /></a></div>';
p+='<div class="content-part"><H2>'+b[o].title+'</H2><dl class="subline pull-left">';
if(e.trim(b[o].date)!=""){p+='<dt class="subline-date">'+e.trim(b[o].date)+"</dt>"
}if(e.trim(b[o].interestArea)!=""){p+='<dt class="subline-interestarea">'+e.trim(b[o].interestArea)+"</dt> "
}p+='</dl><dl class="subline-patentowner">'+r+'</dl><p class="patent-content clearfix"><span class="border-left-mobile-patent"></span>'+b[o].listContent+'</p><p class="patent-readmore clearfix"><a href="'+b[o].readMoreLink+'">Read more</a></p></div></li>'
}else{p+='<div class="content-part-without-image"><H2>'+b[o].title+'</H2><dl class="subline pull-left">';
if(e.trim(b[o].date)!=""){p+='<dt class="subline-date">'+e.trim(b[o].date)+"</dt>"
}if(e.trim(b[o].interestArea)!=""){p+='<dt class="subline-interestarea">'+e.trim(b[o].interestArea)+"</dt> "
}p+='</dl><dl class="subline-patentowner">'+r+'</dl><p class="patent-content clearfix"><span class="border-left-mobile-patent"></span>'+b[o].listContent+'</p><p class="patent-readmore clearfix"><a href="'+b[o].readMoreLink+'">Read more</a></p></div></li>'
}}N.append(p)
};
C.setupNewseventsPageData=function(){var k=M.length;
F=1;
k=M.length;
console.log(k);
var j=e(".pg-newsevents");
if(k>0){C.initNewseventsPaginiation(j,k)
}};
C.setupResearchPageData=function(){var k=J.length;
S=1;
k=J.length;
console.log(k);
var j=e(".pg-research");
if(k>0){C.initResearchPaginiation(j,k)
}};
C.setupBlogPageData=function(){var k=V.length;
D=1;
k=V.length;
console.log(k);
var j=e(".pg-blog");
if(V.length>0){C.initBlogPaginiation(j,k)
}};
C.setupPatentPageData=function(){var k=G.length;
P=1;
k=G.length;
console.log(k);
var j=e(".pg-patent");
if(G.length>0){C.initPatentPaginiation(j,k)
}};
C.setupPublicationPageData=function(){var k=I.length;
E=1;
k=I.length;
console.log(k);
var j=e(".pg-publication");
if(I.length>0){C.initPublicationPaginiation(j,k)
}};
C.setupStudentProjectPageData=function(){var k=b.length;
H=1;
k=b.length;
console.log(k);
var j=e(".pg-studentproject");
if(b.length>0){C.initStudentProjectPaginiation(j,k)
}};
C.initNewseventsPaginiation=function(k,j){var m={currentPage:F,totalPages:C.getTotalPages(j),shouldShowPage:function(p,o,n){switch(p){case"first":case"last":return false;
default:return true
}},onPageClicked:function(o,q,p,n){F=n;
C.renderNewseventsItems()
}};
k.bootstrapPaginator(m)
};
C.initResearchPaginiation=function(k,j){var m={currentPage:S,totalPages:C.getTotalPages(j),shouldShowPage:function(p,o,n){switch(p){case"first":case"last":return false;
default:return true
}},onPageClicked:function(o,q,p,n){S=n;
C.renderResearchItems()
}};
k.bootstrapPaginator(m)
};
C.initBlogPaginiation=function(k,j){var m={currentPage:D,totalPages:C.getTotalPages(j),shouldShowPage:function(p,o,n){switch(p){case"first":case"last":return false;
default:return true
}},onPageClicked:function(o,q,p,n){D=n;
C.renderBlogItems()
}};
k.bootstrapPaginator(m)
};
C.initPatentPaginiation=function(k,j){var m={currentPage:P,totalPages:C.getTotalPages(j),shouldShowPage:function(p,o,n){switch(p){case"first":case"last":return false;
default:return true
}},onPageClicked:function(o,q,p,n){P=n;
C.renderPatentItems()
}};
k.bootstrapPaginator(m)
};
C.initPublicationPaginiation=function(k,j){var m={currentPage:E,totalPages:C.getTotalPages(j),shouldShowPage:function(p,o,n){switch(p){case"first":case"last":return false;
default:return true
}},onPageClicked:function(o,q,p,n){E=n;
C.renderPublicationItems()
}};
k.bootstrapPaginator(m)
};
C.initStudentProjectPaginiation=function(k,j){var m={currentPage:H,totalPages:C.getTotalPages(j),shouldShowPage:function(p,o,n){switch(p){case"first":case"last":return false;
default:return true
}},onPageClicked:function(o,q,p,n){H=n;
C.renderStudentProjectItems()
}};
k.bootstrapPaginator(m)
};
C.filterNewseventsItems=function(){if(h.studentdetails&&h.studentdetails.newseventsList&&h.studentdetails.newseventsList.length>0){T.append('<li><a href="#tab-newsevents" data-toggle="tab">NEWS & ARTICLES</a><img data-src="/etc/designs/manipal/images/content-panel-left-nav-highlight-arrow.png" class="lazyload profile-details-highlight-arrow" alt="Selected Icon" /></li>');
R.append('<li><a href="#tab-newsevents" data-toggle="tab">NEWS & ARTICLES</a><img data-src="/etc/designs/manipal/images/content-panel-left-nav-highlight-arrow.png" class="lazyload profile-details-highlight-arrow" alt="Selected Icon" /></li>');
M=[];
for(var j=0;
j<h.studentdetails.newseventsList.length;
j++){M.push(h.studentdetails.newseventsList[j])
}C.setupNewseventsPageData();
C.renderNewseventsItems()
}};
C.filterResearchItems=function(){if(h.studentdetails&&h.studentdetails.researchList&&h.studentdetails.researchList.length>0){T.append('<li><a href="#tab-research" data-toggle="tab">RESEARCH</a><img data-src="/etc/designs/manipal/images/content-panel-left-nav-highlight-arrow.png" class="lazyload profile-details-highlight-arrow" alt="Selected Icon" /></li>');
R.append('<li><a href="#tab-research" data-toggle="tab">RESEARCH</a><img data-src="/etc/designs/manipal/images/content-panel-left-nav-highlight-arrow.png" class="lazyload profile-details-highlight-arrow" alt="Selected Icon" /></li>');
J=[];
for(var j=0;
j<h.studentdetails.researchList.length;
j++){J.push(h.studentdetails.researchList[j])
}C.setupResearchPageData();
C.renderResearchItems()
}};
C.filterBlogItems=function(){if(h.studentdetails&&h.studentdetails.blogList&&h.studentdetails.blogList.length>0){T.append('<li><a href="#tab-blog" data-toggle="tab">BLOG POSTS</a><img data-src="/etc/designs/manipal/images/content-panel-left-nav-highlight-arrow.png" class="lazyload profile-details-highlight-arrow" alt="Selected Icon" /></li>');
R.append('<li><a href="#tab-blog" data-toggle="tab">BLOG POSTS</a><img data-src="/etc/designs/manipal/images/content-panel-left-nav-highlight-arrow.png" class="lazyload profile-details-highlight-arrow" alt="Selected Icon" /></li>');
V=[];
for(var j=0;
j<h.studentdetails.blogList.length;
j++){V.push(h.studentdetails.blogList[j])
}C.setupBlogPageData();
C.renderBlogItems()
}else{}};
C.filterPatentItems=function(){if(h.studentdetails&&h.studentdetails.patentList&&h.studentdetails.patentList.length>0){T.append('<li><a href="#tab-patent" data-toggle="tab">PATENTS</a><img data-src="/etc/designs/manipal/images/content-panel-left-nav-highlight-arrow.png" class="lazyload profile-details-highlight-arrow" alt="Selected Icon" /></li>');
R.append('<li><a href="#tab-patent" data-toggle="tab">PATENTS</a><img data-src="/etc/designs/manipal/images/content-panel-left-nav-highlight-arrow.png" class="lazyload profile-details-highlight-arrow" alt="Selected Icon" /></li>');
G=[];
for(var j=0;
j<h.studentdetails.patentList.length;
j++){G.push(h.studentdetails.patentList[j])
}C.setupPatentPageData();
C.renderPatentItems()
}};
C.filterPublicationItems=function(){if(h.studentdetails&&h.studentdetails.publicationList&&h.studentdetails.publicationList.length>0){T.append('<li><a href="#tab-publication" data-toggle="tab">PUBLICATIONS</a><img data-src="/etc/designs/manipal/images/content-panel-left-nav-highlight-arrow.png" class="lazyload profile-details-highlight-arrow" alt="Selected Icon" /></li>');
R.append('<li><a href="#tab-publication" data-toggle="tab">PUBLICATIONS</a><img data-src="/etc/designs/manipal/images/content-panel-left-nav-highlight-arrow.png" class="lazyload profile-details-highlight-arrow" alt="Selected Icon" /></li>');
I=[];
for(var j=0;
j<h.studentdetails.publicationList.length;
j++){I.push(h.studentdetails.publicationList[j])
}C.setupPublicationPageData();
C.renderPublicationItems()
}};
C.filterStudentProjectItems=function(){if(h.studentdetails&&h.studentdetails.studentprojectList&&h.studentdetails.studentprojectList.length>0){T.append('<li><a href="#tab-studentproject" data-toggle="tab">STUDENT PROJECTS</a><img data-src="/etc/designs/manipal/images/content-panel-left-nav-highlight-arrow.png" class="lazyload profile-details-highlight-arrow" alt="Selected Icon" /></li>');
R.append('<li><a href="#tab-studentproject" data-toggle="tab">STUDENT PROJECTS</a><img data-src="/etc/designs/manipal/images/content-panel-left-nav-highlight-arrow.png" class="lazyload profile-details-highlight-arrow" alt="Selected Icon" /></li>');
b=[];
for(var j=0;
j<h.studentdetails.studentprojectList.length;
j++){b.push(h.studentdetails.studentprojectList[j])
}C.setupStudentProjectPageData();
C.renderStudentProjectItems()
}};
C.ddOption=function(){var j=e("#student-details .selectdropdown-tab li"),k=e("#student-details .selectdropdown-tab li");
e(j).on("click",function(){var n=e(this),o=n.find("a").text();
U.text(o);
e(k).removeClass("active");
var m=n.find("a").attr("href");
e(m).addClass("active")
})
};
C.studentleftNav=function(){var j=e("#profile-details .nav-tabs li");
e("#profile-details .nav-tabs li").click(function(){e("html, body").animate({scrollTop:e(".tab-content").eq(0).offset().top-200},"1000")
});
e(".pg-publication").on("click",function(){e("html, body").animate({scrollTop:e(".tab-content").eq(0).offset().top-200},"1000")
});
e(".pg-studentproject").on("click",function(){e("html, body").animate({scrollTop:e(".tab-content").eq(0).offset().top-200},"1000")
});
e(".pg-patent").on("click",function(){e("html, body").animate({scrollTop:e(".tab-content").eq(0).offset().top-200},"1000")
});
e(".pg-newsevents").on("click",function(){e("html, body").animate({scrollTop:e(".tab-content").eq(0).offset().top-200},"1000")
});
e(".pg-research").on("click",function(){e("html, body").animate({scrollTop:e(".tab-content").eq(0).offset().top-200},"1000")
})
};
C.init=function(){C.filterResearchItems();
C.filterNewseventsItems();
C.filterBlogItems();
C.filterPatentItems();
C.filterPublicationItems();
C.filterStudentProjectItems();
C.ddOption();
C.studentleftNav();
return this
};
return this.init()
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(h,e,g){e.log=function(a){if(h.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
e.toType=(function f(a){return function(b){if(b===a){return"global"
}return({}).toString.call(b).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
}
}(this));
h.footerSitemap=(function(){function a(){var b=this,c=e(".sitemap-links");
this.sitemapBuildColumn=function(){var j=c.find(".sitemap-links-section").length;
var d=(100/j)+"%";
c.find(".sitemap-links-section").css("width",d)
};
this.init=function(){b.sitemapBuildColumn();
return this
};
return this.init()
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(d,e,f){d.insideSecNav=(function(){function a(){var b=this;
var o=[],q=[],c=[],n=true,m=0,p=[];
this.stickTopNav=function(j){var g=e(window).width(),h=0;
if(e(".main-nav-container").length>0){if(j>=q[1]){if(n){e(".main-nav-container").addClass("stuck");
if(e(".request4info").length!=0){e(".sticky-navigation .rfi-tag").show()
}e(".page-container").css("margin-top","44px");
n=false
}}else{e(".page-container").css("margin-top","0");
e(".main-nav-container").removeClass("stuck");
e(".sticky-navigation .rfi-tag").hide();
n=true
}}};
this.handleScroll=function(g){var h=e(window).width();
e.each(o,function(r){if(r>0&&g>=o[r]&&g<o[r+1]){var s=e(".sec-nav-item")[r-1];
if(!e(s).find(".inside-sec-nav-links").hasClass("active")){e(".sec-nav-item").find(".inside-sec-nav-links").removeClass("active");
e(s).find(".inside-sec-nav-links").addClass("active")
}if(r>6||h<=768){var k=p[r+1];
if(e.trim(k)==""){k=p[r+1]
}e(".dd-sec-nav").find(".dropdown-toggle").html(k+' <b class="caret"></b>');
var j=e(".sec-nav-item")[6];
if(!e(j).find(".dropdown-toggle").hasClass("active")){e(j).find(".dropdown-toggle").addClass("active")
}}else{e(".dd-sec-nav").find(".dropdown-toggle").removeClass("active").html('More <b class="caret"></b>')
}}})
};
this.handleClick=function(){e(".sticky-navigation").on("click",".inside-sec-nav-links",function(k){k.preventDefault();
var h=e(this),r=h.parent(),g=e(r).data("nav-index"),j=e(".quick-facts"),s=0;
if(j.length<=0){g+=1
}else{if(e("#domainValue").val()=="SMUDE"){s=j.outerHeight(true)-55
}}e.each(c,function(w){if(g==w){var y=c[w]+s,v=1000,x=null;
e("body,html").animate({scrollTop:y+"px"},{duration:v},{easing:x})
}})
})
};
this.prepareScrollPoints=function(){if(e(".news-flash-banner").hasClass("hide-news-flash")){var O=e(".top-navigation").outerHeight(true)
}else{var O=e(".top-navigation").outerHeight(true)+e(".news-flash-banner").outerHeight(true)
}var E=e(".primary-nav-container").height(true);
var I=[0],J=[0],g=[0],N=[],G=0,F=[null],j=e(window).width(),H=(j>768)?false:true,R=0;
if(e(".manipal-mobile .request4info").length!=0&&e("#domainValue").val()=="SMUDE"){R=571
}var L=(H)?e(".mobile-hero-container").outerHeight(true):((e(".hero-container").length===0)?0:526);
if(H){if(e("#domainValue").val()=="MEMG"){G+=L+O-20
}else{G+=L+O+75
}}else{G+=(L-70)+O
}if(e(".quick-facts").length!=0){var K=(H)?e(".manipal-mobile .quick-facts").outerHeight(true):e(".quick-facts").outerHeight(true);
G+=K
}if(e(".four-column-manual .container-940").find(".sticky-nav-data").length!=0){e(".four-column-manual .container-940").find(".sticky-nav-data").remove()
}if(!H){}else{G+=R
}I.push(G);
F.push("Hero Banner");
J.push(G);
g.push(G);
var S=e(".sticky-nav-data"),P,M=e(".main-nav-container .sticky-navigation ul");
e(M).empty();
var k=true;
e.each(S,function(t){var v=S[t],w=S[t+1];
var r=e(v).find(".sticky-title").text(),x=e(v).find(".sticky-image-path").text(),u=e(v).find(".sticky-link-target").text(),s="";
if(e(w).length>0){s=e(w).find(".sticky-title").text()
}if(e(v).parent(".quick-facts").length<=0){if(e.trim(s)==""){G+=e(w).parent().outerHeight(true);
g.push(G)
}if(e.trim(r)!=""){if(m<6&&!H){e(M).append('<li class="sec-nav-item" data-nav-index="'+t+'"><a href="'+u+'" title="'+r+'" class="inside-sec-nav-links"><span class="sticky-nav-text">'+r+"</span></a></li>")
}else{if(k){e(M).append('<li class="dropdown dd-sec-nav sec-nav-item"><a href="#" class="dropdown-toggle" data-toggle="dropdown">More <b class="caret"></b></a><ul class="inside-drop-down dropdown-menu"></ul></li>');
k=false
}e(".inside-drop-down").append('<li role="presentation" data-nav-index="'+t+'"><a href="'+u+'" tabindex="-1" role="menuitem" data-value="" class="inside-sec-nav-links">'+r+"</a></li>")
}m+=1;
G+=e(v).parent().outerHeight(true);
J.push(G);
I.push(G);
F.push(r);
g.push(G)
}}});
if(e("#request4info").length>0){var Q=e('input[name="siteIdentifier"]').val().toLowerCase();
var h='<div class="rfi-text" >Request for information</div>';
if(Q=="miu"){h='<div class="rfi-text" ></div>'
}e(M).append('<a href="#request4info" class="rfi-tag">'+h+'<img src="/etc/designs/manipal/'+Q+"/"+Q+'-clientlibs/images/rfi-bg.png" alt="Request for Information" /></a>');
e('.manipal-mobile .main-nav-container ul li a[href="#videoplanner"]').hide()
}b.setItemWidth();
o=I;
q=J;
c=g;
p=F;
e(window).scroll(function(){var r=e(window).scrollTop();
b.stickTopNav(r);
b.handleScroll(r)
});
b.handleClick()
};
this.requestForInfo=function(){e(".sticky-nav-container").on("click",".rfi-tag",function(g){g.preventDefault();
e(window).scrollTop(0);
var h=e(".request4info").find("form input").not("input[type=hidden]")[0];
e(h).focus()
})
};
this.setItemWidth=function(){var h=e(".sticky-nav-container li.sec-nav-item").length;
var g=(100/h)+"%";
e(".sticky-nav-container li.sec-nav-item").css("width",g)
};
this.setDefaults=function(){e(window).scrollTop(0);
e(document).mousedown(function(h){if(h.which===2){h.preventDefault()
}return true
});
b.prepareScrollPoints();
b.requestForInfo();
var g={primaryStickyHeight:e(".js-primary-sticky").outerHeight(),isFixedState:false,lastAnimation:0,prevScrollTop:0,scrollDirection:"null"};
d.stickyNavDefaults=g
};
this.homePageTab=function(){var h=e(".sticky-nav-data"),g,j=e(".main-nav-container .sticky-navigation ul"),k=e(window).width();
e(j).empty();
var r=true;
e.each(h,function(w){var y=h[w];
var v=e(y).find(".sticky-title").text(),z=e(y).find(".sticky-image-path").text(),x=e(y).find(".sticky-link-target").text();
if(w<1){e(j).append('<li class="hom-sec-nav-item learning" data-nav-index="'+w+'"><span class="banner_anim"></span><a href="'+x+'" title="'+v+'" class="inspired_learning"><img class="normal" src="'+z+'" alt="'+v+'" height="15" width="15" /><img class="brown" src="'+z+'" alt="'+v+'" height="15" width="15" /><span class="sticky-nav-text">'+v+"</span></a></li>")
}else{if(!(x=="#videoplanner"&&k<=768)){e(j).append('<li class="hom-sec-nav-item" data-nav-index="'+w+'"><span class="banner_anim"></span><a href="'+x+'" title="'+v+'" class="inspired_learning"><img class="normal" src="'+z+'" alt="'+v+'" height="15" width="15" /><img class="brown" src="'+z+'" alt="'+v+'" height="15" width="15" /><span class="sticky-nav-text">'+v+"</span></a></li>")
}}})
};
this.init=function(){var g=e(window).width();
if(e(".bs-docs-container  section.learning-carousel-sections").length==0){e(".js-primary-sticky").css("top","auto");
e(document).ready(function(){setTimeout(function(){b.setDefaults()
},1000)
})
}else{b.homePageTab()
}return this
};
return this.init()
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(c,b,a){b.log=function(d){(function(h,e,f){e.log=function(g){if(MODULE.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(g)
}};
h.feesDropdown=(function(){function g(){var m=this;
var n=e("#fees .dropdown span"),o=e("#fees .dropdown-menu li"),p=e("#fees .dropdown-menu li");
this.feesMobileDD=function(){e(o).on("click",function(){var q=e(this),j=q.find("a").text();
n.text(j);
e(p).removeClass("active");
var k=q.find("a").attr("href");
e(k).addClass("active")
})
};
this.ifEmpty=function(){var j=e("#fees .content-panel-text .content-panel-quote").is(":empty");
if(j){e("#fees .content-panel-quote-indicator").css("background","none")
}var k=e(".hostel-fees span").is(":empty");
if(k){e(".fees-table .arrow-right").css("background","none")
}};
this.init=function(){m.feesMobileDD();
m.ifEmpty()
};
return this.init()
}return new g()
}())
}(window.manipal=window.manipal||{},jQuery));
if(MODULE.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(d)
}};
c.feesDropdown=(function(){function d(){var e=this;
var h=b("#fees .dropdown span"),g=b("#fees .dropdown-menu li"),f=b("#fees .dropdown-menu li");
this.feesMobileDD=function(){b(g).on("click",function(){var k=b(this),j=k.find("a").text();
h.text(j);
b(f).removeClass("active");
var m=k.find("a").attr("href");
b(m).addClass("active")
})
};
this.ifEmpty=function(){var j=b("#fees .content-panel-text .content-panel-quote").is(":empty");
if(j){b("#fees .content-panel-quote-indicator").css("background","none")
}var k=b(".hostel-fees span").is(":empty");
if(k){b(".fees-table .arrow-right").css("background","none")
}};
this.init=function(){e.feesMobileDD();
e.ifEmpty()
};
return this.init()
}return new d()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(d,e,f){d.stickySocial=(function(){function a(){var b=this;
var c=e(window).height();
this.manualStickSocial=function(j){var k=true;
if(j>=(c-321)){if(k){e(".mu-social-share-container").addClass("stuck");
e(".mu-social-share-container").css("top","auto");
k=false
}}else{e(".mu-social-share-container").removeClass("stuck");
e(".mu-social-share-container").css("top",c+20);
k=true
}};
this.handleWindowScroll=function(){e(window).scroll(function(){var h=e(window).scrollTop();
b.manualStickSocial(h)
})
};
this.init=function(){e(".mu-social-share-container").css("top",c+20);
if(e(".mu-social-share-container").length!=0){e(document).ready(function(){setTimeout(function(){b.handleWindowScroll()
},1000)
})
}return this
};
return this.init()
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
/*!
 * This file contains the code for the Initialzing Ranking Carousel.
 *
 * @project   Manipal GE
 * @date      2013-12-24
 * @author    Shreenithya, SapientNitro <skaveri@sapient.com>
 * @licensor  CLIENTNAME
 * @site      Manipal
 *
 */
(function(d,e,f){e.log=function(a){if(MODULE.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
d.youtubeVideo=(function(){function a(){var b=this;
b.setFluidWidth=function(){var c=e(".video-container iframe[src^='http://www.youtube.com']"),h=e(".video-container");
c.each(function(){e(this).data("aspectRatio",0.42).removeAttr("height").removeAttr("width")
});
e(window).resize(function(){var g=h.width();
c.each(function(){var j=e(this);
j.width("100%").height(g*j.data("aspectRatio"))
})
}).resize()
};
this.init=function(){e(".video-container a.youtube-link").on("click",function(c){var k=e(c.currentTarget);
var j="";
k.siblings("iframe").dialog({autoOpen:false,resizable:false,height:"auto",width:"100%",zIndex:2000,appendTo:k.siblings(".video-dialog"),modal:true,closeOnEscape:true});
if(k.siblings(".video-dialog").find(".video-close-btn").length==0){k.siblings(".video-dialog").find("iframe").before('<div class="video-close-btn"><span>X</span></div>')
}j=k.siblings(".video-dialog").find("iframe").attr("src");
k.siblings(".video-dialog").find("iframe").dialog("open");
b.setFluidWidth();
k.siblings(".video-dialog").find(".video-close-btn span").off().on("click",function(){k.siblings(".video-dialog").find("iframe").dialog("close");
console.log(j);
k.siblings(".video-dialog").find("iframe").attr("src",j)
})
})
};
return this.init()
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(d,e,f){d.campusTour=(function(){function a(){var y=this;
var r=[0],v="",b=0,t=0,c=1000,s=1,x=false,A=0,B=0;
var u=e(".campus-carousel-container");
var w=e("#scroller");
var z=e(window).width();
this.scrollTour=function(){var h=e(".campus-tour-list");
var j=true;
var g;
h.each(function(n,F){if(h[n]!=f){var H=Math.round(w.scrollLeft()*1.33263925);
var o=e(this);
var E=0;
var q=parseInt(o.css("left").split("px")[0]);
var p=o.find(".campus-alignment").val();
if(q>=parseInt("-"+o.width())&&q<0){if(j){j=false;
g=r[n]-H
}var m=65-[(g/(-o.width()))*60];
if(m>65){m=65
}if(m<5){m=5
}var k={};
if(p=="left"){k={left:"5%"}
}else{if(p=="right"){k={right:"5%"}
}}if(z<767){if(p=="right"){k={left:55+"%"}
}else{k={left:35+"px"}
}E=750
}o.find(".banner-content-container").stop().animate(k,{easing:"",duration:(c-E),callback:function(){}})
}if((q>parseInt("-"+(o.width()/2)))&&(q<=parseInt(o.width()/2))){var G=u.find("li")[n+1];
if(!e(G).find("a").hasClass("active")&&!x){u.find("li a").removeClass("active");
e(G).find("a").addClass("active")
}}if(!x){c=500
}else{c=1000
}o.stop().animate({left:(r[n]-H)},{easing:"",duration:(c-500),callback:function(){}})
}})
};
this.keyDownEventHeander=function(){e(document).bind("keydown",function(h){if(h.keyCode===37||h.keyCode===39){h.preventDefault()
}var k=new Date().getTime();
if(k-t<5000){s+=1
}else{s=1
}t=k;
var n=u.find("li a.active").data("nav-index");
var g=u.find("li .navigation-link").length-1;
if(h.keyCode===37){x=false;
var m=(w.scrollLeft()-10);
w.scrollLeft(m)
}else{if(h.keyCode===39){if(n==g){var o=e(".campus-tour").find(".data-tour-index-"+n);
var j=parseInt(o.css("left").split("px")[0]);
if(j<=30){return
}}x=false;
var m=(w.scrollLeft()+10);
w.scrollLeft(m)
}}y.togglePrevNextBtnsStates(n)
})
};
this.mouseWheelEventHandler=function(){e(document).bind("mousewheel DOMMouseScroll",function(h){h.preventDefault();
var g=h.originalEvent.wheelDelta||-h.originalEvent.detail;
g=g||h.deltaY;
var j=new Date().getTime();
if(j-t<500){return
}x=false;
if(g<0){var k=(w.scrollLeft()-30);
w.scrollLeft(k);
y.scrollTour(k*-1)
}else{var k=(w.scrollLeft()+30);
w.scrollLeft(k);
y.scrollTour(k)
}t=j
})
};
this.prepareTourContent=function(){var h=d.campusTourConfig;
var g=e(".campus-tour");
g.empty();
u.empty();
u.append("<li><a href='#' class='campus-tour-prev disabled'><img src='/etc/designs/manipal/images/campus-carousel-prev.png'></a></li>");
var j=0;
e.each(h,function(m,p){var k="";
var n=z<1024?"left":"left";
var o=z<1024?"40%":"56%";
if(e.trim(p.campusAlignment).toLowerCase()=="left"){n=z<1024?"left":"right";
o=z<1024?"56px":"60%";
if(z<767){o="35px"
}}else{if(e.trim(p.campusAlignment).toLowerCase()=="right"){n=z<1024?"left":"left";
o=z<1024?"40%":"60%";
if(z<767){o="55%"
}}}var q=(e(window).width()<767)?p.campusMobileImage:p.campusImage;
k="<li class='campus-tour-list data-campus-tour data-tour-index-"+m+"'><div class='campus-banner'><img src='"+q+"'></div><div class='banner-content-container "+(j==0?"first":"")+"' style='"+n+":"+o+"'><div class='campus-banner-content'>";
if(e.trim(p.campusHeading)!=""){k+="<div class='campus-banner-header'>"+p.campusHeading+"</div>"
}if(e.trim(p.campusDescription)!=""){k+="<div class='header-below-content'><p>"+p.campusDescription+"</p></div>"
}k+="<div class='campus-living-container'><div class='campus-living-left'>";
if(e.trim(p.linkTitle1)!=""){k+="<a target='_blank' href='"+p.linkPath1+"'><div class='campus-living-links'><span class='links-icon'><img src='"+p.linkImagePath1+"'></span><span class='links-content'>"+p.linkTitle1+"</span></div></a>"
}if(e.trim(p.linkTitle2)!=""){k+="<a href='"+p.linkPath2+"'><div class='campus-living-links'><span class='links-icon'><img src='"+p.linkImagePath2+"'></span><span class='links-content'>"+p.linkTitle2+"</span></div></a>"
}k+="</div>";
if(e.trim(p.videoTitle)!=""){k+="<div class='campus-living-right'><a href='"+p.campusYouTubeLink+"'><div class='campus-living-video'><div class='campus-video-container'><img src='"+p.videoImagePath+"'></div><div class='campus-video-content'><span class='video-content'>"+p.videoTitle+"</span><span class='video-play'></span></div></div></a>"
}k+="</div></div></div></div><input type='hidden' class='campus-alignment' value="+p.campusAlignment+"></li>";
g.append(k);
u.append("<li><a href='#' data-nav-index='"+m+"' class='navigation-link'></a></li>");
j=1
});
e(".campus-tour-mobile-prev").hide();
u.append("<li class='last'><a href='#' class='campus-tour-next'><img src='/etc/designs/manipal/images/campus-carousel-next.png'></a></li>");
u.find("a[data-nav-index=0]").addClass("active")
};
this.changeScrollPosition=function(h,g,j){x=true;
w.scrollLeft(h);
u.find("li a").removeClass("active");
e(g).addClass("active")
};
this.onCampusTourMobilePrev=function(h){h.preventDefault();
h.stopPropagation();
var j=u.find("li a.active").data("nav-index");
if(j==0){return
}if(j==1){e(".campus-tour-mobile-prev").hide()
}if(z<767){if(!e(".campus-tour-mobile-next").is(":visible")){e(".campus-tour-mobile-next").show()
}}j-=1;
var g=u.find(".navigation-link")[j];
y.changeScrollPosition(r[j]/(1.33263925),g,"first");
y.togglePrevNextBtnsStates(j)
};
this.onCampusTourMobileNext=function(h){h.preventDefault();
h.stopPropagation();
var j;
var k=j=u.find("li a.active").data("nav-index");
if(z<767){if(k==(u.find("li .navigation-link").length-2)){e(".campus-tour-mobile-next").hide()
}if(!e(".campus-tour-mobile-prev").is(":visible")){e(".campus-tour-mobile-prev").show()
}}if(k==(u.find("li .navigation-link").length-1)){return
}k+=1;
var g=u.find(".navigation-link")[k];
y.changeScrollPosition(r[k]/(1.33263925),g,"last");
y.togglePrevNextBtnsStates(k);
e(".mu-campus-tour").find(".campus-tour .data-tour-index-"+j).find(".banner-content-container").animate({right:"5%"},{easing:"",duration:c})
};
this.hideAddressBar=function(){setTimeout(function(){window.scrollTo(0,1)
},0)
};
this.togglePrevNextBtnsStates=function(g){u.find(".campus-tour-prev").removeClass("disabled");
u.find(".campus-tour-next").removeClass("disabled");
if(g==0){u.find(".campus-tour-prev").addClass("disabled")
}else{if(g==u.find("li .navigation-link").length-1){u.find(".campus-tour-next").addClass("disabled")
}}};
this.contentAnimationPosition=function(j){var m=e(".mu-campus-tour").find(".campus-tour .data-tour-index-"+j).find(".campus-alignment").val();
var k=e(".mu-campus-tour").find(".campus-tour .data-tour-index-"+j).find(".banner-content-container");
var g={};
var h={};
k.css({left:"",right:""});
if(e.trim(m).toLowerCase()=="left"){g={left:"60%"};
h={left:"5%"};
if(z<767){h={left:35+"px"}
}}else{if(e.trim(m).toLowerCase()=="right"){g={right:"60%"};
h={right:"5%"};
if(z<767){h={left:"55%"}
}}}k.css(g);
return h
};
this.handleClickEvent=function(){u.on("click",".navigation-link",function(j){j.preventDefault();
var m=e(this).data("nav-index");
var g=u.find("li .navigation-link").length-1;
var n=e(".mu-campus-tour").find(".campus-tour .data-tour-index-"+m).find(".campus-alignment").val();
var h={};
var k={};
var k=y.contentAnimationPosition(m);
if(e.trim(n).toLowerCase()=="left"){if(z<767){k={left:35+"px"}
}}else{if(e.trim(n).toLowerCase()=="right"){if(z<767){k={left:"55%"}
}}}if(z<767){c=0;
e(".campus-tour-mobile-prev").show();
e(".campus-tour-mobile-next").show();
if(m==0){e(".campus-tour-mobile-prev").hide();
e(".campus-tour-mobile-next").show()
}if(m==(u.find("li .navigation-link").length-1)){e(".campus-tour-mobile-prev").show();
e(".campus-tour-mobile-next").hide()
}}if(m==0){}if(m=="lastIndex"){}y.togglePrevNextBtnsStates(m);
y.changeScrollPosition(r[m]/(1.33263925),this,"any");
e.each(u.find("li .navigation-link"),function(o,p){if(m==o){e(".mu-campus-tour").find(".campus-tour .data-tour-index-"+o).find(".banner-content-container").animate(k,{easing:"",duration:c})
}})
});
u.on("click",".campus-tour-prev",function(h){h.preventDefault();
var k=u.find("li a.active").data("nav-index");
if(k==0){return
}if(z<767){c=0;
if(!e(".campus-tour-mobile-next").is(":visible")){e(".campus-tour-mobile-next").show()
}}k-=1;
var j=y.contentAnimationPosition(k);
var g=u.find(".navigation-link")[k];
y.changeScrollPosition(r[k]/(1.33263925),g,"first");
y.togglePrevNextBtnsStates(k);
e(".mu-campus-tour").find(".campus-tour .data-tour-index-"+k).find(".banner-content-container").animate(j,{easing:"",duration:c})
});
u.on("click",".campus-tour-next",function(h){h.preventDefault();
var k;
var m=k=u.find("li a.active").data("nav-index");
if(m==(u.find("li .navigation-link").length-1)){return
}if(z<767){c=0;
if(m==(u.find("li .navigation-link").length-2)){e(".campus-tour-mobile-next").hide()
}if(!e(".campus-tour-mobile-prev").is(":visible")){e(".campus-tour-mobile-prev").show()
}}m+=1;
var j=y.contentAnimationPosition(m);
var g=u.find(".navigation-link")[m];
y.changeScrollPosition(r[m]/(1.33263925),g,"last");
y.togglePrevNextBtnsStates(m);
e(".mu-campus-tour").find(".campus-tour .data-tour-index-"+m).find(".banner-content-container").animate(j,{easing:"",duration:c})
});
e(".campus-tour-mobile-prev").on("click",function(g){y.onCampusTourMobilePrev(g)
});
e(".campus-tour-mobile-next").on("click",function(g){y.onCampusTourMobileNext(g)
})
};
this.setDefaults=function(){var h=0;
e(document).mousedown(function(k){if(k.which===2){k.preventDefault()
}return true
});
y.prepareTourContent();
var g=e(".campus-tour-list");
var j=true;
g.each(function(m,k){e(this).css("left",h);
if(g[m+1]==f){return false
}if(z<767){h+=e(window).outerWidth(true)-20
}else{h+=e(this).outerWidth(true)
}r.push(h)
});
b=h;
e("#scrollerInner").width(h+2);
y.openVideo()
};
this.handleScroll=function(){w.on("scroll",function(g){y.scrollTour()
})
};
this.openVideo=function(){var h=e(".campus-tour-list"),g=e(".campus-tour-detail-list");
e(".campus-living-right a").click(function(k){k.preventDefault();
var j=e(this).parents(".campus-tour-detail-list").data("index");
if(e(".campus-video-container img").attr("src")!=""){e(".campus-banner-header").zIndex(0);
e(".campus-tour-video-container").dialog("open");
e(".video-url").attr("src",e(this).attr("href"))
}})
};
this.init=function(){if(d.campusTourConfig==f){return
}y.setDefaults();
e(document).ready(function(){if(z<767){if(window.innerHeight>window.innerWidth){alert("Best viewed in Landscape Mode!")
}e(window).on("orientationchange",function(h){if(window.orientation==0){alert("Best viewed in Landscape Mode!")
}else{location.reload()
}});
e(".campus-tour .campus-tour-list").swipe({swipe:function(m,j,h,k,o,n){if(j==="left"){y.onCampusTourMobileNext(m)
}else{if(j==="right"){y.onCampusTourMobilePrev(m)
}}},allowPageScroll:"vertical",threshold:0,fingers:"all"});
y.hideAddressBar()
}y.mouseWheelEventHandler();
y.keyDownEventHeander();
y.handleClickEvent();
y.handleScroll();
e(".campus-tour-video-container").dialog({autoOpen:false,resizable:false,height:"auto",modal:true,dialogClass:"campus-tour-video",closeOnEscape:true,width:"auto",appendTo:".page-container"});
e(".page-container .ui-dialog.campus-tour-video .ui-dialog-titlebar-close").on("click",function(h){e(".campus-banner-header").zIndex(1)
});
var g=e(".mu-campus-tour .campus-banner-container .campus-banner img");
g.one("load",function(){if(z<1280){var h=e(this).css("height");
e("ul.campus-tour").css("height",h)
}}).each(function(){if(this.complete){e(this).load()
}})
});
return this
};
return this.init()
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
$(".track-btn").click(function(){_submitBtn=$(".component-track-application form .track-btn"),_appTextBox=$(".component-track-application form .application-number"),_form=$(".component-track-application form");
var g=_appTextBox.val();
var h='<label class="error">Not a valid Number</label>';
g=$.trim(g);
var e=/^[0-9]+$/;
var f=true;
$(".component-track-application form .error").remove();
if($.trim(g)==""||!(g.match(e))){_appTextBox.after(h);
f=false
}else{$(".error_block").hide();
$.ajax({type:"POST",url:"/bin/manipal/component/trackApplicationStatus",data:{applicationNum:g},success:function(a){if(a!=""||a!=null){console.log(a);
$(".application-result-block").show();
if(a.applicantName==""||a.applicantName==undefined){$(".head_applicantName").hide();
$(".data_applicantName").hide()
}else{$(".data_applicantName").text(a.applicantName);
$(".head_applicantName").show();
$(".data_applicantName").show()
}if(a.applicantNum==""||a.applicantNum==undefined){$(".head_applicationNum").hide();
$(".data_applicationNum").hide()
}else{$(".data_applicationNum").text(a.applicantNum);
$(".head_applicationNum").show();
$(".data_applicationNum").show()
}if(a.Course==""||a.Course==undefined){$(".head_courses").hide();
$(".data_courses").hide()
}else{$(".data_courses").text(a.Course);
$(".head_courses").show();
$(".data_courses").show()
}if(a.hallTicketNumber==""||a.hallTicketNumber==undefined){$(".head_hallTicketNumber").hide();
$(".data_hallTicketNumber").hide()
}else{$(".data_hallTicketNumber").text(a.hallTicketNumber);
$(".head_hallTicketNumber").show();
$(".data_hallTicketNumber").show()
}if(a.category==""||a.category==undefined){$(".head_category").hide();
$(".data_category").hide()
}else{$(".data_category").text(a.category);
$(".head_category").show();
$(".data_category").show()
}if(a.remarks==""||a.remarks==undefined){$(".head_remarks").hide();
$(".data_remarks").hide()
}else{$(".data_remarks").text(a.remarks);
$(".head_remarks").show();
$(".data_remarks").show()
}if(a.rank==""||a.rank==undefined){$(".head_rank").hide();
$(".data_rank").hide()
}else{$(".data_rank").text(a.rank);
$(".head_rank").show();
$(".data_rank").show()
}if(a.solution==""||a.solution==undefined){$(".head_solution").hide();
$(".data_solution").hide()
}else{$(".data_solution").text(a.solution);
$(".head_solution").show();
$(".data_solution").show()
}}else{$(".error_block").show();
$(".application-result-block").hide()
}}})
}});
function MarkerClusterer(h,g,j){this.extend(MarkerClusterer,google.maps.OverlayView);
this.map_=h;
this.markers_=[];
this.clusters_=[];
this.sizes=[53,56,66,78,90];
this.styles_=[];
this.ready_=false;
var f=j||{};
this.gridSize_=f.gridSize||60;
this.minClusterSize_=f.minimumClusterSize||2;
this.maxZoom_=f.maxZoom||null;
this.styles_=f.styles||[];
this.imagePath_=f.imagePath||this.MARKER_CLUSTER_IMAGE_PATH_;
this.imageExtension_=f.imageExtension||this.MARKER_CLUSTER_IMAGE_EXTENSION_;
this.zoomOnClick_=true;
if(f.zoomOnClick!=undefined){this.zoomOnClick_=f.zoomOnClick
}this.averageCenter_=false;
if(f.averageCenter!=undefined){this.averageCenter_=f.averageCenter
}this.setupStyles_();
this.setMap(h);
this.prevZoom_=this.map_.getZoom();
var k=this;
google.maps.event.addListener(this.map_,"zoom_changed",function(){var b=k.map_.getZoom();
var a=k.map_.minZoom||0;
var c=Math.min(k.map_.maxZoom||100,k.map_.mapTypes[k.map_.getMapTypeId()].maxZoom);
b=Math.min(Math.max(b,a),c);
if(k.prevZoom_!=b){k.prevZoom_=b;
k.resetViewport()
}});
google.maps.event.addListener(this.map_,"idle",function(){k.redraw()
});
if(g&&(g.length||Object.keys(g).length)){this.addMarkers(g,false)
}}MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_PATH_="http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/images/m";
MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_EXTENSION_="png";
MarkerClusterer.prototype.extend=function(c,d){return(function(b){for(var a in b.prototype){this.prototype[a]=b.prototype[a]
}return this
}).apply(c,[d])
};
MarkerClusterer.prototype.onAdd=function(){this.setReady_(true)
};
MarkerClusterer.prototype.draw=function(){};
MarkerClusterer.prototype.setupStyles_=function(){if(this.styles_.length){return
}for(var c=0,d;
d=this.sizes[c];
c++){this.styles_.push({url:this.imagePath_+(c+1)+"."+this.imageExtension_,height:d,width:d})
}};
MarkerClusterer.prototype.fitMapToMarkers=function(){var g=this.getMarkers();
var h=new google.maps.LatLngBounds();
for(var e=0,f;
f=g[e];
e++){h.extend(f.getPosition())
}this.map_.fitBounds(h)
};
MarkerClusterer.prototype.setStyles=function(b){this.styles_=b
};
MarkerClusterer.prototype.getStyles=function(){return this.styles_
};
MarkerClusterer.prototype.isZoomOnClick=function(){return this.zoomOnClick_
};
MarkerClusterer.prototype.isAverageCenter=function(){return this.averageCenter_
};
MarkerClusterer.prototype.getMarkers=function(){return this.markers_
};
MarkerClusterer.prototype.getTotalMarkers=function(){return this.markers_.length
};
MarkerClusterer.prototype.setMaxZoom=function(b){this.maxZoom_=b
};
MarkerClusterer.prototype.getMaxZoom=function(){return this.maxZoom_
};
MarkerClusterer.prototype.calculator_=function(h,j){var g=0;
var k=h.length;
var f=k;
while(f!==0){f=parseInt(f/10,10);
g++
}g=Math.min(g,j);
return{text:k,index:g}
};
MarkerClusterer.prototype.setCalculator=function(b){this.calculator_=b
};
MarkerClusterer.prototype.getCalculator=function(){return this.calculator_
};
MarkerClusterer.prototype.addMarkers=function(g,h){if(g.length){for(var e=0,f;
f=g[e];
e++){this.pushMarkerTo_(f)
}}else{if(Object.keys(g).length){for(var f in g){this.pushMarkerTo_(g[f])
}}}if(!h){this.redraw()
}};
MarkerClusterer.prototype.pushMarkerTo_=function(d){d.isAdded=false;
if(d.draggable){var c=this;
google.maps.event.addListener(d,"dragend",function(){d.isAdded=false;
c.repaint()
})
}this.markers_.push(d)
};
MarkerClusterer.prototype.addMarker=function(d,c){this.pushMarkerTo_(d);
if(!c){this.redraw()
}};
MarkerClusterer.prototype.removeMarker_=function(e){var h=-1;
if(this.markers_.indexOf){h=this.markers_.indexOf(e)
}else{for(var g=0,f;
f=this.markers_[g];
g++){if(f==e){h=g;
break
}}}if(h==-1){return false
}e.setMap(null);
this.markers_.splice(h,1);
return true
};
MarkerClusterer.prototype.removeMarker=function(e,d){var f=this.removeMarker_(e);
if(!d&&f){this.resetViewport();
this.redraw();
return true
}else{return false
}};
MarkerClusterer.prototype.removeMarkers=function(j,n){var k=false;
for(var g=0,h;
h=j[g];
g++){var m=this.removeMarker_(h);
k=k||m
}if(!n&&k){this.resetViewport();
this.redraw();
return true
}};
MarkerClusterer.prototype.setReady_=function(b){if(!this.ready_){this.ready_=b;
this.createClusters_()
}};
MarkerClusterer.prototype.getTotalClusters=function(){return this.clusters_.length
};
MarkerClusterer.prototype.getMap=function(){return this.map_
};
MarkerClusterer.prototype.setMap=function(b){this.map_=b
};
MarkerClusterer.prototype.getGridSize=function(){return this.gridSize_
};
MarkerClusterer.prototype.setGridSize=function(b){this.gridSize_=b
};
MarkerClusterer.prototype.getMinClusterSize=function(){return this.minClusterSize_
};
MarkerClusterer.prototype.setMinClusterSize=function(b){this.minClusterSize_=b
};
MarkerClusterer.prototype.getExtendedBounds=function(p){var r=this.getProjection();
var o=new google.maps.LatLng(p.getNorthEast().lat(),p.getNorthEast().lng());
var m=new google.maps.LatLng(p.getSouthWest().lat(),p.getSouthWest().lng());
var q=r.fromLatLngToDivPixel(o);
q.x+=this.gridSize_;
q.y-=this.gridSize_;
var j=r.fromLatLngToDivPixel(m);
j.x-=this.gridSize_;
j.y+=this.gridSize_;
var n=r.fromDivPixelToLatLng(q);
var k=r.fromDivPixelToLatLng(j);
p.extend(n);
p.extend(k);
return p
};
MarkerClusterer.prototype.isMarkerInBounds_=function(d,c){return c.contains(d.getPosition())
};
MarkerClusterer.prototype.clearMarkers=function(){this.resetViewport(true);
this.markers_=[]
};
MarkerClusterer.prototype.resetViewport=function(g){for(var h=0,f;
f=this.clusters_[h];
h++){f.remove()
}for(var h=0,e;
e=this.markers_[h];
h++){e.isAdded=false;
if(g){e.setMap(null)
}}this.clusters_=[]
};
MarkerClusterer.prototype.repaint=function(){var b=this.clusters_.slice();
this.clusters_.length=0;
this.resetViewport();
this.redraw();
window.setTimeout(function(){for(var d=0,a;
a=b[d];
d++){a.remove()
}},0)
};
MarkerClusterer.prototype.redraw=function(){this.createClusters_()
};
MarkerClusterer.prototype.distanceBetweenPoints_=function(d,n){if(!d||!n){return 0
}var o=6371;
var q=(n.lat()-d.lat())*Math.PI/180;
var p=(n.lng()-d.lng())*Math.PI/180;
var a=Math.sin(q/2)*Math.sin(q/2)+Math.cos(d.lat()*Math.PI/180)*Math.cos(n.lat()*Math.PI/180)*Math.sin(p/2)*Math.sin(p/2);
var c=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
var m=o*c;
return m
};
MarkerClusterer.prototype.addToClosestCluster_=function(r){var m=40000;
var p=null;
var n=r.getPosition();
for(var q=0,d;
d=this.clusters_[q];
q++){var k=d.getCenter();
if(k){var o=this.distanceBetweenPoints_(k,r.getPosition());
if(o<m){m=o;
p=d
}}}if(p&&p.isMarkerInClusterBounds(r)){p.addMarker(r)
}else{var d=new Cluster(this);
d.addMarker(r);
this.clusters_.push(d)
}};
MarkerClusterer.prototype.createClusters_=function(){if(!this.ready_){return
}var e=new google.maps.LatLngBounds(this.map_.getBounds().getSouthWest(),this.map_.getBounds().getNorthEast());
var g=this.getExtendedBounds(e);
for(var h=0,f;
f=this.markers_[h];
h++){if(!f.isAdded&&this.isMarkerInBounds_(f,g)){this.addToClosestCluster_(f)
}}};
function Cluster(b){this.markerClusterer_=b;
this.map_=b.getMap();
this.gridSize_=b.getGridSize();
this.minClusterSize_=b.getMinClusterSize();
this.averageCenter_=b.isAverageCenter();
this.center_=null;
this.markers_=[];
this.bounds_=null;
this.clusterIcon_=new ClusterIcon(this,b.getStyles(),b.getGridSize())
}Cluster.prototype.isMarkerAlreadyAdded=function(d){if(this.markers_.indexOf){return this.markers_.indexOf(d)!=-1
}else{for(var f=0,e;
e=this.markers_[f];
f++){if(e==d){return true
}}}return false
};
Cluster.prototype.addMarker=function(n){if(this.isMarkerAlreadyAdded(n)){return false
}if(!this.center_){this.center_=n.getPosition();
this.calculateBounds_()
}else{if(this.averageCenter_){var g=this.markers_.length+1;
var j=(this.center_.lat()*(g-1)+n.getPosition().lat())/g;
var m=(this.center_.lng()*(g-1)+n.getPosition().lng())/g;
this.center_=new google.maps.LatLng(j,m);
this.calculateBounds_()
}}n.isAdded=true;
this.markers_.push(n);
var h=this.markers_.length;
if(h<this.minClusterSize_&&n.getMap()!=this.map_){n.setMap(this.map_)
}if(h==this.minClusterSize_){for(var k=0;
k<h;
k++){this.markers_[k].setMap(null)
}}if(h>=this.minClusterSize_){n.setMap(null)
}this.updateIcon();
return true
};
Cluster.prototype.getMarkerClusterer=function(){return this.markerClusterer_
};
Cluster.prototype.getBounds=function(){var h=new google.maps.LatLngBounds(this.center_,this.center_);
var g=this.getMarkers();
for(var e=0,f;
f=g[e];
e++){h.extend(f.getPosition())
}return h
};
Cluster.prototype.remove=function(){this.clusterIcon_.remove();
this.markers_.length=0;
delete this.markers_
};
Cluster.prototype.getSize=function(){return this.markers_.length
};
Cluster.prototype.getMarkers=function(){return this.markers_
};
Cluster.prototype.getCenter=function(){return this.center_
};
Cluster.prototype.calculateBounds_=function(){var b=new google.maps.LatLngBounds(this.center_,this.center_);
this.bounds_=this.markerClusterer_.getExtendedBounds(b)
};
Cluster.prototype.isMarkerInClusterBounds=function(b){return this.bounds_.contains(b.getPosition())
};
Cluster.prototype.getMap=function(){return this.map_
};
Cluster.prototype.updateIcon=function(){var k=this.map_.getZoom();
var j=this.markerClusterer_.getMaxZoom();
if(j&&k>j){for(var n=0,h;
h=this.markers_[n];
n++){h.setMap(this.map_)
}return
}if(this.markers_.length<this.minClusterSize_){this.clusterIcon_.hide();
return
}var m=this.markerClusterer_.getStyles().length;
var g=this.markerClusterer_.getCalculator()(this.markers_,m);
this.clusterIcon_.setCenter(this.center_);
this.clusterIcon_.setSums(g);
this.clusterIcon_.show()
};
function ClusterIcon(e,f,d){e.getMarkerClusterer().extend(ClusterIcon,google.maps.OverlayView);
this.styles_=f;
this.padding_=d||0;
this.cluster_=e;
this.center_=null;
this.map_=e.getMap();
this.div_=null;
this.sums_=null;
this.visible_=false;
this.setMap(this.map_)
}ClusterIcon.prototype.triggerClusterClick=function(){var b=this.cluster_.getMarkerClusterer();
google.maps.event.trigger(b,"clusterclick",this.cluster_);
if(b.isZoomOnClick()){this.map_.fitBounds(this.cluster_.getBounds())
}};
ClusterIcon.prototype.onAdd=function(){this.div_=document.createElement("DIV");
if(this.visible_){var f=this.getPosFromLatLng_(this.center_);
this.div_.style.cssText=this.createCss(f);
this.div_.innerHTML=this.sums_.text
}var e=this.getPanes();
e.overlayMouseTarget.appendChild(this.div_);
var d=this;
google.maps.event.addDomListener(this.div_,"click",function(){d.triggerClusterClick()
})
};
ClusterIcon.prototype.getPosFromLatLng_=function(c){var d=this.getProjection().fromLatLngToDivPixel(c);
d.x-=parseInt(this.width_/2,10);
d.y-=parseInt(this.height_/2,10);
return d
};
ClusterIcon.prototype.draw=function(){if(this.visible_){var b=this.getPosFromLatLng_(this.center_);
this.div_.style.top=b.y+"px";
this.div_.style.left=b.x+"px"
}};
ClusterIcon.prototype.hide=function(){if(this.div_){this.div_.style.display="none"
}this.visible_=false
};
ClusterIcon.prototype.show=function(){if(this.div_){var b=this.getPosFromLatLng_(this.center_);
this.div_.style.cssText=this.createCss(b);
this.div_.style.display=""
}this.visible_=true
};
ClusterIcon.prototype.remove=function(){this.setMap(null)
};
ClusterIcon.prototype.onRemove=function(){if(this.div_&&this.div_.parentNode){this.hide();
this.div_.parentNode.removeChild(this.div_);
this.div_=null
}};
ClusterIcon.prototype.setSums=function(b){this.sums_=b;
this.text_=b.text;
this.index_=b.index;
if(this.div_){this.div_.innerHTML=b.text
}this.useStyle()
};
ClusterIcon.prototype.useStyle=function(){var d=Math.max(0,this.sums_.index-1);
d=Math.min(this.styles_.length-1,d);
var c=this.styles_[d];
this.url_=c.url;
this.height_=c.height;
this.width_=c.width;
this.textColor_=c.textColor;
this.anchor_=c.anchor;
this.textSize_=c.textSize;
this.backgroundPosition_=c.backgroundPosition
};
ClusterIcon.prototype.setCenter=function(b){this.center_=b
};
ClusterIcon.prototype.createCss=function(h){var j=[];
j.push("background-image:url("+this.url_+");");
var f=this.backgroundPosition_?this.backgroundPosition_:"0 0";
j.push("background-position:"+f+";");
if(typeof this.anchor_==="object"){if(typeof this.anchor_[0]==="number"&&this.anchor_[0]>0&&this.anchor_[0]<this.height_){j.push("height:"+(this.height_-this.anchor_[0])+"px; padding-top:"+this.anchor_[0]+"px;")
}else{j.push("height:"+this.height_+"px; line-height:"+this.height_+"px;")
}if(typeof this.anchor_[1]==="number"&&this.anchor_[1]>0&&this.anchor_[1]<this.width_){j.push("width:"+(this.width_-this.anchor_[1])+"px; padding-left:"+this.anchor_[1]+"px;")
}else{j.push("width:"+this.width_+"px; text-align:center;")
}}else{j.push("height:"+this.height_+"px; line-height:"+this.height_+"px; width:"+this.width_+"px; text-align:center;")
}var g=this.textColor_?this.textColor_:"black";
var k=this.textSize_?this.textSize_:11;
j.push("cursor:pointer; top:"+h.y+"px; left:"+h.x+"px; color:"+g+"; position:absolute; font-size:"+k+"px; font-family:Arial,sans-serif; font-weight:bold");
return j.join("")
};
window.MarkerClusterer=MarkerClusterer;
MarkerClusterer.prototype.addMarker=MarkerClusterer.prototype.addMarker;
MarkerClusterer.prototype.addMarkers=MarkerClusterer.prototype.addMarkers;
MarkerClusterer.prototype.clearMarkers=MarkerClusterer.prototype.clearMarkers;
MarkerClusterer.prototype.fitMapToMarkers=MarkerClusterer.prototype.fitMapToMarkers;
MarkerClusterer.prototype.getCalculator=MarkerClusterer.prototype.getCalculator;
MarkerClusterer.prototype.getGridSize=MarkerClusterer.prototype.getGridSize;
MarkerClusterer.prototype.getExtendedBounds=MarkerClusterer.prototype.getExtendedBounds;
MarkerClusterer.prototype.getMap=MarkerClusterer.prototype.getMap;
MarkerClusterer.prototype.getMarkers=MarkerClusterer.prototype.getMarkers;
MarkerClusterer.prototype.getMaxZoom=MarkerClusterer.prototype.getMaxZoom;
MarkerClusterer.prototype.getStyles=MarkerClusterer.prototype.getStyles;
MarkerClusterer.prototype.getTotalClusters=MarkerClusterer.prototype.getTotalClusters;
MarkerClusterer.prototype.getTotalMarkers=MarkerClusterer.prototype.getTotalMarkers;
MarkerClusterer.prototype.redraw=MarkerClusterer.prototype.redraw;
MarkerClusterer.prototype.removeMarker=MarkerClusterer.prototype.removeMarker;
MarkerClusterer.prototype.removeMarkers=MarkerClusterer.prototype.removeMarkers;
MarkerClusterer.prototype.resetViewport=MarkerClusterer.prototype.resetViewport;
MarkerClusterer.prototype.repaint=MarkerClusterer.prototype.repaint;
MarkerClusterer.prototype.setCalculator=MarkerClusterer.prototype.setCalculator;
MarkerClusterer.prototype.setGridSize=MarkerClusterer.prototype.setGridSize;
MarkerClusterer.prototype.setMaxZoom=MarkerClusterer.prototype.setMaxZoom;
MarkerClusterer.prototype.onAdd=MarkerClusterer.prototype.onAdd;
MarkerClusterer.prototype.draw=MarkerClusterer.prototype.draw;
Cluster.prototype.getCenter=Cluster.prototype.getCenter;
Cluster.prototype.getSize=Cluster.prototype.getSize;
Cluster.prototype.getMarkers=Cluster.prototype.getMarkers;
ClusterIcon.prototype.onAdd=ClusterIcon.prototype.onAdd;
ClusterIcon.prototype.draw=ClusterIcon.prototype.draw;
ClusterIcon.prototype.onRemove=ClusterIcon.prototype.onRemove;
Object.keys=Object.keys||function(f){var e=[];
for(var d in f){if(f.hasOwnProperty(d)){e.push(d)
}}return e
};
(function(b){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],b)
}else{b(jQuery)
}}(function(P){var aa="left",ab="right",R="up",K="down",F="in",I="out",ad="none",T="auto",ae="swipe",S="pinch",Z="tap",ag="doubletap",G="longtap",J="hold",U="horizontal",Q="vertical",ah="all",W=10,O="start",af="move",M="end",Y="cancel",H="ontouchstart" in window,N=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,E=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,X="TouchSwipe";
var ac={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe",preventDefaultEvents:true};
P.fn.swipe=function(b){var c=P(this),a=c.data(X);
if(a&&typeof b==="string"){if(a[b]){return a[b].apply(this,Array.prototype.slice.call(arguments,1))
}else{P.error("Method "+b+" does not exist on jQuery.swipe")
}}else{if(!a&&(typeof b==="object"||!b)){return L.apply(this,arguments)
}}return c
};
P.fn.swipe.defaults=ac;
P.fn.swipe.phases={PHASE_START:O,PHASE_MOVE:af,PHASE_END:M,PHASE_CANCEL:Y};
P.fn.swipe.directions={LEFT:aa,RIGHT:ab,UP:R,DOWN:K,IN:F,OUT:I};
P.fn.swipe.pageScroll={NONE:ad,HORIZONTAL:U,VERTICAL:Q,AUTO:T};
P.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:ah};
function L(a){if(a&&(a.allowPageScroll===undefined&&(a.swipe!==undefined||a.swipeStatus!==undefined))){a.allowPageScroll=ad
}if(a.click!==undefined&&a.tap===undefined){a.tap=a.click
}if(!a){a={}
}a=P.extend({},P.fn.swipe.defaults,a);
return this.each(function(){var c=P(this);
var b=c.data(X);
if(!b){b=new V(this,a);
c.data(X,b)
}})
}function V(bn,bt){var t=(H||E||!bt.fallbackToMouseEvents),r=t?(E?(N?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",v=t?(E?(N?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",c=t?(E?(N?"MSPointerUp":"pointerup"):"touchend"):"mouseup",f=t?null:"mouseleave",bP=(E?(N?"MSPointerCancel":"pointercancel"):"touchcancel");
var bH=0,bi=null,bM=0,bs=0,av=0,w=1,bx=0,z=0,o=null;
var be=P(bn);
var bc="start";
var bj=0;
var bg=null;
var d=0,bq=0,a=0,bK=0,n=0;
var ay=null,bI=null;
try{be.bind(r,bm);
be.bind(bP,bT)
}catch(bD){P.error("events not supported "+r+","+bP+" on jQuery.swipe")
}this.enable=function(){be.bind(r,bm);
be.bind(bP,bT);
return be
};
this.disable=function(){x();
return be
};
this.destroy=function(){x();
be.data(X,null);
be=null
};
this.option=function(aj,ai){if(bt[aj]!==undefined){if(ai===undefined){return bt[aj]
}else{bt[aj]=ai
}}else{P.error("Option "+aj+" does not exist on jQuery.swipe.options")
}return null
};
function bm(ai){if(bR()){return
}if(P(ai.target).closest(bt.excludedElements,be).length>0){return
}var al=ai.originalEvent?ai.originalEvent:ai;
var aj,ak=H?al.touches[0]:al;
bc=O;
if(H){bj=al.touches.length
}else{ai.preventDefault()
}bH=0;
bi=null;
z=null;
bM=0;
bs=0;
av=0;
w=1;
bx=0;
bg=bE();
o=bN();
g();
if(!H||(bj===bt.fingers||bt.fingers===ah)||ax()){bF(0,ak);
d=bv();
if(bj==2){bF(1,al.touches[1]);
bs=av=bu(bg[0].start,bg[1].start)
}if(bt.swipeStatus||bt.pinchStatus){aj=m(al,bc)
}}else{aj=false
}if(aj===false){bc=Y;
m(al,bc);
return aj
}else{if(bt.hold){bI=setTimeout(P.proxy(function(){be.trigger("hold",[al.target]);
if(bt.hold){aj=bt.hold.call(be,al,al.target)
}},this),bt.longTapThreshold)
}bA(true)
}return null
}function bo(aj){var ao=aj.originalEvent?aj.originalEvent:aj;
if(bc===M||bc===Y||C()){return
}var ak,al=H?ao.touches[0]:ao;
var ai=D(al);
bq=bv();
if(H){bj=ao.touches.length
}if(bt.hold){clearTimeout(bI)
}bc=af;
if(bj==2){if(bs==0){bF(1,ao.touches[1]);
bs=av=bu(bg[0].start,bg[1].start)
}else{D(ao.touches[1]);
av=bu(bg[0].end,bg[1].end);
z=bw(bg[0].end,bg[1].end)
}w=bW(bs,av);
bx=Math.abs(bs-av)
}if((bj===bt.fingers||bt.fingers===ah)||!H||ax()){bi=by(ai.start,ai.end);
bC(aj,bi);
bH=bd(ai.start,ai.end);
bM=e();
B(bi,bH);
if(bt.swipeStatus||bt.pinchStatus){ak=m(ao,bc)
}if(!bt.triggerOnTouchEnd||bt.triggerOnTouchLeave){var am=true;
if(bt.triggerOnTouchLeave){var an=aw(this);
am=br(ai.end,an)
}if(!bt.triggerOnTouchEnd&&am){bc=bQ(af)
}else{if(bt.triggerOnTouchLeave&&!am){bc=bQ(M)
}}if(bc==Y||bc==M){m(ao,bc)
}}}else{bc=Y;
m(ao,bc)
}if(ak===false){bc=Y;
m(ao,bc)
}}function p(ai){var aj=ai.originalEvent;
if(H){if(aj.touches.length>0){bp();
return true
}}if(C()){bj=bK
}bq=bv();
bM=e();
if(k()||!bB()){bc=Y;
m(aj,bc)
}else{if(bt.triggerOnTouchEnd||(bt.triggerOnTouchEnd==false&&bc===af)){ai.preventDefault();
bc=M;
m(aj,bc)
}else{if(!bt.triggerOnTouchEnd&&bX()){bc=M;
b(aj,bc,Z)
}else{if(bc===af){bc=Y;
m(aj,bc)
}}}}bA(false);
return null
}function bT(){bj=0;
bq=0;
d=0;
bs=0;
av=0;
w=1;
g();
bA(false)
}function q(ai){var aj=ai.originalEvent;
if(bt.triggerOnTouchLeave){bc=bQ(M);
m(aj,bc)
}}function x(){be.unbind(r,bm);
be.unbind(bP,bT);
be.unbind(v,bo);
be.unbind(c,p);
if(f){be.unbind(f,q)
}bA(false)
}function bQ(am){var ai=am;
var aj=bS();
var ak=bB();
var al=k();
if(!aj||al){ai=Y
}else{if(ak&&am==af&&(!bt.triggerOnTouchEnd||bt.triggerOnTouchLeave)){ai=M
}else{if(!ak&&am==M&&bt.triggerOnTouchLeave){ai=Y
}}}return ai
}function m(ak,aj){var ai=undefined;
if((s()||bl())||(j()||ax())){if(s()||bl()){ai=b(ak,aj,ae)
}if((j()||ax())&&ai!==false){ai=b(ak,aj,S)
}}else{if(au()&&ai!==false){ai=b(ak,aj,ag)
}else{if(bz()&&ai!==false){ai=b(ak,aj,G)
}else{if(bG()&&ai!==false){ai=b(ak,aj,Z)
}}}}if(aj===Y){bT(ak)
}if(aj===M){if(H){if(ak.touches.length==0){bT(ak)
}}else{bT(ak)
}}return ai
}function b(al,ak,ai){var aj=undefined;
if(ai==ae){be.trigger("swipeStatus",[ak,bi||null,bH||0,bM||0,bj,bg]);
if(bt.swipeStatus){aj=bt.swipeStatus.call(be,al,ak,bi||null,bH||0,bM||0,bj,bg);
if(aj===false){return false
}}if(ak==M&&az()){be.trigger("swipe",[bi,bH,bM,bj,bg]);
if(bt.swipe){aj=bt.swipe.call(be,al,bi,bH,bM,bj,bg);
if(aj===false){return false
}}switch(bi){case aa:be.trigger("swipeLeft",[bi,bH,bM,bj,bg]);
if(bt.swipeLeft){aj=bt.swipeLeft.call(be,al,bi,bH,bM,bj,bg)
}break;
case ab:be.trigger("swipeRight",[bi,bH,bM,bj,bg]);
if(bt.swipeRight){aj=bt.swipeRight.call(be,al,bi,bH,bM,bj,bg)
}break;
case R:be.trigger("swipeUp",[bi,bH,bM,bj,bg]);
if(bt.swipeUp){aj=bt.swipeUp.call(be,al,bi,bH,bM,bj,bg)
}break;
case K:be.trigger("swipeDown",[bi,bH,bM,bj,bg]);
if(bt.swipeDown){aj=bt.swipeDown.call(be,al,bi,bH,bM,bj,bg)
}break
}}}if(ai==S){be.trigger("pinchStatus",[ak,z||null,bx||0,bM||0,bj,w,bg]);
if(bt.pinchStatus){aj=bt.pinchStatus.call(be,al,ak,z||null,bx||0,bM||0,bj,w,bg);
if(aj===false){return false
}}if(ak==M&&bU()){switch(z){case F:be.trigger("pinchIn",[z||null,bx||0,bM||0,bj,w,bg]);
if(bt.pinchIn){aj=bt.pinchIn.call(be,al,z||null,bx||0,bM||0,bj,w,bg)
}break;
case I:be.trigger("pinchOut",[z||null,bx||0,bM||0,bj,w,bg]);
if(bt.pinchOut){aj=bt.pinchOut.call(be,al,z||null,bx||0,bM||0,bj,w,bg)
}break
}}}if(ai==Z){if(ak===Y||ak===M){clearTimeout(ay);
clearTimeout(bI);
if(bf()&&!u()){n=bv();
ay=setTimeout(P.proxy(function(){n=null;
be.trigger("tap",[al.target]);
if(bt.tap){aj=bt.tap.call(be,al,al.target)
}},this),bt.doubleTapThreshold)
}else{n=null;
be.trigger("tap",[al.target]);
if(bt.tap){aj=bt.tap.call(be,al,al.target)
}}}}else{if(ai==ag){if(ak===Y||ak===M){clearTimeout(ay);
n=null;
be.trigger("doubletap",[al.target]);
if(bt.doubleTap){aj=bt.doubleTap.call(be,al,al.target)
}}}else{if(ai==G){if(ak===Y||ak===M){clearTimeout(ay);
n=null;
be.trigger("longtap",[al.target]);
if(bt.longTap){aj=bt.longTap.call(be,al,al.target)
}}}}}return aj
}function bB(){var ai=true;
if(bt.threshold!==null){ai=bH>=bt.threshold
}return ai
}function k(){var ai=false;
if(bt.cancelThreshold!==null&&bi!==null){ai=(bb(bi)-bH)>=bt.cancelThreshold
}return ai
}function bJ(){if(bt.pinchThreshold!==null){return bx>=bt.pinchThreshold
}return true
}function bS(){var ai;
if(bt.maxTimeThreshold){if(bM>=bt.maxTimeThreshold){ai=false
}else{ai=true
}}else{ai=true
}return ai
}function bC(aj,ai){if(bt.preventDefaultEvents===false){return
}if(bt.allowPageScroll===ad){aj.preventDefault()
}else{var ak=bt.allowPageScroll===T;
switch(ai){case aa:if((bt.swipeLeft&&ak)||(!ak&&bt.allowPageScroll!=U)){aj.preventDefault()
}break;
case ab:if((bt.swipeRight&&ak)||(!ak&&bt.allowPageScroll!=U)){aj.preventDefault()
}break;
case R:if((bt.swipeUp&&ak)||(!ak&&bt.allowPageScroll!=Q)){aj.preventDefault()
}break;
case K:if((bt.swipeDown&&ak)||(!ak&&bt.allowPageScroll!=Q)){aj.preventDefault()
}break
}}}function bU(){var ai=bk();
var aj=bh();
var ak=bJ();
return ai&&aj&&ak
}function ax(){return !!(bt.pinchStatus||bt.pinchIn||bt.pinchOut)
}function j(){return !!(bU()&&ax())
}function az(){var aj=bS();
var an=bB();
var ak=bk();
var am=bh();
var al=k();
var ai=!al&&am&&ak&&an&&aj;
return ai
}function bl(){return !!(bt.swipe||bt.swipeStatus||bt.swipeLeft||bt.swipeRight||bt.swipeUp||bt.swipeDown)
}function s(){return !!(az()&&bl())
}function bk(){return((bj===bt.fingers||bt.fingers===ah)||!H)
}function bh(){return bg[0].end.x!==0
}function bX(){return !!(bt.tap)
}function bf(){return !!(bt.doubleTap)
}function a0(){return !!(bt.longTap)
}function h(){if(n==null){return false
}var ai=bv();
return(bf()&&((ai-n)<=bt.doubleTapThreshold))
}function u(){return h()
}function y(){return((bj===1||!H)&&(isNaN(bH)||bH<bt.threshold))
}function ba(){return((bM>bt.longTapThreshold)&&(bH<W))
}function bG(){return !!(y()&&bX())
}function au(){return !!(h()&&bf())
}function bz(){return !!(ba()&&a0())
}function bp(){a=bv();
bK=event.touches.length+1
}function g(){a=0;
bK=0
}function C(){var ai=false;
if(a){var aj=bv()-a;
if(aj<=bt.fingerReleaseThreshold){ai=true
}}return ai
}function bR(){return !!(be.data(X+"_intouch")===true)
}function bA(ai){if(ai===true){be.bind(v,bo);
be.bind(c,p);
if(f){be.bind(f,q)
}}else{be.unbind(v,bo,false);
be.unbind(c,p,false);
if(f){be.unbind(f,q,false)
}}be.data(X+"_intouch",ai===true)
}function bF(ai,aj){var ak=aj.identifier!==undefined?aj.identifier:0;
bg[ai].identifier=ak;
bg[ai].start.x=bg[ai].end.x=aj.pageX||aj.clientX;
bg[ai].start.y=bg[ai].end.y=aj.pageY||aj.clientY;
return bg[ai]
}function D(aj){var ak=aj.identifier!==undefined?aj.identifier:0;
var ai=bL(ak);
ai.end.x=aj.pageX||aj.clientX;
ai.end.y=aj.pageY||aj.clientY;
return ai
}function bL(aj){for(var ai=0;
ai<bg.length;
ai++){if(bg[ai].identifier==aj){return bg[ai]
}}}function bE(){var ai=[];
for(var aj=0;
aj<=5;
aj++){ai.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})
}return ai
}function B(ai,aj){aj=Math.max(aj,bb(ai));
o[ai].distance=aj
}function bb(ai){if(o[ai]){return o[ai].distance
}return undefined
}function bN(){var ai={};
ai[aa]=A(aa);
ai[ab]=A(ab);
ai[R]=A(R);
ai[K]=A(K);
return ai
}function A(ai){return{direction:ai,distance:0}
}function e(){return bq-d
}function bu(al,ai){var aj=Math.abs(al.x-ai.x);
var ak=Math.abs(al.y-ai.y);
return Math.round(Math.sqrt(aj*aj+ak*ak))
}function bW(aj,ai){var ak=(ai/aj)*1;
return ak.toFixed(2)
}function bw(){if(w<1){return I
}else{return F
}}function bd(aj,ai){return Math.round(Math.sqrt(Math.pow(ai.x-aj.x,2)+Math.pow(ai.y-aj.y,2)))
}function bO(aj,al){var am=aj.x-al.x;
var an=al.y-aj.y;
var ak=Math.atan2(an,am);
var ai=Math.round(ak*180/Math.PI);
if(ai<0){ai=360-Math.abs(ai)
}return ai
}function by(ai,aj){var ak=bO(ai,aj);
if((ak<=45)&&(ak>=0)){return aa
}else{if((ak<=360)&&(ak>=315)){return aa
}else{if((ak>=135)&&(ak<=225)){return ab
}else{if((ak>45)&&(ak<135)){return K
}else{return R
}}}}}function bv(){var ai=new Date();
return ai.getTime()
}function aw(aj){aj=P(aj);
var ak=aj.offset();
var ai={left:ak.left,right:ak.left+aj.outerWidth(),top:ak.top,bottom:ak.top+aj.outerHeight()};
return ai
}function br(ai,aj){return(ai.x>aj.left&&ai.x<aj.right&&ai.y>aj.top&&ai.y<aj.bottom)
}}}));
/*!
 * This file contains the code for the Initialzing Accreditations Carousel.
 *
 * @project   Manipal GE
 * @date      2013-04-08
 * @author    Syed Tanzeem, SapientNitro <stanzeem@sapient.com>
 * @licensor  CLIENTNAME
 * @site      Manipal
 *
 */
(function(d,e,f){e.log=function(a){if(MODULE.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
d.accreditationsCarousel=(function(){function a(){var b=this;
this.init=function(){if(d.accreditationsConfig!=f){e(function(){console.log("acc nit");
b.accreditationsCarousel();
b.accreditationsCarouselMobile()
})
}return this
};
if(d.accreditationsConfig!=f){e(document).ready(function(){if(e("body").hasClass("manipal-mobile")){b.mobileFlexSliderDom()
}else{b.flexSliderDom()
}})
}this.accreditationsCarousel=function(){e(".accreditation-carousel .flexslider").flexslider({controlsContainer:"flex-accreditation-container",animation:"slide",slideshowSpeed:"6000",directionNav:false,slideshow:false,itemWidth:255,itemMargin:80,includeItemMargin:true,minItems:3})
};
this.accreditationsCarouselMobile=function(){e(".accreditation-container-mobile .flexslider").flexslider({controlsContainer:"flex-accreditation-container-mobile",animation:"slide",slideshowSpeed:"6000",directionNav:false,slideshow:false,itemWidth:0,itemMargin:0,includeItemMargin:true,minItems:3})
};
this.flexSliderDom=function(){e.each(d.accreditationsConfig,function(h,c){e(".accreditation-carousel .flexslider ul.slides").append("<li><div class='row slider-container'><div class='slider-container-cols'><div class='row accreditation-head-text'><div class='square'></div><div class='institute_name'>"+c.institute_name+"</div></div><div class='row institute-info'><div class='accreditation-image-container'><img data-src='"+c.source_logo+"' class='lazyload accreditaion-image-styles'/></div></div></div><ul class='row source-item'><li class='white-text text-desc'>"+c.text_line+"</li></ul></li>")
})
};
this.mobileFlexSliderDom=function(){var c=0;
e.each(d.accreditationsConfig,function(k,j){if(c<4){e(".accreditation-container-mobile .flexslider .slides").append("<li><div class='accreditation-cotainer-mobile'><div class='accreditation-left-container'><div class='accreditation-header-mobile'><div class='square'></div><div class='institute_name'>"+j.institute_name+"</div><div class='accreditation-image-container'><img data-src='"+j.source_logo+"' class='lazyload accreditaion-image-styles'></div></div><div class='accreditation-right-container'><div class='accreditation-right-source-bg'><div class='accreditation-right-content'>"+j.text_line+"</div></div></div></div></li>")
}c++
})
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(b,c){var a=c(b,b.document);
b.lazySizes=a;
if(typeof module=="object"&&module.exports){module.exports=a
}}(window,function l(B,k){if(!k.getElementsByClassName){return
}var s;
var a=k.documentElement;
var o=B.Date;
var D=B.HTMLPictureElement;
var t="addEventListener";
var j="getAttribute";
var c=B[t];
var v=B.setTimeout;
var x=B.requestAnimationFrame||v;
var n=B.requestIdleCallback;
var h=/^picture$/i;
var f=["load","error","lazyincluded","_lazyloaded"];
var y={};
var F=Array.prototype.forEach;
var u=function(H,G){if(!y[G]){y[G]=new RegExp("(\\s|^)"+G+"(\\s|$)")
}return y[G].test(H[j]("class")||"")&&y[G]
};
var ab=function(H,G){if(!u(H,G)){H.setAttribute("class",(H[j]("class")||"").trim()+" "+G)
}};
var b=function(G,H){var I;
if((I=u(G,H))){G.setAttribute("class",(G[j]("class")||"").replace(I," "))
}};
var p=function(J,G,I){var H=I?t:"removeEventListener";
if(I){p(J,G)
}f.forEach(function(K){J[H](K,G)
})
};
var g=function(J,L,G,K,I){var H=k.createEvent("CustomEvent");
H.initCustomEvent(L,!K,!I,G||{});
J.dispatchEvent(H);
return H
};
var d=function(I,H){var G;
if(!D&&(G=(B.picturefill||s.pf))){G({reevaluate:true,elements:[I]})
}else{if(H&&H.src){I.src=H.src
}}};
var z=function(H,G){return(getComputedStyle(H,null)||{})[G]
};
var e=function(G,I,H){H=H||G.offsetWidth;
while(H<s.minSize&&I&&!G._lazysizesWidth){H=I.offsetWidth;
I=I.parentNode
}return H
};
var q=(function(){var K,J;
var G=[];
var I=function(){var L;
K=true;
J=false;
while(G.length){L=G.shift();
L[0].apply(L[1],L[2])
}K=false
};
var H=function(L){if(K){L.apply(this,arguments)
}else{G.push([L,this,arguments]);
if(!J){J=true;
(k.hidden?v:x)(I)
}}};
H._lsFlush=I;
return H
})();
var m=function(G,H){return H?function(){q(G)
}:function(){var J=this;
var I=arguments;
q(function(){G.apply(J,I)
})
}
};
var A=function(K){var H;
var N=0;
var L=125;
var J=666;
var G=J;
var M=function(){H=false;
N=o.now();
K()
};
var I=n?function(){n(M,{timeout:G});
if(G!==J){G=J
}}:m(function(){v(M)
},true);
return function(O){var P;
if((O=O===true)){G=44
}if(H){return
}H=true;
P=L-(o.now()-N);
if(P<0){P=0
}if(O||(P<9&&n)){I()
}else{v(I,P)
}}
};
var w=function(L){var H,G;
var J=99;
var I=function(){H=null;
L()
};
var K=function(){var M=o.now()-G;
if(M<J){v(K,J-M)
}else{(n||I)(I)
}};
return function(){G=o.now();
if(!H){H=v(K,J)
}}
};
var E=(function(){var Y,Q,ap,ac,K,af;
var R,U,ao,W,aa,O;
var M,P,ah;
var S=/^img$/i;
var G=/^iframe$/i;
var J=("onscroll" in B)&&!(/glebot/.test(navigator.userAgent));
var an=0;
var Z=0;
var ae=0;
var H=-1;
var I=function(al){ae--;
if(al&&al.target){p(al.target,I)
}if(!al||ae<0||!al.target){ae=0
}};
var aq=function(am,al){var at;
var aw=am;
var ar=z(k.body,"visibility")=="hidden"||z(am,"visibility")!="hidden";
ao-=al;
O+=al;
W-=al;
aa+=al;
while(ar&&(aw=aw.offsetParent)&&aw!=k.body&&aw!=a){ar=((z(aw,"opacity")||1)>0);
if(ar&&z(aw,"overflow")!="visible"){at=aw.getBoundingClientRect();
ar=aa>at.left&&W<at.right&&O>at.top-1&&ao<at.bottom+1
}}return ar
};
var aj=function(){var au,ax,ar,am,aE,al,aw,at,av;
if((K=s.loadMode)&&ae<8&&(au=Y.length)){ax=0;
H++;
if(P==null){if(!("expand" in s)){s.expand=a.clientHeight>500&&a.clientWidth>500?500:370
}M=s.expand;
P=M*s.expFactor
}if(Z<P&&ae<1&&H>2&&K>2&&!k.hidden){Z=P;
H=0
}else{if(K>1&&H>1&&ae<6){Z=M
}else{Z=an
}}for(;
ax<au;
ax++){if(!Y[ax]||Y[ax]._lazyRace){continue
}if(!J){ai(Y[ax]);
continue
}if(!(at=Y[ax][j]("data-expand"))||!(al=at*1)){al=Z
}if(av!==al){R=innerWidth+(al*ah);
U=innerHeight+al;
aw=al*-1;
av=al
}ar=Y[ax].getBoundingClientRect();
if((O=ar.bottom)>=aw&&(ao=ar.top)<=U&&(aa=ar.right)>=aw*ah&&(W=ar.left)<=R&&(O||aa||W||ao)&&((ap&&ae<3&&!at&&(K<3||H<4))||aq(Y[ax],al))){ai(Y[ax]);
aE=true;
if(ae>9){break
}}else{if(!aE&&ap&&!am&&ae<4&&H<4&&K>2&&(Q[0]||s.preloadAfterLoad)&&(Q[0]||(!at&&((O||aa||W||ao)||Y[ax][j](s.sizesAttr)!="auto")))){am=Q[0]||Y[ax]
}}}if(am&&!aE){ai(am)
}}};
var ad=A(aj);
var N=function(al){ab(al.target,s.loadedClass);
b(al.target,s.loadingClass);
p(al.target,L)
};
var T=m(N);
var L=function(al){T({target:al.target})
};
var ak=function(ar,am){try{ar.contentWindow.location.replace(am)
}catch(al){ar.src=am
}};
var X=function(al){var au,ar;
var am=al[j](s.srcsetAttr);
if((au=s.customMedia[al[j]("data-media")||al[j]("media")])){al.setAttribute("media",au)
}if(am){al.setAttribute("srcset",am)
}if(au){ar=al.parentNode;
ar.insertBefore(al.cloneNode(),al);
ar.removeChild(al)
}};
var V=m(function(ax,ay,aI,ar,aw){var at,az,al,am,au,av;
if(!(au=g(ax,"lazybeforeunveil",ay)).defaultPrevented){if(ar){if(aI){ab(ax,s.autosizesClass)
}else{ax.setAttribute("sizes",ar)
}}az=ax[j](s.srcsetAttr);
at=ax[j](s.srcAttr);
if(aw){al=ax.parentNode;
am=al&&h.test(al.nodeName||"")
}av=ay.firesLoad||(("src" in ax)&&(az||at||am));
au={target:ax};
if(av){p(ax,I,true);
clearTimeout(ac);
ac=v(I,2500);
ab(ax,s.loadingClass);
p(ax,L,true)
}if(am){F.call(al.getElementsByTagName("source"),X)
}if(az){ax.setAttribute("srcset",az)
}else{if(at&&!am){if(G.test(ax.nodeName)){ak(ax,at)
}else{ax.src=at
}}}if(az||am){d(ax,{src:at})
}}q(function(){if(ax._lazyRace){delete ax._lazyRace
}b(ax,s.lazyClass);
if(!av||ax.complete){if(av){I(au)
}else{ae--
}N(au)
}})
});
var ai=function(am){var aw;
var ar=S.test(am.nodeName);
var al=ar&&(am[j](s.sizesAttr)||am[j]("sizes"));
var at=al=="auto";
if((at||!ap)&&ar&&(am.src||am.srcset)&&!am.complete&&!u(am,s.errorClass)){return
}aw=g(am,"lazyunveilread").detail;
if(at){r.updateElem(am,true,am.offsetWidth)
}am._lazyRace=true;
ae++;
V(am,aw,at,al,ar)
};
var ag=function(){if(ap){return
}if(o.now()-af<999){v(ag,999);
return
}var al=w(function(){s.loadMode=3;
ad()
});
ap=true;
s.loadMode=3;
ad();
c("scroll",function(){if(s.loadMode==3){s.loadMode=2
}al()
},true)
};
return{_:function(){af=o.now();
Y=k.getElementsByClassName(s.lazyClass);
Q=k.getElementsByClassName(s.lazyClass+" "+s.preloadClass);
ah=s.hFac;
c("scroll",ad,true);
c("resize",ad,true);
if(B.MutationObserver){new MutationObserver(ad).observe(a,{childList:true,subtree:true,attributes:true})
}else{a[t]("DOMNodeInserted",ad,true);
a[t]("DOMAttrModified",ad,true);
setInterval(ad,999)
}c("hashchange",ad,true);
["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(al){k[t](al,ad,true)
});
if((/d$|^c/.test(k.readyState))){ag()
}else{c("load",ag);
k[t]("DOMContentLoaded",ad);
v(ag,20000)
}if(Y.length){aj();
q._lsFlush()
}else{ad()
}},checkElems:ad,unveil:ai}
})();
var r=(function(){var H;
var G=m(function(P,N,O,M){var R,L,Q;
P._lazysizesWidth=M;
M+="px";
P.setAttribute("sizes",M);
if(h.test(N.nodeName||"")){R=N.getElementsByTagName("source");
for(L=0,Q=R.length;
L<Q;
L++){R[L].setAttribute("sizes",M)
}}if(!O.detail.dataAttr){d(P,O.detail)
}});
var I=function(M,N,P){var L;
var O=M.parentNode;
if(O){P=e(M,O,P);
L=g(M,"lazybeforesizes",{width:P,dataAttr:!!N});
if(!L.defaultPrevented){P=L.detail.width;
if(P&&P!==M._lazysizesWidth){G(M,O,L,P)
}}}};
var J=function(){var M;
var L=H.length;
if(L){M=0;
for(;
M<L;
M++){I(H[M])
}}};
var K=w(J);
return{_:function(){H=k.getElementsByClassName(s.autosizesClass);
c("resize",K)
},checkElems:K,updateElem:I}
})();
var C=function(){if(!C.i){C.i=true;
r._();
E._()
}};
(function(){var H;
var G={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:0.8,loadMode:2};
s=B.lazySizesConfig||B.lazysizesConfig||{};
for(H in G){if(!(H in s)){s[H]=G[H]
}}B.lazySizesConfig=s;
v(function(){if(s.init){C()
}})
})();
return{cfg:s,autoSizer:r,loader:E,init:C,uP:d,aC:ab,rC:b,hC:u,fire:g,gW:e,rAF:q}
}));
/*! lazysizes - v3.0.0-rc1 */
;
!function(n,m){function k(a,c){if(!g[a]){var b=m.createElement(c?"link":"script"),d=m.getElementsByTagName("script")[0];
c?(b.rel="stylesheet",b.href=a):b.src=a,g[a]=!0,g[b.src||b.href]=!0,d.parentNode.insertBefore(b,d)
}}var j,h,g={};
m.addEventListener&&(h=/\(|\)|'/,j=function(a,c){var b=m.createElement("img");
b.onload=function(){b.onload=null,b.onerror=null,b=null,c()
},b.onerror=b.onload,b.src=a,b&&b.complete&&b.onload&&b.onload()
},addEventListener("lazybeforeunveil",function(a){var d,e,c,b;
a.defaultPrevented||("none"==a.target.preload&&(a.target.preload="auto"),d=a.target.getAttribute("data-link"),d&&k(d,!0),d=a.target.getAttribute("data-script"),d&&k(d),d=a.target.getAttribute("data-require"),d&&(lazySizes.cfg.requireJs?lazySizes.cfg.requireJs([d]):k(d)),c=a.target.getAttribute("data-bg"),c&&(a.detail.firesLoad=!0,e=function(){a.target.style.backgroundImage="url("+(h.test(c)?JSON.stringify(c):c)+")",a.detail.firesLoad=!1,lazySizes.fire(a.target,"_lazyloaded",{},!0,!0)
},j(c,e)),b=a.target.getAttribute("data-poster"),b&&(a.detail.firesLoad=!0,e=function(){a.target.poster=b,a.detail.firesLoad=!1,lazySizes.fire(a.target,"_lazyloaded",{},!0,!0)
},j(b,e)))
},!1))
}(window,document);
/*! BG-lazysizes - v1.5.0-rc3 */
;
!function(){if(window.addEventListener){var g,h=/\s+/g,j=/\s*\|\s+|\s+\|\s*/g,u=/^(.+?)(?:\s+\[\s*(.+?)\s*\])?$/,a={contain:1,cover:1},b=window.requestAnimationFrame||setTimeout,c=function(k){var m=k._bgsetReadCache&&"width" in k._bgsetReadCache?k._bgsetReadCache.width:lazySizes.gW(k,k.parentNode);
return(!k._lazysizesWidth||m>k._lazysizesWidth)&&(k._lazysizesWidth=m),k._lazysizesWidth
},d=function(k){var m;
return k._bgsetReadCache?m=k._bgsetReadCache.bgSize:(m=(getComputedStyle(k)||{getPropertyValue:function(){}}).getPropertyValue("background-size"),!a[m]&&a[k.style.backgroundSize]&&(m=k.style.backgroundSize)),m
},e=function(q,k,m){var n=document.createElement("picture"),o=k.getAttribute(lazySizesConfig.sizesAttr),p=k.getAttribute("data-ratio"),r=k.getAttribute("data-optimumx"),s=d(k);
!a[s]||"auto"!=o&&o||(m.setAttribute("data-parent-fit",s),o="auto"),k._lazybgset&&k._lazybgset.parentNode==k&&k.removeChild(k._lazybgset),Object.defineProperty(m,"_lazybgset",{value:k,writable:!0}),Object.defineProperty(k,"_lazybgset",{value:n,writable:!0}),q=q.replace(h," ").split(j),n.style.display="none",m.className=lazySizesConfig.lazyClass,1!=q.length||o||(o="auto"),q.forEach(function(t){var v=document.createElement("source");
o&&"auto"!=o&&v.setAttribute("sizes",o),t.match(u)&&(v.setAttribute(lazySizesConfig.srcsetAttr,RegExp.$1),RegExp.$2&&v.setAttribute("media",lazySizesConfig.customMedia[RegExp.$2]||RegExp.$2)),n.appendChild(v)
}),o&&(m.setAttribute(lazySizesConfig.sizesAttr,o),k.removeAttribute(lazySizesConfig.sizesAttr),k.removeAttribute("sizes")),r&&m.setAttribute("data-optimumx",r),p&&m.setAttribute("data-ratio",p),n.appendChild(m),k.appendChild(n)
},f=function(m){if(m.target._lazybgset){var n=m.target,o=n._lazybgset,k=n.currentSrc||n.src;
k&&(o.style.backgroundImage="url("+k+")"),n._lazybgsetLoading&&(lazySizes.fire(o,"_lazyloaded",{},!1,!0),delete n._lazybgsetLoading)
}};
window.lazySizesConfig=window.lazySizesConfig||{},g=window.lazySizesConfig.rC,window.lazySizesConfig.rC=function(n,k){var m;
return g&&(k=g.apply(this,arguments)||k),n.getAttribute("data-bgset")&&(m=d(n),(a[m]||n.getAttribute(lazySizesConfig.sizesAttr))&&(k=c(n)),n._bgsetReadCache={bgSize:m,width:k}),n._bgsetReadCache&&n._bgsetReadCache.width||k
},addEventListener("lazybeforeunveil",function(m){var n,o,k;
!m.defaultPrevented&&(n=m.target.getAttribute("data-bgset"))&&(k=m.target,o=document.createElement("img"),o.alt="",o._lazybgsetLoading=!0,m.detail.firesLoad=!0,e(n,k,o),o._bgsetReadCache=k._bgsetReadCache,setTimeout(function(){lazySizes.loader.unveil(o),b(function(){lazySizes.fire(o,"_lazyloaded",{},!0,!0),o.complete&&f({target:o}),k._bgsetReadCache&&delete k._bgsetReadCache,o._bgsetReadCache&&delete o._bgsetReadCache
})
}))
}),document.addEventListener("load",f,!0),document.documentElement.addEventListener("lazybeforesizes",function(k){!k.defaultPrevented&&k.target._lazybgset&&(k.detail.width=c(k.target._lazybgset))
})
}}();
/*! lazysizes - v1.5.0-rc3 */
;
!function(c,a){var b=a(c,c.document);
c.lazySizes=b,"object"==typeof module&&module.exports?module.exports=b:"function"==typeof define&&define.amd&&define(b)
}(window,function(a,b){if(b.getElementsByClassName){var c,d=b.documentElement,e=a.HTMLPictureElement&&"sizes" in b.createElement("img"),f="addEventListener",g="getAttribute",h=a[f],j=a.setTimeout,k=a.requestAnimationFrame||j,m=/^picture$/i,n=["load","error","lazyincluded","_lazyloaded"],o={},p=Array.prototype.forEach,q=function(B,A){return o[A]||(o[A]=new RegExp("(\\s|^)"+A+"(\\s|$)")),o[A].test(B[g]("class")||"")&&o[A]
},r=function(B,A){q(B,A)||B.setAttribute("class",(B[g]("class")||"").trim()+" "+A)
},s=function(C,A){var B;
(B=q(C,A))&&C.setAttribute("class",(C[g]("class")||"").replace(B," "))
},t=function(D,A,B){var C=B?f:"removeEventListener";
B&&t(D,A),n.forEach(function(E){D[C](E,A)
})
},u=function(B,C,D,E,F){var A=b.createEvent("CustomEvent");
return A.initCustomEvent(C,!E,!F,D||{}),B.dispatchEvent(A),A
},v=function(B,C){var A;
!e&&(A=a.picturefill||c.pf)?A({reevaluate:!0,elements:[B]}):C&&C.src&&(B.src=C.src)
},w=function(B,A){return(getComputedStyle(B,null)||{})[A]
},x=function(C,A,B){for(B=B||C.offsetWidth;
B<c.minSize&&A&&!C._lazysizesWidth;
){B=A.offsetWidth,A=A.parentNode
}return B
},y=function(D){var A,B=0,C=a.Date,E=function(){A=!1,B=C.now(),D()
},F=function(){j(E)
},G=function(){k(F)
};
return function(){if(!A){var H=125-(C.now()-B);
A=!0,6>H&&(H=6),j(G,H)
}}
},z=function(){var M,Q,S,P,al,C,U,W,Y,ag,ai,L,af,ak,A,B=/^img$/i,D=/^iframe$/i,E="onscroll" in a&&!/glebot/.test(navigator.userAgent),F=0,G=0,H=0,I=0,J=0,O=function(ac){H--,ac&&ac.target&&t(ac.target,O),(!ac||0>H||!ac.target)&&(H=0)
},R=function(ad,an){var ac,am=ad,ao="hidden"==w(b.body,"visibility")||"hidden"!=w(ad,"visibility");
for(Y-=an,L+=an,ag-=an,ai+=an;
ao&&(am=am.offsetParent)&&am!=b.body&&am!=d;
){ao=(w(am,"opacity")||1)>0,ao&&"visible"!=w(am,"overflow")&&(ac=am.getBoundingClientRect(),ao=ai>ac.left&&ag<ac.right&&L>ac.top-1&&Y<ac.bottom+1)
}return ao
},V=function(){var ad,an,ao,ar,at,au,av,ac,ap;
if((al=c.loadMode)&&8>H&&(ad=M.length)){an=0,I++,null==ak&&("expand" in c||(c.expand=d.clientHeight>600?d.clientWidth>860?500:410:359),af=c.expand,ak=af*c.expFactor),ak>G&&1>H&&I>3&&al>2?(G=ak,I=0):G=al>1&&I>2&&6>H?af:F;
for(;
ad>an;
an++){if(M[an]&&!M[an]._lazyRace){if(E){if((ac=M[an][g]("data-expand"))&&(au=1*ac)||(au=G),ap!==au&&(U=innerWidth+au*A,W=innerHeight+au,av=-1*au,ap=au),ao=M[an].getBoundingClientRect(),(L=ao.bottom)>=av&&(Y=ao.top)<=W&&(ai=ao.right)>=av*A&&(ag=ao.left)<=U&&(L||ai||ag||Y)&&(S&&3>H&&!ac&&(3>al||4>I)||R(M[an],au))){if(T(M[an]),at=!0,H>9){break
}}else{!at&&S&&!ar&&4>H&&4>I&&al>2&&(Q[0]||c.preloadAfterLoad)&&(Q[0]||!ac&&(L||ai||ag||Y||"auto"!=M[an][g](c.sizesAttr)))&&(ar=Q[0]||M[an])
}}else{T(M[an])
}}}ar&&!at&&T(ar)
}},X=y(V),ae=function(ac){r(ac.target,c.loadedClass),s(ac.target,c.loadingClass),t(ac.target,aj)
},aj=function(ac){ac={target:ac.target},k(function(){ae(ac)
})
},N=function(ad,am){try{ad.contentWindow.location.replace(am)
}catch(ac){ad.src=am
}},Z=function(ad){var am,ac,an=ad[g](c.srcsetAttr);
(am=c.customMedia[ad[g]("data-media")||ad[g]("media")])&&ad.setAttribute("media",am),an&&ad.setAttribute("srcset",an),am&&(ac=ad.parentNode,ac.insertBefore(ad.cloneNode(),ad),ac.removeChild(ad))
},ah=function(){var ad,an=[],am=function(){for(;
an.length;
){an.shift()()
}ad=!1
},ac=function(ao){an.push(ao),ad||(ad=!0,k(am))
};
return{add:ac,run:am}
}(),T=function(ao){var au,an,aw,ax,ay,av,az,ac=B.test(ao.nodeName),ap=ac&&(ao[g](c.sizesAttr)||ao[g]("sizes")),ad="auto"==ap;
(!ad&&S||!ac||!ao.src&&!ao.srcset||ao.complete||q(ao,c.errorClass))&&(ad&&(az=ao.offsetWidth),ao._lazyRace=!0,H++,c.rC&&(az=c.rC(ao,az)||az),ah.add(function(){J++,(ay=u(ao,"lazybeforeunveil")).defaultPrevented||(ap&&(ad?(aa.updateElem(ao,!0,az),r(ao,c.autosizesClass)):ao.setAttribute("sizes",ap)),an=ao[g](c.srcsetAttr),au=ao[g](c.srcAttr),ac&&(aw=ao.parentNode,ax=aw&&m.test(aw.nodeName||"")),av=ay.detail.firesLoad||"src" in ao&&(an||au||ax),ay={target:ao},av&&(t(ao,O,!0),clearTimeout(P),P=j(O,2500),r(ao,c.loadingClass),t(ao,aj,!0)),ax&&p.call(aw.getElementsByTagName("source"),Z),an?ao.setAttribute("srcset",an):au&&!ax&&(D.test(ao.nodeName)?N(ao,au):ao.src=au),(an||ax)&&v(ao,{src:au})),k(function(){ao._lazyRace&&delete ao._lazyRace,s(ao,c.lazyClass),(!av||ao.complete)&&(av?O(ay):H--,ae(ay))
})
}))
},K=function(){if(!S){if(Date.now()-C<999){return void j(K,999)
}var ac,ad=function(){c.loadMode=3,X()
};
S=!0,c.loadMode=3,J?X():j(function(){V(),ah.run()
}),h("scroll",function(){3==c.loadMode&&(c.loadMode=2),clearTimeout(ac),ac=j(ad,99)
},!0)
}};
return{_:function(){C=Date.now(),M=b.getElementsByClassName(c.lazyClass),Q=b.getElementsByClassName(c.lazyClass+" "+c.preloadClass),A=c.hFac,h("scroll",X,!0),h("resize",X,!0),a.MutationObserver?new MutationObserver(X).observe(d,{childList:!0,subtree:!0,attributes:!0}):(d[f]("DOMNodeInserted",X,!0),d[f]("DOMAttrModified",X,!0),setInterval(X,999)),h("hashchange",X,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(ac){b[f](ac,X,!0)
}),/d$|^c/.test(b.readyState)?K():(h("load",K),b[f]("DOMContentLoaded",X),j(K,20000)),X(M.length>0)
},checkElems:X,unveil:T}
}(),aa=function(){var B,C=function(H,I,J){var K,L,E,F,G=H.parentNode;
if(G&&(J=x(H,G,J),F=u(H,"lazybeforesizes",{width:J,dataAttr:!!I}),!F.defaultPrevented&&(J=F.detail.width,J&&J!==H._lazysizesWidth))){if(H._lazysizesWidth=J,J+="px",H.setAttribute("sizes",J),m.test(G.nodeName||"")){for(K=G.getElementsByTagName("source"),L=0,E=K.length;
E>L;
L++){K[L].setAttribute("sizes",J)
}}F.detail.dataAttr||v(H,F.detail)
}},D=function(){var E,F=B.length;
if(F){for(E=0;
F>E;
E++){C(B[E])
}}},A=y(D);
return{_:function(){B=b.getElementsByClassName(c.autosizesClass),h("resize",A)
},checkElems:A,updateElem:C}
}(),ab=function(){ab.i||(ab.i=!0,aa._(),z._())
};
return function(){var B,A={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.7,hFac:0.8,loadMode:2};
c=a.lazySizesConfig||a.lazysizesConfig||{};
for(B in A){B in c||(c[B]=A[B])
}a.lazySizesConfig=c,j(function(){c.init&&ab()
})
}(),{cfg:c,autoSizer:aa,loader:z,init:ab,uP:v,aC:r,rC:s,hC:q,fire:u,gW:x}
}});
(function(h,e,g){e.log=function(a){if(h.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
e.toType=(function f(a){return function(b){if(b===a){return"global"
}return({}).toString.call(b).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
}
}(this));
h.socialConnect=(function(){function a(){var b=this;
this.socialConnectInteration=function(){e(".top-navigation .dropdown-menu").click(function(c){c.stopPropagation()
});
e(".social-connect-content-no-thanks").click(function(){e(".sc-popup").dialog("close");
e(".sc-mobile-popup").dialog("close")
});
e(".twitter-selected,.google-selected,.fb-selected,.linkedin-selected").on("click",function(c){b.resetCommunityList();
e(this).addClass("selected-community");
e(".social-not-connected-content").show();
if(e(this).hasClass("twitter-selected")){e(this).find("span.community-icons").removeClass("icons-social-connect-twitter-gray").addClass("icons-socail-connect-twitter-select");
e(".top-nav-twitter-connect").show();
if(e(".twitter-social-connect-content").hasClass("connected")){e(".social-not-connected-content").hide();
e(".twitter-social-connect-content").show()
}}else{if(e(this).hasClass("fb-selected")){e(this).find("span.community-icons").removeClass("icons-socail-connect-fb-gray").addClass("icons-socail-connect-fb-select");
e(".top-nav-fb-connect").show();
if(e(".facebook-social-connect-content").hasClass("connected")){e(".social-not-connected-content").hide();
e(".facebook-social-connect-content").show()
}}else{if(e(this).hasClass("google-selected")){e(this).find("span.community-icons").removeClass("icons-socail-connect-gplus-gray").addClass("icons-socail-connect-gplus-select");
e(".top-nav-google-connect").show();
if(e(".google-social-connect-content").hasClass("connected")){e(".social-not-connected-content").hide();
e(".google-social-connect-content").show()
}}else{if(e(this).hasClass("linkedin-selected")){e(this).find("span.community-icons").removeClass("icons-socail-connect-linkedin-gray").addClass("icons-socail-connect-linkedin-select");
e(".top-nav-linkedin-connect").show();
if(e(".linkedin-social-connect-content").hasClass("connected")){e(".social-not-connected-content").hide();
e(".linkedin-social-connect-content").show()
}}}}}c.preventDefault()
})
};
this.socialNetworkConnect=function(){e(".social-not-connected").hide();
e(".social-not-connected-content").hide();
e(".social-connected").show()
};
this.resetCommunityList=function(){e(".social-connect-community li.selected-community").removeClass("selected-community");
var k=e(".twitter-community-icon");
if(k.hasClass("icons-socail-connect-twitter-select")){k.removeClass("icons-socail-connect-twitter-select").addClass("icons-social-connect-twitter-gray")
}var m=e(".fb-community-icon");
if(m.hasClass("icons-socail-connect-fb-select")){m.removeClass("icons-socail-connect-fb-select").addClass("icons-socail-connect-fb-gray")
}var d=e(".google-community-icon");
if(d.hasClass("icons-socail-connect-gplus-select")){e(".google-community-icon").removeClass("icons-socail-connect-gplus-select").addClass("icons-socail-connect-gplus-gray")
}var c=e(".linkedin-community-icon");
if(c.hasClass="icons-socail-connect-linkedin-select"){c.removeClass("icons-socail-connect-linkedin-select").addClass("icons-socail-connect-linkedin-gray")
}e(".top-nav-fb-connect,.top-nav-twitter-connect,.top-nav-google-connect,.top-nav-linkedin-connect").hide();
e(".social-connect-content").hide()
};
this.init=function(){b.socialConnectInteration();
e(".top-nav-social-connect .close-social-connect").on("click",function(){e(".sc-popup").dialog("close");
e(".sc-mobile-popup").dialog("close")
});
e(".top-nav-social-connect").on("click",function(){e(".sc-popup").dialog("open");
e(".sc-mobile-popup").dialog("open")
});
e(".sc-popup").dialog({autoOpen:false,resizable:false,height:"auto",width:"530",top:"0",zIndex:2000,appendTo:".sc-popup-container",modal:true,dialogClass:"noTitle",closeOnEscape:true});
e(".sc-mobile-popup").dialog({autoOpen:false,resizable:false,height:"auto",width:"200",top:"0",zIndex:2000,appendTo:".sc-mobile-popup-container",modal:true,dialogClass:"noTitle",closeOnEscape:true});
return this
};
return this.init()
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
var socialShare=function(){function b(){}return{init:b}
}();
socialShare.init();
/*!
 * This file contains the code for the social share and live chat.
 *
 * @project   Manipal GE
 * @date      2013-12-24
 * @author    Kuldip Raj, SapientNitro <kraj2@sapient.com>
 * @licensor  CLIENTNAME
 * @site      Manipal
 *
 */
(function(d,e,f){e.log=function(a){if(MODULE.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
d.socialShare=(function(){function a(){var b=this;
this.facebookHandler=function(){console.log(1)
};
this.twitterHandler=function(){};
this.googlePlusHandler=function(){};
this.emailHandler=function(){};
this.liveChatHandler=function(){};
this.init=function(){e(".facebook").on("click",b.facebookHandler);
e(".twitter").on("click",b.twitterHandler);
e(".gplus").on("click",b.googlePlusHandler);
e(".email").on("click",b.emailHandler);
e(".live_chat").on("click",b.liveChatHandler);
return this
};
return this.init()
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
/*!
 *
 * This file contains the code for the Initialzing Inspired Learning Carousel in Home page.
 *
 * @project   Manipal GE
 * @date      2013-12-10
 * @author    Malarvannan, SapientNitro <smalarvannan@sapient.com>
 * @licensor  CLIENTNAME
 * @site      Manipal
 *
 */
(function(d,e,f){e.log=function(a){if(MODULE.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
d.disciplineModule=(function(){function a(){var b=this;
this.init=function(){e(".fb-tab").click(function(){e("#fb_active").show();
e("#fb_normal").hide();
e("#twitter_active").hide();
e("#twitter_normal").show();
e(".fb-content").addClass("fb-content-active");
e(".twitter-content").removeClass("twitter-content-active")
});
e(".twitter-tab").click(function(){e("#fb_active").hide();
e("#fb_normal").show();
e("#twitter_active").show();
e("#twitter_normal").hide();
e(".fb-content").removeClass("fb-content-active");
e(".twitter-content").addClass("twitter-content-active")
});
return this
};
return this.init()
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
$(".subscribe-btn").click(function(){_submitBtn=$(".component-email-subscribe form .subscribe-btn"),_appTextBox=$("form .email-subscribe"),error_msg=$("form .email_sub"),_form=$(".component-email-subscibe form");
var m=_appTextBox.val(),p=$("#email_cur_path").val(),n=$("#email_enabled").val(),j=$("#email_fromAddress").val(),r=$("#email_subject").val(),q=$("#email_templatePath").val();
var s='<label class="error err_msg">Please Enter Valid Email Address</label>';
m=$.trim(m);
var k=/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
var o=true;
$(".component-email-subscibe form .error").remove();
if(!m.match(k)){$(".err_msg").hide();
error_msg.after(s);
o=false
}else{$(".error_block").hide();
$.ajax({type:"POST",url:"/bin/manipal/components/getemailtosubscribe",data:{emailto:m,currentpage:p,emailenabled:n,emailfromAdress:j,emailSubject:r,emailtemplatePath:q},success:function(a){if(a!=""||a!=null){console.log(a);
$(".email-subscribe").val("");
$(".err_msg").hide();
$("div.email_sub").css("display","inline")
}}})
}});