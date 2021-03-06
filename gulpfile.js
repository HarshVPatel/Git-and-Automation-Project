const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel')
const imagemin = require('gulp-imagemin')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')

gulp.task('watch', ['css', 'js', 'images'], () => {
  gulp.watch('./src/css/*.css',['css'])
});


gulp.task('css', () =>
    gulp.src('src/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist')),

);

gulp.task('image', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);

gulp.task('js', () =>
    gulp.src('src/js/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('main.js'))
        .pipe(uglify())        
        .pipe(gulp.dest('dist'))
       
);

gulp.task('default', ['css', 'image', 'js']);


