import notify from 'gulp-notify';
import { posix } from 'path';
import pluginError from 'plugin-error';

/**
 * Gulp error handler
 *
 * Prevent errors from ending Node streams.
 *
 * @param {Object} error Error object.
 */
const errorHandler = ( error ) => {
	if ( typeof error !== 'undefined' ) {
		// To display the full error object, uncomment the line below:
		//console.log( error );

		let notifyTitle = '';
		let notifyMessage = '';

		if ( error.plugin === 'gulp-sass' ) {
			notifyTitle = 'CSS - Sass';
			notifyMessage =
				error.relativePath +
				'\n' +
				'line ' +
				error.line +
				' column ' +
				error.column +
				'\n' +
				error.messageOriginal;
		}

		if ( error.plugin === 'gulp-postcss' ) {
			notifyTitle = 'CSS - PostCSS';
			notifyMessage =
				posix.basename( error.fileName ) +
				'\n' +
				'line ' +
				error.line +
				' column ' +
				error.column +
				'\n' +
				error.reason;
		}

		if ( error.plugin === 'gulp-babel' ) {
			notifyTitle = 'JS - Babel';
			notifyMessage =
				posix.basename( error.fileName ) +
				'\n' +
				'line ' +
				error.loc.line +
				' column ' +
				error.loc.column +
				'\n' +
				error.name;
		}

		if ( error.plugin === 'gulp-uglify' ) {
			notifyTitle = 'JS - Uglify';
			notifyMessage =
				posix.basename( error.fileName ) +
				'\n' +
				'line ' +
				error.cause.line +
				' column ' +
				error.cause.col +
				'\n' +
				error.cause;
		}

		if ( error.plugin === 'gulp-imagemin' ) {
			notifyTitle = 'Images - Imagemin';
			notifyMessage =
				error.relativePath +
				'\n' +
				'line ' +
				error.line +
				' column ' +
				error.column +
				'\n' +
				error.messageOriginal;
		}

		if ( error.plugin === 'gulp-wp-pot' ) {
			notifyTitle = 'Translate - WP-Pot';
			notifyMessage =
				error.relativePath +
				'\n' +
				'line ' +
				error.line +
				' column ' +
				error.column +
				'\n' +
				error.messageOriginal;
		}

		if ( error.plugin === 'gulp-zip' ) {
			notifyTitle = 'generateZip - Zip';
			notifyMessage =
				error.relativePath +
				'\n' +
				'line ' +
				error.line +
				' column ' +
				error.column +
				'\n' +
				error.messageOriginal;
		}

		notify( {
			message: notifyMessage + '\n' + 'See console log for details.',
			title: 'Gulp Error - ' + notifyTitle,
		} ).write( error );

		const gulpError = new pluginError( error.plugin, error );

		throw gulpError;
	}
};

export default errorHandler;
