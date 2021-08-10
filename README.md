# WordPress Theme Gulp

![License](https://img.shields.io/github/license/boilerplates-collection/wordpress-theme-gulp?color=blue&colorA=4c4f56&label=License&style=flat-square) ![Version](https://img.shields.io/github/package-json/v/boilerplates-collection/wordpress-theme-gulp?color=blue&colorA=4c4f56&label=Version&style=flat-square)

A WordPress boilerplate designed to facilitate WordPress theme development by using Gulp.

## Introduction

This boilerplate helps you to quickly start a new WordPress themes. It comes with some configuration files to comply with [WordPress Coding Standards](https://make.wordpress.org/core/handbook/best-practices/coding-standards/). It also includes Gulp, linters/fixers, Git hooks, dotenv and some npm scripts.

**It includes:**

- [BrowserSync](https://browsersync.io/)
- [Dotenv](https://github.com/motdotla/dotenv)
- [Gulp](https://gulpjs.com/)
- [Husky](https://github.com/typicode/husky)
- [Normalize.css](https://github.com/necolas/normalize.css/)
- [PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer) with [WordPress Coding Standards](https://github.com/WordPress/WordPress-Coding-Standards)
- [Standard version](https://github.com/conventional-changelog/standard-version)

**The Gulpfile allows you to:**

- Initialize your theme with the correct information obtained by the dotenv file.
- Compile SCSS to CSS, autoprefix, minify and move your stylesheets in the right place.
- Transpile, concat and minify your JS scripts.
- Compress your images (JPG, PNG, GIF and SVG).
- Generate a `.pot` file for translation.
- Create an archive of your theme without development files.
- Watch for file changes.
- When you create a release, Copy `package.json` version to `style.css` and `functions.php`.

## Requirements

- In order to avoid the warnings related to the local use of `https`, you will need a valid certificate. You can achieve this with [mkcert](https://github.com/FiloSottile/mkcert).

- These boilerplate use Standard version to generate a changelog and Husky to validate commits, so you need to follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

- You need [npm](https://www.npmjs.com/) and [Composer](https://getcomposer.org/) in order to install dependencies.

## How to use it

### First steps

Clone this repo, copy `wordpress-theme` in your WordPress installation and rename it. Then, in your theme directory:

1. Init Git (otherwise Husky will not want to install)
2. Launch `npm install` and `composer update`
3. Generate a local certificate for your virtual host in `/certs`
4. Copy `.env.example` and rename it `.env`
5. Edit your `.env` file to suit your project.
6. Launch `npm run init`
7. You may want to relaunch `npm install` so that your `package-lock.json` contain the correct information.

That's it! You can now start developing your theme.

If you wish to add additional paths for Gulp or modify certain options (compression of images for example), you will have to edit `gulp/config.js`.

If you want to add new plugins, you might want to edit `gulp/error-handler.js` to add an error handler for these plugins.

### Develop your theme

This boilerplate contains several scripts to help you.

With Composer, you can run:

- `composer run lint <file>` or `composer run lint .` for the whole directory
- `composer run fix <file>` or `composer run fix .` for the whole directory

These scripts use PHP_CodeSniffer with WordPress Coding Standards to `lint` or `fix` your files.

With npm, you can run:

- `npm run build`: delete previous compiled files (images, styles...), then execute styles, scripts, images and translation tasks.
- `npm run watch`: launch BrowserSync and check for changes made to your files (`scss`, `js`, `images` and `php` for translation)
- `npm run release`: bump your `package.json`, `functions.php` and `style.css` files, create a new commit and a new tag for your release.
- `npm run zip`: create a compressed file of your theme, excluding files needed only for development.

Most of these tasks use Gulp. If you want to edit or add paths to Gulp, you need to edit the file `gulp-config.js` in addition to your `.env`.

### In summary

1. `git init`, then add your remote
2. `npm install && composer update`
3. `mkcert -cert-file ./certs/your-virtualhost.test.pem -key-file ./certs/your-virtualhost.test.key your-virtualhost.test`
4. `cp .env.example .env`
5. Edit your `.env` file to suit your project.
6. `npm run init`
7. `npm install`
8. `npm run build`
9. `npm run release -- --first-release`
10. `npm run watch`
11. Develop your theme and commit while respecting [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
12. Create your translation files with Poedit for example.
13. When you are ready to release the theme:
    - `npm run release`
    - `npm run zip`

## Disclaimer

I voluntarily added the `.vscode` folder. It contains settings for some VS Code extensions. For example, it directly configures a linter and a fixer which avoids using Composer scripts. You don't have to keep it.

In the `.env` file, you need to declare some info like the package name with specific text cases. The example shows you the format.

Since in most cases it is necessary to create a translation file, the different scripts must be called manually. `release` and `zip` scripts cannot be integrated into `build` script. If you don't need a translation file, you are free to modify these scripts on your end to automate the process.

## License

This project is open-source and it is licensed under [GPL v2-or-later](./LICENSE).
