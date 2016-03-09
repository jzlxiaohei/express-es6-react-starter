var gulp = require('gulp');
var sourceMaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var path = require('path');

//var excludePaths = [
//        'src/views/**/*','src/public/**/*',
//        'src/app.js','src/global-var.js'
//]

var paths = {
    es6: [
        'src/components/**/*.js',
        'src/controllers/**/*.js',
        'src/services/**/*.js'
    ],
    es5: './build',
    sourceRoot: path.join(__dirname, 'src')
};
var copyPaths = paths.es6.map(function(item){
    return "!"+item
}).concat(['src/**/*'])


gulp.task('babel-src', function() {
    return gulp.src(paths.es6,{base:'src'})
        .pipe(sourceMaps.init())
        .pipe(babel({
            presets: ['stage-3', 'es2015'],
        }))
        .pipe(sourceMaps.write('.', {
            includeContent: false,
            sourceRoot: paths.sourceRoot
        }))
        .pipe(gulp.dest(paths.es5));
});
gulp.task("copy-src",function(){
    return gulp.src(copyPaths,{base:"src"})
        .pipe(gulp.dest(paths.es5));
})


gulp.task("build",['babel-src','copy-src'],function(){})