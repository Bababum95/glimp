<?php

$technical_features_content = get_field('technical-features-content', 'product_cat_' . get_queried_object_id());

if (!empty($technical_features_content)) {
    echo '<div ' . wp_kses_data(get_block_wrapper_attributes()) . '>' . apply_filters('the_content', $technical_features_content) . '</div>';
}