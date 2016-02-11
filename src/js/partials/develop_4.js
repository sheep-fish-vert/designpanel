function mainTab(){
    if($('.main-menu')){
        $('.main-menu .menu-tab li').click(function() {
            $('.main-menu .menu-tab li').removeClass('active');
            $('.main-center li').removeClass('active').slideUp(400);
            var elem = $(this).index();
            $(this).addClass('active');
            $('.main-center li').eq(elem).addClass('active').slideDown(400);
        });
        $('.main-center li').first().show();
        var timer = null;
        function mainTabTimeout(){
            timer = setInterval(function(){
                var elemTab = $('.main-menu .menu-tab li.active');
                var elemCount = $('.main-menu .menu-tab li.active').index();
                $('.main-menu .menu-tab li').removeClass('active');
                $('.main-center li').removeClass('active').slideUp(400);
                if(elemCount>=$('.main-menu .menu-tab li').length-1){
                    elemCount = -1;
                }
                $('.main-menu .menu-tab li').eq(elemCount+1).addClass('active');
                $('.main-center li').eq(elemCount+1).addClass('active').slideDown(400);

            },4000);
        }
        mainTabTimeout();
        /*hover*/
        $('.main-menu').hover(function() {
            clearInterval(timer);
        }, function() {
            mainTabTimeout();
        });
    }
}

function menuMobileAside(){
    $('.menu-tab-mobile').click(function() {
        $(this).toggleClass('active');
        $('.menu-tab>ul').stop().slideToggle();
    });
}



$(document).ready(function(){
    mainTab();
    menuMobileAside();

    $('.fancybox').fancybox({
        fitToView:true,
        autoSize:true,
        padding:0
    });
});

$(window).load(function(){

});

$(window).resize(function(){
    if($(window).width()>992){
        $('.menu-tab:not(.menu-tab-main) ul').show();
    }else{
        $('.menu-tab:not(.menu-tab-main) ul').hide();
    }
});