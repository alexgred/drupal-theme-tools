'use strict';

const config = require('./config.json');

const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const sourcemaps = require('gulp-sourcemaps');


/* Styles
==================== */

/* Sass */
gulp.task('styles:sass', function () {

  return gulp.src('./sass/' + config.styles.sass)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css'));
});

/* Less */
gulp.task('styles:less', function () {
  
  return gulp.src('./less/' + config.styles.less)
  .pipe(sourcemaps.init())
  .pipe(less())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./css'));
})

/* Stylus */
gulp.task('styles:stylus', function () {
  return gulp.src('./stylus/' + config.styles.stylus)
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css/'));
});


/* Watch
===================== */

/* Watcher */
gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', gulp.series('styles:sass')); // watch sass
  gulp.watch('./less/**/*.less', gulp.series('styles:less')); // watch less
  gulp.watch('./stylus/**/*.styl', gulp.series('styles:stylus')); // watch stylus
});