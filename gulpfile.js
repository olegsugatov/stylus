var gulp = require('gulp');
var stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('styl', function () {
	gulp.src('main.styl')
		.pipe(sourcemaps.init())
		.pipe(stylus())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('css'));
})

gulp.task('watch', function(){
	gulp.watch('main.styl',['styl']);
})