/**
 * Gulp configuration
 */

const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');
const fs = require('fs');

// Load environment variables
const myDotenv = dotenv.config();
dotenvExpand(myDotenv);

/**
 * Load package.json data.
 */
const package = JSON.parse(fs.readFileSync('./package.json'));
const packageVersion = package.version;

if (myDotenv.error) {
	throw myDotenv.error;
}

module.exports = {
	browserSync: {
		hostname: process.env.WP_BS_HOSTNAME,
		proxy: {
			target: 'https://www.' + process.env.WP_BS_HOSTNAME,
		},
		port: process.env.WP_BS_PORT,
		https: {
			key: process.env.WP_BS_HTTPS_KEY,
			cert: process.env.WP_BS_HTTPS_CERT,
		},
		ghostMode: {
			scroll: true,
			links: true,
			forms: true,
		},
		logLevel: process.env.WP_BS_LOG,
		snippetOptions: {
			// Provide a custom Regex for inserting the snippet.
			rule: {
				match: /<\/body>/i,
				fn: function (snippet, match) {
					return snippet + match;
				},
			},
		},
		open: process.env.WP_BS_OPEN,
		notify: process.env.WP_BS_NOTIFY,
	},
	bump: {
		styles: {
			src: './src/scss/helpers/_variables.scss',
			dest: './src/scss/helpers/',
		},
		files: {
			src: './functions.php',
			dest: './',
		},
	},
	clean: {
		paths: ['assets/', 'style.*', 'style-rtl.*', 'print.*'],
	},
	files: {
		watch: ['./**/*.php', '!vendor/**/*.php'],
	},
	images: {
		src: 'src/images/**/*',
		dest: 'assets/images/',
		watch: 'src/images/**/*',
		imageminOptions: {
			gif: {
				interlaced: true,
			},
			jpg: {
				progressive: true,
				quality: 75,
			},
			png: {
				optimizationLevel: 5,
			},
			svg: {
				plugins: [
					{ removeTitle: true },
					{ removeViewBox: false },
					{ removeXMLNS: false },
				],
			},
		},
	},
	init: {
		src: [
			'composer.json',
			'package.json',
			'phpcs.xml',
			'src/scss/helpers/_variables.scss',
			'./**/*.php',
			'!vendor/**/*.php',
		],
		dest: './',
		authorName: process.env.WP_PROJECT_AUTHOR_NAME,
		authorEmail: process.env.WP_PROJECT_AUTHOR_EMAIL,
		authorUrl: process.env.WP_PROJECT_AUTHOR_URL,
		copyright: process.env.WP_PROJECT_COPYRIGHT,
		description: process.env.WP_PROJECT_DESCRIPTION,
		packageUppercase: process.env.WP_PROJECT_PACKAGE_UPPERCASE,
		packageLowercase: process.env.WP_PROJECT_PACKAGE_LOWERCASE,
		prefix: process.env.WP_PROJECT_PREFIX,
		repo: process.env.WP_PROJECT_REPO,
		textDomain: process.env.WP_PROJECT_TEXT_DOMAIN,
		vendorName: process.env.WP_PROJECT_VENDOR_NAME,
	},
	notify: {
		onLastOption: true,
	},
	scripts: {
		src: {
			main: ['src/js/**/*.js', '!src/js/vendors/**/*.js'],
			vendors: 'src/js/vendors/**/*.js',
		},
		dest: {
			main: 'assets/js/',
			vendors: 'assets/js/',
		},
		watch: {
			main: ['src/js/**/*.js', '!src/js/vendors/**/*.js'],
			vendors: 'src/js/vendors/**/*.js',
		},
	},
	styles: {
		src: {
			main: 'src/scss/style.scss',
			editor: 'src/scss/style-editor.scss',
			print: 'src/scss/print.scss',
			vendors: 'src/scss/vendors/vendors.scss',
		},
		dest: {
			main: './',
			editor: 'assets/css/',
			print: './',
			vendors: 'assets/css/',
		},
		watch: {
			main: [
				'src/scss/**/*.scss',
				'!src/scss/style-editor.scss',
				'!src/scss/print.scss',
			],
			editor: 'src/scss/style-editor.scss',
			print: 'src/scss/print.scss',
			vendors: 'src/scss/vendors/**/*.scss',
		},
		postCss: {
			sortingOptions: {
				'properties-order': 'alphabetical',
			},
		},
		sassOptions: {
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1',
			includePaths: ['node_modules'],
		},
	},
	translation: {
		src: ['./**/*.php'],
		dest: './languages/',
		filename: process.env.WP_PROJECT_TEXT_DOMAIN + '.pot',
		potOptions: {
			domain: process.env.WP_PROJECT_TEXT_DOMAIN,
			package: process.env.WP_PROJECT_PACKAGE_UPPERCASE,
			bugReport: process.env.WP_PROJECT_REPO + '/issues',
			lastTranslator: process.env.WP_POT_LAST_TRANSLATOR,
			team: process.env.WP_POT_TEAM,
		},
	},
	zip: {
		filename:
			process.env.WP_PROJECT_PACKAGE_UPPERCASE +
			'-' +
			packageVersion +
			'.zip',
		src: [
			'./**/*',
			'!{certs,certs/**/*}',
			'!{gulp,gulp/**/*}',
			'!{node_modules,node_modules/**/*}',
			'!{src,src/**/*}',
			'!{vendor,vendor/**/*}',
			'!./**/*.map',
			'!.commitlintrc.json',
			'!.editorconfig',
			'!.env',
			'!.eslintrc.js',
			'!.eslintignore',
			'!.prettierrc',
			'!.stylelintrc.json',
			'!.versionrc',
			'!composer.json',
			'!composer.lock',
			'!gulp-config.js',
			'!gulpfile.js',
			'!package.json',
			'!package-lock.json',
			'!phpcs.xml',
		],
		dest: './',
	},
};
