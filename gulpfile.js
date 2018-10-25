var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

//message to check if gulp is functioning
gulp.task('message', function(){
  return console.log("We got gulp");
});

//copy all html files
gulp.task('copyHtml', function(){
  gulp.src('src/*.html')
  .pipe(gulp.dest('dist'));
});

//optomize images
gulp.task('imageMin', () =>
  gulp.src('src/assets/images/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images'))
);

//uglify files (compress them, minify JS)
gulp.task('minify', function(){
  gulp.src('src/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'))
}); 

//compile sass
gulp.task('sass', function(){
  gulp.src('src/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('dist/css'));
});

//copy fonts
gulp.task('copyFonts', function(){
  gulp.src('src/assets/fonts/*')
  .pipe(gulp.dest('dist/fonts'))
});

//create a default task to perform all tasks at once
gulp.task('default', ['message', 'copyHtml', 'imageMin', 'minify', 'sass', 'copyFonts', 'scripts']);

//create a watch task!!!!
gulp.task('watch', function(){
  gulp.watch('src/*.js', ['scripts']);
  gulp.watch('src/images/*', ['imageMin']);
  gulp.watch('src/*.scss', ['sass']);
  gulp.watch('src/*.html', ['copyHtml']);
});