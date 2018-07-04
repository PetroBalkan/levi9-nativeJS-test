var gulp = require('gulp');
var minifyCSS = require('gulp-csso');
var sass = require('gulp-sass');

var sassFiles = 'src/assets/styles/**/*.scss',
    cssDest = 'src/assets/styles/css/';

gulp.task('styles', function () {
    gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(gulp.dest(cssDest));
});

gulp.task('default', ['styles']);