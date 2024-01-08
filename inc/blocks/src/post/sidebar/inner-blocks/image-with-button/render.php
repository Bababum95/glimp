<?php

if (!$attributes['withProduct']) {
    echo $content;
    return;
}

$product_list = $attributes['productList'];
$product_html = '<div class="products-list">';

foreach ($product_list as $curent_product) {
    $product_id = (empty($curent_product['variation']) || $curent_product['variation'] === '0')
        ? $curent_product['id']
        : $curent_product['variation'];

    $post_object = get_post( $product_id );
    setup_postdata( $post_object );
    ob_start();
    get_template_part('/woocommerce/product-card/sidebar-card');
    $product_html .= ob_get_clean();
    wp_reset_postdata();
}
$product_html .= '</div>';

$content_with_products = str_replace('<div class="product-placeholder"></div>', $product_html, $content);
echo $content_with_products;