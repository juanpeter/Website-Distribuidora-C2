const qualityList =  jQuery.makeArray($(".quality-list li"));
const menuList = jQuery.makeArray($(".desktopNav li, .mobileNav li"));
const windowHeight = $(window).height();

$(document).ready(function() {
    //animate each element from the list
    let delay_time = 0;
    for (let i = 0; i < 4; i++){
        $(qualityList[i]).delay(delay_time).animate({
            left: 0,
        }, 1500);
        delay_time += 200;
    };
    if ($(window).scrollTop() < windowHeight){
        $(menuList).removeClass("active");
        $(menuList[6]).addClass("active");
        $(menuList[0]).addClass("active");
    }
    if ($(window).scrollTop() >= windowHeight -60){
        $(menuList).removeClass("active");
        $(menuList[7]).addClass("active");
        $(menuList[1]).addClass("active");
    }
    if ($(window).scrollTop() >=  2*windowHeight -60){
        $(menuList).removeClass("active");
        $(menuList[8]).addClass("active");
        $(menuList[2]).addClass("active");
    }
    if ($(window).scrollTop() >=  3*windowHeight -60){
        $(menuList).removeClass("active");
        $(menuList[9]).addClass("active");
        $(menuList[3]).addClass("active");
    }
    if ($(window).scrollTop() >=  4*windowHeight -60){
        $(menuList).removeClass("active");
        $(menuList[10]).addClass("active");
        $(menuList[4]).addClass("active");
    }
    if ($(window).scrollTop() >=  5*windowHeight -60){
        $(menuList).removeClass("active");
        $(menuList[11]).addClass("active");
        $(menuList[5]).addClass("active");
    }
    //animate svg when button is hovered
    // $('.white-btn').hover(function() {
    //     $('.page1 svg'){

    //     }
    // }
    // )

});
// Pretty cool function for adaptative window height scrollview
$(window).scroll(function(){
    if ($(window).scrollTop() < windowHeight){
        $(menuList).removeClass("active");
        $(menuList[6]).addClass("active");
        $(menuList[0]).addClass("active");
    }
    if ($(window).scrollTop() >= windowHeight -60){
        $(menuList).removeClass("active");
        $(menuList[7]).addClass("active");
        $(menuList[1]).addClass("active");
    }
    if ($(window).scrollTop() >=  2*windowHeight -60){
        $(menuList).removeClass("active");
        $(menuList[8]).addClass("active");
        $(menuList[2]).addClass("active");
    }
    if ($(window).scrollTop() >=  3*windowHeight -60){
        $(menuList).removeClass("active");
        $(menuList[9]).addClass("active");
        $(menuList[3]).addClass("active");
    }
    if ($(window).scrollTop() >=  5*windowHeight -60){
        $(menuList).removeClass("active");
        $(menuList[10]).addClass("active");
        $(menuList[4]).addClass("active");
    }
    if ($(window).scrollTop() >=  6*windowHeight -60){
        $(menuList).removeClass("active");
        $(menuList[11]).addClass("active");
        $(menuList[5]).addClass("active");
    }
});
//Menu toggler
$("#menu").click(function(){
    if ($("#menu").attr("src") == "imgs/icons/menu.svg"){
        $("#menu").attr("src","imgs/icons/cancel.svg");
        $(".mobileNav").animate({
            right: "0vw",
        }, 500);
        $(".overlay").css({
            display: "block",
        });
    }
    else {
        $("#menu").attr("src","imgs/icons/menu.svg");
        $(".mobileNav").animate({
            right: "-60vw",
        }, 500);
        $(".overlay").css({
            display: "none",
        });
    }
});
//add closing when clicking a link and when view goes to desktop
$(".mobileNav a").click(function(){
    $("#menu").attr("src","imgs/icons/menu.svg");
    $(".mobileNav").animate({
        right: "-60vw",
    }, 500);
    $(".overlay").css({
        display: "none",
    })
})
$(window).resize(function(){
    if ($(window).width() >= 840) {
        $(".overlay").css({
            display: "none",
        })
        $("#menu").attr("src","imgs/icons/menu.svg");
        $(".mobileNav").animate({
            right: "-60vw",
        }, 500);
    }
});
//Change select option on card a
$(".card a").click(function(){
    $(".form-control option")
})

