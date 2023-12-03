<?php

$post_id = get_the_ID();
$product_details_quote_text = get_field( 'product_details_quote_text', $post_id );
$product_details_quote_name = get_field( 'product_details_quote_name', $post_id );
$product_details_quote_title = get_field( 'product_details_quote_title', $post_id );

if ( empty( $product_details_quote_text ) ) {
    return;
}

?>

<div <?php echo wp_kses_data(get_block_wrapper_attributes()); ?>>
    <p class="wp-block-glimp-quote__text">
        <?php echo $product_details_quote_text; ?>
    </p>
    <div class="wp-block-glimp-quote__author">
        <?php echo $product_details_quote_name; ?>
        <br />
        <?php echo $product_details_quote_title; ?>
    </div>
</div>