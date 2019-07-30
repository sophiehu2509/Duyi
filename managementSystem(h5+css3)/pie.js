(function(){
    var obj = {
        init:function(){
            this.getData();  
            this.option = {
                title : {
                    text: '渡一教育学生地区分布统计',
                    subtext: '纯属虚构',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: []
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
           // myChart.setOption(self.option);
        },
        getData: function(){
            var self = this;
            $.ajax({
                url:'http://api.duyiedu.com/api/student/findAll?appkey=yinwensong_1550025623499',
                success:function(res){
                    console.log(typeof res);
                    res = JSON.parse(res);
                    // {"msg":"查询成功","data":[{"address":"哈尔滨","appkey":"yinwensong_1550025623499",
                    // "birth":2000,"ctime":1564141196,"email":"234@qq.com","id":29274,
                    // "name":"小红","phone":"10000000000","sNo":"1212","sex":1,"utime":1564148803},
                    // {"address":"上海","appkey":"yinwensong_1550025623499","birth":2000,"ctime":1563970655,
                    // "email":"123@qq.com","id":29214,"name":"小明","phone":"13209876543","sNo":"44447",
                    // "sex":1,"utime":1563970655}],"status":"success"}
                    self.areaChart(res.data);
                    self.sexChart(res.data);
                }
            })
        },
        areaChart:function(data){
            var myAreaChart = echarts.init($('.area')[0]);
            var areaArr = [];
            var areaSeriesArr = []; 
            var numArr = {};
           
            data.forEach(function(ele, index){
                if(!numArr[ele.address] ){
                    areaArr.push(ele.address);
                    numArr[ele.address] = 1;
                }else{
                    numArr[ele.address] ++;
                }
               
            })
            for(var p in numArr){
                var obj = {};
                obj.name = p;
                obj.value = numArr[p];
                areaSeriesArr.push(obj);
            }
            
            this.option.legend.data = areaArr;
            this.option.series[0].data = areaSeriesArr;
            var option = this.option;
            myAreaChart.setOption(option);

        },
        sexChart:function(data){
            var myAreaChart = echarts.init($('.sex')[0]);
            var sexSeriesArr = [];
            var num = [0,0];
            data.forEach(function(ele, index){
                console.log(ele.sex)
                if(ele.sex == '0'){
                    num[0] ++;
                }else{
                    num[1] ++;
                }
            })
            sexSeriesArr = [{ value: num[0], name: '男' }, { value: num[1], name: '女' }];
            this.option.legend.data = ['男', '女'];
            this.option.series[0].data = sexSeriesArr;
            var option = this.option;
            myAreaChart.setOption(option);

        }
        // areaChart: function (data) {
        //     var myAreaChart = echarts.init($('.area')[0]);
        //     var legendArr = [], seriesArr = [];
        //     var numObj = {};
        //     data.forEach(function (ele, index) {
        //         if (!numObj[ele.address]) {
        //             numObj[ele.address] = 1;
        //             legendArr.push(ele.address);
        //         } else {
        //             numObj[ele.address]++;
        //         }
        //     })
        //     for (var prop in numObj) {
        //         var obj = {};
        //         obj.name = prop;
        //         obj.value = numObj[prop]
        //         seriesArr.push(obj);
        //     }
        //     this.option.title.text = '渡一教育学生地区分布统计';
        //     this.option.legend.data = legendArr;
        //     this.option.series[0].data = seriesArr;
        //     var option = this.option;
        //     myAreaChart.setOption(option);
        // },
        // sexChart: function (data) {
        //     var mySexChart = echarts.init($('.sex')[0]);
        //     var legendArr = ['男', '女'], seriesArr = [{ '男': '' }, { '女': '' }];
        //     var numObj = {};
        //     data.forEach(function (ele, index) {
        //         if (!numObj[ele.sex]) {
        //             numObj[ele.sex] = 1;
        //         } else {
        //             numObj[ele.sex]++;
        //         }
        //     });
        //     seriesArr = [{ value: numObj[0], name: '男' }, { value: numObj[1], name: '女' }];
        //     this.option.legend.data = legendArr;
        //     this.option.series[0].data = seriesArr;
        //     this.option.title.text = '渡一教育学生性别统计';
        //     mySexChart.setOption(this.option);
        // }

    }

    obj.init();
})()