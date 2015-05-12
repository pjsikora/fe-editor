var gulp = require('gulp'),
sass = require('gulp-sass'),
jade = require('gulp-jade'),
server = require('gulp-server-livereload'),
notify = require('gulp-notify'),
babel = require("gulp-babel");


var paths = {
	css: 'src/sass/*',
	jade: 'src/jade/*',
	js: 'src/js/*',
};


gulp.task('watch', function() {
	gulp.watch(paths.css, ['sass']);
	gulp.watch(paths.jade, ['jade']);
	gulp.watch(paths.js, ['babel']);
});


gulp.task("babel", function () {
	gulp.src("src/js/**/*.js")
	.pipe(babel())
	.pipe(gulp.dest("dist/js"))
	.on('error', function(err) {
		console.log(err);
		notify('BABEL ERROR!: '+err);
	});
});


gulp.task('sass', function() {
	gulp
	.src('./src/sass/*.scss')
	.pipe(sass({
		includePaths: [
		'bower_components/MultiGrid.css/src/sass',
		'bower_components/UsefullMixins.sass',
		'bower_components/breakpoint-sass/stylesheets'
		]
	}))
	.pipe(gulp.dest('./dist/css'))
	.pipe(notify("SASS done"));
});


gulp.task('jade', function() {
	var YOUR_LOCALS = {};

	gulp
	.src('./src/jade/*.jade')
	.pipe(jade({
		locals: YOUR_LOCALS
	})
	.on('error', function(err) {
		console.log(err);
	}))
	.pipe(gulp.dest('./dist/'))
	.pipe(notify("JADE done"))
});


gulp.task('default', ['watch', 'sass', 'jade']);