import gulp from 'gulp';
import replace from 'gulp-replace';
import { pipeline } from 'stream';
import data from '../config/data.js';
import errorHandler from '../config/error-handler.js';
import paths from '../config/paths.js';

/**
 * Task: `initTheme`
 *
 * Search for placeholders and replace them with your config.
 */
function initTheme() {
	return pipeline(
		[
			gulp.src( paths.init.src, { base: './' } ),
			replace( 'Your theme name', function() {
				return data.theme.name;
			} ),
			replace( 'Your theme description.', function() {
				return data.theme.description;
			} ),
			replace( 'yourprefix', function() {
				return data.theme.prefix.lowercase;
			} ),
			replace( 'YourPrefix', function() {
				return data.theme.prefix.pascalcase;
			} ),
			replace( 'YOURPREFIX', function() {
				return data.theme.prefix.uppercase;
			} ),
			replace( 'yourTextDomain', function() {
				return data.theme.textDomain;
			} ),
			replace( 'your@email.com', function() {
				return data.contributor.email;
			} ),
			replace( 'Firstname Lastname', function() {
				return data.contributor.name;
			} ),
			replace( 'contact@email.com', function() {
				return data.team.email;
			} ),
			replace( 'Company Name', function() {
				return data.team.name;
			} ),
			replace( 'https://www.companyWebsite.com/', function() {
				return data.team.url;
			} ),
			replace( '2021', function() {
				return data.copyright.year;
			} ),
			replace( 'Your-Package-Name', function() {
				return data.package.name.capitalize;
			} ),
			replace( 'your-package-name', function() {
				return data.package.name.lowercase;
			} ),
			replace( 'https://github.com/your/repo', function() {
				return data.package.repo;
			} ),
			replace( 'your-vendor-name', function() {
				return data.package.vendor;
			} ),
			gulp.dest( paths.init.dest ),
		],
		errorHandler
	);
}

export { initTheme };
