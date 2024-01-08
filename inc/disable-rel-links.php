<?php

function the_seo_framework_remove_rel_links ( $next ) {
   return '';
}

add_filter( 'the_seo_framework_paged_url_output_next', 'the_seo_framework_remove_rel_links' );
add_filter( 'the_seo_framework_paged_url_output_prev', 'the_seo_framework_remove_rel_links' );

remove_action( 'wp_head', 'feed_links_extra', 3 );
remove_action( 'wp_head', 'feed_links', 2 );