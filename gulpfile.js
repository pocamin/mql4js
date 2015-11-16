var gulp = require('gulp'),
  browserSync = require('browser-sync'),
  bower = require('gulp-bower'),
  useref = require('gulp-useref'),
  gulpif = require('gulp-if'),
  uglify = require('gulp-uglify'),
  template = require('gulp-template'),
  minifyCss = require('gulp-minify-css'),
  del = require('del'),
  shell = require('gulp-shell'),
  seq = require('gulp-sequence'),
  KarmaServer = require('karma').Server,
  fs = require('fs');

gulp.task('default', seq('clean', 'build', 'serve'));
gulp.task('build', seq(['html', 'copy-gen-resources', 'copy-resources', 'copy-mql4']));


gulp.task('test', function (done) {
  new KarmaServer({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});


// ANTLR4 tasks
gulp.task('antlr4', function () {
  console.log("Now generating andlr4 from grammar files");
  return gulp.src('./grammar/*.g4')
    .pipe(shell([
      'echo processing : <%= file.path %>',
      'java -jar ./gulp_dependencies/antlr-4.5.1-complete.jar  -Dlanguage=JavaScript -no-listener  <%= file.path %> -o app/generated'
    ]));
});
gulp.task('copy-gen-resources', ['antlr4'], function () {
  return gulp.src(['app/generated/*.js'])
    // .pipe(uglify()) //TODO
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
});


// JS files not loaded with require.js
gulp.task('copy-resources', function () {
  return gulp.src(['js_dependencies/**/*.js', 'app/bower_components/jquery/dist/jquery.min.map'])
    // .pipe(uglify()) //TODO
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});


// mql4 Files
gulp.task('copy-mql4', function () {
  return gulp.src(['app/mql4/**/*.*'])
    .pipe(gulp.dest('dist/mql4'));
});


gulp.task('browserSync', function () {
  browserSync({
    server: {
      baseDir: 'dist'
    }
  })
});


// watcher
gulp.task('serve', ['browserSync'], function () {
  gulp.watch('grammar/*.g4', ['copy-gen-resources']);
  gulp.watch('app/mql4/**/*.*', ['copy-mql4']);
  gulp.watch(['app/*.html', 'app/js/*.js', 'app/css/*.css'], ['html']);
});


gulp.task('bower', function () {
  return bower({directory: './bower_components', cwd: './app'});
});

gulp.task('html', ['bower'], function () {
  return gulp.src('app/*.html')
    .pipe(template({samples: fs.readdirSync("app/mql4/samples")}))
    .pipe(useref())ls
    /*.pipe(gulpif('js/*.js', uglify()))*/
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});


gulp.task('clean', function () {
  return del(['dist/*', 'app/bower_components', 'app/generated']).then(function (paths) {
    console.log('Deleted files/folders:\n', paths.join('\n'));
  });
});
