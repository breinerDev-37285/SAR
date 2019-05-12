const gulp = require('gulp'),
      sass = require('gulp-sass'),
      minify = require('gulp-minify-css'),
      autoprefixer = require('gulp-autoprefixer'),
      watch = require('gulp-watch');

gulp.task('sass', () => {
    let path = './src/sass/*.scss'
    gulp.watch( path, () => {
        return new Promise( resolve => {
            gulp.src( path )
                .pipe( sass({
                    outputStyle: 'compact',
                    sourceCode: false
                }))
                .pipe( autoprefixer({
                    browsers: ['last 2 versions'],
                    cascade: false
                }))
                .pipe( minify() )
                .pipe( gulp.dest('./src/components/css') )
            resolve( 'ignore this value' )
        }) 
    })
})