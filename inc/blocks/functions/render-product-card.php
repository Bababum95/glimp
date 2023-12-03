<?php

function render_product_card( $product_id ) {
    $post_object = get_post( $product_id );
    setup_postdata( $post_object );
    get_template_part('/woocommerce/product-card/simple-card');
    wp_reset_postdata();
}

function render_product_big_card( $product_id ) {
    $post_object = get_post( $product_id );
    setup_postdata( $post_object );
    get_template_part('/woocommerce/product-card/big-card');
    wp_reset_postdata();
}


