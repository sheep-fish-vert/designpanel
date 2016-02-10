function mainTab(){
    if($('.main-menu')){
        $('.main-menu .menu-tab li').click(function() {
            $('.main-menu .menu-tab li').removeClass('active');
            $('.main-center li').removeClass('active').hide();
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
                $('.main-center li').removeClass('active').slideUp();
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

$(document).ready(function(){
    mainTab();
});

$(window).load(function(){

});

$(window).resize(function(){

});