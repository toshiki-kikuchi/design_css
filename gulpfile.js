'use strict';

var gulp = require('gulp'),
   //bmnpm  cssbeautify = require('gulp-cssbeautify'),
    sass = require('gulp-sass');
 
 /*
gulp.task('cssbeautify', function() {
    return gulp.src('css/style.css')
        .pipe(cssbeautify())
        .pipe(gulp.dest('css'));;
});
*/

gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass','sass:watch']);