<?php

require_once __DIR__ . '/settings.php';
require_once __DIR__ . '/functions/index.php';

function create_glimp_block_init() {
    $blocks = [
        'marquee',
        'slider',
        'sidebar',
        'referral',
        'loader',
        'link-with-image',
        'faqs' => 'faqs',
        'account' => 'account',
        'all-posts' => 'all-posts',
        'breadcrumbs' => 'breadcrumbs',
        'favorites/button' => 'favorites/button',
        'favorites/products' => 'favorites/products',
        'pros-and-cons' => 'pros-and-cons',
        'product-cards/individual' => 'product-cards/individual',
        'product-cards/multiple' => 'product-cards/multiple',
        'page-card' => 'page-card',
        'front-page/bundles',
        'front-page/bundles/inner-blocks/simple-item',
        'front-page/bundles/inner-blocks/item-with-description',
        'front-page/store-information',
        'front-page/store-information/item',
        'front-page/top-pages',
        'archive-product/products' => 'archive-product/products',
        'archive-product/discovery' => 'archive-product/discovery',
        'archive-product/spectrum' => 'archive-product/spectrum',
        'archive-product/listing' => 'archive-product/listing',
        'archive-product/technical-features' => 'archive-product/technical-features',
        'archive-product/overview' => 'archive-product/overview',
        'archive-product/filters',
        'archive-product/filters-button',
        'archive-product/filters/inner-blocks/availability',
        'archive-product/filters/inner-blocks/attribute' => 'archive-product/filters-attribute',
        'archive-product/filters/inner-blocks/item',
        'single-product/tabs' => 'single-product/tabs',
        'single-product/tab',
        'single-product/add-to-favorites-button' => 'single-product/add-to-favorites-button',
        'single-product/quote' => 'single-product/quote',
        'single-product/carousel' => 'single-product/carousel',
        'single-product/upsells' => 'single-product/upsells',
        'single-product/comments' => 'single-product/comments',
        'single-product/related-products' => 'single-product/related-products',
        'single-product/info-with-emoji',
        'single-product/info-with-emoji/item' => 'single-product/info-with-emoji-item',
        'single-product/technical-information' => 'single-product/technical-information',
        'post/sidebar',
        'post/sidebar/inner-blocks/image-with-button',
        'post/wrapper' => 'post/wrapper',
        'post/share' => 'post/share',
        'post/social-actions-panel' => 'post/social-actions-panel',
        'post/related-posts' => 'post/related-posts',
    ];

    foreach ($blocks as $path => $template) {
        $dir = __DIR__ . '/build/' . (is_int($path) ? $template : $path);
        $args = is_int($path) ? [] : array(
            'render_callback' => function($attributes, $content, $block_instance) use ($template) {
                return render_callback_common($template, $attributes, $content, $block_instance);
            }
        );
    
        register_block_type($dir, $args);
    }
}

function render_callback_common($template, $attributes, $content, $block_instance) {
    ob_start();
    require __DIR__ . '/templates/' . $template . '.php';
    return ob_get_clean();
}

add_action('init', 'create_glimp_block_init');
