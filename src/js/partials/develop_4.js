function mainTab(){
    if($('.main-menu')){
        $('.main-menu .menu-tab li').click(function() {

            $('.main-menu .menu-tab li').removeClass('active');
            $('.main-center li').removeClass('active').fadeOut();

            var elem = $(this).index();
            console.log(elem);
            $(this).addClass('active');
            $('.main-center li').eq(elem).addClass('active').fadeIn();

        });
         $('.main-center li').first().show();
        var timer = null;
        function mainTabTimeout(){
            timer = setInterval(function(){
                var elemTab = $('.main-menu .menu-tab li.active');
                var elemCount = $('.main-menu .menu-tab li.active').index();

                $('.main-menu .menu-tab li').removeClass('active');
                $('.main-center li').removeClass('active').fadeOut();

                if(elemCount>=$('.main-menu .menu-tab li').length-1){
                    elemCount = -1;
                }
                $('.main-menu .menu-tab li').eq(elemCount+1).addClass('active');
                $('.main-center li').eq(elemCount+1).addClass('active').fadeIn();

            },4000);
        }
        mainTabTimeout();
        /*hover*/
        $('.main-menu').hover(function() {
            console.log('hover');
            clearInterval(timer);
        }, function() {
            console.log('blur');
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