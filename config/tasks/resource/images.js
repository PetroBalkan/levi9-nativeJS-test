const path = require('path');
const gulp = require('gulp');

const imagesTask = () => gulp.src(path.join(appRoot, 'src', 'assets', 'images', '**', '*.*'))
    .pipe(gulp.dest('./dist/images'));

module.exports = imagesTask;