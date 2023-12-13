<?php

$attribute_slug = $attributes['slug'];
$image = $attributes['emoji'];
$heading = $attributes['label'];
$product = wc_get_product(get_the_ID());
$attributes = $product->get_attributes();

foreach ($attributes as $attribute) :
    if ($attribute->get_name() === $attribute_slug) :
        $attribute_value = $product->get_attribute($attribute->get_name());
        ?>

        <div class="wp-block-glimp-info-with-emoji-item">
            <span class="wp-block-glimp-info-with-emoji-item__image">
                <?php echo $image; ?>
            </span>
            <p class="wp-block-glimp-info-with-emoji-item__text">
                <?php echo $heading; ?>
                <strong>
                    <?php echo $attribute_value; ?>
                </strong>
            </p>
        </div>
        <?php
        break;
    endif;
endforeach;