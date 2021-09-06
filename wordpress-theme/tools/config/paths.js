/**
 * Paths for Gulp tasks.
 */
const paths = {
	bump: {
		css: {
			src: './src/scss/abstracts/_variables.scss',
			dest: './src/scss/abstracts/',
		},
		functions: {
			src: './functions.php',
			dest: './',
		},
		readme: {
			src: './readme.txt',
			dest: './',
		},
	},
	clean: {
		paths: [ './assets/', './style.*', './style-rtl.*' ],
	},
	compile: {
		scripts: {
			src: {
				editor: './src/js/editor.js',
				footer: './src/js/footer.js',
				header: './src/js/header.js',
			},
			dest: './assets/js/',
		},
		styles: {
			src: {
				editor: './src/scss/editor.scss',
				main: './src/scss/style.scss',
				print: './src/scss/print.scss',
			},
			dest: {
				editor: './assets/css',
				main: './',
				print: './assets/css/',
			},
		},
	},
	copy: {
		fonts: {
			src: './src/fonts/**/*',
			dest: './assets/fonts/',
		},
		img: {
			src: './src/images/**/*',
			dest: './assets/images/',
		},
	},
	init: {
		src: [
			'./src/scss/abstracts/_variables.scss',
			'./*.php',
			'./inc/*.php',
			'./template-parts/**/*.php',
			'./composer.json',
			'./package.json',
			'./phpcs.xml',
			'./README.md',
			'./readme.txt',
		],
		dest: './',
	},
	screenshot: 'screenshot.png',
	translate: {
		src: [ './**/*.php', '!vendor/**/*.php' ],
		dest: './languages/',
	},
	watch: {
		fonts: './src/fonts/**/*',
		img: './src/images/**/*',
		js: {
			editor: './src/js/editor.js',
			footer: [
				'./src/js/**/*.js',
				'!./src/js/editor.js',
				'!./src/js/header.js',
			],
			header: './src/js/header.js',
		},
		php: './**/*.php',
		scss: {
			editor: './src/scss/editor.scss',
			main: [
				'./src/scss/**/*.scss',
				'!./src/scss/style-editor.scss',
				'!./src/scss/print.scss',
			],
			print: './src/scss/print.scss',
		},
	},
	zip: {
		src: [
			'./**/*',
			'!{node_modules,node_modules/**/*}',
			'!{src,src/**/*}',
			'!{tools,tools/**/*}',
			'!{vendor,vendor/**/*}',
			'!./**/*.map',
			'!.commitlintrc.json',
			'!.editorconfig',
			'!.env',
			'!.env.example',
			'!.eslintignore',
			'!.eslintrc.cjs',
			'!.prettierrc.cjs',
			'!.stylelintignore',
			'!.stylelintrc.json',
			'!.versionrc',
			'!babel.config.json',
			'!composer.json',
			'!composer.lock',
			'!gulpfile.js',
			'!lint-staged.config.cjs',
			'!package.json',
			'!package-lock.json',
			'!phpcs.xml',
		],
		dest: './',
	},
};

export default paths;
