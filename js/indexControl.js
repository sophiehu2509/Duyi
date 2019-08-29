(function($, root) {

    function Control(len){
        this.index = 0;
        this.len = len;
    }
    Control.prototype = {
        prev:function(){
           
            return this.getIndex(-1);
        },
        next:function(){

            return this.getIndex(1);
        },
        //计算改变后的索引
        getIndex:function(val){

            var index = this.index;
            var len = this.len; //数据总长度
            var curIndex = (index + val + len) % len; //+len 是怕 index 是负值
            this.index = curIndex;
            return curIndex;
        }
    }

    root.controlIndex = Control; //选择把构造函数暴露出去

})(window.Zepto, window.player || (window.player = {}))