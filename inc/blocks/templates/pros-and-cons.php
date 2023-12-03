<?php

$check_list = null;
$cross_list = null;
$pros_and_cons_title = null;
$pros_and_cons_text = null;

if ($attributes['type'] == 'single') {
    $check_list = get_field('check_list');
    $cross_list = get_field('cross_list');
} else {
    $term_id = get_queried_object_id();
    $check_list = get_field('check_list', 'product_cat_' . get_queried_object_id());
    $cross_list = get_field('cross_list', 'product_cat_' . get_queried_object_id());
    $pros_and_cons_title = get_field('pros-and-cons-title', 'product_cat_' . $term_id);
    $pros_and_cons_text = get_field('pros-and-cons-text', 'product_cat_' . $term_id);
}
if (
    empty($check_list) &&
    empty($cross_list) &&
    empty($pros_and_cons_title) &&
    empty($pros_and_cons_text)
) {
    return null;
}

echo '<div ' . wp_kses_data(get_block_wrapper_attributes()) . '>';
    if (!empty($pros_and_cons_title)) {
        echo '<h2 class="wp-block-glimp-pros-and-cons__title">' . esc_html($pros_and_cons_title) . '</h2>';
    }
    
    if (!empty($pros_and_cons_text)) {
        echo '<p class="wp-block-glimp-pros-and-cons__text">' . esc_html($pros_and_cons_text) . '</p>';
    }

    if (!empty($check_list) && !empty($cross_list)) : ?>
        <div class="wp-block-glimp-pros-and-cons__contents">
            <div class="wp-block-glimp-pros-and-cons__list">
                <?php echo apply_filters('the_content', get_field('check_list')); ?>
            </div>
            <div class="wp-block-glimp-pros-and-cons__list">
                <?php echo apply_filters('the_content', get_field('cross_list')); ?>
            </div>
        </div>
    <?php endif;
echo '</div>';
