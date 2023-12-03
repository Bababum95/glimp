<?php
$term_id = get_queried_object_id();
$discovery_title = get_field('discovery-title', 'product_cat_' . $term_id);
$discovery_description_content = get_field('discovery-description', 'product_cat_' . $term_id);

if (empty($discovery_description_content)) {
    return;
}
?>
<div <?php echo wp_kses_data(get_block_wrapper_attributes()); ?>>
    <h2 class="wp-block-glimp-discovery__title">
        <?php echo esc_html($discovery_title); ?>
    </h2>
    <div class="wp-block-glimp-discovery__text">
        <?php echo apply_filters('the_content', $discovery_description_content); ?>
    </div>
</div>