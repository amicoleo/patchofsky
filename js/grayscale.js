//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        var scrollCompensate; 
        if ($anchor.attr('href') != '#page-top') {
            scrollCompensate = 0.16; 
        }
        else {
            scrollCompensate = 0; 
        }
        $('html, body').stop().animate({
            //~ scrollTop: $($anchor.attr('href')).offset().top +  $($anchor.attr('href')).heigth()*0.16
            scrollTop: $($anchor.attr('href')).offset().top +  $($anchor.attr('href')).height()*scrollCompensate
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
