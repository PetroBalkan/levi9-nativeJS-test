const gulp = require('gulp');
const gzip = require('gulp-gzip');
const path = require("path");
const stream = require('merge-stream');

const distPath = path.join(appRoot, 'dist');

const gzipOptions = {
    append: false,
    gzipOptions: {
        level: 6
    }
};

gulp.task('compress', () => {
    const js = gulp
        .src([path.join(distPath, 'scripts', '**', '*.js')])
        .pipe(gzip(gzipOptions))
        .pipe(gulp.dest(path.join(distPath, 'compress', 'scripts')));

    const css = gulp
        .src([path.join(distPath, 'styles', '**', '*.css')])
        .pipe(gzip(gzipOptions))
        .pipe(gulp.dest(path.join(distPath, 'compress', 'styles')));


    return stream([js, css]);
});