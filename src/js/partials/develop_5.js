
$(document).ready(function(){

    $(document).on('click', '.butter', function(){
        $(this).toggleClass('active');
    });

    $('.colection-wrap').on('click', '.item', function(){
        $('.colection-wrap .item').not(this).removeClass('active');
        $(this).toggleClass('active');

        docHeight();
         if($('.item.active').length == 0){$('.colection1').removeAttr('style'); };


    });

});

$(window).load(function(){

});

$(window).resize(function(){

});
function docHeight(){
    $('.colection1').removeAttr('style');
    if($('.colection-wrap .active')){
        var abs = 0;
        var con = 0;

        var colH = $('.colection1').height();
        var risk = $('.main').height()-colH;
        var hed = $('header').height();
        $('.colection-wrap .item .description').each(function() {
            if($(this).height()>abs){abs=$(this).height();}
        });

        if (risk<abs){
            con = abs - risk + colH - hed;
            $('.colection1').height(con);
        }
    }
}