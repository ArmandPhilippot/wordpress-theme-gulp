import gulp from 'gulp';
import notify from 'gulp-notify';
import zip from 'gulp-zip';
import { pipeline } from 'stream';
import data from '../config/data.js';
import errorHandler from '../config/error-handler.js';
import paths from '../config/paths.js';

/**
 * Task: `generateZip`
 *
 * Generate a zip version of the theme without development files.
 */
function generateZip() {
	return pipeline(
		[
			gulp.src( paths.zip.src ),
			zip( data.filenames.zip ),
			gulp.dest( paths.zip.dest ),
			notify( {
				title: 'generateZip task complete',
				message: 'Theme have been zipped.',
			} ),
		],
		errorHandler
	);
}

export { generateZip };
