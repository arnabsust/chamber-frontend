var gulp = require('gulp');
var connect = require('gulp-connect');

var browserify = require('browserify');
var source = require('vinyl-source-stream');

var uglify = require('gulp-uglify');

var buffer = require('vinyl-buffer');

var templateCache = require('gulp-angular-templatecache');

gulp.task('connect', function() {
    connect.server({
        root: 'app/',
        port: 4000
    });
});

gulp.task('browserify', function() {
    return browserify(['./app/app.js'])
        .bundle()
        .pipe(source('bundled.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./app/'));
});

gulp.task('cachingTemplates', function() {
    return gulp.src('app/components/**/**/*.html')
        .pipe(templateCache({
            module: 'templatesCache',
            standalone: true,
            root: 'templates/'
        }))
        .pipe(gulp.dest('app/templates'));
});

gulp.task('watchJS', function() {
    gulp.watch('app/**/*.js', ['browserify']);
});

gulp.task('default', ['connect', 'watchJS']);
