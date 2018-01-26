var gulp = require('gulp');

var dest = 'chrome-raw-print'

gulp.task('src', function() {
  gulp.src(['src/**'])
    .pipe(gulp.dest(dest + '/'))
})

gulp.task('vendor', function() {
  gulp.src(['vendor/**'])
    .pipe(gulp.dest(dest + '/vendor'))
})


gulp.task('default', ['src', 'vendor']);
