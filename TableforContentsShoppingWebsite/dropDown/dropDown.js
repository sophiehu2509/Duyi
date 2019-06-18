(function(){

    function addDropDown(arguments){
      this.wrap = arguments.wrap;
      this.menuList = arguments.menuList;
      this.direction = arguments.direction || 'y';
      this.dropDownWidth = arguments.drapDownWidth;
      this.width = arguments.width;
      this.title = arguments.title;

      this.init = function(){
        this.createDom();
        this.initStyle();
        this.bindEvent();
      }
    }


    addDropDown.prototype.createDom = function(){
      var oDiv = $('<div class = "my-dropdown"></div>');
      var self = this;
      this.menuList.forEach(function(item){
        var oDl = $('<dl></dl>');
        $('<dt>' + item["title"] + '</dt>').appendTo(oDl);

        item["items"].forEach(function(ele){
          $('<dd><a href="' + ele["href"] + '">' + ele["name"] + '</a></dd>').appendTo(oDl);
        })
        if(item['items'].itemWidth){
          oDl.css({
            width:item['items'].itemWidth,
          });
        }
        if(item['items'].width){
          $('dd', oDl).css({
            width:item['items'].width
          });
        }
          oDl.appendTo(oDiv);
      })

      $(this.wrap).append(oDiv);
      oDiv.hide();
    }

    addDropDown.prototype.initStyle = function(){
        $(this.wrap).css({
          position:'relative',
        }).find('.my-dropdown').css({
          position:'absolute',
          paddingLeft:'10px',
          border: '1px solid #eee',
          borderTop:'none',
          backgroundColor: '#fff',
          // paddingLeft: '10px',
           left:'0',
           zIndex:'200'
        }).find('dl').css({
           width: (this.width + 10)*2,
           overflow:'hidden',
           borderBottom:'1px solid #eee',
        }).find('dt').css({
          fontWeight:'bold'
        }).end().find('dd').css({
            width:this.width,
            float:'left',
            cursor:'pointer',
            whiteSpace: 'nowrap' //字体显示在一行
        })

        if(this.direction == 'x'){
          $('.my-dropdown', this.wrap).css({
            right:"-84px",
            left:'auto',
            padding: "15px 0",
            width: "1190px"
          })
          var self = this;
           $('.my-dropdown  dl', this.wrap).each(function(i) {
                $(this).css({
                    width: self.menuList[i].width,
                    float: 'left',
                    borderRight: '1px solid #eee',
                    borderBottom: 'none',
                    margin: 10
                }).find('dd').css({
                    width: self.menuList[i].itemWidth
                })
            })
        }

    }

    addDropDown.prototype.bindEvent = function(){
      var self = this;
      $('.my-dropdown dd').hover(function(){
        this.color = $(this).css('color');
        $('a', this).css({
          color:'red'
        })
      }, function(){
        $('a', this).css({
          color:this.color
        })
      })
      $(this.wrap).hover(function(){
        $(this).css({
              backgroundColor: "#fff"
          })
        $('.my-dropdown', self.wrap).show();
      }, function(){
        $('.my-dropdown', self.wrap).hide();
        $(this).css({
          backgroundColor:'transparent'
        })
      })
    }

     $.fn.extend({
        addDropDown:function(arguments){
        arguments.wrap = this;
        var obj = new addDropDown(arguments);
        obj.init();
       }
     })
})()
