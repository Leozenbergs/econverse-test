
var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('assets/sass/styles.sass')
      .pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest('assets/css'))
});

// gulp.task('sass:watch', function() { gulp.watch('app/sass/app.sass', ['sass']);});