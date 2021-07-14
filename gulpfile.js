const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');


gulp.task('sass', function(){
    return gulp.src('app/sass/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('html', function() {
    return gulp.src('app/index.html')
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
  });

gulp.task('watch', function() {
    gulp.watch('app/sass/*.scss', gulp.parallel('sass'));
    gulp.watch('app/index.html', gulp.parallel('html'));
})

gulp.task('default', gulp.parallel('sass', 'html', 'browser-sync', 'watch'))