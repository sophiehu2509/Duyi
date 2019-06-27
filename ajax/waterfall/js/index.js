var oUl = document.getElementsByClassName('item');
var page = 1;


function findMinUl(){
  var minHeight = oUl[0].offsetHeight, minIndex = 0;
  console.log(typeof oUl);
  for (var i = 0; i < oUl.length; i++) {
    if(minHeight > oUl[i].offsetHeight){
      minHeight = oUl[i].offsetHeight;
      minIndex = i;
    }
  }
  return{
    minHeight:minHeight,
    minIndex:minIndex
  }
}


function getData(){
  ajax('GET', './data.json', renderDom, "page=" + page, true);
  page ++;
}

getData();

function renderDom(data){
  var data = JSON.parse(data).data.hotPicture;
  data.forEach(function(item, index){
    var min = findMinUl();
    var minHeight = min.minHeight;
    var minIndex = min.minIndex;
    var oLi = document.createElement('li');
    var img =new Image();
    img.src = item.url;
    img.width = oUl[minIndex].offsetHeight - 20;
    img.height = img.width * item.image_height/item.image_width;

    var oP = document.createElement('p');
    oP.innerText = item.name + '上传到专辑' + item.album_name;
    oLi.append(img);
    oLi.append(oP);
    oUl[minIndex].append(oLi);
  })
}

var myTimer = null;
window.onscroll = function(){
  var scrollTop = document.documentElement.scrollTop;
  var clientHeight = document.documentElement.clientHeight;
  var minHeight = findMinUl().minHeight;
clearTimeout(myTimer);
 if(minHeight < clientHeight + scrollTop){
   myTimer = setTimeout(function(){
      getData();
   }, 500)

 }

}
