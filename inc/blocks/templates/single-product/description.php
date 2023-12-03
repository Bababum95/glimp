<?php $product_details = get_field('product_details'); ?>

<div class="wp-block-glimp-product-description">
<?php if (empty(apply_filters('the_content', $product_details))) {
    the_content();
} else {
    echo apply_filters('the_content', $product_details);
}
?>
</div>