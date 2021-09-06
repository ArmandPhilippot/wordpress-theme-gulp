# WordPress Theme Gulp

![License](https://img.shields.io/github/license/boilerplates-collection/wordpress-theme-gulp?color=blue&colorA=4c4f56&label=License&style=flat-square) ![Version](https://img.shields.io/github/package-json/v/boilerplates-collection/wordpress-theme-gulp?color=blue&colorA=4c4f56&label=Version&style=flat-square)

A WordPress boilerplate designed to facilitate WordPress theme development by using Gulp.

## Introduction

This boilerplate helps you to quickly start a new WordPress theme. It comes with some configuration files to comply with [WordPress Coding Standards](https://make.wordpress.org/core/handbook/best-practices/coding-standards/) (adapted to use BEM). It also includes Gulp, linters/fixers, Git hooks, dotenv and some npm scripts.

## Requirements

- You need [npm](https://www.npmjs.com/) and [Composer](https://getcomposer.org/) in order to install dependencies.

- This boilerplate uses Standard version to generate a changelog and Husky to validate commits, so you need to follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

- In order to avoid the warnings related to the local use of `https`, you will need a valid certificate. You can achieve this with [mkcert](https://github.com/FiloSottile/mkcert).

## Features

### What is included?

* [BrowserSync](https://browsersync.io/)
* [Dotenv](https://github.com/motdotla/dotenv)
* [ESlint](https://github.com/eslint/eslint)
* [Gulp](https://gulpjs.com/) with some plugins.
* [Husky](https://github.com/typicode/husky)
* [Lint-staged](https://github.com/okonet/lint-staged)
* [Modern-normalize](https://github.com/sindresorhus/modern-normalize)
* [PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer)
* [Playwright](https://github.com/microsoft/playwright)
* [Rollup](https://github.com/rollup/rollup)
* [Standard version](https://github.com/conventional-changelog/standard-version)
* [Stylelint](https://github.com/stylelint/stylelint)
* [WordPress Coding Standards](https://github.com/WordPress/WordPress-Coding-Standards)

### Gulpfile

The gulpfile handle different tasks:

* Init your theme with the information obtained from dotenv,
* Compile SCSS to CSS with Dart Sass and PostCSS (autoprefixer included),
* Transpile and bundle your JS scripts with Rollup and Babel,
* Compress your images (JPG, PNG, GIF and SVG),
* Copy your fonts,
* Generate a `.pot` file for translation,
* Create an archive of your theme without development files,
* Watch for file changes,
* Minify CSS and JS in production / Generate sourcemaps in development.

### npm scripts

With `npm`, you can use some scripts:

* `npm run build`: write assets in `assets` folder and generate `.pot` file.
* `npm run watch`: launch BrowserSync, open your website in the desired browser and refresh it on changes.
* `npm run lint`: check if all files respects your coding standards.
* `npm run fix`: fix all files to comply with your coding standards.
* `npm run translate`: generate a `.pot` file in `./languages`.
* `npm run screenshot`: take a screenshot (`1200x900`) of your homepage and save `screenshot.png` in your theme root.
* `npm run release`:
    * bump `package.json`, `readme.txt`, `functions.php` and `src/scss/abstracts/_variables.scss`,
    * recompile CSS to update version in `style.css`,
    * create a new commit with a new tag for your release.
* `npm run zip`: create a compressed file of your theme, excluding files needed only in development mode.

To lint/fix a specific type of files, you can also use a "sub" script:
* `npm lint:js` / `npm fix:js` for JS files,
* `npm lint:php` / `npm fix:php` for PHP files,
* `npm lint:scss` / `npm fix:scss` for SCSS files.

## How to use it

### First steps

Clone this repo, copy `wordpress-theme` in your WordPress installation ( `wp-content/themes/` ) and rename it. Then, in your theme directory:

1. Init Git (otherwise Husky will not install hooks)
2. Launch `npm install` and `composer update`
3. Execute `npx husky install` to install Git hooks
4. Copy `.env.example` and rename it `.env`
5. Edit your `.env` file to suit your project.
6. Launch `npm run init`
7. You may want to relaunch `npm install` so that your `package-lock.json` contains the correct information.

That's it! You can now start developing your theme.

### Complete the configuration

If you need to complete the boilerplate:

* `tools/` contains files required by Gulp/npm scripts,
* `tools/gulp/config/data.js` contains data from `.env` used in other Gulp files,
* `tools/gulp/config/error-handler.js` handle Gulp error messages,
* `tools/gulp/config/options.js` contains plugins options,
* `tools/gulp/config/paths.js` contains paths used by Gulp,
* `tools/gulp/tasks/` contains Gulp tasks imported in `gulpfile.js`.

## Tips

### Formatting JS files in VS Code with Prettier and ESlint

If you are using Prettier extension to auto-fix your files, you may want to disable it for Javascript. Prettier doesn't work well with ESlint rules (in particular space rules). So, I recommend you to set these settings in your workspace:

```json
{
    "editor.codeActionsOnSave": {
        "source.fixAll": true,
    },
    "editor.formatOnSave": true,
    "[javascript]": {
        "editor.formatOnSave": false,
    }
}
```
This way, only the ESlint extension will be used to format your JS files.

## Additional Notes

If you plan to publish your theme on [WordPress Theme directory](https://wordpress.org/themes/), you may want to edit `readme.txt` manually to provides all necessary information. I'm not sure this is required for themes (it is for plugins), but it is at least recommended. See [a revised readme](https://make.wordpress.org/themes/2015/04/29/a-revised-readme/) for an example.

## License

This project is open-source and it is licensed under [GPL v2-or-later](./LICENSE).
