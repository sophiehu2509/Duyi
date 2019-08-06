import lodash from 'lodash-es'

var sum = function(){
    console.log("sum");
}

//利用 webpack-deep 插件做作用域检查 npm run prod可以减少代码
var isArray = function(arg){
    console.log(lodash.isArray(arg));
}

export{
    sum,
    isArray
}