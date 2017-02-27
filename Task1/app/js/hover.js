$(function() {
  $('.service__block__hover div').hover(function(){
    $(this).stop(true, false).animate({opacity: .7}, 300);
 }, function(){
   $(this).stop(true, false).animate({opacity: 0}, 300);
 });


});
