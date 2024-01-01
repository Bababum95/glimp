<?php

add_filter('woocommerce_breadcrumb_defaults', 'change_breadcrumb_home');

function change_breadcrumb_home($defaults) {
    $defaults['home'] = 'glimp.de';
    return $defaults;
}
