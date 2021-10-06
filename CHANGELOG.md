# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.0.1](https://github.com/boilerplates-collection/wordpress-theme-gulp/compare/v2.0.0...v2.0.1) (2021-10-06)


### Bug Fixes

* **init:** replace contributors name in readme.txt ([99e8017](https://github.com/boilerplates-collection/wordpress-theme-gulp/commit/99e801764a82cd8b2a3b1b6ad4add33e4f78a091))

## [2.0.0](https://github.com/boilerplates-collection/wordpress-theme-gulp/compare/v1.0.0...v2.0.0) (2021-09-06)


### ⚠ BREAKING CHANGES

* bump gulp-imagemin to v8 so Gulp is now using ES6
modules.
* dotenv variable names have changed.

### Features

* add a npm script to launch Gulp translate ([c1a3dc6](https://github.com/boilerplates-collection/wordpress-theme-gulp/commit/c1a3dc6ee15ad237c528ae850554726a58f504b1))
* add a script to take a screenshot of your homepage ([cb0e693](https://github.com/boilerplates-collection/wordpress-theme-gulp/commit/cb0e693ae7e2a421d550f568f55dc5140d370963))
* add more BrowserSync options ([e42019c](https://github.com/boilerplates-collection/wordpress-theme-gulp/commit/e42019ca5158d339ab8616cf21e4f11186381889))
* add scripts and Git hooks to lint/fix files ([c5a345a](https://github.com/boilerplates-collection/wordpress-theme-gulp/commit/c5a345abe10e8368c541fa92c292393a1486d130))
* use dotenv to minify CSS on prod and generate sourcemaps on dev ([e02a2b5](https://github.com/boilerplates-collection/wordpress-theme-gulp/commit/e02a2b5524899134f24811be468016e208866d2f))
* use rollup and dotenv to bundle JS & minify or add sourcemaps ([e08e0b3](https://github.com/boilerplates-collection/wordpress-theme-gulp/commit/e08e0b3e3f55022f91cf9d18e8e4404271228374))


### Bug Fixes

* use errorHandler as callback ([0a4906c](https://github.com/boilerplates-collection/wordpress-theme-gulp/commit/0a4906ccb929579dc52d1aaa6d781710068cf482))


### Changed

* add both version of readme ([3c6151b](https://github.com/boilerplates-collection/wordpress-theme-gulp/commit/3c6151b6379079e4a7fcde923af6671bdadf5ea9))
* add Browserlist config ([fc81093](https://github.com/boilerplates-collection/wordpress-theme-gulp/commit/fc8109339179f1ddca7a8e3718484652ba19fb0c))
* add Dart Sass compiler ([3d43e3c](https://github.com/boilerplates-collection/wordpress-theme-gulp/commit/3d43e3c68cec797bf77a67746e1b89c54dd3695c))
* improve dotenv example format ([74f2975](https://github.com/boilerplates-collection/wordpress-theme-gulp/commit/74f29752ddef950abfe06db7674b5ffb15bda682))
* move Gulp config to tools directory ([a67443a](https://github.com/boilerplates-collection/wordpress-theme-gulp/commit/a67443ab5872d7850192a26b09f83e113cab52d7))
* reorganize scss folder to use an adaptation of 7-1 pattern ([c499400](https://github.com/boilerplates-collection/wordpress-theme-gulp/commit/c499400f6327cc4be27f9fada471dacd5a39effb)), closes [/sass-guidelin.es/fr/#le-pattern-7-1](https://github.com/boilerplates-collection//sass-guidelin.es/fr//issues/le-pattern-7-1)
* split Gulp config into 4 files to improve readability ([6ad0f6c](https://github.com/boilerplates-collection/wordpress-theme-gulp/commit/6ad0f6c6ac6ee1b497d3388f0ba1779d4f295ab2))
* split Gulp tasks and convert them to ES6 modules ([8d054af](https://github.com/boilerplates-collection/wordpress-theme-gulp/commit/8d054af88dd285cffe25d15495c8d3ae5128a606))
* update all PHP templates ([eb9e928](https://github.com/boilerplates-collection/wordpress-theme-gulp/commit/eb9e928e8d26d621acd1958ec79fd84adb7c9145))
* update default version to 0.1.0 ([48c204c](https://github.com/boilerplates-collection/wordpress-theme-gulp/commit/48c204cc8de36677e3847bdcb71cd23447fee2a0))
* update ESlint config to use import and rename some extension to CJS ([14e097d](https://github.com/boilerplates-collection/wordpress-theme-gulp/commit/14e097d6de3feec7cd7bf0c0e6fe59e35bf3af3b))
* update ESlint, Prettier, Stylelint, Babel and PHPCS config ([d6b5d18](https://github.com/boilerplates-collection/wordpress-theme-gulp/commit/d6b5d180a0f72bbb2ed6f84c45139cef2a62d1ad))
* update placeholders used by init task ([a232b4e](https://github.com/boilerplates-collection/wordpress-theme-gulp/commit/a232b4e707c3a6c3c9ff4fe7f5b683e14d068966))
* update wordpress-theme dependencies ([fd66741](https://github.com/boilerplates-collection/wordpress-theme-gulp/commit/fd667416e807e34d08383251808b15b5b44f4ffc))


### Docs

* rewrite README to match with v2 ([64932d2](https://github.com/boilerplates-collection/wordpress-theme-gulp/commit/64932d2cdbc63217a5278371e42cc3acc7bd9552))

## 1.0.0 (2021-08-10)


### Features

* add an error handler to prevent interruption of Gulp watch ([e89ee0e](https://github.com/boilerplates-collection/wordpress-theme-gulp/commit/e89ee0e7da5b997ea2b716ce877e383529e5bd30))
* add and configure Babel to be used in Gulp ([85cfa4e](https://github.com/boilerplates-collection/wordpress-theme-gulp/commit/85cfa4e4ffb9d713ff6f7137c4b595dc94924739))
* add browser option to BrowserSync ([7992514](https://github.com/boilerplates-collection/wordpress-theme-gulp/commit/79925142c89c27cafd76ccb058ff7302b02b55ea))
* use BrowserSync with local domain instead of localhost ([607b47d](https://github.com/boilerplates-collection/wordpress-theme-gulp/commit/607b47d69fca20bf71a7df6f3b78d43514f4c37e))


### Bug Fixes

* add missing babel declaration ([ea6fb42](https://github.com/boilerplates-collection/wordpress-theme-gulp/commit/ea6fb42b2ae26b332c21bab9e5dbc2189b4f6115))
* add onLast option to prevent double notifications ([967ebfd](https://github.com/boilerplates-collection/wordpress-theme-gulp/commit/967ebfd51325fadf01631afa16db3bb97435118d))
* bump and recompile CSS with standard-version ([13db919](https://github.com/boilerplates-collection/wordpress-theme-gulp/commit/13db919b30b327d4690519964b72c5b0899c3538)), closes [#2](https://github.com/boilerplates-collection/wordpress-theme-gulp/issues/2)
* enqueue styles and scripts only if they exist ([58bcc6f](https://github.com/boilerplates-collection/wordpress-theme-gulp/commit/58bcc6f145f73e423185dc8ad94efcca6d85f68d))
* generate all translatable strings inside watch task ([6c1ce3a](https://github.com/boilerplates-collection/wordpress-theme-gulp/commit/6c1ce3a622b1b16fa7920b66d5b911c1bb4600c7))
* use the right function to load textdomain ([7b1c6f4](https://github.com/boilerplates-collection/wordpress-theme-gulp/commit/7b1c6f42c363b4a1f435a6ceab07874700bfff93))


### Changed

* add a Gulp function to move fonts from src to assets ([17d9dad](https://github.com/boilerplates-collection/wordpress-theme-gulp/commit/17d9dade257ec7b2ea64194d19eb48ff889d13e4))
* initial release ([6d634c4](https://github.com/boilerplates-collection/wordpress-theme-gulp/commit/6d634c4781dac40a0bafb5901ac0361369e9732f))
* move all WordPress theme files to a subdirectory ([8715a51](https://github.com/boilerplates-collection/wordpress-theme-gulp/commit/8715a51390337c0fd4b78442fd15495fcc7e94a5))
* remove babel config from the generated zip ([8634401](https://github.com/boilerplates-collection/wordpress-theme-gulp/commit/86344016cda0e2e982f6db2c3ca36aeb7ad408d8))
