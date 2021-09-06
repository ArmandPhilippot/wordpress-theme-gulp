/**
 * Convert a text into a slug.
 *
 * @see {@link https://gist.github.com/codeguy/6684588#gistcomment-3332719}
 * @param {string} text Text to slugify.
 */
const slugify = ( text ) => {
	return text
		.toString()
		.normalize( 'NFD' )
		.replace( /[\u0300-\u036f]/g, '' )
		.toLowerCase()
		.trim()
		.replace( /\s+/g, '-' )
		.replace( /[^\w-]+/g, '-' )
		.replace( /--+/g, '-' )
		.replace( /^-|-$/g, '' );
};

/**
 * Check if protocol name is https.
 *
 * @param {string} protocol The protocol name.
 * @return {boolean} True if protocol name is https.
 */
const isHttps = ( protocol ) => {
	return 'https' === protocol;
};

/**
 * Check if current environment is development.
 *
 * @param {string} env The current environment.
 * @return {boolean} True if environment matches with development.
 */
const isDev = ( env ) => {
	return 'development' === env;
};

export { slugify, isHttps, isDev };
