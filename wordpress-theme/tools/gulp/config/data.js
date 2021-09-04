import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import fs from 'fs';
import { isHttps, slugify } from './utils';

/**
 * Load environment variables.
 */
const dotenvConfig = dotenv.config();

if ( dotenvConfig.error ) {
	throw dotenvConfig.error;
}

dotenvExpand( dotenvConfig );

/**
 * Load package.json data.
 */
const packageJson = JSON.parse( fs.readFileSync( './package.json' ) );

/**
 * Data extracted from .env
 */
const data = {
	browserSync: {
		host: process.env.WP_THEME_BS_HOST,
		port: process.env.WP_THEME_BS_PORT,
		protocol: process.env.WP_THEME_BS_PROTOCOL,
		cert: isHttps( process.env.WP_THEME_BS_PROTOCOL )
			? {
				file: process.env.WP_THEME_BS_HTTPS_CERT,
				key: process.env.WP_THEME_BS_HTTPS_KEY,
			}
			: null,
		open: process.env.WP_THEME_BS_OPEN,
		browsers: process.env.WP_THEME_BS_BROWSER.split( ',' ),
		log: process.env.WP_THEME_BS_LOG,
		notify: process.env.WP_THEME_BS_NOTIFY,
		ghostMode: {
			clicks: process.env.WP_THEME_BS_GHOST_CLICKS,
			forms: process.env.WP_THEME_BS_GHOST_FORMS,
			location: process.env.WP_THEME_BS_GHOST_LOCATION,
			scroll: process.env.WP_THEME_BS_GHOST_SCROLL,
		},
		watchEvents: process.env.WP_THEME_BS_WATCH_EVENTS.split( ',' ),
		reloadOnRestart: process.env.WP_THEME_BS_RELOAD_RESTART,
		injectChanges: process.env.WP_THEME_BS_INJECT_CHANGES,
	},
	contributor: {
		email: process.env.WP_THEME_CONTRIBUTOR_EMAIL,
		name: process.env.WP_THEME_CONTRIBUTOR_NAME,
	},
	contributors: process.env.WP_THEME_CONTRIBUTORS,
	copyright: {
		year: process.env.WP_THEME_COPYRIGHT_YEAR,
	},
	filenames: {
		pot: process.env.WP_THEME_TEXT_DOMAIN + '.pot',
		zip: slugify( process.env.WP_THEME_NAME ) + '.zip',
	},
	package: {
		name: {
			lowercase: process.env.WP_THEME_PACKAGE_CAPITALIZE.toLowerCase(),
			capitalize: process.env.WP_THEME_PACKAGE_CAPITALIZE,
		},
		repo: process.env.WP_THEME_REPO,
		vendor: process.env.WP_THEME_VENDOR_NAME,
	},
	team: {
		email: process.env.WP_THEME_TEAM_EMAIL,
		name: process.env.WP_THEME_TEAM_NAME,
		url: process.env.WP_THEME_TEAM_URL,
	},
	theme: {
		description: process.env.WP_THEME_DESCRIPTION,
		name: process.env.WP_THEME_NAME,
		prefix: {
			lowercase: process.env.WP_THEME_PREFIX_PASCALCASE.toLowerCase(),
			pascalcase: process.env.WP_THEME_PREFIX_PASCALCASE,
			uppercase: process.env.WP_THEME_PREFIX_PASCALCASE.toUpperCase(),
		},
		textDomain: process.env.WP_THEME_TEXT_DOMAIN,
		version: packageJson.version,
	},
};

export default data;
