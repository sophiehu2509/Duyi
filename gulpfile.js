var gulp = require('gulp');

//压缩html
//gulp 中插件应用 下载插件 --> 取到插件 --》应用插件
var htmlClean = require('gulp-htmlclean');
var imageMin = require('gulp-imagemin');

//压缩 js
var uglify = require('gulp-uglify');

//去掉js中调试语句
var debug = require('gulp-strip-debug');

//加入css是less格式的 需要将less转换成css
var less = require('gulp-less');

//压缩css
var cleanCss= require('gulp-clean-css');

//postcss autoprefixer  2个插件
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');


//开启服务器代理
var connect = require('gulp-connect');

// const { watch, series } = require('gulp');

var folder = {
    src:'src/',
    dist:'dist/'
}

// export NODE_ENV=development  //设置环境变量 在githash中输入
//判断当前环境变量
var devMod = process.env.NODE_ENV =='development';
console.log(devMod);
// export NODE_ENV=development 设置环境变量

gulp.task('html', async function(){
    var page = gulp.src(folder.src + 'html/*')
                    .pipe(connect.reload())
        if(!devMod){
            page.pipe(htmlClean()) //压缩文件
            
        }
        page.pipe(gulp.dest(folder.dist + 'html/'));
      
})

gulp.task('image', async function(){
    gulp.src(folder.src + 'image/*')
        .pipe(imageMin())
        .pipe(gulp.dest(folder.dist + 'image/'));
})

gulp.task('css', async function(){
    var page = gulp.src(folder.src + 'css/*')
        .pipe(connect.reload())
        .pipe(less())
        .pipe(postcss([autoprefixer()])) //可加多个参数
        if(!devMod){
            page.pipe(cleanCss());
        }
        
        page.pipe(gulp.dest(folder.dist + 'css/'));
})

gulp.task('js', async function(){
    var page = gulp.src(folder.src + 'js/*')
        .pipe(connect.reload())
        if(!devMod){
            page.pipe(debug())
            .pipe(uglify());
        }
        
        page.pipe(gulp.dest(folder.dist + 'js/'));
})

gulp.task('server', async function(){
    connect.server({
        // root: ['dist'],
    port: 8080,
    base: 'http://localhost',
    livereload: true
    })
})


gulp.task('watch', async function(){
    gulp.watch(folder.src +'html/*',  gulp.series('html'))
    gulp.watch(folder.src +'css/*', gulp.series('css'))
    gulp.watch(folder.src +'js/*', gulp.series('js'))
    // watch(folder.src +'html/*.html', html);
})

gulp.task('default',gulp.series(['html', 'css', 'js', 'image',  'watch', 'server'], function(done) { 
    // default task code here
    done();
}));

//less-->自动添加css3前缀 -->压缩 -->输出

//gulp.src()
//gulp.dest() //文件写入
//gulp.task()
//gulp.watch()