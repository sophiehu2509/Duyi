(function(){
    var obj = {
        init:function(){
            this.bindEvent();
        },
        bindEvent:function(){
            var list = $('.wrapper .drop-list');
            $('.list-item').on('click', function(){
                $('.list-item.active').removeClass('active');
                $(this).addClass('active');
            })
            $('.wrapper header .btn').on('click', function(){
                var show = list.hasClass('show');
                list.slideDown();
                list.toggleClass('show');
                if (show) {
                    list.slideUp();
                }
            })
            $('.drop-list').on('mouseleave', function () {
                // $(this).hide();
                list.slideUp();
                list.removeClass('show');
            })
        }
    }
    obj.init();
})()