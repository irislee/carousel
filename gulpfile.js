// Include gulp
var gulp = require('gulp');

// Include plugins
var sass = require('gulp-sass');
var concat = require('gulp-concat');

// Compile Sass
gulp.task('sass', function() {
   return gulp.src('css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
});

// Concat JS files
gulp.task('scripts', function() {
  return gulp.src('./js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js');
    gulp.watch('css/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['sass', 'scripts', 'watch']);




