<?php

function get_product_image( $product, $title ) {
    $image = $product->get_image(
        'woocommerce_thumbnail',
        array(
            'alt'         => $title,
            'data-testid' => 'product-image',
            'title'       => $title,
            'loading'     => 'lazy', 
            'onerror'     => "this.onerror=null;this.src='" . wc_placeholder_img_src() . "';",
        )
    );

    if (empty($image)) {
        $image = '<img
                    src="' . wc_placeholder_img_src() . '"
                    alt="' . esc_attr($title) . '"
                />';
    }

    return $image;
}