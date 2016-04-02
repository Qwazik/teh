"use strict"

var gulp        = require('gulp'),
	browserSync = require('browser-sync').create(),
	sass        = require('gulp-sass'),
	prefixer	= require('gulp-autoprefixer'),
	imgmin		= require('imagemin'),
	png 		= require('imagemin-pngquant');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: {
        	baseDir: ''
        },
        stream: true
    });

    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch(["template/*.html", "index.html"]).on('change', browserSync.reload);
    gulp.watch("css/*.css").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("scss/*.scss")
        .pipe(sass())
        .pipe(prefixer({
        	browsers: ['ie 8', 'last 15 versions']
        }))
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

gulp.task('finish', function() {
    //img,zip
});

gulp.task('default', ['serve']);