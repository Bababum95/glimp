<?php

global $product;

$product_id = $product->get_id();
$number = 0;
$attribute_values = wc_get_product_terms($product_id, 'pa_nic', array('fields' => 'names'));

if (empty($attribute_values)) {
    $attribute_values = wc_get_product_terms($product_id, 'pa_strength', array('fields' => 'names'));
}

if (!empty($attribute_values)) {
    foreach ($attribute_values as $value) {
        $matches = [];
        if (preg_match('/\d+(?:\.\d+)?(?=\s)/', $value, $matches)) {
            $number = floatval(str_replace(',', '.', $matches[0]));


        }
    }
}

if (!$number) {
    return;
}

echo '<div ' . wp_kses_data(get_block_wrapper_attributes()) . '><div class="wp-block-glimp-nikotin__content">';

if ($number >= 18) {
    echo '<img src="' . get_template_directory_uri() . '/assets/icons/danger.svg">
          <p class="wp-block-glimp-nikotin__text">
            Einordung nach CLP-Verordnung
            <strong>Gefahr! Enthält Nikotin</strong>
          </p>';
} elseif ($number < 18 && $number > 0) {
    echo '<img src="' . get_template_directory_uri() . '/assets/icons/achtung.jpg">
          <p class="wp-block-glimp-nikotin__text">
            Einordung nach CLP-Verordnung
            <strong>Achtung! Enthält Nikotin</strong>
          </p>';
}
echo  '</div>
        <span class="wp-block-glimp-nikotin__eighteen">
            <img src="' . get_template_directory_uri() . '/assets/icons/18.svg" />
        </span>
    </div>';