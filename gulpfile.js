var gulp = require('gulp'),
		sass = require('gulp-sass'),
		jade = require('gulp-jade'),
		notify = require('gulp-notify'),
		babel = require("gulp-babel")
		compass = require('gulp-compass'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    del = require('del'),
    webserver = require('gulp-webserver');


var path = {
	css: 'src/sass/*',
	jade: 'src/jade/*',
	js: 'src/js/*',

	dist: 'dist/',
	test: 'test/'
};

gulp.task('compass', function () {
    return gulp.src('src/styles/main.scss')
        .pipe(compass({
            sass: 'src/styles',
            image: 'src/images',
            css: outputPath + 'css'
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest(path.dist + 'css'))
        .pipe(notify({message: 'Styles compiled'}));
});


gulp.task('watch', function() {
	gulp.watch(path.css, ['sass']);
	gulp.watch(path.jade, ['jade']);
	gulp.watch(path.js, ['babel']);

	// gulp.run('webserver');
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
		'bower_components/buttons-sass/src/sass/',
		'bower_components/breakpoint-sass/stylesheets'
		]
	}))
	.pipe(gulp.dest('./dist/css'))
	.pipe(notify("SASS done"));
});

// Webserver with auto reload
gulp.task('webserver', function() {
    gulp.src( path.dist )
        .pipe(webserver({
            host:             'localhost',
            port:             '8001',
            livereload:       true,
            directoryListing: false,
            open: true
        }))
        .pipe(notify({ message: 'Webserver is working'}));
});

// Webserver with auto reload
gulp.task('webserverTest', function() {
    gulp.src( './' )
        .pipe(webserver({
            host:             'localhost',
            port:             '8001',
            livereload:       true,
            directoryListing: false,
            open: true
        }))
        .pipe(notify({ message: 'Webserver is working'}));
});

gulp.task('jade', function() {
	var YOUR_LOCALS = {};

	gulp.src('./src/jade/*.jade')
		.pipe(jade({
			locals: YOUR_LOCALS
		})
		.on('error', function(err) {
			console.log(err);
		}))
		.pipe(gulp.dest(path.dist))
		.pipe(notify("JADE done"))
});

gulp.task('clean', function (cb) {
    del([path.dist + 'css', path.dist + 'js', path.dist + 'img', path.dist + '*.html'], { force: true }, cb)
});



// Default task
gulp.task('default', ['clean'], function () {
    gulp.start('watch', 'sass', 'jade', 'babel');
});
