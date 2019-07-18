const qualityList =  jQuery.makeArray($(".quality-list li"));
const menuList = jQuery.makeArray($(".desktopNav li a, .mobileNav li a"));
const windownHeight = $(window).height();

$(document).ready(function() {
    //animate each element from the list
    let delay_time = 0;
    for (let i = 0; i < 4; i++){
        $(qualityList[i]).delay(delay_time).animate({
            left: 0,
        }, 1500);
        delay_time += 200;
    };
    //animate svg when button is hovered
    // $('.white-btn').hover(function() {
    //     $('.page1 svg'){

    //     }
    // }
    // )

});
// Pretty cool function for adaptative window height scrollview
$(window).scroll(function(){
    if ($(window).scrollTop() <= windownHeight){
        $(menuList).removeClass("active");
        $(menuList[0], menuList[6]).addClass("active");

    }
    if ($(window).scrollTop() >= windownHeight -96){
        $(menuList).removeClass("active");
        $(menuList[1], menuList[7]).addClass("active");
    }
    if ($(window).scrollTop() >=  2*windownHeight -96){
        $(menuList).removeClass("active");
        $(menuList[2], menuList[8]).addClass("active");
    }
    if ($(window).scrollTop() >=  3*windownHeight -96){
        $(menuList).removeClass("active");
        $(menuList[3], menuList[9]).addClass("active");
    }
    if ($(window).scrollTop() >=  4*windownHeight -96){
        $(menuList).removeClass("active");
        $(menuList[4], menuList[10]).addClass("active");
    }
    if ($(window).scrollTop() >=  5*windownHeight -96){
        $(menuList).removeClass("active");
        $(menuList[5], menuList[11]).addClass("active");
    }
});