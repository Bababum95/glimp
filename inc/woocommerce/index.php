<?php

function mytheme_add_woocommerce_support() {
    add_theme_support( 'woocommerce' );
}

add_action( 'after_setup_theme', 'mytheme_add_woocommerce_support' );

require_once __DIR__ . '/breadcrumb.php';
require_once __DIR__ . '/custom-thumbnail-size.php';
require_once __DIR__ . '/custom-wc-placeholder-img-src.php';
require_once __DIR__ . '/product-additional-information.php';


require_once __DIR__ . '/components/badge.php';
require_once __DIR__ . '/components/product-name.php';
require_once __DIR__ . '/components/product-image.php';
require_once __DIR__ . '/components/add-to-favorites-button.php';
