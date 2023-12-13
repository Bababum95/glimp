<?php
global $product;
$product_id = $product->get_id();
$related_ids = wc_get_related_products($product_id);

if ($related_ids) {
?>
    <div class="wp-block-glimp-upsells">
        <div class="wp-block-glimp-upsells__wrapper">
            <?php
            foreach ($related_ids as $id) {
                render_product_card($id);
            }
            ?>
        </div>
    </div>
<?php
}
