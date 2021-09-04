import gulp from 'gulp';
import paths from '../config/paths.js';
import { copyFonts } from './fonts.js';
import { optimizeImages } from './images.js';
import { editorJs, footerJs, headerJs } from './scripts.js';
import { reload } from './server.js';
import { editorStyleCss, editorStyleRtlCss, printCss, printRtlCss, styleCss, styleRtlCss } from './styles.js';
import { translate } from './translate.js';

/**
 * Task: `watchFiles`
 *
 * Reload tasks when files change.
 *
 * @param {*} done Done.
 */
function watchFiles( done ) {
	gulp.watch( paths.watch.scss.main ).on(
		'change',
		gulp.series( gulp.parallel( styleCss, styleRtlCss, editorStyleCss, editorStyleRtlCss ), reload )
	);
	gulp.watch( paths.watch.scss.editor ).on(
		'change',
		gulp.series( gulp.parallel( editorStyleCss, editorStyleRtlCss ), reload )
	);
	gulp.watch( paths.watch.scss.print ).on( 'change', gulp.series( gulp.parallel( printCss, printRtlCss ), reload ) );
	gulp.watch( paths.watch.js.editor ).on( 'change', gulp.series( editorJs, reload ) );
	gulp.watch( paths.watch.js.footer ).on( 'change', gulp.series( footerJs, reload ) );
	gulp.watch( paths.watch.js.header ).on( 'change', gulp.series( headerJs, reload ) );
	gulp.watch( paths.watch.img ).on( 'change', gulp.series( optimizeImages, reload ) );
	gulp.watch( paths.watch.php ).on( 'change', gulp.series( translate, reload ) );
	gulp.watch( paths.watch.fonts ).on( 'change', gulp.series( copyFonts, reload ) );
	done();
}

export { watchFiles };
