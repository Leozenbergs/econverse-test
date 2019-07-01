
var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
// main task
gulp.task('main', function(){
    return gulp.src('assets/sass/styles.sass')
      .pipe(sass().on('error', sass.logError)) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest('assets/css'))
});

// mixins task
gulp.task('mixins', function(){
  return gulp.src('assets/sass/mixins.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css'))
});

//Watch main task
gulp.task('watch-sass',function() {
  gulp.watch('assets/sass/styles.sass', gulp.series('main'));
});

//Watch mixins task
gulp.task('watch-mixins',function() {
gulp.watch('assets/sass/mixins.sass', gulp.series('mixins'));
});