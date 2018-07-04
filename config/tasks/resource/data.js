const path = require('path');
const gulp = require('gulp');

const dataTask = () => gulp.src(path.join(appRoot, 'src', 'assets', 'data', '**', '*.*'))
    .pipe(gulp.dest('./dist/data'));

module.exports = dataTask;