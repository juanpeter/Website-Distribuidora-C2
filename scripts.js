const qualityList =  jQuery.makeArray($(".quality-list li"));

$(document).ready(function() {
    $('.mainbag').viewScroller({
        useScrollbar: false,
    });
    //animate each element from the list
    let delay_time = 0;
    for (let i = 0; i < 4; i++){
        $(qualityList[i]).delay(delay_time).animate({
            left: 0,
        }, 1500);
        delay_time += 200;
    }
    //animate svg when button is hovered
    // $('.white-btn').hover(function() {
    //     $('.page1 svg'){

    //     }
    // }
    // )
});