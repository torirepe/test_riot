const gulp = require('gulp');

//js
const riot = require('gulp-riot');
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const webpackConfig = require('./webpack.config.js');

//sass
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

//etc
const browserSync = require('browser-sync');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const cache = require('gulp-cached');
const watch = require('gulp-watch');

//directory
const sourceDir = 'src/';
const distDir = 'dist/';
const assetsDir = 'assets/';

//browser-sync
gulp.task('browser-sync', () => {
  browserSync({
    server: {
      baseDir: distDir
    }
  });
});


//webpack
gulp.task('webpack', () => {
  return gulp.src('src/tag.js')
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest(distDir))
    .pipe(browserSync.stream())
});

//sass
gulp.task('sass', () => {
  return gulp.src([sourceDir + assetsDir + 'sass/**/*.scss'])
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(sass())
    .pipe(autoprefixer({
    browsers: ['last 2 versions', 'Android 4', 'ie 9']
  }))
    .pipe(gulp.dest(sourceDir + assetsDir + 'css/'))
});
gulp.task('css', () => {
  return gulp.src(sourceDir + '**/*.css')
    .pipe(cache('css-cache'))
    .pipe(gulp.dest(distDir))
    .pipe(browserSync.stream())
});

//copy
gulp.task('copy', () => {
  return gulp.src([sourceDir + '**/*'])
    .pipe(gulp.dest(distDir))
    .pipe(browserSync.stream())
});

//watch
gulp.task('default', ['browser-sync','copy', 'webpack', 'sass'], () => {
  watch([sourceDir + '**/*.+(jpg|jpeg|gif|png|html|php|tag)'], () => {
    gulp.start(['copy']);
  });
  watch([sourceDir + '**/*.tag', sourceDir + 'tag.js'], () => {
    gulp.start(['webpack']);
  });
  watch([sourceDir + '**/*.scss'], () => {
    gulp.start(['sass']);
  });
  watch([sourceDir + '**/*.css'], () => {
    gulp.start(['css']);
  });
});