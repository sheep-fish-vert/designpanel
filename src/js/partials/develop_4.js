$.scrollbarWidth=function(){var a,b,c;if(c===undefined){a=$('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body');b=a.children();c=b.innerWidth()-b.height(99).innerWidth();a.remove()}return c};

var scrollBar = $.scrollbarWidth();

function mainTab(){
    if($('.main-menu')){
        // $('.main-menu .menu-tab li').click(function(event) {
        //     event.preventDefault();
        //     $('.main-menu .menu-tab li').removeClass('active');
        //     $('.main-center li').removeClass('active').slideUp(400);
        //     var elem = $(this).index();
        //     $(this).addClass('active');
        //     $('.main-center li').eq(elem).addClass('active').slideDown(400);
        // });
        $('.main-center li').first().show();
        var timer = null;
        function mainTabTimeout(){
            timer = setInterval(function(){
                var elemTab = $('.main-menu .menu-tab li.active');
                var elemCount = $('.main-menu .menu-tab li.active').index();
                $('.main-menu .menu-tab li').removeClass('active');
                $('.main-center li').slideUp(400,function(){
                    $(this).removeClass('active');
                });
                if(elemCount>=$('.main-menu .menu-tab li').length-1){
                    elemCount = -1;
                }
                $('.main-menu .menu-tab li').eq(elemCount+1).addClass('active');
                $('.main-center li').eq(elemCount+1).slideDown(400,function(){
                    $(this).addClass('active');
                });

            },4000);
        }
        mainTabTimeout();
        /*hover*/
        // $('.main-menu').hover(function() {
        //     clearInterval(timer);
        // }, function() {
        //     mainTabTimeout();
        // });
    }
}

function menuMobileAside(){
    $('.menu-tab-mobile').click(function() {
        $(this).toggleClass('active');
        $('.menu-tab>ul').stop().slideToggle();
    });
}

function variantsShponSlider(){

    $('.shpon-variants-slider-wrap').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots:true
    });

}

function textBlockS(){
    $('.text-block a[href$=".jpg"], .text-block p a[href$=".gif"]').fancybox();
}

$(document).ready(function(){
    textBlockS();
    mainTab();
    menuMobileAside();
    //variantsShponSlider();

    $('.fancybox').fancybox({
        fitToView:true,
        autoSize:true,
        padding:0,
        wrapCSS:"fancybox-normal"
    });
});

$(window).load(function(){

});

$(window).resize(function(){
    if($(window).width()+scrollBar>992){
        $('.menu-tab:not(.menu-tab-main) ul').show();
    }else{
        $('.menu-tab:not(.menu-tab-main) ul').hide();
    }
});