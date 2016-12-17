"use strict";

const gulp = require('gulp');
var connect = require('gulp-connect');
var plumber = require('gulp-plumber');

const babel = require('gulp-babel');

gulp.task('connect', function() {
  connect.server({
    // root: './',
    livereload: true
  });
});
var jsPat = 'days/**/*.js';
var jsDest = 'dist';

gulp.task('js', function () {
  gulp.src(jsPat)
   	.pipe(plumber())
    .pipe(babel({
        presets: ['es2015']
    }))
  	.pipe(gulp.dest(jsDest))
    .pipe(connect.reload());
});

gulp.task('watch', function () { 
  gulp.watch([jsPat], ['js']);
});

gulp.task('default', ['connect', 'js', 'watch']);