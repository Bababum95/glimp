<?php

add_filter( 'woocommerce_display_product_attributes', 'custom_product_additional_information', 10, 2 );
function custom_product_additional_information( $product_attributes, $product ) {
    global $product;

    $sku = $product->get_sku();

    // Check if SKU exists and add it as a product attribute
    if (!empty($sku)) {
        $product_attributes['sku'] = array(
            'label' => __('SKU', 'woocommerce'),
            'value' => esc_html($sku),
        );
    }

    return $product_attributes;
}
