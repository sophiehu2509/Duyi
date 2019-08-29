//实现页面渲染 img + info + like button
(function($, root){

    function renderImg(src){
        var img = new Image();
        img.src = src;
        img.onload = function(){
            $('.img-box img').attr('src', src);
            root.blurImg(img, $('body'));
        }
    }

    function renderInfo(info){
        var str = ' <div class="song-name">'+ info.song +'</div>\
        <div class="singer-name">'+ info.singer +'</div>\
        <div class="album-name">' + info.album +'</div>';

        $('.song-info').html(str);
    }

    function renderIsLike(like){
        if(like){
            $('.like').addClass('liking');
        }else{
            $('.liking').removeClass('liking');
        }
    }

    root.render = function(data){
        console.log(data.image);
        renderImg(data.image);
        renderInfo(data);
        renderIsLike(data.isLike);
    };

    //window.$ = window.jQuery = jQuery;
})(window.Zepto, window.player || (window.player = {}) );
//在window上创建一个对象

