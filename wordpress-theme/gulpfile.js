/**
 * Gulpfile
 *
 * Use Gulp to build a WordPress theme.
 *
 * Implements:
 * - BrowserSync (with watch task)
 * - Sass compilation, autoprefixer, sourcemaps and minification (style,
 * style-rtl, editor-style and print)
 * - Babel transpilation, concatenation and minification (footer/header scripts)
 * - Images optimizations (JPG, PNG, GIF, SVG)
 * - Pot file generation
 * - Zip folder without development files
 * - Copy `package.json` version to _variables.scss, functions.php & readme.txt
 * - A one-time task to init your theme
 *
 * @author Armand Philippot <contact@armandphilippot.com>
 */
import gulp from 'gulp';
import { bumpFunctions, bumpReadme, bumpVariables } from './tools/gulp/tasks/bump.js';
import { clean } from './tools/gulp/tasks/clean.js';
import { copyFonts } from './tools/gulp/tasks/fonts.js';
import { optimizeImages } from './tools/gulp/tasks/images.js';
import { initTheme } from './tools/gulp/tasks/init.js';
import { editorJs, footerJs, headerJs } from './tools/gulp/tasks/scripts.js';
import { serve } from './tools/gulp/tasks/server.js';
import { editorStyleCss, editorStyleRtlCss, printCss, printRtlCss, styleCss, styleRtlCss } from './tools/gulp/tasks/styles.js';
import { translate } from './tools/gulp/tasks/translate.js';
import { watchFiles } from './tools/gulp/tasks/watch.js';
import { generateZip } from './tools/gulp/tasks/zip.js';

const runAll = gulp.parallel(
	styleCss,
	styleRtlCss,
	printCss,
	printRtlCss,
	editorStyleCss,
	editorStyleRtlCss,
	editorJs,
	footerJs,
	headerJs,
	optimizeImages,
	translate,
	copyFonts
);

/**
 * Public tasks
 */
const build = gulp.series( clean, runAll );
const bump = gulp.parallel( bumpVariables, bumpFunctions, bumpReadme );
const recompileCSS = gulp.parallel( styleCss, styleRtlCss );
const watch = gulp.parallel( serve, watchFiles );

export { build as default, bump, initTheme, recompileCSS, translate, watch, generateZip };
