<?php

function woocommerce_ajax_load_more_posts() {
    $page = isset($_GET['page']) ? intval($_GET['page']) : 1;
    $posts_per_page = get_option('posts_per_page');
    $offset = ($page - 1) * $posts_per_page;

    $args = array(
        'posts_per_page' => $posts_per_page,
        'offset'         => $offset,
    );

    $additional_posts = new WP_Query($args);

    ob_start();

    if ($additional_posts->have_posts()) {
        while ($additional_posts->have_posts()) {
            $additional_posts->the_post();
            echo render_page_card(get_the_ID());
        }
    } else {
        wp_send_json_error('No more posts to load');
    }

    $response['posts'] = ob_get_clean();
    $response['page'] = $page;

    wp_send_json_success($response);
}

add_action('wp_ajax_woocommerce_ajax_load_more_posts', 'woocommerce_ajax_load_more_posts');
add_action('wp_ajax_nopriv_woocommerce_ajax_load_more_posts', 'woocommerce_ajax_load_more_posts');
