const path = require('path');
const gulp = require('gulp');

const scriptsTask = () => gulp.src(path.join(appRoot, 'src', 'assets', 'scripts', '**', '*.*'))
    .pipe(gulp.dest('./dist/scripts'));

module.exports = scriptsTask;