$(document).ready(function(){
function icons(){	

eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('$(".b .c-d").e(\'<6 f="2"> <a g="h://i.j.k/#l">m n</a></6>\').7(o);$(".2").7(p).3("q",0.4);$(5(){$(".2").r(5(){$(8).3("9",1)}).s(5(){$(8).3("9",0.4)})});',29,29,'||credit|fadeTo||function|div|delay|this|fast||jgallery|zoom|container|append|class|href|http|www|jalbumskins|com|jagallery|jGallery|Skin|2000|5E3|slow|mouseenter|mouseleave'.split('|'),0,{}))


$('.jgallery .zoom-container').prepend('<div class="navLeft"></div>');




// Google Fonts

(function( $ ) {
  $.fn.google_fonts = function(options) {
  	var defaults = {
        fontname: "arial"
    };
    var options = jQuery.extend(defaults, options);
    var fontname = options.fontname;
    fontname = fontname.replace(/ /gi, "+");
    $("head").append('<link href="http://fonts.googleapis.com/css?family='+fontname+'" rel="stylesheet" type="text/css">');
    jQuery(this).css("font-family",options.fontname);
    return this;
  };
})( jQuery );

$("body, .jgallery,.jgallery .title").google_fonts({fontname: "Arvo"});
}
 $( function() {	
        $( '#gallery' ).jGallery( {
		    mode: 'full-screen', // [ full-screen, standard, slider ]
            width: '800px', // (only for standard or slider mode)
            height: '450px', // (only for standard or slider mode)
            autostart: true, // (only for full-screen mode)
            autostartAtImage: 1,
            autostartAtAlbum: 1,
            canClose: true, // (only for full-screen mode)
            canResize: true,
    		canZoom: true, // Boolean; If set as 'true' you can zoom photos.; [ true, false ]
			draggableZoom: true,
    		draggableZoomHideNavigationOnMobile: true, // Boolean; If set as 'true' navigation of draggable zoom will be hidden when width of window <= 'maxMobileWidth' parameter (default value - 767px); [ true, false ]
            canChangeMode: true,
            backgroundColor: '#000000',
            textColor: '#ffffff',
			 browserHistory: true,
			 hideThumbnailsOnInit: false, // Boolean; If set as 'true', thumbnails will be minimized by default, when jGallery will be started(only when 'thumbnails' parameter set as 'true').; [ true, false ]
    		maxMobileWidth: 767, // Number; Maximum width(px) for jGallery shows a view for mobile device.
            thumbnails: true,
            thumbnailsFullScreen: true,
			thumbnailsHideOnMobile: true, // Boolean; If set as 'true', thumbnails will be hidden when width of window <= 'maxMobileWidth' parameter (default value - 767px).; [ true, false ]
            thumbType: 'image', // [ image | square | number ]
            thumbnailsPosition: 'bottom', // [ top | bottom | left | right ]
			 reloadThumbnails: true, //Reload thumbnails when function jGallery() is called again for the same item
            thumbWidth: 70, //px
            thumbHeight: 70, //px
            thumbWidthOnFullScreen: 100, //px
            thumbHeightOnFullScreen: 100, //px 
            canMinimalizeThumbnails: true,
            transition: 'moveToLeft_moveFromRight', // http://jgallery.jakubkowalczyk.pl/demo.php
			transitionBackward: 'auto', // http://jgallery.jakubkowalczyk.pl/customize
            transitionWaveDirection: 'forward', // [ forward | backward ]
            transitionCols: 1,
            transitionRows: 3,
            transitionDuration: '0.3s',  
            showTimingFunction: 'ease-in-out', // [ linear | ease | ease-in | ease-out | ease-in-out | cubic-bezier(n,n,n,n) ]
            hideTimingFunction: 'ease-in-out', // [ linear | ease | ease-in | ease-out | ease-in-out | cubic-bezier(n,n,n,n) ]
            zoomSize: 'fit', // [ fit | original | fill ] (only for full-screen or standard mode)
            title: true,
			titleExpanded: true, // Boolean; If set as 'true', in bottom area of zoomed photo will be shown title from alt attribute of img(only when 'title' has been set as true).; [ true, false ]
			swipeEvents: true, // Boolean; If set as 'true', you can switch to next/prev photo and thumbnails using swipe events.; [ true, false ]
            slideshow: true,
            slideshowAutostart: false,
            slideshowCanRandom: false,
            slideshowRandom: false,
            slideshowRandomAutostart: false,
            slideshowInterval: '3s',
            preloadAll: false,
            appendTo: 'body', // selector (only for full-screen mode)
            disabledOnIE8AndOlder: true,
            initGallery: function() { },
            showPhoto: function() {},
            beforeLoadPhoto: function() {},
            afterLoadPhoto: function() {},
            showGallery: function() {},
            closeGallery: function() {}
        } );
icons();
});	
			
});				
        
