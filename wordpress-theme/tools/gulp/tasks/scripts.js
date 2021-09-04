import gulp from 'gulp';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import lec from 'gulp-line-ending-corrector';
import notify from 'gulp-notify';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import { pipeline } from 'stream';
import errorHandler from '../config/error-handler.js';
import options from '../config/options.js';
import paths from '../config/paths.js';

/**
 * Task: `editorJs`
 *
 * Generate editor.js and editor.min.js. JS concatenation and minification.
 */
function editorJs() {
	return pipeline(
		[
			gulp.src( paths.compile.scripts.src.editor, options.gulp.src ),
			babel(),
			concat( 'scripts.js' ),
			lec(),
			gulp.dest( paths.compile.scripts.dest ),
			rename( { suffix: '.min' } ),
			uglify(),
			lec(),
			gulp.dest( paths.compile.scripts.dest, options.gulp.dest ),
			notify( {
				title: 'editorScripts task complete',
				message: 'editor.js and editor.min.js have been compiled.',
				onLast: options.notify.onLast,
			} ),
		],
		errorHandler
	);
}

/**
 * Task: `footerJs`
 *
 * Generate footer.js and footer.min.js. JS concatenation and minification.
 */
function footerJs() {
	return pipeline(
		[
			gulp.src( paths.compile.scripts.src.footer, options.gulp.src ),
			babel(),
			concat( 'scripts.js' ),
			lec(),
			gulp.dest( paths.compile.scripts.dest ),
			rename( { suffix: '.min' } ),
			uglify(),
			lec(),
			gulp.dest( paths.compile.scripts.dest, options.gulp.dest ),
			notify( {
				title: 'footerScripts task complete',
				message: 'footer.js and footer.min.js have been compiled.',
				onLast: options.notify.onLast,
			} ),
		],
		errorHandler
	);
}

/**
 * Task: `headerJs`
 *
 * Generate header.js and header.min.js. JS concatenation and minification.
 */
function headerJs() {
	return pipeline(
		[
			gulp.src( paths.compile.scripts.src.header, options.gulp.src ),
			babel(),
			concat( 'scripts.js' ),
			lec(),
			gulp.dest( paths.compile.scripts.dest ),
			rename( { suffix: '.min' } ),
			uglify(),
			lec(),
			gulp.dest( paths.compile.scripts.dest, options.gulp.dest ),
			notify( {
				title: 'headerScripts task complete',
				message: 'header.js and header.min.js have been compiled.',
				onLast: options.notify.onLast,
			} ),
		],
		errorHandler
	);
}

export { editorJs, footerJs, headerJs };
