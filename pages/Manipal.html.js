
window.manipal = window.manipal || {};
window.manipal.globalNavConfigPrograms = {};
window.manipal.globalNavConfigPrograms = $.parseJSON($('#primaryNavigation').val());


    window.manipal = window.manipal || {};
    window.manipal.heroCarouselConfig = $.parseJSON($('#carouselId').val());
 
                              
window.manipal = window.manipal || {};
window.manipal.categories = $.parseJSON($('#carouselcontainer').val());

$(document).ready(function () {
	
	var index = Object.keys(manipal.categories).indexOf('discipline')
	if (index >= 0) {
	    $('section[data-scroll-index='+index+'] .categories').append($('.discipline-list'));
	   
	}
});

 	 //var addthis_config = {"data_track_addressbar":false};
	    var h = $(window).height(),
	                w = $(window).width();
	    openGplus('www.google.com');
	
	    function openGplus(url) {
	        $('.gplus a').on('click', function (event) {
				event.preventDefault();
	
	            window.open("https://plus.google.com/share?url="+url+"", "Google +", "width="+w/2+",height="+h/2+", scrollbars=1");
	        });
	    }
	
	    $('.js-live_chat').on('click', function (event) {
	       	event.preventDefault();
	        var RFIPopupFlag = $('#RFIPopupVar').val();
	        var RFIPopupPath = $('#popupPagePathVar').val()+'.html';
	        if(RFIPopupFlag == 'true') {  
	            popItUp(RFIPopupPath);
	        } else {
	            	LC_API.open_chat_window();
					$('#livechat-full').show();
	        }
	    });
	
		function popItUp(url) {
	        $(".rfi-popup-lc").dialog("open");
	        $(".rfi-popup-url").prop('src', url);
	    }
	
	    var LC_API = LC_API || {};
	    LC_API.on_chat_window_hidden = function()
	    {
	        $('#livechat-full').hide();
	    };
	    var LC_API = LC_API || {};
	    LC_API.on_chat_window_minimized = function()
	    {
	        $('#livechat-full').hide();
	    };
	
	    $(window).load(function() {
			$(".rfi-popup-lc").dialog({open: function(event, ui) {
				$(this).css({'top': '0' , 'overflow-y': 'hidden', 'overflow-x': 'hidden'}); },
				autoOpen: false,
				resizable: false,
				height: "auto",
				modal: true,
				dialogClass: 'live_chat_rfi',
				closeOnEscape: true,
				width: 'auto',
				title: 'LIVE CHAT FORM',
				position: ['center',20],
				appendTo: '.page-container'
	        });
	    });
	    
		var liveChatFlag = $('#liveChatVar').val();
	    if(liveChatFlag == 'false' || liveChatFlag.length == 0) {    	
	        var __lc = {};
	      __lc.license = $("#livechatLicenseId").val();
	      //__lc.skill = 1;
	      __lc.group = $("#livechatGroupId").val();
	
	      $(window).load(function(){
	        var live_chatId = $("#livechatId").val();
	        var lc = document.createElement('script'); lc.type = 'text/javascript'; lc.async = true;
	        lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://')+live_chatId;
	        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(lc, s);

	    });
	      var LC_API = LC_API || {};
	
	      LC_API.on_before_load = function()
	      {
	      	// don't hide the chat window only if visitor
	      	// is currently chatting with an agent
	          	if (LC_API.visitor_engaged() === false)
	          {
	          	LC_API.hide_chat_window();
	          }
	
	      };
	      LC_API.on_chat_window_minimized = function()
	      {
	          	LC_API.hide_chat_window();
	      };
	
	  	}        
	
    function initFbAllJs(){
        if(typeof(FB) == 'undefined'){
            return;
        }
        FB.Event.subscribe('xfbml.render',function(){
            $('.FB_Loader').css('background','url()');
        });
    }


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-27054122-1', 'auto');
ga('send', 'pageview');

    {  "@context" : "http://schema.org",
       "@type" : "WebSite",
       "name" : "Manipal Jaipur",
       "alternateName" : "Manipal University Jaipur",
       "url" : "http://jaipur.manipal.edu/"
    }
  (function() {
  var _fbq = window._fbq || (window._fbq = []);
  if (!_fbq.loaded) {
    var fbds = document.createElement('script');
    fbds.async = true;
    fbds.src = '//connect.facebook.net/en_US/fbds.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(fbds, s);
    _fbq.loaded = true;
  }
})();
window._fbq = window._fbq || [];
window._fbq.push(['track', '6019316855628', {'value':'0.00','currency':'INR'}]);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-809263827');

  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '1753691321364854');
  fbq('track', 'PageView');

