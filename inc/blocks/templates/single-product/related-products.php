<?php
global $product;
$product_id = $product->get_id();
$related_ids = wc_get_related_products($product_id);
$product_ids = array();

foreach ($related_ids as $id) {
    $related_product = wc_get_product($id);
    if ($related_product && $related_product->is_type('variable')) {
        $variations_ids = $related_product->get_children();
        $product_ids = array_merge($product_ids, $variations_ids);
    } else {
        $product_ids[] = $id;
    }
}

if ( !empty($product_ids) ) {
    $product_ids = array_unique($product_ids);
    shuffle($product_ids);
    $product_ids = array_slice($product_ids, 0, 12);
    ?>
    <h2>Ähnliche Produkte</h2>
    <div class="wp-block-glimp-upsells">
        <div class="wp-block-glimp-upsells__wrapper">
            <?php
                foreach ($product_ids as $card_id) {
                    render_product_card($card_id);
                }
            ?>
        </div>
    </div>
<?php
}
