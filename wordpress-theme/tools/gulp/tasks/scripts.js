import notify from 'gulp-notify';
import { rollup } from 'rollup';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { pipeline } from 'stream';
import data from '../config/data.js';
import errorHandler from '../config/error-handler.js';
import options from '../config/options.js';
import paths from '../config/paths.js';
import { isDev } from '../config/utils.js';
import { terser } from 'rollup-plugin-terser';

/**
 * Get the plugins to process JS files depending on current environment.
 *
 * @return {Array} A list of plugins.
 */
function getPlugins() {
	const plugins = [
		resolve(),
		commonjs(),
		babel( { babelHelpers: options.rollup.babel.helpers } ),
	];

	if ( ! isDev( data.environment ) ) {
		plugins.push( terser() );
	}

	return plugins;
}

/**
 * Generate a bundle using rollup.
 *
 * @param {string} source The entry point path.
 * @param {string} dest   The output path.
 * @return {Promise} The bundle.
 */
async function* generateBundle( source, dest ) {
	const rollupOptions = {
		input: source,
		plugins: getPlugins(),
	};
	const bundle = await rollup( rollupOptions );
	await bundle.write( {
		dir: dest,
		format: options.rollup.config.format,
		sourcemap: options.rollup.config.sourcemaps,
	} );
	yield bundle;
}

/**
 * Task: `editorJs`
 *
 * Generate editor.js and editor.min.js. JS concatenation and minification.
 */
async function editorJs() {
	return pipeline(
		[
			await generateBundle( paths.compile.scripts.src.editor, paths.compile.scripts.dest ),
			notify( {
				title: 'editorJs task complete',
				message: 'editor.js has been compiled.',
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
async function footerJs() {
	return pipeline(
		[
			await generateBundle( paths.compile.scripts.src.footer, paths.compile.scripts.dest ),
			notify( {
				title: 'footerJs task complete',
				message: 'footer.js has been compiled.',
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
async function headerJs() {
	return pipeline(
		[
			await generateBundle( paths.compile.scripts.src.header, paths.compile.scripts.dest ),
			notify( {
				title: 'headerJs task complete',
				message: 'header.js has been compiled.',
				onLast: options.notify.onLast,
			} ),
		],
		errorHandler
	);
}

export { editorJs, footerJs, headerJs };
