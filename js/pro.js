(function ($, root) {
    var startTime;
    var durTime, frameId, lastPer = 0;
    function renderAllTime(time) {
        var t = formatTime(time);
        durTime = time;
        $('.all-time').html(t);
    }
    function formatTime(time) {
        
        var m = Math.floor(time / (60));
        var s = Math.floor(time - m * 60);
        m = m > 10 ? m : '0' + m;
        s = s > 10 ? s : '0' + s;

        return (m + ':' + s);
    }
    function start(time) {
        lastPer =  time == undefined? lastPer: time;
        startTime = new Date().getTime();
        cancelAnimationFrame(frameId);
        function frame() {
            var curTime = new Date().getTime();
            var per = lastPer + (curTime - startTime) / (durTime * 1000);
            if (per <= 1) {
                update(per);
            } else {
                cancelAnimationFrame(frameId);
            }
            frameId = requestAnimationFrame(frame);
        }
        frame();
    }

    function update(per) {
        // 更新时间
        var time = formatTime(per * durTime);
        $('.cur-time').html(time);

        var p = (per - 1)*100 + '%';
        $('.pro-top').css({"transform":" translateX(" + p + ")"})

    };

    function stop() {
        cancelAnimationFrame(frameId);

        var stopTime = new Date().getTime();
        lastPer = (stopTime - startTime)/ (durTime * 1000);

    }


    root.pro = {
        renderAllTime: renderAllTime,
        update:update,
        start: start,
        stop:stop

    }
})(window.Zepto, window.player || (window.player = {}))