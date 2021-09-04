import * as data from './data';

/**
 * Options for Gulp plugins
 */
const options = {
	browserSync: {
		hostname: data.browserSync.host,
		host: data.browserSync.host,
		proxy: data.browserSync.protocol + '://' + data.browserSync.host,
		port: data.browserSync.port,
		https: data.browserSync.cert,
		ghostMode: data.browserSync.ghostMode,
		watchEvents: data.browserSync.watchEvents,
		logLevel: data.browserSync.log,
		snippetOptions: {
			rule: {
				match: /<\/body>/i,
				fn( snippet, match ) {
					return snippet + match;
				},
			},
		},
		open: data.browserSync.open,
		browser: data.browserSync.browsers,
		reloadOnRestart: data.browserSync.reloadOnRestart,
		injectChanges: data.browserSync.injectChanges,
		notify: data.browserSync.notify,
	},
	gulp: {
		src: {
			sourcemaps: true,
		},
		dest: {
			sourcemaps: '.',
		},
	},
	imagemin: {
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
				{
					name: 'preset-default',
					params: {
						overrides: {
							removeTitle: false,
							removeViewBox: false,
						},
					},
				},
				'removeDimensions',
			],
		},
	},
	notify: {
		onLast: true,
	},
	postcss: {
		sorting: {
			'properties-order': 'alphabetical',
		},
	},
	sass: {
		outputStyle: 'expanded',
		indentType: 'tab',
		indentWidth: '1',
		includePaths: [ 'node_modules' ],
	},
	wpPot: {
		bugReport: '',
		domain: '',
		lastTranslator: '',
		package: '',
		team: '',
	},
};

export default options;
