<?php
global $product;
$product_id = $product->get_id();
$related_ids = wc_get_related_products($product_id);

if ( $related_ids ) {
    $related_products = array();
    foreach ($related_ids as $id) {
        $related_products[] = wc_get_product($id);
    }

    if ( !empty($related_products) ) :
        foreach ( $related_products as $related_product ) :
            $post_object = get_post( $related_product->get_id() );
            setup_postdata( $GLOBALS['post'] =& $post_object );
            get_template_part('/woocommerce/product-card');
        endforeach;
        wp_reset_postdata();
    endif;
}
