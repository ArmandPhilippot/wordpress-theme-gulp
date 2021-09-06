import browserSync from 'browser-sync';
import options from '../../config/options.js';

const server = browserSync.create( 'Gulp server' );

/**
 * Task: `reload`
 *
 * Trigger a browser reload using BrowserSync instance.
 *
 * @param {*} done Done.
 */
function reload( done ) {
	server.reload();
	done();
}

/**
 * Task: `serve`
 *
 * Init the "Gulp server" BrowserSync instance.
 *
 * @param {*} done Done.
 */
function serve( done ) {
	server.init( options.browserSync );
	done();
}

export { reload, serve };
