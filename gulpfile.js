'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    scss = require('gulp-sass'),
    webserver = require('gulp-webserver');

gulp.task('libs', function(){
    gulp
    	.src([
			'bower/angular/angular.js',
			'bower/angular-resource/angular-resource.js',
			'bower/angular-ui-router/release/angular-ui-router.js',
            'bower/jquery/dist/jquery.js',
            'bower/moment/min/moment.min.js',
            'bower/tether/dist/js/tether.js'
        ])
		.pipe(concat('libs.js'))
        .pipe(gulp.dest('prod'));

    gulp
    	.src(['bower/bootstrap/dist/css/bootstrap.css'
        ])
        .pipe(concat('libs.css'))
        .pipe(gulp.dest('prod'));
});

gulp.task('js', function(){
    gulp
    	.src('src/js/**/*.js')
		.pipe(concat('app.js'))
		.pipe(gulp.dest('prod'));
});

gulp.task('css', function() {
    gulp
    	.src('src/scss/**/*.scss')
        .pipe(scss())
        .pipe(concat('app.css'))
        .pipe(gulp.dest('prod'));
});

gulp.task('html', function() {
    gulp
    	.src('src/index.html')
        .pipe(gulp.dest('prod'));

    gulp
    	.src('src/tpl/**/*.html')
        .pipe(gulp.dest('prod/tpl'));
});

gulp.task('watch', function(){
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch('src/scss/**/*.scss', ['css']);
    gulp.watch('src/**/*.html', ['html']);
});



gulp.task('webserver', function(){
    gulp.src('./prod')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});


gulp.task('default', [
    'libs', 'js', 'css', 'html', 'watch', 'webserver'
]);
