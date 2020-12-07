<?php
/**
 * The template for displaying the comments and comment form.
 *
 * @package Your-Package-Name
 * @since 0.0.1
 */

/*
 * If the current post is protected by a password and the visitor has not yet
 * entered the password we will return early without loading the comments.
 */
if ( post_password_required() ) {
	return;
}
