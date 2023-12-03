<?php global $product; ?>

<div <?php echo wp_kses_data(get_block_wrapper_attributes()); ?>>
    <?php do_action('woocommerce_product_additional_information', $product); ?>
</div>