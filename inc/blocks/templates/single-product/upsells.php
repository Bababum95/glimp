<?php
global $product;

$upsell_ids = $product->get_upsell_ids();

if ( $upsell_ids ) {
    $upsells = array_map( 'wc_get_product', $upsell_ids );

    if ( $upsells ) :
        foreach ( $upsells as $upsell ) :
            $post_object = get_post( $upsell->get_id() );
            setup_postdata( $GLOBALS['post'] =& $post_object );
            get_template_part('/woocommerce/product-card');
        endforeach;
        wp_reset_postdata();
    endif;
}
