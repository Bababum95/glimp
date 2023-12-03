<?php

$id = $attributes['id'];
$variation = $attributes['variation']; 
$limit = $attributes['count'];

if ( !empty($id) ) {
    $product = wc_get_product($id);

    if ($product && $product->is_type('variable') && $variation) {
        $variations_ids = $product->get_children();

        if ($limit > 0) {
            $variations_ids = array_slice($variations_ids, 0, $limit);
        }

        foreach ($variations_ids as $variation_id) {
            render_product_card($variation_id);
        }
    } else {
        render_product_card($id);
    }
}



