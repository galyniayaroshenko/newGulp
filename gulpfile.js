var gulp = require('gulp'),
    concat = require('gulp-concat'),
    cssmin = require('gulp-cssmin'),
    uglify = require('gulp-uglify'),
    webserver = require('gulp-webserver'),
    imagemin = require('gulp-imagemin'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify'),
    babel = require('gulp-babel');

gulp.task('webserver', function() {
    gulp.src('./build/')
        .pipe(webserver({
            port: 3213,
            livereload: true,
            open: true,
            fallback: './build/index.html'
    }));
});

gulp.task('cssConcat', function() {
    return gulp.src(require('./stylesheets-dependencies.json').dependencies)
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./build/css'))
        .pipe(notify(' I did it! '));
});

gulp.task('cssMin', function() {
    return gulp.src(require('./stylesheets-dependencies.json').dependencies)
        .pipe(cssmin())
        .pipe(concat('all.min.css'))
        .pipe(gulp.dest('./build/css'))
        .pipe(notify(' I did it! '));
});

gulp.task('jsUglify', function() {
    return gulp.src('./app/js/**/*.js')
        .pipe(concat('all.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'))
        .pipe(notify(' I did it! '));
});

gulp.task('templates', function() {
    return gulp.src('./app/index.html')
        .pipe(gulp.dest('./build'))
        .pipe(notify(' I did it! '));
});

gulp.task('buildLib', function() {
    gulp.src(require('./dependencies.json').dependencies)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./build/js'))
        .pipe(notify(' I did it! '));
});

gulp.task('imageMin', function() {
    return gulp.src(['./app/img/**/*.*'])
        .pipe(imagemin({
            optimizationLevel: 7
        }))
        .pipe(gulp.dest('./build/img'))
        .pipe(notify(' I did it! '));
});

gulp.task('sass', function () {
    return gulp.src('./app/pre-proc/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/css/'))
        .pipe(notify(' I did it! '));
});

gulp.task('watch', ['sass'], function () {
    gulp.watch('./app/pre_proc/scss/**/*.scss', ['sass']);
    gulp.watch('./app/css/**/*.css', ['cssConcat']);
    gulp.watch('./app/js/**/*.js', ['jsUglify']);
    gulp.watch('./app/index.html', ['templates']);
});

gulp.task('default', ['cssMin', 'jsUglify', 'cssConcat', 'templates', 'buildLib', 'webserver', 'imageMin', 'sass', 'watch']);
