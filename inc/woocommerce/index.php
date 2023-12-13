<?php

function mytheme_add_woocommerce_support() {
    add_theme_support( 'woocommerce' );
}

add_action( 'after_setup_theme', 'mytheme_add_woocommerce_support' );

require_once __DIR__ . '/custom-thumbnail-size.php';
require_once __DIR__ . '/product-additional-information.php';
require_once __DIR__ . '/template-parts/badge.php';
require_once __DIR__ . '/template-parts/add-to-favorites-button.php';
