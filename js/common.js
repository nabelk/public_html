$(function (){
    $('.bxslider').bxSlider({
        mode: 'fade',autoHover:true,auto:true
    });
    $.slidebars();
    var nav = $('.nav-text > ul').children('li');
    var timer = null;
    nav.each(function (index){
        $(this).mouseover(function (){
            nav.children('ul').css({display:'none'});
            nav.eq(index).children('ul').css({display:'block'});
            clearTimeout(timer);
        }).mouseout(function (){
            timer = setTimeout(function() {
                nav.eq(index).children('ul').css({display:'none'});
            }, 150);
        });
    });
    $('div.reservation').mouseover(function (){
        $('.drop-wrap').show();
    }).mouseout(function (){
        $('.drop-wrap').hide();
    });
});