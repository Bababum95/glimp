<?php

$listing_content = get_field('listing-content', 'product_cat_' . get_queried_object_id());

if (!empty($listing_content)) {
    echo '<div ' . wp_kses_data(get_block_wrapper_attributes()) . '>' . apply_filters('the_content', $listing_content) . '</div>';
}