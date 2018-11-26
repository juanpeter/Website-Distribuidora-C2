$(document).ready(function () {

/*Scroll para as divs!*/
    $('.link1').click(function() {
    $('html, body').animate({
      scrollTop: $(".area1").offset().top-85
    }, 1000)
  }), 
    $('.link2').click(function (){
      $('html, body').animate({
        scrollTop: $(".area2").offset().top-85
      }, 1000)
    }),
    $('.link3').click(function (){
      $('html, body').animate({
        scrollTop: $(".area3").offset().top-85
      }, 1000)
    })
    $('.link4').click(function (){
        $('html, body').animate({
          scrollTop: $(".area4").offset().top-85
        }, 1000)
    })
    
    $('.link5').click(function() {
      $('html, body').animate({
        scrollTop: $(".home").offset().top-85
      }, 1000)
    }), 

/*Toggle pra classe "active" entre elementos!*/
    $(document).on('click', '.nav-item', function() {
      $(".nav-item").removeClass("active");
      $(this).addClass("active");
    });
/*Pausar Carrossel quando em hover*/
$('.carousel-item').hover(function(){
  $("#carousel-example").carousel('pause');
},function(){
  $("#carousel-example").carousel('cycle');
});

/*Bootstrap Carroussel multiple*/

$('#carouselExample').on('slide.bs.carousel', function (e) {

  
  var $e = $(e.relatedTarget);
  var idx = $e.index();
  var itemsPerSlide = 4;
  var totalItems = $('.carousel-item').length;
  
  if (idx >= totalItems-(itemsPerSlide-1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i=0; i<it; i++) {
          // append slides to end
          if (e.direction=="left") {
              $('.carousel-item').eq(i).appendTo('.carousel-inner');
          }
          else {
              $('.carousel-item').eq(0).appendTo('.carousel-inner');
          }
      }
  }
});


$('#carouselExample').carousel({ 
              interval: 3000
      });


$(document).ready(function() {
/* show lightbox when clicking a thumbnail */
  $('a.thumb').click(function(event){
    event.preventDefault();
    var content = $('.modal-body');
    content.empty();
      var title = $(this).attr("title");
      $('.modal-title').html(title);        
      content.html($(this).html());
      $(".modal-profile").modal({show:true});
  });

});
});