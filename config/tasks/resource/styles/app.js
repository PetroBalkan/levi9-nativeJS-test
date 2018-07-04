const path = require('path');
const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');

const stylesTask = () => {
    return gulp.src(path.join(appRoot, 'src', 'assets', 'styles', 'style.scss'))
        .pipe(rename({basename: 'app', suffix: '.min'}))
        .pipe(autoprefixer())
        .pipe(cssnano())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/styles'));
};

module.exports = stylesTask;