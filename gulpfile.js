const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const minify = require("gulp-babel-minify");
const sass = require('gulp-sass');

//message to check if gulp is functioning
gulp.task('message', function(){
  return console.log("We got gulp");
});

//copy all html files
gulp.task('copyHtml', function(){
  gulp.src('heros/*.html')
  .pipe(gulp.dest('dist'));
});

//optomize images
gulp.task('imageMin', () =>
  gulp.src('heros/images/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images'))
);

//minify files for ES6
gulp.task("minify", () =>
  gulp.src("heros/js/*.js")
    .pipe(minify({
      mangle: {
        keepClassName: true
      }
    }))
    .pipe(gulp.dest("dist/js"))
);

//compile sass
gulp.task('sass', function(){
  gulp.src('heros/css/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('dist/css'));
});

//copy fonts
gulp.task('copyFonts', function(){
  gulp.src('heros/fonts/*')
  .pipe(gulp.dest('dist/fonts'))
});

//create a default task to perform all tasks at once
gulp.task('default', ['message', 'copyHtml', 'imageMin', 'minify', 'sass', 'copyFonts']);

//create a watch task!!!!
gulp.task('watch', function(){
  gulp.watch('heros/js/*.js', ['minify']);
  gulp.watch('heros/images/*', ['imageMin']);
  gulp.watch('heros/css/*.scss', ['sass']);
  gulp.watch('heros/*.html', ['copyHtml']);
});