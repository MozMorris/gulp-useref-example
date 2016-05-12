var gulp = require('gulp');
var useref = require('gulp-useref');

gulp.task('default', function() {
  return gulp.src('app/templates/index.html')
    .pipe(useref({
      searchPath: 'static',
      base: 'dist/some/other/directory'
    }))
    .pipe(gulp.dest('dist'));
});
