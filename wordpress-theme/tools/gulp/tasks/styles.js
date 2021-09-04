import autoprefixer from 'autoprefixer';
import gulp from 'gulp';
import cleanCSS from 'gulp-clean-css';
import filter from 'gulp-filter';
import lec from 'gulp-line-ending-corrector';
import notify from 'gulp-notify';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename';
import rtl from 'gulp-rtlcss';
import gulpSass from 'gulp-sass';
import sorting from 'postcss-sorting';
import dartSass from 'sass';
import { pipeline } from 'stream';
import errorHandler from '../config/error-handler.js';
import options from '../config/options.js';
import paths from '../config/paths.js';

const sass = gulpSass( dartSass );

/**
 * Task: `styleCss`
 *
 * Generate style.css and style.min.css. SCSS to CSS compilation, properties
 * sorting, autoprefixer, minification.
 */
function styleCss() {
	return pipeline(
		[
			gulp.src( paths.compile.styles.src.main, options.gulp.src ),
			sass( options.sass ),
			postcss(
				[ sorting( options.postcss.sorting ) ],
				[ autoprefixer() ]
			),
			lec(),
			gulp.dest( paths.compile.styles.dest.main ),
			filter( '**/*.css' ),
			rename( { suffix: '.min' } ),
			cleanCSS(),
			lec(),
			gulp.dest( paths.compile.styles.dest.main, options.gulp.dest ),
			notify( {
				title: 'styleCss task complete',
				message: 'style.css and style.min.css have been compiled.',
				onLast: options.notify.onLast,
			} ),
		],
		errorHandler
	);
}

/**
 * Task: `styleRtlCss`
 *
 * Generate style-rtl.css and style-rtl.min.css. SCSS to CSS compilation,
 * properties sorting, autoprefixer, minification.
 */
function styleRtlCss() {
	return pipeline(
		[
			gulp.src( paths.compile.styles.src.main, options.gulp.src ),
			sass( options.sass ),
			postcss(
				[ sorting( options.postcss.sorting ) ],
				[ autoprefixer() ]
			),
			lec(),
			rename( 'style-rtl.css' ),
			rtl(),
			gulp.dest( paths.compile.styles.dest.main ),
			filter( '**/*.css' ),
			rename( { suffix: '.min' } ),
			cleanCSS(),
			lec(),
			gulp.dest( paths.compile.styles.dest.main, options.gulp.dest ),
			notify( {
				title: 'styleRtlCss task complete',
				message:
					'style-rtl.css and style-rtl.min.css have been compiled.',
				onLast: options.notify.onLast,
			} ),
		],
		errorHandler
	);
}

/**
 * Task: `printCss`
 *
 * Generate print.css and print.min.css. SCSS to CSS compilation, properties
 * sorting, autoprefixer, minification.
 */
function printCss() {
	return pipeline(
		[
			gulp.src( paths.compile.styles.src.print, options.gulp.src ),
			sass( options.sass ),
			postcss(
				[ sorting( options.postcss.sorting ) ],
				[ autoprefixer() ]
			),
			lec(),
			gulp.dest( paths.compile.styles.dest.print ),
			filter( '**/*.css' ),
			rename( { suffix: '.min' } ),
			cleanCSS(),
			lec(),
			gulp.dest( paths.compile.styles.dest.print, options.gulp.dest ),
			notify( {
				title: 'printCss task complete',
				message: 'print.css and print.min.css have been compiled.',
				onLast: options.notify.onLast,
			} ),
		],
		errorHandler
	);
}

/**
 * Task: `printRtlCss`
 *
 * Generate print-rtl.css and print-rtl.min.css. SCSS to CSS compilation,
 * properties sorting, autoprefixer, minification.
 */
function printRtlCss() {
	return pipeline(
		[
			gulp.src( paths.compile.styles.src.print, options.gulp.src ),
			sass( options.sass ),
			postcss(
				[ sorting( options.postcss.sorting ) ],
				[ autoprefixer() ]
			),
			lec(),
			rename( 'print-rtl.css' ),
			rtl(),
			gulp.dest( paths.compile.styles.dest.print ),
			filter( '**/*.css' ),
			rename( { suffix: '.min' } ),
			cleanCSS(),
			lec(),
			gulp.dest( paths.compile.styles.dest.print, options.gulp.dest ),
			notify( {
				title: 'printRtlCss task complete',
				message: 'print-rtl.css and print-rtl.min.css have been compiled.',
				onLast: options.notify.onLast,
			} ),
		],
		errorHandler
	);
}

/**
 * Task: `editorStyleCss`
 *
 * Generate editor-style.css and editor-style.min.css. SCSS to CSS compilation,
 * properties sorting, autoprefixer, minification.
 */
function editorStyleCss() {
	return pipeline(
		[
			gulp.src( paths.compile.styles.src.editor, options.gulp.src ),
			sass( options.sass ),
			postcss(
				[ sorting( options.postcss.sorting ) ],
				[ autoprefixer() ]
			),
			lec(),
			rename( 'editor-style.css' ),
			gulp.dest( paths.compile.styles.dest.editor ),
			filter( '**/*.css' ),
			rename( { suffix: '.min' } ),
			cleanCSS(),
			lec(),
			gulp.dest( paths.compile.styles.dest.editor, options.gulp.dest ),
			notify( {
				title: 'editorStyleCss task complete',
				message:
					'editor-style.css and editor-style.min.css have been compiled.',
				onLast: options.notify.onLast,
			} ),
		],
		errorHandler
	);
}

/**
 * Task: `editorStyleRtlCss`
 *
 * Generate editor-style-rtl.css and editor-style-rtl.min.css. SCSS to CSS
 * compilation, properties sorting, autoprefixer, minification.
 */
function editorStyleRtlCss() {
	return pipeline(
		[
			gulp.src( paths.compile.styles.src.editor, options.gulp.src ),
			sass( options.sass ),
			postcss(
				[ sorting( options.postcss.sorting ) ],
				[ autoprefixer() ]
			),
			lec(),
			rename( 'editor-style-rtl.css' ),
			rtl(),
			gulp.dest( paths.compile.styles.dest.editor ),
			filter( '**/*.css' ),
			rename( { suffix: '.min' } ),
			cleanCSS(),
			lec(),
			gulp.dest( paths.compile.styles.dest.editor, options.gulp.dest ),
			notify( {
				title: 'editorStyleRtlCss task complete',
				message:
					'editor-style.css and editor-style.min.css have been compiled.',
				onLast: options.notify.onLast,
			} ),
		],
		errorHandler
	);
}

export { styleCss, styleRtlCss, printCss, printRtlCss, editorStyleCss, editorStyleRtlCss };
