var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./app/scss/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/stylesheets/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./app/scss/**/*.scss', ['sass']);
});

gulp.task("webpack-dev-server", function(callback) {
    // Start a webpack-dev-server
    var compiler = webpack(require('./webpack.config.js'));

    new WebpackDevServer(compiler, {
        // server and middleware options
    }).listen(8080, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");

        // keep the server alive or continue?
        // callback();
    });
});

gulp.task("default", ["webpack-dev-server", "sass", "sass:watch"]);
