const path = require('path');
const gulp = require('gulp');

const htmlTask = () => gulp.src(path.join(appRoot, 'src', 'index.html'))
    .pipe(gulp.dest('./dist'));

module.exports = htmlTask;