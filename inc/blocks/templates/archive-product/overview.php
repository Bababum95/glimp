<?php

$term_id = get_queried_object_id();

$overview_title = get_field('overview-title', 'product_cat_' . $term_id);
$overview_text = get_field('overview-text', 'product_cat_' . $term_id);

if (empty($overview_title) && empty($overview_text)) {
    return null;
}

echo '<div ' . wp_kses_data(get_block_wrapper_attributes()) . '>';
if(!empty($overview_title)) {
    echo '<h2 class="wp-block-glimp-overview__title">' . esc_html($overview_title) . '</h2>';
}
if(!empty($overview_text)) {
    echo '<p class="wp-block-glimp-overview__text">' . esc_html($overview_text) . '</p>';
}
echo '</div>';