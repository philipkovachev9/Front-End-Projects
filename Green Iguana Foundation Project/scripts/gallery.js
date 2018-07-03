$(function () {
    $(".gallery img").click(function () {
        var $src = $(this).attr("src");
        $(".show").fadeIn();
        $(".img-show img").attr("src", $src);
    });
    $("span").click(function () {
        $(".show").fadeOut();
    });
});