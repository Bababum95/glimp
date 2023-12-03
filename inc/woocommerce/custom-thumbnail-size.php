<?php

function custom_thumbnail_size() {
    delete_option( 'woocommerce_thumbnail_image_width' );
    delete_option( 'woocommerce_thumbnail_image_height' );
    delete_option( 'woocommerce_thumbnail_cropping' );
    add_image_size( 'woocommerce_thumbnail', 300, 300, true );
    update_option( 'woocommerce_thumbnail_image_width', 300 );
    update_option( 'woocommerce_thumbnail_image_height', 300 );
    update_option( 'woocommerce_thumbnail_cropping', '1:1' );
}

add_action( 'after_setup_theme', 'custom_thumbnail_size' );

