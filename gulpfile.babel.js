import gulp from 'gulp'
import less from 'gulp-less'
import watchify from 'watchify'
import browserify from 'browserify'
import browserSync from 'browser-sync'
import babelify from 'babelify'
import source from 'vinyl-source-stream'
import imagemin from 'gulp-imagemin'

import { handleErrors } from './gulp-handle-errors'

//Paths
const srcPath = './src'

const srcStylePath = srcPath + '/style'
const srcExtraStylePath = srcPath + '/extra-style/*'
const srcJsPath = srcPath + '/js'
const srcIndexPath = srcPath + '/index.html'
const srcAssetsPath = srcPath + '/assets'

const srcMainLessPath = srcStylePath + '/main.less'
const srcAllLessPath = srcStylePath + '/**/*.less'

const srcMainJsPath = srcJsPath + '/index.js'
const srcAllJsPath = srcJsPath + '/**/*.js'

const srcImagesPath = srcAssetsPath + '/images/**/*'
const srcFontsPath = srcAssetsPath + '/fonts/**/*'

const distPath = './dist'

const distStylePath = distPath + '/style'
const distExtraStylePath = distPath + '/extra-style'
const distJSPath = distPath + '/js'
const distIndexPath = distPath + '/index.html'
const distAssetsPath = distPath + '/assets'

const distImagesPath = distAssetsPath + '/images'
const distFontsPath = distAssetsPath + '/fonts'


const showFileUpdated = (files) => {
  console.log('File(s) updated :')
  files.forEach((file) => {
    console.log('-' + file)
  })
}

const reactifyES6 = (file) => {
  return reactify(file, {'es6': true})
}

gulp.task('browser-sync', function() {
  browserSync.init({
    target: "localhost:3000",
    open: true,
    port: 3000,
    server: { baseDir: "./dist" }
  })
})

gulp.task('less', () => {
  gulp.src(srcMainLessPath)
    .pipe(less({strictMath: true}).on('error', handleErrors))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest(distStylePath))
})

gulp.task('watch', ['browser-sync'], () => {
  gulp.watch(srcAllLessPath, ['less'])

  const watcher = watchify(browserify({
    entries: [srcMainJsPath],
    transform: [babelify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  }))

  return watcher.on('update', (files) => {
    watcher.bundle().on('error', handleErrors)
      .pipe(source('main.js'))
      .pipe(gulp.dest(distJSPath))
    showFileUpdated(files)
  })
  .bundle()
  .pipe(source('main.js'))
  .pipe(gulp.dest(distJSPath))
})

gulp.task('js', () => {
  browserify(srcMainJsPath)
  .transform('babelify', { presets: ["es2015", "react"] })
  .bundle()
  .pipe(source('main.js'))
  .pipe(gulp.dest(distJSPath))
})

gulp.task('image', () => {
  gulp.src(srcImagesPath)
    .pipe(imagemin())
    .pipe(gulp.dest(distImagesPath))
})

gulp.task('fonts', () => {
  gulp.src(srcFontsPath)
    .pipe(gulp.dest(distFontsPath))
})

gulp.task('assets', ['image', 'fonts'])

gulp.task('copyIndexHtml', () => {
  gulp.src(srcIndexPath)
    .pipe(gulp.dest(distPath))
})

gulp.task('copyExternalCSS', () => {
  gulp.src(srcExtraStylePath)
    .pipe(gulp.dest(distExtraStylePath))
})

gulp.task('default', ['copyIndexHtml', 'copyExternalCSS', 'watch'], () => {
  gulp.run('js')
  gulp.run('less')
  gulp.run('assets')
  //gulp.watch(srcAllJsPath).on('change', browserSync.reload)
})
