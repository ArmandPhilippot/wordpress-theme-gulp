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
import data from '../config/data.js';
import errorHandler from '../config/error-handler.js';
import options from '../config/options.js';
import paths from '../config/paths.js';
import { isDev } from '../config/utils.js';

const sass = gulpSass( dartSass );

/**
 * Get the plugins to process Sass files depending on current environment.
 * @returns {Array} A list of plugins.
 */
function getPlugins() {
	const plugins = [];
	const minify = [
		cleanCSS(),
		lec(),
	];

	plugins.push( sass( options.sass ) );
	plugins.push( postcss(
		[ sorting( options.postcss.sorting ) ],
		[ autoprefixer() ]
	) );

	if ( ! isDev( data.environment ) ) {
		plugins.push( ...minify );
	}

	return plugins;
}

/**
 * Task: `styleCss`
 *
 * Generate style.css and style-rtl.css. SCSS to CSS compilation, properties
 * sorting, autoprefixer, minification.
 */
function styleCss() {
	return pipeline(
		[
			gulp.src( paths.compile.styles.src.main, options.gulp.src ),
			...getPlugins(),
			gulp.dest( paths.compile.styles.dest.main, options.gulp.dest ),
			filter( '**/*.css' ),
			rename( { suffix: '-rtl' } ),
			rtl(),
			gulp.dest( paths.compile.styles.dest.main, options.gulp.dest ),
			notify( {
				title: 'styleCss task complete',
				message:
					'style.css and style-rtl.css have been compiled.',
				onLast: options.notify.onLast,
			} ),
		],
		errorHandler
	);
}

/**
 * Task: `printCss`
 *
 * Generate print.css and print-rtl.css. SCSS to CSS compilation, properties
 * sorting, autoprefixer, minification.
 */
function printCss() {
	return pipeline(
		[
			gulp.src( paths.compile.styles.src.print, options.gulp.src ),
			...getPlugins(),
			gulp.dest( paths.compile.styles.dest.print, options.gulp.dest ),
			filter( '**/*.css' ),
			rename( { suffix: '-rtl' } ),
			rtl(),
			gulp.dest( paths.compile.styles.dest.print, options.gulp.dest ),
			notify( {
				title: 'printCss task complete',
				message:
					'print.css and print-rtl.css have been compiled.',
				onLast: options.notify.onLast,
			} ),
		],
		errorHandler
	);
}

/**
 * Task: `editorCss`
 *
 * Generate editor-style.css and editor-style-rtl.css. SCSS to CSS compilation,
 * properties sorting, autoprefixer, minification.
 */
function editorCss() {
	return pipeline(
		[
			gulp.src( paths.compile.styles.src.editor, options.gulp.src ),
			...getPlugins(),
			rename( 'editor-style.css' ),
			gulp.dest( paths.compile.styles.dest.editor, options.gulp.dest ),
			filter( '**/*.css' ),
			rename( { suffix: '-rtl' } ),
			rtl(),
			gulp.dest( paths.compile.styles.dest.editor, options.gulp.dest ),
			notify( {
				title: 'editorCss task complete',
				message:
					'editor-style.css and editor-style-rtl.css have been compiled.',
				onLast: options.notify.onLast,
			} ),
		],
		errorHandler
	);
}

export { styleCss, printCss, editorCss };
