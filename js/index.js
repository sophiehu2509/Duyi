var root = window.player;
// var nowIndex = 0;
var dataList;
var audio = root.AudioManager;
var control, controlIndex;




function getData(url) {
    $.ajax({
        type: "GET",
        url: url,
        success: function (res) {
            console.log(res);

            dataList = res;
            root.render(res[0]);
            audio.getAudio(res[0].audio);

            control = new root.controlIndex(dataList.length);

            bindEvent();
            bindTouch();

            $('body').trigger('play:change', 0);
        },
        error: function () {

        }
    })
}

function bindEvent() {
    $('body').on('play:change', function (e, index) {
        audio.getAudio(dataList[index].audio);
        root.render(dataList[index]);
        if (audio.status == 'play') {
            audio.play();
            root.pro.start();
            rotated(0);
        }
        $('.img-box').attr('data-deg', 0);
        $('.img-box').css({
            transform: 'rotateZ(0deg)',
            transition: 'none'
        })

        root.pro.renderAllTime(dataList[index].duration);

    })
    $('.prev').on('click', function () {
        var i = control.prev();
        $('body').trigger('play:change', i);

    });

    $('.next').on('click', function () {
        var i = control.next();
        $('body').trigger('play:change', i);
    });

    $('.play').on('click', function () {
        // console.log(audio);
        if (audio.status == 'pause') {
            audio.play();
            root.pro.start();
            var deg = $('.img-box').attr('data-deg');

            rotated(deg);
        } else {
            audio.pause();
            root.pro.stop();
            clearInterval(timer);
        }
        $('.play').toggleClass('playing')

    })
}

function bindTouch() {
    var ex = 0, x = 0;
    var offset = $('.pro-bottom').offset();
    var width = offset.width;
    var left = offset.left;
    var per;
    console.log(left);
    $('.spot').on('touchstart', function (e) {
        console.log('touch');
        root.pro.stop();
    }).on('touchmove', function (e) {
        ex = e.touches[0].clientX;
        x = ex - left;
        per = (x) / width;
        if (per <= 1 && per >= 0) {
            root.pro.update(per);
        }

    }).on('touchend', function (e) {
        var ex = e.changedTouches[0].clientX;
        per = (ex - left) / width;
        if (per <= 1 && per >= 0) {
            root.pro.update(per);
            var t = per * dataList[control.index].duration;
            $('.play').addClass('playing');
            audio.playTo(t);
            audio.status = 'play';
            audio.play();
            root.pro.start(per);
        }
    })
}
var timer;
function rotated(deg) {
    clearInterval(timer);
    // var deg = 0;
    deg = +deg;
    timer = setInterval(function () {
        deg += 2;

        $('.img-box').attr('data-deg', deg);
        $('.img-box').css({
            transform: 'rotateZ(' + deg + 'deg)',
            transition: 'all 1s ease-out'
        })
    }, 200);
}



getData("../mock/data.json");

// 信息 + 图片渲染到页面上
// ，点击按钮
// 音频的播放与暂停  切歌
//  图片旋转


// 列表切歌 --> 作业
// 进度条运动与拖拽