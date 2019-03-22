// Project data

var srcpaths = {
	less: './less/**/*.less',
};

var destpaths = {
	css: '../deploy/static/css',
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


gulp.task('css', () =>
	gulp.src('./less/style.less')
		.pipe(less({
			paths: [path.join(__dirname, 'less', 'includes')]
		}))
		.pipe(postcss([
			autoprefixer({
				browsers: ['last 2 versions'],
				cascade: false
			}),
			nocomments, // discard comments
			focus, // add focus to hover-states
			zindex, // reduce z-index values
		])) // clean up css
		.pipe(jmq())
		.pipe(gulp.dest(destpaths.css)) // save cleaned version
		.pipe(nano()) // minify css
		.pipe(rename({suffix: '.min'})) // save minified version
		.pipe(gulp.dest(destpaths.css))
);

gulp.task('watch', function () {
	gulp.watch(srcpaths.less, gulp.series('css'));
});

gulp.task('default', gulp.series([
	'css',
]));
