import fs from 'fs'

import gulp from 'gulp'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import InstagramGallery from './src/containers/InstagramGallery'

gulp.task('default', ['build'])
gulp.task('static', ['static'])

gulp.task('static', (done) => {
  fs.readFile('index.tmpl.html', 'utf-8', (err, template) => {
    const instagramGallery = ReactDOMServer.renderToString(<InstagramGallery />)

    fs.writeFile('index.html', template.replace('{{instagramGallery}}', instagramGallery), 'utf-8', done)
  })
})