import del from 'del';
import paths from '../../config/paths.js';

/**
 * Task: `clean`
 *
 * Delete old generated assets.
 *
 * @param {*} done Done.
 */
async function clean( done ) {
	await del( paths.clean.paths );
	done();
}

export { clean };
