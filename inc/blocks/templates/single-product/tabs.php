<?php
global $product;

$defaultDiv = '<div class="wp-block-glimp-tabs__navigator">';
$tabs_content = $defaultDiv
    . '<div class="wp-block-glimp-tabs__right">
        <div class="wp-block-glimp-tabs__price-wrapper">
            <span class="wp-block-glimp-tabs__price">' . $product->get_price_html() . '</span>
            <span class="wp-block-glimp-tabs__tax">inkl. MwSt. zzgl. Versandkosten</span>
        </div>
        <button class="wp-block-glimp-tabs__add-to-cart">In den Warenkorb</button>
      </div>';

$block_content = str_replace($defaultDiv, $tabs_content, $content);
echo $block_content;