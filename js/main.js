/*=============================================
custom code
=============================================*/

$('.form__header .close').on('click', function(){
    $.fancybox.close()
})

//ajax message
	    $('#form1, #form2, #form3').submit(function(){
	    var dataForm = $(this).serialize();
	    $.ajax({
	        type: 'POST',
	        url: '../mail.php',
	        data: dataForm
	    })
	    .success(function() {
	        alert('Спасибо за сообщение! Мы с вами обязательно свяжемся.')
	    });
	    return false;
	})

/*=====================================================
                    select
=====================================================*/

jQuery(document).ready(function() {

    jQuery('.select__decorate').click(function() {
        var element = jQuery(this).siblings('select');
        open(jQuery(element));
    });

});

function open(elem) {
    if (document.createEvent) {
        var e = document.createEvent("MouseEvents");
        e.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        elem[0].dispatchEvent(e);
    } else if (element.fireEvent) {
        elem[0].fireEvent("onmousedown");
    }
}

/*=====================================================
                      menu
=====================================================*/

$('#menuTrigger, #bottomMenuTrigger').on('click', function(){
    $(this).siblings('.menu').slideToggle();
});


/*=====================================================
                 manufacturers
=====================================================*/

$(document).ready(function(){
    checkSizeManUfacturer();
    $('#manufact .right').on('click', function(){
    if (parseInt($('#manufact .items__wrap').css('margin-right')) > -711) {
    $('#manufact .items__wrap').stop(true,true).animate({
        'margin-left': "-=150px"
    }, 1000);
    }});

    $('#manufact .left').on('click', function(){
    if (parseInt($('#manufact .items__wrap').css('margin-left')) < -109) {
        $('#manufact .items__wrap').stop(true,true).animate({
            'margin-left': "+=150px"
        }, 1000);
    }});
});

$(window).resize(function(){
    checkSizeManUfacturer();
});

function checkSizeManUfacturer(){
    if ($(window).outerWidth() < $('#manufact .items__wrap').outerWidth()) {
        $('#manufact .nav').show();
        $('#manufact .items__wrap').css('margin-left','40px');
    }else{
        $('#manufact .nav').hide();
        $('#manufact .items__wrap').css('margin-left','0px');
    }
}





/*===============================================
plugins
===============================================*/

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

