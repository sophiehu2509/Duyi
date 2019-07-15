function init(){
  bindEvent();
}
function bindEvent(){
  $('.cube').on('mouseenter', function(e){
    addClass(e, 'in', this);
     changeBg(this);
  }).on('mouseleave', function(e){
    addClass(e, 'out', this);
    $(this).on('animationend', function(){
      if ($(this).attr('id').indexOf('out') !== -1) {
                $(this).attr('id', '') //只能有一个方块 有这个id
            }
    })
  })
}

function addClass(e, status, item){
  var index = getDir(e, item);
  var str = ''
  switch (index) {
    case 0:
      str='-top';
      break;
    case 1:
          str = '-right';
          break;
    case 2:
        str = '-bottom';
        break;
    case 3:
        str = '-left';
        break;
  }

  $(item).attr('id', status+str);
}

//    右          上         左                  下
// -45 ~ 45  -45~-135  -135~-180, 135 ~ 180  45~135
// + 180
//  135 ~ 225   135~45   45~0,315 ~360    225~ 315
// /90
//  1.5~2.5     1.5~0.5    0.5, 3.5~4      2.5~3.5




function getDir(e, item){
  var w = item.offsetWidth;
  var x = e.clientX - item.offsetLeft - w/2;
  var y = e.clientY - item.offsetTop - w/2;

  var d = (Math.round(((Math.atan2(y, x) *(180/Math.PI)) + 180 )/90 + 3) %4);
  return d;
}

function changeBg(item){
  var color = $(item).attr('data-bg');
  $('.wrapper').attr('id', color);
}
init();
