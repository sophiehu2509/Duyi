

(function(){

  function Swiper(arguments){
    this.wrap = arguments.wrap || $('body');
    this.imgList = arguments.imgList;
    this.animateType = arguments.animateType||'fade';
    this.changePageBtn = arguments.changePageBtn || false;
    this.showPointBtn = arguments.showPointBtn || false;
    this.imgWidth = arguments.imgWidth||$(this.wrap).width();
    this.imgHeight = arguments.imgHeight || $(this.wrap).height();
    this.imgNum = this.imgList.length;
    this.nowIndex = 0;
    this.lock = true;
    this.isAuto = arguments.isAuto;
    this.time = null;
    this.init = function(){
      this.createDom();
      this.initStyle();
      this.bindEvent();
      if(this.isAuto){
        this.autoChange();
      }
    }
  }

 Swiper.prototype.createDom = function(){
   var ul = $('<ul class="swiper-wrap"></ul>');
   var spotBtn = $('<div class="spot"></div>');
   var li = $.each(this.imgList, function(index, item){
       $('<li><a href="#"><img src="'+ item + '" ></a></li>').appendTo(ul);
       $('<span></span>').appendTo(spotBtn);

   })
   if(this.animateType == 'animate'){
      $('<li><a href="#"><img src="'+ this.imgList[0] + '" ></a></li>').appendTo(ul);
   }

   var leftBtn = $('<div class="btn left-btn"><</div>');
   var rightBtn = $('<div class="btn right-btn">></div>');


   $(this.wrap).append(ul);
   if(this.changePageBtn){
     $(this.wrap).append(leftBtn).append(rightBtn);
   }
   if(this.showPointBtn){
    $(this.wrap).append(spotBtn);
   }
 }

 Swiper.prototype.initStyle = function(){
   $('*', this.wrap).css({
     listStyle:'none',
     textDecoration:'none',
     padding:'0',
     margin: '0'
   });
   $(this.wrap).css({
     position:'relative',
     overflow:'hidden'
   });

   $('.swiper-wrap', this.wrap).css({
     width:'100%',
     height:'100%'
   })
   $('img', this.wrap).css({
     width:'100%',
     height:'100%'
   });
   if(this.animateType == 'animate'){
     $('.swiper-wrap', this.wrap).css({
       width: (this.imgWidth) *( this.imgNum + 1),
       height: this.imgHeight,
       position:'absolute',
       overflow:'hidden' //清除浮动
     }).find('li').css({
       width:this.imgWidth,
       height:this.imgHeight,
       float:'left'
     })
   }else{
     $('.swiper-wrap', this.wrap).css({

       position:'relative'

     }).find('li').css({
       width:this.imgWidth,
       height:this.imgHeight,
       top:'0',
       left:'0',
       position:'absolute',
       display:'none'

     }).eq(this.nowIndex).css({
       display:'block'
     })
   }

   $('.btn', this.wrap).css({
     height:'30',
     width:'50',
     lineHeight:'30px',
     position:'absolute',
     top:'50%',
     marginTop:'-15px',
     backgroundColor:'rgb(0,0,0,0.5)',
     color:'#fff',
     textAlign:'center',
     cursor:'pointer'
   }).filter('.right-btn').css({
     right:'0px'
   })

   $('.spot', this.wrap).css({
     width:'100%',
     textAlign:'center',
     position:'absolute',
     bottom:'0'

   }).find('span').css({
      width:'10px',
      height:'10px',
      display:'inline-block',
      backgroundColor:'rgb(255,255,255,0.5)',
      borderRadius:'50%',
      margin:'0 5px'
   }).eq(this.nowIndex).css({
     backgroundColor:'red'
   })


 }

 Swiper.prototype.bindEvent = function(){

   var self = this;
   $('.left-btn', this.wrap).click(function(){
      if(!self.lock) return false;
      if(self.nowIndex == 0 ){
        if(self.animateType == 'animate'){
          $('.swiper-wrap', this.wrap).css({
            left:(-1) * this.imgWidth * this.nowIndex
          })
        }
         self.nowIndex = self.imgNum - 1;
      }else{
         self.nowIndex --;
      }
      self.changeImage();
   })
   $('.right-btn', this.wrap).click(function(){
      if(!self.lock) return false;
      if(self.animateType == 'fade' && self.nowIndex == self.imgNum - 1 ){
         self.nowIndex = 0;
      }else if(self.animateType == 'animate' && self.nowIndex == self.imgNum) {
        $('.swiper-wrap', this.wrap).css({
          left:0
        })
         self.nowIndex = 1;
      }else{
         self.nowIndex ++;
      }
      self.changeImage();
   })

   $('.spot > span', this.wrap).click(function(){
      self.nowIndex = $(this).index();
      self.changeImage();
   })

   $(this.wrap).mouseenter(function(){
     clearTimeout(self.time)
   }).mouseleave(function(){
      if(self.isAuto){
        self.autoChange();
      }
   })
 }

 Swiper.prototype.changeImage = function(){
     var self = this;
     this.lock = false;
     if(this.animateType == 'fade'){
       $('.swiper-wrap > li', this.wrap).fadeOut().eq(this.nowIndex).fadeIn(function(){
           self.lock = true;
       });

     }else{
       $('.swiper-wrap', this.wrap).animate({
         left:(-1) * this.imgWidth * this.nowIndex
       }, function(){
           self.lock = true;
       })
     }

     $('.spot > span', this.wrap).css({
        backgroundColor:'#fff'
     }).eq(this.nowIndex % this.imgNum).css({
        backgroundColor:'red'
     })

 }

 Swiper.prototype.autoChange = function(){
   var self = this;
   this.time = setInterval(function(){
     $('.right-btn', self.wrap).trigger("click");
   }, 10000);
 }

  $.fn.extend({
    Swiper:function(arguments){
      arguments.wrap = this;
      var obj = new Swiper(arguments);
      obj.init();
    }
  })
})()
