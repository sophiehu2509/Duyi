init();

function init(){
  bindEvent();
}

function bindEvent(){
  $('#submit').click(function(){
    var val = $('#inp').val();
    if(val){
      rendDom('mine', val);
      getData(val);
    }
  })

  $('#inp').keyup(function(e){
    if(e.keyCode == 13){
      $('#submit').trigger('click');
    }
  })
}

function rendDom(name, val){
  var content = '<div class="' + name + '">\
      <div class="avitor"></div>\
      <div class="text">' + val + '</div>\
    </div>';
  $('.content').append($(content));
  $('.content').scrollTop($('.content').height());

}

function getData(val){
  $.ajax({
    type:'get',
    url:'http://api.duyiedu.com/api/chat/sendMsg',
    data: {
          appkey: 'sophiehuhu_1559490578845',
          msg: val,
      },
    //dataType:'jsonp',
    success:function(res){

      if (JSON.parse(res).status == 'success') {

        rendDom('robot', JSON.parse(res).data.text);
      }
    }
  })
}
