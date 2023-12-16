<?php


function custom_wc_placeholder_img_src($src) {
    $custom_placeholder_img = get_template_directory_uri() . '/assets/images/placeholder.jpg';
    
    return $custom_placeholder_img;
}

add_filter('woocommerce_placeholder_img_src', 'custom_wc_placeholder_img_src');
