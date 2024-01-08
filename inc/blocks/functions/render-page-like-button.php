<?php

function render_page_like_button($post_id, $button_class = 'wp-block-glimp-page-card__likes') {
    $user_id = get_current_user_id();
    $likes = get_post_meta($post_id, 'user_likes', true) ?: array();
    $is_liked = in_array($user_id, $likes);
    $count = count($likes);
    $button_action = $user_id ? 'like' : 'login';
    $button_classes = $button_class . ($is_liked ? ' active' : '');

    return sprintf(
        '<button class="%s" data-post-id="%d" data-action="%s" aria-label="add to favorites">%d</button>',
        esc_attr($button_classes),
        esc_attr($post_id),
        esc_attr($button_action),
        esc_html($count)
    );
}
