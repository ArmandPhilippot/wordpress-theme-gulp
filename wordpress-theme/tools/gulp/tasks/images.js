import gulp from 'gulp';
import imagemin, { gifsicle, mozjpeg, optipng, svgo } from 'gulp-imagemin';
import notify from 'gulp-notify';
import { pipeline } from 'stream';
import errorHandler from '../config/error-handler.js';
import options from '../config/options.js';
import paths from '../config/paths.js';

/**
 * Task: `optimizeImages`
 *
 * Compress images (png, jpg, gif, svg).
 */
function optimizeImages() {
	return pipeline(
		[
			gulp.src( paths.copy.img.src, { since: gulp.lastRun( optimizeImages ) } ),
			imagemin( [
				gifsicle( options.imagemin.gif ),
				mozjpeg( options.imagemin.jpg ),
				optipng( options.imagemin.png ),
				svgo( options.imagemin.svg ),
			] ),
			gulp.dest( paths.copy.img.dest ),
			notify( {
				title: 'optimizeImages task complete',
				message: 'Images have been compressed.',
				onLast: options.notify.onLast,
			} ),
		],
		errorHandler
	);
}

export { optimizeImages };
