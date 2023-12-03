<?php
function woocommerce_ajax_add_to_favorites() {
    $product_id = isset($_GET['product_id']) ? intval($_GET['product_id']) : 0;

    if (!$product_id) {
        wp_send_json_error('Неверный ID продукта.');
        return;
    }

    $user_id = get_current_user_id();

    if ($user_id) {
        $favorites = get_user_meta($user_id, 'user_favorites', true) ?: array();
        if (!in_array($product_id, $favorites)) {
            $favorites[] = $product_id;
            update_user_meta($user_id, 'user_favorites', $favorites);
        }
    } else {
        if (!session_id()) {
            session_start();
        }
        $_SESSION['user_favorites'] = $_SESSION['user_favorites'] ?? array();
        if (!in_array($product_id, $_SESSION['user_favorites'])) {
            $_SESSION['user_favorites'][] = $product_id;
        }
        $favorites = $_SESSION['user_favorites'];
    }

    wp_send_json_success($favorites);
}

add_action('wp_ajax_woocommerce_ajax_add_to_favorites', 'woocommerce_ajax_add_to_favorites');
add_action('wp_ajax_nopriv_woocommerce_ajax_add_to_favorites', 'woocommerce_ajax_add_to_favorites');


function woocommerce_ajax_remove_from_favorites() {
    $product_id = isset($_GET['product_id']) ? intval($_GET['product_id']) : 0;

    if (!$product_id) {
        wp_send_json_error('Неверный ID продукта.');
        return;
    }

    $user_id = get_current_user_id();

    if ($user_id) {
        $favorites = get_user_meta($user_id, 'user_favorites', true) ?: array();
        if (($key = array_search($product_id, $favorites)) !== false) {
            unset($favorites[$key]);
            update_user_meta($user_id, 'user_favorites', $favorites);
        }
    } else {
        if (!session_id()) {
            session_start();
        }
        $_SESSION['user_favorites'] = $_SESSION['user_favorites'] ?? array();
        if (($key = array_search($product_id, $_SESSION['user_favorites'])) !== false) {
            unset($_SESSION['user_favorites'][$key]);
        }
        $favorites = $_SESSION['user_favorites'];
    }

    wp_send_json_success($favorites);
}

add_action('wp_ajax_woocommerce_ajax_remove_from_favorites', 'woocommerce_ajax_remove_from_favorites');
add_action('wp_ajax_nopriv_woocommerce_ajax_remove_from_favorites', 'woocommerce_ajax_remove_from_favorites');


function woocommerce_ajax_get_favorites() {
    $user_id = get_current_user_id();
    if ($user_id) {
        $favorites = get_user_meta($user_id, 'user_favorites', true) ?: array();
    } else {
        if (!session_id()) {
            session_start();
        }
        $favorites = $_SESSION['user_favorites'] ?? array();
    }

    wp_send_json_success($favorites);
}

add_action('wp_ajax_woocommerce_ajax_get_favorites', 'woocommerce_ajax_get_favorites');
add_action('wp_ajax_nopriv_woocommerce_ajax_get_favorites', 'woocommerce_ajax_get_favorites');
