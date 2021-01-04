<?php
/**
 * Your-Package-Name functions and definitions.
 *
 * This file is read by WordPress to setup the theme and his additional
 * features.
 *
 * @package Your-Package-Name
 * @link https://github.com/your/repo
 * @author Firstname Lastname <your@email.com>
 *
 * @copyright 2020 Company Name
 * @license GPL-2.0-or-later
 * @since 0.0.1
 */

/**
 * Currently theme version.
 */
define( 'YOURPREFIX_VERSION', '0.0.1' );

if ( ! function_exists( 'yourprefix_setup' ) ) {
	/**
	 * Setup Your-Package-Name theme and registers support for various WordPress features.
	 *
	 * @since 0.0.1
	 */
	function yourprefix_setup() {
		load_textdomain( 'yourTextDomain', get_template_directory() . '/languages' );
	}
}
add_action( 'after_setup_theme', 'yourprefix_setup' );

/**
 * Register and enqueue styles.
 *
 * @since 0.0.1
 */
function yourprefix_enqueue_styles() {
	$theme_uri          = get_template_directory_uri();
	$theme_directory    = get_template_directory();
	$style_path         = $theme_directory . '/style.min.css';
	$print_style_path   = $theme_directory . '/print.min.css';
	$vendors_style_path = $theme_directory . '/assets/css/vendors.min.css';

	if ( file_exists( $vendors_style_path ) ) {
		wp_register_style( 'yourprefix-style-vendors', $theme_uri . '/assets/css/vendors.min.css', array(), YOURPREFIX_VERSION );
		wp_enqueue_style( 'yourprefix-style-vendors' );
	}

	if ( file_exists( $style_path ) ) {
		wp_register_style( 'yourprefix-style', $theme_uri . '/style.min.css', array(), YOURPREFIX_VERSION );
		wp_enqueue_style( 'yourprefix-style' );
		wp_style_add_data( 'yourprefix-style', 'rtl', 'replace' );
	}

	if ( file_exists( $print_style_path ) ) {
		wp_register_style( 'yourprefix-style-print', $theme_uri . '/print.min.css', array(), YOURPREFIX_VERSION );
		wp_enqueue_style( 'yourprefix-style-print' );
	}
}
add_action( 'wp_enqueue_scripts', 'yourprefix_enqueue_styles' );

/**
 * Register and enqueue scripts.
 *
 * @since 0.0.1
 */
function yourprefix_enqueue_scripts() {
	$theme_uri            = get_template_directory_uri();
	$theme_directory      = get_template_directory();
	$scripts_path         = $theme_directory . '/assets/js/scripts.min.js';
	$vendors_scripts_path = $theme_directory . '/assets/js/vendors.min.js';

	if ( file_exists( $scripts_path ) ) {
		wp_register_script( 'yourprefix-scripts', $theme_uri . '/assets/js/scripts.min.js', array(), YOURPREFIX_VERSION, true );
		wp_enqueue_script( 'yourprefix-scripts' );
	}

	if ( file_exists( $vendors_scripts_path ) ) {
		wp_register_script( 'vendors-scripts', $theme_uri . '/assets/js/vendors.min.js', array(), YOURPREFIX_VERSION, true );
		wp_enqueue_script( 'vendors-scripts' );
	}

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'yourprefix_enqueue_scripts' );

/**
 * Register and enqueue editor styles.
 *
 * @since 0.0.1
 */
function yourprefix_enqueue_editor_styles() {
	$theme_uri         = get_template_directory_uri();
	$theme_directory   = get_template_directory();
	$style_editor_path = $theme_directory . '/assets/css/style-editor.min.css';

	if ( file_exists( $style_editor_path ) ) {
		wp_register_style( 'yourprefix-block-editor-styles', $theme_uri . '/assets/css/style-editor.min.css', array(), YOURPREFIX_VERSION );
		wp_enqueue_style( 'yourprefix-block-editor-styles' );
	}
}
add_action( 'enqueue_block_editor_assets', 'yourprefix_enqueue_editor_styles' );

/**
 * REQUIRED FILES
 * Additional features and helpers functions.
 */
require get_parent_theme_file_path( '/inc/helpers.php' );
require get_parent_theme_file_path( '/inc/hooks.php' );
