<?php

global $product;

if (empty($product) || !$product->is_visible()) {
    return;
}

$title = get_product_name($product);
$is_variation = $product->is_type('variation');
$id = $product->get_id();
$parent_id = $product->get_parent_id();
$product_permalink = $is_variation ? get_permalink($parent_id) : get_permalink($id);
$rating = $product->get_average_rating();
$out_of_stock = !$product->is_in_stock();
$image = get_product_image($product, $title);

$button_classes = 'glimp-product-card__button';
$button_content = '+';
$button_data = '';
$button_action = 'add-to-cart';

if($out_of_stock) {
    $button_classes .= ' out-of-stock';
    $button_action = 'permalink';
}
if($is_variation) {
    $button_data = 'data-variation="' . $id . '" data-product="' . $parent_id . '"';
} else {
    $button_data = 'data-product="' . $id . '"';
}
if($product->is_type('variable')) {
    $button_content = '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="2" viewBox="0 0 8 2" fill="none">
                            <path d="M2 1L-7.45058e-09 1" stroke="#9C48F7" stroke-width="1.5"/>
                            <path d="M5 1L3 1" stroke="#9C48F7" stroke-width="1.5"/>
                            <path d="M8 1L6 1" stroke="#9C48F7" stroke-width="1.5"/>
                        </svg>';
    $button_action = 'permalink';
}

$button_data .= ' data-action="' . $button_action . '"';
$button = '<button class="' . $button_classes . '"' . $button_data . '>' . $button_content . '</button>';

?>

<article class="glimp-product-card">
    <a
        href="<?php echo esc_url($product_permalink); ?>"
        class="glimp-product-card__link"
        title="<?php echo esc_attr($title); ?>"
    >
        <?php if (!empty($image)) : ?>
            <div class="glimp-product-card__image">
                <?php echo $image; ?>
            </div>
        <?php endif; ?>
        <div class="glimp-product-card__info">
            <div class="glimp-product-card__top">
                <?php if ( !empty($rating) ) : ?>
                    <span
                        class="glimp-product-card__rating"
                        data-rating="<?php echo number_format($rating, 1); ?>"
                    >
                    </span>
                <?php endif;
                echo render_add_to_favorites_button($id);
                ?>
            </div>
            <?php echo render_badges($product); ?>
            <h3 class="glimp-product-card__title">
                <?php echo esc_html($title); ?> 
            </h3>
            <div class="glimp-product-card__bottom">
                <span class="glimp-product-card__price">
                    <?php echo $product->get_price_html(); ?>
                </span>
                <?php echo $button; ?>
            </div>
        </div>
    </a>
</article>