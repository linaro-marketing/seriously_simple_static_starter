var gulp = require('gulp');
var uglify = require('gulp-uglify');
var include = require('gulp-include');
var concat = require('gulp-concat');
const child_process = require("child_process");
const browsersync = require("browser-sync").create();
const execSync = require('child_process').execSync;
var sourcemaps = require('gulp-sourcemaps');

var src = {
    js: ['assets/js/vendor/jquery.js', 'assets/js/**/*.js']
}
var publishdir = '_site'
var dist = {
    all: [publishdir + '/**/*'],
    js: publishdir + '/static/',
    vendor: publishdir + '/static/'
}
function buildJS() {
    return gulp.src(src.js)
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dist.js))
}
function compressJS() {
    return gulp.src(dist.js + "app.js")
        .pipe(gulp.dest(dist.js))
}
// BrowserSync
function browserSync(done) {
    browsersync.init({
        server: {
            baseDir: "./_site/"
        },
        port: 4000
    });
    done();
}
// BrowserSync Reload
function browserSyncReload(done) {
    browsersync.reload();
    done();
}
// Build the Jekyll Site
function jekyll() {
    return child_process.spawn("bundle", ["exec", "jekyll", "build", "--profile", "--trace"], { stdio: "inherit" });
}
// Build the Jekyll Site
function jekyll_production() {
    return child_process.spawn("bundle", ["exec", "jekyll", "build", "--profile", "--trace","--config","_config-production.yml"], { stdio: "inherit" });
}
// Watch files
function watchFiles() {
    gulp.watch("./assets/js/**/*", gulp.series(scripts));
    gulp.watch(
        [
            "./_includes/**/*",
            "./_layouts/**/*",
            "./_pages/**/*",
            "./_posts/**/*",
            "./_data/**/*",
            "./_sass/**/*",
            "./**/*.md",
            "./**/*.html",
            "./!_site/**/*",
        ],
        gulp.series(jekyll, scripts, browserSyncReload)
    );
}

// Exports/Tasks
const scripts = gulp.series(buildJS, compressJS);
const build = gulp.series(jekyll, scripts);
exports.js = scripts;
exports.jekyll = jekyll;
exports.build = build;
exports.default = gulp.series(build, gulp.parallel(watchFiles, browserSync));
exports.build = gulp.series(jekyll, scripts);
exports.build_production = gulp.series(jekyll_production, scripts);