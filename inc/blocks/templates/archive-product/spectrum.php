<?php

$spectrum_content = get_field('spectrum-content', 'product_cat_' . get_queried_object_id());

if (!empty($spectrum_content)) {
    echo '<div ' . wp_kses_data(get_block_wrapper_attributes()) . '>' . apply_filters('the_content', $spectrum_content) . '</div>';
}