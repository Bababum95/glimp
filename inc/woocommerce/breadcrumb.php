<?php

add_filter('woocommerce_breadcrumb_defaults', 'change_breadcrumb_text');

function change_breadcrumb_text($defaults) {
    $defaults['home'] = 'glimp.de';
    return $defaults;
}
