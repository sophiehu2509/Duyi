$('#myJD').addDropDown({
    href: '#',
    title: "我的京东",
    width: 126,
    menuList: [{
        title: "",
        items: [{
            href: '#',
            name: '待处理订单',
        }, {
            href: '#',
            name: '消息',
        }, {
            href: '#',
            name: '返修退换货',
        }, {
            href: '#',
            name: '我的问答',
        }, {
            href: '#',
            name: '降价商品',
        }, {
            href: '#',
            name: '我的关注',
        }
        ],
    }, {
        title: '',
        items: [{
            href: '#',
            name: '我的京豆',
        }, {
            href: '#',
            name: '我的优惠券',
        }, {
            href: '#',
            name: '我的白条',
        }
        ],
    }]
});

$('#procurement').addDropDown({
    title: '企业采购',
    width: 56,
    menuList: [{
        title: '',
        items: [{
            href: '',
            name: '企业购'
        }, {
            href: '',
            name: '商用场景馆'
        }, {
            href: '',
            name: '工业品'
        }, {
            href: '',
            name: '礼品卡'
        }]
    }]
});

$('#service').addDropDown({
    title: '客户服务',
    width: 70,
    menuList: [{
        title: '客户',
        items: [{
            name: '帮助中心',
            href: ''
        }, {
            name: '售后服务',
            href: ''
        }, {
            name: '在线客服',
            href: '',
        }, {
            name: '意见建议',
            href: ''
        }, {
            name: '电话客服',
            href: ''
        }, {
            name: '客服邮箱',
            href: ''
        }, {
            name: '金融咨询',
            href: ''
        }, {
            name: '全球售客服'
        }]
    }, {
        title: '商户',
        items: [{
            name: '合作招商'
        }, {
            name: '学习中心'
        }, {
            name: '商家后台'
        }, {
            name: '京麦工作台'
        }, {
            name: '商家帮助'
        }, {
            name: '规则平台'
        }]
    }]
});

$('#bar-navs').addDropDown({
    title: '网站导航',
    direction: 'x',
    dropDownWidth:1188,
    menuList: [{
        title: '特色主题',
        width: 340,
        itemWidth: 85,
        items: [{
            name: '京东试用'
        }, {
            name: '京东金融'
        }, {
            name: '全球售'
        }, {
            name: '国际站'
        }, {
            name: '京东会员'
        }, {
            name: '京东预售'
        }, {
            name: '买什么'
        }, {
            name: '俄语站'
        }, {
            name: '装机大师'
        }, {
            name: '0元评测'
        }, {
            name: '港澳售'
        }, {
            name: '优惠券'
        }, {
            name: '秒杀闪购'
        }, {
            name: '印尼站'
        }, {
            name: '京东金融科技'
        }, {
            name: '陪伴计划'
        }, {
            name: '出海招商'
        }, {
            name: '拍拍'
        }]
    }, {
        title: '特色主题',
        width: 270,
        itemWidth: 85,
        items: [{
            name: '京东试用'
        }, {
            name: '京东金融'
        }, {
            name: '全球售'
        }, {
            name: '国际站'
        }, {
            name: '京东会员'
        }, {
            name: '京东预售'
        }, {
            name: '买什么'
        }, {
            name: '俄语站'
        }, {
            name: '装机大师'
        }, {
            name: '0元评测'
        }, {
            name: '港澳售'
        }, {
            name: '优惠券'
        }, {
            name: '秒杀闪购'
        }, {
            name: '印尼站'
        }]
    }]
});

$('#swiper').Swiper({
  imgList:['https://imgcps.jd.com/ling/4035223/5bCk5aau5L2z54uC5qyi6ZKc5oOg/6YOo5YiG5ruhMzk55YePMTYw/t-5bfe4593a3324dd40a9513fa/ac4ca92e.jpg',
'https://img1.360buyimg.com/da/s590x470_jfs/t1/48715/33/2389/82404/5d03d468E059ef324/a8f8d5bc850098f5.jpg!q90!cc_590x470.webp',
'https://imgcps.jd.com/ling/7479547/6LaF5biC57K-6YCJ/54iG5qy-55u06ZmN/t-5bfe43a4f8edd2d40597f1eb/f440faba.jpg',
'https://imgcps.jd.com/ling/29388335592/54Ot6ZSA55S36KOF/5L2O6IezNi4xOA/t-5bd91a8dbcf6c7034d251f52/3ed3c3ae.jpg'],
  changePageBtn:true,
  showPointBtn:true,
  isAuto: true,

})

$('#swiper2').Swiper({
  imgList:['https://img10.360buyimg.com/mobilecms/s260x260_jfs/t1/48643/16/2146/452034/5cff3402E1c4d70b0/73f6a03d4acad075.jpg!q90!cc_130x130',
'https://img14.360buyimg.com/mobilecms/s260x260_jfs/t1/50416/13/2364/214992/5d031ecaEb62d7470/5d6308eb20b53bfb.jpg!q90!cc_130x130.webp'],
  showPointBtn:true,

  isAuto: true

})
