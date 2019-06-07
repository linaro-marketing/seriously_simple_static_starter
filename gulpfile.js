const gulp = require('gulp');
const uglify = require('gulp-uglify');
const include = require('gulp-include');
const concat = require('gulp-concat');
const child_process = require("child_process");
const browsersync = require("browser-sync").create();
const execSync = require('child_process').execSync;
const sourcemaps = require('gulp-sourcemaps');
const argv = require('yargs').argv;
const autoprefixer = require("autoprefixer"); // Live updates for dev
const cssnano = require("cssnano"); // CSS Minifier
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
var csso = require('gulp-csso');

// PostCSS Plugins
var postcss_plugins = [
    autoprefixer(),
    cssnano({
        autoprefixer: false,
        zindex: false
    })
];

// Define the publish directory
if (argv.production === undefined) {
    var publishdir = '_site'
}
else {
    var publishdir = '_production-site'
}
// Sources
var src = {
    js: ['assets/js/vendor/jquery.js', 'assets/js/**/*.js'],
    css: [publishdir + '/assets/css/dist.css']
}
// Dist
var dist = {
    all: [publishdir + '/**/*'],
    js: publishdir + '/assets/',
    vendor: publishdir + '/assets/',
    css: publishdir + '/assets/'
}
// Javascript
function buildJS() {
    return gulp.src(src.js)
        .pipe(sourcemaps.init())
        .pipe(concat('dist.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dist.js))
}
function compressJS() {
    return gulp.src(dist.js + "dist.js")
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest(dist.js))
}

// Concatenate & Minifiy CSS
// CSS is compiled from sass_sources and pushed through autoprefixer(add's cross browser support prefixes --web-kit etc)
// and then minified using cssnano via the PostCSS API
function css() {
    return gulp
        .src(src.css)
        .pipe(sourcemaps.init())
        .pipe(rename({ suffix: ".min" }))
        // .pipe(postcss(postcss_plugins))
        .pipe(csso({
            restructure: false,
            sourceMap: false,
            debug: true
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dist.css))
        .pipe(browsersync.stream());
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
    if (argv.production === undefined){
        return child_process.spawn("bundle", ["exec", "jekyll", "build", "--profile", "--trace"], { stdio: "inherit" });
    }
    else{
        return child_process.spawn("bundle", ["exec", "jekyll", "build", "--profile", "--trace", "--config", "_config.yml,_config-production.yml", "JEKYLL_ENV=production"], { stdio: "inherit" });
    }
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
const build = gulp.series(jekyll, scripts, css);
exports.js = scripts;
exports.jekyll = jekyll;
exports.build = build;
exports.default = gulp.series(build, gulp.parallel(watchFiles, browserSync));
