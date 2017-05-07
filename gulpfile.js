var gulp = require('gulp');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var jshint = require('gulp-jshint');
var distPath = 'pi_node/public';

gulp.task('styles', function() {
    gulp.src('src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(distPath + '/css'));   
});

gulp.task('lint', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('uglify', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(distPath + '/js'));
});

gulp.task('build', ['uglify', 'styles']);

gulp.task('default', ['build']);

//Watch tasks
gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.scss',['styles']);
    gulp.watch('src/js/**/*.js',['lint']);
});
