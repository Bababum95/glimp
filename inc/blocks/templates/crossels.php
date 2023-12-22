<?php

if (function_exists('WC') && is_callable(array(WC()->cart, 'get_cross_sells'))) {
    $cross_sell_ids = WC()->cart->get_cross_sells();
    
    if (!empty($cross_sell_ids)) {
        echo $content;
    }
}