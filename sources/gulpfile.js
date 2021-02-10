// Project data

const srcpaths = {
	less: './less/**/*.less',
	ts: './ts/**/*.ts',
};

const destpaths = {
	css: '../deploy/static/css',
	js: '../deploy/static/js',
};


// Dependencies and Plugins

const gulp = require('gulp');

const rename = require('gulp-rename');

const path = require('path');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const zindex = require('postcss-zindex');
const autoprefixer = require('autoprefixer');
const focus = require('postcss-focus');
const nocomments = require('postcss-discard-comments');
const nano = require('gulp-cssnano');
const jmq = require('gulp-join-media-queries');
const stylefmt = require('gulp-stylefmt');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('css', () =>
	gulp.src('./less/style.less')
		.pipe(less({
			paths: [path.join(__dirname, 'less', 'includes')]
		}))
		.pipe(postcss([
			autoprefixer({ // add vendor prefixes
				cascade: false
			}),
			nocomments, // discard comments
			focus, // add focus to hover-states
			// zindex, // reduce z-index values - deprecated, use .zIndex()-mixin
		])) // clean up css
		.pipe(jmq())
		//#fixme: .pipe(plugins.stylefmt()) // syntax formatting, stylefmt destroys background inline-svg
		.pipe(gulp.dest(destpaths.css)) // save cleaned version
		.pipe(nano({zindex: false})) // minify css
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(destpaths.css)) // save minified version
);

gulp.task('js', () =>
	tsProject.src()
		.pipe(tsProject()).js
		.pipe(gulp.dest(destpaths.js))
);

gulp.task('watch', () => {
	gulp.watch(srcpaths.less, gulp.series('css'));
	gulp.watch(srcpaths.ts, gulp.series('js'));
});

gulp.task('default', gulp.series([
	'css', 'js'
]));
