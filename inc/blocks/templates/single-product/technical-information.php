<?php
global $product;
$ingredients = get_field('ingredients');
?>

<div <?php echo wp_kses_data(get_block_wrapper_attributes()); ?>>
    <?php if(!$product->is_type('simple')) {
        wc_display_product_attributes($product);
    } ?>
    <?php if (!empty($ingredients)) :
        echo '<p class="wp-block-glimp-technical-information__title">Inhaltsstoffe</p>';
        echo '<div class="wp-block-glimp-technical-information__ingredients">';
        echo $ingredients;
        echo '</div>';
        echo '<img src="'
                . get_template_directory_uri() . '/assets/icons/ingredients.png"
                alt="Inhaltsstoffe"
                class="wp-block-glimp-technical-information__image"
             >';
    endif;
    ?>
</div>