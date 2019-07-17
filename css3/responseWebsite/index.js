init();
function init(){
  bindEvent();
  //swiper();
}
function bindEvent(){
  $('.btn').hover(function(){
    $('.header .nav ul.list').show();
  });
  $('.header ul.list').on('mouseleave', function(){
    if(window.innerWidth <= 700){
      $(this).hide();
    }
  });

  $('.content .text p').hover(function(){
     $('.content .text p').attr('opacity', '1');
  })
}

// function swiper(){
//   $('#swiper').sliderImg({
//     image: ['./img/1.jpg', './img/2.jpg', './img/3.jpg'],
//         href: ['#', '#', '#']
//   })
// }
