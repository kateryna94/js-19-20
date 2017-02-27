$(function() {
    var $links = $('.accordion__link');
    var $icons = $('.accordion__icon');
    var $content = $('.accordion__content');


    $links.on('click', function(e) {
        e.preventDefault();
        if ($(this).hasClass('accordion__link__active')) {
            $(this).removeClass('accordion__link__active');
            $(this).siblings('.accordion__content').stop().slideUp(300);
            $icons.removeClass('accordion__icon_active');
            $icons.removeClass("icon-minus").addClass("icon-plus");
        } else {
            $icons.removeClass('accordion__icon_active');
            $(this).find('.accordion__icon').addClass('accordion__icon_active');

            $icons.removeClass("icon-minus").addClass("icon-plus");
            $(this).find('.accordion__icon').removeClass("icon-plus").addClass("icon-minus");

            $links.removeClass("accordion__link_active");
            $(this).addClass("accordion__link_active");

            $content.stop().slideUp(300);
            $(this).siblings('.accordion__content').stop().slideDown(300);
        }
    })






});
