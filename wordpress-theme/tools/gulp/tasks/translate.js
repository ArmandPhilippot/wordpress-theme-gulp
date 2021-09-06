import gulp from 'gulp';
import notify from 'gulp-notify';
import pot from 'gulp-wp-pot';
import { pipeline } from 'stream';
import errorHandler from '../error-handler.js';
import data from '../../config/data.js';
import options from '../../config/options.js';
import paths from '../../config/paths.js';

/**
 * Task: `translate`
 *
 * Generate a pot file for translation.
 */
function translate() {
	return pipeline(
		[
			gulp.src( paths.translate.src ),
			pot( options.wpPot ),
			gulp.dest( paths.translate.dest + '/' + data.filenames.pot ),
			notify( {
				title: 'Translate task complete',
				message: 'POT file have been generated.',
			} ),
		],
		errorHandler
	);
}

export { translate };
