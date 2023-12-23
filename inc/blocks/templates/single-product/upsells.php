<?php
global $product;

$upsell_ids = $product->get_upsell_ids();

if ($upsell_ids) {
?>
    <h2>Das könnte dir auch gefallen …</h2>
    <div class="wp-block-glimp-upsells">
        <div class="wp-block-glimp-upsells__wrapper">
            <?php
            foreach ($upsell_ids as $product_id) :
                render_product_card($product_id);
            endforeach;
            ?>
        </div>
    </div>
<?php
}
