var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
// var connect = require('gulp-connect');
var browserSync = require('browser-sync');
var reload = browserSync.reload;


// gulp.task('connect', function() {
//   connect.server({
//     root: 'public',
//     livereload: true
//   });
// });

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass( { errLogToConsole: true } ))
    .pipe(gulp.dest('./public/css'))
    .pipe(reload({ stream: true}));
});

gulp.task('serve', ['sass'], function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./public/**/*.html').on('change', reload);});

// gulp.task('livereload', function () {
//   gulp.src('./public/**/*')
//     .pipe(connect.reload());
// });

gulp.task('browserSync', function() {
  browserSync({
    proxy: 'localhost:3003',
  });
});


// gulp.task('watch', function() {
//   gulp.watch('./sass/**/*.scss', ['sass']);
//   gulp.watch('./public', ['livereload']);
// });

gulp.task('default', ['serve', 'sass', 'browserSync']);