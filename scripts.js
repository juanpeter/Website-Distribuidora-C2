const qualityList =  jQuery.makeArray($(".quality-list li"));
const menuList = jQuery.makeArray($(".desktopNav li"));
const productList = jQuery.makeArray($("#page4 .card-footer a.btn"));
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
        $(menuList[0]).addClass("active");
    }
    if ($(window).scrollTop() >= windowHeight -60){
        $(menuList).removeClass("active");
        $(menuList[1]).addClass("active");
                $("#page2 .col-md-6").animate({
            opacity: 1,
        },750);
    }
    if ($(window).scrollTop() >=  2*windowHeight -60){
        $(menuList).removeClass("active");
        $(menuList[2]).addClass("active");
        $("#page3 .col-md-6").animate({
            right: 0,
        }, 750);
    }
    if ($(window).scrollTop() >=  3*windowHeight -60){
        $(menuList).removeClass("active");
        $(menuList[3]).addClass("active");
    }
    if ($(window).scrollTop() >=  4*windowHeight -60){
        $(menuList).removeClass("active");
        $(menuList[4]).addClass("active");
    }
    if ($(window).scrollTop() >=  5*windowHeight -60){
        $(menuList).removeClass("active");
        $(menuList[5]).addClass("active");
    }
});
// Pretty cool function for adaptative window height scrollview
$(window).scroll(function(){
    if ($(window).scrollTop() < windowHeight){
        $(menuList).removeClass("active");
        $(menuList[0]).addClass("active");
    }
    if ($(window).scrollTop() >= windowHeight -60){
        $(menuList).removeClass("active");
        $(menuList[1]).addClass("active");
        $("#page2 .col-md-6").animate({
            opacity: 1,
        },750);
    }
    if ($(window).scrollTop() >=  2*windowHeight -60){
        $(menuList).removeClass("active");
        $(menuList[2]).addClass("active");
        $("#page3 .col-md-6").animate({
            right: 0,
        }, 750);
    }
    if ($(window).scrollTop() >=  3*windowHeight -60){
        $(menuList).removeClass("active");
        $(menuList[3]).addClass("active");
    }
    if ($(window).scrollTop() >=  5*windowHeight -60){
        $(menuList).removeClass("active");
        $(menuList[4]).addClass("active");
    }
    if ($(window).scrollTop() >=  6*windowHeight -60){
        $(menuList).removeClass("active");
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
$(productList).click(function(){
    if (this == productList[0]){
        $("select option[value=Drywall]").attr('selected', 'selected');
    }
    if (this == productList[1]){
        $("select option[value=Divisórias]").attr('selected', 'selected');
    }
    if (this == productList[2]){
        $("select option[value=Forros]").attr('selected', 'selected');
    }
    if (this == productList[3]){
        $("select option[value=Persianas]").attr('selected', 'selected');
    }
    if (this == productList[4]){
        $("select option[value=Portas]").attr('selected', 'selected');
    }
    if (this == productList[5]){
        $("select option[value=Pisos]").attr('selected', 'selected');
    }
    if (this == productList[6]){
        $("select option[value=Rodapés]").attr('selected', 'selected');
    }
    if (this == productList[7]){
        $("select option[value=Painel Wall]").attr('selected', 'selected');
    }
});