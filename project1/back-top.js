$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('#backtop1').fadeIn();
        } else {
            $('#backtop1').fadeOut();
        }
    })
    $("#backtop1").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500)
    })
})
