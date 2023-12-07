<?php

function woocommerce_ajax_add_page_like() {
    $post_id = isset($_GET['post_id']) ? intval($_GET['post_id']) : 0;
    $user_id = get_current_user_id();

    if ($post_id && $user_id) {
        $likes = get_post_meta($post_id, 'user_likes', true);

        if (!is_array($likes)) {
            $likes = array();
        }
        if (!in_array($user_id, $likes)) {
            $likes[] = $user_id;
            update_post_meta($post_id, 'user_likes', $likes);

            wp_send_json_success(array('likes_count' => count($likes)));
        } else {
            wp_send_json_success(array('likes_count' => count($likes)));
        }
    } else {
        wp_send_json_error('Ошибка запроса.');
    }

    wp_die();
}


add_action('wp_ajax_woocommerce_ajax_add_page_like', 'woocommerce_ajax_add_page_like');
add_action('wp_ajax_nopriv_woocommerce_ajax_add_page_like', 'woocommerce_ajax_add_page_like');


function woocommerce_ajax_remove_page_like() {
    $post_id = isset($_GET['post_id']) ? intval($_GET['post_id']) : 0;
    $user_id = get_current_user_id();

    if ($post_id && $user_id) {
        $likes = get_post_meta($post_id, 'user_likes', true);

        if (!is_array($likes)) {
            wp_send_json_success(array('likes_count' => 0));
            wp_die();
        }

        if (($key = array_search($user_id, $likes)) !== false) {
            unset($likes[$key]);
            $likes = array_values($likes);
            update_post_meta($post_id, 'user_likes', $likes);

            wp_send_json_success(array('likes_count' => count($likes)));
        } else {
            wp_send_json_success(array('likes_count' => count($likes)));
        }
    } else {
        wp_send_json_error('Ошибка запроса.');
    }

    wp_die();
}

add_action('wp_ajax_woocommerce_ajax_remove_page_like', 'woocommerce_ajax_remove_page_like');
add_action('wp_ajax_nopriv_woocommerce_ajax_remove_page_like', 'woocommerce_ajax_remove_page_like');
