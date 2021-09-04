import gulp from 'gulp';
import notify from 'gulp-notify';
import { pipeline } from 'stream';
import errorHandler from '../config/error-handler.js';
import options from '../config/options.js';
import paths from '../config/paths.js';

/**
 * Task: `copyFonts`
 *
 * Copy fonts from src folder to assets folder.
 */
function copyFonts() {
	return pipeline(
		[
			gulp.src( paths.copy.fonts.src ),
			gulp.dest( paths.copy.fonts.dest ),
			notify( {
				title: 'moveFonts task complete',
				message: 'Fonts have been moved to assets.',
				onLast: options.notify.onLast,
			} ),
		],
		errorHandler
	);
}

export { copyFonts };
