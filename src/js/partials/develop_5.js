$(document).ready(function(){
    $(document).on('click', '.butter', function(){
        $(this).toggleClass('active');
    });
    tabs();

    $(document).on('click', '.closet', function(){
        $(this).parents('.item').find('.thumbs').click();
    });
     $(location.hash).find('.thumbs').click();

});
$(window).load(function(){
});
$(window).resize(function(){
});
function tabs(){
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
    function positionLeft(object){
       var left = object.position().left;
       left= 0 - left;
        object.find('.description').css('left',left);
    }
    function docHeight(){
        $('.colection1').removeAttr('style');
        if($('.colection-wrap .active').length>0){

            var itemHeight = $('.colection-wrap .active').find('.description').height();
           var containerHeight = $('.itemZ-wrap').height();
           var abs = itemHeight - containerHeight;
           var thumbsHeight = $('.colection-wrap .active').height();
            console.log($(this).parent('.item').height());


            $('.itemZ-wrap').height( (containerHeight+thumbsHeight+abs + $('.colection-wrap .active').position().top) );
        }
    }
}

