function stickyMenu() {
    fixMenu();
    $(document).scroll(function () {
        fixMenu();
    });
}

function fixMenu() {
    if ($(document).scrollTop() > $('.content').offset().top - $('.main-nav').height()) {
        $('.main-nav').addClass("fixed");
    } else {
        $('.main-nav').removeClass("fixed");
    }
}
