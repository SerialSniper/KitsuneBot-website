$(document).on("mousemove", function(e) {
    var angle = 90 - Math.atan2(($(document).width() - e.pageX), ($(document).height() - e.pageY)) * (180 / Math.PI);

    $(".wheatley-easteregg > img").css({"transform": 'rotate(' + angle + 'deg)'});
    $(".wheatley-easteregg > img").css({"-ms-transform": 'rotate(' + angle + 'deg)'});
    $(".wheatley-easteregg > img").css({"-moz-transform": 'rotate(' + angle + 'deg)'});
    $(".wheatley-easteregg > img").css({"-webkit-transform": 'rotate(' + angle + 'deg)'});
});