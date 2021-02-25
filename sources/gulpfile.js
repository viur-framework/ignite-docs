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
const gulpIf = require('gulp-if');

const rename = require('gulp-rename');

const path = require('path');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const zindex = require('postcss-zindex');
const autoprefixer = require('autoprefixer');
const focus = require('postcss-focus');
const nocomments = require('postcss-discard-comments');
const cleancss = require('gulp-clean-css');
const jmq = require('gulp-join-media-queries');
const stylefmt = require('gulp-stylefmt');
const ts = require('gulp-typescript');
const eslint = require('gulp-eslint');

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
		.pipe(cleancss({zindex: false})) // minify css
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(destpaths.css)) // save minified version
);

gulp.task('js', () =>
	tsProject.src()
		.pipe(tsProject()).js
		.pipe(gulp.dest(destpaths.js))
);

gulp.task('eslint', () =>
	gulp.src(srcpaths.ts)
		.pipe(eslint({fix: true}))
		.pipe(eslint.format())
		.pipe(gulpIf(
			file => file.eslint != null && file.eslint.fixed,
			gulp.dest(srcpaths.ts.split('/*', 1)[0])
		))
		.pipe(eslint.failAfterError())
);

gulp.task('watch', () => {
	gulp.watch(srcpaths.less, gulp.series('css'));
	gulp.watch(srcpaths.ts, gulp.series('js'));
});

gulp.task('default', gulp.series([
	'css', 'js'
]));
