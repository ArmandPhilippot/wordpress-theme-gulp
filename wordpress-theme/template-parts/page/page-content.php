<?php
/**
 * The page content template.
 *
 * @package Your-Package-Name
 * @since   0.0.1
 */

?>
<h2>
	<a href="<?php the_permalink(); ?>" rel="bookmark">
		<?php the_title(); ?>
	</a>
</h2>
<?php
the_content();
if ( comments_open() || get_comments_number() ) {
	comments_template();
}
