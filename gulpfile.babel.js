import fs from 'fs'

import gulp from 'gulp'
import uncss from'gulp-uncss'
import sass from 'gulp-sass'
import concat from 'gulp-concat'
import nano from 'gulp-cssnano'
import inlineCss from 'gulp-inline-css'
import watch from 'gulp-watch'
import batch from 'gulp-batch'


import React from 'react'
import ReactDOMServer from 'react-dom/server'
import InstagramGallery from './src/containers/InstagramGallery'

gulp.task('default', ['build'])
gulp.task('static', ['static'])
gulp.task('build', ['sass', 'inline'])

gulp.task('static', (done) => {
  fs.readFile('index.tmpl.html', 'utf-8', (err, template) => {
    const instagramGallery = ReactDOMServer.renderToString(<InstagramGallery />)

    fs.writeFile('index.html', template.replace('{{instagramGallery}}', instagramGallery), 'utf-8', done)
  })
})

gulp.task('sass', function () {
    return gulp.src('styles/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        // .pipe(nano())
        .pipe(gulp.dest('styles/'));
});

gulp.task('inline', function() {
    return gulp.src('./*.html')
        .pipe(inlineCss())
        .pipe(gulp.dest('./'));
});

gulp.task('watch', () => {
  watch('styles/**/*.scss', batch((events, done) => {
    gulp.start('sass', done)
  }))
})
