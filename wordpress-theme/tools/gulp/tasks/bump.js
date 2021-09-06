import gulp from 'gulp';
import replace from 'gulp-replace';
import { pipeline } from 'stream';
import data from '../../config/data.js';
import paths from '../../config/paths.js';

/**
 * Task: `bumpVariables`
 *
 * Copy package.json version in Sass variables.
 *
 * @param {*} done Done.
 */
function bumpVariables( done ) {
	return pipeline(
		[
			gulp.src( paths.bump.css.src ),
			replace( /theme_version: "(.{5})"/g, function() {
				return 'theme_version: "' + data.theme.version + '"';
			} ),
			gulp.dest( paths.bump.css.dest ),
		],
		done()
	);
}

/**
 * Task: `bumpFunctions`
 *
 * Copy package.json version in functions.php.
 *
 * @param {*} done Done.
 */
function bumpFunctions( done ) {
	return pipeline(
		[
			gulp.src( paths.bump.functions.src ),
			replace( /_VERSION', '(.{5})'/g, function() {
				return "_VERSION', '" + data.theme.version + "'";
			} ),
			gulp.dest( paths.bump.functions.dest ),
		],
		done()
	);
}

/**
 * Task: `bumpReadme`
 *
 * Copy package.json version in readme.txt.
 *
 * @param {*} done Done.
 */
function bumpReadme( done ) {
	return pipeline(
		[
			gulp.src( paths.bump.readme.src ),
			replace( /Stable tag: (.{5})/g, function() {
				return 'Stable tag: ' + data.theme.version;
			} ),
			gulp.dest( paths.bump.readme.dest ),
		],
		done()
	);
}

export { bumpVariables, bumpFunctions, bumpReadme };
