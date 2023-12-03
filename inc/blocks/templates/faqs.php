<?php

$faqs = $attributes['type'] == 'single' ? get_field('faqs')
    : get_field('faqs', 'product_cat_' . get_queried_object_id());


if(empty($faqs)) {
    return null;
}

echo '<div ' . wp_kses_data(get_block_wrapper_attributes()) . '>' . apply_filters('the_content', $faqs) . '</div>';