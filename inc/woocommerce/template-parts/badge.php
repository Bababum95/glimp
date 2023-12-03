<?php
function render_badges( $product ) {
    if ( empty( $product ) ) {
        return null;
    }

    $product_id  = $product->is_type('variation') ? $product->get_parent_id() : $product->get_id();
    $is_on_sale   = $product->is_on_sale();
    $out_of_stock = !$product->is_in_stock();
    $nikotinfrai  = has_term('einweg-e-zigarette-ohne-nikotin', 'product_tag', $product_id );
    
    if (!$is_on_sale && !$out_of_stock && !$nikotinfrai) {
        return null;
    }

    $output  = '<div class="wp-block-woocommerce-product-badge">';

    if ( $nikotinfrai ) {
        $output .= '<span class="wc-block-components-product-badge__nikotinfrai"></span>';
    }

    if ( $is_on_sale && !$out_of_stock ) {
        $output .= '<span class="wc-block-components-product-badge__sale"></span>';
    }

    if ( $out_of_stock ) {
        $output .= '<span class="wc-block-components-product-badge__out-of-stock"></span>';
    }

    $output .= '</div>';

    return $output;
}