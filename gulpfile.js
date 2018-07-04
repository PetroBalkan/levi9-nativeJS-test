const gulp = require('gulp');

/**
 * Setting root
 */
global.appRoot = __dirname;

/**
 * Resource tasks
 */
gulp.task('styles:app', require('./config/tasks/resource/styles/app'));
gulp.task('styles', gulp.series(['styles:app']));
gulp.task('html', require('./config/tasks/resource/html'));
gulp.task('images', require('./config/tasks/resource/images'));
gulp.task('scripts', require('./config/tasks/resource/scripts'));
gulp.task('data', require('./config/tasks/resource/data'));
gulp.task('resource', gulp.series(['styles', 'html', 'images', 'scripts', 'data']));

/**
 * Environment tasks
 */
gulp.task('server', require('./config/tasks/env/server'));
gulp.task('app', gulp.series(['resource', 'server']));

/**
 * Compress assets
 */
require('./config/tasks/compress');
