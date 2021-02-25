const path = "res/img/cores/";
const cores = [
    "wheatley",
    "space",
    "adventure",
    "fact"
];

var changed = false;

function updateImage() {
    if($(".wheatley-easteregg > img").offset().top > $(window).scrollTop() + $(window).height()) {
        if(!changed) {
            let rand = Math.floor(Math.random() * 4);
            $(".wheatley-easteregg > img").attr("src", `res/img/cores/${cores[rand]}.png`);
            changed = true;
        }
    } else changed = false;
}

$(document).ready(updateImage);
$(document).on("scroll", updateImage);

$(document).on("mousemove", function(e) {
    var angle = 90 - Math.atan2(($(document).width() - e.pageX), ($(document).height() - e.pageY)) * (180 / Math.PI);

    $(".wheatley-easteregg > img").css({"transform": 'rotate(' + angle + 'deg)'});
    $(".wheatley-easteregg > img").css({"-ms-transform": 'rotate(' + angle + 'deg)'});
    $(".wheatley-easteregg > img").css({"-moz-transform": 'rotate(' + angle + 'deg)'});
    $(".wheatley-easteregg > img").css({"-webkit-transform": 'rotate(' + angle + 'deg)'});
});