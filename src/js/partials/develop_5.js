
$(document).ready(function(){

    $(document).on('click', '.butter', function(){
        $(this).toggleClass('active');
    });
    $('.fancybox').fancybox();
    $('.colection-wrap').on('click', '.thumbs', function(event){
        event.isDefaultPrevented();
        $('.colection-wrap .thumbs').not(this).parent('.item').removeClass('active');
        $(this).parent('.item').toggleClass('active');
        docHeight();
         if($('.item.active').length == 0){$('.colection1').removeAttr('style');};
         if($('.item.active').length > 0){positionLeft($('.active'));}
         if($(window).width()<400){
            var widDesc = $('.colection-info').width();
            var leftCenter = (widDesc/2);
            $('.description').width(widDesc);
         }
    });

});

$(window).load(function(){

});

$(window).resize(function(){

});

function positionLeft(object){
   var left = object.position().left;
   left= 0 - left;
    object.find('.description').css('left',left);


}
function docHeight(){
    $('.colection1').removeAttr('style');
    if($('.colection-wrap .active')){
        var abs = 0;
        var con = 0;
        var colH = $('.colection1').height();
        $('.colection-wrap .item .description').each(function() {
            if($(this).height()>abs){abs=$(this).height();}
        });
        $('.colection1').height((abs +colH));
    }
}