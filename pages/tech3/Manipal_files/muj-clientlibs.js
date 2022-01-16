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
this.init=function(){if(d.accreditationsConfig!=f){e(function(){b.accreditationsCarousel();
b.accreditationsCarouselMobile()
});
e(document).ready(function(){if(e("body").hasClass("manipal-mobile")){b.mobileFlexSliderDom()
}else{b.flexSliderDom()
}})
}return this
};
this.accreditationsCarousel=function(){e(".accreditation-carousel .flexslider").flexslider({controlsContainer:"flex-accreditation-container",animation:"slide",slideshowSpeed:"6000",directionNav:false,slideshow:false,itemWidth:255,itemMargin:80,includeItemMargin:true,minItems:3})
};
this.accreditationsCarouselMobile=function(){e(".accreditation-container-mobile .flexslider").flexslider({controlsContainer:"flex-accreditation-container-mobile",animation:"slide",slideshowSpeed:"6000",directionNav:false,slideshow:false,itemWidth:0,itemMargin:0,includeItemMargin:true,minItems:3})
};
this.flexSliderDom=function(){e.each(d.accreditationsConfig,function(h,c){e(".accreditation-carousel .flexslider ul.slides").append("<li><div class='row slider-container'><div class='slider-container-cols'><div class='row accreditation-head-text'><div class='square'></div><div class='institute_name'>"+c.institute_name+"</div></div><div class='row institute-info'><div class='accreditation-image-container'><img src='"+c.source_logo+"' class='accreditaion-image-styles'/></div></div></div><ul class='row source-item'><li class='white-text text-desc'>"+c.text_line+"</li></ul></li>")
})
};
this.mobileFlexSliderDom=function(){var c=0;
e.each(d.accreditationsConfig,function(j,i){if(c<4){e(".accreditation-container-mobile .flexslider .slides").append("<li><div class='accreditation-cotainer-mobile'><div class='accreditation-left-container'><div class='accreditation-header-mobile'><div class='square'></div><div class='institute_name'>"+i.institute_name+"</div></div><div class='accreditation-image-container'><img src='"+i.source_logo+"' class='accreditaion-image-styles'></div></div><div class='accreditation-right-container'><div class='accreditation-right-source-bg'><div class='accreditation-right-content'>"+i.text_line+"</div></div></div></div></li>")
}c++
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
 * @author    SHreenithya, SapientNitro <skaveri@sapient.com>
 * @licensor  CLIENTNAME
 * @site      Manipal
 *
 */
(function(d,e,f){d.mobileHeader=(function(){function a(){var x=this;
var u=e(".fat-menu-links"),B=0,C="Main Menu",w="",b=["Main Menu"],D=[],v=0,F=e(".fat-menu-links-breadcrumb"),E=e(".fat-menu-programs"),z=e(".fat-menu-spotlight"),A=e(".fat-call-to-action"),c=0,t=false,y=navigator.userAgent.match(/iPad/i)!=null;
x.timer=null;
x.l2timer=null;
x.spotLightTimer=null;
x.fatmenuTimer=null;
this.callToAction=function(g){A.empty();
var h="";
e.each(g,function(j,i){h+='<li><a href="'+i.link+'" class="content-panel-sub-links" title="Link Label 1"><img src="'+i.imgIconURL+'"  alt="Location Icon" />'+i.name+"</a></li>"
});
A.append(h)
};
this.loadLevelLinks=function(g){var h="";
e.each(g,function(j,i){if(i.isPrograms!=f&&i.isPrograms=="true"){h+='<li><a href="'+i.link+'" class="page-links">'+i.name+'</a><a href="'+i.link+'" ></a></li>';
'<div><a href="'+i.link+'" class="program-page-links">'+i.name+"</a><ul>";
for(var k=0;
k<g[j].items.length;
k++){h+='<li class="program-links"><a class="page-links " href="'+g[j].items[k].link+'">'+g[j].items[k].name+'</a><a href="#" class="inner-page-links program-links-arrow" data-level="'+B+'" data-index="'+j+'"></a></li>'
}}else{h+='<li><a href="'+i.link+'" class="page-links">'+i.name+'</a><a href="#" class="inner-page-links" data-level="'+B+'" data-index="'+j+'"></a></li>'
}});
u.append(h);
x.innerPageClick(g)
};
this.loadSpotlightLinks=function(h){var j="",g="";
e.each(h.items,function(m,l){j+='<li><a href="'+l.link+'" class="page-links" data-level="'+B+'" data-index="'+m+'">'+l.name+"</a></li>"
});
var k='<p class="spotlight-sub-heading">Spotlight</p>';
e.each(h.spotLightImg,function(m,l){g+=' <li class="spotlight-list">  <a href="'+l.link+'">  <img src=" '+l.url+'" width="200" height="125" alt="Institute Picture"> <p>'+l.linkText+"</p></a></li>"
});
var i=k+g;
u.append(j);
z.append(i)
};
this.loadInstitueLinks=function(n){var h="",i="",m="",l="",g="",j="",k="";
j=n.programs;
k=n.others;
if(n.othersTitle!=""){e.each(k,function(p,o){g+='<p><a href="'+o.link+'"  data-level="'+B+'" data-index="'+p+'">'+o.name+" </a></p>"
});
l='<div class="program-offered"><p class="program-offered-heading">'+n.othersTitle+"</p>"+g+"</div>"
}e.each(j,function(q,o){h="",m="",i="";
i='<li class="program-title">'+o.name+"</li>";
e.each(j[q].subprogram,function(H,s){h+='<li><a href="'+s.link+'" class="program-links" data-level="'+B+'" data-index="'+H+'">'+s.name+" </a></li>";
if(H==2){return false
}});
var r=i+h+m;
var p='<ul class="fat-menu-program-links">'+r+"</ul>";
E.append(p)
});
E.append(l)
};
this.loadProgramLinks=function(n){var h="",i="",m="",l="",g="",j="",k="";
j=n.programs;
k=n.others;
if(n.othersTitle!=""){e.each(k,function(p,o){g+='<p><a href="'+o.link+'"  data-level="'+B+'" data-index="'+p+'">'+o.name+" </a></p>"
});
l='<div class="program-offered"><p class="program-offered-heading">'+n.othersTitle+"</p>"+g+"</div>"
}e.each(j,function(q,o){h="",m="",i="";
i='<li class="program-title">'+o.name+"</li>";
if(o.totalRemainingPrograms!=""){m='<li> See  <span class="program-count">'+o.totalRemainingPrograms+"</span> More </li>"
}e.each(j[q].subprogram,function(H,s){h+='<li><a href="'+s.link+'" class="program-links" data-level="'+B+'" data-index="'+H+'">'+s.name+" </a></li>";
if(H==2){return false
}});
var r=i+h+m;
var p='<ul class="fat-menu-program-links">'+r+"</ul>";
E.append(p)
});
E.append(l)
};
x.innerPageClick=function(g){e(".inner-page-links").on("click",function(h){w=e(this).parent().find("a.page-links").text();
var j=e(this).data("index");
var i=e(this).data("level");
if(g[j].programs!=f&&g[j].programs[0].totalRemainingPrograms!=f){if(v<=i){D.push(g);
v++
}u.empty();
F.empty();
E.empty();
var l='<li class="header-breadcrumb"><a href="#" class="prev-menu"><span class="prev-arrow"></span>'+C+'</a><a href="#" class="current-menu">'+w+"</a></li><li>";
F.append(l);
B++;
x.loadProgramLinks(g[j]);
C=w;
x.loadPrevious(D)
}else{if(g[j].isPrograms=="true"){var k=e(this);
var m=k.index();
if(v<=i){D.push(g);
b.push(w);
v++
}u.empty();
F.empty();
var l='<li class="header-breadcrumb"><a href="#" class="prev-menu"><span class="prev-arrow"></span>'+C+'</a><a href="#" class="current-menu">'+w+"</a></li><li>";
F.append(l);
B++;
x.loadLevelLinks(g[j].items[0].items);
C=w;
x.loadPrevious(D)
}else{if(g[j].programs!=f&&g[j].programs[0].totalRemainingPrograms==f){if(v<=i){D.push(g);
v++
}u.empty();
F.empty();
E.empty();
var l='<li class="header-breadcrumb"><a href="#" class="prev-menu"><span class="prev-arrow"></span>'+C+'</a><a href="#" class="current-menu">'+w+"</a></li><li>";
F.append(l);
B++;
x.loadInstitueLinks(g[j]);
C=w;
x.loadPrevious(D)
}else{if((g[j].items!=f&&g[j].items!="")&&(g[j].spotLightImg==f||g[j].spotLightImg=="")){if(v<=i){D.push(g);
b.push(w);
v++
}u.empty();
F.empty();
var l='<li class="header-breadcrumb"><a href="#" class="prev-menu"><span class="prev-arrow"></span>'+C+'</a><a href="#" class="current-menu">'+w+"</a></li><li>";
F.append(l);
B++;
x.loadLevelLinks(g[j].items);
C=w;
x.loadPrevious(D)
}else{if((g[j].items!=f&&g[j].items!="")&&g[j].spotLightImg!=f){if(v<=i){D.push(g);
b.push(w);
v++
}u.empty();
F.empty();
var l='<li class="header-breadcrumb"><a href="#" class="prev-menu"><span class="prev-arrow"></span>'+C+'</a><a href="#" class="current-menu">'+w+"</a></li><li>";
F.append(l);
B++;
x.loadSpotlightLinks(g[j]);
C=w;
x.loadPrevious(D)
}}}}}if((g[j].callToAction!=""||g[j].callToAction!=f)){x.callToAction(g[j].callToAction)
}})
};
x.loadPrevious=function(g){e(".prev-menu").on("click",function(i){B--;
v--;
var j=e(".inner-page-links").data("level")||e(".program-links").data("level")||e(".page-links").data("level");
u.empty();
F.empty();
z.empty();
E.empty();
w=e(this).text();
if(e(this).text()!="Main Menu"){w=e(this).text();
var h='<li class="header-breadcrumb"><a href="#" class="prev-menu"><span class="prev-arrow"></span>'+b[j-2]+'</a><a href="#" class="current-menu">'+w+"</a></li><li>";
C=w;
F.append(h);
x.loadPrevious(D)
}else{C="Main Menu"
}if(B==0){b=["Main Menu"];
x.loadLevelLinks(g[j-1])
}else{x.loadLevelLinks(g[j-1])
}D.pop()
})
};
x.subProgramsInstituteItems=function(g){var h="";
if(g==f){return h
}g.items.sort(function(l,k){l=l.name.toLowerCase();
k=k.name.toLowerCase();
return l<k?-1:l>k?1:0
});
for(var j=0;
j<g.items.length;
j++){h+='<li class="program-content" ><span class="institute-heading-il" ><a href="'+g.items[j].link+'">'+g.items[j].name+"</a></span>";
if(g.items[j].subprogram!=f&&g.items[j].subprogram.length!=0){g.items[j].subprogram.sort(function(l,k){l=l.name.toLowerCase();
k=k.name.toLowerCase();
return l<k?-1:l>k?1:0
});
h+='<ul class="col-70">';
for(var i=0;
i<g.items[j].subprogram.length;
i++){h+='<li><div class="arrow-small-bullet"></div><a class="institute-subprogram-li" href="'+g.items[j].subprogram[i].link+'"><span>'+g.items[j].subprogram[i].name+"</span></a></li>"
}h+="</ul>"
}if(g.items[j].totalRemainingPrograms!=f&&g.items[j].totalRemainingPrograms!=""){h+='<div class="col-30"><a class="more-link" href="'+g.items[j].totalRemainingProgramsLink+'"><div class="plus-sym">+</div><div>'+g.items[j].totalRemainingPrograms+" More</div></a></div>"
}h+="</li>"
}return h
};
x.subProgramItems=function(h){var g="",i="",j="";
for(var l=0;
l<h.programs.length;
l++){j="";
g+='<li class="program-content" >';
g+='<span class="institute-heading" ><a href="'+h.programs[l].link+'">'+h.programs[l].name+"</a ></span>";
if(h.programs[l].subprogram.length>3&&h.programs[l].isProgramList!=true&&(h.programs[l].totalRemainingPrograms==""||h.programs[l].totalRemainingPrograms==f)){i='style="width:45%"'
}g+='<ul class="col-70" '+i+" >";
var m=0;
var n=true;
if(h.programs[l].isProgramList==f||h.programs[l].isProgramList==false){j="institute-subprogram";
m=(h.programs[l].subprogram.length<6)?h.programs[l].subprogram.length:6;
if(l>2){n=false
}}else{m=h.programs[l].subprogram.length
}if(n){for(var k=0;
k<m;
k++){g+='<li><div class="arrow-small-bullet"></div><a class="'+j+'" href="'+h.programs[l].subprogram[k].link+'"><span>'+h.programs[l].subprogram[k].name+"</span></a></li>";
if(h.programs[l].subprogram.length>3&&k==2&&(h.programs[l].totalRemainingPrograms==""||h.programs[l].totalRemainingPrograms==f)){g+='</ul><ul class="col-70" style="width:45%">'
}}}g+="</ul>";
if(h.programs[l].totalRemainingPrograms!=f&&h.programs[l].totalRemainingPrograms!=""&&h.programs[l].totalRemainingPrograms!="0"){g+='<div class="col-30"><a class="more-link" href="'+h.programs[l].totalRemainingProgramsLink+'"><div class="plus-sym">+</div><div>'+h.programs[l].totalRemainingPrograms+" More</div></a></div>"
}g+="</li>"
}if(h.others.length!=0){g+='<li class="programs-offerred"><div><span class="programs-offerred-heading">'+h.othersTitle+"</span><ul>";
for(var l=0;
l<h.others.length;
l++){g+='<li><a href="'+h.others[l].link+'" target="_blank"><div class="programs-loc-icon"></div><span>'+h.others[l].name+"</span></a></li>"
}g+="</ul></div></li>"
}return g
};
x.subDepartmentItems=function(g){var h="",i="",j="";
return h
};
x.subInstDeptItems=function(g){var h="",j=0,i=0;
if(g==f){return h
}g.items.sort(function(l,m){l=l.name.toLowerCase();
m=m.name.toLowerCase();
return l<m?-1:l>m?1:0
});
for(var k=0;
k<g.items.length;
k++){h+='<li class="program-content" ><a href="'+g.items[k].link+'"><div class="arrow-bullet"></div><span>'+g.items[k].name+"</span></a>";
h+="</li>";
if(j>11&&g.items.length-(k+1)>0){h+='<div class="dept-remaining-cnt"><a class="more-link" href="'+arguments[1]+'"><div class="plus-sym">+</div><div>'+(g.items.length-(k+1))+" More</div></a></div>";
break
}j++
}return h
};
x.programLevel4Items=function(m,i,l,g){var j="",h="";
if(m.items[0]!=f&&m.items[0].subprogram==f){m.items.sort(function(o,n){o=o.name.toLowerCase();
n=n.name.toLowerCase();
return o<n?-1:o>n?1:0
});
for(var k=0;
k<m.items.length;
k++){if(m.items[k].programs!=f&&m.items[k].programs.length!=0){h="l3-selected";
j+='<li class="'+h+'" data-value="'+i+"|"+l+"|"+g+"|"+k+'"><a class="l3-link" href="'+m.items[k].link+'"><span>'+m.items[k].name+'</span></a><a class="right-arrow"> </a></li>'
}}}else{h="";
j+=x.subProgramsInstituteItems(m,i)
}return j
};
x.instDeptLevel3Items=function(m,i,l,g){var j="",h="";
if(m.items[0]!=f&&m.items[0].subprogram==f){m.items.sort(function(o,n){o=o.name.toLowerCase();
n=n.name.toLowerCase();
return o<n?-1:o>n?1:0
});
for(var k=0;
k<m.items.length;
k++){if((m.items[k].length!=0)){h="l3-selected";
j+='<li class="'+h+'" data-value="'+i+"|"+l+"|"+g+"|"+k+'"><a class="l3-link" href="'+m.items[k].link+'"><span>'+m.items[k].name+"</span></a></li>"
}}}else{h="";
j+=x.subInstDeptItems(m)
}return j
};
x.spotLightCallToAction=function(g){if(g.callToAction==f){return
}var h="";
for(var i=0;
i<g.callToAction.length;
i++){h+='<li><a href="'+g.callToAction[i].link+'"><img src="'+g.callToAction[i].imgIconURL+'" height="20" width="20"/><span>'+g.callToAction[i].name+"</span></a></li>"
}return h
};
x.spotlightImg=function(g){if(g.spotLightImg==f){return
}var h="";
for(var i=0;
i<g.spotLightImg.length;
i++){if(e.trim(g.spotLightImg[i].url)!=""&&e.trim(g.spotLightImg[i].url)!=null){h+='<li><a href="'+g.spotLightImg[i].link+'" ><img src="'+g.spotLightImg[i].url+'" width="310px" height="160"  /></a></li>'
}}return h
};
x.departmentListRendering=function(m,j){var h="",n=0,g=0;
if(m==f||m.items==f){return
}h='<ul class="border-right dept-col"></ul>';
e(".fat-menu-container .dept-level-col").empty();
e(".fat-menu-container .dept-level-col").append(h);
for(var k=0;
k<m.items.length;
k++){h='<li><a href="'+m.items[k].link+'"><div class="arrow-bullet"></div><span>'+m.items[k].name+"</span></a></li>";
n=e(".fat-menu-container .dept-level-col .dept-col").outerHeight(true);
if(n>390){g++;
if(g<2){h='<ul class="dept-col col-2">'+h+"</ul>";
e(".fat-menu-container .dept-level-col").append(h);
e(".fat-menu-container .dept-level-col .dept-col").css("width","50%")
}else{e(".fat-menu-container .dept-level-col .dept-col.col-2").append(h)
}var i=e(".fat-menu-container .dept-level-col .dept-col.col-2").outerHeight(true);
if(i>390){var l='<div class="dept-remaining-cnt"><a class="more-link" href="'+m.link+'"><div class="plus-sym">+</div><div>'+(m.items.length-(k+1))+" More</div></a></div>";
e(".fat-menu-container .dept-level-col").append(l);
return
}}else{e(".fat-menu-container .dept-level-col .border-right.dept-col").append(h)
}}if(m.backgroundImage==f){e(".fat-menu-container .fat-menu").css("background","url('/etc/designs/manipal/images/fat-menu-bg.png') 0 60px no-repeat");
e(".fat-menu-container .fat-menu").css("background-color","#FFFFFF");
e(".fat-menu-container .fat-menu").css("cursor","default");
e(".fat-menu-container .fat-menu").off()
}};
x.spotlightLevel3Items=function(h,i){var g="";
var j="";
if(h==f||h.items==f){return g
}if(h.items.length>4){g='<h6 class="level3-links-header">'+h.name+'</h6><ul class="level-4 border-right">'
}else{j=' class="single-column-level-4-texts"';
g='<h6 class="level3-links-header">'+h.name+'</h6><ul class="level-4 single-column-level-4">'
}if(x.spotLightTimer!=null){clearTimeout(x.spotLightTimer)
}x.spotLightTimer=setTimeout(function(){if(h.items.length==0){e(".level3-links-header").hide();
e(".fat-menu-container .ui-widget-content .fat-menu .level-3 .level-col").animate({height:"100px"},250)
}else{e(".level3-links-header").show();
e(".fat-menu-container .ui-widget-content .fat-menu .level-3 .level-col").animate({height:"220px"},250)
}},150);
for(var k=0;
k<((h.items.length>11)?12:h.items.length);
k++){g+='<li><a href="'+h.items[k].link+'"><div class="arrow-bullet"></div><span'+j+">"+h.items[k].name+"</span></a></li>";
if(h.items.length>7&&k==3){g+='</ul><ul class="level-4 border-right">'
}else{if((h.items.length<=7&&k==3)||k==7){g+='</ul><ul class="level-4">'
}}}g+="</ul>";
if(h.backgroundImage!=f){e(".fat-menu-container .fat-menu").css("background","url('"+h.backgroundImage+"') 0 0 no-repeat ");
e(".fat-menu-container .fat-menu").css("cursor","pointer");
e(".fat-menu-container .fat-menu").on("click",function(){if(h.backgroundImageLink!=f){window.location.href=h.backgroundImageLink+".html"
}})
}else{e(".fat-menu-container .fat-menu").css("background","url('/etc/designs/manipal/images/fat-menu-bg.png') 0 60px no-repeat");
e(".fat-menu-container .fat-menu").css("background-color","#FFFFFF");
e(".fat-menu-container .fat-menu").css("cursor","default");
e(".fat-menu-container .fat-menu").off()
}return g
};
x.programLevel3Items=function(i,j,g){var h="";
for(var k=0;
k<i.items.length;
k++){h+='<li data-value="'+j+"|"+g+"|"+k+'"><a class="l2-link" href="'+i.items[k].link+'" >'+i.items[k].name+"</a></li>"
}if(i.backgroundImage==f){e(".fat-menu-container .fat-menu").css("background","url('/etc/designs/manipal/images/fat-menu-bg.png') 0 60px no-repeat");
e(".fat-menu-container .fat-menu").css("background-color","#FFFFFF");
e(".fat-menu-container .fat-menu").css("cursor","default");
e(".fat-menu-container .fat-menu").off()
}return h
};
x.level2items=function(g,i){var j="",h="";
if(g==f){return
}for(var k=0;
k<g.items.length;
k++){if(k!=0&&g.items[k].items!=f){h="l1-link"
}else{h=""
}if(g.items[k].isPrograms!=f&&g.items[k].isPrograms=="true"){j+='<li class="program" data-value="'+i+"|"+k+'" ><div><a class="program-heading" href="'+g.items[k].link+'">'+g.items[k].name+'</a><ul class="level-2">';
j+=x.programLevel3Items(g.items[k],i,k);
j+="</ul></div></li>"
}else{if(g.items[k].isStreams!=f&&g.items[k].isStreams=="true"){j+='<li class="program stream" data-value="'+i+"|"+k+'" ><a class="'+h+'" href="'+g.items[k].link+'">'+g.items[k].name+"</a></li>"
}else{j+='<li class="l1-selected" data-value="'+i+"|"+k+'"><a class="'+h+'" href="'+g.items[k].link+'">'+g.items[k].name+"</a></li>"
}}}return j
};
x.renderFatMenu=function(i){if(d.globalNavConfigPrograms.items[i]==f){return
}var h=e(".fat-menu-container .fat-menu");
var j='<div><ul class="level-1">'+x.level2items(d.globalNavConfigPrograms.items[i],i)+"</ul>";
if(d.globalNavConfigPrograms.items[i].items[1]!=f&&d.globalNavConfigPrograms.items[i].items[1].isDepartment!=f&&d.globalNavConfigPrograms.items[i].items[1].isDepartment=="true"){j+='<div class="level-3 spotlight"><div class="dept-level-col" ></div></div>'
}else{if((d.globalNavConfigPrograms.items[i].items[1]==f||d.globalNavConfigPrograms.items[i].items[1].isPrograms==f||(d.globalNavConfigPrograms.items[i].items[1].isPrograms=="false"&&d.globalNavConfigPrograms.items[i].items[1].isStreams=="false"))&&((d.globalNavConfigPrograms.items[i].items[1].isMUJInstitute==f&&d.globalNavConfigPrograms.items[i].items[1].isMUJInstitute!="true")||(d.globalNavConfigPrograms.items[i].items[1].isMUJInstitute!=f)&&d.globalNavConfigPrograms.items[i].items[1].isMUJInstitute=="false")){j+='<div class="level-3 spotlight"><div class="level-col" >'+x.spotlightLevel3Items(d.globalNavConfigPrograms.items[i].items[1],i)+'</div><div class="spotlight-img" ><ul>'+x.spotlightImg(d.globalNavConfigPrograms.items[i],i)+"</ul></div></div>"
}}if((d.globalNavConfigPrograms.items[i].items[1].isMUJInstitute!=f&&d.globalNavConfigPrograms.items[i].items[1].isMUJInstitute=="true")){j+='<div class="level-3 program institue-department">'
}else{j+='<div class="level-3 program">'
}if(d.globalNavConfigPrograms.items[i].items[1]!=f&&d.globalNavConfigPrograms.items[i].items[1].items[0]!=f&&d.globalNavConfigPrograms.items[i].items[1].items[0].subprogram==f){j+='<ul class="levels">';
if(d.globalNavConfigPrograms.items[i].items[1].isPrograms!=f&&(d.globalNavConfigPrograms.items[i].items[1].isPrograms=="true")){console.log(d.globalNavConfigPrograms.items[i].items[1].items[0]);
j+=x.programLevel4Items(d.globalNavConfigPrograms.items[i].items[1].items[0],i,1,0)
}else{if((d.globalNavConfigPrograms.items[i].items[1].isMUJInstitute!=f&&d.globalNavConfigPrograms.items[i].items[1].isMUJInstitute=="true")){j+=x.instDeptLevel3Items(d.globalNavConfigPrograms.items[i].items[1],i,1,null)
}else{if(d.globalNavConfigPrograms.items[i].items[1].isStreams=="true"){j+=x.programLevel4Items(d.globalNavConfigPrograms.items[i].items[1],i,0,null)
}}}j+="</ul>"
}var g=false;
if(d.globalNavConfigPrograms.items[i].items[1]!=f){if(d.globalNavConfigPrograms.items[i].items[1].items[0]!=f&&d.globalNavConfigPrograms.items[i].items[1].items[0].subprogram!=f){j+='<ul class="level-4" style="width:100%">';
if(d.globalNavConfigPrograms.items[i].items[1].isPrograms!=f&&d.globalNavConfigPrograms.items[i].items[1].isPrograms=="true"&&d.globalNavConfigPrograms.items[i].items[1].items.length!=0){j+=x.subProgramsInstituteItems(d.globalNavConfigPrograms.items[i].items[1],i)
}else{if(d.globalNavConfigPrograms.items[i].items[1].isStreams!=f&&d.globalNavConfigPrograms.items[i].items[1].isStreams=="true"&&d.globalNavConfigPrograms.items[i].items[1].items.length!=0){j+=x.subProgramsInstituteItems(d.globalNavConfigPrograms.items[i].items[1],i)
}}}else{g=true;
j+='<ul class="level-4" >';
if(d.globalNavConfigPrograms.items[i].items[1].isPrograms!=f&&d.globalNavConfigPrograms.items[i].items[1].isPrograms=="true"&&d.globalNavConfigPrograms.items[i].items[1].items.length!=0){j+=x.subProgramItems(d.globalNavConfigPrograms.items[i].items[1].items[0].items[0],i)
}else{if(d.globalNavConfigPrograms.items[i].items[1].isStreams!=f&&d.globalNavConfigPrograms.items[i].items[1].isStreams=="true"&&d.globalNavConfigPrograms.items[i].items[1].items.length!=0){j+=x.subProgramItems(d.globalNavConfigPrograms.items[i].items[1].items[0],i)
}else{if((d.globalNavConfigPrograms.items[i].items[1].isMUJInstitute!=f&&d.globalNavConfigPrograms.items[i].items[1].isMUJInstitute=="true")&&d.globalNavConfigPrograms.items[i].items[1].items.length!=0){j+=x.subInstDeptItems(d.globalNavConfigPrograms.items[i].items[1].items[0],d.globalNavConfigPrograms.items[i].items[1].link)
}}}}}j+="</ul></div>";
j+='</div><ul class="call-to-action" >'+x.spotLightCallToAction(d.globalNavConfigPrograms.items[i],i)+"</ul>";
h.empty();
h.append(j);
x.departmentListRendering(d.globalNavConfigPrograms.items[i].items[1],i);
if(!g){e(".fat-menu-container .ui-widget-content .fat-menu .level-3.program .level-4").columnize({columns:2,height:500})
}if((d.globalNavConfigPrograms.items[i].items[1].isMUJInstitute!=f)&&(d.globalNavConfigPrograms.items[i].items[1].isMUJInstitute=="true")){e(".fat-menu-container .fat-menu .level-3.program").show()
}else{if((d.globalNavConfigPrograms.items[i].items[1]!=f&&d.globalNavConfigPrograms.items[i].items[1].isPrograms=="false"&&d.globalNavConfigPrograms.items[i].items[1].isStreams=="false")){e(".fat-menu-container .fat-menu .level-3.program").hide()
}}if(y){e(".fat-menu-container .fat-menu .level-1 .l1-selected").bind("click",function(){var k=e(this);
if(x.l2timer!=null){clearTimeout(x.l2timer)
}x.l2timer=setTimeout(function(){var o=k.attr("data-value").split("|");
var p=d.globalNavConfigPrograms.items[o[0]].items[o[1]];
var n="";
if(p.isDepartment=="true"){x.departmentListRendering(p,o[0])
}else{n=x.spotlightLevel3Items(p,o[0]);
e(".fat-menu-container .fat-menu .spotlight .level-col").empty();
e(".fat-menu-container .fat-menu .spotlight .level-col").append(n)
}e(".fat-menu-container .fat-menu .level-3").hide();
e(".fat-menu-container .fat-menu .level-3.spotlight").show();
e(".fat-menu-container .ui-widget-content ul.call-to-action").show();
e(".fat-menu-container .fat-menu .level-1 .l1-selected").find(".selected").removeClass("selected");
k.find("a").addClass("selected")
},150);
var m=k.siblings();
for(var l=0;
l<m.length;
l++){m[l]._enableHref=false
}if(this._enableHref!=f&&this._enableHref){return true;
this._enableHref=false
}else{this._enableHref=true;
return false
}});
e(".fat-menu-container .fat-menu .level-1 .program li, .fat-menu-container .fat-menu .level-1 .program div").bind("click",function(){var k=e(this);
k.removeClass("selected");
k.find(".selected").removeClass("selected")
});
e(".fat-menu-container .fat-menu .level-1 .program li, .fat-menu-container .fat-menu .level-1 .program.stream").bind("click",function(){var l=e(this),k=l.attr("data-value").split("|"),n=null,p="";
if(x.l2timer!=null){clearTimeout(x.l2timer)
}x.l2timer=setTimeout(function(){if(k.length==2){n=d.globalNavConfigPrograms.items[k[0]].items[k[1]];
p=x.programLevel4Items(n,k[0],k[1],null)
}else{n=d.globalNavConfigPrograms.items[k[0]].items[k[1]].items[k[2]];
p=x.programLevel4Items(n,k[0],k[1],k[2])
}if(d.globalNavConfigPrograms.items[k[0]].items[k[1]].items[0].subprogram==f){e(".fat-menu-container .fat-menu .program .levels").empty();
e(".fat-menu-container .fat-menu .program .levels").append(p)
}else{e(".fat-menu-container .fat-menu .program .level-4").empty();
e(".fat-menu-container .fat-menu .program .level-4").append(p);
e(".fat-menu-container .fat-menu .program .level-4").width("100%")
}e(".fat-menu-container .fat-menu .level-3").hide();
e(".fat-menu-container .fat-menu .level-3.program").show();
e(".fat-menu-container .ui-widget-content ul.call-to-action").hide();
e(".fat-menu-container .fat-menu .program .levels li.l3-selected").off().on("click",function(){var L=e(this),s=L.attr("data-value").split("|"),J=null,K="";
if(s[2]=="null"){J=d.globalNavConfigPrograms.items[s[0]].items[s[1]].items[s[3]]
}else{J=d.globalNavConfigPrograms.items[s[0]].items[s[1]].items[s[2]].items[s[3]]
}K=x.subProgramItems(J);
e(".fat-menu-container .fat-menu .program .level-4").empty();
e(".fat-menu-container .fat-menu .program .level-4").append(K);
e(".fat-menu-container .fat-menu .program .levels li.l3-selected").find(".selected").removeClass("selected");
L.find("a").addClass("selected");
var r=L.siblings();
for(var q=0;
q<r.length;
q++){r[q]._enableHref=false
}if(this._enableHref!=f&&this._enableHref){return true;
this._enableHref=false
}else{this._enableHref=true;
return false
}})
},150);
e(".fat-menu-container .fat-menu .level-1 .program").find(".selected").removeClass("selected");
l.find("a").addClass("selected");
l.find("a").parents("div").addClass("selected");
l.find("a").parents("div").removeClass("selected");
l.find(".selected").removeClass("selected");
var o=l.siblings();
for(var m=0;
m<o.length;
m++){o[m]._enableHref=false
}if(this._enableHref!=f&&this._enableHref){return true;
this._enableHref=false
}else{this._enableHref=true;
return false
}});
e(".fat-menu-container .fat-menu .program .levels li.l3-selected").off().on("click",function(){var l=e(this),k=l.attr("data-value").split("|"),n=null,p="";
if(k[2]=="null"){n=d.globalNavConfigPrograms.items[k[0]].items[k[1]].items[k[3]]
}else{n=d.globalNavConfigPrograms.items[k[0]].items[k[1]].items[k[2]].items[k[3]]
}p=x.subProgramItems(n);
e(".fat-menu-container .fat-menu .program .level-4").empty();
e(".fat-menu-container .fat-menu .program .level-4").append(p);
e(".fat-menu-container .fat-menu .program .levels li.l3-selected").find(".selected").removeClass("selected");
l.find("a").addClass("selected");
var o=l.siblings();
for(var m=0;
m<o.length;
m++){o[m]._enableHref=false
}if(this._enableHref!=f&&this._enableHref){return true;
this._enableHref=false
}else{this._enableHref=true;
return false
}})
}else{e(".fat-menu-container .fat-menu .level-1 .l1-selected").bind("mouseenter",function(){var k=e(this);
if(x.l2timer!=null){clearTimeout(x.l2timer)
}x.l2timer=setTimeout(function(){var o=k.attr("data-value").split("|");
var l=d.globalNavConfigPrograms.items[o[0]].items[o[1]];
if(l.items==f||l.items.length==0){e(".fat-menu-container .fat-menu .level-1 .l1-selected").find(".selected").removeClass("selected");
k.find("a").addClass("selected")
}var m="";
if(l.isDepartment=="true"){if(e(".level-3").hasClass("institue-department")){e(".level-3").removeClass("institue-department");
if(!e(".level-3").hasClass("spotlight")){e(".level-3").addClass("spotlight")
}if(e(".level-3").hasClass("program")){e(".level-3").removeClass("program")
}e(".level-3").toggleClass("program");
e(".level-3").empty();
e(".level-3").append('<div class="dept-level-col" ></div>')
}x.departmentListRendering(l,o[0])
}else{if(l.isMUJInstitute!=f&&l.isMUJInstitute=="true"){var n="";
e(".level-3").empty();
if(e(".level-3").hasClass("spotlight")){e(".level-3").removeClass("spotlight")
}if(!e(".level-3").hasClass("program")){e(".level-3").addClass("program")
}if(!e(".level-3").hasClass("institue-department")){e(".level-3").addClass("institue-department")
}n='<ul class="levels">';
n+=x.instDeptLevel3Items(l,o[0],o[1],null);
n+='</ul><ul class="level-4" >';
n+=x.subInstDeptItems(l.items[0],d.globalNavConfigPrograms.items[o[0]].items[o[1]].link);
n+="</ul></div>";
e(".level-3.program").append(n);
if(e(".fat-menu-container .ui-widget-content .fat-menu .level-3.program a.l3-link").length!=0){e(e(".fat-menu-container .ui-widget-content .fat-menu .level-3.program a.l3-link")[0]).addClass("selected");
e(e(".fat-menu-container .ui-widget-content .fat-menu .level-3.program a.right-arrow")[0]).addClass("selected")
}e(".fat-menu-container .fat-menu .program .levels li.l3-selected").off().on("mouseenter",function(){var s=e(this),p=s.attr("data-value").split("|"),q=null,r="";
if(p[2]=="null"){q=d.globalNavConfigPrograms.items[p[0]].items[p[1]].items[p[3]]
}else{q=d.globalNavConfigPrograms.items[p[0]].items[p[1]].items[p[2]].items[p[3]]
}e(".fat-menu-container .fat-menu .program .level-4").empty();
r=x.subInstDeptItems(q,d.globalNavConfigPrograms.items[p[0]].items[p[1]].link);
e(".fat-menu-container .fat-menu .program .level-4").append(r);
e(".fat-menu-container .fat-menu .program .levels li.l3-selected").find(".selected").removeClass("selected");
s.find("a").addClass("selected")
})
}else{m=x.spotlightLevel3Items(l,o[0]);
e(".fat-menu-container .fat-menu .spotlight .level-col").empty();
e(".fat-menu-container .fat-menu .spotlight .level-col").append(m)
}}if(l.isMUJInstitute!=f&&l.isMUJInstitute=="true"){e(".fat-menu-container .fat-menu .level-3").show()
}else{e(".fat-menu-container .fat-menu .level-3").hide()
}e(".fat-menu-container .fat-menu .level-3.spotlight").show();
e(".fat-menu-container .ui-widget-content ul.call-to-action").show();
e(".fat-menu-container .fat-menu .level-1 .l1-selected").find(".selected").removeClass("selected");
k.find("a").addClass("selected")
},150)
});
e(".fat-menu-container .fat-menu .level-1 .l1-selected").bind("mouseleave",function(){if(x.l2timer!=null){clearTimeout(x.l2timer)
}});
e(".fat-menu-container .fat-menu .level-1 .program li, .fat-menu-container .fat-menu .level-1 .program div").bind("mouseenter",function(){var k=e(this);
k.removeClass("selected");
k.find(".selected").removeClass("selected")
});
e(".fat-menu-container .fat-menu .level-1 .program li, .fat-menu-container .fat-menu .level-1 .program.stream").bind("mouseenter",function(){var l=e(this),k=l.attr("data-value").split("|"),m=null,n="";
if(x.l2timer!=null){clearTimeout(x.l2timer)
}x.l2timer=setTimeout(function(){if(k.length==2){m=d.globalNavConfigPrograms.items[k[0]].items[k[1]];
n=x.programLevel4Items(m,k[0],k[1],null)
}else{m=d.globalNavConfigPrograms.items[k[0]].items[k[1]].items[k[2]];
n=x.programLevel4Items(m,k[0],k[1],k[2])
}if(d.globalNavConfigPrograms.items[k[0]].items[k[1]].items[0].subprogram==f){e(".fat-menu-container .fat-menu .program .levels").empty();
e(".fat-menu-container .fat-menu .program .levels").append(n)
}else{e(".fat-menu-container .fat-menu .program .level-4").empty();
e(".fat-menu-container .fat-menu .program .level-4").append(n);
e(".fat-menu-container .fat-menu .program .level-4").width("100%");
e(".fat-menu-container .ui-widget-content .fat-menu .level-3.program .level-4").columnize({columns:2,height:500,width:380})
}e(".fat-menu-container .fat-menu .level-3").hide();
e(".fat-menu-container .fat-menu .level-3.program").show();
e(".fat-menu-container .ui-widget-content ul.call-to-action").hide();
e(".fat-menu-container .fat-menu .program .levels li.l3-selected").off().on("mouseenter",function(){var r=e(this),o=r.attr("data-value").split("|"),p=null,q="";
if(o[2]=="null"){p=d.globalNavConfigPrograms.items[o[0]].items[o[1]].items[o[3]]
}else{p=d.globalNavConfigPrograms.items[o[0]].items[o[1]].items[o[2]].items[o[3]]
}if(d.globalNavConfigPrograms.items[o[0]].items[o[1]].isMUJInstitute!=f&&d.globalNavConfigPrograms.items[o[0]].items[o[1]].isMUJInstitute=="true"){q=x.subInstDeptItems(p,d.globalNavConfigPrograms.items[o[0]].items[o[1]].link)
}else{q=x.subProgramItems(p)
}e(".fat-menu-container .fat-menu .program .level-4").empty();
e(".fat-menu-container .fat-menu .program .level-4").append(q);
e(".fat-menu-container .fat-menu .program .levels li.l3-selected").find(".selected").removeClass("selected");
r.find("a").addClass("selected")
})
},150);
e(".fat-menu-container .fat-menu .level-1 .program").find(".selected").removeClass("selected");
l.find("a").addClass("selected");
l.find("a").parents("div").addClass("selected")
});
e(".fat-menu-container .fat-menu .program .levels li.l3-selected").off().on("mouseenter",function(){var l=e(this),k=l.attr("data-value").split("|"),m=null,n="";
if(k[2]=="null"){m=d.globalNavConfigPrograms.items[k[0]].items[k[1]].items[k[3]]
}else{m=d.globalNavConfigPrograms.items[k[0]].items[k[1]].items[k[2]].items[k[3]]
}if(d.globalNavConfigPrograms.items[k[0]].items[k[1]].isMUJInstitute!=f&&d.globalNavConfigPrograms.items[k[0]].items[k[1]].isMUJInstitute=="true"){console.log(d.globalNavConfigPrograms.items[k[0]].items[k[1]].link);
n=x.subInstDeptItems(m,d.globalNavConfigPrograms.items[k[0]].items[k[1]].link)
}else{n=x.subProgramItems(m)
}e(".fat-menu-container .fat-menu .program .level-4").empty();
e(".fat-menu-container .fat-menu .program .level-4").append(n);
e(".fat-menu-container .fat-menu .program .levels li.l3-selected").find(".selected").removeClass("selected");
l.find("a").addClass("selected")
})
}e(".level-2 li a").removeAttr("href").css("cursor","pointer");
return true
};
x.renderPrimaryNav=function(p){var k="",g="",n="";
e(".primary-sticky .logo-item .logo").empty();
var o='<a href="'+p.logo.link+'" class="logo" title="'+p.logo.name+'"><img src="'+p.logo.mobileImage+'" alt="'+p.logo.name+'"></a>';
e(".primary-sticky .logo-item .logo").append(o);
e(".manipal-web-view .primary-sticky .primary-sticky-container").empty();
k='<div class="logo"><a href="'+p.logo.link+'" title="'+p.logo.name+'"><img src="'+p.logo.image+'" alt="'+p.logo.name+'"></a></div><ul class="primary-menu">';
for(var h=0;
h<p.items.length;
h++){if(h==0){g="first-menu-item"
}else{if(h<p.length-1){g="last-menu-item"
}else{g=""
}}n="";
if(p.items[h].selected!=f&&p.items[h].selected=="true"){n="selected-inst"
}k+='<li class="'+g+" prinav-menu-items "+n+'"><a href="'+p.items[h].link+'" title="'+p.items[h].name+'">'+p.items[h].name+"</a></li>"
}k+="</ul>";
if(p.applyNow.hideApplyNow!=f&&p.applyNow.hideApplyNow=="false"){var j=e("#currentPagePath-social-connect").val();
k+='<div class="apply-now" ><a href="'+p.applyNow.link+'"  title="'+p.applyNow.name+"\"  onclick=\"s.linkTrackVars='None';s.linkTrackEvents='None';s.tl(this,'o','Apply Now - "+j+' \');"><img src="'+p.applyNow.image+'" alt="'+p.applyNow.name+'" height="70" width="66"></a></div>'
}if(p.applyNow.hideApplyNow!=f&&p.applyNow.hideApplyNow=="true"){e(".top-nav").find("ul").addClass("no-apply-now")
}e(".manipal-web-view .primary-sticky .primary-sticky-container").append(k);
var i=e(".manipal-web-view .primary-sticky .primary-sticky-container .primary-menu").width();
var l=e(".manipal-web-view .primary-sticky .primary-sticky-container .primary-menu .prinav-menu-items").length;
var m=((i/(l/2)));
e(".manipal-web-view .primary-sticky .primary-sticky-container .primary-menu li").css("width",m)
};
x.init=function(){e(".prim-nav-btn-mobile").on("click",function(){e("body").animate({scrollTop:0},"1000",function(){e(".manipal-mobile-content").find(".manipal-web-body-content").removeAttr("style").css("display","none");
e(".manipal-mobile-body-content").toggle("blind","slow");
e(".manipal-web-body-content").toggle("blind","slow")
})
});
if(d.globalNavConfigPrograms!=f){F.empty();
u.empty();
A.empty();
x.loadLevelLinks(d.globalNavConfigPrograms.items);
e(".fat-menu").dialog({autoOpen:false,resizable:false,height:"auto",width:"100%",zIndex:2000,appendTo:".fat-menu-container",modal:true,dialogClass:"fat-menu-dialog",closeOnEscape:true,show:function(){e(this).animate({height:"show"},250,"easeInBack")
},hide:function(){e(this).animate({height:"hide"},250,"easeOutBack")
}});
if(d.globalNavConfigPrograms.length!=0){x.renderPrimaryNav(d.globalNavConfigPrograms)
}e(".fat-menu-dialog").hide();
var g=function(h,j){var i=e(h);
if(x.fatmenuTimer!=null){clearTimeout(x.fatmenuTimer)
}x.fatmenuTimer=setTimeout(function(){var k=0;
if(e(".news-flash-banner").length==0||e(".hide-news-flash").length!=0){k=e(".top-navigation").outerHeight(true)+65
}else{k=e(".top-navigation").outerHeight(true)+e(".news-flash-banner").outerHeight(true)+65
}if(e(".js-primary-sticky_fixed").hasClass("hidden")){e(".fat-menu-container").css("position","absolute");
e(".fat-menu-container").css("top",k+"px")
}else{k=65;
e(".fat-menu-container").css("position","fixed");
e(".fat-menu-container").css("top",k+"px")
}if(d.globalNavConfigPrograms.items[j].items==f&&d.globalNavConfigPrograms.items[j].spotLightImg==f&&d.globalNavConfigPrograms.items[j].callToAction==f){e(".fat-menu").dialog("close");
return false
}if(d.globalNavConfigPrograms.items[j].items.length==0&&d.globalNavConfigPrograms.items[j].spotLightImg.length==0&&d.globalNavConfigPrograms.items[j].callToAction.length==0){e(".fat-menu").dialog("close");
return false
}if(e(".fat-menu").dialog("isOpen")===false){e(".fat-menu").dialog("open");
e(".container-wrapper.primary-sticky").css("z-index","1002");
var l=e(".fat-menu-dialog").css("left");
var m=l.split("px");
l=parseInt(m[0])+4;
l=l+"px";
e(".fat-menu-dialog").css("left",l)
}if(x.timer!=null){clearTimeout(x.timer)
}if(!i.hasClass("fat-menu-dialog")){c=j;
x.timer=setTimeout(function(){x.renderFatMenu(c);
if(e(".fat-menu-container .ui-widget-content .fat-menu .level-1 li:eq(1)").find(".l2-link:eq(0)").length!=0){e(".fat-menu-container .ui-widget-content .fat-menu .level-1 li:eq(1)").find("div").addClass("selected");
e(".fat-menu-container .ui-widget-content .fat-menu .level-1 li:eq(1)").find(".l2-link:eq(0)").addClass("selected")
}else{e(".fat-menu-container .ui-widget-content .fat-menu .level-1 li:eq(1)").find(".l1-link:eq(0)").addClass("selected")
}if(e(".fat-menu-container .ui-widget-content .fat-menu .level-3.program a.l3-link").length!=0){e(e(".fat-menu-container .ui-widget-content .fat-menu .level-3.program a.l3-link")[0]).addClass("selected");
e(e(".fat-menu-container .ui-widget-content .fat-menu .level-3.program a.right-arrow")[0]).addClass("selected")
}i.addClass("selected");
i.siblings().removeClass("selected")
},150)
}},350)
};
if(y){e(".primary-sticky .primary-menu li.prinav-menu-items, .fat-menu-dialog").bind("click",function(j){g(this);
var i=e(this).siblings();
for(var h=0;
h<i.length;
h++){i[h]._enableHref=false
}if(this._enableHref!=f&&this._enableHref){return true;
this._enableHref=false
}else{this._enableHref=true;
return false
}})
}else{e(".primary-sticky .primary-menu li.prinav-menu-items, .fat-menu-dialog").bind("mouseenter",function(h){var i=0;
if(!e(this).hasClass("prinav-menu-items")){i=e(".primary-sticky .primary-menu li.prinav-menu-items.selected").index()
}else{i=e(this).index()
}g(this,i)
})
}if(y){e(document).on("click",function(h){if(e(h.target).attr("class")=="prinav-menu-items"||e(h.target).parent().attr("class")=="prinav-menu-items"||e(h.target).attr("class")=="fat-menu-dialog"||e(h.target).parent().attr("class")=="fat-menu-dialog"){return false
}var i=e(this);
if(x.timer!=null){clearTimeout(x.timer)
}if(x.fatmenuTimer!=null){clearTimeout(x.fatmenuTimer)
}x.timer=setTimeout(function(){e(".fat-menu").dialog("close");
e(".primary-sticky li.prinav-menu-items").removeClass("selected");
e(".container-wrapper.primary-sticky").css("z-index","899");
var k=e(".primary-sticky li.prinav-menu-items");
for(var j=0;
j<k.length;
j++){k[j]._enableHref=false
}},600)
})
}else{e(".primary-sticky li.prinav-menu-items, .fat-menu-dialog").bind("mouseleave",function(){var h=e(this);
if(x.timer!=null){clearTimeout(x.timer)
}if(x.fatmenuTimer!=null){clearTimeout(x.fatmenuTimer)
}x.timer=setTimeout(function(){e(".fat-menu").dialog("close");
e(".primary-sticky li.prinav-menu-items").removeClass("selected");
e(".container-wrapper.primary-sticky").css("z-index","899")
},600)
})
}}return this
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
(function(d,e,f){d.heroCarousel=(function(){function a(){var b=this;
var c=e(window).width();
this.init=function(){if(d.heroCarouselConfig!=f){if(c>767){e(function(){b.HeroCarousel()
});
b.flexSliderDom()
}else{b.mobileHeroCarousel()
}}return this
};
this.HeroCarousel=function(){e(".hero-nav").show();
e(".hero-container").flexslider({animation:"slide",slideshowSpeed:"6000",directionNav:false,slideshow:true,controlsContainer:".hero-nav-container",animationLoop:true,pauseOnHover:true})
};
this.flexSliderDom=function(){e(".hero-container ul.slides").empty();
var l=Object.keys(d.heroCarouselConfig).length;
e.each(d.heroCarouselConfig,function(h,r){var s="",t="",i="",g="";
if(e.trim(r.go_link)!=""){if(r.go_linkType=="false"){s="<a class='hero-go "+r.text_color+"' href='"+r.go_link+"' title='"+r.link_title+"'></a>";
i="<a href='"+r.go_link+"' title='"+r.link_title+"'>";
g="</a>"
}else{s="<a class='hero-go "+r.text_color+"' href='"+r.go_link+"' title='"+r.link_title+"' target='_blank'></a>";
i="<a href='"+r.go_link+"' title='"+r.link_title+"' target='_blank'>";
g="</a>"
}}if(r.lowerCaseAllowed=="true"){t="hero-lower-case-text"
}if(r.heading==f){r.heading.heading=""
}if(r.heading_post_text==f){r.heading_post_text=""
}if(r.subheading==f){r.subheading=""
}var j="";
if(l==1&&document.location.href.indexOf("/muj/")!=-1){j='style="bottom: 29.5%;"'
}e(".hero-container ul.slides").append("<li><div class='hero-parent' "+j+"><div class='hero-slider-container clearfix'><div class='hero-content-container clearfix'><h1 class='"+r.heading_css+" "+r.text_color+" "+t+"'>"+r.heading+"</h1><div class='"+r.subheading_css+" "+t+" "+r.text_color+((e.trim(r.subheading)=="")?" hide":"")+"'>"+r.subheading+"</div><div class='text-container'>"+s+"<p class='"+r.small_css+" "+r.text_color+"'>"+i+r.text_line1+g+"</p><p class='"+r.small_css+" "+r.text_color+"'>"+i+r.text_line2+g+"</p></div></div></div></div><img src='"+r.image+"' alt='"+r.alt_content+"' /></li>")
});
b.emptyIcon();
var m=e(".hero-content-container .hero-head-text");
var k=e(".hero-content-container .hero-subhead-text");
var n=e(".hero-content-container .hero-small-text");
b.adjustData(m,20);
b.adjustData(k,41);
b.adjustData(n,50)
};
this.emptyIcon=function(){e.each(e(".hero-parent .text-container a"),function(l,j){var k=e.trim(e(this).attr("href"));
if(k==" "||k==".html"){e(this).remove()
}})
};
this.adjustData=function(j,i){e.each(j,function(m){var n=e(j)[m],h=e(n).text(),g=h.length;
if(g>i){e(n).text(h.substr(0,i))
}})
};
this.mobileHeroCarousel=function(){e(".hero-nav").hide();
var n=d.heroCarouselConfig;
var l="";
if(e.trim(n.slider1.go_link)!=""){if(e.trim(n.slider1.go_linkType)=="false"){l="<a class='hero-go "+n.slider1.text_color+"' href='"+n.slider1.go_link+"' title='"+n.slider1.link_title+"'></a>"
}else{l="<a class='hero-go "+n.slider1.text_color+"' href='"+n.slider1.go_link+"' title='"+n.slider1.link_title+"' target='_blank'></a>"
}}if(n.slider1.subheading==f){n.slider1.subheading=""
}if(n.slider1.heading_post_text==f){n.slider1.heading_post_text=""
}if(n.slider1.heading==f){n.slider1.heading=""
}e(".mobile-hero-container .mobile-hero-content").empty();
if(n.slider1.mobileimage!=null&&n.slider1.mobileimage!=""&&n.slider1.mobileimage!=f){e(".mobile-hero-container .mobile-hero-content").append("<li class='hc-mobileimage'><img data-src='"+n.slider1.mobileimage+"' class='hero-mobile-img  lazyload' /><div class='hero-mobile-content-container'><h3 class='"+n.slider1.text_color+"'>"+n.slider1.heading+"<span>"+n.slider1.heading_post_text+"</span></h3><p class='hero-mobile-info "+n.slider1.text_color+"'>"+n.slider1.subheading+"</p>"+l+"</div></li>")
}else{if(n.slider1.mobileimage==""&&n.slider1.mobilebgcolor!=""){e(".mobile-hero-container .mobile-hero-content").append("<li class='hc-bgcolor' style='background-color:"+n.slider1.mobilebgcolor+"'><div class='hero-mobile-content-container'><h3 class='"+n.slider1.text_color+"'>"+n.slider1.heading+"<span>"+n.slider1.heading_post_text+"</span></h3><p class='hero-mobile-info "+n.slider1.text_color+"'>"+n.slider1.subheading+"</p>"+l+"</div></li>")
}else{if(!n.slider1.mobileimage&&!n.slider1.mobilebgcolor){e(".mobile-hero-container .mobile-hero-content").append("<li><img data-src='"+n.slider1.img_mobile+"' class='hero-mobile-image lazyload' /><div class='hero-mobile-content-container'><h3 class='"+n.slider1.text_color+"'>"+n.slider1.heading+"<span>"+n.slider1.heading_post_text+"</span></h3><p class='hero-mobile-info "+n.slider1.text_color+"'>"+n.slider1.subheading+"</p>"+l+"</div></li>")
}}}var o=e(".hero-content-container .hero-head-text");
var m=e(".hero-content-container .hero-subhead-text");
var p=e(".hero-content-container .hero-small-text");
b.adjustData(o,20);
b.adjustData(m,41);
b.adjustData(p,50)
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(d,e,f){d.rfiPopupFormPopupForm=(function(){function a(){var b=this,h=true;
this.checkConfigAvailable=function(g){if(g==f){return false
}else{return true
}};
this.associatedDropdown=function(g,j){if(j.items!=f){switch(g){case"country":b.populateDropdown("city","smart-city",j.items);
e(".citycode").prop("placeholder",j.isdCode);
break;
case"city":b.populateDropdown("location","smart-location",j.items);
break;
case"level":b.populateDropdown("discipline","smart-discipline",j.items);
break;
case"discipline":b.populateDropdown("program","smart-program",j.items);
break
}}};
this.populateDropdown=function(g,m,n){if(n[0].singleValue=="true"){e(".rfi-pop-dialog #hid"+g).val(n[0].value);
if(g=="level"){e("#programLevelFieldId").hide()
}else{if(g=="discipline"){e("#disciplineFieldId").hide()
}else{if(g=="program"){e("#programFieldId").hide()
}}}b.associatedDropdown(g,n[0]);
return
}else{if(g=="level"){e("#programLevelFieldId").show()
}else{if(g=="discipline"){e("#disciplineFieldId").show()
}else{if(g=="program"){e("#programFieldId").show()
}}}}e(".rfi-pop-dialog #"+g).empty().append("<option value=''>Select "+g+"</option>");
if(!b.checkConfigAvailable(n)){return null
}var o="";
for(var p=0;
p<n.length;
p++){o="<option value='"+n[p].value+"'>"+n[p].name+"</option>";
e(".rfi-pop-dialog #"+g).append(o)
}e(".rfi-pop-dialog #rfi-form").on("blur","."+m,function(j){for(var l=0;
l<n.length;
l++){var k=e.trim(e(this).val().toLowerCase());
var i=e.trim(n[l].name.toLowerCase());
e(".rfi-pop-dialog #hid"+g).val(e(this).siblings(".myData").val());
if(k==i){b.associatedDropdown(g,n[l])
}}})
};
this.initializeFieldPopulate=function(l,g,m){var n=d.rfiPopupFormConfig;
if(e(".rfi-pop-dialog #"+l).length>0){e(".rfi-pop-dialog #"+l).combobox({name:l,eleCls:"smart-"+l});
e(".smart-"+l).prop("placeholder",n.placeholder[l])
}if(e(".rfi-pop-dialog #"+g).length>0){e(".rfi-pop-dialog #"+g).combobox({name:g,eleCls:"smart-"+g});
e(".smart-"+g).prop("placeholder",n.placeholder[g])
}if(e(".rfi-pop-dialog #"+m).length>0){e(".rfi-pop-dialog #"+m).combobox({name:m,eleCls:"smart-"+m});
e(".smart-"+m).prop("placeholder",n.placeholder[m])
}if(n[l]!=f&&n[l].length>0){b.populateDropdown(l,"smart-"+l,n[l])
}else{if(n[g]!=f&&n[g].length>0){b.populateDropdown(g,"smart-"+g,n[g])
}else{if(n[m]!=f&&n[m].length>0){b.populateDropdown(m,"smart-"+m,n[m])
}}}};
this.emailValidate=function(){var g=e(".rfi-pop-dialog #rfi-form .rfi-info, .rfi-pop-dialog .ui-widget input, .rfi-pop-dialog .phonewithcode input");
e(g).blur(function(Q){var aa=e(this),L=e("#rfi-form input[name='studentName']").val(),M=e("#rfi-form input[name='referralName']").val(),Z=e("#rfi-form input[name='email']").val(),ag=e("#rfi-form input[name='mobileNumber']").val(),J=e("#rfi-form input[name='referralEmailId']").val(),S=e("#rfi-form input[name='referralMobile']").val(),ad=e("#rfi-form input[name='zipCode']").val(),ae=e("#rfi-form input[name='eligibility']").val(),R=e("#rfi-form input[name='income']").val(),Y=e("#rfi-form input[name='experience']").val(),ac=e("#rfi-form input[name='company']").val(),V=e("#rfi-form input[name='nationality']").val(),W=e("#hidcountry").val(),U=e("#hidcity").val(),O=e("#hidlocation").val(),af=e("#hidcourse").val(),ab=e("#rfi-form .phonewithcode .citycode").val(),K=e("#rfi-form .phonewithcode .altcitycode").val(),T=e("#rfi-form .phonewithcode .phone").val(),ah=e("#rfi-form .phonewithcode .altphone").val(),ai=e("#hidlevel").val(),P=e("#hiddiscipline").val(),aj=e("#hidprogram").val(),X=e("#rfi-form input[name='query']").val(),N="";
N={name:studentName,refname:M,email:Z,mobileNumber:ag,refemail:J,refmobile:S,zipCode:ad,eligibility:ae,income:R,experience:Y,company:ac,nationality:V,countryId:W,cityId:U,locationId:O,course:af,isdCode:ab,alternateIsdCode:K,studentPhone:T,alternateMobileNumber:ah,programLevelId:ai,streamId:P,programId:aj,query:X,currentPagePath:currentPagePath};
if(aa.prop("name")=="studentName"){return
}e.ajax({type:"POST",data:N,url:"/bin/manipal/lppartialsave",dataType:"jsonp"})
});
return false
};
this.formValidation=function(){e(".request4info #rfi-form .rfi-info, .request4info .ui-widget input, .request4info .phonewithcode input").focus(function(){var g=e(this);
g.next("label.custom-error").remove();
g.next("label.error").remove();
g.removeClass("error")
});
e(".rfi-pop-dialog #rfi-form .dropdown-options").off().on("click",function(){var g=e(this);
g.parent().siblings(".default-state").removeClass("error");
g.parent().siblings(".default-state").addClass("selected")
});
e(".rfi-pop-dialog #rfi-form .rfiPopupForm-submit").off().on("click",function(g){g.preventDefault();
if(e(".rfi-pop-dialog #country").siblings(".custom-combobox").find("input").val()==""){e(".rfi-pop-dialog #country").siblings(".custom-combobox").find("input").after('<label for="country" generated="true" class="custom-error">Please select a country</label>');
e(".rfi-pop-dialog #country").siblings(".custom-combobox").find("input").addClass("error")
}if(e(".rfi-pop-dialog #city").siblings(".custom-combobox").find("input").val()==""){e(".rfi-pop-dialog #city").siblings(".custom-combobox").find("input").after('<label for="city" generated="true" class="custom-error">Please select a city</label>');
e(".rfi-pop-dialog #city").siblings(".custom-combobox").find("input").addClass("error")
}if(e(".rfi-pop-dialog #level").siblings(".custom-combobox").find("input").val()==""){e(".rfi-pop-dialog #level").siblings(".custom-combobox").find("input").after('<label for="level" generated="true" class="custom-error">Please select a level</label>');
e(".rfi-pop-dialog #level").siblings(".custom-combobox").find("input").addClass("error")
}if(e(".rfi-pop-dialog #discipline").siblings(".custom-combobox").find("input").val()==""){e(".rfi-pop-dialog #discipline").siblings(".custom-combobox").find("input").after('<label for="discipline" generated="true" class="custom-error">Please select a discipline</label>');
e(".rfi-pop-dialog #discipline").siblings(".custom-combobox").find("input").addClass("error")
}if(e(".rfi-pop-dialog #program").siblings(".custom-combobox").find("input").val()==""){e(".rfi-pop-dialog #program").siblings(".custom-combobox").find("input").after('<label for="program" generated="true" class="custom-error">Please select a program</label>');
e(".rfi-pop-dialog #program").siblings(".custom-combobox").find("input").addClass("error")
}if(e(".rfi-pop-dialog #location").siblings(".custom-combobox").find("input").val()==""){e(".rfi-pop-dialog #location").siblings(".custom-combobox").find("input").after('<label for="location" generated="true" class="custom-error">Please select a location</label>');
e(".rfi-pop-dialog #location").siblings(".custom-combobox").find("input").addClass("error")
}if(e(".rfi-pop-dialog #course").siblings(".custom-combobox").find("input").val()==""){e(".rfi-pop-dialog #course").siblings(".custom-combobox").find("input").after('<label for="location" generated="true" class="custom-error">Please select a course</label>');
e(".rfi-pop-dialog #course").siblings(".custom-combobox").find("input").addClass("error")
}if(!e(".rfi-pop-dialog #rfiPopupForm-form").valid()){e(".rfiPopupForm-submit").prop("disabled","disabled");
if(h){e(".rfi-pop-dialog #rfiPopupForm-form").submit();
h=false
}}});
this.mobileValidate=function(){var g=e(".request4info .phonewithcode .mobile, .request4info .phonewithcode .rfi_mobile_number");
var j=e(".request4info .phonewithcode .citycode, .request4info .phonewithcode .rfi_city_code");
e(g).blur(function(){if(e.trim(e(this).val()).length<=0){return false
}if((j.val()=="+91"&&e.trim(e(this).val()).length!=10)||!/^\d*$/.test(e(this).val())){if(e(this).hasClass("error")){e(this).next("label.error").remove();
e(this).next("label.custom-error").remove();
e(this).after('<label for="email" generated="true" class="error">Please enter 10 digits</label>')
}else{e(this).after('<label for="email" generated="true" class="error">Please enter 10 digits</label>');
e(this).addClass("error")
}}else{if((e.trim(e(this).val()).length<7||e.trim(e(this).val()).length>11)||!/^\d*$/.test(e(this).val())){if(e(this).hasClass("error")){e(this).next("label.error").remove();
e(this).next("label.custom-error").remove();
e(this).after('<label for="email" generated="true" class="error">Please enter valid number</label>')
}else{e(this).after('<label for="email" generated="true" class="error">Please enter valid number</label>');
e(this).addClass("error")
}}}})
};
e(".rfi-pop-dialog #rfiPopupForm-form").validate({onfocusout:false,onkeyup:false,rules:{email:{required:true},referralEmailId:{required:true},studentName:{required:true,digits:false},zipCode:{required:true,digits:false},eligibility:{required:true,digits:false},income:{required:true,digits:false},experience:{required:true,digits:false},company:{required:true,digits:false},nationality:{required:true,digits:false},isdCode:{required:true},studentPhone:{required:true,maxlength:12,digits:true},alternateIsdCode:{required:true,maxlength:12,digits:true},alternateMobileNumber:{required:true,maxlength:12,digits:true},query:{required:true,maxlength:100},course:{required:true},stream:{required:true},location:{required:true},ipa:{required:true},cityCode:{required:true},mobileNumber:{required:true,checklength:true,digits:true},referralName:{required:true},referralMobile:{required:true,checklength:true}},messages:{studentName:{required:"Please enter your Name"},email:{required:"Please enter a valid email"},referralEmailId:{required:"Please enter a valid email"},refstudentname:{required:"Please enter your Name"},zipCode:{required:"Please enter valid zipcode"},eligibility:{required:"Please enter valid data",eligibility:"Please enter valid data"},income:{required:"Please enter valid income",income:"Please enter valid income"},experience:{required:"Please enter valid data",experience:"Please enter valid data"},company:{required:"Please enter valid data",company:"Please enter valid data"},nationality:{required:"Please enter valid data",nationality:"Please enter valid data"},studentPhone:{required:"Please enter valid number",studentPhone:"Please enter valid number"},course:{required:"Please enter correct info"},stream:{required:"Please enter correct data"},location:{required:"Please enter correct data"},ipa:{required:"please enter correct data"},cityCode:{required:"please enter correct data"},mobileNumber:{required:"please enter correct number"},alternateMobileNumber:{required:"Please enter valid alt number"},query:{required:"Please enter your Query"},referralName:{required:"Please enter correct data"},referralMobile:{required:"Please enter correct data"}}})
};
this.emailValidateSureVerify=function(){e(".rfi-pop-dialog .email_field_rfi , .rfi-pop-dialog .referral_email_field").blur(function(l){var g=(e(l.target).length==0)?"":e(l.target),n=e(this);
var m=/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
e(n).next(".custom-error").remove();
e(n).removeClass("error");
if(!m.test(g.val())){e(n).after('<label for="email" generated="true" class="custom-error">Please enter a valid email</label>');
e(n).addClass("error")
}});
return false
};
jQuery.validator.addMethod("exactlength",function(k,l,g){return this.optional(l)||k.length==g
},jQuery.format("Please enter {0} digits"));
var c=0;
jQuery.validator.addMethod("checklength",function(n,o,m){var p=e(".request4info .phonewithcode .citycode, .request4info .phonewithcode .rfi_city_code");
var g=true;
if(p.val()=="+91"&&e.trim(n).length!=10){g=false;
c=1
}else{if((e.trim(n).length<7||e.trim(n).length>11)){g=false;
c=2
}}return g
},function(m,n,g){console.log(c);
var l="Please enter valid number";
if(c==1){l="Please enter 10 digits"
}else{if(c==2){l="Please enter valid number"
}}return l
});
this.init=function(){if(d.rfiPopupFormConfig==f){return null
}e(document).ready(function(){e(".rfi-pop-dialog .rfiPopupForm-radio-link").hide();
e(e(".rfi-pop-dialog .nav-tabs li")[1]).hide();
b.initializeFieldPopulate("country","city","location");
b.initializeFieldPopulate("level","discipline","program");
b.initializeFieldPopulate("course");
b.initializeFieldPopulate("cityind");
b.initializeFieldPopulate("countryind");
b.initializeFieldPopulate("genericDetails");
b.formValidation();
var g=document.getElementById("firstName").innerHTML;
var l=document.getElementById("eMail").innerHTML;
var m=document.getElementById("mobilePhoneDiv").innerHTML;
var n=document.getElementById("hidcombinationFieldName").value;
if(n=="CombinationOne"){document.getElementById("firstName").innerHTML=m;
document.getElementById("eMail").innerHTML=l;
document.getElementById("mobilePhoneDiv").innerHTML=g
}else{if(n=="CombinationTwo"){document.getElementById("firstName").innerHTML=l;
document.getElementById("eMail").innerHTML=g;
document.getElementById("mobilePhoneDiv").innerHTML=m
}else{if(n=="CombinationThree"){document.getElementById("firstName").innerHTML=g;
document.getElementById("eMail").innerHTML=m;
document.getElementById("mobilePhoneDiv").innerHTML=l
}else{}}}b.emailValidate();
b.emailValidateSureVerify();
b.mobileValidate();
e(document).ready(function(){e("#rfi-popup-container").dialog({autoOpen:false,resizable:false,height:"900",width:"100%",zIndex:2000,modal:true,dialogClass:"noTitle",closeOnEscape:true});
e("#rfi-popup-container").dialog("open")
})
});
return this
}
}if(jQuery(window).width()<760){setTimeout(function(){jQuery(".request4info").hide()
},10)
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(d,e,f){d.rfi=(function(){function a(){var b=this,c=true;
this.checkConfigAvailable=function(h){if(h==f){return false
}else{return true
}};
this.associatedDropdown=function(j,l){if(l.items!=f){switch(j){case"country":var k=l.isdCode;
if(k.indexOf("+")===false||k.indexOf("+")===-1){k="+"+k
}e(".rfi_city_code").prop("placeholder",k).prop("value",k);
e("#city").empty();
e("#location").empty();
e(".smart-city").prop("value","");
e(".smart-location").prop("value","");
b.populateDropdown("city","smart-city",l.items);
break;
case"city":e(".smart-location").prop("value","");
e("#location").empty();
b.populateDropdown("location","smart-location",l.items);
break;
case"level":e(".smart-discipline").prop("value","");
e(".smart-program").prop("value","");
e("#program").empty();
e("#discipline").empty();
b.populateDropdown("discipline","smart-discipline",l.items);
break;
case"discipline":e(".smart-program").prop("value","");
e("#program").empty();
b.populateDropdown("program","smart-program",l.items);
break
}}else{if(j=="countryind"){var k=l.isdCode;
if(k.indexOf("+")===false||k.indexOf("+")===-1){k="+"+k
}e(".rfi_city_code").prop("placeholder",k).prop("value",k)
}}};
this.populateDropdown=function(l,m,n){e("#"+l).empty().append("<option value=''>Select "+l+"</option>");
if(n[0].singleValue=="true"){e(".request4info #"+l).siblings(".custom-combobox").find("input.custom-combobox-input").val(n[0].value);
e("#hid"+l).val(n[0].value);
if(l=="level"){e("#programLevelFieldId").hide()
}else{if(l=="discipline"){e("#disciplineFieldId").hide()
}else{if(l=="program"){e("#programFieldId").hide()
}}}b.associatedDropdown(l,n[0]);
return
}else{if(l=="level"){e("#programLevelFieldId").show()
}else{if(l=="discipline"){e("#disciplineFieldId").show()
}else{if(l=="program"){e("#programFieldId").show()
}}}}if(!b.checkConfigAvailable(n)){return null
}var o="";
for(var p=0;
p<n.length;
p++){o="<option value='"+n[p].value+"'>"+n[p].name+"</option>";
e("#"+l).append(o)
}e(".request4info #rfi-form").on("change","."+m,function(i){for(var g=0;
g<n.length;
g++){var j=e.trim(e(this).val().toLowerCase());
var h=e.trim(n[g].name.toLowerCase());
e("#hid"+l).val(e(this).siblings(".myData").val());
if(j==h){b.associatedDropdown(l,n[g])
}}})
};
this.initializeFieldPopulate=function(l,k,m){var n=d.rfiConfig;
if((e(".news-flash-banner").length>0)&&(!e(".news-flash-banner").hasClass("hide-news-flash"))){e(".request4info.manipal-web-view").addClass("newsflashShowing")
}if(e(".request4info #"+l).length>0){e(".request4info #"+l).combobox({name:l,eleCls:"smart-"+l});
e(".smart-"+l).prop("placeholder",n.placeholder[l]).addClass("rfi_"+l)
}if(e(".request4info #"+k).length>0){e(".request4info #"+k).combobox({name:k,eleCls:"smart-"+k});
e(".smart-"+k).prop("placeholder",n.placeholder[k]).addClass("rfi_"+k)
}if(e(".request4info #"+m).length>0){e(".request4info #"+m).combobox({name:m,eleCls:"smart-"+m});
e(".smart-"+m).prop("placeholder",n.placeholder[m]).addClass("rfi_"+m)
}if(n[l]!=f&&n[l].length>0){b.populateDropdown(l,"smart-"+l,n[l])
}else{if(n[k]!=f&&n[k].length>0){b.populateDropdown(k,"smart-"+k,n[k])
}else{if(n[m]!=f&&n[m].length>0){b.populateDropdown(m,"smart-"+m,n[m])
}}}};
this.emailValidate=function(){var h=e(".request4info #rfi-form .rfi-info, .request4info .ui-widget input, .request4info .phonewithcode input");
e(h).blur(function(M){var aa=e(this),af=e(".request4info #rfi-form input[name='studentName']").val(),ah=e(".request4info #rfi-form input[name='referralName']").val(),W=e(".request4info #rfi-form input[name='email']").val(),am=e(".request4info #rfi-form input[name='mobileNumber']").val(),ab=e(".request4info #rfi-form input[name='referralEmailId']").val(),T=e(".request4info #rfi-form input[name='referralMobile']").val(),N=e(".request4info #rfi-form input[name='captcha']").val(),ai=e(".request4info #rfi-form input[name='zipCode']").val(),aj=e(".request4info #rfi-form input[name='eligibility']").val(),P=e(".request4info #rfi-form input[name='income']").val(),V=e(".request4info #rfi-form input[name='experience']").val(),ad=e(".request4info #rfi-form input[name='company']").val(),X=e(".request4info #rfi-form input[name='nationality']").val(),S=e(".request4info #hidcountry").val(),R=e(".request4info #hidcity").val(),O=e(".request4info #hidlocation").val(),al=e(".request4info #hidcourse").val(),Z=e(".request4info #rfi-form .phonewithcode .citycode").val(),ac=e(".request4info #rfi-form .phonewithcode .altcitycode").val(),U=e(".request4info #rfi-form .phonewithcode .phone").val(),an=e(".request4info #rfi-form .phonewithcode .altphone").val(),ao=e(".request4info #hidlevel").val(),Q=e(".request4info #hiddiscipline").val(),ap=e(".request4info #hidprogram").val(),Y=e(".request4info #rfi-form input[name='query']").val(),ae=e(".request4info #rfi-form input[name='custom1']").val(),ag=e(".request4info #rfi-form input[name='custom2']").val(),ak=e(".request4info #hidgenericDetails").val(),g="";
g={name:af,refname:ah,email:W,mobileNumber:am,refemail:ab,refmobile:T,zipCode:ai,eligibility:aj,income:P,experience:V,company:ad,nationality:X,countryId:S,cityId:R,locationId:O,course:al,isdCode:Z,alternateIsdCode:ac,studentPhone:U,alternateMobileNumber:an,programLevelId:ao,streamId:Q,programId:ap,query:Y,custom1:ae,custom2:ag,genericTableId:ak,currentPagePath:currentPagePath};
if(e.trim(aa.val())==""){if(!aa.hasClass("error")&&!aa.hasClass("custom-error")){b.printErrorMsg(aa)
}}else{aa.removeClass("error").siblings("label.custom-error, label.error").remove()
}if(aa.prop("name")=="studentName"){return
}e.ajax({type:"POST",data:g,url:"/bin/manipal/lppartialsave",dataType:"jsonp"})
});
return false
};
this.printErrorMsg=function(h){if(h.hasClass("rfi_student_name")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter your name</label>')
}if(h.hasClass("rfi_ref_student_name")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter your name</label>')
}if(h.hasClass("rfi_zip_code")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter valid zipcode</label>')
}if(h.hasClass("rfi_eligibility")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter valid data</label>')
}if(h.hasClass("rfi_income")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter valid income</label>')
}if(h.hasClass("rfi_experience")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter valid data</label>')
}if(h.hasClass("rfi_company")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter valid data</label>')
}if(h.hasClass("rfi_nationality")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter valid data</label>')
}if(h.hasClass("rfi_student_phone")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter valid number</label>')
}if(h.hasClass("rfi_city_code")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter correct data</label>')
}if(h.hasClass("rfi_mobile_number")){h.addClass("error").after('<label for="mobileNumber" generated="true" class="error">Please enter correct number</label>')
}if(h.hasClass("rfi_alt_mobile_number")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter valid alt number</label>')
}if(h.hasClass("rfi_query")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter your query</label>')
}if(h.hasClass("rfi_ref_mobile")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter correct data</label>')
}if(h.hasClass("rfi_country")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please select a country</label>')
}if(h.hasClass("rfi_countryind")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please select a country</label>')
}if(h.hasClass("rfi_city")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please select a city</label>')
}if(h.hasClass("rfi_cityind")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please select a city</label>')
}if(h.hasClass("rfi_level")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please select a level</label>')
}if(h.hasClass("rfi_discipline")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please select a discipline</label>')
}if(h.hasClass("rfi_program")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please select a program</label>')
}if(h.hasClass("rfi_location")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please select a location</label>')
}if(h.hasClass("rfi_course")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please select a course</label>')
}if(h.hasClass("rfi_stateInd")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please select a state</label>')
}};
this.mobileValidate=function(){var i=e(".request4info .phonewithcode .mobile, .request4info .phonewithcode .rfi_mobile_number");
var j=e(".request4info .phonewithcode .citycode, .request4info .phonewithcode .rfi_city_code");
e(i).blur(function(){if(e.trim(e(this).val()).length<=0){return false
}if((j.val()=="+91"&&e.trim(e(this).val()).length!=10)||!/^\d*$/.test(e(this).val())){if(e(this).hasClass("error")){e(this).next("label.error").remove();
e(this).next("label.custom-error").remove();
e(this).after('<label for="email" generated="true" class="error">Please enter 10 digits</label>')
}else{e(this).after('<label for="email" generated="true" class="error">Please enter 10 digits</label>');
e(this).addClass("error")
}}else{if((e.trim(e(this).val()).length<7||e.trim(e(this).val()).length>11)||!/^\d*$/.test(e(this).val())){if(e(this).hasClass("error")){e(this).next("label.error").remove();
e(this).next("label.custom-error").remove();
e(this).after('<label for="email" generated="true" class="error">Please enter valid number</label>')
}else{e(this).after('<label for="email" generated="true" class="error">Please enter valid number</label>');
e(this).addClass("error")
}}}})
};
this.formValidation=function(){var i=e(".request4info #rfi-form .phonewithcode .citycode").val();
if(i.indexOf("+")===false||i.indexOf("+")===-1){e(".request4info #rfi-form .phonewithcode .citycode").val("+"+i)
}e(".request4info #rfi-form .rfi-info, .request4info .ui-widget input, .request4info .phonewithcode input").focus(function(){var g=e(this);
g.next("label.custom-error").remove();
g.next("label.error").remove();
g.removeClass("error")
});
e(".request4info #rfi-form .dropdown-options").off().on("click",function(){var g=e(this);
g.parent().siblings(".default-state").removeClass("error");
g.parent().siblings(".default-state").addClass("selected")
});
e(".request4info #rfi-form .rfi-submit").off().on("click",function(h){h.preventDefault();
var w=e(".request4info #country").siblings(".custom-combobox").find("input.custom-combobox-input"),F=e(".request4info #countryind").siblings(".custom-combobox").find("input.custom-combobox-input"),D=e(".request4info #city").siblings(".custom-combobox").find("input.custom-combobox-input"),x=e(".request4info #cityind").siblings(".custom-combobox").find("input.custom-combobox-input"),E=e(".request4info #level").siblings(".custom-combobox").find("input.custom-combobox-input"),v=e(".request4info #discipline").siblings(".custom-combobox").find("input.custom-combobox-input"),B=e(".request4info #program").siblings(".custom-combobox").find("input.custom-combobox-input"),z=e(".request4info #location").siblings(".custom-combobox").find("input.custom-combobox-input"),C=e(".request4info #stateInd").siblings(".custom-combobox").find("input.custom-combobox-input"),g=e(".request4info #course").siblings(".custom-combobox").find("input.custom-combobox-input");
if(e(w).parent().parent().is(":visible")){if(e(w).val()==""&&!e(w).hasClass("error")){e(w).after('<label for="country" generated="true" class="custom-error">Please select a country</label>');
e(w).addClass("error")
}}if(e(F).parent().parent().is(":visible")){if(e(F).val()==""&&!e(F).hasClass("error")){e(F).after('<label for="country" generated="true" class="custom-error">Please select a country</label>');
e(F).addClass("error")
}}if(e(D).parent().parent().is(":visible")){if(e(D).val()==""&&!e(D).hasClass("error")){e(D).after('<label for="city" generated="true" class="custom-error">Please select a city</label>');
e(D).addClass("error")
}}if(e(x).parent().parent().is(":visible")){if(e(x).val()==""&&!e(x).hasClass("error")){e(x).after('<label for="city" generated="true" class="custom-error">Please select a city</label>');
e(x).addClass("error")
}}if(e(E).parent().parent().is(":visible")){if(e(E).val()==""&&!e(E).hasClass("error")){e(E).after('<label for="level" generated="true" class="custom-error">Please select a level</label>');
e(E).addClass("error")
}}if(e(v).parent().parent().is(":visible")){if(e(v).val()==""&&!e(v).hasClass("error")){e(v).after('<label for="discipline" generated="true" class="custom-error">Please select a discipline</label>');
e(v).addClass("error")
}}if(e(C).parent().parent().is(":visible")){if(e(C).val()==""&&!e(C).hasClass("error")){e(C).after('<label for="city" generated="true" class="custom-error">Please select a state</label>');
e(C).addClass("error")
}}if(e(B).parent().parent().is(":visible")){if(e(B).val()==""&&!e(B).hasClass("error")){e(B).after('<label for="program" generated="true" class="custom-error">Please select a program</label>');
e(B).addClass("error")
}}if(e(z).parent().parent().is(":visible")){if(e(z).val()==""&&!e(z).hasClass("error")){e(z).after('<label for="location" generated="true" class="custom-error">Please select a location</label>');
e(z).addClass("error")
}}if(e(g).parent().parent().is(":visible")){if(e(g).val()==""&&!e(g).hasClass("error")){e(g).after('<label for="location" generated="true" class="custom-error">Please select a course</label>');
e(g).addClass("error")
}}b.emailValidateSureVerify();
var y=e(".request4info .terms-container .terms-checkbox");
var A=true;
if(e(".terms-checkbox")!=null){if(e(y).length>0){if(!e(y).is(":checked")){if(!e(y).hasClass("error")){e(y).addClass("error");
e(y).parent().append('<label generated="true" class="custom-error">This field is mandatory</label>')
}A=false
}else{e(y).removeClass("error");
e(".request4info .terms-container").find(".custom-error").remove();
A=true
}}}if(e(".request4info #rfi-form").valid()&&!e(".custom-combobox-input").hasClass("error")&&A){e("#rfi-form .rfi-submit").prop("disabled","disabled");
if(c){e(".request4info #rfi-form").submit();
c=false
}}});
jQuery.validator.addMethod("exactlength",function(h,l,g){return this.optional(l)||h.length==g
},jQuery.format("Please enter {0} digits"));
jQuery.validator.addMethod("alpha",function(g,h){return this.optional(h)||g==g.match(/^[a-zA-Z .]*$/)
},jQuery.format("Please enter alphabets only"));
var j=0;
jQuery.validator.addMethod("checklength",function(n,o,h){var p=e(".request4info .phonewithcode .citycode, .request4info .phonewithcode .rfi_city_code");
var g=true;
if(p.val()=="+91"&&e.trim(n).length!=10){g=false;
j=1
}else{if((e.trim(n).length<7||e.trim(n).length>11)){g=false;
j=2
}}return g
},function(m,n,g){console.log(j);
var h="Please enter valid number";
if(j==1){h="Please enter 10 digits"
}else{if(j==2){h="Please enter valid number"
}}return h
});
e(".request4info #rfi-form").validate({onfocusout:false,onkeyup:false,rules:{email:{required:true},referralEmailId:{required:true},studentName:{required:true,digits:false,alpha:e(".rfi_student_name").val()},refstudentname:{required:true,digits:false,alpha:e(".referral_student_name").val()},zipCode:{required:true,digits:false},eligibility:{required:true,digits:false},income:{required:true,digits:false},experience:{required:true,digits:false},company:{required:true,digits:false},nationality:{required:true,digits:false},isdCode:{required:true},studentPhone:{required:true,maxlength:12,digits:true},alternateIsdCode:{required:true,maxlength:12},alternateMobileNumber:{required:true,maxlength:12,digits:true},query:{required:true,maxlength:100},ipa:{required:true},cityCode:{required:true},mobileNumber:{required:true,checklength:true,digits:true},referralName:{required:true},referralMobile:{required:true,checklength:true},captcha:{required:true}},messages:{studentName:{required:"Please enter your name"},email:{required:"Please enter a valid email address"},referralEmailId:{required:"Please enter a valid email address"},refstudentname:{required:"Please enter your name"},zipCode:{required:"Please enter valid zipcode"},eligibility:{required:"Please enter valid data",eligibility:"Please enter valid data"},income:{required:"Please enter valid income",income:"Please enter valid income"},experience:{required:"Please enter valid data",experience:"Please enter valid data"},company:{required:"Please enter valid data",company:"Please enter valid data"},nationality:{required:"Please enter valid data",nationality:"Please enter valid data"},studentPhone:{required:"Please enter valid number",studentPhone:"Please enter valid number"},ipa:{required:"Please enter correct data"},cityCode:{required:"Please enter correct data"},mobileNumber:{required:"Please enter correct number"},alternateMobileNumber:{required:"Please enter valid alt number"},query:{required:"Please enter your query"},referralName:{required:"Please enter correct data"},referralMobile:{required:"Please enter correct data"},captcha:{required:"Please enter verification code"}}})
};
this.emailValidateSureVerify=function(){e(".request4info .email_field_rfi , .request4info .referral_email_field").blur(function(l){var k=(e(l.target).length==0)?"":e(l.target),n=e(this);
var m=/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
e(n).next(".error").remove();
e(n).removeClass("error");
if(!m.test(k.val())){e(n).after('<label for="email" generated="true" class="error">Please enter a valid email address</label>');
e(n).addClass("error")
}});
return false
};
this.init=function(){if(d.rfiConfig==f){return null
}e(document).ready(function(){e(".request4info .rfi-radio-link").hide();
e(e(".request4info .nav-tabs li")[1]).hide();
e(".request4info").addClass("show_rfi_dialogue");
b.initializeFieldPopulate("country","city","location");
b.initializeFieldPopulate("level","discipline","program");
b.initializeFieldPopulate("course");
b.initializeFieldPopulate("cityind");
b.initializeFieldPopulate("genericDetails");
b.initializeFieldPopulate("countryind");
b.initializeFieldPopulate("stateInd");
b.formValidation();
var k=document.getElementById("firstName").innerHTML;
var l=document.getElementById("eMail").innerHTML;
var m=document.getElementById("mobilePhoneDiv").innerHTML;
var n=document.getElementById("hidcombinationFieldName").value;
if(n=="CombinationOne"){document.getElementById("firstName").innerHTML=m;
document.getElementById("eMail").innerHTML=l;
document.getElementById("mobilePhoneDiv").innerHTML=k
}else{if(n=="CombinationTwo"){document.getElementById("firstName").innerHTML=l;
document.getElementById("eMail").innerHTML=k;
document.getElementById("mobilePhoneDiv").innerHTML=m
}else{if(n=="CombinationThree"){document.getElementById("firstName").innerHTML=k;
document.getElementById("eMail").innerHTML=m;
document.getElementById("mobilePhoneDiv").innerHTML=l
}else{}}}e(".request4info .nav-tabs li.active a").addClass("expended");
e(".request4info .nav-tabs li.active a").click(function(){if(e(this).hasClass("expended")){e(this).removeClass("expended");
e(".request4info .tab-content").slideUp(500)
}else{e(".request4info .tab-content").slideDown(500);
e(this).addClass("expended")
}});
e(".sticky-nav-container a.rfi-tag").click(function(){if(e(this).hasClass("expended")){}else{e(".request4info .tab-content").slideDown(500);
e(".request4info .nav-tabs li.active a").addClass("expended")
}});
b.emailValidate();
b.emailValidateSureVerify();
b.mobileValidate()
});
return this
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
$(document).ready(function(){if($(window).width()<767){$("#request4info").prop("style","display: none !important")
}});
(function(d,e,f){d.rfiMobile=(function(){function a(){var b=this;
this.rfiPopup=function(){e(".rfi-popup").dialog({autoOpen:false,resizable:false,height:"auto",top:"0",appendTo:".rfi-popup-container",modal:true,dialogClass:"noTitle",closeOnEscape:true,beforeClose:function(){e(".rfi-popup").find("#rfi-form").remove()
}})
};
this.init=function(){b.rfiPopup();
e(".close-rfi").off().on("click",function(c){c.stopPropagation();
e("#rfi-form").clone().appendTo("#home");
e(".rfi-popup").dialog("close")
});
e(".rfi-mobile").off().on("click",function(){var c=e("#rfi-form").parent().html();
e("#rfi-form").remove();
e(".rfi-popup").dialog("open").append(c);
e(".rfi-popup-container").find(".custom-combobox").remove();
window.manipal.rfi.init()
});
return this
};
return this.init()
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(b,a,c){b._appFormWizard=(function(){var o,g,f,d,m,e=0,l,i,k,j,n;
if(b.appFormWizardLocationConfig!=c){o=b.appFormWizardLocationConfig.countries
}if(b.appFormWizardProgramsConfig!=c){g=b.appFormWizardProgramsConfig.programs
}if(a("#step-2-form-1")){f=false;
if(a("#confirm_program_container .nepal_course_table").length>0){d=a("#confirm_program_container .nepal_course_table")
}if(a("#confirm_program_container .int_course_table").length>0){m=a("#confirm_program_container .int_course_table")
}}function h(){this.initiateTableRadio=function(){if(a(".program_list_td input:checkbox:checked").length>0){var r=a(".program_list_td input:checkbox:checked")[0];
a(".course_table_tr").addClass("disabled").find(".program_table input").prop("disabled",true);
a(r).parents(".course_table_tr").removeClass("disabled").addClass("highlight_tr").find(".group_name_1").trigger("click");
a(".program_list_td input:checkbox:checked").removeAttr("disabled")
}else{var q=a(".nepal_course_table .group_name_td input:radio")[0];
a(".nepal_course_table .group_name_td input:radio").removeAttr("checked").parents(".course_table_tr").addClass("disabled").removeClass("highlight_tr").find(".program_table input").prop("disabled",true).end();
if(a(q)!=c){a(q).trigger("click");
a(q).parents(".course_table_tr").removeClass("disabled").addClass("highlight_tr").find(".program_table input").prop("disabled",false)
}}};
this.populateProgramList=function(){if(g!=c){a.each(g,function(r,q){a("#program_field").append(a("<option>",{value:q.programValue,text:q.programName}))
})
}};
this.populateStreamList=function(r){if(g!=c){var q;
a.each(g,function(s,t){if(r==t.programValue&&r!=""){q=t.streams
}});
a("#stream_field").empty();
a("#stream_field").append(a("<option>",{value:"",text:"Select One"}));
if(q!=c){a.each(q,function(s,t){a("#stream_field").append(a("<option>",{value:t.streamValue,text:t.streamName}))
})
}}};
this.populateCountryList=function(){if(o!=c){a.each(o,function(q,r){a("#country_field").append(a("<option>",{value:r.countryValue,text:r.countryName}))
})
}};
this.populateStateList=function(q){if(o!=c){var r;
a.each(o,function(s,t){if(q==t.countryValue&&q!=""){r=t.states
}});
a("#state_field").empty();
a("#state_field").append(a("<option>",{value:"",text:"Select One"}));
if(r!=c){a.each(r,function(t,s){a("#state_field").append(a("<option>",{value:s.stateValue,text:s.stateName}))
})
}}a("#city_field").empty();
a("#city_field").append(a("<option>",{value:"",text:"Select One"}))
};
this.populateCityList=function(q,t){if(o!=c){var s,r;
a.each(o,function(u,v){if(q==v.countryValue&&q!=""){s=v.states
}});
if(s!=c){a.each(s,function(v,u){if(t==u.stateValue&&t!=""){r=u.cities
}})
}a("#city_field").empty();
a("#city_field").append(a("<option>",{value:"",text:"Select One"}));
if(r!=c){a.each(r,function(u,v){a("#city_field").append(a("<option>",{value:v.cityValue,text:v.cityName}))
})
}}};
this.populateTestCenters=function(r){var s=Object.keys(r).length;
if(s>1){a("#after_confirm_testcenter").show();
if(!a("#preference_1_field").hasClass("isRequired")){a("#preference_1_field").addClass("isRequired")
}if(!a("#preference_2_field").hasClass("isRequired")){a("#preference_2_field").addClass("isRequired")
}var q="<option value='0'> Select Test Center </option>";
a.each(r,function(t,u){console.log(t,u);
q+='<option value="'+t+'">'+u+"</option>"
});
a("#preference_1_field").html("");
a("#preference_1_field").append(q);
a("#preference_2_field").html("");
a("#preference_2_field").append(q)
}else{a("#after_confirm_testcenter").show();
if(!a("#preference_1_field").hasClass("isRequired")){a("#preference_1_field").addClass("isRequired")
}var q="<option value='0'> Select Test Center </option>";
a.each(r,function(t,u){console.log(t,u);
q+='<option value="'+t+'">'+u+"</option>"
});
a("#preference_1_field").html("");
a("#preference_1_field").append(q);
a(a("#preference_1_field option")[1]).prop("selected",true);
a("#preference_2_field").parent().remove()
}};
this.oafStepTwoInit=function(){a("#brAllCourse.jsp").hide();
a("#barchForMuAndMujBR").hide();
a("#brMbaForMuj").hide();
a("#brMTechForMuj").hide();
a("#brMtechForMu").hide();
a("#brBtechLateralForMuAndMuj").hide();
a("#brBtechLateralForMuAndMuj input").each(function(r,q){if(a(q).hasClass("isRequired")){a(q).removeClass("isRequired")
}if(a(q).prop("type")=="checkbox"){a(q).prop("checked",false)
}});
a("#brBhmLateralForMuAndMuj").hide();
a("#brBhmLateralForMuAndMuj input").each(function(r,q){if(a(q).hasClass("isRequired")){a(q).removeClass("isRequired")
}if(a(q).prop("type")=="checkbox"){a(q).prop("checked",false)
}});
a("#brMdMsForMu").hide();
a("#brMdMsForMu input").each(function(r,q){if(a(q).hasClass("isRequired")){a(q).removeClass("isRequired")
}if(a(q).prop("type")=="checkbox"){a(q).prop("checked",false)
}if(a(q).prop("type")=="text"){a(q).val("")
}});
a("#brMdsForMu").hide();
a("#brMdsForMu input").each(function(r,q){if(a(q).hasClass("isRequired")){a(q).removeClass("isRequired")
}if(a(q).prop("type")=="text"){a(q).val("")
}});
a("#after_confirm_entrance").hide();
a("#after_confirm_entrance input").each(function(r,q){if(a(q).hasClass("isRequired")){a(q).removeClass("isRequired");
a(q).val("")
}});
a("#after_confirm_entrance_nataname").hide();
a("#after_confirm_entrance_nataname input").each(function(r,q){if(a(q).hasClass("isRequired")){a(q).removeClass("isRequired");
a(q).val("")
}});
a("#after_confirm_entrance_gatename").hide();
a("#after_confirm_entrance_gatename input").each(function(r,q){if(a(q).hasClass("isRequired")){a(q).removeClass("isRequired");
a(q).val("")
}});
a("#after_confirm_entrance_formuj_mba").hide();
a("#after_confirm_entrance_formuj_mba select").each(function(r,q){if(a(q).hasClass("isRequired")){a(q).removeClass("isRequired");
a(q).val("")
}});
a("#after_confirm_entrance_formuj_mbaother").hide();
a("#after_confirm_entrance_formuj_mbaother input").each(function(r,q){if(a(q).hasClass("isRequired")){a(q).removeClass("isRequired");
a(q).val("")
}});
a("#after_confirm_testcenter").hide();
if(a("#preference_1_field").hasClass("isRequired")){a("#preference_1_field").removeClass("isRequired");
a("#preference_1_field").val("")
}if(a("#preference_2_field").hasClass("isRequired")){a("#preference_2_field").removeClass("isRequired");
a("#preference_2_field").val("")
}a("#dd_details_form input").each(function(r,q){if(a(q).prop("type")=="text"){a(q).val("")
}});
a("#confirm_eligibility").prop("checked",false);
a("#agree_condition").prop("checked",false)
};
this.validateAboveConfirmPrograms=function(){var v=a("#step-2-form-1 #confirm_program_container"),t=".isTableCheckRequired",s=".isRequired",r=".isNameValidate",q=".isDate";
if(v.find(t).length>0){var w=v.find("error").find(".program_table input:checkbox");
var x=v.find(t).find("input:checkbox:checked").length;
if(x<=0){v.find(".error_msg").remove();
v.find(t).addClass("error").find(".course_table_tr").removeClass("highlight_tr").end().siblings(".base_topic").append(a('<p class="error_msg">This field is required</p>'))
}}v.find(".error").find(".program_table input:checkbox").on("change",function(y){var z=v.find(t).find("input:checkbox:checked").length;
if(z<=0){if(!v.find(t).hasClass("error")){v.find(t).addClass("error").find(".course_table_tr").removeClass("highlight_tr").end().siblings(".base_topic").append(a('<p class="error_msg">This field is required</p>'))
}}else{v.find(t).removeClass("error").siblings(".base_topic").find(".error_msg").remove();
a(y.target).parents(".course_table_tr").addClass("highlight_tr")
}});
v.find(q).on("change",function(A){var y=a(A.target),z=a(y).parent();
if(a.trim(a(y).val())===""){if(!z.hasClass("error")){a(z).addClass("error");
a(z).append(a('<p class="error_msg">This field is required</p>'))
}}else{z.removeClass("error");
z.find(".error_msg").remove()
}});
v.find(s).each(function(y,z){var A=a(z).parent();
if(z.nodeName==="INPUT"){a(A).removeClass("error");
A.find(".error_msg").remove();
if(a.trim(a(z).val())===""){if(!A.hasClass("error")){a(A).addClass("error");
a(A).append(a('<p class="error_msg">This field is required</p>'))
}}}else{if(z.nodeName==="SELECT"){var B="This field is required";
if((a(z).prop("selectedIndex")===0&&a(z).prop("id")!=="btechList2")||(a(z).find("option").length===0&&a(z).prop("id")==="btechList2")){if(a(z).find("option").length===0&&a(z).prop("id")==="btechList2"){B+=". Please select order of preference."
}if(!A.hasClass("error")){a(A).addClass("error");
a(A).append(a('<p class="error_msg">'+B+"</p>"))
}}else{A.removeClass("error");
A.find(".error_msg").remove()
}}}});
v.find(r).each(function(y,z){var A=a(z).parent();
var B=/^[a-zA-Z'. ]{0,150}$/;
if(!B.test(a(z).val())||a(z).val()==""){if(!A.hasClass("error")){A.addClass("error");
A.append(a('<p class="error_msg">Invalid Characters</p>'))
}}else{A.removeClass("error");
A.find(".error_msg").remove()
}});
v.find(".error").on("keyup",function(B){var y=a(B.target),z=a(y).parent();
var A=y.hasClass("isRequired");
if(A&&B.target.nodeName==="INPUT"){if(a.trim(a(y).val())===""){if(!z.hasClass("error")){a(z).addClass("error");
a(z).append(a('<p class="error_msg">This field is required</p>'))
}}else{z.removeClass("error");
z.find(".error_msg").remove()
}}});
v.find(".error").find("select").on("change",function(B){var y=a(B.target),z=a(y).parent();
var A=y.hasClass("isRequired");
if((a(y).prop("selectedIndex")===0&&a(y).prop("id")!=="btechList2")||(a(y).prop("id")==="btechList2"&&a(y).find("option").length===0)){if(!z.hasClass("error")){a(z).addClass("error");
a(z).append(a('<p class="error_msg">This field is required</p>'))
}}else{z.removeClass("error");
z.find(".error_msg").remove()
}});
if(a("#icas_course")){var u=a("#branch_2_field").parent();
if(a("#branch_1_field").val()===a("#branch_2_field").val()){if(!u.hasClass("error")){a(u).addClass("error");
a(u).append(a('<p class="error_msg">Branch 1 and 2 cannot be same value</p>'))
}}else{if(u.hasClass("error")){a(u).removeClass("error");
u.find(".error_msg").remove()
}}}if(v.find(".error").length>0){return false
}else{return true
}};
this.submitCheckBox=function(){var s;
p.oafStepTwoInit();
var r=new Array();
var u=new Array();
var q;
if(d!=c){q=d;
k=q.find("input[name='groups']:checked").val()
}else{if(m!=c){q=m
}}if(a("#icas_course").length>0){j=a("#branch_1_field").val();
n=a("#branch_2_field").val()
}a('#group_program_list input[type="checkbox"]:checked').each(function(){var y=a(this).prop("id");
if(a(this).prop("id").indexOf("btech_")>-1){y=y.split("_")[1]
}r.push(y)
});
a('#group_program_list input[type="radio"]:checked').each(function(){var y=a(this).prop("id");
u.push(y)
});
var t="/bin/manipal/components/oafStepTwo";
var x={ids:r,gids:u};
if(a("#btechList2").parents("#btech-options-fieldset").css("display")!="none"){var w="";
var v=a("#btechList2 option").length;
a("#btechList2 option").each(function(y,z){if(y==(v-1)){w+=a(this).val()
}else{w+=a(this).val()+","
}});
a("#btechListSelected").val(w)
}if(q!=c){e=q.find("input:checkbox:checked").length
}if(p.validateAboveConfirmPrograms()){f=true;
if(a("#parents_name").length>0){l=a("#parents_name").val()
}if(a("#relationship_field").length>0){i=a("#relationship_field").val()
}a.ajax({type:"GET",dataType:"JSON",contentType:"application/json",url:t,data:x,success:function(z){s=z;
a("#confirm_program").addClass("disabled");
a(".show_after_confirm").show();
a("#after_confirm").show();
a("#amount").html("");
a("#amount").html(s.amount);
var y=(s.amount).split(".");
a("#payment_details_value").val("");
a("#payment_details_value").val(y[1]);
a("#payment_details_value").attr("readonly",true);
a("#payment_details_drawn").val("");
a("#payment_details_drawn").val(s.ddDrawnOn);
a("#payment_details_drawn").attr("readonly",true);
if(s.brMtechForMu){a("#brMtechForMu").show();
a("#gatescore").show();
a("#gateresultsawaiting").show()
}if(s.barchForMuAndMujBR){a("#barchForMuAndMujBR").show();
a("#natascore").show();
a("#nataresultsawaiting").show()
}if(s.brMbaForMuj){a("#brMbaForMuj").show();
a("#mbarequiredscore").show();
a("#mbarequiredresultsawaiting").show()
}if(s.brMTechForMuj){a("#brMTechForMuj").show();
a("#mtechrequiredscore").show();
a("#mtechrequiredresultsawaiting").show()
}if(s.brBtechLateralForMuAndMuj){a("#brBtechLateralForMuAndMuj").show();
a("#brBtechLateralForMuAndMuj input").each(function(B,A){if(!a(A).hasClass("isRequired")){a(A).addClass("isRequired")
}})
}if(s.brBhmLateralForMuAndMuj){a("#brBhmLateralForMuAndMuj").show();
a("#brBhmLateralForMuAndMuj input").each(function(B,A){if(!a(A).hasClass("isRequired")){a(A).addClass("isRequired")
}})
}if(s.brMdMsForMu){a("#brMdMsForMu").show();
a("#brMdMsForMu input").each(function(B,A){if(!a(A).hasClass("isRequired")){a(A).addClass("isRequired")
}})
}if(s.brMdsForMu){a("#brMdsForMu").show();
a("#brMdsForMu input").each(function(B,A){if(!a(A).hasClass("isRequired")){a(A).addClass("isRequired")
}})
}if(s.allCourseBR){a("#allCourseBR").show()
}if(s.testcenter){p.populateTestCenters(s.testcentercontent)
}a("html, body").animate({scrollTop:a("#after_confirm").eq(0).offset().top-200},"1000")
}})
}};
this.chkBoxBindEvents=function(){if(d!=c){d.find("input[type='checkbox']").on("change",p.resetAfterConfirm)
}else{if(m!=c){m.find("input[type='checkbox']").on("change",p.resetAfterConfirm)
}}a("#parents_name").on("change",p.resetAfterConfirm);
a("#relationship_field").on("change",p.resetAfterConfirm);
if(a("#icas_course").length>0){a("#branch_1_field").on("change",p.resetAfterConfirm);
a("#branch_2_field").on("change",p.resetAfterConfirm)
}};
this.resetAfterConfirm=function(){var r,t,s,q;
if(d!=c){r=d;
t=r.find("input[name='groups']:checked").val()
}else{if(m!=c){r=m
}}if(a("#icas_course").length>0){s=a("#branch_1_field").val();
q=a("#branch_2_field").val()
}var u=r.find("input:checkbox:checked").length;
if(f!=c&&f==true){if((u!=0&&(u<e||u>e))||(l!=a("#parents_name").val())||(i!=a("#relationship_field").val())||(t!=k)||(s!=j)||(q!=n)){if(a("#confirm_program").hasClass("disabled")){a("#confirm_program").removeClass("disabled")
}a(".show_after_confirm").hide();
p.oafStepTwoInit()
}}};
this.emailValidate=function(){a("body").on("blur",".app_form_container .fieldset_list .email_field , .alternate_email_field , .guardian_email",function(s){var t=(a(s.target).length==0)?"":a(s.target),q=a(this);
a(q).removeClass("emailNotValid");
a(q).parent().removeClass("error");
a(q).parent().find("p.error_msg").remove();
var r=/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
if(!r.test(t.val())){a(q).addClass("emailNotValid");
a(q).parent().addClass("error");
a(q).parent().find("input").after('<p class="error_msg">Please enter a valid email address</p>')
}});
return false
};
this.resultUnchecked=function(){a("body").on("click",".xii_result_awaited_checkbox",function(q){if(a(".xii_result_awaited_checkbox").is(":checked")){if(a(".removeIsrequired .isRequired").hasClass("isRequired")){a(".removeIsrequired .isRequired").removeClass("isRequired")
}if(a(".removeIsrequired .error").hasClass("error")){a(".removeIsrequired .error").removeClass("error")
}a(".removeIsrequired p").remove();
a(".removeIsrequired").hide("slow")
}else{a(".removeIsrequired").show("slow");
if(!a(".removeIsrequired input").hasClass("isRequired")){a(".removeIsrequired input").addClass("isRequired")
}}})
};
this.invalidHandler=function(){var q=a(".app_form_container").find("error");
if(q){if(a(".error").length>0){a("html, body").animate({scrollTop:a(".error").eq(0).offset().top-200},"1000")
}}};
this.peventMultipleClick=function(q,r){q.removeAttr("href");
q.off(r)
};
this.populateYears=function(){var t=1980,q=2020;
a("#date_drop_down").append('<option value="0">Select One</option>');
select=a("#date_drop_down");
for(var s=t;
s<=q;
s++){var r=document.createElement("option");
r.value=s;
r.innerHTML=s;
select.append(r)
}};
var p=this;
this.init=function(){a(document).ready(function(){a(".app_form_quick_form, .app_container_dark_bg").hide();
a(".app_form_main_container").click(function(){a(".app_form_quick_form, .app_container_dark_bg").hide();
a(this).find(".app_form_quick_form").show();
a(this).find(".app_container_dark_bg").show()
});
p.populateYears();
p.emailValidate();
p.resultUnchecked();
p.invalidHandler();
a("#passing_year").keydown(function(v){v.preventDefault();
return false
});
if(a("body").hasClass("manipal-mobile")){a(".step_position_list").text("")
}a("#cc-avenue-payment").submit();
a("#step-1-form").MaGEValidate({scoreErrorMsg:"Please Enter Digits",yearErrorMsg:"Please Enter 4 Digits",ddErrorMsg:"Please Enter 6 digits",bankErrorMsg:"Bank Name Incorrect",codeErrorMsg:"Incorrect Characters",nameErrorMsg:"Invalid Characters",testErrorMsg:"Invalid Characters",registerErrorMsg:"Invalid Characters"});
a("#step-2-form-1").MaGEValidate({scoreErrorMsg:"Please Enter Digits",yearErrorMsg:"Please Enter 4 Digits",ddErrorMsg:"Please Enter 6 digits",bankErrorMsg:"Bank Name Incorrect",codeErrorMsg:"Incorrect Characters",nameErrorMsg:"Invalid Characters",testErrorMsg:"Invalid Characters",registerErrorMsg:"Invalid Characters"});
a("#confirm_program").MaGEValidate();
a("#step-3-form").MaGEValidate({scoreErrorMsg:"Please Enter Digits",yearErrorMsg:"Please Enter 4 Digits",ddErrorMsg:"Please Enter 6 digits",bankErrorMsg:"Bank Name Incorrect",codeErrorMsg:"Incorrect Characters",nameErrorMsg:"Invalid Characters",testErrorMsg:"Invalid Characters",registerErrorMsg:"Invalid Characters"});
a("#step-4-form").MaGEValidate({scoreErrorMsg:"Please Enter Digits",yearErrorMsg:"Please Enter 4 Digits",ddErrorMsg:"Please Enter 6 digits",bankErrorMsg:"Bank Name Incorrect",codeErrorMsg:"Incorrect Characters",nameErrorMsg:"Invalid Characters",testErrorMsg:"Invalid Characters",registerErrorMsg:"Invalid Characters"});
a("#login_form").MaGEValidate();
a("#forgot_pwd_form").MaGEValidate();
a("#forgot_date_of_birth").datepicker({changeMonth:true,changeYear:true,yearRange:"1900:2050",dateFormat:"dd/M/yy",maxDate:new Date()});
a("#expiry_date").datepicker({changeMonth:true,changeYear:true,yearRange:"1900:2050",dateFormat:"dd/M/yy"});
a("#birth_date_field").datepicker({changeMonth:true,changeYear:true,yearRange:"1900:2050",dateFormat:"dd/M/yy",maxDate:new Date()});
a("#intern_completion").datepicker({changeMonth:true,changeYear:true,yearRange:"1900:2050",dateFormat:"dd/M/yy"});
a("#payment_details_date").datepicker({changeMonth:true,changeYear:true,yearRange:"1900:2050",dateFormat:"dd/M/yy",maxDate:new Date()});
a("#passing_year").datepicker({changeMonth:true,changeYear:true,yearRange:"1900:2050",dateFormat:"dd/M/yy"});
a("#xi_year_exam").datepicker({changeMonth:true,changeYear:true,yearRange:"1900:2050",dateFormat:"dd/M/yy"});
a("#xii_year_exam").datepicker({changeMonth:true,changeYear:true,yearRange:"1900:2050",dateFormat:"dd/M/yy"});
a("#brMdMsForMu_intern_completion").datepicker({changeMonth:true,changeYear:true,yearRange:"1900:2050",dateFormat:"dd/M/yy"});
p.initiateTableRadio();
a(".nepal_course_table .group_name_td input:radio").on("change",function(v){a(this).parents(".course_table_tr").removeClass("disabled").addClass("highlight_tr").siblings().addClass("disabled").removeClass("highlight_tr").find(".program_table input").prop("disabled",true).end().find("input:checkbox").removeAttr("checked").end().end().find(".program_table input").prop("disabled",false)
});
p.chkBoxBindEvents();
if(a("#step-1-form")){p.populateProgramList();
var t=a("#selectedProgram").val();
var s=a("#selectedStream").val();
if(t!=""||t!=null||t!=" "){a("#program_field").val(t);
p.populateStreamList(t)
}if(s!=""||s!=null||s!=" "){a("#stream_field").val(s)
}a("#program_field").on("change",function(){p.populateStreamList(a(this).val())
});
p.populateCountryList();
var r=a("#selectedCountry").val();
if(r!=""||r!=null||r!=" "){a("#country_field").val(r);
p.populateStateList(r)
}a("#country_field").on("change",function(){p.populateStateList(a(this).val())
});
var q=a("#selectedState").val();
if(q!=""||q!=null||q!=" "){a("#state_field").val(q);
p.populateCityList(r,q)
}a("#state_field").on("change",function(){p.populateCityList(a("#country_field").val(),a(this).val())
});
var u=a("#selectedCity").val();
if(u!=""||u!=null||u!=" "){a("#city_field").val(u);
if(a("#city_field option:selected").text().toLowerCase()=="others"){a("#otherCityNameSelected").val("selected");
a("#otherCity").removeClass("otherCityHide").addClass("otherCityShow")
}else{a("#otherCityNameSelected").val("");
a("#otherCity").removeClass("otherCityShow").addClass("otherCityHide")
}}a("#city_field").change(function(){if(a("#city_field option:selected").text().toLowerCase()=="others"){a("#otherCityNameSelected").val("selected");
a("#otherCity").removeClass("otherCityHide").addClass("otherCityShow")
}else{a("#otherCityNameSelected").val("");
a("#otherCity").removeClass("otherCityShow").addClass("otherCityHide")
}})
}a("#add_photograph, #add_signature").change(function(){if(this.files[0].size>1000000){a(this).parent().find(".error").remove();
a(this).parent().prepend('<p class="error_msg error img1" style="top: 30px;position: absolute;">File size should be less then 1MB</p>');
a(this).parent().addClass("error")
}else{a(this).parent().find(".error").remove();
a(this).parent().removeClass("error")
}});
a("#gatescore_field").change(function(){console.log(this);
if(this.checked){a("#after_confirm_entrance").show();
a("#after_confirm_entrance input").each(function(w,v){if(!a(v).hasClass("isRequired")){a(v).addClass("isRequired")
}});
if(a("#score_card_available").hasClass("score_card_available_hide")){a("#score_card_available").addClass("score_card_available_show");
a("#score_card_available").removeClass("score_card_available_hide")
}if(a("#score_card_not_available").hasClass("score_card_not_available_show")){a("#score_card_not_available").addClass("score_card_not_available_hide");
a("#score_card_not_available").removeClass("score_card_not_available_show")
}}});
a("#gateresultsawaiting_field").change(function(){console.log(this);
if(this.checked){a("#after_confirm_entrance").hide();
if(a("#score_card_available").hasClass("score_card_available_show")){a("#score_card_available").addClass("score_card_available_hide");
a("#score_card_available").removeClass("score_card_available_show")
}if(a("#score_card_not_available").hasClass("score_card_not_available_hide")){a("#score_card_not_available").addClass("score_card_not_available_show");
a("#score_card_not_available").removeClass("score_card_not_available_hide")
}}a("#after_confirm_entrance input").each(function(w,v){if(a(v).hasClass("isRequired")){a(v).removeClass("isRequired");
if(a(v).parent().hasClass("error")){a(v).parent().removeClass("error");
a(v).siblings(".error_msg").remove()
}}})
});
a("#mtechrequiredscore_field").change(function(){console.log(this);
if(this.checked){a("#after_confirm_entrance_gatename").show();
a("#after_confirm_entrance").show();
a("#after_confirm_entrance input").each(function(w,v){if(!a(v).hasClass("isRequired")){a(v).addClass("isRequired")
}})
}});
a("#mtechrequiredresultsawaiting_field").change(function(){console.log(this);
if(this.checked){a("#after_confirm_entrance").hide();
a("#after_confirm_entrance_gatename").hide()
}a("#after_confirm_entrance input").each(function(w,v){if(a(v).hasClass("isRequired")){a(v).removeClass("isRequired");
if(a(v).parent().hasClass("error")){a(v).parent().removeClass("error");
a(v).siblings(".error_msg").remove()
}}})
});
a("#natascore_field").change(function(){console.log(this);
if(this.checked){a("#after_confirm_entrance_nataname").show();
a("#after_confirm_entrance").show();
a("#after_confirm_entrance input").each(function(w,v){if(!a(v).hasClass("isRequired")){a(v).addClass("isRequired")
}})
}});
a("#nataresultsawaiting_field").change(function(){console.log(this);
if(this.checked){a("#after_confirm_entrance").hide();
a("#after_confirm_entrance_nataname").hide()
}a("#after_confirm_entrance input").each(function(w,v){if(a(v).hasClass("isRequired")){a(v).removeClass("isRequired");
if(a(v).parent().hasClass("error")){a(v).parent().removeClass("error");
a(v).siblings(".error_msg").remove()
}}})
});
a("#mbarequiredscore_field").change(function(){console.log(this);
if(this.checked){a("#after_confirm_entrance_formuj_mba").show();
a("#after_confirm_entrance").show();
if(!a("#after_confirm_entrance_formuj_mba select").hasClass("isRequired")){a("#after_confirm_entrance_formuj_mba select").addClass("isRequired")
}a("#after_confirm_entrance input").each(function(w,v){if(!a(v).hasClass("isRequired")){a(v).addClass("isRequired")
}})
}a("#entrance_test_name").change(function(){var v=a("#entrance_test_name").val();
if(v==5){a("#after_confirm_entrance_formuj_mbaother").show();
if(!a("#after_confirm_entrance_formuj_mbaother input").hasClass("isRequired")){a("#after_confirm_entrance_formuj_mbaother input").addClass("isRequired")
}}else{a("#after_confirm_entrance_formuj_mbaother").hide();
if(a("#after_confirm_entrance_formuj_mbaother input").hasClass("isRequired")){a("#after_confirm_entrance_formuj_mbaother input").removeClass("isRequired");
if(a("#after_confirm_entrance_formuj_mbaother input").parent().hasClass("error")){a("#after_confirm_entrance_formuj_mbaother input").parent().removeClass("error");
a("#after_confirm_entrance_formuj_mbaother input").siblings(".error_msg").remove()
}}}})
});
a("#mbarequiredresultsawaiting_field").change(function(){console.log(this);
if(this.checked){a("#after_confirm_entrance_formuj_mba").hide();
a("#after_confirm_entrance_formuj_mbaother").hide();
a("#after_confirm_entrance").hide();
a("#after_confirm_entrance_formuj_mba select").each(function(w,v){if(a(v).hasClass("isRequired")){a(v).removeClass("isRequired")
}});
a("#after_confirm_entrance input").each(function(w,v){if(a(v).hasClass("isRequired")){a(v).removeClass("isRequired")
}});
a("#after_confirm_entrance_formuj_mbaother input").each(function(w,v){if(a(v).hasClass("isRequired")){a(v).removeClass("isRequired");
if(a(v).parent().hasClass("error")){a(v).parent().removeClass("error");
a(v).siblings(".error_msg").remove()
}}})
}})
});
a("#login_form .submit_btn").on("click",function(q){q.preventDefault();
a("#login_form").submit();
p.invalidHandler()
});
a(".step_1_submit").on("click",function(q){var r=a(".app_form_container").find("error");
q.preventDefault();
if(a("#login_form").length!=0){a("#login_form").find(".error").removeClass("error");
a("#login_form").find(".error_msg").remove(".error_msg")
}a("#step-1-form").submit();
p.invalidHandler();
if(r){if(a(".error").length<=0){p.peventMultipleClick(a(this),q)
}}});
a(".step_1_cancel").on("click",function(q){q.preventDefault();
a("#confirm_close").dialog({dialogClass:"confirm_dialog",resizable:false,height:"auto",width:"auto",modal:true,open:function(r,s){a(".confirm_close .cancel_btn").on("click",function(t){t.preventDefault();
a("#confirm_close").dialog("close")
})
}});
p.invalidHandler()
});
a(".step_2_cancel").on("click",function(q){q.preventDefault();
a("#confirm_close").dialog({dialogClass:"confirm_dialog",resizable:false,height:"auto",width:"auto",modal:true,open:function(r,s){a(".confirm_close .cancel_btn").on("click",function(t){t.preventDefault();
a("#confirm_close").dialog("close")
})
}});
p.invalidHandler()
});
a("#forgot_username_pwd").on("click",function(q){q.preventDefault();
a("#forgot_username_pwd_container").dialog({dialogClass:"confirm_dialog",resizable:false,height:"auto",width:"auto",modal:true,open:function(r,s){a(".ui-icon-closethick, #forgot_cancel, #forgot_ok").on("click",function(t){t.preventDefault();
a("#forgot_email_id, #forgot_date_of_birth").val("");
a("#forgot_pwd_form").find(".error").removeClass("error");
a("#forgot_pwd_form").find(".error_msg").remove(".error_msg");
a("#forgot_username_pwd_container").dialog("close");
a("#forgot_username_pwd_form_container .basic_info_container .error_msg").remove()
})
}});
p.invalidHandler()
});
if(a("#flowId").val()=="2"){a("#program_field").on("change",function(){if(a("#program_field option:selected").text()=="Post Graduation - PG"){a("#international_pg_overlay_container").dialog({dialogClass:"confirm_dialog",resizable:false,height:"auto",width:"600",modal:true,open:function(q,r){a("#pg_cancel").on("click",function(s){s.preventDefault();
a("#international_pg_overlay_container").dialog("close")
});
a("#pg_continue").on("click",function(s){s.preventDefault();
window.location.href=a("#redirectUrl").val()
})
}})
}});
p.invalidHandler()
}else{}a(".step_2_submit").on("click",function(q){var r=a(".app_form_container").find("error");
q.preventDefault();
a("#step-2-form-1").submit();
p.invalidHandler();
if(r){if(a(".error").length<=0){p.peventMultipleClick(a(this),q)
}}});
a(".step_3_submit").on("click",function(q){var r=a(".app_form_container").find("error");
q.preventDefault();
a("#step-3-form").submit();
p.invalidHandler();
if(r){if(a(".error").length<=0){p.peventMultipleClick(a(this),q)
}}});
a("body").on("click",".app_form_label",function(){var r=a(this);
var s=r.siblings("select")[0],q=false;
if(document.createEvent){var t=document.createEvent("MouseEvents");
t.initMouseEvent("mousedown",true,true,window,0,0,0,0,0,false,false,false,false,0,null);
q=s.dispatchEvent(t)
}else{if(s.fireEvent){q=s.fireEvent("onmousedown")
}}if(!q){alert("It didn't worked in your browser.")
}});
a(".step_4_submit").on("click",function(s){if(!a("#emailPicInEmail").is(":checked")&&!a(".isimageCheckRequired").parent().hasClass("error")){if(a(a(".isimageCheckRequired")[0]).val()==""){a("#add_photograph").parent().prepend('<p class="error_msg error img1" style="border:1px solid red;width: 125px;height: 25px;top: 30px;position: absolute;">This field is required</p>');
a("#add_photograph").parent().addClass("error");
a("#add_photograph").parent().css("","")
}else{a("#add_photograph").parent().find(".error_msg").remove();
a("#add_photograph").parent().removeClass("error")
}if(a(a(".isimageCheckRequired")[1]).val()==""){a("#add_signature").parent().prepend('<p class="error_msg error img1" style="border:1px solid red;width: 125px;height: 25px;top: 39px;position: absolute;">This field is required</p>');
a("#add_signature").parent().addClass("error")
}else{a("#add_signature").parent().find(".error_msg").remove();
a("#add_signature").parent().removeClass("error")
}}var t=a(".app_form_container").find("error");
a("#croppedImg").val(a("#add_photograph").val());
a("#croppedSignImg").val(a("#add_signature").val());
s.preventDefault();
if(a("#add_photograph")[0].files[0].size>1000000){a(a("#add_photograph")).parent().find(".error").remove();
a(a("#add_photograph")).parent().prepend('<p class="error_msg error img1" style="top: 30px;position: absolute;">File size should be less then 1MB</p>');
a(a("#add_photograph")).parent().addClass("error")
}else{a(a("#add_photograph")).parent().find(".error").remove();
a(a("#add_photograph")).parent().removeClass("error")
}if(a("#add_signature")[0].files[0].size>1000000){a(a("#add_signature")).parent().find(".error").remove();
a(a("#add_signature")).parent().prepend('<p class="error_msg error img1" style="top: 30px;position: absolute;">File size should be less then 1MB</p>');
a(a("#add_signature")).parent().addClass("error")
}else{a(a("#add_signature")).parent().find(".error").remove();
a(a("#add_signature")).parent().removeClass("error")
}var r=a("#add_photograph")[0].files[0].name.split(".").pop().toLowerCase();
if(a.inArray(r,["gif","png","jpg","jpeg"])==-1){a(a("#add_photograph")).parent().find(".error").remove();
a(a("#add_photograph")).parent().prepend('<p class="error_msg error img1" style="top: 30px;position: absolute;">Please upload image format</p>');
a(a("#add_photograph")).parent().addClass("error")
}else{a(a("#add_photograph")).parent().find(".error").remove();
a(a("#add_photograph")).parent().removeClass("error")
}var q=a("#add_signature")[0].files[0].name.split(".").pop().toLowerCase();
if(a.inArray(q,["gif","png","jpg","jpeg"])==-1){a(a("#add_signature")).parent().find(".error").remove();
a(a("#add_signature")).parent().prepend('<p class="error_msg error img1" style="top: 30px;position: absolute;">Please upload image format</p>');
a(a("#add_signature")).parent().addClass("error")
}else{a(a("#add_signature")).parent().find(".error").remove();
a(a("#add_signature")).parent().removeClass("error")
}if(a(".xii_result_awaited").is(":checked")){if(this.checked){a("#after_confirm_entrance").hide();
a("#after_confirm_entrance_testname").hide();
a("#after_confirm_entrance_formuj_mba").hide()
}if(a("#add_signature").hasClass("isimageCheckRequired")){a("#add_signature").removeClass("isimageCheckRequired");
if(a("#add_signature").parent().hasClass("error")){a("#add_signature").parent().removeClass("error")
}}if(a("#add_photograph").hasClass("isimageCheckRequired")){a("#add_photograph").removeClass("isimageCheckRequired");
if(a("#add_photograph").parent().hasClass("error")){a("#add_photograph").parent().removeClass("error")
}}}else{if(!a("#add_signature").hasClass("isimageCheckRequired")){a("#add_signature").addClass("isimageCheckRequired")
}if(!a("#add_photograph").hasClass("isimageCheckRequired")){a("#add_photograph").addClass("isimageCheckRequired")
}}a("#step-4-form").submit();
p.invalidHandler();
if(t){if(a(".error").length<=0){p.peventMultipleClick(a(this),s)
}}});
a(".confirm_program").on("click",function(q){q.preventDefault();
if(!a("#confirm_program").hasClass("disabled")){p.submitCheckBox()
}p.invalidHandler()
});
if(a("#group_program_list")){a("#btech_34").on("change",function(){if(a(this).is(":checked")){a("#btech-options-fieldset").show();
if(!a("#btechList2").hasClass("isRequired")){a("#btechList2").addClass("isRequired")
}}else{a("#btech-options-fieldset").hide();
if(a("#btechList2").hasClass("isRequired")){a("#btechList2").removeClass("isRequired")
}a("#btechList2").empty()
}})
}a("#copyRightArrow, #removeLeftArrow, #optionUp, #optionDown").click(function(r){var q=[];
setTimeout(function(){a("#btechList2 option").each(function(){q.push(a(this).val())
});
a("#btechListSelected").val(q)
},500)
});
if(a("#btechList1")&&a("#btechList2")){a("#copyRightArrow").on("click",function(t){var s=a("#btechList1 :selected").val(),u=a("#btechList1 :selected").text(),v=a("#btechList2").find("option").length,q=a("#btechList2").parent(),r=false;
a("#btechList2 option").each(function(){if((a(this).val()==s&&a(this).text()==u)||v>4){r=true
}});
if(!r){a("#btechList2").append(a("<option>",{value:s,text:u}))
}if(v>=0){if(q.hasClass("error")){q.removeClass("error");
q.find(".error_msg").remove()
}}});
a("#removeLeftArrow").on("click",function(r){var s,q=a("#btechList2").parent();
a("#btechList2 option:selected").remove();
s=a("#btechList2").find("option").length;
if(s<1){if(!q.hasClass("error")){a(q).addClass("error");
a(q).append(a('<p class="error_msg">This field is required. Please select order of preference.</p>'))
}}});
a("#optionUp").on("click",function(){a("#btechList2 option:selected").each(function(){a(this).insertBefore(a(this).prev())
})
});
a("#optionDown").on("click",function(){a("#btechList2 option:selected").each(function(){a(this).insertAfter(a(this).next())
})
})
}if(a("#demand_draft")&&a("#credit_card")){a("#patym_container").hide();
a("#demand_draft, #credit_card").on("click",function(){if(a("#demand_draft").is(":checked")){a("#dd_details_form").show();
a("#dd_details_form input").each(function(s,r){if(!a(r).hasClass("isRequired")){a(r).addClass("isRequired")
}});
a("#netbanking_container").hide()
}if(a("#credit_card").is(":checked")){a("#dd_details_form").hide();
a("#patym_container").hide();
a("#dd_details_form input").each(function(s,r){if(a(r).hasClass("isRequired")){a(r).removeClass("isRequired");
if(a(r).parent().hasClass("error")){a(r).parent().removeClass("error");
a(r).siblings(".error_msg").remove()
}}});
var q="ccAvenue";
a("#netbanking_container").show();
if(q=="ccAvenue"){a("#ccAvenueCont").show();
a("#hdfcCont").hide()
}else{if(q=="hdfc"){a("#ccAvenueCont").hide();
a("#hdfcCont").show()
}}}})
}if(a("#diploma_holder")&&a("#diplomaawaiting_holder")){a("#diploma_holder, #diplomaawaiting_holder").on("click",function(){if(a("#diploma_holder").is(":checked")){a(".show-date-picker").show();
if(!a(".show-date-picker input").hasClass("isRequired")){a(".show-date-picker input").addClass("isRequired")
}}if(a("#diplomaawaiting_holder").is(":checked")){a(".show-date-picker").hide();
if(a(".show-date-picker input").hasClass("isRequired")){a(".show-date-picker input").removeClass("isRequired");
if(a(".show-date-picker").hasClass("error")){a(".show-date-picker").removeClass("error");
a(".show-date-picker").find(".error_msg").remove()
}}}})
}a("body").on("click",".oaf_apply_fresh",function(){a("#logout-form").submit()
});
return this
};
return this.init()
}return new h()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(d,e,f){e.log=function(a){if(MODULE.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
d.c129a6=(function(){function a(){var i,c,j;
this.manipulateMenu=function(){e(".component-c129-a-6 .interestAreaMenu > li").on("click",function(h){h.preventDefault();
e(".component-c129-a-6 .dept_list").addClass("disable");
var l=e(".component-c129-a-6 .departmentMenu > li")[0];
e(l).siblings("li").removeClass("active").end().addClass("active");
e(".component-c129-a-6 #departmentMenu").html("All");
l=e(".component-c129-a-6 .institutionMenu > li")[0];
e(l).siblings("li").removeClass("active").end().addClass("active");
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
i=g.hideInterestArea,c=g.hideInstitute,j=g.hideDepartment;
var h=[],m=[],n=[];
if(!i){b.printIArea()
}if(!c){b.printInstitute()
}else{e(".component-c129-a-6 .dept_list").removeClass("disable");
e(".component-c129-a-6 .iarea_list").addClass("hidden");
e(".component-c129-a-6 .or-seperator").parents(".seperator").addClass("hidden");
e(".component-c129-a-6 .inst_list").addClass("hidden")
}if(!j){b.printDept()
}else{e(".component-c129-a-6 .iarea_list").addClass("hidden");
e(".component-c129-a-6 .seperator").addClass("hidden");
e(".component-c129-a-6 .inst_list").addClass("hidden");
e(".component-c129-a-6 .dept_list").addClass("hidden")
}};
this.printIArea=function(){var r=d.c29_a_6_config.interestAreaInfo,g=e(".component-c129-a-6 .interestAreaMenu");
var p=[],q=[];
e.each(r,function(l,k){if(jQuery.inArray(k.interestArea,q)<0){q.push(k.interestArea);
p.push(k.interestAreaText)
}});
g.html('<li role="presentation" class="active"><a role="menuitem" tabindex="-1" href="#" data-iValue="all">All</a></li>');
for(var h=0;
h<q.length;
h++){var o='<li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-iValue="'+q[h]+'">'+p[h]+"</a></li>";
g.append(o)
}};
this.printInstitute=function(){var r=d.c29_a_6_config.institutionInfo,g=e(".component-c129-a-6 .institutionMenu");
var q=[],o=[];
e.each(r,function(l,k){if(jQuery.inArray(k.institution,o)<0){o.push(k.institution);
q.push(k.institutionText)
}});
g.html('<li role="presentation" class="active"><a role="menuitem" tabindex="-1" href="#" data-iValue="all">All</a></li>');
for(var h=0;
h<o.length;
h++){var p='<li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-iValue="'+o[h]+'">'+q[h]+"</a></li>";
g.append(p)
}};
this.printDept=function(g){var t=d.c29_a_6_config.institutionInfo,r=g||"*",h=e(".component-c129-a-6 .departmentMenu");
var u=[],v=[];
e.each(t,function(l,k){if(r===k.institution||r==="*"){if(jQuery.inArray(k.department,v)<0){v.push(k.department);
u.push(k.departmentText)
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
 * This file contains the code for the Initialzing Ranking Carousel.
 *
 * @project   Manipal GE
 * @date      2013-12-24
 * @author    Syed Tanzeem, SapientNitro <stanzeem@sapient.com>
 * @licensor  CLIENTNAME
 * @site      Manipal
 *
 */
(function(d,e,f){e.log=function(a){if(MODULE.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(a)
}};
d.manipalAdvantage=(function(){function a(){var b=this;
this.init=function(){b.advantageComponentWeb();
e(document).ready(function(){if(e("body").hasClass("manipal-mobile")){b.advantageComponentMobile();
b.advantageCarouselNew()
}})
};
this.advantageCarouselNew=function(){e(".manipal-advantage .flexslider").flexslider({animation:"slide",slideshowSpeed:"6000",directionNav:true,slideshow:false,itemWidth:240,itemMargin:15,minItems:1,includeItemMargin:true})
};
this.advantageComponentWeb=function(){var h="";
var c="";
e.each(d.advantageComponent,function(j,g){if(g.go_linkType=="false"){c="<a href='"+g.viewResearchLink
}else{c="<a href='"+g.viewResearchLink+"' target='_blank'"
}if(g.imageText=="image"){h+="<div class='col-xs-12 col-md-3'><div class='thumbnail'><div class='dark-bg'><h3 class='research-icon'><img src='"+g.headIcon+"' class='advantage-icon-style'/>"+g.researchHead+"</h3></div><p class='image-holder'><img src='"+g.imageHolder+"' width='100%' height='231' alt='Industrial tie-ups' /></p><span class='view-link light-text'>"+c+"' class='view-arrow-icon-white'>"+g.viewResearch+"</a></span></div></div>"
}else{h+="<div class='col-xs-12 col-md-3'><div class='thumbnail'><div class='bright-bg'><h3 class='research-icon'><img src='"+g.headIcon+"' class='advantage-icon-style'/>"+g.researchHead+"</h3></div><div class='thumbnail-content rte-wrapper'>"+g.thumbnailContent+"</div><span class='view-link'>"+c+"' class='view-arrow-icon'>"+g.viewResearch+"</a></span></div></div>"
}});
e(".manipal-advantage .advantage-web-view").empty();
e(".manipal-advantage .advantage-web-view").append(h)
};
this.advantageComponentMobile=function(){var h="";
var c="";
e.each(d.advantageComponent,function(j,g){if(g.go_linkType=="false"){c="<a href='"+g.viewResearchLink
}else{c="<a href='"+g.viewResearchLink+"' target='_blank'"
}if(g.imageText=="image"){h+="<li><div class='thumbnail'><div class='dark-bg'><h3 class='research-icon'><img src='"+g.headIcon+"' class='advantage-icon-style'/>"+g.researchHead+"</h3></div><p class='image-holder'><img src='"+g.imageHolder+"' width='100%' height='231' alt='Industrial tie-ups' /></p><span class='view-link "+g.viewClass+"'>"+c+"' class='"+g.viewResearchIcon+"'>"+g.viewResearch+"</a></span></div></li>"
}else{h+="<li><div class='thumbnail'><div class='bright-bg'><h3 class='research-icon'><img src='"+g.headIcon+"' class='advantage-icon-style'/>"+g.researchHead+"</h3></div><div class='thumbnail-content rte-wrapper'>"+g.thumbnailContent+"</div><span class='view-link "+g.viewClass+"'>"+c+"' class='"+g.viewResearchIcon+"'>"+g.viewResearch+"</a></span></div></li>"
}});
e(".advantage-mobile-view ul.slides").empty();
e(".advantage-mobile-view ul.slides").append(h)
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(d,e,f){d.smoothScrollHome=(function(){function a(){var s=this;
var b=[],c=[],w=1000,x=null,r=500,q=100,u=522,p=true,v=true,t=250;
this.manualSelectLeftNav=function(g,h){e.each(b,function(i){if(i>0){if(g>b[i-1]&&g<b[i]){h.prevScrollTop=b[i-1];
if(i===1){return
}var j=e(".mage-sidebar > .sidenav").find("li")[i-2];
e(j).css({height:"60%",backgroundColor:"#5A5954"}).addClass("vertical-nav-active").find(".inspired-icon span").addClass("selected").end().find(".inspired-icon").css("background",'url("/etc/designs/manipal/muj/muj-clientlibs/images/left-nav-icon-bg.png") no-repeat').end().find(".inspired-content").css("border-bottom","none").find("h3 a").css({"font-size":"0.8em",color:"#ffffff"}).end().end().siblings().css({height:"54px",backgroundColor:"#ffffff"}).css("border-bottom","1px solid #ccc").removeClass("vertical-nav-active").find(".inspired-icon span").removeClass("selected").end().find(".inspired-icon").css("background","none").end().find(".inspired-content").find("h3 a").css({"font-size":"0.72em",color:"#000000"})
}}})
};
this.manualStickLeftNav=function(g){if(g>=b[1]){if(p){e(".main-nav-container").addClass("stuck");
e(".bs-docs-container").css("margin-top","43px");
p=false
}}else{e(".main-nav-container").removeClass("stuck");
e(".bs-docs-container").css("margin-top","0px");
p=true
}};
this.manualHideShowLeftNav=function(g){var h=g-c[0];
if(h>0){var i=u-h;
e(".mage-sidebar").css("height",i+"px")
}else{e(".mage-sidebar").removeAttr("style")
}};
this.manualHideShowTopNav=function(g){var h=g-c[1];
if(h>=0){e(".learning > a").css({visibility:"visible",opacity:1});
e(".learning > a").css({visibility:"visible",opacity:1});
e(".sidebar-top-banner").css({visibility:"hidden",opacity:0});
e(".mage-sidebar-area").css("visibility","hidden")
}else{e(".mage-sidebar-area").css("visibility","visible")
}};
this.manualSelectTopNav=function(g,h){if(g>c[1]&&g<c[2]){e(".sticky-nav-container").find("li[data-nav-index=1]").siblings("li").find("a").removeClass("active").end().end().find("a").addClass("active")
}else{if(g>c[2]&&g<c[3]){e(".sticky-nav-container").find("li[data-nav-index=2]").siblings("li").find("a").removeClass("active").end().end().find("a").addClass("active")
}else{}}};
this.handleWindowScroll=function(g){e(window).scroll(function(){var h=e(window).scrollTop();
s.manualStickLeftNav(h);
s.manualHideShowLeftNav(h);
if(v){s.manualSelectLeftNav(h,g);
s.manualHideShowTopNav(h);
s.manualSelectTopNav(h,g)
}})
};
this.selectLeftNav=function(h){var g=r;
e(h).animate({height:"60%",backgroundColor:"#5A5954"},g).addClass("vertical-nav-active").find(".inspired-icon span").addClass("selected").end().find(".inspired-icon").css("background",'url("/etc/designs/manipal/muj/muj-clientlibs/images/left-nav-icon-bg.png") no-repeat').end().find(".inspired-content").css("border-bottom","none").find("h3 a").animate({"font-size":"0.8em",color:"#ffffff"},g).end().end().siblings().removeClass("vertical-nav-active").animate({height:"54px",backgroundColor:"#ffffff"},g).css("border-bottom","1px solid #ccc").find(".inspired-icon span").removeClass("selected").end().find(".inspired-icon").css("background","none").end().find(".inspired-content").find("h3 a").animate({"font-size":"0.72em",color:"#000000"},g)
};
this.selectTopNav=function(i,h){var g=e(".sticky-nav-container > li");
if(!i){return
}g.find("a").switchClass("active","",250);
e.each(c,function(k,j){if(h.prevScrollTop==j&&k<3){e(".sticky-nav-container").find("li[data-nav-index="+(k)+"]").find("a").switchClass("","active",500)
}})
};
this.topBannerAnimation=function(h){var g=t,i=e(".learning > .banner_anim");
if(h){e(".sidebar-top-banner").animate({opacity:0});
setTimeout(function(){e(".learning > a").css("visibility","visible");
e(".learning > a").animate({opacity:1},g);
e(".sidebar-top-banner").css("visibility","hidden");
e(".mage-sidebar-area").css("visibility","hidden")
},(g/2))
}else{g=g/2;
e(".mage-sidebar-area").css("visibility","visible");
i.animate({opacity:1,visibility:"visible"},g);
e(".learning > a").animate({opacity:1},g);
i.animate({top:"20px",left:"15px",width:"100px",height:"25px"},g);
e(".sidebar-top-banner").css("visibility","visible");
setTimeout(function(){e(".sidebar-top-banner").animate({opacity:1},g);
e(".learning > a").css("visibility","visible");
i.css({opacity:0,visibility:"hidden"})
},(g*2))
}};
this.topNavClick=function(h){var g=e(".sticky-nav-container > li");
g.on("click",function(k){k.preventDefault();
v=false;
var l=this,i=e(window).scrollTop();
var j=false;
if(jQuery.inArray(i,c)>=0){j=true
}g.find("a").removeClass("active");
e(this).find("a").addClass("active");
e.each(c,function(n,m){if((e(l).attr("data-nav-index")==(n)&&i!=m)){if(n==0){m=b[1];
v=true
}h.prevScrollTop=m;
if(!j){if(n==0){setTimeout(function(){s.selectTopNav(true,h);
s.topBannerAnimation(false)
},w)
}else{setTimeout(function(){s.selectTopNav(false,h);
s.topBannerAnimation(true)
},(w/2))
}}else{if(n==0){setTimeout(function(){s.selectTopNav(true,h);
s.topBannerAnimation(false)
},w/2)
}}s.scrollTo(m,w,x);
return false
}});
setTimeout(function(){v=true
},w+q)
})
};
this.mobileTopNavClick=function(h){var g=e(".sticky-nav-container > li");
g.on("click",function(i){i.preventDefault();
var k=e(this),j=e(k).data("nav-index");
if(j>0&&e("#videoplanner").length!=0){j--
}g.find("a").removeClass("active");
e(this).find("a").addClass("active");
e.each(c,function(m){if(j==m){var o=c[m],l=1000,n=null;
e("body,html").animate({scrollTop:o+"px"},{duration:l},{easing:n})
}})
})
};
this.leftNavClick=function(g){var i=e(".mage-sidebar > .sidenav"),j=i.find("li"),h=g.primaryStickyHeight;
i.on("click","li",function(k){k.preventDefault();
v=false;
s.selectLeftNav(this);
var l=j.index(this);
s.scrollTo(b[l+1],w,x);
g.prevScrollTop=b[l+1];
setTimeout(function(){v=true
},w+q)
})
};
this.scrollUp=function(g){var h=e(".mage-sidebar > .sidenav"),i=h.find("li");
e.each(b,function(k,j){if(g.prevScrollTop===j){if(b[k]<=c[1]){s.topBannerAnimation(false);
setTimeout(function(){s.selectLeftNav(h.find("li")[k-2]);
s.scrollTo(b[k-1],w,x)
},t)
}else{s.selectLeftNav(h.find("li")[k-2]);
s.scrollTo(b[k-1],w,x)
}g.prevScrollTop=b[k-1];
if(b[k]>c[1]){s.selectTopNav(true,g)
}else{s.selectTopNav(false,g)
}return false
}});
setTimeout(function(){v=true
},w+t)
};
this.scrollDown=function(g){var h=e(".mage-sidebar > .sidenav"),i=h.find("li");
e.each(b,function(k,j){if(g.prevScrollTop===j&&(k<b.length-1)){if(b[k]<c[0]){s.selectLeftNav(h.find("li")[k]);
s.selectTopNav(false,g)
}if(b[k]==c[0]){setTimeout(function(){s.topBannerAnimation(true)
},w)
}s.scrollTo(b[k+1],w,x);
g.prevScrollTop=b[k+1];
if(b[k]>=c[0]){s.selectTopNav(true,g)
}return false
}});
setTimeout(function(){v=true
},w+t)
};
this.scrollTo=function(i,g,h){e("body,html").animate({scrollTop:i+"px"},{duration:g},{easing:h})
};
this.handleScroll=function(g){e(".hom-sec-nav-item").find("a").removeClass("active");
e.each(b,function(h){if(h>0&&g>=b[h]&&g<b[h+1]){if(h==2){h++
}var i=e(".hom-sec-nav-item")[h-1];
if(!e(i).find("a").hasClass("active")){e(".hom-sec-nav-item").find("a").removeClass("active");
e(i).find("a").addClass("active")
}}})
};
this.mouseWheelEventHandler=function(g){e(document).bind("mousewheel DOMMouseScroll",function(j){if(e(j.target).parents(".discipline-list-container").length>0){return
}j.preventDefault();
var h=j.originalEvent.wheelDelta||-j.originalEvent.detail;
var i=e(window).scrollTop();
var k=new Date().getTime();
if(k-g.lastAnimation<w+500){return
}if(h<0||j.deltaY<0){if(i>=b[b.length-1]){return
}v=false;
s.scrollDown(g)
}else{if(i<=b[0]){return
}v=false;
s.scrollUp(g)
}g.lastAnimation=k
})
};
this.keyDownEventHeander=function(g){e(document).bind("keydown",function(i){if(i.keyCode===38||i.keyCode===40){i.preventDefault()
}var j=new Date().getTime();
var h=e(window).scrollTop();
if(j-g.lastAnimation<w+500){return
}if(i.keyCode===38){if(h<=b[0]){return
}v=false;
s.scrollUp(g)
}else{if(i.keyCode===40){if(h>=b[b.length-1]){return
}v=false;
s.scrollDown(g)
}}g.lastAnimation=j
})
};
this.prepareScrollPoints=function(){if(e(".news-flash-banner").hasClass("hide-news-flash")){var I=e(".top-navigation").outerHeight(true)
}else{var I=e(".top-navigation").outerHeight(true)+e(".news-flash-banner").outerHeight(true)
}var m=e(".primary-nav-container").outerHeight(true);
var i=[0],G=[],j=0;
var g=0;
var h=e(window).width();
if(h<768){I=e(e(".manipal-mobile-view")[0]).outerHeight(true);
g=e(".mobile-hero-container").outerHeight(true);
j+=(g-114)+I
}else{g=e(".hero-container").outerHeight(true);
j+=(g-70)+I
}i.push(j);
var J=e(".bs-docs-container  section.learning-carousel-sections");
if(h<768){j+=e("#inspired-learning").outerHeight(true);
i.push(j)
}else{e.each(J,function(y){j+=e(J[y]).find(".slides li img").height();
i.push(j)
})
}var F=e(".heritage-container").outerHeight();
G.push(i[i.length-2]);
G.push(i[i.length-1]);
j+=F;
G.push(j);
i.push(j);
var n=e(".news-and-events").outerHeight(true);
j+=n;
G.push(j);
i.push(j);
var o=e("#advantage").outerHeight(true);
j+=o;
G.push(j);
i.push(j);
var E=e(".above-footer-links").outerHeight(true);
j+=E;
i.push(j);
var l=e(window).height();
var k=e(document).height();
if((j+l)<k){j+=l;
i.push(j)
}var H=e(J[0]).find(".slides li img").height();
u=H+25;
e(".mage-sidebar-area").height(u);
e(".mage-sidebar-area .sidenav").height(u-150);
b=i;
c=G
};
this.setDefaults=function(){e(window).scrollTop(0);
e(document).mousedown(function(h){if(h.which===2){h.preventDefault()
}return true
});
s.prepareScrollPoints();
var g={primaryStickyHeight:e(".js-primary-sticky").outerHeight(),isFixedState:false,lastAnimation:0,prevScrollTop:0,scrollDirection:"null"};
d.stickyNavDefaults=g
};
this.init=function(){var g=e(window).width();
e(".js-primary-sticky").css("top","auto");
e(".learning > a").css({visibility:"visible",opacity:1});
if(e(".bs-docs-container  section.learning-carousel-sections").length!=0){e(document).ready(function(){if(g<768){s.setDefaults();
e(window).scroll(function(){var h=e(window).scrollTop();
s.handleScroll(h)
});
s.mobileTopNavClick(d.stickyNavDefaults);
return false
}setTimeout(function(){s.setDefaults();
s.mouseWheelEventHandler(d.stickyNavDefaults);
s.keyDownEventHeander(d.stickyNavDefaults);
s.leftNavClick(d.stickyNavDefaults);
s.topNavClick(d.stickyNavDefaults);
s.handleWindowScroll(d.stickyNavDefaults)
},1000)
})
}return this
};
return this.init()
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
/*!
 * This file contains the code for the Initialzing Map Based Content.
 *
 * @project   Manipal GE
 * @date      2013-12-24
 * @author    Shaunak Trivedi, SapientNitro <strivedi4@sapient.com>
 * @licensor  CLIENTNAME
 * @site      Manipal
 *
 */
(function(d,e,f){d.mapbasedcontent=(function(){var a=null;
function b(){var c=this;
c.createStreetView=function(n,r,s){var t={center:new google.maps.LatLng(n,r),zoom:s,scrollwheel:false,disableDoubleClickZoom:true,draggable:false};
var o=new google.maps.Map(document.getElementById("pano-canvas"),t);
var p={position:new google.maps.LatLng(n,r),enableCloseButton:true,scrollwheel:false,visible:true,pov:{heading:34,pitch:10}};
var q=new google.maps.StreetViewPanorama(document.getElementById("pano-canvas"),p);
o.setStreetView(q);
google.maps.event.addListener(q,"closeclick",function(){e(".map-container #pano-canvas").remove()
})
};
c.createMap=function(l,m,n,o){var p={zoom:c.zoomLevel(n),center:new google.maps.LatLng(l,m),styles:o,keyboardShortcuts:false,scrollwheel:false,draggable:false,scaleControl:true,disableDoubleClickZoom:true};
c.map=new google.maps.Map(document.getElementById("map-canvas"),p);
google.maps.event.addListener(c.map,"click",function(){if(a){a.close()
}});
e("body").keydown(function(g){var h=g.keyCode?g.keyCode:g.which;
if(h==27&&a){a.close()
}})
};
c.addMarker=function(p,q,r){var u=new google.maps.LatLng(q.lat,q.lng);
var s=new google.maps.Marker({position:u,map:c.map,icon:"/etc/designs/manipal/"+r+"/"+r+"-clientlibs/images/location-marker.png",title:q.name});
google.maps.event.addListener(s,"click",function(h){var i=document.createElement("div");
i.className="map-info";
if(q.linkType=="false"){i.innerHTML="<img src='/etc/designs/manipal/images/map-infobox-bg.png' /><div class='map-info-content'><H2 class='map-info-heading'>"+q.ins_name+"</H2><div>"+q.ins_addr+"</div><div class='map-info-separator'></div><a href='"+q.ins_link+".html'><img src='/etc/designs/manipal/images/map-info-linkarrow.png' /><div>"+q.ins_linknm+"</div><a></div>"
}else{i.innerHTML="<img src='/etc/designs/manipal/images/map-infobox-bg.png' /><div class='map-info-content'><H2 class='map-info-heading'>"+q.ins_name+"</H2><div>"+q.ins_addr+"</div><div class='map-info-separator'></div><a href='"+q.ins_link+"' target='_blank'><img src='/etc/designs/manipal/images/map-info-linkarrow.png' /><div>"+q.ins_linknm+"</div><a></div>"
}var g={content:i,disableAutoPan:false,maxWidth:0,pixelOffset:new google.maps.Size(-140,0),zIndex:null,boxStyle:{opacity:1,width:"280px",marginLeft:"140px"},closeBoxPosition:"absolute",closeBoxRight:"10px",closeBoxMargin:"17px 0 0",closeBoxURL:"/etc/designs/manipal/images/map-info-close.png",infoBoxClearance:new google.maps.Size(1,1),isHidden:false,pane:"floatPane",enableEventPropagation:false};
c.map.setCenter(s.getPosition());
if(a){a.close()
}a=new InfoBox(g);
a.open(c.map,s);
e(".infoBox").focus()
});
var v=q.name;
var k={content:v,boxStyle:{fontFamily:"Lucida Sans W01",textAlign:"center",fontSize:"8pt",width:"50px",textShadow:"-1px 0 #FFFFFF, 0 1px #FFFFFF, 1px 0 #FFFFFF, 0 -1px #FFFFFF"},disableAutoPan:true,pixelOffset:new google.maps.Size(-25,0),position:new google.maps.LatLng(49.47216,-123.76307),closeBoxURL:"",isHidden:false,pane:"mapPane",enableEventPropagation:true};
var t=new InfoBox(k);
t.open(c.map,s)
};
c.zoomLevel=function(i){i=i.toUpperCase();
var j=0;
switch(i){case"GLOBAL":j=2;
break;
case"COUNTRY":j=4;
break;
case"CITY":j=12;
break;
default:j=0
}return j
};
this.init=function(){if(typeof google!="undefined"){e("#map-canvas").on("keyup",function(){});
google.maps.visualRefresh=true;
var h=function(){c.createMap(d.mapBasedContentConfig.centerMarker.lat,d.mapBasedContentConfig.centerMarker.lng,d.mapBasedContentConfig.zoomLevel,d.mapBasedContentConfig.mapStyle);
if(document.getElementById("pano-canvas")){c.createStreetView(parseInt(d.mapBasedContentConfig.centerMarker.lat),parseInt(d.mapBasedContentConfig.centerMarker.lng),14)
}var g=e("#domainValue").val().toLowerCase();
d.mapBasedContentConfig.markers.push(d.mapBasedContentConfig.centerMarker);
e.each(d.mapBasedContentConfig.markers,function(l,k){c.addMarker(l,k,g)
})
};
google.maps.event.addDomListener(window,"load",h)
}return this
}
}return new b()
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
(function(b){b.fn.testimonialCarousel=function(l){var l=l||{},h=l.inputData,a="."+l.containerData,k=b(this);
var i=b(window).width();
testimonialsCarousel=function(){setTimeout(function(){b(".testimonials-container .flexslider").flexslider({animation:"slide",slideshowSpeed:"6000",directionNav:false,slideshow:false,itemWidth:218,itemMargin:20,minItems:0,includeItemMargin:true})
},1000)
};
flexSliderDom=function(){var c=0;
b.each(h,function(f,d){c+=1;
if(i<768){if(c>=5){return true
}}if(d.quoteImagePath!=""){var e="<li><div class='testimonial-content "+d.sliderClass+" '><div class='testimonial-image-holder'><div class='testimonial-imageMasking'><img src='"+d.thumbnailImagePath+"' alt="+d.personName+"/></div></div><div class='clear'></div><div class='testimonial-content-holder'><img src='/etc/designs/manipal/images/testimonial-downarrow.png' class='testimonial-triangle-img' /><div class='testimonial-quote-indicator'><div class='testimonial-masking-quotes'><img src='"+d.quoteImagePath+"' alt='Quotes'/></div></div><div class='testimonial-text'><p class='testimonial-quote'>"+d.quoteText+"</p><p class='testimonial-person-details'><span class='testimonials-name'>"+d.personName+"</span><span class='testimonials-designation'>"+d.personDesignation+"</span><span class='testimonial-institution'>"+d.personInstitution+"</span></p><p><a href='"+d.readMoreLink+"' class='testimonials-read-more' title='READ MORE'><span class='testimonials-read-more-text'>"+d.readMoreText+"</span><span class='new_class testimonials-read-more-icon'><img src='"+d.readMoreIcon+"' alt='Read More' /></span></a></p></div><div class='clear'></div></div></div></li>"
}else{e="<li><div class='testimonial-content "+d.sliderClass+" '><div class='testimonial-image-holder'><div class='testimonial-imageMasking'><img src='"+d.thumbnailImagePath+"' alt="+d.personName+"/></div></div><div class='clear'></div><div class='testimonial-content-holder'><img src='/etc/designs/manipal/images/testimonial-downarrow.png' class='testimonial-triangle-img' /><div class='testimonial-text no-quote'><p class='testimonial-quote'>"+d.quoteText+"</p><p class='testimonial-person-details'><span class='testimonials-name'>"+d.personName+"</span><span class='testimonials-designation'>"+d.personDesignation+"</span><span class='testimonial-institution'>"+d.personInstitution+"</span></p><p ><a href='"+d.readMoreLink+"' class='testimonials-read-more' title='READ MORE'><span class='testimonials-read-more-text'>"+d.readMoreText+"</span><span class='new_class testimonials-read-more-icon'><img src='"+d.readMoreIcon+"' alt='Read More'/></span></a></p></div><div class='clear'></div></div></div></li>"
}b(a).find(".testimonials-container .flexslider ul.slides").append(e);
removeEmptyLink()
})
};
removeEmptyLink=function(){b.each(b(a).find(".testimonials-container .testimonials-read-more"),function(d,c){if(b(this).attr("href")==""||b(this).attr("href")==" "){b(this).hide()
}})
};
hideTestimonials=function(){var c=b(a).find("#testimonial .sticky-nav-data .sticky-title").text();
c=c.trim();
if(b(a).find("#pubOrDis").val()=="publishOrDisabled"){if(c.length===0){b(a).find("#testimonial").remove()
}}};
var j=function(){b(function(){testimonialsCarousel()
});
flexSliderDom();
hideTestimonials();
if(!b.trim(b(a).find(".testimonials-container").find(".view-all").text())){b(a).find(".testimonials-container").find(".view-all").addClass("hide")
}};
j()
}
})(jQuery);
if(window.manipal.advantageComponent!=undefined){window.manipal.manipalAdvantage.init()
}if(window.manipal.heroCarouselConfig!=undefined){window.manipal.heroCarousel.init()
}if(window.manipal.rfiConfig!=undefined){}if(window.manipal.rfiPopupFormConfig!=undefined){window.manipal.rfiPopupFormPopupForm.init()
}if(window.manipal.accreditationsConfig!=undefined){window.manipal.accreditationsCarousel.init()
}if(window.manipal.mapBasedContentConfig!=undefined){window.manipal.mapbasedcontent.init()
}window.manipal.thumbnailCarouselConfig={};
$(document).ready(function(){var c=($(".hero-container .slides img, .mobile-hero-content li img").length>1)?$($(".hero-container .slides img, .mobile-hero-content li img")[0]):$(".hero-container .slides img, .mobile-hero-content li img");
c.load(function(){var h=new Image();
h.src=c.attr("src");
var b=h.width;
if(b<=640){b=1141
}var g=$(window).width();
if(g<b){var a=b-g;
a=(a/2)*(-1);
$(".hero-container .slides img, .mobile-hero-content li img").css("margin-left",a+"px")
}});
var d=setTimeout(function(){$(".page-container").css("visibility","visible");
if($("#clickabel").val()=="clickBanner"){$("#hero-carousel li").css("cursor","pointer").bind("click",function(b){if($(this).hasClass("flex-active-slide")){var e=$("a.hero-go",$(this)).attr("href");
if(e){document.location=e
}}})
}if($("#clickabel").val()=="clickBanner"){$("div.hero-container a.hero-dark-color").css("display","none");
var a=$("a.hero-go").attr("href");
if(a){$("#list-hero-banner").css("cursor","pointer")
}$(".show_in_ie").bind("click",function(b){if(a){document.location=a
}})
}},1000)
});
setTimeout(function(){if($("#clickabel").val()=="clickIcon"){$("div#list-hero-banner").css("cursor","default")
}else{}},1000);