<?php

if (function_exists('WC') && is_callable(array(WC()->cart, 'get_cross_sells'))) {
    $cross_sell_ids = WC()->cart->get_cross_sells();

    if (!empty($cross_sell_ids)) {
        foreach ($cross_sell_ids as $product_id) :
            render_product_card($product_id);
        endforeach;
    }
}
