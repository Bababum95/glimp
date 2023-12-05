<?php

$id = $attributes['id'];
$variation = $attributes['variation']; 

if ( !empty($id) ) {
    $product = wc_get_product($id);

    if ($product && $product->is_type('variable') && $variation) {
        $variations_ids = $attributes['count'] == -1 ? $product->get_children() : $attributes['variationIds'];

        foreach ($variations_ids as $variation_id) {
            render_product_card($variation_id);
        }
    } else {
        render_product_card($id);
    }
}



