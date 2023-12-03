<?php

function woocommerce_ajax_add_to_cart() {
    $product_id = $_GET['product_id'];
    $variation_id = $_GET['variation_id'];
    $quantity = $_GET['quantity'];

    $variation = wc_get_product_variation_attributes($variation_id);
    $success = WC()->cart->add_to_cart($product_id, $quantity, $variation_id, $variation);

    if ($success) {
        $cart_item_count = WC()->cart->get_cart_contents_count();
        $response_data = [
            'message' => 'Product added to cart.',
            'cart_item_count' => $cart_item_count
        ];
        wp_send_json_success($response_data);
    } else {
        $error_message = "Failed to add product to cart! variation_id: $variation_id, product_id: $product_id";
        wp_send_json_error($error_message);
    }
    wp_die();
}


add_action('wp_ajax_woocommerce_ajax_add_to_cart', 'woocommerce_ajax_add_to_cart');
add_action('wp_ajax_nopriv_woocommerce_ajax_add_to_cart', 'woocommerce_ajax_add_to_cart');

