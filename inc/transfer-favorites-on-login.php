<?php

add_action('wp_login', 'transfer_favorites_on_login', 10, 2);

function transfer_favorites_on_login($user_login, $user) {
    if (session_id() == '' || !isset($_SESSION)) {
        session_start();
    }

    if (isset($_SESSION['user_favorites']) && !empty($_SESSION['user_favorites'])) {
        $user_id = $user->ID;
        $session_favorites = $_SESSION['user_favorites'];
        $user_favorites = get_user_meta($user_id, 'user_favorites', true) ?: array();
        $updated_favorites = array_unique(array_merge($user_favorites, $session_favorites));
        update_user_meta($user_id, 'user_favorites', $updated_favorites);
        unset($_SESSION['user_favorites']);
    }
}
