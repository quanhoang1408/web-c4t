$(document).ready(function() {
    $("#stay").click(function() {
        $('html, body').animate({
            scrollTop: $("#wheretostay").offset().top
        }, 1000);
    })
});
$(document).ready(function() {
    $("#go").click(function() {
        $('html, body').animate({
            scrollTop: $("#wheretogo").offset().top
        }, 1000);
    })
});
$(document).ready(function() {
    $("#tour").click(function() {
        $('html, body').animate({
            scrollTop: $("#toptour").offset().top
        }, 1000);
    })
});
$(document).ready(function() {
    $("#comment").click(function() {
        $('html, body').animate({
            scrollTop: $("#topcomment").offset().top
        }, 1000);
    })
});