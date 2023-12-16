<?php

global $product;

if (empty($product) || !$product->is_visible()) {
    return;
}

$title = get_product_name($product);
$is_variation = $product->is_type('variation');
$id = $product->get_id();
$parent_id = $product->get_parent_id();
$product_attributes = $product->get_attributes();
$product_permalink = $is_variation ? get_permalink($parent_id) : get_permalink($id);
$rating = $product->get_average_rating();
$out_of_stock = !$product->is_in_stock();
$image = get_product_image($product, $title);

$button_classes = 'glimp-product-big-card__button';
$button_data = '';
$button_action = 'add-to-cart';

if ($out_of_stock) {
    $button_classes .= ' out-of-stock';
    $button_action = 'permalink';
}
if ($is_variation) {
    $button_data = 'data-variation="' . $id . '" data-product="' . $parent_id . '"';
} else {
    $button_data = 'data-product="' . $id . '"';
}

$button_data .= ' data-action="' . $button_action . '"';
$button = '<button class="' . $button_classes . '"' . $button_data . '>In den Warenkorb</button>';


$table = '<table class="glimp-product-big-card__table">';
$counter = 0;

foreach ($args as $attribute_taxonomy) {
    if ($counter == 4) {
        $table .= '</table><table class="glimp-product-big-card__table">';
        $counter = 0;
    }
    $attribute_label = wc_attribute_label($attribute_taxonomy);
    if (isset($product_attributes[$attribute_taxonomy])) {
        $attribute_details = $product_attributes[$attribute_taxonomy];
        $value = array();
        if ($attribute_details->is_taxonomy()) {
            $terms = wp_get_post_terms($id, $attribute_taxonomy);
            foreach ($terms as $term) {
                $value[] = $term->name;
            }
        } else {
            $value = $attribute_details->get_options();
        }
        $table .= '<tr>';
        $table .= '<td class="glimp-product-big-card__table-label">' . esc_html($attribute_label) . '</td>';
        $table .= '<td class="glimp-product-big-card__table-value">' . esc_html(implode(', ', $value)) . '</td>';
        $table .= '</tr>';

        $counter++;
    }
}

$table .= '</table>';


?>

<article class="glimp-product-big-card">
    <a href="<?php echo esc_url($product_permalink); ?>" class="glimp-product-big-card__link" title="<?php echo esc_attr($title); ?>">
        <?php if (!empty($image)) : ?>
            <div class="glimp-product-big-card__image">
                <?php echo $image; ?>
            </div>
        <?php endif; ?>
        <div class="glimp-product-big-card__info">
            <?php if (!empty($rating)) : ?>
                <span class="glimp-product-big-card__rating" data-rating="<?php echo number_format($rating, 1); ?>">
                </span>
            <?php endif;
            echo render_add_to_favorites_button($id);
            ?>
            <h3 class="glimp-product-big-card__title">
                <?php echo esc_html($title); ?>
            </h3>
            <?php echo render_badges($product); ?>
            <div class="glimp-product-big-card__main">
                <div class="glimp-product-big-card__left">
                    <?php echo $table; ?>
                </div>
                <div class="glimp-product-big-card__right">
                    <span class="glimp-product-big-card__price">
                        <?php echo $product->get_price_html(); ?>
                    </span>
                    <?php echo $button; ?>
                </div>
            </div>
        </div>
    </a>
</article>